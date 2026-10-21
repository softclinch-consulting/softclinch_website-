export const SITE_NAME = "SoftClinch Consulting Services";

export const DEFAULT_TITLE = "SoftClinch | Enterprise IT Consulting, SAP & Software Solutions";
export const DEFAULT_DESCRIPTION =
  "Partner with SoftClinch for SLA-backed SAP AMS support, bespoke software development, WhatsApp automation (Inaiwazhi) & high-ROI digital marketing in Chennai, India.";

export function getSiteUrl() {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (fromEnv) return fromEnv.replace(/\/+$/, "");
  return "https://softclinch.com";
}

