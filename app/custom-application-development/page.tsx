import { CustomDevelopment } from "@/components/CustomDevelopment";
import { SeoJsonLd } from "@/components/SeoJsonLd";
import { buildMetadata } from "@/lib/seo";
import {
  breadcrumbJsonLd,
  faqJsonLd,
  serviceJsonLd,
  webpageJsonLd,
} from "@/lib/schema";
import { customDevelopmentFaq } from "@/lib/faqs";

const canonicalPath = "/custom-application-development";
const title = "Custom Software & SaaS Application Development Company | SoftClinch";
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
    "nextjs development company",
    "react development services",
    "nodejs development company",
    "custom crm development",
    "dashboard development services",
    "cloud native applications",
    "microservices development",
    "mobile app development company",
    "graphql api development",
    "full stack development company",
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
            title,
          }),
          serviceJsonLd({
            canonicalPath,
            name: "Custom Software and SaaS Application Development Services",
            description,
          }),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Custom Application Development", path: canonicalPath },
          ]),
          faqJsonLd(customDevelopmentFaq),
        ]}
      />
      <CustomDevelopment />
    </>
  );
}
