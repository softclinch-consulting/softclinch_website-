import { DigitalMarketing } from "@/components/DigitalMarketing";
import { SeoJsonLd } from "@/components/SeoJsonLd";
import { buildMetadata } from "@/lib/seo";
import { faqJsonLd, serviceJsonLd, webpageJsonLd } from "@/lib/schema";
import { digitalMarketingFaq } from "@/lib/faqs";

const canonicalPath = "/digital-marketing";
const title = "Digital Marketing Services | SEO, Social Media & Growth Marketing – SoftClinch";
const description =
  "Boost your business with SoftClinch digital marketing services including SEO, performance marketing, social media management and conversion optimization.";

export const metadata = buildMetadata({
  title,
  description,
  keywords: [
    "digital marketing services",
    "SEO services",
    "social media marketing",
    "growth marketing agency",
    "online marketing company",
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
          serviceJsonLd({ canonicalPath, name: "Digital Marketing Services", description }),
          faqJsonLd(digitalMarketingFaq),
        ]}
      />
      <DigitalMarketing />
    </>
  );
}
