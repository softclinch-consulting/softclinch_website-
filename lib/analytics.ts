/**
 * Centralized Conversion & Event Tracking for GA4 and Google Ads.
 * Follows Google Consent Mode v2 and Google Ads Conversion Tag guidelines.
 */

export const GA4_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA4_ID || "G-LWBC6JQ9XS";

export const GADS_CONVERSION_ID =
  process.env.NEXT_PUBLIC_GADS_ID || "";

export const GADS_CONV_LABELS = {
  LEAD: process.env.NEXT_PUBLIC_GADS_CONV_LABEL_LEAD || "",
  WHATSAPP: process.env.NEXT_PUBLIC_GADS_CONV_LABEL_WHATSAPP || "",
  PHONE: process.env.NEXT_PUBLIC_GADS_CONV_LABEL_PHONE || "",
  DEMO: process.env.NEXT_PUBLIC_GADS_CONV_LABEL_DEMO || "",
};

export type TrafficAttribution = {
  gclid?: string;
  wbraid?: string;
  gbraid?: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
  landing_page?: string;
  referrer?: string;
  captured_at?: string;
};

const STORAGE_KEY = "softclinch_traffic_attribution";

/**
 * Capture UTM and gclid attribution parameters upon landing and persist in sessionStorage.
 */
export function captureTrafficAttribution(): TrafficAttribution | null {
  if (typeof window === "undefined") return null;

  try {
    const params = new URLSearchParams(window.location.search);
    const gclid = params.get("gclid") || undefined;
    const wbraid = params.get("wbraid") || undefined;
    const gbraid = params.get("gbraid") || undefined;
    const utm_source = params.get("utm_source") || undefined;
    const utm_medium = params.get("utm_medium") || undefined;
    const utm_campaign = params.get("utm_campaign") || undefined;
    const utm_term = params.get("utm_term") || undefined;
    const utm_content = params.get("utm_content") || undefined;

    const hasNewParams =
      Boolean(gclid || wbraid || gbraid || utm_source || utm_medium || utm_campaign || utm_term || utm_content);

    const existingRaw = window.sessionStorage.getItem(STORAGE_KEY);
    const existing: TrafficAttribution = existingRaw ? JSON.parse(existingRaw) : {};

    if (hasNewParams || !existingRaw) {
      const updated: TrafficAttribution = {
        ...existing,
        ...(gclid ? { gclid } : {}),
        ...(wbraid ? { wbraid } : {}),
        ...(gbraid ? { gbraid } : {}),
        ...(utm_source ? { utm_source } : {}),
        ...(utm_medium ? { utm_medium } : {}),
        ...(utm_campaign ? { utm_campaign } : {}),
        ...(utm_term ? { utm_term } : {}),
        ...(utm_content ? { utm_content } : {}),
        landing_page: existing.landing_page || window.location.pathname,
        referrer: existing.referrer || document.referrer || undefined,
        captured_at: existing.captured_at || new Date().toISOString(),
      };
      window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      return updated;
    }

    return existing;
  } catch (err) {
    console.warn("Unable to capture attribution parameters:", err);
    return null;
  }
}

/**
 * Retrieve current session attribution to include in form submissions.
 */
