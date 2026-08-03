import { SAPConsultingServices } from '@/components/SAPConsultingServices';
import { SeoJsonLd } from "@/components/SeoJsonLd";
import { landingPageKeywords, landingPageSeo } from "@/lib/landingPageKeywords";
import { buildMetadata } from "@/lib/seo";
import { faqJsonLd, serviceJsonLd, webpageJsonLd } from "@/lib/schema";
import { SITE_NAME } from "@/lib/site";
import { sapConsultingFaq } from "@/lib/faqs";

const canonicalPath = "/services/sap-consulting";
const title = landingPageSeo.sapConsulting.title;
const description = landingPageSeo.sapConsulting.description;

export const metadata = buildMetadata({
  title,
  description,
  keywords: [...landingPageKeywords.sapConsulting],
  canonicalPath,
});

export default function SAPConsultingPage() {
  return (
    <>
      <SeoJsonLd
        data={[
          webpageJsonLd({
            canonicalPath,
            title: `${title} | ${SITE_NAME}`,
          }),
          serviceJsonLd({ canonicalPath, name: title, description }),
          faqJsonLd(sapConsultingFaq),
        ]}
      />
      <SAPConsultingServices />
    </>
  );
}
