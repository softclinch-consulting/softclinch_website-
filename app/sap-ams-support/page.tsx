import { SAPConsulting } from "@/components/SAPConsulting";
import { SeoJsonLd } from "@/components/SeoJsonLd";
import { buildMetadata } from "@/lib/seo";
import { faqJsonLd, serviceJsonLd, webpageJsonLd } from "@/lib/schema";
import { sapConsultingFaq } from "@/lib/faqs";

const canonicalPath = "/sap-ams-support";
const title = "SAP AMS Support Services | SAP Application Management – SoftClinch";
const description =
  "Expert SAP AMS support services including SAP maintenance, optimization, system monitoring and enterprise support.";

export const metadata = buildMetadata({
  title,
  description,
  keywords: [
    "SAP AMS support",
    "SAP application management services",
    "SAP consulting company",
    "SAP maintenance services",
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
          serviceJsonLd({ canonicalPath, name: "SAP AMS Support Services", description }),
          faqJsonLd(sapConsultingFaq),
        ]}
      />
      <SAPConsulting />
    </>
  );
}
