import { SeoJsonLd } from "@/components/SeoJsonLd";
import { WhatsAppAutomation } from "@/components/WhatsAppAutomation";
import { buildMetadata } from "@/lib/seo";
import { faqJsonLd, serviceJsonLd, webpageJsonLd } from "@/lib/schema";
import { SITE_NAME } from "@/lib/site";
import { whatsappAutomationFaq } from "@/lib/faqs";

export const metadata = buildMetadata({
  title: "WhatsApp Automation (Inaiwazhi)",
  description:
    "Enterprise WhatsApp automation platform for lead nurturing, support workflows, analytics, and secure API integration.",
  canonicalPath: "/whatsapp-automation",
});

export default function WhatsAppAutomationPage() {
  return (
    <>
      <SeoJsonLd
        data={[
          webpageJsonLd({
            canonicalPath: "/whatsapp-automation",
            title: `WhatsApp Automation (Inaiwazhi) | ${SITE_NAME}`,
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
