"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, CheckCircle2, Zap, Shield, BarChart3, Users, Link as LinkIcon, ChevronRight, PlayCircle, Sparkles, Send, Clock, Check, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { FaqSection } from "@/components/FaqSection";
import { ServiceMediaPanel } from "@/components/ServiceMediaPanel";
import { ServiceStatStrip } from "@/components/ServiceStatStrip";
import { whatsappAutomationFaq } from "@/lib/faqs";

const WhatsAppCampaignsWithoutManualWorkSection = () => {
  const [activeTab, setActiveTab] = useState<'broadcast' | 'drip' | 'triggers'>('broadcast');

  const tabs = [
    {
      id: 'broadcast',
      label: 'Bulk Broadcasts',
      badge: 'Zero Ban Risk',
      icon: Send,
      headline: 'Send 20,000+ Personalized Messages in One Click',
      desc: 'No manual number copying or manual CSV formatting. Connect your database or upload your audience to dispatch Meta-approved WhatsApp broadcasts with dynamic customer variables.',
      metrics: [
        { label: 'Avg. Open Rate', val: '98.4%' },
        { label: 'Click-Through Rate', val: '46.2%' },
        { label: 'Delivery Pacing', val: '1,000/min' },
      ],
      chatPreview: {
        template: 'Festive Flash Offer',
        message: 'Hi Priya! 👋 Special 30% OFF on your saved cart items #SC-9041 is expiring today. Tap below to complete order.',
        buttons: ['🛒 Complete Purchase', '💬 Ask Support']
      }
    },
    {
      id: 'drip',
      label: 'Automated Drip Workflows',
      badge: '100% Autonomous',
      icon: Clock,
      headline: 'Nurture Prospects over 7, 14, or 30 Days on Autopilot',
      desc: 'Set up multi-day drip campaigns that trigger based on customer actions. Automatically send welcome notes, educational content, offers, and feedback requests without typing a single word.',
      metrics: [
        { label: 'Lead Conversion', val: '3.4x Higher' },
        { label: 'Time Saved / Week', val: '40+ Hours' },
        { label: 'Sequence Completion', val: '94.1%' },
      ],
      chatPreview: {
        template: 'Day 3 Lead Nurture',
        message: 'Hello Rajesh! Did you know our custom AI suite integrates directly with your SAP ERP? Take a 2-min interactive tour.',
        buttons: ['▶ Watch Demo', '📅 Book Call']
      }
    },
    {
      id: 'triggers',
      label: 'API Event Triggers',
      badge: 'Real-Time Sync',
      icon: Zap,
      headline: 'Instant Order, Payment & Abandoned Cart Alerts',
      desc: 'Integrate directly via webhooks into Shopify, WooCommerce, SAP, or custom web apps. Automatically trigger transactional messages when an order is placed, shipped, or abandoned.',
      metrics: [
        { label: 'Trigger Latency', val: '< 500ms' },
        { label: 'Cart Recovery', val: '32.8%' },
        { label: 'System Uptime', val: '99.99%' },
      ],
      chatPreview: {
        template: 'Dispatch Update',
        message: 'Great news Vijay! 📦 Order #INAI-4819 has been dispatched. Live tracking code: WAPP-TRK-881.',
        buttons: ['📍 Track Shipment', '📄 Invoice PDF']
      }
    }
  ];

  const currentData = tabs.find(t => t.id === activeTab) || tabs[0];

  return (
    <div className="my-24 relative overflow-hidden rounded-[3rem] border border-slate-800 bg-[#0B1528] text-white p-8 lg:p-14 shadow-2xl">
      {/* Dynamic ambient background glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-navy/30 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />

      {/* Header section */}
      <div className="relative z-10 max-w-3xl mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-widest mb-4">
          <Sparkles size={14} className="animate-spin" style={{ animationDuration: '4s' }} />
          Zero Manual Copying • 100% Autonomous
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white leading-tight mb-6">
          WhatsApp Campaigns <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-200">Without the Manual Work</span>
        </h2>
        <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
          Stop manually copying customer phone numbers, drafting individual messages, and tracking follow-ups in spreadsheets. Inaiwazhi automates end-to-end broadcast messaging, lead segmentation, and drip campaigns directly from your database.
        </p>
      </div>

      {/* Interactive Tabs */}
      <div className="relative z-10 flex gap-3 overflow-x-auto pb-4 mb-10 border-b border-white/10 no-scrollbar">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center gap-3 px-6 py-4 rounded-2xl font-bold text-sm transition-all duration-300 whitespace-nowrap border ${
                isActive
                  ? 'bg-emerald-500 text-slate-950 border-emerald-400 shadow-lg shadow-emerald-500/20 scale-[1.02]'
                  : 'bg-white/5 text-slate-300 border-white/10 hover:bg-white/10 hover:border-white/20'
              }`}
            >
              <Icon size={18} className={isActive ? 'text-slate-950' : 'text-emerald-400'} />
              <span>{tab.label}</span>
              <span className={`text-[10px] px-2 py-0.5 rounded-full font-extrabold uppercase ${
                isActive ? 'bg-slate-950 text-emerald-300' : 'bg-white/10 text-slate-400'
              }`}>
                {tab.badge}
              </span>
            </button>
          );
        })}
      </div>

      {/* Main Tab Content Display */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.3 }}
          className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center"
        >
          {/* Left Description Column */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mb-4">
                {currentData.headline}
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {currentData.desc}
              </p>
            </div>

            {/* Feature Highlights Grid */}
            <div className="grid grid-cols-3 gap-4">
              {currentData.metrics.map((m, idx) => (
                <div key={idx} className="bg-white/5 border border-white/10 p-4 rounded-2xl backdrop-blur-md">
                  <div className="text-xl sm:text-2xl font-black text-emerald-400 font-display mb-1">{m.val}</div>
                  <div className="text-[11px] text-slate-400 font-bold uppercase tracking-wider">{m.label}</div>
                </div>
              ))}
            </div>

            {/* Checklist */}
            <div className="space-y-3 pt-2">
              {[
                "Direct database & CRM synchronization with zero manual export",
                "Official Meta Cloud API endpoint with instant green-tick verification support",
                "Automated AI reply routing with smooth fallback to live support agents"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-sm text-slate-200">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shrink-0">
                    <Check size={12} />
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 bg-emerald-500 text-slate-950 px-8 py-4 rounded-full font-bold text-sm hover:bg-emerald-400 hover:scale-[1.03] transition-all shadow-xl shadow-emerald-500/25"
              >
                <span>Automate Campaigns Now</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          {/* Right Live WhatsApp Campaign Simulator UI Card */}
          <div className="lg:col-span-5">
            <div className="bg-[#111C32] border border-white/15 rounded-3xl p-6 shadow-2xl relative overflow-hidden">
              {/* Header of simulated device */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-5">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-rose-500" />
                  <div className="w-3 h-3 rounded-full bg-amber-500" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500" />
                  <span className="text-xs font-mono text-slate-400 font-bold ml-2">Inaiwazhi Engine v2.4</span>
                </div>
                <div className="flex items-center gap-1.5 bg-emerald-500/20 border border-emerald-500/40 px-2.5 py-1 rounded-full text-[10px] font-bold text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  LIVE EXECUTION
                </div>
              </div>

              {/* Simulated WhatsApp Chat Window */}
              <div className="bg-[#0B141E] rounded-2xl p-4 border border-white/5 space-y-4">
                <div className="text-[10px] text-slate-400 font-mono flex items-center justify-between border-b border-white/5 pb-2">
                  <span>Template: <strong className="text-emerald-300">{currentData.chatPreview.template}</strong></span>
                  <span className="text-emerald-400 font-bold">Status: Dispatching...</span>
                </div>

                {/* Simulated Chat Message Bubble */}
                <div className="bg-[#1F2C34] text-slate-100 p-4 rounded-2xl rounded-tl-none border border-emerald-500/30 text-xs sm:text-sm leading-relaxed relative">
                  <div className="flex items-center gap-2 mb-2 pb-2 border-b border-white/10">
                    <div className="w-6 h-6 rounded-full bg-emerald-600 flex items-center justify-center text-white text-[10px] font-black">
                      W
                    </div>
                    <span className="font-bold text-emerald-400 text-xs">SoftClinch Business Official</span>
                    <Check size={12} className="text-emerald-400" />
                  </div>
                  <p className="mb-3">{currentData.chatPreview.message}</p>
                  
                  {/* Quick Action Buttons */}
                  <div className="space-y-1.5">
                    {currentData.chatPreview.buttons.map((btnText, bIdx) => (
                      <div key={bIdx} className="bg-emerald-500/10 border border-emerald-500/30 hover:bg-emerald-500/20 text-emerald-300 font-semibold py-1.5 px-3 rounded-xl text-center text-xs transition-colors cursor-pointer">
                        {btnText}
                      </div>
                    ))}
                  </div>

                  <div className="text-[10px] text-slate-400 text-right mt-2 flex items-center justify-end gap-1">
                    <span>10:42 AM</span>
                    <span className="text-emerald-400 font-bold">✓✓</span>
                  </div>
                </div>

                {/* Simulated Campaign Progress Bar */}
                <div className="bg-slate-900/80 p-3 rounded-xl border border-white/10 space-y-2">
                  <div className="flex justify-between text-[11px] font-mono">
                    <span className="text-slate-400">Batch Progress</span>
                    <span className="text-emerald-400 font-bold">18,940 / 20,000</span>
                  </div>
                  <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-emerald-500 to-teal-300 rounded-full animate-pulse w-[94.7%]" />
                  </div>
                  <div className="flex justify-between text-[10px] text-slate-400">
                    <span>Speed: 1,200 msg/min</span>
                    <span className="text-emerald-400 font-bold">Manual work saved: 100%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export const WhatsAppAutomation = () => {
  return (
    <div className="bg-[linear-gradient(180deg,#f8fafc_0%,#ffffff_18%,#f8fafc_100%)] pt-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <div className="relative overflow-hidden rounded-[36px] border border-slate-200 bg-white px-8 py-14 shadow-sm lg:px-10 lg:py-16">
          <div className="absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(circle_at_top_left,rgba(11,37,69,0.12),transparent_45%),radial-gradient(circle_at_top_right,rgba(37,211,102,0.12),transparent_35%)]" />
          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700 mb-6">
                Enterprise WhatsApp Automation
              </div>
              <h1 className="text-5xl lg:text-6xl font-display font-bold text-slate-900 mb-8">Enterprise WhatsApp Automation Platform (Inaiwazhi)</h1>
              <p className="text-xl text-slate-600 mb-10 leading-relaxed">
                Scale your business communication with Inaiwazhi, the premier WhatsApp automation platform developed by SoftClinch. Leverage the official WhatsApp Business API to automate sales, marketing, and customer support at an enterprise scale.
              </p>
              <div className="flex gap-4 flex-wrap">
                <Link href="/contact" className="bg-brand-navy text-white px-8 py-4 rounded-full font-semibold hover:bg-brand-navy/90 transition-all inline-flex items-center">
                  Request Demo
                </Link>
                <Link href="/contact" className="border border-slate-300 bg-white text-slate-800 px-8 py-4 rounded-full font-semibold hover:border-emerald-500 hover:text-emerald-600 transition-all inline-flex items-center">
                  Talk to Our Team
                </Link>
              </div>
            <p className="mt-8 max-w-2xl text-sm leading-7 text-slate-500">
              Built for high-intent lead response, campaign automation, CRM-connected messaging, and scalable customer communication workflows.
            </p>
          </div>
          <div className="relative h-full min-h-[500px] w-full rounded-[2rem] overflow-hidden border border-slate-200 bg-slate-50 shadow-lg group">
            {/* Ambient glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/10 to-brand-navy/10 opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
            <img
              src="/whatsapp_automation_hero_v2.png"
              alt="WhatsApp automation platform preview"
              className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-500"
            />
            {/* Play button overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-slate-950/10 hover:bg-slate-950/20 transition-colors">
              <div className="rounded-full bg-white/95 p-5 shadow-2xl hover:scale-110 transition-transform duration-300">
                <PlayCircle className="h-12 w-12 text-emerald-600" />
              </div>
            </div>
          </div>
        </div>
        </div>

        {/* About Inaiwazhi */}
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 border-t border-slate-200/60 mt-10">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <span className="text-xs font-mono font-black uppercase tracking-[0.2em] text-emerald-600">
                {"// OWNED & DEVELOPED BY SOFTCLINCH"}
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-slate-900 leading-tight">
                About Inaiwazhi Platform
              </h2>
              
              <div className="border-l-4 border-emerald-600 bg-emerald-50/40 p-6 rounded-r-2xl shadow-sm">
                <p className="text-base sm:text-lg leading-relaxed text-slate-700 font-semibold">
                  Inaiwazhi is a proprietary WhatsApp automation platform developed and owned by SoftClinch Consulting Services. It is designed specifically for enterprises requiring secure, API-based communication automation that integrates deeply with existing business systems.
                </p>
              </div>

              <p className="text-slate-500 text-sm sm:text-base leading-relaxed font-semibold">
                By bypassing third-party middleware, Inaiwazhi establishes a direct, secure tunnel to Meta's Cloud API endpoints, ensuring maximum performance, data privacy, and minimal latency.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              {[
                {
                  title: "Secure Architecture",
                  desc: "Enterprise-grade security protocols for sensitive customer data, with strict API verification.",
                  icon: Shield,
                  color: "text-emerald-600 bg-emerald-50 border-emerald-100"
                },
                {
                  title: "High Performance Engine",
                  desc: "Built for high-volume broadcasts, automated response routing, and instantaneous template delivery.",
                  icon: Zap,
                  color: "text-amber-500 bg-amber-50 border-amber-100"
                }
              ].map((card) => (
                <div
                  key={card.title}
                  className="group flex gap-5 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md hover:border-emerald-600/30 transition-all duration-300"
                >
                  <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border ${card.color} group-hover:scale-105 transition-transform`}>
                    <card.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-slate-900 mb-1 group-hover:text-emerald-700 transition-colors">
                      {card.title}
                    </h4>
                    <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-semibold">
                      {card.desc}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>


        {/* Interactive Section: WhatsApp Campaigns Without the Manual Work */}
        <WhatsAppCampaignsWithoutManualWorkSection />

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




      </div>

      <FaqSection title="WhatsApp Automation FAQs" items={whatsappAutomationFaq} />
    </div>
  );
};
