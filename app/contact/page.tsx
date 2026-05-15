import { SeoJsonLd } from "@/components/SeoJsonLd";
import { ContactWithRecaptcha } from "@/components/ContactWithRecaptcha";
import { buildMetadata } from "@/lib/seo";
import { webpageJsonLd } from "@/lib/schema";
import { SITE_NAME } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Contact SoftClinch | Get in Touch for Business Solutions",
  description: "Contact SoftClinch for digital marketing, software development and automation services.",
  keywords: [
    "contact SoftClinch",
    "digital marketing consultation",
    "software development company contact",
  ],
  canonicalPath: "/contact",
});

const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

export default function ContactPage() {
  const siteKey = RECAPTCHA_SITE_KEY?.trim();

  return (
    <>
      <SeoJsonLd
        data={webpageJsonLd({
          canonicalPath: "/contact",
          title: `Contact | ${SITE_NAME}`,
        })}
      />
      <ContactWithRecaptcha siteKey={siteKey} />
    </>
  );
}
