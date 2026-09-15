"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  ChevronRight,
  Cloud,
  Database,
  Factory,
  LayoutDashboard,
  Link2,
  Route,
  Search,
  ShieldCheck,
  Smartphone,
  Stethoscope,
} from "lucide-react";
import { FaqSection } from "@/components/FaqSection";
import { ServiceMediaPanel } from "@/components/ServiceMediaPanel";
import { ServiceStatStrip } from "@/components/ServiceStatStrip";
import {
  aiPoweredBusinessSystemsFaq,
  aiPoweredBusinessSystemsSeo,
} from "@/lib/aiPoweredBusinessSystemsSeo";

const trustMetrics = [
  { value: "10+ Years", label: "Enterprise Engineering Expertise" },
  { value: "150+ Projects", label: "Successfully Delivered" },
  { value: "99.9% SLA", label: "Enterprise Uptime Reliability" },
];

const enterpriseChallenges = [
  "Limited customization and vendor lock-in",
  "Software that forces teams to change workflows",
  "High recurring licensing costs",
  "Poor integration between systems",
  "Security and compliance risks",
  "Performance issues at scale",
  "Slow business operations and manual processes",
  "Difficult scalability for growing enterprises",
];

const enterpriseBenefits = [
  "Built specifically for your business workflows",
  "Fully scalable cloud-native architecture",
  "Seamless integration with ERP, CRM, and third-party systems",
  "Enterprise-grade security and compliance",
  "Faster operational efficiency and automation",
  "Lower long-term operational costs",
  "Better user adoption and productivity",
  "Future-ready infrastructure for business growth",
];

const services = [
  {
    title: "SaaS Platform Development",
    subtitle:
      "Build scalable SaaS applications with multi-tenant architecture, subscription billing, analytics dashboards, and enterprise-grade infrastructure.",
    features: [
      "Multi-tenant SaaS architecture",
      "Subscription billing systems",
      "User roles & permissions",
      "Usage analytics & reporting",
      "API-first infrastructure",
      "Scalable cloud deployment",
    ],
    cta: "Start your SaaS platform",
    href: "/custom-application-development",
    icon: Database,
  },
  {
    title: "Enterprise Web Applications",
    subtitle:
      "Custom enterprise portals, admin dashboards, workflow automation systems, and real-time business applications.",
    features: [
      "Real-time dashboards",
      "Workflow automation",
      "Business intelligence reporting",
      "Secure access management",
      "Responsive enterprise UI/UX",
      "High-performance architecture",
    ],
    cta: "Build your enterprise web application",
    href: "/custom-application-development",
    icon: LayoutDashboard,
  },
  {
    title: "Cloud-Native Application Development",
    subtitle:
      "Scalable applications deployed on AWS, Azure, and Google Cloud using modern microservices architecture.",
    features: [
      "Microservices architecture",
      "Kubernetes & Docker deployment",
      "Auto-scaling infrastructure",
      "CI/CD automation",
      "Disaster recovery systems",
      "Enterprise cloud security",
    ],
    cta: "Launch your cloud-native solution",
    href: "/custom-application-development",
    icon: Cloud,
  },
  {
    title: "API Development & System Integration",
    subtitle:
      "Secure integration between ERP systems, CRMs, payment gateways, analytics platforms, and enterprise software ecosystems.",
    features: [
      "REST & GraphQL APIs",
      "Real-time synchronization",
      "Webhook automation",
      "ERP & CRM integration",
      "Legacy system modernization",
      "Secure API authentication",
    ],
    cta: "Integrate your enterprise systems",
    href: "/custom-application-development",
    icon: Link2,
  },
  {
    title: "Progressive Web Applications (PWA)",
    subtitle:
      "Fast, installable web applications delivering app-like experiences across desktop and mobile devices.",
    features: [
      "Offline functionality",
      "Push notifications",
      "Native-like performance",
      "SEO-friendly architecture",
      "Cross-device compatibility",
      "Lightning-fast loading",
    ],
    cta: "Develop your PWA experience",
    href: "/custom-application-development",
    icon: Search,
  },
  {
    title: "Enterprise Mobile Applications",
    subtitle:
      "Custom iOS and Android enterprise applications integrated with backend systems and cloud infrastructure.",
    features: [
      "Native & cross-platform development",
      "Secure enterprise authentication",
      "Offline-first experience",
      "Push notifications",
      "Cloud synchronization",
      "Enterprise mobility solutions",
    ],
    cta: "Build your mobile enterprise app",
    href: "/custom-application-development",
    icon: Smartphone,
  },
];

