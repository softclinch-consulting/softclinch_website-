import { SAPConsulting } from "@/components/SAPConsulting";
import { SeoJsonLd } from "@/components/SeoJsonLd";
import { RelatedReading } from "@/components/RelatedReading";
import { buildMetadata } from "@/lib/seo";
import {
  breadcrumbJsonLd,
  faqJsonLd,
  serviceJsonLd,
  webpageJsonLd,
} from "@/lib/schema";
import { sapAmsFaq } from "@/lib/faqs";

const canonicalPath = "/sap-ams-support";
const title = "SAP AMS Support in Chennai | SLA-Based 24x7 – SoftClinch";
const description =
  "Ensure 99.9% SAP uptime with SLA-based AMS support in Chennai. Incident resolution, enhancements & L1-L4 support. Contact our AMS head today.";

export const metadata = buildMetadata({
  title,
  description,
  ogTitle: "24x7 SAP AMS Support Services in Chennai | SoftClinch",
  ogDescription:
    "Enterprise SAP AMS support in Chennai with guaranteed SLA response times, functional monitoring & user training. Schedule your AMS review.",
  twitterTitle: "SAP AMS Support in Chennai | SLA-Based 24x7 – SoftClinch",
  twitterDescription:
    "24x7 SLA-backed SAP AMS support, incident management & ECC/S4HANA enhancements in Chennai.",
  canonicalPath,
});

export default function SAPAmsSupportPage() {
  return (
    <>
      <SeoJsonLd
        data={[
          webpageJsonLd({
            canonicalPath,
            title,
          }),
          serviceJsonLd({
            canonicalPath,
            name: "SAP AMS Support and Enterprise SAP Consulting Services",
            description,
            serviceType: "SAP Application Management Support, ERP Managed Services, S/4HANA Support",
            areaServed: [
              "Chennai",
              "Tamil Nadu",
              "Coimbatore",
              "Hosur",
              "India",
            ],
          }),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: "SAP AMS Support", path: canonicalPath },
          ]),
          faqJsonLd(sapAmsFaq),
        ]}
      />
      <SAPConsulting faqs={sapAmsFaq} />
      <RelatedReading
        slugs={[
          "how-sap-helps-enterprises-scale-2026",
          "seo-vs-geo-vs-aeo-traffic-2026",
        ]}
      />
    </>
  );
}
