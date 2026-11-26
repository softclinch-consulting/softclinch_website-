"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  ShieldCheck,
  Star,
  Layers,
  Server,
  TrendingUp,
  MessageSquare,
  PhoneCall,
  ExternalLink,
} from "lucide-react";
import { assetPath } from "@/lib/asset";
import { CONTACT } from "@/lib/contact";
import { trackCtaClick, trackWhatsAppClick, trackPhoneClick } from "@/lib/analytics";

interface CaseStudy {
  id: string;
  badge: string;
  title: string;
  industry: string;
  erpVersion: string;
  scope: string;
  challenge: string;
  solution: string;
  outcomes: { metric: string; label: string }[];
  highlights: string[];
}

const CASE_STUDIES: CaseStudy[] = [
  {
    id: "automotive-s4hana-migration",
    badge: "SAP S/4HANA Migration",
    title: "Zero-Downtime S/4HANA Migration for Tier-1 Automotive Manufacturer",
    industry: "{{CLIENT_INDUSTRY}} (Tier-1 Automotive Component Manufacturing, Chennai)",
    erpVersion: "{{ERP_VERSION}} (SAP ECC 6.0 EHP7 to S/4HANA 2023)",
    scope: "Finance (FI/CO), Materials Management (MM), Production Planning (PP), Sales & Distribution (SD)",
    challenge:
      "{{CHALLENGE}} Legacy ECC system hindered real-time inventory visibility across 3 manufacturing plants, with over 450 custom ABAP programs causing performance bottlenecks and monthly financial close delays of 7 business days.",
    solution:
      "{{SOLUTION}} SoftClinch executed a phased Brownfield transition with comprehensive custom code remediation using SAP Readiness Check 2.0, automated business partner data mapping, and dual-run financial reconciliation.",
    outcomes: [
      { metric: "{{CASE_STUDY_RESULT}}", label: "Cutover Downtime" },
      { metric: "100%", label: "Custom ABAP Code Remediated" },
      { metric: "{{CASE_STUDY_RESULT}}", label: "Financial Close Acceleration" },
      { metric: "Zero", label: "Disruptions to Plant Dispatch" },
    ],
    highlights: [
      "Completed multi-plant dry runs before production cutover weekend.",
      "Configured SAP Fiori analytical apps for executive supply chain dashboards.",
      "Delivered 6 weeks of dedicated hypercare support with 100% SLA compliance.",
    ],
  },
  {
    id: "manufacturing-24x7-ams-support",
    badge: "Enterprise 24/7 AMS Support",
    title: "Round-the-Clock Application Management & Incident SLA Optimization",
    industry: "{{CLIENT_INDUSTRY}} (Industrial Equipment & Precision Engineering)",
    erpVersion: "{{ERP_VERSION}} (SAP ECC 6.0 EHP8 Enterprise Landscape)",
    scope: "L1-L3 Incident Resolution, Preventive Maintenance, Minor Enhancements (BASIS, ABAP, FICO, MM, PM)",
    challenge:
      "{{CHALLENGE}} Client experienced recurring production line ticket backlogs, slow P1 incident resolution times from their previous vendor, and unbudgeted system downtime during peak quarterly shipping cycles.",
    solution:
      "{{SOLUTION}} SoftClinch transitioned the landscape into a dedicated 24/7 AMS delivery model with ITIL-aligned governance, proactive database health checks, automated batch-job monitoring, and dedicated Chennai-based functional leads.",
    outcomes: [
      { metric: "{{ENTERPRISE_SYSTEM_UPTIME_SLA}}", label: "System Uptime Maintained" },
      { metric: "< 15 Mins", label: "Critical Incident Response Time" },
      { metric: "{{CASE_STUDY_RESULT}}", label: "Monthly Ticket Backlog Reduction" },
      { metric: "100%", label: "Contractual SLA Adherence" },
    ],
    highlights: [
      "Proactive root cause analysis (RCA) reduced recurring incidents by 40%.",
      "Seamless knowledge transfer accomplished in 4 weeks with zero open P1 tickets.",
      "Monthly SLA governance reports presented directly to Client CIO & steering committee.",
    ],
  },
  {
    id: "multi-plant-ecc-rollout",
    badge: "Multi-Plant ERP Rollout",
    title: "Multi-Plant SAP Template Rollout & Warehouse Automation Integration",
    industry: "{{CLIENT_INDUSTRY}} (Chemical & Process Manufacturing)",
    erpVersion: "{{ERP_VERSION}} (SAP S/4HANA & SAP EWM Integration)",
    scope: "Plant Maintenance (PM), Quality Management (QM), Extended Warehouse Management (EWM), GST Compliance",
    challenge:
      "{{CHALLENGE}} Rapid acquisition of 2 new regional chemical processing units resulted in disparate legacy accounting systems, lack of lot-level traceability, and non-standardized statutory reporting across states.",
    solution:
      "{{SOLUTION}} SoftClinch configured and rolled out a unified enterprise global template, establishing standardized chart of accounts, automated barcode/RFID scanning at factory gates, and real-time electronic waybill integration.",
    outcomes: [
      { metric: "{{CASE_STUDY_RESULT}}", label: "Inventory Accuracy Improvement" },
      { metric: "4 Plants", label: "Standardized on Single ERP Tenant" },
      { metric: "{{CASE_STUDY_RESULT}}", label: "Dispatch Processing Cycle Time" },
      { metric: "100%", label: "Statutory E-Invoicing Compliance" },
    ],
    highlights: [
      "Integrated automated barcode weighing systems directly with SAP QM inspection lots.",
      "Conducted on-site bilingual end-user training for plant shop-floor supervisors.",
      "Achieved go-live on schedule within the targeted financial quarter.",
    ],
  },
];

