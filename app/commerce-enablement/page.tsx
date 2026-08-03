import { CommerceEnablement } from "@/components/CommerceEnablement";
import { SeoJsonLd } from "@/components/SeoJsonLd";
import { commerceEnablementFaq } from "@/lib/commerceEnablement";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbJsonLd, faqJsonLd, serviceJsonLd, webpageJsonLd } from "@/lib/schema";

const canonicalPath = "/commerce-enablement";
const title = "Commerce Enablement Consulting Program | SoftClinch";
const description =
  "SoftClinch Commerce Enablement Program helps ecommerce businesses structure product discoverability, commerce readiness, customer communication, analytics, SOPs, and operational handover.";

export const metadata = buildMetadata({
  title,
  description,
  canonicalPath,
  keywords: [
    "commerce enablement consulting",
    "ecommerce operations consulting",
    "Merchant Center readiness",
    "Meta Commerce readiness",
    "WhatsApp commerce implementation",
    "ecommerce SOP consulting",
    "customer communication automation",
    "commerce analytics readiness",
  ],
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
