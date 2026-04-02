import { SeoJsonLd } from "@/components/SeoJsonLd";
import { WhatsAppAutomation } from "@/components/WhatsAppAutomation";
import { buildMetadata } from "@/lib/seo";
import { faqJsonLd, serviceJsonLd, webpageJsonLd } from "@/lib/schema";
import { whatsappAutomationFaq } from "@/lib/faqs";

const canonicalPath = "/inaiwazhi-whatsapp-automation";
const title = "Inaiwazhi WhatsApp Automation | AI WhatsApp Marketing Platform";
const description =
  "Automate customer communication with Inaiwazhi WhatsApp automation platform. Manage leads, follow-ups, campaigns and AI chat responses.";

export const metadata = buildMetadata({
  title,
  description,
  keywords: [
    "WhatsApp automation tool",
    "WhatsApp marketing software",
    "WhatsApp chatbot platform",
    "business WhatsApp automation",
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
