import { NextResponse } from "next/server";
import { appendFile, mkdir } from "node:fs/promises";
import path from "node:path";
import nodemailer from "nodemailer";
import { CONTACT } from "@/lib/contact";

type ContactPayload = {
  name?: string;
  company?: string;
  email?: string;
  phone?: string;
  message?: string;
};

function sanitize(value: string) {
  return value.replace(/[<>]/g, "").trim();
}

function getRequiredEnv(name: string) {
  const value = process.env[name]?.trim();
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
}

function getEnvNumber(name: string, fallback?: number) {
  const raw = process.env[name]?.trim();
  if (!raw) return fallback;
  const parsed = Number(raw);
  return Number.isFinite(parsed) ? parsed : fallback;
}

function splitName(fullName: string) {
  const parts = fullName.split(/\s+/).filter(Boolean);
  return {
    firstName: parts[0] ?? fullName,
    lastName: parts.slice(1).join(" "),
  };
}

async function storeSubmission(payload: Required<ContactPayload>) {
  const submissionsDir = path.join(process.cwd(), "data");
  const submissionsFile = path.join(submissionsDir, "contact-submissions.ndjson");

  await mkdir(submissionsDir, { recursive: true });
  await appendFile(
    submissionsFile,
    `${JSON.stringify({
      submittedAt: new Date().toISOString(),
      ...payload,
    })}\n`,
    "utf8"
  );
}

