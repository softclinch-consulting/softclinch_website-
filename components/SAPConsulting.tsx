"use client";
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Activity, ArrowRight, Sliders, Users } from 'lucide-react';
import { SAPAModelSections } from "@/components/SAPAModelSections";
import { ServiceMediaPanel } from "@/components/ServiceMediaPanel";

const sapSupportCoverage = [
  "S/4HANA and On-Premise",
  "S/4HANA and Private",
  "S/4HANA and Public",
  "ECC support coverage",
];

export const SAPConsulting = () => {
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
                SAP AMS Support &amp; Managed <br />
                <span className="bg-gradient-to-r from-brand-navy to-brand-terracotta bg-clip-text text-transparent">
                  ERP Consulting Services
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-lg text-slate-600 mb-10 leading-relaxed font-medium"
              >
                Softclinch Consulting Services Pvt Ltd specializes in SAP Consulting and Support, providing end-to-end solutions for businesses. This page details the Application Management Support (AMS) process for SAP, covering the support structure, issue resolution methodology, and best practices for efficient operations.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex gap-4 flex-wrap"
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-2xl bg-brand-navy px-8 py-4 font-bold text-white shadow-lg shadow-brand-navy/20 transition hover:bg-[#07192F] hover:shadow-xl hover:-translate-y-0.5"
                >
                  Connect with AMS Head
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <a
                  href="mailto:venkat@softclinch.com"
                  className="inline-flex items-center gap-2 rounded-2xl border border-brand-terracotta bg-white px-8 py-4 font-bold text-brand-terracotta transition hover:bg-brand-terracotta/5 hover:-translate-y-0.5"
                >
                  Email Support Team
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
                <span>99.9% Uptime SLA</span>
              </div>

              <div className="bg-brand-terracotta border border-brand-terracotta px-4 py-2.5 rounded-2xl shadow-lg flex items-center gap-2 absolute -bottom-5 -right-8 z-20 text-xs font-bold text-white">
                <Users className="w-4.5 h-4.5" />
                <span>L1-L4 Engineers</span>
              </div>

              <ServiceMediaPanel
                title="SAP Support Command Center"
                subtitle="A structured visual space for monitoring, support workflows, governance, and enterprise SAP performance visibility."
                imageSrc="/sap_consulting_hero_v2.png"
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



    </div>
  );
};
