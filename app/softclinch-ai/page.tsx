import { SeoJsonLd } from "@/components/SeoJsonLd";
import { SoftClinchAIPage } from "@/components/SoftClinchAIPage";
import { landingPageKeywords, landingPageSeo } from "@/lib/landingPageKeywords";
import { buildMetadata } from "@/lib/seo";
import { webpageJsonLd } from "@/lib/schema";
import { SITE_NAME } from "@/lib/site";

const canonicalPath = "/softclinch-ai";
const title = landingPageSeo.softClinchAi.title;
const description = landingPageSeo.softClinchAi.description;

export const metadata = buildMetadata({
  title,
  description,
  keywords: [...landingPageKeywords.softClinchAi],
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
