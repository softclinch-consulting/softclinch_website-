import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { buildMetadata } from "@/lib/seo";

const canonicalPath = "/case-studies";
const title = "Digital Marketing Success Stories | SoftClinch";
const description =
  "Explore how SoftClinch helps businesses grow with SEO, AI search optimization, paid media, funnels, and performance marketing systems.";

export const metadata = buildMetadata({
  title,
  description,
  canonicalPath,
  keywords: [
    "digital marketing case studies",
    "seo success stories",
    "performance marketing results",
    "lead generation case studies",
    "SoftClinch success stories",
  ],
});

export default function CaseStudiesPage() {
  return (
    <main className="bg-[linear-gradient(180deg,#f8fafc_0%,#ffffff_100%)] pt-20 text-slate-900">
      <section className="mx-auto max-w-5xl px-6 py-20 text-center lg:px-8">
        <div className="mx-auto max-w-3xl rounded-[36px] border border-slate-200 bg-white px-8 py-14 shadow-[0_24px_80px_-40px_rgba(15,23,42,0.35)]">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-terracotta">
            Success Stories
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
            Performance wins are being curated for this page
          </h1>
          <p className="mt-6 text-base leading-8 text-slate-600">
            We are preparing detailed case studies covering SEO growth, AI search visibility, paid media performance, and conversion improvements. In the meantime, book a consultation and we can walk you through relevant examples for your business.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-xl bg-brand-navy px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-brand-navy/90"
            >
              Book Free Growth Consultation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              href="/digital-marketing"
              className="inline-flex items-center rounded-xl border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 transition hover:border-brand-terracotta hover:text-brand-terracotta"
            >
              Back to Digital Marketing
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
