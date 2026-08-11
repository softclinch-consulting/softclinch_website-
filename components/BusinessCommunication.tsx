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
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans selection:bg-brand-terracotta selection:text-white pt-24">

      {/* =========================================================================
          HERO SECTION (High-Fidelity White Light Enterprise Design)
          ========================================================================= */}
      <section className="relative z-10 pt-10 pb-20 border-b border-slate-200/80 bg-white overflow-hidden">
        {/* Soft Modern Gradient Mesh Background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(0,51,102,0.08),_transparent_45%),radial-gradient(circle_at_80%_20%,_rgba(153,51,0,0.08),_transparent_35%),linear-gradient(180deg,_#ffffff_0%,_#f8fafc_100%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Top Pill Badge */}
          <div className="text-center mb-6">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-900 text-white text-xs font-bold uppercase tracking-widest shadow-md"
            >
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>inaiwazhi • SoftClinch Enterprise Platform</span>
            </motion.div>
          </div>

          {/* Main Title & Subtitle Header */}
          <div className="text-center max-w-4xl mx-auto mb-14">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.08] mb-6"
            >
              Business Communication &{" "}
              <span className="bg-gradient-to-r from-brand-navy via-slate-800 to-brand-terracotta bg-clip-text text-transparent">
                Workflow Automation Platform
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg sm:text-2xl font-semibold text-slate-600 max-w-3xl mx-auto"
            >
              Connect Customers, Support Teams, Employees, Partners & Business Systems
            </motion.p>
          </div>

          {/* 2-Column Hero Grid: Left Content & Story, Right Live Simulator */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-14">
            
            {/* Left Column: Problem Story & CTAs */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="lg:col-span-7 space-y-6"
            >
              <div className="bg-slate-50 border border-slate-200 p-6 sm:p-8 rounded-3xl text-slate-800 shadow-sm space-y-4">
                <p className="text-base sm:text-lg leading-relaxed font-medium">
                  Your business already has core systems for <span className="text-brand-navy font-bold">sales, operations, finance, production, service and CRM</span>.
                </p>
                
                <div className="p-4 rounded-2xl bg-brand-navy/5 border-l-4 border-brand-terracotta text-brand-navy font-bold text-base sm:text-lg leading-snug">
                  What happens between those systems and the people who need to act?
                </div>

                <div className="text-xs font-bold text-slate-500 uppercase tracking-wider pt-2">
                  Real-time Event Triggers Connected:
                </div>

                {/* Event Trigger Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {[
                    { event: "Customer WhatsApp Request", target: "Support Desk" },
                    { event: "Support Ticket Escalation", target: "Plant QA & Ops" },
                    { event: "Production Order Completed", target: "Dispatch & SAP" },
                    { event: "Dealer Shipment Dispatched", target: "WhatsApp ETA" },
                  ].map((item, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-white border border-slate-200 flex items-center justify-between text-xs shadow-2xs">
                      <span className="font-bold text-slate-900">{item.event}</span>
                      <span className="text-[10px] font-bold text-brand-navy bg-brand-navy/10 px-2 py-0.5 rounded">
                        {item.target}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="pt-2 text-xs text-slate-600 font-semibold flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Your SAP / ERP holds the data. inaiwazhi connects that data to the people who need to act.</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-brand-navy hover:bg-brand-navy/90 text-white font-bold text-sm transition-all shadow-lg hover:shadow-brand-navy/20 flex items-center justify-center gap-3"
                >
                  <span>See How It Works</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <button
                  onClick={() => openDemoModal("Enterprise Main Demo")}
                  className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-brand-terracotta hover:bg-brand-terracotta/90 text-white font-bold text-sm transition-all shadow-lg hover:shadow-brand-terracotta/20 flex items-center justify-center gap-3"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Book an Enterprise Demo</span>
                </button>
              </div>
            </motion.div>

            {/* Right Column: Live Orchestration Bus Interactive Simulator */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="lg:col-span-5 bg-slate-900 rounded-3xl p-6 sm:p-7 text-white shadow-2xl border border-slate-800 relative overflow-hidden"
            >
              {/* Header Ticker */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-5">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-mono font-bold text-slate-300 uppercase tracking-wider">
                    ORCHESTRATION BUS ACTIVE
                  </span>
                </div>
                <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  REAL-TIME
                </span>
              </div>

              {/* Connected Stage Nodes Visual Flow */}
              <div className="space-y-3.5 relative">
                
                {/* Node 1 */}
                <div className="p-3.5 rounded-2xl bg-slate-800/80 border border-slate-700/80 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-xs">
                      💬
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">Inbound WhatsApp Request</div>
                      <div className="text-[10px] text-slate-400">“Need stock update for Order #9021”</div>
                    </div>
                  </div>
                  <span className="text-[9px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                    INGESTED
                  </span>
                </div>

                {/* Connecting Arrow */}
                <div className="text-center py-0.5">
                  <ArrowRight className="w-4 h-4 text-amber-400 mx-auto rotate-90" />
                </div>

                {/* Node 2: Core Routing */}
                <div className="p-3.5 rounded-2xl bg-gradient-to-r from-brand-navy to-slate-800 border border-brand-navy/60 flex items-center justify-between shadow-md">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-amber-400/20 text-amber-300 flex items-center justify-center font-bold text-xs">
                      ⚡
                    </div>
                    <div>
                      <div className="text-xs font-bold text-amber-300">inaiwazhi AI Engine</div>
                      <div className="text-[10px] text-slate-300">Routes request to SAP ERP & Sales Team</div>
                    </div>
                  </div>
                  <span className="text-[9px] font-bold text-amber-300 bg-amber-400/10 px-2 py-0.5 rounded">
                    ROUTED
                  </span>
                </div>

                {/* Connecting Arrow */}
                <div className="text-center py-0.5">
                  <ArrowRight className="w-4 h-4 text-emerald-400 mx-auto rotate-90" />
                </div>

                {/* Node 3: System Sync */}
                <div className="p-3.5 rounded-2xl bg-slate-800/80 border border-slate-700/80 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center font-bold text-xs">
                      ⚙️
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">SAP / ERP Updated</div>
                      <div className="text-[10px] text-slate-400">Order dispatch status synced & customer notified</div>
                    </div>
                  </div>
                  <span className="text-[9px] font-bold text-sky-400 bg-sky-500/10 px-2 py-0.5 rounded">
                    SYNCED
                  </span>
                </div>

              </div>

              {/* Bottom Ticker */}
              <div className="mt-5 pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400 font-medium">
                <span>Zero manual emails</span>
                <span className="text-amber-400 font-bold">100% Automated Loop</span>
              </div>
            </motion.div>

          </div>

          {/* System Connector Pills Ticker Bar */}
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/90 flex flex-wrap items-center justify-between gap-3 text-xs">
            <span className="font-extrabold uppercase tracking-widest text-slate-500 font-mono text-[10px]">
              Pre-built Integrations:
            </span>
            {["SAP S/4HANA", "Oracle ERP", "Salesforce CRM", "Zendesk", "WhatsApp Business API", "Custom Webhooks"].map((sys, idx) => (
              <span key={idx} className="px-3 py-1 rounded-xl bg-white border border-slate-200 text-slate-800 font-bold shadow-2xs">
                ⚡ {sys}
              </span>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 1: Is Your Business Communication Still Fragmented? (NEAT REDESIGN)
          ========================================================================= */}
      <section className="py-20 border-b border-slate-200/80 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-navy bg-brand-navy/10 px-4 py-1.5 rounded-full inline-block mb-3">
              Diagnostic Communication Flow
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Is Your Business Communication Still Fragmented?
            </h2>
            <p className="text-base sm:text-lg text-slate-600 font-medium mt-3">
              Your Systems Work. Your Teams Work. But Communication Gets Lost Between Them.
            </p>
          </div>

          {/* 2-Column Split: Left = Fragmented Chain, Right = The Solution */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

            {/* Left Column: Fragmented Chain Step-by-Step */}
            <div className="lg:col-span-7 bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-sm">
              <div>
                <div className="flex items-center justify-between mb-6 pb-3 border-b border-slate-200">
                  <span className="text-xs font-bold text-rose-600 uppercase tracking-wider">The Communication Gap</span>
                  <span className="text-xs text-slate-500 font-medium">6 Fragmented Touchpoints</span>
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
                    <div key={i} className="flex items-center gap-3.5 p-3 rounded-2xl bg-white border border-slate-200 shadow-xs">
                      <div className="w-8 h-8 rounded-xl bg-slate-100 border border-slate-200 text-brand-navy flex items-center justify-center font-mono text-xs font-bold flex-shrink-0">
                        {node.step}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <h4 className="font-bold text-slate-900 text-sm truncate">{node.title}</h4>
                          <span className="text-[10px] font-bold text-rose-700 bg-rose-50 px-2 py-0.5 rounded border border-rose-100">
                            {node.status}
                          </span>
                        </div>
                        <p className="text-xs text-slate-500 font-medium truncate">{node.action}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200 text-xs text-slate-500 font-semibold flex items-center justify-between">
                <span>⚠️ Information gets lost at every handover</span>
                <span className="text-rose-600 font-bold">Unconnected Process</span>
              </div>
            </div>

            {/* Right Column: The inaiwazhi Orchestration Solution */}
            <div className="lg:col-span-5 bg-gradient-to-b from-brand-navy via-slate-900 to-brand-navy text-white rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-xl relative overflow-hidden">
              <div className="relative z-10">
                <span className="text-xs font-mono uppercase font-bold text-amber-400 tracking-widest block mb-2">
                  The Solution
                </span>
                <h3 className="text-2xl font-extrabold mb-4">
                  One Unified Communication Layer
                </h3>

                <p className="text-sm text-slate-300 font-medium leading-relaxed mb-6">
                  The problem isn’t always the system. The problem is the <strong className="text-white">communication between the systems, teams and people</strong>.
                </p>

                <div className="p-4 rounded-2xl bg-white/10 border border-white/15 space-y-3 mb-6 backdrop-blur">
                  <div className="text-xs font-bold text-amber-300 uppercase tracking-wider">
                    How inaiwazhi Fixes It:
                  </div>
                  <ul className="space-y-2 text-xs text-slate-200 font-semibold">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                      <span>Captures customer WhatsApp request instantly</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                      <span>Triggers automated ticket routing to internal team</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                      <span>Updates SAP / ERP system automatically</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                      <span>Notifies customer & dealer with zero manual delay</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="relative z-10 pt-4 border-t border-white/10">
                <button
                  onClick={() => openDemoModal("Fragmented Communication Walkthrough")}
                  className="w-full py-3.5 rounded-xl bg-brand-terracotta hover:bg-brand-terracotta/90 text-white font-bold text-sm transition-all shadow-lg flex items-center justify-center gap-2"
                >
                  <span>Connect My Communication Flow</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 2: What Happens When a Customer Raises an Issue? (NEAT REDESIGN)
          ========================================================================= */}
      <section className="py-20 border-b border-slate-200/80 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-terracotta bg-brand-terracotta/10 px-4 py-1.5 rounded-full inline-block mb-3">
              End-to-End Resolution Lifecycle
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              What Happens When a Customer Raises an Issue?
            </h2>
            <p className="text-base sm:text-lg text-slate-600 font-medium mt-3">
              Turn One Customer Request Into a Complete Business Workflow
            </p>
          </div>

          {/* Stepper Container */}
          <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm space-y-8">

            {/* Phase 1: Ingestion & Routing (Steps 1 to 5) */}
            <div>
              <div className="flex items-center justify-between mb-4 pb-2 border-b border-slate-100">
                <span className="text-xs font-bold text-brand-navy uppercase tracking-wider">Phase 1 • Ingestion & Internal Routing</span>
                <span className="text-xs text-slate-400 font-mono">Steps 01 - 05</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
                {[
                  { step: "01", actor: "Customer", action: "“My machine is not working.”", badge: "Trigger", icon: MessageSquare },
                  { step: "02", actor: "inaiwazhi", action: "Request captured & parsed", badge: "System", icon: Zap },
                  { step: "03", actor: "Support", action: "Ticket & case created", badge: "Auto Ticket", icon: Headphones },
                  { step: "04", actor: "Service Team", action: "Assigned to specialist", badge: "Routing", icon: Users },
                  { step: "05", actor: "Internal Team", action: "Technical data shared", badge: "Collaboration", icon: Building2 },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-slate-50 border border-slate-200 hover:border-brand-navy/30 transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-mono font-bold text-slate-400">{item.step}</span>
                        <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-brand-navy/10 text-brand-navy">
                          {item.badge}
                        </span>
                      </div>
                      <div className="font-bold text-slate-900 text-sm flex items-center gap-2">
                        <item.icon className="w-4 h-4 text-brand-navy flex-shrink-0" />
                        <span>{item.actor}</span>
                      </div>
                      <div className="text-xs text-slate-600 font-medium mt-1.5">{item.action}</div>
                    </div>
                    <div className="mt-3 pt-2 border-t border-slate-200/80 flex justify-end">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Phase 2: Action & Resolution (Steps 6 to 11) */}
            <div>
              <div className="flex items-center justify-between mb-4 pb-2 border-b border-slate-100">
                <span className="text-xs font-bold text-brand-terracotta uppercase tracking-wider">Phase 2 • Field Execution & Resolution</span>
                <span className="text-xs text-slate-400 font-mono">Steps 06 - 11</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3.5">
                {[
                  { step: "06", actor: "Field Employee", action: "Task dispatched", badge: "Dispatch", icon: Wrench },
                  { step: "07", actor: "Operations", action: "Status updated live", badge: "Realtime", icon: Activity },
                  { step: "08", actor: "Customer", action: "WhatsApp notification", badge: "WhatsApp", icon: Smartphone },
                  { step: "09", actor: "Support", action: "Resolution confirmed", badge: "Quality", icon: ShieldCheck },
                  { step: "10", actor: "Customer", action: "Issue fulfilled", badge: "Fulfilled", icon: CheckCircle2 },
                  { step: "11", actor: "Feedback", action: "Automated survey", badge: "Analytics", icon: Sparkles },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-slate-50 border border-slate-200 hover:border-brand-terracotta/30 transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-mono font-bold text-slate-400">{item.step}</span>
                        <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-brand-terracotta/10 text-brand-terracotta">
                          {item.badge}
                        </span>
                      </div>
                      <div className="font-bold text-slate-900 text-sm flex items-center gap-2">
                        <item.icon className="w-4 h-4 text-brand-terracotta flex-shrink-0" />
                        <span>{item.actor}</span>
                      </div>
                      <div className="text-xs text-slate-600 font-medium mt-1.5">{item.action}</div>
                    </div>
                    <div className="mt-3 pt-2 border-t border-slate-200/80 flex justify-end">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Summary Banner */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-brand-navy via-slate-900 to-brand-navy text-white flex flex-col md:flex-row items-center justify-between gap-4 shadow-md">
              <div className="text-left">
                <div className="text-xs font-bold text-amber-400 uppercase tracking-wider">End-to-End SLA Resolution</div>
                <div className="text-lg font-bold mt-0.5">From message → ticket → team → action → resolution.</div>
              </div>
              <button
                onClick={() => openDemoModal("Build Support Workflow")}
                className="px-6 py-3 rounded-xl bg-brand-terracotta hover:bg-brand-terracotta/90 text-white font-bold text-xs transition-all whitespace-nowrap shadow-sm"
              >
                Build Support Workflow
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: How Can I Connect Customers With My Support Team?
          ========================================================================= */}
      <section className="py-20 border-b border-slate-200/80 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              How Can I Connect Customers With My Support Team?
            </h2>
            <p className="text-lg text-slate-600 font-medium">
              Give Every Customer Request a Clear Path
            </p>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 max-w-4xl mx-auto shadow-md">
            <p className="text-center text-slate-700 text-lg font-medium mb-8">
              Customers should not have to repeat the same problem to multiple employees.
            </p>

            {/* Path Diagram */}
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 py-6 border-y border-slate-200">
              {["Customer", "Support", "Technical Team", "Operations", "Field Team", "Management", "Customer"].map((node, i, arr) => (
                <React.Fragment key={i}>
                  <span className="px-4 py-2 rounded-xl bg-white border border-slate-200 text-brand-navy font-bold text-sm shadow-sm">
                    {node}
                  </span>
                  {i < arr.length - 1 && (
                    <ArrowRight className="w-5 h-5 text-brand-terracotta flex-shrink-0" />
                  )}
                </React.Fragment>
              ))}
            </div>

            <div className="mt-8 text-center">
              <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-brand-navy/5 border border-brand-navy/15 text-brand-navy font-bold text-sm">
                <CheckCircle2 className="w-4 h-4 text-brand-terracotta" />
                Every request can be routed to the right person, team or workflow automatically.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: What If the Support Team Needs Another Department? (NEW MATRIX DESIGN)
          ========================================================================= */}
      <section className="py-20 border-b border-slate-200/80 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-terracotta bg-brand-terracotta/10 px-4 py-1.5 rounded-full inline-block mb-3">
              Inter-Departmental Automation
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              What If the Support Team Needs Another Department?
            </h2>
            <p className="text-base sm:text-lg text-slate-600 font-medium mt-3">
              Automatic escalation paths that route support requests directly into department queues.
            </p>
          </div>

          {/* Central Support Hub Status Banner */}
          <div className="mb-8 p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-brand-navy text-white flex items-center justify-center font-bold text-sm">
                <Headphones className="w-5 h-5" />
              </div>
              <div>
                <div className="font-bold text-slate-900 text-sm">Central Support Hub</div>
                <div className="text-xs text-slate-500 font-medium">Customer ticket categorized & matched to escalation rule</div>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono font-bold text-brand-terracotta bg-brand-terracotta/5 px-4 py-2 rounded-xl border border-brand-terracotta/15">
              <span>Automatic Escalation Matrix Active</span>
              <Zap className="w-4 h-4 text-brand-terracotta" />
            </div>
          </div>

          {/* 4 Department Escalation Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                dept: "Engineering & Tech",
                tag: "Technical Issue",
                badgeBg: "bg-blue-600 text-white",
                borderColor: "hover:border-blue-300",
                icon: Wrench,
                trigger: "Hardware failure or bug report detected",
                action: "Auto-creates engineering work item & links SAP tech manuals.",
                sla: "< 30 mins routing",
              },
              {
                dept: "Warehouse & Ops",
                tag: "Dispatch Delay",
                badgeBg: "bg-amber-600 text-white",
                borderColor: "hover:border-amber-300",
                icon: Building2,
                trigger: "Stock shortage or shipment tracking query",
                action: "Triggers live ERP inventory check & alerts dispatch team.",
                sla: "< 15 mins update",
              },
              {
                dept: "Field Service Team",
                tag: "On-Site Visit",
                badgeBg: "bg-emerald-600 text-white",
                borderColor: "hover:border-emerald-300",
                icon: Users,
                trigger: "Field service request or installation issue",
                action: "Dispatches nearest technician with customer GPS & job spec.",
                sla: "Instant assignment",
              },
              {
                dept: "Finance & Accounts",
                tag: "Billing & Refund",
                badgeBg: "bg-purple-600 text-white",
                borderColor: "hover:border-purple-300",
                icon: Database,
                trigger: "Invoice discrepancy or refund approval query",
                action: "Syncs ERP ledger & delivers verified credit note to customer.",
                sla: "Auto-verification",
              },
            ].map((card, idx) => (
              <div
                key={idx}
                className={`bg-white border border-slate-200 rounded-2xl p-6 shadow-sm ${card.borderColor} transition-all flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-slate-100 border border-slate-200 text-brand-navy flex items-center justify-center font-bold">
                      <card.icon className="w-5 h-5" />
                    </div>
                    <span className={`text-[10px] font-bold uppercase px-2.5 py-1 rounded-full ${card.badgeBg}`}>
                      {card.tag}
                    </span>
                  </div>

                  <h3 className="font-bold text-slate-900 text-base mb-2">{card.dept}</h3>

                  <div className="space-y-2.5 text-xs text-slate-600">
                    <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                      <span className="text-[10px] font-bold uppercase text-slate-400 block mb-0.5">Trigger</span>
                      <span className="font-semibold text-slate-800">{card.trigger}</span>
                    </div>

                    <div className="p-2.5 rounded-xl bg-emerald-50/60 border border-emerald-100">
                      <span className="text-[10px] font-bold uppercase text-emerald-700 block mb-0.5">Automated Action</span>
                      <span className="font-bold text-slate-900">{card.action}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
                  <span>Routing Speed</span>
                  <span className="font-bold text-brand-navy">{card.sla}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Summary Bar */}
          <div className="mt-10 p-6 rounded-2xl bg-white border border-slate-200 text-center shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4 max-w-4xl mx-auto">
            <div className="text-left">
              <div className="font-bold text-slate-900 text-base">Zero lost messages. Zero manual emails.</div>
              <div className="text-xs text-slate-500 font-medium">Support becomes a connected business workflow across all departments.</div>
            </div>
            <button
              onClick={() => openDemoModal("Inter-Departmental Escalation")}
              className="px-6 py-3 rounded-xl bg-brand-navy hover:bg-brand-navy/90 text-white font-bold text-xs transition-all whitespace-nowrap shadow-sm"
            >
              Setup Departmental Workflows
            </button>
          </div>

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
          SECTION 7: How Can I Manage Internal Team Communication?
          ========================================================================= */}
      <section className="py-20 border-b border-slate-200/80 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              How Can I Manage Internal Team Communication?
            </h2>
            <p className="text-lg text-slate-600 font-medium">
              Automatically Send Business Information to the Right Employee
            </p>
          </div>

          {/* Where info gets stuck */}
          <div className="mb-12 bg-slate-50 border border-slate-200 rounded-3xl p-6 text-center shadow-sm">
            <div className="text-xs uppercase font-bold text-amber-700 mb-3 tracking-wider">The Internal Communication Silo Problem</div>
            <p className="text-sm text-slate-600 font-medium mb-4">Internal communication problems happen when important information stays inside:</p>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 text-xs font-bold text-slate-700">
              {["Personal messages", "Email threads", "Phone calls", "Separate team chats", "Manual spreadsheets", "Unassigned requests"].map((item, idx) => (
                <span key={idx} className="px-3.5 py-2 rounded-xl bg-white border border-slate-200 text-slate-600 shadow-sm">
                  ⚠️ {item}
                </span>
              ))}
            </div>
          </div>

          <div className="text-center text-slate-700 text-lg font-medium mb-8">
            <span className="text-slate-900 font-bold">inaiwazhi</span> can trigger structured communication when a business event occurs:
          </div>

          {/* 8 Event Trigger Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {eventTriggers.map((item, idx) => (
              <div
                key={idx}
                className={`p-5 rounded-2xl border ${item.color} shadow-sm flex items-center justify-between hover:scale-[1.02] transition-transform`}
              >
                <div>
                  <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Business Event</div>
                  <div className="text-base font-bold text-slate-900 mt-0.5">{item.event}</div>
                  <div className="text-xs text-brand-navy font-bold mt-2 flex items-center gap-1.5">
                    <ArrowRight className="w-3.5 h-3.5 text-brand-terracotta" />
                    <span>Assigned to: <strong className="text-slate-900">{item.team}</strong></span>
                  </div>
                </div>
                <item.icon className="w-8 h-8 text-slate-400 opacity-80" />
              </div>
            ))}
          </div>

          <div className="p-6 rounded-2xl bg-slate-900 text-white text-center shadow-lg">
            <span className="text-lg sm:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-sky-300">
              Business Event → Right Team → Right Action
            </span>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 8: Can External Teams & Partners Be Connected Too?
          ========================================================================= */}
      <section className="py-20 border-b border-slate-200/80 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Can External Teams & Partners Be Connected Too?
            </h2>
            <p className="text-lg text-slate-600 font-medium">
              Connect Employees, Dealers, Vendors, Contractors & Field Teams
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-lg">
            <p className="text-center text-slate-700 text-lg font-medium mb-8">
              Your communication network doesn’t stop with internal employees. Businesses work with a vast ecosystem:
            </p>

            {/* Stakeholder Network Pills */}
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {[
                "Customers", "Dealers", "Distributors", "Suppliers",
                "Service Partners", "Technicians", "Delivery Teams",
                "Contractors", "Field Employees"
              ].map((partner, idx) => (
                <span key={idx} className="px-4 py-2 rounded-xl bg-slate-50 border border-slate-200 text-brand-navy font-bold text-sm shadow-sm">
                  🤝 {partner}
                </span>
              ))}
            </div>

            {/* Dealer Workflow Example */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="text-xs font-bold text-brand-terracotta uppercase tracking-wider mb-4 text-center">Dealer Order Workflow Example</div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3 text-center">
                {[
                  { step: "Dealer", desc: "Places order" },
                  { step: "Sales", desc: "Confirms order" },
                  { step: "Operations", desc: "Processes order" },
                  { step: "Warehouse", desc: "Prepares shipment" },
                  { step: "Logistics Partner", desc: "Receives dispatch info" },
                  { step: "Dealer", desc: "Receives delivery update" },
                ].map((item, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-white border border-slate-200 shadow-sm">
                    <div className="font-bold text-slate-900 text-sm">{item.step}</div>
                    <div className="text-xs text-slate-500 font-medium">{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 text-center text-slate-800 font-bold text-lg">
              Connect your internal and external business network in one seamless layer.
            </div>
          </div>
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
                      <span className="font-bold text-slate-900 text-xs">{row.node}</span>
                      <span className="text-xs text-slate-600 font-medium">{row.action}</span>
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
                      <span className="font-bold text-slate-900 text-xs">{row.node}</span>
                      <span className="text-xs text-slate-600 font-medium">{row.action}</span>
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
              <div
                key={idx}
                className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-sm hover:border-brand-navy/30 transition-all grid grid-cols-1 md:grid-cols-12 gap-4 items-center"
              >
                {/* Col 1: Title & Icon */}
                <div className="md:col-span-4 flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-slate-100 border border-slate-200 text-brand-navy flex items-center justify-center flex-shrink-0 font-bold">
                    <row.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-base leading-snug">{row.title}</h3>
                    <p className="text-xs text-slate-500 font-medium mt-0.5">{row.desc}</p>
                  </div>
                </div>

                {/* Col 2: Traditional Gap */}
                <div className="md:col-span-4 bg-rose-50/60 border border-rose-100 rounded-xl p-3.5 text-xs text-slate-700 font-medium flex items-start gap-2.5">
                  <X className="w-4 h-4 text-rose-500 flex-shrink-0 mt-0.5" />
                  <span>{row.traditional}</span>
                </div>

                {/* Col 3: inaiwazhi Solution */}
                <div className="md:col-span-4 bg-slate-50 border border-brand-navy/20 rounded-xl p-3.5 text-xs text-slate-900 font-semibold flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>{row.solution}</span>
                </div>
              </div>
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
              <span className="text-xs font-mono uppercase tracking-widest text-amber-400 font-bold">The Core Philosophy</span>
              <h2 className="text-3xl sm:text-5xl font-extrabold mt-2 mb-6">
                Your Business Already Has the Systems. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">
                  inaiwazhi Connects the Communication.
                </span>
              </h2>

              {/* Node Chain visual */}
              <div className="flex flex-wrap items-center justify-center gap-2 py-4 px-6 rounded-2xl bg-white/10 border border-white/10 text-xs font-bold text-slate-100">
                {["Customer", "Support", "Sales", "Operations", "Production", "Field Team", "Dealer / Partner", "SAP / ERP / CRM"].map((n, idx, arr) => (
                  <React.Fragment key={idx}>
                    <span className="px-2.5 py-1 rounded bg-white/10 text-sky-200 border border-white/10">{n}</span>
                    {idx < arr.length - 1 && <span className="text-amber-400 font-bold">↕</span>}
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
                <span className="text-amber-400 font-extrabold">That’s the role of inaiwazhi. Connect. Automate. Route. Support. Act.</span>
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
