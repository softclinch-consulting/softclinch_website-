"use client";
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
  const faqData = items.map(item => ({
    question: item.question,
    answer: item.answer
  }));

  return (
    <>
      {includeSEO && <SeoJsonLd data={faqJsonLd(faqData)} />}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-slate-900">{title}</h2>
            <p className="text-slate-600 mt-3">
              Clear answers about scope, timelines, and delivery.
            </p>
          </div>

          <div className="space-y-4">
            {items.map((item) => (
              <details
                key={item.question}
                className="group rounded-2xl border border-slate-200 bg-white p-6"
              >
                <summary className="cursor-pointer list-none flex items-center justify-between gap-6">
                  <span className="text-lg font-semibold text-slate-900">{item.question}</span>
                  <span className="text-slate-500 group-open:rotate-180 transition-transform select-none">
                    ▾
                  </span>
                </summary>
                <div className="mt-4 text-slate-600 leading-relaxed">{item.answer}</div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

