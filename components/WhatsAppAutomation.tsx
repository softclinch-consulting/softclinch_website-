import { motion } from 'motion/react';
import { MessageSquare, CheckCircle2, Zap, Shield, BarChart3, Users, Link as LinkIcon, ChevronRight } from 'lucide-react';
import Link from 'next/link';

export const WhatsAppAutomation = () => {
  return (
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <div>
            <h1 className="text-5xl lg:text-6xl font-display font-bold text-slate-900 mb-8">Enterprise WhatsApp Automation Platform (Inaiwazhi)</h1>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed">
              Scale your business communication with Inaiwazhi, the premier WhatsApp automation platform developed by SoftClinch. Leverage the official WhatsApp Business API to automate sales, marketing, and customer support at an enterprise scale.
            </p>
            <div className="flex gap-4">
              <Link href="/contact" className="bg-brand-navy text-white px-8 py-4 rounded-full font-semibold hover:bg-brand-navy/90 transition-all">
                Request Demo
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="bg-slate-100 rounded-[3rem] aspect-square flex items-center justify-center overflow-hidden">
              <div className="w-4/5 h-4/5 bg-white rounded-3xl shadow-2xl p-8 flex flex-col">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center text-white">
                    <MessageSquare size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">Inaiwazhi Bot</h3>
                    <p className="text-xs text-emerald-500 font-medium">Online</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-slate-100 p-4 rounded-2xl rounded-tl-none max-w-[80%] text-sm">
                    Hello! How can I help your enterprise today?
                  </div>
                  <div className="bg-slate-900 text-white p-4 rounded-2xl rounded-tr-none max-w-[80%] ml-auto text-sm">
                    I'd like to automate our sales workflow.
                  </div>
                  <div className="bg-slate-100 p-4 rounded-2xl rounded-tl-none max-w-[80%] text-sm">
                    Excellent choice. I've tagged this lead and notified your sales team.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* About Inaiwazhi */}
        <div className="bg-slate-50 rounded-[2.5rem] p-12 lg:p-20 mb-32">
          <div className="max-w-3xl">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-slate-900 mb-6">About Inaiwazhi</h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Inaiwazhi is a proprietary WhatsApp automation platform developed and owned by SoftClinch Consulting Services. It is designed specifically for enterprises requiring secure, API-based communication automation that integrates deeply with existing business systems.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <Shield className="text-slate-900 flex-shrink-0" size={24} />
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Secure Architecture</h4>
                  <p className="text-sm text-slate-600">Enterprise-grade security for sensitive customer data.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Zap className="text-slate-900 flex-shrink-0" size={24} />
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">High Performance</h4>
                  <p className="text-sm text-slate-600">Built for high-volume broadcast and interaction.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="mb-32">
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-slate-900 mb-16 text-center">Core Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Sales automation workflows', icon: Zap, desc: 'Automate lead qualification and follow-ups.' },
              { title: 'Broadcast campaign management', icon: MessageSquare, desc: 'Send personalized messages to thousands of customers.' },
              { title: 'Lead capture & segmentation', icon: Users, desc: 'Automatically tag and group leads based on behavior.' },
              { title: 'CRM & ERP integration', icon: LinkIcon, desc: 'Sync data with Salesforce, SAP, and custom systems.' },
              { title: 'API-based workflow routing', icon: Shield, desc: 'Route messages to the right department automatically.' },
              { title: 'Performance analytics', icon: BarChart3, desc: 'Detailed dashboards tracking engagement and ROI.' }
            ].map((feature, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl border border-slate-200">
                <feature.icon className="text-slate-900 mb-6" size={28} />
                <h4 className="font-bold text-slate-900 mb-3">{feature.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Authority Section */}
        <div className="py-24 border-t border-slate-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <h2 className="text-3xl font-display font-bold text-slate-900 mb-6">Why Inaiwazhi for Enterprise?</h2>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Most WhatsApp tools are designed for small businesses. Inaiwazhi is engineered for the enterprise. We focus on security, high-throughput API handling, and deep integration with ERP systems like SAP and Oracle.
              </p>
              <div className="space-y-4">
                {[
                  "Official Meta Business API Integration",
                  "SOC2 Compliant Data Handling",
                  "Custom Webhook & API Routing",
                  "Multi-agent Shared Inbox",
                  "Automated Template Management"
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 font-medium text-slate-800">
                    <CheckCircle2 className="text-brand-terracotta" size={20} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-brand-navy rounded-3xl p-10 text-white flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-4">AEO & GEO Optimized Communication</h3>
              <p className="text-slate-400 mb-6">
                Our platform doesn't just send messages; it structures data so that your business interactions are recognized by AI answer engines, improving your brand's authority in the digital ecosystem.
              </p>
              <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                <code className="text-white text-brand-terracotta">
                  // Enterprise Workflow Example<br />
                  POST /api/v1/inaiwazhi/workflow<br />
                  {"{"}<br />
                  &nbsp;&nbsp;"trigger": "lead_tagged",<br />
                  &nbsp;&nbsp;"action": "whatsapp_broadcast",<br />
                  &nbsp;&nbsp;"template_id": "welcome_enterprise_v2"<br />
                  {"}"}
                </code>
              </div>
            </div>
          </div>
        </div>

        {/* Use Cases */}
        <div className="mb-32 bg-brand-navy rounded-[3rem] overflow-hidden">
          <div className="px-10 pt-16 pb-4 flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/10">
            <div>
              <span className="text-xs font-black uppercase tracking-[0.2em] text-[#A23B2A]">— Who We Serve</span>
              <h2 className="text-3xl lg:text-4xl font-display font-bold text-white mt-2">Industry Use Cases</h2>
            </div>
            <p className="text-slate-200 text-sm max-w-xs pb-1">Inaiwazhi powers enterprise communication across key sectors.</p>
          </div>
          <div className="divide-y divide-white/5">
            {[
              { num: '01', label: 'Enterprise Sales', desc: 'Automate lead follow-ups, pipeline nudges, and deal closing workflows at scale.' },
              { num: '02', label: 'E-commerce', desc: 'Order confirmations, cart recovery, flash sale broadcasts and post-purchase support.' },
              { num: '03', label: 'Education', desc: 'Admissions alerts, fee reminders, class schedules and parent engagement flows.' },
              { num: '04', label: 'Healthcare', desc: 'Appointment reminders, lab report delivery and secure patient communication.' },
              { num: '05', label: 'Real Estate', desc: 'Lead nurturing, site visit scheduling and instant property info on WhatsApp.' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.4 }}
                className="group flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-10 px-10 py-8 hover:bg-white/5 transition-colors duration-200 cursor-default"
              >
                <span className="font-display font-black text-4xl text-[#A23B2A] group-hover:text-[#A23B2A] transition-colors duration-300 w-12 flex-shrink-0">{item.num}</span>
                <h3 className="text-xl lg:text-2xl font-display font-bold text-white flex-1">{item.label}</h3>
                <p className="text-slate-200 text-sm leading-relaxed sm:max-w-xs group-hover:text-slate-100 transition-colors">{item.desc}</p>
                <ChevronRight size={18} className="text-white/10 group-hover:text-[#A23B2A] transition-colors flex-shrink-0 hidden sm:block" />
              </motion.div>
            ))}
          </div>
        </div>


        {/* FAQ */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-slate-900 mb-12 text-center">WhatsApp Automation FAQ</h2>
          <div className="space-y-6">
            {[
              { q: "How does Inaiwazhi integrate with my CRM?", a: "We provide custom API connectors that sync WhatsApp interactions directly with your CRM, ensuring your sales team has a unified view of customer communication." },
              { q: "Can we use our existing WhatsApp number?", a: "Yes, you can migrate your existing number to the official WhatsApp Business API, or we can help you set up a new dedicated number." },
              { q: "What kind of analytics do you provide?", a: "Our dashboard tracks delivery rates, read rates, response times, conversion rates, and custom workflow completion metrics." }
            ].map((faq, i) => (
              <div key={i} className="border-b border-slate-200 pb-6">
                <h4 className="font-bold text-slate-900 mb-2">{faq.q}</h4>
                <p className="text-slate-600 text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
