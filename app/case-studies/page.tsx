import { buildMetadata } from "@/lib/seo";
import { CaseStudies } from "@/components/CaseStudies";

const canonicalPath = "/case-studies";
const title = "SAP & Enterprise Software Case Studies | SoftClinch";
const description =
  "Explore SAP S/4HANA migration, 24/7 AMS support & custom software case studies from SoftClinch in Chennai. Read client outcomes.";

export const metadata = buildMetadata({
  title,
  description,
  canonicalPath,
  ogTitle: "Enterprise SAP & Software Case Studies | SoftClinch Chennai",
  ogDescription:
    "Real-world enterprise results: zero-downtime SAP S/4HANA migrations, 24/7 AMS incident SLAs, and multi-plant ERP rollouts delivered by SoftClinch.",
  twitterTitle: "Enterprise SAP & Software Case Studies | SoftClinch",
  twitterDescription:
    "See how enterprises modernize their ERP and achieve 24/7 reliability with SoftClinch SAP AMS & consulting in Chennai.",
  keywords: [
    "SAP case studies Chennai",
    "S4HANA migration case study",
    "SAP AMS support results",
    "enterprise software case studies",
    "SoftClinch client success stories",
    "SAP ERP rollout Chennai",
  ],
});

export default function CaseStudiesPage() {
  return <CaseStudies />;
}
