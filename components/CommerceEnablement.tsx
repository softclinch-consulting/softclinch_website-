"use client";

import Link from "next/link";
import { useState, type ReactNode } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  ClipboardCheck,
  Compass,
  FileText,
  Globe,
  Megaphone,
  MessageSquareText,
  SearchCheck,
  Settings2,
  ShieldCheck,
  ShoppingBag,
  Star,
  Users,
  Workflow,
} from "lucide-react";
import { FaqSection } from "@/components/FaqSection";
import { ServiceMediaPanel } from "@/components/ServiceMediaPanel";
import { commerceEnablementFaq } from "@/lib/commerceEnablement";
import { assetPath } from "@/lib/asset";
import { reviews } from "@/lib/reviews";

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
    icon: Compass,
  },
  {
    phase: "Phase 2",
    title: "Audit",
    description:
      "Review product discoverability, Merchant Center, Meta Commerce readiness, analytics, operations, and documentation gaps.",
    icon: SearchCheck,
  },
  {
    phase: "Phase 3",
    title: "Implementation",
    description:
      "Configure the agreed commerce, communication, analytics, workflow, and operational enablement components.",
    icon: Settings2,
  },
  {
    phase: "Phase 4",
    title: "Testing",
    description:
      "Validate readiness across workflows, communication paths, commerce assets, and handover materials.",
    icon: ShieldCheck,
  },
  {
    phase: "Phase 5",
    title: "Training",
    description:
      "Train teams on SOPs, daily operating practices, customer communication, and review routines.",
    icon: Users,
  },
  {
    phase: "Phase 6",
    title: "Operational Handover",
    description:
      "Transfer documentation, workflows, and ownership practices so the internal team can operate with clarity.",
    icon: Workflow,
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
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.15 }}
      className="relative rounded-[3rem] border border-slate-200 bg-gradient-to-b from-slate-50 via-white to-slate-50 p-6 sm:p-10 lg:p-12 shadow-xl overflow-hidden min-h-[620px]"
    >
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none rounded-[3rem]" />

      {/* DESKTOP WINDING ROADWAY LAYOUT */}
      <div className="relative z-10 hidden lg:block w-full max-w-7xl mx-auto my-auto">
        <div className="relative h-[540px] w-full">
          {/* Winding Highway SVG Track */}
          <svg
            viewBox="0 0 1000 450"
            className="absolute inset-0 h-full w-full pointer-events-none overflow-visible"
            preserveAspectRatio="none"
          >
            {/* Outer Road Glow */}
            <path
              d="M 30 290 C 180 290, 180 120, 290 120 C 400 120, 400 290, 510 290 C 620 290, 620 120, 730 120 C 840 120, 840 290, 950 290"
              fill="none"
              stroke="#A23B2A"
              strokeWidth="40"
              strokeLinecap="round"
              opacity="0.12"
              className="blur-md"
            />

            {/* Dark Asphalt Highway Base */}
            <path
              d="M 30 290 C 180 290, 180 120, 290 120 C 400 120, 400 290, 510 290 C 620 290, 620 120, 730 120 C 840 120, 840 290, 950 290"
              fill="none"
              stroke="#1E293B"
              strokeWidth="32"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Highway Edge Markers */}
            <path
              d="M 30 290 C 180 290, 180 120, 290 120 C 400 120, 400 290, 510 290 C 620 290, 620 120, 730 120 C 840 120, 840 290, 950 290"
              fill="none"
              stroke="#003366"
              strokeWidth="28"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Dashed White Center Line */}
            <path
              d="M 30 290 C 180 290, 180 120, 290 120 C 400 120, 400 290, 510 290 C 620 290, 620 120, 730 120 C 840 120, 840 290, 950 290"
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="3"
              strokeDasharray="12 10"
              strokeLinecap="round"
            />
          </svg>

          {/* 5 Milestone Stop Nodes along the Winding Highway */}
          {flowRows.map((row, index) => {
            const Icon = row.icon;

            const isTopNode = index % 2 === 1;

            const leftPercents = ["6%", "27%", "48%", "69%", "89%"];
            const cardPositions = [
              "top-2 left-[1%]",
              "bottom-2 left-[22%]",
              "top-2 left-[43%]",
              "bottom-2 left-[64%]",
              "top-2 left-[82%]",
            ];

            const nodeTopPercents = [
              "top-[260px]",
              "top-[90px]",
              "top-[260px]",
              "top-[90px]",
              "top-[260px]",
            ];

            return (
              <div key={row.stage}>
                {/* Glowing Circular Icon Node on Road */}
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className={`absolute z-30 flex h-14 w-14 -translate-x-1/2 items-center justify-center rounded-full border-4 border-white bg-gradient-to-br from-emerald-500 to-emerald-600 text-white shadow-[0_0_20px_rgba(16,185,129,0.5)] ${nodeTopPercents[index]}`}
                  style={{ left: leftPercents[index] }}
                >
                  <Icon className="h-6 w-6" />
                </motion.div>

                {/* Content Card Branching Above or Below Node */}
                <motion.div
                  initial={{ opacity: 0, y: isTopNode ? 20 : -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`absolute z-20 w-[19%] rounded-2xl border border-slate-200 bg-white p-4 shadow-lg transition-all duration-300 hover:shadow-xl hover:border-brand-navy/30 ${cardPositions[index]}`}
                >
                  <div className="flex items-center justify-between border-b border-slate-100 pb-2 mb-2">
                    <span className="text-[10px] font-black uppercase tracking-wider text-brand-terracotta">
                      Stage 0{row.stage}
                    </span>
                    <span className="text-xs font-bold text-slate-900">{row.focus}</span>
                  </div>

                  <p className="text-[11px] font-semibold text-slate-600 leading-tight mb-2">
                    {row.input}
                  </p>

                  <div className="rounded-lg bg-slate-50 p-2 text-[10px] font-medium text-slate-700 leading-snug mb-2 border border-slate-100">
                    {row.enablement}
                  </div>

                  <div className="flex items-center gap-1.5 text-[10px] font-bold text-brand-navy">
                    <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-brand-terracotta" />
                    <span className="truncate">{row.handover}</span>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>

      {/* MOBILE VERTICAL ROADWAY LAYOUT */}
      <div className="relative z-10 lg:hidden space-y-6 w-full py-4">
        {/* Vertical Asphalt Road Track */}
        <div className="absolute left-6 top-6 bottom-6 w-6 bg-slate-800 rounded-full border-2 border-brand-navy shadow-inner flex items-center justify-center overflow-hidden">
          <div className="h-full w-0.5 border-r-2 border-dashed border-white/80" />
        </div>

        {flowRows.map((row, index) => {
          const Icon = row.icon;
          return (
            <motion.div
              key={row.stage}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative flex items-start gap-4 pl-2"
            >
              {/* Circular Road Node */}
              <div className="relative z-20 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-4 border-white bg-gradient-to-br from-emerald-500 to-emerald-600 text-white shadow-md">
                <Icon className="h-5 w-5" />
              </div>

              {/* Card */}
              <div className="flex-1 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-black uppercase tracking-wider text-brand-terracotta">
                    Stage 0{row.stage}
                  </span>
                  <h3 className="text-base font-bold text-slate-900">{row.focus}</h3>
                </div>
                <p className="text-xs font-semibold text-slate-600 mb-2">{row.input}</p>
                <div className="rounded-xl bg-slate-50 p-3 text-xs font-medium text-slate-700 mb-3">
                  {row.enablement}
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-brand-navy">
                  <CheckCircle2 className="h-4 w-4 text-brand-terracotta" />
                  <span>{row.handover}</span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}

function RoadmapFlow() {
  const [activeNode, setActiveNode] = useState<number | null>(0);

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      className="relative rounded-[3rem] border border-slate-200 bg-gradient-to-b from-slate-50 via-white to-slate-50 p-6 shadow-xl sm:p-10 lg:px-6 lg:py-48 min-h-[680px] flex items-center justify-center"
    >
      {/* Background Subtle Gradient Glows in Brand Colors */}
      <div className="absolute -left-20 -top-20 h-96 w-96 rounded-full bg-brand-navy/5 blur-3xl pointer-events-none rounded-[3rem] overflow-hidden" />
      <div className="absolute -right-20 -bottom-20 h-96 w-96 rounded-full bg-brand-terracotta/5 blur-3xl pointer-events-none rounded-[3rem] overflow-hidden" />

      {/* Subtle Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none rounded-[3rem]" />

      {/* Desktop Horizontal Timeline Axis Layout */}
      <div className="relative z-10 hidden lg:block w-full max-w-6xl mx-auto my-auto">
        {/* Animated Central Horizontal Axis Line */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="absolute left-4 right-4 top-1/2 h-[3px] -translate-y-1/2 origin-left bg-gradient-to-r from-brand-navy via-brand-terracotta to-brand-navy shadow-[0_0_10px_rgba(162,59,42,0.3)]"
        />

        {/* 6 Milestone Nodes & Branch Callout Cards with Sequential Stagger */}
        <div className="grid grid-cols-6 gap-3 relative">
          {journey.map((item, index) => {
            const Icon = item.icon;
            const isTop = index % 2 === 0;
            const isActive = activeNode === index;
            const delay = index * 0.15;

            return (
              <div
                key={item.phase}
                className="relative flex flex-col items-center group cursor-pointer"
                onMouseEnter={() => setActiveNode(index)}
              >
                {/* TOP CALLOUT CARD (Phases 1, 3, 5) - Slides down smoothly */}
                {isTop ? (
                  <motion.div
                    initial={{ opacity: 0, y: -30, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.7, delay, ease: [0.215, 0.61, 0.355, 1] }}
                    className="absolute bottom-full mb-7 w-[180px] xl:w-[210px] z-20 left-1/2 -translate-x-1/2"
                  >
                    {/* Vertical Stem Connector Line */}
                    <div className="absolute left-1/2 -bottom-7 h-7 w-[2px] -translate-x-1/2 bg-gradient-to-b from-brand-terracotta to-brand-navy" />

                    <div className={`relative rounded-2xl border p-4 shadow-md backdrop-blur-md transition-all duration-300 ${isActive
                      ? "border-brand-terracotta bg-white shadow-xl -translate-y-1.5 ring-2 ring-brand-terracotta/20"
                      : "border-slate-200 bg-white hover:border-brand-terracotta/60 hover:-translate-y-1"
                      }`}>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="rounded-full border border-brand-terracotta/20 bg-brand-terracotta/10 px-2 py-0.5 text-[10px] font-black uppercase tracking-wider text-brand-terracotta">
                          {item.phase}
                        </span>
                        <Icon className={`h-4 w-4 ${isActive ? "text-brand-terracotta" : "text-brand-navy"}`} />
                      </div>
                      <h4 className="text-xs font-display font-bold text-slate-900 group-hover:text-brand-navy transition-colors">
                        {item.title}
                      </h4>
                      <p className="mt-1 text-[11px] font-medium leading-normal text-slate-600">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ) : null}

                {/* CENTRAL AXIS NODE SPHERE - Scales up smoothly */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.3 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.5, delay: delay + 0.1, ease: "backOut" }}
                  className="relative z-30 flex items-center justify-center"
                >
                  <div className={`relative flex h-9 w-9 items-center justify-center rounded-full border-2 transition-all duration-300 ${isActive
                    ? "border-brand-terracotta bg-brand-terracotta text-white shadow-lg shadow-brand-terracotta/30 scale-125 ring-4 ring-brand-terracotta/20"
                    : "border-brand-navy bg-brand-navy text-white group-hover:bg-brand-terracotta group-hover:border-brand-terracotta group-hover:scale-110"
                    }`}>
                    <span className="text-[10px] font-black">0{index + 1}</span>
                  </div>
                </motion.div>

                {/* BOTTOM CALLOUT CARD (Phases 2, 4, 6) - Slides up smoothly */}
                {!isTop ? (
                  <motion.div
                    initial={{ opacity: 0, y: 30, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.7, delay, ease: [0.215, 0.61, 0.355, 1] }}
                    className="absolute top-full mt-7 w-[180px] xl:w-[210px] z-20 left-1/2 -translate-x-1/2"
                  >
                    {/* Vertical Stem Connector Line */}
                    <div className="absolute left-1/2 -top-7 h-7 w-[2px] -translate-x-1/2 bg-gradient-to-t from-brand-terracotta to-brand-navy" />

                    <div className={`relative rounded-2xl border p-4 shadow-md backdrop-blur-md transition-all duration-300 ${isActive
                      ? "border-brand-terracotta bg-white shadow-xl translate-y-1.5 ring-2 ring-brand-terracotta/20"
                      : "border-slate-200 bg-white hover:border-brand-terracotta/60 hover:translate-y-1"
                      }`}>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="rounded-full border border-brand-terracotta/20 bg-brand-terracotta/10 px-2 py-0.5 text-[10px] font-black uppercase tracking-wider text-brand-terracotta">
                          {item.phase}
                        </span>
                        <Icon className={`h-4 w-4 ${isActive ? "text-brand-terracotta" : "text-brand-navy"}`} />
                      </div>
                      <h4 className="text-xs font-display font-bold text-slate-900 group-hover:text-brand-navy transition-colors">
                        {item.title}
                      </h4>
                      <p className="mt-1 text-[11px] font-medium leading-normal text-slate-600">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>

      {/* Mobile Vertical Flow Layout */}
      <div className="relative z-10 lg:hidden space-y-5 w-full">
        <div className="absolute left-5 top-4 bottom-4 w-1 bg-gradient-to-b from-brand-navy via-brand-terracotta to-brand-navy rounded-full" />
        {journey.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.phase}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative flex items-start gap-4 pl-1"
            >
              <div className="relative z-20 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-brand-navy bg-brand-navy text-xs font-black text-white shadow-md">
                0{index + 1}
              </div>
              <div className="flex-1 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-black uppercase tracking-wider text-brand-terracotta">
                    {item.phase}
                  </span>
                  <Icon className="h-4 w-4 text-brand-navy" />
                </div>
                <h4 className="text-base font-bold text-slate-900">{item.title}</h4>
                <p className="mt-2 text-xs font-semibold leading-relaxed text-slate-600">{item.description}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}

const readinessMetrics = [
  {
    stage: "01",
    title: "Merchant Center Ready",
    points: [
      "Product catalog sync & term setups",
      "SKU mapping & category structures",
      "Merchant policy compliance verification",
    ],
  },
  {
    stage: "02",
    title: "Meta Commerce Ready",
    points: [
      "Meta catalog & shop integration",
      "Instagram & FB store connection",
      "Commerce Manager health audit",
    ],
  },
  {
    stage: "03",
    title: "Workflow Automation",
    points: [
      "Order status & tracking workflows",
      "Customer notification triggers",
      "Follow-up & broadcast sequences",
    ],
  },
  {
    stage: "04",
    title: "Analytics Ready",
    points: [
      "GA4 & Meta Pixel event setup",
      "Conversion tracking validation",
      "Attribution & performance view",
    ],
  },
  {
    stage: "05",
    title: "Documentation Complete",
    points: [
      "Standard Operating Procedures (SOPs)",
      "Daily practice guides for teams",
      "Communication workflow manuals",
    ],
  },
  {
    stage: "06",
    title: "Operational Independence",
    points: [
      "Handover review & practice routines",
      "Internal team training sign-off",
      "Full autonomous channel control",
    ],
  },
];

function ReadinessMetricsFlow() {
  return (
    <div className="mx-auto max-w-5xl rounded-[3rem] bg-[#EBF3FB] p-6 sm:p-12 shadow-inner border border-blue-100/70">
      <div className="-space-y-3 sm:-space-y-5 relative z-10">
        {readinessMetrics.map((item, index) => {
          const isOdd = index % 2 === 0; // 01, 03, 05 (Points Right ▶)

          return (
            <motion.div
              key={item.stage}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="relative z-10"
            >
              <div className="flex items-center gap-2 sm:gap-4">
                {/* Floating Number Left (for Odd 01, 03, 05) */}
                <div className={`w-12 sm:w-16 text-center shrink-0 ${isOdd ? "block" : "invisible"}`}>
                  <span className="font-display text-3xl font-black text-brand-navy sm:text-4xl lg:text-5xl tracking-tight">
                    {item.stage}
                  </span>
                </div>

                {/* SVG Ribbon Card */}
                <div className="relative flex-1 group transition-transform duration-300 hover:scale-[1.01] hover:z-30">
                  {/* SVG Ribbon Background & Crisp Border */}
                  <svg
                    viewBox="0 0 800 120"
                    preserveAspectRatio="none"
                    className="w-full h-auto min-h-[110px] sm:min-h-[120px] drop-shadow-[0_8px_16px_rgba(0,51,102,0.12)]"
                  >
                    <path
                      d={
                        isOdd
                          ? "M 32 0 L 768 0 L 800 60 L 768 120 L 32 120 L 0 60 Z" // Points Right ▶
                          : "M 32 0 L 800 0 L 768 60 L 800 120 L 32 120 L 0 60 Z" // Points Left ◀
                      }
                      fill="#FFFFFF"
                      stroke="#3B669B"
                      strokeWidth="2.5"
                      vectorEffect="non-scaling-stroke"
                    />
                  </svg>

                  {/* Inner Text & Content Overlay */}
                  <div className="absolute inset-0 px-8 sm:px-14 py-4 flex items-center">
                    <div className="w-full grid gap-2 sm:grid-cols-2 sm:items-center">
                      {isOdd ? (
                        <>
                          {/* Title Left */}
                          <div>
                            <span className="text-[10px] font-black uppercase tracking-widest text-brand-terracotta">
                              Indicator {item.stage}
                            </span>
                            <h3 className="mt-0.5 text-sm sm:text-lg font-display font-bold text-brand-navy">
                              {item.title}
                            </h3>
                          </div>
                          {/* Bullets Right */}
                          <div>
                            <ul className="space-y-1 sm:border-l sm:border-blue-100 sm:pl-6">
                              {item.points.map((pt, i) => (
                                <li key={i} className="flex items-center gap-2 text-[11px] sm:text-xs font-semibold text-slate-600">
                                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand-navy" />
                                  <span>{pt}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </>
                      ) : (
                        <>
                          {/* Bullets Left */}
                          <div className="order-2 sm:order-1">
                            <ul className="space-y-1 sm:border-r sm:border-blue-100 sm:pr-6">
                              {item.points.map((pt, i) => (
                                <li key={i} className="flex items-center gap-2 text-[11px] sm:text-xs font-semibold text-slate-600 sm:justify-end">
                                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand-navy" />
                                  <span>{pt}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          {/* Title Right */}
                          <div className="order-1 sm:order-2 sm:text-right">
                            <span className="text-[10px] font-black uppercase tracking-widest text-brand-terracotta">
                              Indicator {item.stage}
                            </span>
                            <h3 className="mt-0.5 text-sm sm:text-lg font-display font-bold text-brand-navy">
                              {item.title}
                            </h3>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>

                {/* Floating Number Right (for Even 02, 04, 06) */}
                <div className={`w-12 sm:w-16 text-center shrink-0 ${!isOdd ? "block" : "invisible"}`}>
                  <span className="font-display text-3xl font-black text-brand-navy sm:text-4xl lg:text-5xl tracking-tight">
                    {item.stage}
                  </span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

function ClientLogos() {
  const clients = [
    { name: "Prenora Investment Holding", logoPath: "/client-logos/sc-clients-001.jpg" },
    { name: "Rane", logoPath: "/client-logos/sc-clients-002.jpg" },
    { name: "NTT DATA", logoPath: "/client-logos/sc-clients-003.jpg" },
    { name: "Fujitsu", logoPath: "/client-logos/sc-clients-004.jpg" },
    { name: "Star Eltech", logoPath: "/client-logos/sc-clients-005.jpg" },
    { name: "Client Logo 007", logoPath: "/client-logos/client-logo-007.jpeg" },
    { name: "Client Logo 008", logoPath: "/client-logos/client-logo-008.jpeg" },
  ];

  return (
    <section className="py-16 bg-slate-50 border-y border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-500 font-bold mb-2">Trusted by leading clients</p>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900">Our Trusted Clients</h2>
          <p className="text-slate-600 max-w-2xl mx-auto mt-2 text-sm">
            Organizations across enterprise technology, manufacturing, finance, and digital transformation rely on SoftClinch for secure, scalable delivery.
          </p>
        </div>

        <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white/80 py-5 shadow-sm">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-slate-50 to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-slate-50 to-transparent z-10" />
          <motion.div
            className="flex w-max gap-4"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 22, ease: "linear", repeat: Infinity }}
          >
            {[...clients, ...clients].map((client, index) => (
              <div
                key={`${client.name}-${index}`}
                className="flex min-w-[180px] items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 px-6 py-5"
              >
                <img
                  src={assetPath(client.logoPath)}
                  alt={client.name}
                  className="h-14 w-28 object-contain"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const allReviews = [...reviews, ...reviews];
  return (
    <section className="py-24 bg-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-bold uppercase tracking-widest mb-4">
          <Globe size={14} />
          Client Trust
        </div>
        <h2 className="text-3xl lg:text-5xl font-display font-bold text-slate-900 mb-4">Trusted Digital Transformation &amp; Automation Partner</h2>
        <div className="flex items-center justify-center gap-2 text-amber-400 mb-2">
          <span className="text-slate-900 font-bold text-xl">5.0</span>
          {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
          <span className="text-slate-500 font-normal text-sm ml-1">· {reviews.length} verified Google reviews</span>
        </div>
      </div>
      <div className="relative w-full">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
        <style>{`
          @keyframes commerceMarquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
          .commerce-marquee-track { display: flex; width: max-content; animation: commerceMarquee 30s linear infinite; }
          .commerce-marquee-track:hover { animation-play-state: paused; }
        `}</style>
        <div className="overflow-hidden w-full">
          <div className="commerce-marquee-track gap-5 py-3 px-4">
            {allReviews.map((t, i) => (
              <div key={`${t.name}-${i}`} className="w-[300px] shrink-0 bg-slate-50 border border-slate-100 rounded-[2rem] px-6 py-5 flex flex-col gap-3 hover:shadow-xl transition-all cursor-default group">
                <div className="flex items-center justify-between">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-base shadow-lg ${["bg-teal-600","bg-emerald-700","bg-rose-600","bg-blue-600","bg-violet-600","bg-amber-600","bg-pink-600","bg-indigo-600","bg-cyan-700"][i % 9]}`}>
                    {t.name.charAt(0)}
                  </div>
                  <div className="flex items-center gap-1 bg-white border border-slate-200/60 px-2 py-0.5 rounded-full text-[10px] font-bold text-slate-400 shadow-sm">
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
                  {[...Array(5)].map((_, s) => <Star key={s} size={13} fill="currentColor" />)}
                </div>
                <p className="text-slate-700 text-sm leading-relaxed flex-1">&quot;{t.text}&quot;</p>
                <div className="flex items-center gap-3 pt-3 border-t border-slate-100">
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
                Transform Your Ecommerce Operations With A Structured Commerce Enablement Program
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

      <ClientLogos />

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.18 }}
        transition={{ staggerChildren: 0.06 }}
        className="mx-auto max-w-7xl border-t border-slate-200/80 px-4 py-24 sm:px-6 lg:px-8"
      >
        <SectionHeading
          eyebrow="The Business Problem"
          title="Ecommerce Operations Need More Than Disconnected Fixes"
          description="The program addresses recurring operational gaps that make commerce execution harder to manage across channels, teams, and customer communication."
        />
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {businessProblems.map((item) => (
            <PremiumCard key={item.title}>
              <item.icon className="h-8 w-8 text-brand-terracotta transition-colors group-hover:text-brand-navy" />
              <h3 className="mt-5 text-xl font-display font-bold text-slate-955 transition-colors group-hover:text-brand-terracotta">
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
          title="A Flow Table For Ecommerce Operating Clarity"
          description="SoftClinch brings the core commerce workstreams together as a reviewable flow from inputs to enablement and handover."
        />
        <FlowTable />
      </motion.section>

      <section className="mx-auto max-w-7xl border-t border-slate-200/80 px-4 py-24 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why SoftClinch"
          title="Commerce Enablement, Not Campaign-Only Execution"
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
          title="Roadmap From Discovery To Operational Handover"
          description="Each phase moves the program forward with a clear sequence, so the team can see what happens first, next, and at handover."
        />
        <RoadmapFlow />
      </motion.section>

      <section className="mx-auto max-w-7xl border-t border-slate-200/80 px-4 py-24 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Success Metrics"
          title="Readiness Indicators That Support Operational Confidence"
          description="The program measures implementation readiness and handover completion without promising revenue, rankings, sales, or ROAS."
        />
        <ReadinessMetricsFlow />
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
                Communication Workflows Included In The Implementation
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

      <Testimonials />

      <FaqSection title="Commerce Enablement FAQs" items={commerceEnablementFaq} includeSEO={false} />

      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[3rem] bg-white p-8 shadow-2xl ring-1 ring-slate-200 sm:p-10 lg:p-14">
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-navy to-brand-terracotta" />
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div>
              <span className="text-xs font-black uppercase tracking-[0.2em] text-brand-terracotta">
                Ready To Modernize?
              </span>
              <h2 className="mt-4 text-3xl font-display font-bold leading-tight text-slate-955 sm:text-4xl lg:text-5xl">
                Ready To Modernize Your Ecommerce Operations?
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
