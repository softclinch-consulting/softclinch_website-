import { SeoJsonLd } from "@/components/SeoJsonLd";
import { EnterpriseSoftware } from "@/components/EnterpriseSoftware";
import { buildMetadata } from "@/lib/seo";
import { faqJsonLd, webpageJsonLd } from "@/lib/schema";

const canonicalPath = "/services/enterprise-software";
const title = "Enterprise Software Development | SoftClinch";
const description =
  "Build custom enterprise applications, SaaS platforms, cloud-native systems, and AI-powered business systems for scalable operations and digital transformation.";

const enterpriseFaq = [
  {
    question: "What is enterprise software development?",
    answer:
      "Enterprise software development means building custom applications, integrations, and systems that fit your company’s operational workflows, security needs, and scalability requirements.",
  },
  {
    question: "Can you build SaaS platforms and cloud-native systems?",
    answer:
      "Yes. We design multi-tenant SaaS platforms, microservices-based cloud applications, APIs, and enterprise-grade systems on AWS, Azure, and Google Cloud.",
  },
];

export const metadata = buildMetadata({
  title,
  description,
  canonicalPath,
  keywords: ["enterprise software", "custom enterprise applications", "SaaS platform development", "enterprise systems"],
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
          faqJsonLd(enterpriseFaq),
        ]}
      />
      <EnterpriseSoftware />
    </>
  );
}
