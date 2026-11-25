import { SAPConsultingServices } from '@/components/SAPConsultingServices';
import { SeoJsonLd } from "@/components/SeoJsonLd";
import { RelatedReading } from "@/components/RelatedReading";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbJsonLd, faqJsonLd, serviceJsonLd, webpageJsonLd } from "@/lib/schema";
import { SITE_NAME } from "@/lib/site";
import { sapConsultingFaq } from "@/lib/faqs";

const canonicalPath = "/services/sap-consulting";
const title = "SAP S/4HANA Implementation Partner in Chennai | SoftClinch";
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
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: "SAP Implementation", path: canonicalPath },
          ]),
          faqJsonLd(sapConsultingFaq),
        ]}
      />
      <SAPConsultingServices />
      <RelatedReading
        slugs={[
          "how-sap-helps-enterprises-scale-2026",
          "enterprise-digital-transformation-strategies-2026",
        ]}
      />
    </>
  );
}
