"use client"
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ChevronDown, ChevronRight, MessageSquare, Globe, Cpu, Database, BarChart3, CheckCircle2, Star, Layers, Code } from 'lucide-react';
import { assetPath } from '@/lib/asset';
import { reviews } from '@/lib/reviews';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: (
        <>
          SAP Consulting &amp;<br />
          Enterprise Digital<br />
          Transformation
        </>
      ),
      subtitle: "Accelerate business growth with SAP consulting, AMS support, workflow optimization, enterprise automation, and scalable digital transformation solutions.",
      image: "/sap_consulting_hero_v2.png",
      tag: "SAP Consulting",
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
      image: "/whatsapp_automation_hero_v2.png",
      tag: "WhatsApp Automation",
      accent: "#22c55e"
    },
    {
      title: (
        <>
          SEO, GEO &amp;<br />
          AI-Powered Digital<br />
          Growth Solutions
        </>
      ),
      subtitle: "Improve rankings, generate leads, and grow your business with SEO, GEO, AEO, PPC, AI search optimization, and performance marketing strategies.",
      image: "/digital_marketing_hero_v2.png",
      tag: "Digital Growth",
      accent: "#0f172a"
    },
    {
      title: (
        <>
          SAP Consulting,<br />
          AI Automation &amp;<br />
          Digital Growth Solutions
        </>
      ),
      subtitle: "Scale your business with SAP consulting, WhatsApp automation, AI-powered marketing, SEO services, and custom software solutions built for modern enterprises.",
      image: "/custom_app_dev_hero.png",
      tag: "Enterprise Solutions",
      accent: "#3b82f6"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative py-12 lg:py-24 overflow-hidden border-b border-slate-100">
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
                    className="bg-brand-navy text-white px-8 py-4 rounded-full text-lg font-semibold
                    hover:bg-gradient-to-r hover:from-brand-navy hover:to-[#A23B2A]
                    transition-all duration-300 text-center"
                  >
                    Request Consultation
                  </Link>
                  <Link
                    href="/services"
                    className="bg-[#A23B2A] text-white border border-[#A23B2A]
                    px-8 py-4 rounded-full text-lg font-semibold text-center
                    transition-all duration-300
                    hover:bg-gradient-to-r
                    hover:from-[#A23B2A]/90
                    hover:to-brand-navy/90
                    hover:border-transparent"
                  >
                    Explore Services
                  </Link>
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
                <img
                  src={assetPath(slides[currentSlide].image)}
                  alt={slides[currentSlide].tag}
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

const Stats = () => (
  <section className="py-24 bg-brand-navy">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        {[
          { label: 'Years of Technology & Consulting Experience', value: '10+' },
          { label: 'Successful Enterprise & Digital Projects', value: '150+' },
          { label: 'Reliable Automation & Messaging Infrastructure', value: '99.9%' },
          { label: 'Experts in SAP, Automation & Digital Growth', value: '45+' }
        ].map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-white/10 border border-white/20 p-10 rounded-[2.5rem] shadow-xl hover:shadow-2xl hover:-translate-y-1 hover:bg-white/15 transition-all duration-300"
          >
            <div className="text-4xl lg:text-5xl font-display font-bold text-white mb-2">{stat.value}</div>
            <div className="text-white/70 text-xs uppercase tracking-widest font-bold">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

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
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
          <p className="text-slate-600 leading-relaxed mb-6">
            SoftClinch helps businesses automate operations, improve customer engagement, and accelerate growth with enterprise-grade digital solutions, SAP consulting, AI automation, and performance-driven marketing strategies.
          </p>
          <p className="text-slate-600 leading-relaxed">
            From SAP implementation and enterprise automation to SEO, AI search optimization, and custom application development — we build scalable systems designed for long-term business success.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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

const CoreServices = () => {
  const services = [
    {
      title: 'Digital Marketing & Performance Growth',
      description: 'Grow your business with SEO, GEO, AEO, PPC, and analytics-driven marketing strategies optimized for Google Search, AI search engines, and modern digital platforms.',
      icon: <Globe className="text-slate-900" size={24} />,
      path: '/digital-marketing'
    },
    {
      title: 'Custom Application Development',
      description: 'Build scalable SaaS platforms, enterprise web applications, mobile apps, dashboards, and secure API integrations tailored to your business workflows.',
      icon: <Cpu className="text-slate-900" size={24} />,
      path: '/custom-application-development'
    },
    {
      title: 'SAP Consulting & AMS Support',
      description: 'Enterprise SAP consulting services focused on implementation, AMS support, workflow optimization, SAP migration, and scalable business transformation solutions.',
      icon: <Database className="text-slate-900" size={24} />,
      path: '/sap-ams-support'
    },
    {
      title: 'WhatsApp Automation Solutions',
      description: 'Automate customer communication, support workflows, lead nurturing, and marketing campaigns with enterprise-grade WhatsApp Business API automation solutions.',
      icon: <MessageSquare className="text-slate-900" size={24} />,
      path: '/inaiwazhi-whatsapp-automation'
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-slate-900 mb-4">Our Services</h2>
          <p className="text-slate-600 max-w-2xl">SoftClinch helps businesses scale with SAP consulting, WhatsApp automation, SEO, AI-powered marketing, enterprise software development, and digital transformation solutions.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Link key={index} href={service.path} className="block group">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-50 p-8 rounded-2xl border border-[#A23B2A] hover:shadow-lg transition-all h-full"
              >
                <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-navy group-hover:text-white transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-brand-navy transition-colors">{service.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{service.description}</p>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProductAuthority = () => {
  const features = [
    { title: 'Automated Broadcast Campaigns', icon: <MessageSquare size={20} /> },
    { title: 'Lead Management & Tagging', icon: <CheckCircle2 size={20} /> },
    { title: 'CRM & ERP Integration', icon: <Database size={20} /> },
    { title: 'AI-Powered Chat Automation', icon: <Cpu size={20} /> },
    { title: 'Analytics Dashboard', icon: <BarChart3 size={20} /> }
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-[#22c55e] to-[#10b981] rounded-[3rem] blur opacity-20 group-hover:opacity-30 transition duration-1000 group-hover:duration-200"></div>

          <div className="relative rounded-[3rem] overflow-hidden flex flex-col lg:flex-row border border-white/10 shadow-2xl" style={{ backgroundImage: 'linear-gradient(to right, #0a0f18 0%, #0d1f18 40%, #0b3d20 70%, #0e5c2a 100%)' }}>
            <div className="p-10 lg:p-20 lg:w-7/12 relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#22c55e]/10 border border-[#22c55e]/20 text-[#22c55e] text-xs font-bold uppercase tracking-widest mb-8">
                  <span className="w-2 h-2 rounded-full bg-[#22c55e] animate-pulse"></span>
                  Inaiwazhi
                </div>

                <h2 className="text-4xl lg:text-5xl font-display font-bold text-white mb-8 leading-tight">
                  Inaiwazhi - Enterprise WhatsApp Automation Platform
                </h2>

                <p className="text-slate-400 text-lg mb-12 leading-relaxed max-w-xl">
                  Inaiwazhi is an enterprise WhatsApp automation platform built for scalable customer engagement, campaign automation, CRM integration, AI chatbot workflows, and real-time business communication.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                  {features.map((f, i) => (
                    <div key={i} className="flex items-center gap-4 group/item">
                      <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#22c55e] group-hover/item:bg-[#22c55e] group-hover/item:text-white transition-all duration-300">
                        {f.icon}
                      </div>
                      <span className="text-slate-300 font-medium group-hover/item:text-white transition-colors">{f.title}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-6">
                  <Link
                    href="/contact"
                    className="px-10 py-4 bg-[#22c55e] text-black font-black rounded-full hover:bg-white hover:scale-105 transition-all duration-300 shadow-xl shadow-[#22c55e]/20"
                  >
                    Request Demo
                  </Link>
                  <Link
                    href="/inaiwazhi-whatsapp-automation"
                    className="px-10 py-4 bg-white/10 text-white font-bold rounded-full hover:bg-white/20 transition-all duration-300"
                  >
                    Explore Platform
                  </Link>
                  <div className="flex items-center gap-3">
                    <span className="text-slate-500 font-mono text-xs uppercase tracking-widest italic">Scalable Messaging Infrastructure</span>
                    <div className="w-8 h-[1px] bg-white/10"></div>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="lg:w-5/12 relative flex items-center justify-center p-10 lg:p-12 min-h-[400px]">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative w-full flex items-center justify-end"
              >
                <img
                  src={assetPath("/WhatsApp_Image_2026-02-17_at_4.11.44_PM-removebg-preview.png")}
                  alt="Inaiwazhi WhatsApp Automation"
                  className="drop-shadow-2xl"
                  style={{ width: '400%', height: '680px', objectFit: 'cover', objectPosition: 'Right center' }}
                />
                <div className="absolute inset-0 -z-10 flex items-center justify-center">
                  <div className="w-64 h-64 bg-[#22c55e]/20 blur-[80px] rounded-full animate-pulse"></div>
                </div>
              </motion.div>

              <div className="absolute top-1/4 -right-12 w-24 h-24 border border-white/5 rounded-full"></div>
              <div className="absolute bottom-1/4 -left-12 w-48 h-48 border border-white/5 rounded-full"></div>
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
            <img
              src="/about_hero_industries.png"
              alt="Enterprise Solutions"
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
    { num: '01', title: 'Business-Focused Technology Solutions', desc: 'We combine technical expertise, automation systems, and growth-focused strategies to help businesses improve efficiency and generate measurable results.', accent: 'from-brand-navy to-[#1e3a5f]' },
    { num: '02', title: 'Enterprise-Grade Development', desc: 'Secure, scalable, and high-performance digital systems built for modern business requirements.', accent: 'from-[#A23B2A] to-[#c0483a]' },
    { num: '03', title: 'SAP & Enterprise Expertise', desc: 'Deep expertise in SAP consulting, enterprise workflows, automation, and scalable digital transformation solutions.', accent: 'from-brand-navy to-[#1e3a5f]' },
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
          @keyframes homeMarquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
          .home-marquee-track { display: flex; width: max-content; animation: homeMarquee 30s linear infinite; }
          .home-marquee-track:hover { animation-play-state: paused; }
        `}</style>
        <div className="overflow-hidden w-full">
          <div className="home-marquee-track gap-5 py-3 px-4">
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
};


const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "What services does SoftClinch provide?",
      a: "SoftClinch provides SAP consulting, WhatsApp automation, SEO services, AI automation solutions, custom software development, and enterprise digital transformation services."
    },
    {
      q: "Do you provide SAP AMS support?",
      a: "Yes. We provide SAP AMS support, implementation, migration assistance, and enterprise SAP consulting services."
    },
    {
      q: "What is WhatsApp automation for businesses?",
      a: "WhatsApp automation helps businesses automate customer communication, lead nurturing, support workflows, and campaign messaging using WhatsApp Business APIs."
    },
    {
      q: "Can you build custom SaaS applications?",
      a: "Yes. We develop SaaS platforms, enterprise applications, CRM systems, dashboards, and scalable web and mobile applications."
    },
    {
      q: "How does SEO and AI search optimization help businesses?",
      a: "SEO, GEO, and AEO improve business visibility across Google Search, AI search engines, and answer engines to generate traffic and leads."
    },
    {
      q: "Can you integrate your solutions with our existing ERP or CRM systems?",
      a: "Yes. We specialize in connecting our custom applications, WhatsApp automation platforms, and digital growth systems with existing enterprise ERPs (including SAP), CRMs, databases, and third-party APIs."
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
          className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
        >
          <span className="font-bold text-slate-900 leading-tight">{faq.q}</span>
          <ChevronDown
            className={`flex-shrink-0 text-slate-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
            size={20}
          />
        </button>
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              <div className="px-6 pb-6 text-slate-600 text-sm leading-relaxed border-t border-slate-50 pt-4">
                {faq.a}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
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
      <Stats />
      <ClientLogos />
      <AboutSoftClinch />
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
