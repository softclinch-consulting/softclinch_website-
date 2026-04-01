import { CustomDevelopment } from '@/components/CustomDevelopment';
import { SeoJsonLd } from "@/components/SeoJsonLd";
import { buildMetadata } from "@/lib/seo";
import { faqJsonLd, serviceJsonLd, webpageJsonLd } from "@/lib/schema";
import { SITE_NAME } from "@/lib/site";

const canonicalPath = "/services/custom-development";
const title = "Custom Web & SaaS Development";
const description =
  "Scalable web and SaaS application development: secure APIs, cloud-native architecture, integrations, and performance engineering.";

export const metadata = buildMetadata({
  title,
  description,
  canonicalPath,
});

const faq = [
  {
    question: "Do you build both web and mobile apps?",
    answer:
      "Yes. We build responsive web apps and mobile applications, with shared backend APIs and scalable cloud infrastructure.",
  },
  {
    question: "Can you integrate with our existing systems?",
    answer:
      "Yes. We integrate with ERP/CRM, payment gateways, analytics, identity providers, and custom internal APIs.",
  },
  {
    question: "Do you provide ongoing maintenance?",
    answer:
      "Yes. We offer maintenance and enhancement retainers, including monitoring, security updates, and feature delivery.",
  },
];

export default function CustomDevelopmentPage() {
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
      <CustomDevelopment />
    </>
  );
}
