"use client";
import { useState, useMemo } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { blogPosts, BlogPost } from '@/lib/blog';
import { ArrowRight, Calendar, Clock, Search, X, Sparkles, MessageCircle, BookOpen } from 'lucide-react';

type BlogCategory = 'SAP' | 'Digital Marketing' | 'Custom Development' | 'WhatsApp Automation' | 'AI & Customer Experience' | 'All';

export const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState<BlogCategory>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories: BlogCategory[] = [
    'All',
    'AI & Customer Experience',
    'WhatsApp Automation',
    'SAP',
    'Digital Marketing',
    'Custom Development'
  ];

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { All: blogPosts.length };
    categories.forEach(cat => {
      if (cat !== 'All') {
        counts[cat] = blogPosts.filter(p => p.category === cat).length;
      }
    });
    return counts;
  }, []);

  const categoryColors: Record<string, string> = {
    'SAP': 'bg-blue-100 text-blue-700 border-blue-200',
    'Digital Marketing': 'bg-emerald-100 text-emerald-700 border-emerald-200',
    'Custom Development': 'bg-purple-100 text-purple-700 border-purple-200',
    'WhatsApp Automation': 'bg-green-100 text-green-700 border-green-200',
    'AI & Customer Experience': 'bg-indigo-100 text-indigo-700 border-indigo-200',
  };

  const filteredPosts = useMemo(() => {
    return blogPosts.filter(post => {
      const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
      if (!matchesCategory) return false;
      if (!searchQuery.trim()) return true;
      const query = searchQuery.toLowerCase().trim();
      return (
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query) ||
        post.category.toLowerCase().includes(query) ||
        (post.keywords && post.keywords.some(k => k.toLowerCase().includes(query)))
      );
    });
  }, [selectedCategory, searchQuery]);

  const isDefaultView = selectedCategory === 'All' && !searchQuery.trim();
  const featuredPost: BlogPost | null = isDefaultView && filteredPosts.length > 0 ? filteredPosts[0] : null;
  const displayPosts: BlogPost[] = isDefaultView ? filteredPosts.slice(1) : filteredPosts;

  const handleClearFilters = () => {
    setSelectedCategory('All');
    setSearchQuery('');
  };

  return (
    <div className="py-24 bg-slate-50/50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero Section */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-navy/5 text-brand-navy border border-brand-navy/10 text-xs font-semibold mb-6">
            <Sparkles size={14} className="text-brand-navy" />
            <span>Engineering & Strategy Publication</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-slate-900 mb-6 tracking-tight">
            SoftClinch Tech & Strategy Blog
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            In-depth guides, architectural blueprints, and Google AI search research from our enterprise engineers and consultants.
          </p>

          {/* Search Bar */}
          <div className="mt-8 max-w-xl mx-auto relative">
            <div className="relative flex items-center">
              <Search size={20} className="absolute left-4 text-slate-400 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search topics (e.g. Google AI, SAP, WhatsApp, Leads, CRM)..."
                className="w-full pl-12 pr-12 py-3.5 bg-white border border-slate-200 rounded-full text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-brand-navy focus:border-brand-navy shadow-sm transition-all"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  aria-label="Clear search query"
                  className="absolute right-4 text-slate-400 hover:text-slate-600 transition-colors"
                >
                  <X size={18} />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3 mb-14">
          {categories.map((category) => {
            const count = categoryCounts[category] || 0;
            const isSelected = selectedCategory === category;
            return (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.96 }}
                className={`flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  isSelected
                    ? 'bg-brand-navy text-white shadow-md'
                    : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300'
                }`}
              >
                <span>{category}</span>
                <span
                  className={`text-[11px] px-2 py-0.5 rounded-full font-medium ${
                    isSelected ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-600'
                  }`}
                >
                  {count}
                </span>
              </motion.button>
            );
          })}
        </div>

        {/* Search / Filter Active Feedback */}
        {(!isDefaultView || searchQuery) && (
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-4 border-b border-slate-200 text-sm">
            <div className="text-slate-600">
              Showing <span className="font-bold text-slate-900">{filteredPosts.length}</span> article
              {filteredPosts.length === 1 ? '' : 's'}
              {selectedCategory !== 'All' && (
                <span> in <span className="font-semibold text-brand-navy">{selectedCategory}</span></span>
              )}
              {searchQuery && (
                <span> matching &ldquo;<span className="font-semibold text-brand-navy">{searchQuery}</span>&rdquo;</span>
              )}
            </div>
            <button
              onClick={handleClearFilters}
              className="text-xs font-semibold text-brand-navy hover:underline flex items-center gap-1"
            >
              <X size={14} /> Clear all filters
            </button>
          </div>
        )}

        {/* Spotlight Featured Article (Shown only on All without search) */}
        {featuredPost && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <div className="bg-white border border-slate-200/90 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 group">
              {/* Media */}
              <div className="lg:col-span-7 relative min-h-[300px] sm:min-h-[380px] lg:min-h-[460px] overflow-hidden bg-slate-900">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold bg-brand-navy text-white shadow-lg">
                    <Sparkles size={12} className="text-amber-300" />
                    Featured Spotlight
                  </span>
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold border ${categoryColors[featuredPost.category] || 'bg-white text-slate-800'}`}>
                    {featuredPost.category}
                  </span>
                </div>
              </div>

              {/* Text Info */}
              <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-4 text-xs text-slate-500 mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{new Date(featuredPost.publishedDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={14} />
                      <span>{featuredPost.readTime} min read</span>
                    </div>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 mb-4 leading-tight group-hover:text-brand-navy transition-colors">
                    <Link href={`/blog/${featuredPost.slug}`}>
                      {featuredPost.title}
                    </Link>
                  </h2>

                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 line-clamp-4">
                    {featuredPost.excerpt}
                  </p>
                </div>

                <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs text-slate-500 font-medium">By {featuredPost.author}</span>
                  <Link
                    href={`/blog/${featuredPost.slug}`}
                    className="inline-flex items-center gap-2 bg-brand-navy text-white hover:bg-slate-900 font-semibold px-5 py-2.5 rounded-full text-sm shadow-md transition-all group/btn"
                  >
                    <span>Read Full Guide</span>
                    <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Section Heading for Grid if Featured is Shown */}
        {featuredPost && (
          <div className="mb-8 flex items-center justify-between">
            <h3 className="text-2xl font-display font-bold text-slate-900">
              Latest Articles & Engineering Guides
            </h3>
            <span className="text-xs text-slate-500 font-semibold uppercase tracking-wider">
              {displayPosts.length} Articles
            </span>
          </div>
        )}

        {/* Blog Grid */}
        {displayPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: (index % 6) * 0.08 }}
                viewport={{ once: true }}
                className="group h-full flex flex-col bg-white border border-slate-200/90 rounded-2xl overflow-hidden hover:border-brand-navy/40 hover:shadow-xl transition-all duration-300"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden bg-slate-100">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold shadow-sm border ${categoryColors[post.category] || 'bg-white text-slate-800'}`}>
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-7 flex flex-col flex-grow">
                  <h3 className="text-lg sm:text-xl font-display font-bold text-slate-900 mb-3 group-hover:text-brand-navy transition-colors line-clamp-2">
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
                    className="inline-flex items-center gap-2 text-brand-navy font-semibold text-sm group/link hover:gap-3 transition-all"
                  >
                    Read Article
                    <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-3xl border border-slate-200 shadow-sm max-w-xl mx-auto px-6">
            <div className="w-14 h-14 bg-slate-100 text-slate-400 rounded-full flex items-center justify-center mx-auto mb-4">
              <BookOpen size={24} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">No matching articles found</h3>
            <p className="text-slate-600 text-sm mb-6">
              We couldn&apos;t find any articles matching your search criteria. Try a different keyword or category.
            </p>
            <button
              onClick={handleClearFilters}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand-navy text-white text-sm font-semibold rounded-full hover:bg-slate-900 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* In-Feed Strategic Consultation Banner */}
        <div className="mt-20 p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-slate-900 via-brand-navy to-slate-950 text-white shadow-2xl border border-white/10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-3xl">
            <span className="inline-block px-3.5 py-1.5 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold uppercase tracking-wider mb-4">
              Strategic Technology Consulting
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-display text-white mb-4 leading-tight">
              Ready to Prepare Your Business Website for Google AI & Agentic Search?
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
              SoftClinch helps mid-market enterprises and growing businesses across Tamil Nadu and global markets engineer high-performance web systems, integrate WhatsApp automation, and achieve dominant visibility across Google AI Overviews.
            </p>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href="https://wa.me/919445679878?text=Hi%20SoftClinch%2C%20I%20would%20like%20to%20discuss%20our%20website%20and%20AI%20strategy."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold px-7 py-3.5 rounded-full text-sm shadow-lg transition-transform hover:scale-105 active:scale-95"
              >
                <MessageCircle size={18} />
                <span>Chat on WhatsApp (+91 94456 79878)</span>
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-brand-navy hover:bg-slate-100 font-bold px-7 py-3.5 rounded-full text-sm shadow-lg transition-transform hover:scale-105 active:scale-95"
              >
                <span>Request Technical Audit</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
