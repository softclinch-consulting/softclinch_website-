import { SeoJsonLd } from "@/components/SeoJsonLd";
import { Blog } from "@/components/Blog";
import { buildMetadata } from "@/lib/seo";
import { webpageJsonLd } from "@/lib/schema";
import { SITE_NAME } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Blog | Insights on SAP, Digital Marketing & Custom Development",
  description:
    "Read our latest insights and best practices on SAP consulting, digital marketing strategies, and custom application development.",
  keywords: ["blog", "SAP", "digital marketing", "custom development", "tech insights"],
  canonicalPath: "/blog",
});

export default function BlogPage() {
  return (
    <>
      <SeoJsonLd
        data={webpageJsonLd({
          canonicalPath: "/blog",
          title: `Blog | ${SITE_NAME}`,
        })}
      />
      <Blog />
    </>
  );
}
