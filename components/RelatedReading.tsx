import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import { blogPosts, type BlogPost } from "@/lib/blog";

interface RelatedReadingProps {
  slugs: string[];
  title?: string;
  subtitle?: string;
  className?: string;
}

export function RelatedReading({
  slugs,
  title = "Related Reading",
  subtitle = "Practical guides, technical insights, and strategies from the SoftClinch team.",
  className = "",
}: RelatedReadingProps) {
  const posts = slugs
    .map((slug) => blogPosts.find((p) => p.slug === slug))
    .filter((p): p is BlogPost => Boolean(p));

  if (posts.length === 0) return null;

  return (
    <section className={`border-t border-slate-200/80 bg-slate-50/60 py-16 sm:py-20 ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-navy">
              <BookOpen className="h-4 w-4 text-brand-terracotta" />
              <span>Industry Insights</span>
            </div>
            <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 font-display">
              {title}
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-2xl">
              {subtitle}
            </p>
          </div>
          <Link
            href="/blog/"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-brand-navy hover:text-brand-terracotta transition-colors"
          >
            <span>View all articles</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className={`grid gap-6 sm:gap-8 ${posts.length === 2 ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"}`}>
          {posts.map((post) => (
            <article
              key={post.id}
              className="flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xs transition duration-300 hover:-translate-y-1 hover:border-brand-navy/30 hover:shadow-lg"
            >
              <div className="aspect-[16/9] w-full overflow-hidden bg-slate-100">
                <img
                  src={post.image}
                  alt={post.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-300 hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <span className="text-[11px] font-bold uppercase tracking-wider text-brand-navy">
                  {post.category}
                </span>
                <h3 className="mt-2 text-lg font-bold text-slate-900 line-clamp-2">
                  <Link
                    href={`/blog/${post.slug}/`}
                    className="hover:text-brand-navy transition-colors"
                  >
                    {post.title}
                  </Link>
                </h3>
                <p className="mt-2 flex-1 text-xs text-slate-600 line-clamp-2 leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] text-slate-500">
                    {post.readTime} min read
                  </span>
                  <Link
                    href={`/blog/${post.slug}/`}
                    className="inline-flex items-center gap-1 text-xs font-bold text-brand-navy hover:text-brand-terracotta transition-colors"
                  >
                    <span>Read article</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
