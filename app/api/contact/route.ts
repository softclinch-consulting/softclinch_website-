import { NextResponse } from "next/server";
import {
  normalizeContactFormData,
  validateContactFormData,
  type ContactFormData,
  type ContactSubmissionInput,
} from "@/lib/contact-form";
import {
  getBrevoAdminRecipient,
  getBrevoAdminTemplateId,
  getBrevoFormConfig,
  getBrevoSender,
  postToBrevo,
  getRequiredEnv,
} from "@/lib/brevo";
import { buildCustomerReplyEmailContent } from "@/lib/contact-email-template";

type SupportedFormId = 1 | 23;

type BrevoRouteError = Error & {
  missingEnv?: string;
  statusCode?: number;
  body?: unknown;
  rawResponse?: {
    headers?: Record<string, string | string[] | undefined>;
  };
};

type ReferenceSubmissionInput = {
  formId?: number;
  FIRSTNAME?: string;
  LASTNAME?: string;
  email?: string;
  phone?: string;
  companyName?: string;
  industry?: string;
  service?: string;
  timeline?: string;
  budget?: string;
  message?: string;
  website?: string;
  formStartedAt?: number;
  debugEmailMode?: "template" | "html";
};

type ParsedSubmission = {
  formId: SupportedFormId;
  payload: ContactFormData;
  captchaToken: string;
  extras: {
    firstName: string;
    lastName: string;
    industry: string;
    service: string;
    timeline: string;
    budget: string;
  };
  website?: string;
  formStartedAt?: number;
  debugEmailMode: "template" | "html";
};

type StepResult = {
  ok: boolean;
  mode?: "template" | "html";
  messageId?: string;
  warning?: string;
  error?: string;
  details?: Record<string, unknown>;
};

type RecaptchaVerificationResponse = {
  success: boolean;
  challenge_ts?: string;
  hostname?: string;
  "error-codes"?: string[];
};

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const MAX_SUBMISSIONS_PER_WINDOW = 5;
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000;
const DUPLICATE_WINDOW_MS = 5 * 60 * 1000;
const MIN_FORM_FILL_MS = 3000;

const rateLimitStore = new Map<string, number[]>();
const duplicateSubmissionStore = new Map<string, number>();

function isSupportedFormId(value: number): value is SupportedFormId {
  return value === 1 || value === 23;
}

