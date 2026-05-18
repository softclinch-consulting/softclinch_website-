import { NextResponse } from "next/server";
import { headers } from "next/headers";
import {
  normalizeContactFormData,
  validateContactFormData,
  type ContactFormData,
  type ContactSubmissionInput,
} from "@/lib/contact-form";

type BrevoApiError = Error & {
  status?: number;
  details?: string;
  body?: unknown;
  endpoint?: string;
};

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const BREVO_BASE_URL = "https://api.brevo.com/v3";
const MAX_SUBMISSIONS_PER_WINDOW = 5;
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000;
const DUPLICATE_WINDOW_MS = 5 * 60 * 1000;
const MIN_FORM_FILL_MS = 3000;

const rateLimitStore = new Map<string, number[]>();
const duplicateSubmissionStore = new Map<string, number>();

function getRequiredEnv(nameOrNames: string | string[]) {
  const names = typeof nameOrNames === "string" ? [nameOrNames] : nameOrNames;

  for (const name of names) {
    const value = process.env[name]?.trim();
    if (value) {
      return value;
    }
  }

  const missingName = names.join(" or ");
  const error = new Error(`Missing required environment variable: ${missingName}`);
  (error as { missingEnv?: string }).missingEnv = names[0];
  throw error;
}

function getRequiredEnvNumber(nameOrNames: string | string[]) {
  const parsed = Number(getRequiredEnv(nameOrNames));
  const firstName = Array.isArray(nameOrNames) ? nameOrNames[0] : nameOrNames;
  if (!Number.isInteger(parsed) || parsed <= 0) {
    throw new Error(`Environment variable ${firstName} must be a positive integer.`);
  }
  return parsed;
}

function getBrevoErrorMessage(error: BrevoApiError) {
  if (error.body && typeof error.body === "object") {
    const message = (error.body as { message?: unknown }).message;
    const code = (error.body as { code?: unknown }).code;

    if (typeof message === "string" && typeof code === "string") {
      return `${code}: ${message}`;
    }

    if (typeof message === "string") {
      return message;
    }
  }

  return error.details || "Unknown Brevo error.";
}

function splitContactName(name: string) {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  const firstName = parts[0] || name;
  const lastName = parts.slice(1).join(" ");

  return { firstName, lastName };
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

async function brevoRequest<T>(pathname: string, body: Record<string, unknown>) {
  const response = await fetch(`${BREVO_BASE_URL}${pathname}`, {
    method: "POST",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      "api-key": getRequiredEnv("BREVO_API_KEY"),
    },
    body: JSON.stringify(body),
    cache: "no-store",
  });

  const responseText = await response.text();

  if (!response.ok) {
    let parsedBody: unknown = undefined;
    if (responseText) {
      try {
        parsedBody = JSON.parse(responseText);
      } catch {
        parsedBody = responseText;
      }
    }

    const error = new Error(
      `Brevo API error (${response.status}) on ${pathname}`
    ) as BrevoApiError;
    error.status = response.status;
    error.details = responseText;
    error.body = parsedBody;
    error.endpoint = pathname;
    throw error;
  }

  if (response.status === 204) {
    return undefined as T;
  }

  if (!responseText) {
    return undefined as T;
  }

  return JSON.parse(responseText) as T;
}

