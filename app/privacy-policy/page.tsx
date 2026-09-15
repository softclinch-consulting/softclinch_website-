import { SeoJsonLd } from "@/components/SeoJsonLd";
import { PrivacyPolicy } from "@/components/PrivacyPolicy";
import { buildMetadata } from "@/lib/seo";
import { webpageJsonLd } from "@/lib/schema";
import { SITE_NAME } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Privacy Policy | SoftClinch Consulting Services",
  description: "Read the Privacy Policy for SoftClinch Consulting Services Pvt. Ltd., detailing how we collect, use, and protect your personal information.",
  keywords: [
    "Privacy Policy",
    "SoftClinch Privacy Policy",
    "Data Protection",
    "Privacy Practices",
  ],
  canonicalPath: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <>
      <SeoJsonLd
        data={webpageJsonLd({
          canonicalPath: "/privacy-policy",
          title: `Privacy Policy | ${SITE_NAME}`,
        })}
      />
      <PrivacyPolicy />
    </>
  );
}