function normalizeOptionalValue(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function maskEmailAddress(value: string) {
  const [localPart = "", domain = ""] = value.split("@");
  if (!localPart || !domain) {
    return value;
  }

  const visibleLocalPart =
    localPart.length <= 2
      ? `${localPart[0] ?? ""}*`
      : `${localPart.slice(0, 2)}***`;

  return `${visibleLocalPart}@${domain}`;
}

function summarizeSubmissionBody(input: ContactSubmissionInput & ReferenceSubmissionInput) {
  return {
    formId: typeof input.formId === "number" ? input.formId : 1,
    name: normalizeOptionalValue(input.name),
    email: maskEmailAddress(normalizeOptionalValue(input.email)),
    phone: normalizeOptionalValue(input.phone),
    company: normalizeOptionalValue(input.company ?? input.companyName),
    service: normalizeOptionalValue(input.service),
    messageLength: normalizeOptionalValue(input.message).length,
    hasCaptchaToken: Boolean(normalizeOptionalValue(input.captchaToken)),
    websiteLength: normalizeOptionalValue(input.website).length,
    formStartedAt:
      typeof input.formStartedAt === "number" ? input.formStartedAt : undefined,
    debugEmailMode: input.debugEmailMode === "html" ? "html" : "template",
  };
}

function splitContactName(name: string) {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  return {
    firstName: parts[0] || name,
    lastName: parts.slice(1).join(" "),
  };
}

function parseSubmissionInput(
  input: ContactSubmissionInput & ReferenceSubmissionInput
): ParsedSubmission | null {
  const rawFormId = typeof input.formId === "number" ? input.formId : 1;
  if (!isSupportedFormId(rawFormId)) {
    return null;
  }

  const firstName = normalizeOptionalValue(input.FIRSTNAME);
  const lastName = normalizeOptionalValue(input.LASTNAME);
  const combinedName = [firstName, lastName].filter(Boolean).join(" ");

  const payload = normalizeContactFormData({
    name: input.name ?? combinedName,
    company: input.company ?? input.companyName,
    email: input.email,
    phone: input.phone,
    service: input.service,
    message: input.message,
  });

  const resolvedName = combinedName || payload.name;
  const splitName = splitContactName(resolvedName);

  return {
    formId: rawFormId,
    payload: {
      ...payload,
      name: resolvedName,
    },
    captchaToken: normalizeOptionalValue(input.captchaToken),
    extras: {
      firstName: splitName.firstName,
      lastName: splitName.lastName,
      industry: normalizeOptionalValue(input.industry),
      service: normalizeOptionalValue(input.service),
      timeline: normalizeOptionalValue(input.timeline),
      budget: normalizeOptionalValue(input.budget),
    },
    website: normalizeOptionalValue(input.website),
    formStartedAt:
      typeof input.formStartedAt === "number" ? input.formStartedAt : undefined,
    debugEmailMode: input.debugEmailMode === "html" ? "html" : "template",
  };
}

async function verifyRecaptchaToken(token: string, clientIp?: string) {
  const secret = getRequiredEnv("RECAPTCHA_SECRET_KEY");
  const params = new URLSearchParams({
    secret,
    response: token,
  });

  if (clientIp && clientIp !== "unknown") {
    params.append("remoteip", clientIp);
  }

  const response = await fetch("https://www.google.com/recaptcha/api/siteverify", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: params.toString(),
  });

  if (!response.ok) {
    throw new Error(`reCAPTCHA verification request failed with status ${response.status}.`);
  }

  return (await response.json()) as RecaptchaVerificationResponse;
}

function getClientIp(headers: Headers) {
  const forwardedFor = headers.get("x-forwarded-for");
  if (forwardedFor) {
    return forwardedFor.split(",")[0]?.trim() || "unknown";
  }

  return headers.get("x-real-ip")?.trim() || "unknown";
}

function enforceRateLimit(clientIp: string) {
  const now = Date.now();
  const recentEntries = (rateLimitStore.get(clientIp) || []).filter(
    (timestamp) => now - timestamp < RATE_LIMIT_WINDOW_MS
  );

  if (recentEntries.length >= MAX_SUBMISSIONS_PER_WINDOW) {
    return false;
  }

  recentEntries.push(now);
  rateLimitStore.set(clientIp, recentEntries);
  return true;
}

function buildDuplicateKey(formId: SupportedFormId, payload: ContactFormData) {
  return [
    String(formId),
    payload.email,
    payload.phone.replace(/\s+/g, ""),
    payload.message.replace(/\s+/g, " ").toLowerCase(),
  ].join("|");
}

function isDuplicateSubmission(formId: SupportedFormId, payload: ContactFormData) {
  const now = Date.now();

  for (const [key, timestamp] of duplicateSubmissionStore.entries()) {
    if (now - timestamp >= DUPLICATE_WINDOW_MS) {
      duplicateSubmissionStore.delete(key);
    }
  }

  const duplicateKey = buildDuplicateKey(formId, payload);
  const lastSeenAt = duplicateSubmissionStore.get(duplicateKey);

  if (lastSeenAt && now - lastSeenAt < DUPLICATE_WINDOW_MS) {
    return true;
  }

  duplicateSubmissionStore.set(duplicateKey, now);
  return false;
}

function getValidationErrorResponse(
  traceId: string,
  input: Partial<ContactFormData>
) {
  const { errors } = validateContactFormData(input);
  return NextResponse.json(
    {
      success: false,
      traceId,
      error: "Please correct the highlighted fields and try again.",
      fieldErrors: errors,
    },
    { status: 400 }
  );
}

function logStep(traceId: string, step: string, data?: Record<string, unknown>) {
  console.info(`[contact:${traceId}] ${step}`, data || {});
}

