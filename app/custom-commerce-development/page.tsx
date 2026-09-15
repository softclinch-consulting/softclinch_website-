import { buildMetadata } from "@/lib/seo";
import { SeoJsonLd } from "@/components/SeoJsonLd";
import { webpageJsonLd } from "@/lib/schema";
import { CustomCommerceLanding } from "@/components/CustomCommerceLanding";

export const metadata = buildMetadata({
  title: "Custom Commerce Engineering | SoftClinch",
  description:
    "Need a better eCommerce system? SoftClinch builds custom commerce experiences, upgrades existing stores, connects ERP/CRM workflows, automates WhatsApp, and adds AI to streamline operations.",
  canonicalPath: "/custom-commerce-development",
  keywords: [
    "custom commerce engineering",
    "custom ecommerce development",
    "ecommerce consulting company",
    "shopify woo commerce improvements",
    "erp crm integration",
    "whatsapp automation for commerce",
    "ai for ecommerce",
  ],
});

export default function CustomCommerceDevelopmentPage() {
  return (
    <>
      <SeoJsonLd data={[webpageJsonLd({ canonicalPath: "/custom-commerce-development", title: "Custom Commerce Engineering | SoftClinch" })]} />
      <CustomCommerceLanding />
    </>
  );
}
