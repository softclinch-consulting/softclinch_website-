import { SeoJsonLd } from "@/components/SeoJsonLd";
import { Contact } from "@/components/Contact";
import { landingPageKeywords, landingPageSeo } from "@/lib/landingPageKeywords";
import { buildMetadata } from "@/lib/seo";
import { webpageJsonLd } from "@/lib/schema";
import { SITE_NAME } from "@/lib/site";

export const metadata = buildMetadata({
  title: landingPageSeo.contact.title,
  description: landingPageSeo.contact.description,
  keywords: [...landingPageKeywords.contact],
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
