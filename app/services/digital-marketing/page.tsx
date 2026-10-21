import { DigitalMarketing } from '@/components/DigitalMarketing';
import { SeoJsonLd } from "@/components/SeoJsonLd";
import { buildMetadata } from "@/lib/seo";
import { faqJsonLd, serviceJsonLd, webpageJsonLd } from "@/lib/schema";
import { SITE_NAME } from "@/lib/site";
import { digitalMarketingFaq } from "@/lib/faqs";

const canonicalPath = "/digital-marketing";
const title = "Performance Marketing, SEO & Google Ads | SoftClinch";
const description =
  "Generate qualified B2B leads & scalable revenue with AI-driven SEO, Google Ads, Meta Ads & conversion funnels. Claim your free marketing growth audit now!";

export const metadata = buildMetadata({
  title,
  description,
  keywords: [
    "performance marketing agency",
    "b2b performance marketing agency",
    "roi driven seo services",
    "google ads agency for lead generation",
    "meta ads management",
    "digital marketing company chennai",
    "lead generation agency",
    "ai search optimization company",
    "geo aeo marketing services",
    "conversion funnel optimization",
    "b2b digital marketing agency",
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
            title,
          }),
          serviceJsonLd({ canonicalPath, name: title, description }),
          faqJsonLd(digitalMarketingFaq),
        ]}
      />
      <DigitalMarketing />
    </>
  );
}
