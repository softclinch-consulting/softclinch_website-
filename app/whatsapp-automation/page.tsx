import { SeoJsonLd } from "@/components/SeoJsonLd";
import { WhatsAppAutomation } from "@/components/WhatsAppAutomation";
import { buildMetadata } from "@/lib/seo";
import { faqJsonLd, serviceJsonLd, webpageJsonLd } from "@/lib/schema";
import { SITE_NAME } from "@/lib/site";
import { whatsappAutomationFaq } from "@/lib/faqs";

const title = "WhatsApp Business Automation Platform | SoftClinch";
const description =
  "Enterprise WhatsApp automation: CRM integration, automated lead nurturing, AI support chatbots & broadcast campaigns. Get your free WhatsApp API demo!";

export const metadata = buildMetadata({
  title,
  description,
  keywords: [
    "enterprise whatsapp automation platform",
    "whatsapp marketing automation",
    "whatsapp business api solution",
    "whatsapp crm automation",
    "inaiwazhi whatsapp software",
    "ai whatsapp customer support bot",
  ],
  canonicalPath: "/inaiwazhi-whatsapp-automation",
});

export default function WhatsAppAutomationPage() {
  return (
    <>
      <SeoJsonLd
        data={[
          webpageJsonLd({
            canonicalPath: "/whatsapp-automation",
            title,
          }),
          serviceJsonLd({
            canonicalPath: "/whatsapp-automation",
            name: "WhatsApp Automation (Inaiwazhi)",
            description:
              "Enterprise WhatsApp automation platform for lead nurturing, support workflows, analytics, and secure API integration.",
          }),
          faqJsonLd(whatsappAutomationFaq),
        ]}
      />
      <WhatsAppAutomation />
    </>
  );
}
