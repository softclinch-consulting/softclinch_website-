import { buildMetadata } from "@/lib/seo";
import { SeoJsonLd } from "@/components/SeoJsonLd";
import { breadcrumbJsonLd, serviceJsonLd, webpageJsonLd } from "@/lib/schema";
import { CustomCommerceLanding } from "@/components/CustomCommerceLanding";

const title = "Custom eCommerce Development & Engineering | SoftClinch";
const description =
  "Scale online sales with custom eCommerce engineering, ERP/CRM integrations, headless stores & WhatsApp automation. Book your free eCommerce tech audit!";

export const metadata = buildMetadata({
  title,
  description,
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
    </>
  );
}
