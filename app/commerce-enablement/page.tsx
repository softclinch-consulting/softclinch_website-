import { CommerceEnablement } from "@/components/CommerceEnablement";
import { SeoJsonLd } from "@/components/SeoJsonLd";
import { commerceEnablementFaq } from "@/lib/commerceEnablement";
import { landingPageKeywords, landingPageSeo } from "@/lib/landingPageKeywords";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbJsonLd, faqJsonLd, serviceJsonLd, webpageJsonLd } from "@/lib/schema";

const canonicalPath = "/commerce-enablement";
const title = landingPageSeo.commerceEnablement.title;
const description = landingPageSeo.commerceEnablement.description;

export const metadata = buildMetadata({
  title,
  description,
  canonicalPath,
  keywords: [...landingPageKeywords.commerceEnablement],
});

export default function CommerceEnablementPage() {
  return (
    <>
      <SeoJsonLd
        data={[
          webpageJsonLd({ canonicalPath, title }),
          serviceJsonLd({
            canonicalPath,
            name: "Commerce Enablement Consulting Program",
            description,
          }),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Commerce Enablement", path: canonicalPath },
          ]),
          faqJsonLd(commerceEnablementFaq),
        ]}
      />
      <CommerceEnablement />
    </>
  );
}
