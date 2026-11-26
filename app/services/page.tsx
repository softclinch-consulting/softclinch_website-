import { SeoJsonLd } from "@/components/SeoJsonLd";
import { Services } from "@/components/Services";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbJsonLd, faqJsonLd, serviceJsonLd, webpageJsonLd } from "@/lib/schema";
import { SITE_NAME } from "@/lib/site";

const title = "Enterprise IT & SAP Services in Chennai | SoftClinch";
const description =
  "Accelerate enterprise growth with SAP consulting, AMS support, custom apps & digital growth services in Chennai. Explore our services today.";

export const metadata = buildMetadata({
  title,
  description,
  ogTitle: "Full-Suite Enterprise IT & SAP Services | SoftClinch Chennai",
  ogDescription:
    "Discover SoftClinch's integrated enterprise services: SAP implementations, custom software development, WhatsApp automation & performance SEO.",
  twitterTitle: title,
  twitterDescription:
    "End-to-end enterprise IT: SAP consulting, custom software, WhatsApp automation & digital marketing in Chennai.",
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
            title,
          }),
          serviceJsonLd({
            canonicalPath: "/services",
            name: "Enterprise IT, SAP Consulting & Software Development Services",
            description,
            serviceType: "Enterprise IT Consulting, SAP Services, Custom Software, WhatsApp Automation, Digital Marketing",
            areaServed: [
              "Chennai",
              "Tamil Nadu",
              "India",
              "Global",
            ],
          }),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
          ]),
          faqJsonLd(servicesFaq),
        ]}
      />
      <Services />
    </>
  );
}
