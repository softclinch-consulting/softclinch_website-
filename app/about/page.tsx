import { SeoJsonLd } from "@/components/SeoJsonLd";
import { About } from "@/components/About";
import { landingPageKeywords, landingPageSeo } from "@/lib/landingPageKeywords";
import { buildMetadata } from "@/lib/seo";
import { webpageJsonLd } from "@/lib/schema";
import { SITE_NAME } from "@/lib/site";

export const metadata = buildMetadata({
  title: landingPageSeo.about.title,
  description: landingPageSeo.about.description,
  keywords: [...landingPageKeywords.about],
  canonicalPath: "/about",
});

export default function AboutPage() {
  return (
    <>
      <SeoJsonLd
        data={webpageJsonLd({
          canonicalPath: "/about",
          title: `About | ${SITE_NAME}`,
        })}
      />
      <About />
    </>
  );
}
