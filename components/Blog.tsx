"use client";
import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { blogPosts } from '@/lib/blog';
import { ArrowRight, Calendar, Clock } from 'lucide-react';

type BlogCategory = 'SAP' | 'Digital Marketing' | 'Custom Development' | 'WhatsApp Automation' | 'AI & Customer Experience' | 'All';

export const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState<BlogCategory>('All');

  const categories: BlogCategory[] = ['All', 'AI & Customer Experience', 'WhatsApp Automation', 'SAP', 'Digital Marketing', 'Custom Development'];

  const filteredPosts = selectedCategory === 'All'
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCategory);

  const categoryColors: Record<string, string> = {
    'SAP': 'bg-blue-100 text-blue-700',
    'Digital Marketing': 'bg-emerald-100 text-emerald-700',
    'Custom Development': 'bg-purple-100 text-purple-700',
    'WhatsApp Automation': 'bg-green-100 text-green-700',
    'AI & Customer Experience': 'bg-indigo-100 text-indigo-700',
  };

  return (
    <div className="py-24 bg-slate-50/50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-5xl lg:text-6xl font-display font-bold text-slate-900 mb-6">
            Our Blog
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Insights, best practices, and industry trends from our team of expert engineers and consultants.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-brand-navy text-white shadow-lg'
                  : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Blog Grid */}
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group h-full flex flex-col bg-white border border-slate-200 rounded-2xl overflow-hidden hover:border-brand-navy/30 hover:shadow-xl transition-all duration-300"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden bg-slate-100">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold shadow-sm ${categoryColors[post.category]}`}>
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-xl font-display font-bold text-slate-900 mb-3 group-hover:text-brand-navy transition-colors line-clamp-2">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow line-clamp-2">
                    {post.excerpt}
                  </p>

                  {/* Meta Info */}
                  <div className="flex items-center gap-4 text-xs text-slate-500 mb-6 pb-6 border-t border-slate-100 pt-6">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{new Date(post.publishedDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={14} />
                      <span>{post.readTime} min read</span>
                    </div>
                  </div>

                  {/* CTA */}
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 text-brand-navy font-semibold group/link hover:gap-3 transition-all"
                  >
                    Read Article
                    <ArrowRight size={18} className="group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-slate-600 text-lg">No articles found in this category. Please try another filter.</p>
          </div>
        )}
      </div>
    </div>
  );
};
