export type ContactFormData = {
  name: string;
  company: string;
  email: string;
  phone: string;
  message: string;
};

export type ContactSubmissionInput = Partial<ContactFormData> & {
  website?: string;
  formStartedAt?: number;
  recaptchaToken?: string;
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
    message: normalizeMultiline(input.message ?? ""),
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

  if (data.company.length < 2) {
    errors.company = "Please enter your company name.";
  } else if (data.company.length > 120) {
    errors.company = "Company name must be 120 characters or fewer.";
  }

  if (!EMAIL_REGEX.test(data.email)) {
    errors.email = "Please enter a valid email address.";
  }

  const digitCount = data.phone.replace(/\D/g, "").length;
  if (!PHONE_REGEX.test(data.phone) || digitCount < 7 || digitCount > 15) {
    errors.phone = "Please enter a valid phone number.";
  }

  if (data.message.length < 10) {
    errors.message = "Please tell us a bit more about your project.";
  } else if (data.message.length > 2000) {
    errors.message = "Message must be 2000 characters or fewer.";
  }

  return {
    data,
    errors,
    isValid: Object.keys(errors).length === 0,
  };
}
