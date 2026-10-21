import { SeoJsonLd } from "@/components/SeoJsonLd";
import { Services } from "@/components/Services";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbJsonLd, faqJsonLd, serviceJsonLd, webpageJsonLd } from "@/lib/schema";
import { SITE_NAME } from "@/lib/site";

const title = "Enterprise Technology & Software Services | SoftClinch";
const description =
  "Explore our end-to-end technology services: SAP consulting, bespoke software development, WhatsApp automation & performance marketing. Get a tailored quote!";

export const metadata = buildMetadata({
  title,
  description,
  keywords: [
    "enterprise technology services",
    "b2b it consulting services",
    "custom software development services",
    "enterprise sap services",
    "whatsapp marketing automation",
    "digital marketing consulting",
    "enterprise automation solutions",
    "software consulting company chennai",
  ],
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