function logStepError(traceId: string, step: string, error: unknown) {
  console.error(`[contact:${traceId}] ${step}`, serializeError(error));
}

function serializeError(error: unknown) {
  const typedError = error as BrevoRouteError;
  const responseBody =
    typedError.body && typeof typedError.body === "object"
      ? typedError.body
      : undefined;

  return {
    name: typedError?.name,
    message: typedError?.message,
    statusCode: typedError?.statusCode,
    body: responseBody,
    headers: typedError?.rawResponse?.headers,
    stack: typedError?.stack,
  };
}

function getBrevoErrorMessage(error: unknown) {
  const typedError = error as BrevoRouteError;
  if (typedError.body && typeof typedError.body === "object") {
    const message = (typedError.body as { message?: unknown }).message;
    const code = (typedError.body as { code?: unknown }).code;

    if (typeof code === "string" && typeof message === "string") {
      return `${code}: ${message}`;
    }

    if (typeof message === "string") {
      return message;
    }
  }

  return typedError.message || "Unknown Brevo error.";
}

function isIpAllowlistError(error: unknown) {
  const typedError = error as BrevoRouteError;
  return (
    typedError.statusCode === 401 &&
    JSON.stringify(typedError.body || typedError.message || "").includes(
      "unrecognised IP address"
    )
  );
}

function isPhoneDuplicateError(error: unknown, phoneAttributeName: string) {
  const typedError = error as BrevoRouteError;
  if (typedError.statusCode !== 400 || !typedError.body || typeof typedError.body !== "object") {
    return false;
  }

  const body = typedError.body as {
    code?: unknown;
    metadata?: { duplicate_identifiers?: unknown };
  };
  const duplicateIdentifiers = Array.isArray(body.metadata?.duplicate_identifiers)
    ? body.metadata?.duplicate_identifiers
    : [];

  return (
    body.code === "duplicate_parameter" &&
    duplicateIdentifiers.some(
      (value) =>
        typeof value === "string" &&
        value.toUpperCase() === phoneAttributeName.toUpperCase()
    )
  );
}

function isInvalidContactAttributeError(error: unknown) {
  const typedError = error as BrevoRouteError;
  const serializedBody = JSON.stringify(typedError.body || "");

  return (
    typedError.statusCode === 400 &&
    /attribute|invalid_parameter|duplicate_parameter|unknown/i.test(
      `${typedError.message} ${serializedBody}`
    )
  );
}

function buildContactAttributes(submission: ParsedSubmission, includePhone: boolean) {
  const companyAttr = process.env.BREVO_COMPANY_ATTRIBUTE?.trim() || "COMPANY";
  const phoneAttr = process.env.BREVO_PHONE_ATTRIBUTE?.trim() || "SMS";
  const messageAttr = process.env.BREVO_MESSAGE_ATTRIBUTE?.trim() || "MESSAGE";
  const industryAttr = process.env.BREVO_INDUSTRY_ATTRIBUTE?.trim() || "INDUSTRY";
  const serviceAttr = process.env.BREVO_SERVICE_ATTRIBUTE?.trim() || "SERVICE";
  const timelineAttr = process.env.BREVO_TIMELINE_ATTRIBUTE?.trim() || "TIMELINE";
  const budgetAttr = process.env.BREVO_BUDGET_ATTRIBUTE?.trim() || "BUDGET";
  const { payload, extras, formId } = submission;

  return {
    phoneAttr,
    attributes: {
      FIRSTNAME: extras.firstName,
      ...(extras.lastName ? { LASTNAME: extras.lastName } : {}),
      ...(payload.company ? { [companyAttr]: payload.company } : {}),
      ...(includePhone && payload.phone ? { [phoneAttr]: payload.phone } : {}),
      ...(payload.message ? { [messageAttr]: payload.message } : {}),
      ...(extras.service ? { [serviceAttr]: extras.service } : {}),
      ...(formId === 23 && extras.industry ? { [industryAttr]: extras.industry } : {}),
      ...(formId === 23 && extras.timeline ? { [timelineAttr]: extras.timeline } : {}),
      ...(formId === 23 && extras.budget ? { [budgetAttr]: extras.budget } : {}),
    },
  };
}

