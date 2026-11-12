import { AIPoweredBusinessSystems } from "@/components/AIPoweredBusinessSystems";
import { SeoJsonLd } from "@/components/SeoJsonLd";
import {
  aiPoweredBusinessSystemsFaq,
  aiPoweredBusinessSystemsSeo,
} from "@/lib/aiPoweredBusinessSystemsSeo";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbJsonLd, faqJsonLd, serviceJsonLd, webpageJsonLd } from "@/lib/schema";

const canonicalPath = aiPoweredBusinessSystemsSeo.slug;
const title = aiPoweredBusinessSystemsSeo.metaTitle;
const description = aiPoweredBusinessSystemsSeo.metaDescription;

export const metadata = buildMetadata({
  title,
  description,
  canonicalPath,
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
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: "AI-Powered Business Systems", path: canonicalPath },
          ]),
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
