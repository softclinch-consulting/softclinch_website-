import { CustomDevelopment } from '@/components/CustomDevelopment';
import { SeoJsonLd } from "@/components/SeoJsonLd";
import { buildMetadata } from "@/lib/seo";
import { faqJsonLd, serviceJsonLd, webpageJsonLd } from "@/lib/schema";
import { SITE_NAME } from "@/lib/site";
import { customDevelopmentFaq } from "@/lib/faqs";

const canonicalPath = "/services/custom-development";
const title = "Custom Web & SaaS Development";
const description =
  "Scalable web and SaaS application development: secure APIs, cloud-native architecture, integrations, and performance engineering.";

export const metadata = buildMetadata({
  title,
  description,
  canonicalPath,
});

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
          faqJsonLd(customDevelopmentFaq),
        ]}
      />
      <CustomDevelopment />
    </>
  );
}
