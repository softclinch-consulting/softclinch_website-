import { SeoJsonLd } from "@/components/SeoJsonLd";
import { Contact } from "@/components/Contact";
import { buildMetadata } from "@/lib/seo";
import { webpageJsonLd } from "@/lib/schema";
import { SITE_NAME } from "@/lib/site";

export const metadata = buildMetadata({
<<<<<<< HEAD
  title: "Contact",
  description:
    "Contact SoftClinch for SAP consulting, custom application development, digital marketing, and enterprise automation.",
=======
  title: "Contact SoftClinch | Get in Touch for Business Solutions",
  description: "Contact SoftClinch for digital marketing, software development and automation services.",
  keywords: [
    "contact SoftClinch",
    "digital marketing consultation",
    "software development company contact",
  ],
>>>>>>> f8a5688 (SEO: canonical URLs + SEO-friendly slugs)
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
