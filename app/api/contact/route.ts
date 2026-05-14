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
};

const BREVO_BASE_URL = "https://api.brevo.com/v3";
const MAX_SUBMISSIONS_PER_WINDOW = 5;
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000;
const DUPLICATE_WINDOW_MS = 5 * 60 * 1000;
const MIN_FORM_FILL_MS = 3000;

const rateLimitStore = new Map<string, number[]>();
const duplicateSubmissionStore = new Map<string, number>();

function getRequiredEnv(name: string) {
  const value = process.env[name]?.trim();
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
}

function getRequiredEnvNumber(name: string) {
  const parsed = Number(getRequiredEnv(name));
  if (!Number.isInteger(parsed) || parsed <= 0) {
    throw new Error(`Environment variable ${name} must be a positive integer.`);
  }
  return parsed;
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

  if (!response.ok) {
    const errorText = await response.text();
    const error = new Error(
      `Brevo API error (${response.status}): ${errorText}`
    ) as BrevoApiError;
    error.status = response.status;
    error.details = errorText;
    throw error;
  }

  if (response.status === 204) {
    return undefined as T;
  }

  return (await response.json()) as T;
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
  await brevoRequest("/contacts", {
    email: payload.email,
    attributes: {
      FIRSTNAME: payload.name,
      COMPANY: payload.company,
      SMS: payload.phone,
      MESSAGE: payload.message,
    },
    listIds: [getRequiredEnvNumber("BREVO_LIST_ID")],
    updateEnabled: true,
  });
}

async function sendBrevoTemplateEmail(payload: ContactFormData) {
  const senderEmail = process.env.BREVO_SENDER_EMAIL?.trim();
  const senderName =
    process.env.BREVO_SENDER_NAME?.trim() || "SoftClinch Consulting Services";

  await brevoRequest("/smtp/email", {
    ...(senderEmail
      ? {
          sender: {
            email: senderEmail,
            name: senderName,
          },
        }
      : {}),
    to: [
      {
        email: payload.email,
        name: payload.name,
      },
    ],
    templateId: getRequiredEnvNumber("BREVO_TEMPLATE_ID"),
    params: {
      name: payload.name,
      company: payload.company,
      email: payload.email,
      phone: payload.phone,
      message: payload.message,
    },
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
    await sendBrevoTemplateEmail(payload);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form integration error", error);

    if (
      typeof error === "object" &&
      error !== null &&
      "status" in error &&
      "details" in error
    ) {
      const typedError = error as BrevoApiError;

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
    }

    return NextResponse.json(
      {
        error:
          "Your request could not be sent right now. Please try again in a few minutes.",
      },
      { status: 500 }
    );
  }
}
