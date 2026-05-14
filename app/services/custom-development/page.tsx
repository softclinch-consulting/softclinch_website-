import { CustomDevelopment } from '@/components/CustomDevelopment';
import { SeoJsonLd } from "@/components/SeoJsonLd";
import { buildMetadata } from "@/lib/seo";
import { faqJsonLd, serviceJsonLd, webpageJsonLd } from "@/lib/schema";
import { SITE_NAME } from "@/lib/site";
import { customDevelopmentFaq } from "@/lib/faqs";

const canonicalPath = "/services/custom-development";
const title = "Custom Software & SaaS Application Development Company";
const description =
  "Build scalable SaaS platforms, enterprise applications, mobile apps, dashboards, and custom software solutions with secure API integrations and modern technologies.";

export const metadata = buildMetadata({
  title,
  description,
  keywords: [
    "custom software development company",
    "saas development company",
    "web application development",
    "enterprise app development",
    "custom web application development",
    "cloud application development",
    "saas platform development",
    "api integration services",
    "enterprise software development",
    "custom business software",
  ],
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
