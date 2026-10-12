import { BusinessCommunication } from "@/components/BusinessCommunication";
import { SeoJsonLd } from "@/components/SeoJsonLd";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbJsonLd, serviceJsonLd, webpageJsonLd } from "@/lib/schema";

const canonicalPath = "/business-communication";
const title = "Business Communication & Workflow Automation | SoftClinch";
const description =
  "Streamline customer communication & internal operations. Connect WhatsApp, support ticketing, SAP & CRM workflows seamlessly. Request an interactive demo!";

export const metadata = buildMetadata({
  title,
  description,
  canonicalPath,
  keywords: [
    "business communication and workflow automation platform",
    "workflow automation",
    "business workflow automation",
    "WhatsApp automation",
    "customer support automation",
    "support ticket automation",
    "internal communication automation",
    "SAP integration",
    "ERP integration",
    "CRM automation",
    "enterprise communication platform",
  ],
});

export default function BusinessCommunicationPage() {
  return (
    <>
      <SeoJsonLd
        data={[
          webpageJsonLd({ canonicalPath, title }),
          serviceJsonLd({
            canonicalPath,
            name: "Inaiwazhi Business Communication & Workflow Automation Platform",
            description,
          }),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Enterprise", path: "/services/enterprise-software" },
            { name: "Business Communication", path: canonicalPath },
          ]),
        ]}
      />
      <BusinessCommunication />
    </>
  );
}