const industries = [
  {
    name: "Healthcare & Life Sciences",
    icon: Stethoscope,
    challenges: [
      "Secure patient data",
      "Regulatory compliance",
      "Clinical workflow automation",
      "Medical device integration",
      "Real-time healthcare monitoring",
    ],
  },
  {
    name: "Finance & Banking",
    icon: Building2,
    challenges: [
      "PCI-DSS compliance",
      "Transaction security",
      "Fraud prevention",
      "Real-time reconciliation",
      "Audit trail management",
    ],
  },
  {
    name: "Manufacturing & Supply Chain",
    icon: Factory,
    challenges: [
      "Inventory visibility",
      "Production planning",
      "Demand forecasting",
      "Vendor management",
      "Operational automation",
    ],
  },
  {
    name: "Enterprise Services",
    icon: ShieldCheck,
    challenges: [
      "Workflow automation",
      "Team collaboration",
      "Business reporting",
      "Resource optimization",
      "Performance tracking",
    ],
  },
  {
    name: "Retail & E-commerce",
    icon: Link2,
    challenges: [
      "Real-time inventory sync",
      "Mobile commerce optimization",
      "Customer personalization",
      "Fraud prevention",
      "Order automation",
    ],
  },
  {
    name: "Hospitality & Travel",
    icon: Route,
    challenges: [
      "Dynamic pricing",
      "Reservation management",
      "Multi-property operations",
      "Guest communication",
      "Revenue optimization",
    ],
  },
];

const processSteps = [
  {
    title: "Discovery & Consultation",
    description:
      "Business analysis, workflow understanding, requirement gathering, and technical planning.",
  },
  {
    title: "Architecture & UX Design",
    description:
      "System architecture, UI/UX design, infrastructure planning, database schema, and API strategy.",
  },
  {
    title: "Agile Development",
    description:
      "Sprint-based development with continuous delivery, weekly demos, and transparent communication.",
  },
  {
    title: "Testing & Quality Assurance",
    description:
      "Automation testing, security audits, performance optimization, and enterprise QA validation.",
  },
  {
    title: "Deployment & Launch",
    description:
      "Production deployment, monitoring setup, DevOps automation, and infrastructure optimization.",
  },
  {
    title: "Ongoing Support & Scaling",
    description:
      "24/7 monitoring, maintenance, upgrades, security patches, and continuous feature enhancements.",
  },
];

const technologyStack = [
  { category: "Frontend", technologies: "React, Next.js, TypeScript" },
  { category: "Backend", technologies: "Node.js, Python, .NET Core" },
  { category: "Databases", technologies: "PostgreSQL, MongoDB, Redis" },
  { category: "Cloud", technologies: "AWS, Azure, Google Cloud" },
  { category: "DevOps", technologies: "Docker, Kubernetes, CI/CD" },
  { category: "APIs", technologies: "REST, GraphQL, gRPC" },
  { category: "Real-Time", technologies: "Firebase, WebSockets" },
  { category: "Security", technologies: "OAuth2, JWT, TLS/SSL" },
];

const businessImpact = [
  { value: "50–70% Faster", label: "Product Launch Timelines" },
  { value: "40% Lower TCO", label: "Compared to Multiple SaaS Tools" },
  { value: "10x Scalability", label: "Without Major Re-Architecture" },
  { value: "85%+ Adoption", label: "Improved User Adoption" },
  { value: "99.9% Uptime", label: "Enterprise Reliability" },
  { value: "25%+ Revenue Growth", label: "Through Automation & Optimization" },
];

const successStories = [
  {
    name: "Global FinTech Platform",
    details: [
      "500K+ Active Users",
      "$2M+ Daily Transactions",
      "99.95% Uptime",
      "Deployment Timeline: 14 Months",
    ],
  },
  {
    name: "Healthcare Patient Portal",
    details: [
      "2M+ Patient Records",
      "50K+ Daily Users",
      "HIPAA-Compliant Infrastructure",
      "24/7 Enterprise Support",
    ],
  },
  {
    name: "Manufacturing ERP Integration",
    details: [
      "25+ Production Lines Connected",
      "10K+ Real-Time Data Events/Minute",
      "$500K+ Annual Cost Savings",
      "Deployment Timeline: 8 Months",
    ],
  },
];

const comparisonPoints = [
  {
    label: "Traditional agencies",
    text: "Often focus on websites or campaigns as isolated deliverables rather than the operating systems behind revenue and service delivery.",
  },
  {
    label: "Generic software companies",
    text: "May build features well, but often miss the workflow, reporting, change management, and business adoption layer.",
  },
  {
    label: "Isolated AI tools",
    text: "Can automate fragments of work, but without structured integration they frequently create another disconnected layer.",
  },
  {
    label: "SoftClinch unified ecosystem model",
    text: "Combines applications, CRM, automation, dashboards, digital growth systems, and modernization strategy into one scalable operating environment.",
  },
];

const globalPoints = [
  "Built for GCC businesses navigating growth, service responsiveness, and cross-team coordination.",
  "Relevant for UAE companies, Saudi Arabia businesses, Qatar enterprises, Kuwait SMEs, and Germany enterprise workflow markets.",
  "Designed for organizations investing in AI transformation, scalable operations, and long-term digital infrastructure.",
  "Structured for international teams that need enterprise modernization solutions without unnecessary complexity.",
];