async function brevoRequest<T>(path: string, body: Record<string, unknown>) {
  const apiKey = getRequiredEnv("BREVO_API_KEY");
  const response = await fetch(`https://api.brevo.com/v3${path}`, {
    method: "POST",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      "api-key": apiKey,
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    const errorText = await response.text();
    const error = new Error(`Brevo API error (${response.status}): ${errorText}`) as Error & {
      status?: number;
      details?: string;
    };
    error.status = response.status;
    error.details = errorText;
    throw error;
  }

  if (response.status === 204) {
    return undefined as T;
  }

  return (await response.json()) as T;
}

function isBrevoDuplicateSmsError(error: unknown) {
  return (
    typeof error === "object" &&
    error !== null &&
    "status" in error &&
    "details" in error &&
    (error as { status?: number }).status === 400 &&
    typeof (error as { details?: string }).details === "string" &&
    (error as { details: string }).details.includes('"duplicate_identifiers":["SMS"]')
  );
}

async function syncBrevoContact(
  payload: Required<ContactPayload>,
  options?: { includePhone?: boolean }
) {
  const includePhone = options?.includePhone ?? true;
  const { firstName, lastName } = splitName(payload.name);
  const listId = getEnvNumber("BREVO_CONTACT_LIST_ID", 2);

  const attributes: Record<string, string> = {
    FIRSTNAME: firstName,
  };

  if (lastName) {
    attributes.LASTNAME = lastName;
  }

  if (includePhone && payload.phone) {
    attributes.SMS = payload.phone;
  }

  const companyAttribute = process.env.BREVO_COMPANY_ATTRIBUTE?.trim();
  const messageAttribute = process.env.BREVO_MESSAGE_ATTRIBUTE?.trim();
  const phoneAttribute = process.env.BREVO_PHONE_ATTRIBUTE?.trim();

  if (companyAttribute) {
    attributes[companyAttribute] = payload.company;
  }

  if (messageAttribute) {
    attributes[messageAttribute] = payload.message;
  }

  if (includePhone && phoneAttribute) {
    attributes[phoneAttribute] = payload.phone;
  }

  await brevoRequest("/contacts", {
    email: payload.email,
    attributes,
    listIds: listId ? [listId] : undefined,
    updateEnabled: true,
  });
}

async function sendBrevoAutoReply(payload: Required<ContactPayload>) {
  const senderEmail =
    process.env.BREVO_SENDER_EMAIL?.trim() ||
    process.env.SMTP_FROM_EMAIL?.trim() ||
    CONTACT.email;
  const senderName =
    process.env.BREVO_SENDER_NAME?.trim() ||
    process.env.SMTP_FROM_NAME?.trim() ||
    "SoftClinch Consulting Services";
  const autoReplyEmail = buildAutoReplyEmail(payload);

  await brevoRequest("/smtp/email", {
    sender: {
      email: senderEmail,
      name: senderName,
    },
    to: [
      {
        email: payload.email,
        name: payload.name,
      },
    ],
    replyTo: {
      email: CONTACT.email,
      name: senderName,
    },
    subject: autoReplyEmail.subject,
    htmlContent: autoReplyEmail.html,
  });
}

async function sendBrevoAdminEmail(payload: Required<ContactPayload>) {
  const senderEmail =
    process.env.BREVO_SENDER_EMAIL?.trim() ||
    process.env.SMTP_FROM_EMAIL?.trim() ||
    CONTACT.email;
  const senderName =
    process.env.BREVO_SENDER_NAME?.trim() ||
    process.env.SMTP_FROM_NAME?.trim() ||
    "SoftClinch Consulting Services";
  const adminEmail = buildAdminEmail(payload);

  await brevoRequest("/smtp/email", {
    sender: {
      email: senderEmail,
      name: senderName,
    },
    to: [{ email: CONTACT.email, name: "SoftClinch Admin" }],
    replyTo: {
      email: payload.email,
      name: payload.name,
    },
    subject: adminEmail.subject,
    htmlContent: adminEmail.html,
  });
}

function buildAdminEmail(payload: Required<ContactPayload>) {
  return {
    subject: `New Contact Form Submission from ${payload.name}`,
    html: `
      <div style="font-family: Arial, Helvetica, sans-serif; color: #0f172a; line-height: 1.6;">
        <h2 style="margin-bottom: 16px;">New Contact Form Submission</h2>
        <p>You have received a new enquiry from the SoftClinch website.</p>
        <table style="border-collapse: collapse; width: 100%; margin-top: 20px;">
          <tr><td style="padding: 10px; border: 1px solid #e2e8f0; font-weight: 700;">Name</td><td style="padding: 10px; border: 1px solid #e2e8f0;">${payload.name}</td></tr>
          <tr><td style="padding: 10px; border: 1px solid #e2e8f0; font-weight: 700;">Company</td><td style="padding: 10px; border: 1px solid #e2e8f0;">${payload.company}</td></tr>
          <tr><td style="padding: 10px; border: 1px solid #e2e8f0; font-weight: 700;">Email</td><td style="padding: 10px; border: 1px solid #e2e8f0;">${payload.email}</td></tr>
          <tr><td style="padding: 10px; border: 1px solid #e2e8f0; font-weight: 700;">Phone</td><td style="padding: 10px; border: 1px solid #e2e8f0;">${payload.phone}</td></tr>
          <tr><td style="padding: 10px; border: 1px solid #e2e8f0; font-weight: 700; vertical-align: top;">Message</td><td style="padding: 10px; border: 1px solid #e2e8f0; white-space: pre-wrap;">${payload.message}</td></tr>
        </table>
      </div>
    `,
  };
}

function buildAutoReplyEmail(payload: Required<ContactPayload>) {
  return {
    subject: "We received your enquiry | SoftClinch",
    html: `
      <div style="font-family: Arial, Helvetica, sans-serif; color: #0f172a; line-height: 1.7;">
        <h2 style="margin-bottom: 16px;">Thank you for contacting SoftClinch</h2>
        <p>Hello ${payload.name},</p>
        <p>Thank you for submitting your enquiry. Our team has received your request and is reviewing the details you shared.</p>
        <p>We will get in touch with you shortly to discuss the next steps and how we can support your business goals.</p>
        <div style="margin-top: 24px; padding: 16px; border: 1px solid #e2e8f0; border-radius: 12px; background: #f8fafc;">
          <h3 style="margin: 0 0 12px;">Your submitted details</h3>
          <p style="margin: 0 0 8px;"><strong>Name:</strong> ${payload.name}</p>
          <p style="margin: 0 0 8px;"><strong>Company:</strong> ${payload.company}</p>
          <p style="margin: 0 0 8px;"><strong>Email:</strong> ${payload.email}</p>
          <p style="margin: 0 0 8px;"><strong>Phone:</strong> ${payload.phone}</p>
          <p style="margin: 0;"><strong>Message:</strong> ${payload.message}</p>
        </div>
        <p style="margin-top: 24px;">Regards,<br />SoftClinch Consulting Services</p>
      </div>
    `,
  };
}

export async function POST(request: Request) {
  try {
    let body: ContactPayload;
    try {
      body = (await request.json()) as ContactPayload;
    } catch {
      return NextResponse.json(
        { error: "Invalid request payload." },
        { status: 400 }
      );
    }

    const payload = {
      name: sanitize(body.name ?? ""),
      company: sanitize(body.company ?? ""),
      email: sanitize(body.email ?? ""),
      phone: sanitize(body.phone ?? ""),
      message: sanitize(body.message ?? ""),
    };

    if (
      !payload.name ||
      !payload.company ||
      !payload.email ||
      !payload.phone ||
      !payload.message
    ) {
      return NextResponse.json(
        { error: "Please fill in all required fields." },
        { status: 400 }
      );
    }

    await storeSubmission(payload);

    if (process.env.BREVO_API_KEY?.trim()) {
      try {
        await syncBrevoContact(payload);
      } catch (error) {
        if (isBrevoDuplicateSmsError(error)) {
          await syncBrevoContact(payload, { includePhone: false });
        } else {
          throw error;
        }
      }
      await sendBrevoAutoReply(payload);
      await sendBrevoAdminEmail(payload);
      return NextResponse.json({ success: true, provider: "brevo" });
    }

    const transporter = nodemailer.createTransport({
      host: getRequiredEnv("SMTP_HOST"),
      port: Number(getRequiredEnv("SMTP_PORT")),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: getRequiredEnv("SMTP_USER"),
        pass: getRequiredEnv("SMTP_PASS"),
      },
    });

    const fromEmail = process.env.SMTP_FROM_EMAIL?.trim() || CONTACT.email;
    const fromName = process.env.SMTP_FROM_NAME?.trim() || "SoftClinch";

    const adminEmail = buildAdminEmail(payload);
    const autoReplyEmail = buildAutoReplyEmail(payload);

    await transporter.sendMail({
      from: `"${fromName}" <${fromEmail}>`,
      to: CONTACT.email,
      replyTo: payload.email,
      subject: adminEmail.subject,
      html: adminEmail.html,
    });

    await transporter.sendMail({
      from: `"${fromName}" <${fromEmail}>`,
      to: payload.email,
      subject: autoReplyEmail.subject,
      html: autoReplyEmail.html,
    });

    return NextResponse.json({ success: true, provider: "smtp" });
  } catch (error) {
    console.error("Contact form email error", error);

    if (
      typeof error === "object" &&
      error !== null &&
      "status" in error &&
      "details" in error
    ) {
      const typedError = error as { status?: number; details?: string };
      if (
        typedError.status === 401 &&
        typedError.details?.includes("unrecognised IP address")
      ) {
        return NextResponse.json(
          {
            error:
              "Brevo is blocking requests from this IP address. Please add this IP in your Brevo authorized IP settings and try again.",
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
