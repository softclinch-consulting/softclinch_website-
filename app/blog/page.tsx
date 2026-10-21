import { SeoJsonLd } from "@/components/SeoJsonLd";
import { Blog } from "@/components/Blog";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbJsonLd, webpageJsonLd } from "@/lib/schema";
import { SITE_NAME } from "@/lib/site";

const title = "Technology, SAP & AI Automation Blog | SoftClinch";
const description =
  "Actionable technology insights for business leaders: AI agents, custom software engineering, SAP rollout strategies, WhatsApp automation & modern SEO/AEO.";

export const metadata = buildMetadata({
  title,
  description,
  keywords: [
    "enterprise technology blog",
    "ai automation articles",
    "sap consulting insights",
    "custom software engineering blog",
    "b2b digital marketing guides",
    "whatsapp automation insights",
  ],
  canonicalPath: "/blog",
});

export default function BlogPage() {
  return (
    <>
      <SeoJsonLd
        data={[
          webpageJsonLd({
            canonicalPath: "/blog",
            title,
          }),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
          ]),
        ]}
      />
      <Blog />
    </>
  );
}
