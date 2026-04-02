import { CustomDevelopment } from "@/components/CustomDevelopment";
import { SeoJsonLd } from "@/components/SeoJsonLd";
import { buildMetadata } from "@/lib/seo";
import { faqJsonLd, serviceJsonLd, webpageJsonLd } from "@/lib/schema";
import { customDevelopmentFaq } from "@/lib/faqs";

const canonicalPath = "/custom-application-development";
const title = "Custom Application Development Services | Software Development – SoftClinch";
const description =
  "SoftClinch builds scalable custom applications, SaaS platforms, enterprise software and business automation tools tailored for your company.";

export const metadata = buildMetadata({
  title,
  description,
  keywords: [
    "custom software development",
    "application development services",
    "SaaS development company",
    "enterprise software development",
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
          serviceJsonLd({ canonicalPath, name: "Custom Application Development Services", description }),
          faqJsonLd(customDevelopmentFaq),
        ]}
      />
      <CustomDevelopment />
    </>
  );
}
