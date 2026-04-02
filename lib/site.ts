export const SITE_NAME = "SoftClinch Consulting Services";

export const DEFAULT_TITLE = "Enterprise Technology Consulting";
export const DEFAULT_DESCRIPTION =
  "Engineering-led consulting for scalable digital systems: SAP consulting, custom SaaS platforms, digital marketing, and WhatsApp automation (Inaiwazhi).";

export function getSiteUrl() {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (fromEnv) return fromEnv.replace(/\/+$/, "");
  return "https://softclinch.com";
}