export function getTrafficAttribution(): TrafficAttribution {
  if (typeof window === "undefined") return {};
  try {
    const raw = window.sessionStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

/**
 * Dispatches generic GA4 event and optional Google Ads conversion tag.
 */
export function trackEvent(eventName: string, params: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;

  const eventPayload = {
    ...params,
    page_path: window.location.pathname,
    page_location: window.location.href,
  };

  // Push to dataLayer / gtag
  if (typeof (window as any).gtag === "function") {
    (window as any).gtag("event", eventName, eventPayload);
  } else if ((window as any).dataLayer) {
    (window as any).dataLayer.push({ event: eventName, ...eventPayload });
  }

  if (process.env.NODE_ENV === "development") {
    console.info(`[Analytics Event] ${eventName}:`, eventPayload);
  }
}

/**
 * Fires Google Ads conversion when a conversion label is configured.
 */
function fireGoogleAdsConversion(label: string, params: Record<string, unknown> = {}) {
  if (typeof window === "undefined" || !GADS_CONVERSION_ID || !label) return;

  const sendTo = `${GADS_CONVERSION_ID}/${label}`;
  if (typeof (window as any).gtag === "function") {
    (window as any).gtag("event", "conversion", {
      send_to: sendTo,
      ...params,
    });
  }
}

/**
 * 1. Form submission conversion event.
 * MUST be fired ONLY after the backend returns a successful 200 response.
 */
export function trackLeadGenerated(details: {
  formId?: string | number;
  service?: string;
  leadType?: "contact" | "consultation" | "audit" | "landing_page";
  [key: string]: unknown;
}) {
  const payload = {
    form_id: details.formId || "consultation_form",
    service_requested: details.service || "Unspecified",
    lead_type: details.leadType || "consultation",
    ...details,
  };

  // Fire GA4 standard generate_lead event
  trackEvent("generate_lead", payload);

  // Fire Google Ads conversion
  if (GADS_CONV_LABELS.LEAD) {
    fireGoogleAdsConversion(GADS_CONV_LABELS.LEAD, payload);
  }
}

export type TrackClickInput =
  | string
  | {
      cta_location?: string;
      cta_text?: string;
      link_url?: string;
      phone_number?: string;
      email_address?: string;
    };

/**
 * 2. WhatsApp Click tracking.
 */
export function trackWhatsAppClick(details?: TrackClickInput) {
  const d = typeof details === "string" ? { cta_location: details } : (details || {});
  const payload = {
    cta_location: d.cta_location || "unknown",
    cta_text: d.cta_text || "WhatsApp",
    link_url: d.link_url || "https://wa.me/919445679878",
  };

  trackEvent("click_whatsapp", payload);

  if (GADS_CONV_LABELS.WHATSAPP) {
    fireGoogleAdsConversion(GADS_CONV_LABELS.WHATSAPP, payload);
  }
}

/**
 * 3. Phone Call Click tracking.
 */
export function trackPhoneClick(details?: TrackClickInput) {
  const d = typeof details === "string" ? { cta_location: details } : (details || {});
  const payload = {
    cta_location: d.cta_location || "unknown",
    cta_text: d.cta_text || "Call Us",
    phone_number: d.phone_number || "+91 94456 79878",
  };

  trackEvent("click_phone", payload);

  if (GADS_CONV_LABELS.PHONE) {
    fireGoogleAdsConversion(GADS_CONV_LABELS.PHONE, payload);
  }
}

/**
 * 4. Email Click tracking.
 */
export function trackEmailClick(details?: TrackClickInput) {
  const d = typeof details === "string" ? { cta_location: details } : (details || {});
  const payload = {
    cta_location: d.cta_location || "unknown",
    cta_text: d.cta_text || "Email Us",
    email_address: d.email_address || "info@softclinch.com",
  };

  trackEvent("click_email", payload);
}

/**
 * 5. Inaiwazhi Demo Request tracking.
 */
export function trackDemoRequest(details: {
  cta_location?: string;
  cta_text?: string;
  platform?: string;
} = {}) {
  const payload = {
    cta_location: details.cta_location || "inaiwazhi_card",
    cta_text: details.cta_text || "Request Demo",
    platform: details.platform || "Inaiwazhi WhatsApp Platform",
  };

  trackEvent("request_demo", payload);

  if (GADS_CONV_LABELS.DEMO) {
    fireGoogleAdsConversion(GADS_CONV_LABELS.DEMO, payload);
  }
}

/**
 * 6. Primary CTA click tracking.
 */
export function trackCtaClick(
  cta_text_or_details:
    | string
    | {
        cta_text?: string;
        cta_name?: string;
        cta_location?: string;
        page_path?: string;
      },
  cta_location?: string,
  page_path?: string
) {
  let text = "CTA Click";
  let location = "unknown";
  let path = typeof window !== "undefined" ? window.location.pathname : "";

  if (typeof cta_text_or_details === "string") {
    text = cta_text_or_details;
    if (cta_location) location = cta_location;
    if (page_path) path = page_path;
  } else if (cta_text_or_details) {
    text = cta_text_or_details.cta_text || cta_text_or_details.cta_name || text;
    location = cta_text_or_details.cta_location || location;
    path = cta_text_or_details.page_path || path;
  }

  trackEvent("cta_click", {
    cta_text: text,
    cta_location: location,
    page_path: path,
  });
}
