import { SeoJsonLd } from "@/components/SeoJsonLd";
import { EnterpriseSoftware } from "@/components/EnterpriseSoftware";
import { buildMetadata } from "@/lib/seo";
import { faqJsonLd, serviceJsonLd, webpageJsonLd } from "@/lib/schema";

const canonicalPath = "/services/enterprise-software";
const title = "Enterprise Digital Transformation & Automation Solutions | SoftClinch";
const description =
  "Enterprise consulting and digital transformation company offering SAP consulting, custom software development, AI automation, WhatsApp automation, and scalable digital engineering solutions.";

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
  keywords: [
    "enterprise digital transformation",
    "enterprise automation solutions",
    "enterprise software development",
    "enterprise consulting services",
    "digital transformation company",
    "enterprise application development",
    "enterprise engineering solutions",
    "business automation company",
    "enterprise technology solutions",
    "enterprise workflow automation",
    "sap consulting company",
    "custom enterprise software",
    "enterprise saas development",
    "enterprise ai automation",
    "enterprise whatsapp automation",
    "business process automation",
    "cloud enterprise applications",
    "digital engineering company",
    "enterprise api integrations",
    "enterprise software solutions",
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
            name: "Enterprise Digital Transformation & Automation Solutions",
            description,
          }),
          faqJsonLd(enterpriseFaq),
        ]}
      />
      <EnterpriseSoftware />
    </>
  );
}
