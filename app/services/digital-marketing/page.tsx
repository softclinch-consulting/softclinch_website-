import { DigitalMarketing } from '@/components/DigitalMarketing';
import { SeoJsonLd } from "@/components/SeoJsonLd";
import { buildMetadata } from "@/lib/seo";
import { faqJsonLd, serviceJsonLd, webpageJsonLd } from "@/lib/schema";
import { SITE_NAME } from "@/lib/site";
import { digitalMarketingFaq } from "@/lib/faqs";

const canonicalPath = "/services/digital-marketing";
const title = "Digital Marketing Services";
const description =
  "Data-driven digital marketing for predictable growth: SEO, PPC, content, analytics, funnels, and automation.";

export const metadata = buildMetadata({
  title,
  description,
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
