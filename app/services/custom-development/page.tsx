import { CustomDevelopment } from '@/components/CustomDevelopment';
import { SeoJsonLd } from "@/components/SeoJsonLd";
import { landingPageKeywords, landingPageSeo } from "@/lib/landingPageKeywords";
import { buildMetadata } from "@/lib/seo";
import { faqJsonLd, serviceJsonLd, webpageJsonLd } from "@/lib/schema";
import { SITE_NAME } from "@/lib/site";
import { customDevelopmentFaq } from "@/lib/faqs";

const canonicalPath = "/services/custom-development";
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
