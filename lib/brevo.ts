import { BrevoClient } from "@getbrevo/brevo";

let brevoClient: BrevoClient | null = null;

function getTrimmedEnv(name: string) {
  return process.env[name]?.trim() || "";
}

export function getRequiredEnv(nameOrNames: string | string[]) {
  const names = Array.isArray(nameOrNames) ? nameOrNames : [nameOrNames];

  for (const name of names) {
    const value = getTrimmedEnv(name);
    if (value) {
      return value;
    }
  }

  const error = new Error(
    `Missing required environment variable: ${names.join(" or ")}`
  ) as Error & { missingEnv?: string };
  error.missingEnv = names[0];
  throw error;
}

export function getRequiredEnvNumber(nameOrNames: string | string[]) {
  const value = Number(getRequiredEnv(nameOrNames));
  const primaryName = Array.isArray(nameOrNames) ? nameOrNames[0] : nameOrNames;

  if (!Number.isInteger(value) || value <= 0) {
    throw new Error(`Environment variable ${primaryName} must be a positive integer.`);
  }

  return value;
}

export function getBrevoClient() {
  if (!brevoClient) {
    brevoClient = new BrevoClient({
      apiKey: getRequiredEnv("BREVO_API_KEY"),
      timeoutInSeconds: 30,
      maxRetries: 2,
    });
  }

  return brevoClient;
}

export function getBrevoSender() {
  return {
    email: getRequiredEnv("BREVO_SENDER_EMAIL"),
    name: getTrimmedEnv("BREVO_SENDER_NAME") || "SoftClinch Consulting Services",
  };
}

export function getBrevoAdminRecipient() {
  return {
    email: getTrimmedEnv("BREVO_ADMIN_EMAIL") || "info@softclinch.com",
    name: getTrimmedEnv("BREVO_ADMIN_NAME") || "SoftClinch",
  };
}

export function getBrevoFormConfig(formId: 1 | 23) {
  if (formId === 23) {
    return {
      listId: getRequiredEnvNumber([
        "BREVO_ENTERPRISE_LIST_ID",
        "BREVO_ENTERPRISE_CONTACT_LIST_ID",
        "BREVO_CONTACT_LIST_ID",
        "BREVO_LIST_ID",
      ]),
      templateId: getRequiredEnvNumber([
        "BREVO_ENTERPRISE_TEMPLATE_ID",
        "BREVO_ENTERPRISE_CONFIRMATION_TEMPLATE_ID",
        "BREVO_CONFIRMATION_TEMPLATE_ID",
      ]),
    };
  }

  return {
    listId: getRequiredEnvNumber(["BREVO_CONTACT_LIST_ID", "BREVO_LIST_ID"]),
    templateId: getRequiredEnvNumber([
      "BREVO_CONFIRMATION_TEMPLATE_ID",
      "BREVO_TEMPLATE_ID",
    ]),
  };
}
