import { SeoJsonLd } from "@/components/SeoJsonLd";
import { WhatsAppAutomation } from "@/components/WhatsAppAutomation";
import { RelatedReading } from "@/components/RelatedReading";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbJsonLd, faqJsonLd, serviceJsonLd, webpageJsonLd } from "@/lib/schema";
import { whatsappAutomationFaq } from "@/lib/faqs";

const canonicalPath = "/inaiwazhi-whatsapp-automation";
const title = "WhatsApp Business API Automation in Chennai – Inaiwazhi";
const description =
  "Automate lead qualification, alerts & support in Chennai with Meta Cloud WhatsApp API. Zero ban risk & CRM sync. Request your live demo now.";

export const metadata = buildMetadata({
  title,
  description,
  ogTitle: "Inaiwazhi: Enterprise WhatsApp Automation Platform",
  ogDescription:
    "Deliver broadcast campaigns, automated drip sequences, and 24/7 AI-assisted customer communication on official WhatsApp Cloud APIs.",
  twitterTitle: title,
  twitterDescription:
    "Enterprise WhatsApp Business API automation and broadcast campaigns with CRM sync in Chennai.",
  canonicalPath,
});

export default function WhatsAppAutomationPage() {
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
            name: "Inaiwazhi WhatsApp Automation & Business Communication Platform",
            description,
            serviceType: "WhatsApp Business API, WhatsApp Chatbot Automation, Customer Support Automation, CRM Integration, Enterprise Business Communication Workflows",
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
            { name: "WhatsApp Automation", path: canonicalPath },
          ]),
          faqJsonLd(whatsappAutomationFaq),
        ]}
      />
      <WhatsAppAutomation />
      <RelatedReading
        slugs={[
          "how-small-businesses-can-automate-customer-support-using-whatsapp",
          "how-digital-marketers-can-improve-customer-retention-using-whatsapp-drip-campaigns",
          "why-businesses-lose-leads-after-enquiries",
        ]}
      />
    </>
  );
}
