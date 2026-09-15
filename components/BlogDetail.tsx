"use client";
import { useEffect, useState } from 'react';
import { blogPosts } from '@/lib/blog';
import { Breadcrumbs } from './Breadcrumbs';
import { SocialShare } from './SocialShare';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Calendar, Clock, User, ArrowRight, BookOpen, Sparkles } from 'lucide-react';

interface BlogDetailProps {
  slug: string;
}

export const BlogDetail = ({ slug }: BlogDetailProps) => {
  const post = blogPosts.find(p => p.slug === slug);
  const [relatedPosts, setRelatedPosts] = useState(blogPosts.slice(0, 3));
  const [blogUrl, setBlogUrl] = useState('');

  useEffect(() => {
    setBlogUrl(`${window.location.origin}/blog/${slug}`);
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
  }, [post, slug]);

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

  const categoryConfig: Record<string, { bg: string; text: string; border: string; glow: string }> = {
    'SAP': {
      bg: 'bg-blue-100 text-blue-800',
      text: 'text-blue-800',
      border: 'border-blue-200',
      glow: 'shadow-blue-500/10 shadow-lg',
    },
    'Digital Marketing': {
      bg: 'bg-emerald-100 text-emerald-800',
      text: 'text-emerald-800',
      border: 'border-emerald-200',
      glow: 'shadow-emerald-500/10 shadow-lg',
    },
    'Custom Development': {
      bg: 'bg-purple-100 text-purple-800',
      text: 'text-purple-800',
      border: 'border-purple-200',
      glow: 'shadow-purple-500/10 shadow-lg',
    },
    'WhatsApp Automation': {
      bg: 'bg-green-100 text-green-800',
      text: 'text-green-800',
      border: 'border-green-200',
      glow: 'shadow-green-500/10 shadow-lg',
    },
    'AI & Customer Experience': {
      bg: 'bg-indigo-100 text-indigo-800',
      text: 'text-indigo-800',
      border: 'border-indigo-200',
      glow: 'shadow-indigo-500/10 shadow-lg',
    },
  };

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase();
  };

  return (
    <div className="py-24 bg-slate-50/50 min-h-screen">
      {/* Top Header Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="mb-6">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Blog', href: '/blog' },
              { label: post.title }
            ]}
          />
        </div>

        {/* Category Badge */}
        <div className="mb-6">
          <span className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold shadow-sm ${categoryConfig[post.category]?.bg || 'bg-slate-100 text-slate-800'}`}>
            <Sparkles size={12} className="animate-pulse" />
            {post.category}
          </span>
        </div>

        {/* Big Bold Title */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight mb-8 font-display max-w-4xl">
          {post.title}
        </h1>

        {/* Meta Info */}
        <div className="flex flex-wrap items-center gap-6 text-sm text-slate-600 border-t border-b border-slate-200/80 py-6">
          <div className="flex items-center gap-2">
            <User size={18} className="text-slate-400" />
            <span className="font-semibold text-slate-900">{post.author}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar size={18} className="text-slate-400" />
            <span>{new Date(post.publishedDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock size={18} className="text-slate-400" />
            <span>{post.readTime} min read</span>
          </div>
        </div>
      </div>

      {/* Featured Image */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className={`relative h-64 sm:h-96 lg:h-[520px] rounded-3xl overflow-hidden shadow-xl border border-slate-200/50`}
        >
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>

      {/* Main Grid Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Main Content Column */}
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="prose prose-lg max-w-none mb-16 
                [&_h1]:text-3xl [&_h1]:font-display [&_h1]:font-bold [&_h1]:text-slate-900 [&_h1]:mt-10 [&_h1]:mb-6 [&_h1]:border-l-4 [&_h1]:border-brand-navy [&_h1]:pl-4
                [&_h2]:text-2xl [&_h2]:font-display [&_h2]:font-bold [&_h2]:text-slate-900 [&_h2]:mt-10 [&_h2]:mb-6 [&_h2]:border-l-4 [&_h2]:border-brand-navy [&_h2]:pl-4
                [&_h3]:text-xl [&_h3]:font-bold [&_h3]:text-slate-900 [&_h3]:mt-8 [&_h3]:mb-4
                [&_p]:text-slate-700 [&_p]:leading-relaxed [&_p]:mb-6
                [&_ul]:list-disc [&_ul]:ml-6 [&_ul]:mb-6 [&_ul]:space-y-2
                [&_li]:text-slate-700
                [&_strong]:font-bold [&_strong]:text-slate-900
                [&_em]:italic [&_em]:text-slate-700
                [&_a]:text-brand-navy [&_a]:underline [&_a]:hover:no-underline
                [&_img]:rounded-xl [&_img]:my-8 [&_img]:w-full [&_img]:shadow-lg
                [&_table]:min-w-full [&_table]:divide-y [&_table]:divide-slate-200 [&_table]:my-6 [&_table]:border [&_table]:border-slate-200 [&_table]:rounded-lg [&_table]:overflow-hidden
                [&_th]:px-6 [&_th]:py-3 [&_th]:bg-slate-100 [&_th]:text-left [&_th]:text-xs [&_th]:font-bold [&_th]:text-slate-500 [&_th]:uppercase [&_th]:tracking-wider
                [&_td]:px-6 [&_td]:py-4 [&_td]:text-sm [&_td]:text-slate-700 [&_td]:border-b [&_td]:border-slate-200
                [&_tr]:hover:bg-slate-50/50
              "
            >
              <div dangerouslySetInnerHTML={{ __html: parseMarkdownToHtml(post.content) }} />
            </motion.div>
          </div>

          {/* Sidebar Column */}
          <div className="lg:col-span-4">
            <div className="sticky top-28 space-y-8">
              
              {/* Author Widget */}
              <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm">
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 pb-2 border-b border-slate-100">About the Author</h3>
                <div className="flex items-center gap-3.5 mb-4">
                  <div className="w-12 h-12 rounded-full bg-slate-950 text-white flex items-center justify-center font-bold text-sm shadow-inner">
                    {getInitials(post.author)}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-900">{post.author}</div>
                    <div className="text-[10px] text-slate-500 uppercase tracking-wider">Expert Writer</div>
                  </div>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {post.author} is a senior engineering contributor and technology consultant at SoftClinch, focusing on {post.category.toLowerCase()} implementations.
                </p>
              </div>

              {/* Share Widget */}
              <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm">
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 pb-2 border-b border-slate-100">Share Post</h3>
                <SocialShare title={post.title} url={blogUrl} description={post.excerpt} />
              </div>

              {/* consultation Call to Action */}
              <div className="bg-gradient-to-br from-brand-navy to-slate-900 text-white rounded-2xl p-6 shadow-lg relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full blur-xl" />
                <h3 className="text-lg font-bold mb-2 font-display">Need expert solutions?</h3>
                <p className="text-slate-300 text-xs leading-relaxed mb-6">
                  Discuss how our team can help you automate workflows, integrate SAP systems, customize applications, and accelerate organic visibility.
                </p>
                <Link
                  href="/contact"
                  className="w-full bg-white text-brand-navy py-3 px-4 rounded-xl text-center text-xs font-bold block hover:bg-slate-100 transition-colors shadow-md"
                >
                  Schedule Consultation
                </Link>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Related Articles Section */}
      {relatedPosts.length > 0 && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-200 mt-20 pt-16">
          <div className="flex items-center gap-2 mb-8">
            <BookOpen size={20} className="text-brand-navy" />
            <h2 className="text-3xl font-display font-bold text-slate-900">Related Articles</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {relatedPosts.map((relatedPost) => (
              <Link
                key={relatedPost.id}
                href={`/blog/${relatedPost.slug}`}
                className="group"
              >
                <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden hover:border-brand-navy/30 hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                  <div className="h-48 overflow-hidden bg-slate-100 relative">
                    <img
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className={`inline-block px-2.5 py-1 rounded-full text-[10px] font-bold shadow-sm ${categoryConfig[relatedPost.category]?.bg || 'bg-slate-100 text-slate-800'}`}>
                        {relatedPost.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="font-bold text-slate-900 mb-2 group-hover:text-brand-navy transition-colors line-clamp-2">
                      {relatedPost.title}
                    </h3>
                    <p className="text-xs text-slate-600 mb-4 flex-grow line-clamp-2">
                      {relatedPost.excerpt}
                    </p>
                    <span className="text-xs font-bold text-brand-navy inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                      Read More <ArrowRight size={14} />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

function parseMarkdownToHtml(markdown: string): string {
  if (!markdown) return '';
  
  const lines = markdown.split(/\r?\n/);
  let html = '';
  
  let currentListType: 'ul' | 'ol' | null = null;
  let inTable = false;
  let inParagraph = false;
  let paragraphText = '';
  
  const closeList = () => {
    if (currentListType === 'ul') {
      html += '</ul>';
    } else if (currentListType === 'ol') {
      html += '</ol>';
    }
    currentListType = null;
  };
  
  const closeParagraph = () => {
    if (inParagraph) {
      html += `<p>${parseInlineMarkdown(paragraphText.trim())}</p>`;
      inParagraph = false;
      paragraphText = '';
    }
  };
  
  const closeTable = () => {
    if (inTable) {
      html += '</tbody></table></div>';
      inTable = false;
    }
  };
  
  const closeAll = () => {
    closeParagraph();
    closeList();
    closeTable();
  };
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    
    // Empty line
    if (!line) {
      closeAll();
      continue;
    }
    
    // Headings
    if (line.startsWith('# ')) {
      closeAll();
      html += `<h1>${parseInlineMarkdown(line.substring(2))}</h1>`;
    } else if (line.startsWith('## ')) {
      closeAll();
      html += `<h2>${parseInlineMarkdown(line.substring(3))}</h2>`;
    } else if (line.startsWith('### ')) {
      closeAll();
      html += `<h3>${parseInlineMarkdown(line.substring(4))}</h3>`;
    } else if (line.startsWith('#### ')) {
      closeAll();
      html += `<h4>${parseInlineMarkdown(line.substring(5))}</h4>`;
    }
    // Code blocks
    else if (line.startsWith('```')) {
      closeAll();
      let code = '';
      const lang = line.replace('```', '').trim();
      i++;
      while (i < lines.length && !lines[i].trim().startsWith('```')) {
        code += lines[i] + '\n';
        i++;
      }
      html += `<pre class="bg-slate-900 text-slate-100 p-4 rounded-xl overflow-x-auto my-6 font-mono text-sm"><code class="language-${lang}">${code.trim()}</code></pre>`;
    }
    // Unordered list item
    else if (line.startsWith('- ') || line.startsWith('* ')) {
      closeParagraph();
      closeTable();
      if (currentListType !== 'ul') {
        closeList();
        html += '<ul class="list-disc ml-6 mb-4 space-y-2">';
        currentListType = 'ul';
      }
      const content = line.substring(2).trim();
      html += `<li class="text-slate-700">${parseInlineMarkdown(content)}</li>`;
    }
    // Ordered list item
    else if (line.match(/^\d+\.\s/)) {
      closeParagraph();
      closeTable();
      if (currentListType !== 'ol') {
        closeList();
        html += '<ol class="list-decimal ml-6 mb-4 space-y-2">';
        currentListType = 'ol';
      }
      const content = line.replace(/^\d+\.\s+/, '').trim();
      html += `<li class="text-slate-700">${parseInlineMarkdown(content)}</li>`;
    }
    // Table row
    else if (line.startsWith('|')) {
      closeParagraph();
      closeList();
      const parts = line.split('|').map(p => p.trim()).filter((_, idx, arr) => idx > 0 && idx < arr.length - 1);
      const isSeparator = parts.every(p => p.startsWith(':') || p.startsWith('-') || p.endsWith(':') || p === '');
      
      if (isSeparator) {
        continue;
      }
      
      if (!inTable) {
        inTable = true;
        html += '<div class="overflow-x-auto my-6"><table class="min-w-full divide-y divide-slate-200 border border-slate-200 rounded-lg"><thead><tr class="bg-slate-100">';
        parts.forEach(h => {
          html += `<th class="px-6 py-3 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">${parseInlineMarkdown(h)}</th>`;
        });
        html += '</tr></thead><tbody class="bg-white divide-y divide-slate-200">';
      } else {
        html += '<tr class="hover:bg-slate-50">';
        parts.forEach(c => {
          html += `<td class="px-6 py-4 text-sm text-slate-700">${parseInlineMarkdown(c)}</td>`;
        });
        html += '</tr>';
      }
    }
    // Standard paragraph line (concatenated)
    else {
      closeList();
      closeTable();
      if (!inParagraph) {
        inParagraph = true;
        paragraphText = line;
      } else {
        paragraphText += ' ' + line;
      }
    }
  }
  
  closeAll();
  return html;
}

