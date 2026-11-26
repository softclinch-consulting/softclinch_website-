import { DigitalMarketing } from "@/components/DigitalMarketing";
import { SeoJsonLd } from "@/components/SeoJsonLd";
import { RelatedReading } from "@/components/RelatedReading";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbJsonLd, faqJsonLd, serviceJsonLd, webpageJsonLd } from "@/lib/schema";
import { digitalMarketingFaq } from "@/lib/faqs";

const canonicalPath = "/digital-marketing";
const title = "Digital Marketing & SEO in Chennai | SoftClinch";
const description =
  "Generate qualified B2B leads with SEO, GEO, AEO & performance PPC marketing in Chennai. Outrank competitors. Get a free digital marketing audit.";

export const metadata = buildMetadata({
  title,
  description,
  ogTitle: "Data-Driven Performance Marketing & SEO Agency in Chennai",
  ogDescription:
    "Proven search visibility and lead generation strategies for enterprise tech, manufacturing and growing brands. Request your performance strategy.",
  twitterTitle: title,
  twitterDescription:
    "Data-driven SEO, Google Ads, and AI-search optimization in Chennai with SoftClinch.",
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
