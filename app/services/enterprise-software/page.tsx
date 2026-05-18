import { SeoJsonLd } from "@/components/SeoJsonLd";
import { EnterpriseSoftware } from "@/components/EnterpriseSoftware";
import { buildMetadata } from "@/lib/seo";
import { faqJsonLd, serviceJsonLd, webpageJsonLd } from "@/lib/schema";

const canonicalPath = "/services/enterprise-software";
const title = "AI-Powered Enterprise & eCommerce Application Development | SoftClinch";
const description =
  "Build scalable AI applications, enterprise software, automation systems, and custom eCommerce platforms with secure cloud architecture, analytics, and enterprise-grade development.";

const enterpriseFaq = [
  {
    question: "What industries do you work with?",
    answer:
      "We work with enterprise businesses, eCommerce brands, healthcare, logistics, retail, finance, education, real estate, and SaaS startups.",
  },
  {
    question: "Do you provide AI integration services?",
    answer:
      "Yes. We provide AI integration services including chatbots, automation systems, analytics, and machine learning solutions.",
  },
  {
    question: "Can you develop custom enterprise software?",
    answer:
      "Yes. We develop enterprise-grade applications customized to your business workflows and operational requirements.",
  },
  {
    question: "Do you build scalable SaaS applications?",
    answer:
      "Yes. We develop scalable SaaS applications with multi-user architecture, analytics, and subscription systems.",
  },
];

export const metadata = buildMetadata({
  title,
  description,
  canonicalPath,
  keywords: [
    "ai application development",
    "enterprise software development",
    "custom application development",
    "ecommerce application development",
    "enterprise automation software",
    "saas application development services",
    "ai chatbot development company",
    "enterprise digital transformation services",
    "cloud native application development",
    "custom software development for ecommerce",
    "ai powered crm systems",
    "workflow automation software",
    "business intelligence dashboards",
    "enterprise ai solutions",
    "custom enterprise software",
    "ai automation systems",
    "enterprise application development",
    "cloud automation services",
    "predictive analytics solutions",
    "customer engagement systems",
  ],
});

export default function EnterpriseSoftwarePage() {
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
            name: "AI-Powered Enterprise & eCommerce Application Development",
            description,
          }),
          faqJsonLd(enterpriseFaq),
        ]}
      />
      <EnterpriseSoftware />
    </>
  );
}
