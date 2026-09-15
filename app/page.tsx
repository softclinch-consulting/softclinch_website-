import { SeoJsonLd } from "@/components/SeoJsonLd";
import { Home } from "@/components/Home";
import { buildMetadata } from "@/lib/seo";
import { faqJsonLd, serviceJsonLd, webpageJsonLd } from "@/lib/schema";

export const metadata = buildMetadata({
  title:
    "SAP Consulting, AI Automation & Digital Growth Solutions | SoftClinch",
  description:
    "SoftClinch helps businesses scale with SAP consulting, WhatsApp automation, SEO, AI-powered marketing, enterprise software development, and digital transformation solutions.",
  keywords: [
    "SAP consulting company",
    "SAP AMS support",
    "WhatsApp automation company",
    "AI automation solutions",
    "SEO services company",
    "GEO and AEO optimization",
    "custom software development company",
    "SaaS development company",
    "enterprise digital transformation solutions",
  ],
  canonicalPath: "/",
});

const homepageFaqs = [
  {
    question: "What does SoftClinch do as an enterprise technology company?",
    answer:
      "SoftClinch provides SAP consulting, WhatsApp automation, SEO services, AI automation solutions, custom software development, and enterprise digital transformation services.",
  },
  {
    question: "Do you provide SAP consulting and SAP AMS support?",
    answer:
      "Yes. We provide SAP AMS support, implementation, migration assistance, and enterprise SAP consulting services.",
  },
  {
    question: "What is Inaiwazhi?",
    answer:
      "Inaiwazhi is SoftClinch's enterprise WhatsApp automation platform for scalable customer engagement, campaign automation, CRM integration, AI chatbot workflows, and real-time business communication.",
  },
  {
    question: "How do SEO, GEO, and AEO services help businesses?",
    answer:
      "SEO, GEO, and AEO improve business visibility across Google Search, AI search engines, and answer engines to generate traffic and leads.",
  },
];

export default function Page() {
  return (
    <>
      <SeoJsonLd
        data={[
          webpageJsonLd({
            canonicalPath: "/",
            title:
              "SAP Consulting, AI Automation & Digital Growth Solutions | SoftClinch",
          }),
          serviceJsonLd({
            canonicalPath: "/",
            name: "SAP Consulting and Enterprise Automation Services",
            description:
              "SAP consulting, SAP AMS support, AI automation, WhatsApp Business API automation, SEO, GEO, AEO, SaaS development, and enterprise digital transformation solutions.",
          }),
          faqJsonLd(homepageFaqs),
        ]}
      />
      <Home />
    </>
  );
}
