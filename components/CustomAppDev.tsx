"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Cpu,
  Server,
  Smartphone,
  Layers,
  Code2,
  CheckCircle2,
  ArrowRight,
  MessageSquare,
  ShieldCheck,
  Zap,
  ChevronDown,
  Database,
  Building2,
} from "lucide-react";
import { trackCtaClick, trackWhatsAppClick } from "@/lib/analytics";

const capabilities = [
  {
    title: "SaaS Platforms & Multi-Tenant Clouds",
    icon: Server,
    desc: "Multi-tenant cloud architectures engineered with tenant isolation, subscription billing, RBAC, and auto-scaling Kubernetes infrastructure.",
    deliverables: ["Microservices Architecture", "Multi-Tenant Isolation", "Stripe / Razorpay Billing", "Automated CI/CD Pipelines"],
  },
  {
    title: "Enterprise Web Applications",
    icon: Code2,
    desc: "High-performance web apps built with Next.js, React, Node.js, and TypeScript, optimized for sub-second load times and complex business logic.",
    deliverables: ["Role-Based Access Control", "Interactive BI Dashboards", "Offline PWA Capabilities", "Audit Logs & Compliance"],
  },
  {
    title: "Cross-Platform Mobile Apps",
    icon: Smartphone,
    desc: "Native and React Native iOS and Android mobile solutions with real-time push notifications, offline syncing, and enterprise MDM support.",
    deliverables: ["React Native Cross-Platform", "Offline Data Sync", "Biometric Authentication", "App Store & Play Store Lifecycle"],
  },
  {
    title: "ERP & SAP Custom Connectors",
    icon: Database,
    desc: "Custom middleware and API pipelines seamlessly bridging custom customer portals and order workflows with SAP S/4HANA and ECC backends.",
    deliverables: ["SAP BAPI / OData Webhooks", "Real-Time Inventory Sync", "Bidirectional Order Dispatch", "Failure Resilient Queues"],
  },
  {
    title: "Workflow Automation Engines",
    icon: Zap,
    desc: "Automated business process engines eliminating repetitive spreadsheet operations, approval bottlenecks, and manual email notifications.",
    deliverables: ["Automated Document Generation", "Multi-Stage Approvals", "WhatsApp / Email Triggers", "Error Alert Monitoring"],
  },
  {
    title: "Customer & Vendor Portals",
    icon: Building2,
    desc: "Self-service enterprise portals enabling partners, distributors, and clients to track orders, submit RFQs, and access invoices securely.",
    deliverables: ["Self-Service Account Center", "RFQ & Quote Workflows", "Secure Document Sharing", "Payment Gateway Checkout"],
  },
];

const processSteps = [
  {
    step: "01",
    title: "Consult & Architect",
    desc: "We analyze business workflows, data models, compliance requirements, and integration points to create a bulletproof architectural roadmap.",
  },
  {
    step: "02",
    title: "Agile Sprint Development",
    desc: "Two-week agile sprints with bi-weekly demo check-ins, automated unit tests, and continuous preview environments for stakeholder review.",
  },
  {
    step: "03",
    title: "Security & Load Testing",
    desc: "Rigorous OWASP vulnerability scanning, database index optimization, concurrency load testing, and enterprise data encryption at rest.",
  },
  {
    step: "04",
    title: "Deploy & SLA Support",
    desc: "Zero-downtime deployment on AWS, Azure, or Cloudflare, paired with proactive monitoring and guaranteed {{ENTERPRISE_SYSTEM_UPTIME_SLA}} uptime SLA.",
  },
];

const faqs = [
  {
    q: "How do custom applications compare to off-the-shelf SaaS?",
    a: "Off-the-shelf SaaS carries recurring per-seat fees, vendor lock-in, and rigid workflows. Custom application engineering gives you 100% intellectual property ownership, zero recurring software license costs per user, and workflows built specifically around your competitive advantages.",
  },
  {
    q: "Can you integrate custom software with our existing SAP or ERP systems?",
    a: "Yes. Our engineering practice specializes in SAP S/4HANA, ECC, and third-party ERP integration. We build secure REST, GraphQL, and OData connectors to ensure real-time data synchronization.",
  },
  {
    q: "What tech stack do you recommend for enterprise web applications?",
    a: "We primarily build with Next.js, TypeScript, Node.js, PostgreSQL/MySQL, Redis, and containerized Docker/Kubernetes environments deployed across AWS, Azure, or Cloudflare.",
  },
  {
    q: "Who owns the code and intellectual property?",
    a: "You retain 100% full intellectual property and source code ownership upon project completion. We hand over all repositories, deployment scripts, and architecture documentation.",
  },
  {
    q: "What ongoing maintenance and support SLAs do you provide?",
    a: "We offer structured SLA-backed maintenance plans covering proactive monitoring, security updates, feature scaling, and L1-L4 technical assistance.",
  },
];

