import { SeoJsonLd } from "@/components/SeoJsonLd";
import { EnterpriseSoftware } from "@/components/EnterpriseSoftware";
import { landingPageKeywords, landingPageSeo } from "@/lib/landingPageKeywords";
import { buildMetadata } from "@/lib/seo";
import { faqJsonLd, serviceJsonLd, webpageJsonLd } from "@/lib/schema";

const canonicalPath = "/services/enterprise-software";
const title = landingPageSeo.enterpriseSoftware.title;
const description = landingPageSeo.enterpriseSoftware.description;

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
  keywords: [...landingPageKeywords.enterpriseSoftware],
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
