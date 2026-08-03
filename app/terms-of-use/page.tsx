import { SeoJsonLd } from "@/components/SeoJsonLd";
import { TermsOfUse } from "@/components/TermsOfUse";
import { buildMetadata } from "@/lib/seo";
import { webpageJsonLd } from "@/lib/schema";
import { SITE_NAME } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Terms of Use | SoftClinch Consulting Services",
  description: "Read the Terms of Use for SoftClinch Consulting Services Pvt. Ltd. website, outlining terms, rules, and conditions for using our services.",
  keywords: [
    "Terms of Use",
    "SoftClinch Terms of Use",
    "SoftClinch legal terms",
    "Terms of Service",
  ],
  canonicalPath: "/terms-of-use",
});

export default function TermsOfUsePage() {
  return (
    <>
      <SeoJsonLd
        data={webpageJsonLd({
          canonicalPath: "/terms-of-use",
          title: `Terms of Use | ${SITE_NAME}`,
        })}
      />
      <TermsOfUse />
    </>
  );
}
