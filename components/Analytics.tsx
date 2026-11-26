"use client";

import Script from "next/script";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import {
  GA4_MEASUREMENT_ID,
  GADS_CONVERSION_ID,
  captureTrafficAttribution,
  trackPhoneClick,
  trackWhatsAppClick,
  trackEmailClick,
} from "@/lib/analytics";

export function Analytics() {
  const pathname = usePathname();

  // Run traffic attribution capture on mount & path change
  useEffect(() => {
    captureTrafficAttribution();
  }, [pathname]);

  // Global event delegation for tel:, mailto:, and WhatsApp links
  useEffect(() => {
    const handleDocumentClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement | null)?.closest("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href") || "";
      const text = anchor.textContent?.trim() || "";

      if (href.startsWith("tel:")) {
        trackPhoneClick({
          cta_location: anchor.dataset.location || "page_body",
          cta_text: text || "Phone Link",
          phone_number: href.replace("tel:", "").trim(),
        });
      } else if (
        href.includes("wa.me") ||
        href.includes("whatsapp.com") ||
        href.includes("api.whatsapp.com")
      ) {
        trackWhatsAppClick({
          cta_location: anchor.dataset.location || "page_body",
          cta_text: text || "WhatsApp Link",
          link_url: href,
        });
      } else if (href.startsWith("mailto:")) {
        trackEmailClick({
          cta_location: anchor.dataset.location || "page_body",
          cta_text: text || "Mailto Link",
          email_address: href.replace("mailto:", "").trim(),
        });
      }
    };

    document.addEventListener("click", handleDocumentClick, { capture: true });
    return () => {
      document.removeEventListener("click", handleDocumentClick, { capture: true });
    };
  }, []);

  return (
    <>
      {/* Google Consent Mode v2 Defaults & Gtag Init */}
      <Script id="google-consent-and-gtag" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}

          // Google Consent Mode v2 defaults
          gtag('consent', 'default', {
            'ad_storage': 'granted',
            'ad_user_data': 'granted',
            'ad_personalization': 'granted',
            'analytics_storage': 'granted'
          });

          gtag('js', new Date());
          gtag('config', '${GA4_MEASUREMENT_ID}', {
            page_path: window.location.pathname,
            send_page_view: true
          });
          ${
            GADS_CONVERSION_ID
              ? `gtag('config', '${GADS_CONVERSION_ID}');`
              : ""
          }
        `}
      </Script>

      {/* Google Tag Manager / Gtag Library */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA4_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />

      {/* Microsoft Clarity */}
      <Script id="microsoft-clarity" strategy="afterInteractive">
        {`
          (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "sn0ywdf2ed");
        `}
      </Script>
    </>
  );
}
