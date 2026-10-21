import { SeoJsonLd } from "@/components/SeoJsonLd";
import { Home } from "@/components/Home";
import { buildMetadata } from "@/lib/seo";
import { faqJsonLd, localBusinessJsonLd, serviceJsonLd, webpageJsonLd } from "@/lib/schema";

export const metadata = buildMetadata({
  title: "Enterprise Technology & Digital Growth Solutions | SoftClinch",
  description:
    "Scale your enterprise with custom software, SAP consulting, WhatsApp automation & AI-driven digital marketing. Book your free business consultation today!",
  keywords: [
    "enterprise technology consulting",
    "custom software development company",
    "custom software company tamil nadu",
    "sap consulting company chennai",
    "sap ams support services",
    "whatsapp automation solutions",
    "official whatsapp business platform",
    "ai business automation solutions",
    "performance marketing agency",
    "seo services company",
    "enterprise digital transformation solutions",
    "saas development company",
    "b2b custom software developers",
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
            title: "Enterprise Technology & Digital Growth Solutions | SoftClinch",
          }),
          localBusinessJsonLd("/"),
          serviceJsonLd({
            canonicalPath: "/",
            name: "SAP Consulting, Custom Software and Enterprise Automation Services",
            description:
              "Custom software development, SAP consulting, WhatsApp Business API automation, AI business systems, SEO, and enterprise digital transformation solutions.",
          }),
          faqJsonLd(homepageFaqs),
        ]}
      />
      <Home />
    </>
  );
}
