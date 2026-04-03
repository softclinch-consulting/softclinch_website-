"use client";
import { useEffect, useState } from 'react';
import { blogPosts } from '@/lib/blog';
import { Breadcrumbs } from './Breadcrumbs';
import { SocialShare } from './SocialShare';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Calendar, Clock, User, ArrowRight } from 'lucide-react';

interface BlogDetailProps {
  slug: string;
}

export const BlogDetail = ({ slug }: BlogDetailProps) => {
  const post = blogPosts.find(p => p.slug === slug);
  const [relatedPosts, setRelatedPosts] = useState(blogPosts.slice(0, 3));

  useEffect(() => {
    if (post) {
      // Get 2 other posts from the same category
      const related = blogPosts
        .filter(p => p.category === post.category && p.id !== post.id)
        .slice(0, 2);
      
      // If not enough, add posts from other categories
      if (related.length < 2) {
        const additional = blogPosts
          .filter(p => p.id !== post.id && !related.find(r => r.id === p.id))
          .slice(0, 2 - related.length);
        setRelatedPosts([...related, ...additional]);
      } else {
        setRelatedPosts(related);
      }
    }
  }, [post]);

  if (!post) {
    return (
      <div className="py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl font-display font-bold text-slate-900 mb-4">Article Not Found</h1>
          <p className="text-slate-600 mb-8">Sorry, we couldn't find the article you're looking for.</p>
          <Link href="/blog" className="inline-flex items-center gap-2 text-brand-navy font-semibold">
            Back to Blog <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    );
  }

  const blogUrl = `${typeof window !== 'undefined' ? window.location.origin : ''}/blog/${slug}`;

  return (
    <div className="py-24 bg-slate-50">
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Blog', href: '/blog' },
            { label: post.title }
          ]}
        />

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="mb-6">
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 text-xs font-bold mb-4">
              {post.category}
            </span>
            <h1 className="text-5xl font-display font-bold text-slate-900 mb-6 leading-tight">
              {post.title}
            </h1>
          </div>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-6 text-slate-600 border-t border-b border-slate-200 py-6">
            <div className="flex items-center gap-2">
              <User size={18} />
              <span className="font-medium">{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={18} />
              <span>{new Date(post.publishedDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={18} />
              <span>{post.readTime} min read</span>
            </div>
          </div>
        </motion.div>

        {/* Featured Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 rounded-2xl overflow-hidden"
        >
          <img
            src={`https://picsum.photos/seed/${post.slug}-featured/1200/600`}
            alt={post.title}
            className="w-full h-96 object-cover"
          />
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="prose prose-lg max-w-none mb-16 

            [&_h1]:text-4xl [&_h1]:font-display [&_h1]:font-bold [&_h1]:text-slate-900 [&_h1]:mt-8 [&_h1]:mb-4
            [&_h2]:text-3xl [&_h2]:font-display [&_h2]:font-bold [&_h2]:text-slate-900 [&_h2]:mt-8 [&_h2]:mb-4
            [&_h3]:text-2xl [&_h3]:font-bold [&_h3]:text-slate-900 [&_h3]:mt-6 [&_h3]:mb-3
            [&_p]:text-slate-700 [&_p]:leading-relaxed [&_p]:mb-4
            [&_ul]:list-disc [&_ul]:ml-6 [&_ul]:mb-4 [&_ul]:space-y-2
            [&_li]:text-slate-700
            [&_strong]:font-bold [&_strong]:text-slate-900
            [&_em]:italic [&_em]:text-slate-700
            [&_a]:text-brand-navy [&_a]:underline [&_a]:hover:no-underline
            [&_img]:rounded-xl [&_img]:my-8 [&_img]:w-full [&_img]:shadow-lg
          "
        >
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </motion.div>

        {/* Social Share */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-slate-200 pt-8 mb-16"
        >
          <SocialShare title={post.title} url={blogUrl} description={post.excerpt} />
        </motion.div>

        {/* Author Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white border border-slate-200 rounded-2xl p-8 mb-16"
        >
          <h3 className="text-xl font-bold text-slate-900 mb-2">About the Author</h3>
          <p className="text-slate-600">
            {post.author} is an expert in {post.category.toLowerCase()} with over 10 years of experience in enterprise technology solutions.
          </p>
        </motion.div>

        {/* Related Articles */}
        {relatedPosts.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="border-t border-slate-200 pt-16"
          >
            <h2 className="text-3xl font-display font-bold text-slate-900 mb-8">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  href={`/blog/${relatedPost.slug}`}
                  className="group"
                >
                  <div className="bg-white border border-slate-200 rounded-xl overflow-hidden hover:border-brand-navy/30 hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                    <div className="h-40 overflow-hidden bg-slate-100">
                      <img
                        src={`https://picsum.photos/seed/${relatedPost.slug}/400/250`}
                        alt={relatedPost.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="font-bold text-slate-900 mb-2 group-hover:text-brand-navy transition-colors line-clamp-2">
                        {relatedPost.title}
                      </h3>
                      <p className="text-sm text-slate-600 mb-4 flex-grow line-clamp-2">
                        {relatedPost.excerpt}
                      </p>
                      <span className="text-sm font-semibold text-brand-navy inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                        Read More <ArrowRight size={14} />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </article>
    </div>
  );
};
