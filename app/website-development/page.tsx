import { SeoJsonLd } from "@/components/SeoJsonLd";
import { WebsiteDevelopment } from "@/components/WebsiteDevelopment";
import { RelatedReading } from "@/components/RelatedReading";
import { breadcrumbJsonLd, faqJsonLd, serviceJsonLd, webpageJsonLd } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

const canonicalPath = "/website-development/";
const title = "Website Development Company in Chennai & India | SoftClinch";
const description =
  "SEO-ready business websites and WooCommerce stores, built by a Chennai team for businesses across India. Chat on WhatsApp for a quick quote.";

const websiteFaq = [
  {
    question: "How much does website development cost in India?",
    answer:
      "The cost depends on your page count, design requirements, content, platform, integrations and custom features. A business website, ecommerce store and custom web application each require a different scope. Share your requirements for a proposal that explains the deliverables, project cost and any recurring charges.",
  },
  {
    question: "How long does it take to build a website?",
    answer:
      "The timeline depends on the website’s size, functionality, content readiness and review stages. We agree on a project schedule before development begins.",
  },
  {
    question: "Which platform is best for my business website?",
    answer:
      "The right platform depends on your requirements. WordPress may suit a content-led business website, while Shopify or WooCommerce may suit an online store. A custom solution may be appropriate for more complex workflows or integrations. We explain the options before you decide.",
  },
  {
    question: "Do you work with businesses anywhere in India?",
    answer:
      "Yes. We work remotely with businesses across India, using online meetings, calls and shared reviews to manage the project.",
  },
  {
    question: "Will my website work on mobile phones?",
    answer:
      "Yes. We build mobile-friendly layouts and test the agreed pages and interactions across relevant screen sizes.",
  },
  {
    question: "Will my website appear on Google?",
    answer:
      "We build the agreed technical SEO foundations and can configure Google Search Console as part of the project scope. Search visibility also depends on competition, content, authority and ongoing SEO work. Rankings cannot be guaranteed.",
  },
  {
    question: "Can you connect my website to WhatsApp?",
    answer:
      "Yes. We can add click-to-chat buttons with pre-filled messages. More advanced replies, follow-ups and workflows can be scoped separately through Inaiwazhi.",
  },
  {
    question: "Can I update the website myself?",
    answer:
      "Yes, where a content management system is included. We identify which content you can edit and provide guidance during handover.",
  },
  {
    question: "Can you redesign my existing website?",
    answer:
      "Yes. We review its design, content, performance and functionality, then recommend what to retain, improve or rebuild.",
  },
  {
    question: "Can you help with domain, hosting and business email?",
    answer:
      "Yes. We can assist with setup or work with your existing providers. Setup fees, renewals and other third-party costs are identified in the proposal.",
  },
  {
    question: "Who owns the website after completion?",
    answer:
      "Your proposal and agreement define ownership, account access and handover deliverables. Third-party themes, plugins, services and platforms remain subject to their respective licence terms.",
  },
  {
    question: "Do you provide support after launch?",
    answer:
      "Yes. Post-launch support and ongoing maintenance can be included in your proposal, with the duration, coverage and charges clearly defined.",
  },
];

export const metadata = buildMetadata({
  title,
  description,
  canonicalPath,
});

export default function WebsiteDevelopmentPage() {
  return (
    <>
      <SeoJsonLd
        data={[
          webpageJsonLd({ canonicalPath, title, description }),
          serviceJsonLd({
            canonicalPath,
            name: "Website Development Services",
            description,
            serviceType:
              "Business Website Development, Ecommerce Website Development, Landing Pages, Web Applications, Website Redesign and Maintenance",
            areaServed: ["Chennai", "Tamil Nadu", "Coimbatore", "Madurai", "Bangalore", "India"],
          }),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: "Website Development", path: canonicalPath },
          ]),
          faqJsonLd(websiteFaq),
        ]}
      />
      <WebsiteDevelopment faqs={websiteFaq} />
      <RelatedReading
        slugs={[
          "google-ai-search-seo-business-websites",
          "google-ai-rd-innovations-business-websites",
          "digital-marketing-get-more-leads-customers-sales-online",
        ]}
      />
    </>
  );
}
