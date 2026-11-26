"use client"
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown, ChevronRight, MessageSquare, Globe, Cpu, Database, BarChart3, CheckCircle2, Star, Layers, Code } from 'lucide-react';
import { assetPath } from '@/lib/asset';
import { reviews } from '@/lib/reviews';
import { trackCtaClick, trackDemoRequest, trackWhatsAppClick } from '@/lib/analytics';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const slides = [
    {
      title: (
        <>
          SAP Consulting &amp;<br />
          AMS Support for<br />
          Mid-Size Enterprises
        </>
      ),
      subtitle: "Accelerate business operations with SLA-driven SAP AMS support, S/4HANA migrations, ECC rollouts, and enterprise system integration — Chennai & Global.",
      image: "/sap_consulting_hero_v2.webp",
      tag: "SAP Consulting & AMS",
      accent: "#A23B2A"
    },
    {
      title: (
        <>
          SLA-Driven SAP AMS &amp;<br />
          Enterprise Support<br />
          Management
        </>
      ),
      subtitle: "Maintain business continuity with incident management, change requests, user support, and configuration enhancements across your entire SAP landscape.",
      image: "/sap_consulting_hero_v2.webp",
      tag: "SAP AMS Support",
      accent: "#A23B2A"
    },
    {
      title: (
        <>
          Enterprise WhatsApp<br />
          Automation &amp; AI<br />
          Chatbot Platform
        </>
      ),
      subtitle: "Automate customer engagement, lead nurturing, support workflows, and marketing campaigns using WhatsApp Business API and AI-powered automation.",
      image: "/whatsapp_automation_hero_v2.webp",
      tag: "WhatsApp Automation",
      accent: "#22c55e"
    },
    {
      title: (
        <>
          Custom Software &amp;<br />
          Digital Growth<br />
          Solutions
        </>
      ),
      subtitle: "Scale your business with high-performance web engineering, custom eCommerce systems, and AI search optimization (SEO, GEO & AEO).",
      image: "/custom_app_dev_hero.webp",
      tag: "Enterprise Engineering",
      accent: "#3b82f6"
    }
  ];

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7500);
    return () => clearInterval(timer);
  }, [slides.length, isPaused]);

  return (
    <section
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="relative py-12 lg:py-24 overflow-hidden border-b border-slate-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[500px]">
          <div className="relative z-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <span className="inline-block px-4 py-1.5 rounded-full bg-slate-100 text-slate-900 text-sm font-semibold mb-6">
                  {slides[currentSlide].tag}
                </span>
                <h1 className="font-bold text-slate-900 mb-8" style={{ fontSize: "clamp(2rem, 5.5vw, 4.5rem)", lineHeight: 1.1, letterSpacing: "-0.03em" }}>
                  {slides[currentSlide].title}
                </h1>

                <p className="text-lg text-slate-500 mb-10 leading-relaxed max-w-xl">
                  {slides[currentSlide].subtitle}
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    onClick={() => trackCtaClick("Book a Free SAP Assessment", "home_hero_primary")}
                    className="bg-brand-navy text-white px-8 py-4 rounded-full text-base sm:text-lg font-semibold
                    hover:bg-gradient-to-r hover:from-brand-navy hover:to-[#A23B2A]
                    transition-all duration-300 text-center shadow-lg"
                  >
                    Book a Free SAP Assessment
                  </Link>
                  <a
                    href="https://wa.me/919445679878?text=Hello%20SoftClinch%2C%20I%20would%20like%20to%20discuss%20SAP%20consulting%20and%20AMS%20support."
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackWhatsAppClick("home_hero_secondary")}
                    className="bg-emerald-600 text-white px-7 py-4 rounded-full text-base sm:text-lg font-semibold text-center
                    transition-all duration-300 hover:bg-emerald-700 flex items-center justify-center gap-2 shadow-md"
                  >
                    <MessageSquare size={18} />
                    <span>Talk on WhatsApp (+91 94456 79878)</span>
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="relative flex items-center justify-center">
            <div className="absolute inset-0 bg-slate-50 rounded-[3rem] -z-10 blur-3xl opacity-50 transition-colors duration-1000" />

            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 1.1, rotate: 2 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative w-full max-w-[600px] aspect-square lg:aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl border border-white/20"
              >
                <Image
                  src={assetPath(slides[currentSlide].image)}
                  alt={slides[currentSlide].tag}
                  width={600}
                  height={450}
                  priority={currentSlide === 0}
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />

                <div className="absolute bottom-6 left-6 flex gap-2">
                  {slides.map((_, i) => (
                    <div
                      key={i}
                      className={`h-1.5 rounded-full transition-all duration-500 ${currentSlide === i ? "w-8 bg-white" : "w-2 bg-white/40"
                        }`}
                    />
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            <div className={`absolute -top-10 -right-10 w-40 h-40 rounded-full blur-[80px] opacity-20 transition-colors duration-1000`} style={{ backgroundColor: slides[currentSlide].accent }} />
          </div>
        </div>
      </div>
    </section>
  );
};

const ClientLogos = () => {
  const clients = [
    { name: 'Prenora Investment Holding', logoPath: '/client-logos/sc-clients-001.webp', bg: 'bg-white' },
    { name: 'Rane', logoPath: '/client-logos/sc-clients-002.webp', bg: 'bg-white' },
    { name: 'NTT DATA', logoPath: '/client-logos/sc-clients-003.webp', bg: 'bg-white' },
    { name: 'Fujitsu', logoPath: '/client-logos/sc-clients-004.webp', bg: 'bg-white' },
    { name: 'Star Eltech', logoPath: '/client-logos/sc-clients-005.webp', bg: 'bg-white' },
    // TODO: Replace with verified real client names once confirmed with client permissions
    { name: 'Digitide', logoPath: '/client-logos/client-logo-007.webp', bg: 'bg-white' },
    { name: 'Stobay', logoPath: '/client-logos/client-logo-008.webp', bg: 'bg-white' },
  ];

  return (
    <section className="py-16 bg-slate-50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1.5 shadow-sm mb-4">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} fill="currentColor" />
              ))}
            </div>
            <span className="text-xs font-bold text-slate-800">5.0 Google Rating</span>
            <span className="text-xs text-slate-300">•</span>
            <span className="text-xs font-medium text-slate-600">Enterprise Verified Reviews</span>
          </div>
          <p className="text-xs uppercase tracking-[0.25em] text-slate-500 font-bold mb-2">Trusted By Enterprise Leaders</p>
          <h2 className="text-2xl lg:text-3xl font-display font-bold text-slate-900">
            Proven SAP &amp; Digital Engineering for Growing Enterprises
          </h2>
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
                aria-hidden={index >= clients.length ? "true" : undefined}
                className="flex min-w-[180px] items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 px-6 py-5"
              >
                <Image
                  src={assetPath(client.logoPath)}
                  alt={index >= clients.length ? "" : `${client.name} client logo`}
                  width={112}
                  height={56}
                  loading="lazy"
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

