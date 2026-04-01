import { SeoJsonLd } from "@/components/SeoJsonLd";
import { Home } from "@/components/Home";
import { buildMetadata } from "@/lib/seo";
import { webpageJsonLd } from "@/lib/schema";
import { SITE_NAME } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Enterprise Technology Consulting & Engineering",
  description:
    "Engineering-led consulting for scalable digital systems: SAP consulting, custom SaaS platforms, digital marketing, and WhatsApp automation (Inaiwazhi).",
  canonicalPath: "/",
});

export default function Page() {
  return (
    <>
      <SeoJsonLd
        data={webpageJsonLd({
          canonicalPath: "/",
          title: `Enterprise Technology Consulting & Engineering | ${SITE_NAME}`,
        })}
      />
      <Home />
    </>
  );
}
