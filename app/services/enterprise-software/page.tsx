import { SeoJsonLd } from "@/components/SeoJsonLd";
import { EnterpriseSoftware } from "@/components/EnterpriseSoftware";
import { RelatedReading } from "@/components/RelatedReading";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbJsonLd, faqJsonLd, serviceJsonLd, webpageJsonLd } from "@/lib/schema";

const canonicalPath = "/services/enterprise-software";
const title = "Custom Enterprise Software Development Company | SoftClinch";
const description =
  "Develop secure, scalable enterprise software, cloud-native applications & SaaS platforms built for complex business operations. Request an architecture review!";

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
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: "Enterprise Software", path: canonicalPath },
          ]),
          faqJsonLd(enterpriseFaq),
        ]}
      />
      <EnterpriseSoftware />
      <RelatedReading
        slugs={[
          "enterprise-digital-transformation-strategies-2026",
          "off-the-shelf-software-vs-custom-applications-2026",
        ]}
      />
    </>
  );
}
