import { SeoJsonLd } from "@/components/SeoJsonLd";
import { BlogDetail } from "@/components/BlogDetail";
import { buildMetadata } from "@/lib/seo";
import { blogPosts } from "@/lib/blog";
import { SITE_NAME, getSiteUrl } from "@/lib/site";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return buildMetadata({
      title: "Blog Post Not Found",
      description: "The blog post you're looking for doesn't exist.",
      canonicalPath: `/blog/${slug}`,
    });
  }

  return buildMetadata({
    title: post.metaTitle,
    description: post.metaDescription,
    keywords: post.keywords,
    canonicalPath: `/blog/${slug}`,
  });
}

export async function generateStaticParams() {
  return blogPosts.map(post => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="py-24">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold text-slate-900">Blog Post Not Found</h1>
        </div>
      </div>
    );
  }

  const siteUrl = getSiteUrl();
  const blogUrl = `${siteUrl}/blog/${post.slug}/`;
  const postImage = post.image?.startsWith("http")
    ? post.image
    : `${siteUrl}${post.image.startsWith("/") ? post.image : `/${post.image}`}`;

  return (
    <>
      <SeoJsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: post.title,
          description: post.metaDescription,
          image: postImage,
          datePublished: post.publishedDate,
          author: {
            "@type": "Organization",
            name: post.author,
            url: siteUrl,
          },
          publisher: {
            "@type": "Organization",
            name: SITE_NAME,
            url: siteUrl,
            logo: {
              "@type": "ImageObject",
              url: `${siteUrl}/logo.png`,
            },
          },
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": blogUrl,
          },
          keywords: post.keywords.join(", "),
          url: blogUrl,
        }}
      />
      <BlogDetail slug={slug} />
    </>
  );
}
