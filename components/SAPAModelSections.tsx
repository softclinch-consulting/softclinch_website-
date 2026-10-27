"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import {
  ArrowRight,
  BarChart3,
  BookOpen,
  CalendarDays,
  Check,
  ClipboardCheck,
  FileText,
  Gauge,
  Headset,
  LifeBuoy,
  MessageSquareText,
  Search,
  ShieldCheck,
  TicketCheck,
  UserRoundCheck,
  UsersRound,
  Wrench,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { assetPath } from "@/lib/asset";

const revealVariants: Record<string, Variants> = {
  up: {
    hidden: { opacity: 0, y: 34 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } },
  },
  left: {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.65, ease: "easeOut" } },
  },
  right: {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.65, ease: "easeOut" } },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.94 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.65, ease: "easeOut" } },
  },
  fade: {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.75, ease: "easeOut" } },
  },
};

const staggerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

function SectionHeading({
  title,
  subtitle,
  light = false,
}: {
  title: string;
  subtitle: string;
  light?: boolean;
}) {
  return (
    <div className="mb-10 sm:mb-12">
      <h2 className={`max-w-4xl text-3xl font-display font-bold leading-tight lg:text-4xl ${light ? "text-white" : "text-[#17345F]"}`}>
        {title}
      </h2>
      <p className={`mt-3 max-w-3xl text-base leading-relaxed ${light ? "text-slate-300" : "text-slate-600"}`}>
        {subtitle}
      </p>
    </div>
  );
}

function RevealSection({
  number,
  title,
  subtitle,
  animation,
  children,
  className = "",
  light = false,
  titleInCenter = false,
}: {
  number: string;
  title: string;
  subtitle: string;
  animation: keyof typeof revealVariants;
  children: ReactNode;
  className?: string;
  light?: boolean;
  titleInCenter?: boolean;
}) {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.12 }}
      variants={revealVariants[animation]}
      aria-labelledby={titleInCenter ? `sap-ams-section-heading-${number}` : undefined}
      className={`relative overflow-hidden px-5 py-16 sm:px-8 sm:py-20 lg:py-24 ${className}`}
    >
      <div className="relative z-10 mx-auto max-w-[1200px]">
        {titleInCenter ? (
          <div className="mb-10 text-center sm:mb-12">
            <h2
              id={`sap-ams-section-heading-${number}`}
              className={`mx-auto max-w-4xl text-3xl font-display font-bold leading-tight lg:text-4xl ${light ? "text-white" : "text-[#17345F]"}`}
            >
              {title}
            </h2>
            <p className={`mx-auto mt-1 max-w-3xl text-base leading-relaxed ${light ? "text-slate-300" : "text-slate-600"}`}>
              {subtitle}
            </p>
          </div>
        ) : (
          <SectionHeading title={title} subtitle={subtitle} light={light} />
        )}
        {children}
      </div>
    </motion.section>
  );
}

const modelPillars = [
  {
    title: "Shared Consultant Pool",
    description: "Access to experienced SAP functional and technical consultants based on issue type and complexity.",
    icon: UsersRound,
    accent: "bg-brand-navy",
    placement: "lg:col-start-1 lg:row-start-1",
  },
  {
    title: "Customer SPOC",
    description: "One accountable SoftClinch point of contact coordinates tickets, consultants, communication and follow-up.",
    icon: UserRoundCheck,
    accent: "bg-brand-terracotta",
    placement: "lg:col-start-3 lg:row-start-1",
  },
  {
    title: "Customer Knowledge Repository",
    description: "A dedicated repository preserves customer-specific processes, configurations, solutions and references.",
    icon: BookOpen,
    accent: "bg-brand-terracotta",
    placement: "lg:col-start-1 lg:row-start-2",
  },
  {
    title: "Centralized Ticket Management",
    description: "Issues are logged, assigned, monitored and followed through resolution using an internal helpdesk.",
    icon: TicketCheck,
    accent: "bg-brand-navy",
    placement: "lg:col-start-3 lg:row-start-2",
  },
];

