import { SeoJsonLd } from "@/components/SeoJsonLd";
import { WhatsAppAutomation } from "@/components/WhatsAppAutomation";
import { landingPageKeywords, landingPageSeo } from "@/lib/landingPageKeywords";
import { buildMetadata } from "@/lib/seo";
import { faqJsonLd, serviceJsonLd, webpageJsonLd } from "@/lib/schema";
import { whatsappAutomationFaq } from "@/lib/faqs";

const canonicalPath = "/inaiwazhi-whatsapp-automation";
const title = landingPageSeo.inaiwazhiWhatsAppAutomation.title;
const description = landingPageSeo.inaiwazhiWhatsAppAutomation.description;

export const metadata = buildMetadata({
  title,
  description,
  keywords: [...landingPageKeywords.inaiwazhiWhatsAppAutomation],
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
