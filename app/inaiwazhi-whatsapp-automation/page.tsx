import { SeoJsonLd } from "@/components/SeoJsonLd";
import { WhatsAppAutomation } from "@/components/WhatsAppAutomation";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbJsonLd, faqJsonLd, serviceJsonLd, webpageJsonLd } from "@/lib/schema";
import { whatsappAutomationFaq } from "@/lib/faqs";

const canonicalPath = "/inaiwazhi-whatsapp-automation";
const title = "Inaiwazhi: WhatsApp Automation & Business Workflow Platform | SoftClinch";
const description =
  "Official Meta WhatsApp Business Platform solution. Unified WhatsApp chatbots, automated customer communication, ERP/CRM event triggers, and business workflow automation.";

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
    </>
  );
}
