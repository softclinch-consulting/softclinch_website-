"use client";

import React from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  Check,
  CheckCircle2,
  ChevronDown,
  Code2,
  ExternalLink,
  Globe,
  GraduationCap,
  HeartPulse,
  Layers,
  MapPin,
  MessageCircle,
  MessageSquare,
  MonitorSmartphone,
  Palette,
  RefreshCw,
  Search,
  ShieldCheck,
  ShoppingBag,
  ShoppingCart,
  Sparkles,
  Utensils,
  Wrench,
  Zap,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";
import type { FaqItem } from "@/lib/faqs";
import { GoogleReviews } from "@/components/GoogleReviews";

interface WebsiteDevelopmentProps {
  faqs: FaqItem[];
}

export function WebsiteDevelopment({ faqs }: WebsiteDevelopmentProps) {
  const reduceMotion = useReducedMotion();
  const whatsappHeroUrl = siteConfig.getWhatsAppUrl(
    "Hi SoftClinch, I need a website for my business"
  );
  const whatsappClosingUrl = siteConfig.getWhatsAppUrl(
    "Hi SoftClinch, I would like to discuss a website project"
  );

  const services = [
    {
      title: "Business Websites",
      description:
        "Present your company, services, and expertise through a fast, modern corporate website. Make it effortless for prospects to understand your value and contact your team.",
      suitable: "Small businesses, consultants, service providers, and B2B enterprises.",
      icon: Building2,
      features: [
        "Responsive across all mobile, tablet, and desktop screens",
        "Fast-loading performance with clean semantic HTML & Next.js",
        "Built-in lead capture forms & WhatsApp click-to-chat",
        "Clear content hierarchy and brand storytelling",
      ],
    },
    {
      title: "WooCommerce & E-Commerce",
      description:
        "High-converting online stores built on WooCommerce or custom commerce architectures with secure payment gateways, inventory management, and smooth checkout flows.",
      suitable: "Retailers, D2C brands, wholesalers, and growing online stores.",
      icon: ShoppingBag,
      features: [
        "Seamless Razorpay, Cashfree & Stripe payment gateways",
        "Mobile-first product catalogs & one-click checkout",
        "Automated order confirmations & WhatsApp notifications",
        "Scalable inventory, category filters, and customer management",
      ],
    },
    {
      title: "Conversion Landing Pages",
      description:
        "Laser-focused campaign landing pages optimized for Google Ads, Meta Ads, and performance marketing with high conversion rates and minimal bounce.",
      suitable: "Google Ads, social media promotions, and product launches.",
      icon: Zap,
      features: [
        "A/B test ready layout & conversion-focused copywriting",
        "Ultra-fast loading speed (< 1.5s) to maximize ad ROI",
        "Frictionless forms and instant WhatsApp enquiry CTA",
        "Google Analytics 4 & Meta Pixel event tracking built in",
      ],
    },
    {
      title: "Website Redesign & Modernization",
      description:
        "Revamp outdated, slow, or low-converting websites into high-speed, modern digital assets that reflect your evolving business and improve Google rankings.",
      suitable: "Businesses with aging or difficult-to-maintain websites.",
      icon: RefreshCw,
      features: [
        "Complete UI/UX modernization & responsive design overhaul",
        "SEO preservation with 301 redirect mapping",
        "Core Web Vitals performance tuning",
        "Effortless CMS editor handover for easy text and media updates",
      ],
    },
    {
      title: "Custom Web Applications",
      description:
        "Manage more of your business operations online with customer portals, booking engines, client dashboards, and custom web applications tailored to your exact workflows.",
      suitable: "Enterprises needing custom workflows beyond standard websites.",
      icon: Code2,
      features: [
        "Secure user authentication and role-based access",
        "Custom database schemas and REST API integrations",
        "Interactive dashboards and business workflow automation",
        "Cloud-native deployment on scalable infrastructure",
      ],
    },
    {
      title: "Website Maintenance & Support",
      description:
        "Keep your digital presence secure, updated, and fast with ongoing technical maintenance, backups, security patches, and on-demand feature enhancements.",
      suitable: "Businesses wanting peace of mind and dedicated tech support.",
      icon: Wrench,
      features: [
        "Regular security updates, theme and plugin patch management",
        "Automated daily/weekly cloud backups",
        "Uptime and performance monitoring",
        "Fast turn-around support for content and design updates",
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
        "Clean, reassuring digital presence with doctor profiles, appointment booking integration, and local SEO optimization.",
      stats: "Top 3 Google local rankings",
      tags: ["Local SEO", "Booking System", "Fast Loading"],
    },
    {
      title: "Specialty Manufacturing Exporter",
      category: "Global Export & Catalog",
      description:
        "Multilingual global B2B portal serving buyers across Asia and Europe with interactive product demos and quotation flows.",
      stats: "100% Core Web Vitals score",
      tags: ["Enterprise UI", "B2B Catalog", "Global CDN"],
    },
  ];

  const industries: { name: string; features: string; icon: LucideIcon }[] = [
    { name: "Healthcare", features: "Service pages, doctor profiles, appointment requests and location details", icon: HeartPulse },
    { name: "Retail and D2C", features: "Product catalogues, online stores, payments and order management", icon: ShoppingBag },
    { name: "Education and Training", features: "Course pages, batch information, admission enquiries and registrations", icon: GraduationCap },
    { name: "Restaurants and Hospitality", features: "Menus, galleries, booking enquiries and online ordering", icon: Utensils },
    { name: "Real Estate", features: "Property listings, enquiry forms and site-visit requests", icon: Building2 },
    { name: "Professional Services", features: "Service pages, team profiles, case studies and consultation enquiries", icon: BriefcaseBusiness },
    { name: "Manufacturing and Export", features: "Product specifications, downloadable catalogues and quotation requests", icon: Wrench },
    { name: "Travel and Tourism", features: "Package listings, itineraries, booking enquiries and customer support options", icon: MapPin },
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
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-slate-200 text-xs font-semibold uppercase tracking-wider mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Chennai Development Studio · Serving Businesses Across India
            </motion.div>

            <motion.h1
              initial={reduceMotion ? false : { opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white tracking-tight leading-[1.12] mb-6"
            >
              Website Development Company{" "}
              <span className="bg-gradient-to-r from-orange-200 via-orange-300 to-amber-100 bg-clip-text text-transparent">
                for Growing Businesses
              </span>
            </motion.h1>

            <motion.p
              initial={reduceMotion ? false : { opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.16 }}
              className="text-lg sm:text-xl text-slate-300 leading-relaxed mb-10 max-w-2xl"
            >
              SoftClinch provides business website development and WooCommerce store solutions from its Chennai development studio. We build fast, mobile-friendly, SEO-ready websites and conversion landing pages for small businesses and growing enterprises across India looking to improve search visibility, establish digital credibility, and convert website visitors into qualified customer inquiries.
            </motion.p>

            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.24 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
            >
              <a
                href={whatsappHeroUrl}
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
              initial={reduceMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.35 }}
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-slate-50 border border-slate-200/80 rounded-3xl p-8 hover:border-brand-navy/30 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-14 h-14 rounded-2xl bg-brand-navy text-white flex items-center justify-center mb-6 shadow-md shadow-brand-navy/15">
                      <Icon size={26} />
                    </div>
                    <h3 className="text-2xl font-display font-bold text-slate-900 mb-3">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed mb-6 text-sm">
                      {item.description}
                    </p>
                    <ul className="space-y-3 mb-8">
                      {item.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                          <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
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
                    Discuss on WhatsApp
                    <ArrowRight size={15} />
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

        {/* Portfolio Showcase */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-brand-terracotta text-xs font-bold uppercase tracking-widest block mb-3">
              Selected Work
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 mb-4">
              Recent Website & E-Commerce Projects
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
                    href={whatsappHeroUrl}
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

      {/* SECTION 4: WHATSAPP INTEGRATION VALUE PROP */}
      <section className="relative overflow-hidden bg-brand-navy px-5 py-20 text-white sm:px-8 sm:py-24 lg:px-10">
        <div className="absolute -right-36 -top-32 h-96 w-96 rounded-full bg-emerald-400/10 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[.9fr_1.1fr]">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-emerald-300">A direct way to connect</p>
            <h2 className="text-3xl font-bold leading-tight sm:text-4xl">Turn Website Visits into WhatsApp Conversations</h2>
            <p className="mt-5 text-base leading-7 text-slate-300">
              Give visitors a simple way to ask about your services, request product details, or discuss a requirement. A WhatsApp chat button opens an immediate conversation with a pre-filled message, helping customers contact your team directly from your website without filling out lengthy forms.
            </p>
            <a
              href={whatsappHeroUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex min-h-12 items-center gap-2 rounded-xl bg-emerald-600 px-6 py-3.5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-emerald-500 shadow-lg shadow-emerald-950/40"
            >
              <MessageSquare size={18} className="fill-current" /> Discuss WhatsApp Integration <ArrowRight size={16} />
            </a>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-6">
              <div className="mb-4 grid h-11 w-11 place-items-center rounded-xl bg-emerald-400/15 text-emerald-300"><MessageCircle size={21} /></div>
              <h3 className="text-lg font-bold">Start with Website Chat</h3>
              <ul className="mt-4 space-y-3 text-sm leading-5 text-slate-300">
                {["Click-to-chat buttons on relevant service pages.", "Pre-filled messages for products and inquiries.", "Zero friction contact option for mobile & desktop."].map((item) => (
                  <li key={item} className="flex gap-2"><Check size={16} className="mt-0.5 shrink-0 text-emerald-300" />{item}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-6">
              <div className="mb-4 grid h-11 w-11 place-items-center rounded-xl bg-orange-300/15 text-orange-200"><Sparkles size={21} /></div>
              <h3 className="text-lg font-bold">Scale with Inaiwazhi Automation</h3>
              <p className="mt-4 text-sm leading-6 text-slate-300">
                Seamlessly upgrade to official Meta WhatsApp Business API workflows, automated drip campaigns, and CRM synchronization through our Inaiwazhi platform.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: INDUSTRIES */}
      <section className="bg-white px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-brand-terracotta text-xs font-bold uppercase tracking-widest block mb-3">Industries</span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 mb-4">Tailored Solutions for Different Business Needs</h2>
            <p className="text-slate-600 text-base">We customize features and architectures according to your specific sector and audience.</p>
          </div>

          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="hidden grid-cols-[.75fr_1.25fr] bg-brand-navy px-7 py-4 text-xs font-bold uppercase tracking-[0.15em] text-white sm:grid">
              <span>Industry</span><span>Website features we build</span>
            </div>
            {industries.map(({ name, features, icon: Icon }, index) => (
              <div key={name} className={`grid gap-2 px-5 py-5 sm:grid-cols-[.75fr_1.25fr] sm:items-center sm:px-7 ${index > 0 ? "border-t border-slate-100" : ""}`}>
                <div className="flex items-center gap-3 font-bold text-slate-900">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-orange-50 text-brand-terracotta"><Icon size={17} /></span>
                  {name}
                </div>
                <p className="pl-12 text-sm leading-6 text-slate-600 sm:pl-0">{features}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: 4-STEP PROCESS */}
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

      {/* SECTION 7: FAQS */}
      <section className="py-24 bg-white" id="faq">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-brand-terracotta text-xs font-bold uppercase tracking-widest block mb-3">
              Got Questions?
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-600 text-base">
              Clear answers regarding our website development services, timelines, platforms, and technical standards.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="group bg-slate-50 rounded-2xl border border-slate-200/80 p-6 transition-all duration-300 open:bg-white open:shadow-lg open:border-brand-navy/20"
              >
                <summary className="flex justify-between items-center cursor-pointer list-none text-base sm:text-lg font-bold text-slate-900 group-hover:text-brand-navy transition-colors">
                  <span className="pr-4">{faq.question}</span>
                  <ChevronDown className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform duration-300 shrink-0" />
                </summary>
                <div className="mt-4 pt-4 border-t border-slate-200/60 text-slate-600 text-sm sm:text-base leading-relaxed">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8: FINAL CTA */}
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
}
