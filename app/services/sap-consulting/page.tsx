import { SAPConsulting } from '@/components/SAPConsulting';
import { SeoJsonLd } from "@/components/SeoJsonLd";
import { buildMetadata } from "@/lib/seo";
import { faqJsonLd, serviceJsonLd, webpageJsonLd } from "@/lib/schema";
import { SITE_NAME } from "@/lib/site";
import { sapConsultingFaq } from "@/lib/faqs";

const canonicalPath = "/services/sap-consulting";
const title = "SAP Consulting Services";
const description =
  "End-to-end SAP consulting and implementation: S/4HANA migration, AMS, process optimization, and enterprise integrations.";

export const metadata = buildMetadata({
  title,
  description,
  canonicalPath,
});

export default function SAPConsultingPage() {
  return (
    <>
      <SeoJsonLd
        data={[
          webpageJsonLd({
            canonicalPath,
            title: `${title} | ${SITE_NAME}`,
          }),
          serviceJsonLd({ canonicalPath, name: title, description }),
          faqJsonLd(sapConsultingFaq),
        ]}
      />
      <SAPConsulting />
    </>
  );
}
