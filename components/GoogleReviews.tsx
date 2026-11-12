"use client";
import React from "react";
import { Star, CheckCircle2 } from "lucide-react";
import { reviews } from "@/lib/reviews";

interface GoogleReviewsProps {
  title?: string;
  badge?: string;
  subtitle?: string;
  className?: string;
}

const AVATAR_COLORS = [
  "bg-teal-600",
  "bg-emerald-700",
  "bg-rose-600",
  "bg-blue-600",
  "bg-violet-600",
  "bg-amber-600",
  "bg-pink-600",
  "bg-indigo-600",
  "bg-cyan-700",
];

export const GoogleReviews: React.FC<GoogleReviewsProps> = ({
  title = "Trusted by Growing Businesses & Enterprises",
  badge = "Client Trust",
  subtitle = "Real feedback from verified clients on Google Reviews.",
  className = "",
}) => {
  return (
    <section className={`py-20 bg-white overflow-hidden relative ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center mb-12">
        {badge && (
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-bold uppercase tracking-widest mb-4">
            <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            <span>{badge}</span>
          </div>
        )}
        <h2 className="text-3xl lg:text-5xl font-display font-bold text-slate-900 mb-4">{title}</h2>
        {subtitle && <p className="text-slate-600 max-w-2xl mx-auto mb-4">{subtitle}</p>}
        <div className="flex items-center justify-center gap-2 text-amber-400 mb-2">
          <span className="text-slate-900 font-bold text-xl">5.0</span>
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={18} fill="currentColor" />
          ))}
          <span className="text-slate-500 font-normal text-sm ml-1">· {reviews.length} verified Google reviews</span>
        </div>
      </div>

      <div className="relative w-full">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
        <style>{`
          @keyframes reviewsMarquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
          .reviews-marquee-track { display: flex; width: max-content; animation: reviewsMarquee 35s linear infinite; }
          .reviews-marquee-track:hover { animation-play-state: paused; }
        `}</style>
        <div className="overflow-hidden w-full">
          <div className="reviews-marquee-track gap-5 py-3 px-4">
            {reviews.map((t, i) => (
              <div
                key={`review-primary-${t.name}-${i}`}
                className="w-[300px] shrink-0 bg-slate-50 border border-slate-200/80 rounded-[2rem] px-6 py-5 flex flex-col gap-3 hover:shadow-xl transition-all cursor-default"
              >
                <div className="flex items-center justify-between">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-base shadow-md ${
                      AVATAR_COLORS[i % AVATAR_COLORS.length]
                    }`}
                  >
                    {t.name.charAt(0)}
                  </div>
                  <div className="flex items-center gap-1 bg-white border border-slate-200/60 px-2 py-0.5 rounded-full text-[10px] font-bold text-slate-500 shadow-sm">
                    <svg viewBox="0 0 24 24" className="w-3 h-3" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05"/>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                    </svg>
                    Google
                  </div>
                </div>
                <div className="flex gap-0.5 text-amber-400">
                  {[...Array(5)].map((_, s) => (
                    <Star key={s} size={13} fill="currentColor" />
                  ))}
                </div>
                <p className="text-slate-700 text-sm leading-relaxed flex-1">&quot;{t.text}&quot;</p>
                <div className="flex items-center gap-3 pt-3 border-t border-slate-200/60">
                  <div className="font-bold text-slate-900 text-sm">{t.name}</div>
                  <div className="text-blue-600 text-[10px] font-bold uppercase tracking-wider flex items-center gap-1">
                    Verified <CheckCircle2 size={11} />
                  </div>
                </div>
              </div>
            ))}

            {/* Duplicate set for infinite scroll marquee, hidden from screen readers */}
            {reviews.map((t, i) => (
              <div
                key={`review-duplicate-${t.name}-${i}`}
                aria-hidden="true"
                className="w-[300px] shrink-0 bg-slate-50 border border-slate-200/80 rounded-[2rem] px-6 py-5 flex flex-col gap-3 hover:shadow-xl transition-all cursor-default"
              >
                <div className="flex items-center justify-between">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-base shadow-md ${
                      AVATAR_COLORS[i % AVATAR_COLORS.length]
                    }`}
                  >
                    {t.name.charAt(0)}
                  </div>
                  <div className="flex items-center gap-1 bg-white border border-slate-200/60 px-2 py-0.5 rounded-full text-[10px] font-bold text-slate-500 shadow-sm">
                    <svg viewBox="0 0 24 24" className="w-3 h-3" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05"/>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                    </svg>
                    Google
                  </div>
                </div>
                <div className="flex gap-0.5 text-amber-400">
                  {[...Array(5)].map((_, s) => (
                    <Star key={s} size={13} fill="currentColor" />
                  ))}
                </div>
                <p className="text-slate-700 text-sm leading-relaxed flex-1">&quot;{t.text}&quot;</p>
                <div className="flex items-center gap-3 pt-3 border-t border-slate-200/60">
                  <div className="font-bold text-slate-900 text-sm">{t.name}</div>
                  <div className="text-blue-600 text-[10px] font-bold uppercase tracking-wider flex items-center gap-1">
                    Verified <CheckCircle2 size={11} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