function getClientIp(allHeaders: Headers) {
  const forwardedFor = allHeaders.get("x-forwarded-for");
  if (forwardedFor) {
    return forwardedFor.split(",")[0]?.trim() || "unknown";
  }

  const realIp = allHeaders.get("x-real-ip");
  return realIp?.trim() || "unknown";
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

function buildDuplicateKey(payload: ContactFormData) {
  return [
    payload.email,
    payload.phone.replace(/\s+/g, ""),
    payload.message.replace(/\s+/g, " ").toLowerCase(),
  ].join("|");
}

function isDuplicateSubmission(payload: ContactFormData) {
  const now = Date.now();

  for (const [key, timestamp] of duplicateSubmissionStore.entries()) {
    if (now - timestamp >= DUPLICATE_WINDOW_MS) {
      duplicateSubmissionStore.delete(key);
    }
  }

  const duplicateKey = buildDuplicateKey(payload);
  const lastSeenAt = duplicateSubmissionStore.get(duplicateKey);

  if (lastSeenAt && now - lastSeenAt < DUPLICATE_WINDOW_MS) {
    return true;
  }

  duplicateSubmissionStore.set(duplicateKey, now);
  return false;
}

async function upsertBrevoContact(payload: ContactFormData) {
  const companyAttr = process.env.BREVO_COMPANY_ATTRIBUTE?.trim() || "COMPANY";
  const phoneAttr = process.env.BREVO_PHONE_ATTRIBUTE?.trim() || "SMS";
  const messageAttr = process.env.BREVO_MESSAGE_ATTRIBUTE?.trim() || "MESSAGE";
  const { firstName, lastName } = splitContactName(payload.name);

  await brevoRequest("/contacts", {
    email: payload.email,
    attributes: {
      FIRSTNAME: firstName,
      ...(lastName ? { LASTNAME: lastName } : {}),
      [companyAttr]: payload.company,
      [phoneAttr]: payload.phone,
      [messageAttr]: payload.message,
    },
    listIds: [getRequiredEnvNumber(["BREVO_CONTACT_LIST_ID", "BREVO_LIST_ID"])],
    updateEnabled: true,
  });
}

async function sendBrevoTemplateEmail(payload: ContactFormData) {
  const senderEmail = getRequiredEnv("BREVO_SENDER_EMAIL");
  const senderName =
    process.env.BREVO_SENDER_NAME?.trim() || "SoftClinch Consulting Services";

  await brevoRequest("/smtp/email", {
    sender: {
      email: senderEmail,
      name: senderName,
    },
    replyTo: {
      email: payload.email,
      name: payload.name,
    },
    to: [
      {
        email: payload.email,
        name: payload.name,
      },
    ],
    templateId: getRequiredEnvNumber([
      "BREVO_CONFIRMATION_TEMPLATE_ID",
      "BREVO_TEMPLATE_ID",
    ]),
    params: {
      name: payload.name,
      company: payload.company,
      message: payload.message,
      phone: payload.phone,
    },
  });
}

async function sendBrevoFallbackCustomerEmail(payload: ContactFormData) {
  const senderEmail = getRequiredEnv("BREVO_SENDER_EMAIL");
  const senderName =
    process.env.BREVO_SENDER_NAME?.trim() || "SoftClinch Consulting Services";

  await brevoRequest("/smtp/email", {
    sender: {
      email: senderEmail,
      name: senderName,
    },
    replyTo: {
      email: senderEmail,
      name: senderName,
    },
    to: [
      {
        email: payload.email,
        name: payload.name,
      },
    ],
    subject: "Thank you for contacting SoftClinch Consulting Services",
    htmlContent: `
      <p>Hi ${escapeHtml(payload.name)},</p>
      <p>Thank you for contacting SoftClinch Consulting Services.</p>
      <p>We received your enquiry and our team will get back to you shortly.</p>
      <p><strong>Company:</strong> ${escapeHtml(payload.company)}</p>
      <p><strong>Phone:</strong> ${escapeHtml(payload.phone)}</p>
      <p><strong>Message:</strong></p>
      <p>${escapeHtml(payload.message).replace(/\n/g, "<br />")}</p>
      <p>Regards,<br />SoftClinch Consulting Services</p>
    `,
    textContent: [
      `Hi ${payload.name},`,
      "",
      "Thank you for contacting SoftClinch Consulting Services.",
      "We received your enquiry and our team will get back to you shortly.",
      "",
      `Company: ${payload.company}`,
      `Phone: ${payload.phone}`,
      "Message:",
      payload.message,
      "",
      "Regards,",
      "SoftClinch Consulting Services",
    ].join("\n"),
  });
}

async function sendBrevoAdminNotification(payload: ContactFormData) {
  const senderEmail = getRequiredEnv("BREVO_SENDER_EMAIL");
  const senderName =
    process.env.BREVO_SENDER_NAME?.trim() || "SoftClinch Consulting Services";
  const adminEmail = process.env.BREVO_ADMIN_EMAIL?.trim() || "info@softclinch.com";
  const adminName = process.env.BREVO_ADMIN_NAME?.trim() || "SoftClinch";

  await brevoRequest("/smtp/email", {
    sender: {
      email: senderEmail,
      name: senderName,
    },
    to: [
      {
        email: adminEmail,
        name: adminName,
      },
    ],
    replyTo: {
      email: payload.email,
      name: payload.name,
    },
    subject: `New contact form submission from ${payload.name}`,
    htmlContent: `
      <h2>New contact form submission</h2>
      <p><strong>Name:</strong> ${escapeHtml(payload.name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(payload.email)}</p>
      <p><strong>Company:</strong> ${escapeHtml(payload.company)}</p>
      <p><strong>Phone:</strong> ${escapeHtml(payload.phone)}</p>
      <p><strong>Message:</strong></p>
      <p>${escapeHtml(payload.message).replace(/\n/g, "<br />")}</p>
    `,
    textContent: [
      "New contact form submission",
      `Name: ${payload.name}`,
      `Email: ${payload.email}`,
      `Company: ${payload.company}`,
      `Phone: ${payload.phone}`,
      "Message:",
      payload.message,
    ].join("\n"),
  });
}

function getValidationErrorResponse(input: Partial<ContactFormData>) {
  const { errors } = validateContactFormData(input);
  return NextResponse.json(
    {
      error: "Please correct the highlighted fields and try again.",
      fieldErrors: errors,
    },
    { status: 400 }
  );
}

export async function POST(request: Request) {
  try {
    let body: ContactSubmissionInput;

    try {
      body = (await request.json()) as ContactSubmissionInput;
    } catch {
      return NextResponse.json(
        { error: "Invalid request payload." },
        { status: 400 }
      );
    }

    if ((body.website || "").trim().length > 0) {
      return NextResponse.json({ success: true }, { status: 200 });
    }

    if (
      typeof body.formStartedAt !== "number" ||
      !Number.isFinite(body.formStartedAt) ||
      Date.now() - body.formStartedAt < MIN_FORM_FILL_MS
    ) {
      return NextResponse.json(
        { error: "Submission could not be verified. Please try again." },
        { status: 400 }
      );
    }

    const requestHeaders = await headers();
    const clientIp = getClientIp(requestHeaders);

    if (!enforceRateLimit(clientIp)) {
      return NextResponse.json(
        {
          error:
            "Too many requests from this network. Please wait a few minutes and try again.",
        },
        { status: 429 }
      );
    }

    const validation = validateContactFormData(body);
    if (!validation.isValid) {
      return getValidationErrorResponse(body);
    }

    const payload = normalizeContactFormData(validation.data);

    if (isDuplicateSubmission(payload)) {
      return NextResponse.json({
        success: true,
        duplicate: true,
      });
    }

    await upsertBrevoContact(payload);

    let usedFallbackEmail = false;
    try {
      await sendBrevoTemplateEmail(payload);
    } catch (error) {
      if (
        typeof error === "object" &&
        error !== null &&
        "status" in error &&
        "details" in error
      ) {
        const typedError = error as BrevoApiError;
        console.error("Brevo template email failed, trying fallback email", {
          endpoint: typedError.endpoint,
          status: typedError.status,
          details: typedError.details,
          body: typedError.body,
        });
      } else {
        console.error("Brevo template email failed, trying fallback email", error);
      }

      await sendBrevoFallbackCustomerEmail(payload);
      usedFallbackEmail = true;
    }

    await sendBrevoAdminNotification(payload);

    return NextResponse.json({ success: true, usedFallbackEmail });
  } catch (error) {
    if (
      typeof error === "object" &&
      error !== null &&
      "missingEnv" in error
    ) {
      const missingEnv = (error as { missingEnv?: string }).missingEnv;
      return NextResponse.json(
        {
          error: `Server misconfiguration: missing environment variable ${missingEnv}.`,
        },
        { status: 500 }
      );
    }

    if (
      typeof error === "object" &&
      error !== null &&
      "status" in error &&
      "details" in error
    ) {
      const typedError = error as BrevoApiError;
      const brevoMessage = getBrevoErrorMessage(typedError);
      console.error("Brevo request failed", {
        endpoint: typedError.endpoint,
        status: typedError.status,
        details: typedError.details,
        body: typedError.body,
      });

      if (
        typedError.status === 401 &&
        typedError.details?.includes("unrecognised IP address")
      ) {
        return NextResponse.json(
          {
            error:
              "Brevo is blocking requests from this server IP. Add the deployment IP to your Brevo allowlist and try again.",
          },
          { status: 503 }
        );
      }

      return NextResponse.json(
        {
          error:
            typedError.details
              ? `Brevo API error (${typedError.status}): ${brevoMessage}`
              : error instanceof Error
              ? error.message
              : "Your request could not be sent right now. Please try again in a few minutes.",
        },
        { status: 502 }
      );
    }

    console.error("Contact form integration error", error);

    return NextResponse.json(
      {
        error:
          "Your request could not be sent right now. Please try again in a few minutes.",
      },
      { status: 500 }
    );
  }
}
