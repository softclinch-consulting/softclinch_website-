import { DigitalMarketing } from "@/components/DigitalMarketing";
import { SeoJsonLd } from "@/components/SeoJsonLd";
import { RelatedReading } from "@/components/RelatedReading";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbJsonLd, faqJsonLd, serviceJsonLd, webpageJsonLd } from "@/lib/schema";
import { digitalMarketingFaq } from "@/lib/faqs";

const canonicalPath = "/digital-marketing";
const title = "Digital Marketing & SEO Services in Chennai | SoftClinch";
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
          serviceJsonLd({
            canonicalPath,
            name: "B2B Digital Marketing, SEO & Performance Marketing Services",
            description,
            serviceType: "SEO Services, Google Ads Management, Meta Ads, B2B Performance Marketing, GEO, AEO",
            areaServed: [
              "Chennai",
              "Tamil Nadu",
              "Coimbatore",
              "Madurai",
              "Salem",
              "Hosur",
              "India",
            ],
          }),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: "Digital Marketing", path: canonicalPath },
          ]),
          faqJsonLd(digitalMarketingFaq),
        ]}
      />
      <DigitalMarketing />
      <RelatedReading
        slugs={[
          "google-ai-search-seo-business-websites",
          "why-businesses-lose-leads-after-enquiries",
          "meta-ads-vs-google-ads-comparison",
        ]}
      />
    </>
  );
}
