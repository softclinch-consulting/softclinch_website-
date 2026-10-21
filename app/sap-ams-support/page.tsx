import { SAPConsulting } from "@/components/SAPConsulting";
import { SeoJsonLd } from "@/components/SeoJsonLd";
import { buildMetadata } from "@/lib/seo";
import {
  breadcrumbJsonLd,
  faqJsonLd,
  professionalServiceJsonLd,
  serviceJsonLd,
  webpageJsonLd,
} from "@/lib/schema";
import { sapAmsFaq } from "@/lib/faqs";

const canonicalPath = "/sap-ams-support";
const title = "SAP AMS Support & Enterprise Consulting Services | SoftClinch";
const description =
  "Maximize SAP uptime with 24/7 SLA-backed AMS support, S/4HANA migration, FICO/MM/SD optimization & managed services. Request your free SAP system audit!";

export const metadata = buildMetadata({
  title,
  description,
  keywords: [
    "sap ams support services india",
    "24/7 sap ams support",
    "sla backed sap support",
    "sap consulting company chennai",
    "enterprise sap consulting",
    "sap implementation services",
    "sap s4hana migration support",
    "sap fico ams consulting",
    "sap mm sd support company",
    "cost effective sap ams support",
    "sap managed services partner",
  ],
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
          professionalServiceJsonLd({
            canonicalPath,
            name: "SAP AMS Support & ERP Consulting Services - Chennai",
            description,
          }),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: "SAP AMS Support", path: canonicalPath },
          ]),
          faqJsonLd(sapAmsFaq),
        ]}
      />
      <SAPConsulting />
    </>
  );
}
