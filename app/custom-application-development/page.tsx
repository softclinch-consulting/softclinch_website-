import { CustomDevelopment } from "@/components/CustomDevelopment";
import { SeoJsonLd } from "@/components/SeoJsonLd";
import { landingPageKeywords, landingPageSeo } from "@/lib/landingPageKeywords";
import { buildMetadata } from "@/lib/seo";
import {
  breadcrumbJsonLd,
  faqJsonLd,
  serviceJsonLd,
  webpageJsonLd,
} from "@/lib/schema";
import { customDevelopmentFaq } from "@/lib/faqs";

const canonicalPath = "/custom-application-development";
const title = landingPageSeo.customApplicationDevelopment.title;
const description = landingPageSeo.customApplicationDevelopment.description;

export const metadata = buildMetadata({
  title,
  description,
  keywords: [...landingPageKeywords.customApplicationDevelopment],
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
