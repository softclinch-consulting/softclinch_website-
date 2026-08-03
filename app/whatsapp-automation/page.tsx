import { SeoJsonLd } from "@/components/SeoJsonLd";
import { WhatsAppAutomation } from "@/components/WhatsAppAutomation";
import { landingPageKeywords, landingPageSeo } from "@/lib/landingPageKeywords";
import { buildMetadata } from "@/lib/seo";
import { faqJsonLd, serviceJsonLd, webpageJsonLd } from "@/lib/schema";
import { SITE_NAME } from "@/lib/site";
import { whatsappAutomationFaq } from "@/lib/faqs";

export const metadata = buildMetadata({
  title: landingPageSeo.inaiwazhiWhatsAppAutomation.title,
  description: landingPageSeo.inaiwazhiWhatsAppAutomation.description,
  keywords: [...landingPageKeywords.inaiwazhiWhatsAppAutomation],
  canonicalPath: "/whatsapp-automation",
});

export default function WhatsAppAutomationPage() {
  return (
    <>
      <SeoJsonLd
        data={[
          webpageJsonLd({
            canonicalPath: "/whatsapp-automation",
            title: `${landingPageSeo.inaiwazhiWhatsAppAutomation.title} | ${SITE_NAME}`,
          }),
          serviceJsonLd({
            canonicalPath: "/whatsapp-automation",
            name: landingPageSeo.inaiwazhiWhatsAppAutomation.title,
            description: landingPageSeo.inaiwazhiWhatsAppAutomation.description,
          }),
          faqJsonLd(whatsappAutomationFaq),
        ]}
      />
      <WhatsAppAutomation />
    </>
  );
}
