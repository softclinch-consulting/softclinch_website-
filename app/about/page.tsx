import { SeoJsonLd } from "@/components/SeoJsonLd";
import { About } from "@/components/About";
import { buildMetadata } from "@/lib/seo";
import { webpageJsonLd } from "@/lib/schema";
import { SITE_NAME } from "@/lib/site";

export const metadata = buildMetadata({
<<<<<<< HEAD
  title: "About",
  description:
    "Learn how SoftClinch builds scalable digital systems with an engineering-first approach across SAP, custom development, and automation.",
=======
  title: "About SoftClinch | Technology & Digital Solutions Company",
  description:
    "Learn about SoftClinch, a technology company delivering digital marketing, enterprise software and automation solutions.",
  keywords: ["about SoftClinch", "technology consulting company", "digital solutions provider"],
>>>>>>> f8a5688 (SEO: canonical URLs + SEO-friendly slugs)
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
