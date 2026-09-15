import { DigitalMarketing } from "@/components/DigitalMarketing";
import { SeoJsonLd } from "@/components/SeoJsonLd";
import { buildMetadata } from "@/lib/seo";
import { faqJsonLd, serviceJsonLd, webpageJsonLd } from "@/lib/schema";
import { digitalMarketingFaq } from "@/lib/faqs";

const canonicalPath = "/digital-marketing";
const title = "SEO, Google Ads & Performance Marketing Services | SoftClinch";
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
            title,
          }),
          serviceJsonLd({
            canonicalPath,
            name: "SEO, Google Ads and Performance Marketing Services",
            description,
          }),
          faqJsonLd(digitalMarketingFaq),
        ]}
      />
      <DigitalMarketing />
    </>
  );
}
