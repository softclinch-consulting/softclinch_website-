import { SeoJsonLd } from "@/components/SeoJsonLd";
import { SoftClinchAIPage } from "@/components/SoftClinchAIPage";
import { buildMetadata } from "@/lib/seo";
import { webpageJsonLd } from "@/lib/schema";
import { SITE_NAME } from "@/lib/site";

const canonicalPath = "/softclinch-ai";
const title = "SoftClinch AI | Connected Enterprise Intelligence";
const description =
  "Explore the SoftClinch AI platform: unify digital marketing, enterprise SaaS, custom AI agents & instant messaging in one ecosystem. Launch your demo now!";

export const metadata = buildMetadata({
  title,
  description,
  keywords: [
    "softclinch ai platform",
    "enterprise ai intelligence network",
    "connected ai enterprise systems",
    "ai business automation hub",
    "SoftClinch AI",
    "Enterprise AI Solutions",
  ],
  canonicalPath,
});

export default function SoftClinchAIRoutePage() {
  return (
    <>
      <SeoJsonLd
        data={webpageJsonLd({
          canonicalPath,
          title: `SoftClinch AI | ${SITE_NAME}`,
        })}
      />
      <SoftClinchAIPage />
    </>
  );
}
