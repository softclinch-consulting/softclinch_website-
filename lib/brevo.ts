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

export function getBrevoSender() {
  return {
    email: getRequiredEnv("BREVO_SENDER_EMAIL"),
    name: getTrimmedEnv("BREVO_SENDER_NAME") || "SoftClinch Consulting Services",
  };
}

export function getBrevoAdminRecipient() {
  return {
    email:
      getTrimmedEnv("ADMIN_EMAIL") ||
      getTrimmedEnv("BREVO_ADMIN_EMAIL") ||
      "info@softclinch.com",
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
      customerTemplateId: getRequiredEnvNumber([
        "BREVO_USER_TEMPLATE_ID",
        "BREVO_ENTERPRISE_TEMPLATE_ID",
        "BREVO_ENTERPRISE_CONFIRMATION_TEMPLATE_ID",
        "BREVO_CONFIRMATION_TEMPLATE_ID",
        "BREVO_TEMPLATE_ID",
      ]),
    };
  }

  return {
    listId: getRequiredEnvNumber(["BREVO_CONTACT_LIST_ID", "BREVO_LIST_ID"]),
    customerTemplateId: getRequiredEnvNumber([
      "BREVO_USER_TEMPLATE_ID",
      "BREVO_CONFIRMATION_TEMPLATE_ID",
      "BREVO_TEMPLATE_ID",
    ]),
  };
}

export function getBrevoAdminTemplateId() {
  return getRequiredEnvNumber([
    "BREVO_ADMIN_TEMPLATE_ID",
    "BREVO_NOTIFICATION_TEMPLATE_ID",
  ]);
}

export async function postToBrevo<TResponse>(
  path: string,
  body: Record<string, unknown>
) {
  const response = await fetch(`https://api.brevo.com/v3${path}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "api-key": getRequiredEnv("BREVO_API_KEY"),
    },
    body: JSON.stringify(body),
    cache: "no-store",
  });

  const rawText = await response.text();
  const parsedBody = rawText ? tryParseJson(rawText) : undefined;

  if (!response.ok) {
    const error = new Error(
      `Brevo API error (${response.status}): ${
        typeof parsedBody === "string" ? parsedBody : rawText
      }`
    ) as Error & {
      statusCode?: number;
      body?: unknown;
      rawResponse?: { headers?: Record<string, string> };
    };

    error.statusCode = response.status;
    error.body = parsedBody;
    error.rawResponse = {
      headers: Object.fromEntries(response.headers.entries()),
    };

    throw error;
  }

  return parsedBody as TResponse;
}

function tryParseJson(value: string) {
  try {
    return JSON.parse(value) as unknown;
  } catch {
    return value;
  }
}
