import { CustomDevelopment } from "@/components/CustomDevelopment";
import { SeoJsonLd } from "@/components/SeoJsonLd";
import { buildMetadata } from "@/lib/seo";
import {
  breadcrumbJsonLd,
  faqJsonLd,
  professionalServiceJsonLd,
  serviceJsonLd,
  webpageJsonLd,
} from "@/lib/schema";
import { customDevelopmentFaq } from "@/lib/faqs";

// Canonical consolidates to the primary target slug: /custom-application-development/
const canonicalPath = "/custom-application-development/";
const pagePath = "/services/custom-development/";

// High-Intent Search Query Meta Title
const title = "Custom Application Development Company in Tamil Nadu | SoftClinch";

// High-Intent Search Query Meta Description
const description =
  "Leading custom application & software development company in Tamil Nadu. We build tailored ERP, CRM, web apps, SaaS & workflow automation. Get a free proposal!";

// High-Intent Search Query Clusters
const highIntentKeywords = [
  "custom application development company",
  "custom software development company",
  "custom software development company in tamil nadu",
  "custom software development company in chennai",
  "custom business software development services",
  "enterprise custom software development company",
  "custom web application development company",
  "bespoke software development company",
  "custom erp development company",
  "custom crm software development company",
  "custom customer portal development",
  "business automation software company",
  "b2b saas product development company",
  "custom dashboard and analytics development",
  "legacy software modernization services",
  "custom mobile app development for business",
  "workflow automation software developers",
  "custom software developers in chennai",
  "custom software development company coimbatore",
  "software development company madurai",
  "custom business software salem",
  "custom erp developers tiruppur",
  "software development services hosur",
  "hire custom software developers tamil nadu",
  "custom application development cost and pricing",
];

export const metadata = buildMetadata({
  title,
  description,
  keywords: highIntentKeywords,
  canonicalPath,
});

export default function CustomDevelopmentPage() {
  return (
    <>
      <SeoJsonLd
        data={[
          webpageJsonLd({
            canonicalPath,
            title,
            description,
            keywords: highIntentKeywords,
            image: "https://softclinch.com/custom_app_dev_hero.png",
          }),
          serviceJsonLd({
            canonicalPath,
            name: "Custom Application & Software Development Services",
            serviceType:
              "Custom Application Development, Business Software Development, Enterprise ERP & CRM Solutions",
            description:
              "SoftClinch helps businesses across Tamil Nadu build custom applications, business software, web applications, mobile apps, CRM systems, ERP solutions, customer portals, dashboards, SaaS products, and business automation solutions.",
            areaServed: [
              "Tamil Nadu",
              "Chennai",
              "Coimbatore",
              "Madurai",
              "Salem",
              "Tiruppur",
              "Erode",
              "Hosur",
              "Vellore",
              "Tiruchirappalli",
            ],
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "INR",
              description: "Free custom software consultation and requirement analysis",
              availability: "https://schema.org/InStock",
              url: `https://softclinch.com${canonicalPath}`,
            },
          }),
          professionalServiceJsonLd({
            canonicalPath,
            name: "SoftClinch - Custom Application Development Company",
            description:
              "Bespoke software and custom application development company serving businesses in Chennai, Coimbatore, Madurai, Salem, Hosur, and across Tamil Nadu.",
            priceRange: "₹₹",
          }),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services/" },
            { name: "Custom Application Development", path: canonicalPath },
          ]),
          faqJsonLd(customDevelopmentFaq),
        ]}
      />
      <CustomDevelopment />
    </>
  );
}