const whySoftclinch = [
  {
    title: "Experienced SAP Pool",
    description: "Deep functional and technical expertise across SAP modules.",
    icon: UsersRound,
    placement: "lg:col-start-1 lg:row-start-1",
  },
  {
    title: "Faster Issue Routing",
    description: "The right expertise is assigned immediately based on issue type.",
    icon: ArrowRight,
    placement: "lg:col-start-3 lg:row-start-1",
  },
  {
    title: "Knowledge Continuity",
    description: "Customer-specific knowledge is preserved and accessible at all times.",
    icon: BookOpen,
    placement: "lg:col-start-1 lg:row-start-2",
  },
  {
    title: "Transparent Governance",
    description: "Clear ownership, monitoring and monthly reporting.",
    icon: ShieldCheck,
    placement: "lg:col-start-3 lg:row-start-2",
  },
  {
    title: "Continuous Learning",
    description: "Recurring issues become knowledge articles and reusable solutions.",
    icon: Search,
    placement: "lg:col-start-1 lg:row-start-3",
  },
  {
    title: "Scalable Support",
    description: "Shared expertise scales with demand without fixed headcount constraints.",
    icon: Gauge,
    placement: "lg:col-start-3 lg:row-start-3",
  },
];

const consultantTracks: {
  title: string;
  color: string;
  accent: string;
  surface: string;
  icon: LucideIcon;
  items: string[];
}[] = [
  {
    title: "Functional Expertise",
    color: "text-brand-navy",
    accent: "from-brand-navy to-[#315F8F]",
    surface: "bg-brand-navy/5",
    icon: ClipboardCheck,
    items: ["Process analysis", "Configuration support", "Incident resolution", "Cross-module coordination"],
  },
  {
    title: "Technical Expertise",
    color: "text-brand-terracotta",
    accent: "from-brand-terracotta to-[#B75B36]",
    surface: "bg-brand-terracotta/5",
    icon: Wrench,
    items: ["ABAP / technical analysis", "Interfaces and integrations", "Background jobs", "Performance / technical issues"],
  },
  {
    title: "Specialist Access",
    color: "text-brand-navy",
    accent: "from-[#315F8F] to-brand-navy",
    surface: "bg-brand-navy/5",
    icon: Search,
    items: ["Root-cause analysis", "Cross-functional support", "Escalation coordination", "Solution validation"],
  },
];

const spocSteps = [
  { title: "Submit Issue", icon: FileText },
  { title: "SPOC Review", icon: ClipboardCheck },
  { title: "Consultant Resolve", icon: Wrench },
  { title: "SPOC Validate", icon: ShieldCheck },
  { title: "Customer Closure", icon: MessageSquareText },
];

const repositoryItems = [
  "Business process documentation",
  "Customer-specific configuration references",
  "Custom development and integration references",
  "Known issues and previous resolutions",
  "Operating procedures and support instructions",
  "Reusable troubleshooting and solution references",
];

const repositoryIconSet = [FileText, ClipboardCheck, Wrench, Search, BookOpen, Check];

const ticketSteps = [
  { title: "Issue Reported", icon: LifeBuoy },
  { title: "Ticket Logged", icon: TicketCheck },
  { title: "SPOC Review", icon: UserRoundCheck },
  { title: "Consultant Assigned", icon: UsersRound },
  { title: "Analysis & Resolution", icon: Wrench },
];

const governanceCadences = [
  {
    title: "Daily / Ongoing",
    icon: CalendarDays,
    points: ["Ticket monitoring and assignment", "Priority review and ownership", "Aging follow-up", "Consultant coordination", "Customer communication"],
  },
  {
    title: "Monthly",
    icon: ClipboardCheck,
    points: ["Issue tracker shared with customer", "Open / closed ticket review", "Aging analysis", "Module and category trends", "Major and recurring issues"],
  },
  {
    title: "Continuous Improvement",
    icon: BarChart3,
    points: ["Identify recurring issues", "Create knowledge articles", "Update the repository", "Improve support procedures", "Feed learning back into support"],
  },
];

const reportMetrics = [
  ["Tickets Received", "Period intake volume", TicketCheck],
  ["Tickets Resolved", "Resolution volume", Check],
  ["Open Tickets", "Current backlog", Headset],
  ["Aging Tickets", "Attention required", CalendarDays],
  ["Priority Mix", "Business impact view", Gauge],
  ["Module Mix", "Support demand by area", BarChart3],
] satisfies [string, string, LucideIcon][];

const operatingSteps = [
  { label: "Submit Issue", description: "The customer raises a support request.", icon: FileText },
  { label: "SPOC Ownership", description: "One contact reviews and coordinates the request.", icon: UserRoundCheck },
  { label: "Ticket Tracking", description: "Progress and actions stay visible from start to finish.", icon: TicketCheck },
  { label: "Expert Resolution", description: "The right SAP expertise investigates and resolves the issue.", icon: Wrench },
];

