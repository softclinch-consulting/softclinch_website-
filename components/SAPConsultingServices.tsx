"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import {
  Users,
  Target,
  Award,
  TrendingUp,
  AlertCircle,
  CheckCircle2,
  ArrowRight,
  ChevronRight,
  Globe,
  Database,
  Cpu,
  Zap,
  Building2,
  HeartHandshake,
  Sliders,
  ShieldCheck,
  FileText,
  Activity,
  Smile,
  GraduationCap,
  Phone,
  Mail
} from 'lucide-react';
import { assetPath } from "@/lib/asset";

// FadeInSection component for scroll-based animations
const FadeInSection = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, delay }}
  >
    {children}
  </motion.div>
);

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 120, damping: 18 }
  }
};

const floatVariants = (yOffset: number, duration: number): any => ({
  animate: {
    y: [0, yOffset, 0],
    transition: {
      duration,
      repeat: Infinity,
      repeatType: "reverse" as const,
      ease: "easeInOut"
    }
  }
});

const ClientLogos = () => {
  const clients = [
    { name: 'Prenora Investment Holding', logoPath: '/client-logos/sc-clients-001.jpg', bg: 'bg-white' },
    { name: 'Rane', logoPath: '/client-logos/sc-clients-002.jpg', bg: 'bg-white' },
    { name: 'NTT DATA', logoPath: '/client-logos/sc-clients-003.jpg', bg: 'bg-white' },
    { name: 'Fujitsu', logoPath: '/client-logos/sc-clients-004.jpg', bg: 'bg-white' },
    { name: 'Star Eltech', logoPath: '/client-logos/sc-clients-005.jpg', bg: 'bg-white' },
    { name: 'Client Logo 007', logoPath: '/client-logos/client-logo-007.jpeg', bg: 'bg-white' },
    { name: 'Client Logo 008', logoPath: '/client-logos/client-logo-008.jpeg', bg: 'bg-white' },
  ];

  return (
    <section className="pt-12 pb-16 bg-slate-50">
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-500 font-bold mb-4">Trusted by leading clients</p>
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-slate-900">Our Trusted Clients</h2>
          <p className="text-slate-600 max-w-2xl mx-auto mt-4">
            Organizations across enterprise technology, manufacturing, finance, and digital transformation rely on SoftClinch for secure, scalable delivery.
          </p>
        </div>

        <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white/80 py-5 shadow-sm">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-slate-50 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-slate-50 to-transparent" />
          <motion.div
            className="flex w-max gap-4"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 22, ease: 'linear', repeat: Infinity }}
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
};

