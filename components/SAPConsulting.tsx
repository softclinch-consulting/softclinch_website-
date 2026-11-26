"use client";
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Activity, ArrowRight, ChevronDown, Sliders, Users } from 'lucide-react';
import { SAPAModelSections } from "@/components/SAPAModelSections";
import { ServiceMediaPanel } from "@/components/ServiceMediaPanel";
import { sapAmsFaq, type FaqItem } from "@/lib/faqs";
import { trackCtaClick } from "@/lib/analytics";

const sapSupportCoverage = [
  "S/4HANA On-Premise",
  "S/4HANA Private Cloud",
  "S/4HANA Public Cloud",
  "ECC support coverage",
];

export const SAPConsulting = ({ faqs = sapAmsFaq }: { faqs?: FaqItem[] }) => {
  return (
    <div className="min-h-screen bg-[#F8FAFC] overflow-hidden font-sans pt-5">
      {/* Hero Section */}
      <section className="relative bg-white overflow-hidden pt-20 pb-12 lg:pt-32 lg:pb-16 min-h-[600px] flex items-center text-slate-900">
        {/* Soft light-themed glowing backdrop gradients */}
        <div className="absolute top-[-10%] right-[-10%] w-[700px] h-[700px] bg-brand-terracotta/[0.04] rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-500/[0.04] rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[300px] bg-indigo-500/[0.03] rounded-full blur-[150px] pointer-events-none" />

        {/* Tech dots grid */}
        <div className="absolute inset-0 bg-[radial-gradient(rgba(11,37,69,0.05)_1px,transparent_1px)] bg-[size:2rem_2rem] pointer-events-none" />

        <div className="max-w-[1200px] mx-auto px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-16 lg:gap-24 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="inline-flex items-center gap-2 bg-brand-navy/5 border border-brand-navy/10 text-brand-navy px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider mb-8 backdrop-blur-md"
              >
                <Activity className="w-4 h-4 text-brand-terracotta animate-pulse" />
                Application Management Support (AMS)
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.12] mb-6 tracking-tight font-display"
              >
                SAP AMS Support in Chennai &amp; India
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-lg text-slate-600 mb-10 leading-relaxed font-medium"
              >
                SoftClinch provides SLA-based SAP AMS support for S/4HANA and ECC from its Chennai engineering team. We handle incident management, functional enhancements, and continuous optimization for mid-size enterprises across India and globally.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex gap-4 flex-wrap"
              >
                <Link
                  href="/contact"
                  onClick={() => trackCtaClick("Connect with AMS Head", "sap_ams_hero")}
                  className="inline-flex items-center gap-2 rounded-2xl bg-brand-navy px-8 py-4 font-bold text-white shadow-lg shadow-brand-navy/20 transition hover:bg-[#07192F] hover:shadow-xl hover:-translate-y-0.5"
                >
                  Connect with AMS Head
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <a
                  href="mailto:venkat@softclinch.com?subject=SAP%20AMS%20Director%20Inquiry"
                  onClick={() => trackCtaClick("Contact SAP Director", "sap_ams_hero_director")}
                  className="inline-flex items-center gap-2 rounded-2xl border border-brand-terracotta bg-white px-8 py-4 font-bold text-brand-terracotta transition hover:bg-brand-terracotta/5 hover:-translate-y-0.5"
                >
                  Contact SAP Director
                </a>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              {/* Floating tech badges */}
              <div className="bg-white/95 backdrop-blur-md border border-slate-200/80 px-4 py-2.5 rounded-2xl shadow-lg flex items-center gap-2 absolute -top-5 -left-8 z-20 text-xs font-bold text-brand-navy">
                <Sliders className="w-4.5 h-4.5 text-brand-terracotta animate-spin" style={{ animationDuration: '6s' }} />
                <span>{"{{ENTERPRISE_SYSTEM_UPTIME_SLA}} Uptime SLA"}</span>
              </div>

              <div className="bg-brand-terracotta border border-brand-terracotta px-4 py-2.5 rounded-2xl shadow-lg flex items-center gap-2 absolute -bottom-5 -right-8 z-20 text-xs font-bold text-white">
                <Users className="w-4.5 h-4.5" />
                <span>L1-L4 Engineers</span>
              </div>

              <ServiceMediaPanel
                title="SAP Support Command Center"
                subtitle="A structured visual space for monitoring, support workflows, governance, and enterprise SAP performance visibility."
                imageSrc="/sap_consulting_hero_v2.webp"
                imageAlt="SAP AMS support service preview"
                points={[
                  "Monitoring and incident management",
                  "S/4HANA and ECC support coverage",
                  "Functional and technical AMS delivery",
                  "Governance, SLA, and optimization layers",
                ]}
                theme="light"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="sap-support-coverage-heading"
        className="relative overflow-hidden border-y border-slate-200/80 bg-gradient-to-r from-[#F8FAFC] via-white to-[#FFF8F4] py-7 sm:py-9"
      >
        <div className="mx-auto mb-4 flex max-w-[1200px] items-center justify-center gap-3 px-6">
          <span className="h-px w-8 bg-brand-terracotta/40 sm:w-12" />
          <h2
            id="sap-support-coverage-heading"
            className="text-xs font-black uppercase tracking-[0.25em] text-brand-terracotta sm:text-sm"
          >
            Our Support
          </h2>
          <span className="h-px w-8 bg-brand-terracotta/40 sm:w-12" />
        </div>
        <p className="mb-3 text-center text-sm font-medium text-slate-500">
          SAP environments we support
        </p>
        <ul className="sr-only">
          {sapSupportCoverage.map((item) => <li key={item}>{item}</li>)}
        </ul>
        <div aria-hidden="true" className="sap-support-marquee">
          {[...sapSupportCoverage, ...sapSupportCoverage].map((item, index) => (
            <span
              key={`${item}-${index}`}
              className="mx-2 flex shrink-0 items-center gap-3 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 shadow-sm sm:mx-3 sm:px-7"
            >
              <span className="h-2 w-2 rounded-full bg-brand-terracotta" />
              {item}
            </span>
          ))}
        </div>
      </section>

      <SAPAModelSections />

      {/* Case Study Proof Section */}
      <section className="py-20 bg-white border-t border-slate-200/80">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-brand-navy/5 text-brand-navy text-xs font-bold uppercase tracking-widest mb-3">
              Proven Delivery
            </span>
            <h2 className="text-3xl font-display font-bold text-slate-900">
              Enterprise SAP AMS Case Study
            </h2>
          </div>
          <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 sm:p-12 max-w-4xl mx-auto shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-200">
              <div>
                <span className="text-xs uppercase tracking-wider text-slate-500 font-bold block mb-1">Industry</span>
                <span className="text-lg font-bold text-brand-navy">{"{{CASE_STUDY_CLIENT_INDUSTRY}}"}</span>
              </div>
              <div>
                <span className="text-xs uppercase tracking-wider text-slate-500 font-bold block mb-1">Scope</span>
                <span className="text-base font-semibold text-slate-700">{"{{CASE_STUDY_ERP_SCOPE}}"}</span>
              </div>
              <div>
                <span className="text-xs uppercase tracking-wider text-slate-500 font-bold block mb-1">Uptime SLA</span>
                <span className="text-lg font-bold text-emerald-600">{"{{CASE_STUDY_RESULT}}"}</span>
              </div>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              {"{{CASE_STUDY_SUMMARY}}"}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
              <div className="bg-white p-4 rounded-xl border border-slate-200/80">
                <div className="text-2xl font-bold text-brand-navy mb-1">{"{{CASE_STUDY_METRIC_1}}"}</div>
                <div className="text-xs text-slate-500">Incident Resolution Time</div>
              </div>
              <div className="bg-white p-4 rounded-xl border border-slate-200/80">
                <div className="text-2xl font-bold text-brand-navy mb-1">{"{{CASE_STUDY_METRIC_2}}"}</div>
                <div className="text-xs text-slate-500">System Availability SLA</div>
              </div>
              <div className="bg-white p-4 rounded-xl border border-slate-200/80">
                <div className="text-2xl font-bold text-brand-navy mb-1">{"{{CASE_STUDY_METRIC_3}}"}</div>
                <div className="text-xs text-slate-500">User Ticket Backlog</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions Section */}
      <section className="py-24 bg-slate-50 border-t border-slate-200/80">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-brand-terracotta/10 text-brand-terracotta text-xs font-bold uppercase tracking-widest mb-4">
              Common Questions
            </span>
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-slate-900 mb-4">
              Frequently Asked Questions About SAP AMS
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-base">
              Clear answers about scope, SAP versions supported, SLA models, and partner transition.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-slate-200 bg-white px-6 py-2 transition open:border-brand-navy/30 open:shadow-md"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 py-5 text-left font-bold text-slate-900 marker:hidden [&::-webkit-details-marker]:hidden">
                  <span>{faq.question}</span>
                  <ChevronDown
                    size={20}
                    className="shrink-0 text-brand-terracotta transition-transform duration-300 group-open:rotate-180"
                  />
                </summary>
                <div className="border-t border-slate-100 pb-6 pt-4 text-sm leading-relaxed text-slate-600">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="py-20 bg-brand-navy text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">
            Need SLA-Backed SAP AMS Support?
          </h2>
          <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
            Get in touch with our AMS engineering leads in Chennai to schedule a landscape review and support assessment.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              onClick={() => trackCtaClick("Connect with AMS Head", "sap_ams_bottom_cta")}
              className="px-8 py-4 rounded-full bg-brand-terracotta text-white font-bold text-base hover:bg-white hover:text-brand-navy transition-all shadow-lg"
            >
              Connect with AMS Head
            </Link>
            <a
              href="mailto:venkat@softclinch.com?subject=SAP%20AMS%20Director%20Inquiry"
              onClick={() => trackCtaClick("Contact SAP Director", "sap_ams_bottom_director")}
              className="px-8 py-4 rounded-full bg-white/10 text-white font-bold text-base hover:bg-white/20 transition-all border border-white/20"
            >
              Contact SAP Director
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
