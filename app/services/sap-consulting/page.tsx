import { SAPConsultingServices } from '@/components/SAPConsultingServices';
import { SeoJsonLd } from "@/components/SeoJsonLd";
import { buildMetadata } from "@/lib/seo";
import { faqJsonLd, serviceJsonLd, webpageJsonLd } from "@/lib/schema";
import { SITE_NAME } from "@/lib/site";
import { sapConsultingFaq } from "@/lib/faqs";

const canonicalPath = "/services/sap-consulting";
const title = "SAP Implementation & Rollout Services | SoftClinch";
const description =
  "Seamless SAP S/4HANA implementations, global rollouts & enterprise integrations. Reduce project risk & accelerate ROI. Talk to our SAP solutions architect!";

export const metadata = buildMetadata({
  title,
  description,
  keywords: [
    "sap implementation services",
    "sap rollout partner india",
    "sap s4hana implementation consulting",
    "sap consulting services chennai",
    "enterprise sap rollout company",
    "sap process optimization",
    "sap integration consulting",
    "sap migration partner",
  ],
  canonicalPath,
});

export default function SAPConsultingPage() {
  return (
    <>
      <SeoJsonLd
        data={[
          webpageJsonLd({
            canonicalPath,
            title,
          }),
          serviceJsonLd({ canonicalPath, name: title, description }),
          faqJsonLd(sapConsultingFaq),
        ]}
      />
      <SAPConsultingServices />
    </>
  );
}