async function upsertBrevoContact(submission: ParsedSubmission, traceId: string) {
  const formConfig = getBrevoFormConfig(submission.formId);
  const firstAttempt = buildContactAttributes(submission, true);
  const minimalAttributes = {
    FIRSTNAME: submission.extras.firstName,
    ...(submission.extras.lastName ? { LASTNAME: submission.extras.lastName } : {}),
  };

  try {
    logStep(traceId, "brevo.contact.upsert.start", {
      email: submission.payload.email,
      formId: submission.formId,
      listId: formConfig.listId,
      includesPhoneAttribute: true,
    });

    const response = await postToBrevo<{ id?: number }>("/contacts", {
      email: submission.payload.email,
      listIds: [formConfig.listId],
      updateEnabled: true,
      attributes: firstAttempt.attributes,
    });

    logStep(traceId, "brevo.contact.upsert.success", {
      email: submission.payload.email,
      contactId: response?.id,
      includesPhoneAttribute: true,
    });

    return {
      ok: true,
      warning: undefined,
    } satisfies StepResult;
  } catch (error) {
    if (!isPhoneDuplicateError(error, firstAttempt.phoneAttr)) {
      if (!isInvalidContactAttributeError(error)) {
        throw error;
      }

      logStep(traceId, "brevo.contact.upsert.retry_minimal_attributes", {
        email: submission.payload.email,
        reason: getBrevoErrorMessage(error),
      });

      const response = await postToBrevo<{ id?: number }>("/contacts", {
        email: submission.payload.email,
        listIds: [formConfig.listId],
        updateEnabled: true,
        attributes: minimalAttributes,
      });

      logStep(traceId, "brevo.contact.upsert.success_minimal_attributes", {
        email: submission.payload.email,
        contactId: response?.id,
      });

      return {
        ok: true,
        warning:
          "Contact was saved with minimal Brevo fields because one or more custom contact attributes are not configured in Brevo.",
      } satisfies StepResult;
    }

    try {
      logStep(traceId, "brevo.contact.upsert.retry_without_phone", {
        email: submission.payload.email,
        phoneAttribute: firstAttempt.phoneAttr,
        reason: "Phone attribute is already associated with another Brevo contact.",
      });

      const retryPayload = buildContactAttributes(submission, false);
      const response = await postToBrevo<{ id?: number }>("/contacts", {
        email: submission.payload.email,
        listIds: [formConfig.listId],
        updateEnabled: true,
        attributes: retryPayload.attributes,
      });

      logStep(traceId, "brevo.contact.upsert.success_without_phone", {
        email: submission.payload.email,
        contactId: response?.id,
      });

      return {
        ok: true,
        warning:
          "Contact was saved without the Brevo phone attribute because that number already belongs to another contact.",
      } satisfies StepResult;
    } catch (retryError) {
      if (!isInvalidContactAttributeError(retryError)) {
        throw retryError;
      }

      logStep(traceId, "brevo.contact.upsert.retry_minimal_attributes", {
        email: submission.payload.email,
        reason: getBrevoErrorMessage(retryError),
      });

      const response = await postToBrevo<{ id?: number }>("/contacts", {
        email: submission.payload.email,
        listIds: [formConfig.listId],
        updateEnabled: true,
        attributes: minimalAttributes,
      });

      logStep(traceId, "brevo.contact.upsert.success_minimal_attributes", {
        email: submission.payload.email,
        contactId: response?.id,
      });

      return {
        ok: true,
        warning:
          "Contact was saved with minimal Brevo fields because one or more custom contact attributes are not configured in Brevo.",
      } satisfies StepResult;
    }
  }
}

function buildCustomerTemplateParams(submission: ParsedSubmission) {
  const { payload, extras } = submission;
  return {
    name: payload.name,
    email: payload.email,
    company: payload.company,
    message: payload.message,
    phone: payload.phone,
    service: payload.service || extras.service,
    FIRSTNAME: extras.firstName,
    LASTNAME: extras.lastName,
    company_name: payload.company,
    industry: extras.industry,
    timeline: extras.timeline,
    budget: extras.budget,
  };
}

