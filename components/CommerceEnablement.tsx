"use client";

import Link from "next/link";
import { useState, type ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  AlertCircle,
  AlertTriangle,
  ArrowRight,
  Award,
  BarChart3,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  Compass,
  Cpu,
  CreditCard,
  Eye,
  FileWarning,
  Globe,
  Layers,
  LayoutGrid,
  Link2Off,
  Lock,
  Megaphone,
  MessageSquare,
  MessageSquareOff,
  MessageSquareText,
  MousePointerClick,
  RefreshCw,
  Search,
  SearchCheck,
  SearchX,
  Settings2,
  ShieldAlert,
  ShieldCheck,
  ShoppingBag,
  ShoppingCart,
  Smartphone,
  Sparkles,
  Star,
  Store,
  Target,
  TrendingDown,
  TrendingUp,
  Truck,
  UserCheck,
  Users,
  Workflow,
  XCircle,
  Zap,
} from "lucide-react";
import { FaqSection } from "@/components/FaqSection";
import { ServiceMediaPanel } from "@/components/ServiceMediaPanel";
import { commerceEnablementFaq } from "@/lib/commerceEnablement";
import { assetPath } from "@/lib/asset";
import { reviews } from "@/lib/reviews";

const reveal = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

function SectionHeading({
  eyebrow,
  title,
  description,
  centered = true,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
}) {
  return (
    <div className={`mb-12 sm:mb-16 ${centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}`}>
      {eyebrow && (
        <span className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-brand-terracotta/20 bg-brand-terracotta/5 px-4 py-1.5 text-sm font-black uppercase tracking-[0.2em] text-brand-terracotta shadow-xs">
          <Sparkles className="h-4 w-4" />
          {eyebrow}
        </span>
      )}
      <h2 className="text-4xl font-display font-bold leading-tight text-slate-955 sm:text-5xl lg:text-6xl">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-lg font-medium leading-relaxed text-slate-600 sm:text-xl">
          {description}
        </p>
      )}
    </div>
  );
}

function ClientLogos() {
  const clients = [
    { name: "Prenora Investment Holding", logoPath: "/client-logos/sc-clients-001.jpg" },
    { name: "Rane", logoPath: "/client-logos/sc-clients-002.jpg" },
    { name: "NTT DATA", logoPath: "/client-logos/sc-clients-003.jpg" },
    { name: "Fujitsu", logoPath: "/client-logos/sc-clients-004.jpg" },
    { name: "Star Eltech", logoPath: "/client-logos/sc-clients-005.jpg" },
    { name: "Client Logo 007", logoPath: "/client-logos/client-logo-007.jpeg" },
    { name: "Client Logo 008", logoPath: "/client-logos/client-logo-008.jpeg" },
  ];

  return (
    <section className="py-16 bg-slate-50 border-y border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-500 font-bold mb-2">Trusted by leading clients</p>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900">Our Trusted Clients</h2>
          <p className="text-slate-600 max-w-2xl mx-auto mt-2 text-base">
            Organizations across enterprise technology, manufacturing, finance, and digital transformation rely on SoftClinch for secure, scalable delivery.
          </p>
        </div>

        <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white/80 py-5 shadow-sm">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-slate-50 to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-slate-50 to-transparent z-10" />
          <motion.div
            className="flex w-max gap-4"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 22, ease: "linear", repeat: Infinity }}
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
}

