"use client";
import React, { useRef, useState } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import {
  Server, ShieldCheck, HeartHandshake, Users, Zap,
  CheckCircle2, Check, ChevronDown, Wrench, Settings,
  ArrowRight, Activity, Target, ShieldAlert, Cpu,
  UserCheck, Briefcase, ClipboardCheck, Sliders, FileText,
  BarChart3, Calendar, Code, CloudLightning, GraduationCap,
  Mail, Phone, Globe, Layers, Award
} from 'lucide-react';
import { FaqSection } from "@/components/FaqSection";
import { ServiceMediaPanel } from "@/components/ServiceMediaPanel";
import { ServiceStatStrip } from "@/components/ServiceStatStrip";
import { sapAmsFaq } from "@/lib/faqs";

// Fade In Section Component
function FadeInSection({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref as any, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.8, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Key services data array
const servicesData = [
  {
    title: "Incident Management",
    desc: "Fast, SLA-driven ticket logging, prioritization, analysis, and functional/technical resolution to minimize disruption.",
    icon: ShieldAlert,
    tagline: "Minimizing downtime with rapid module fixes",
    color: "from-red-500 to-orange-500",
    badgeColor: "bg-red-50 text-red-700 border-red-200",
    iconBg: "bg-red-500/10 text-red-500",
    points: [
      "Priority-based SLA response times (P1 to P4)",
      "Functional diagnostic checks for core modules",
      "S/4HANA & ECC transaction & interface fixes",
      "Root-cause analysis & resolution logs"
    ],
    detailedDesc: "Our incident management workflow is optimized to restore standard service operations as quickly as possible. By prioritizing tickets based on business impact, we ensure that critical transactions remain stable."
  },
  {
    title: "Change Request Management",
    desc: "Rigorous evaluation of business impact, developments in DEV/QA systems, validation, and controlled deployment.",
    icon: Code,
    tagline: "Controlled enhancements for continuous capability",
    color: "from-blue-500 to-indigo-600",
    badgeColor: "bg-blue-50 text-blue-700 border-blue-200",
    iconBg: "bg-blue-500/10 text-blue-500",
    points: [
      "Feasibility studies & effort estimation",
      "Custom developments & ABAP enhancements",
      "Transports validation from DEV to QA to PROD",
      "Post-deployment stability auditing & logs check"
    ],
    detailedDesc: "Manage enhancement request lifecycles smoothly. We evaluate technical side-effects, conduct detailed module dependency mapping, and coordinate deployment during scheduled maintenance windows."
  },
  {
    title: "User Support & Training",
    desc: "Continuous user guidance, training sessions, and system adoption support to improve efficiency and reduce errors.",
    icon: GraduationCap,
    tagline: "Empowering your workforce with SAP expertise",
    color: "from-amber-500 to-orange-500",
    badgeColor: "bg-amber-50 text-amber-700 border-amber-200",
    iconBg: "bg-amber-500/10 text-amber-500",
    points: [
      "Master data maintenance & configuration guides",
      "Automated workflow instructional training manuals",
      "Multi-module transactional guidance for end-users",
      "Regular training refresher sessions for system updates"
    ],
    detailedDesc: "System adoption is critical to maximizing ROI. We provide hands-on user guidance and clean step-by-step documentations to help your team perform transactions error-free."
  },
  {
    title: "Performance Optimization",
    desc: "Deep system performance analysis, resource tuning, proactive Basis monitoring, and batch runs optimization.",
    icon: Activity,
    tagline: "Fine-tuning infrastructure for high-speed executions",
    color: "from-emerald-500 to-teal-500",
    badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
    iconBg: "bg-emerald-500/10 text-emerald-500",
    points: [
      "Routine Basis and server performance logs monitoring",
      "Database tuning & memory utilization optimization",
      "Periodical custom code optimization & diagnostic audits",
      "Batch job processing acceleration and scheduling"
    ],
    detailedDesc: "A slow SAP system degrades business speed. Our Basis and performance teams analyze database execution plans, clean up lock tables, and optimize critical custom reports to run in seconds."
  }
];

const workflowContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12
    }
  }
};

