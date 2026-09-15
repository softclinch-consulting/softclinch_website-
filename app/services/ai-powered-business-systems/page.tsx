import { AIPoweredBusinessSystems } from "@/components/AIPoweredBusinessSystems";
import { SeoJsonLd } from "@/components/SeoJsonLd";
import {
  aiPoweredBusinessSystemsFaq,
  aiPoweredBusinessSystemsSeo,
} from "@/lib/aiPoweredBusinessSystemsSeo";
import { buildMetadata } from "@/lib/seo";
import { faqJsonLd, serviceJsonLd, webpageJsonLd } from "@/lib/schema";

const canonicalPath = aiPoweredBusinessSystemsSeo.slug;
const title = aiPoweredBusinessSystemsSeo.metaTitle;
const description = aiPoweredBusinessSystemsSeo.metaDescription;

export const metadata = buildMetadata({
  title,
  description,
  canonicalPath,
  keywords: aiPoweredBusinessSystemsSeo.focusKeywords,
});

export default function AIPoweredBusinessSystemsPage() {
  return (
    <>
      <SeoJsonLd
        data={[
          webpageJsonLd({
            canonicalPath,
            title,
          }),
          serviceJsonLd({
            canonicalPath,
            name: "AI-Powered Business Systems",
            description,
          }),
          faqJsonLd(
            aiPoweredBusinessSystemsFaq.map((item) => ({
              question: item.question,
              answer: item.answer,
            }))
          ),
        ]}
      />
      <AIPoweredBusinessSystems />
    </>
  );
}
