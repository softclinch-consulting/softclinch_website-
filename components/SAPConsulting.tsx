"use client";
import React, { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'motion/react';
import {
  Server, ShieldCheck, HeartHandshake, Users, Zap,
  CheckCircle2, Check, ChevronDown, Wrench, Settings,
  ArrowRight, Activity
} from 'lucide-react';

const Button = ({ children, className, variant, ...props }: any) => {
  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
};

const Card = ({ children, className }: any) => {
  return <div className={className}>{children}</div>;
};

// Fade In Section Component
function FadeInSection({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref as any, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const FAQItem = ({ question, answer }: { question: string, answer: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-slate-200 rounded-xl mb-4 bg-white overflow-hidden transition-all duration-300 hover:border-brand-navy/30 hover:shadow-md">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
      >
        <span className="font-bold text-lg text-slate-900 pr-4">{question}</span>
        <div className={`p-2 rounded-full bg-slate-50 transition-transform duration-300 ${isOpen ? 'rotate-180 text-brand-terracotta' : 'text-slate-400'}`}>
          <ChevronDown className="w-5 h-5" />
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-6 pb-6 text-slate-600 prose prose-slate">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const SAPConsulting = () => {
  return (
    <div className="min-h-screen bg-[#F8FAFC] overflow-hidden font-sans pt-5">

      {/* Hero Section */}
      <section className="relative bg-white overflow-hidden py-16 lg:py-28 min-h-[600px] flex items-center">
        <motion.div
          animate={{ x: [0, 100, 0], y: [0, 50, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-brand-navy/10 to-brand-terracotta/10 rounded-full blur-3xl opacity-70"
        />
        <div className="max-w-[1200px] mx-auto px-8 relative z-10">
          <div className="text-center max-w-[900px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 bg-brand-navy/5 border border-brand-navy/10 text-brand-navy px-5 py-2 rounded-full text-sm font-bold mb-8 uppercase tracking-wide"
            >
              <Activity className="w-4 h-4 text-brand-terracotta" />
              Application Management Support
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl lg:text-7xl font-extrabold text-slate-900 leading-[1.1] mb-6 tracking-tight"
            >
              Proactive SAP AMS for <br />
              <span className="bg-gradient-to-r from-brand-navy to-brand-terracotta bg-clip-text text-transparent">
                Uninterrupted Growth
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-xl text-slate-600 mb-10 leading-relaxed max-w-3xl mx-auto"
            >
              Ensure continuous system performance, operational stability, and business agility with structured SAP Application Management Services designed for modern enterprises. We support SAP environments including SAP S/4HANA and SAP ECC landscapes with scalable engagement models tailored to your operational complexity.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex gap-4 justify-center flex-wrap"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button className="bg-brand-navy hover:bg-brand-navy/90 text-white px-8 py-4 text-lg rounded-xl shadow-xl shadow-brand-navy/20 transition-all duration-300 flex items-center font-semibold gap-2">
                  Talk to an AMS Expert <ArrowRight className="w-5 h-5" />
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeInSection>
              <h2 className="text-4xl font-bold text-slate-900 mb-6 leading-tight">
                Seamless SAP System Management – <span className="text-brand-terracotta">Scalable, Flexible, Reliable</span>
              </h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                At SoftClinch Consulting Services Pvt Ltd, we understand that a stable SAP environment is critical to business continuity. Our SAP AMS services allow your internal teams to focus on innovation and growth while we manage system stability, performance, compliance, and continuous improvement.
              </p>
              <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <ShieldCheck className="text-brand-navy" /> Our support framework combines:
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {['SLA-driven governance', 'Structured incident management', 'Proactive monitoring', 'Functional & technical expertise'].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-brand-terracotta/10 flex items-center justify-center shrink-0">
                        <Check className="w-4 h-4 text-brand-terracotta" />
                      </div>
                      <span className="text-slate-700 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeInSection>
            <FadeInSection delay={0.2}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-navy/10 to-brand-terracotta/10 rounded-3xl transform rotate-3 scale-105" />
                <img
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop"
                  alt="SAP professionals working"
                  className="relative rounded-3xl shadow-xl object-cover h-[500px] w-full"
                />
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Engagement Models */}
      <section className="py-24 bg-slate-50 relative">
        <div className="max-w-[1200px] mx-auto px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <FadeInSection>
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Our SAP AMS Engagement Models</h2>
              <p className="text-lg text-slate-600">We offer two structured models to match enterprise size and workload patterns.</p>
            </FadeInSection>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Dedicated Model */}
            <FadeInSection delay={0.1}>
              <Card className="bg-white rounded-[24px] p-8 shadow-sm hover:shadow-xl transition-all border-t-4 border-brand-navy h-full flex flex-col">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-4 bg-brand-navy/10 rounded-2xl">
                    <Users className="w-8 h-8 text-brand-navy" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900">Dedicated Resource Support</h3>
                    <p className="text-brand-terracotta font-medium mt-1">Ideal for enterprises requiring complete system oversight</p>
                  </div>
                </div>
                <p className="text-slate-600 mb-8 leading-relaxed">
                  Our Dedicated AMS model provides full-time SAP experts aligned exclusively to your organization.
                </p>
                <div className="space-y-3 mb-8">
                  <h4 className="font-bold text-slate-900 uppercase text-sm tracking-wider">Key Features</h4>
                  {[
                    'Assigned SAP functional and technical consultants',
                    'Full lifecycle SAP support',
                    'Structured governance & reporting',
                    'Predictable cost model',
                    'Continuous optimization roadmap'
                  ].map((f, i) => (
                    <div key={i} className="flex gap-3 text-slate-600">
                      <CheckCircle2 className="w-5 h-5 text-brand-navy shrink-0" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 mt-auto">
                  <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                    <Zap className="w-5 h-5 text-brand-terracotta" /> xCare Transition Framework
                  </h4>
                  <p className="text-sm text-slate-600 mb-4">Using our structured xCare methodology, we transition your SAP landscape into a fully managed service model that includes:</p>
                  <ul className="text-sm text-slate-600 space-y-2 mb-4 list-disc pl-4">
                    <li>Knowledge transfer & documentation</li>
                    <li>System performance assessment</li>
                    <li>Risk & compliance review</li>
                    <li>Ongoing improvement strategy</li>
                  </ul>
                  <div className="space-y-2 mt-4">
                    <div className="flex gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                      <span className="text-sm font-medium text-slate-800">Best suited for large enterprises with complex SAP landscapes</span>
                    </div>
                    <div className="flex gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                      <span className="text-sm font-medium text-slate-800">Strategic performance and stability focus</span>
                    </div>
                    <div className="flex gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                      <span className="text-sm font-medium text-slate-800">Enterprise-grade governance structure</span>
                    </div>
                  </div>
                </div>
              </Card>
            </FadeInSection>

            {/* Shared Model */}
            <FadeInSection delay={0.2}>
              <Card className="bg-white rounded-[24px] p-8 shadow-sm hover:shadow-xl transition-all border-t-4 border-brand-terracotta h-full flex flex-col">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-4 bg-brand-terracotta/10 rounded-2xl">
                    <HeartHandshake className="w-8 h-8 text-brand-terracotta" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900">Flexible Shared Support</h3>
                    <p className="text-brand-navy font-medium mt-1">Best suited for mid-sized businesses and variable workloads</p>
                  </div>
                </div>
                <p className="text-slate-600 mb-8 leading-relaxed">
                  Maintaining peak SAP staffing year-round may not be cost-efficient. Our Shared AMS model provides access to certified SAP consultants on demand.
                </p>
                <div className="space-y-3 mb-8">
                  <h4 className="font-bold text-slate-900 uppercase text-sm tracking-wider">Key Advantages</h4>
                  {[
                    'On-demand SAP expertise',
                    'Cost-efficient engagement',
                    'Faster issue resolution',
                    'Capacity augmentation for peak loads',
                    'No idle resource cost'
                  ].map((f, i) => (
                    <div key={i} className="flex gap-3 text-slate-600">
                      <CheckCircle2 className="w-5 h-5 text-brand-terracotta shrink-0" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-auto bg-slate-50 p-6 rounded-xl border border-slate-100 flex flex-col justify-center gap-3">
                  <div className="flex gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                    <span className="text-sm font-medium text-slate-800">Ideal for growing organizations</span>
                  </div>
                  <div className="flex gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                    <span className="text-sm font-medium text-slate-800">Budget-optimized support model</span>
                  </div>
                  <div className="flex gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                    <span className="text-sm font-medium text-slate-800">Flexible and scalable structure</span>
                  </div>
                </div>
              </Card>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="text-center mb-16">
            <FadeInSection>
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Core SAP AMS Capabilities</h2>
              <p className="text-lg text-slate-600">Our AMS services cover functional, technical, and system administration layers.</p>
            </FadeInSection>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Settings, title: "Functional Support",
                items: ["Incident and problem management", "Configuration changes", "Business process adjustments", "Change request implementation"]
              },
              {
                icon: Wrench, title: "Technical Support",
                items: ["ABAP debugging and enhancements", "Custom report maintenance", "Performance optimization", "Integration monitoring"]
              },
              {
                icon: Server, title: "SAP Basis / Admin",
                items: ["User & authorization management", "Transport management", "Patch and upgrade support", "Backup and system health checks"]
              },
              {
                icon: Activity, title: "Governance & Monitoring",
                items: ["24/7 monitoring", "SLA-based response & resolution", "Compliance and audit support", "Documentation & reporting"]
              }
            ].map((cap, i) => (
              <FadeInSection key={i} delay={i * 0.1} className="h-full">
                <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 h-full hover:shadow-lg hover:border-brand-navy/30 transition-all duration-300">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm mb-6 text-brand-navy">
                    <cap.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">{cap.title}</h3>
                  <ul className="space-y-3">
                    {cap.items.map((item, idx) => (
                      <li key={idx} className="flex gap-2 text-sm text-slate-600">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-terracotta mt-2 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Redesigned Two columns: Benefits & Why Choose Us */}
      <section className="py-24 bg-brand-navy relative overflow-hidden">
        {/* Abstract shapes for background */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-terracotta/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3 pointer-events-none" />

        <div className="max-w-[1200px] mx-auto px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-start">

            {/* Left side: Why Choose Us */}
            <div className="lg:col-span-5 relative">
              <FadeInSection>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-sm font-semibold mb-6 backdrop-blur-md">
                  <HeartHandshake className="w-4 h-4 text-brand-terracotta" />
                  Your Trusted Partner
                </div>
                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-10 leading-tight">
                  Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-terracotta to-orange-400">SoftClinch</span> for SAP AMS?
                </h2>

                <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-brand-terracotta/50 before:via-brand-terracotta/20 before:to-transparent">
                  {[
                    { title: 'SAP-Certified Expertise', desc: 'Consultants across modules (SD, MM, FI/CO, HCM, PP)' },
                    { title: 'Proven Track Record', desc: 'Delivery across manufacturing, retail, and finance sectors' },
                    { title: 'Transparent Pricing', desc: 'Clear cost models with structured SLA governance' },
                    { title: 'Global Delivery Model', desc: 'India-based core with round-the-clock support capability' }
                  ].map((item, i) => (
                    <div key={i} className="relative flex items-center gap-6 group">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-brand-navy bg-brand-terracotta shrink-0 shadow-xl z-10 group-hover:scale-110 transition-transform duration-300">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <div className="flex-1 bg-white/5 group-hover:bg-white/10 border border-white/10 p-5 rounded-2xl backdrop-blur-sm transition-all duration-300 shadow-lg group-hover:shadow-brand-terracotta/10 group-hover:-translate-y-1">
                        <h4 className="text-white font-bold text-lg mb-1">{item.title}</h4>
                        <p className="text-slate-300 text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </FadeInSection>
            </div>

            {/* Right side: Benefits Grid */}
            <div className="lg:col-span-7 lg:pl-12 lg:mt-12">
              <FadeInSection delay={0.2}>
                <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10 backdrop-blur-md shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-brand-terracotta/10 rounded-full blur-3xl" />

                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 flex items-center gap-3 relative z-10">
                    <Zap className="w-8 h-8 text-brand-terracotta" />
                    Key Benefits of Our Service
                  </h3>

                  <div className="grid sm:grid-cols-2 gap-5 relative z-10">
                    {[
                      { text: 'Reduced system downtime', icon: <Server className="w-6 h-6" /> },
                      { text: 'Predictable support costs', icon: <Settings className="w-6 h-6" /> },
                      { text: 'Faster incident resolution', icon: <Activity className="w-6 h-6" /> },
                      { text: 'Compliance assurance', icon: <ShieldCheck className="w-6 h-6" /> },
                      { text: 'Improved performance', icon: <Zap className="w-6 h-6" /> },
                      { text: 'Continuous improvement', icon: <Users className="w-6 h-6" /> }
                    ].map((benefit, i) => (
                      <div
                        key={i}
                        className="group relative overflow-hidden bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-2xl p-6 hover:border-brand-terracotta/50 transition-all duration-500"
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-brand-terracotta/0 to-brand-terracotta/0 group-hover:from-brand-terracotta/10 group-hover:to-transparent transition-all duration-500" />
                        <div className="absolute -top-12 -right-12 w-24 h-24 bg-brand-terracotta/20 rounded-full blur-xl group-hover:bg-brand-terracotta/40 transition-all duration-500" />

                        <div className="relative z-10 flex flex-col gap-4">
                          <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-white group-hover:text-brand-terracotta transition-colors duration-300 shadow-inner">
                            {benefit.icon}
                          </div>
                          <span className="text-white font-semibold text-lg">{benefit.text}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeInSection>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

