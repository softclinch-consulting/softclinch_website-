import { SeoJsonLd } from "@/components/SeoJsonLd";
import { WhatsAppAutomation } from "@/components/WhatsAppAutomation";
import { buildMetadata } from "@/lib/seo";
import { faqJsonLd, serviceJsonLd, webpageJsonLd } from "@/lib/schema";
import { whatsappAutomationFaq } from "@/lib/faqs";

const canonicalPath = "/inaiwazhi-whatsapp-automation";
const title = "Inaiwazhi WhatsApp Automation & AI Chatbots | SoftClinch";
const description =
  "Official Meta WhatsApp Business Platform solution. Automate customer support, lead qualification, broadcast campaigns & CRM sync. Start your free trial!";

export const metadata = buildMetadata({
  title,
  description,
  keywords: [
    "official whatsapp business platform api",
    "whatsapp automation platform india",
    "whatsapp ai chatbot for business",
    "whatsapp marketing software",
    "whatsapp crm integration",
    "whatsapp broadcast software",
    "inaiwazhi whatsapp automation",
    "automated customer support whatsapp",
    "whatsapp lead qualification bot",
  ],
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
            name: "Inaiwazhi WhatsApp Automation",
            description,
          }),
          faqJsonLd(whatsappAutomationFaq),
        ]}
      />
      <WhatsAppAutomation />
    </>
  );
}
