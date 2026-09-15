function getTrimmedEnv(name: string) {
  return process.env[name]?.trim() || "";
}

function maskEmailAddress(value: string) {
  const [localPart = "", domain = ""] = value.split("@");
  if (!localPart || !domain) {
    return value;
  }

  const visibleLocalPart =
    localPart.length <= 2
      ? `${localPart[0] ?? ""}*`
      : `${localPart.slice(0, 2)}***`;

  return `${visibleLocalPart}@${domain}`;
}

function summarizeBrevoPayload(path: string, body: Record<string, unknown>) {
  const to = Array.isArray(body.to)
    ? body.to.map((entry) => {
        if (!entry || typeof entry !== "object") {
          return entry;
        }

        const recipient = entry as { email?: unknown; name?: unknown };
        return {
          email:
            typeof recipient.email === "string"
              ? maskEmailAddress(recipient.email)
              : recipient.email,
          name: recipient.name,
        };
      })
    : undefined;

  const sender =
    body.sender && typeof body.sender === "object"
      ? {
          ...(body.sender as Record<string, unknown>),
          email:
            typeof (body.sender as { email?: unknown }).email === "string"
              ? maskEmailAddress((body.sender as { email: string }).email)
              : (body.sender as { email?: unknown }).email,
        }
      : undefined;

  return {
    path,
    templateId: body.templateId,
    listIds: body.listIds,
    updateEnabled: body.updateEnabled,
    email:
      typeof body.email === "string" ? maskEmailAddress(body.email) : body.email,
    sender,
    to,
    params:
      body.params && typeof body.params === "object"
        ? {
            ...((body.params as Record<string, unknown>) || {}),
            email:
              typeof (body.params as { email?: unknown }).email === "string"
                ? maskEmailAddress((body.params as { email: string }).email)
                : (body.params as { email?: unknown }).email,
            message:
              typeof (body.params as { message?: unknown }).message === "string"
                ? `[length:${((body.params as { message: string }).message || "").length}]`
                : (body.params as { message?: unknown }).message,
          }
        : body.params,
  };
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
    email: getTrimmedEnv("BREVO_SENDER_EMAIL") || "info@softclinch.com",
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
      listId:
        Number(
          getTrimmedEnv("BREVO_ENTERPRISE_LIST_ID") ||
            getTrimmedEnv("BREVO_ENTERPRISE_CONTACT_LIST_ID") ||
            getTrimmedEnv("BREVO_CONTACT_LIST_ID") ||
            getTrimmedEnv("BREVO_LIST_ID") ||
            "5"
        ) || 5,
      customerTemplateId:
        Number(
          getTrimmedEnv("BREVO_USER_TEMPLATE_ID") ||
            getTrimmedEnv("BREVO_ENTERPRISE_TEMPLATE_ID") ||
            getTrimmedEnv("BREVO_ENTERPRISE_CONFIRMATION_TEMPLATE_ID") ||
            getTrimmedEnv("BREVO_CONFIRMATION_TEMPLATE_ID") ||
            getTrimmedEnv("BREVO_TEMPLATE_ID") ||
            "8"
        ) || 8,
    };
  }

  return {
    listId:
      Number(
        getTrimmedEnv("BREVO_CONTACT_LIST_ID") ||
          getTrimmedEnv("BREVO_LIST_ID") ||
          "5"
      ) || 5,
    customerTemplateId:
      Number(
        getTrimmedEnv("BREVO_USER_TEMPLATE_ID") ||
          getTrimmedEnv("BREVO_CONFIRMATION_TEMPLATE_ID") ||
          getTrimmedEnv("BREVO_TEMPLATE_ID") ||
          "8"
      ) || 8,
  };
}

export function getBrevoAdminTemplateId() {
  return getRequiredEnvNumber([
    "BREVO_ADMIN_TEMPLATE_ID",
    "BREVO_NOTIFICATION_TEMPLATE_ID",
  ]);
}

export function getOptionalBrevoAdminTemplateId() {
  const value =
    getTrimmedEnv("BREVO_ADMIN_TEMPLATE_ID") ||
    getTrimmedEnv("BREVO_NOTIFICATION_TEMPLATE_ID");

  if (!value) {
    return null;
  }

  const parsed = Number(value);
  if (!Number.isInteger(parsed) || parsed <= 0) {
    throw new Error(
      "Environment variable BREVO_ADMIN_TEMPLATE_ID must be a positive integer."
    );
  }

  return parsed;
}

export async function postToBrevo<TResponse>(
  path: string,
  body: Record<string, unknown>
) {
  console.log("[brevo] request", summarizeBrevoPayload(path, body));

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

  console.log("[brevo] response", {
    path,
    status: response.status,
    ok: response.ok,
    body: parsedBody,
    headers: Object.fromEntries(response.headers.entries()),
  });

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
