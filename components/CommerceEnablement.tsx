"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  ClipboardCheck,
  FileText,
  Megaphone,
  MessageSquareText,
  SearchCheck,
  Settings2,
  ShieldCheck,
  ShoppingBag,
  Workflow,
} from "lucide-react";
import { FaqSection } from "@/components/FaqSection";
import { ServiceMediaPanel } from "@/components/ServiceMediaPanel";
import { commerceEnablementFaq } from "@/lib/commerceEnablement";

const reveal = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

const trustItems = [
  "For ecommerce teams modernizing operations",
  "Structured audits before implementation",
  "Platform readiness across commerce channels",
  "Documented handover for internal teams",
];

const businessProblems = [
  {
    title: "Poor Product Discoverability",
    description:
      "Products can be difficult to find when catalog structure, search readiness, and product information are not managed as an operating system.",
    icon: SearchCheck,
  },
  {
    title: "Merchant Center Issues",
    description:
      "Commerce operations can slow down when product feeds, policy readiness, and account hygiene require structured review.",
    icon: ShoppingBag,
  },
  {
    title: "Meta Commerce Readiness",
    description:
      "Catalogs, commerce assets, and connected workflows need careful preparation before teams can operate confidently.",
    icon: ShieldCheck,
  },
  {
    title: "Customer Communication",
    description:
      "Manual replies, follow-ups, support, and broadcasts create gaps when communication is not connected to daily commerce workflows.",
    icon: MessageSquareText,
  },
  {
    title: "Lack of Analytics",
    description:
      "Teams need clear measurement foundations to understand readiness, workflow status, and operational follow-through.",
    icon: BarChart3,
  },
  {
    title: "Manual Operations",
    description:
      "Repeated manual tasks make ecommerce execution harder to manage, document, and hand over across teams.",
    icon: Settings2,
  },
  {
    title: "Missing SOPs",
    description:
      "Without standard operating procedures, teams depend on individual memory instead of repeatable operating practices.",
    icon: FileText,
  },
];

const flowRows = [
  {
    stage: "01",
    focus: "Discoverability",
    input: "Product information, catalog structure, and search readiness",
    enablement: "Review product data and organize the operating inputs needed for clearer ecommerce discovery.",
    handover: "Discoverability review path",
    icon: SearchCheck,
  },
  {
    stage: "02",
    focus: "Commerce Readiness",
    input: "Merchant Center, Meta Commerce, catalogs, feeds, and commerce assets",
    enablement: "Prepare commerce channels before ongoing execution and team ownership.",
    handover: "Merchant Center and Meta Commerce readiness",
    icon: ShieldCheck,
  },
  {
    stage: "03",
    focus: "Customer Communication",
    input: "WhatsApp commerce, support, broadcasts, follow-ups, and segmentation",
    enablement: "Connect communication workflows through Inaiwazhi where they are part of the implementation scope.",
    handover: "Communication workflow model",
    icon: MessageSquareText,
  },
  {
    stage: "04",
    focus: "Analytics",
    input: "Readiness tracking, workflow status, and operational progress",
    enablement: "Create analytics foundations that help teams review implementation status and operating movement.",
    handover: "Analytics-ready review rhythm",
    icon: BarChart3,
  },
  {
    stage: "05",
    focus: "Operations",
    input: "SOPs, workflows, testing, training, and handover practices",
    enablement: "Document and train the operating model so internal teams can run it with clarity.",
    handover: "Operational independence",
    icon: Workflow,
  },
];

const comparisonRows = [
  {
    traditional: "Often centered on campaigns, creatives, or isolated channel execution.",
    softclinch:
      "Starts with audit, readiness, workflows, documentation, and implementation structure.",
  },
  {
    traditional: "May leave commerce, communication, and analytics as separate workstreams.",
    softclinch:
      "Connects discoverability, commerce readiness, communication, analytics, and operations.",
  },
  {
    traditional: "Handover can depend on verbal updates and individual availability.",
    softclinch:
      "Builds toward training, SOPs, documentation, and operational independence.",
  },
];

const journey = [
  {
    phase: "Phase 1",
    title: "Discovery",
    description:
      "Understand the ecommerce model, current operations, customer communication needs, and implementation priorities.",
  },
  {
    phase: "Phase 2",
    title: "Audit",
    description:
      "Review product discoverability, Merchant Center, Meta Commerce readiness, analytics, operations, and documentation gaps.",
  },
  {
    phase: "Phase 3",
    title: "Implementation",
    description:
      "Configure the agreed commerce, communication, analytics, workflow, and operational enablement components.",
  },
  {
    phase: "Phase 4",
    title: "Testing",
    description:
      "Validate readiness across workflows, communication paths, commerce assets, and handover materials.",
  },
  {
    phase: "Phase 5",
    title: "Training",
    description:
      "Train teams on SOPs, daily operating practices, customer communication, and review routines.",
  },
  {
    phase: "Phase 6",
    title: "Operational Handover",
    description:
      "Transfer documentation, workflows, and ownership practices so the internal team can operate with clarity.",
  },
];

