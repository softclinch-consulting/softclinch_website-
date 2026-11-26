import { AIPoweredBusinessSystems } from "@/components/AIPoweredBusinessSystems";
import { SeoJsonLd } from "@/components/SeoJsonLd";
import { RelatedReading } from "@/components/RelatedReading";
import {
  aiPoweredBusinessSystemsFaq,
  aiPoweredBusinessSystemsSeo,
} from "@/lib/aiPoweredBusinessSystemsSeo";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbJsonLd, faqJsonLd, serviceJsonLd, webpageJsonLd } from "@/lib/schema";

const canonicalPath = aiPoweredBusinessSystemsSeo.slug;
const title = "AI Business Automation in Chennai | SoftClinch";
const description =
  "Automate repetitive workflows and customer communication with custom AI agents and business systems in Chennai. Book a free AI discovery call.";

export const metadata = buildMetadata({
  title,
  description,
  ogTitle: "Autonomous AI Agents & Enterprise Automation | SoftClinch",
  ogDescription:
    "Integrate AI-driven process automation and intelligent chatbots directly with your CRM and enterprise databases. Explore AI solutions.",
  twitterTitle: title,
  twitterDescription:
    "Deploy custom AI agents, automated workflow pipelines & intelligent CRM systems in Chennai.",
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
      <RelatedReading
        slugs={[
          "switching-to-ai-powered-custom-applications-2026",
          "ai-agents-vs-ai-chatbots",
          "ai-chatbots-for-customer-support-2026",
        ]}
      />
    </>
  );
}
