"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  MessageCircle,
  Mail,
  Phone,
  Layers,
  Smartphone,
  Globe,
  Users,
  BarChart3,
  Database,
  Workflow,
  Sparkles,
  Clock,
  ShieldCheck,
  Check,
  FileSpreadsheet,
  AlertCircle,
  Lightbulb,
  ExternalLink,
  MapPin,
  RefreshCw,
  DollarSign,
  Laptop,
  Briefcase,
  Heart,
  ShoppingCart,
  Factory,
  Truck,
  GraduationCap,
  Building2,
  Rocket,
  Headphones,
  Settings,
  Zap,
  Activity,
  TrendingUp,
  Server,
  Send,
  Star,
  Quote,
  Shirt,
  ScanLine,
  Video,
  FlaskConical,
} from "lucide-react";
import ReCAPTCHA from "react-google-recaptcha";
import {
  validateContactFormData,
  type ContactFormData,
  type ContactValidationErrors,
} from "@/lib/contact-form";
import { FaqSection } from "@/components/FaqSection";
import { customDevelopmentFaq } from "@/lib/faqs";
import { CONTACT } from "@/lib/contact";
import { assetPath } from "@/lib/asset";

// Communication URLs
const WHATSAPP_LINK = `https://wa.me/919445179931?text=${encodeURIComponent(
  "Hi SoftClinch, I would like to discuss our custom software / application requirement."
)}`;
const EMAIL_LINK = `mailto:${CONTACT.email}?subject=${encodeURIComponent(
  "Custom Software Development Requirement - SoftClinch"
)}&body=${encodeURIComponent(
  "Hi SoftClinch team,\n\nI would like to discuss our custom application requirement.\n\nBusiness Name:\nLocation / City:\nWhat we are trying to solve or build:\nPhone Number:\n\nThank you."
)}`;
const PHONE_LINK = `tel:${CONTACT.phone.replace(/\s+/g, "")}`;

// 3 Hero Sections in Automatic Moving Carousel (Image + Text + 3D Bento Matrix auto-rotating together)
const heroSlides = [
  {
    id: 1,
    tag: "Custom Business Software",
    badge: "Serving Businesses Across Tamil Nadu",
    badgeIcon: MapPin,
    title: "Build Software That Fits Your Business",
    subtitle: "Every business works differently. Your software should work the same way.",
    description:
      "If your team is spending too much time on spreadsheets, repetitive work, multiple software tools, manual processes, or systems that don't fit the way your business operates, we can build a solution around your business.",
    highlight:
      "SoftClinch helps businesses across Tamil Nadu build custom applications, business software, web applications, mobile apps, CRM systems, ERP solutions, customer portals, dashboards, SaaS products, and business automation solutions.",
    taglines: [
      "✓ Built around your business",
      "✓ Designed for your team",
      "✓ Ready to grow with you",
    ],
    image: "/custom_app_dev_hero.png",
    imageAlt: "Custom Software and SaaS Platform Architecture",
    imageBadge: "Tailored Architecture Preview",
    dial: {
      value: "99.98%",
      metric: "ENGINE HEALTH & UPTIME",
      detail: "Live Production Cluster",
      degree: 285,
    },
    pipeline: {
      tag: "REAL-TIME WORKFLOW DISPATCH",
      source: "Tailored ERP & Workflows",
      target: "Role-Based Web & Mobile Apps",
      speed: "14ms Edge Latency",
    },
    nodes: ["Chennai", "Coimbatore", "Madurai", "Salem", "Tiruppur", "Hosur"],
    quickStat: "100% Tailored · Zero Subscription Lock-in",
    accentColor: "#003366",
  },
  {
    id: 2,
    tag: "Workflow Automation & CRM",
    badge: "End Spreadsheet Chaos & Disconnected Systems",
    badgeIcon: RefreshCw,
    title: "Connect Your Tools & Automate Repetitive Work",
    subtitle: "Bring important information and everyday tasks into one easy-to-use system.",
    description:
      "If your team repeatedly enters information, sends updates, creates reports, or manages scattered Excel sheets, we build automated systems that connect your CRM, ERP, SAP, WhatsApp, and databases.",
    highlight:
      "Reduce scattered files and disconnected platforms. Move data seamlessly across sales, operations, billing, and customer support with automated workflows and real-time reports.",
    taglines: [
      "✓ Automate repetitive tasks",
      "✓ Single source of business truth",
      "✓ Live dashboards & reporting",
    ],
    image: "/blog/custom-application-architecture.png",
    imageAlt: "Custom Application Architecture and Integrations",
    imageBadge: "Connected Ecosystem & Automation",
    dial: {
      value: "-85%",
      metric: "MANUAL REPETITION REDUCED",
      detail: "0% Spreadsheet Discrepancy",
      degree: 315,
    },
    pipeline: {
      tag: "BI-DIRECTIONAL DATA SYNC",
      source: "CRM, ERP & SAP Core",
      target: "WhatsApp Business API & Alerts",
      speed: "9ms Sync Pulse",
    },
    nodes: ["Salem", "Tiruppur", "Erode", "Chennai", "Coimbatore", "Vellore"],
    quickStat: "Automated Triggers · Real-Time Webhooks",
    accentColor: "#059669",
  },
  {
    id: 3,
    tag: "Modernization & High Scale",
    badge: "Statewide Tamil Nadu Delivery",
    badgeIcon: Sparkles,
    title: "From Business Idea to High-Performance Platform",
    subtitle: "Modernize existing legacy software or launch a brand-new custom platform.",
    description:
      "Whether you need a customer portal, field team mobile apps, internal operational software, or a scalable SaaS platform, we develop reliable, cloud-ready software engineered to grow with you.",
    highlight:
      "You don't need to be in Chennai to work with us. We partner with growing businesses in Coimbatore, Madurai, Salem, Tiruppur, Erode, Hosur, Vellore, and across Tamil Nadu.",
    taglines: [
      "✓ Modernize legacy systems",
      "✓ High-performance mobile apps",
      "✓ Continuous post-launch support",
    ],
    image: "/images/05-platform-upgrade.png",
    imageAlt: "Platform Upgrade and Modernization",
    imageBadge: "High-Scale Cloud Platform",
    dial: {
      value: "4K Ready",
      metric: "PERFORMANCE RATING",
      detail: "Microservices & Multi-Tenant",
      degree: 345,
    },
    pipeline: {
      tag: "HIGH-CONCURRENCY PIPELINE",
      source: "Legacy Core Migration",
      target: "Cloud Native SaaS / iOS / Android",
      speed: "6ms Edge Latency",
    },
    nodes: ["Hosur", "Madurai", "Tiruchirappalli", "Chennai", "Coimbatore", "Salem"],
    quickStat: "Enterprise Scalability · SLA-Backed Delivery",
    accentColor: "#993300",
  },
];

