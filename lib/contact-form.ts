export type ContactFormData = {
  name: string;
  company: string;
  email: string;
  phone: string;
  service: string;
  message?: string;
  gclid?: string;
  wbraid?: string;
  gbraid?: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
};

export type ContactSubmissionInput = Partial<ContactFormData> & {
  captchaToken?: string;
  website?: string;
  formStartedAt?: number;
};

export type ContactValidationErrors = Partial<Record<keyof ContactFormData, string>>;

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^[+]?[0-9\s().-]{7,20}$/;

function stripHtmlLikeChars(value: string) {
  return value.replace(/[<>]/g, "");
}

function collapseWhitespace(value: string) {
  return value.replace(/\s+/g, " ").trim();
}

function normalizeMultiline(value: string) {
  return value
    .replace(/\r\n/g, "\n")
    .split("\n")
    .map((line) => stripHtmlLikeChars(line).trim())
    .join("\n")
    .trim();
}

export function normalizeContactFormData(
  input: Partial<ContactFormData>
): ContactFormData {
  return {
    name: collapseWhitespace(stripHtmlLikeChars(input.name ?? "")),
    company: collapseWhitespace(stripHtmlLikeChars(input.company ?? "")),
    email: collapseWhitespace(stripHtmlLikeChars(input.email ?? "")).toLowerCase(),
    phone: collapseWhitespace(stripHtmlLikeChars(input.phone ?? "")),
    service: collapseWhitespace(stripHtmlLikeChars(input.service ?? "")),
    message: input.message ? normalizeMultiline(input.message) : "",
    gclid: input.gclid ? collapseWhitespace(input.gclid) : undefined,
    wbraid: input.wbraid ? collapseWhitespace(input.wbraid) : undefined,
    gbraid: input.gbraid ? collapseWhitespace(input.gbraid) : undefined,
    utm_source: input.utm_source ? collapseWhitespace(input.utm_source) : undefined,
    utm_medium: input.utm_medium ? collapseWhitespace(input.utm_medium) : undefined,
    utm_campaign: input.utm_campaign ? collapseWhitespace(input.utm_campaign) : undefined,
    utm_term: input.utm_term ? collapseWhitespace(input.utm_term) : undefined,
    utm_content: input.utm_content ? collapseWhitespace(input.utm_content) : undefined,
  };
}

export function validateContactFormData(
  input: Partial<ContactFormData>
): { data: ContactFormData; errors: ContactValidationErrors; isValid: boolean } {
  const data = normalizeContactFormData(input);
  const errors: ContactValidationErrors = {};

  if (data.name.length < 2) {
    errors.name = "Please enter your full name.";
  } else if (data.name.length > 80) {
    errors.name = "Name must be 80 characters or fewer.";
  }

  if (data.company && data.company.length > 120) {
    errors.company = "Company name must be 120 characters or fewer.";
  }

  if (!EMAIL_REGEX.test(data.email)) {
    errors.email = "Please enter a valid email address.";
  }

  const digitCount = data.phone.replace(/\D/g, "").length;
  if (!PHONE_REGEX.test(data.phone) || digitCount < 7 || digitCount > 15) {
    errors.phone = "Please enter a valid phone or WhatsApp number.";
  }

  if (data.message && data.message.length > 2000) {
    errors.message = "Message must be 2000 characters or fewer.";
  }

  return {
    data,
    errors,
    isValid: Object.keys(errors).length === 0,
  };
}
