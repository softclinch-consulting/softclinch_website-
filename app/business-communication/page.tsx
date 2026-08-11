import { BusinessCommunication } from "@/components/BusinessCommunication";
import { SeoJsonLd } from "@/components/SeoJsonLd";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbJsonLd, serviceJsonLd, webpageJsonLd } from "@/lib/schema";

const canonicalPath = "/business-communication";
const title = "Business Communication & Workflow Automation | inaiwazhi";
const description =
  "Connect customers, support teams, employees and partners with workflow automation, WhatsApp, ticketing and SAP, ERP & CRM integrations using inaiwazhi.";

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