// Reusable 3D Tilt Card Component
function TiltCard({
  children,
  className = "",
  intensity = 10,
}: {
  children: React.ReactNode;
  className?: string;
  intensity?: number;
}) {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotX = ((y - centerY) / centerY) * -intensity;
    const rotY = ((x - centerX) / centerX) * intensity;
    setRotateX(rotX);
    setRotateY(rotY);
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      animate={{
        rotateX,
        rotateY,
        scale: isHovered ? 1.02 : 1,
      }}
      transition={{ type: "spring", stiffness: 320, damping: 25 }}
      style={{
        transformStyle: "preserve-3d",
        perspective: 1000,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Animated Radar / Telemetry Sweep Dial (Strictly Rectangular Container Integration)
function TelemetryDial({
  value,
  label,
  sub,
  degree = 280,
}: {
  value: string;
  label: string;
  sub: string;
  degree?: number;
}) {
  return (
    <div className="flex items-center gap-3.5">
      <div className="relative flex h-14 w-14 items-center justify-center flex-shrink-0">
        {/* Background Track */}
        <svg className="h-full w-full -rotate-90 transform" viewBox="0 0 48 48">
          <circle
            cx="24"
            cy="24"
            r="19"
            className="stroke-slate-800"
            strokeWidth="3.5"
            fill="none"
          />
          <circle
            cx="24"
            cy="24"
            r="19"
            className="stroke-emerald-400"
            strokeWidth="3.5"
            strokeDasharray={119.38}
            strokeDashoffset={119.38 - (119.38 * (degree / 360))}
            strokeLinecap="round"
            fill="none"
          />
        </svg>

        {/* Rotating Radar Sweep Line */}
        <div className="absolute inset-1 rounded-full border border-emerald-500/20 animate-spin [animation-duration:4s]">
          <div className="h-1/2 w-0.5 bg-gradient-to-t from-emerald-400 to-transparent mx-auto" />
        </div>

        {/* Center Value */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <span className="text-[10px] font-mono font-extrabold text-white tracking-tight">
            {value}
          </span>
        </div>
      </div>

      <div className="min-w-0">
        <div className="text-[9px] font-mono font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" />
          {label}
        </div>
        <div className="text-xs font-bold text-slate-100 truncate mt-0.5">
          {sub}
        </div>
        {/* Equalizer live sparkline bars */}
        <div className="mt-1.5 flex items-center gap-1">
          <span className="h-2 w-1 bg-emerald-400/80 rounded-full animate-pulse" />
          <span className="h-3.5 w-1 bg-emerald-400 rounded-full animate-pulse [animation-delay:150ms]" />
          <span className="h-4.5 w-1 bg-cyan-400 rounded-full animate-pulse [animation-delay:300ms]" />
          <span className="h-2.5 w-1 bg-cyan-400/80 rounded-full animate-pulse [animation-delay:450ms]" />
          <span className="h-3 w-1 bg-emerald-300 rounded-full animate-pulse [animation-delay:200ms]" />
          <span className="text-[9px] font-mono text-slate-400 ml-1">Live Waveform</span>
        </div>
      </div>
    </div>
  );
}

// 3D Bento Matrix Grid: High-density isometric bento grid with live interactive system widgets (ALL RECTANGULAR, NO SQUARES)
function HeroBentoMatrix({
  activeSlide,
}: {
  activeSlide: (typeof heroSlides)[0];
}) {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotX = ((y - centerY) / centerY) * -7;
    const rotY = ((x - centerX) / centerX) * 7;
    setRotateX(rotX);
    setRotateY(rotY);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setRotateX(0);
        setRotateY(0);
      }}
      animate={{
        rotateX,
        rotateY,
        scale: isHovered ? 1.015 : 1,
      }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
      style={{
        transformStyle: "preserve-3d",
        perspective: 1200,
      }}
      className="relative w-full max-w-[660px] mx-auto group"
    >
      {/* 3D Bento Ambient Glow Backdrop */}
      <div className="absolute -inset-3 rounded-[36px] bg-gradient-to-tr from-brand-navy/35 via-emerald-500/20 to-brand-terracotta/30 blur-3xl opacity-75 group-hover:opacity-100 transition-opacity duration-700 animate-glow-3d" />

      {/* 3D BENTO MATRIX GRID CONTAINER (All Rectangular modules - NO SQUARES) */}
      <div
        style={{ transform: "translateZ(10px)" }}
        className="relative grid grid-cols-1 md:grid-cols-2 gap-3.5 p-3.5 sm:p-4 rounded-[32px] border border-slate-800 bg-slate-950/90 backdrop-blur-2xl shadow-[0_30px_90px_rgba(0,0,0,0.35)]"
      >
        {/* Module 1: Top Hero Rectangular Showcase (Panoramic 16:9 Banner across 2 columns) */}
        <div
          style={{ transform: "translateZ(20px)" }}
          className="col-span-1 md:col-span-2 relative overflow-hidden rounded-2xl border border-slate-700/80 bg-slate-900 shadow-md group/img"
        >
          {/* Top Circuit Flow Light Line */}
          <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-emerald-400 via-cyan-400 to-brand-terracotta z-20" />

          {/* Panoramic Rectangular Image */}
          <div className="relative aspect-[16/9] w-full overflow-hidden">
            <img
              src={assetPath(activeSlide.image)}
              alt={activeSlide.imageAlt}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover/img:scale-105"
            />
            {/* Dark glass gradient bottom overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
          </div>

          {/* Top-Left Category Badge Pill */}
          <div className="absolute top-3 left-3 z-20 inline-flex items-center gap-2 rounded-full bg-slate-950/85 backdrop-blur-md px-3.5 py-1 text-xs font-bold text-white shadow-lg border border-white/20">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>{activeSlide.imageBadge}</span>
          </div>

          {/* Top-Right TN Live Node Pill */}
          <div className="absolute top-3 right-3 z-20 hidden sm:inline-flex items-center gap-1.5 rounded-full bg-slate-950/85 backdrop-blur-md px-3 py-1 text-[11px] font-mono text-emerald-300 shadow-lg border border-emerald-500/30">
            <Activity className="h-3 w-3 text-emerald-400 animate-pulse" />
            <span>TN Edge Node: Active</span>
          </div>

          {/* Bottom Title Bar inside Showcase */}
          <div className="absolute bottom-3 inset-x-3 z-20 flex items-center justify-between text-xs font-mono text-slate-200">
            <span className="inline-flex items-center gap-1.5 font-semibold text-white drop-shadow">
              <Zap className="h-3.5 w-3.5 text-cyan-400" />
              {activeSlide.quickStat}
            </span>
            <span className="hidden sm:inline-block rounded-md bg-white/10 px-2 py-0.5 text-[10px] text-slate-300">
              4K Architecture Mode
            </span>
          </div>
        </div>

        {/* Module 2: Rectangular Telemetry Dial & Waveform Gauge (Horizontal Rectangle) */}
        <div
          style={{ transform: "translateZ(30px)" }}
          className="col-span-1 rounded-2xl border border-slate-800 bg-slate-900/90 backdrop-blur-xl p-3.5 shadow-md flex items-center justify-between"
        >
          <TelemetryDial
            value={activeSlide.dial.value}
            label={activeSlide.dial.metric}
            sub={activeSlide.dial.detail}
            degree={activeSlide.dial.degree}
          />
        </div>

        {/* Module 3: Rectangular System Pipeline & Bi-Directional Flow Panel (Horizontal Rectangle) */}
        <div
          style={{ transform: "translateZ(30px)" }}
          className="col-span-1 rounded-2xl border border-slate-800 bg-slate-900/90 backdrop-blur-xl p-3.5 shadow-md flex flex-col justify-between"
        >
          <div className="flex items-center justify-between">
            <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-cyan-400">
              {activeSlide.pipeline.tag}
            </span>
            <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 rounded-full px-2 py-0.5">
              {activeSlide.pipeline.speed}
            </span>
          </div>

          {/* Visual Data Pipeline Flow */}
          <div className="my-2 flex items-center justify-between gap-1 text-[11px] font-semibold text-slate-200">
            <div className="truncate rounded-lg bg-slate-800/80 px-2 py-1 border border-slate-700/60 max-w-[45%]">
              {activeSlide.pipeline.source}
            </div>
            <div className="flex items-center text-cyan-400 animate-pulse px-1">
              <span className="h-1 w-1 rounded-full bg-cyan-400 mx-0.5" />
              <ArrowRight className="h-3 w-3" />
            </div>
            <div className="truncate rounded-lg bg-slate-800/80 px-2 py-1 border border-slate-700/60 max-w-[45%] text-emerald-300">
              {activeSlide.pipeline.target}
            </div>
          </div>

          <div className="text-[10px] text-slate-400 flex items-center justify-between font-mono">
            <span>Bi-Directional API Engine</span>
            <span className="text-emerald-400 font-bold">100% In-Sync</span>
          </div>
        </div>

        {/* Module 4: Rectangular Regional Tamil Nadu Network & Action Bar (Full width across 2 columns) */}
        <div
          style={{ transform: "translateZ(25px)" }}
          className="col-span-1 md:col-span-2 rounded-2xl border border-slate-800/90 bg-gradient-to-r from-slate-900 via-slate-900/95 to-slate-900 p-3 shadow-md flex flex-wrap items-center justify-between gap-2"
        >
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-brand-terracotta flex-shrink-0" />
            <span className="text-xs font-bold text-white">TN Delivery Grid:</span>
            <div className="flex flex-wrap items-center gap-1.5">
              {activeSlide.nodes.map((node) => (
                <span
                  key={node}
                  className="rounded-md bg-slate-800/90 border border-slate-700 px-2 py-0.5 text-[10px] font-mono text-slate-300 flex items-center gap-1"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  {node}
                </span>
              ))}
            </div>
          </div>

          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 rounded-xl bg-emerald-500/20 border border-emerald-500/40 px-3 py-1 text-xs font-semibold text-emerald-300 hover:bg-emerald-500/30 transition-colors ml-auto"
          >
            <MessageCircle className="h-3.5 w-3.5 text-emerald-400" />
            <span>Chat On WhatsApp</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
}

// 3D Visual Image Panel for body sections
function TiltImagePanel({
  src,
  alt,
  badgeText,
  floatingLabel1,
  floatingLabel2,
  className = "",
}: {
  src: string;
  alt: string;
  badgeText?: string;
  floatingLabel1?: { text: string; sub?: string; icon?: React.ReactNode };
  floatingLabel2?: { text: string; sub?: string; icon?: React.ReactNode };
  className?: string;
}) {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotX = ((y - centerY) / centerY) * -8;
    const rotY = ((x - centerX) / centerX) * 8;
    setRotateX(rotX);
    setRotateY(rotY);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setRotateX(0);
        setRotateY(0);
      }}
      animate={{
        rotateX,
        rotateY,
        scale: isHovered ? 1.015 : 1,
      }}
      transition={{ type: "spring", stiffness: 280, damping: 24 }}
      style={{
        transformStyle: "preserve-3d",
        perspective: 1200,
      }}
      className={`relative group mx-auto ${className}`}
    >
      <div className="absolute -inset-2 rounded-[34px] bg-gradient-to-r from-brand-navy/20 via-brand-terracotta/15 to-emerald-500/20 blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-500" />

      <div
        style={{ transform: "translateZ(10px)" }}
        className="relative overflow-hidden rounded-[28px] border border-slate-200/90 bg-white shadow-2xl transition-all flex items-center justify-center mx-auto"
      >
        <img
          src={src}
          alt={alt}
          className="w-full h-auto object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105 mx-auto block"
        />

        {badgeText && (
          <div
            style={{ transform: "translateZ(25px)" }}
            className="absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-slate-950/85 backdrop-blur-md px-3.5 py-1.5 text-xs font-semibold text-white shadow-lg border border-white/15"
          >
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            {badgeText}
          </div>
        )}
      </div>

      {floatingLabel1 && (
        <div
          style={{ transform: "translateZ(38px)" }}
          className="absolute -bottom-4 -left-4 sm:left-4 z-20 hidden sm:flex items-center gap-3 rounded-2xl border border-white/40 bg-white/95 backdrop-blur-md p-3.5 shadow-[0_20px_40px_rgba(0,0,0,0.14)] animate-float-3d"
        >
          {floatingLabel1.icon && (
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-navy text-white flex-shrink-0">
              {floatingLabel1.icon}
            </div>
          )}
          <div>
            <div className="text-xs font-bold text-slate-900">{floatingLabel1.text}</div>
            {floatingLabel1.sub && (
              <div className="text-[11px] text-slate-500">{floatingLabel1.sub}</div>
            )}
          </div>
        </div>
      )}

      {floatingLabel2 && (
        <div
          style={{ transform: "translateZ(38px)" }}
          className="absolute -top-4 -right-4 sm:right-4 z-20 hidden sm:flex items-center gap-3 rounded-2xl border border-white/40 bg-white/95 backdrop-blur-md p-3.5 shadow-[0_20px_40px_rgba(0,0,0,0.14)] animate-float-3d-reverse"
        >
          {floatingLabel2.icon && (
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-terracotta text-white flex-shrink-0">
              {floatingLabel2.icon}
            </div>
          )}
          <div>
            <div className="text-xs font-bold text-slate-900">{floatingLabel2.text}</div>
            {floatingLabel2.sub && (
              <div className="text-[11px] text-slate-500">{floatingLabel2.sub}</div>
            )}
          </div>
        </div>
      )}
    </motion.div>
  );
}

const coreOfferings = [
  {
    title: "Custom Business Software",
    description:
      "Software designed around your specific business processes, users, departments, and requirements.",
    icon: Laptop,
    tag: "Tailored Systems",
  },
  {
    title: "Web Applications",
    description:
      "Modern web-based applications that your team or customers can access from any browser.",
    icon: Globe,
    tag: "Browser Accessible",
  },
  {
    title: "Mobile Applications",
    description:
      "Android and iOS applications for customers, employees, field teams, delivery teams, sales teams, and other business requirements.",
    icon: Smartphone,
    tag: "Android & iOS",
  },
  {
    title: "CRM Systems",
    description:
      "Manage leads, customers, follow-ups, sales activities, communication, and customer information in one place.",
    icon: Users,
    tag: "Customer & Sales",
  },
  {
    title: "ERP & Management Systems",
    description:
      "Connect different parts of your business such as operations, inventory, sales, employees, finance, and reporting.",
    icon: Layers,
    tag: "End-to-End Operations",
  },
  {
    title: "Business Automation",
    description:
      "Reduce manual work by automating repetitive tasks, notifications, approvals, data movement, and business processes.",
    icon: Workflow,
    tag: "Zero Manual Delays",
  },
  {
    title: "SaaS Products",
    description:
      "Turn your business idea into a scalable software product that can serve multiple customers or businesses.",
    icon: Sparkles,
    tag: "Scalable Products",
  },
];

const valuePillars = [
  {
    title: "Reduce Repetitive Work",
    description: "Automate tasks that your team performs again and again.",
    icon: RefreshCw,
  },
  {
    title: "Save Your Team's Time",
    description:
      "Bring important information and everyday tasks into one easy-to-use system.",
    icon: Clock,
  },
  {
    title: "Manage Customers Better",
    description:
      "Keep customer information, enquiries, follow-ups, orders, and interactions organized.",
    icon: Users,
  },
  {
    title: "Keep Business Information in One Place",
    description:
      "Reduce scattered spreadsheets, files, messages, and disconnected systems.",
    icon: Database,
  },
  {
    title: "Improve Business Operations",
    description: "Create software that follows the way your team actually works.",
    icon: Settings,
  },
  {
    title: "Connect Your Existing Tools",
    description:
      "Bring different systems together so information can move between them more easily.",
    icon: Workflow,
  },
  {
    title: "Get Better Reports",
    description: "Turn your business data into useful dashboards and reports.",
    icon: BarChart3,
  },
  {
    title: "Improve Customer Experience",
    description:
      "Give customers easier ways to place orders, track requests, access information, or communicate with your team.",
    icon: Heart,
  },
];

const problemAreas = [
  {
    title: "Still Using Spreadsheets?",
    description:
      "If your team depends heavily on Excel or Google Sheets for daily operations, we can build a system that makes the process easier to manage.",
    icon: FileSpreadsheet,
    badge: "Spreadsheet Overload",
  },
  {
    title: "Too Much Manual Work?",
    description:
      "If your team repeatedly enters information, sends updates, creates reports, or performs the same tasks manually, automation can reduce unnecessary work.",
    icon: Clock,
    badge: "Manual Bottlenecks",
  },
  {
    title: "Using Too Many Software Tools?",
    description:
      "If information is spread across different platforms, we can help connect your systems and bring important processes together.",
    icon: Layers,
    badge: "Fragmented Tools",
  },
  {
    title: "Can't Find the Right Software?",
    description:
      "If existing software doesn't match your business requirements, custom development gives you more flexibility.",
    icon: AlertCircle,
    badge: "Off-the-Shelf Limitations",
  },
  {
    title: "Have a New Business Idea?",
    description:
      "Turn your idea into a working web application, mobile app, SaaS product, or business platform.",
    icon: Lightbulb,
    badge: "New Ventures & MVPs",
  },
  {
    title: "Need a Customer Portal?",
    description:
      "Give your customers a simple way to access information, submit requests, track orders, manage accounts, or communicate with your business.",
    icon: Globe,
    badge: "Self-Service Portals",
  },
];

