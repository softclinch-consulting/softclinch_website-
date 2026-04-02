import { SeoJsonLd } from "@/components/SeoJsonLd";
import { About } from "@/components/About";
import { buildMetadata } from "@/lib/seo";
import { webpageJsonLd } from "@/lib/schema";
import { SITE_NAME } from "@/lib/site";

export const metadata = buildMetadata({
  title: "About",
  description:
    "Learn how SoftClinch builds scalable digital systems with an engineering-first approach across SAP, custom development, and automation.",
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