async function sendCustomerTemplateEmail(submission: ParsedSubmission, traceId: string) {
  const sender = getBrevoSender();
  const formConfig = getBrevoFormConfig(submission.formId);
  const recipientEmail = submission.payload.email;

  if (!recipientEmail) {
    throw new Error("Customer recipient email is missing after request parsing.");
  }

  logStep(traceId, "brevo.email.customer.template.start", {
    recipientEmail: maskEmailAddress(recipientEmail),
    senderEmail: sender.email,
    templateId: formConfig.customerTemplateId,
    params: buildCustomerTemplateParams(submission),
  });

  const response = await postToBrevo<{ messageId?: string }>("/smtp/email", {
    sender,
    to: [
      {
        email: recipientEmail,
        name: submission.payload.name,
      },
    ],
    replyTo: {
      email: "info@softclinch.com",
      name: "SoftClinch Consulting Services",
    },
    templateId: formConfig.customerTemplateId,
    params: buildCustomerTemplateParams(submission),
  });

  logStep(traceId, "brevo.email.customer.template.success", {
    recipientEmail: maskEmailAddress(recipientEmail),
    messageId: response.messageId,
    response,
  });

  return {
    ok: true,
    mode: "template",
    messageId: response.messageId,
  } satisfies StepResult;
}

async function sendCustomerHtmlTestEmail(submission: ParsedSubmission, traceId: string) {
  const sender = getBrevoSender();
  const { payload, extras } = submission;
  const recipientEmail = payload.email;

  if (!recipientEmail) {
    throw new Error("Customer recipient email is missing after request parsing.");
  }

  const emailContent = buildCustomerReplyEmailContent({
    name: payload.name,
    company: payload.company,
    phone: payload.phone,
    message: payload.message,
    industry: extras.industry,
    service: extras.service,
    timeline: extras.timeline,
    budget: extras.budget,
  });

  logStep(traceId, "brevo.email.customer.html_debug.start", {
    recipientEmail: maskEmailAddress(recipientEmail),
    senderEmail: sender.email,
    subject: emailContent.subject,
  });

  const response = await postToBrevo<{ messageId?: string }>("/smtp/email", {
    sender,
    to: [
      {
        email: recipientEmail,
        name: payload.name,
      },
    ],
    replyTo: {
      email: "info@softclinch.com",
      name: "SoftClinch Consulting Services",
    },
    subject: emailContent.subject,
    htmlContent: emailContent.htmlContent,
    textContent: emailContent.textContent,
  });

  logStep(traceId, "brevo.email.customer.html_debug.success", {
    recipientEmail: maskEmailAddress(recipientEmail),
    messageId: response.messageId,
    response,
  });

  return {
    ok: true,
    mode: "html",
    messageId: response.messageId,
  } satisfies StepResult;
}

async function sendAdminNotificationEmail(submission: ParsedSubmission, traceId: string) {
  const sender = getBrevoSender();
  const adminRecipient = getBrevoAdminRecipient();
  const adminTemplateId = getBrevoAdminTemplateId();
  const { payload, extras, formId } = submission;

  logStep(traceId, "brevo.email.admin.start", {
    adminEmail: maskEmailAddress(adminRecipient.email),
    contactEmail: maskEmailAddress(payload.email),
    senderEmail: sender.email,
    templateId: adminTemplateId,
  });

  const response = await postToBrevo<{ messageId?: string }>("/smtp/email", {
    sender,
    to: [adminRecipient],
    replyTo: {
      email: "info@softclinch.com",
      name: "SoftClinch Consulting Services",
    },
    templateId: adminTemplateId,
    params: {
      name: payload.name,
      email: payload.email,
      phone: payload.phone,
      company: payload.company,
      service: extras.service,
      message: payload.message,
      industry: extras.industry,
      timeline: extras.timeline,
      budget: extras.budget,
      formId,
      FIRSTNAME: extras.firstName,
      LASTNAME: extras.lastName,
    },
  });

  logStep(traceId, "brevo.email.admin.success", {
    adminEmail: maskEmailAddress(adminRecipient.email),
    messageId: response.messageId,
    response,
  });

  return {
    ok: true,
    messageId: response.messageId,
  } satisfies StepResult;
}