export const CustomAppDev = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="pt-28 pb-20 bg-slate-50 text-slate-800 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HERO SECTION */}
        <div className="mb-20 max-w-4xl">
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-terracotta/10 text-brand-terracotta text-xs font-bold uppercase tracking-widest mb-6">
            Enterprise Software Engineering
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-slate-900 leading-[1.15] mb-6">
            Custom Application Development in Chennai &amp; India
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 leading-relaxed mb-8">
            SoftClinch engineers custom web applications, SaaS platforms, customer portals, and ERP-integrated software for mid-size enterprises across Chennai and India. Build proprietary digital platforms that streamline operations, eliminate license sprawl, and scale securely.
          </p>

          <div className="flex flex-wrap gap-4 items-center">
            <Link
              href="/contact"
              onClick={() => trackCtaClick("Schedule Technical Consultation", "custom_app_hero_primary")}
              className="bg-brand-navy hover:bg-[#07192F] text-white px-8 py-4 rounded-full font-bold text-base transition-all shadow-lg shadow-brand-navy/20 flex items-center gap-2"
            >
              Schedule Technical Consultation <ArrowRight size={18} />
            </Link>
            <a
              href="https://wa.me/919445679878?text=Hello%20SoftClinch%2C%20I%20am%20interested%20in%20custom%20application%20development."
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick("custom_app_hero_whatsapp")}
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-7 py-4 rounded-full font-bold text-base transition-all flex items-center gap-2 shadow-md"
            >
              <MessageSquare size={18} /> Talk on WhatsApp
            </a>
          </div>
        </div>

        {/* PROBLEM SECTION */}
        <section className="mb-24 bg-white border border-slate-200 rounded-[2.5rem] p-8 sm:p-14 shadow-sm">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-terracotta block mb-2">The Operational Challenge</span>
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-slate-900">
              Why Off-The-Shelf Software Limits Enterprise Scalability
            </h2>
            <p className="text-slate-600 mt-4 leading-relaxed">
              Standard SaaS platforms promise quick fixes, but quickly become expensive operational silos that constrain growing businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200/80">
              <div className="w-10 h-10 rounded-xl bg-red-100 text-red-600 flex items-center justify-center font-bold mb-4">✕</div>
              <h3 className="font-bold text-slate-900 text-lg mb-2">Per-User License Traps</h3>
              <p className="text-sm text-slate-600 leading-relaxed">Software subscriptions grow exponentially as your workforce expands, penalizing growth without adding proportional value.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200/80">
              <div className="w-10 h-10 rounded-xl bg-red-100 text-red-600 flex items-center justify-center font-bold mb-4">✕</div>
              <h3 className="font-bold text-slate-900 text-lg mb-2">Inflexible Business Workflows</h3>
              <p className="text-sm text-slate-600 leading-relaxed">Your business must bend its proven operational processes to fit generic software limitations rather than optimizing for competitive edge.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200/80">
              <div className="w-10 h-10 rounded-xl bg-red-100 text-red-600 flex items-center justify-center font-bold mb-4">✕</div>
              <h3 className="font-bold text-slate-900 text-lg mb-2">Disconnected Data Silos</h3>
              <p className="text-sm text-slate-600 leading-relaxed">Fragmented data across isolated tools leads to manual spreadsheet reconciliation, synchronization errors, and delayed decision-making.</p>
            </div>
          </div>
        </section>

        {/* CAPABILITIES / WHAT WE DO */}
        <div className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-navy block mb-2">What We Deliver</span>
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-slate-900">
              End-to-End Application Engineering Capabilities
            </h2>
            <p className="text-slate-600 mt-3">From initial proof of concept to high-throughput production deployment, we deliver custom software built for scale.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((service, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl border border-slate-200 hover:shadow-xl transition-all flex flex-col justify-between">
                <div>
                  <div className="w-14 h-14 bg-brand-navy/5 text-brand-navy rounded-2xl flex items-center justify-center mb-6">
                    <service.icon size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                  <p className="text-slate-600 text-sm mb-6 leading-relaxed">{service.desc}</p>
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">Key Deliverables</div>
                  <ul className="space-y-2">
                    {service.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2.5 text-xs font-medium text-slate-700">
                        <CheckCircle2 size={14} className="text-emerald-500 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* PROCESS SECTION */}
        <section className="mb-24 bg-brand-navy text-white rounded-[2.5rem] p-10 sm:p-14">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-terracotta block mb-2">Our Engineering Methodology</span>
            <h2 className="text-3xl lg:text-4xl font-display font-bold">
              Predictable 4-Step Delivery Process
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <div className="text-brand-terracotta font-mono font-bold text-sm mb-3">STEP {step.step}</div>
                <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                <p className="text-slate-400 text-xs leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* PROOF SECTION */}
        <section className="mb-24 bg-white border border-slate-200 rounded-[2.5rem] p-8 sm:p-12 shadow-sm">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-navy block mb-2">Proven Results</span>
              <h2 className="text-3xl font-display font-bold text-slate-900">
                Enterprise Engineering Case Study
              </h2>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 sm:p-10">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-200">
                <div>
                  <span className="text-xs uppercase tracking-wider text-slate-500 font-bold block mb-1">Industry</span>
                  <span className="text-lg font-bold text-brand-navy">{"{{CASE_STUDY_CLIENT_INDUSTRY}}"}</span>
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-slate-500 font-bold block mb-1">Platform</span>
                  <span className="text-base font-semibold text-slate-700">Custom Cloud Portal &amp; SAP Sync</span>
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-slate-500 font-bold block mb-1">Impact</span>
                  <span className="text-lg font-bold text-emerald-600">{"{{CASE_STUDY_RESULT}}"}</span>
                </div>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                {"{{CASE_STUDY_SUMMARY}}"}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                <div className="bg-white p-4 rounded-xl border border-slate-200/80">
                  <div className="text-2xl font-bold text-brand-navy mb-1">{"{{CASE_STUDY_METRIC_1}}"}</div>
                  <div className="text-xs text-slate-500">Order Processing Speed</div>
                </div>
                <div className="bg-white p-4 rounded-xl border border-slate-200/80">
                  <div className="text-2xl font-bold text-brand-navy mb-1">{"{{CASE_STUDY_METRIC_2}}"}</div>
                  <div className="text-xs text-slate-500">License Cost Reduction</div>
                </div>
                <div className="bg-white p-4 rounded-xl border border-slate-200/80">
                  <div className="text-2xl font-bold text-brand-navy mb-1">{"{{ENTERPRISE_SYSTEM_UPTIME_SLA}}"}</div>
                  <div className="text-xs text-slate-500">Availability SLA</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TECH STACK SECTION */}
        <section className="mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-brand-navy text-white p-10 sm:p-12 rounded-[2.5rem]">
              <h2 className="text-2xl sm:text-3xl font-display font-bold mb-4">Enterprise Tech Stack</h2>
              <p className="text-slate-300 text-sm mb-8 leading-relaxed">
                We select modern, type-safe, and battle-tested technologies designed for zero-downtime scalability and long-term maintainability.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {['Next.js / React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Redis Cache', 'Docker & K8s', 'AWS / Azure', 'SAP OData', 'Tailwind CSS'].map((tech) => (
                  <div key={tech} className="bg-white/10 px-3.5 py-2.5 rounded-xl text-xs font-semibold text-center border border-white/10">
                    {tech}
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 sm:p-8">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-terracotta block mb-2">Integration &amp; Automation</span>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 mb-4">
                Seamless API &amp; ERP Integration
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Beyond standalone applications, we engineer secure API-driven integrations connecting your custom software with SAP ERP, CRM, payment gateways, and WhatsApp automation pipelines.
              </p>
              <Link
                href="/contact"
                onClick={() => trackCtaClick("Discuss Architecture", "custom_app_integration_cta")}
                className="inline-flex items-center gap-2 text-sm font-bold text-brand-navy hover:text-brand-terracotta transition-colors"
              >
                Discuss your technical requirements <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-navy block mb-2">FAQ</span>
            <h2 className="text-3xl font-display font-bold text-slate-900">Frequently Asked Questions</h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  aria-expanded={openFaq === idx}
                  className="w-full p-6 text-left flex items-center justify-between gap-4"
                >
                  <span className="font-bold text-slate-900 text-base">{faq.q}</span>
                  <ChevronDown
                    size={20}
                    className={`text-slate-400 shrink-0 transition-transform duration-300 ${openFaq === idx ? "rotate-180" : ""}`}
                  />
                </button>
                <div
                  className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${
                    openFaq === idx ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 pb-6 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                      {faq.a}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* BOTTOM CTA BANNER */}
        <section className="bg-gradient-to-r from-brand-navy via-slate-900 to-[#102B4E] rounded-[2.5rem] p-10 sm:p-16 text-center text-white shadow-xl">
          <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">
            Ready to Build Your Custom Software Solution?
          </h2>
          <p className="text-slate-300 text-base max-w-2xl mx-auto mb-8 leading-relaxed">
            Talk to our engineering leads in Chennai to evaluate your software scope, architecture choices, and development budget.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              onClick={() => trackCtaClick("Start Your Project", "custom_app_bottom_primary")}
              className="bg-brand-terracotta hover:bg-white hover:text-brand-navy text-white px-8 py-4 rounded-full font-bold text-base transition-all shadow-lg"
            >
              Start Your Project
            </Link>
            <a
              href="https://wa.me/919445679878?text=Hello%20SoftClinch%2C%20I%20would%20like%20to%20discuss%20a%20custom%20application%20project."
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick("custom_app_bottom_whatsapp")}
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded-full font-bold text-base transition-all flex items-center gap-2"
            >
              <MessageSquare size={18} /> Chat on WhatsApp
            </a>
          </div>
        </section>

      </div>
    </div>
  );
};
