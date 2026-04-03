"use client";
import {
  Facebook,
  Twitter,
  Linkedin,
  Copy,
  Check
} from 'lucide-react';
import { useState } from 'react';

interface SocialShareProps {
  title: string;
  url: string;
  description?: string;
}

export const SocialShare = ({ title, url, description }: SocialShareProps) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
  };

  return (
    <div className="flex items-center gap-4">
      <span className="text-sm font-semibold text-slate-600">Share this article:</span>
      <div className="flex items-center gap-3">
        <a
          href={shareLinks.twitter}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-slate-100 text-slate-600 hover:bg-brand-navy hover:text-white transition-all duration-300"
          aria-label="Share on Twitter"
        >
          <Twitter size={18} />
        </a>
        <a
          href={shareLinks.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-slate-100 text-slate-600 hover:bg-brand-navy hover:text-white transition-all duration-300"
          aria-label="Share on LinkedIn"
        >
          <Linkedin size={18} />
        </a>
        <a
          href={shareLinks.facebook}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-slate-100 text-slate-600 hover:bg-brand-navy hover:text-white transition-all duration-300"
          aria-label="Share on Facebook"
        >
          <Facebook size={18} />
        </a>
        <button
          onClick={copyToClipboard}
          className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-slate-100 text-slate-600 hover:bg-brand-navy hover:text-white transition-all duration-300"
          aria-label="Copy link"
        >
          {copied ? <Check size={18} /> : <Copy size={18} />}
        </button>
      </div>
    </div>
  );
};
