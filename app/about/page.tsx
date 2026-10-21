import { SeoJsonLd } from "@/components/SeoJsonLd";
import { About } from "@/components/About";
import { buildMetadata } from "@/lib/seo";
import { localBusinessJsonLd, webpageJsonLd } from "@/lib/schema";
import { SITE_NAME } from "@/lib/site";

const title = "About SoftClinch | Enterprise Tech & Consulting Partner";
const description =
  "Discover how SoftClinch empowers businesses across India & globally with custom software engineering, SAP consulting, automation & performance marketing.";

export const metadata = buildMetadata({
  title,
  description,
  keywords: [
    "about softclinch consulting",
    "technology consulting company chennai",
    "software engineering partner india",
    "enterprise digital transformation experts",
    "custom software company profile",
  ],
  canonicalPath: "/about",
});

export default function AboutPage() {
  return (
    <>
      <SeoJsonLd
        data={[
          webpageJsonLd({
            canonicalPath: "/about",
            title,
          }),
          localBusinessJsonLd("/about"),
        ]}
      />
      <About />
    </>
  );
}
