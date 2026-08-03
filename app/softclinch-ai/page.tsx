import { SeoJsonLd } from "@/components/SeoJsonLd";
import { SoftClinchAIPage } from "@/components/SoftClinchAIPage";
import { buildMetadata } from "@/lib/seo";
import { webpageJsonLd } from "@/lib/schema";
import { SITE_NAME } from "@/lib/site";

const canonicalPath = "/softclinch-ai";
const title = "SoftClinch AI Intelligence Network | Connected AI & Enterprise Systems";
const description =
  "Experience SoftClinch AI Intelligence Network. Connect seamlessly with Digital Marketing, Enterprise SaaS, AI Custom Apps, and Instant Communication Channels.";

export const metadata = buildMetadata({
  title,
  description,
  keywords: [
    "SoftClinch AI",
    "SoftClinch Intelligence Network",
    "AI Business Platform",
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
