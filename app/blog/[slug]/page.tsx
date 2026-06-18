import { SeoJsonLd } from "@/components/SeoJsonLd";
import { BlogDetail } from "@/components/BlogDetail";
import { buildMetadata } from "@/lib/seo";
import { blogPosts } from "@/lib/blog";
import { SITE_NAME } from "@/lib/site";

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

  const blogUrl = `https://softclinch.com/blog/${post.slug}`;

  return (
    <>
      <SeoJsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: post.title,
          description: post.metaDescription,
          image: `https://picsum.photos/seed/${post.slug}-featured/1200/600`,
          datePublished: post.publishedDate,
          author: {
            "@type": "Person",
            name: post.author,
          },
          keywords: post.keywords.join(", "),
          url: blogUrl,
        }}
      />
      <BlogDetail slug={slug} />
    </>
  );
}