const workflowItemVariants = {
  hidden: { opacity: 0, x: -20, y: 15 },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 70,
      damping: 14
    }
  }
};

export const SAPConsulting = () => {
  const [activeService, setActiveService] = useState(0);
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
                Seamless SAP Operations for <br />
                <span className="bg-gradient-to-r from-brand-navy to-brand-terracotta bg-clip-text text-transparent">
                  Uninterrupted Growth
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
                  href="#contact-ams"
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



      {/* Objectives & Scope Section */}
      <section className="py-16 bg-white border-t border-slate-100">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex rounded-full border border-brand-terracotta/15 bg-brand-terracotta/5 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-brand-terracotta mb-4">
              Objectives & Scope
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight">
              Ensuring Seamless SAP Module Operations & Support
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Our core mission is to safeguard your daily operations while introducing system optimizations that drive growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            <FadeInSection delay={0.1}>
              <div className="group relative rounded-[2.5rem] border border-slate-200 bg-slate-50/50 p-8 sm:p-10 shadow-sm hover:shadow-xl hover:border-brand-navy/30 transition-all duration-300 h-full flex flex-col justify-between overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-brand-navy to-blue-600" />
                <div>
                  <div className="w-16 h-16 rounded-2xl bg-brand-navy/10 text-brand-navy flex items-center justify-center mb-6 shadow-sm border border-brand-navy/5">
                    <Target className="h-8 w-8 text-brand-navy" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 font-display">Primary Objective</h3>
                  <p className="text-slate-600 leading-relaxed text-base font-medium">
                    To guarantee completely seamless SAP module operations, ensuring high availability, minimizing transaction disruptions, and maintaining overall system stability across your enterprise landscape.
                  </p>
                </div>
                <div className="mt-8 pt-6 border-t border-slate-200/50 flex items-center justify-between text-brand-navy font-semibold text-sm">
                  <span>Operational Stability Focus</span>
                  <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                </div>
              </div>
            </FadeInSection>

            <FadeInSection delay={0.2}>
              <div className="group relative rounded-[2.5rem] border border-slate-200 bg-slate-50/50 p-8 sm:p-10 shadow-sm hover:shadow-xl hover:border-brand-terracotta/30 transition-all duration-300 h-full flex flex-col justify-between overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-brand-terracotta to-orange-500" />
                <div>
                  <div className="w-16 h-16 rounded-2xl bg-brand-terracotta/10 text-brand-terracotta flex items-center justify-center mb-6 shadow-sm border border-brand-terracotta/5">
                    <Layers className="h-8 w-8 text-brand-terracotta" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 font-display">Scope of Application Support</h3>
                  <p className="text-slate-600 leading-relaxed text-base font-medium">
                    Providing ongoing, expert functional and technical support for rapid incident resolution and enhancement requests, while continuously aligning and optimizing core business processes and workflows.
                  </p>
                </div>
                <div className="mt-8 pt-6 border-t border-slate-200/50 flex flex-col gap-3">
                  <div className="flex items-center gap-3 text-slate-700 text-sm font-semibold">
                    <span className="w-2.5 h-2.5 rounded-full bg-brand-terracotta shrink-0" />
                    <span>Ongoing Support & Enhancements</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-700 text-sm font-semibold">
                    <span className="w-2.5 h-2.5 rounded-full bg-brand-terracotta shrink-0" />
                    <span>Business Process & Workflow Optimization</span>
                  </div>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Key Services Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Abstract design elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-navy/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-terracotta/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-[1200px] mx-auto px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex rounded-full border border-brand-navy/15 bg-brand-navy/5 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-brand-navy mb-4">
              Key Services Covered
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight font-display">
              Comprehensive Support & Performance Optimization
            </h2>
            <p className="mt-4 text-lg text-slate-600 font-medium">
              Explore our core pillars of SAP Application Management Support, designed to drive efficiency.
            </p>
          </div>

          <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-12 items-stretch mt-12">
            {/* Left side: Navigation buttons */}
            <div className="flex flex-col gap-4">
              {servicesData.map((service, index) => {
                const IconComponent = service.icon;
                const isActive = activeService === index;
                return (
                  <button
                    key={service.title}
                    onClick={() => setActiveService(index)}
                    className={`text-left p-6 rounded-[2rem] border transition-all duration-300 flex items-start gap-4 ${isActive
                      ? "bg-brand-navy text-white border-brand-navy shadow-lg shadow-brand-navy/20 scale-[1.02]"
                      : "bg-slate-50 border-slate-200 hover:bg-slate-100/75 text-slate-800 cursor-pointer"
                      }`}
                  >
                    <div className={`p-3 rounded-xl shrink-0 ${isActive ? "bg-white/10 text-white" : service.iconBg
                      }`}>
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-base font-display">{service.title}</h4>
                      <p className={`text-xs mt-1 leading-relaxed ${isActive ? "text-slate-300" : "text-slate-500"}`}>
                        {service.desc.substring(0, 85)}...
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Right side: Detailed service display */}
            <div className="bg-slate-50/50 border border-slate-200/80 rounded-[2.5rem] p-8 sm:p-12 relative overflow-hidden flex flex-col justify-between min-h-[480px]">
              {/* Top border colored line based on service */}
              <div className={`absolute top-0 inset-x-0 h-2 bg-gradient-to-r ${servicesData[activeService].color}`} />

              <div className="absolute right-6 top-8 text-8xl font-black text-slate-200/20 select-none font-display">
                {(activeService + 1).toString().padStart(2, "0")}
              </div>

              <div>
                <span className={`inline-flex py-1.5 px-3.5 rounded-full border text-xs font-black uppercase tracking-wider mb-6 ${servicesData[activeService].badgeColor}`}>
                  AMS Core Service
                </span>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display mb-2">
                  {servicesData[activeService].title}
                </h3>

                <p className="text-brand-terracotta text-sm font-bold mb-6">
                  {servicesData[activeService].tagline}
                </p>

                <p className="text-slate-600 text-sm leading-relaxed mb-8 font-medium">
                  {servicesData[activeService].detailedDesc}
                </p>

                <div className="border-t border-slate-200/60 pt-6">
                  <h5 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">
                    Deliverables & Activities
                  </h5>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {servicesData[activeService].points.map((pt, idx) => (
                      <div key={idx} className="flex gap-2.5 items-start text-xs font-semibold text-slate-700">
                        <CheckCircle2 className="w-4.5 h-4.5 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-200/60 flex items-center justify-between text-xs font-semibold text-slate-400">
                <span>Softclinch AMS Platform</span>
                <Link href="#sap-workflows" className="flex items-center gap-1.5 text-brand-navy hover:text-brand-terracotta transition-colors duration-200">
                  <span>Explore workflows below</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AMS Support Model & Team Structure */}
      <section className="py-24 bg-white relative overflow-hidden border-t border-slate-100">
        <div className="max-w-[1200px] mx-auto px-8">

          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="inline-flex rounded-full border border-brand-terracotta/15 bg-brand-terracotta/5 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-brand-terracotta mb-4">
              AMS Support Model
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight font-display">
              Structured Support Levels & Specialized Roles
            </h2>
            <p className="mt-4 text-lg text-slate-600 font-medium">
              From basic queries to strategic consulting, we align our specialized support teams at every tier.
            </p>
          </div>

          {/* Unified Two-Column Layout */}
          <div className="grid lg:grid-cols-12 gap-16 items-start">

            {/* Left Side: Stepped Support Tiers (L1 - L4) (5 Cols) */}
            <div className="lg:col-span-5 space-y-6 relative">
              <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3 font-display">
                <Layers className="text-brand-terracotta h-6 w-6" /> Support Tiers (L1 - L4)
              </h3>

              {/* Stepped Timeline Line */}
              <div className="absolute left-[31px] top-[75px] bottom-10 w-0.5 bg-slate-200/80 z-0 hidden sm:block" />

              {[
                { level: "L1 Support", title: "Basic Issue Resolution", desc: "User queries, password resets, basic navigation, master data support, and logging incidents.", icon: ShieldCheck, accent: "border-slate-200" },
                { level: "L2 Support", title: "Functional Support", desc: "Functional issue resolution, transaction errors, minor system configuration adjustments, and user guidance.", icon: Settings, accent: "border-slate-200" },
                { level: "L3 Support", title: "Complex & Custom Support", desc: "Complex problem-solving, custom code debugging (ABAP), system enhancements, and integration diagnostics.", icon: Activity, accent: "border-brand-navy/20 bg-brand-navy/5" },
                { level: "L4 Support", title: "Strategic & Advisory Support", desc: "Strategic consulting, business process reengineering, major upgrades, and ecosystem integration.", icon: Zap, accent: "border-brand-terracotta/20 bg-brand-terracotta/5" },
              ].map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <FadeInSection key={item.level} delay={index * 0.1} className="relative z-10">
                    <div className={`flex flex-col sm:flex-row gap-6 p-6 rounded-[2rem] border bg-slate-50/50 hover:bg-white hover:shadow-xl hover:border-brand-navy/20 transition-all duration-300 ${item.accent}`}>
                      <div className="w-16 h-16 rounded-2xl bg-white border border-slate-100 flex items-center justify-center shrink-0 shadow-sm text-brand-navy">
                        <IconComponent className="h-7 w-7" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-[10px] font-black uppercase tracking-wider text-slate-400">Level {index + 1}</span>
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                          <span className="text-sm font-bold text-brand-terracotta">{item.level}</span>
                        </div>
                        <h4 className="text-lg font-bold text-slate-900 mb-2 font-display">{item.title}</h4>
                        <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-medium">{item.desc}</p>
                      </div>
                    </div>
                  </FadeInSection>
                );
              })}
            </div>

            {/* Right Side: Specialized Support Team (7 Cols) */}
            <div className="lg:col-span-7 space-y-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3 font-display">
                <Users className="text-brand-navy h-6 w-6" /> Specialized Support Team
              </h3>

              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { role: "SAP Functional Consultant", desc: "Acts as the first line of support for module operations. Investigate errors, guide users, and adjust module configurations.", icon: UserCheck, color: "from-brand-navy to-indigo-850" },
                  { role: "SAP Basis Team", desc: "Monitors overall system health, system performance, backups, user authorization groups, database loads, and technical concerns.", icon: Cpu, color: "from-brand-terracotta to-orange-600" },
                  { role: "Business Process Owners", desc: "Liaisons between day-to-day business users and SAP consultants to ensure requirements are aligned with standard processes.", icon: Briefcase, color: "from-emerald-600 to-teal-500" },
                  { role: "AMS Coordinator", desc: "Oversees ticket queues, schedules resources, ensures compliance with SLAs, and coordinates monthly reports.", icon: ClipboardCheck, color: "from-blue-600 to-indigo-500" },
                ].map((member, index) => {
                  const IconComponent = member.icon;
                  return (
                    <FadeInSection key={member.role} delay={index * 0.1}>
                      <div className="group relative rounded-[2.5rem] border border-slate-200 bg-slate-50/50 p-8 hover:bg-white hover:shadow-2xl hover:border-slate-300 transition-all duration-300 h-full flex flex-col justify-between overflow-hidden">
                        {/* Interactive colored top bar */}
                        <div className={`absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r ${member.color}`} />
                        <div>
                          <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6 border border-slate-100 group-hover:scale-105 transition-transform">
                            <IconComponent className="h-6 w-6 text-slate-700 group-hover:text-brand-navy transition-colors" />
                          </div>
                          <h4 className="text-lg font-bold text-slate-900 mb-3 font-display">{member.role}</h4>
                          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-medium">{member.desc}</p>
                        </div>
                        <div className="mt-8 pt-4 border-t border-slate-200/50 text-[10px] font-black uppercase tracking-widest text-slate-400 flex items-center justify-between">
                          <span>Specialist Pillar</span>
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                      </div>
                    </FadeInSection>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Incident & Change Management Process */}
      <section id="sap-workflows" className="py-24 bg-slate-50 border-t border-slate-200/50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-navy/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-terracotta/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-[1200px] mx-auto px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex rounded-full border border-brand-navy/15 bg-brand-navy/5 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-brand-navy mb-4">
              Workflow Process
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight">
              Incident Management & Change Request Lifecycle
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              We utilize standardized workflows to ensure transparency, security, and minimal impact on live production systems.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Column 1: Incident Management Workflow */}
            <FadeInSection>
              <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200/80">
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
                  <div className="p-2.5 bg-red-50 text-red-500 rounded-lg">
                    <Sliders className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 font-display">Incident Management Workflow</h3>
                    <p className="text-xs text-slate-400 font-semibold">Steps to resolve daily system anomalies</p>
                  </div>
                </div>

                <div className="space-y-6 relative">
                  {/* Growing glowing vertical timeline line */}
                  <motion.div
                    initial={{ height: 0 }}
                    whileInView={{ height: "calc(100% - 24px)" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: "easeInOut" }}
                    className="absolute left-5 top-5 w-0.5 bg-gradient-to-b from-brand-navy via-brand-terracotta to-slate-200 origin-top"
                  />

                  <motion.div
                    variants={workflowContainerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="space-y-6"
                  >
                    {[
                      { step: "01", title: "Issue Logging", desc: "Users raise a ticket via the AMS portal (e.g., UPWORK ticketing system or client-specific IT service portal)." },
                      { step: "02", title: "Issue Categorization", desc: "Tickets are prioritized based on business impact (Critical, High, Medium, Low) to guarantee response SLAs." },
                      { step: "03", title: "Analysis & Resolution", desc: "Assigned SAP consultant investigates module configuration, debugs errors, and deploys standard resolutions." },
                      { step: "04", title: "Testing & Validation", desc: "The solution is validated in testing environments, followed by end-user verification and approvals." },
                      { step: "05", title: "Closure & Documentation", desc: "Ticket is formally closed, and resolutions are logged in the knowledge base for future proactive support." }
                    ].map((item) => (
                      <motion.div
                        variants={workflowItemVariants}
                        key={item.step}
                        className="relative flex gap-4 group"
                      >
                        <div className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-200 bg-white text-slate-900 text-xs font-bold shrink-0 shadow-sm z-10 group-hover:bg-brand-navy group-hover:text-white group-hover:border-brand-navy transition-colors duration-300">
                          {item.step}
                        </div>
                        <div className="bg-slate-50/50 group-hover:bg-slate-50 p-4 rounded-2xl border border-slate-200/50 transition-colors duration-300 flex-1">
                          <h4 className="font-bold text-slate-900 text-sm mb-1 font-display">{item.title}</h4>
                          <p className="text-slate-500 text-xs leading-relaxed font-semibold">{item.desc}</p>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </div>
            </FadeInSection>

            {/* Column 2: Change Request Process */}
            <FadeInSection delay={0.2}>
              <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200/80">
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
                  <div className="p-2.5 bg-emerald-50 text-emerald-500 rounded-lg">
                    <Calendar className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 font-display">Change Request Process</h3>
                    <p className="text-xs text-slate-400 font-semibold">System enhancements & development lifecycle</p>
                  </div>
                </div>

                <div className="space-y-6 relative">
                  {/* Growing glowing vertical timeline line */}
                  <motion.div
                    initial={{ height: 0 }}
                    whileInView={{ height: "calc(100% - 24px)" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: "easeInOut", delay: 0.2 }}
                    className="absolute left-5 top-5 w-0.5 bg-gradient-to-b from-brand-terracotta via-orange-400 to-slate-200 origin-top"
                  />

                  <motion.div
                    variants={workflowContainerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="space-y-6"
                  >
                    {[
                      { step: "01", title: "Requirement Gathering", desc: "Business users submit detailed enhancement requests and workflow modifications to the AMS team." },
                      { step: "02", title: "Impact Assessment", desc: "Consultants evaluate system side-effects, module dependencies, master data configurations, and estimate efforts." },
                      { step: "03", title: "Approval & Scheduling", desc: "Proposed changes are reviewed by the Change Management Board (CMB) for approval, scheduling, and transport authorization." },
                      { step: "04", title: "Development & Testing", desc: "Enhancements are developed in DEV environment, transported to QA, and thoroughly tested before production deployment." },
                      { step: "05", title: "Deployment & Monitoring", desc: "Changes are deployed to the production environment during scheduled maintenance windows, with close monitoring." }
                    ].map((item) => (
                      <motion.div
                        variants={workflowItemVariants}
                        key={item.step}
                        className="relative flex gap-4 group"
                      >
                        <div className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-200 bg-white text-slate-900 text-xs font-bold shrink-0 shadow-sm z-10 group-hover:bg-brand-terracotta group-hover:text-white group-hover:border-brand-terracotta transition-colors duration-300">
                          {item.step}
                        </div>
                        <div className="bg-slate-50/50 group-hover:bg-slate-50 p-4 rounded-2xl border border-slate-200/50 transition-colors duration-300 flex-1">
                          <h4 className="font-bold text-slate-900 text-sm mb-1 font-display">{item.title}</h4>
                          <p className="text-slate-500 text-xs leading-relaxed font-semibold">{item.desc}</p>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Performance Monitoring & Reporting */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-[1200px] mx-auto px-8">

          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="inline-flex rounded-full border border-brand-terracotta/15 bg-brand-terracotta/5 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-brand-terracotta mb-4">
              Monitoring & Metrics
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight font-display">
              Key Performance Indicators & Monthly Reporting
            </h2>
            <p className="mt-4 text-lg text-slate-600 font-medium">
              Transparency is our priority. We monitor specific operational metrics and deliver comprehensive diagnostic reports monthly.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-10 items-stretch">
            {/* Left side: KPIs */}
            <div className="lg:col-span-7 bg-slate-50/70 border border-slate-200/80 rounded-[2.5rem] p-8 sm:p-10 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3 font-display">
                  <BarChart3 className="text-brand-navy h-6 w-6" /> Key Performance Indicators (KPIs)
                </h3>
                <div className="grid sm:grid-cols-2 gap-6">
                  {[
                    { title: "Incident Resolution Time", desc: "Strict adherence to agreed SLAs for ticket prioritization and closure timelines.", icon: ShieldCheck, iconBg: "bg-emerald-50 text-emerald-600 border-emerald-100" },
                    { title: "System Uptime", desc: "Ensuring 99.9% availability of the SAP environment through proactive monitoring.", icon: Activity, iconBg: "bg-blue-50 text-blue-600 border-blue-100" },
                    { title: "User Satisfaction", desc: "Regular feedback collection and surveys from business users to maintain service standards.", icon: HeartHandshake, iconBg: "bg-amber-50 text-amber-600 border-amber-100" },
                    { title: "Process Optimization Metrics", desc: "Continuous improvement metrics including reduction in order processing times and invoice accuracy.", icon: Zap, iconBg: "bg-purple-50 text-purple-600 border-purple-100" }
                  ].map((kpi, idx) => {
                    const IconComponent = kpi.icon;
                    return (
                      <div key={idx} className="bg-white border border-slate-200/60 p-6 rounded-2xl shadow-sm hover:shadow-md hover:border-brand-navy/15 transition-all duration-300 flex flex-col justify-between">
                        <div className={`w-10 h-10 rounded-xl ${kpi.iconBg} border flex items-center justify-center mb-4`}>
                          <IconComponent className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="font-bold text-slate-900 text-sm mb-2 font-display">{kpi.title}</h4>
                          <p className="text-slate-500 text-xs leading-relaxed font-semibold">{kpi.desc}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-slate-200 flex items-center justify-between text-xs font-semibold text-slate-400">
                <span>Continuous KPI Surveillance</span>
                <span className="flex items-center gap-2 text-emerald-500">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                  <span className="font-bold">Active Live</span>
                </span>
              </div>
            </div>

            {/* Right side: Monthly Reporting */}
            <div className="lg:col-span-5 bg-gradient-to-br from-brand-navy via-[#0B2545] to-[#134074] rounded-[2.5rem] p-8 sm:p-10 text-white relative overflow-hidden flex flex-col justify-between shadow-lg shadow-brand-navy/10">
              <div className="absolute top-0 right-0 w-80 h-80 bg-brand-terracotta/10 rounded-full blur-3xl pointer-events-none" />
              <div>
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3 relative z-10 font-display">
                  <FileText className="text-brand-terracotta h-6 w-6" /> Monthly Reporting
                </h3>
                <p className="text-slate-300 text-xs mb-8 relative z-10 leading-relaxed font-semibold">
                  Every month, the AMS Coordinator compiles and delivers key documents summarizing system health, ticket analysis, and training milestones.
                </p>
                <div className="space-y-4 relative z-10">
                  {[
                    { title: "Ticket Analysis Report", desc: "Detailed breakdown of incident counts, resolution speeds, and SLA metrics." },
                    { title: "Change Management Summary", desc: "Tracks change orders from requirement gathering to production deployment." },
                    { title: "User Training & Adoption Report", desc: "Summary of user training sessions, feedback scores, and system usage trends." }
                  ].map((doc, idx) => (
                    <div key={idx} className="flex gap-4 bg-white/5 border border-white/10 hover:bg-white/10 p-5 rounded-2xl backdrop-blur-sm transition-colors duration-300">
                      <CheckCircle2 className="h-5 w-5 text-brand-terracotta shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-bold text-white text-sm mb-1 font-display">{doc.title}</h4>
                        <p className="text-slate-300 text-xs leading-relaxed font-semibold">{doc.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-white/10 text-xs font-semibold text-white/40 flex items-center justify-between">
                <span>Monthly Diagnostics Delivery</span>
                <span className="text-brand-terracotta font-bold">Standard SLA</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Best Practices Section */}
      <section className="py-24 bg-slate-50 border-t border-slate-200/50">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex rounded-full border border-brand-terracotta/15 bg-brand-terracotta/5 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-brand-terracotta mb-4">
              Best Practices
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight">
              Recommended Practices for Long-Term SAP Health
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              We implement operational guidelines to guarantee security, accuracy, and efficiency across all SAP modules.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Data Integrity & Compliance", desc: "Regular audits to ensure data accuracy and standard compliance across all SAP modules.", icon: ShieldCheck },
              { title: "Continuous User Training", desc: "Periodic training sessions to improve user efficiency, decrease error rates, and support new workflow changes.", icon: GraduationCap },
              { title: "Automated Workflows", desc: "Implement SAP automation (workflows/RPAs) to reduce manual intervention, accelerate cycles, and improve transaction accuracy.", icon: Cpu },
              { title: "Ongoing Support", desc: "Provide comprehensive support for incident resolution and system enhancement requests.", icon: HeartHandshake }
            ].map((practice, idx) => (
              <FadeInSection key={practice.title} delay={idx * 0.1}>
                <div className="bg-white border border-slate-200 rounded-[2rem] p-6 h-full flex flex-col justify-between shadow-sm hover:shadow-lg hover:border-brand-terracotta/40 transition-all duration-300">
                  <div>
                    <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-brand-navy mb-6 border border-slate-100">
                      <practice.icon className="h-6 w-6 text-brand-navy" />
                    </div>
                    <h3 className="font-bold text-slate-900 text-base mb-3 font-display">{practice.title}</h3>
                    <p className="text-slate-600 text-xs leading-relaxed font-semibold">{practice.desc}</p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-slate-100 text-xs font-semibold text-slate-400">
                    Best Practice Recommendation
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA & Contact Details Section */}
      <section id="contact-ams" className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="relative rounded-[2.5rem] bg-brand-navy text-white p-8 sm:p-16 shadow-2xl overflow-hidden">
            {/* Background radial-gradient decoration */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_120%,_rgba(194,94,63,0.3),_transparent_45%),linear-gradient(135deg,_#0B2545_0%,_#051324_100%)] pointer-events-none" />
            <div className="absolute -right-20 -top-20 w-80 h-80 bg-white/5 blur-[80px] rounded-full pointer-events-none" />

            <div className="relative z-10 grid lg:grid-cols-12 gap-10 items-center">
              {/* Left Side: Text Details */}
              <div className="lg:col-span-7">
                <span className="inline-flex rounded-full bg-brand-terracotta/20 border border-brand-terracotta/35 px-4 py-1.5 text-xs font-black uppercase tracking-[0.2em] text-white mb-6">
                  Get Started
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold leading-tight text-white mb-6 font-display">
                  Partner with Softclinch for Structured SAP AMS
                </h2>
                <p className="text-slate-300 text-base leading-relaxed mb-6 font-semibold">
                  Softclinch Consulting Services Pvt Ltd ensures high-quality SAP support through its structured Application Management Support (AMS) framework, delivering consistent, reliable, and business-driven outcomes.
                </p>
                <div className="w-12 h-1 bg-brand-terracotta rounded-full mb-6" />
                <p className="text-slate-400 text-xs leading-relaxed font-semibold">
                  Contact us today for a free consultation or specific implementation queries regarding ECC or S/4HANA support models.
                </p>
              </div>

              {/* Right Side: Contact Cards */}
              <div className="lg:col-span-5 bg-white/5 border border-white/10 p-6 sm:p-8 rounded-3xl backdrop-blur-md shadow-lg">
                <h3 className="text-xl font-bold text-white mb-6 border-b border-white/10 pb-3 flex items-center gap-2 font-display">
                  <Award className="text-brand-terracotta h-5 w-5" /> Direct Contact Info
                </h3>

                <div className="space-y-6">
                  <div className="flex gap-4 items-start">
                    <div className="p-2.5 bg-white/10 rounded-xl text-white">
                      <Users className="h-5 w-5 text-brand-terracotta" />
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-400 uppercase tracking-widest font-black">Contact Person</p>
                      <p className="text-base font-bold text-white font-display">V UPPILI VENKATESAN</p>
                      <p className="text-xs text-slate-300 font-semibold">Director / AMS Operations Head</p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <a href="tel:+919840295102" className="p-2.5 bg-white/10 hover:bg-brand-terracotta/20 rounded-xl text-white transition-colors duration-200">
                      <Phone className="h-5 w-5 text-brand-terracotta" />
                    </a>
                    <div>
                      <p className="text-[10px] text-slate-400 uppercase tracking-widest font-black">Mobile</p>
                      <a href="tel:+919840295102" className="text-base font-bold text-white hover:text-brand-terracotta transition-colors duration-200 font-display">+91 98402 95102</a>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <a href="mailto:venkat@softclinch.com" className="p-2.5 bg-white/10 hover:bg-brand-terracotta/20 rounded-xl text-white transition-colors duration-200">
                      <Mail className="h-5 w-5 text-brand-terracotta" />
                    </a>
                    <div>
                      <p className="text-[10px] text-slate-400 uppercase tracking-widest font-black">Email Address</p>
                      <a href="mailto:venkat@softclinch.com" className="text-base font-bold text-white hover:text-brand-terracotta transition-colors duration-200 font-display">venkat@softclinch.com</a>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <a href="https://www.softclinch.com" target="_blank" rel="noopener noreferrer" className="p-2.5 bg-white/10 hover:bg-brand-terracotta/20 rounded-xl text-white transition-colors duration-200">
                      <Globe className="h-5 w-5 text-brand-terracotta" />
                    </a>
                    <div>
                      <p className="text-[10px] text-slate-400 uppercase tracking-widest font-black">Website</p>
                      <a href="https://www.softclinch.com" target="_blank" rel="noopener noreferrer" className="text-base font-bold text-white hover:text-brand-terracotta transition-colors duration-200 font-display">www.softclinch.com</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <FaqSection title="SAP AMS (Application Management Services) FAQs" items={sapAmsFaq} />

    </div>
  );
};