const relatedLinks = [
  { label: "Custom Application Development", href: "/custom-application-development" },
  { label: "WhatsApp Automation", href: "/whatsapp-automation" },
  { label: "Digital Growth Systems", href: "/digital-marketing" },
  { label: "SAP AMS Support", href: "/sap-ams-support" },
  { label: "Contact SoftClinch", href: "/contact" },
];

export function AIPoweredBusinessSystems() {
  return (
    <div className="bg-[#F8FAFC] text-slate-900 overflow-hidden">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-slate-200/60 bg-white">
        {/* Background glow and gradient pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(0,51,102,0.08),_transparent_40%),radial-gradient(circle_at_80%_20%,_rgba(162,59,42,0.08),_transparent_28%),linear-gradient(180deg,_#ffffff_0%,_#f8fafc_100%)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-navy/30 to-transparent" />

        <div className="relative mx-auto max-w-7xl px-4 pt-10 pb-16 sm:px-6 lg:px-8 lg:pt-12 lg:pb-24 z-10">

          <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-start mt-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex rounded-full border border-brand-navy/10 bg-brand-navy/5 px-4 py-2 text-xs font-bold uppercase tracking-widest text-[#003366]">
                AI-Powered Business Systems
              </div>
              
              <h1 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-display font-black leading-tight text-slate-950 tracking-tight">
                Enterprise Applications Built for Scale Automation & Growth
              </h1>
              
              <p className="mt-6 text-lg sm:text-xl leading-relaxed text-slate-600 font-normal">
                Custom enterprise software, SaaS platforms, cloud-native
                applications, and AI-powered business systems engineered to
                streamline operations, improve efficiency, and accelerate
                digital transformation.
              </p>
              
              <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-500 font-medium">
                Trusted by businesses across Healthcare, Finance, Manufacturing,
                Retail, Logistics, and Enterprise Services.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/custom-application-development"
                  className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-brand-navy to-[#00488f] px-8 py-4 font-bold text-white shadow-lg shadow-brand-navy/15 transition hover:shadow-xl hover:-translate-y-0.5"
                >
                  Start Your Project
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-2xl border border-slate-300 bg-white px-8 py-4 font-bold text-slate-800 transition hover:border-brand-terracotta hover:text-brand-terracotta hover:-translate-y-0.5"
                >
                  Schedule Free Consultation
                </Link>
              </div>

              {/* Mini trust stats */}
              <div className="mt-12 grid gap-6 sm:grid-cols-3">
                {trustMetrics.map((metric, i) => (
                  <div
                    key={metric.label}
                    className="group relative rounded-3xl border border-slate-200/80 bg-slate-50/50 p-6 shadow-sm hover:shadow-md hover:border-brand-navy/20 transition-all duration-300"
                  >
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#003366] to-[#A23B2A] opacity-0 group-hover:opacity-100 transition-opacity rounded-t-3xl" />
                    <div className="text-xl sm:text-2xl font-display font-semibold text-slate-950">
                      {metric.value}
                    </div>
                    <p className="mt-2 text-xs font-semibold text-slate-500 leading-normal">
                      {metric.label}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <ServiceMediaPanel
                title="Operational Architecture Preview"
                subtitle="A video-style systems panel showing AI orchestration, dashboards, CRM routing, and enterprise workflow modernization."
                imageSrc="/hero/custom-applications.svg"
                imageAlt="AI-powered business systems architecture preview"
                points={[
                  "AI copilots and agents",
                  "CRM and lead routing",
                  "WhatsApp workflows",
                  "Executive dashboards",
                  "Approval systems",
                  "ERP-connected interfaces",
                ]}
                mode="video"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Challenges & Benefits Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white py-24 sm:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(162,59,42,0.03),_transparent_35%),radial-gradient(circle_at_top_right,_rgba(0,51,102,0.03),_transparent_35%)] pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            <span className="inline-flex rounded-full border border-brand-terracotta/15 bg-brand-terracotta/5 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-brand-terracotta mb-4">
              WHY CUSTOM ENTERPRISE SOFTWARE?
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-slate-950 leading-tight">
              Modern Enterprises Need More Than Generic Software
            </h2>
            <p className="mt-6 text-base sm:text-lg leading-relaxed text-slate-600 font-medium">
              Off-the-shelf platforms often create operational bottlenecks,
              fragmented workflows, and rising licensing costs. As businesses
              grow, they require scalable systems tailored to their exact
              operational needs.
            </p>
          </div>

          <div className="grid gap-10 lg:grid-cols-2 lg:items-stretch">
            {/* Challenges Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group relative rounded-[2.5rem] border border-slate-200 bg-white/70 backdrop-blur-md p-8 sm:p-10 shadow-lg shadow-slate-100 hover:shadow-2xl hover:border-brand-terracotta/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-brand-terracotta to-red-500 opacity-80 group-hover:opacity-100 transition-opacity rounded-t-[2.5rem]" />
              
              <div>
                <div className="inline-flex items-center gap-2.5 rounded-2xl bg-red-50/80 px-4 py-2.5 text-sm font-bold text-brand-terracotta mb-8 border border-red-100/50">
                  <span className="text-base">✕</span>
                  Traditional Software Bottlenecks
                </div>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                  {enterpriseChallenges.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 bg-slate-50/50 hover:bg-red-50/20 rounded-2xl p-4 border border-slate-100 hover:border-red-100/30 transition-all duration-300"
                    >
                      <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-red-100/60 text-brand-terracotta flex items-center justify-center text-[10px] font-bold shadow-sm">
                        ✕
                      </span>
                      <span className="text-slate-700 text-sm leading-relaxed font-semibold">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Benefits Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group relative rounded-[2.5rem] border border-slate-200 bg-white/70 backdrop-blur-md p-8 sm:p-10 shadow-lg shadow-slate-100 hover:shadow-2xl hover:border-brand-navy/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-brand-navy to-[#0055aa] opacity-80 group-hover:opacity-100 transition-opacity rounded-t-[2.5rem]" />
              
              <div>
                <div className="inline-flex items-center gap-2.5 rounded-2xl bg-emerald-50/80 px-4 py-2.5 text-sm font-bold text-emerald-700 mb-8 border border-emerald-100/50">
                  <span className="text-base">✓</span>
                  SoftClinch Custom Advantages
                </div>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                  {enterpriseBenefits.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 bg-slate-50/50 hover:bg-emerald-50/20 rounded-2xl p-4 border border-slate-100 hover:border-emerald-100/30 transition-all duration-300"
                    >
                      <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-emerald-100/60 text-emerald-600 flex items-center justify-center text-[10px] font-bold shadow-sm">
                        ✓
                      </span>
                      <span className="text-slate-700 text-sm leading-relaxed font-semibold">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <section className="relative overflow-hidden bg-slate-50 py-24 sm:py-32">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-brand-navy/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-[#A23B2A]/5 blur-[150px] rounded-full pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
          <div className="grid gap-8 lg:grid-cols-3">
            
            {/* Top Large Bento Card: Header block */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-3 group relative overflow-hidden rounded-[2.5rem] bg-brand-navy text-white p-8 sm:p-12 shadow-xl"
            >
              {/* Glowing vector backdrop */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_120%,_rgba(162,59,42,0.25),_transparent_45%),linear-gradient(135deg,_#002244_0%,_#003366_100%)]" />
              <div className="absolute -right-20 -top-20 w-80 h-80 bg-white/5 blur-[80px] rounded-full pointer-events-none" />
              
              <div className="relative z-10 grid gap-8 md:grid-cols-[1.8fr_1.2fr] items-center">
                <div>
                  <span className="inline-flex rounded-full bg-[#A23B2A]/20 border border-[#A23B2A]/35 px-4 py-1.5 text-xs font-black uppercase tracking-[0.2em] text-white mb-6">
                    ENTERPRISE SOFTWARE DEVELOPMENT SERVICES
                  </span>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold leading-tight">
                    Modern businesses require intelligent digital systems that align with operational workflows, business goals, and customer expectations.
                  </h2>
                </div>
                <div className="border-t border-white/10 pt-6 md:border-t-0 md:pt-0 md:pl-8 md:border-l">
                  <p className="text-sm sm:text-base leading-relaxed text-slate-300 font-medium">
                    Generic SaaS platforms often limit innovation, create inefficiencies, and increase operational complexity. At SoftClinch, we build scalable enterprise applications designed for automation, operational efficiency, and long-term business growth.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Bottom Left Bento Card: Focus Areas */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-2 group relative rounded-[2.5rem] border border-slate-200 bg-white p-8 sm:p-10 shadow-lg shadow-slate-100 hover:shadow-xl hover:border-brand-navy/20 transition-all duration-300"
            >
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-brand-navy to-brand-terracotta opacity-0 group-hover:opacity-100 transition-opacity rounded-t-[2.5rem]" />
              
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-xl font-display font-bold text-slate-955">
                  Core Engineering Focus
                </h3>
                <span className="text-xs font-bold text-brand-navy/60 uppercase bg-slate-50 px-3 py-1 rounded-lg border border-slate-100">
                  Specialize
                </span>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { name: "Enterprise SaaS Development", desc: "Multi-tenant platforms" },
                  { name: "AI-Powered Business Systems", desc: "Automated intelligence" },
                  { name: "Business Workflow Automation", desc: "Operations streamlining" },
                  { name: "Enterprise Cloud Applications", desc: "AWS, Azure, and GCP" },
                  { name: "ERP & CRM Integration", desc: "Connected ecosystems" },
                  { name: "Enterprise Analytics Dashboards", desc: "Real-time visibility" },
                  { name: "API-First Enterprise Architecture", desc: "Robust data scaling" },
                  { name: "Legacy Application Modernization", desc: "Future-proof legacy code" }
                ].map((item) => (
                  <div
                    key={item.name}
                    className="group/item flex flex-col justify-between bg-slate-50/55 hover:bg-slate-50 hover:shadow-md hover:border-brand-navy/15 rounded-2xl p-5 border border-slate-100 transition-all duration-300"
                  >
                    <div>
                      <div className="text-slate-900 font-display font-bold text-sm sm:text-base group-hover/item:text-brand-navy transition-colors">
                        {item.name}
                      </div>
                      <p className="mt-1 text-slate-500 text-xs font-semibold">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Bottom Right Bento Card: Tech Stack */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group relative rounded-[2.5rem] border border-slate-200 bg-white p-8 shadow-lg shadow-slate-100 hover:shadow-xl hover:border-brand-terracotta/20 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="absolute top-0 left-0 w-full h-1.5 bg-brand-terracotta opacity-0 group-hover:opacity-100 transition-opacity rounded-t-[2.5rem]" />
              
              <div>
                <h3 className="text-xl font-display font-bold text-slate-955 mb-3">
                  Enterprise Stack
                </h3>
                <p className="text-slate-500 text-xs sm:text-sm font-semibold mb-6 leading-relaxed">
                  Engineered using industry-standard cloud and framework technologies.
                </p>

                <div className="flex flex-wrap gap-2">
                  {[
                    "React", "Next.js", "Node.js", "Python", ".NET", 
                    "PostgreSQL", "Kubernetes", "AWS", "Azure", "Google Cloud"
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-bold text-slate-700 hover:border-brand-terracotta/40 hover:bg-brand-terracotta/[0.02] transition-colors duration-200 cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-500">Security & Scale Ready</span>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="mx-auto max-w-7xl px-4 pt-10 pb-24 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-flex rounded-full border border-brand-terracotta/15 bg-brand-terracotta/5 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-brand-terracotta mb-4">
            Services
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-slate-950 leading-tight">
            Enterprise development services built for scalable systems and automation.
          </h2>
          <p className="mt-6 text-base sm:text-lg leading-relaxed text-slate-600 font-medium">
            Each service area is designed to solve a business problem, improve workflow performance, and enable long-term operational growth.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group relative rounded-[2.5rem] border border-slate-200/80 bg-white p-8 shadow-md hover:shadow-2xl hover:border-brand-navy/35 hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              {/* Top border colored accent */}
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-brand-navy via-brand-navy to-brand-terracotta opacity-80 group-hover:opacity-100 transition-opacity" />
              
              <div>
                {/* Floating style Icon container */}
                <div className="w-16 h-16 rounded-[1.25rem] bg-gradient-to-br from-slate-50 to-slate-100 text-brand-navy flex items-center justify-center mb-8 shadow-sm border border-slate-200/50 group-hover:bg-brand-navy group-hover:text-white group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-brand-navy/15 transition-all duration-300">
                  <service.icon className="h-7 w-7" />
                </div>
                
                <h3 className="text-2xl font-display font-bold text-slate-955 group-hover:text-brand-navy transition-colors">
                  {service.title}
                </h3>
                
                {/* Fixed subtitle rendering */}
                <p className="mt-4 text-sm leading-relaxed text-slate-600 font-medium">
                  {service.subtitle}
                </p>

                {/* Styled features list */}
                <div className="mt-8 pt-6 border-t border-slate-100">
                  <span className="text-xs font-black uppercase tracking-[0.15em] text-brand-terracotta block mb-4">
                    Key Features
                  </span>
                  <ul className="grid gap-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-slate-700 text-sm leading-relaxed font-semibold">
                        <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center text-[10px] font-bold border border-emerald-100/30">
                          ✓
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Interactive link block */}
              <div className="mt-10 pt-6 border-t border-slate-100">
                <Link
                  href={service.href}
                  className="inline-flex items-center justify-between w-full rounded-2xl bg-slate-50 hover:bg-brand-navy hover:text-white px-5 py-3.5 font-display font-bold text-sm text-slate-800 border border-slate-100 hover:border-brand-navy transition-all duration-300 group/btn shadow-sm"
                >
                  <span>{service.cta}</span>
                  <div className="w-6 h-6 rounded-full bg-white/0 group-hover/btn:bg-white/10 flex items-center justify-center transition-all duration-300">
                    <ArrowRight className="h-4 w-4 text-slate-600 group-hover/btn:text-white transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </div>
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Industries Section */}
      <section className="relative overflow-hidden bg-white py-24 sm:py-32 border-y border-slate-200/80">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(0,51,102,0.02),_transparent_40%),radial-gradient(circle_at_bottom_left,_rgba(162,59,42,0.02),_transparent_40%)] pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            <span className="inline-flex rounded-full border border-brand-terracotta/15 bg-brand-terracotta/5 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-brand-terracotta mb-4">
              Industry-Specific Enterprise Solutions
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-slate-955 leading-tight">
              Industry Solutions for Complex Enterprise Operations
            </h2>
            <p className="mt-6 text-base sm:text-lg leading-relaxed text-slate-600 font-medium">
              We build enterprise software for sectors where security, compliance, integration, and operational efficiency are mission-critical.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group relative rounded-[2.5rem] border border-slate-200 bg-white p-8 shadow-sm hover:shadow-xl hover:border-brand-navy/30 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                {/* Subtle top accent */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-navy to-brand-terracotta opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div>
                  {/* Icon Container */}
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100 text-brand-navy flex items-center justify-center mb-6 shadow-sm border border-slate-200/50 group-hover:bg-brand-navy group-hover:text-white group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-brand-navy/15 transition-all duration-300">
                    <industry.icon className="h-6 w-6" />
                  </div>
                  
                  <h3 className="text-xl font-display font-bold text-slate-955 group-hover:text-brand-navy transition-colors">
                    {industry.name}
                  </h3>
                  
                  <ul className="mt-6 space-y-3">
                    {industry.challenges.map((challenge) => (
                      <li key={challenge} className="flex items-start gap-2.5 text-slate-600 text-xs font-semibold leading-relaxed">
                        <span className="mt-0.5 flex-shrink-0 w-4.5 h-4.5 rounded-full bg-slate-50 border border-slate-200/60 text-brand-terracotta flex items-center justify-center text-[9px] font-bold group-hover:bg-brand-terracotta/5 group-hover:text-brand-terracotta group-hover:border-brand-terracotta/20 transition-all duration-300">
                          ✓
                        </span>
                        <span>{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-flex rounded-full border border-brand-terracotta/15 bg-brand-terracotta/5 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-brand-terracotta mb-4">
            ENTERPRISE TECHNOLOGY STACK
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-slate-955 leading-tight">
            A technology stack built for enterprise scale, security, and integration.
          </h2>
          <p className="mt-6 text-base sm:text-lg leading-relaxed text-slate-600 font-medium">
            Our engineering teams leverage modern cloud, API, and data technologies to deliver resilient enterprise applications.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {technologyStack.map((item, index) => (
            <motion.div
              key={item.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group relative rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm hover:shadow-xl hover:border-brand-navy/20 transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              {/* Corner accent border glow */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-navy to-brand-terracotta opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="text-xs font-mono font-black text-slate-400 group-hover:text-brand-terracotta transition-colors">
                    {"// LAYER 0" + (index + 1)}
                  </span>
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 animate-pulse" />
                </div>
                
                <h3 className="text-lg font-display font-bold text-slate-955 group-hover:text-brand-navy transition-colors">
                  {item.category}
                </h3>
                
                <div className="mt-6 flex flex-wrap gap-2">
                  {item.technologies.split(", ").map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center gap-1.5 rounded-xl border border-slate-100 bg-slate-50/60 px-3 py-1.5 text-xs font-bold text-slate-700 hover:bg-slate-100 hover:border-brand-navy/20 transition-all duration-200 cursor-default"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-navy/30 group-hover:bg-brand-terracotta transition-colors" />
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Delivery Process Section */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 border-t border-slate-200/80">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-flex rounded-full border border-brand-terracotta/15 bg-brand-terracotta/5 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-brand-terracotta mb-4">
            Process
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-slate-955 leading-tight">
            A Delivery Process Built for Enterprise Clarity
          </h2>
        </motion.div>

        {/* Process Steps Grid */}
        <div className="relative mt-20">
          {/* Timeline Connector Line */}
          <div className="absolute top-[4.5rem] left-[15%] right-[15%] h-[2px] bg-gradient-to-r from-brand-navy/10 via-brand-terracotta/10 to-brand-navy/10 hidden lg:block pointer-events-none" />

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group relative rounded-[2.5rem] border border-slate-200 bg-white p-8 shadow-sm hover:shadow-xl hover:border-brand-navy/20 transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                {/* Accent top gradient bar */}
                <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-brand-navy via-brand-navy to-brand-terracotta opacity-80 group-hover:opacity-100 transition-opacity" />
                
                <div>
                  {/* Step Number Circle */}
                  <div className="w-14 h-14 rounded-full bg-slate-50 border border-slate-200/80 text-slate-400 font-mono font-bold text-base flex items-center justify-center mb-6 shadow-inner group-hover:bg-brand-navy group-hover:text-white group-hover:border-brand-navy transition-all duration-300">
                    0{index + 1}
                  </div>
                  
                  <h3 className="text-xl font-display font-bold text-slate-955 mb-3 group-hover:text-brand-navy transition-colors">
                    {step.title}
                  </h3>
                  
                  <p className="text-slate-500 text-sm leading-relaxed font-semibold">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI & Impact Section */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 border-t border-slate-200/80">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-flex rounded-full border border-brand-terracotta/15 bg-brand-terracotta/5 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-brand-terracotta mb-4">
            BUSINESS IMPACT & ROI
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-slate-955 leading-tight">
            Enterprise Outcomes That Prove Long-Term Value
          </h2>
          <p className="mt-6 text-base sm:text-lg leading-relaxed text-slate-600 font-medium">
            Custom enterprise software should drive measurable improvements in launch speed, cost efficiency, scalability, adoption, reliability, and revenue growth.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {businessImpact.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group relative rounded-[2.5rem] border border-slate-200 bg-white p-8 sm:p-10 shadow-sm hover:shadow-xl hover:border-brand-navy/35 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              {/* Accent top gradient bar */}
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-brand-navy to-brand-terracotta opacity-80 group-hover:opacity-100 transition-opacity" />
              
              <div>
                <div className="text-2xl sm:text-3xl font-display font-bold bg-gradient-to-r from-brand-navy to-brand-terracotta bg-clip-text text-transparent group-hover:scale-102 transition-transform duration-300 origin-left">
                  {item.value}
                </div>
                <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-700 font-bold">
                  {item.label}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-400">KPI Verified</span>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 border-t border-slate-200/80">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-flex rounded-full border border-brand-terracotta/15 bg-brand-terracotta/5 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-brand-terracotta mb-4">
            SUCCESS STORIES
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-slate-955 leading-tight">
            Enterprise Success Stories with Measurable Outcomes
          </h2>
        </motion.div>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {successStories.map((story, index) => {
            const parseStoryDetail = (detail: string) => {
              if (detail.includes(": ")) {
                const [lbl, val] = detail.split(": ");
                return { value: val, label: lbl };
              }
              const spaceIdx = detail.indexOf(" ");
              if (spaceIdx !== -1) {
                return { value: detail.substring(0, spaceIdx), label: detail.substring(spaceIdx + 1) };
              }
              return { value: detail, label: "" };
            };

            const isFeatured = index === 0;

            return (
              <motion.div
                key={story.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className={`group relative rounded-[2.5rem] p-8 sm:p-10 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden border ${
                  isFeatured 
                    ? "bg-slate-950 text-white border-slate-800 lg:col-span-1" 
                    : "bg-white text-slate-900 border-slate-200 hover:border-brand-navy/20 hover:-translate-y-1.5"
                }`}
              >
                {/* Accent top gradient bar */}
                <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-brand-navy via-brand-navy to-brand-terracotta opacity-80 group-hover:opacity-100 transition-opacity" />
                
                {isFeatured && (
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(162,59,42,0.12),_transparent_45%)] pointer-events-none" />
                )}

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <span className={`inline-flex rounded-full px-3.5 py-1.5 text-[10px] font-black uppercase tracking-wider ${
                      isFeatured 
                        ? "bg-brand-terracotta/20 text-brand-terracotta border border-brand-terracotta/30" 
                        : "bg-brand-navy/5 text-brand-navy border border-brand-navy/10"
                    }`}>
                      {isFeatured ? "Featured Case Study" : "Case Study"}
                    </span>
                    <span className={`w-2 h-2 rounded-full ${isFeatured ? "bg-brand-terracotta animate-pulse" : "bg-emerald-500"}`} />
                  </div>

                  <h3 className={`text-xl sm:text-2xl font-display font-bold leading-tight ${isFeatured ? "text-white" : "text-slate-955 group-hover:text-brand-navy transition-colors"}`}>
                    {story.name}
                  </h3>
                  
                  <div className="grid grid-cols-2 gap-4 mt-8">
                    {story.details.map((detail) => {
                      const { value, label } = parseStoryDetail(detail);
                      return (
                        <div 
                          key={detail} 
                          className={`border rounded-2xl p-4 flex flex-col justify-between transition-colors ${
                            isFeatured 
                              ? "bg-white/5 border-white/10 hover:bg-white/10" 
                              : "bg-slate-50/70 border-slate-100 hover:bg-slate-100/50"
                          }`}
                        >
                          <span className={`text-base font-bold font-display ${isFeatured ? "text-brand-terracotta" : "text-brand-navy"}`}>{value}</span>
                          <span className="text-[10px] uppercase tracking-wider font-semibold mt-1.5 leading-tight text-slate-400">{label}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Why SoftClinch Section */}
      {/* Why SoftClinch Section */}
      <section className="relative overflow-hidden border-y border-slate-900 bg-[#001E3D] py-24 text-white">
        {/* Subtle grid backdrop pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,_transparent_1px),_linear-gradient(90deg,_rgba(255,255,255,0.015)_1px,_transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-white/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            <span className="inline-flex rounded-full border border-brand-terracotta/25 bg-brand-terracotta/10 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-brand-terracotta mb-4">
              Why SoftClinch
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white leading-tight">
              Unified Systems Thinking, Not Isolated Delivery
            </h2>
            <p className="mt-6 text-base sm:text-lg leading-relaxed text-slate-300 font-medium">
              SoftClinch is built for businesses that need operational intelligence, scalable systems, enterprise integration, AI enablement, and workflow modernization working together over the long term.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {comparisonPoints.map((point, index) => {
              const isSoftClinch = index === 3;
              return (
                <motion.div
                  key={point.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className={`group relative rounded-[2.5rem] p-8 sm:p-10 shadow-lg border transition-all duration-300 flex flex-col justify-between overflow-hidden ${
                    isSoftClinch
                      ? "bg-slate-950 text-white border-brand-navy/30 lg:col-span-3 hover:border-brand-navy/60"
                      : "bg-white/5 border-white/10 hover:bg-white/8 hover:border-brand-terracotta/30"
                  }`}
                >
                  {/* Glowing background for SoftClinch */}
                  {isSoftClinch && (
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(162,59,42,0.12),_transparent_45%)] pointer-events-none" />
                  )}
                  {isSoftClinch && (
                    <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-brand-navy via-brand-navy to-brand-terracotta" />
                  )}

                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-6">
                      <span className={`inline-flex rounded-full px-3.5 py-1.5 text-[10px] font-black uppercase tracking-wider ${
                        isSoftClinch
                          ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                          : "bg-white/5 text-slate-300 border border-white/10"
                      }`}>
                        {isSoftClinch ? "Unified Solution" : "Traditional Approach"}
                      </span>
                      <span className={`w-2 h-2 rounded-full ${isSoftClinch ? "bg-emerald-400 animate-pulse" : "bg-brand-terracotta/60"}`} />
                    </div>

                    <h3 className={`text-xl font-display font-bold leading-tight ${isSoftClinch ? "text-2xl text-white" : "text-white group-hover:text-brand-terracotta transition-colors"}`}>
                      {point.label}
                    </h3>
                    
                    <p className={`mt-4 text-sm leading-relaxed font-semibold ${isSoftClinch ? "text-slate-300 text-base max-w-4xl" : "text-slate-400"}`}>
                      {point.text}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Global Positioning Section */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="relative mx-auto max-w-7xl z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            <span className="inline-flex rounded-full border border-brand-terracotta/15 bg-brand-terracotta/5 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-brand-terracotta mb-4">
              Global Positioning
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-slate-955 leading-tight">
              Built for GCC Businesses & Globally Scalable Operations
            </h2>
            <p className="mt-6 text-base sm:text-lg leading-relaxed text-slate-600 font-medium">
              SoftClinch is positioned as a premium digital transformation company for businesses modernizing enterprise operations, implementing AI automation, and building digital infrastructure.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {globalPoints.map((point, index) => {
              const titles = [
                "Regional Growth",
                "Targeted Markets",
                "Scalable Tech Stack",
                "International Teams"
              ];
              const badges = [
                "GCC Focus",
                "Global Scale",
                "Innovation",
                "Delivery Ready"
              ];
              
              return (
                <motion.div
                  key={point}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="group relative rounded-[2.5rem] border border-slate-200 bg-white p-8 shadow-sm hover:shadow-xl hover:border-brand-navy/20 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between overflow-hidden"
                >
                  {/* Subtle top accent */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-navy to-brand-terracotta opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <span className="inline-flex rounded-full bg-brand-navy/5 border border-brand-navy/10 px-3 py-1 text-[9px] font-black uppercase tracking-wider text-brand-navy group-hover:bg-brand-navy group-hover:text-white group-hover:border-brand-navy transition-all duration-300">
                        {badges[index]}
                      </span>
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    </div>
                    
                    <h3 className="text-lg font-display font-bold text-slate-955 mb-4 group-hover:text-brand-navy transition-colors">
                      {titles[index]}
                    </h3>
                    
                    <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-semibold">
                      {point}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
        <div className="rounded-[2.5rem] border border-slate-200 bg-white p-8 sm:p-12 shadow-sm hover:shadow-md transition-shadow duration-300">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="inline-flex rounded-full border border-brand-terracotta/15 bg-brand-terracotta/5 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-brand-terracotta mb-4">
              Related Links
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-955 leading-tight">
              Internal Paths That Support This Solution Ecosystem
            </h2>
          </div>
          
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {relatedLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group relative rounded-2xl border border-slate-200/80 bg-white px-5 py-4 font-display font-bold text-xs sm:text-sm text-slate-800 shadow-sm hover:border-brand-navy hover:text-brand-navy hover:-translate-y-1 hover:shadow-md transition-all duration-300 flex items-center justify-between overflow-hidden"
              >
                <span>{link.label}</span>
                <ArrowRight className="h-4 w-4 shrink-0 text-slate-400 group-hover:text-brand-navy group-hover:translate-x-1 transition-all duration-300" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[3rem] bg-brand-navy text-white shadow-2xl">
          {/* Subtle decoration */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#A23B2A]/20 blur-[100px] rounded-full pointer-events-none" />

          <div className="relative grid gap-10 px-8 py-14 lg:grid-cols-[1.1fr_0.9fr] lg:px-16 lg:py-16 items-center z-10">
            <div>
              <span className="text-xs font-black uppercase tracking-[0.2em] text-[#A23B2A]">
                Final CTA
              </span>
              <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-display font-bold leading-tight">Ready to Build Enterprise-Grade Software?</h2>
              <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-200">
                Transform operations with scalable enterprise applications engineered for automation, performance, and business growth.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-8 py-4 font-bold text-brand-navy transition hover:bg-slate-100 hover:-translate-y-0.5 shadow-lg"
              >
                <span>Schedule Free Consultation</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-2xl border border-white/20 px-8 py-4 font-bold text-white transition hover:bg-white/10 hover:-translate-y-0.5"
              >
                Talk to Enterprise Experts
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <FaqSection title="AI-Powered Business Systems FAQs" items={aiPoweredBusinessSystemsFaq} />
    </div>
  );
}
