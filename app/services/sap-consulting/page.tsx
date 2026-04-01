import { SAPConsulting } from '@/components/SAPConsulting';
import { SeoJsonLd } from "@/components/SeoJsonLd";
import { buildMetadata } from "@/lib/seo";
import { faqJsonLd, serviceJsonLd, webpageJsonLd } from "@/lib/schema";
import { SITE_NAME } from "@/lib/site";

const canonicalPath = "/services/sap-consulting";
const title = "SAP Consulting Services";
const description =
  "End-to-end SAP consulting and implementation: S/4HANA migration, AMS, process optimization, and enterprise integrations.";

export const metadata = buildMetadata({
  title,
  description,
  canonicalPath,
});

const faq = [
  {
    question: "Do you support SAP S/4HANA migration?",
    answer:
      "Yes. We assist with assessment, readiness planning, data strategy, migration execution, and post-go-live stabilization.",
  },
  {
    question: "Can you provide AMS and ongoing support?",
    answer:
      "Yes. We offer AMS support, performance tuning, incident management, enhancements, and integration maintenance.",
  },
  {
    question: "Do you work with integrations (SAP ↔ CRM/BI)?",
    answer:
      "Yes. We design and implement integrations to CRM, data platforms, middleware, and custom APIs with governance and monitoring.",
  },
];

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
          faqJsonLd(faq),
        ]}
      />
      <SAPConsulting />
    </>
  );
}