const functionalAreas = [
  {
    name: "Sales & Customer Management",
    icon: Users,
    items: [
      "Lead management",
      "Customer records",
      "Enquiries",
      "Follow-ups",
      "Sales tracking",
      "Customer communication",
      "Customer portals",
    ],
  },
  {
    name: "Inventory & Operations",
    icon: Layers,
    items: [
      "Stock management",
      "Order management",
      "Purchase processes",
      "Delivery tracking",
      "Production workflows",
      "Operational dashboards",
    ],
  },
  {
    name: "Employee & Internal Management",
    icon: Briefcase,
    items: [
      "Employee management",
      "Task management",
      "Approval workflows",
      "Internal requests",
      "Attendance-related systems",
      "Team dashboards",
    ],
  },
  {
    name: "Customer Service",
    icon: Headphones,
    items: [
      "Service requests",
      "Support management",
      "Ticket systems",
      "Notifications",
      "Customer communication",
      "Request tracking",
    ],
  },
  {
    name: "Reports & Dashboards",
    icon: BarChart3,
    items: [
      "Business dashboards",
      "Sales reports",
      "Performance reports",
      "Operational reports",
      "Custom analytics",
      "Management reporting",
    ],
  },
  {
    name: "Business Automation",
    icon: Workflow,
    items: [
      "Automated notifications",
      "Approval processes",
      "Data movement",
      "Lead assignment",
      "Follow-up automation",
      "Workflow-based actions",
    ],
  },
];

const integrationsList = [
  "CRM systems",
  "ERP systems",
  "SAP",
  "Payment systems",
  "WhatsApp Business",
  "Marketing platforms",
  "Ecommerce systems",
  "Databases",
  "Internal business software",
  "Third-party APIs",
  "Web-based services",
];

const tamilNaduCities = [
  "Chennai",
  "Coimbatore",
  "Madurai",
  "Tiruchirappalli",
  "Salem",
  "Tiruppur",
  "Erode",
  "Hosur",
  "Vellore",
];

const tamilNaduRequirements = [
  "Custom business software",
  "Web applications",
  "Mobile applications",
  "CRM systems",
  "ERP solutions",
  "Business automation",
  "SaaS products",
  "Customer portals",
  "Internal management systems",
  "Custom dashboards",
  "Application integrations",
];

const industrySectors = [
  {
    name: "Manufacturing",
    description:
      "Production, inventory, operations, employee workflows, reporting, and business management.",
    icon: Factory,
  },
  {
    name: "Logistics & Supply Chain",
    description:
      "Orders, tracking, operations, communication, delivery processes, and reporting.",
    icon: Truck,
  },
  {
    name: "Retail & Ecommerce",
    description:
      "Orders, customers, inventory, payments, sales, and business management.",
    icon: ShoppingCart,
  },
  {
    name: "Education",
    description:
      "Student management, admissions, communication, portals, reporting, and internal systems.",
    icon: GraduationCap,
  },
  {
    name: "Healthcare",
    description:
      "Patient-related workflows, appointments, records, communication, and management systems based on business requirements.",
    icon: Heart,
  },
  {
    name: "Professional Services",
    description:
      "Customer management, projects, tasks, billing workflows, communication, and reporting.",
    icon: Briefcase,
  },
  {
    name: "Real Estate",
    description:
      "Lead management, property information, customer communication, follow-ups, and reporting.",
    icon: Building2,
  },
  {
    name: "Startups & Growing Businesses",
    description:
      "MVPs, SaaS products, mobile apps, web platforms, and scalable business applications.",
    icon: Rocket,
  },
];

const processSteps = [
  {
    number: "01",
    title: "Tell Us About Your Business",
    description:
      "Explain what your business does, how your team currently works, and what you want to improve.",
  },
  {
    number: "02",
    title: "Understand the Requirement",
    description:
      "We understand your workflow, users, challenges, features, and business goals.",
  },
  {
    number: "03",
    title: "Plan the Solution",
    description:
      "We define the application structure, important features, integrations, and development approach.",
  },
  {
    number: "04",
    title: "Design the Experience",
    description:
      "We plan a simple and practical experience for the people who will actually use the application.",
  },
  {
    number: "05",
    title: "Build the Application",
    description:
      "Our team develops the required web application, mobile app, software, integrations, and functionality.",
  },
  {
    number: "06",
    title: "Test & Launch",
    description:
      "We test the application, resolve issues, prepare it for launch, and help move it into use.",
  },
  {
    number: "07",
    title: "Support & Improve",
    description:
      "After launch, the application can continue to be improved as your business grows and requirements change.",
  },
];

const existingAppImprovements = [
  "New features",
  "Application redesign",
  "Mobile application development",
  "Web application improvements",
  "Business automation",
  "API integrations",
  "Dashboards and reports",
  "Customer portals",
  "Performance improvements",
  "Application maintenance",
  "Existing system improvements",
  "Connecting different systems",
];

const whySoftClinchPoints = [
  {
    title: "We Start With Your Business",
    description:
      "We first understand the problem instead of immediately talking about technology.",
    icon: TargetIcon,
  },
  {
    title: "Built Around Your Requirements",
    description:
      "Your application is designed around your business process, users, and goals.",
    icon: Settings,
  },
  {
    title: "Easy for Your Team to Use",
    description:
      "Good software should make work easier, not make your team learn unnecessary complexity.",
    icon: CheckCircle2,
  },
  {
    title: "Clear Communication",
    description:
      "We keep the development process understandable and communicate around requirements, progress, and next steps.",
    icon: MessageCircle,
  },
  {
    title: "Ready to Grow",
    description:
      "Your software can be developed with future improvements, new users, features, and integrations in mind.",
    icon: Rocket,
  },
  {
    title: "Continued Support",
    description:
      "Software doesn't end at launch. We can continue to help with improvements, maintenance, and new requirements.",
    icon: ShieldCheck,
  },
];

function TargetIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-6 w-6"
      {...props}
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  );
}

const costFactors = [
  "Number of features",
  "Number of users",
  "Web or mobile requirements",
  "Application complexity",
  "Integrations",
  "Database requirements",
  "Admin and management features",
  "Automation requirements",
  "Security requirements",
  "Development and support requirements",
];

const costQuestions = [
  "What do you want to build?",
  "Who will use it?",
  "What problem should it solve?",
  "What should the software make easier?",
  "What systems need to connect with it?",
];

const relatedServiceLinks = [
  {
    title: "Inaiwazhi WhatsApp Automation",
    description: "Official WhatsApp Business API, chatbot automation & CRM synchronization.",
    href: "/inaiwazhi-whatsapp-automation",
  },
  {
    title: "Custom Commerce Development",
    description: "Tailored eCommerce platforms, order workflows, and multi-channel fulfillment.",
    href: "/custom-commerce-development",
  },
  {
    title: "SAP Consulting Services",
    description: "Enterprise SAP implementations, module customization, and process integration.",
    href: "/services/sap-consulting",
  },
  {
    title: "SAP AMS Support",
    description: "SLA-driven maintenance, operational support, and optimization for SAP landscapes.",
    href: "/sap-ams-support",
  },
  {
    title: "AI-Powered Business Systems",
    description: "Deploy intelligent automation, AI agents, and predictive business dashboards.",
    href: "/services/ai-powered-business-systems",
  },
  {
    title: "Digital Marketing & Growth",
    description: "Full-funnel digital marketing, search visibility, and lead generation systems.",
    href: "/digital-marketing",
  },
];

type CustomAppTestimonial = {
  id: string;
  businessTitle: string;
  category: string;
  tag: string;
  icon: React.ComponentType<{ className?: string }>;
  accentGradient: string;
  badgeBg: string;
  location: string;
  rating: number;
  highlightMetric: string;
  problem: string;
  solution: string;
  quote: string;
  techStack: string[];
};

