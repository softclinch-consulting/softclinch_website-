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

// Primary Canonical Path & Slug
const canonicalPath = "/custom-application-development/";

// High-Intent Search Query Meta Title (High-CTR Commercial Intent)
const title = "Custom Application & Software Development Company in Tamil Nadu | SoftClinch";

// High-Intent Search Query Meta Description (High CTR & Action Oriented)
const description =
  "Custom application & software development company in Tamil Nadu. We build tailored web & mobile apps, CRM, ERP & automation for your business. Get a free consultation!";

// High-Intent Search Query Clusters (Commercial, Transactional & Local Tamil Nadu Intent for Maximum Clicks)
const highIntentKeywords = [
  // Core High-Intent Commercial Queries
  "custom application development company",
  "custom software development company",
  "custom software development company in tamil nadu",
  "custom software development company in chennai",
  "custom business software development services",
  "enterprise custom software development company",
  "custom web application development company",
  "bespoke software development company",
  "hire custom software developers in tamil nadu",
  "build custom software for my business",

  // Solution & Problem Solving Queries (High Buyer Click Intent)
  "replace spreadsheets with custom software",
  "custom business software for tamil nadu businesses",
  "custom erp development company",
  "custom crm software development company",
  "custom customer portal development",
  "business automation software company",
  "b2b saas product development company",
  "custom dashboard and analytics development",
  "legacy software modernization services",
  "custom mobile app development for business",
  "workflow automation software developers",
  "custom internal tools and operations software",

  // Regional Commercial Search Queries (Tamil Nadu Key Industrial & Tech Hubs)
  "custom software developers in chennai",
  "custom software development company coimbatore",
  "software development company madurai",
  "custom business software salem",
  "custom erp developers tiruppur",
  "software development services hosur",
  "software development company erode",
  "software developers in vellore",
  "software development company tiruchirappalli",

  // Buyer / Transactional Intent Queries
  "custom software development cost and timeline",
  "custom application development pricing in tamil nadu",
  "off the shelf vs custom software development",
  "custom business automation solutions",
  "api integration and cloud application development",
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
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Custom Application Development Services",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Custom Business Software Development",
                    description:
                      "Software designed around your specific business processes, users, departments, and operational workflows.",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Web Application Development",
                    description:
                      "Modern cloud-ready web applications accessible from any browser for teams and customers.",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Mobile Application Development",
                    description:
                      "Dedicated iOS and Android mobile apps for internal teams, operations, and customers.",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Custom CRM & Lead Management Systems",
                    description:
                      "Tailored CRM systems built around your unique sales process, lead assignment, and pipelines.",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Custom ERP & Operations Software",
                    description:
                      "Unified operations, inventory, production, purchase, and dispatch management software.",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Customer Portals & Client Dashboards",
                    description:
                      "Secure online portals for order tracking, account management, invoices, and service requests.",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "SaaS Product & MVP Development",
                    description:
                      "Scalable multi-tenant cloud software products engineered for growing businesses and startups.",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Business Workflow Automation",
                    description:
                      "Automated notifications, approvals, task dispatch, and data sync reducing manual repetitive work.",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "System Integrations (SAP, CRM, APIs, WhatsApp)",
                    description:
                      "Bi-directional connectivity between CRM, ERP, SAP, payment gateways, WhatsApp Business, and internal databases.",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Legacy Software Modernization",
                    description:
                      "Upgrades and rewrites for outdated desktop or legacy systems into modern cloud web and mobile platforms.",
                  },
                },
              ],
            },
          }),
          professionalServiceJsonLd({
            canonicalPath,
            name: "SoftClinch - Custom Application Development Company",
            description:
              "Bespoke software and custom application development company serving businesses in Chennai, Coimbatore, Madurai, Salem, Hosur, and across Tamil Nadu.",
            priceRange: "₹₹",
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
