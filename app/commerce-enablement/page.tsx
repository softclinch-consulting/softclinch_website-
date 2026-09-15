import { CommerceEnablement } from "@/components/CommerceEnablement";
import { SeoJsonLd } from "@/components/SeoJsonLd";
import { commerceEnablementFaq } from "@/lib/commerceEnablement";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbJsonLd, faqJsonLd, serviceJsonLd, webpageJsonLd } from "@/lib/schema";

const canonicalPath = "/commerce-enablement";
const title = "Ecommerce Consulting Services & Growth Strategy | SoftClinch";
const description =
  "Scale your ecommerce business with expert consulting, platform optimization, CRO, marketing analytics, automation and a prioritized 90-day growth roadmap.";

export const metadata = buildMetadata({
  title,
  description,
  canonicalPath,
  keywords: [
    "ecommerce consulting services",
    "ecommerce growth strategy",
    "ecommerce optimization services",
    "ecommerce consulting company",
    "ecommerce audit services",
    "ecommerce conversion optimization",
    "ecommerce platform consulting",
    "ecommerce technology consulting",
    "ecommerce automation services",
    "ecommerce marketing automation",
    "ecommerce customer experience optimization",
    "ecommerce analytics consulting",
    "ecommerce performance optimization",
    "Shopify ecommerce consulting",
    "WooCommerce ecommerce consulting",
    "ecommerce growth services",
  ],
});

export default function CommerceEnablementPage() {
  return (
    <>
      <SeoJsonLd
        data={[
          webpageJsonLd({ canonicalPath, title }),
          serviceJsonLd({
            canonicalPath,
            name: "Commerce Enablement Consulting Program",
            description,
          }),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Commerce Enablement", path: canonicalPath },
          ]),
          faqJsonLd(commerceEnablementFaq),
        ]}
      />
      <CommerceEnablement />
    </>
  );
}
