import { DigitalMarketing } from '@/components/DigitalMarketing';
import { SeoJsonLd } from "@/components/SeoJsonLd";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbJsonLd, faqJsonLd, serviceJsonLd, webpageJsonLd } from "@/lib/schema";
import { SITE_NAME } from "@/lib/site";
import { digitalMarketingFaq } from "@/lib/faqs";

const canonicalPath = "/services/digital-marketing";
const title = "Performance Marketing, SEO & Google Ads | SoftClinch";
const description =
  "Generate qualified B2B leads & scalable revenue with AI-driven SEO, Google Ads, Meta Ads & conversion funnels. Claim your free marketing growth audit now!";

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
            title,
          }),
          serviceJsonLd({ canonicalPath, name: title, description }),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: "Digital Marketing", path: canonicalPath },
          ]),
          faqJsonLd(digitalMarketingFaq),
        ]}
      />
      <DigitalMarketing />
    </>
  );
}
