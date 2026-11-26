import { buildMetadata } from "@/lib/seo";
import { SeoJsonLd } from "@/components/SeoJsonLd";
import { breadcrumbJsonLd, serviceJsonLd, webpageJsonLd } from "@/lib/schema";
import { CustomCommerceLanding } from "@/components/CustomCommerceLanding";
import { RelatedReading } from "@/components/RelatedReading";

const title = "Custom Ecommerce Development in Chennai | SoftClinch";
const description =
  "Scale your online store with custom eCommerce development in Chennai. High-converting checkout, ERP sync & headless speed. Get a store audit.";

export const metadata = buildMetadata({
  title,
  description,
  ogTitle: "Enterprise Custom Ecommerce Engineering | SoftClinch Chennai",
  ogDescription:
    "Build high-speed, secure e-commerce systems with integrated ERP/CRM inventory sync and payment automation. Consult our e-commerce engineers.",
  twitterTitle: title,
  twitterDescription:
    "Build headless e-commerce stores, custom checkout and ERP-connected shopping platforms in Chennai.",
  canonicalPath: "/custom-commerce-development",
  keywords: [
    "custom ecommerce development company",
    "headless ecommerce development services",
    "b2b ecommerce portal development",
    "ecommerce erp integration",
    "custom shopify development company",
    "woocommerce custom development",
    "ecommerce whatsapp automation",
    "custom commerce engineering",
  ],
});

export default function CustomCommerceDevelopmentPage() {
  return (
    <>
      <SeoJsonLd
        data={[
          webpageJsonLd({ canonicalPath: "/custom-commerce-development", title }),
          serviceJsonLd({
            canonicalPath: "/custom-commerce-development",
            name: "Custom eCommerce Development & Engineering",
            description,
            serviceType: "Headless eCommerce Development, B2B eCommerce, ERP Integration",
          }),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: "Custom eCommerce Development", path: "/custom-commerce-development" },
          ]),
        ]}
      />
      <CustomCommerceLanding />
      <RelatedReading
        slugs={[
          "off-the-shelf-software-vs-custom-applications-2026",
          "switching-to-ai-powered-custom-applications-2026",
        ]}
      />
    </>
  );
}
