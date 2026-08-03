import { NextResponse } from "next/server";
import {
  getBrevoAdminRecipient,
  getBrevoAdminTemplateId,
  getBrevoFormConfig,
  getBrevoSender,
  getRequiredEnv,
} from "@/lib/brevo";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function maskSecret(value: string) {
  if (value.length <= 8) {
    return "*".repeat(value.length);
  }

  return `${value.slice(0, 6)}...${value.slice(-4)}`;
}

function buildKeyFingerprint(value: string) {
  const normalized = value.trim();
  const tail = normalized.slice(-8);
  return `len:${normalized.length}-tail:${tail}`;
}

export async function GET() {
  try {
    const apiKey = getRequiredEnv("BREVO_API_KEY");
    const sender = getBrevoSender();
    const adminRecipient = getBrevoAdminRecipient();
    const form1Config = getBrevoFormConfig(1);
    const form23Config = getBrevoFormConfig(23);

    return NextResponse.json({
      success: true,
      brevo: {
        apiKeyMasked: maskSecret(apiKey),
        apiKeyFingerprint: buildKeyFingerprint(apiKey),
        sender,
        adminRecipient,
        adminTemplateId: getBrevoAdminTemplateId(),
        form1Config,
        form23Config,
        attributes: {
          company: process.env.BREVO_COMPANY_ATTRIBUTE?.trim() || "COMPANY",
          phone: process.env.BREVO_PHONE_ATTRIBUTE?.trim() || "SMS",
          message: process.env.BREVO_MESSAGE_ATTRIBUTE?.trim() || "MESSAGE",
          industry: process.env.BREVO_INDUSTRY_ATTRIBUTE?.trim() || "INDUSTRY",
          service: process.env.BREVO_SERVICE_ATTRIBUTE?.trim() || "SERVICE",
          timeline: process.env.BREVO_TIMELINE_ATTRIBUTE?.trim() || "TIMELINE",
          budget: process.env.BREVO_BUDGET_ATTRIBUTE?.trim() || "BUDGET",
        },
      },
    });
  } catch (error) {
    const typedError = error as Error & { missingEnv?: string };

    return NextResponse.json(
      {
        success: false,
        error: typedError.message,
        missingEnv: typedError.missingEnv,
      },
      { status: 500 }
    );
  }
}
