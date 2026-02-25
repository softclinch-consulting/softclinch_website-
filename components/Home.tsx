import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Link from 'next/link';
import { ChevronDown, ChevronRight, MessageSquare, Globe, Cpu, Database, BarChart3, CheckCircle2 } from 'lucide-react';

const Hero = () => (
  <section className=" relative  py-24 lg:py-32 overflow-hidden">
    <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-slate-100 text-slate-900 text-sm font-semibold mb-6">
            Engineering Scalable Digital Systems
          </span>
          <h1 className="font-bold text-slate-900 mb-10" style={{ fontSize: "clamp(2rem, 5.5vw, 5rem)", lineHeight: 1.12, letterSpacing: "-0.03em" }}>
            Enterprise Technology<br />
            Consulting &amp;<br />
            WhatsApp Automation<br />
            Solutions
          </h1>

          {/* Subtext */}
          <p className="text-lg text-slate-500 mb-10 leading-relaxed" style={{ maxWidth: "560px" }}>
            SoftClinch is an engineering-led consulting firm — from SAP implementation to custom SaaS platforms and our
            proprietary WhatsApp automation tool, <strong style={{ fontWeight: 700 }}>Inaiwazhi</strong>.
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
              className="
  bg-[#A23B2A] text-white border border-[#A23B2A]
  px-8 py-4 rounded-full text-lg font-semibold text-center
  transition-all duration-300

  hover:bg-gradient-to-r
  hover:from-[#A23B2A]/90
  hover:to-brand-navy/90
  hover:border-transparent
  "
            >
              Explore Services
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
    {/* Decorative background element */}
    <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[800px] h-[800px] bg-slate-50 rounded-full blur-3xl -z-10 opacity-50" />
  </section>
);

const CoreServices = () => {
  const services = [
    {
      title: 'Digital Marketing',
      description: 'SEO, GEO, AEO, PPC & performance analytics for modern search landscapes.',
      icon: <Globe className="text-slate-900" size={24} />,
      path: '/services/digital-marketing'
    },
    {
      title: 'Custom Application Development',
      description: 'SaaS platforms, web apps, mobile apps, and complex API integrations.',
      icon: <Cpu className="text-slate-900" size={24} />,
      path: '/services/custom-app-dev'
    },
    {
      title: 'SAP Consulting',
      description: 'SAP implementation, AMS support, and enterprise system architecture.',
      icon: <Database className="text-slate-900" size={24} />,
      path: '/services/sap-consulting'
    },
    {
      title: 'WhatsApp Automation',
      description: 'Enterprise WhatsApp API automation for high-scale sales and support.',
      icon: <MessageSquare className="text-slate-900" size={24} />,
      path: '/whatsapp-automation'
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-slate-900 mb-4">Enterprise Consulting & Engineering Services</h2>
          <p className="text-slate-600 max-w-2xl">We design, develop, and manage complex digital ecosystems. Our core competencies lie in bridging the gap between business strategy and technical execution.</p>
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
    { title: 'Broadcast automation', icon: <MessageSquare size={20} /> },
    { title: 'Lead tagging', icon: <CheckCircle2 size={20} /> },
    { title: 'CRM & ERP integration', icon: <Database size={20} /> },
    { title: 'Workflow automation', icon: <Cpu size={20} /> },
    { title: 'Analytics dashboard', icon: <BarChart3 size={20} /> }
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative group">
          {/* Background Glow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-[#22c55e] to-[#10b981] rounded-[3rem] blur opacity-20 group-hover:opacity-30 transition duration-1000 group-hover:duration-200"></div>

          <div className="relative rounded-[3rem] overflow-hidden flex flex-col lg:flex-row border border-white/10 shadow-2xl" style={{ backgroundImage: 'linear-gradient(to right, #0a0f18 0%, #0d1f18 40%, #0b3d20 70%, #0e5c2a 100%)' }}>
            {/* Left Content Side */}
            <div className="p-10 lg:p-20 lg:w-7/12 relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#22c55e]/10 border border-[#22c55e]/20 text-[#22c55e] text-xs font-bold uppercase tracking-widest mb-8">
                  <span className="w-2 h-2 rounded-full bg-[#22c55e] animate-pulse"></span>
                  Product Authority
                </div>

                <h2 className="text-4xl lg:text-5xl font-display font-bold text-white mb-8 leading-tight">
                  Engage Your Customers with <span className="text-[#22c55e]">Inaiwazhi</span>
                </h2>

                <p className="text-slate-400 text-lg mb-12 leading-relaxed max-w-xl">
                  The most secure, high-performance WhatsApp automation platform designed for enterprise-scale communication. Build trust and drive sales at scale.
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
                    href="/whatsapp-automation"
                    className="px-10 py-4 bg-[#22c55e] text-black font-black rounded-full hover:bg-white hover:scale-105 transition-all duration-300 shadow-xl shadow-[#22c55e]/20"
                  >
                    Request Demo
                  </Link>
                  <div className="flex items-center gap-3">
                    <span className="text-slate-500 font-mono text-xs uppercase tracking-widest italic">Secure API Integration</span>
                    <div className="w-8 h-[1px] bg-white/10"></div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Visual Side */}
            <div className="lg:w-5/12 relative flex items-center justify-center p-10 lg:p-12 min-h-[400px]">
              {/* WhatsApp Product Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative w-full flex items-center justify-end"
              >
                <img
                  src="/WhatsApp_Image_2026-02-17_at_4.11.44_PM-removebg-preview.png"
                  alt="Inaiwazhi WhatsApp Automation"
                  className="drop-shadow-2xl"
                  style={{ width: '400%', height: '680px', objectFit: 'cover', objectPosition: 'Right center' }}
                />
                {/* Subtle glow behind image */}
                <div className="absolute inset-0 -z-10 flex items-center justify-center">
                  <div className="w-64 h-64 bg-[#22c55e]/20 blur-[80px] rounded-full animate-pulse"></div>
                </div>
              </motion.div>

              {/* Background Decorative Circles */}
              <div className="absolute top-1/4 -right-12 w-24 h-24 border border-white/5 rounded-full"></div>
              <div className="absolute bottom-1/4 -left-12 w-48 h-48 border border-white/5 rounded-full"></div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

const WhySoftClinch = () => {
  const reasons = [
    { num: '01', title: 'Engineering-First', desc: 'We don\'t just advise; we build robust, production-grade systems from the ground up.', accent: 'from-brand-navy to-[#1e3a5f]' },
    { num: '02', title: 'Enterprise Integration', desc: 'Seamlessly connecting new platforms with your existing legacy infrastructure.', accent: 'from-[#A23B2A] to-[#c0483a]' },
    { num: '03', title: 'SAP & CRM Expertise', desc: 'Deep domain knowledge in world-class enterprise resource planning systems.', accent: 'from-brand-navy to-[#1e3a5f]' },
    { num: '04', title: 'Secure API Architecture', desc: 'Security is baked into every line of code and every system design decision.', accent: 'from-[#A23B2A] to-[#c0483a]' },
    { num: '05', title: 'Product Ownership', desc: 'We understand the full software lifecycle because we build and own our platforms.', accent: 'from-brand-navy to-[#1e3a5f]' },
  ];

  return (
    <section className="py-24 bg-brand-navy overflow-hidden relative">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brand-navy/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white/70 text-xs font-bold uppercase tracking-widest mb-4">
            Our Differentiators
          </span>
          <h2 className="text-3xl lg:text-5xl font-display font-bold text-white mb-4 leading-tight">
            Why Choose <span className="text-[#A23B2A]">SoftClinch</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-lg">
            We combine deep engineering expertise with enterprise-grade delivery to build systems that last.
          </p>
        </div>

        {/* Bento Grid */}
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
              {/* Top accent bar */}
              <div className="absolute top-0 left-0 w-full h-1 bg-white opacity-60 group-hover:opacity-100 transition-opacity" />

              {/* Number badge */}
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-2xl bg-white/10 border border-white/20 text-white font-black font-display text-sm mb-6 group-hover:bg-[#A23B2A]/20 group-hover:border-[#A23B2A]/40 transition-all duration-300">
                {item.num}
              </div>

              <h4 className="text-white font-bold text-lg mb-3 group-hover:text-white transition-colors">{item.title}</h4>
              <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors">{item.desc}</p>

              {/* Decorative corner glow */}
              <div className="absolute bottom-0 right-0 w-24 h-24 bg-brand-navy/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </motion.div>
          ))}

          {/* CTA Card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.45, duration: 0.5 }}
            className="relative bg-gradient-to-br from-[#A23B2A] to-brand-navy rounded-3xl p-8 flex flex-col justify-between overflow-hidden group border border-white/10"
          >
            <div>
              <BarChart3 size={40} className="text-white/30 mb-6" />
              <h4 className="text-white font-bold text-xl mb-3 leading-tight">Ready to build something enterprise-grade?</h4>
              <p className="text-white/60 text-sm leading-relaxed">Let's discuss your engineering challenges and architect the right solution.</p>
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

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "What is WhatsApp automation for enterprises?",
      a: "WhatsApp automation involves using the official WhatsApp Business API to automate customer interactions, sales workflows, and support queries. Unlike personal automation, enterprise-grade solutions like Inaiwazhi offer secure API integrations, multi-user dashboards, and deep CRM connectivity."
    },
    {
      q: "Is WhatsApp automation legal in India for businesses?",
      a: "Yes, WhatsApp automation is fully legal and compliant when conducted through official Meta-approved Business Solution Providers (BSPs) and the official WhatsApp Business API. SoftClinch ensures all integrations follow Meta's strict commerce and messaging policies."
    },
    {
      q: "How does SAP consulting improve business efficiency?",
      a: "SAP consulting helps businesses optimize their Enterprise Resource Planning (ERP) systems. By implementing S/4HANA or optimizing existing AMS support, businesses can achieve better data visibility, streamlined operations, and improved decision-making capabilities."
    },
    {
      q: "Why choose a custom application over off-the-shelf software?",
      a: "Custom applications are built specifically for your unique business processes, offering better scalability, seamless integration with existing systems, and a competitive edge that generic software cannot provide. SoftClinch specializes in high-performance SaaS and web applications."
    },
    {
      q: "What is GEO and AEO in Digital Marketing?",
      a: "GEO (Generative Engine Optimization) and AEO (Answer Engine Optimization) are modern SEO strategies focused on making your content visible in AI-driven search results and voice assistant answers. We optimize your digital presence for the future of search."
    },
    {
      q: "How long does a typical implementation take?",
      a: "Implementation timelines vary depending on complexity. A standard WhatsApp API setup can be completed in 3-5 business days, while large-scale SAP integrations or custom SaaS platforms may take 4-12 weeks."
    }
  ];

  const leftColumnFaqs = faqs.slice(0, 3);
  const rightColumnFaqs = faqs.slice(3, 6);

  const FAQItem = ({ faq, index }: { faq: any, index: number }) => {
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
          <p className="text-slate-600">Common questions about enterprise WhatsApp automation and our services.</p>
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

const Stats = () => (
  <section className="py-24 bg-brand-navy">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        {[
          { label: 'Years of Engineering', value: '10+' },
          { label: 'Enterprise Projects', value: '150+' },
          { label: 'Inaiwazhi Uptime', value: '99.9%' },
          { label: 'Expert Consultants', value: '45+' }
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

const Process = () => (
  <section className="py-24 bg-slate-50 overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-20 relative">
        <h2 className="text-3xl lg:text-5xl font-display font-bold text-slate-900 mb-6">
          The SoftClinch <span className="text-brand-navy">Engineering</span> Process
        </h2>
        <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
          Our systematic approach ensures that every digital system we build is robust, scalable, and aligned with enterprise goals.
        </p>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[10rem] font-display font-black text-slate-200/30 -z-10 select-none">
          PROCESS
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 relative">
        {/* Background Visual Path (Desktop) */}
        <div className="hidden lg:block absolute top-[4.5rem] left-0 w-full h-0.5 bg-gradient-to-r from-brand-navy/10 via-brand-terracotta/20 to-brand-navy/10 -z-0"></div>

        {[
          { step: '01', title: 'Consultation', desc: 'Deep-dive into business requirements and legacy constraints.' },
          { step: '02', title: 'Architecture', desc: 'Designing secure, scalable system blueprints and data flows.' },
          { step: '03', title: 'Development', desc: 'Agile engineering using modern, battle-tested tech stacks.' },
          { step: '04', title: 'Integration', desc: 'Seamlessly connecting with ERPs, CRMs, and APIs.' },
          { step: '05', title: 'Support', desc: 'Ongoing AMS and optimization for long-term performance.' }
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="relative z-10 group"
          >
            {/* Step Icon/Number */}
            <div className="w-16 h-16 rounded-2xl bg-white shadow-xl flex items-center justify-center mb-8 border border-slate-100 group-hover:border-brand-terracotta transition-all duration-300 relative overflow-hidden mx-auto lg:mx-0">
              <div className="absolute inset-0 bg-brand-navy opacity-0 group-hover:opacity-5 transition-opacity"></div>
              <span className="text-2xl font-display font-black text-brand-navy group-hover:text-brand-terracotta transition-colors">
                {item.step}
              </span>
            </div>

            {/* Content Card */}
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

const Industries = () => (
  <section className="py-24 bg-slate-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div>
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-slate-900 mb-8">Industry-Specific Solutions</h2>
          <p className="text-slate-600 mb-10 leading-relaxed">
            We understand that every industry has unique regulatory and operational requirements. Our solutions are tailored to meet the specific challenges of your sector.
          </p>
          <div className="space-y-6">
            {[
              { title: 'Healthcare', desc: 'Secure patient communication and HIPAA-compliant data handling.' },
              { title: 'Finance & Banking', desc: 'High-security API integrations and automated transaction alerts.' },
              { title: 'Manufacturing', desc: 'SAP-integrated supply chain automation and real-time reporting.' },
              { title: 'Real Estate', desc: 'Automated lead nurturing and virtual tour scheduling via WhatsApp.' }
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
            <div className="text-brand-navy font-display font-bold text-4xl mb-2">100%</div>
            <div className="text-slate-500 text-sm font-semibold uppercase tracking-wider">Secure Integration</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Testimonials = () => (
  <section className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-20">
        <h2 className="text-3xl lg:text-4xl font-display font-bold text-slate-900 mb-4">Client Success Stories</h2>
        <p className="text-slate-600">Trusted by leading enterprises across the globe.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          { quote: "SoftClinch transformed our customer support with Inaiwazhi. Our response time dropped by 70%.", author: "Director of Ops, Global Retail", role: "Retail Sector" },
          { quote: "Their SAP consulting expertise was instrumental in our S/4HANA migration. Seamless and professional.", author: "CTO, Manufacturing Corp", role: "Industrial Sector" },
          { quote: "The custom SaaS platform they built for us is now handling over 1 million requests daily without a hitch.", author: "Founder, TechScale SaaS", role: "Technology Sector" }
        ].map((t, i) => (
          <div key={i} className="bg-slate-50 p-10 rounded-3xl border border-slate-200 italic">
            <p className="text-slate-700 mb-8 leading-relaxed">"{t.quote}"</p>
            <div className="not-italic">
              <div className="font-bold text-slate-900">{t.author}</div>
              <div className="text-brand-terracotta text-sm font-medium">{t.role}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export const Home = () => {
  return (
    <>
      <Hero />
      <Stats />
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