export const SAPConsultingServices = () => {
  const [activePillar, setActivePillar] = useState(0);

  const servicePillars = [
    {
      num: "01",
      title: "SAP Business Process Optimization",
      desc: "Identifying inefficiencies in existing SAP workflows, implementing automation and best practices, enhancing order-to-cash and procure-to-pay cycles, and driving real-time analytics and reporting improvements.",
      subTitle: "Optimization Focus",
      bullets: [
        "Identifying inefficiencies in existing SAP workflows",
        "Implementing automation and best practices",
        "Enhancing order-to-cash and procure-to-pay cycles",
        "Real-time analytics and reporting improvements"
      ],
      icon: Sliders,
      theme: "border-brand-navy/35 bg-brand-navy/5 text-brand-navy"
    },
    {
      num: "02",
      title: "SAP Integration Services",
      desc: "Connecting SAP with third-party applications, designing API-based integrations and middleware solutions, enhancing collaboration between ERP and CRM, and ensuring data consistency across enterprise systems.",
      subTitle: "Integration Focus",
      bullets: [
        "Connecting SAP with third-party applications",
        "API-based integrations and middleware solutions",
        "Enhancing collaboration between ERP and CRM",
        "Ensuring data consistency across enterprise systems"
      ],
      icon: Cpu,
      theme: "border-indigo-500/35 bg-indigo-500/5 text-indigo-600"
    },
    {
      num: "03",
      title: "Industry-Specific SAP Solutions",
      desc: "Delivering tailored SAP solutions for manufacturing, retail, healthcare, and more. Our compliance-driven implementations feature advanced reporting and analytics tailored to industry-specific needs.",
      subTitle: "Industry Solutions Focus",
      bullets: [
        "Tailored solutions for manufacturing, retail, healthcare, and more",
        "Compliance-driven implementations",
        "Advanced reporting and analytics for industry-specific needs",
        "Sector-specific module configurations"
      ],
      icon: Building2,
      theme: "border-amber-500/35 bg-amber-500/5 text-amber-600"
    },
    {
      num: "04",
      title: "SAP Key Performance Indicators (KPIs)",
      desc: "Focusing on quantifiable metrics to drive project success. We measure incident resolution time, guarantee high system uptime, gather user satisfaction feedback, and track key process optimization metrics.",
      subTitle: "KPI Focus",
      bullets: [
        "Incident Resolution Time: SLA adherence for ticket closure",
        "System Uptime: Ensuring 99.9% availability",
        "User Satisfaction: Regular feedback from business users",
        "Process Optimization Metrics: Reduction in order processing time, invoice accuracy"
      ],
      icon: Target,
      theme: "border-emerald-500/35 bg-emerald-500/5 text-emerald-600"
    }
  ];

  const implementations = [
    {
      title: "S4HANA Implementation",
      duration: "OCT 2024 to Dec 2024",
      role: "SAP SD and IS Retail consultant",
      client: "Jeyachandran Industries"
    },
    {
      title: "S4HANA Implementation",
      duration: "Dec 2022 to July 2023",
      role: "SAP SD Lead Consultant",
      client: "NTT Data"
    },
    {
      title: "ECC 6.0 Rollout Nigeria",
      duration: "April 2024 to Sep 2024",
      role: "SAP SD Lead Consultant",
      client: "EME FZE Dubai"
    },
    {
      title: "ECC 6.0 Rollout Nigeria",
      duration: "Oct 2016 to Feb 2017",
      role: "SAP SD Consultant",
      client: "Eltech Electromechanical Engineering"
    },
    {
      title: "S/4 Hana Implementation",
      duration: "August 2023 to Mar 2024",
      role: "SAP SD Lead Consultant",
      client: "SEMIPL"
    },
    {
      title: "SAP SD & Logistics Custom Integration",
      duration: "June 2020 to May 2021",
      role: "SAP Solution Architect & Lead",
      client: "Rane TRW Automotive & TVS"
    },
  
  ];

  const caseStudies = [
    {
      title: "Manufacturing Company SAP Implementation",
      subtitle: "Industry-Specific SAP Solutions",
      client: "Star Eltech Manufacturing India Pvt Ltd",
      badge: "SAP Implementation & Support",
      bullets: [
        "Tailored solutions for manufacturing, retail, healthcare, and more",
        "Compliance-driven implementations",
        "Advanced reporting and analytics for industry-specific needs",
        "Sector-specific module configurations"
      ],
      challenge: "Inefficient inventory management and process bottlenecks.",
      solution: "Implemented SAP ERP for real-time inventory tracking, financial automation, and supply chain optimization.",
      result: "Increased operational efficiency by 30%, enhanced reporting, and seamless process integration."
    },
    {
      title: "Reliable SAP AMS Support for Business Continuity",
      subtitle: "SAP Application Management Services (AMS)",
      subtitleDesc: "Our SAP AMS (Application Management Services) ensures seamless performance, issue resolution, and continuous system improvements for businesses across manufacturing and service industries.",
      client: "Eltech Appliances - ETA Group",
      badge: "SAP Application Management Services (AMS)",
      bullets: [
        "Ensure seamless SAP module operations.",
        "Provide ongoing support for incident resolution and enhancement requests.",
        "Optimize business processes and workflows.",
        "Proactive system health monitoring and SLA adherence."
      ],
      challenge: "Frequent SAP downtimes affecting production and service delivery.",
      solution: "Implemented a proactive monitoring system with regular performance tuning and security enhancements.",
      result: "99.9% system uptime, faster response times, and improved business operations."
    }
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans overflow-hidden">

      {/* Hero Section */}
      <section className="relative bg-white pt-20 pb-8 lg:pt-24 lg:pb-12 border-b border-slate-100 overflow-hidden">
        {/* Animated Background Glowing Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            x: [0, 30, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-20 -left-20 w-96 h-96 bg-brand-navy/10 rounded-full blur-[100px] pointer-events-none"
        />
        <motion.div
          animate={{
            scale: [1.15, 1, 1.15],
            x: [0, -30, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-20 -right-20 w-96 h-96 bg-brand-terracotta/10 rounded-full blur-[100px] pointer-events-none"
        />

        <div className="max-w-[1200px] mx-auto px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">

            {/* Left Content Column */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="lg:col-span-7 space-y-6"
            >
              <motion.span
                variants={itemVariants}
                className="inline-flex rounded-full border border-brand-navy/15 bg-brand-navy/5 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-brand-navy"
              >
                Corporate Portfolio
              </motion.span>

              <motion.h1
                variants={itemVariants}
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-brand-navy leading-[1.12] font-display"
              >
                SAP Consulting <br />
                <span className="text-brand-terracotta">
                  Implementation & Rollout
                </span>
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="text-lg text-slate-600 leading-relaxed font-semibold"
              >
                Maximize the value of your SAP investments. We deliver end-to-end implementation, rollout, and optimization services tailored for enterprise growth.
              </motion.p>

              {/* Quick Module Tags */}
              <motion.div
                variants={itemVariants}
                className="flex flex-wrap gap-2 pt-1"
              >
                {['S/4HANA', 'ABAP & Fiori', 'AMS Support', 'Rollout Services', 'ERP Migrations'].map((tag) => (
                  <span
                    key={tag}
                    className="bg-slate-50 border border-slate-200/60 hover:border-brand-navy/35 hover:bg-white text-slate-600 hover:text-brand-navy text-[11px] font-bold px-3 py-1 rounded-full transition-colors cursor-default"
                  >
                    {tag}
                  </span>
                ))}
              </motion.div>

              {/* Introduction Box (Gratitude note) */}
              <motion.div
                variants={itemVariants}
                className="bg-slate-50/70 border border-slate-200/60 p-6 rounded-2xl relative overflow-hidden backdrop-blur-sm"
              >
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-brand-terracotta" />
                <div className="absolute top-3 right-4 text-brand-terracotta/20 text-4xl font-serif pointer-events-none select-none">&ldquo;</div>
                <p className="text-slate-600 text-sm leading-relaxed italic font-semibold pr-4">
                  &ldquo;We are so grateful that you have taken the time to consider partnering with SoftClinch to serve you. While we are proud of our work and the results we will help you achieve… it is the relationships we build that will endure. We look forward to working closely with you and your team.&rdquo;
                </p>
              </motion.div>

              {/* Action Buttons */}
              <motion.div
                variants={itemVariants}
                className="flex flex-wrap gap-4 pt-2"
              >
                <a
                  href="#services-pillars"
                  className="bg-brand-navy text-white hover:bg-[#081b33] px-6 py-3 rounded-full font-bold text-sm transition-all shadow-md shadow-brand-navy/15 flex items-center gap-2 group"
                >
                  Explore Services
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  href="#contact-consultation"
                  className="bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 px-6 py-3 rounded-full font-bold text-sm transition-all"
                >
                  Get In Touch
                </a>
              </motion.div>
            </motion.div>

            {/* Right Graphic Column (Cover Illustration Design) */}
            <div className="lg:col-span-5 relative mt-10 lg:mt-0">

              {/* Radial Blur Backdrop */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-brand-terracotta/10 to-brand-navy/10 rounded-[3rem] blur-2xl opacity-75" />

              {/* Primary Graphic Container with FULL Cover Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, type: "spring" }}
                className="relative w-full h-[400px] rounded-[2.5rem] border border-slate-200/50 shadow-2xl overflow-hidden bg-slate-900 flex items-center justify-center"
              >
                <img
                  src={assetPath("/sap_consulting_hero_v2.png")}
                  alt="SAP Consulting Services"
                  className="absolute inset-0 w-full h-full object-cover z-10"
                />

                {/* Visual Glassmorphic gradient overlay on top of the image to keep text on floating cards readable */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-slate-900/10 to-transparent z-15" />
              </motion.div>

              {/* FLOATING CARD 1: SAP S/4HANA */}
              <motion.div
                variants={floatVariants(-12, 4.5)}
                animate="animate"
                className="absolute -top-6 -left-6 z-20 bg-white/95 backdrop-blur-md border border-slate-200/60 p-4 rounded-2xl shadow-xl flex items-center gap-3"
              >
                <div className="w-9 h-9 rounded-xl bg-brand-navy/10 flex items-center justify-center text-brand-navy">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-black uppercase text-brand-terracotta tracking-wider">PLATFORM</div>
                  <div className="text-xs font-bold text-slate-900">SAP S/4HANA Ready</div>
                </div>
              </motion.div>

              {/* FLOATING CARD 2: Efficiency Metric */}
              <motion.div
                variants={floatVariants(12, 5)}
                animate="animate"
                className="absolute -bottom-6 -right-6 z-20 bg-white/95 backdrop-blur-md border border-slate-200/60 p-4 rounded-2xl shadow-xl flex items-center gap-3"
              >
                <div className="w-9 h-9 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-600">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-black uppercase text-emerald-600 tracking-wider">RESULT</div>
                  <div className="text-xs font-bold text-slate-900">+30% Efficiency Gain</div>
                </div>
              </motion.div>

              {/* FLOATING CARD 3: AMS Support status */}
              <motion.div
                variants={floatVariants(-8, 3.8)}
                animate="animate"
                className="absolute top-1/2 -right-8 z-20 bg-white/95 backdrop-blur-md border border-slate-200/60 px-4 py-2.5 rounded-xl shadow-lg flex items-center gap-2"
              >
                <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse" />
                <span className="text-[10px] font-bold text-slate-700">Dedicated AMS Live</span>
              </motion.div>

            </div>
          </div>
        </div>
      </section>

      <ClientLogos />

      {/* Promise & Leadership Profile Section */}
      <section className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-8 space-y-16">
          
          {/* Our Promise (Manifesto / Mission) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ type: "spring", stiffness: 80, damping: 15 }}
            whileHover={{ scale: 1.02 }}
            className="bg-slate-50 border border-slate-200 rounded-[2.5rem] p-8 sm:p-12 relative overflow-hidden shadow-sm cursor-default"
          >
            <motion.div 
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.8, 0.5]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute top-0 right-0 w-64 h-64 bg-brand-navy/5 rounded-full blur-[80px] pointer-events-none" 
            />
            <div className="relative z-10 max-w-4xl space-y-4">
              <span className="inline-flex rounded-full border border-brand-terracotta/15 bg-brand-terracotta/5 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-brand-terracotta">
                Our Promise
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display">
                We Ensure What We Assure
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-semibold">
                To make our client&apos;s business successful and to create strategy that matters and drive the culture to execute it with profit margin and to set new benchmarks in standards of corporate performance.
              </p>
            </div>
          </motion.div>

          {/* Founder Profile Card */}
          <div className="bg-slate-900 text-white rounded-[2.5rem] p-8 sm:p-12 shadow-2xl relative overflow-hidden border border-white/10">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-terracotta/10 rounded-full blur-[100px] pointer-events-none" />
            
            <div className="grid lg:grid-cols-12 gap-8 items-start relative z-10">
              {/* Profile Pic & Title Info */}
              <div className="lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left">
                <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-2xl bg-gradient-to-br from-brand-terracotta to-orange-500 flex items-center justify-center text-white text-3xl sm:text-4xl font-extrabold font-display shadow-lg shadow-black/30 mb-6 border border-white/20">
                  UV
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-white font-display">V UPPILI VENKATESAN</h3>
                <p className="text-brand-terracotta text-xs font-bold uppercase tracking-wider mt-1">Founder and Director Technical</p>
                <p className="text-slate-400 text-xs mt-3 leading-relaxed">
                  Over 25 years of IT experience across Manufacturing, Retail, FMCG, and Automotive sectors, with 20+ years specializing in SAP solutions.
                </p>
              </div>

              {/* Right Side: Bio & Lists */}
              <div className="lg:col-span-8 space-y-6">
                <div className="bg-white/5 border border-white/10 p-5 rounded-2xl">
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                    V. Uppili Venkatesan is an accomplished IT professional with over 25 years of experience across multiple industries, including Manufacturing, Retail Chain, Garments, Automobiles, and FMCG. With more than 20 years of expertise in SAP, he has successfully led SAP implementations, rollouts, and production support for various organizations. His extensive industry exposure and strategic approach to SAP solutions have positioned him as a leading SAP SD Functional Consultant, Project Manager, and Solution Architect.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-6 pt-2">
                  {/* Core Expertise */}
                  <div className="space-y-3">
                    <h4 className="text-xs font-black uppercase text-brand-terracotta tracking-wider">Core Expertise</h4>
                    <ul className="space-y-2 text-xs text-slate-300 font-semibold">
                      {[
                        "SAP SD Functional Consultant",
                        "SAP Project Management",
                        "SAP Solution Architecture",
                        "SAP Logistics Execution",
                        "SAP IS-Retail Implementation",
                        "SAP Rollouts & Production Support",
                        "Integration with Various CRM Applications",
                        "Agile & ASAP Methodologies"
                      ].map((exp, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-terracotta" />
                          {exp}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Industrial Experience */}
                  <div className="space-y-3">
                    <h4 className="text-xs font-black uppercase text-brand-terracotta tracking-wider">Industrial Experience</h4>
                    <ul className="space-y-3 text-xs text-slate-300 font-semibold">
                      {[
                        { area: "Manufacturing", clients: "Star Eltech Manufacturing India Pvt Ltd" },
                        { area: "Automotive", clients: "Rane TRW, TVS" },
                        { area: "Consumer Durables", clients: "ETA General, Eltech Appliances, Fujitsu" },
                        { area: "Garments", clients: "Bharat Tex Fashions Limited" },
                        { area: "Warehousing", clients: "FZ Rane, Freight Expedite Logistics" }
                      ].map((item, i) => (
                        <li key={i} className="leading-normal">
                          <strong className="text-white block font-bold">{item.area}:</strong>
                          <span className="text-slate-400">{item.clients}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Service Pillars Section - Overhauled to Grid Cards Layout */}
      <section id="services-pillars" className="py-24 bg-slate-50 relative overflow-hidden">
        {/* Decorative background gradients */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-navy/[0.02] blur-[150px] rounded-full pointer-events-none" />

        <div className="max-w-[1200px] mx-auto px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex rounded-full border border-brand-navy/15 bg-brand-navy/5 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-brand-navy mb-4">
              Our Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight font-display">
              Our SAP Consulting Services
            </h2>
            <p className="mt-4 text-slate-600 text-sm sm:text-base font-semibold">
              We align technical architectures with operational efficiency goals through structured service pillars.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {servicePillars.map((pillar, idx) => {
              const IconComponent = pillar.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  whileHover={{ y: -6, scale: 1.01 }}
                  className="bg-white border border-slate-200/80 rounded-[2.5rem] p-8 sm:p-10 shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden flex flex-col justify-between"
                >
                  {/* Large background watermark number */}
                  <div className="absolute right-8 top-4 text-8xl font-black text-slate-100/60 select-none pointer-events-none font-display">
                    {pillar.num}
                  </div>

                  <div className="relative z-10 space-y-6">
                    {/* Header bar */}
                    <div className="flex items-center gap-4">
                      <div className={`w-14 h-14 rounded-2xl border flex items-center justify-center ${pillar.theme}`}>
                        <IconComponent className="h-7 w-7" />
                      </div>
                      <div>
                        <span className="text-[10px] font-black uppercase text-brand-terracotta tracking-widest">
                          Pillar {pillar.num}
                        </span>
                        <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 font-display mt-0.5">
                          {pillar.title}
                        </h3>
                      </div>
                    </div>

                    {/* Description text */}
                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-semibold">
                      {pillar.desc}
                    </p>

                    {/* Bullet capabilities box */}
                    <div className="pt-6 border-t border-slate-100">
                      <h4 className="text-xs font-black uppercase text-slate-800 tracking-wider mb-4">
                        {pillar.subTitle}
                      </h4>
                      <ul className="grid gap-3 text-xs font-bold text-slate-500">
                        {pillar.bullets.map((bullet, bIdx) => (
                          <li key={bIdx} className="flex gap-2.5 items-start bg-slate-50 hover:bg-slate-100/60 p-3 rounded-xl border border-slate-100 transition-colors">
                            <CheckCircle2 className="h-4 w-4 text-brand-terracotta shrink-0 mt-0.5" />
                            <span className="leading-snug text-slate-600">{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Operational Footer Commitment */}
                  <div className="relative z-10 mt-8 pt-6 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-400">
                    <span className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                      Active SLA Monitoring
                    </span>
                    <span className="text-brand-navy">SoftClinch Corporate Standard</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-brand-navy/5 text-brand-navy text-xs font-bold uppercase tracking-widest mb-4">
              Proven Partners
            </span>
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-slate-900">
              Why Choose SoftClinch for SAP Consulting?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Proven Expertise",
                desc: "Extensive experience in diverse industry verticals, providing tailored strategies for complex architectures."
              },
              {
                title: "Client-Centric Approach",
                desc: "Custom strategies designed specifically around your business goals and operational needs."
              },
              {
                title: "Certified SAP Consultants",
                desc: "Experts in SAP SD, MM, FI/CO, and other key functional modules to drive robust configurations."
              },
              {
                title: "End-to-End Support",
                desc: "From initial assessment and solution strategy to execution, deployment, rollouts, and ongoing AMS."
              },
              {
                title: "Innovation-Driven",
                desc: "Leveraging cloud capabilities, AI automation, and advanced tools to enhance standard SAP functions."
              },
              {
                title: "S/4HANA Transition Mastery",
                desc: "Strategic roadmaps and execution frameworks for migrating legacy SAP ECC systems to S/4HANA, ensuring secure and seamless data transitions."
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-slate-50 p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <CheckCircle2 className="text-brand-terracotta mb-4 h-6 w-6" />
                <h4 className="font-bold text-slate-900 text-lg mb-2 font-display">{item.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SAP Implementations Section */}
      <section className="py-24 bg-slate-50 border-t border-b border-slate-200/60">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-brand-navy/5 text-brand-navy text-xs font-bold uppercase tracking-widest mb-4">
              Our Record
            </span>
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-slate-900">
              SAP Consulting Implementations
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto mt-4 text-sm font-semibold">
              A track record of successful S/4HANA implementations and ECC rollouts across major corporate clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {implementations.map((item, idx) => (
              <div key={idx} className="bg-white border border-slate-200 p-8 rounded-3xl shadow-sm hover:shadow-lg transition-all relative overflow-hidden group">
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-brand-navy to-brand-terracotta" />
                <span className="inline-flex rounded-full bg-brand-navy/5 text-brand-navy text-[10px] font-black uppercase tracking-wider px-3 py-1 mb-4 border border-brand-navy/10">
                  {item.duration}
                </span>
                <h3 className="text-xl font-bold text-slate-900 font-display mb-2">{item.title}</h3>
                <div className="space-y-2 mt-4 text-xs font-semibold text-slate-600">
                  <p><strong className="text-slate-800">Client:</strong> {item.client}</p>
                  <p><strong className="text-slate-800">Role:</strong> {item.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-brand-terracotta/5 text-brand-terracotta text-xs font-bold uppercase tracking-widest mb-4">
              Success Stories
            </span>
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-slate-900 mb-6">
              Client Case Study
            </h2>
            <p className="text-slate-600 max-w-3xl mx-auto text-sm leading-relaxed font-semibold">
              Softclinch Consulting Services Pvt Ltd specializes in SAP Consulting and Support, offering comprehensive solutions that streamline business operations and drive digital transformation. Our expertise spans across SAP implementations, upgrades, and ongoing support, ensuring clients maximize the value of their SAP investments.
            </p>
          </div>

          <div className="space-y-16">
            {caseStudies.map((cs, idx) => (
              <div key={idx} className="bg-slate-50 border border-slate-200/80 rounded-[2.5rem] p-8 sm:p-12 shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden">
                {/* Visual bar top indicator */}
                <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-brand-navy to-brand-terracotta" />
                
                <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                  
                  {/* Left Column: Context & Specifications */}
                  <div className="lg:col-span-5 space-y-6">
                    <div className="flex flex-wrap gap-2 items-center">
                      <span className="bg-brand-navy text-white text-[9px] font-black uppercase tracking-wider px-3.5 py-1.5 rounded-full">
                        {cs.badge}
                      </span>
                    </div>

                    <div>
                      <span className="text-[10px] font-black uppercase text-brand-terracotta tracking-widest">
                        {cs.client}
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950 font-display tracking-tight leading-tight mt-1">
                        {cs.title}
                      </h3>
                    </div>

                    <div className="p-6 bg-white border border-slate-200/60 rounded-2xl space-y-4 shadow-sm">
                      <h4 className="text-xs font-black uppercase text-slate-800 tracking-wider">
                        {cs.subtitle}
                      </h4>
                      {cs.subtitleDesc && (
                        <p className="text-xs text-slate-500 leading-relaxed font-semibold">
                          {cs.subtitleDesc}
                        </p>
                      )}
                      <ul className="space-y-2.5 text-xs font-bold text-slate-600">
                        {cs.bullets.map((bullet, bIdx) => (
                          <li key={bIdx} className="flex gap-2.5 items-start">
                            <CheckCircle2 className="h-4 w-4 text-brand-terracotta shrink-0 mt-0.5" />
                            <span className="leading-normal">{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Right Column: Process & Metrics */}
                  <div className="lg:col-span-7 space-y-6">
                    {/* Challenge */}
                    <div className="bg-rose-50/70 border border-rose-100 p-6 rounded-2xl flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-500 shrink-0">
                        <AlertCircle className="h-5 w-5" />
                      </div>
                      <div className="space-y-1">
                        <span className="text-[9px] font-extrabold uppercase tracking-widest text-rose-500">Challenge</span>
                        <p className="text-slate-700 text-xs sm:text-sm font-semibold leading-relaxed">
                          {cs.challenge}
                        </p>
                      </div>
                    </div>

                    {/* Solution */}
                    <div className="bg-sky-50/70 border border-sky-100 p-6 rounded-2xl flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-500 shrink-0">
                        <Cpu className="h-5 w-5" />
                      </div>
                      <div className="space-y-1">
                        <span className="text-[9px] font-extrabold uppercase tracking-widest text-sky-500">Solution</span>
                        <p className="text-slate-700 text-xs sm:text-sm font-semibold leading-relaxed">
                          {cs.solution}
                        </p>
                      </div>
                    </div>

                    {/* Result */}
                    <div className="bg-emerald-50/70 border border-emerald-100 p-6 rounded-2xl flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-600 shrink-0">
                        <TrendingUp className="h-5 w-5" />
                      </div>
                      <div className="space-y-1">
                        <span className="text-[9px] font-extrabold uppercase tracking-widest text-emerald-600">Result</span>
                        <p className="text-slate-800 text-xs sm:text-sm font-bold leading-relaxed">
                          {cs.result}
                        </p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / Contact Section */}
      <section id="contact-consultation" className="py-24 bg-slate-50 relative overflow-hidden">
        {/* Soft background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-navy/[0.02] rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="relative rounded-[3rem] bg-gradient-to-br from-brand-terracotta via-[#b25032] to-[#8d3a1f] text-white p-8 sm:p-16 shadow-2xl overflow-hidden border border-brand-terracotta/25">
            {/* Background glowing gradients */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_120%,_rgba(11,37,69,0.3),_transparent_55%)] pointer-events-none" />
            <div className="absolute -right-20 -top-20 w-96 h-96 bg-white/[0.05] rounded-full blur-[100px] pointer-events-none" />

            <div className="grid lg:grid-cols-12 gap-12 items-center relative z-10">

              {/* Left Column - Information */}
              <div className="lg:col-span-7 space-y-6">
                <span className="inline-flex rounded-full border border-white/30 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-white">
                  Scale Your Systems
                </span>
                <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-display leading-tight tracking-tight text-white">
                  Transform Your <br className="hidden sm:inline" />
                  Architecture Today
                </h2>
                <p className="text-orange-50 text-sm sm:text-base leading-relaxed font-semibold max-w-xl">
                  Ready to optimize your business operations and leverage our expert SAP consultants? Let&apos;s build scalable, future-ready solutions together.
                </p>

                {/* Micro checklist of benefits */}
                <ul className="space-y-3 text-xs font-bold text-orange-100/90 pt-2">
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-white" />
                    Direct consultation with SAP Technical Architect
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-white" />
                    Zero-obligation architecture & performance audit
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-white" />
                    Tailored implementation Roadmap & SLA terms
                  </li>
                </ul>

                <div className="flex flex-wrap gap-4 pt-4">
                  <Link
                    href="/contact"
                    className="bg-white text-brand-navy hover:bg-orange-50 px-8 py-3.5 rounded-full font-bold text-sm transition-all shadow-lg shadow-black/10 flex items-center gap-2 group"
                  >
                    Get Started Now <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <a
                    href="mailto:support@softclinch.com"
                    className="bg-white/15 hover:bg-white/25 text-white border border-white/20 px-8 py-3.5 rounded-full font-bold text-sm transition-all flex items-center gap-2"
                  >
                    Email Support
                  </a>
                </div>
              </div>

              {/* Right Column - Glassmorphic Contact Card */}
              <div className="lg:col-span-5 w-full flex justify-center">
                <div className="w-full max-w-[360px] bg-black/20 border border-white/15 backdrop-blur-md rounded-3xl p-6 sm:p-8 relative overflow-hidden group shadow-2xl hover:border-white/35 transition-all duration-300">
                  <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/10 rounded-full blur-2xl pointer-events-none" />

                  {/* Status Indicator */}
                  <div className="flex justify-between items-center mb-6">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/35 text-emerald-300 text-[10px] font-black tracking-wider uppercase">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Online Now
                    </span>
                    <span className="text-white/35 text-xs font-black select-none">SAP HEAD</span>
                  </div>

                  {/* Profile Layout */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-full bg-brand-navy flex items-center justify-center text-white text-lg font-black font-display shadow-lg shadow-black/20">
                        UV
                      </div>
                      <div>
                        <h4 className="text-white font-extrabold text-sm sm:text-base">V UPPILI VENKATESAN</h4>
                        <p className="text-orange-200 text-xs font-bold">Director Technical & SAP Lead</p>
                      </div>
                    </div>

                    <p className="text-orange-50 text-xs leading-relaxed font-semibold">
                      &ldquo;Speak directly with our technical leadership to coordinate your migration plans, module customizations, and rollout schedules.&rdquo;
                    </p>

                    <Link
                      href="/contact"
                      className="w-full py-3 bg-white text-brand-navy hover:bg-orange-50 rounded-2xl font-bold text-xs transition-all duration-300 flex items-center justify-center gap-2 border border-white/15"
                    >
                      Connect Direct <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