const Stats = () => (
  <section className="py-20 bg-brand-navy">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        {[
          { label: 'Years of Enterprise SAP & Tech Consulting', value: '10+' },
          { label: 'Successful Enterprise & Digital Projects', value: '150+' },
          { label: 'Enterprise System Uptime Commitment', value: '{{ENTERPRISE_SYSTEM_UPTIME_SLA}}' },
          { label: 'SAP, Tech & Digital Growth Specialists', value: '45+' }
        ].map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-white/10 border border-white/20 p-8 sm:p-10 rounded-[2.5rem] shadow-xl hover:shadow-2xl hover:-translate-y-1 hover:bg-white/15 transition-all duration-300"
          >
            <div className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-2">{stat.value}</div>
            <div className="text-white/70 text-xs uppercase tracking-widest font-bold">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const AboutSoftClinch = () => (
  <section className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div>
          <span className="inline-block px-4 py-1.5 rounded-full bg-slate-100 text-slate-900 text-xs font-bold uppercase tracking-widest mb-6">
            About SoftClinch
          </span>
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-slate-900 mb-6">
            Enterprise Technology &amp; Growth Solutions
          </h2>
          <p className="text-slate-600 leading-relaxed mb-6 font-semibold text-slate-800">
            At SoftClinch, we provide expert{" "}
            <Link href="/services/sap-consulting/" className="text-brand-navy underline hover:text-brand-terracotta">
              SAP consulting and S/4HANA implementation services
            </Link>{" "}
            to integrate, optimize, and scale enterprise environments for maximum operational efficiency and seamless digital transformation.
          </p>
          <p className="text-slate-600 leading-relaxed mb-6">
            We help businesses automate operations, improve customer engagement, and accelerate growth with enterprise-grade digital solutions,{" "}
            <Link href="/services/ai-powered-business-systems/" className="text-brand-navy underline hover:text-brand-terracotta">
              AI-powered business systems
            </Link>
            , and performance-driven marketing strategies.
          </p>
          <p className="text-slate-600 leading-relaxed mb-6">
            From workflow automation to SEO,{" "}
            <Link href="/custom-commerce-development/" className="text-brand-navy underline hover:text-brand-terracotta">
              custom eCommerce development
            </Link>
            , and custom application engineering — we build scalable systems designed for long-term business success.
          </p>
          <div>
            <Link
              href="/blog/"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-brand-navy hover:text-brand-terracotta transition-colors"
            >
              <span>Explore our technology & business insights on our blog</span>
              <ChevronRight size={16} />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:pt-14">
          {[
            "Enterprise-grade digital solutions built for modern business growth.",
            "SAP consulting, automation, and application development under one delivery model.",
            "SEO, GEO, and AEO strategies designed for search visibility and discoverability.",
            "Scalable systems that improve efficiency, engagement, and long-term business performance.",
          ].map((item, i) => (
            <div key={i} className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm">
              <CheckCircle2 className="text-brand-terracotta mb-4" size={22} />
              <p className="text-slate-600 text-sm leading-relaxed">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const SAPConsultingAMSOverview = () => {
  const sapConsultingFeatures = [
    "SAP S/4HANA Implementations",
    "SAP ECC Implementations & Rollouts",
    "SAP Business Process Optimization",
    "SAP Integration & Data Migration",
    "SAP Solution Architecture",
    "SAP SD, MM, FI, CO, PP, QM & WM Consulting",
    "SAP Global Rollout & Localization Support",
    "SAP Upgrade & Transformation Projects"
  ];

  const sapAmsFeatures = [
    "Incident Management & Resolution",
    "Change Request Management",
    "SAP Functional Support",
    "User Assistance & Knowledge Transfer",
    "Configuration & Enhancement Support",
    "SAP Performance Optimization",
    "Business Process Improvements",
    "SLA-Based Support Management",
    "SAP Upgrade & Enhancement Assistance"
  ];

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden border-t border-b border-slate-200/60">
      {/* Ambient background glows */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-navy/[0.03] rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-terracotta/[0.02] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-navy/5 text-brand-navy text-xs font-bold uppercase tracking-widest mb-4">
            Enterprise SAP Solutions
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-slate-900 mb-6 leading-tight">
            Trusted SAP Consulting, Implementation &amp; AMS Partner for Growing Enterprises
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
            Delivering SAP S/4HANA Implementations, Global Rollouts, Business Process Optimization, and Application Management Services that drive operational excellence and measurable business outcomes.
          </p>
        </div>

        {/* Side-by-side Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          
          {/* Left Column - SAP Consulting */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col bg-white border border-slate-200/80 rounded-[2.5rem] p-8 sm:p-10 shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-brand-navy to-brand-navy/60" />
            
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-brand-navy/5 rounded-2xl flex items-center justify-center text-brand-navy">
                <Database size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900">
                  SAP Implementation &amp; Rollout
                </h3>
                <p className="text-xs uppercase tracking-wider text-brand-navy/80 font-bold mt-0.5">
                  Strategic Systems &amp; Deployments
                </p>
              </div>
            </div>

            <h4 className="text-lg font-bold text-slate-800 mb-4">
              Transform Business Operations with Expert SAP Consulting
            </h4>

            <div className="space-y-4 text-slate-600 text-sm leading-relaxed mb-8 flex-1">
              <p>
                At SoftClinch, we help organizations unlock the full potential of SAP through strategic consulting, seamless implementations, and successful global rollouts. With 10+ years of SAP delivery experience across Manufacturing, Automotive, Consumer Durables, Retail, Garments, Warehousing, and Distribution sectors, our SAP experts deliver solutions that align technology with business objectives.
              </p>
              <p>
                From business process assessment and solution architecture to SAP S/4HANA implementation, ECC upgrades, system integration, and multi-location rollouts, we ensure every SAP project is executed with precision, transparency, and measurable business value. Our consultants work closely with stakeholders to streamline operations, improve visibility, optimize supply chains, and create scalable digital foundations for future growth.
              </p>
              <p>
                Whether you are planning your first SAP implementation, migrating to SAP S/4HANA, expanding to new business locations, or integrating SAP with CRM and third-party applications, SoftClinch delivers industry-focused SAP solutions that accelerate transformation and maximize ROI.
              </p>
            </div>

            {/* Checklist */}
            <div className="mb-8">
              <p className="font-bold text-slate-900 text-sm mb-4 uppercase tracking-wider">
                Our SAP Expertise
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {sapConsultingFeatures.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 size={16} className="text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 text-xs font-semibold leading-snug">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Quote Box & CTA */}
            <div className="mt-8 space-y-6">
              <div className="bg-slate-50 border-l-4 border-brand-navy p-4 rounded-r-2xl">
                <p className="text-slate-700 text-xs italic font-medium">
                  &quot;We don&apos;t just implement SAP—we build intelligent business ecosystems that drive operational excellence.&quot;
                </p>
              </div>
              <a
                href="mailto:venkat@softclinch.com"
                onClick={() => trackCtaClick("Contact SAP Director", "home_sap_director")}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-brand-navy text-white font-bold text-sm rounded-full hover:bg-brand-terracotta hover:scale-[1.02] transition-all duration-300 w-full sm:w-auto"
              >
                Contact SAP Director <ChevronRight size={16} />
              </a>
            </div>
          </motion.div>

          {/* Right Column - SAP AMS */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col bg-white border border-slate-200/80 rounded-[2.5rem] p-8 sm:p-10 shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-brand-terracotta to-brand-terracotta/60" />
            
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-brand-terracotta/5 rounded-2xl flex items-center justify-center text-brand-terracotta">
                <Cpu size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900">
                  SAP AMS Support
                </h3>
                <p className="text-xs uppercase tracking-wider text-brand-terracotta/80 font-bold mt-0.5">
                  Application Management Services
                </p>
              </div>
            </div>

            <h4 className="text-lg font-bold text-slate-800 mb-4">
              Reliable SAP AMS Support for Business Continuity
            </h4>

            <div className="space-y-4 text-slate-600 text-sm leading-relaxed mb-8 flex-1">
              <p>
                A successful SAP system requires more than implementation—it requires dependable ongoing support to keep business operations running smoothly. SoftClinch&apos;s SAP Application Management Services (AMS) provide structured, SLA-driven support that helps organizations maintain system stability, resolve issues quickly, and continuously improve business processes.
              </p>
              <p>
                Our AMS team works as an extension of your business, providing functional support, incident management, change request handling, user assistance, configuration updates, enhancement support, and performance optimization across your SAP landscape. Through a well-defined support framework, we ensure faster issue resolution, minimal disruption, and consistent operational efficiency.
              </p>
              <p>
                From day-to-day user support to complex functional enhancements and integration challenges, our experienced consultants bring deep business process knowledge and technical expertise to help organizations maximize the value of their SAP investments.
              </p>
            </div>

            {/* Checklist */}
            <div className="mb-8">
              <p className="font-bold text-slate-900 text-sm mb-4 uppercase tracking-wider">
                SAP AMS Services Include
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {sapAmsFeatures.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 size={16} className="text-brand-terracotta mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 text-xs font-semibold leading-snug">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Quote Box & CTA */}
            <div className="mt-8 space-y-6">
              <div className="bg-slate-50 border-l-4 border-brand-terracotta p-4 rounded-r-2xl">
                <p className="text-slate-700 text-xs italic font-medium">
                  &quot;With SoftClinch SAP AMS, your teams can focus on business growth while we ensure your SAP environment operates efficiently, reliably, and without interruption.&quot;
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/sap-ams-support/"
                  className="inline-flex items-center gap-2 font-bold text-brand-navy hover:text-brand-terracotta text-sm transition-colors"
                >
                  SAP AMS support services <ChevronRight size={16} />
                </Link>
                <a
                  href="mailto:venkat@softclinch.com"
                  onClick={() => trackCtaClick("Contact AMS Head", "home_ams_head")}
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3 bg-brand-terracotta text-white font-bold text-sm rounded-full hover:bg-brand-navy hover:scale-[1.02] transition-all duration-300 w-full sm:w-auto"
                >
                  Contact AMS Head <ChevronRight size={16} />
                </a>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

const CoreServices = () => {
  const sapServices = [
    {
      title: 'SAP S/4HANA Migration & Implementation',
      description: 'End-to-end SAP consulting, S/4HANA transitions, ECC implementations, business process optimization, and multi-location global rollouts.',
      icon: <Database className="text-brand-navy" size={24} />,
      path: '/services/sap-consulting/'
    },
    {
      title: 'SAP AMS Support Services',
      description: 'SLA-backed Application Management Services (L1–L4 support), continuous incident resolution, system enhancements, and performance optimization.',
      icon: <Cpu className="text-brand-navy" size={24} />,
      path: '/sap-ams-support/'
    },
    {
      title: 'SAP Custom Applications & Integrations',
      description: 'Secure custom web applications, executive dashboards, and cloud integrations connecting SAP systems with modern enterprise workflows.',
      icon: <Code className="text-brand-navy" size={24} />,
      path: '/custom-application-development/'
    },
  ];

  const digitalServices = [
    {
      title: 'Website Development',
      description: 'Fast, secure, SEO-ready business websites built on Next.js and modern stacks designed for conversions and visibility.',
      icon: <Globe className="text-brand-terracotta" size={24} />,
      path: '/website-development/'
    },
    {
      title: 'Custom Commerce Development',
      description: 'High-converting custom eCommerce stores, multi-channel commerce architectures, and seamless ERP/inventory integrations.',
      icon: <Layers className="text-brand-terracotta" size={24} />,
      path: '/custom-commerce-development/'
    },
    {
      title: 'Digital Marketing & AI Search (SEO / AEO)',
      description: 'Result-oriented SEO, GEO, AEO, PPC, and AI search visibility strategies optimized to drive qualified B2B enterprise leads.',
      icon: <BarChart3 className="text-brand-terracotta" size={24} />,
      path: '/digital-marketing/'
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-slate-100 text-slate-900 text-xs font-bold uppercase tracking-widest mb-4">
            Enterprise Solutions
          </span>
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-slate-900 mb-4">
            Enterprise SAP &amp; Digital Solutions
          </h2>
          <p className="text-slate-600 max-w-2xl">
            From enterprise SAP implementations and 24x7 AMS support to custom web software and digital growth systems, SoftClinch engineers high-reliability solutions for modern businesses.
          </p>
        </div>

        {/* Group 1: SAP Services First */}
        <div className="mb-14">
          <div className="flex items-center justify-between mb-6 pb-2 border-b border-slate-100">
            <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-brand-navy" />
              SAP Enterprise Services
            </h3>
            <Link
              href="/services"
              className="text-sm font-semibold text-brand-navy hover:text-brand-terracotta transition-colors flex items-center gap-1"
            >
              View all services <ChevronRight size={14} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {sapServices.map((service, index) => (
              <Link key={index} href={service.path} className="block group">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-slate-50 p-8 rounded-2xl border border-slate-200 hover:border-brand-navy hover:shadow-lg transition-all h-full flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-navy group-hover:text-white transition-colors shadow-sm">
                      {service.icon}
                    </div>
                    <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-brand-navy transition-colors">{service.title}</h4>
                    <p className="text-slate-600 text-sm leading-relaxed mb-6">{service.description}</p>
                  </div>
                  <div className="text-xs font-bold text-brand-navy group-hover:text-brand-terracotta flex items-center gap-1">
                    Learn more <ChevronRight size={14} />
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>

        {/* Group 2: Digital Growth Services */}
        <div>
          <div className="flex items-center justify-between mb-6 pb-2 border-b border-slate-100">
            <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-brand-terracotta" />
              Digital Growth &amp; Engineering Services
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {digitalServices.map((service, index) => (
              <Link key={index} href={service.path} className="block group">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-slate-50 p-8 rounded-2xl border border-slate-200 hover:border-brand-terracotta hover:shadow-lg transition-all h-full flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-terracotta group-hover:text-white transition-colors shadow-sm">
                      {service.icon}
                    </div>
                    <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-brand-terracotta transition-colors">{service.title}</h4>
                    <p className="text-slate-600 text-sm leading-relaxed mb-6">{service.description}</p>
                  </div>
                  <div className="text-xs font-bold text-brand-terracotta group-hover:text-brand-navy flex items-center gap-1">
                    Learn more <ChevronRight size={14} />
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const ProductAuthority = () => {
  return (
    <section className="py-16 bg-slate-50 border-t border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-[2.5rem] overflow-hidden bg-gradient-to-r from-slate-950 via-slate-900 to-emerald-950 p-8 sm:p-12 lg:p-14 text-white shadow-xl border border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_0.7fr] gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-widest mb-4">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Enterprise Product • Inaiwazhi
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold mb-4 leading-tight">
                Inaiwazhi — Enterprise WhatsApp Automation Platform
              </h2>
              <p className="text-slate-300 text-base leading-relaxed mb-6 max-w-2xl">
                Built on the official Meta WhatsApp Cloud API. Automate customer broadcasts, integrate CRM &amp; ERP systems (including SAP), and deploy 24x7 intelligent support workflows.
              </p>
              <div className="flex flex-wrap gap-4 items-center">
                <a
                  href="https://inaiwazhi.com/?utm_source=softclinch.com&utm_medium=referral&utm_campaign=home_card"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackCtaClick("Visit Inaiwazhi", "home_inaiwazhi_card")}
                  className="px-6 py-3.5 bg-emerald-500 text-black font-bold rounded-full hover:bg-white hover:scale-105 transition-all duration-300 text-sm shadow-lg shadow-emerald-500/20 flex items-center gap-2"
                >
                  <span>Visit inaiwazhi.com</span>
                  <ChevronRight size={16} />
                </a>
                <Link
                  href="/contact"
                  onClick={() => {
                    trackDemoRequest({ cta_location: "home_inaiwazhi_card", cta_text: "Request WhatsApp Demo" });
                    trackCtaClick("Request WhatsApp Demo", "home_inaiwazhi_card");
                  }}
                  className="px-6 py-3.5 bg-white/10 text-white font-semibold rounded-full hover:bg-white/20 transition-all duration-300 text-sm"
                >
                  Request Platform Demo
                </Link>
                <Link
                  href="/inaiwazhi-whatsapp-automation/"
                  className="text-xs text-slate-400 hover:text-white underline underline-offset-4 transition-colors"
                >
                  View feature details
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 text-sm">
              {[
                { title: "Broadcast Campaigns", desc: "Automated bulk messaging with verified templates" },
                { title: "ERP & SAP Webhooks", desc: "Real-time dispatch and order notifications" },
                { title: "AI Chat Automation", desc: "Intelligent multi-lingual conversational bots" },
                { title: "Analytics Dashboard", desc: "Delivery, read rates, and conversion tracking" },
              ].map((item, idx) => (
                <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl p-4">
                  <div className="text-emerald-400 font-bold text-xs mb-1 flex items-center gap-1.5">
                    <CheckCircle2 size={13} /> {item.title}
                  </div>
                  <div className="text-slate-400 text-xs leading-snug">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Industries = () => (
  <section className="py-24 bg-slate-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div>
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-slate-900 mb-8">Industries We Serve</h2>
          <p className="text-slate-600 mb-10 leading-relaxed">
            We support businesses that need secure systems, automation workflows, better customer engagement, and scalable digital transformation across high-impact sectors.
          </p>
          <div className="space-y-6">
            {[
              { title: 'Healthcare', desc: 'Secure communication systems, automation workflows, and scalable healthcare technology solutions.' },
              { title: 'Finance & Banking', desc: 'Enterprise-grade automation, API integrations, and secure digital systems for financial operations.' },
              { title: 'Manufacturing', desc: 'SAP-integrated automation, workflow optimization, and operational efficiency solutions.' },
              { title: 'Real Estate', desc: 'Lead automation, customer engagement systems, and WhatsApp communication solutions for real estate businesses.' }
            ].map((industry, i) => (
              <div key={i} className="flex gap-4 p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
                <CheckCircle2 className="text-brand-terracotta flex-shrink-0" size={24} />
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">{industry.title}</h4>
                  <p className="text-slate-600 text-sm">{industry.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="aspect-square bg-brand-navy rounded-[3rem] overflow-hidden">
            <Image
              src="/about_hero_industries.webp"
              alt="Enterprise Solutions"
              width={500}
              height={500}
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-10 -left-10 bg-white p-10 rounded-3xl shadow-2xl border border-slate-100 hidden lg:block">
            <div className="text-brand-navy font-display font-bold text-4xl mb-2">Industry</div>
            <div className="text-slate-500 text-sm font-semibold uppercase tracking-wider">Focused Transformation</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const WhySoftClinch = () => {
  const reasons = [
    { num: '01', title: 'SAP & Enterprise Expertise', desc: 'Deep expertise in SAP consulting, enterprise workflows, automation, and scalable digital transformation solutions.', accent: 'from-brand-navy to-[#1e3a5f]' },
    { num: '02', title: 'Business-Focused Technology Solutions', desc: 'We combine technical expertise, automation systems, and growth-focused strategies to help businesses improve efficiency and generate measurable results.', accent: 'from-[#A23B2A] to-[#c0483a]' },
    { num: '03', title: 'Enterprise-Grade Development', desc: 'Secure, scalable, and high-performance digital systems built for modern business requirements.', accent: 'from-brand-navy to-[#1e3a5f]' },
    { num: '04', title: 'SEO & AI Search Optimization', desc: 'Improve visibility across Google Search, AI-powered search engines, and modern digital platforms.', accent: 'from-[#A23B2A] to-[#c0483a]' },
    { num: '05', title: 'Automation-Led Growth Systems', desc: 'From messaging workflows to software platforms, we build systems that support scalability, engagement, and growth.', accent: 'from-brand-navy to-[#1e3a5f]' },
  ];

  return (
    <section className="py-24 bg-brand-navy overflow-hidden relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brand-navy/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white/70 text-xs font-bold uppercase tracking-widest mb-4">
            Why Choose Us
          </span>
          <h2 className="text-3xl lg:text-5xl font-display font-bold text-white mb-4 leading-tight">
            Why Businesses Choose <span className="text-[#A23B2A]">SoftClinch</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-lg">
            We combine technical expertise, business-focused strategy, and enterprise-grade execution to help organizations grow with confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reasons.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className={`group relative bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 overflow-hidden ${i === 4 ? 'md:col-span-2 lg:col-span-1' : ''}`}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-white opacity-60 group-hover:opacity-100 transition-opacity" />

              <div className="inline-flex items-center justify-center w-10 h-10 rounded-2xl bg-white/10 border border-white/20 text-white font-black font-display text-sm mb-6 group-hover:bg-[#A23B2A]/20 group-hover:border-[#A23B2A]/40 transition-all duration-300">
                {item.num}
              </div>

              <h4 className="text-white font-bold text-lg mb-3 group-hover:text-white transition-colors">{item.title}</h4>
              <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors">{item.desc}</p>

              <div className="absolute bottom-0 right-0 w-24 h-24 bg-brand-navy/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.45, duration: 0.5 }}
            className="relative bg-gradient-to-br from-[#A23B2A] to-brand-navy rounded-3xl p-8 flex flex-col justify-between overflow-hidden group border border-white/10"
          >
            <div>
              <BarChart3 size={40} className="text-white/30 mb-6" />
              <h4 className="text-white font-bold text-xl mb-3 leading-tight">Ready to grow with AI, SEO, SAP, and automation?</h4>
              <p className="text-white/60 text-sm leading-relaxed">Talk to our team about the right mix of enterprise consulting, automation, and digital growth solutions for your business.</p>
            </div>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 bg-white text-brand-navy font-bold text-sm px-6 py-3 rounded-full hover:bg-slate-100 transition-colors self-start"
            >
              Talk to Us <ChevronRight size={16} />
            </Link>
            <div className="absolute -top-8 -right-8 w-40 h-40 bg-white/5 rounded-full blur-2xl pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Process = () => {
  const steps = [
    {
      step: '01',
      title: 'Consultation',
      desc: 'Understanding your business goals, operational challenges, and technical requirements.',
      icon: <MessageSquare className="text-white group-hover:text-[#A23B2A] transition-colors" size={24} />
    },
    {
      step: '02',
      title: 'Strategy & Design',
      desc: 'Designing scalable architectures, database schemas, and tailored integration plans.',
      icon: <Layers className="text-white group-hover:text-[#A23B2A] transition-colors" size={24} />
    },
    {
      step: '03',
      title: 'Development',
      desc: 'Building secure, enterprise-ready systems using Next.js, Cloudflare, and robust backends.',
      icon: <Code className="text-white group-hover:text-[#A23B2A] transition-colors" size={24} />
    },
    {
      step: '04',
      title: 'Integration',
      desc: 'Connecting SAP workflows, custom APIs, WhatsApp communication, and databases.',
      icon: <Database className="text-white group-hover:text-[#A23B2A] transition-colors" size={24} />
    },
    {
      step: '05',
      title: 'Support & Growth',
      desc: 'Continuous optimization, AMS support, performance tracking, and feature scaling.',
      icon: <BarChart3 className="text-white group-hover:text-[#A23B2A] transition-colors" size={24} />
    }
  ];

  return (
    <section className="py-24 bg-brand-navy overflow-hidden relative">
      {/* Background Decorative Gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#A23B2A]/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute top-10 right-10 w-80 h-80 bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-slate-400 text-xs font-bold uppercase tracking-widest mb-4">
            How We Deliver
          </span>
          <h2 className="text-3xl lg:text-5xl font-display font-bold text-white mb-6">
            Our Structured Process
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
            From initial consultation to deployment and long-term support, we follow a transparent and agile workflow focused on business results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 relative">
          {/* Timeline Connector Line */}
          <div className="hidden lg:block absolute top-[4.25rem] left-[5%] right-[5%] h-[2px] bg-gradient-to-r from-[#A23B2A]/20 via-blue-500/20 to-emerald-500/20 pointer-events-none" />

          {steps.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="relative z-10 group"
            >
              {/* Step indicator and Icon */}
              <div className="flex flex-col items-center lg:items-start mb-6">
                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shadow-xl group-hover:border-[#A23B2A] group-hover:bg-white/10 transition-all duration-300 relative overflow-hidden">
                  <div className="absolute -top-1 -right-1 pr-2 pt-1 text-[10px] font-mono font-bold text-slate-500 group-hover:text-[#A23B2A] transition-colors">
                    {item.step}
                  </div>
                  <div className="mt-1">
                    {item.icon}
                  </div>
                </div>
              </div>

              {/* Card Container */}
              <div className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-sm shadow-xl group-hover:bg-white/10 group-hover:border-white/20 group-hover:-translate-y-2 group-hover:shadow-2xl transition-all duration-500 h-[calc(100%-5.5rem)] flex flex-col justify-between">
                <div>
                  <div className="w-8 h-[2px] bg-gradient-to-r from-[#A23B2A] to-[#c0483a] group-hover:w-full transition-all duration-500 mb-6" />
                  <h4 className="text-xl font-bold text-white mb-4 group-hover:text-[#A23B2A] transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors">
                    {item.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
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
          @keyframes homeMarquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
          .home-marquee-track { display: flex; width: max-content; animation: homeMarquee 30s linear infinite; }
          .home-marquee-track:hover { animation-play-state: paused; }
        `}</style>
        <div className="overflow-hidden w-full">
          <div className="home-marquee-track gap-5 py-3 px-4">
            {reviews.map((t, i) => (
              <div key={`home-rev-pri-${t.name}-${i}`} className="w-[300px] shrink-0 bg-slate-50 border border-slate-100 rounded-[2rem] px-6 py-5 flex flex-col gap-3 hover:shadow-xl transition-all cursor-default group">
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
            {reviews.map((t, i) => (
              <div key={`home-rev-dup-${t.name}-${i}`} aria-hidden="true" className="w-[300px] shrink-0 bg-slate-50 border border-slate-100 rounded-[2rem] px-6 py-5 flex flex-col gap-3 hover:shadow-xl transition-all cursor-default group">
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
};


const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "Do you provide SAP AMS support in Chennai?",
      a: "Yes. SoftClinch provides SLA-driven SAP AMS support, S/4HANA migrations, ECC rollouts, and functional consulting across Chennai, India, and global locations with 24x7 coverage."
    },
    {
      q: "What core technology services does SoftClinch offer?",
      a: "We specialize in SAP consulting and AMS support, custom web and mobile application engineering, high-performance website development, custom eCommerce, and performance digital marketing."
    },
    {
      q: "What is Inaiwazhi WhatsApp automation?",
      a: "Inaiwazhi is SoftClinch's enterprise communication platform powered by the official Meta Cloud API, enabling broadcast campaigns, CRM webhook integrations, and automated customer support workflows."
    },
    {
      q: "Can SoftClinch integrate custom applications with enterprise SAP systems?",
      a: "Yes. Our engineering practice specializes in connecting custom web applications, customer portals, and WhatsApp messaging pipelines with SAP S/4HANA, ECC, and relational databases."
    },
    {
      q: "What are your support SLAs and response times?",
      a: "We deliver structured SLA frameworks with defined response windows (L1 to L4 support tiers) tailored to enterprise business criticality {{VERIFY_SLA_TIERS}}."
    },
    {
      q: "Where is SoftClinch located, and how can we schedule an assessment?",
      a: "Our corporate office is located at 30, 53rd St, Ashok Nagar, Chennai 600083. You can call +91 94456 79878 or submit our consultation form to book an assessment."
    }
  ];

  const leftColumnFaqs = faqs.slice(0, 3);
  const rightColumnFaqs = faqs.slice(3, 6);

  const FAQItem = ({
    faq,
    index,
  }: {
    faq: (typeof faqs)[number];
    index: number;
  }) => {
    const isOpen = openIndex === index;
    return (
      <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
        <button
          onClick={() => setOpenIndex(isOpen ? null : index)}
          aria-expanded={isOpen}
          aria-controls={`faq-answer-${index}`}
          className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
        >
          <span className="font-bold text-slate-900 leading-tight">{faq.q}</span>
          <ChevronDown
            className={`flex-shrink-0 text-slate-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
            size={20}
          />
        </button>
        {/* Always rendered in server HTML for SEO and screen readers; toggled smoothly via CSS grid */}
        <div
          id={`faq-answer-${index}`}
          className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${
            isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}
          aria-hidden={!isOpen}
        >
          <div className="overflow-hidden">
            <div className="px-6 pb-6 text-slate-600 text-sm leading-relaxed border-t border-slate-50 pt-4">
              {faq.a}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-slate-600">Answers for businesses evaluating SoftClinch for SAP consulting, automation, SEO, and custom software solutions.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-6">
            {leftColumnFaqs.map((faq, i) => (
              <FAQItem key={i} faq={faq} index={i} />
            ))}
          </div>
          <div className="space-y-6">
            {rightColumnFaqs.map((faq, i) => (
              <FAQItem key={i + 3} faq={faq} index={i + 3} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export const Home = () => {
  return (
    <>
      <Hero />
      <ClientLogos />
      <Stats />
      <AboutSoftClinch />
      <SAPConsultingAMSOverview />
      <CoreServices />
      <ProductAuthority />
      <Process />
      <Industries />
      <WhySoftClinch />
      <Testimonials />
      <FAQ />
    </>
  );
};
