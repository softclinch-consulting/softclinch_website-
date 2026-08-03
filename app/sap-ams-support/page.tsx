import { SAPConsulting } from "@/components/SAPConsulting";
import { SeoJsonLd } from "@/components/SeoJsonLd";
import { landingPageKeywords, landingPageSeo } from "@/lib/landingPageKeywords";
import { buildMetadata } from "@/lib/seo";
import { faqJsonLd, serviceJsonLd, webpageJsonLd } from "@/lib/schema";
import { sapAmsFaq } from "@/lib/faqs";

const canonicalPath = "/sap-ams-support";
const title = landingPageSeo.sapAmsSupport.title;
const description = landingPageSeo.sapAmsSupport.description;

export const metadata = buildMetadata({
  title,
  description,
  keywords: [...landingPageKeywords.sapAmsSupport],
  canonicalPath,
});

export default function SAPAmsSupportPage() {
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
            name: "SAP AMS Support and Enterprise SAP Consulting Services",
            description,
          }),
          faqJsonLd(sapAmsFaq),
        ]}
      />
      <SAPConsulting />
    </>
  );
}
