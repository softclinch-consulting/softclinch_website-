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
const title = "SAP AMS Support Services in Chennai & India | SoftClinch";
const description =
  "SLA-driven SAP AMS support for S/4HANA and ECC. Incident management, enhancements and continuous improvement from a Chennai-based SAP team. Talk to us today.";

export const metadata = buildMetadata({
  title,
  description,
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
