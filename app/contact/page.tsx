import { SeoJsonLd } from "@/components/SeoJsonLd";
import { Contact } from "@/components/Contact";
import { buildMetadata } from "@/lib/seo";
import { webpageJsonLd } from "@/lib/schema";
import { SITE_NAME } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Contact",
  description:
    "Contact SoftClinch for SAP consulting, custom application development, digital marketing, and enterprise automation.",
  canonicalPath: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <SeoJsonLd
        data={webpageJsonLd({
          canonicalPath: "/contact",
          title: `Contact | ${SITE_NAME}`,
        })}
      />
      <Contact />
    </>
  );
}
