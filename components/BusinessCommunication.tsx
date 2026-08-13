"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageSquare,
  Zap,
  Network,
  Layers,
  GitMerge,
  CheckCircle2,
  ArrowRight,
  Users,
  Building2,
  Server,
  Truck,
  PhoneCall,
  Activity,
  Sparkles,
  Clock,
  ShieldCheck,
  Cpu,
  Wrench,
  Headphones,
  Database,
  Smartphone,
  Send,
  RefreshCw,
  Search,
  Check,
  X,
  Workflow,
  Factory,
  Car,
  Home,
  ShoppingBag,
  Briefcase
} from "lucide-react";

export const BusinessCommunication = () => {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [demoTopic, setDemoTopic] = useState("Enterprise Demo");
  const [problemSearch, setProblemSearch] = useState("");

  const openDemoModal = (topic: string = "Enterprise Demo") => {
    if (typeof window !== "undefined") {
      window.location.href = "/contact";
    }
  };

  // Dynamic Ticker Triggers for Hero
  const tickerEvents = [
    { text: "A customer sends a request", target: "Support Team" },
    { text: "A support ticket needs attention", target: "Technical Team" },
    { text: "A salesperson needs to follow up", target: "CRM Lead" },
    { text: "A production order is completed", target: "Dispatch" },
    { text: "A dealer needs an update", target: "Logistics Partner" },
    { text: "A field employee needs a task", target: "Technician" },
    { text: "A manager needs an escalation", target: "Executive Desk" },
  ];

  // Section 7: Event Trigger Cards
  const eventTriggers = [
    { event: "New Lead", team: "Sales", icon: Users, color: "bg-blue-50/80 border-blue-200 text-blue-900" },
    { event: "New Order", team: "Operations", icon: ShoppingBag, color: "bg-emerald-50/80 border-emerald-200 text-emerald-900" },
    { event: "Production Completed", team: "Dispatch", icon: Factory, color: "bg-purple-50/80 border-purple-200 text-purple-900" },
    { event: "Service Request", team: "Support", icon: Headphones, color: "bg-amber-50/80 border-amber-200 text-amber-900" },
    { event: "High-Priority Ticket", team: "Manager", icon: ShieldCheck, color: "bg-rose-50/80 border-rose-200 text-rose-900" },
    { event: "Field Job Created", team: "Technician", icon: Wrench, color: "bg-cyan-50/80 border-cyan-200 text-cyan-900" },
    { event: "Payment Issue", team: "Finance", icon: Database, color: "bg-teal-50/80 border-teal-200 text-teal-900" },
    { event: "Delivery Delay", team: "Operations + Support", icon: Truck, color: "bg-orange-50/80 border-orange-200 text-orange-900" },
  ];

  // Section 11: 14 Problems Solved
  const problemsSolved = [
    { problem: "Customer requests get missed", solution: "Capture & route requests", icon: MessageSquare, category: "Customer" },
    { problem: "Support tickets are difficult to track", solution: "Create structured workflows", icon: Workflow, category: "Support" },
    { problem: "Support needs another department", solution: "Route internally", icon: GitMerge, category: "Support" },
    { problem: "Customers keep asking for updates", solution: "Automate status notifications", icon: Send, category: "Customer" },
    { problem: "Sales forget follow-ups", solution: "Trigger follow-up workflows", icon: Clock, category: "Sales" },
    { problem: "Production updates don’t reach dispatch", solution: "Trigger internal alerts", icon: Factory, category: "Operations" },
    { problem: "Dealers repeatedly call for updates", solution: "Automate dealer communication", icon: Network, category: "External" },
    { problem: "Field employees miss assignments", solution: "Send task notifications", icon: Wrench, category: "Field" },
    { problem: "Managers don’t know about escalations", solution: "Trigger escalation alerts", icon: ShieldCheck, category: "Management" },
    { problem: "ERP data doesn’t reach customers", solution: "Trigger communication workflows", icon: Database, category: "Systems" },
    { problem: "CRM leads need immediate action", solution: "Route & notify sales", icon: Users, category: "Sales" },
    { problem: "Internal requests get lost", solution: "Create trackable workflows", icon: Activity, category: "Internal" },
    { problem: "Multiple teams handle one customer issue", solution: "Connect the entire workflow", icon: Layers, category: "Support" },
    { problem: "Communication happens across too many channels", solution: "Centralize business communication", icon: Cpu, category: "Core" },
  ];

  const filteredProblems = problemsSolved.filter(
    (item) =>
      item.problem.toLowerCase().includes(problemSearch.toLowerCase()) ||
      item.solution.toLowerCase().includes(problemSearch.toLowerCase()) ||
      item.category.toLowerCase().includes(problemSearch.toLowerCase())
  );

  // Section 12: Why inaiwazhi Different
  const pillars = [
    {
      title: "Customer Communication",
      desc: "Talk to customers through WhatsApp seamlessly with automated contextual messaging.",
      icon: Smartphone,
    },
    {
      title: "Workflow Automation",
      desc: "Automatically trigger the next business action without manual delay or intervention.",
      icon: Zap,
    },
    {
      title: "Team Communication",
      desc: "Notify the right employee or department instantly when events require attention.",
      icon: Users,
    },
    {
      title: "Support & Ticketing",
      desc: "Turn incoming requests into structured, trackable, and SLA-driven support workflows.",
      icon: Headphones,
    },
    {
      title: "External Communication",
      desc: "Connect dealers, partners, vendors, contractors, and field teams into one loop.",
      icon: Network,
    },
    {
      title: "Business Integration",
      desc: "Connect communication directly with SAP, ERP, CRM, helpdesk, and custom internal APIs.",
      icon: Database,
    },
    {
      title: "Analytics",
      desc: "Monitor communication performance, response rates, and workflow activity in real-time.",
      icon: Activity,
    },
  ];

  // Section 13: How it works (6 Steps)
  const steps = [
    {
      num: "01",
      title: "Business Event",
      desc: "Something happens in your business: New Lead, New Order, New Ticket, Production Completed, Service Request, Payment Received, or Delivery Delayed.",
    },
    {
      num: "02",
      title: "inaiwazhi Trigger",
      desc: "The appropriate automated workflow rule is instantly triggered by the business event.",
    },
    {
      num: "03",
      title: "Route",
      desc: "The right customer, employee, department, or partner is automatically identified and assigned.",
    },
    {
      num: "04",
      title: "Communicate",
      desc: "The required notification, interactive message, or status update is sent via WhatsApp or preferred channel.",
    },
    {
      num: "05",
      title: "Act",
      desc: "The recipient takes action directly within the connected workflow with zero delay.",
    },
    {
      num: "06",
      title: "Track",
      desc: "The complete workflow status and communication history can be monitored centrally.",
    },
  ];

  // Section 14: Built for Industries
  const industries = [
    {
      name: "Manufacturing",
      icon: Factory,
      touchpoints: ["Sales", "Production", "Quality", "Warehouse", "Dispatch", "Dealers", "Service"],
      desc: "Synchronize factory floor production updates directly with dispatch and dealer networks.",
    },
    {
      name: "Automotive",
      icon: Car,
      touchpoints: ["Sales", "Service", "Technicians", "Customers", "Dealers"],
      desc: "Connect vehicle service bookings, technician job cards, and customer WhatsApp updates.",
    },
    {
      name: "Logistics",
      icon: Truck,
      touchpoints: ["Bookings", "Operations", "Drivers", "Delivery", "Customers"],
      desc: "Automate driver dispatch alerts, real-time shipment status notifications, and customer tracking.",
    },
    {
      name: "Real Estate",
      icon: Home,
      touchpoints: ["Leads", "Sales", "Site Visits", "Customers", "Support"],
      desc: "Instantly route new inquiries to sales agents, schedule site visits, and update buyers automatically.",
    },
    {
      name: "E-commerce",
      icon: ShoppingBag,
      touchpoints: ["Orders", "Payments", "Delivery", "Support", "Customers"],
      desc: "Provide proactive order status, shipping alerts, and automated post-purchase WhatsApp support.",
    },
    {
      name: "B2B & Enterprise",
      icon: Briefcase,
      touchpoints: ["Sales", "Support", "Operations", "Partners", "Internal Teams"],
      desc: "Manage complex multi-department escalation matrices and external partner collaboration.",
    },
  ];

  // Section 16: Who Uses inaiwazhi
  const userGroups = [
    {
      group: "Customer-Facing Teams",
      members: ["Sales", "Support", "Service", "Customer Success"],
      icon: Headphones,
    },
    {
      group: "Operational Teams",
      members: ["Production", "Warehouse", "Dispatch", "Finance", "Operations"],
      icon: Building2,
    },
    {
      group: "Distributed Teams",
      members: ["Field Employees", "Technicians", "Delivery Teams", "Service Partners"],
      icon: Wrench,
    },
    {
      group: "External Network",
      members: ["Dealers", "Distributors", "Vendors", "Suppliers", "Partners"],
      icon: Network,
    },
    {
      group: "Business Systems",
      members: ["SAP", "ERP", "CRM", "Helpdesk", "E-commerce", "Internal Applications"],
      icon: Server,
    },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans selection:bg-brand-terracotta selection:text-white pt-28 sm:pt-32 lg:pt-36">

      {/* =========================================================================
          HERO SECTION (High-Fidelity White Light Enterprise Design)
          ========================================================================= */}
      <section className="relative z-10 pt-4 sm:pt-8 pb-16 lg:pb-20 border-b border-slate-200/80 bg-white overflow-hidden">
        {/* Soft Modern Gradient Mesh Background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(0,51,102,0.08),_transparent_45%),radial-gradient(circle_at_80%_20%,_rgba(153,51,0,0.08),_transparent_35%),linear-gradient(180deg,_#ffffff_0%,_#f8fafc_100%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* 2-Column Hero Grid: Left Content (Heading & Story), Right Live Simulator Visual */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-12">

            {/* Left Column: Top Pill Badge, Heading, Subtitle, Problem Story & CTAs */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="lg:col-span-7 space-y-6 text-left"
            >
              {/* Top Pill Badge */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-900 text-white text-xs font-bold uppercase tracking-widest shadow-md hover:bg-slate-800 transition-colors">
                  <Sparkles className="w-4 h-4 text-amber-400 animate-spin-slow" />
                  <span>inaiwazhi • SoftClinch Enterprise Platform</span>
                </div>
              </motion.div>

              {/* Main Title Header */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="font-extrabold text-slate-900 leading-tight"
                style={{ fontSize: "clamp(2rem, 3.6vw, 3.4rem)", lineHeight: 1.15, letterSpacing: "-0.03em" }}
              >
                Business Communication &{" "}
                <span className="bg-gradient-to-r from-brand-navy via-slate-800 to-brand-terracotta bg-clip-text text-transparent">
                  Workflow Automation Platform
                </span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-base sm:text-lg text-slate-600 font-medium leading-relaxed"
              >
                Connect Customers, Support Teams, Employees, Partners & Business Systems
              </motion.p>

              {/* Problem Story Box */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-slate-50 border border-slate-200 p-5 sm:p-6 rounded-3xl text-slate-800 shadow-sm space-y-3.5"
              >
                <p className="text-sm sm:text-base leading-relaxed font-medium">
                  Your business already has core systems for <span className="text-brand-navy font-bold">sales, operations, finance, production, service and CRM</span>.
                </p>

                <div className="p-3.5 rounded-2xl bg-brand-navy/5 border-l-4 border-brand-terracotta text-brand-navy font-bold text-sm sm:text-base leading-snug">
                  What happens between those systems and the people who need to act?
                </div>

                <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider pt-1">
                  Real-time Event Triggers Connected:
                </div>

                {/* Event Trigger Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {[
                    { event: "Customer WhatsApp Request", target: "Support Desk" },
                    { event: "Support Ticket Escalation", target: "Plant QA & Ops" },
                    { event: "Production Order Completed", target: "Dispatch & SAP" },
                    { event: "Dealer Shipment Dispatched", target: "WhatsApp ETA" },
                  ].map((item, idx) => (
                    <motion.div
                      key={idx}
                      whileHover={{ scale: 1.01, x: 2 }}
                      className="p-2.5 rounded-xl bg-white border border-slate-200 flex items-center justify-between text-xs shadow-2xs"
                    >
                      <span className="font-bold text-slate-900">{item.event}</span>
                      <span className="text-[10px] font-bold text-brand-navy bg-brand-navy/10 px-2 py-0.5 rounded">
                        {item.target}
                      </span>
                    </motion.div>
                  ))}
                </div>

                <div className="pt-1 text-xs text-slate-600 font-semibold flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Your SAP / ERP holds the data. inaiwazhi connects that data to the people who need to act.</span>
                </div>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex flex-col sm:flex-row items-center gap-4 pt-1"
              >
                <Link
                  href="/contact"
                  className="w-full sm:w-auto px-7 py-3.5 rounded-2xl bg-brand-navy hover:bg-brand-navy/90 text-white font-bold text-sm transition-all shadow-lg hover:shadow-brand-navy/20 flex items-center justify-center gap-2.5 hover:scale-[1.02]"
                >
                  <span>See How It Works</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <button
                  onClick={() => openDemoModal("Enterprise Main Demo")}
                  className="w-full sm:w-auto px-7 py-3.5 rounded-2xl bg-brand-terracotta hover:bg-brand-terracotta/90 text-white font-bold text-sm transition-all shadow-lg hover:shadow-brand-terracotta/20 flex items-center justify-center gap-2.5 hover:scale-[1.02]"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Book an Enterprise Demo</span>
                </button>
              </motion.div>
            </motion.div>

            {/* Right Column: Animated Live Orchestration Bus Visual Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="lg:col-span-5 bg-slate-900 rounded-3xl p-6 sm:p-7 text-white shadow-2xl border border-slate-800 relative overflow-hidden group flex flex-col justify-between self-stretch"
            >
              {/* Vertical Traveling Energy Orb Ball */}
              <motion.div
                animate={{
                  top: ["16%", "38%", "62%", "84%", "16%"]
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute left-[34px] w-3.5 h-3.5 rounded-full bg-emerald-400 shadow-[0_0_15px_#34d399,#0_0_30px_#10b981] z-30 pointer-events-none -translate-x-1/2 hidden sm:block"
              />

              {/* Animated Glow Background Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-navy/40 via-slate-900 to-brand-terracotta/20 opacity-80 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div>
                {/* Header Ticker */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-5 relative z-10">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-xs font-mono font-bold text-slate-300 uppercase tracking-wider">
                      ORCHESTRATION ENGINE
                    </span>
                  </div>
                  <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    LIVE AUTOMATION
                  </span>
                </div>

                {/* Connected Stage Nodes Visual Flow */}
                <div className="space-y-3 relative z-10">

                  {/* Node 1 */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="p-3.5 rounded-2xl bg-slate-800/90 border border-slate-700/80 flex items-center justify-between transition-all"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-xs">
                        💬
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white">Inbound WhatsApp Trigger</div>
                        <div className="text-[10px] text-slate-400">“Need stock update for Order #9021”</div>
                      </div>
                    </div>
                    <span className="text-[9px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded animate-pulse">
                      INGESTED
                    </span>
                  </motion.div>

                  {/* Flow Arrow */}
                  <div className="text-center py-0.5">
                    <motion.div
                      animate={{ y: [0, 3, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                    >
                      <ArrowRight className="w-4 h-4 text-amber-400 mx-auto rotate-90" />
                    </motion.div>
                  </div>

                  {/* Node 2: AI Engine */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="p-3.5 rounded-2xl bg-gradient-to-r from-brand-navy to-slate-800 border border-brand-navy/60 flex items-center justify-between shadow-md transition-all"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-xl bg-amber-400/20 text-amber-300 flex items-center justify-center font-bold text-xs">
                        ⚡
                      </div>
                      <div>
                        <div className="text-xs font-bold text-amber-300">inaiwazhi Workflow Engine</div>
                        <div className="text-[10px] text-slate-300">Classifies intent & checks SAP inventory API</div>
                      </div>
                    </div>
                    <span className="text-[9px] font-bold text-amber-300 bg-amber-400/10 px-2 py-0.5 rounded animate-pulse">
                      ROUTED
                    </span>
                  </motion.div>

                  {/* Flow Arrow */}
                  <div className="text-center py-0.5">
                    <motion.div
                      animate={{ y: [0, 3, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5, delay: 0.5 }}
                    >
                      <ArrowRight className="w-4 h-4 text-emerald-400 mx-auto rotate-90" />
                    </motion.div>
                  </div>

                  {/* Node 3: System Sync */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="p-3.5 rounded-2xl bg-slate-800/90 border border-slate-700/80 flex items-center justify-between transition-all"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center font-bold text-xs">
                        ⚙️
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white">SAP / ERP & CRM Synced</div>
                        <div className="text-[10px] text-slate-400">Order status updated & notification sent</div>
                      </div>
                    </div>
                    <span className="text-[9px] font-bold text-sky-400 bg-sky-500/10 px-2 py-0.5 rounded animate-pulse">
                      SYNCED
                    </span>
                  </motion.div>

                  {/* Flow Arrow */}
                  <div className="text-center py-0.5">
                    <motion.div
                      animate={{ y: [0, 3, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5, delay: 0.8 }}
                    >
                      <ArrowRight className="w-4 h-4 text-emerald-400 mx-auto rotate-90" />
                    </motion.div>
                  </div>

                  {/* Node 4: Action Completed */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="p-3.5 rounded-2xl bg-emerald-950/40 border border-emerald-500/30 flex items-center justify-between transition-all"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-300 flex items-center justify-center font-bold text-xs">
                        ✅
                      </div>
                      <div>
                        <div className="text-xs font-bold text-emerald-300">Customer & Team Notified</div>
                        <div className="text-[10px] text-slate-300">Instant WhatsApp confirmation dispatched</div>
                      </div>
                    </div>
                    <span className="text-[9px] font-bold text-emerald-300 bg-emerald-500/20 px-2 py-0.5 rounded">
                      RESOLVED
                    </span>
                  </motion.div>

                </div>
              </div>

              {/* Bottom Ticker */}
              <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400 font-medium relative z-10">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  Latency: &lt; 1.2s
                </span>
                <span className="text-amber-400 font-bold">100% Automated Workflow</span>
              </div>
            </motion.div>
          </div>

          {/* System Connector Pills Ticker Bar (Ball-Driven Text Reveal Animation) */}
          <div className="relative p-4 rounded-2xl bg-white border border-slate-200/90 text-slate-900 shadow-sm overflow-hidden flex flex-col sm:flex-row items-center justify-between gap-4 min-h-[72px]">

            {/* Soft Brand Gradient Track Line */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-brand-navy/10 via-brand-terracotta/40 to-brand-navy/10" />

            {/* Traveling Laser Energy Orb Ball (Moves from Left to Right, Revealing Pills Behind It) */}
            <motion.div
              animate={{
                left: ["0%", "100%"]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                repeatDelay: 1,
                ease: "easeInOut"
              }}
              className="absolute top-1/2 -translate-y-1/2 w-8 h-8 pointer-events-none z-30 flex items-center justify-center -ml-4"
            >
              {/* Sleek Glowing Orb Ball */}
              <div className="w-3.5 h-3.5 rounded-full bg-brand-terracotta shadow-[0_0_12px_#993300,#0_0_24px_#003366] animate-pulse" />
            </motion.div>

            {/* Label */}
            <div className="flex items-center gap-2.5 shrink-0 relative z-20">
              <span className="w-2.5 h-2.5 rounded-full bg-brand-terracotta animate-ping" />
              <span className="font-mono font-extrabold uppercase tracking-widest text-brand-navy text-[11px]">
                PRE-BUILT INTEGRATIONS:
              </span>
            </div>

            {/* Integration Pills Revealed Sequentially Behind Traveling Ball */}
            <div className="flex flex-wrap sm:flex-nowrap items-center gap-2.5 overflow-x-auto w-full relative z-20 py-1 scrollbar-none">
              {[
                { name: "SAP S/4HANA", icon: "⚡" },
                { name: "Oracle ERP", icon: "⚡" },
                { name: "Salesforce CRM", icon: "⚡" },
                { name: "Zendesk", icon: "⚡" },
                { name: "WhatsApp Business API", icon: "💬" },
                { name: "Custom Webhooks", icon: "🔗" }
              ].map((sys, idx) => {
                const startFraction = (idx * 0.13) + 0.08;
                return (
                  <motion.div
                    key={idx}
                    animate={{
                      opacity: [0, 0, 1, 1, 0],
                      scale: [0.85, 0.85, 1, 1, 0.85],
                      y: [4, 4, 0, 0, 4],
                      borderColor: [
                        "rgba(226, 232, 240, 1)",
                        "rgba(153, 51, 0, 0.6)",
                        "rgba(226, 232, 240, 1)",
                        "rgba(226, 232, 240, 1)",
                        "rgba(226, 232, 240, 1)"
                      ],
                      boxShadow: [
                        "0 0 0px rgba(0,0,0,0)",
                        "0 0 15px rgba(153,51,0,0.3)",
                        "0 1px 2px rgba(0,0,0,0.03)",
                        "0 1px 2px rgba(0,0,0,0.03)",
                        "0 0 0px rgba(0,0,0,0)"
                      ]
                    }}
                    transition={{
                      duration: 7,
                      repeat: Infinity,
                      times: [
                        0,
                        startFraction,
                        startFraction + 0.08,
                        0.88,
                        1
                      ],
                      ease: "easeInOut"
                    }}
                    className="px-3.5 py-1.5 rounded-xl bg-white border border-slate-200 text-slate-800 font-bold text-xs shrink-0 flex items-center gap-2 transition-all cursor-default shadow-2xs hover:border-brand-navy/40"
                  >
                    <span className="text-brand-terracotta font-semibold">{sys.icon}</span>
                    <span className="text-slate-800 font-bold">{sys.name}</span>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 1: Is Your Business Communication Still Fragmented? (NEAT REDESIGN)
          ========================================================================= */}
      <section className="py-20 border-b border-slate-200/80 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-navy bg-brand-navy/10 border border-brand-navy/20 px-4 py-1.5 rounded-full inline-block mb-3">
              Diagnostic Communication Flow
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Is Your Business Communication Still Fragmented?
            </h2>
            <p className="text-base sm:text-lg text-slate-600 font-semibold mt-3">
              Your Systems Work. Your Teams Work. But Communication Gets Lost Between Them.
            </p>
          </div>

          {/* 2-Column Split: Left = Fragmented Chain, Right = The Solution */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

            {/* Left Column: Fragmented Chain Step-by-Step */}
            <div className="lg:col-span-7 bg-slate-50 border-2 border-slate-300/80 rounded-3xl p-6 sm:p-7 flex flex-col justify-between shadow-sm">
              <div>
                <div className="flex items-center justify-between mb-5 pb-3 border-b-2 border-slate-200">
                  <span className="text-xs sm:text-sm font-extrabold text-rose-600 uppercase tracking-wider">The Communication Gap</span>
                  <span className="text-xs text-slate-600 font-bold bg-white px-2.5 py-1 rounded-lg border border-slate-300">
                    6 Fragmented Touchpoints
                  </span>
                </div>

                <div className="space-y-3 relative">
                  {[
                    { step: "01", title: "Customer", action: "Sends a request via message or call", icon: Users, status: "Pending" },
                    { step: "02", title: "Support Team", action: "Needs to respond & create record", icon: Headphones, status: "Waiting" },
                    { step: "03", title: "Internal Team", action: "Needs to investigate technical details", icon: Building2, status: "Manual Check" },
                    { step: "04", title: "Operations", action: "Needs to take factory or dispatch action", icon: Zap, status: "In Progress" },
                    { step: "05", title: "External Partner / Dealer", action: "Needs an update on shipment/status", icon: Network, status: "Calling Back" },
                    { step: "06", title: "Customer", action: "Awaiting final status & resolution", icon: CheckCircle2, status: "Delayed" },
                  ].map((node, i) => (
                    <div key={i} className="flex items-center gap-3.5 p-3 sm:p-3.5 rounded-2xl bg-white border-2 border-slate-300/80 shadow-2xs hover:border-brand-navy/60 transition-all">
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-brand-navy/5 border-2 border-brand-navy/20 text-brand-navy flex items-center justify-center font-mono text-xs sm:text-sm font-extrabold flex-shrink-0">
                        {node.step}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2">
                          <h4 className="font-extrabold text-slate-900 text-sm sm:text-base truncate">{node.title}</h4>
                          <span className="text-[11px] sm:text-xs font-bold text-rose-700 bg-rose-50 px-2.5 py-0.5 rounded-md border border-rose-200 flex-shrink-0">
                            {node.status}
                          </span>
                        </div>
                        <p className="text-xs sm:text-sm text-slate-500 font-medium truncate mt-0.5">{node.action}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t-2 border-slate-200 text-xs sm:text-sm text-slate-600 font-bold flex items-center justify-between">
                <span className="flex items-center gap-1.5">
                  <span className="text-sm">⚠️</span> Information gets lost at every handover
                </span>
                <span className="text-rose-600 font-extrabold uppercase tracking-wide bg-rose-50 px-2.5 py-0.5 rounded border border-rose-200 text-xs">
                  Unconnected Process
                </span>
              </div>
            </div>

            {/* Right Column: The inaiwazhi Orchestration Solution */}
            <div className="lg:col-span-5 bg-gradient-to-b from-brand-navy via-slate-900 to-brand-navy text-white rounded-3xl p-6 sm:p-7 flex flex-col justify-between shadow-xl relative overflow-hidden border-2 border-slate-800">
              <div className="relative z-10">
                <span className="text-xs font-mono uppercase font-bold text-amber-400 tracking-widest block mb-2">
                  The Solution
                </span>
                <h3 className="text-2xl font-extrabold mb-3 leading-tight">
                  One Unified Communication Layer
                </h3>

                <p className="text-sm sm:text-base text-slate-200 font-medium leading-relaxed mb-5">
                  The problem isn’t always the system. The problem is the <strong className="text-amber-300 font-bold">communication between systems, teams and people</strong>.
                </p>

                <div className="p-4 rounded-2xl bg-white/10 border-2 border-white/15 space-y-3 mb-5 backdrop-blur">
                  <div className="text-xs font-bold text-amber-300 uppercase tracking-wider">
                    How inaiwazhi Fixes It:
                  </div>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-slate-100 font-semibold">
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400 flex-shrink-0" />
                      <span>Captures customer WhatsApp request instantly</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400 flex-shrink-0" />
                      <span>Triggers automated ticket routing to internal team</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400 flex-shrink-0" />
                      <span>Updates SAP / ERP system automatically</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400 flex-shrink-0" />
                      <span>Notifies customer & dealer with zero manual delay</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="relative z-10 pt-4 border-t border-white/15">
                <button
                  onClick={() => openDemoModal("Fragmented Communication Walkthrough")}
                  className="w-full py-3.5 rounded-xl bg-brand-terracotta hover:bg-brand-terracotta/90 text-white font-extrabold text-sm sm:text-base transition-all shadow-lg flex items-center justify-center gap-2 hover:scale-[1.01]"
                >
                  <span>Connect My Communication Flow</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 2: What Happens When a Customer Raises an Issue? (DUAL-DIRECTION MARQUEE)
          ========================================================================= */}
      <section className="py-20 border-b border-slate-200/80 bg-gradient-to-b from-slate-50 via-white to-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section Header */}
          <div className="text-center max-w-4xl mx-auto mb-12">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-terracotta/10 text-brand-terracotta border border-brand-terracotta/20 text-xs font-bold uppercase tracking-widest mb-4"
            >
              <Sparkles className="w-3.5 h-3.5 text-brand-terracotta" />
              <span>End-to-End Resolution Lifecycle</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-4"
              style={{ letterSpacing: "-0.03em" }}
            >
              What Happens When a Customer Raises an Issue?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-base sm:text-xl text-slate-600 font-medium max-w-3xl mx-auto leading-relaxed"
            >
              Turn One Customer Request Into a Complete Business Workflow
            </motion.p>
          </div>

          {/* Stepper Outer Card Wrapper */}
          <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xl space-y-10 overflow-hidden">

            {/* TOP ROW: Phase 1 • Ingestion & Internal Routing (SCROLLS SLOWLY TO THE RIGHT) */}
            <div>
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-200">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-brand-navy animate-pulse" />
                  <span className="text-xs font-extrabold text-brand-navy uppercase tracking-wider font-mono">
                    Phase 1 • Ingestion & Internal Routing
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold font-mono text-brand-navy bg-brand-navy/10 px-2.5 py-0.5 rounded-full flex items-center gap-1">
                    <ArrowRight className="w-3 h-3 text-brand-navy" /> Moving Right →
                  </span>
                  <span className="text-xs text-slate-500 font-mono font-bold">Steps 01 - 05</span>
                </div>
              </div>

              {/* Marquee Right Container */}
              <div className="relative overflow-hidden group">
                <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

                <motion.div
                  className="flex gap-4 w-max py-2"
                  animate={{ x: ["-33.33%", "0%"] }}
                  transition={{
                    repeat: Infinity,
                    ease: "linear",
                    duration: 28,
                  }}
                >
                  {[
                    { step: "01", actor: "Customer", action: "“My machine is not working.”", badge: "Trigger", icon: MessageSquare },
                    { step: "02", actor: "inaiwazhi", action: "Request captured & parsed", badge: "System", icon: Zap },
                    { step: "03", actor: "Support", action: "Ticket & case created", badge: "Auto Ticket", icon: Headphones },
                    { step: "04", actor: "Service Team", action: "Assigned to specialist", badge: "Routing", icon: Users },
                    { step: "05", actor: "Internal Team", action: "Technical data shared", badge: "Collaboration", icon: Building2 },
                    { step: "01", actor: "Customer", action: "“My machine is not working.”", badge: "Trigger", icon: MessageSquare },
                    { step: "02", actor: "inaiwazhi", action: "Request captured & parsed", badge: "System", icon: Zap },
                    { step: "03", actor: "Support", action: "Ticket & case created", badge: "Auto Ticket", icon: Headphones },
                    { step: "04", actor: "Service Team", action: "Assigned to specialist", badge: "Routing", icon: Users },
                    { step: "05", actor: "Internal Team", action: "Technical data shared", badge: "Collaboration", icon: Building2 },
                    { step: "01", actor: "Customer", action: "“My machine is not working.”", badge: "Trigger", icon: MessageSquare },
                    { step: "02", actor: "inaiwazhi", action: "Request captured & parsed", badge: "System", icon: Zap },
                    { step: "03", actor: "Support", action: "Ticket & case created", badge: "Auto Ticket", icon: Headphones },
                    { step: "04", actor: "Service Team", action: "Assigned to specialist", badge: "Routing", icon: Users },
                    { step: "05", actor: "Internal Team", action: "Technical data shared", badge: "Collaboration", icon: Building2 },
                  ].map((item, idx) => (
                    <motion.div
                      key={idx}
                      whileHover={{ scale: 1.03, y: -2 }}
                      className="w-64 p-4 rounded-2xl bg-slate-50 border border-slate-200/90 hover:bg-white hover:border-brand-navy hover:shadow-md transition-all flex flex-col justify-between flex-shrink-0"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs font-mono font-bold text-slate-400">{item.step}</span>
                          <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded bg-brand-navy/10 text-brand-navy">
                            {item.badge}
                          </span>
                        </div>
                        <div className="font-extrabold text-slate-900 text-sm flex items-center gap-2">
                          <item.icon className="w-4 h-4 text-brand-navy flex-shrink-0" />
                          <span>{item.actor}</span>
                        </div>
                        <div className="text-xs text-slate-600 font-medium mt-1.5">{item.action}</div>
                      </div>
                      <div className="mt-3 pt-2 border-t border-slate-200/80 flex justify-end">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>

            {/* BOTTOM ROW: Phase 2 • Field Execution & Resolution (SCROLLS SLOWLY TO THE LEFT) */}
            <div>
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-200">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-brand-terracotta animate-pulse" />
                  <span className="text-xs font-extrabold text-brand-terracotta uppercase tracking-wider font-mono">
                    Phase 2 • Field Execution & Resolution
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold font-mono text-brand-terracotta bg-brand-terracotta/10 px-2.5 py-0.5 rounded-full flex items-center gap-1">
                    ← Moving Left
                  </span>
                  <span className="text-xs text-slate-500 font-mono font-bold">Steps 06 - 11</span>
                </div>
              </div>

              {/* Marquee Left Container */}
              <div className="relative overflow-hidden group">
                <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

                <motion.div
                  className="flex gap-4 w-max py-2"
                  animate={{ x: ["0%", "-33.33%"] }}
                  transition={{
                    repeat: Infinity,
                    ease: "linear",
                    duration: 32,
                  }}
                >
                  {[
                    { step: "06", actor: "Field Employee", action: "Task dispatched", badge: "Dispatch", icon: Wrench },
                    { step: "07", actor: "Operations", action: "Status updated live", badge: "Realtime", icon: Activity },
                    { step: "08", actor: "Customer", action: "WhatsApp notification", badge: "WhatsApp", icon: Smartphone },
                    { step: "09", actor: "Support", action: "Resolution confirmed", badge: "Quality", icon: ShieldCheck },
                    { step: "10", actor: "Customer", action: "Issue fulfilled", badge: "Fulfilled", icon: CheckCircle2 },
                    { step: "11", actor: "Feedback", action: "Automated survey", badge: "Analytics", icon: Sparkles },
                    { step: "06", actor: "Field Employee", action: "Task dispatched", badge: "Dispatch", icon: Wrench },
                    { step: "07", actor: "Operations", action: "Status updated live", badge: "Realtime", icon: Activity },
                    { step: "08", actor: "Customer", action: "WhatsApp notification", badge: "WhatsApp", icon: Smartphone },
                    { step: "09", actor: "Support", action: "Resolution confirmed", badge: "Quality", icon: ShieldCheck },
                    { step: "10", actor: "Customer", action: "Issue fulfilled", badge: "Fulfilled", icon: CheckCircle2 },
                    { step: "11", actor: "Feedback", action: "Automated survey", badge: "Analytics", icon: Sparkles },
                    { step: "06", actor: "Field Employee", action: "Task dispatched", badge: "Dispatch", icon: Wrench },
                    { step: "07", actor: "Operations", action: "Status updated live", badge: "Realtime", icon: Activity },
                    { step: "08", actor: "Customer", action: "WhatsApp notification", badge: "WhatsApp", icon: Smartphone },
                    { step: "09", actor: "Support", action: "Resolution confirmed", badge: "Quality", icon: ShieldCheck },
                    { step: "10", actor: "Customer", action: "Issue fulfilled", badge: "Fulfilled", icon: CheckCircle2 },
                    { step: "11", actor: "Feedback", action: "Automated survey", badge: "Analytics", icon: Sparkles },
                  ].map((item, idx) => (
                    <motion.div
                      key={idx}
                      whileHover={{ scale: 1.03, y: -2 }}
                      className="w-64 p-4 rounded-2xl bg-slate-50 border border-slate-200/90 hover:bg-white hover:border-brand-terracotta hover:shadow-md transition-all flex flex-col justify-between flex-shrink-0"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs font-mono font-bold text-slate-400">{item.step}</span>
                          <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded bg-brand-terracotta/10 text-brand-terracotta">
                            {item.badge}
                          </span>
                        </div>
                        <div className="font-extrabold text-slate-900 text-sm flex items-center gap-2">
                          <item.icon className="w-4 h-4 text-brand-terracotta flex-shrink-0" />
                          <span>{item.actor}</span>
                        </div>
                        <div className="text-xs text-slate-600 font-medium mt-1.5">{item.action}</div>
                      </div>
                      <div className="mt-3 pt-2 border-t border-slate-200/80 flex justify-end">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>

            {/* Bottom Summary Banner */}
            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-brand-navy via-slate-900 to-brand-navy text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl border border-slate-800">
              <div className="text-left space-y-1">
                <div className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest">
                  End-to-End SLA Resolution
                </div>
                <div className="text-lg sm:text-xl font-extrabold text-white">
                  From message → ticket → team → action → resolution.
                </div>
              </div>
              <button
                onClick={() => openDemoModal("Build Support Workflow")}
                className="px-8 py-4 rounded-2xl bg-brand-terracotta hover:bg-brand-terracotta/90 text-white font-bold text-sm transition-all whitespace-nowrap shadow-lg shadow-brand-terracotta/20 flex items-center gap-2"
              >
                <span>Build Support Workflow</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: How Can I Connect Customers With My Support Team? (RADIAL HUB DESIGN)
          ========================================================================= */}
      <section className="py-20 border-b border-slate-200/80 bg-gradient-to-br from-[#F8FAFC] via-white to-[#F8FAFC] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section Header */}
          <div className="text-center max-w-4xl mx-auto mb-14">
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-4"
              style={{ letterSpacing: "-0.03em" }}
            >
              How Can I Connect Customers With My Support Team?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-base sm:text-xl text-slate-600 font-medium max-w-3xl mx-auto leading-relaxed"
            >
              Give Every Customer Request a Clear Path
            </motion.p>
          </div>

          {/* Main 2-Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-12">

            {/* Left Side: Original Description Card */}
            <div className="lg:col-span-5">
              <div className="p-8 rounded-3xl bg-slate-900 text-white shadow-2xl border border-slate-800 space-y-6 relative overflow-hidden">
                <div className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest">
                  Central Support Architecture
                </div>

                <p className="text-lg text-slate-200 font-medium leading-relaxed">
                  Customers should not have to repeat the same problem to multiple employees.
                </p>

                <div className="pt-4 border-t border-slate-800 space-y-3">
                  <div className="text-xs font-mono text-slate-400 mb-2">Connected Support Network:</div>
                  <div className="flex flex-wrap gap-2 text-xs font-bold text-amber-300">
                    {["Customer", "Support", "Technical Team", "Operations", "Field Team", "Management"].map((node, i) => (
                      <span key={i} className="px-3 py-1.5 rounded-xl bg-slate-800 border border-slate-700">
                        ● {node}
                      </span>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => openDemoModal("Connect Customer Support")}
                  className="w-full py-4 rounded-2xl bg-brand-terracotta hover:bg-brand-terracotta/90 text-white font-bold text-xs transition-all shadow-lg flex items-center justify-center gap-2"
                >
                  <span>Connect Customer Support Flow</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Side: Radial Central Hub Diagram (Brand Logo Colors & Smooth Animations) */}
            <div className="lg:col-span-7 relative py-8 flex items-center justify-center">

              {/* Radial Container */}
              <div className="relative w-full max-w-[500px] aspect-square flex items-center justify-center">

                {/* Animated Background SVG Connector Lines with Moving Data Pulses */}
                <svg
                  className="absolute inset-0 w-full h-full pointer-events-none z-0"
                  viewBox="0 0 500 500"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Lines radiating from Center (250,250) to 6 Points */}
                  {[
                    { x2: 250, y2: 70 },   // Top
                    { x2: 410, y2: 150 },  // Top-Right
                    { x2: 410, y2: 350 },  // Bottom-Right
                    { x2: 250, y2: 430 },  // Bottom
                    { x2: 90, y2: 350 },   // Bottom-Left
                    { x2: 90, y2: 150 },   // Top-Left
                  ].map((pt, i) => (
                    <g key={i}>
                      {/* Base Line with Brand Navy / Terracotta styling */}
                      <line
                        x1="250"
                        y1="250"
                        x2={pt.x2}
                        y2={pt.y2}
                        stroke={i % 2 === 0 ? "#003366" : "#993300"}
                        strokeWidth="3"
                        strokeDasharray="6 6"
                        className="opacity-40"
                      />
                      {/* Pulsing Animated Stream Flow along connector */}
                      <motion.line
                        x1="250"
                        y1="250"
                        x2={pt.x2}
                        y2={pt.y2}
                        stroke={i % 2 === 0 ? "#993300" : "#003366"}
                        strokeWidth="3"
                        strokeDasharray="12 24"
                        initial={{ strokeDashoffset: 36 }}
                        animate={{ strokeDashoffset: 0 }}
                        transition={{
                          repeat: Infinity,
                          ease: "linear",
                          duration: 2 + i * 0.3,
                        }}
                      />
                    </g>
                  ))}
                </svg>

                {/* CENTER HUB CIRCLE (Brand Logo Navy & Terracotta) */}
                <div className="relative z-10">
                  {/* Pulsing Radar Aura Ring in Brand Terracotta */}
                  <div className="absolute -inset-4 rounded-full bg-brand-terracotta/20 animate-ping opacity-75 pointer-events-none" />
                  <div className="absolute -inset-2 rounded-full bg-brand-navy/30 animate-pulse pointer-events-none" />

                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    className="relative z-10 w-40 h-40 sm:w-48 sm:h-48 rounded-full bg-gradient-to-br from-brand-navy via-[#0A192F] to-[#040D1A] text-white shadow-2xl border-4 border-brand-terracotta flex flex-col items-center justify-center text-center p-4 ring-8 ring-brand-terracotta/20"
                  >
                    <span className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-none mb-1 drop-shadow-md">
                      6
                    </span>
                    <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-amber-300">
                      Connected
                    </span>
                    <span className="text-[10px] font-bold text-white uppercase tracking-widest bg-brand-terracotta/80 px-2.5 py-0.5 rounded-full mt-1">
                      Support Hub
                    </span>
                  </motion.div>
                </div>

                {/* 6 RADIAL NODES WITH BRAND LOGO COLORS & GENTLE FLOATING ANIMATION */}
                {[
                  {
                    name: "Customer",
                    icon: MessageSquare,
                    pos: "top-0 left-1/2 -translate-x-1/2",
                    color: "bg-brand-navy border-brand-terracotta text-white",
                    accent: "border-brand-navy/20",
                    delay: 0.1,
                  },
                  {
                    name: "Support",
                    icon: Headphones,
                    pos: "top-12 right-2 sm:right-6",
                    color: "bg-brand-terracotta border-brand-navy text-white",
                    accent: "border-brand-terracotta/20",
                    delay: 0.2,
                  },
                  {
                    name: "Technical Team",
                    icon: Zap,
                    pos: "bottom-12 right-2 sm:right-6",
                    color: "bg-brand-navy border-brand-terracotta text-white",
                    accent: "border-brand-navy/20",
                    delay: 0.3,
                  },
                  {
                    name: "Operations",
                    icon: Activity,
                    pos: "bottom-0 left-1/2 -translate-x-1/2",
                    color: "bg-brand-terracotta border-brand-navy text-white",
                    accent: "border-brand-terracotta/20",
                    delay: 0.4,
                  },
                  {
                    name: "Field Team",
                    icon: Wrench,
                    pos: "bottom-12 left-2 sm:left-6",
                    color: "bg-brand-navy border-brand-terracotta text-white",
                    accent: "border-brand-navy/20",
                    delay: 0.5,
                  },
                  {
                    name: "Management",
                    icon: Building2,
                    pos: "top-12 left-2 sm:left-6",
                    color: "bg-brand-terracotta border-brand-navy text-white",
                    accent: "border-brand-terracotta/20",
                    delay: 0.6,
                  },
                ].map((node, i) => {
                  const Icon = node.icon;
                  return (
                    <motion.div
                      key={i}
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      animate={{ y: [-4, 4, -4] }}
                      transition={{
                        delay: node.delay,
                        duration: 0.4,
                        y: {
                          repeat: Infinity,
                          duration: 3 + i * 0.4,
                          ease: "easeInOut",
                        },
                      }}
                      whileHover={{ scale: 1.15 }}
                      className={`absolute ${node.pos} z-20 flex flex-col items-center cursor-pointer group`}
                    >
                      <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full ${node.color} shadow-xl border-3 flex items-center justify-center transition-all duration-300 group-hover:shadow-brand-terracotta/40 ring-4 ring-white`}>
                        <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-white group-hover:rotate-12 transition-transform" />
                      </div>
                      <span className="text-xs sm:text-sm font-extrabold text-slate-900 mt-2 bg-white/95 backdrop-blur-xs px-3 py-1 rounded-full shadow-md border border-slate-200 tracking-tight font-sans">
                        {node.name}
                      </span>
                    </motion.div>
                  );
                })}

              </div>

            </div>

          </div>

          {/* Bottom Banner with Exact Original Text */}
          <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 text-white text-center shadow-xl">
            <span className="inline-flex items-center gap-2 text-sm sm:text-base font-extrabold text-white">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
              Every request can be routed to the right person, team or workflow automatically.
            </span>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 4: What If the Support Team Needs Another Department? (3D DRIBBBLE ANIMATED HUB)
          ========================================================================= */}
      <section className="py-24 border-b border-slate-200/80 bg-gradient-to-b from-slate-50 via-slate-100/70 to-slate-50 relative overflow-hidden">

        {/* Subtle Isometric Canvas Background Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:32px_32px] opacity-60 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-terracotta bg-brand-terracotta/10 border border-brand-terracotta/20 px-5 py-2 rounded-full inline-block mb-3 shadow-xs">
              3D Inter-Departmental Orchestration
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              What If Support Needs Another Department?
            </h2>
            <p className="text-base sm:text-xl text-slate-600 font-semibold mt-4">
              Requests automatically flow from central support into target department queues in slow-motion real time.
            </p>
          </div>

          {/* DRIBBBLE-STYLE 3D ISOMETRIC NETWORK CANVAS */}
          <div className="relative py-8 my-4">

            {/* SVG Glowing Connection Lines (Connecting Central Hub to 4 Radial Department Nodes) */}
            <div className="hidden lg:block absolute inset-0 pointer-events-none z-0">
              <svg className="w-full h-full" viewBox="0 0 1200 500" fill="none">
                {/* Path 1: Central to Top Left (Engineering) */}
                <path d="M 600 250 C 450 250, 350 120, 250 120" stroke="url(#lineGradientBlue)" strokeWidth="3" strokeDasharray="6 6" className="animate-pulse" />
                {/* Path 2: Central to Top Right (Warehouse) */}
                <path d="M 600 250 C 750 250, 850 120, 950 120" stroke="url(#lineGradientAmber)" strokeWidth="3" strokeDasharray="6 6" className="animate-pulse" />
                {/* Path 3: Central to Bottom Left (Field Service) */}
                <path d="M 600 250 C 450 250, 350 380, 250 380" stroke="url(#lineGradientEmerald)" strokeWidth="3" strokeDasharray="6 6" className="animate-pulse" />
                {/* Path 4: Central to Bottom Right (Finance) */}
                <path d="M 600 250 C 750 250, 850 380, 950 380" stroke="url(#lineGradientPurple)" strokeWidth="3" strokeDasharray="6 6" className="animate-pulse" />

                {/* Animated Slow-Motion Laser Orbs */}
                <motion.circle
                  r="6"
                  fill="#3b82f6"
                  animate={{ offsetDistance: ["0%", "100%"] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                />

                <defs>
                  <linearGradient id="lineGradientBlue" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#003366" />
                    <stop offset="100%" stopColor="#3b82f6" />
                  </linearGradient>
                  <linearGradient id="lineGradientAmber" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#003366" />
                    <stop offset="100%" stopColor="#f59e0b" />
                  </linearGradient>
                  <linearGradient id="lineGradientEmerald" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#003366" />
                    <stop offset="100%" stopColor="#10b981" />
                  </linearGradient>
                  <linearGradient id="lineGradientPurple" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#003366" />
                    <stop offset="100%" stopColor="#a855f7" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* Central 3D Core Hub (Center Pedestal) */}
            <div className="flex justify-center mb-12 lg:mb-16 relative z-20">
              <motion.div
                initial={{ scale: 0.8, opacity: 0, y: 30 }}
                whileInView={{ scale: 1, opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className="relative group"
              >
                {/* Multi-Ring Pulsing Radar Aura */}
                <div className="absolute -inset-4 bg-brand-navy/20 rounded-3xl blur-xl group-hover:bg-brand-terracotta/40 transition-all duration-700 pointer-events-none" />

                <div className="relative bg-gradient-to-b from-brand-navy via-slate-900 to-brand-navy border-4 border-brand-terracotta/30 rounded-3xl p-6 sm:p-8 text-white shadow-2xl backdrop-blur-xl flex flex-col items-center text-center max-w-sm">

                  {/* Glowing 3D Glass Badge */}
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-brand-terracotta to-rose-600 p-0.5 shadow-lg mb-4 transform -rotate-3 group-hover:rotate-0 transition-transform duration-500">
                    <div className="w-full h-full rounded-[14px] bg-slate-900 flex items-center justify-center">
                      <Headphones className="w-8 h-8 sm:w-10 sm:h-10 text-brand-terracotta animate-bounce" />
                    </div>
                  </div>

                  <span className="text-xs font-mono font-extrabold uppercase tracking-widest text-white bg-brand-terracotta/90 border border-brand-terracotta/40 px-3.5 py-1 rounded-full mb-2 shadow-xs">
                    Central Support Core
                  </span>

                  <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight text-white">
                    inaiwazhi Orchestrator
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 font-medium mt-2 leading-relaxed">
                    Auto-categorizes inbound tickets & dispatches execution triggers instantly across department APIs.
                  </p>

                  <div className="mt-4 pt-3 border-t border-white/15 w-full flex items-center justify-between text-xs text-slate-200 font-bold">
                    <span className="flex items-center gap-1.5 text-emerald-400">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                      Live Routing Active
                    </span>
                    <span className="font-mono text-white/90">0.4s SLA</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* 4 Radial 3D Floating Department Cards (Staggered Slow Motion Entrance) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative z-10">
              {[
                {
                  id: "tech",
                  dept: "Engineering & Tech",
                  tag: "Technical Issue",
                  accentColor: "from-blue-600 to-indigo-700",
                  badgeBg: "bg-blue-600 text-white",
                  borderColor: "border-blue-300/80 hover:border-blue-500",
                  iconBg: "bg-blue-50 text-blue-700 border-blue-200",
                  icon: Wrench,
                  trigger: "Hardware failure or bug report detected",
                  action: "Auto-creates engineering work item & links SAP tech manuals.",
                  sla: "< 30 mins routing",
                  delay: 0.2,
                },
                {
                  id: "ops",
                  dept: "Warehouse & Ops",
                  tag: "Dispatch Delay",
                  accentColor: "from-amber-500 to-orange-600",
                  badgeBg: "bg-amber-600 text-white",
                  borderColor: "border-amber-300/80 hover:border-amber-500",
                  iconBg: "bg-amber-50 text-amber-700 border-amber-200",
                  icon: Building2,
                  trigger: "Stock shortage or shipment tracking query",
                  action: "Triggers live ERP inventory check & alerts dispatch team.",
                  sla: "< 15 mins update",
                  delay: 0.4,
                },
                {
                  id: "field",
                  dept: "Field Service Team",
                  tag: "On-Site Visit",
                  accentColor: "from-emerald-500 to-teal-700",
                  badgeBg: "bg-emerald-600 text-white",
                  borderColor: "border-emerald-300/80 hover:border-emerald-500",
                  iconBg: "bg-emerald-50 text-emerald-700 border-emerald-200",
                  icon: Users,
                  trigger: "Field service request or installation issue",
                  action: "Dispatches nearest technician with customer GPS & job spec.",
                  sla: "Instant assignment",
                  delay: 0.6,
                },
                {
                  id: "finance",
                  dept: "Finance & Accounts",
                  tag: "Billing & Refund",
                  accentColor: "from-purple-600 to-violet-700",
                  badgeBg: "bg-purple-600 text-white",
                  borderColor: "border-purple-300/80 hover:border-purple-500",
                  iconBg: "bg-purple-50 text-purple-700 border-purple-200",
                  icon: Database,
                  trigger: "Invoice discrepancy or refund approval query",
                  action: "Syncs ERP ledger & delivers verified credit note to customer.",
                  sla: "Auto-verification",
                  delay: 0.8,
                },
              ].map((card, idx) => {
                const CardIcon = card.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 50, scale: 0.9 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{
                      duration: 1.1,
                      delay: card.delay,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    whileHover={{ y: -8, transition: { duration: 0.3 } }}
                    className={`bg-white border-2 ${card.borderColor} rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all flex flex-col justify-between relative group overflow-hidden`}
                  >
                    {/* Top 3D Color Pill Stripe */}
                    <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${card.accentColor}`} />

                    <div>
                      <div className="flex items-center justify-between mb-5 pt-2">
                        <div className={`w-12 h-12 rounded-2xl ${card.iconBg} border-2 flex items-center justify-center font-extrabold shadow-sm group-hover:scale-110 transition-transform`}>
                          <CardIcon className="w-6 h-6" />
                        </div>
                        <span className={`text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full shadow-xs ${card.badgeBg}`}>
                          {card.tag}
                        </span>
                      </div>

                      <h3 className="font-extrabold text-slate-900 text-lg mb-3 tracking-tight">
                        {card.dept}
                      </h3>

                      <div className="space-y-3 text-xs">
                        <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200/90">
                          <span className="text-[10px] font-extrabold uppercase text-slate-400 tracking-wider block mb-1">
                            Inbound Trigger
                          </span>
                          <span className="font-semibold text-slate-800 leading-snug block">
                            {card.trigger}
                          </span>
                        </div>

                        <div className="p-3 rounded-2xl bg-emerald-50/70 border border-emerald-200">
                          <span className="text-[10px] font-extrabold uppercase text-emerald-800 tracking-wider block mb-1">
                            Automated Orchestration
                          </span>
                          <span className="font-extrabold text-slate-900 leading-snug block">
                            {card.action}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 pt-3.5 border-t-2 border-slate-100 flex items-center justify-between text-xs font-bold">
                      <span className="text-slate-500">Target SLA</span>
                      <span className="text-brand-navy bg-brand-navy/5 px-2.5 py-1 rounded-lg border border-brand-navy/15 font-mono">
                        {card.sla}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>

          </div>

          {/* Bottom Dribbble-Style Summary Banner */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mt-12 p-6 sm:p-8 rounded-3xl bg-white border-2 border-slate-300/90 text-center shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 max-w-5xl mx-auto"
          >
            <div className="text-left">
              <div className="font-extrabold text-slate-900 text-lg sm:text-xl flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-brand-terracotta" />
                <span>Zero lost messages. Zero manual emails.</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 font-semibold mt-1">
                Support becomes a unified automated workflow across engineering, operations, field teams and ERP finance.
              </p>
            </div>

            <button
              onClick={() => openDemoModal("Inter-Departmental Escalation")}
              className="px-7 py-4 rounded-2xl bg-brand-navy hover:bg-brand-navy/90 text-white font-extrabold text-xs sm:text-sm transition-all whitespace-nowrap shadow-lg hover:scale-105 flex items-center gap-2"
            >
              <span>Setup Departmental Workflows</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 5: How Can I Manage Support Tickets Through WhatsApp? (NEW WORKBENCH DESIGN)
          ========================================================================= */}
      <section className="py-20 border-b border-slate-200/80 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-700 bg-emerald-50 border border-emerald-200 px-4 py-1.5 rounded-full inline-block mb-3">
              WhatsApp Ticketing Engine
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              How Can I Manage Support Tickets Through WhatsApp?
            </h2>
            <p className="text-base sm:text-lg text-slate-600 font-medium mt-3">
              Turn Unstructured WhatsApp Chats Into Structured, Trackable Enterprise Tickets
            </p>
          </div>

          {/* 2-Column Split: Left = Live WhatsApp Simulation, Right = 4 Enterprise Features */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12">

            {/* Left Column: Live WhatsApp Mobile Simulator UI */}
            <div className="lg:col-span-5 bg-slate-900 rounded-3xl p-6 text-white shadow-2xl border border-slate-800 relative overflow-hidden">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-emerald-600 flex items-center justify-center font-bold text-white text-xs">
                    <Smartphone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-sm text-slate-100">inaiwazhi Enterprise Bot</div>
                    <div className="text-[10px] text-emerald-400 font-mono">● Active • Live SAP Integration</div>
                  </div>
                </div>
                <span className="text-[10px] font-mono font-bold text-slate-400 bg-slate-800 px-2.5 py-1 rounded-full">
                  Ticket #TK-8821
                </span>
              </div>

              {/* Chat Simulation Messages */}
              <div className="space-y-3 text-xs mb-6">
                {/* Customer Msg */}
                <div className="bg-slate-800 border border-slate-700 rounded-2xl p-3.5 max-w-[85%] text-slate-200">
                  <div className="text-[10px] text-slate-400 font-bold mb-1">Customer (10:14 AM)</div>
                  <p className="leading-relaxed font-medium">“Hi, Machine #M-402 stopped working on line B. Need engineer urgent.”</p>
                </div>

                {/* System Auto Reply */}
                <div className="bg-emerald-950/80 border border-emerald-800/80 rounded-2xl p-3.5 max-w-[90%] ml-auto text-emerald-100">
                  <div className="text-[10px] text-emerald-400 font-bold mb-1">inaiwazhi Auto Engine (10:14 AM)</div>
                  <p className="leading-relaxed font-semibold">
                    ✓ Ticket #TK-8821 Created.<br />
                    • Priority: <span className="text-amber-300 font-bold">P1 Critical</span><br />
                    • Assigned: <span className="text-emerald-300 font-bold">Field Tech Support</span><br />
                    • SAP Task: <span className="text-cyan-300 font-bold">Generated (#WO-991)</span>
                  </p>
                </div>

                {/* Status Update Msg */}
                <div className="bg-slate-800 border border-slate-700 rounded-2xl p-3.5 max-w-[85%] text-slate-200">
                  <div className="text-[10px] text-emerald-400 font-bold mb-1">Live Update (10:22 AM)</div>
                  <p className="leading-relaxed font-medium">“Technician Ramesh assigned. On the way with replacement parts.”</p>
                </div>
              </div>

              {/* Live Ticket Status Bar */}
              <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-between text-[11px]">
                <span className="text-slate-400 font-medium">Lifecycle Status:</span>
                <span className="font-bold text-emerald-400 bg-emerald-950/90 px-3 py-1 rounded-full border border-emerald-700/60">
                  In Progress (SLA Active)
                </span>
              </div>
            </div>

            {/* Right Column: 4 Capability Cards */}
            <div className="lg:col-span-7 space-y-4">
              {[
                {
                  title: "1. Instant Ingestion & Categorization",
                  desc: "Every incoming WhatsApp message is automatically converted into a trackable ticket with unique reference ID.",
                  badge: "Zero Data Entry",
                  icon: MessageSquare,
                },
                {
                  title: "2. Automated Priority Classification",
                  desc: "System evaluates issue urgency based on customer tier, equipment code, or SAP contract terms.",
                  badge: "AI & Rule-Based",
                  icon: Zap,
                },
                {
                  title: "3. Real-Time Customer Status Updates",
                  desc: "As internal engineering or logistics teams update status, automatic WhatsApp progress alerts are sent.",
                  badge: "Auto WhatsApp",
                  icon: Smartphone,
                },
                {
                  title: "4. Automated CSAT Survey & Closure",
                  desc: "Upon resolution, an automated rating survey is delivered directly in WhatsApp for instant feedback.",
                  badge: "Analytics Ready",
                  icon: ShieldCheck,
                },
              ].map((item, idx) => (
                <div key={idx} className="bg-slate-50 border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-xs hover:border-brand-navy/30 transition-all flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 text-brand-navy flex items-center justify-center font-bold flex-shrink-0">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-bold text-slate-900 text-sm sm:text-base">{item.title}</h3>
                      <span className="text-[10px] font-bold uppercase px-2.5 py-0.5 rounded bg-brand-navy/10 text-brand-navy">
                        {item.badge}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 font-medium leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Bottom Lifecycle Status Ribbon */}
          <div className="p-6 rounded-2xl bg-slate-900 text-white shadow-lg flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <div className="text-xs font-mono uppercase font-bold text-amber-400 mb-1 tracking-widest">
                Ticket Lifecycle Tracking
              </div>
              <div className="text-sm font-bold">Open ➔ Assigned ➔ In Progress ➔ Escalated ➔ Resolved ➔ Closed</div>
            </div>
            <button
              onClick={() => openDemoModal("Automate Support & Ticketing")}
              className="px-6 py-3 rounded-xl bg-brand-terracotta hover:bg-brand-terracotta/90 text-white font-bold text-xs transition-all whitespace-nowrap shadow-sm"
            >
              Automate Support & Ticketing
            </button>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 7: How Can I Manage Internal Team Communication? (RADIAL FLOWCHART - SOFTCLINCH BRANDED)
          ========================================================================= */}
      <section className="py-24 border-b border-slate-200/80 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono font-extrabold uppercase tracking-widest text-brand-terracotta bg-brand-terracotta/10 border border-brand-terracotta/20 px-5 py-2 rounded-full inline-block mb-3 shadow-xs">
              Internal Event Orchestration
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              How Can I Manage Internal Team Communication?
            </h2>
            <p className="text-base sm:text-xl text-slate-600 font-semibold mt-4">
              Automatically trigger structured communication and assign tasks when key business events occur.
            </p>
          </div>

          {/* Silo Problem Banner */}
          <div className="mb-14 bg-slate-50 border-2 border-slate-200/80 rounded-3xl p-6 sm:p-8 text-center shadow-xs">
            <div className="text-xs font-mono uppercase font-extrabold text-brand-terracotta mb-3 tracking-widest">
              The Internal Communication Silo Problem
            </div>
            <p className="text-sm sm:text-base text-slate-700 font-semibold mb-5">
              Internal communication bottlenecks occur when critical business information stays trapped in:
            </p>
            <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3 text-xs font-extrabold text-slate-700">
              {[
                "Personal WhatsApp Chats",
                "Unread Email Threads",
                "Verbal Phone Calls",
                "Isolated Team Channels",
                "Manual Spreadsheets",
                "Unassigned Requests",
              ].map((item, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-700 shadow-xs flex items-center gap-2"
                >
                  <span className="text-amber-500">⚠️</span>
                  <span>{item}</span>
                </span>
              ))}
            </div>
          </div>

          {/* RADIAL FLOWCHART CANVAS (MATCHING USER REFERENCE DIAGRAM WITH SOFTCLINCH LOGO BRAND COLORS & ORIGINAL EVENT CONTENT) */}
          <div className="bg-slate-50 border-2 border-slate-200/90 rounded-3xl p-6 sm:p-12 shadow-xl relative overflow-hidden my-6">

            {/* SVG Orthogonal Branching Lines in SoftClinch Brand Palette */}
            <div className="hidden lg:block absolute inset-0 pointer-events-none z-0">
              <svg className="w-full h-full" viewBox="0 0 1000 600" fill="none">
                <defs>
                  {/* SoftClinch Terracotta Arrowhead */}
                  <marker
                    id="brandTerracottaArrow"
                    viewBox="0 0 10 10"
                    refX="6"
                    refY="5"
                    markerWidth="8"
                    markerHeight="8"
                    orient="auto-start-reverse"
                  >
                    <path d="M 0 1 L 10 5 L 0 9 z" fill="#a23b2a" />
                  </marker>
                </defs>

                {/* Main Central Trunk Lines (Brand Navy & Terracotta) */}
                {/* Top Vertical Trunk */}
                <path d="M 500 300 V 160" stroke="#0A192F" strokeWidth="3" />
                {/* Top Left Branch */}
                <path d="M 500 160 H 320 V 95" stroke="#0A192F" strokeWidth="3" markerEnd="url(#brandTerracottaArrow)" />
                {/* Top Right Branch */}
                <path d="M 500 160 H 680 V 95" stroke="#0A192F" strokeWidth="3" markerEnd="url(#brandTerracottaArrow)" />

                {/* Left Horizontal Trunk */}
                <path d="M 500 300 H 290" stroke="#0A192F" strokeWidth="3" />
                {/* Left Top Branch */}
                <path d="M 290 300 V 210 H 210" stroke="#0A192F" strokeWidth="3" markerEnd="url(#brandTerracottaArrow)" />
                {/* Left Bottom Branch */}
                <path d="M 290 300 V 390 H 210" stroke="#0A192F" strokeWidth="3" markerEnd="url(#brandTerracottaArrow)" />

                {/* Right Horizontal Trunk */}
                <path d="M 500 300 H 710" stroke="#0A192F" strokeWidth="3" />
                {/* Right Top Branch */}
                <path d="M 710 300 V 210 H 790" stroke="#0A192F" strokeWidth="3" markerEnd="url(#brandTerracottaArrow)" />
                {/* Right Bottom Branch */}
                <path d="M 710 300 V 390 H 790" stroke="#0A192F" strokeWidth="3" markerEnd="url(#brandTerracottaArrow)" />

                {/* Bottom Vertical Trunk */}
                <path d="M 500 300 V 440" stroke="#0A192F" strokeWidth="3" />
                {/* Bottom Left Branch */}
                <path d="M 500 440 H 320 V 505" stroke="#0A192F" strokeWidth="3" markerEnd="url(#brandTerracottaArrow)" />
                {/* Bottom Right Branch */}
                <path d="M 500 440 H 680 V 505" stroke="#0A192F" strokeWidth="3" markerEnd="url(#brandTerracottaArrow)" />
              </svg>
            </div>

            {/* Responsive Grid Layout */}
            <div className="relative z-10 space-y-8 lg:space-y-0">

              {/* TOP ROW NODES: Event 1 (New Lead) & Event 2 (New Order) */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 lg:gap-64 lg:mb-16">
                {/* Node 1: New Lead */}
                <motion.div
                  initial={{ opacity: 0, y: -30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="w-full sm:w-64 bg-slate-900 hover:bg-slate-800 text-white p-5 rounded-2xl shadow-xl border-2 border-brand-terracotta/40 text-center transition-all cursor-pointer group"
                >
                  <div className="flex items-center justify-center gap-2 mb-1">
                    <Users className="w-4 h-4 text-brand-terracotta" />
                    <span className="font-extrabold text-base sm:text-lg tracking-tight">New Lead</span>
                  </div>
                  <div className="text-xs text-emerald-400 font-extrabold mt-1">
                    Assigned to: <span className="text-white">Sales Team</span>
                  </div>
                </motion.div>

                {/* Node 2: New Order */}
                <motion.div
                  initial={{ opacity: 0, y: -30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  whileHover={{ scale: 1.05 }}
                  className="w-full sm:w-64 bg-slate-900 hover:bg-slate-800 text-white p-5 rounded-2xl shadow-xl border-2 border-brand-terracotta/40 text-center transition-all cursor-pointer group"
                >
                  <div className="flex items-center justify-center gap-2 mb-1">
                    <ShoppingBag className="w-4 h-4 text-brand-terracotta" />
                    <span className="font-extrabold text-base sm:text-lg tracking-tight">New Order</span>
                  </div>
                  <div className="text-xs text-emerald-400 font-extrabold mt-1">
                    Assigned to: <span className="text-white">Operations</span>
                  </div>
                </motion.div>
              </div>

              {/* MIDDLE ROW NODES: Left (Production Completed, Service Request) + CENTER CORE + Right (High-Priority Ticket, Field Job Created) */}
              <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-6 lg:gap-4 lg:my-10">

                {/* Left Column (2 Nodes) */}
                <div className="lg:col-span-3 space-y-6 flex flex-col items-center lg:items-end">
                  {/* Node 3: Production Completed */}
                  <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    whileHover={{ scale: 1.05 }}
                    className="w-full sm:w-64 bg-slate-900 hover:bg-slate-800 text-white p-5 rounded-2xl shadow-xl border-2 border-brand-terracotta/40 text-center transition-all cursor-pointer group"
                  >
                    <div className="flex items-center justify-center gap-2 mb-1">
                      <Factory className="w-4 h-4 text-brand-terracotta" />
                      <span className="font-extrabold text-base sm:text-lg tracking-tight">Production Completed</span>
                    </div>
                    <div className="text-xs text-emerald-400 font-extrabold mt-1">
                      Assigned to: <span className="text-white">Dispatch Team</span>
                    </div>
                  </motion.div>

                  {/* Node 4: Service Request */}
                  <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                    whileHover={{ scale: 1.05 }}
                    className="w-full sm:w-64 bg-slate-900 hover:bg-slate-800 text-white p-5 rounded-2xl shadow-xl border-2 border-brand-terracotta/40 text-center transition-all cursor-pointer group"
                  >
                    <div className="flex items-center justify-center gap-2 mb-1">
                      <Headphones className="w-4 h-4 text-brand-terracotta" />
                      <span className="font-extrabold text-base sm:text-lg tracking-tight">Service Request</span>
                    </div>
                    <div className="text-xs text-emerald-400 font-extrabold mt-1">
                      Assigned to: <span className="text-white">Support Team</span>
                    </div>
                  </motion.div>
                </div>

                {/* CENTER CORE NODE: Internal Team Communication */}
                <div className="lg:col-span-6 flex justify-center py-4 my-2 lg:my-0">
                  <motion.div
                    initial={{ scale: 0.85, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="w-full max-w-sm bg-gradient-to-br from-brand-navy via-slate-900 to-brand-navy text-white p-7 sm:p-9 rounded-3xl shadow-2xl border-4 border-brand-terracotta text-center relative group"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-brand-terracotta/20 border border-brand-terracotta/40 mx-auto flex items-center justify-center mb-3">
                      <Workflow className="w-8 h-8 text-brand-terracotta animate-pulse" />
                    </div>
                    <h3 className="font-extrabold text-xl sm:text-2xl tracking-tight text-white">
                      Internal Team Communication
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 font-semibold mt-2">
                      inaiwazhi Automated Event Router
                    </p>
                  </motion.div>
                </div>

                {/* Right Column (2 Nodes) */}
                <div className="lg:col-span-3 space-y-6 flex flex-col items-center lg:items-start">
                  {/* Node 5: High-Priority Ticket */}
                  <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ duration: 0.7, delay: 0.5 }}
                    whileHover={{ scale: 1.05 }}
                    className="w-full sm:w-64 bg-slate-900 hover:bg-slate-800 text-white p-5 rounded-2xl shadow-xl border-2 border-brand-terracotta/40 text-center transition-all cursor-pointer group"
                  >
                    <div className="flex items-center justify-center gap-2 mb-1">
                      <ShieldCheck className="w-4 h-4 text-brand-terracotta" />
                      <span className="font-extrabold text-base sm:text-lg tracking-tight">High-Priority Ticket</span>
                    </div>
                    <div className="text-xs text-emerald-400 font-extrabold mt-1">
                      Assigned to: <span className="text-white">Manager Escalation</span>
                    </div>
                  </motion.div>

                  {/* Node 6: Field Job Created */}
                  <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ duration: 0.7, delay: 0.6 }}
                    whileHover={{ scale: 1.05 }}
                    className="w-full sm:w-64 bg-slate-900 hover:bg-slate-800 text-white p-5 rounded-2xl shadow-xl border-2 border-brand-terracotta/40 text-center transition-all cursor-pointer group"
                  >
                    <div className="flex items-center justify-center gap-2 mb-1">
                      <Wrench className="w-4 h-4 text-brand-terracotta" />
                      <span className="font-extrabold text-base sm:text-lg tracking-tight">Field Job Created</span>
                    </div>
                    <div className="text-xs text-emerald-400 font-extrabold mt-1">
                      Assigned to: <span className="text-white">Field Technician</span>
                    </div>
                  </motion.div>
                </div>

              </div>

              {/* BOTTOM ROW NODES: Event 7 (Payment Issue) & Event 8 (Delivery Delay) */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 lg:gap-64 lg:mt-16">
                {/* Node 7: Payment Issue */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 0.7, delay: 0.7 }}
                  whileHover={{ scale: 1.05 }}
                  className="w-full sm:w-64 bg-slate-900 hover:bg-slate-800 text-white p-5 rounded-2xl shadow-xl border-2 border-brand-terracotta/40 text-center transition-all cursor-pointer group"
                >
                  <div className="flex items-center justify-center gap-2 mb-1">
                    <Database className="w-4 h-4 text-brand-terracotta" />
                    <span className="font-extrabold text-base sm:text-lg tracking-tight">Payment Issue</span>
                  </div>
                  <div className="text-xs text-emerald-400 font-extrabold mt-1">
                    Assigned to: <span className="text-white">Finance Team</span>
                  </div>
                </motion.div>

                {/* Node 8: Delivery Delay */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 0.7, delay: 0.8 }}
                  whileHover={{ scale: 1.05 }}
                  className="w-full sm:w-64 bg-slate-900 hover:bg-slate-800 text-white p-5 rounded-2xl shadow-xl border-2 border-brand-terracotta/40 text-center transition-all cursor-pointer group"
                >
                  <div className="flex items-center justify-center gap-2 mb-1">
                    <Truck className="w-4 h-4 text-brand-terracotta" />
                    <span className="font-extrabold text-base sm:text-lg tracking-tight">Delivery Delay</span>
                  </div>
                  <div className="text-xs text-emerald-400 font-extrabold mt-1">
                    Assigned to: <span className="text-white">Ops + Support</span>
                  </div>
                </motion.div>
              </div>

            </div>

          </div>

          {/* Bottom Execution Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mt-10 p-6 rounded-3xl bg-brand-navy text-white text-center shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4 max-w-5xl mx-auto border-2 border-brand-terracotta/30"
          >
            <div className="text-left">
              <div className="text-xs font-mono uppercase font-extrabold text-brand-terracotta tracking-widest">
                Automated Internal Routing Engine
              </div>
              <div className="text-base sm:text-lg font-extrabold text-white mt-1">
                Business Event ➔ Target Team ➔ Immediate Action
              </div>
            </div>
            <button
              onClick={() => openDemoModal("Internal Team Communication")}
              className="px-6 py-3.5 rounded-2xl bg-brand-terracotta hover:bg-brand-terracotta/90 text-white font-extrabold text-xs sm:text-sm transition-all whitespace-nowrap shadow-md hover:scale-105"
            >
              Configure Internal Workflows
            </button>
          </motion.div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 8: Can External Teams & Partners Be Connected Too? (CLEAN WHITE & TERRACOTTA DESIGN)
          ========================================================================= */}
      <section className="py-24 border-b border-slate-200/80 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* Section Header */}
          <div className="text-center max-w-4xl mx-auto mb-16">
            <motion.span
              initial={{ opacity: 0, y: -15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="text-xs font-mono font-extrabold uppercase tracking-widest text-brand-terracotta bg-brand-terracotta/10 border border-brand-terracotta/20 px-5 py-2 rounded-full inline-block mb-4 shadow-xs"
            >
              Cross-Enterprise Ecosystem Engine
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4"
            >
              Can External Teams & Partners Be Connected Too?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-xl text-slate-600 font-semibold max-w-3xl mx-auto leading-relaxed"
            >
              Connect Employees, Dealers, Vendors, Contractors & Field Teams in One Unified Real-Time Network.
            </motion.p>
          </div>

          {/* 8 BUSINESS EVENTS SERPENTINE S-CURVE STEPPER FLOWCHART (MATCHING USER REFERENCE DESIGN) */}
          <div className="bg-slate-50 border-2 border-slate-200/90 rounded-3xl p-6 sm:p-14 shadow-xl relative overflow-hidden mb-12">

            {/* Section Stage Title */}
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Automated Event-Driven <span className="text-brand-terracotta">Routing Pipeline</span>
              </h3>
              <p className="text-sm text-slate-600 font-medium mt-2">
                Real-time trigger pathing connecting business actions directly to target operational teams.
              </p>
            </div>

            {/* Dotted Trajectory Connector Lines (Desktop SVG Serpentine S-Curve Path) */}
            <div className="hidden lg:block absolute inset-0 pointer-events-none z-0">
              <svg className="w-full h-full" viewBox="0 0 1000 560" fill="none">
                {/* Row 1 Path: Event 1 ➔ Event 2 ➔ Event 3 ➔ Event 4 */}
                <path
                  d="M 180 180 H 350 M 430 180 H 600 M 680 180 H 850"
                  stroke="#0A192F"
                  strokeWidth="3"
                  strokeDasharray="6 6"
                />
                <circle cx="180" cy="180" r="5" fill="#a23b2a" />
                <circle cx="350" cy="180" r="5" fill="#a23b2a" />
                <circle cx="430" cy="180" r="5" fill="#a23b2a" />
                <circle cx="600" cy="180" r="5" fill="#a23b2a" />
                <circle cx="680" cy="180" r="5" fill="#a23b2a" />
                <circle cx="850" cy="180" r="5" fill="#a23b2a" />

                {/* Serpentine Drop Line from Event 4 down & left to Event 5 */}
                <path
                  d="M 890 220 V 320 H 130 V 420"
                  stroke="#0A192F"
                  strokeWidth="3"
                  strokeDasharray="6 6"
                />
                <circle cx="890" cy="220" r="5" fill="#a23b2a" />
                <circle cx="130" cy="420" r="5" fill="#a23b2a" />

                {/* Row 2 Path: Event 5 ➔ Event 6 ➔ Event 7 ➔ Event 8 */}
                <path
                  d="M 180 435 H 350 M 430 435 H 600 M 680 435 H 850"
                  stroke="#0A192F"
                  strokeWidth="3"
                  strokeDasharray="6 6"
                />
                <circle cx="180" cy="435" r="5" fill="#a23b2a" />
                <circle cx="350" cy="435" r="5" fill="#a23b2a" />
                <circle cx="430" cy="435" r="5" fill="#a23b2a" />
                <circle cx="600" cy="435" r="5" fill="#a23b2a" />
                <circle cx="680" cy="435" r="5" fill="#a23b2a" />
                <circle cx="850" cy="435" r="5" fill="#a23b2a" />
              </svg>
            </div>

            {/* 8 EVENTS 2-ROW STEPPER FLOW LAYOUT */}
            <div className="relative z-10 space-y-12 lg:space-y-16">

              {/* ROW 1: Events 1 to 4 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">

                {/* Event 1: New Lead */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: 0.05 }}
                  whileHover={{ scale: 1.05, y: -4 }}
                  className="bg-blue-50/70 border-2 border-blue-200/90 hover:border-brand-terracotta rounded-3xl p-6 shadow-md text-center flex flex-col items-center justify-between transition-all cursor-pointer group"
                >
                  <div className="w-16 h-16 rounded-2xl bg-blue-100/90 border border-blue-300 text-blue-700 flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform shadow-xs">
                    👥
                  </div>
                  <div>
                    <span className="text-[11px] font-mono font-bold uppercase text-blue-800 bg-blue-100 px-3 py-1 rounded-full border border-blue-200 inline-block mb-2">
                      Event 01
                    </span>
                    <h4 className="text-lg sm:text-xl font-bold text-slate-800 tracking-tight">
                      New Lead
                    </h4>
                    <p className="text-xs text-blue-900/80 font-medium mt-2 pt-2 border-t border-blue-200/70">
                      ➔ Assigned to: <span className="font-bold text-slate-900">Sales</span>
                    </p>
                  </div>
                </motion.div>

                {/* Event 2: New Order */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  whileHover={{ scale: 1.05, y: -4 }}
                  className="bg-emerald-50/70 border-2 border-emerald-200/90 hover:border-brand-terracotta rounded-3xl p-6 shadow-md text-center flex flex-col items-center justify-between transition-all cursor-pointer group"
                >
                  <div className="w-16 h-16 rounded-2xl bg-emerald-100/90 border border-emerald-300 text-emerald-700 flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform shadow-xs">
                    🛍️
                  </div>
                  <div>
                    <span className="text-[11px] font-mono font-bold uppercase text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full border border-emerald-200 inline-block mb-2">
                      Event 02
                    </span>
                    <h4 className="text-lg sm:text-xl font-bold text-slate-800 tracking-tight">
                      New Order
                    </h4>
                    <p className="text-xs text-emerald-900/80 font-medium mt-2 pt-2 border-t border-emerald-200/70">
                      ➔ Assigned to: <span className="font-bold text-slate-900">Operations</span>
                    </p>
                  </div>
                </motion.div>

                {/* Event 3: Production Completed */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: 0.15 }}
                  whileHover={{ scale: 1.05, y: -4 }}
                  className="bg-purple-50/70 border-2 border-purple-200/90 hover:border-brand-terracotta rounded-3xl p-6 shadow-md text-center flex flex-col items-center justify-between transition-all cursor-pointer group"
                >
                  <div className="w-16 h-16 rounded-2xl bg-purple-100/90 border border-purple-300 text-purple-700 flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform shadow-xs">
                    🏭
                  </div>
                  <div>
                    <span className="text-[11px] font-mono font-bold uppercase text-purple-800 bg-purple-100 px-3 py-1 rounded-full border border-purple-200 inline-block mb-2">
                      Event 03
                    </span>
                    <h4 className="text-lg sm:text-xl font-bold text-slate-800 tracking-tight">
                      Production Completed
                    </h4>
                    <p className="text-xs text-purple-900/80 font-medium mt-2 pt-2 border-t border-purple-200/70">
                      ➔ Assigned to: <span className="font-bold text-slate-900">Dispatch</span>
                    </p>
                  </div>
                </motion.div>

                {/* Event 4: Service Request */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  whileHover={{ scale: 1.05, y: -4 }}
                  className="bg-amber-50/70 border-2 border-amber-200/90 hover:border-brand-terracotta rounded-3xl p-6 shadow-md text-center flex flex-col items-center justify-between transition-all cursor-pointer group"
                >
                  <div className="w-16 h-16 rounded-2xl bg-amber-100/90 border border-amber-300 text-amber-700 flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform shadow-xs">
                    🎧
                  </div>
                  <div>
                    <span className="text-[11px] font-mono font-bold uppercase text-amber-800 bg-amber-100 px-3 py-1 rounded-full border border-amber-200 inline-block mb-2">
                      Event 04
                    </span>
                    <h4 className="text-lg sm:text-xl font-bold text-slate-800 tracking-tight">
                      Service Request
                    </h4>
                    <p className="text-xs text-amber-900/80 font-medium mt-2 pt-2 border-t border-amber-200/70">
                      ➔ Assigned to: <span className="font-bold text-slate-900">Support</span>
                    </p>
                  </div>
                </motion.div>

              </div>

              {/* ROW 2: Events 5 to 8 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">

                {/* Event 5: High-Priority Ticket */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: 0.25 }}
                  whileHover={{ scale: 1.05, y: -4 }}
                  className="bg-rose-50/70 border-2 border-rose-200/90 hover:border-brand-terracotta rounded-3xl p-6 shadow-md text-center flex flex-col items-center justify-between transition-all cursor-pointer group"
                >
                  <div className="w-16 h-16 rounded-2xl bg-rose-100/90 border border-rose-300 text-rose-700 flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform shadow-xs">
                    🛡️
                  </div>
                  <div>
                    <span className="text-[11px] font-mono font-bold uppercase text-rose-800 bg-rose-100 px-3 py-1 rounded-full border border-rose-200 inline-block mb-2">
                      Event 05
                    </span>
                    <h4 className="text-lg sm:text-xl font-bold text-slate-800 tracking-tight">
                      High-Priority Ticket
                    </h4>
                    <p className="text-xs text-rose-900/80 font-medium mt-2 pt-2 border-t border-rose-200/70">
                      ➔ Assigned to: <span className="font-bold text-slate-900">Manager</span>
                    </p>
                  </div>
                </motion.div>

                {/* Event 6: Field Job Created */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  whileHover={{ scale: 1.05, y: -4 }}
                  className="bg-cyan-50/70 border-2 border-cyan-200/90 hover:border-brand-terracotta rounded-3xl p-6 shadow-md text-center flex flex-col items-center justify-between transition-all cursor-pointer group"
                >
                  <div className="w-16 h-16 rounded-2xl bg-cyan-100/90 border border-cyan-300 text-cyan-700 flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform shadow-xs">
                    🔧
                  </div>
                  <div>
                    <span className="text-[11px] font-mono font-bold uppercase text-cyan-800 bg-cyan-100 px-3 py-1 rounded-full border border-cyan-200 inline-block mb-2">
                      Event 06
                    </span>
                    <h4 className="text-lg sm:text-xl font-bold text-slate-800 tracking-tight">
                      Field Job Created
                    </h4>
                    <p className="text-xs text-cyan-900/80 font-medium mt-2 pt-2 border-t border-cyan-200/70">
                      ➔ Assigned to: <span className="font-bold text-slate-900">Technician</span>
                    </p>
                  </div>
                </motion.div>

                {/* Event 7: Payment Issue */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: 0.35 }}
                  whileHover={{ scale: 1.05, y: -4 }}
                  className="bg-teal-50/70 border-2 border-teal-200/90 hover:border-brand-terracotta rounded-3xl p-6 shadow-md text-center flex flex-col items-center justify-between transition-all cursor-pointer group"
                >
                  <div className="w-16 h-16 rounded-2xl bg-teal-100/90 border border-teal-300 text-teal-700 flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform shadow-xs">
                    💳
                  </div>
                  <div>
                    <span className="text-[11px] font-mono font-bold uppercase text-teal-800 bg-teal-100 px-3 py-1 rounded-full border border-teal-200 inline-block mb-2">
                      Event 07
                    </span>
                    <h4 className="text-lg sm:text-xl font-bold text-slate-800 tracking-tight">
                      Payment Issue
                    </h4>
                    <p className="text-xs text-teal-900/80 font-medium mt-2 pt-2 border-t border-teal-200/70">
                      ➔ Assigned to: <span className="font-bold text-slate-900">Finance</span>
                    </p>
                  </div>
                </motion.div>

                {/* Event 8: Delivery Delay */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  whileHover={{ scale: 1.05, y: -4 }}
                  className="bg-orange-50/70 border-2 border-orange-200/90 hover:border-brand-terracotta rounded-3xl p-6 shadow-md text-center flex flex-col items-center justify-between transition-all cursor-pointer group"
                >
                  <div className="w-16 h-16 rounded-2xl bg-orange-100/90 border border-orange-300 text-orange-700 flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform shadow-xs">
                    🚚
                  </div>
                  <div>
                    <span className="text-[11px] font-mono font-bold uppercase text-orange-800 bg-orange-100 px-3 py-1 rounded-full border border-orange-200 inline-block mb-2">
                      Event 08
                    </span>
                    <h4 className="text-lg sm:text-xl font-bold text-slate-800 tracking-tight">
                      Delivery Delay
                    </h4>
                    <p className="text-xs text-orange-900/80 font-medium mt-2 pt-2 border-t border-orange-200/70">
                      ➔ Assigned to: <span className="font-bold text-slate-900">Ops + Support</span>
                    </p>
                  </div>
                </motion.div>

              </div>

            </div>

          </div>

          {/* Bottom Execution Banner in SoftClinch Navy & Terracotta */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="p-6 rounded-3xl bg-brand-navy border-2 border-brand-terracotta/30 text-white shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4 max-w-5xl mx-auto"
          >
            <div className="text-left">
              <div className="text-xs font-mono font-extrabold text-brand-terracotta uppercase tracking-widest">
                Unified Enterprise Ecosystem
              </div>
              <div className="text-base sm:text-xl font-extrabold text-white mt-1">
                Internal Teams + External Partners = 1 Unified Real-Time Workflow
              </div>
            </div>
            <button
              onClick={() => openDemoModal("External Partner Ecosystem")}
              className="px-7 py-4 rounded-2xl bg-brand-terracotta hover:bg-brand-terracotta/90 text-white font-extrabold text-xs sm:text-sm transition-all whitespace-nowrap shadow-lg hover:scale-105"
            >
              Connect Partner Ecosystem
            </button>
          </motion.div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 9: How Can I Connect SAP, ERP & CRM With Communication?
          ========================================================================= */}
      <section className="py-20 border-b border-slate-200/80 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              How Can I Connect SAP, ERP & CRM With Communication?
            </h2>
            <p className="text-lg text-slate-600 font-medium">
              Your Business System Manages the Data. inaiwazhi Manages the Communication Workflow.
            </p>
          </div>

          {/* System Pills */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {["SAP", "ERP", "CRM", "Helpdesk", "E-commerce", "Internal Applications", "APIs"].map((sys, idx) => (
              <span key={idx} className="px-5 py-2.5 rounded-xl bg-slate-100 border border-slate-200 text-brand-navy font-extrabold text-sm shadow-sm">
                ⚡ {sys}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Example 1: SAP / ERP Order Workflow */}
            <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-md">
              <div>
                <div className="text-xs font-bold text-brand-navy uppercase tracking-wider mb-2">Workflow Example 1</div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">SAP / ERP Order Workflow</h3>
                <div className="space-y-2.5 text-sm">
                  {[
                    { node: "SAP / ERP", action: "Order created in core database" },
                    { node: "inaiwazhi", action: "Business event received via webhook" },
                    { node: "Sales", action: "Order confirmation notification sent" },
                    { node: "Operations", action: "Order processing notification routed" },
                    { node: "Production", action: "Production workflow triggered automatically" },
                    { node: "Dispatch", action: "Shipment notification queued" },
                    { node: "Customer / Dealer", action: "WhatsApp update delivered in real-time" },
                  ].map((row, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-white border border-slate-200 flex items-center justify-between shadow-sm">
                      <span className="font-bold text-slate-900 text-sm">{row.node}</span>
                      <span className="text-sm text-slate-600 font-medium">{row.action}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-200">
                <p className="text-xs text-slate-600 font-semibold mb-4">
                  SAP / ERP manages the transaction. <strong className="text-slate-900">inaiwazhi manages the communication around the transaction.</strong>
                </p>
                <button
                  onClick={() => openDemoModal("Explore ERP Communication")}
                  className="w-full py-3 rounded-xl bg-brand-navy hover:bg-brand-navy/90 text-white font-bold text-sm transition-all"
                >
                  Explore ERP Communication
                </button>
              </div>
            </div>

            {/* Example 2: ERP -> Support -> Customer */}
            <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-md">
              <div>
                <div className="text-xs font-bold text-brand-terracotta uppercase tracking-wider mb-2">Workflow Example 2</div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">ERP → Support → Customer</h3>
                <div className="space-y-2.5 text-sm">
                  {[
                    { node: "ERP", action: "Service record created" },
                    { node: "inaiwazhi", action: "Workflow triggered automatically" },
                    { node: "Support", action: "Ticket / case notification generated" },
                    { node: "Technical Team", action: "Issue assigned to specialist" },
                    { node: "Field Team", action: "Job assigned to field technician" },
                    { node: "Support", action: "Status updated with technical report" },
                    { node: "Customer", action: "Receives progress update on WhatsApp" },
                  ].map((row, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-white border border-slate-200 flex items-center justify-between shadow-sm">
                      <span className="font-bold text-slate-900 text-sm">{row.node}</span>
                      <span className="text-sm text-slate-600 font-medium">{row.action}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-200">
                <p className="text-xs text-slate-600 font-semibold mb-4">
                  Connect your business system, support team and customer in one continuous workflow.
                </p>
                <button
                  onClick={() => openDemoModal("Connect Systems and Support")}
                  className="w-full py-3 rounded-xl bg-brand-terracotta hover:bg-brand-terracotta/90 text-white font-bold text-sm transition-all"
                >
                  Connect Systems & Support
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 10: What Does inaiwazhi Connect? (NEW CONNECTED ARCHITECTURE MATRIX)
          ========================================================================= */}
      <section id="how-it-works" className="py-20 border-b border-slate-200/80 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-navy bg-brand-navy/10 px-4 py-1.5 rounded-full inline-block mb-3">
              Unified Architecture Mesh
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              What Does inaiwazhi Connect?
            </h2>
            <p className="text-base sm:text-lg text-slate-600 font-medium mt-3">
              A Single Orchestration Layer Synchronizing Stakeholders, Channels, Workflows & ERP Systems
            </p>
          </div>

          {/* 4-Stage Interconnected Bus Architecture Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch mb-10">

            {/* Stage 1: External Network & Channels */}
            <div className="lg:col-span-3 bg-white border border-slate-200 rounded-3xl p-6 flex flex-col justify-between shadow-xs">
              <div>
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-700">1. External Network</span>
                  <Users className="w-4 h-4 text-blue-600" />
                </div>

                <div className="space-y-2 mb-6">
                  {["Customers", "Dealers & Outlets", "Distributors", "Vendors & Partners"].map((item, idx) => (
                    <div key={idx} className="p-3 rounded-2xl bg-slate-50 border border-slate-200 font-bold text-xs text-slate-800 text-center shadow-2xs">
                      {item}
                    </div>
                  ))}
                </div>

                <div className="p-3 rounded-2xl bg-emerald-50 border border-emerald-200 text-center">
                  <div className="text-[10px] font-bold uppercase text-emerald-700 block mb-0.5">Primary Channel</div>
                  <div className="font-extrabold text-xs text-emerald-900 flex items-center justify-center gap-1.5">
                    <Smartphone className="w-4 h-4 text-emerald-600" />
                    <span>WhatsApp Official API</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-100 text-[11px] text-slate-500 text-center font-medium">
                Inbound & Outbound Touchpoints
              </div>
            </div>

            {/* Stage 2: Central inaiwazhi Core Orchestration Engine */}
            <div className="lg:col-span-4 bg-gradient-to-b from-brand-navy via-slate-900 to-brand-navy text-white rounded-3xl p-6 flex flex-col justify-between shadow-xl relative border border-slate-800 ring-1 ring-amber-400/20">

              <div>
                <div className="text-center mb-4 pb-3 border-b border-slate-800">
                  <span className="px-3.5 py-1 bg-brand-terracotta text-white font-bold text-[10px] uppercase rounded-full tracking-widest inline-block shadow-xs mb-3">
                    CENTRAL ORCHESTRATION LAYER
                  </span>
                  <div className="text-base font-extrabold text-amber-400 tracking-wider">inaiwazhi Core Engine</div>
                  <div className="text-[11px] text-slate-300 font-medium mt-0.5">Real-time Event & Workflow Router</div>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs">
                  {[
                    "Auto Categorization",
                    "Smart Escalation",
                    "Ticket Routing",
                    "ERP Event Hooks",
                    "SLA Tracker",
                    "WhatsApp Bot",
                    "Live Team Chat",
                    "Analytics Hub",
                  ].map((feature, idx) => (
                    <div key={idx} className="p-2.5 rounded-xl bg-white/10 border border-white/10 font-semibold text-slate-200 text-center text-[11px]">
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 p-3 rounded-2xl bg-amber-400/10 border border-amber-400/20 text-center">
                <span className="text-xs font-bold text-amber-300">
                  ⚡ Bi-directional Sync across systems & teams
                </span>
              </div>
            </div>

            {/* Stage 3: Internal Workforce Execution */}
            <div className="lg:col-span-2 bg-white border border-slate-200 rounded-3xl p-6 flex flex-col justify-between shadow-xs">
              <div>
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
                  <span className="text-xs font-bold uppercase tracking-wider text-purple-700">3. Internal Teams</span>
                  <Building2 className="w-4 h-4 text-purple-600" />
                </div>

                <div className="space-y-2 text-xs font-bold text-slate-800 text-center">
                  {["Sales & CRM", "Support Desk", "Operations", "Production", "Field Service", "Finance"].map((team, idx) => (
                    <div key={idx} className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                      {team}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-100 text-[11px] text-slate-500 text-center font-medium">
                Action & SLA Owner
              </div>
            </div>

            {/* Stage 4: Enterprise Business Systems */}
            <div className="lg:col-span-3 bg-white border border-slate-200 rounded-3xl p-6 flex flex-col justify-between shadow-xs">
              <div>
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-700">4. Business Systems</span>
                  <Database className="w-4 h-4 text-amber-600" />
                </div>

                <div className="space-y-2 mb-6">
                  {[
                    { name: "SAP / S4HANA", detail: "Orders & Master Data" },
                    { name: "ERP & Inventory", detail: "Stock & Dispatch" },
                    { name: "CRM & Helpdesk", detail: "Customer Records" },
                    { name: "Custom APIs", detail: "Legacy System Sync" },
                  ].map((sys, idx) => (
                    <div key={idx} className="p-3 rounded-2xl bg-amber-50/50 border border-amber-100 text-xs">
                      <div className="font-extrabold text-slate-900">{sys.name}</div>
                      <div className="text-[10px] text-slate-500 font-medium">{sys.detail}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-100 text-[11px] text-slate-500 text-center font-medium">
                Source of Truth Databases
              </div>
            </div>

          </div>

          {/* Bottom Summary Callout Banner */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200 text-center shadow-xs max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-left">
              <div className="font-bold text-slate-900 text-sm sm:text-base">One Connected Layer for Your Entire Business</div>
              <div className="text-xs text-slate-500 font-medium">No more fragmented communication between customers, internal teams & SAP/ERP systems.</div>
            </div>
            <button
              onClick={() => openDemoModal("Architecture Blueprint")}
              className="px-6 py-3 rounded-xl bg-brand-navy hover:bg-brand-navy/90 text-white font-bold text-xs transition-all whitespace-nowrap shadow-sm"
            >
              View Architecture Blueprint
            </button>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 11: What Problems Does This Solve? (NEW 2-COLUMN DIAGNOSTIC WORKBENCH)
          ========================================================================= */}
      <section className="py-20 border-b border-slate-200/80 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-navy bg-brand-navy/10 px-4 py-1.5 rounded-full inline-block mb-3">
              Operational Bottleneck Diagnostic
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              What Problems Does This Solve?
            </h2>
            <p className="text-base sm:text-lg text-slate-600 font-medium mt-3">
              Transform
              Fragmented Communication Into Automated Enterprise Workflows
            </p>
          </div>

          {/* Search Controls */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Filter by problem keyword (e.g. Customer, Support, Sales, SAP, Delay)..."
                value={problemSearch}
                onChange={(e) => setProblemSearch(e.target.value)}
                className="w-full pl-11 pr-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-900 placeholder-slate-400 focus:outline-none focus:border-brand-navy shadow-xs"
              />
            </div>
          </div>

          {/* 2-Column High-Fidelity Diagnostic Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start mb-16">

            {/* Left Column: Traditional Problem Log */}
            <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xs">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-200">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-rose-700 font-mono">
                    Traditional Environment
                  </span>
                  <h3 className="text-lg font-bold text-slate-900">Manual Friction & Communication Gaps</h3>
                </div>
                <span className="w-8 h-8 rounded-full bg-rose-100 text-rose-700 font-bold text-xs flex items-center justify-center">
                  ❌
                </span>
              </div>

              <div className="space-y-3">
                {filteredProblems.slice(0, 7).map((item, idx) => (
                  <div key={idx} className="p-3.5 rounded-2xl bg-white border border-slate-200 text-xs shadow-2xs flex items-start gap-3">
                    <span className="text-[9px] font-bold uppercase px-2 py-0.5 rounded bg-rose-50 text-rose-700 border border-rose-200 flex-shrink-0 mt-0.5">
                      {item.category}
                    </span>
                    <div className="flex-1">
                      <div className="font-bold text-rose-950">Problem: {item.problem}</div>
                      <div className="text-[11px] text-slate-500 font-medium mt-0.5">Impact: Disconnected emails & manual follow-up delay</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: inaiwazhi Automated Solution Engine */}
            <div className="bg-gradient-to-b from-brand-navy via-slate-900 to-brand-navy text-white border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-800">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 font-mono">
                    inaiwazhi Automated Layer
                  </span>
                  <h3 className="text-lg font-bold text-white">Seamless Workflow Resolutions</h3>
                </div>
                <span className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 font-bold text-xs flex items-center justify-center border border-emerald-500/30">
                  ✓
                </span>
              </div>

              <div className="space-y-3">
                {filteredProblems.slice(0, 7).map((item, idx) => (
                  <div key={idx} className="p-3.5 rounded-2xl bg-white/10 border border-white/10 text-xs shadow-2xs flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <div className="font-bold text-emerald-300">Solution: {item.solution}</div>
                      <div className="text-[11px] text-slate-300 font-medium mt-0.5">Automated via WhatsApp & SAP/ERP Event Hook</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Diagnostic Impact Summary Metrics Ribbon */}
          <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 text-white shadow-xl max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <span className="text-xs font-mono uppercase font-bold text-amber-400 tracking-widest block mb-1">
                Operational ROI Outcome
              </span>
              <h3 className="text-lg font-bold">From Manual Follow-ups to Automated Enterprise Execution</h3>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center w-full md:w-auto">
              {[
                { stat: "65%", label: "Faster SLA" },
                { stat: "100%", label: "ERP Audit" },
                { stat: "0", label: "Manual Emails" },
                { stat: "< 2 Min", label: "Customer Update" },
              ].map((m, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-white/10 border border-white/10 min-w-[100px]">
                  <div className="text-xl font-extrabold text-amber-300 font-mono">{m.stat}</div>
                  <div className="text-[10px] text-slate-300 font-medium mt-0.5">{m.label}</div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 12: Why Is inaiwazhi Different? (NEAT, CLEAN, ALIGNED DESIGN)
          ========================================================================= */}
      <section className="py-20 border-b border-slate-200/80 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-terracotta bg-brand-terracotta/10 px-4 py-1.5 rounded-full inline-block mb-3">
              The inaiwazhi Advantage
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Why Is inaiwazhi Different?
            </h2>
            <p className="text-base sm:text-lg text-slate-600 font-medium mt-3">
              Not Just a Messaging Tool. Not Just a CRM. Not Just Ticketing.
            </p>
          </div>

          {/* Neat Comparison Banner */}
          <div className="hidden md:grid grid-cols-12 gap-4 pb-4 px-6 text-xs font-bold uppercase tracking-wider text-slate-500 border-b border-slate-200 mb-6">
            <div className="col-span-4 text-slate-900">Pillar & Feature</div>
            <div className="col-span-4 text-rose-700">Traditional Software (The Gap)</div>
            <div className="col-span-4 text-brand-navy">inaiwazhi Solution (The Advantage)</div>
          </div>

          {/* 7 Neat Aligned Rows */}
          <div className="space-y-4">
            {[
              {
                title: "Customer Communication",
                desc: "WhatsApp & Contextual Messaging",
                icon: Smartphone,
                traditional: "Disconnected chat windows with zero visibility into customer history or ERP orders.",
                solution: "Direct WhatsApp workflows integrated natively with live SAP/ERP order status.",
              },
              {
                title: "Workflow Automation",
                desc: "Trigger to Action",
                icon: Zap,
                traditional: "Static auto-replies or emails that require manual human follow-up.",
                solution: "Smart triggers that automatically assign tasks, notify technicians, and update records.",
              },
              {
                title: "Team Communication",
                desc: "Role-Based Event Routing",
                icon: Users,
                traditional: "Unstructured chat channels where urgent tasks get buried in noise.",
                solution: "Structured event notifications delivered directly to the assigned employee.",
              },
              {
                title: "Support & Ticketing",
                desc: "Cross-Department Resolution",
                icon: Headphones,
                traditional: "Support tickets remain isolated inside helpdesk software.",
                solution: "Converts chats into trackable tickets routed across QA, production, and service.",
              },
              {
                title: "External Communication",
                desc: "Dealers, Vendors & Field Teams",
                icon: Network,
                traditional: "Dealers and partners constantly call support for order or payment updates.",
                solution: "Automated WhatsApp notifications sent directly to dealers, vendors, and field staff.",
              },
              {
                title: "Business Integration",
                tagline: "SAP / ERP / CRM Link",
                icon: Database,
                traditional: "Requires heavy custom coding that breaks during system updates.",
                solution: "Pre-built webhooks and API connections designed for seamless enterprise sync.",
              },
              {
                title: "Real-Time Analytics",
                desc: "Workflow Performance Matrix",
                icon: Activity,
                traditional: "Tracks basic message volume without visibility into resolution speed.",
                solution: "Monitors response times, department bottlenecks, and end-to-end SLA fulfillment.",
              },
            ].map((row, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.45, delay: idx * 0.07 }}
                whileHover={{
                  y: -5,
                  scale: 1.012,
                  boxShadow: "0 12px 40px -8px rgba(0,51,102,0.18)",
                  borderColor: "rgba(0,51,102,0.35)",
                  transition: { duration: 0.25, ease: "easeOut" },
                }}
                className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-sm transition-colors grid grid-cols-1 md:grid-cols-12 gap-4 items-center cursor-pointer group"
              >
                {/* Col 1: Title & Icon */}
                <div className="md:col-span-4 flex items-center gap-4">
                  <motion.div
                    whileHover={{ rotate: 8, scale: 1.15 }}
                    transition={{ duration: 0.25 }}
                    className="w-11 h-11 rounded-xl bg-slate-100 border border-slate-200 text-brand-navy flex items-center justify-center flex-shrink-0 font-bold group-hover:bg-brand-navy/10 group-hover:border-brand-navy/30 transition-colors duration-300"
                  >
                    <row.icon className="w-5 h-5 group-hover:text-brand-terracotta transition-colors duration-300" />
                  </motion.div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-base leading-snug group-hover:text-brand-navy transition-colors duration-300">{row.title}</h3>
                    <p className="text-xs text-slate-500 font-medium mt-0.5 group-hover:text-slate-600 transition-colors duration-300">{row.desc}</p>
                  </div>
                </div>

                {/* Col 2: Traditional Gap */}
                <motion.div
                  whileHover={{ x: -3 }}
                  transition={{ duration: 0.2 }}
                  className="md:col-span-4 bg-rose-50/60 border border-rose-100 rounded-xl p-3.5 text-xs text-slate-700 font-medium flex items-start gap-2.5 group-hover:bg-rose-50 group-hover:border-rose-200 transition-colors duration-300"
                >
                  <X className="w-4 h-4 text-rose-500 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300" />
                  <span>{row.traditional}</span>
                </motion.div>

                {/* Col 3: inaiwazhi Solution */}
                <motion.div
                  whileHover={{ x: 3 }}
                  transition={{ duration: 0.2 }}
                  className="md:col-span-4 bg-slate-50 border border-brand-navy/20 rounded-xl p-3.5 text-xs text-slate-900 font-semibold flex items-start gap-2.5 group-hover:bg-emerald-50/60 group-hover:border-emerald-300 group-hover:shadow-[0_0_14px_-4px_rgba(16,185,129,0.25)] transition-all duration-300"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300" />
                  <span className="group-hover:text-emerald-900 transition-colors duration-300">{row.solution}</span>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Clean Summary */}
          <div className="mt-12 p-6 rounded-2xl bg-white border border-slate-200 text-center shadow-sm max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-left">
              <div className="font-bold text-slate-900 text-base">One Connected Layer for Your Business</div>
              <div className="text-xs text-slate-500 font-medium">Connect customer WhatsApp, internal teams, and SAP/ERP systems seamlessly.</div>
            </div>
            <button
              onClick={() => openDemoModal("Platform Differentiation")}
              className="px-6 py-3 rounded-xl bg-brand-navy hover:bg-brand-navy/90 text-white font-bold text-xs transition-all whitespace-nowrap"
            >
              Book an Enterprise Demo
            </button>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 13: How Does the Platform Work?
          ========================================================================= */}
      <section className="py-20 border-b border-slate-200/80 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              How Does the Platform Work?
            </h2>
            <p className="text-lg text-slate-600 font-medium">
              Business Event → Workflow → Communication → Action
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((st, idx) => (
              <div key={idx} className="bg-slate-50 border border-slate-200/90 rounded-3xl p-6 relative flex flex-col justify-between shadow-sm hover:border-brand-navy/30 transition-all">
                <div>
                  <div className="text-3xl font-extrabold text-brand-terracotta mb-2">{st.num}</div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{st.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-medium">{st.desc}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-200 text-right">
                  <span className="text-xs font-bold text-brand-navy">Step {idx + 1} of 6</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 14: Built for Industries With Complex Communication
          ========================================================================= */}
      <section className="py-20 border-b border-slate-200/80 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Built for Industries With Complex Communication
            </h2>
            <p className="text-lg text-slate-600 font-medium">
              One platform. Tailored workflows for your industry’s specific business processes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((ind, idx) => (
              <div key={idx} className="bg-white border border-slate-200 rounded-3xl p-6 flex flex-col justify-between hover:border-brand-navy/30 transition-all shadow-sm hover:shadow-md">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 rounded-2xl bg-brand-navy/5 border border-brand-navy/10 text-brand-navy">
                      <ind.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">{ind.name}</h3>
                  </div>
                  <p className="text-xs text-slate-600 font-medium mb-4">{ind.desc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {ind.touchpoints.map((tp, i) => (
                      <span key={i} className="text-[11px] font-bold px-2.5 py-1 rounded-md bg-slate-100 text-brand-navy border border-slate-200">
                        {tp}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 15: Can inaiwazhi Replace My SAP, ERP or CRM?
          ========================================================================= */}
      <section className="py-20 border-b border-slate-200/80 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Can inaiwazhi Replace My SAP, ERP or CRM?
            </h2>
            <p className="text-xl font-extrabold text-brand-terracotta">
              No. It Connects With What You Already Use.
            </p>
            <p className="text-base text-slate-600 font-medium mt-2">
              Your existing systems remain your source of record for core business operations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-10">
            {[
              { system: "SAP / ERP", role: "Business transactions" },
              { system: "CRM", role: "Customer & sales records" },
              { system: "Helpdesk", role: "Support records" },
              { system: "E-commerce", role: "Orders & customers" },
              { system: "inaiwazhi", role: "Communication + Automation + Workflow", highlight: true },
            ].map((item, idx) => (
              <div
                key={idx}
                className={`p-5 rounded-3xl border ${item.highlight ? 'bg-gradient-to-b from-brand-navy to-slate-900 text-white border-brand-terracotta shadow-xl' : 'bg-slate-50 border-slate-200 text-slate-900 shadow-sm'} text-center flex flex-col justify-center`}
              >
                <div className={`font-bold text-base ${item.highlight ? 'text-amber-400' : 'text-slate-900'}`}>{item.system}</div>
                <div className={`text-xs mt-1 font-medium ${item.highlight ? 'text-slate-200' : 'text-slate-600'}`}>{item.role}</div>
              </div>
            ))}
          </div>

          <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 text-center max-w-2xl mx-auto shadow-sm">
            <div className="text-lg font-bold text-slate-800 mb-4">
              Instead of replacing your existing systems: <span className="text-slate-900 underline decoration-brand-terracotta">Connect them.</span>
            </div>
            <button
              onClick={() => openDemoModal("Discuss Integration")}
              className="px-8 py-3.5 rounded-2xl bg-brand-terracotta hover:bg-brand-terracotta/90 text-white font-bold text-sm transition-all shadow-md"
            >
              Discuss Your Integration
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 16: Who Uses inaiwazhi?
          ========================================================================= */}
      <section className="py-20 border-b border-slate-200/80 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Who Uses inaiwazhi?
            </h2>
            <p className="text-lg text-slate-600 font-medium">
              Any Business Where Information Must Move Between People
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {userGroups.map((group, idx) => (
              <div key={idx} className="bg-white border border-slate-200 rounded-3xl p-5 flex flex-col justify-between shadow-sm">
                <div>
                  <group.icon className="w-6 h-6 text-brand-navy mb-3" />
                  <h3 className="font-bold text-slate-900 text-base mb-3">{group.group}</h3>
                  <div className="space-y-1.5">
                    {group.members.map((m, i) => (
                      <div key={i} className="text-xs text-slate-700 bg-slate-50 p-2 rounded-xl border border-slate-200 font-semibold">
                        • {m}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 17: CORE IDEA & TURN COMMUNICATION INTO ACTION (FINAL CTA)
          ========================================================================= */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-brand-navy via-slate-900 to-brand-navy border border-slate-800 rounded-3xl p-8 sm:p-14 shadow-2xl text-center text-white relative overflow-hidden">

            {/* Core Idea Box */}
            <div className="max-w-4xl mx-auto mb-12">
              <span className="text-xs font-mono uppercase tracking-widest text-white font-bold">The Core Philosophy</span>
              <h2 className="text-3xl sm:text-5xl font-extrabold mt-2 mb-6">
                Your Business Already Has the Systems. <br />
                <span className="text-white">
                  inaiwazhi Connects the Communication.
                </span>
              </h2>

              {/* Node Chain visual */}
              <div className="flex flex-wrap items-center justify-center gap-2 py-4 px-6 rounded-2xl bg-white/10 border border-white/10 text-xs font-bold text-slate-100">
                {["Customer", "Support", "Sales", "Operations", "Production", "Field Team", "Dealer / Partner", "SAP / ERP / CRM"].map((n, idx, arr) => (
                  <React.Fragment key={idx}>
                    <span className="px-2.5 py-1 rounded bg-white/10 text-sky-200 border border-white/10">{n}</span>
                    {idx < arr.length - 1 && <span className="text-white font-bold">↕</span>}
                  </React.Fragment>
                ))}
              </div>

              <p className="text-sm text-slate-300 mt-4 italic font-medium">
                inaiwazhi sits between the business event and the communication required to act on it.
              </p>
            </div>

            {/* Turn Communication Into Action Callout */}
            <div className="max-w-3xl mx-auto border-t border-slate-800 pt-10">
              <h3 className="text-2xl sm:text-3xl font-extrabold mb-4">
                Turn Communication Into Action
              </h3>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-medium mb-8">
                Don’t Let Business Information Stop at a Message. <br />
                A customer message should create a response. A support request should create a ticket. A ticket should reach the right team. A business event should notify the right department. An ERP update should reach the right customer or partner. A completed task should trigger the next action. <br />
                <span className="text-white font-extrabold">That’s the role of inaiwazhi. Connect. Automate. Route. Support. Act.</span>
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-bold text-base transition-all border border-white/20 flex items-center justify-center gap-2"
                >
                  <span>See My Business Workflow</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <button
                  onClick={() => openDemoModal("Final Enterprise Demo")}
                  className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-brand-terracotta hover:bg-brand-terracotta/90 text-white font-bold text-base transition-all shadow-xl flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-5 h-5" />
                  <span>Book an Enterprise Demo</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          ENTERPRISE DEMO MODAL
          ========================================================================= */}
      <AnimatePresence>
        {isDemoModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl relative text-slate-900"
            >
              <button
                onClick={() => setIsDemoModalOpen(false)}
                className="absolute top-5 right-5 text-slate-400 hover:text-slate-700"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="text-xs font-bold text-brand-terracotta uppercase tracking-wider mb-1">SoftClinch Enterprise</div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Book an Enterprise Demo</h3>
              <p className="text-xs text-slate-600 mb-6">
                Request a personalized walkthrough for topic: <strong className="text-brand-navy">{demoTopic}</strong>
              </p>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Thank you! Our enterprise solutions architect will reach out shortly.");
                  setIsDemoModalOpen(false);
                }}
                className="space-y-4"
              >
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="John Doe"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-brand-navy"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Work Email</label>
                  <input
                    type="email"
                    required
                    placeholder="john@company.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-brand-navy"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Phone / WhatsApp Number</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-brand-navy"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Primary Business System (Optional)</label>
                  <select className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-brand-navy">
                    <option>SAP / SAP S/4HANA</option>
                    <option>Microsoft Dynamics / ERP</option>
                    <option>Salesforce / HubSpot CRM</option>
                    <option>Custom Internal Database</option>
                    <option>Other / Not Sure</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-brand-navy hover:bg-brand-navy/90 text-white font-bold text-sm transition-all shadow-md mt-2"
                >
                  Schedule Demo
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BusinessCommunication;