function parseInlineMarkdown(text: string): string {
  let html = text;
  
  // Escape HTML characters to prevent XSS but allow markdown tags we generate
  html = html
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
    
  // Bold: **text**
  html = html.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  
  // Italic: *text* or _text_
  html = html.replace(/\*([^*]+)\*/g, '<em>$1</em>');
  html = html.replace(/_([^_]+)_/g, '<em>$1</em>');
  
  // Inline code: `code`
  html = html.replace(/`([^`]+)`/g, '<code class="bg-slate-100 px-1.5 py-0.5 rounded text-sm font-mono text-brand-navy">$1</code>');
  
  // Links: [text](url)
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-brand-navy underline hover:no-underline" target="_blank" rel="noopener noreferrer">$1</a>');
  
  // Restore escaped tags for nested styling inside our generated tags (e.g. strong inside li)
  html = html
    .replace(/&lt;strong&gt;/g, '<strong>')
    .replace(/&lt;\/strong&gt;/g, '</strong>')
    .replace(/&lt;em&gt;/g, '<em>')
    .replace(/&lt;\/em&gt;/g, '</em>')
    .replace(/&lt;code([^&]*)&gt;/g, '<code$1>')
    .replace(/&lt;\/code&gt;/g, '</code>')
    .replace(/&lt;a([^&]*)&gt;/g, '<a$1>')
    .replace(/&lt;\/a&gt;/g, '</a>');

  return html;
}
