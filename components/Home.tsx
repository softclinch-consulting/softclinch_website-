"use client"
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ChevronDown, ChevronRight, MessageSquare, Globe, Cpu, Database, BarChart3, CheckCircle2, Star } from 'lucide-react';
import { assetPath } from '@/lib/asset';

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
              src="https://picsum.photos/seed/enterprise/800/800"
              alt="Enterprise Solutions"
              className="w-full h-full object-cover opacity-50 grayscale"
              referrerPolicy="no-referrer"
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

const Process = () => (
  <section className="py-24 bg-slate-50 overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-20 relative">
        <h2 className="text-3xl lg:text-5xl font-display font-bold text-slate-900 mb-6">
          Our Process
        </h2>
        <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
          Understanding your business goals, building the right systems, and supporting long-term performance through structured delivery.
        </p>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[10rem] font-display font-black text-slate-200/30 -z-10 select-none">
          PROCESS
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 relative">
        <div className="hidden lg:block absolute top-[4.5rem] left-0 w-full h-0.5 bg-gradient-to-r from-brand-navy/10 via-brand-terracotta/20 to-brand-navy/10 -z-0"></div>

        {[
          { step: '01', title: 'Consultation', desc: 'Understanding your business goals, operational challenges, and technical requirements.' },
          { step: '02', title: 'Strategy & Architecture', desc: 'Designing scalable systems, workflows, and automation strategies tailored to your business.' },
          { step: '03', title: 'Development', desc: 'Building secure, enterprise-ready applications using modern technologies and scalable frameworks.' },
          { step: '04', title: 'Integration', desc: 'Connecting SAP systems, CRMs, APIs, and third-party platforms seamlessly.' },
          { step: '05', title: 'Support & Optimization', desc: 'Continuous improvements, AMS support, analytics, and long-term optimization for business growth.' }
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="relative z-10 group"
          >
            <div className="w-16 h-16 rounded-2xl bg-white shadow-xl flex items-center justify-center mb-8 border border-slate-100 group-hover:border-brand-terracotta transition-all duration-300 relative overflow-hidden mx-auto lg:mx-0">
              <div className="absolute inset-0 bg-brand-navy opacity-0 group-hover:opacity-5 transition-opacity"></div>
              <span className="text-2xl font-display font-black text-brand-navy group-hover:text-brand-terracotta transition-colors">
                {item.step}
              </span>
            </div>

            <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm group-hover:shadow-xl group-hover:-translate-y-1 transition-all duration-300 h-full min-h-[220px] flex flex-col text-center lg:text-left">
              <div className="w-8 h-1 bg-brand-terracotta/20 group-hover:w-full group-hover:bg-brand-terracotta transition-all duration-500 mb-6"></div>
              <h4 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-brand-navy transition-colors">{item.title}</h4>
              <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Testimonials = () => {
  const testimonials = [
    {
      initial: "S",
      quote: "SoftClinch gave us a stronger digital foundation with better automation, clearer workflows, and more confidence in our growth systems.",
      author: "Service Business Client",
      color: "bg-teal-600"
    },
    {
      initial: "M",
      quote: "Their team understood both the business and technical side of delivery, which made the SAP and automation work easier to move forward.",
      author: "Manufacturing Team",
      color: "bg-emerald-700"
    },
    {
      initial: "R",
      quote: "Inaiwazhi helped us automate lead handling and customer communication in a way that felt scalable and enterprise-ready.",
      author: "Real Estate Business",
      color: "bg-rose-600"
    }
  ];

  return (
    <section className="py-24 bg-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-64 h-64 bg-slate-50 rounded-full blur-3xl opacity-50 -z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-bold uppercase tracking-widest mb-4">
            <Globe size={14} />
            Client Trust
          </div>
          <h2 className="text-3xl lg:text-5xl font-display font-bold text-slate-900 mb-4">Trusted Digital Transformation &amp; Automation Partner</h2>
          <div className="flex items-center justify-center gap-1 text-amber-400 mb-6 font-bold">
            <span className="text-slate-900 mr-2">5.0</span>
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={18} fill="currentColor" />
            ))}
            <span className="text-slate-500 ml-2 font-normal text-sm">built on delivery, trust, and results</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-6">
                <div className={`w-12 h-12 rounded-full ${t.color} flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-slate-200 group-hover:scale-110 transition-transform`}>
                  {t.initial}
                </div>
                <div className="flex gap-0.5 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" />
                  ))}
                </div>
              </div>

              <div className="relative mb-6">
                <div className="absolute -top-4 -left-2 text-slate-200 text-6xl font-serif select-none pointer-events-none opacity-50">&quot;</div>
                <p className="text-slate-700 leading-relaxed relative z-10 font-medium">
                  {t.quote}
                </p>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                <div className="font-bold text-slate-900">{t.author}</div>
                <div className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                <div className="text-blue-600 text-xs font-bold uppercase tracking-wider flex items-center gap-1">
                  Trusted <CheckCircle2 size={12} />
                </div>
              </div>
            </motion.div>
          ))}
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
    }
  ];

  const leftColumnFaqs = faqs.slice(0, 3);
  const rightColumnFaqs = faqs.slice(3, 5);

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
