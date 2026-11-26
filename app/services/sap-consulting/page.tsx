import { SAPConsultingServices } from '@/components/SAPConsultingServices';
import { SeoJsonLd } from "@/components/SeoJsonLd";
import { RelatedReading } from "@/components/RelatedReading";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbJsonLd, faqJsonLd, serviceJsonLd, webpageJsonLd } from "@/lib/schema";
import { SITE_NAME } from "@/lib/site";
import { sapConsultingFaq } from "@/lib/faqs";

const canonicalPath = "/services/sap-consulting";
const title = "SAP Consulting in Chennai | S/4HANA Implementation";
const description =
  "Scale enterprise efficiency with SAP S/4HANA implementation, global rollouts & ECC migrations in Chennai. Accelerate ROI—consult our SAP team.";

export const metadata = buildMetadata({
  title,
  description,
  ogTitle: "Enterprise SAP Consulting in Chennai | SoftClinch",
  ogDescription:
    "End-to-end SAP S/4HANA implementation, architecture design & ERP rollout services in Chennai. Talk to our senior SAP consulting practice.",
  twitterTitle: title,
  twitterDescription:
    "End-to-end SAP S/4HANA implementation, ECC migration & global rollouts from Chennai.",
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
