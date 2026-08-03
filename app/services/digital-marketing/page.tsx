import { DigitalMarketing } from '@/components/DigitalMarketing';
import { SeoJsonLd } from "@/components/SeoJsonLd";
import { buildMetadata } from "@/lib/seo";
import { faqJsonLd, serviceJsonLd, webpageJsonLd } from "@/lib/schema";
import { SITE_NAME } from "@/lib/site";
import { digitalMarketingFaq } from "@/lib/faqs";

const canonicalPath = "/services/digital-marketing";
const title = "SEO, Google Ads & Performance Marketing Services";
const description =
  "Grow your business with SEO, GEO, AEO, Google Ads, Meta Ads, funnels, automation, and performance marketing strategies designed for leads and revenue growth.";

export const metadata = buildMetadata({
  title,
  description,
  keywords: [
    "performance marketing agency",
    "seo services company",
    "google ads agency",
    "meta ads management",
    "digital marketing company",
    "lead generation agency",
    "seo and ppc services",
    "geo optimization services",
    "aeo optimization company",
    "ai search optimization",
  ],
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
