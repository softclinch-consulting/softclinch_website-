import { SeoJsonLd } from "@/components/SeoJsonLd";
import { Blog } from "@/components/Blog";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbJsonLd, webpageJsonLd, blogCollectionJsonLd } from "@/lib/schema";
import { blogPosts } from "@/lib/blog";
import { SITE_NAME } from "@/lib/site";

const title = "SAP, AI & Tech Growth Blog | SoftClinch Insights";
const description =
  "Read expert engineering guides on SAP S/4HANA, AI chatbots, enterprise software, and SEO in Chennai. Practical playbooks for business leaders.";

export const metadata = buildMetadata({
  title,
  description,
  ogTitle: "SoftClinch Tech & Enterprise Consulting Insights",
  ogDescription:
    "In-depth articles and real-world architectures on SAP modernization, agentic AI, digital marketing, and automation. Read the latest posts.",
  twitterTitle: title,
  twitterDescription:
    "Practical engineering guides on SAP, AI chatbots, and software engineering from SoftClinch.",
  keywords: [
    "Google AI search research",
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
          blogCollectionJsonLd(blogPosts),
        ]}
      />
      <Blog />
    </>
  );
}