const metrics = [
  "Merchant Center Ready",
  "Meta Commerce Ready",
  "Workflow Automation",
  "Analytics Ready",
  "Documentation Complete",
  "Operational Independence",
];

const inaiwazhiCapabilities = [
  "WhatsApp Commerce",
  "Customer Communication",
  "Broadcast Campaigns",
  "Follow-ups",
  "Customer Support",
  "Customer Segmentation",
  "Automation",
];

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mx-auto mb-14 max-w-3xl text-center sm:mb-16">
      <span className="mb-4 inline-flex rounded-full border border-brand-terracotta/15 bg-brand-terracotta/5 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-brand-terracotta">
        {eyebrow}
      </span>
      <h2 className="text-3xl font-display font-bold leading-tight text-slate-955 sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-6 text-base font-medium leading-relaxed text-slate-600 sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}

function PremiumCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.article
      variants={reveal}
      className={`group relative overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-navy/20 hover:shadow-xl ${className}`}
    >
      <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-brand-navy to-brand-terracotta opacity-0 transition-opacity group-hover:opacity-100" />
      {children}
    </motion.article>
  );
}

function FlowTable() {
  return (
    <div className="overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white shadow-sm">
      <div className="hidden grid-cols-[0.42fr_0.9fr_1.15fr_1.25fr_0.9fr] gap-0 border-b border-slate-200 bg-slate-50 text-xs font-black uppercase tracking-[0.16em] text-slate-500 lg:grid">
        <div className="px-5 py-5">Stage</div>
        <div className="px-5 py-5">Focus</div>
        <div className="px-5 py-5">Input</div>
        <div className="px-5 py-5">Enablement Flow</div>
        <div className="px-5 py-5">Handover</div>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.18 }}
        transition={{ staggerChildren: 0.07 }}
      >
        {flowRows.map((row) => {
          const Icon = row.icon;
          return (
            <motion.div
              key={row.stage}
              variants={reveal}
              className="group grid gap-5 border-b border-slate-100 px-5 py-6 transition hover:bg-slate-50 last:border-b-0 lg:grid-cols-[0.42fr_0.9fr_1.15fr_1.25fr_0.9fr] lg:items-center"
            >
              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-navy text-sm font-black text-white transition group-hover:-translate-y-1">
                  {row.stage}
                </span>
                <span className="text-xs font-black uppercase tracking-[0.16em] text-slate-400 lg:hidden">
                  Stage
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-brand-navy/10 bg-brand-navy/5 text-brand-navy transition group-hover:bg-brand-navy group-hover:text-white">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-base font-display font-bold text-slate-955">
                  {row.focus}
                </h3>
              </div>

              <p className="text-sm font-semibold leading-relaxed text-slate-500">
                {row.input}
              </p>

              <div className="relative rounded-2xl border border-slate-200 bg-white px-5 py-4 text-sm font-semibold leading-relaxed text-slate-600 shadow-sm">
                <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-brand-navy to-brand-terracotta opacity-70" />
                {row.enablement}
              </div>

              <div className="flex items-center gap-3 text-sm font-bold text-slate-700">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-brand-terracotta" />
                <span>{row.handover}</span>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}

function RoadmapFlow() {
  return (
    <div className="relative overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
      <div className="absolute left-8 top-12 hidden h-[calc(100%-6rem)] w-px bg-slate-200 lg:block" />
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.18 }}
        transition={{ staggerChildren: 0.08 }}
        className="grid gap-6"
      >
        {journey.map((item, index) => (
          <motion.div
            key={item.phase}
            variants={reveal}
            className="group relative grid gap-5 rounded-[2rem] border border-slate-200 bg-slate-50 p-6 transition hover:-translate-y-1 hover:bg-white hover:shadow-xl lg:grid-cols-[0.35fr_0.85fr_1.5fr] lg:items-center"
          >
            <div className="flex items-center gap-4">
              <span className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-navy text-sm font-black text-white">
                {index + 1}
              </span>
              <span className="text-xs font-mono font-black uppercase tracking-[0.18em] text-slate-400">
                {item.phase}
              </span>
            </div>

            <h3 className="text-xl font-display font-bold text-slate-955 transition group-hover:text-brand-navy">
              {item.title}
            </h3>

            <p className="text-sm font-semibold leading-relaxed text-slate-500">
              {item.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export function CommerceEnablement() {
  return (
    <div className="overflow-hidden bg-[#F8FAFC] text-slate-900">
      <section className="relative overflow-hidden border-b border-slate-200/60 bg-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(0,51,102,0.08),_transparent_40%),radial-gradient(circle_at_80%_20%,_rgba(162,59,42,0.08),_transparent_28%),linear-gradient(180deg,_#ffffff_0%,_#f8fafc_100%)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-navy/30 to-transparent" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
          <div className="mt-4 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <motion.div initial="hidden" animate="visible" variants={reveal} transition={{ duration: 0.45 }}>
              <div className="mb-6 inline-flex items-center rounded-full border border-brand-navy/10 bg-white/85 px-4 py-2 text-xs font-semibold text-brand-navy shadow-sm backdrop-blur sm:text-sm">
                Commerce Enablement Consulting
              </div>
              <h1 className="max-w-5xl text-4xl font-display font-bold leading-tight tracking-tight text-slate-955 md:text-5xl lg:text-6xl">
                Transform Your Ecommerce Operations with a Structured Commerce Enablement Program
              </h1>
              <p className="mt-6 max-w-4xl text-base font-medium leading-relaxed text-slate-600 sm:text-lg">
                SoftClinch helps ecommerce businesses prepare commerce channels, communication workflows, analytics foundations, SOPs, and operational handover through a structured consulting and implementation program.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-brand-navy px-8 py-4 font-bold text-white shadow-lg shadow-brand-navy/20 transition hover:-translate-y-0.5 hover:bg-brand-navy/90"
                >
                  <span>Book a Discovery Consultation</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <a
                  href="#program-overview"
                  className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-8 py-4 font-bold text-slate-700 transition hover:-translate-y-0.5 hover:border-brand-terracotta hover:text-brand-terracotta"
                >
                  View Program Overview
                </a>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {trustItems.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-brand-terracotta" />
                    <span className="text-xs font-semibold text-slate-700 sm:text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <ServiceMediaPanel
              title="Commerce Operations System"
              subtitle="A structured operating model for readiness, communication, analytics, workflows, SOPs, and team handover."
              imageSrc="/enterprise_hero_illustration.png"
              imageAlt="Commerce enablement operations preview"
              theme="light"
              points={["Audit-led implementation", "Communication workflows", "Operational handover"]}
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-[2.5rem] border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <span className="text-xs font-black uppercase tracking-[0.2em] text-brand-terracotta">
                Trusted Businesses
              </span>
              <h2 className="mt-3 text-2xl font-display font-bold text-slate-955 sm:text-3xl">
                Built for teams that need clarity before scale
              </h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {trustItems.map((item) => (
                <div key={item} className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-sm font-semibold text-slate-700">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.18 }}
        transition={{ staggerChildren: 0.06 }}
        className="mx-auto max-w-7xl border-t border-slate-200/80 px-4 py-24 sm:px-6 lg:px-8"
      >
        <SectionHeading
          eyebrow="The Business Problem"
          title="Ecommerce operations need more than disconnected fixes"
          description="The program addresses recurring operational gaps that make commerce execution harder to manage across channels, teams, and customer communication."
        />
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {businessProblems.map((item) => (
            <PremiumCard key={item.title}>
              <item.icon className="h-8 w-8 text-brand-navy transition-colors group-hover:text-brand-terracotta" />
              <h3 className="mt-5 text-xl font-display font-bold text-slate-955 transition-colors group-hover:text-brand-navy">
                {item.title}
              </h3>
              <p className="mt-4 text-sm font-semibold leading-relaxed text-slate-500">
                {item.description}
              </p>
            </PremiumCard>
          ))}
        </div>
      </motion.section>

      <motion.section
        id="program-overview"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.18 }}
        transition={{ staggerChildren: 0.08 }}
        className="mx-auto max-w-7xl border-t border-slate-200/80 px-4 py-24 sm:px-6 lg:px-8"
      >
        <SectionHeading
          eyebrow="Commerce Enablement Solution"
          title="A flow table for ecommerce operating clarity"
          description="SoftClinch brings the core commerce workstreams together as a reviewable flow from inputs to enablement and handover."
        />
        <FlowTable />
      </motion.section>

      <section className="mx-auto max-w-7xl border-t border-slate-200/80 px-4 py-24 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why SoftClinch"
          title="Commerce enablement, not campaign-only execution"
          description="The program is designed for businesses that need readiness, implementation, training, documentation, and operational control."
        />
        <div className="overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white shadow-sm">
          <div className="grid border-b border-slate-200 bg-slate-50 text-sm font-black uppercase tracking-[0.16em] text-slate-500 md:grid-cols-2">
            <div className="border-b border-slate-200 px-6 py-5 md:border-b-0 md:border-r">Traditional Agencies</div>
            <div className="px-6 py-5 text-brand-terracotta">SoftClinch Commerce Enablement</div>
          </div>
          {comparisonRows.map((row) => (
            <div key={row.softclinch} className="grid border-b border-slate-100 last:border-b-0 md:grid-cols-2">
              <div className="border-b border-slate-100 px-6 py-6 text-sm font-semibold leading-relaxed text-slate-500 md:border-b-0 md:border-r">
                {row.traditional}
              </div>
              <div className="px-6 py-6 text-sm font-semibold leading-relaxed text-slate-700">
                <CheckCircle2 className="mr-3 inline h-5 w-5 text-brand-terracotta" />
                {row.softclinch}
              </div>
            </div>
          ))}
        </div>
      </section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.18 }}
        transition={{ staggerChildren: 0.07 }}
        className="mx-auto max-w-7xl border-t border-slate-200/80 px-4 py-24 sm:px-6 lg:px-8"
      >
        <SectionHeading
          eyebrow="Engagement Journey"
          title="Roadmap from discovery to operational handover"
          description="Each phase moves the program forward with a clear sequence, so the team can see what happens first, next, and at handover."
        />
        <RoadmapFlow />
      </motion.section>

      <section className="mx-auto max-w-7xl border-t border-slate-200/80 px-4 py-24 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Success Metrics"
          title="Readiness indicators that support operational confidence"
          description="The program measures implementation readiness and handover completion without promising revenue, rankings, sales, or ROAS."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {metrics.map((metric) => (
            <div key={metric} className="flex items-center gap-4 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
              <ClipboardCheck className="h-7 w-7 shrink-0 text-brand-terracotta" />
              <span className="text-base font-display font-bold text-slate-955">{metric}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl border-t border-slate-200/80 px-4 py-24 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[3rem] bg-brand-navy p-8 text-white shadow-2xl sm:p-10 lg:p-14">
          <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-white/5 blur-[120px]" />
          <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-[#A23B2A]/20 blur-[100px]" />
          <div className="relative grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <span className="text-xs font-black uppercase tracking-[0.2em] text-[#A23B2A]">
                Inaiwazhi Integration
              </span>
              <h2 className="mt-4 text-3xl font-display font-bold leading-tight sm:text-4xl lg:text-5xl">
                Communication workflows included in the implementation
              </h2>
              <p className="mt-6 text-base leading-relaxed text-slate-200 sm:text-lg">
                Inaiwazhi powers the communication layer where WhatsApp commerce, customer communication, broadcasts, follow-ups, support, segmentation, and automation are part of the commerce enablement scope.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {inaiwazhiCapabilities.map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm font-semibold text-white/90">
                  <MessageSquareText className="mb-3 h-5 w-5 text-brand-terracotta" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FaqSection title="Commerce Enablement FAQs" items={commerceEnablementFaq} includeSEO={false} />

      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[3rem] bg-white p-8 shadow-2xl ring-1 ring-slate-200 sm:p-10 lg:p-14">
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-navy to-brand-terracotta" />
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div>
              <span className="text-xs font-black uppercase tracking-[0.2em] text-brand-terracotta">
                Ready to Modernize?
              </span>
              <h2 className="mt-4 text-3xl font-display font-bold leading-tight text-slate-955 sm:text-4xl lg:text-5xl">
                Ready to Modernize Your Ecommerce Operations?
              </h2>
              <p className="mt-6 max-w-3xl text-base font-medium leading-relaxed text-slate-600 sm:text-lg">
                Talk to SoftClinch about a structured Commerce Enablement Program for readiness, communication, analytics, workflows, SOPs, and operational handover.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row lg:flex-col">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-brand-navy px-8 py-4 font-bold text-white shadow-lg shadow-brand-navy/20 transition hover:-translate-y-0.5 hover:bg-brand-navy/90"
              >
                <span>Book Consultation</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-8 py-4 font-bold text-slate-700 transition hover:-translate-y-0.5 hover:border-brand-terracotta hover:text-brand-terracotta"
              >
                <span>Contact Sales</span>
                <Megaphone className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
