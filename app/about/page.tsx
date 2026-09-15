import { SeoJsonLd } from "@/components/SeoJsonLd";
import { About } from "@/components/About";
import { buildMetadata } from "@/lib/seo";
import { webpageJsonLd } from "@/lib/schema";
import { SITE_NAME } from "@/lib/site";

export const metadata = buildMetadata({
  title: "About SoftClinch | Technology & Digital Solutions Company",
  description:
    "Learn about SoftClinch, a technology company delivering digital marketing, enterprise software and automation solutions.",
  keywords: ["about SoftClinch", "technology consulting company", "digital solutions provider"],
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