const operatingResources: { title: string; description: string; icon: LucideIcon }[] = [
  {
    title: "Customer Knowledge Repository",
    description: "Customer-specific documents, configurations, prior solutions and operating procedures — always accessible to consultants.",
    icon: BookOpen,
  },
  {
    title: "Knowledge Articles",
    description: "Reusable solutions created from support experience — turning every resolved issue into a future asset.",
    icon: FileText,
  },
  {
    title: "Monthly Governance",
    description: "Issue tracker, trends, aging analysis and action follow-up shared with the customer for transparency.",
    icon: BarChart3,
  },
];

export function SAPAModelSections() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <>
      <RevealSection
        number="01"
        title="Our SAP AMS Support Model"
        subtitle="A structured shared-service model designed for responsiveness, continuity and knowledge retention."
        animation="up"
        titleInCenter
        className="bg-gradient-to-b from-white via-[#F8FAFC] to-white"
      >
        <div className="relative mx-auto max-w-[1120px]">
          <div className="pointer-events-none absolute inset-x-0 top-1/2 hidden h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-brand-navy/35 to-transparent lg:block" />
          <div className="pointer-events-none absolute bottom-0 left-1/2 top-0 hidden w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-brand-terracotta/40 to-transparent lg:block" />
          <motion.div
            variants={staggerVariants}
            className="relative grid items-center gap-4 lg:grid-cols-[minmax(0,1fr)_250px_minmax(0,1fr)] lg:grid-rows-[minmax(155px,auto)_minmax(155px,auto)] lg:gap-x-5 lg:gap-y-5"
          >
            <motion.div
              variants={revealVariants.scale}
              className="relative mx-auto grid h-56 w-56 place-items-center lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:h-[250px] lg:w-[250px]"
            >
              <motion.div
                aria-hidden="true"
                animate={shouldReduceMotion ? undefined : { rotate: 360 }}
                transition={{ duration: 36, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border-[5px] border-brand-navy/20 border-t-brand-terracotta border-r-brand-navy/50"
              />
              <motion.div
                aria-hidden="true"
                animate={shouldReduceMotion ? undefined : { rotate: -360 }}
                transition={{ duration: 48, repeat: Infinity, ease: "linear" }}
                className="absolute inset-3 rounded-full border-2 border-dashed border-brand-terracotta/50"
              />
              <div className="absolute inset-6 rounded-full border border-brand-navy/15 bg-gradient-to-br from-white via-[#F8FAFC] to-[#FFF4EE] shadow-[0_12px_55px_rgba(0,51,102,0.16)]" />
              <div className="relative z-10 flex h-40 w-40 flex-col items-center justify-center rounded-full border border-white bg-white/95 px-5 text-center shadow-inner sm:h-48 sm:w-48">
                <span className="mb-2 rounded-full bg-brand-navy px-3 py-1 text-[9px] font-black uppercase tracking-[0.2em] text-white sm:text-[10px]">
                  SoftClinch AMS
                </span>
                <span className="text-base font-display font-bold leading-tight text-brand-navy">
                  Four Integrated Components
                </span>
                <span className="mt-2 text-xs font-semibold text-brand-terracotta">One coherent support system</span>
              </div>
            </motion.div>

            {modelPillars.map(({ title, description, icon: Icon, accent, placement }, index) => (
            <motion.article
              key={title}
              variants={cardVariants}
              className={`group overflow-hidden rounded-xl border border-brand-navy/15 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-brand-terracotta/50 hover:shadow-lg ${placement}`}
            >
              <div className="flex items-center justify-center border-b border-slate-200 bg-[#E8E8F0] py-2 text-base font-semibold text-slate-600">
                {index + 1}
              </div>
              <div className="flex min-h-[130px] gap-4 p-5 sm:p-6">
                <span className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl ${accent} text-white shadow-sm`}>
                  <Icon className="h-5 w-5" />
                </span>
                <div className="flex-1">
                  <h3 className="font-display text-lg font-bold text-slate-800">{title}</h3>
                  <p className="mt-2 text-base leading-relaxed text-slate-600">{description}</p>
                </div>
              </div>
            </motion.article>
          ))}
          </motion.div>
        </div>
      </RevealSection>

      <RevealSection
        number="03"
        title="Shared SAP Consultant Pool"
        subtitle="Right expertise for the right issue — every time."
        animation="left"
        titleInCenter
        className="bg-gradient-to-b from-white via-[#F8FAFC] to-[#F4F6FA]"
      >
        <div className="relative">
          <div className="pointer-events-none absolute left-[16%] right-[16%] top-8 hidden h-px bg-gradient-to-r from-brand-navy/20 via-brand-terracotta/50 to-brand-navy/20 md:block" />
          <motion.div variants={staggerVariants} className="relative grid items-stretch gap-5 md:grid-cols-3">
            {consultantTracks.map(({ title, color, accent, surface, icon: Icon, items }, index) => (
              <motion.article
                key={title}
                variants={cardVariants}
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:border-brand-navy/25 hover:shadow-xl"
              >
                <div className={`h-1.5 w-full bg-gradient-to-r ${accent}`} />
                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <div className="mb-5 flex items-center justify-between">
                    <span className={`grid h-14 w-14 place-items-center rounded-2xl ${surface} ${color} transition duration-300 group-hover:rotate-[-6deg] group-hover:scale-105`}>
                      <Icon className="h-7 w-7" />
                    </span>
                    <span className="text-4xl font-black tracking-tight text-slate-100 transition-colors group-hover:text-brand-navy/10">
                      0{index + 1}
                    </span>
                  </div>
                  <h3 className={`font-display text-xl font-bold ${color}`}>{title}</h3>
                  <div className={`mt-4 h-px ${surface}`} />
                  <ul className="mt-4 grid flex-1 gap-3">
                    {items.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-base leading-relaxed text-slate-600">
                        <span className={`mt-2 h-2 w-2 shrink-0 rounded-full ${index === 1 ? "bg-brand-terracotta" : "bg-brand-navy"}`} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </RevealSection>

      <RevealSection
        number="04"
        title="Customer SPOC Model"
        subtitle="One accountable coordination point from ticket intake through closure."
        animation="scale"
        titleInCenter
        className="bg-gradient-to-b from-[#F7F8FC] to-white"
      >
        <motion.div variants={staggerVariants} className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {spocSteps.map(({ title, icon: Icon }, index) => (
            <motion.div key={title} variants={cardVariants} className="relative text-center">
              <div className="mx-auto grid h-24 w-24 place-items-center rounded-full border-[6px] border-[#20202C] bg-white text-brand-navy shadow-md transition duration-300 hover:scale-105 hover:border-brand-terracotta">
                <Icon className="h-8 w-8" />
              </div>
              {index < spocSteps.length - 1 && (
                <ArrowRight className="absolute right-[-14px] top-9 hidden h-7 w-7 text-brand-terracotta lg:block" />
              )}
              <p className="mx-auto mt-4 max-w-32 text-base font-semibold text-slate-600">{title}</p>
            </motion.div>
          ))}
        </motion.div>
        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          <div className="rounded-2xl border border-brand-navy/15 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
            <h3 className="font-display text-lg font-bold text-brand-navy">SPOC Responsibilities</h3>
            <ul className="mt-3 space-y-2 text-base leading-relaxed text-slate-600">
              {[
                "Coordinates ticket assignment to the appropriate consultant",
                "Monitors progress, dependencies and aging",
                "Maintains customer communication and follow-up",
                "Ensures issues are driven to closure",
              ].map((item) => <li key={item} className="flex gap-2"><Check className="h-4 w-4 shrink-0 text-brand-terracotta" />{item}</li>)}
            </ul>
          </div>
          <div className="rounded-2xl border border-brand-terracotta/20 bg-gradient-to-br from-brand-navy to-[#0B2545] p-6 text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl">
            <h3 className="font-display text-lg font-bold">Why a Single Point of Contact?</h3>
            <p className="mt-3 text-base leading-relaxed text-slate-100">
              One owner means clear accountability, no dropped tickets and a consistent customer experience throughout every support interaction.
            </p>
          </div>
        </div>
      </RevealSection>

      <RevealSection
        number="02"
        title="Why SoftClinch AMS"
        subtitle="Combining shared SAP expertise with customer-specific ownership."
        animation="right"
        titleInCenter
        className="bg-[#F7F8FC]"
      >
        <div className="relative mx-auto max-w-[1120px]">
          <div className="pointer-events-none absolute inset-x-0 top-1/2 hidden h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-brand-navy/30 to-transparent lg:block" />
          <div className="pointer-events-none absolute bottom-0 left-1/2 top-0 hidden w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-brand-terracotta/35 to-transparent lg:block" />
          <motion.div
            variants={staggerVariants}
            className="relative grid items-center gap-4 sm:grid-cols-2 lg:grid-cols-[minmax(0,1fr)_230px_minmax(0,1fr)] lg:grid-rows-3 lg:gap-x-6 lg:gap-y-5"
          >
            <motion.div
              variants={revealVariants.scale}
              className="relative mx-auto grid h-48 w-48 place-items-center sm:col-span-2 lg:col-span-1 lg:col-start-2 lg:row-span-3 lg:row-start-1 lg:h-[230px] lg:w-[230px]"
            >
              <motion.div
                aria-hidden="true"
                animate={shouldReduceMotion ? undefined : { rotate: 360 }}
                transition={{ duration: 38, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border-[5px] border-brand-navy/20 border-t-brand-terracotta border-r-brand-navy/50"
              />
              <motion.div
                aria-hidden="true"
                animate={shouldReduceMotion ? undefined : { rotate: -360 }}
                transition={{ duration: 52, repeat: Infinity, ease: "linear" }}
                className="absolute inset-3 rounded-full border-2 border-dashed border-brand-terracotta/45"
              />
              <div className="absolute inset-6 rounded-full border border-brand-navy/15 bg-white shadow-[0_12px_55px_rgba(0,51,102,0.16)]" />
              <div className="relative z-10 grid h-40 w-40 place-items-center rounded-full border border-slate-100 bg-white px-3 shadow-inner sm:h-44 sm:w-44">
                <Image
                  src={assetPath("/softclinch.jpeg")}
                  alt="SoftClinch"
                  width={200}
                  height={75}
                  className="h-auto w-full max-w-[150px] object-contain"
                />
              </div>
            </motion.div>

            {whySoftclinch.map(({ title, description, icon: Icon, placement }, index) => (
              <motion.article
                key={title}
                variants={cardVariants}
                className={`group flex min-h-[112px] items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-brand-navy/25 hover:shadow-lg sm:p-6 ${placement}`}
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-navy text-white shadow-sm transition-colors group-hover:bg-brand-terracotta">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-brand-terracotta">0{index + 1}</span>
                  <h3 className="mt-0.5 font-display text-lg font-bold text-slate-900">{title}</h3>
                  <p className="mt-1 text-base leading-relaxed text-slate-600">{description}</p>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </RevealSection>

      <RevealSection
        number="05"
        title="Customer-Specific Knowledge Repository"
        subtitle="Preserving business and technical context for consistent, high-quality support."
        animation="scale"
        titleInCenter
        className="bg-[#F4F6FA]"
      >
        <div className="grid gap-6 lg:grid-cols-[0.78fr_1.22fr]">
          <motion.aside
            variants={revealVariants.left}
            className="relative flex min-h-[300px] flex-col justify-between overflow-hidden rounded-[2rem] bg-gradient-to-br from-brand-navy via-[#0B2545] to-[#17345F] p-7 text-white shadow-xl sm:min-h-[340px] sm:p-9"
          >
            <div aria-hidden="true" className="absolute -right-16 -top-16 h-64 w-64 rounded-full border border-white/10" />
            <div aria-hidden="true" className="absolute -right-8 -top-8 h-48 w-48 rounded-full border border-brand-terracotta/30" />
            <div className="relative">
              <span className="grid h-14 w-14 place-items-center rounded-2xl bg-white/10 text-orange-200 ring-1 ring-white/15">
                <BookOpen className="h-7 w-7" />
              </span>
              <h3 className="mt-7 font-display text-2xl font-bold">Repository Contents</h3>
              <p className="mt-3 max-w-md text-base leading-relaxed text-slate-200">
                Consultants refer to customer-specific knowledge during analysis — reducing dependency on individual resources.
              </p>
            </div>
            <div className="relative mt-8 flex items-end gap-3" aria-hidden="true">
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="grid h-16 w-14 place-items-center rounded-t-xl border border-white/20 bg-white/10 text-orange-200"
              >
                <FileText className="h-6 w-6" />
              </motion.div>
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
                className="grid h-20 w-16 place-items-center rounded-t-xl border border-white/20 bg-white/15 text-white"
              >
                <BookOpen className="h-7 w-7" />
              </motion.div>
              <motion.div
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
                className="grid h-14 w-14 place-items-center rounded-t-xl border border-white/20 bg-brand-terracotta/80 text-white"
              >
                <ClipboardCheck className="h-6 w-6" />
              </motion.div>
              <span className="mb-1 ml-2 h-px flex-1 bg-gradient-to-r from-brand-terracotta/70 to-transparent" />
            </div>
          </motion.aside>

          <motion.div
            variants={staggerVariants}
            className="grid content-center gap-3 sm:grid-cols-2 sm:gap-4"
          >
            {repositoryItems.map((item, index) => {
              const Icon = repositoryIconSet[index];
              return (
                <motion.article
                  key={item}
                  variants={cardVariants}
                  className="group relative flex min-h-[112px] items-center gap-4 overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-brand-navy/25 hover:shadow-lg sm:p-5"
                >
                  <span className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl ${index % 2 === 0 ? "bg-brand-navy" : "bg-brand-terracotta"} text-white transition-transform duration-300 group-hover:rotate-[-6deg] group-hover:scale-105`}>
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="relative z-10 flex-1 text-base font-semibold leading-relaxed text-slate-700">
                    {item}
                  </span>
                  <span className="absolute -bottom-3 -right-1 text-5xl font-black leading-none text-slate-100 transition-colors group-hover:text-brand-navy/10">
                    0{index + 1}
                  </span>
                  <span className={`absolute bottom-0 left-0 h-1 w-0 transition-all duration-300 group-hover:w-full ${index % 2 === 0 ? "bg-brand-navy" : "bg-brand-terracotta"}`} />
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </RevealSection>

      <RevealSection
        number="06"
        title="Ticket Management & Resolution Lifecycle"
        subtitle="Every issue has an owner, status and resolution trail."
        animation="right"
        titleInCenter
        className="bg-gradient-to-b from-[#F7F8FC] via-white to-[#F7F8FC]"
      >
        <div className="relative rounded-[2rem] border border-slate-200 bg-white px-5 py-8 shadow-sm sm:px-8 sm:py-10">
          <div className="absolute left-[10%] right-[10%] top-[4.35rem] hidden h-1 rounded-full bg-slate-100 lg:block" />
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, ease: "easeOut" }}
            className="absolute left-[10%] right-[10%] top-[4.35rem] hidden h-1 origin-left rounded-full bg-gradient-to-r from-brand-navy via-brand-terracotta to-brand-navy lg:block"
          />
          <motion.div variants={staggerVariants} className="relative grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {ticketSteps.map(({ title, icon: Icon }, index) => (
            <motion.article key={title} variants={cardVariants} className="group text-center">
              <span className={`mx-auto grid h-16 w-16 place-items-center rounded-2xl border-4 border-white text-white shadow-lg transition duration-300 group-hover:-translate-y-1 group-hover:rotate-[-5deg] sm:h-[4.5rem] sm:w-[4.5rem] ${index % 2 === 0 ? "bg-brand-navy" : "bg-brand-terracotta"}`}>
                <Icon className="h-7 w-7" />
              </span>
              <span className="mt-4 inline-flex rounded-full bg-[#E8E8F0] px-3 py-1 text-[10px] font-black uppercase tracking-widest text-brand-navy">
                Step 0{index + 1}
              </span>
              <p className="mx-auto mt-2 max-w-36 text-base font-bold leading-snug text-slate-700">{title}</p>
            </motion.article>
          ))}
          </motion.div>
        </div>
        <motion.div variants={staggerVariants} className="mt-6 grid gap-4 md:grid-cols-3">
          {[
            { title: "Ownership", description: "The SPOC assigns the ticket and follows it through to full resolution.", icon: UserRoundCheck },
            { title: "Traceability", description: "Ticket history provides visibility of analysis, actions and resolution steps.", icon: FileText },
            { title: "Closure", description: "Resolution is communicated and the issue is closed after required validation.", icon: ShieldCheck },
          ].map(({ title, description, icon: Icon }, index) => (
            <motion.article key={title} variants={cardVariants} className="group flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
              <span className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl text-white ${index === 1 ? "bg-brand-terracotta" : "bg-brand-navy"}`}>
                <Icon className="h-5 w-5" />
              </span>
              <div>
                <h3 className="font-display text-lg font-bold text-brand-navy">{title}</h3>
                <p className="mt-2 text-base leading-relaxed text-slate-600">{description}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </RevealSection>

      <RevealSection
        number="07"
        title="Support Governance & Monitoring"
        subtitle="A consistent review rhythm keeps every ticket visible, accountable and moving toward better support outcomes."
        animation="up"
        titleInCenter
        className="bg-gradient-to-b from-[#F4F6FA] via-white to-[#F4F6FA]"
      >
        <motion.div variants={staggerVariants} className="grid gap-5 lg:grid-cols-3">
          {governanceCadences.map(({ title, icon: Icon, points }, index) => {
            const featured = index === 0;
            const terracotta = index === 1;
            const accent = terracotta ? "text-brand-terracotta" : "text-brand-navy";

            return (
              <motion.article
                key={title}
                variants={cardVariants}
                className={`group relative overflow-hidden rounded-[1.75rem] border p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-7 ${
                  featured
                    ? "border-brand-navy bg-gradient-to-br from-brand-navy to-[#0B2545] text-white"
                    : "border-slate-200 bg-white text-slate-700"
                }`}
              >
                <span
                  aria-hidden="true"
                  className={`absolute -right-10 -top-10 h-32 w-32 rounded-full border ${
                    featured ? "border-white/10" : terracotta ? "border-brand-terracotta/10" : "border-brand-navy/10"
                  }`}
                />
                <div className="relative flex items-start justify-between gap-4">
                  <span className={`grid h-12 w-12 place-items-center rounded-2xl ${
                    featured
                      ? "bg-white/10 text-orange-200 ring-1 ring-white/15"
                      : terracotta
                        ? "bg-brand-terracotta/10 text-brand-terracotta"
                        : "bg-brand-navy/10 text-brand-navy"
                  }`}>
                    <Icon className="h-6 w-6" />
                  </span>
                  <span className={`rounded-full px-3 py-1 text-[10px] font-black uppercase tracking-[0.16em] ${
                    featured ? "bg-white/10 text-orange-100" : "bg-slate-100 text-slate-500"
                  }`}>
                    {index === 0 ? "Always on" : index === 1 ? "Monthly review" : "Ongoing"}
                  </span>
                </div>
                <h3 className={`relative mt-6 font-display text-xl font-bold ${featured ? "text-white" : accent}`}>{title}</h3>
                <div className={`relative mt-4 h-px ${featured ? "bg-white/15" : "bg-slate-100"}`} />
                <ul className="relative mt-4 space-y-3">
                {points.map((point) => (
                  <li key={point} className={`flex gap-2.5 text-base leading-relaxed ${featured ? "text-slate-200" : "text-slate-600"}`}>
                    <Check className={`mt-0.5 h-4 w-4 shrink-0 ${featured ? "text-orange-200" : accent}`} />
                    {point}
                  </li>
                ))}
                </ul>
                <span className={`pointer-events-none absolute -bottom-5 right-4 text-7xl font-black leading-none ${
                  featured ? "text-white/[0.04]" : "text-slate-100"
                }`}>
                  0{index + 1}
                </span>
              </motion.article>
            );
          })}
        </motion.div>
        <div className="mt-6 flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:flex-row sm:items-center sm:justify-between sm:px-7">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.18em] text-brand-terracotta">Governance loop</p>
            <p className="mt-1 text-base text-slate-600">Every review creates a clear next action.</p>
          </div>
          <div className="flex flex-wrap items-center gap-2 text-xs font-black uppercase tracking-wider text-brand-navy sm:gap-3">
            {["Operate", "Review", "Improve"].map((step, index) => (
              <span key={step} className="flex items-center gap-2 sm:gap-3">
                <span className="rounded-full bg-[#F4F6FA] px-3 py-2">{step}</span>
                {index < 2 && <ArrowRight className="h-4 w-4 text-brand-terracotta" />}
              </span>
            ))}
          </div>
        </div>
      </RevealSection>

      <RevealSection
        number="08"
        title="Monthly Customer Reporting"
        subtitle="A shared monthly snapshot of support activity, current workload and trends — built to make priorities and next actions clear."
        animation="fade"
        titleInCenter
        className="bg-gradient-to-br from-[#F5F7FB] via-white to-[#F3F4F8]"
      >
        <motion.div variants={staggerVariants} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {reportMetrics.map(([title, description, Icon], index) => {
            const featured = index === 0;
            const terracotta = index === 3;

            return (
              <motion.article
                key={title}
                variants={cardVariants}
                className={`group relative overflow-hidden rounded-3xl border p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-6 ${
                  featured
                    ? "border-brand-navy bg-gradient-to-br from-brand-navy to-[#0B2545] text-white"
                    : "border-slate-200 bg-white text-slate-700 hover:border-brand-navy/20"
                }`}
              >
                <span
                  aria-hidden="true"
                  className={`absolute -bottom-8 -right-3 text-8xl font-black leading-none ${
                    featured ? "text-white/[0.04]" : "text-slate-100"
                  }`}
                >
                  0{index + 1}
                </span>
                <div className="relative flex items-center justify-between gap-3">
                  <span className={`grid h-12 w-12 place-items-center rounded-2xl ${
                    featured
                      ? "bg-white/10 text-orange-200 ring-1 ring-white/15"
                      : terracotta
                        ? "bg-brand-terracotta/10 text-brand-terracotta"
                        : "bg-brand-navy/10 text-brand-navy"
                  }`}>
                    <Icon className="h-6 w-6" />
                  </span>
                  <span className={`text-[10px] font-black uppercase tracking-[0.16em] ${
                    featured ? "text-orange-100" : "text-slate-400"
                  }`}>
                    Metric 0{index + 1}
                  </span>
                </div>
                <h3 className={`relative mt-5 font-display text-lg font-bold ${featured ? "text-white" : "text-brand-navy"}`}>{title}</h3>
                <p className={`relative mt-2 text-base leading-relaxed ${
                  featured ? "text-slate-200" : "text-slate-500"
                }`}>
                  {description}
                </p>
                <div className={`relative mt-5 h-1 w-10 rounded-full transition-all duration-300 group-hover:w-16 ${
                  featured || terracotta ? "bg-brand-terracotta" : "bg-brand-navy"
                }`} />
              </motion.article>
            );
          })}
        </motion.div>
      </RevealSection>

      <RevealSection
        number="09"
        title="End-to-End AMS Operating Model"
        subtitle="Shared expertise supported by customer-specific knowledge and centralized governance."
        animation="scale"
        titleInCenter
        className="mx-4 mb-12 rounded-[2.5rem] bg-[#111B36] shadow-2xl shadow-brand-navy/10 sm:mx-6 sm:mb-16 lg:mx-10"
        light
      >
        <div className="relative">
          <div aria-hidden="true" className="absolute bottom-8 left-[1.45rem] top-8 w-px bg-white/15 lg:hidden" />
          <div aria-hidden="true" className="absolute left-[12.5%] right-[12.5%] top-7 hidden h-px bg-white/15 lg:block" />
          <motion.div
            aria-hidden="true"
            initial={{ scaleX: shouldReduceMotion ? 1 : 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute left-[12.5%] right-[12.5%] top-7 hidden h-px origin-left bg-gradient-to-r from-brand-terracotta via-orange-200 to-brand-terracotta lg:block"
          />
          <motion.div
            variants={staggerVariants}
            className="relative grid gap-6 lg:grid-cols-4 lg:gap-5"
          >
            {operatingSteps.map(({ label, description, icon: Icon }, index) => (
              <motion.article
                key={label}
                variants={cardVariants}
                className="group relative flex items-start gap-4 lg:flex-col lg:items-center lg:text-center"
              >
                <span className="relative z-10 grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-white/15 bg-[#1D2945] text-orange-200 shadow-lg transition duration-300 group-hover:-translate-y-1 group-hover:border-brand-terracotta/60 group-hover:bg-brand-terracotta group-hover:text-white lg:h-14 lg:w-14">
                  <Icon className="h-5 w-5 lg:h-6 lg:w-6" />
                  <span className="absolute -right-2 -top-2 grid h-5 w-5 place-items-center rounded-full bg-white text-[9px] font-black text-brand-navy">
                    0{index + 1}
                  </span>
                </span>
                <div className="min-w-0 pt-1 lg:pt-0">
                  <p className="text-[10px] font-black uppercase tracking-[0.18em] text-orange-200/80">Stage 0{index + 1}</p>
                  <h3 className="mt-1 font-display text-lg font-bold text-white">{label}</h3>
                  <p className="mt-2 text-base leading-relaxed text-slate-300">{description}</p>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
        <motion.div variants={staggerVariants} className="mt-8 grid gap-4 md:grid-cols-3">
          {operatingResources.map(({ title, description, icon: Icon }) => (
            <motion.article key={title} variants={cardVariants} className="group rounded-2xl border border-white/10 bg-white/[0.06] p-5 transition duration-300 hover:-translate-y-1 hover:border-brand-terracotta/40 hover:bg-white/10">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-white/10 text-orange-200 transition-colors group-hover:bg-brand-terracotta group-hover:text-white">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-3 font-display text-lg font-bold text-white">{title}</h3>
              <p className="mt-2 text-base leading-relaxed text-slate-300">{description}</p>
            </motion.article>
          ))}
        </motion.div>
      </RevealSection>
    </>
  );
}
