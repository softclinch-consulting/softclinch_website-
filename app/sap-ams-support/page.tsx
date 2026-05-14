import { SAPConsulting } from "@/components/SAPConsulting";
import { SeoJsonLd } from "@/components/SeoJsonLd";
import { buildMetadata } from "@/lib/seo";
import { faqJsonLd, serviceJsonLd, webpageJsonLd } from "@/lib/schema";
import { sapConsultingFaq } from "@/lib/faqs";

const canonicalPath = "/sap-ams-support";
const title = "SAP AMS Support & Enterprise SAP Consulting Services | SoftClinch";
const description =
  "Enterprise SAP AMS support services including SAP implementation, monitoring, optimization, migration, and functional consulting for scalable business operations.";

export const metadata = buildMetadata({
  title,
  description,
  keywords: [
    "sap ams support",
    "sap consulting company",
    "enterprise sap consulting",
    "sap implementation services",
    "sap support services",
    "sap migration solutions",
    "sap mm support",
    "sap sd support",
    "sap fico consulting",
    "sap managed services",
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
          }),
          faqJsonLd(sapConsultingFaq),
        ]}
      />
      <SAPConsulting />
    </>
  );
}