async function sendCustomerEmail(submission: ParsedSubmission, traceId: string) {
  if (submission.debugEmailMode === "html") {
    return sendCustomerHtmlTestEmail(submission, traceId);
  }

  try {
    return await sendCustomerTemplateEmail(submission, traceId);
  } catch (error) {
    logStepError(traceId, "brevo.email.customer.template.failed", error);
    logStep(traceId, "brevo.email.customer.fallback_to_html", {
      email: submission.payload.email,
      reason: getBrevoErrorMessage(error),
    });

    const fallbackResponse = await sendCustomerHtmlTestEmail(submission, traceId);
    return {
      ...fallbackResponse,
      warning: "Template email failed, so the HTML debug email was sent instead.",
    } satisfies StepResult;
  }
}

function buildSuccessResponse(
  traceId: string,
  contact: StepResult,
  customerEmail: StepResult,
  adminEmail: StepResult,
  duplicate = false
) {
  const warnings = [contact.warning, customerEmail.warning, adminEmail.warning].filter(
    Boolean
  );

  return NextResponse.json({
    success: true,
    duplicate,
    traceId,
    contact,
    customerEmail,
    adminEmail,
    ...(warnings.length > 0 ? { warnings } : {}),
  });
}

function buildErrorResponse(
  status: number,
  traceId: string,
  message: string,
  details?: Record<string, unknown>
) {
  return NextResponse.json(
    {
      success: false,
      traceId,
      error: message,
      ...(details ? { details } : {}),
    },
    { status }
  );
}