function Testimonials() {
  const allReviews = [...reviews, ...reviews];
  return (
    <section className="py-24 bg-white overflow-hidden relative border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-bold uppercase tracking-widest mb-4">
          <Globe size={14} />
          Client Trust
        </div>
        <h2 className="text-4xl lg:text-6xl font-display font-bold text-slate-900 mb-4">Trusted Digital Transformation &amp; Automation Partner</h2>
        <div className="flex items-center justify-center gap-2 text-amber-400 mb-2">
          <span className="text-slate-900 font-bold text-2xl">5.0</span>
          {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
          <span className="text-slate-500 font-normal text-base ml-1">· {reviews.length} verified Google reviews</span>
        </div>
      </div>
      <div className="relative w-full">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
        <style>{`
          @keyframes commerceMarquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
          .commerce-marquee-track { display: flex; width: max-content; animation: commerceMarquee 30s linear infinite; }
          .commerce-marquee-track:hover { animation-play-state: paused; }
        `}</style>
        <div className="overflow-hidden w-full">
          <div className="commerce-marquee-track gap-5 py-3 px-4">
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
                <p className="text-slate-700 text-base leading-relaxed flex-1">&quot;{t.text}&quot;</p>
                <div className="flex items-center gap-3 pt-3 border-t border-slate-100">
                  <div className="font-bold text-slate-900 text-base">{t.name}</div>
                  <div className="text-blue-600 text-xs font-bold uppercase tracking-wider flex items-center gap-1">
                    Verified <CheckCircle2 size={12} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ----------------------------------------------------
// AXIS TIMELINE ROADMAP COMPONENT (FOR 90-DAY ROADMAP)
// ----------------------------------------------------
function AxisTimelineRoadmap({ phases }: { phases: any[] }) {
  const [activeNode, setActiveNode] = useState<number>(0);

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      className="relative rounded-[3rem] border border-slate-200 bg-gradient-to-b from-slate-50 via-white to-slate-50 p-6 shadow-xl sm:p-10 lg:px-8 lg:py-20 min-h-[480px] flex items-center justify-center"
    >
      <div className="absolute -left-20 -top-20 h-96 w-96 rounded-full bg-brand-navy/5 blur-3xl pointer-events-none" />
      <div className="absolute -right-20 -bottom-20 h-96 w-96 rounded-full bg-brand-terracotta/5 blur-3xl pointer-events-none" />

      {/* Desktop Horizontal Timeline Axis Layout */}
      <div className="relative z-10 hidden lg:block w-full max-w-5xl mx-auto my-auto">
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="absolute left-8 right-8 top-1/2 h-[3px] -translate-y-1/2 origin-left bg-gradient-to-r from-brand-navy via-brand-terracotta to-brand-navy shadow-[0_0_10px_rgba(162,59,42,0.3)]"
        />

        <div className="grid grid-cols-3 gap-8 relative">
          {phases.map((item, index) => {
            const isTop = index % 2 === 0;
            const isActive = activeNode === index;
            const delay = index * 0.2;

            return (
              <div
                key={item.phase}
                className="relative flex flex-col items-center group cursor-pointer"
                onMouseEnter={() => setActiveNode(index)}
              >
                {/* TOP CALLOUT CARD */}
                {isTop ? (
                  <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.6, delay }}
                    className="absolute bottom-full mb-8 w-[280px] z-20 left-1/2 -translate-x-1/2"
                  >
                    <div className="absolute left-1/2 -bottom-8 h-8 w-[2px] -translate-x-1/2 bg-gradient-to-b from-brand-terracotta to-brand-navy" />
                    <div className={`rounded-2xl border p-5 shadow-lg backdrop-blur-md transition-all duration-300 ${
                      isActive ? "border-brand-terracotta bg-white shadow-xl -translate-y-1.5 ring-2 ring-brand-terracotta/20" : "border-slate-200 bg-white hover:border-brand-terracotta/60"
                    }`}>
                      <span className="inline-block rounded-full bg-brand-terracotta px-3 py-0.5 text-sm font-black text-white">
                        {item.phase}
                      </span>
                      <h4 className="mt-2 text-lg font-display font-bold text-slate-900">{item.title}</h4>
                      <p className="mt-1.5 text-sm font-semibold leading-relaxed text-slate-600">{item.desc}</p>
                    </div>
                  </motion.div>
                ) : null}

                {/* CENTRAL AXIS NODE */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.3 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.5, delay: delay + 0.1 }}
                  className="relative z-30 flex items-center justify-center"
                >
                  <div className={`flex h-12 w-12 items-center justify-center rounded-full border-2 transition-all duration-300 ${
                    isActive ? "border-brand-terracotta bg-brand-terracotta text-white shadow-lg shadow-brand-terracotta/30 scale-125 ring-4 ring-brand-terracotta/20" : "border-brand-navy bg-brand-navy text-white hover:bg-brand-terracotta"
                  }`}>
                    <span className="text-xs font-black">0{index + 1}</span>
                  </div>
                </motion.div>

                {/* BOTTOM CALLOUT CARD */}
                {!isTop ? (
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.6, delay }}
                    className="absolute top-full mt-8 w-[280px] z-20 left-1/2 -translate-x-1/2"
                  >
                    <div className="absolute left-1/2 -top-8 h-8 w-[2px] -translate-x-1/2 bg-gradient-to-t from-brand-terracotta to-brand-navy" />
                    <div className={`rounded-2xl border p-5 shadow-lg backdrop-blur-md transition-all duration-300 ${
                      isActive ? "border-brand-terracotta bg-white shadow-xl translate-y-1.5 ring-2 ring-brand-terracotta/20" : "border-slate-200 bg-white hover:border-brand-terracotta/60"
                    }`}>
                      <span className="inline-block rounded-full bg-brand-navy px-3 py-0.5 text-sm font-black text-white">
                        {item.phase}
                      </span>
                      <h4 className="mt-2 text-lg font-display font-bold text-slate-900">{item.title}</h4>
                      <p className="mt-1.5 text-sm font-semibold leading-relaxed text-slate-600">{item.desc}</p>
                    </div>
                  </motion.div>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>

      {/* Mobile Vertical Axis Layout */}
      <div className="relative z-10 lg:hidden space-y-5 w-full">
        <div className="absolute left-5 top-4 bottom-4 w-1 bg-gradient-to-b from-brand-navy via-brand-terracotta to-brand-navy rounded-full" />
        {phases.map((item, index) => (
          <motion.div
            key={item.phase}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative flex items-start gap-4 pl-1"
          >
            <div className="relative z-20 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-brand-navy bg-brand-navy text-xs font-black text-white shadow-md">
              0{index + 1}
            </div>
            <div className="flex-1 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <span className="inline-block rounded-full bg-brand-navy px-3 py-0.5 text-xs font-black text-white">
                {item.phase}
              </span>
              <h4 className="mt-2 text-lg font-bold text-slate-900">{item.title}</h4>
              <p className="mt-1 text-sm font-semibold leading-relaxed text-slate-600">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

// ----------------------------------------------------
// SVG RIBBON FLOW COMPONENT (FOR HOW SOFTCLINCH WORKS)
// ----------------------------------------------------
function SvgRibbonFlow({ steps }: { steps: any[] }) {
  return (
    <div className="mx-auto max-w-5xl rounded-[3rem] bg-[#EBF3FB] p-6 sm:p-12 shadow-inner border border-blue-100/70">
      <div className="-space-y-3 sm:-space-y-4 relative z-10">
        {steps.map((item, index) => {
          const isOdd = index % 2 === 0;
          const Icon = item.icon;

          return (
            <motion.div
              key={item.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="relative z-10"
            >
              <div className="flex items-center gap-2 sm:gap-4">
                {/* Floating Number Left (for Odd 01, 03, 05) */}
                <div className={`w-12 sm:w-16 text-center shrink-0 ${isOdd ? "block" : "invisible"}`}>
                  <span className="font-display text-3xl font-black text-brand-navy sm:text-4xl lg:text-5xl tracking-tight">
                    {item.num}
                  </span>
                </div>

                {/* SVG Ribbon Card */}
                <div className="relative flex-1 group transition-transform duration-300 hover:scale-[1.01] hover:z-30">
                  <svg
                    viewBox="0 0 800 110"
                    preserveAspectRatio="none"
                    className="w-full h-auto min-h-[90px] sm:min-h-[100px] drop-shadow-[0_8px_16px_rgba(0,51,102,0.1)]"
                  >
                    <path
                      d={
                        isOdd
                          ? "M 32 0 L 768 0 L 800 55 L 768 110 L 32 110 L 0 55 Z"
                          : "M 32 0 L 800 0 L 768 55 L 800 110 L 32 110 L 0 55 Z"
                      }
                      fill="#FFFFFF"
                      stroke="#003366"
                      strokeWidth="2"
                      vectorEffect="non-scaling-stroke"
                    />
                  </svg>

                  {/* Inner Text Overlay */}
                  <div className="absolute inset-0 px-8 sm:px-14 py-3 flex items-center">
                    <div className="w-full flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3.5">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-navy/10 text-brand-navy">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div>
                          <span className="text-xs font-black uppercase tracking-widest text-brand-terracotta">
                            Step {item.num}
                          </span>
                          <h3 className="text-base sm:text-xl font-display font-bold text-brand-navy">
                            {item.title}
                          </h3>
                        </div>
                      </div>

                      <div className="max-w-md text-right hidden sm:block">
                        <p className="text-sm font-semibold text-slate-600 leading-snug">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Number Right (for Even 02, 04) */}
                <div className={`w-12 sm:w-16 text-center shrink-0 ${!isOdd ? "block" : "invisible"}`}>
                  <span className="font-display text-3xl font-black text-brand-navy sm:text-4xl lg:text-5xl tracking-tight">
                    {item.num}
                  </span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

// ----------------------------------------------------
// AUDIENCE ROADMAP TRACK COMPONENT (FOR WHO THIS IS FOR)
// ----------------------------------------------------
function AudienceRoadmapTrack({ items }: { items: any[] }) {
  const inflectionIcons = [ShieldCheck, MessageSquareText, BarChart3, Workflow, CheckCircle2];

  // 6 Stage horizontal percentages & x coordinates (0 to 1200 viewBox width)
  const stages = [
    { num: "001", xPct: 8.33, xPx: 100, isTop: true },
    { num: "002", xPct: 25.0, xPx: 300, isTop: false },
    { num: "003", xPct: 41.66, xPx: 500, isTop: true },
    { num: "004", xPct: 58.33, xPx: 700, isTop: false },
    { num: "005", xPct: 75.0, xPx: 900, isTop: true },
    { num: "006", xPct: 91.66, xPx: 1100, isTop: false },
  ];

  const midNodes = [
    { xPct: 16.66, xPx: 200, icon: inflectionIcons[0] },
    { xPct: 33.33, xPx: 400, icon: inflectionIcons[1] },
    { xPct: 50.0, xPx: 600, icon: inflectionIcons[2] },
    { xPct: 66.66, xPx: 800, icon: inflectionIcons[3] },
    { xPct: 83.33, xPx: 1000, icon: inflectionIcons[4] },
  ];

  return (
    <div className="relative mx-auto max-w-[1360px] rounded-[3rem] border border-slate-200 bg-[#F3F7FA] p-4 sm:p-6 lg:p-8 shadow-xl overflow-hidden min-h-[760px] flex flex-col justify-center">
      {/* Blueprint Grid Background Pattern */}
      <div
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#CBD5E1 1px, transparent 1px), linear-gradient(90deg, #CBD5E1 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />
      <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-brand-navy/5 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-brand-terracotta/5 blur-3xl pointer-events-none" />

      {/* DESKTOP 3-ZONE SERPENTINE ROADWAY (lg screens) */}
      <div className="relative z-10 hidden lg:block w-full h-[720px]">
        
        {/* ZONE 1: TOP CARDS ROW (Stages 001, 003, 005) */}
        <div className="absolute top-2 inset-x-0 h-[225px] pointer-events-none">
          {items.map((item, index) => {
            const stageMeta = stages[index];
            if (!stageMeta.isTop) return null;
            const Icon = item.icon;

            return (
              <motion.div
                key={`top-card-${item.num}`}
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="absolute top-0 pointer-events-auto -translate-x-1/2"
                style={{ left: `${stageMeta.xPct}%`, width: "285px" }}
              >
                <div className="group relative rounded-[1.8rem] border border-slate-200/90 bg-white p-4 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-brand-navy/40 hover:shadow-2xl">
                  {/* Card Header: STAGE & Title */}
                  <div className="flex items-center justify-between gap-1 mb-1.5">
                    <span className="text-sm font-black uppercase tracking-widest text-brand-terracotta">
                      STAGE {item.num}
                    </span>
                    <h3 className="text-base font-extrabold font-display text-slate-900 truncate group-hover:text-brand-navy transition-colors">
                      {item.stageTitle || item.label}
                    </h3>
                  </div>

                  {/* Subtitle / Focus */}
                  <p className="text-sm font-bold text-brand-navy leading-tight">
                    {item.label}
                  </p>
                  <p className="mt-1 text-sm font-medium text-slate-600 leading-snug line-clamp-2">
                    {item.desc}
                  </p>

                  {/* Inner Tinted Detail Box */}
                  <div className="mt-2.5 rounded-xl border border-slate-200/70 bg-slate-50/95 p-2.5">
                    <p className="text-sm font-medium text-slate-700 leading-relaxed">
                      {item.detailBox}
                    </p>
                  </div>

                  {/* Bottom Review Path Footer */}
                  <div className="mt-2.5 flex items-center gap-2 text-sm font-bold text-slate-800 pt-2 border-t border-slate-100">
                    <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                      <CheckCircle2 className="h-3.5 w-3.5" />
                    </div>
                    <span className="truncate">{item.reviewPath || `${item.tag} review path`}</span>
                  </div>
                </div>

                {/* Vertical Stem Line down to Road Node */}
                <div className="w-0.5 h-6 mx-auto border-r-2 border-dashed border-emerald-500/70" />
              </motion.div>
            );
          })}
        </div>

        {/* ZONE 2: SERPENTINE SVG ROADWAY CANVAS */}
        <div className="absolute top-[230px] inset-x-0 h-[240px] pointer-events-none">
          <svg
            viewBox="0 0 1200 240"
            className="w-full h-full overflow-visible"
            preserveAspectRatio="none"
          >
            <defs>
              <filter id="roadGlow" x="-10%" y="-10%" width="120%" height="120%">
                <feDropShadow dx="0" dy="6" stdDeviation="8" floodColor="#002244" floodOpacity="0.25" />
              </filter>
            </defs>

            {/* Under-Road Shadow */}
            <path
              d="M 20 120 C 50 120, 70 30, 100 30 C 180 30, 220 210, 300 210 C 380 210, 420 30, 500 30 C 580 30, 620 210, 700 210 C 780 210, 820 30, 900 30 C 980 30, 1020 210, 1100 210 C 1140 210, 1170 120, 1180 120"
              fill="none"
              stroke="#001833"
              strokeWidth="34"
              opacity="0.1"
              strokeLinecap="round"
            />

            {/* Main Dark Navy Road Track */}
            <path
              d="M 20 120 C 50 120, 70 30, 100 30 C 180 30, 220 210, 300 210 C 380 210, 420 30, 500 30 C 580 30, 620 210, 700 210 C 780 210, 820 30, 900 30 C 980 30, 1020 210, 1100 210 C 1140 210, 1170 120, 1180 120"
              fill="none"
              stroke="#0B192C"
              strokeWidth="26"
              strokeLinecap="round"
              strokeLinejoin="round"
              filter="url(#roadGlow)"
            />

            {/* Center White Dashed Lane Line */}
            <path
              d="M 20 120 C 50 120, 70 30, 100 30 C 180 30, 220 210, 300 210 C 380 210, 420 30, 500 30 C 580 30, 620 210, 700 210 C 780 210, 820 30, 900 30 C 980 30, 1020 210, 1100 210 C 1140 210, 1170 120, 1180 120"
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="3.5"
              strokeDasharray="14 10"
              strokeLinecap="round"
            />
          </svg>

          {/* Intermediate Inflection Nodes */}
          {midNodes.map((node, i) => {
            const NodeIcon = node.icon;
            return (
              <div
                key={`mid-node-${i}`}
                className="absolute z-20 -translate-x-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full border-2 border-emerald-400 bg-white text-emerald-600 shadow-[0_0_15px_rgba(16,185,129,0.45)]"
                style={{ left: `${node.xPct}%`, top: "50%" }}
              >
                <NodeIcon className="h-4 w-4" />
              </div>
            );
          })}

          {/* 6 Green Glowing Stage Nodes on the Road */}
          {items.map((item, index) => {
            const stageMeta = stages[index];
            const Icon = item.icon;
            const nodeYPct = stageMeta.isTop ? "12.5%" : "87.5%"; // 30px or 210px in 240px height

            return (
              <motion.div
                key={`stage-node-${item.num}`}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="absolute z-30 -translate-x-1/2 -translate-y-1/2 pointer-events-auto cursor-pointer"
                style={{ left: `${stageMeta.xPct}%`, top: nodeYPct }}
              >
                <div className="group relative flex h-12 w-12 items-center justify-center rounded-full border-3 border-emerald-500 bg-white text-emerald-600 shadow-[0_0_20px_rgba(16,185,129,0.6)] transition-all duration-300 hover:scale-125 ring-4 ring-emerald-400/20">
                  <Icon className="h-5 w-5" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ZONE 3: BOTTOM CARDS ROW (Stages 002, 004, 006) */}
        <div className="absolute top-[470px] inset-x-0 h-[245px] pointer-events-none">
          {items.map((item, index) => {
            const stageMeta = stages[index];
            if (stageMeta.isTop) return null;

            return (
              <motion.div
                key={`bottom-card-${item.num}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="absolute top-0 pointer-events-auto -translate-x-1/2"
                style={{ left: `${stageMeta.xPct}%`, width: "285px" }}
              >
                {/* Vertical Stem Line up to Road Node */}
                <div className="w-0.5 h-6 mx-auto border-r-2 border-dashed border-emerald-500/70" />

                <div className="group relative rounded-[1.8rem] border border-slate-200/90 bg-white p-4 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-brand-navy/40 hover:shadow-2xl">
                  {/* Card Header: STAGE & Title */}
                  <div className="flex items-center justify-between gap-1 mb-1.5">
                    <span className="text-xs font-black uppercase tracking-widest text-brand-terracotta">
                      STAGE {item.num}
                    </span>
                    <h3 className="text-sm font-extrabold font-display text-slate-900 truncate group-hover:text-brand-navy transition-colors">
                      {item.stageTitle || item.label}
                    </h3>
                  </div>

                  {/* Subtitle / Focus */}
                  <p className="text-xs font-bold text-brand-navy leading-tight">
                    {item.label}
                  </p>
                  <p className="mt-1 text-xs font-medium text-slate-600 leading-snug line-clamp-2">
                    {item.desc}
                  </p>

                  {/* Inner Tinted Detail Box */}
                  <div className="mt-2.5 rounded-xl border border-slate-200/70 bg-slate-50/95 p-2.5">
                    <p className="text-xs font-medium text-slate-700 leading-relaxed">
                      {item.detailBox}
                    </p>
                  </div>

                  {/* Bottom Review Path Footer */}
                  <div className="mt-2.5 flex items-center gap-2 text-xs font-bold text-slate-800 pt-2 border-t border-slate-100">
                    <div className="flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                      <CheckCircle2 className="h-3.5 w-3.5" />
                    </div>
                    <span className="truncate">{item.reviewPath || `${item.tag} review path`}</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* MOBILE VERTICAL SERPENTINE ROADWAY (sm & md screens) */}
      <div className="relative z-10 lg:hidden space-y-6 w-full py-4">
        {/* Mobile Vertical Road Line */}
        <div className="absolute left-6 top-4 bottom-4 w-2 rounded-full bg-[#0B192C] shadow-inner" />
        <div className="absolute left-6 top-4 bottom-4 w-0.5 -translate-x-1/2 rounded-full border-r border-dashed border-white/80" />

        {items.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.num}
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="relative flex items-start gap-4 pl-2"
            >
              {/* Glowing Green Node Icon */}
              <div className="relative z-20 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-emerald-500 bg-white text-emerald-600 shadow-[0_0_15px_rgba(16,185,129,0.5)]">
                <Icon className="h-4 w-4" />
              </div>

              {/* Mobile Card Box */}
              <div className="flex-1 rounded-2xl border border-slate-200 bg-white p-4.5 shadow-sm">
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <span className="text-sm font-black uppercase tracking-wider text-brand-terracotta">
                    STAGE {item.num}
                  </span>
                  <span className="rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-0.5 text-xs font-black uppercase tracking-wider text-emerald-800">
                    {item.tag}
                  </span>
                </div>
                <h4 className="text-lg font-bold font-display text-slate-900">{item.stageTitle || item.label}</h4>
                <p className="mt-0.5 text-sm font-bold text-brand-navy">{item.label}</p>
                <p className="mt-1 text-sm font-medium text-slate-600 leading-snug">{item.desc}</p>

                <div className="mt-3 rounded-xl border border-slate-200/70 bg-slate-50 p-3 text-sm font-medium text-slate-700 leading-relaxed">
                  {item.detailBox}
                </div>

                <div className="mt-3 flex items-center gap-2 text-sm font-bold text-slate-800 pt-2 border-t border-slate-100">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                  <span>{item.reviewPath || `${item.tag} review path`}</span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export function CommerceEnablement() {
  const [activeTab, setActiveTab] = useState<number>(2); // Default to Pillar 03

  // Section 2: Problem Items (With Distinct Color Accents & Badges)
  const stopGrowingProblems = [
    {
      id: "01",
      title: "Website Visitors Are Not Becoming Customers",
      icon: ShoppingCart,
      badge: "Conversion Gap",
      accentBg: "bg-brand-terracotta/10 text-brand-terracotta border-brand-terracotta/20",
      badgeColor: "bg-brand-terracotta/15 text-brand-terracotta border-brand-terracotta/30",
      issues: [
        "Poor user experience",
        "Weak product pages",
        "Slow website",
        "Checkout friction",
        "Missing trust signals",
      ],
    },
    {
      id: "02",
      title: "Customers Cannot Find Your Products",
      icon: SearchX,
      badge: "Visibility Gap",
      accentBg: "bg-amber-500/10 text-amber-700 border-amber-200",
      badgeColor: "bg-amber-100 text-amber-900 border-amber-300",
      issues: [
        "Poor product catalogue structure",
        "SEO gaps",
        "Google Merchant Center problems",
        "Incorrect product feeds",
        "Weak search visibility",
      ],
    },
    {
      id: "03",
      title: "Advertising Costs Increase But Results Are Unclear",
      icon: TrendingDown,
      badge: "Attribution Gap",
      accentBg: "bg-purple-500/10 text-purple-700 border-purple-200",
      badgeColor: "bg-purple-100 text-purple-900 border-purple-300",
      issues: [
        "Incorrect tracking",
        "Weak conversion setup",
        "Poor audience targeting",
        "No customer behaviour insights",
      ],
    },
    {
      id: "04",
      title: "Customer Communication Is Creating Lost Opportunities",
      icon: MessageSquareOff,
      badge: "Communication Gap",
      accentBg: "bg-blue-500/10 text-blue-700 border-blue-200",
      badgeColor: "bg-blue-100 text-blue-900 border-blue-300",
      issues: [
        "Slow responses",
        "Manual follow-ups",
        "No abandoned cart recovery",
        "No customer segmentation",
      ],
    },
    {
      id: "05",
      title: "Operations Become Difficult While Scaling",
      icon: Link2Off,
      badge: "Operational Gap",
      accentBg: "bg-emerald-500/10 text-emerald-700 border-emerald-200",
      badgeColor: "bg-emerald-100 text-emerald-900 border-emerald-300",
      issues: [
        "Manual processes",
        "Disconnected tools",
        "No SOPs",
        "Poor reporting visibility",
      ],
    },
  ];

  // Section 3: Framework Pillars
  const frameworkPillars = [
    {
      id: "01",
      name: "Market, Customer & Competitive Positioning",
      shortName: "Market Positioning",
      question: "Are You Targeting The Right Customers With The Right Offer?",
      icon: Target,
      analyse: [
        "Customer segments",
        "Competitor positioning",
        "Product offers",
        "Pricing approach",
        "Customer reviews",
        "Market opportunities",
        "Brand messaging",
      ],
      output: "Market Opportunity Map",
    },
    {
      id: "02",
      name: "Ecommerce Platform Readiness",
      shortName: "Platform Readiness",
      question: "Is Your Technology Foundation Ready?",
      icon: Store,
      platforms: ["Shopify", "WooCommerce", "Adobe Commerce", "Magento", "Custom Ecommerce"],
      review: [
        "Website performance",
        "Theme architecture",
        "Plugins/apps",
        "Checkout experience",
        "Payment flow",
        "Scalability",
      ],
      output: "Platform Readiness Report",
    },
    {
      id: "03",
      name: "Customer Experience & Conversion",
      shortName: "CX & Conversion",
      question: "Where Are Customers Dropping Before Purchase?",
      icon: MousePointerClick,
      journeySteps: [
        { name: "Discovery", icon: Search, desc: "Search & Landing" },
        { name: "Product", icon: Eye, desc: "Product Pages" },
        { name: "Cart", icon: ShoppingCart, desc: "Cart Building" },
        { name: "Checkout", icon: MousePointerClick, desc: "Checkout Flow" },
        { name: "Payment", icon: CreditCard, desc: "Payment Gateway" },
        { name: "Delivery", icon: Truck, desc: "Fulfillment" },
        { name: "Repeat Purchase", icon: RefreshCw, desc: "Retention" },
      ],
      review: [
        "Navigation",
        "Mobile experience",
        "Product pages",
        "Checkout journey",
        "Trust elements",
      ],
      output: "Conversion Improvement Roadmap",
    },
    {
      id: "04",
      name: "Product Experience & Commerce Visibility",
      shortName: "Product Visibility",
      question: "Can Customers Discover And Understand Your Products?",
      icon: ShoppingBag,
      review: [
        "Product catalogue",
        "Product titles",
        "Descriptions",
        "Images",
        "Categories",
        "Variants",
        "Inventory information",
      ],
      channels: ["Google Merchant Center", "Meta Commerce", "Marketplace readiness"],
      output: "Product Visibility Report",
    },
    {
      id: "05",
      name: "Marketing & Analytics Intelligence",
      shortName: "Marketing & Analytics",
      question: "Understand What Is Driving Business Results",
      icon: BarChart3,
      groups: [
        {
          heading: "Google Ads",
          items: ["Search campaigns", "Shopping campaigns", "Conversion tracking"],
        },
        {
          heading: "Meta Ads",
          items: ["Audience structure", "Retargeting", "Commerce integration"],
        },
        {
          heading: "Analytics",
          items: ["GA4", "Google Tag Manager", "Meta Pixel", "Attribution"],
        },
      ],
      output: "Marketing Measurement Framework",
    },
    {
      id: "06",
      name: "Customer Communication Automation",
      shortName: "Communication (Inaiwazhi™)",
      subtitle: "Powered By Inaiwazhi™ — Turn Customer Conversations Into Commerce Opportunities",
      question: "Customers interact before and after purchase. Inaiwazhi helps businesses automate communication workflows.",
      icon: MessageSquareText,
      isInaiwazhi: true,
      workflows: [
        {
          title: "Before Purchase",
          items: ["Product enquiries", "Availability questions", "Recommendations", "Customer support"],
        },
        {
          title: "During Purchase",
          items: ["Cart reminders", "Purchase confirmation", "Customer updates"],
        },
        {
          title: "After Purchase",
          items: ["Order confirmation", "Shipping updates", "Delivery notifications", "Feedback requests"],
        },
        {
          title: "Customer Engagement",
          items: [
            "Bulk campaigns",
            "Customer segmentation",
            "Promotional communication",
            "Repeat purchase campaigns",
            "Order updates (confirmation, status, customer chat)",
          ],
        },
        {
          title: "AI Customer Support",
          items: ["FAQs", "Product questions", "Order information"],
        },
      ],
      output: "Automated Communication Engine",
    },
    {
      id: "07",
      name: "Operations, AI & Automation",
      shortName: "Operations & AI",
      question: "Build A Commerce System That Works Efficiently",
      icon: Cpu,
      identify: [
        "Workflow automation",
        "AI implementation",
        "SOP creation",
        "Team processes",
        "Internal efficiency",
      ],
      output: "Operational Optimization Playbook",
    },
  ];

  // Section 4: Blueprint Items
  const blueprintComponents = [
    {
      title: "Commerce Maturity Score",
      desc: "Understand your current ecommerce readiness with a benchmark audit.",
      icon: Target,
    },
    {
      title: "Business Gap Analysis",
      desc: "Identify critical issues, growth blockers, and key improvement opportunities across your stack.",
      icon: Layers,
    },
    {
      title: "Technology Recommendations",
      desc: "Understand required tools, integrations, and automation opportunities tailored to your platform.",
      icon: Cpu,
    },
  ];

  const roadmapPhases = [
    {
      phase: "Days 0–30",
      title: "Fix Foundation Issues",
      desc: "Audit, resolve critical platform & tracking gaps, catalog alignment, and initial readiness fixes.",
    },
    {
      phase: "Days 31–60",
      title: "Improve Customer Experience",
      desc: "Optimize conversion pathways, product discoverability, and initial communication workflows.",
    },
    {
      phase: "Days 61–90",
      title: "Implement Automation & Optimization",
      desc: "Deploy Inaiwazhi communication automation, AI workflows, SOP handovers, and continuous measurement.",
    },
  ];

  // Section 5: How SoftClinch Works
  const softClinchSteps = [
    {
      num: "01",
      title: "Discovery",
      desc: "Understand your business model, customers, technology, and challenges.",
      icon: Compass,
    },
    {
      num: "02",
      title: "Commerce Assessment",
      desc: "Review your complete ecommerce ecosystem across technology, marketing, and operations.",
      icon: SearchCheck,
    },
    {
      num: "03",
      title: "Growth Blueprint",
      desc: "Create your prioritized 90-day improvement plan and maturity score.",
      icon: Layers,
    },
    {
      num: "04",
      title: "Implementation",
      desc: "Execute approved improvements across platform, feeds, workflows, and automation.",
      icon: Settings2,
    },
    {
      num: "05",
      title: "Training & Handover",
      desc: "Enable your team with documentation, SOPs, and structured operational processes.",
      icon: UserCheck,
    },
  ];

  // Section 6: Why SoftClinch Connected Pillars
  const connectedPillars = [
    "Ecommerce Technology",
    "Customer Experience",
    "Product Systems",
    "Marketing Channels",
    "Communication Automation",
    "Analytics",
    "Operations",
  ];

  // Section 7: Who This Is For (Target Audience Roadmap Track)
  const targetAudience = [
    {
      num: "001",
      stageTitle: "Discoverability",
      label: "D2C Brands",
      desc: "Product information, catalog structure, and search readiness",
      detailBox: "Review product data and organize the operating inputs needed for clearer ecommerce discovery.",
      reviewPath: "Discoverability review path",
      icon: ShoppingBag,
      tag: "Brand Scaling",
    },
    {
      num: "002",
      stageTitle: "Commerce Readiness",
      label: "Retail Businesses",
      desc: "Merchant Center, Meta Commerce, catalogs, feeds, and commerce assets",
      detailBox: "Prepare commerce channels before ongoing execution and team ownership.",
      reviewPath: "Commerce channel readiness",
      icon: Store,
      tag: "Omnichannel Growth",
    },
    {
      num: "003",
      stageTitle: "Customer Communication",
      label: "Manufacturers Selling Online",
      desc: "WhatsApp commerce, support, broadcasts, follow-ups, and segmentation",
      detailBox: "Connect communication workflows through Inaiwazhi where they are part of the implementation scope.",
      reviewPath: "Communication workflow model",
      icon: Cpu,
      tag: "Direct Sales Modernization",
    },
    {
      num: "004",
      stageTitle: "Analytics",
      label: "Shopify Businesses",
      desc: "Readiness tracking, workflow status, and operational progress",
      detailBox: "Create analytics foundations that help teams review implementation status and operating movement.",
      reviewPath: "Analytics measurement framework",
      icon: Zap,
      tag: "Platform & Catalog Optimization",
    },
    {
      num: "005",
      stageTitle: "Operations",
      label: "WooCommerce Businesses",
      desc: "SOPs, workflows, testing, training, and handover practices",
      detailBox: "Document and train the operating model so internal teams can run it with clarity.",
      reviewPath: "Operational independence",
      icon: Workflow,
      tag: "Custom System Integration",
    },
    {
      num: "006",
      stageTitle: "Systemic Scaling",
      label: "Growing Ecommerce Companies",
      desc: "End-to-end connected growth across marketing, systems & team execution",
      detailBox: "Scale operating models across technology, marketing, and operations for sustainable expansion.",
      reviewPath: "Scale execution framework",
      icon: TrendingUp,
      tag: "Systemic Scaling",
    },
  ];

  return (
    <div className="overflow-hidden bg-[#F8FAFC] text-slate-900">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden border-b border-slate-200/60 bg-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(0,51,102,0.08),_transparent_40%),radial-gradient(circle_at_80%_20%,_rgba(162,59,42,0.08),_transparent_28%),linear-gradient(180deg,_#ffffff_0%,_#f8fafc_100%)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-navy/30 to-transparent" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            {/* ANIMATED HERO CONTENT COLUMN */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 0.05,
                  },
                },
              }}
            >
              {/* Animated Top Badge */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 15 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
                }}
                className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-terracotta/25 bg-brand-terracotta/5 px-4 py-2 text-sm font-black uppercase tracking-[0.18em] text-brand-terracotta shadow-xs"
              >
                <Sparkles className="h-4 w-4 animate-pulse text-brand-terracotta" />
                <span>Commerce Enablement Framework™</span>
              </motion.div>

              {/* SMOOTH ANIMATED HEADLINE WITH TERRACOTTA HIGHLIGHT */}
              <motion.h1
                variants={{
                  hidden: { opacity: 0, y: 25 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } },
                }}
                className="max-w-4xl text-5xl font-display font-bold leading-[1.15] tracking-tight text-slate-955 sm:text-6xl lg:text-7xl"
              >
                Find And{" "}
                <span className="bg-gradient-to-r from-brand-terracotta to-[#C24E3A] bg-clip-text text-transparent underline decoration-brand-terracotta/30 underline-offset-8">
                  Fix The Gaps
                </span>{" "}
                Blocking Your Ecommerce Growth
              </motion.h1>

              {/* SMOOTH ANIMATED SUBTITLE */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
                }}
                className="mt-6 space-y-3 max-w-3xl text-lg font-medium leading-relaxed text-slate-600 sm:text-xl"
              >
                <p>
                  <strong className="text-slate-900">Your ecommerce store is live.</strong> But your growth depends on more than your website.
                </p>
                <p>
                  SoftClinch analyzes the connected systems behind your ecommerce business — platform, products, customer experience, marketing, communication, analytics, and operations — and creates a prioritized roadmap to improve performance.
                </p>
              </motion.div>

              {/* ANIMATED SUPPORTED PLATFORMS BADGE */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 15 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
                }}
                className="mt-6 inline-flex flex-wrap items-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm font-bold text-slate-700 sm:text-base"
              >
                <span className="text-brand-navy">Supported Ecosystems:</span>
                <span className="text-slate-500 font-semibold">For Shopify | WooCommerce | Adobe Commerce | Magento | Custom Ecommerce</span>
              </motion.div>

              {/* ANIMATED BUTTON ACTION ROW */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
                }}
                className="mt-8 flex flex-wrap items-center gap-4"
              >
                <Link
                  href="/contact"
                  className="group relative inline-flex items-center justify-center gap-2.5 rounded-2xl bg-brand-navy px-8 py-4 font-bold text-white shadow-xl shadow-brand-navy/20 transition-all hover:-translate-y-1 hover:bg-brand-navy/90 hover:shadow-2xl"
                >
                  <span>Book Your Commerce Assessment</span>
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
                <a
                  href="#framework-dashboard"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-7 py-4 font-bold text-slate-700 shadow-xs transition-all hover:-translate-y-0.5 hover:border-brand-terracotta hover:text-brand-terracotta"
                >
                  <span>Explore 7 Pillars</span>
                  <ChevronRight className="h-4 w-4" />
                </a>
              </motion.div>

              {/* ANIMATED SUPPORTING TRUST POINTS */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
                }}
                className="mt-10 grid gap-3.5 sm:grid-cols-2"
              >
                {[
                  "Complete ecommerce ecosystem review",
                  "Platform and system performance assessment",
                  "Customer communication automation strategy",
                  "Actionable 90-day improvement roadmap",
                ].map((point) => (
                  <div key={point} className="flex items-center gap-3">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                      <CheckCircle2 className="h-4 w-4" />
                    </div>
                    <span className="text-sm font-bold text-slate-800 sm:text-base">{point}</span>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* ANIMATED MEDIA PANEL RIGHT COLUMN */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <ServiceMediaPanel
                title="Connected Commerce System"
                subtitle="Platform, Products, CX, Marketing, Communication, Analytics, and Operations synchronized into one growth engine."
                imageSrc="/enterprise_hero_illustration.png"
                imageAlt="Commerce enablement system preview"
                theme="light"
                points={[
                  "Full Ecosystem Assessment",
                  "Inaiwazhi™ Automation",
                  "90-Day Priority Roadmap",
                ]}
              />
            </motion.div>
          </div>
        </div>
      </section>

      <ClientLogos />

      {/* SECTION 2: Why Ecommerce Businesses Stop Growing (SYSTEM DISCONNECTION DIAGNOSTIC HUB) */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <SectionHeading
          title="Why Ecommerce Businesses Stop Growing"
          description="Your Problem Is Usually Not One Tool. It Is The Connection Between Systems."
        />

        {/* SYSTEM DISCONNECTION FEATURE BANNER */}
        <div className="mb-12 overflow-hidden rounded-[2.5rem] bg-gradient-to-r from-brand-navy via-slate-900 to-brand-navy p-8 sm:p-12 text-white shadow-xl border border-slate-800 relative">
          <div className="absolute -right-16 -top-16 h-80 w-80 rounded-full bg-brand-terracotta/20 blur-3xl pointer-events-none" />
          
          <div className="relative z-10 grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-brand-terracotta/25 px-3.5 py-1 text-xs font-black uppercase tracking-widest text-orange-200 border border-brand-terracotta/40 mb-3">
                <AlertTriangle className="h-3.5 w-3.5" />
                Root Cause Analysis
              </span>
              <h3 className="text-3xl sm:text-4xl font-display font-bold text-white leading-tight">
                Single tools don&apos;t fix broken system connections.
              </h3>
              <p className="mt-3 text-base font-semibold text-slate-300 leading-relaxed">
                Most ecommerce stores hit growth ceilings because traffic, catalogue, ads, communication, and operations act as isolated silos. SoftClinch diagnoses and connects all 5 critical gap areas.
              </p>
            </div>

            <div className="flex flex-wrap gap-2.5 justify-start lg:justify-end">
              {stopGrowingProblems.map((prob) => (
                <span key={prob.id} className="rounded-xl border border-white/15 bg-white/10 px-3.5 py-2 text-xs font-bold text-white backdrop-blur-md flex items-center gap-2 shadow-xs">
                  <span className="h-2 w-2 rounded-full bg-brand-terracotta" />
                  <span>{prob.badge}</span>
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* 5 PROBLEM DIAGNOSTIC CARDS GRID */}
        {/* Top Row: 3 Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-6">
          {stopGrowingProblems.slice(0, 3).map((problem, idx) => {
            const Icon = problem.icon;
            const isFeatured = idx === 0;

            return (
              <motion.div
                key={problem.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                variants={reveal}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className={`group relative flex flex-col justify-between overflow-hidden rounded-[2.5rem] border p-8 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl ${
                  isFeatured
                    ? "md:col-span-2 lg:col-span-1 border-brand-terracotta/30 bg-gradient-to-b from-brand-terracotta/5 via-white to-white hover:border-brand-terracotta/60"
                    : "border-slate-200 bg-white hover:border-brand-navy/30"
                }`}
              >
                <div>
                  {/* Top Bar with Icon & Badge */}
                  <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-4">
                    <div className={`flex h-12 w-12 items-center justify-center rounded-2xl transition-colors ${
                      isFeatured ? "bg-brand-terracotta text-white shadow-md shadow-brand-terracotta/20" : "bg-slate-100 text-brand-navy group-hover:bg-brand-navy group-hover:text-white"
                    }`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className={`rounded-full border px-3 py-1 text-[11px] font-black uppercase tracking-wider ${problem.badgeColor}`}>
                      {problem.badge}
                    </span>
                  </div>

                  <span className="text-xs font-black uppercase tracking-widest text-slate-400">
                    Gap 0{idx + 1}
                  </span>

                  <h3 className="mt-1 text-2xl font-display font-bold leading-snug text-slate-955 group-hover:text-brand-navy transition-colors">
                    {problem.title}
                  </h3>

                  <p className="mt-4 text-xs font-black uppercase tracking-wider text-slate-400 border-b border-slate-100 pb-2">
                    Common Friction Points:
                  </p>

                  <ul className="mt-3 space-y-2">
                    {problem.issues.map((issue) => (
                      <li key={issue} className="flex items-start gap-2 text-sm font-semibold text-slate-700">
                        <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-brand-terracotta/90" />
                        <span>{issue}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Row: 2 Cards Centered */}
        <div className="flex flex-col md:flex-row justify-center gap-6">
          {stopGrowingProblems.slice(3, 5).map((problem, idx) => {
            const Icon = problem.icon;
            const realIdx = idx + 3;

            return (
              <motion.div
                key={problem.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                variants={reveal}
                transition={{ duration: 0.4, delay: realIdx * 0.08 }}
                className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] group relative flex flex-col justify-between overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-navy/30 hover:shadow-xl"
              >
                <div>
                  {/* Top Bar with Icon & Badge */}
                  <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 text-brand-navy group-hover:bg-brand-navy group-hover:text-white transition-colors">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className={`rounded-full border px-3 py-1 text-[11px] font-black uppercase tracking-wider ${problem.badgeColor}`}>
                      {problem.badge}
                    </span>
                  </div>

                  <span className="text-xs font-black uppercase tracking-widest text-slate-400">
                    Gap 0{realIdx + 1}
                  </span>

                  <h3 className="mt-1 text-2xl font-display font-bold leading-snug text-slate-955 group-hover:text-brand-navy transition-colors">
                    {problem.title}
                  </h3>

                  <p className="mt-4 text-xs font-black uppercase tracking-wider text-slate-400 border-b border-slate-100 pb-2">
                    Common Friction Points:
                  </p>

                  <ul className="mt-3 space-y-2">
                    {problem.issues.map((issue) => (
                      <li key={issue} className="flex items-start gap-2 text-sm font-semibold text-slate-700">
                        <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-brand-terracotta/90" />
                        <span>{issue}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* SECTION 3: SoftClinch Commerce Enablement Framework™ (4 TOP, 3 CENTERED BOTTOM CHEVRON MATRIX) */}
      <section id="framework-dashboard" className="border-t border-slate-200/80 bg-slate-50/70 px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            title="SoftClinch Commerce Enablement Framework™"
            description="A Connected Ecommerce Growth Architecture — 4 Foundation Pillars On Top & 3 Execution Engines Centered Below."
          />

          {/* DESKTOP 2-ROW CHEVRON MATRIX: TOP 4 / BOTTOM CENTERED 3 (lg+ screens) */}
          <div className="hidden lg:block space-y-10 mt-8">
            {/* ROW 1: TOP 4 CONNECTED PILLARS (01, 02, 03, 04) */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="h-2 w-2 rounded-full bg-brand-terracotta" />
                <span className="text-xs font-black uppercase tracking-widest text-slate-600">
                  Phase 1: Ecosystem Audit & Diagnostic Scope (Pillars 01 – 04)
                </span>
              </div>

              <div className="grid grid-cols-4 gap-3 items-stretch">
                {frameworkPillars.slice(0, 4).map((pillar, index) => {
                  const Icon = pillar.icon;
                  const isOdd = index % 2 !== 0;

                  const headerBg = index === 0
                    ? "bg-brand-navy text-white"
                    : index === 1
                    ? "bg-brand-terracotta text-white"
                    : index === 2
                    ? "bg-slate-800 text-white"
                    : "bg-brand-navy text-white";

                  const colTint = isOdd ? "bg-brand-terracotta/[0.03] border-brand-terracotta/20" : "bg-brand-navy/[0.02] border-slate-200";

                  return (
                    <div key={pillar.id} className="flex flex-col h-full group">
                      {/* Floating Circle Icon Badge */}
                      <div className="flex justify-center mb-3">
                        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-lg border-2 border-brand-terracotta text-brand-terracotta group-hover:scale-110 group-hover:bg-brand-terracotta group-hover:text-white transition-all duration-300">
                          <Icon className="h-6 w-6" />
                        </div>
                      </div>

                      {/* Chevron Banner Header */}
                      <div
                        className={`relative flex items-center justify-center py-4 px-3 text-center min-h-[70px] shadow-md ${headerBg}`}
                        style={{
                          clipPath:
                            index === 0
                              ? "polygon(0% 0%, calc(100% - 14px) 0%, 100% 50%, calc(100% - 14px) 100%, 0% 100%)"
                              : index === 3
                              ? "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%, 14px 50%)"
                              : "polygon(0% 0%, calc(100% - 14px) 0%, 100% 50%, calc(100% - 14px) 100%, 0% 100%, 14px 50%)",
                        }}
                      >
                        <div className="px-2">
                          <span className="block text-xs font-black uppercase tracking-widest opacity-80">
                            PILLAR {pillar.id}
                          </span>
                          <h4 className="text-sm font-bold leading-tight line-clamp-2 mt-0.5">
                            {pillar.shortName}
                          </h4>
                        </div>
                      </div>

                      {/* Column Content Box */}
                      <div className={`flex-1 mt-2 rounded-2xl border p-4 flex flex-col justify-between ${colTint}`}>
                        <div className="space-y-3">
                          <div className="rounded-xl border border-slate-200/80 bg-white p-3 shadow-2xs">
                            <span className="text-xs font-black uppercase tracking-widest text-brand-terracotta">
                              Diagnostic Objective
                            </span>
                            <p className="mt-1 text-sm font-bold text-slate-800 leading-tight">
                              &quot;{pillar.question}&quot;
                            </p>
                          </div>

                          <div className="space-y-1.5">
                            {(pillar.analyse || pillar.review || pillar.identify || []).slice(0, 4).map((item: string, itemIdx: number) => (
                              <div
                                key={item}
                                className="flex items-center gap-2 rounded-lg bg-white p-2 text-sm font-semibold text-slate-700 border border-slate-100 shadow-2xs"
                              >
                                <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-brand-navy/10 text-[9px] font-black text-brand-navy">
                                  {itemIdx + 1}
                                </span>
                                <span className="truncate">{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="mt-4 pt-2 border-t border-slate-200/60">
                          <span className="block text-xs font-black uppercase tracking-wider text-slate-400">
                            Output Deliverable
                          </span>
                          <div className="mt-1 rounded-xl bg-brand-navy p-2 text-center text-sm font-bold text-white shadow-xs">
                            {pillar.output}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* ROW 2: BOTTOM 3 CONNECTED PILLARS CENTERED IN THE MIDDLE (05, 06, 07) */}
            <div className="max-w-5xl mx-auto pt-4">
              <div className="flex items-center justify-center gap-2 mb-4">
                <span className="h-2 w-2 rounded-full bg-emerald-600" />
                <span className="text-xs font-black uppercase tracking-widest text-slate-600">
                  Phase 2: Growth Execution & Automation Engines (Pillars 05 – 07)
                </span>
              </div>

              <div className="grid grid-cols-3 gap-3 items-stretch">
                {frameworkPillars.slice(4, 7).map((pillar, index) => {
                  const Icon = pillar.icon;
                  const realIndex = index + 4;
                  const isOdd = realIndex % 2 !== 0;

                  const headerBg = index === 0
                    ? "bg-brand-terracotta text-white"
                    : index === 1
                    ? "bg-emerald-800 text-white"
                    : "bg-brand-navy text-white";

                  const colTint = isOdd ? "bg-brand-terracotta/[0.03] border-brand-terracotta/20" : "bg-brand-navy/[0.02] border-slate-200";

                  return (
                    <div key={pillar.id} className="flex flex-col h-full group">
                      {/* Floating Circle Icon Badge */}
                      <div className="flex justify-center mb-3">
                        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-lg border-2 border-brand-terracotta text-brand-terracotta group-hover:scale-110 group-hover:bg-brand-terracotta group-hover:text-white transition-all duration-300">
                          <Icon className="h-6 w-6" />
                        </div>
                      </div>

                      {/* Chevron Banner Header */}
                      <div
                        className={`relative flex items-center justify-center py-4 px-3 text-center min-h-[70px] shadow-md ${headerBg}`}
                        style={{
                          clipPath:
                            index === 0
                              ? "polygon(0% 0%, calc(100% - 14px) 0%, 100% 50%, calc(100% - 14px) 100%, 0% 100%)"
                              : index === 2
                              ? "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%, 14px 50%)"
                              : "polygon(0% 0%, calc(100% - 14px) 0%, 100% 50%, calc(100% - 14px) 100%, 0% 100%, 14px 50%)",
                        }}
                      >
                        <div className="px-2">
                          <span className="block text-xs font-black uppercase tracking-widest opacity-80">
                            PILLAR {pillar.id}
                          </span>
                          <h4 className="text-sm font-bold leading-tight line-clamp-2 mt-0.5">
                            {pillar.shortName}
                          </h4>
                        </div>
                      </div>

                      {/* Column Content Box */}
                      <div className={`flex-1 mt-2 rounded-2xl border p-4 flex flex-col justify-between ${colTint}`}>
                        <div className="space-y-3">
                          <div className="rounded-xl border border-slate-200/80 bg-white p-3 shadow-2xs">
                            <span className="text-xs font-black uppercase tracking-widest text-brand-terracotta">
                              Diagnostic Objective
                            </span>
                            <p className="mt-1 text-sm font-bold text-slate-800 leading-tight">
                              &quot;{pillar.question}&quot;
                            </p>
                          </div>

                          <div className="space-y-1.5">
                            {(pillar.analyse || pillar.review || pillar.identify || pillar.groups?.flatMap((g: any) => g.items) || []).slice(0, 4).map((item: string, itemIdx: number) => (
                              <div
                                key={item}
                                className="flex items-center gap-2 rounded-lg bg-white p-2 text-sm font-semibold text-slate-700 border border-slate-100 shadow-2xs"
                              >
                                <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-brand-navy/10 text-[9px] font-black text-brand-navy">
                                  {itemIdx + 1}
                                </span>
                                <span className="truncate">{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="mt-4 pt-2 border-t border-slate-200/60">
                          <span className="block text-xs font-black uppercase tracking-wider text-slate-400">
                            Output Deliverable
                          </span>
                          <div className="mt-1 rounded-xl bg-brand-navy p-2 text-center text-sm font-bold text-white shadow-xs">
                            {pillar.output}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* MOBILE & TABLET ACCORDION CARDS (sm & md screens) */}
          <div className="lg:hidden space-y-4">
            {frameworkPillars.map((pillar, index) => {
              const Icon = pillar.icon;
              const isOpen = activeTab === index;

              return (
                <div
                  key={pillar.id}
                  className={`overflow-hidden rounded-2xl border transition-all ${
                    isOpen ? "border-brand-terracotta bg-white shadow-xl" : "border-slate-200 bg-white"
                  }`}
                >
                  <button
                    onClick={() => setActiveTab(isOpen ? -1 : index)}
                    className="w-full p-4 flex items-center justify-between text-left cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-navy text-white font-bold">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <span className="text-xs font-black text-brand-terracotta uppercase">Pillar {pillar.id}</span>
                        <h4 className="text-base font-bold text-slate-900">{pillar.name}</h4>
                      </div>
                    </div>
                    <ChevronDown className={`h-5 w-5 text-slate-400 transition-transform ${isOpen ? "rotate-180" : ""}`} />
                  </button>

                  {isOpen && (
                    <div className="p-4 border-t border-slate-100 bg-slate-50 space-y-3">
                      <p className="text-sm font-bold text-slate-800">&quot;{pillar.question}&quot;</p>
                      <div className="space-y-1">
                        {(pillar.analyse || pillar.review || pillar.identify || []).map((item: string) => (
                          <div key={item} className="flex items-center gap-2 text-sm font-semibold text-slate-700 bg-white p-2 rounded-lg border border-slate-200">
                            <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                      <div className="pt-2 border-t border-slate-200 flex items-center justify-between text-sm font-bold">
                        <span className="text-slate-500">Deliverable:</span>
                        <span className="text-brand-terracotta">{pillar.output}</span>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 4: Commerce360™ Growth Blueprint & 90-DAY AXIS ROADMAP */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <SectionHeading
          title="Commerce360™ Growth Blueprint"
          description="Your Roadmap From Problems To Priorities — You Receive:"
        />

        <div className="grid gap-6 md:grid-cols-3 mb-12">
          {blueprintComponents.map((comp) => {
            const Icon = comp.icon;
            return (
              <div key={comp.title} className="rounded-[2.5rem] border border-slate-200 bg-white p-8 shadow-sm hover:shadow-xl transition-all">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-navy text-white shadow-md mb-6">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-display font-bold text-slate-955">{comp.title}</h3>
                <p className="mt-3 text-base font-semibold leading-relaxed text-slate-600">{comp.desc}</p>
              </div>
            );
          })}
        </div>

        {/* AXIS TIMELINE ROADMAP (DAYS 0-30, 31-60, 61-90) */}
        <div className="mt-8">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-sm font-black uppercase tracking-widest text-brand-terracotta">Structured Phase Timeline</span>
            <h3 className="text-3xl sm:text-4xl font-display font-bold text-slate-955 mt-1">90-Day Execution Roadmap</h3>
          </div>
          <AxisTimelineRoadmap phases={roadmapPhases} />
        </div>
      </section>

      {/* SECTION 5: How SoftClinch Works (CONNECTED FLOWCHART DIAGRAM WITH ZERO OVERLAP) */}
      <section className="border-t border-slate-200/80 bg-white px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            title="How SoftClinch Works"
            description="Our 5-Step Connected Enablement Flowchart — Linked Node Architecture With Arrow Connectors"
          />

          {/* FLOWCHART DIAGRAM CANVAS CONTAINER */}
          <div className="mt-12 relative overflow-hidden rounded-[2.5rem] border border-slate-200 bg-slate-50/70 p-6 sm:p-10 shadow-2xl">
            {/* Background Canvas Dot Grid Pattern */}
            <div
              className="absolute inset-0 opacity-40 pointer-events-none"
              style={{
                backgroundImage: `radial-gradient(#CBD5E1 1.5px, transparent 1.5px)`,
                backgroundSize: "24px 24px",
              }}
            />

            {/* DESKTOP CONNECTED FLOWCHART DIAGRAM (lg+ screens) */}
            <div className="relative z-10 hidden lg:block py-6">
              
              {/* FLEX MATRIX: 4 NODE COLUMNS & 3 INTER-COLUMN ARROW CONNECTORS */}
              <div className="flex items-center justify-between gap-3 min-h-[460px]">
                
                {/* COLUMN 1: NODE 1 - STEP 01: DISCOVERY */}
                <div className="relative flex-1 flex flex-col items-center max-w-[220px]">
                  {/* Floating Cursor Badge: Sydney */}
                  <div className="absolute -bottom-7 left-2 z-20 flex items-center gap-1 rounded-md bg-brand-terracotta px-2.5 py-0.5 text-[10px] font-black text-white shadow-md">
                    <svg className="h-3 w-3 fill-current" viewBox="0 0 24 24"><path d="M3 3l7 18 3-7 7-3L3 3z"/></svg>
                    <span>Sydney</span>
                  </div>

                  <div className="group relative w-full rounded-3xl border-2 border-brand-navy bg-brand-navy p-5 text-white shadow-xl transition-all duration-300 hover:scale-105">
                    <div className="flex items-center justify-between mb-3">
                      <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-brand-terracotta text-xs font-black text-white">
                        01
                      </span>
                      <Compass className="h-5 w-5 text-brand-terracotta" />
                    </div>
                    <h4 className="text-lg font-bold font-display text-white">
                      Discovery
                    </h4>
                    <p className="mt-2 text-sm font-medium text-slate-300 leading-relaxed">
                      Understand your business model, customers, technology, and key challenges.
                    </p>
                  </div>
                </div>

                {/* INTER-COLUMN CONNECTOR 1: NODE 1 ---> NODE 2 */}
                <div className="shrink-0 flex items-center justify-center w-12 text-brand-terracotta">
                  <div className="flex items-center w-full">
                    <div className="h-0.5 flex-1 bg-brand-terracotta stroke-dasharray-2" />
                    <ChevronRight className="h-6 w-6 -ml-2 text-brand-terracotta shrink-0" />
                  </div>
                </div>

                {/* COLUMN 2: NODE 2 - STEP 02: COMMERCE ASSESSMENT (ENGINE NODE) */}
                <div className="relative flex-1 flex flex-col items-center max-w-[240px]">
                  {/* Speech Bubble Header Above */}
                  <div className="absolute -top-12 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5 whitespace-nowrap rounded-xl bg-brand-navy border border-brand-terracotta px-3 py-1.5 text-[11px] font-bold text-white shadow-xl">
                    <span className="text-[10px] font-black uppercase text-brand-terracotta">SoftClinch:</span>
                    <span>Audit Engine Active</span>
                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 h-2.5 w-2.5 rotate-45 bg-brand-navy border-r border-b border-brand-terracotta" />
                  </div>

                  {/* Floating Cursor Badge: Deepak */}
                  <div className="absolute -bottom-7 right-2 z-20 flex items-center gap-1 rounded-md bg-brand-navy px-2.5 py-0.5 text-[10px] font-black text-white shadow-md">
                    <svg className="h-3 w-3 fill-current" viewBox="0 0 24 24"><path d="M3 3l7 18 3-7 7-3L3 3z"/></svg>
                    <span>Deepak</span>
                  </div>

                  <div className="group relative w-full rounded-3xl border-2 border-brand-navy bg-brand-terracotta p-5 text-white shadow-2xl ring-4 ring-brand-terracotta/30 transition-all duration-300 hover:scale-105">
                    {/* Corner Handle Dots */}
                    <div className="absolute -top-1 -left-1 h-2.5 w-2.5 rounded-full border border-brand-navy bg-white" />
                    <div className="absolute -top-1 -right-1 h-2.5 w-2.5 rounded-full border border-brand-navy bg-white" />
                    <div className="absolute -bottom-1 -left-1 h-2.5 w-2.5 rounded-full border border-brand-navy bg-white" />
                    <div className="absolute -bottom-1 -right-1 h-2.5 w-2.5 rounded-full border border-brand-navy bg-white" />

                    <div className="flex items-center justify-between mb-3">
                      <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-brand-navy text-xs font-black text-white">
                        02
                      </span>
                      <SearchCheck className="h-5 w-5 text-white" />
                    </div>
                    <h4 className="text-lg font-bold font-display text-white">
                      Commerce Assessment
                    </h4>
                    <p className="mt-2 text-sm font-medium text-orange-100 leading-relaxed">
                      Review complete ecommerce ecosystem across tech, marketing, &amp; ops.
                    </p>
                  </div>
                </div>

                {/* INTER-COLUMN CONNECTOR 2: 3-BRANCH SPLINE FROM NODE 2 TO NODES 3, 4, 5 */}
                <div className="shrink-0 flex flex-col justify-between h-[360px] w-14 py-6">
                  {/* Top Branch to Node 3 */}
                  <div className="flex items-center">
                    <svg className="w-14 h-12 overflow-visible" viewBox="0 0 50 40">
                      <path d="M 0 35 C 25 35, 25 5, 42 5" fill="none" stroke="#0A192F" strokeWidth="2.5" />
                      <polygon points="42,0 50,5 42,10" fill="#0A192F" />
                    </svg>
                  </div>

                  {/* Middle Center Arrow to Node 4 */}
                  <div className="flex items-center">
                    <div className="h-0.5 flex-1 bg-brand-terracotta" />
                    <ChevronRight className="h-6 w-6 -ml-2 text-brand-terracotta shrink-0" />
                  </div>

                  {/* Bottom Branch to Node 5 */}
                  <div className="flex items-center">
                    <svg className="w-14 h-12 overflow-visible" viewBox="0 0 50 40">
                      <path d="M 0 5 C 25 5, 25 35, 42 35" fill="none" stroke="#0A192F" strokeWidth="2.5" />
                      <polygon points="42,30 50,35 42,40" fill="#0A192F" />
                    </svg>
                  </div>
                </div>

                {/* COLUMN 3: STACKED NODES 3, 4, 5 (PARALLEL EXECUTION STACK) */}
                <div className="relative flex-1 flex flex-col justify-between space-y-3 max-w-[260px]">
                  {/* Floating Cursor Badge: Himari */}
                  <div className="absolute -top-7 right-0 z-20 flex items-center gap-1 rounded-md bg-brand-terracotta px-2.5 py-0.5 text-[10px] font-black text-white shadow-md">
                    <svg className="h-3 w-3 fill-current" viewBox="0 0 24 24"><path d="M3 3l7 18 3-7 7-3L3 3z"/></svg>
                    <span>Himari</span>
                  </div>

                  {/* NODE 3: STEP 03 - GROWTH BLUEPRINT */}
                  <div className="group rounded-2xl border-2 border-brand-navy bg-white p-3.5 shadow-md transition-all hover:scale-102 hover:border-brand-terracotta">
                    <div className="flex items-center gap-2.5">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-brand-navy text-[10px] font-black text-white">
                        03
                      </span>
                      <div>
                        <h5 className="text-sm font-bold text-slate-900">Growth Blueprint</h5>
                        <p className="text-xs font-medium text-slate-600 leading-tight">Prioritized 90-day roadmap & maturity score.</p>
                      </div>
                    </div>
                  </div>

                  {/* NODE 4: STEP 04 - IMPLEMENTATION */}
                  <div className="group rounded-2xl border-2 border-brand-navy bg-brand-navy p-3.5 text-white shadow-xl transition-all hover:scale-102">
                    <div className="flex items-center gap-2.5">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-brand-terracotta text-[10px] font-black text-white">
                        04
                      </span>
                      <div>
                        <h5 className="text-sm font-bold text-white">Implementation</h5>
                        <p className="text-xs font-medium text-slate-200 leading-tight">Execute improvements across tech & workflows.</p>
                      </div>
                    </div>
                  </div>

                  {/* NODE 5: STEP 05 - TRAINING & HANDOVER */}
                  <div className="group rounded-2xl border-2 border-brand-terracotta bg-white p-3.5 shadow-md transition-all hover:scale-102">
                    <div className="flex items-center gap-2.5">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-brand-terracotta text-[10px] font-black text-white">
                        05
                      </span>
                      <div>
                        <h5 className="text-sm font-bold text-slate-900">Training & Handover</h5>
                        <p className="text-xs font-medium text-slate-600 leading-tight">SOPs & continuous team handovers.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* INTER-COLUMN CONNECTOR 3: NODE 4 ---> NODE 6 */}
                <div className="shrink-0 flex items-center justify-center w-12 text-brand-terracotta">
                  <div className="flex items-center w-full">
                    <div className="h-0.5 flex-1 bg-brand-terracotta" />
                    <ChevronRight className="h-6 w-6 -ml-2 text-brand-terracotta shrink-0" />
                  </div>
                </div>

                {/* COLUMN 4: NODE 6 - TARGET OUTCOME DIAMOND CARD */}
                <div className="relative flex-1 flex flex-col items-center max-w-[220px]">
                  {/* Floating Cursor Badge: Pedro */}
                  <div className="absolute -bottom-7 right-2 z-20 flex items-center gap-1 rounded-md bg-brand-navy px-2.5 py-0.5 text-[10px] font-black text-white shadow-md">
                    <svg className="h-3 w-3 fill-current" viewBox="0 0 24 24"><path d="M3 3l7 18 3-7 7-3L3 3z"/></svg>
                    <span>Pedro</span>
                  </div>

                  <div className="group relative flex flex-col items-center justify-center text-center rounded-[2.5rem] border-2 border-brand-navy bg-gradient-to-br from-brand-terracotta to-[#842D1F] p-5 text-white shadow-2xl transition-all duration-300 hover:scale-105">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-navy/40 mb-2 backdrop-blur-xs">
                      <Award className="h-5 w-5 text-orange-200" />
                    </div>
                    <span className="text-[9px] font-black uppercase tracking-widest text-orange-200">
                      Target Growth Outcome
                    </span>
                    <h4 className="mt-1 text-xs sm:text-sm font-bold font-display leading-tight text-white">
                      Scalable Commerce System
                    </h4>
                    <p className="mt-1.5 text-[10px] font-medium text-slate-200 leading-snug">
                      Higher Sales & Automated Ops
                    </p>
                  </div>
                </div>

              </div>

              {/* CLEAN BOTTOM LOOPBACK CONNECTOR LINE: STEP 05 BACK TO STEP 02 */}
              <div className="relative mt-4 flex items-center justify-center">
                <div className="w-[45%] h-6 border-b-2 border-l-2 border-r-2 border-dashed border-brand-terracotta rounded-b-2xl opacity-70 flex items-end justify-between px-4">
                  <span className="text-[9px] font-black uppercase text-brand-terracotta bg-white px-2 py-0.5 rounded-full border border-brand-terracotta/30 -mb-2.5 mx-auto">
                    Continuous Improvement Loop
                  </span>
                </div>
              </div>
            </div>

            {/* MOBILE & TABLET FLOWCHART LIST (sm & md screens) */}
            <div className="lg:hidden space-y-4">
              {softClinchSteps.map((step) => {
                const Icon = step.icon;
                return (
                  <div key={step.num} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-navy text-white font-bold">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <span className="text-sm font-black text-brand-terracotta uppercase">Step {step.num}</span>
                      <h4 className="text-lg font-bold text-slate-900">{step.title}</h4>
                      <p className="mt-1 text-sm font-medium text-slate-600">{step.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 6: Why SoftClinch? (RADIAL AVATAR HUB & 6-PILLAR NODE ARCHITECTURE) */}
      <section className="border-t border-slate-200/80 bg-slate-50/70 px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            title="Why SoftClinch?"
            description="Traditional agencies solve individual problems in isolation. SoftClinch connects all 6 vital growth engines into one unified commerce ecosystem."
          />

          {/* RADIAL AVATAR HUB DIAGRAM CONTAINER */}
          <div className="mt-14 relative overflow-hidden rounded-[3rem] border border-slate-200 bg-white p-6 sm:p-12 shadow-2xl">
            {/* Subtle Canvas Grid Pattern */}
            <div
              className="absolute inset-0 opacity-30 pointer-events-none"
              style={{
                backgroundImage: `radial-gradient(#CBD5E1 1.5px, transparent 1.5px)`,
                backgroundSize: "28px 28px",
              }}
            />

            {/* DESKTOP RADIAL DIAGRAM (lg+ screens) */}
            <div className="relative z-10 hidden lg:block py-6">
              
              {/* SVG CONNECTING SPOKE LINES LAYER */}
              <svg className="absolute inset-0 h-full w-full pointer-events-none z-10 overflow-visible">
                {/* Left Top Spoke */}
                <line x1="33%" y1="20%" x2="50%" y2="50%" stroke="#0A192F" strokeWidth="2" strokeDasharray="4 4" />
                {/* Left Mid Spoke */}
                <line x1="35%" y1="50%" x2="50%" y2="50%" stroke="#A23B2A" strokeWidth="2.5" />
                {/* Left Bot Spoke */}
                <line x1="33%" y1="80%" x2="50%" y2="50%" stroke="#0A192F" strokeWidth="2" strokeDasharray="4 4" />

                {/* Right Top Spoke */}
                <line x1="67%" y1="20%" x2="50%" y2="50%" stroke="#0A192F" strokeWidth="2" strokeDasharray="4 4" />
                {/* Right Mid Spoke */}
                <line x1="65%" y1="50%" x2="50%" y2="50%" stroke="#A23B2A" strokeWidth="2.5" />
                {/* Right Bot Spoke */}
                <line x1="67%" y1="80%" x2="50%" y2="50%" stroke="#0A192F" strokeWidth="2" strokeDasharray="4 4" />
              </svg>

              <div className="grid grid-cols-[1fr_1.1fr_1fr] items-center gap-12 min-h-[520px]">
                
                {/* LEFT COLUMN: 3 SURROUNDING FEATURE NODES */}
                <div className="space-y-8 relative z-20">
                  {/* NODE 1: Ecommerce Technology */}
                  <div className="group rounded-2xl border-2 border-brand-navy bg-white p-5 shadow-lg transition-all duration-300 hover:-translate-x-1 hover:border-brand-terracotta">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-navy text-white shadow-md group-hover:bg-brand-terracotta transition-colors">
                        <Cpu className="h-6 w-6" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-slate-900 font-display">Ecommerce Technology</h4>
                        <p className="text-sm font-medium text-slate-500 mt-0.5">Platform stability, speed & catalog scalability.</p>
                      </div>
                    </div>
                  </div>

                  {/* NODE 2: Customer Experience */}
                  <div className="group rounded-2xl border-2 border-brand-terracotta bg-brand-terracotta p-5 text-white shadow-xl transition-all duration-300 hover:-translate-x-1">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-navy text-white shadow-md">
                        <ShoppingBag className="h-6 w-6 text-brand-terracotta" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-white font-display">Customer Experience</h4>
                        <p className="text-sm font-medium text-orange-100 mt-0.5">Conversion pathways, UI/UX & customer checkout.</p>
                      </div>
                    </div>
                  </div>

                  {/* NODE 3: Product Systems */}
                  <div className="group rounded-2xl border-2 border-brand-navy bg-white p-5 shadow-lg transition-all duration-300 hover:-translate-x-1 hover:border-brand-terracotta">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-navy text-white shadow-md group-hover:bg-brand-terracotta transition-colors">
                        <Store className="h-6 w-6" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-slate-900 font-display">Product Systems</h4>
                        <p className="text-sm font-medium text-slate-500 mt-0.5">Catalog structuring, inventory & feeds.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* CENTER COLUMN: FOCAL AVATAR / CENTRAL BRAND ENGINE NODE */}
                <div className="relative flex flex-col items-center justify-center z-20">
                  <div className="relative flex h-56 w-56 items-center justify-center rounded-full border-4 border-brand-navy bg-gradient-to-br from-brand-navy to-slate-900 text-white shadow-2xl ring-8 ring-brand-terracotta/20">
                    
                    {/* Inner Decorative Glowing Rings */}
                    <div className="absolute inset-3 rounded-full border border-white/15" />
                    <div className="absolute inset-6 rounded-full border border-brand-terracotta/40" />

                    {/* Center Icon & Branding */}
                    <div className="flex flex-col items-center text-center px-4">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-terracotta text-white shadow-xl mb-2">
                        <Workflow className="h-8 w-8" />
                      </div>
                      <span className="text-xs font-black uppercase tracking-widest text-brand-terracotta">
                        SoftClinch Core
                      </span>
                      <h3 className="text-lg font-bold font-display text-white mt-0.5 leading-tight">
                        Connected Commerce Framework
                      </h3>
                    </div>
                  </div>
                </div>

                {/* RIGHT COLUMN: 3 SURROUNDING FEATURE NODES */}
                <div className="space-y-8 relative z-20">
                  {/* NODE 4: Marketing Channels */}
                  <div className="group rounded-2xl border-2 border-brand-navy bg-white p-5 shadow-lg transition-all duration-300 hover:translate-x-1 hover:border-brand-terracotta">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-navy text-white shadow-md group-hover:bg-brand-terracotta transition-colors">
                        <Zap className="h-6 w-6" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-slate-900 font-display">Marketing Channels</h4>
                        <p className="text-sm font-medium text-slate-500 mt-0.5">Meta Ads, Google Ads & acquisition funnel.</p>
                      </div>
                    </div>
                  </div>

                  {/* NODE 5: Communication Automation */}
                  <div className="group rounded-2xl border-2 border-brand-terracotta bg-brand-terracotta p-5 text-white shadow-xl transition-all duration-300 hover:translate-x-1">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-navy text-white shadow-md">
                        <MessageSquare className="h-6 w-6 text-brand-terracotta" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-white font-display">Communication Automation</h4>
                        <p className="text-sm font-medium text-orange-100 mt-0.5">Inaiwazhi WhatsApp AI & customer support.</p>
                      </div>
                    </div>
                  </div>

                  {/* NODE 6: Analytics & Operations */}
                  <div className="group rounded-2xl border-2 border-brand-navy bg-white p-5 shadow-lg transition-all duration-300 hover:translate-x-1 hover:border-brand-terracotta">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-navy text-white shadow-md group-hover:bg-brand-terracotta transition-colors">
                        <TrendingUp className="h-6 w-6" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-slate-900 font-display">Analytics & Operations</h4>
                        <p className="text-sm font-medium text-slate-500 mt-0.5">Performance tracking, SOPs & team handovers.</p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* MOBILE & TABLET FALLBACK LIST (sm & md screens) */}
            <div className="lg:hidden space-y-6">
              {/* Mini Center Focal Badge for Mobile/Tablet */}
              <div className="flex flex-col items-center justify-center text-center p-6 rounded-3xl bg-brand-navy text-white shadow-xl border-2 border-brand-terracotta mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-terracotta text-white mb-2">
                  <Workflow className="h-6 w-6" />
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest text-brand-terracotta">SoftClinch Core</span>
                <h4 className="text-sm font-bold text-white">Connected Commerce Framework</h4>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { title: "Ecommerce Technology", desc: "Platform stability, speed & catalog scalability.", icon: Cpu },
                  { title: "Customer Experience", desc: "Conversion pathways, UI/UX & customer checkout.", icon: ShoppingBag },
                  { title: "Product Systems", desc: "Catalog structuring, inventory & feeds.", icon: Store },
                  { title: "Marketing Channels", desc: "Meta Ads, Google Ads & acquisition funnel.", icon: Zap },
                  { title: "Communication Automation", desc: "Inaiwazhi WhatsApp AI & customer support.", icon: MessageSquare },
                  { title: "Analytics & Operations", desc: "Performance tracking, SOPs & team handovers.", icon: TrendingUp },
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm flex items-start gap-4 hover:border-brand-navy transition-all">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-navy text-white font-bold">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <span className="text-[10px] font-black text-brand-terracotta uppercase tracking-wider">Pillar 0{index + 1}</span>
                        <h4 className="text-sm font-bold text-slate-900 leading-snug">{item.title}</h4>
                        <p className="mt-1 text-xs font-medium text-slate-600 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 7: Who This Is For (ROADMAP TRACK FLOW) */}
      <section className="border-t border-slate-200/80 bg-slate-50/70 px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            title="Who This Is For"
            description="Designed for businesses that need systemic growth across technology, customer experience, and operations — Target Audience Roadmap Track"
          />

          <AudienceRoadmapTrack items={targetAudience} />
        </div>
      </section>

      <Testimonials />

      {/* FAQ SECTION */}
      <FaqSection title="Frequently Asked Questions" items={commerceEnablementFaq} includeSEO={false} />

      {/* FINAL CTA SECTION */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[3rem] bg-white p-8 shadow-2xl ring-1 ring-slate-200 sm:p-12 lg:p-16">
          <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-brand-navy to-brand-terracotta" />
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div>
              <span className="text-sm font-black uppercase tracking-[0.2em] text-brand-terracotta">
                Commerce Enablement
              </span>
              <h2 className="mt-4 text-4xl font-display font-bold leading-tight text-slate-955 sm:text-5xl lg:text-6xl">
                Your Ecommerce Growth Problem Has A System Behind It.
              </h2>
              <p className="mt-6 max-w-2xl text-lg font-medium leading-relaxed text-slate-600 sm:text-xl">
                Find the gaps. Understand the opportunities. Build a stronger commerce foundation.
              </p>
            </div>

            <div className="flex flex-col items-start lg:items-end justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2.5 rounded-2xl bg-brand-navy px-9 py-5 text-base font-bold text-white shadow-xl shadow-brand-navy/20 transition-all hover:-translate-y-1 hover:bg-brand-navy/90"
              >
                <span>Book Your Commerce Assessment</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
