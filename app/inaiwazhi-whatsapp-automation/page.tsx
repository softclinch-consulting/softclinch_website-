import { SeoJsonLd } from "@/components/SeoJsonLd";
import { WhatsAppAutomation } from "@/components/WhatsAppAutomation";
import { RelatedReading } from "@/components/RelatedReading";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbJsonLd, faqJsonLd, serviceJsonLd, webpageJsonLd } from "@/lib/schema";
import { whatsappAutomationFaq } from "@/lib/faqs";

const canonicalPath = "/inaiwazhi-whatsapp-automation";
const title = "Inaiwazhi WhatsApp Automation Platform | SoftClinch";
const description =
  "Official WhatsApp Business Platform solution: chatbots, automated customer messages, ERP/CRM triggers and workflow automation. Book a demo.";

export const metadata = buildMetadata({
  title,
  description,
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
