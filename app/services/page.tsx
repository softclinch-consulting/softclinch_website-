import { SeoJsonLd } from "@/components/SeoJsonLd";
import { Services } from "@/components/Services";
import { buildMetadata } from "@/lib/seo";
import { faqJsonLd, webpageJsonLd } from "@/lib/schema";
import { SITE_NAME } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Services",
  description:
    "Explore SoftClinch services: SAP consulting, custom application development, and digital marketing built for enterprise scale.",
  canonicalPath: "/services",
});

const servicesFaq = [
  {
    question: "What industries do you work with?",
    answer:
      "We work with SMEs and enterprises across manufacturing, retail, healthcare, real estate, and technology-led businesses.",
  },
  {
    question: "Do you offer end-to-end delivery?",
    answer:
      "Yes. We can handle discovery, solution architecture, implementation, integrations, testing, and ongoing support.",
  },
  {
    question: "How do you price engagements?",
    answer:
      "We offer fixed-scope packages for defined deliverables and monthly retainers for ongoing engineering and optimization.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <SeoJsonLd
        data={[
          webpageJsonLd({
            canonicalPath: "/services",
            title: `Services | ${SITE_NAME}`,
          }),
          faqJsonLd(servicesFaq),
        ]}
      />
      <Services />
    </>
  );
}
