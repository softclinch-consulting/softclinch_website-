import { DigitalMarketing } from '@/components/DigitalMarketing';
import { SeoJsonLd } from "@/components/SeoJsonLd";
import { landingPageKeywords, landingPageSeo } from "@/lib/landingPageKeywords";
import { buildMetadata } from "@/lib/seo";
import { faqJsonLd, serviceJsonLd, webpageJsonLd } from "@/lib/schema";
import { SITE_NAME } from "@/lib/site";
import { digitalMarketingFaq } from "@/lib/faqs";

const canonicalPath = "/services/digital-marketing";
const title = landingPageSeo.digitalMarketing.title;
const description = landingPageSeo.digitalMarketing.description;

export const metadata = buildMetadata({
  title,
  description,
  keywords: [...landingPageKeywords.digitalMarketing],
  canonicalPath,
});

export default function DigitalMarketingPage() {
  return (
    <>
      <SeoJsonLd
        data={[
          webpageJsonLd({
            canonicalPath,
            title: `${title} | ${SITE_NAME}`,
          }),
          serviceJsonLd({ canonicalPath, name: title, description }),
          faqJsonLd(digitalMarketingFaq),
        ]}
      />
      <DigitalMarketing />
    </>
  );
}