const customAppTestimonials: CustomAppTestimonial[] = [
  {
    id: "womens-wear",
    businessTitle: "Women's Wear & Ethnic Fashion Retail",
    category: "Fashion, Apparel & Boutique Manufacturing",
    tag: "Design Matrix & Multi-Store Inventory",
    icon: Shirt,
    accentGradient: "from-fuchsia-500/10 via-fuchsia-500/5 to-transparent border-fuchsia-500/30 text-fuchsia-600",
    badgeBg: "bg-fuchsia-50 text-fuchsia-700 border-fuchsia-200",
    location: "Tirupur & Chennai, Tamil Nadu",
    rating: 5,
    highlightMetric: "92% Less Stock Outages · 4hr Fast Reorder Cycle",
    problem:
      "Off-the-shelf software failed to handle our women's ethnic wear catalog—with complex combinations of 6 sizes (XS–3XL), 45+ embroidery designs, seasonal dyes, and fabric lots across 3 manufacturing units and 12 boutique outlets. We faced frequent stockouts on popular lines and overproduced slow-moving styles.",
    solution:
      "SoftClinch developed a bespoke fashion ERP and mobile B2B ordering catalog. Boutique retail store managers order restocks with a visual matrix on mobile, factory cutters receive prioritized batch orders automatically, and barcoded SKU tracking ensures zero dispatch errors.",
    quote:
      "Standard retail software couldn't handle our multi-size, multi-color women's wear production matrix. SoftClinch created a custom app tailored for our fashion line that lets boutique buyers order on mobile and keeps our factory inventory 100% accurate.",
    techStack: ["React Native Mobile App", "Cloud Inventory Matrix", "B2B Boutique Portal", "Automated Barcode Tagging"],
  },
  {
    id: "electrical-wholesale",
    businessTitle: "Electrical Wholesale & Showroom Network",
    category: "Electrical Wholesale & B2B Distribution",
    tag: "Tally ERP & WhatsApp Integrated",
    icon: Zap,
    accentGradient: "from-amber-500/10 via-amber-500/5 to-transparent border-amber-500/30 text-amber-600",
    badgeBg: "bg-amber-50 text-amber-700 border-amber-200",
    location: "Chennai & Coimbatore, Tamil Nadu",
    rating: 5,
    highlightMetric: "80% Less Tally Re-work · Instant WhatsApp Invoicing",
    problem:
      "Our showroom counter was bogged down by manual paper order slips, billing queues, and staff spending 2+ hours every evening manually re-keying 150+ sales into Tally. Field contractors called non-stop to verify stock availability, rates, and dispatch status.",
    solution:
      "SoftClinch engineered a custom tablet & mobile ordering application connected directly to our Tally ERP database. Counter staff enter orders on mobile, inventory updates in Tally instantly, and customers automatically receive detailed PDF tax invoices and dispatch alerts directly on WhatsApp.",
    quote:
      "SoftClinch created a custom app that reduced our daily Tally paperwork by over 80%. Everything connects right on mobile—from counter staff to warehouse runners—and our contractors get instant price quotes and bills on WhatsApp automatically.",
    techStack: ["Next.js", "Tablet Counter UI", "Tally ERP Connector", "WhatsApp Cloud API", "PostgreSQL"],
  },
  {
    id: "tyre-republic",
    businessTitle: "Tyre Republic & Commercial Retreading",
    category: "Automotive & Fleet Tyre Services",
    tag: "Tyre Tracking & Plant Workflow",
    icon: ScanLine,
    accentGradient: "from-blue-500/10 via-blue-500/5 to-transparent border-blue-500/30 text-blue-600",
    badgeBg: "bg-blue-50 text-blue-700 border-blue-200",
    location: "Salem & Madurai, Tamil Nadu",
    rating: 5,
    highlightMetric: "0% Missing Tyres · 100% Casing Traceability",
    problem:
      "In our commercial tyre retreading plants, tracking hundreds of heavy truck and bus tyre casings through inspection, buffing, tread building, and vulcanizing chambers was chaos. Casings would get swapped or go missing, causing severe customer billing disputes and internal team friction.",
    solution:
      "SoftClinch developed a barcode and serial-tracking custom web and mobile app for our workshop floor. Floor technicians scan the casing at each retreading stage, giving our internal team real-time visibility on casing ownership, stage progress, and alerts if any tyre goes missing or is stalled.",
    quote:
      "Identifying missing tyres and keeping our internal team aligned used to be our biggest daily battle. SoftClinch's custom scanning app tracks every tyre casing through all retreading stages, eliminates lost tyre claims, and keeps workshop teams and fleet clients completely in sync.",
    techStack: ["Mobile Barcode Scanner", "Real-Time Plant Dashboard", "Internal Team Push Alerts", "Audit Trail DB"],
  },
  {
    id: "chemical-company",
    businessTitle: "Specialty Chemical & Formulation Plant",
    category: "Chemical Manufacturing & Formulations",
    tag: "Formulation Locks & QC Compliance",
    icon: FlaskConical,
    accentGradient: "from-emerald-500/10 via-emerald-500/5 to-transparent border-emerald-500/30 text-emerald-600",
    badgeBg: "bg-emerald-50 text-emerald-700 border-emerald-200",
    location: "Ranipet & Guindy Industrial Estate, Chennai",
    rating: 5,
    highlightMetric: "Zero Batch Scrap · 100% Regulatory QC Compliance",
    problem:
      "In specialty chemical formulation, a 0.5% measuring error in reactor ingredients ruins an entire 2,500-liter batch. Operators were logging recipe additions and viscosity readings on manual clipboards, which delayed export clearances and risked costly batch rejections during audit inspections.",
    solution:
      "SoftClinch engineered a strict digital batch manufacturing and quality control (QC) compliance application. Formulation recipe ratios are digitally locked, raw material purity is validated before weighing, and tamper-proof Certificates of Analysis (COA) are generated automatically for customer dispatches.",
    quote:
      "In chemical manufacturing, one ratio mistake costs lakhs in ruined raw materials. SoftClinch's custom application digitized our complete batch lifecycle and QC verification, saving us lakhs in scrapped batches and making our regulatory compliance effortless.",
    techStack: ["Next.js Enterprise", "Automated COA Engine", "Batch Formulation Locks", "Encrypted Audit Logs"],
  },
  {
    id: "news-channel",
    businessTitle: "24x7 Digital News & Media Broadcast",
    category: "Broadcast Media & Journalism",
    tag: "Automated YouTube Video Pipeline",
    icon: Video,
    accentGradient: "from-rose-500/10 via-rose-500/5 to-transparent border-rose-500/30 text-rose-600",
    badgeBg: "bg-rose-50 text-rose-700 border-rose-200",
    location: "Chennai, Tamil Nadu",
    rating: 5,
    highlightMetric: "90s Breaking News Speed · 100% Automated YouTube Upload",
    problem:
      "Breaking news demands unmatched speed. When video editors finished cutting breaking news clips, the manual workflow of exporting, manually logging into YouTube Studio, re-typing bilingual SEO tags, uploading thumbnails, and posting to our website CMS took 20 to 30 minutes—costing us early viewership.",
    solution:
      "SoftClinch engineered a custom automated newsroom media pipeline. The moment video editors finish and save a news story in the edit suite, our custom application automatically ingests the media, formats metadata, publishes directly to our YouTube channel, updates our website ticker, and pushes breaking news notifications to our mobile app subscribers.",
    quote:
      "In broadcast journalism, every second counts. SoftClinch connected our editing desks directly to our YouTube channels. Our custom application automatically publishes news clips the instant our editors finish cutting them, completely eliminating manual uploading.",
    techStack: ["YouTube Data API v3", "Automated Video Transcoding", "Webhooks Pipeline", "Push Notification Engine"],
  },
];

const INITIAL_CUSTOM_APP_FORM_DATA: ContactFormData = {
  name: "",
  company: "",
  email: "",
  phone: "",
  service: "Custom Application Development",
  message: "",
};

type ContactApiResponse = {
  success?: boolean;
  error?: string;
  fieldErrors?: ContactValidationErrors;
};

function CustomAppContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [captchaToken, setCaptchaToken] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<ContactValidationErrors>({});
  const [formData, setFormData] = useState<ContactFormData>(INITIAL_CUSTOM_APP_FORM_DATA);
  const [website, setWebsite] = useState("");
  const [formStartedAt, setFormStartedAt] = useState<number>(Date.now());

  useEffect(() => {
    setFormStartedAt(Date.now());
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((current) => ({ ...current, [name]: value }));
    setFieldErrors((current) => ({ ...current, [name]: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const validation = validateContactFormData(formData);
    if (!validation.isValid) {
      setFieldErrors(validation.errors);
      return;
    }

    const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
    if (siteKey && !captchaToken) {
      setError("Please complete the reCAPTCHA checkbox before submitting.");
      return;
    }

    setIsSubmitting(true);
    setFieldErrors({});

    try {
      const response = await fetch("/api/contact/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...validation.data,
          captchaToken,
          website,
          formStartedAt,
        }),
      });

      const contentType = response.headers.get("content-type") || "";
      const data = contentType.includes("application/json")
        ? ((await response.json()) as ContactApiResponse)
        : {
            error: `Unexpected server response (${response.status}).`,
          };

      if (!response.ok) {
        if (data.fieldErrors) {
          setFieldErrors(data.fieldErrors);
        }
        throw new Error(data.error || "Unable to submit your requirement right now.");
      }

      setSubmitted(true);
      setFormData(INITIAL_CUSTOM_APP_FORM_DATA);
      setCaptchaToken("");
      setWebsite("");
      setFormStartedAt(Date.now());
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Unable to submit your requirement right now."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClassName =
    "w-full rounded-xl border px-4 py-3 text-sm text-slate-900 transition focus:outline-none focus:ring-2 focus:ring-brand-navy/20";

  const getInputStateClassName = (fieldError?: string) =>
    fieldError
      ? "border-red-300 bg-red-50/90 focus:border-red-500"
      : "border-slate-200 bg-slate-50 focus:border-brand-navy focus:bg-white";

  if (submitted) {
    return (
      <div className="rounded-3xl border border-white/30 bg-white p-8 sm:p-10 shadow-2xl text-center">
        <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-600 shadow-sm">
          <Send className="h-8 w-8" />
        </div>
        <span className="inline-block rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700 border border-emerald-200 mb-2">
          Requirement Received Successfully
        </span>
        <h3 className="mb-2 text-2xl font-display font-bold text-slate-900">
          Thank You! Your Request Has Been Received.
        </h3>
        <p className="mx-auto max-w-md text-sm leading-relaxed text-slate-600">
          Thank you for submitting your project requirement. Your details were received successfully, a confirmation email has been dispatched to your inbox, and our technical architecture lead will follow up within 24 hours.
        </p>

        <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-left text-xs text-slate-600 max-w-md mx-auto space-y-1.5">
          <div className="font-bold text-slate-900">Next Steps:</div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 flex-shrink-0" />
            <span>Technical architecture review by senior developers</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 flex-shrink-0" />
            <span>Feasibility check & rough timeline estimation</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 flex-shrink-0" />
            <span>Direct consultation call or proposal discussion</span>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-6 inline-flex items-center text-xs font-bold text-brand-navy underline hover:text-brand-terracotta transition"
        >
          Submit another project requirement
        </button>
      </div>
    );
  }

  return (
    <div className="rounded-3xl border border-white/30 bg-white p-6 sm:p-8 lg:p-9 shadow-2xl">
      <div className="mb-6">
        <div className="inline-flex items-center gap-1.5 rounded-full bg-brand-navy/10 px-3 py-1 text-xs font-bold text-brand-navy">
          <Sparkles className="h-3.5 w-3.5 text-brand-navy" />
          <span>Requirement Intake · Direct Engineer Access</span>
        </div>
        <h3 className="mt-3 text-2xl font-bold font-display text-slate-950 sm:text-3xl">
          Discuss Your Custom Software
        </h3>
        <p className="mt-1.5 text-sm text-slate-600 leading-relaxed">
          Provide your project requirements below. Our engineering team reviews all submissions and replies within 24 hours.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4" noValidate>
        {/* Anti-spam Honeypot */}
        <input
          type="text"
          name="website"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
          tabIndex={-1}
          autoComplete="off"
          className="hidden"
          aria-hidden="true"
        />

        {/* Row 1: Name & Company */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label
              htmlFor="custom-app-name"
              className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-slate-700"
            >
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              id="custom-app-name"
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleChange}
              className={`${inputClassName} ${getInputStateClassName(fieldErrors.name)}`}
              placeholder="e.g. John Doe"
              aria-invalid={Boolean(fieldErrors.name)}
              aria-describedby={fieldErrors.name ? "custom-app-name-error" : undefined}
            />
            {fieldErrors.name && (
              <p id="custom-app-name-error" className="mt-1 text-xs text-red-600 font-medium">
                {fieldErrors.name}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="custom-app-company"
              className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-slate-700"
            >
              Company / Business <span className="text-red-500">*</span>
            </label>
            <input
              id="custom-app-company"
              name="company"
              type="text"
              required
              value={formData.company}
              onChange={handleChange}
              className={`${inputClassName} ${getInputStateClassName(fieldErrors.company)}`}
              placeholder="e.g. Acme Industries Ltd"
              aria-invalid={Boolean(fieldErrors.company)}
              aria-describedby={fieldErrors.company ? "custom-app-company-error" : undefined}
            />
            {fieldErrors.company && (
              <p id="custom-app-company-error" className="mt-1 text-xs text-red-600 font-medium">
                {fieldErrors.company}
              </p>
            )}
          </div>
        </div>

        {/* Row 2: Email & Phone */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label
              htmlFor="custom-app-email"
              className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-slate-700"
            >
              Work Email <span className="text-red-500">*</span>
            </label>
            <input
              id="custom-app-email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              className={`${inputClassName} ${getInputStateClassName(fieldErrors.email)}`}
              placeholder="name@company.com"
              aria-invalid={Boolean(fieldErrors.email)}
              aria-describedby={fieldErrors.email ? "custom-app-email-error" : undefined}
            />
            {fieldErrors.email && (
              <p id="custom-app-email-error" className="mt-1 text-xs text-red-600 font-medium">
                {fieldErrors.email}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="custom-app-phone"
              className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-slate-700"
            >
              Phone / WhatsApp <span className="text-red-500">*</span>
            </label>
            <input
              id="custom-app-phone"
              name="phone"
              type="tel"
              required
              value={formData.phone}
              onChange={handleChange}
              className={`${inputClassName} ${getInputStateClassName(fieldErrors.phone)}`}
              placeholder="+91 98765 43210"
              aria-invalid={Boolean(fieldErrors.phone)}
              aria-describedby={fieldErrors.phone ? "custom-app-phone-error" : undefined}
            />
            {fieldErrors.phone && (
              <p id="custom-app-phone-error" className="mt-1 text-xs text-red-600 font-medium">
                {fieldErrors.phone}
              </p>
            )}
          </div>
        </div>

        {/* Row 3: Service Selection */}
        <div>
          <label
            htmlFor="custom-app-service"
            className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-slate-700"
          >
            Software Type / Requirement Area
          </label>
          <select
            id="custom-app-service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className={`${inputClassName} ${getInputStateClassName(fieldErrors.service)} cursor-pointer`}
          >
            <option value="Custom Application Development">Custom Application Development (Web / Cloud)</option>
            <option value="Enterprise Web & SaaS Platform">Enterprise Web & SaaS Platform</option>
            <option value="Mobile App Development (iOS & Android)">Mobile App Development (iOS & Android)</option>
            <option value="Internal Operations / ERP / CRM Software">Internal Operations / Custom ERP / CRM Software</option>
            <option value="Workflow Automation & API Integration">Workflow Automation & System / API Integration</option>
            <option value="Legacy Software Modernization">Legacy Software Modernization & Cloud Migration</option>
            <option value="Other Custom Software Project">Other / Not Sure Yet (Need Architecture Guidance)</option>
          </select>
          {fieldErrors.service && (
            <p className="mt-1 text-xs text-red-600 font-medium">{fieldErrors.service}</p>
          )}
        </div>

        {/* Row 4: Message / Requirement Description */}
        <div>
          <label
            htmlFor="custom-app-message"
            className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-slate-700"
          >
            Tell Us About Your Project & Challenge <span className="text-red-500">*</span>
          </label>
          <textarea
            id="custom-app-message"
            name="message"
            rows={4}
            required
            value={formData.message}
            onChange={handleChange}
            className={`${inputClassName} resize-y ${getInputStateClassName(fieldErrors.message)}`}
            placeholder="Describe the workflow problem, features needed, user roles, current spreadsheets/tools used, or target launch timeline..."
            aria-invalid={Boolean(fieldErrors.message)}
            aria-describedby={fieldErrors.message ? "custom-app-message-error" : undefined}
          />
          {fieldErrors.message && (
            <p id="custom-app-message-error" className="mt-1 text-xs text-red-600 font-medium">
              {fieldErrors.message}
            </p>
          )}
        </div>

        {/* reCAPTCHA if configured */}
        {process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ? (
          <div>
            <ReCAPTCHA
              sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
              onChange={(token) => setCaptchaToken(token || "")}
            />
          </div>
        ) : null}

        {/* Error notification banner */}
        {error && (
          <div className="rounded-xl border border-red-200 bg-red-50 p-3 text-xs text-red-700 font-medium">
            {error}
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-brand-navy py-3.5 text-sm sm:text-base font-bold text-white shadow-lg shadow-brand-navy/20 transition hover:bg-brand-navy/90 hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isSubmitting ? (
            <>
              <RefreshCw className="h-4 w-4 animate-spin" />
              <span>Submitting Requirement...</span>
            </>
          ) : (
            <>
              <span>Submit Requirement & Get Free Estimate</span>
              <Send className="h-4 w-4" />
            </>
          )}
        </button>

        {/* Trust Guarantees */}
        <div className="pt-2 flex flex-wrap items-center justify-center gap-4 text-center text-xs text-slate-500">
          <span className="inline-flex items-center gap-1">
            <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
            100% Confidential
          </span>
          <span className="inline-flex items-center gap-1">
            <Clock className="h-3.5 w-3.5 text-brand-navy" />
            24h Response
          </span>
          <span className="inline-flex items-center gap-1">
            <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
            NDA on Request
          </span>
        </div>
      </form>
    </div>
  );
}

export function CustomDevelopment() {
  const [currentHeroSlide, setCurrentHeroSlide] = useState(0);

  // Automatic moving carousel timer (changes every 5 seconds)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const activeSlide = heroSlides[currentHeroSlide];

  return (
    <div className="bg-white text-slate-900 selection:bg-brand-navy selection:text-white overflow-hidden">
      {/* Top Direct Communication Sticky Banner */}
      <div className="border-b border-slate-200 bg-slate-900 text-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-2.5 sm:px-6 lg:px-8 text-xs sm:text-sm">
          <div className="flex items-center gap-2 text-slate-300">
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Serving businesses across Tamil Nadu with custom software development</span>
          </div>
          <div className="flex items-center gap-5">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp Us
            </a>
            <a
              href={EMAIL_LINK}
              className="inline-flex items-center gap-1.5 font-semibold text-slate-200 hover:text-white transition-colors"
            >
              <Mail className="h-4 w-4 text-brand-terracotta" />
              {CONTACT.email}
            </a>
            <a
              href={PHONE_LINK}
              className="hidden sm:inline-flex items-center gap-1.5 font-semibold text-slate-200 hover:text-white transition-colors"
            >
              <Phone className="h-4 w-4 text-blue-400" />
              {CONTACT.phone}
            </a>
          </div>
        </div>
      </div>

      {/* 3 Hero Sections in Automatic Moving Carousel (Auto-Moves Every 5 Seconds) */}
      <section className="relative overflow-hidden border-b border-slate-200 bg-[linear-gradient(180deg,#f8fafc_0%,#ffffff_100%)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,51,102,0.10),transparent_50%),radial-gradient(circle_at_top_right,rgba(153,51,0,0.08),transparent_50%)]" />

        <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
          {/* Active Hero Slide Content: BOTH TEXT AND 3D BENTO MOVE AUTOMATICALLY EVERY 5 SECONDS */}
          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center min-h-[520px]">
            {/* Left Animated Text Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`slide-text-${currentHeroSlide}`}
                initial={{ opacity: 0, x: -24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 24 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
              >
                <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-navy shadow-sm">
                  {(() => {
                    const BadgeIcon = activeSlide.badgeIcon;
                    return <BadgeIcon className="h-3.5 w-3.5 text-brand-terracotta" />;
                  })()}
                  {activeSlide.badge}
                </div>

                <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl leading-[1.1]">
                  {activeSlide.title}
                </h1>

                <p className="mt-6 text-xl font-semibold leading-relaxed text-brand-navy">
                  {activeSlide.subtitle}
                </p>

                <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
                  {activeSlide.description}
                </p>

                <p className="mt-4 text-sm leading-6 text-slate-700 bg-slate-50 border border-slate-200 rounded-2xl p-4">
                  {activeSlide.highlight}
                </p>

                {/* Taglines */}
                <div className="mt-6 flex flex-wrap gap-2 text-xs font-semibold text-slate-700">
                  {activeSlide.taglines.map((tagline) => (
                    <span
                      key={tagline}
                      className="rounded-lg bg-white border border-slate-200 px-3 py-1.5 shadow-sm"
                    >
                      {tagline}
                    </span>
                  ))}
                </div>

                {/* Communication CTAs */}
                <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
                  <Link
                    href="#contact-form"
                    className="inline-flex items-center justify-center rounded-xl bg-brand-navy px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-brand-navy/20 transition hover:bg-brand-navy/90 hover:scale-[1.02]"
                  >
                    Discuss Your Requirement
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>

                  <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-xl bg-emerald-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-emerald-600/20 transition hover:bg-emerald-700 hover:scale-[1.02]"
                  >
                    <MessageCircle className="mr-2 h-4 w-4" />
                    WhatsApp Us
                  </a>

                  <a
                    href={EMAIL_LINK}
                    className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-5 py-3.5 text-sm font-semibold text-slate-700 transition hover:border-brand-terracotta hover:text-brand-terracotta shadow-sm"
                  >
                    <Mail className="mr-2 h-4 w-4 text-brand-terracotta" />
                    Email Us
                  </a>

                  <a
                    href={PHONE_LINK}
                    className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm font-semibold text-slate-700 hover:bg-white transition shadow-sm"
                  >
                    <Phone className="mr-2 h-4 w-4 text-brand-navy" />
                    Call Us
                  </a>
                </div>

                {/* Minimal 5-Second Auto-Moving Progress Indicators */}
                <div className="mt-7 flex items-center gap-2">
                  {heroSlides.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentHeroSlide(idx)}
                      aria-label={`Switch to slide ${idx + 1}`}
                      className={`h-1.5 rounded-full transition-all duration-500 cursor-pointer ${
                        currentHeroSlide === idx
                          ? "w-8 bg-brand-navy"
                          : "w-2.5 bg-slate-200 hover:bg-slate-300"
                      }`}
                    />
                  ))}
                  <span className="text-[11px] font-mono text-slate-400 ml-1">
                    0{currentHeroSlide + 1} / 0{heroSlides.length} · Auto 5s
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Right: 3D BENTO MATRIX GRID (RECTANGULAR MODULES & TELEMETRY DIALS - NO SQUARES) */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`slide-img-${currentHeroSlide}`}
                initial={{ opacity: 0, scale: 0.94, rotateY: 7 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                exit={{ opacity: 0, scale: 1.04, rotateY: -7 }}
                transition={{ duration: 0.55, ease: "easeOut" }}
              >
                <HeroBentoMatrix activeSlide={activeSlide} />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* 4K Bento Matrix Rectangular Telemetry & System Flow Analysis Bar */}
      <section className="border-b border-slate-200 bg-slate-900 text-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-400">
                4K Operational Flow
              </span>
              <h3 className="mt-2 text-2xl font-bold text-white">
                Live System Telemetry & Automation Analysis
              </h3>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Real-Time Engine Metrics Across Tamil Nadu</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Square 1: Live Pipeline */}
            <TiltCard className="rounded-3xl border border-slate-700/60 bg-slate-950/80 p-5 shadow-xl flex flex-col justify-between backdrop-blur-md">
              <div>
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 px-2.5 py-1 text-[10px] font-bold text-emerald-400 tracking-wider uppercase">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    4K Pipeline
                  </span>
                  <span className="text-[10px] font-mono text-slate-400">0.4s Sync</span>
                </div>
                <h4 className="mt-4 text-base font-bold text-white">Automated Flow</h4>
                <p className="mt-1 text-xs text-slate-400">
                  Lead ➔ WhatsApp reply ➔ ERP invoice creation
                </p>
              </div>
              <div className="mt-5 border-t border-white/10 pt-3 flex items-center justify-between text-[11px] font-mono">
                <span className="text-slate-400">Manual Delays</span>
                <span className="text-emerald-400 font-bold">ELIMINATED</span>
              </div>
            </TiltCard>

            {/* Square 2: Impact Analysis */}
            <TiltCard className="rounded-3xl border border-slate-700/60 bg-slate-950/80 p-5 shadow-xl flex flex-col justify-between backdrop-blur-md">
              <div>
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-500/15 border border-blue-500/30 px-2.5 py-1 text-[10px] font-bold text-blue-400 tracking-wider uppercase">
                    <BarChart3 className="h-3 w-3" />
                    ROI Metric
                  </span>
                  <span className="text-[10px] font-mono text-emerald-400 font-bold">-85% Tasks</span>
                </div>
                <h4 className="mt-4 text-base font-bold text-white">Time Saved</h4>
                <p className="mt-1 text-xs text-slate-400">
                  Repetitive work automated into one unified system
                </p>
              </div>
              <div className="mt-5 border-t border-white/10 pt-3 flex items-center justify-between text-[11px] font-mono">
                <span className="text-slate-400">Turnaround</span>
                <span className="text-cyan-400 font-bold">3.8x FASTER</span>
              </div>
            </TiltCard>

            {/* Square 3: Integration Matrix */}
            <TiltCard className="rounded-3xl border border-slate-700/60 bg-slate-950/80 p-5 shadow-xl flex flex-col justify-between backdrop-blur-md">
              <div>
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-purple-500/15 border border-purple-500/30 px-2.5 py-1 text-[10px] font-bold text-purple-400 tracking-wider uppercase">
                    <Workflow className="h-3 w-3" />
                    Tool Matrix
                  </span>
                  <span className="text-[10px] font-mono text-purple-400 font-bold">Bi-Directional</span>
                </div>
                <h4 className="mt-4 text-base font-bold text-white">Connected Systems</h4>
                <p className="mt-1 text-xs text-slate-400">
                  WhatsApp Business, SAP, ERP, CRMs, APIs
                </p>
              </div>
              <div className="mt-5 border-t border-white/10 pt-3 flex items-center justify-between text-[11px] font-mono">
                <span className="text-slate-400">Data Silos</span>
                <span className="text-purple-400 font-bold">ZERO FRAGMENTATION</span>
              </div>
            </TiltCard>

            {/* Square 4: Tamil Nadu Telemetry */}
            <TiltCard className="rounded-3xl border border-slate-700/60 bg-slate-950/80 p-5 shadow-xl flex flex-col justify-between backdrop-blur-md">
              <div>
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-terracotta/20 border border-brand-terracotta/40 px-2.5 py-1 text-[10px] font-bold text-amber-300 tracking-wider uppercase">
                    <MapPin className="h-3 w-3" />
                    TN Network
                  </span>
                  <span className="text-[10px] font-mono text-emerald-400 font-bold">Active SLA</span>
                </div>
                <h4 className="mt-4 text-base font-bold text-white">Regional Hubs</h4>
                <p className="mt-1 text-xs text-slate-400">
                  Chennai · Coimbatore · Madurai · Salem · Hosur
                </p>
              </div>
              <div className="mt-5 border-t border-white/10 pt-3 flex items-center justify-between text-[11px] font-mono">
                <span className="text-slate-400">Availability</span>
                <span className="text-amber-300 font-bold">99.98% CLOUD UPTIME</span>
              </div>
            </TiltCard>
          </div>
        </div>
      </section>

      {/* Section 2: Your Business Is Different. Your Software Can Be Too. */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-terracotta">
              The Custom Advantage
            </span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
              Your Business Is Different. Your Software Can Be Too.
            </h2>
            <p className="mt-4 text-lg text-slate-600 leading-relaxed">
              Off-the-shelf software may work for some businesses, but your processes, customers,
              team, and requirements are unique.
            </p>
            <p className="mt-3 text-lg font-semibold text-brand-navy">
              Instead of changing your business to fit software, build software that fits your
              business.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-xl bg-emerald-600 px-5 py-3 text-xs font-bold text-white shadow-md hover:bg-emerald-700 transition"
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                Discuss Your Custom Workflow
              </a>
              <Link
                href="#contact-form"
                className="inline-flex items-center rounded-xl border border-slate-300 bg-white px-5 py-3 text-xs font-semibold text-slate-700 hover:border-brand-navy transition"
              >
                Request a Consultation
              </Link>
            </div>
          </div>

          {/* 3D Visualization of Off-the-shelf vs Custom Software */}
          <TiltImagePanel
            src={assetPath("/blog/off-the-shelf-vs-custom-software.png")}
            alt="Off-the-shelf vs Custom Software Workflow"
            badgeText="Workflow Comparison"
            floatingLabel1={{
              text: "Zero Forced Workarounds",
              sub: "Built for your operations",
              icon: <CheckCircle2 className="h-5 w-5" />,
            }}
          />
        </div>

        {/* 8 Value / Outcome Cards with 3D Tilt */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {valuePillars.map((item) => (
            <TiltCard
              key={item.title}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-xl hover:border-brand-navy/30 transition group h-full flex flex-col justify-between"
            >
              <div>
                <div
                  style={{ transform: "translateZ(20px)" }}
                  className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 text-brand-navy group-hover:bg-brand-navy group-hover:text-white transition-colors"
                >
                  <item.icon className="h-6 w-6" />
                </div>
                <h3
                  style={{ transform: "translateZ(15px)" }}
                  className="mt-5 text-lg font-bold text-slate-950"
                >
                  {item.title}
                </h3>
                <p
                  style={{ transform: "translateZ(10px)" }}
                  className="mt-2 text-sm leading-6 text-slate-600"
                >
                  {item.description}
                </p>
              </div>
            </TiltCard>
          ))}
        </div>
      </section>

      {/* Section 3: What Can We Build for You? */}
      <section className="border-y border-slate-200 bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-terracotta">
                Our Capabilities
              </span>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
                What Can We Build for You?
              </h2>
              <p className="mt-4 text-lg text-slate-600 leading-relaxed">
                We build custom software based on your business requirements — from a simple
                internal application to a complete business platform.
              </p>
            </div>

            {/* Architecture Visual Teaser */}
            <div className="hidden lg:block">
              <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm flex items-center justify-between">
                <div className="text-xs font-semibold text-slate-700">
                  <span className="text-brand-terracotta font-bold">End-to-End Stack:</span> Web, Mobile, CRM, ERP, Automation & APIs
                </div>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-bold text-emerald-600 hover:text-emerald-700 inline-flex items-center gap-1"
                >
                  <MessageCircle className="h-3.5 w-3.5" />
                  Quick Chat
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {coreOfferings.map((item) => (
              <TiltCard
                key={item.title}
                className="flex flex-col justify-between rounded-3xl border border-slate-200 bg-white p-7 shadow-sm hover:shadow-xl transition"
              >
                <div>
                  <div
                    style={{ transform: "translateZ(20px)" }}
                    className="flex items-center justify-between"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-navy/5 text-brand-navy">
                      <item.icon className="h-6 w-6" />
                    </div>
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600">
                      {item.tag}
                    </span>
                  </div>
                  <h3
                    style={{ transform: "translateZ(15px)" }}
                    className="mt-6 text-xl font-bold text-slate-950"
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{ transform: "translateZ(10px)" }}
                    className="mt-3 text-sm leading-6 text-slate-600"
                  >
                    {item.description}
                  </p>
                </div>
                <div
                  style={{ transform: "translateZ(15px)" }}
                  className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between"
                >
                  <Link
                    href="#contact-form"
                    className="text-xs font-bold text-brand-navy hover:text-brand-terracotta inline-flex items-center gap-1 transition-colors"
                  >
                    Discuss this solution
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                  <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs font-semibold text-emerald-600 hover:text-emerald-700 inline-flex items-center gap-1"
                  >
                    <MessageCircle className="h-3.5 w-3.5" />
                    WhatsApp
                  </a>
                </div>
              </TiltCard>
            ))}
          </div>

          {/* Architecture 3D Visual Banner */}
          <div className="mt-14">
            <TiltImagePanel
              src={assetPath("/blog/custom-application-architecture.png")}
              alt="Custom Application Architecture Overview"
              badgeText="Architecture Overview"
              floatingLabel1={{
                text: "Robust Data & Logic Layer",
                sub: "Secure & scalable by design",
                icon: <Database className="h-5 w-5" />,
              }}
              floatingLabel2={{
                text: "Modular Business Components",
                sub: "Built to expand seamlessly",
                icon: <Laptop className="h-5 w-5" />,
              }}
            />
          </div>
        </div>
      </section>

      {/* Section 4: What Are You Trying to Improve? */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-terracotta">
            Problem First Approach
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
            What Are You Trying to Improve?
          </h2>
          <p className="mt-4 text-lg text-slate-600 leading-relaxed">
            You don't necessarily need to know what software you need.{" "}
            <span className="font-semibold text-slate-900">Start with the problem.</span>
          </p>

          <div className="mt-6 flex justify-center">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-xl bg-emerald-600 px-5 py-3 text-xs font-bold text-white shadow-md hover:bg-emerald-700 transition"
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              Describe Your Challenge on WhatsApp
            </a>
          </div>
        </div>

        {/* Problem Diagram Visualization - Centralized */}
        <div className="mt-12 flex justify-center w-full">
          <div className="w-full max-w-4xl mx-auto">
            <TiltImagePanel
              src={assetPath("/images/02-problem-disconnected-systems.png")}
              alt="Disconnected Systems and Manual Process Bottlenecks"
              badgeText="Problem Breakdown"
              className="mx-auto"
              floatingLabel1={{
                text: "Replace Spreadsheet Chaos",
                sub: "Single unified system",
                icon: <FileSpreadsheet className="h-5 w-5" />,
              }}
              floatingLabel2={{
                text: "End Disconnected Systems",
                sub: "Unified data pipeline",
                icon: <Workflow className="h-5 w-5" />,
              }}
            />
          </div>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {problemAreas.map((problem) => (
            <TiltCard
              key={problem.title}
              className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm hover:shadow-xl transition flex flex-col justify-between"
            >
              <div>
                <span
                  style={{ transform: "translateZ(15px)" }}
                  className="inline-block rounded-full bg-brand-terracotta/10 px-3 py-1 text-xs font-bold text-brand-terracotta mb-4"
                >
                  {problem.badge}
                </span>
                <div
                  style={{ transform: "translateZ(20px)" }}
                  className="flex items-center gap-3"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-brand-navy">
                    <problem.icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-950">{problem.title}</h3>
                </div>
                <p
                  style={{ transform: "translateZ(10px)" }}
                  className="mt-4 text-sm leading-6 text-slate-600"
                >
                  {problem.description}
                </p>
              </div>
            </TiltCard>
          ))}
        </div>

        {/* Tell us what you are trying to improve banner */}
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          viewport={{ once: true }}
          className="mt-12 rounded-3xl bg-[linear-gradient(135deg,#003366_0%,#163a63_60%,#993300_140%)] p-8 text-white shadow-xl sm:p-10"
        >
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="max-w-2xl">
              <h3 className="text-2xl font-bold sm:text-3xl">
                Tell us what you are trying to improve.
              </h3>
              <p className="mt-2 text-slate-200 text-base leading-relaxed">
                We'll help you understand what can be built, what to prioritize, and how much time
                and effort it takes.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="#contact-form"
                className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-brand-navy hover:bg-slate-100 transition shadow-md"
              >
                Discuss Your Requirement
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-xl bg-emerald-500 px-6 py-3.5 text-sm font-bold text-white hover:bg-emerald-600 transition shadow-md"
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                WhatsApp Us
              </a>
              <a
                href={EMAIL_LINK}
                className="inline-flex items-center justify-center rounded-xl border border-white/30 bg-white/10 px-5 py-3.5 text-sm font-bold text-white hover:bg-white/20 transition"
              >
                <Mail className="mr-2 h-4 w-4" />
                Email Us
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Section 5: Software Built Around Your Business */}
      <section className="border-t border-slate-200 bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-terracotta">
              Functional Coverage
            </span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
              Software Built Around Your Business
            </h2>
            <p className="mt-4 text-lg text-slate-600 leading-relaxed">
              Your application can be designed around the exact areas where your business needs
              improvement.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {functionalAreas.map((area) => (
              <TiltCard
                key={area.name}
                className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm hover:shadow-xl transition"
              >
                <div
                  style={{ transform: "translateZ(20px)" }}
                  className="flex items-center gap-3 pb-4 border-b border-slate-100"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-navy/5 text-brand-navy">
                    <area.icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-950">{area.name}</h3>
                </div>

                <ul
                  style={{ transform: "translateZ(10px)" }}
                  className="mt-5 space-y-2.5"
                >
                  {area.items.map((bullet) => (
                    <li key={bullet} className="flex items-center gap-2.5 text-sm text-slate-700">
                      <CheckCircle2 className="h-4 w-4 text-brand-navy flex-shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: Connect the Tools You Already Use */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="rounded-[36px] border border-slate-200 bg-slate-950 text-white p-8 sm:p-12 shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(153,51,0,0.25),transparent_40%),radial-gradient(circle_at_bottom_left,rgba(0,51,102,0.35),transparent_50%)]" />

            <div className="relative z-10 max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-terracotta">
                Seamless Integration
              </span>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl text-white">
                Connect the Tools You Already Use
              </h2>
              <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-300">
                Your business may already use different software and platforms. Instead of replacing
                everything, we can build connections between your systems.
              </p>

              <div className="mt-8">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
                  We can work with integrations such as:
                </p>
                <div className="flex flex-wrap gap-2.5">
                  {integrationsList.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3.5 py-2 text-xs font-medium text-white hover:bg-white/10 hover:border-white/20 transition"
                    >
                      <Workflow className="h-3.5 w-3.5 text-brand-terracotta" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 border-t border-white/10 pt-6">
                <p className="text-sm font-semibold text-slate-300">
                  The goal is simple:{" "}
                  <span className="text-white font-bold">make your systems work better together.</span>
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <Link
                    href="/inaiwazhi-whatsapp-automation"
                    className="inline-flex items-center text-xs font-bold text-emerald-400 hover:text-emerald-300 transition-colors"
                  >
                    WhatsApp Automation (Inaiwazhi)
                    <ArrowRight className="ml-1 h-3.5 w-3.5" />
                  </Link>
                  <span className="text-white/20">|</span>
                  <Link
                    href="/services/sap-consulting"
                    className="inline-flex items-center text-xs font-bold text-slate-300 hover:text-white transition-colors"
                  >
                    SAP Integrations
                    <ArrowRight className="ml-1 h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* 3D Visualized Integrations Diagram */}
          <TiltImagePanel
            src={assetPath("/images/08-integrations.png")}
            alt="Business Tool Integrations Ecosystem"
            badgeText="Unified Integration Layer"
            floatingLabel1={{
              text: "Bi-Directional API Flow",
              sub: "Real-time sync across tools",
              icon: <Workflow className="h-5 w-5" />,
            }}
          />
        </div>
      </section>

      {/* Section 7: Custom Application Development Across Tamil Nadu */}
      <section className="border-t border-slate-200 bg-[linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-terracotta">
                Statewide Presence
              </span>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
                Custom Application Development Across Tamil Nadu
              </h2>
              <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-600">
                SoftClinch works with businesses across Tamil Nadu.
              </p>
              <p className="mt-3 text-base leading-relaxed text-slate-700">
                Whether you are based in Chennai, Coimbatore, Madurai, Tiruchirappalli, Salem,
                Tiruppur, Erode, Hosur, Vellore, or another location in Tamil Nadu, we can work with
                you on your software requirements.
              </p>

              {/* City chips */}
              <div className="mt-6">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                  Serving key business hubs:
                </p>
                <div className="flex flex-wrap gap-2">
                  {tamilNaduCities.map((city) => (
                    <span
                      key={city}
                      className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-800 shadow-sm hover:border-brand-terracotta transition-colors"
                    >
                      <MapPin className="h-3 w-3 text-brand-terracotta" />
                      {city}
                    </span>
                  ))}
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-dashed border-slate-300 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-500">
                    + All Locations Across TN
                  </span>
                </div>
              </div>

              <p className="mt-6 text-sm font-bold text-brand-navy">
                You don't need to be in Chennai to work with us.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="#contact-form"
                  className="inline-flex items-center rounded-xl bg-brand-navy px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-brand-navy/20 transition hover:bg-brand-navy/90 hover:scale-[1.02]"
                >
                  Discuss Your Requirement
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center rounded-xl bg-emerald-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-emerald-600/20 transition hover:bg-emerald-700 hover:scale-[1.02]"
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  WhatsApp Us
                </a>
              </div>
            </div>

            {/* Tamil Nadu 3D Visual Panel */}
            <TiltImagePanel
              src={assetPath("/images/20-chennai-tamil-nadu.png")}
              alt="Custom Software Development across Tamil Nadu"
              badgeText="Regional Reach"
              floatingLabel1={{
                text: "Local Business Understanding",
                sub: "Field, factory & enterprise ready",
                icon: <Building2 className="h-5 w-5" />,
              }}
            />
          </div>

          {/* Requirements list */}
          <div className="mt-14 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h3 className="text-xl font-bold text-slate-950 mb-2">We Work With Businesses That Need:</h3>
            <p className="text-xs text-slate-500 mb-6">
              Complete solutions tailored to your operational model
            </p>
            <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {tamilNaduRequirements.map((req) => (
                <div
                  key={req}
                  className="flex items-center gap-2.5 rounded-2xl border border-slate-100 bg-slate-50/70 p-3.5 text-xs font-semibold text-slate-800"
                >
                  <CheckCircle2 className="h-4 w-4 text-brand-terracotta flex-shrink-0" />
                  <span>{req}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 8: Built for Different Types of Businesses */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-terracotta">
            Industry Solutions
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
            Built for Different Types of Businesses
          </h2>
          <p className="mt-4 text-lg text-slate-600 leading-relaxed">
            Custom software can be developed for different industries and business models.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {industrySectors.map((ind) => (
            <TiltCard
              key={ind.name}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-xl hover:border-brand-navy/30 transition group h-full flex flex-col justify-between"
            >
              <div>
                <div
                  style={{ transform: "translateZ(20px)" }}
                  className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-navy/5 text-brand-navy group-hover:bg-brand-navy group-hover:text-white transition-colors"
                >
                  <ind.icon className="h-6 w-6" />
                </div>
                <h3
                  style={{ transform: "translateZ(15px)" }}
                  className="mt-5 text-lg font-bold text-slate-950"
                >
                  {ind.name}
                </h3>
                <p
                  style={{ transform: "translateZ(10px)" }}
                  className="mt-2 text-xs leading-5 text-slate-600"
                >
                  {ind.description}
                </p>
              </div>
            </TiltCard>
          ))}
        </div>
      </section>

      {/* Section 9: From Idea to Working Software */}
      <section className="border-t border-slate-200 bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-terracotta">
                Straightforward Methodology
              </span>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
                From Idea to Working Software
              </h2>
              <p className="mt-4 text-lg text-slate-600 leading-relaxed">
                We keep the development process clear and straightforward.
              </p>
            </div>

            {/* Process Visual Diagram */}
            <TiltImagePanel
              src={assetPath("/images/18-process.png")}
              alt="SoftClinch Software Development Process Lifecycle"
              badgeText="7-Step Delivery Process"
            />
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {processSteps.map((step) => (
              <TiltCard
                key={step.title}
                className="relative rounded-3xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-xl transition h-full flex flex-col justify-between"
              >
                <div>
                  <span
                    style={{ transform: "translateZ(15px)" }}
                    className="text-xs font-bold text-brand-terracotta bg-brand-terracotta/10 px-3 py-1 rounded-full"
                  >
                    Step {step.number}
                  </span>
                  <h3
                    style={{ transform: "translateZ(20px)" }}
                    className="mt-4 text-base font-bold text-slate-950"
                  >
                    {step.title}
                  </h3>
                  <p
                    style={{ transform: "translateZ(10px)" }}
                    className="mt-2 text-xs leading-5 text-slate-600"
                  >
                    {step.description}
                  </p>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* Section 10: Already Have an Application? */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="rounded-[36px] border border-slate-200 bg-[linear-gradient(180deg,#ffffff_0%,#f1f5f9_100%)] p-8 sm:p-10 shadow-sm">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-terracotta">
              Modernization & Scaling
            </span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
              Already Have an Application?
            </h2>
            <p className="mt-4 text-base text-slate-700 leading-relaxed">
              You don't always need to start from scratch. If you already have software but it is
              outdated, difficult to use, slow, or missing important features, we can help improve
              it.
            </p>

            <div className="mt-6">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                We Can Help With:
              </h3>
              <div className="grid gap-2 sm:grid-cols-2">
                {existingAppImprovements.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white p-2.5 text-xs font-semibold text-slate-800 shadow-xs"
                  >
                    <Check className="h-3.5 w-3.5 text-emerald-600 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 border-t border-slate-200 pt-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <p className="text-sm font-bold text-slate-950">
                Have an existing application that needs improvement?
              </p>
              <div className="flex flex-wrap gap-2.5">
                <Link
                  href="#contact-form"
                  className="inline-flex items-center rounded-xl bg-brand-navy px-4 py-2.5 text-xs font-bold text-white shadow-md hover:bg-brand-navy/90 transition"
                >
                  Talk to Our Team
                  <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                </Link>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center rounded-xl bg-emerald-600 px-4 py-2.5 text-xs font-bold text-white hover:bg-emerald-700 transition"
                >
                  <MessageCircle className="mr-1.5 h-3.5 w-3.5" />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Platform Upgrade 3D Visual Panel */}
          <TiltImagePanel
            src={assetPath("/images/05-platform-upgrade.png")}
            alt="Application Modernization and Platform Upgrade"
            badgeText="Upgrade Existing Systems"
            floatingLabel1={{
              text: "Modernize Legacy Tech",
              sub: "Faster, safer, scalable",
              icon: <RefreshCw className="h-5 w-5" />,
            }}
          />
        </div>
      </section>

      {/* Section 11: Why Choose SoftClinch? */}
      <section className="border-t border-slate-200 bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-terracotta">
                Why Partner With Us
              </span>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
                Why Choose SoftClinch?
              </h2>
              <p className="mt-4 text-lg text-slate-600 leading-relaxed">
                We focus on solving business challenges with practical, high-value software.
              </p>
            </div>

            {/* Why SoftClinch Visual Infographic */}
            <TiltImagePanel
              src={assetPath("/images/19-why-softclinch.png")}
              alt="Why Businesses Choose SoftClinch"
              badgeText="Value Proposition"
            />
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whySoftClinchPoints.map((point) => (
              <TiltCard
                key={point.title}
                className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm hover:shadow-xl transition"
              >
                <div
                  style={{ transform: "translateZ(20px)" }}
                  className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-navy/5 text-brand-navy mb-5"
                >
                  <point.icon className="h-6 w-6" />
                </div>
                <h3
                  style={{ transform: "translateZ(15px)" }}
                  className="text-lg font-bold text-slate-950"
                >
                  {point.title}
                </h3>
                <p
                  style={{ transform: "translateZ(10px)" }}
                  className="mt-2 text-sm leading-6 text-slate-600"
                >
                  {point.description}
                </p>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* Section 12: How Much Does Custom Software Cost? */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-terracotta">
              Cost & Estimation
            </span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
              How Much Does Custom Software Cost?
            </h2>
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-600">
              There is no single price for custom application development because every project is
              different.
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate-700">
              Instead of giving you an unrealistic fixed price, we'll first understand what you
              actually need.
            </p>

            <div className="mt-6 rounded-2xl bg-slate-50 border border-slate-200 p-6">
              <h3 className="text-sm font-bold text-slate-950 mb-3">
                Before discussing the cost, we'll help you answer:
              </h3>
              <ul className="space-y-2">
                {costQuestions.map((q) => (
                  <li key={q} className="flex items-start gap-2.5 text-sm text-slate-700">
                    <span className="h-2 w-2 rounded-full bg-brand-terracotta mt-2 flex-shrink-0" />
                    <span>{q}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs font-semibold text-brand-navy">
                Then we can recommend the right approach for your business.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="#contact-form"
                className="inline-flex items-center rounded-xl bg-brand-navy px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-brand-navy/20 transition hover:bg-brand-navy/90 hover:scale-[1.02]"
              >
                Discuss Your Requirement
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-xl bg-emerald-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-emerald-600/20 transition hover:bg-emerald-700 hover:scale-[1.02]"
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                WhatsApp Us
              </a>
            </div>
          </div>

          <TiltCard className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl">
            <div
              style={{ transform: "translateZ(20px)" }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-terracotta/10 text-brand-terracotta">
                <DollarSign className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-bold text-slate-950">The Cost Depends on Factors Such As:</h3>
            </div>
            <div
              style={{ transform: "translateZ(10px)" }}
              className="space-y-3"
            >
              {costFactors.map((factor) => (
                <div
                  key={factor}
                  className="flex items-center gap-3 rounded-xl border border-slate-100 bg-slate-50/70 p-3.5 text-sm font-medium text-slate-800"
                >
                  <CheckCircle2 className="h-4 w-4 text-brand-navy flex-shrink-0" />
                  <span>{factor}</span>
                </div>
              ))}
            </div>
          </TiltCard>
        </div>
      </section>

      {/* Section 12.5: Real Client Case Studies & Industry Testimonials */}
      <section className="border-t border-slate-200 bg-slate-50/70 py-24 relative overflow-hidden">
        {/* Subtle background ambient glows */}
        <div className="absolute top-0 right-1/4 -z-0 h-96 w-96 rounded-full bg-brand-navy/5 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 -z-0 h-96 w-96 rounded-full bg-brand-terracotta/5 blur-3xl pointer-events-none" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200 px-3.5 py-1 text-xs font-bold text-emerald-800">
              <Sparkles className="h-3.5 w-3.5 text-emerald-600" />
              <span>Proven Industry Applications</span>
            </div>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl leading-tight">
              Real Businesses. Custom Software That Solved Real Problems.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
              From eliminating Tally paperwork in wholesale showrooms to tracking commercial tyres, automating YouTube news publishing, organizing apparel lines, and locking chemical formulas.
            </p>

            {/* Trust Rating Bar */}
            <div className="mt-6 inline-flex flex-wrap items-center justify-center gap-3 rounded-2xl bg-white border border-slate-200 px-5 py-2.5 shadow-sm text-xs sm:text-sm text-slate-700">
              <div className="flex items-center gap-1 text-amber-500">
                <span className="font-extrabold text-slate-950 text-base">5.0</span>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-slate-300">|</span>
              <span className="font-semibold text-slate-800">100% Practical Implementation</span>
              <span className="text-slate-300">|</span>
              <span className="font-semibold text-slate-800">Hover Over Any Card to Pause</span>
            </div>
          </div>
        </div>

        {/* Continuous Right-to-Left Infinite Moving Slider Track */}
        <div className="relative w-full mt-2">
          {/* Edge Blur / Gradient Fades */}
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-slate-50 via-slate-50/80 to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-slate-50 via-slate-50/80 to-transparent z-20 pointer-events-none" />

          <style>{`
            @keyframes customAppSliderMarquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .custom-app-slider-track {
              display: flex;
              width: max-content;
              animation: customAppSliderMarquee 42s linear infinite;
            }
            .custom-app-slider-track:hover {
              animation-play-state: paused;
            }
          `}</style>

          <div className="overflow-hidden w-full py-4">
            <div className="custom-app-slider-track gap-6 px-4">
              {[...customAppTestimonials, ...customAppTestimonials].map((item, idx) => {
                const ItemIcon = item.icon;
                return (
                  <div
                    key={`${item.id}-${idx}`}
                    className="w-[360px] sm:w-[420px] md:w-[460px] shrink-0 rounded-3xl border border-slate-200 bg-white p-7 sm:p-8 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between group"
                  >
                    <div>
                      {/* Header: Category Badge + Rating */}
                      <div className="flex items-center justify-between gap-3 mb-4">
                        <div className="flex items-center gap-3">
                          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-navy/5 text-brand-navy shadow-sm group-hover:bg-brand-navy group-hover:text-white transition-colors">
                            <ItemIcon className="h-5 w-5" />
                          </div>
                          <div>
                            <span className={`inline-block rounded-full border px-2.5 py-0.5 text-[11px] font-bold ${item.badgeBg}`}>
                              {item.tag}
                            </span>
                            <div className="text-xs font-semibold text-slate-500 mt-0.5">
                              {item.category}
                            </div>
                          </div>
                        </div>

                        {/* 5 Stars */}
                        <div className="flex items-center gap-1 bg-amber-50 border border-amber-200/80 px-2 py-0.5 rounded-full shrink-0">
                          {[...Array(item.rating)].map((_, s) => (
                            <Star key={s} className="h-3 w-3 fill-amber-400 text-amber-400" />
                          ))}
                          <span className="text-[11px] font-bold text-amber-800 ml-0.5">5.0</span>
                        </div>
                      </div>

                      {/* Business Title (No personal names or roles) */}
                      <div className="mb-4">
                        <h3 className="text-lg font-bold text-slate-950 group-hover:text-brand-navy transition-colors">
                          {item.businessTitle}
                        </h3>
                        <div className="text-xs text-slate-500 mt-0.5 font-medium">
                          {item.location}
                        </div>
                      </div>

                      {/* Highlight Metric Banner */}
                      <div className="rounded-2xl border border-emerald-200 bg-emerald-50/80 p-3 text-xs sm:text-sm font-bold text-emerald-900 flex items-center gap-2.5 mb-5 shadow-xs">
                        <CheckCircle2 className="h-4 w-4 text-emerald-600 flex-shrink-0" />
                        <span>{item.highlightMetric}</span>
                      </div>

                      {/* Client Quote */}
                      <div className="relative mb-5">
                        <Quote className="h-6 w-6 text-brand-navy/15 absolute -top-1 -left-1 pointer-events-none" />
                        <p className="text-slate-800 text-xs sm:text-sm leading-relaxed pl-5 font-medium italic">
                          "{item.quote}"
                        </p>
                      </div>

                      {/* Operational Bottleneck vs Custom Solution Box */}
                      <div className="space-y-2.5 rounded-2xl bg-slate-50 border border-slate-200 p-3.5 text-xs text-slate-700 mb-5">
                        <div>
                          <span className="font-bold text-rose-800 uppercase tracking-wide text-[10px] block mb-0.5">
                            The Operational Bottleneck:
                          </span>
                          <p className="text-slate-600 leading-relaxed text-[11px] sm:text-xs">{item.problem}</p>
                        </div>
                        <div className="pt-2 border-t border-slate-200">
                          <span className="font-bold text-emerald-800 uppercase tracking-wide text-[10px] block mb-0.5">
                            Custom Software Built:
                          </span>
                          <p className="text-slate-600 leading-relaxed text-[11px] sm:text-xs">{item.solution}</p>
                        </div>
                      </div>

                      {/* Tech Stack Pills */}
                      <div className="flex flex-wrap gap-1.5 mb-5">
                        {item.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-lg bg-slate-100 border border-slate-200 px-2 py-0.5 text-[10px] font-semibold text-slate-700"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Footer: Verified Company & CTA Button */}
                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                      <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                        <CheckCircle2 className="h-3 w-3 text-emerald-600" />
                        <span>Verified Implementation</span>
                      </div>

                      <Link
                        href="#contact-form"
                        className="inline-flex items-center justify-center rounded-xl bg-brand-navy/5 hover:bg-brand-navy hover:text-white px-3 py-1.5 text-xs font-bold text-brand-navy transition group shrink-0"
                      >
                        <span>Discuss Similar</span>
                        <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-0.5 transition-transform" />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Callout Banner */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-12 relative z-10">
          <div className="rounded-3xl bg-gradient-to-r from-brand-navy to-slate-900 p-8 sm:p-10 text-white shadow-xl flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">
                Custom Tailored For Your Workflow
              </span>
              <h3 className="mt-1 text-2xl font-bold sm:text-3xl text-white">
                Have a Complex or Non-Standard Business Challenge?
              </h3>
              <p className="mt-2 text-sm text-slate-300 max-w-2xl leading-relaxed">
                Whether you need to connect WhatsApp with Tally, track serial numbers on a factory floor, automate YouTube media uploads, or build a multi-role web platform—we engineer software designed specifically for how your business operates.
              </p>
            </div>
            <Link
              href="#contact-form"
              className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-brand-navy shadow-lg hover:bg-slate-100 transition shrink-0"
            >
              Discuss Your Requirement
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Section 13: Frequently Asked Questions */}
      <FaqSection title="Frequently Asked Questions" items={customDevelopmentFaq} />

      {/* Section 14: Have a Business Problem That Software Could Solve? (Final Conversion & Requirement Intake Form) */}
      <section id="contact-form" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 scroll-mt-12">
        <div className="rounded-[40px] bg-[linear-gradient(135deg,#003366_0%,#0b2545_60%,#993300_150%)] p-8 sm:p-12 lg:p-16 text-white shadow-2xl relative overflow-hidden">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-start relative z-10">
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/80">
                  Get In Touch
                </span>
                <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl leading-tight">
                  Have a Business Problem That Software Could Solve?
                </h2>
                <p className="mt-4 text-base sm:text-lg text-slate-200 leading-relaxed">
                  You don't need to have all the answers before contacting us. Tell us what challenge you're facing, and we'll help architect the right solution.
                </p>

                <div className="mt-6 rounded-3xl bg-white/10 backdrop-blur-sm border border-white/20 p-5 sm:p-6">
                  <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-emerald-300 mb-3">
                    Tell us:
                  </p>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-100">
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                      <span>What your business does</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                      <span>What problem your team is facing</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                      <span>How you currently handle the process</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                      <span>What you want to improve or build</span>
                    </li>
                  </ul>
                  <p className="mt-4 text-xs text-slate-200 font-medium">
                    We'll help you understand technical feasibility, timeline, and cost.
                  </p>
                </div>

                <p className="mt-6 text-base sm:text-lg font-bold text-white">
                  Prefer direct communication?
                </p>

                {/* Multi-Channel CTAs */}
                <div className="mt-4 flex flex-wrap items-center gap-3">
                  <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-xl bg-emerald-500 px-5 py-3 text-xs sm:text-sm font-bold text-white shadow-lg shadow-emerald-500/30 hover:bg-emerald-600 transition hover:scale-[1.02]"
                  >
                    <MessageCircle className="mr-2 h-4 w-4" />
                    WhatsApp Us (+91 94451 79931)
                  </a>

                  <a
                    href={PHONE_LINK}
                    className="inline-flex items-center justify-center rounded-xl border border-white/30 bg-white/10 px-4 py-3 text-xs sm:text-sm font-bold text-white hover:bg-white/20 transition"
                  >
                    <Phone className="mr-2 h-4 w-4" />
                    Call Us
                  </a>

                  <a
                    href={EMAIL_LINK}
                    className="inline-flex items-center justify-center rounded-xl border border-white/30 bg-white/10 px-4 py-3 text-xs sm:text-sm font-bold text-white hover:bg-white/20 transition"
                  >
                    <Mail className="mr-2 h-4 w-4" />
                    Email Us ({CONTACT.email})
                  </a>
                </div>
              </div>

              {/* Ecosystem Visual Panel */}
              <div className="mt-8">
                <TiltImagePanel
                  src={assetPath("/images/21-final-cta-complete-ecosystem.png")}
                  alt="SoftClinch Complete Software Ecosystem"
                  badgeText="End-to-End Delivery"
                />
              </div>
            </div>

            {/* Right Column: Brevo Contact Form */}
            <div className="lg:col-span-7">
              <CustomAppContactForm />
            </div>
          </div>

          <div className="mt-12 border-t border-white/15 pt-6 text-xs sm:text-sm text-slate-300">
            <div className="font-bold text-white text-base">SoftClinch Consulting Services</div>
            <div className="mt-1">
              Custom Application Development · Business Software · Mobile Apps · CRM · ERP ·
              Automation · SaaS
            </div>
            <div className="mt-1 text-slate-400">
              Serving Businesses Across Tamil Nadu · Chennai Office: Ashok Nagar, Chennai 600083
            </div>
          </div>
        </div>
      </section>

      {/* Related Services Contextual Backlinks */}
      <section className="border-t border-slate-200 bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-terracotta">
              Related Services & Backlinks
            </span>
            <h3 className="mt-2 text-2xl font-bold text-slate-950">
              Explore SoftClinch Consulting Capabilities
            </h3>
            <p className="mt-1 text-sm text-slate-600">
              Connect your custom software with communication automation, SAP operations, and
              multi-channel growth.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {relatedServiceLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-5 shadow-sm hover:border-brand-navy hover:shadow-md transition"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-bold text-slate-900 group-hover:text-brand-terracotta transition-colors">
                      {link.title}
                    </h4>
                    <ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-brand-terracotta group-hover:translate-x-1 transition-all" />
                  </div>
                  <p className="mt-2 text-xs leading-5 text-slate-600">{link.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