export async function POST(request: Request) {
  const traceId = crypto.randomUUID();
  const startedAt = Date.now();

  try {
    getRequiredEnv("BREVO_API_KEY");
    getRequiredEnv("BREVO_SENDER_EMAIL");
    getRequiredEnv("RECAPTCHA_SECRET_KEY");

    let body: ContactSubmissionInput & ReferenceSubmissionInput;

    try {
      body = (await request.json()) as ContactSubmissionInput & ReferenceSubmissionInput;
    } catch {
      return buildErrorResponse(400, traceId, "Invalid request payload.");
    }

    console.log(`[contact:${traceId}] req.body`, summarizeSubmissionBody(body));

    const submission = parseSubmissionInput(body);
    if (!submission) {
      return buildErrorResponse(400, traceId, "Invalid form.");
    }

    getBrevoFormConfig(submission.formId);
    getBrevoAdminTemplateId();
    getBrevoAdminRecipient();

    logStep(traceId, "request.received", {
      formId: submission.formId,
      email: maskEmailAddress(submission.payload.email),
      recipientEmail: maskEmailAddress(submission.payload.email),
      debugEmailMode: submission.debugEmailMode,
      hasCompany: Boolean(submission.payload.company),
      hasPhone: Boolean(submission.payload.phone),
      hasService: Boolean(submission.payload.service || submission.extras.service),
      senderEmail: getBrevoSender().email,
      adminEmail: maskEmailAddress(getBrevoAdminRecipient().email),
    });

    if ((submission.website || "").length > 0) {
      logStep(traceId, "request.honeypot_triggered");
      return buildSuccessResponse(
        traceId,
        { ok: true },
        { ok: true },
        { ok: true },
        false
      );
    }

    if (
      typeof submission.formStartedAt === "number" &&
      (!Number.isFinite(submission.formStartedAt) ||
        Date.now() - submission.formStartedAt < MIN_FORM_FILL_MS)
    ) {
      return buildErrorResponse(
        400,
        traceId,
        "Submission could not be verified. Please try again."
      );
    }

    const clientIp = getClientIp(request.headers);
    if (!enforceRateLimit(clientIp)) {
      logStep(traceId, "request.rate_limited", { clientIp });
      return buildErrorResponse(
        429,
        traceId,
        "Too many requests from this network. Please wait a few minutes and try again."
      );
    }

    const validation = validateContactFormData(submission.payload);
    if (!validation.isValid) {
      return getValidationErrorResponse(traceId, submission.payload);
    }

    const normalizedSubmission: ParsedSubmission = {
      ...submission,
      payload: normalizeContactFormData(validation.data),
    };

    if (!normalizedSubmission.captchaToken) {
      return buildErrorResponse(
        400,
        traceId,
        "Please complete the reCAPTCHA checkbox before submitting."
      );
    }

    const recaptchaVerification = await verifyRecaptchaToken(
      normalizedSubmission.captchaToken,
      clientIp
    );

    if (!recaptchaVerification.success) {
      logStep(traceId, "request.recaptcha_failed", {
        errorCodes: recaptchaVerification["error-codes"] || [],
      });

      return buildErrorResponse(
        400,
        traceId,
        "reCAPTCHA verification failed. Please try again."
      );
    }

    if (isDuplicateSubmission(normalizedSubmission.formId, normalizedSubmission.payload)) {
      logStep(traceId, "request.duplicate_detected", {
        email: maskEmailAddress(normalizedSubmission.payload.email),
      });

      return buildSuccessResponse(
        traceId,
        { ok: true },
        { ok: true, warning: "Duplicate submission ignored before re-sending emails." },
        { ok: true, warning: "Duplicate submission ignored before re-sending emails." },
        true
      );
    }

    let contactResult: StepResult;
    try {
      contactResult = await upsertBrevoContact(normalizedSubmission, traceId);
    } catch (error) {
      logStepError(traceId, "brevo.contact.upsert.failed", error);
      contactResult = {
        ok: false,
        error: getBrevoErrorMessage(error),
        details: serializeError(error),
      };
    }

    let customerEmailResult: StepResult;
    try {
      customerEmailResult = await sendCustomerEmail(normalizedSubmission, traceId);
    } catch (error) {
      logStepError(traceId, "brevo.email.customer.failed", error);
      customerEmailResult = {
        ok: false,
        error: getBrevoErrorMessage(error),
        details: serializeError(error),
      };
    }

    let adminEmailResult: StepResult;
    try {
      adminEmailResult = await sendAdminNotificationEmail(normalizedSubmission, traceId);
    } catch (error) {
      logStepError(traceId, "brevo.email.admin.failed", error);
      adminEmailResult = {
        ok: false,
        error: getBrevoErrorMessage(error),
        details: serializeError(error),
      };
    }

    if (!contactResult.ok || !customerEmailResult.ok || !adminEmailResult.ok) {
      return buildErrorResponse(
        502,
        traceId,
        "One or more contact delivery steps failed.",
        {
          contact: contactResult,
          customerEmail: customerEmailResult,
          adminEmail: adminEmailResult,
        }
      );
    }

    logStep(traceId, "request.completed", {
      durationMs: Date.now() - startedAt,
      customerEmailMode: customerEmailResult.mode,
    });

    return buildSuccessResponse(
      traceId,
      contactResult,
      customerEmailResult,
      adminEmailResult
    );
  } catch (error) {
    logStepError(traceId, "request.failed", error);

    const typedError = error as BrevoRouteError;

    if (typedError.missingEnv) {
      return buildErrorResponse(
        500,
        traceId,
        `Server misconfiguration: missing environment variable ${typedError.missingEnv}.`
      );
    }

    if (isIpAllowlistError(error)) {
      return buildErrorResponse(
        503,
        traceId,
        "Brevo is blocking requests from this server IP. Add the Vercel deployment IP to your Brevo allowlist and try again."
      );
    }

    if (typedError.statusCode) {
      return buildErrorResponse(
        502,
        traceId,
        `Brevo API error (${typedError.statusCode}): ${getBrevoErrorMessage(error)}`
      );
    }

    return buildErrorResponse(
      500,
      traceId,
      "Your request could not be sent right now. Please try again in a few minutes."
    );
  }
}

export async function GET() {
  return NextResponse.json(
    { success: false, error: "Method not allowed." },
    { status: 405 }
  );
}
