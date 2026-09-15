"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import type { FaqItem } from "@/lib/faqs";
import { SeoJsonLd } from "./SeoJsonLd";
import { faqJsonLd } from "@/lib/schema";

export function FaqSection({
  title = "Frequently Asked Questions",
  items,
  includeSEO = true,
}: {
  title?: string;
  items: FaqItem[];
  includeSEO?: boolean;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqData = items.map(item => ({
    question: item.question,
    answer: item.answer
  }));

  const midPoint = Math.ceil(items.length / 2);
  const leftColumnFaqs = items.slice(0, midPoint);
  const rightColumnFaqs = items.slice(midPoint);

  return (
    <>
      {includeSEO && <SeoJsonLd data={faqJsonLd(faqData)} />}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-slate-900 mb-4">{title}</h2>
            <p className="text-slate-600">
              Clear answers about scope, timelines, and delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="space-y-6">
              {leftColumnFaqs.map((faq, i) => {
                const globalIndex = i;
                const isOpen = openIndex === globalIndex;
                return (
                  <div key={faq.question} className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                    <button
                      onClick={() => setOpenIndex(isOpen ? null : globalIndex)}
                      className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                    >
                      <span className="font-bold text-slate-900 leading-tight">{faq.question}</span>
                      <ChevronDown
                        className={`flex-shrink-0 text-slate-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                        size={20}
                      />
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: 'easeInOut' }}
                        >
                          <div className="px-6 pb-6 text-slate-600 text-sm leading-relaxed border-t border-slate-50 pt-4">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

            <div className="space-y-6">
              {rightColumnFaqs.map((faq, i) => {
                const globalIndex = i + midPoint;
                const isOpen = openIndex === globalIndex;
                return (
                  <div key={faq.question} className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                    <button
                      onClick={() => setOpenIndex(isOpen ? null : globalIndex)}
                      className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                    >
                      <span className="font-bold text-slate-900 leading-tight">{faq.question}</span>
                      <ChevronDown
                        className={`flex-shrink-0 text-slate-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                        size={20}
                      />
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: 'easeInOut' }}
                        >
                          <div className="px-6 pb-6 text-slate-600 text-sm leading-relaxed border-t border-slate-50 pt-4">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