const CLIENT_LOGOS = [
  { name: "Prenora Investment Holding", path: "/client-logos/sc-clients-001.webp" },
  { name: "Rane", path: "/client-logos/sc-clients-002.webp" },
  { name: "NTT DATA", path: "/client-logos/sc-clients-003.webp" },
  { name: "Fujitsu", path: "/client-logos/sc-clients-004.webp" },
  { name: "Star Eltech", path: "/client-logos/sc-clients-005.webp" },
];

export function CaseStudies() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-brand-navy to-slate-900 text-white pt-16 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 mb-6">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} fill="currentColor" />
              ))}
            </div>
            <span className="text-xs font-semibold text-white">5.0 Google Rating</span>
            <span className="text-white/40">•</span>
            <span className="text-xs text-slate-300">Enterprise Client Delivery</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-display font-bold tracking-tight text-white mb-6">
            Enterprise SAP &amp; Software Case Studies
          </h1>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed mb-8">
            Explore how Chennai and global enterprises partner with SoftClinch for zero-downtime SAP S/4HANA migrations, SLA-guaranteed 24/7 AMS support, and scalable business software.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              onClick={() => trackCtaClick({ cta_name: "case_studies_hero_assessment", cta_location: "case_studies_hero" })}
              className="inline-flex items-center justify-center rounded-xl bg-white text-brand-navy px-6 py-3.5 text-sm font-bold shadow-lg hover:bg-slate-100 transition"
            >
              <span>Book a Free SAP Assessment</span>
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
            <a
              href={CONTACT.getWhatsAppUrl("Hello SoftClinch team, I am reviewing your case studies and would like to discuss our enterprise requirements.")}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick({ cta_location: "case_studies_hero_whatsapp" })}
              className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/10 text-white px-6 py-3.5 text-sm font-semibold hover:bg-white/20 transition"
            >
              <MessageSquare className="mr-2 w-4 h-4 text-emerald-400" />
              <span>Talk on WhatsApp (+91 94456 79878)</span>
            </a>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="bg-white py-8 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs uppercase tracking-widest font-bold text-slate-500 mb-6">
            Trusted by Enterprise Leaders
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
            {CLIENT_LOGOS.map((client, idx) => (
              <div
                key={idx}
                className="flex items-center justify-center rounded-xl border border-slate-200 bg-slate-50 px-5 py-3 shadow-sm"
              >
                <Image
                  src={assetPath(client.path)}
                  alt={client.name}
                  width={130}
                  height={45}
                  className="h-7 w-auto object-contain grayscale opacity-80"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies List */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-16">
          {CASE_STUDIES.map((study, idx) => (
            <article
              key={study.id}
              className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-10 shadow-lg hover:shadow-xl transition"
            >
              {/* Header */}
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6 border-b border-slate-100 pb-6">
                <div>
                  <span className="inline-block rounded-full bg-brand-blue/10 px-3.5 py-1 text-xs font-bold text-brand-blue uppercase tracking-wider mb-2">
                    {study.badge}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 leading-tight">
                    {study.title}
                  </h2>
                </div>
                <div className="text-right text-xs text-slate-500">
                  <div>Industry: <strong className="text-slate-800">{study.industry}</strong></div>
                  <div className="mt-1">Landscape: <strong className="text-slate-800">{study.erpVersion}</strong></div>
                </div>
              </div>

              {/* Challenge & Solution Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <div className="rounded-2xl bg-amber-50/60 border border-amber-200/60 p-6">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-amber-900 mb-3 flex items-center gap-2">
                    <span>The Challenge</span>
                  </h3>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    {study.challenge}
                  </p>
                </div>

                <div className="rounded-2xl bg-emerald-50/60 border border-emerald-200/60 p-6">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-emerald-900 mb-3 flex items-center gap-2">
                    <span>The SoftClinch Solution</span>
                  </h3>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    {study.solution}
                  </p>
                </div>
              </div>

              {/* Measurable Outcomes Grid */}
              <div className="mb-8">
                <h4 className="text-xs uppercase font-bold tracking-widest text-slate-500 mb-4">
                  Measurable Business Outcomes
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {study.outcomes.map((outcome, oIdx) => (
                    <div
                      key={oIdx}
                      className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-center"
                    >
                      <div className="text-xl sm:text-2xl font-black text-brand-navy font-mono">
                        {outcome.metric}
                      </div>
                      <div className="text-xs font-medium text-slate-600 mt-1">
                        {outcome.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Implementation Highlights */}
              <div className="border-t border-slate-100 pt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                <div className="space-y-2">
                  {study.highlights.map((item, hIdx) => (
                    <div key={hIdx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-brand-blue shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="shrink-0">
                  <Link
                    href="/contact"
                    onClick={() => trackCtaClick({ cta_name: `case_study_${study.id}_cta`, cta_location: "case_studies_card" })}
                    className="inline-flex items-center gap-2 rounded-xl bg-brand-navy hover:bg-slate-800 text-white px-5 py-3 text-xs sm:text-sm font-semibold transition"
                  >
                    <span>Discuss Similar Project</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="bg-gradient-to-r from-brand-navy to-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto rounded-3xl bg-white/5 border border-white/10 p-8 sm:p-12 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Ready to Achieve Predictable SAP &amp; Software Performance?
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto mb-8">
            Schedule a confidential discovery session with our senior architects in Ashok Nagar, Chennai. We analyze your landscape and present a clear action plan within 48 hours.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              onClick={() => trackCtaClick({ cta_name: "case_studies_bottom_consultation", cta_location: "case_studies_bottom" })}
              className="inline-flex items-center justify-center rounded-xl bg-white text-brand-navy px-7 py-3.5 text-sm font-bold shadow-lg hover:bg-slate-100 transition"
            >
              <span>Schedule Free Consultation</span>
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
            <a
              href={`tel:${CONTACT.phone}`}
              onClick={() => trackPhoneClick({ cta_location: "case_studies_bottom_phone" })}
              className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/10 text-white px-6 py-3.5 text-sm font-semibold hover:bg-white/20 transition"
            >
              <PhoneCall className="mr-2 w-4 h-4" />
              <span>Call +91 94456 79878</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
