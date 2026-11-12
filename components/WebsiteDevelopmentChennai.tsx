"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Globe,
  ShoppingBag,
  Zap,
  RefreshCw,
  ArrowRight,
  MessageSquare,
  CheckCircle2,
  ExternalLink,
  ChevronDown,
  ShieldCheck,
  Smartphone,
  Search,
  Sparkles,
} from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";
import { chennaiWebsiteFaq } from "@/lib/faqs";
import { GoogleReviews } from "@/components/GoogleReviews";

export const WebsiteDevelopmentChennai = () => {
  const whatsappUrl = siteConfig.getWhatsAppUrl(
    "Hi SoftClinch, I need a website for my business"
  );
  const whatsappClosingUrl = siteConfig.getWhatsAppUrl(
    "Hi SoftClinch, I would like to discuss a website project"
  );

  const services = [
    {
      title: "Business Websites",
      description:
        "Fast, modern, and mobile-friendly websites designed to position your brand as an industry leader and turn visitors into qualified inquiries.",
      icon: Globe,
      features: [
        "Responsive across all mobile & desktop screens",
        "Fast-loading performance with modern Next.js/React",
        "Built-in lead capture & WhatsApp click-to-chat",
        "Clear content structure and brand storytelling",
      ],
    },
    {
      title: "WooCommerce & E-commerce",
      description:
        "High-converting online stores built on WooCommerce or custom commerce architectures with secure payment gateways and smooth checkout flows.",
      icon: ShoppingBag,
      features: [
        "Seamless Razorpay, Cashfree & Stripe integration",
        "Mobile-first product catalogs & one-click checkout",
        "Automated order confirmations & WhatsApp notifications",
        "Scalable inventory and customer management",
      ],
    },
    {
      title: "Conversion Landing Pages",
      description:
        "Laser-focused campaign landing pages optimized for Google Ads, Meta Ads, and performance marketing campaigns with high conversion rates.",
      icon: Zap,
      features: [
        "A/B test ready structure & conversion architecture",
        "Ultra-fast loading speed (< 1.5s) to reduce bounce",
        "Frictionless forms and instant WhatsApp enquiry CTA",
        "Complete event tracking with Google Analytics 4",
      ],
    },
    {
      title: "Website Redesign & Upgrades",
      description:
        "Revamp outdated, slow, or low-converting websites into cutting-edge, high-speed digital assets that elevate your business reputation.",
      icon: RefreshCw,
      features: [
        "Complete UI/UX modernization & brand alignment",
        "SEO preservation with 301 redirect mapping",
        "Core Web Vitals & mobile performance overhaul",
        "Modern CMS handover for effortless text & media updates",
      ],
    },
  ];

  // TODO: Replace with 3-4 real project links and case studies once client permissions are finalized
  const portfolioItems = [
    {
      title: "B2B Industrial Equipment Portal",
      category: "Corporate Business Website",
      description:
        "Lead-generation corporate website with comprehensive product specifications, catalog downloads, and WhatsApp inquiry routing.",
      stats: "3.2x inquiry growth",
      tags: ["Next.js", "SEO", "WhatsApp Integration"],
    },
    {
      title: "D2C Lifestyle & Apparel Store",
      category: "WooCommerce E-Commerce",
      description:
        "High-volume fashion e-commerce storefront with customized filter navigation, Razorpay payment gateway, and automated order updates.",
      stats: "48% higher checkout completion",
      tags: ["WooCommerce", "Razorpay", "Mobile-First"],
    },
    {
      title: "Healthcare Clinic & Diagnostics Network",
      category: "Medical & Service Booking",
      description:
        "Clean, reassuring digital presence with doctor profiles, appointment booking integration, and local Chennai SEO optimization.",
      stats: "Top 3 Google local rankings",
      tags: ["Local SEO", "Booking System", "Fast Loading"],
    },
    {
      title: "Specialty Manufacturing Exporter",
      category: "Global Export & Catalog",
      description:
        "Multilingual global B2B portal serving buyers across Asia and Europe with interactive product demos and instant quotation flows.",
      stats: "100% Core Web Vitals score",
      tags: ["Enterprise UI", "B2B Catalog", "Global CDN"],
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discuss on WhatsApp",
      description:
        "Start with a straightforward, no-obligation conversation on WhatsApp. We explore your business goals, target audience, page scope, and timeline.",
      icon: MessageSquare,
    },
    {
      step: "02",
      title: "Design & Architecture",
      description:
        "We create clean, modern UI wireframes and visual prototypes tailored to your brand identity, focusing on user journeys that convert.",
      icon: Sparkles,
    },
    {
      step: "03",
      title: "Build & SEO Setup",
      description:
        "We engineer responsive, lightweight code with mobile optimization, speed tuning, on-page technical SEO, and schema markup built in.",
      icon: Search,
    },
    {
      step: "04",
      title: "Launch & Support",
      description:
        "We handle domain configuration, SSL, DNS setup, cross-browser testing, deployment, and provide post-launch support and CMS guidance.",
      icon: ShieldCheck,
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      {/* SECTION 1: HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-navy via-[#0B2545] to-[#061527] text-white pt-32 pb-24 lg:pt-40 lg:pb-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(162,59,42,0.18),transparent_60%)] pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-slate-50 to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-slate-200 text-xs font-semibold uppercase tracking-wider mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Chennai Website Development · Serving Businesses Across India
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white tracking-tight leading-[1.12] mb-6"
            >
              Website Development Company in Chennai for Growing Businesses
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg sm:text-xl text-slate-300 leading-relaxed mb-10 max-w-2xl"
            >
              Fast, responsive, SEO-ready business websites and WooCommerce stores engineered to rank on Google, build credibility, and generate qualified inquiries for your business.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
            >
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-8 py-4 rounded-xl shadow-lg shadow-emerald-900/30 transition-all duration-300 text-base"
              >
                <MessageSquare className="w-5 h-5 fill-current" />
                Chat on WhatsApp
              </a>

              <a
                href="#portfolio"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white border border-white/20 font-semibold px-8 py-4 rounded-xl transition-all duration-300 text-base"
              >
                View our work
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-12 pt-8 border-t border-white/10 grid grid-cols-3 gap-6 text-slate-300 text-xs sm:text-sm font-medium"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>SEO & Mobile Ready</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>No Hidden Fees</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Chennai-Based Team</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 2: SERVICES */}
      <section className="py-24 bg-white" id="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-brand-terracotta text-xs font-bold uppercase tracking-widest block mb-3">
              Web Engineering Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 mb-4">
              Website Solutions Built for Real Business Growth
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Whether launching a new corporate presence or scaling e-commerce transactions, we build modern web architectures that deliver measurable business outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-slate-50 border border-slate-200/80 rounded-3xl p-8 hover:border-brand-navy/30 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-14 h-14 rounded-2xl bg-brand-navy text-white flex items-center justify-center mb-6 shadow-md shadow-brand-navy/15">
                      <Icon size={28} />
                    </div>
                    <h3 className="text-2xl font-display font-bold text-slate-900 mb-3">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed mb-6 text-sm sm:text-base">
                      {item.description}
                    </p>
                    <ul className="space-y-3 mb-8">
                      {item.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-3 text-sm text-slate-700">
                          <CheckCircle2 size={18} className="text-emerald-600 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href={siteConfig.getWhatsAppUrl(
                      `Hi SoftClinch, I'm interested in ${item.title}`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-brand-navy hover:text-brand-terracotta font-bold text-sm transition-colors pt-4 border-t border-slate-200"
                  >
                    Discuss {item.title} on WhatsApp
                    <ArrowRight size={16} />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 3: PROOF (REVIEWS + PORTFOLIO) */}
      <section className="bg-slate-50" id="portfolio">
        {/* Reusable Google Reviews */}
        <GoogleReviews
          title="What Our Clients Say About Our Delivery"
          badge="Verified Client Feedback"
          subtitle="Real reviews from businesses who trust SoftClinch for web development and digital solutions."
        />

        {/* Portfolio Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-brand-terracotta text-xs font-bold uppercase tracking-widest block mb-3">
              Selected Work
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 mb-4">
              Recent Website & E-commerce Projects
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              A sample of the high-speed business websites and commerce platforms we build for growing enterprises.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {portfolioItems.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-brand-terracotta bg-brand-terracotta/10 px-3 py-1 rounded-full">
                      {item.category}
                    </span>
                    <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200/60">
                      {item.stats}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {item.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-xs font-medium text-slate-600 bg-slate-100 px-2.5 py-1 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                  <span>Delivered by SoftClinch</span>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-navy hover:text-brand-terracotta font-semibold inline-flex items-center gap-1"
                  >
                    Build similar project <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: PROCESS */}
      <section className="py-24 bg-brand-navy text-white relative overflow-hidden" id="process">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(162,59,42,0.15),transparent_60%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-brand-terracotta text-xs font-bold uppercase tracking-widest block mb-3">
              Transparent Execution
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-4">
              Our 4-Step Website Development Process
            </h2>
            <p className="text-slate-300 text-base sm:text-lg">
              A predictable, agile workflow focused on rapid delivery, clear milestones, and business results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div
                  key={idx}
                  className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-white">
                        <Icon size={24} />
                      </div>
                      <span className="text-3xl font-display font-bold text-white/30">
                        {step.step}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                    <p className="text-slate-300 text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 5: FAQ (ACCORDION WITH SERVER HTML) */}
      <section className="py-24 bg-white" id="faq">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-brand-terracotta text-xs font-bold uppercase tracking-widest block mb-3">
              Got Questions?
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-600 text-base">
              Clear answers regarding our website development services, timelines, and technical standards.
            </p>
          </div>

          <div className="space-y-4">
            {chennaiWebsiteFaq.map((faq, index) => (
              <details
                key={index}
                className="group bg-slate-50 rounded-2xl border border-slate-200/80 p-6 transition-all duration-300 open:bg-white open:shadow-lg open:border-brand-navy/20"
              >
                <summary className="flex justify-between items-center cursor-pointer list-none text-lg font-bold text-slate-900 group-hover:text-brand-navy transition-colors">
                  <span className="pr-4">{faq.question}</span>
                  <ChevronDown className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform duration-300 shrink-0" />
                </summary>
                <div className="mt-4 pt-4 border-t border-slate-200/60 text-slate-600 text-base leading-relaxed">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: FINAL CTA */}
      <section className="py-20 bg-gradient-to-r from-brand-navy via-[#0B2545] to-brand-navy text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(162,59,42,0.25),transparent_70%)] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-slate-200 text-xs font-semibold uppercase tracking-wider mb-6">
            <ShieldCheck size={16} className="text-emerald-400" />
            Serving Businesses Across India · Chennai Development Studio
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-6 leading-tight">
            Ready to Build a High-Performing Website for Your Business?
          </h2>

          <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            Message us directly on WhatsApp to discuss your requirements, see relevant past work, and receive a customized, scope-based project plan.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={whatsappClosingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-9 py-4 rounded-xl shadow-xl shadow-emerald-950/40 transition-all duration-300 text-base"
            >
              <MessageSquare className="w-5 h-5 fill-current" />
              Chat on WhatsApp Now
            </a>

            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white border border-white/20 font-semibold px-8 py-4 rounded-xl transition-all duration-300 text-base"
            >
              Request a Consultation
              <ArrowRight size={18} />
            </Link>
          </div>

          <p className="mt-8 text-xs text-slate-400">
            Direct response within business hours · Fixed-scope proposals with milestone delivery
          </p>
        </div>
      </section>
    </div>
  );
};
