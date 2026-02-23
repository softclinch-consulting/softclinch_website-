import { motion } from 'motion/react';
import Link from 'next/link';
import { ChevronRight, MessageSquare, Globe, Cpu, Database, BarChart3, CheckCircle2 } from 'lucide-react';

const Hero = () => (
  <section className="relative py-24 lg:py-32 overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
              className="bg-brand-navy text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-brand-navy/90 transition-all text-center"
            >
              Request Consultation
            </Link>
            <Link
              href="/services"
              className="bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-full text-lg font-semibold hover:bg-slate-50 transition-all text-center"
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
    <section className="py-24 bg-slate-50">
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
                className="bg-white p-8 rounded-2xl border border-slate-200 hover:shadow-lg transition-all h-full"
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

const ProductAuthority = () => (
  <section className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-brand-navy rounded-[2.5rem] overflow-hidden flex flex-col lg:flex-row">
        <div className="p-12 lg:p-20 lg:w-3/5">
          <span className="text-slate-400 font-semibold text-sm uppercase tracking-widest mb-4 block">Product Authority</span>
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-white mb-6">Inaiwazhi – WhatsApp Automation Platform</h2>
          <p className="text-slate-400 text-lg mb-10 leading-relaxed">
            Inaiwazhi is a proprietary WhatsApp automation platform developed and owned by SoftClinch Consulting Services. Designed for enterprises requiring secure, high-performance communication.
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
            {[
              'Broadcast automation',
              'Lead tagging',
              'CRM & ERP integration',
              'Workflow automation',
              'Analytics dashboard'
            ].map((feature) => (
              <li key={feature} className="flex items-center gap-3 text-slate-300">
                <CheckCircle2 size={18} className="text-brand-terracotta" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          <Link
            href="/whatsapp-automation"
            className="inline-flex items-center gap-2 bg-white text-brand-navy px-8 py-4 rounded-full font-semibold hover:bg-slate-100 transition-all"
          >
            Request Demo <ChevronRight size={20} />
          </Link>
        </div>
        <div className="lg:w-2/5 bg-brand-navy/50 flex items-center justify-center p-12">
          <div className="relative w-full aspect-square max-w-md bg-slate-700/50 rounded-3xl border border-slate-600 flex items-center justify-center">
            <MessageSquare size={120} className="text-slate-500 opacity-20" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-3/4 h-3/4 bg-gradient-to-br from-slate-600 to-slate-800 rounded-2xl shadow-2xl flex items-center justify-center">
                <span className="text-white font-display font-bold text-4xl">Inaiwazhi</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const WhySoftClinch = () => (
  <section className="py-24 bg-white border-y border-slate-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div>
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-slate-900 mb-8">Why SoftClinch</h2>
          <div className="space-y-8">
            {[
              { title: 'Engineering-first consulting firm', desc: 'We don\'t just advise; we build robust, production-grade systems.' },
              { title: 'Enterprise integration capability', desc: 'Seamlessly connecting new platforms with your existing legacy infrastructure.' },
              { title: 'SAP & CRM system expertise', desc: 'Deep domain knowledge in world-class enterprise resource planning systems.' },
              { title: 'Secure API architecture', desc: 'Security is baked into every line of code and every system design.' },
              { title: 'Product ownership experience', desc: 'We understand the full lifecycle of software because we build and own our platforms.' }
            ].map((item, i) => (
              <div key={i} className="flex gap-6">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-navy text-white flex items-center justify-center font-bold text-sm">
                  {i + 1}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                  <p className="text-slate-600 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-4">
            <div className="h-48 bg-slate-100 rounded-3xl" />
            <div className="h-64 bg-brand-navy rounded-3xl flex items-center justify-center p-8">
              <BarChart3 size={48} className="text-white opacity-20" />
            </div>
          </div>
          <div className="space-y-4 pt-12">
            <div className="h-64 bg-slate-200 rounded-3xl" />
            <div className="h-48 bg-slate-100 rounded-3xl" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

const FAQ = () => {
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
    }
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-slate-600">Common questions about enterprise WhatsApp automation and our services.</p>
        </div>
        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl border border-slate-200">
              <h4 className="font-bold text-slate-900 mb-3">{faq.q}</h4>
              <p className="text-slate-600 text-sm leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Stats = () => (
  <section className="py-20 bg-brand-navy text-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
        {[
          { label: 'Years of Engineering', value: '10+' },
          { label: 'Enterprise Projects', value: '150+' },
          { label: 'Inaiwazhi Uptime', value: '99.9%' },
          { label: 'Expert Consultants', value: '45+' }
        ].map((stat, i) => (
          <div key={i}>
            <div className="text-4xl lg:text-5xl font-display font-bold text-brand-terracotta mb-2">{stat.value}</div>
            <div className="text-slate-400 text-sm uppercase tracking-widest font-semibold">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Process = () => (
  <section className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-20">
        <h2 className="text-3xl lg:text-4xl font-display font-bold text-slate-900 mb-4">The SoftClinch Engineering Process</h2>
        <p className="text-slate-600 max-w-2xl mx-auto">Our systematic approach ensures that every digital system we build is robust, scalable, and aligned with enterprise goals.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {[
          { step: '01', title: 'Consultation', desc: 'Deep-dive into business requirements and legacy constraints.' },
          { step: '02', title: 'Architecture', desc: 'Designing secure, scalable system blueprints and data flows.' },
          { step: '03', title: 'Development', desc: 'Agile engineering using modern, battle-tested tech stacks.' },
          { step: '04', title: 'Integration', desc: 'Seamlessly connecting with ERPs, CRMs, and APIs.' },
          { step: '05', title: 'Support', desc: 'Ongoing AMS and optimization for long-term performance.' }
        ].map((item, i) => (
          <div key={i} className="relative">
            <div className="text-6xl font-display font-bold text-slate-100 absolute -top-10 left-0 -z-10">{item.step}</div>
            <h4 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h4>
            <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
          </div>
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
