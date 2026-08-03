import { SeoJsonLd } from "@/components/SeoJsonLd";
import { Blog } from "@/components/Blog";
import { landingPageKeywords, landingPageSeo } from "@/lib/landingPageKeywords";
import { buildMetadata } from "@/lib/seo";
import { webpageJsonLd } from "@/lib/schema";
import { SITE_NAME } from "@/lib/site";

export const metadata = buildMetadata({
  title: landingPageSeo.blog.title,
  description: landingPageSeo.blog.description,
  keywords: [...landingPageKeywords.blog],
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
