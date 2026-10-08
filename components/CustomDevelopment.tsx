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
  Send,
  Star,
  Quote,
  Shirt,
  ScanLine,
  Video,
  FlaskConical,
  Wrench,
  HelpCircle,
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

// 3 Hero Sections in Automatic Moving Carousel (Image + Text + 3D Bento Matrix auto-rotating together every 5s)
const heroSlides = [
  {
    id: 1,
    tag: "Custom Business Software",
    badge: "Serving Businesses Across Tamil Nadu",
    badgeIcon: MapPin,
    title: "Your Business Has a Problem. We Can Build the Solution.",
    subtitle: "Custom Software, Websites & Apps Built Around Your Business",
    description:
      "Still managing work manually? Using multiple tools? Or unable to find software that fits the way your business works?",
    highlight:
      "Tell us what you need. We'll help you turn your requirement into a practical digital solution.",
    primaryCta: "Discuss Your Requirement",
    primaryHref: "#contact-form",
    secondaryCta: "WhatsApp Us",
    secondaryHref: WHATSAPP_LINK,
    secondaryIsExternal: true,
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
    tag: "Turn Ideas Into Reality",
    badge: "Have an Idea for Your Business?",
    badgeIcon: Lightbulb,
    title: "Have an Idea for Your Business?",
    subtitle: "Turn Your Idea Into a Working Website, App or Business Software",
    description:
      "Whether you want to build a customer app, business system, website, internal tool, or a new software product, we help turn your idea into something your business can actually use.",
    highlight:
      "From initial concept to deployment, we engineer practical digital solutions tailored for your business.",
    primaryCta: "Tell Us Your Idea",
    primaryHref: "#contact-form",
    secondaryCta: "Get a Free Consultation",
    secondaryHref: "#contact-form",
    secondaryIsExternal: false,
    taglines: [
      "✓ Customer apps & web platforms",
      "✓ Internal business systems",
      "✓ Scalable software products",
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
    tag: "Process Optimization & Modernization",
    badge: "Make Your Business Work Easier",
    badgeIcon: RefreshCw,
    title: "Make Your Business Work Easier.",
    subtitle: "Reduce Manual Work. Connect Your Tools. Manage Your Business Better.",
    description:
      "Already using spreadsheets, multiple software tools, or an old application?",
    highlight:
      "We can improve your existing system or build a new solution that fits your business requirements.",
    primaryCta: "Improve My Business Process",
    primaryHref: "#contact-form",
    secondaryCta: "Talk to Our Team",
    secondaryHref: "#contact-form",
    secondaryIsExternal: false,
    taglines: [
      "✓ Reduce manual repetitive work",
      "✓ Connect disconnected software",
      "✓ Modernize legacy applications",
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

// Reusable 3D Tilt Card Component with Perspective and TranslateZ Depth
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

// Animated Radar / Telemetry Sweep Dial
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

        <div className="absolute inset-1 rounded-full border border-emerald-500/20 animate-spin [animation-duration:4s]">
          <div className="h-1/2 w-0.5 bg-gradient-to-t from-emerald-400 to-transparent mx-auto" />
        </div>

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

// 3D Bento Matrix Grid with Rectangular Telemetry Modules
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
      <div className="absolute -inset-3 rounded-[36px] bg-gradient-to-tr from-brand-navy/35 via-emerald-500/20 to-brand-terracotta/30 blur-3xl opacity-75 group-hover:opacity-100 transition-opacity duration-700 animate-glow-3d" />

      <div
        style={{ transform: "translateZ(10px)" }}
        className="relative grid grid-cols-1 md:grid-cols-2 gap-3.5 p-3.5 sm:p-4 rounded-[32px] border border-slate-800 bg-slate-950/90 backdrop-blur-2xl shadow-[0_30px_90px_rgba(0,0,0,0.35)]"
      >
        {/* Module 1: Top Hero Rectangular Showcase (Panoramic 16:9 Banner) */}
        <div
          style={{ transform: "translateZ(20px)" }}
          className="col-span-1 md:col-span-2 relative overflow-hidden rounded-2xl border border-slate-700/80 bg-slate-900 shadow-md group/img"
        >
          <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-emerald-400 via-cyan-400 to-brand-terracotta z-20" />

          <div className="relative aspect-[16/9] w-full overflow-hidden">
            <img
              src={assetPath(activeSlide.image)}
              alt={activeSlide.imageAlt}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover/img:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
          </div>

          <div className="absolute top-3 left-3 z-20 inline-flex items-center gap-2 rounded-full bg-slate-950/85 backdrop-blur-md px-3.5 py-1 text-xs font-bold text-white shadow-lg border border-white/20">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>{activeSlide.imageBadge}</span>
          </div>

          <div className="absolute top-3 right-3 z-20 hidden sm:inline-flex items-center gap-1.5 rounded-full bg-slate-950/85 backdrop-blur-md px-3 py-1 text-[11px] font-mono text-emerald-300 shadow-lg border border-emerald-500/30">
            <Activity className="h-3 w-3 text-emerald-400 animate-pulse" />
            <span>TN Edge Node: Active</span>
          </div>

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

        {/* Module 2: Rectangular Telemetry Dial */}
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

        {/* Module 3: Rectangular System Pipeline */}
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

        {/* Module 4: Rectangular Regional Tamil Nadu Network & Action Bar */}
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

// 7 Problem Cards for "YOUR BUSINESS PROBLEM"
const problemCards = [
  {
    id: "01",
    title: "Still Using Spreadsheets?",
    description:
      "Important business information is spread across Excel, Google Sheets, files, and different systems.",
    icon: FileSpreadsheet,
    badge: "Spreadsheet Overload",
    symptom: "Missing data, sync conflicts & manual copy-paste errors",
  },
  {
    id: "02",
    title: "Too Much Manual Work?",
    description:
      "Your team spends too much time entering information, sending updates, preparing reports, or repeating the same tasks.",
    icon: Clock,
    badge: "Manual Bottlenecks",
    symptom: "Hours wasted each day on repeated entries & phone updates",
  },
  {
    id: "03",
    title: "Using Too Many Software Tools?",
    description:
      "Your business uses different tools for different tasks, making it difficult to keep everything organised.",
    icon: Layers,
    badge: "Fragmented Tools",
    symptom: "Paying multiple subscriptions that don't speak to each other",
  },
  {
    id: "04",
    title: "Can't Find the Right Software?",
    description:
      "Ready-made software doesn't match the way your business actually works.",
    icon: AlertCircle,
    badge: "Off-the-Shelf Limitations",
    symptom: "Generic templates forcing your team to change processes",
  },
  {
    id: "05",
    title: "Have a New Business Idea?",
    description:
      "You have an idea for an app, website, platform, or business system but don't know how to turn it into a working product.",
    icon: Lightbulb,
    badge: "New Ventures & MVPs",
    symptom: "Need an agile MVP engineered to test the market rapidly",
  },
  {
    id: "06",
    title: "Already Have Software?",
    description:
      "Your existing application may be outdated, difficult to use, slow, or missing the features your business now needs.",
    icon: Wrench,
    badge: "Outdated / Slow Systems",
    symptom: "Sluggish UI, broken mobile view & high maintenance costs",
  },
  {
    id: "07",
    title: "Need a Customer Portal?",
    description:
      "Give your customers an easier way to place requests, track orders, access information, manage accounts, or communicate with your team.",
    icon: Globe,
    badge: "Self-Service Portals",
    symptom: "Continuous customer phone calls for everyday status queries",
  },
];

// 8 Advantage Cards for "THE CUSTOM ADVANTAGE"
const customAdvantages = [
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
      "Keep customer information, enquiries, follow-ups, orders, and interactions organised.",
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
    description: "Turn your business information into useful dashboards and reports.",
    icon: BarChart3,
  },
  {
    title: "Improve Customer Experience",
    description:
      "Give customers easier ways to place orders, track requests, access information, or communicate with your team.",
    icon: Heart,
  },
];

// 9 Software Types for "WHAT WE BUILD"
const whatWeBuildItems = [
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
      "Modern online applications that your team or customers can access through a browser.",
    icon: Globe,
    tag: "Browser Accessible",
  },
  {
    title: "Mobile Applications",
    description:
      "Mobile apps for customers, employees, field teams, delivery teams, sales teams, and other business requirements.",
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
    title: "ERP & Business Management Systems",
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
      "Turn your business idea into a software product that can serve multiple customers or businesses.",
    icon: Sparkles,
    tag: "Scalable Products",
  },
  {
    title: "Customer Portals",
    description:
      "Give customers a simple way to access information, submit requests, track orders, manage accounts, or communicate with your business.",
    icon: Building2,
    tag: "Client Portals",
  },
  {
    title: "Existing Software Improvement",
    description:
      "Improve an existing application, add new features, connect other systems, or modernise an older solution.",
    icon: RefreshCw,
    tag: "System Upgrades",
  },
];

// 8 Focus Areas for "WHAT DO YOU WANT TO IMPROVE?"
const improvementAreas = [
  {
    title: "Manage Customers Better",
    description:
      "Keep customer details, enquiries, follow-ups, orders, and communication organised in one place.",
    icon: Users,
  },
  {
    title: "Make Daily Work Easier",
    description:
      "Bring important tasks and information into one place so your team can work more efficiently.",
    icon: Clock,
  },
  {
    title: "Reduce Repetitive Work",
    description: "Automate tasks your team performs again and again.",
    icon: RefreshCw,
  },
  {
    title: "Manage Orders & Inventory",
    description:
      "Make it easier to manage products, orders, stock, purchases, deliveries, and related activities.",
    icon: ShoppingCart,
  },
  {
    title: "Improve Team Work",
    description:
      "Give employees a simple way to manage tasks, requests, approvals, and internal activities.",
    icon: Briefcase,
  },
  {
    title: "Track Business Performance",
    description:
      "Bring important business information into useful reports and dashboards.",
    icon: BarChart3,
  },
  {
    title: "Improve Customer Service",
    description:
      "Make it easier for customers to place requests, track information, receive updates, and communicate with your team.",
    icon: Headphones,
  },
  {
    title: "Connect Your Existing Systems",
    description:
      "Help the software your business already uses work better together.",
    icon: Workflow,
  },
];

// 6 Business Areas for "BUSINESS AREAS"
const functionalBusinessAreas = [
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
      "Approval processes",
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

// 10 Connected Tools for "INTEGRATIONS"
const integrationsList = [
  "CRM Systems",
  "ERP Systems",
  "SAP",
  "Payment Systems",
  "WhatsApp Business",
  "Marketing Platforms",
  "Ecommerce Systems",
  "Databases",
  "Internal Business Software",
  "Third-Party Services",
];

// Tamil Nadu Regional Hubs
const tamilNaduHubs = [
  "Chennai",
  "Coimbatore",
  "Madurai",
  "Tiruchirappalli",
  "Salem",
  "Tiruppur",
  "Erode",
  "Hosur",
  "Vellore",
  "All Tamil Nadu",
];

// 8 Industries for "INDUSTRIES"
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
      "Appointments, customer/patient workflows, communication, records, and management requirements.",
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

// 7 Steps for "OUR PROCESS"
const processSteps = [
  {
    number: "01",
    title: "Tell Us About Your Business",
    description:
      "Explain what your business does, how your team currently works, and what you want to improve.",
  },
  {
    number: "02",
    title: "Understand Your Requirement",
    description:
      "We understand your workflow, users, challenges, features, and business goals.",
  },
  {
    number: "03",
    title: "Plan the Solution",
    description:
      "We define what the solution needs to do and what should be prioritised.",
  },
  {
    number: "04",
    title: "Design the Experience",
    description:
      "We plan a simple and practical experience for the people who will actually use the application.",
  },
  {
    number: "05",
    title: "Build the Solution",
    description:
      "Our team develops the required website, web application, mobile app, software, integrations, and functionality.",
  },
  {
    number: "06",
    title: "Test & Launch",
    description:
      "We test the solution, resolve issues, prepare it for launch, and help move it into use.",
  },
  {
    number: "07",
    title: "Support & Improve",
    description:
      "After launch, the solution can continue to be improved as your business grows and your requirements change.",
  },
];

// 11 Improvement Items for "EXISTING SOFTWARE"
const existingAppImprovements = [
  "New features",
  "Application redesign",
  "Mobile application development",
  "Web application improvements",
  "Business automation",
  "System connections",
  "Dashboards and reports",
  "Customer portals",
  "Performance improvements",
  "Application maintenance",
  "Existing system improvements",
];

// 6 Pillars for "WHY SOFTCLINCH"
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
      "Your solution is designed around your business process, users, and goals.",
    icon: Settings,
  },
  {
    title: "Easy for Your Team to Use",
    description:
      "Good software should make work easier, not make your team deal with unnecessary complexity.",
    icon: CheckCircle2,
  },
  {
    title: "Clear Communication",
    description:
      "We keep the development process understandable and communicate clearly about requirements, progress, and next steps.",
    icon: MessageCircle,
  },
  {
    title: "Ready to Grow",
    description:
      "Your solution can be improved with new users, features, and requirements as your business grows.",
    icon: Rocket,
  },
  {
    title: "Continued Support",
    description:
      "Our relationship doesn't have to end when the software is launched. We can continue to help with improvements, maintenance, and new requirements.",
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

// 5 Understanding Questions & 10 Cost Factors for "COST"
const costQuestions = [
  "What you want to build",
  "Who will use it",
  "What problem it should solve",
  "What you want to make easier",
  "What existing systems need to connect",
];

const costFactors = [
  "Number of features",
  "Number of users",
  "Web or mobile requirements",
  "Application complexity",
  "Integrations",
  "Database requirements",
  "Management features",
  "Automation requirements",
  "Security requirements",
  "Development and support requirements",
];

// 5 Real Business Examples (Right-to-Left Infinite Slider with 3D Tilt Cards)
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
    businessTitle: "Fashion & Retail",
    category: "Fashion, Apparel & Boutique Manufacturing",
    tag: "Variations & Multi-Outlet Stock",
    icon: Shirt,
    accentGradient: "from-fuchsia-500/10 via-fuchsia-500/5 to-transparent border-fuchsia-500/30 text-fuchsia-600",
    badgeBg: "bg-fuchsia-50 text-fuchsia-700 border-fuchsia-200",
    location: "Tiruppur & Chennai, Tamil Nadu",
    rating: 5,
    highlightMetric: "92% Less Stock Outages · Multi-Outlet Sync",
    problem:
      "Managing product variations, sizes, color lots, inventory, orders, and customer requirements across 12 outlets with off-the-shelf software resulted in stock discrepancies and delayed order fulfillments.",
    solution:
      "A custom solution for managing product variations, stock, orders, customer requirements, and multiple outlets seamlessly from mobile and desktop.",
    quote:
      "Our custom solution transformed how we handle multi-store inventory and complex product variations, eliminating stockouts across our manufacturing and retail network.",
    techStack: ["B2B Ordering App", "Product Variation Matrix", "Multi-Store Inventory", "Automated Barcodes"],
  },
  {
    id: "electrical-wholesale",
    businessTitle: "Electrical Wholesale & Distribution",
    category: "Electrical Wholesale & B2B Distribution",
    tag: "Orders, Stock & WhatsApp Billing",
    icon: Zap,
    accentGradient: "from-amber-500/10 via-amber-500/5 to-transparent border-amber-500/30 text-amber-600",
    badgeBg: "bg-amber-50 text-amber-700 border-amber-200",
    location: "Chennai & Coimbatore, Tamil Nadu",
    rating: 5,
    highlightMetric: "80% Less Paperwork · Instant Mobile Orders",
    problem:
      "Paper order slips at the counter caused long queues, manual re-entry into billing software, delayed dispatches, and endless phone calls verifying rates and stock availability.",
    solution:
      "A custom system that helps manage orders, stock, billing, and customer communication more efficiently with direct mobile order entry and WhatsApp invoices.",
    quote:
      "SoftClinch created a custom app that reduced our daily showroom paperwork by over 80%. Everything connects right on mobile—from counter staff to warehouse dispatches.",
    techStack: ["Counter Tablet UI", "Wholesale Billing", "WhatsApp Cloud API", "Inventory Database"],
  },
  {
    id: "tyre-republic",
    businessTitle: "Automotive & Tyre Services",
    category: "Automotive & Commercial Tyre Retreading",
    tag: "Tyre Casing Tracking & Team Workflow",
    icon: ScanLine,
    accentGradient: "from-blue-500/10 via-blue-500/5 to-transparent border-blue-500/30 text-blue-600",
    badgeBg: "bg-blue-50 text-blue-700 border-blue-200",
    location: "Salem & Madurai, Tamil Nadu",
    rating: 5,
    highlightMetric: "0% Missing Tyres · 100% Casing Traceability",
    problem:
      "Tracking commercial tyre casings across inspection, buffing, and vulcanizing stages was chaotic. Missing or mixed-up tyre casings caused client disputes and internal team friction.",
    solution:
      "A custom solution for tracking tyre casings and keeping teams updated throughout the workflow with barcode scanning and instant status alerts.",
    quote:
      "SoftClinch's custom application tracks every tyre casing through all retreading stages, eliminates lost tyre claims, and keeps workshop teams and fleet clients completely in sync.",
    techStack: ["Mobile Barcode Scanner", "Workshop Floor Dashboard", "Internal Team Push Alerts", "Audit DB"],
  },
  {
    id: "chemical-company",
    businessTitle: "Chemical Manufacturing",
    category: "Specialty Chemicals & Batch Formulations",
    tag: "Formulation Locks & QC Compliance",
    icon: FlaskConical,
    accentGradient: "from-emerald-500/10 via-emerald-500/5 to-transparent border-emerald-500/30 text-emerald-600",
    badgeBg: "bg-emerald-50 text-emerald-700 border-emerald-200",
    location: "Ranipet & Guindy, Chennai",
    rating: 5,
    highlightMetric: "Zero Batch Scrap · 100% Quality Accuracy",
    problem:
      "Manual formula tracking on paper clipboards risked costly formulation errors, wasted raw chemical batches, and delayed quality compliance inspections.",
    solution:
      "A custom system for managing production and quality-related processes more accurately with locked recipe ratios and automatic Certificates of Analysis.",
    quote:
      "In chemical formulation, one ratio mistake costs lakhs. SoftClinch digitized our complete batch lifecycle and QC verification, ensuring error-free dispatches.",
    techStack: ["Production Batch Locks", "Automated COA Engine", "QC Audit Compliance", "Cloud Database"],
  },
  {
    id: "news-channel",
    businessTitle: "Media & Journalism",
    category: "24x7 Digital Media & Broadcast Journalism",
    tag: "Automated YouTube & CMS Publishing",
    icon: Video,
    accentGradient: "from-rose-500/10 via-rose-500/5 to-transparent border-rose-500/30 text-rose-600",
    badgeBg: "bg-rose-50 text-rose-700 border-rose-200",
    location: "Chennai, Tamil Nadu",
    rating: 5,
    highlightMetric: "90s Breaking News Speed · 100% Automated YouTube Upload",
    problem:
      "Manual video exporting, YouTube Studio uploads, title/tag entry, and website CMS posting took 25+ minutes per breaking clip, delaying critical news coverage.",
    solution:
      "A custom solution that reduces manual work involved in publishing digital content by connecting editor workstations directly to YouTube and news apps.",
    quote:
      "SoftClinch automated our digital publishing pipeline. The instant editors complete a video, our custom software publishes it to YouTube and updates our mobile app.",
    techStack: ["YouTube Data API", "Automated Video Pipeline", "CMS Webhooks", "Push Notification Engine"],
  },
];

// Related Service Links for Contextual Backlinks
const relatedServiceLinks = [
  {
    title: "Custom Application Development",
    description: "Tailored business software, web apps, mobile apps, CRM, ERP, and automation.",
    href: "/custom-application-development/",
  },
  {
    title: "Custom Commerce Development",
    description: "Custom eCommerce platforms, B2B wholesale portals, and multi-channel fulfillment.",
    href: "/custom-commerce-development/",
  },
  {
    title: "AI-Powered Business Systems",
    description: "Intelligent business automation, custom AI models, and predictive analytics dashboards.",
    href: "/services/ai-powered-business-systems/",
  },
  {
    title: "SAP Consulting",
    description: "Enterprise SAP implementations, S/4HANA migrations, and module customizations.",
    href: "/services/sap-consulting/",
  },
  {
    title: "SAP AMS Support",
    description: "SLA-driven maintenance, operational support, and optimization for SAP landscapes.",
    href: "/sap-ams-support/",
  },
  {
    title: "Inaiwazhi WhatsApp Automation",
    description: "Official WhatsApp Business API, automated chatbots, and CRM synchronization.",
    href: "/inaiwazhi-whatsapp-automation/",
  },
  {
    title: "Digital Marketing",
    description: "Full-funnel digital marketing, search visibility, SEO, and B2B lead generation systems.",
    href: "/digital-marketing/",
  },
];

// Lead Form Dropdown Options
const requirementOptions = [
  "Custom Business Software",
  "Website / Web Application",
  "Mobile Application",
  "Customer Management System",
  "Business Management System",
  "Automation",
  "Existing Software Improvement",
  "I Have an Idea",
  "Not Sure — I Need Guidance",
  "Other",
];

const INITIAL_CUSTOM_APP_FORM_DATA: ContactFormData = {
  name: "",
  company: "",
  email: "",
  phone: "",
  service: "Custom Business Software",
  message: "",
};

type ContactApiResponse = {
  success?: boolean;
  error?: string;
  fieldErrors?: ContactValidationErrors;
};

// Lead Form Component (Submits to /api/contact/ with Brevo backend, no Brevo front-end text)
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
          Thank You! Your Requirement Has Been Received.
        </h3>
        <p className="mx-auto max-w-md text-sm leading-relaxed text-slate-600">
          Thank you for reaching out. We have received your project details, sent a confirmation email to your inbox, and our technical architecture lead will follow up with you promptly.
        </p>

        <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-left text-xs text-slate-600 max-w-md mx-auto space-y-1.5">
          <div className="font-bold text-slate-900">Next Steps:</div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 flex-shrink-0" />
            <span>Technical requirement analysis by our senior engineering team</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 flex-shrink-0" />
            <span>Feasibility review & timeline estimation</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 flex-shrink-0" />
            <span>Free consultation call or customized proposal discussion</span>
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
          Tell Us About Your Requirement
        </h3>
        <p className="mt-1.5 text-sm text-slate-600 leading-relaxed">
          Provide your project requirements below. Our engineering team reviews all submissions and replies promptly.
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

        {/* Row 1: Full Name & Company / Business */}
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
              placeholder="e.g. Anand Kumar"
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
              placeholder="e.g. Lakshmi Enterprises"
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

        {/* Row 2: Work Email & Phone / WhatsApp */}
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
              placeholder="+91 94451 79931"
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

        {/* Row 3: What Do You Need? (Dropdown) */}
        <div>
          <label
            htmlFor="custom-app-service"
            className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-slate-700"
          >
            What Do You Need?
          </label>
          <select
            id="custom-app-service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className={`${inputClassName} ${getInputStateClassName(fieldErrors.service)} cursor-pointer`}
          >
            {requirementOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
          {fieldErrors.service && (
            <p className="mt-1 text-xs text-red-600 font-medium">{fieldErrors.service}</p>
          )}
        </div>

        {/* Row 4: Tell Us About Your Business or Requirement * */}
        <div>
          <label
            htmlFor="custom-app-message"
            className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-slate-700"
          >
            Tell Us About Your Business or Requirement <span className="text-red-500">*</span>
          </label>
          <textarea
            id="custom-app-message"
            name="message"
            rows={4}
            required
            value={formData.message}
            onChange={handleChange}
            className={`${inputClassName} resize-y ${getInputStateClassName(fieldErrors.message)}`}
            placeholder="Explain what your business does, the problem you are facing, current spreadsheets or tools used, or what you would like to build..."
            aria-invalid={Boolean(fieldErrors.message)}
            aria-describedby={fieldErrors.message ? "custom-app-message-error" : undefined}
          />
          {fieldErrors.message && (
            <p id="custom-app-message-error" className="mt-1 text-xs text-red-600 font-medium">
              {fieldErrors.message}
            </p>
          )}
        </div>

        {/* reCAPTCHA */}
        {process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ? (
          <div>
            <ReCAPTCHA
              sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
              onChange={(token) => setCaptchaToken(token || "")}
            />
          </div>
        ) : null}

        {/* Error Alert */}
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
              <span>Submit Requirement & Get a Free Consultation</span>
              <Send className="h-4 w-4" />
            </>
          )}
        </button>

        {/* Trust Badges */}
        <div className="pt-2 flex flex-wrap items-center justify-center gap-4 text-center text-xs text-slate-500 font-medium">
          <span className="inline-flex items-center gap-1">
            <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
            100% Confidential
          </span>
          <span className="inline-flex items-center gap-1">
            <Clock className="h-3.5 w-3.5 text-brand-navy" />
            Quick Response
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

// Sticky Floating WhatsApp Button for Mobile and Desktop (Positioned on Bottom-Left to avoid overlap with AI widget)
function FloatingWhatsAppButton() {
  return (
    <div
      className="fixed bottom-6 left-5 z-50 transition-all duration-300"
      role="region"
      aria-label="WhatsApp quick contact"
    >
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with SoftClinch on WhatsApp"
        className="group flex items-center gap-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-3 shadow-2xl shadow-emerald-950/40 hover:shadow-emerald-600/50 hover:scale-105 active:scale-95 transition-all duration-200 border border-emerald-400/40"
      >
        <div className="relative flex items-center justify-center">
          <MessageCircle className="h-5 w-5 fill-current" />
          <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-200" />
          </span>
        </div>
        <div className="flex flex-col text-left">
          <span className="text-xs font-bold leading-tight tracking-wide">
            Chat on WhatsApp
          </span>
          <span className="text-[10px] text-emerald-100/90 leading-none hidden sm:inline">
            Direct Tech Team · 15 Min
          </span>
        </div>
      </a>
    </div>
  );
}

// Quick 3-Field Consultation Form Above The Fold
function QuickHeroForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [requirement, setRequirement] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const trimmedName = name.trim();
    const trimmedPhone = phone.trim();
    const trimmedReq = requirement.trim();

    if (!trimmedName || trimmedName.length < 2) {
      setError("Please enter your full name (minimum 2 characters).");
      return;
    }

    const digitCount = trimmedPhone.replace(/\D/g, "").length;
    if (digitCount < 7 || digitCount > 15) {
      setError("Please enter a valid 10-digit mobile or WhatsApp number.");
      return;
    }

    if (!trimmedReq || trimmedReq.length < 5) {
      setError("Please briefly describe your requirement (minimum 5 characters).");
      return;
    }

    setIsSubmitting(true);
    try {
      const cleanPhoneDigits = trimmedPhone.replace(/\D/g, "");
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: trimmedName,
          phone: trimmedPhone,
          company: "Quick Inquiry",
          email: `quicklead.${cleanPhoneDigits || "inquiry"}@softclinch.com`,
          service: "Custom Application Development",
          message: `[Above-The-Fold Quick Lead]\nPhone/WhatsApp: ${trimmedPhone}\nRequirement: ${trimmedReq}`,
          formId: 1,
          formStartedAt: Date.now() - 5000,
        }),
      });

      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        throw new Error(data.error || "Unable to submit your inquiry right now.");
      }

      setSubmitted(true);
      setName("");
      setPhone("");
      setRequirement("");
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Unable to submit right now. You can chat directly via WhatsApp below!"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsAppDirect = () => {
    const text = `Hi SoftClinch, my name is ${name.trim() || "Business Owner"}. My Phone/WhatsApp is ${phone.trim() || ""}. Requirement: ${requirement.trim() || "Custom Software / Application Development"}.`;
    const url = `https://wa.me/919445179931?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  if (submitted) {
    return (
      <div className="rounded-2xl bg-emerald-950/80 border border-emerald-500/40 p-6 text-center text-white mt-4">
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 mb-3">
          <CheckCircle2 className="h-6 w-6" />
        </div>
        <h4 className="text-lg font-bold text-white">
          Requirement Received! Thank You!
        </h4>
        <p className="mt-1 text-xs text-slate-300 max-w-lg mx-auto">
          Our technical engineering lead will review your requirement and call or WhatsApp you within 15 minutes.
        </p>
        <div className="mt-4 flex flex-wrap justify-center gap-3">
          <button
            type="button"
            onClick={handleWhatsAppDirect}
            className="inline-flex items-center gap-1.5 rounded-xl bg-emerald-600 px-4 py-2 text-xs font-bold text-white hover:bg-emerald-500 transition cursor-pointer"
          >
            <MessageCircle className="h-3.5 w-3.5" />
            Open WhatsApp Chat Now
          </button>
          <a
            href="tel:+919445179931"
            className="inline-flex items-center gap-1.5 rounded-xl bg-white/10 border border-white/20 px-4 py-2 text-xs font-bold text-white hover:bg-white/20 transition"
          >
            <Phone className="h-3.5 w-3.5 text-emerald-400" />
            Call +91 94451 79931
          </a>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-5 space-y-3" noValidate>
      {error && (
        <div className="rounded-xl bg-rose-500/20 border border-rose-500/40 px-3.5 py-2 text-xs text-rose-300 font-medium">
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div>
          <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-300 mb-1">
            1. Full Name <span className="text-amber-400">*</span>
          </label>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. Rajesh Kumar"
            className="w-full rounded-xl border border-slate-700 bg-slate-900/90 px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:border-amber-400 focus:outline-none focus:ring-1 focus:ring-amber-400 transition"
          />
        </div>

        <div>
          <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-300 mb-1">
            2. Phone / WhatsApp <span className="text-amber-400">*</span>
          </label>
          <input
            type="tel"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="e.g. +91 98765 43210"
            className="w-full rounded-xl border border-slate-700 bg-slate-900/90 px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:border-amber-400 focus:outline-none focus:ring-1 focus:ring-amber-400 transition"
          />
        </div>

        <div>
          <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-300 mb-1">
            3. Brief Requirement <span className="text-amber-400">*</span>
          </label>
          <input
            type="text"
            required
            value={requirement}
            onChange={(e) => setRequirement(e.target.value)}
            placeholder="e.g. ERP for retail, CRM, customer portal"
            className="w-full rounded-xl border border-slate-700 bg-slate-900/90 px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:border-amber-400 focus:outline-none focus:ring-1 focus:ring-amber-400 transition"
          />
        </div>
      </div>

      <div className="pt-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div className="flex flex-wrap items-center gap-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex items-center justify-center rounded-xl bg-brand-terracotta px-5 py-2.5 text-xs sm:text-sm font-bold text-white shadow-lg shadow-brand-terracotta/30 hover:bg-brand-terracotta/90 hover:scale-[1.02] active:scale-95 transition disabled:opacity-60 cursor-pointer"
          >
            {isSubmitting ? (
              <span className="flex items-center gap-1.5">
                <span className="h-3 w-3 animate-spin rounded-full border-2 border-white border-t-transparent" />
                Submitting...
              </span>
            ) : (
              <span className="flex items-center gap-1.5">
                Get Instant Estimate
                <ArrowRight className="h-3.5 w-3.5" />
              </span>
            )}
          </button>

          <button
            type="button"
            onClick={handleWhatsAppDirect}
            className="inline-flex items-center justify-center rounded-xl bg-emerald-600 px-4 py-2.5 text-xs sm:text-sm font-bold text-white shadow-md shadow-emerald-600/30 hover:bg-emerald-500 hover:scale-[1.02] active:scale-95 transition cursor-pointer"
          >
            <MessageCircle className="mr-1.5 h-3.5 w-3.5" />
            WhatsApp Details
          </button>
        </div>

        <div className="flex items-center gap-3 text-[11px] text-slate-400 font-mono">
          <span>⚡ 15-Min Response</span>
          <span>·</span>
          <span>🔒 Strict NDA</span>
          <span>·</span>
          <a
            href="tel:+919445179931"
            className="text-amber-400 hover:underline font-bold inline-flex items-center gap-1"
          >
            <Phone className="h-3 w-3" />
            +91 94451 79931
          </a>
        </div>
      </div>
    </form>
  );
}

export function CustomDevelopment() {
  const [currentHeroSlide, setCurrentHeroSlide] = useState(0);

  // 5-Second Automatic Carousel Interval
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
            <span>Serving businesses across Tamil Nadu with custom software, websites & apps</span>
          </div>
          <div className="flex items-center gap-4 sm:gap-5">
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
              className="hidden sm:inline-flex items-center gap-1.5 font-semibold text-slate-200 hover:text-white transition-colors"
            >
              <Mail className="h-4 w-4 text-brand-terracotta" />
              {CONTACT.email}
            </a>
            <a
              href="tel:+919445179931"
              className="inline-flex items-center gap-1.5 font-bold text-emerald-400 hover:text-emerald-300 transition-colors"
              aria-label="Call +91 94451 79931"
            >
              <Phone className="h-3.5 w-3.5 text-emerald-400 animate-pulse" />
              <span>+91 94451 79931</span>
            </a>
          </div>
        </div>
      </div>

      {/* 1. HERO SECTION: 3 Hero Slides in Automatic Moving Carousel (Auto-Moves Every 5 Seconds) */}
      <section className="relative overflow-hidden border-b border-slate-200 bg-[linear-gradient(180deg,#f8fafc_0%,#ffffff_100%)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,51,102,0.10),transparent_50%),radial-gradient(circle_at_top_right,rgba(153,51,0,0.08),transparent_50%)]" />

        <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
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

                <h1 className="mt-5 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl md:text-5xl lg:text-[3.25rem] leading-[1.14]">
                  {activeSlide.title}
                </h1>

                <p className="mt-4 text-lg sm:text-xl font-bold leading-snug text-brand-navy">
                  {activeSlide.subtitle}
                </p>

                <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-600 sm:text-lg">
                  {activeSlide.description}
                </p>

                <p className="mt-4 text-xs sm:text-sm leading-relaxed text-slate-700 bg-slate-50/90 border border-slate-200/90 rounded-2xl p-4 shadow-2xs">
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

                {/* Dynamic Hero CTAs */}
                <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
                  <Link
                    href={activeSlide.primaryHref}
                    className="inline-flex items-center justify-center rounded-xl bg-brand-navy px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-brand-navy/20 transition hover:bg-brand-navy/90 hover:scale-[1.02]"
                  >
                    {activeSlide.primaryCta}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>

                  {activeSlide.secondaryIsExternal ? (
                    <a
                      href={activeSlide.secondaryHref}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center rounded-xl bg-emerald-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-emerald-600/20 transition hover:bg-emerald-700 hover:scale-[1.02]"
                    >
                      <MessageCircle className="mr-2 h-4 w-4" />
                      {activeSlide.secondaryCta}
                    </a>
                  ) : (
                    <Link
                      href={activeSlide.secondaryHref}
                      className="inline-flex items-center justify-center rounded-xl bg-emerald-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-emerald-600/20 transition hover:bg-emerald-700 hover:scale-[1.02]"
                    >
                      {activeSlide.secondaryCta}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  )}

                  <a
                    href="tel:+919445179931"
                    className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-5 py-3.5 text-sm font-bold text-slate-800 transition hover:border-emerald-600 hover:text-emerald-700 hover:scale-[1.02] shadow-sm"
                    aria-label="Direct Call SoftClinch Helpline at +91 94451 79931"
                  >
                    <Phone className="mr-2 h-4 w-4 text-emerald-600 animate-pulse" />
                    Call +91 94451 79931
                  </a>

                  <a
                    href={EMAIL_LINK}
                    className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-5 py-3.5 text-sm font-semibold text-slate-700 transition hover:border-brand-terracotta hover:text-brand-terracotta shadow-sm"
                  >
                    <Mail className="mr-2 h-4 w-4 text-brand-terracotta" />
                    Email Us
                  </a>
                </div>

                {/* Tamil Nadu Coverage Bar with Click-to-Call Helpline */}
                <div className="mt-7 rounded-2xl border border-slate-200 bg-slate-50/90 p-3.5 shadow-xs flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2.5">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-bold text-slate-900">
                      <MapPin className="h-4 w-4 text-brand-terracotta" />
                      <span>Serving businesses across Tamil Nadu</span>
                    </div>
                    <p className="mt-1 text-[11px] text-slate-600 leading-relaxed font-mono">
                      Chennai · Coimbatore · Madurai · Salem · Tiruppur · Erode · Hosur · Vellore · Tiruchirappalli & more
                    </p>
                  </div>
                  <a
                    href="tel:+919445179931"
                    className="inline-flex items-center gap-1.5 rounded-xl bg-white border border-slate-200 px-3.5 py-1.5 text-xs font-bold text-slate-900 hover:border-emerald-600 hover:text-emerald-700 transition shrink-0 shadow-xs"
                    aria-label="Direct Helpline +91 94451 79931"
                  >
                    <Phone className="h-3.5 w-3.5 text-emerald-600 animate-pulse" />
                    <span>Helpline: +91 94451 79931</span>
                  </a>
                </div>

                {/* 5-Second Carousel Indicators */}
                <div className="mt-6 flex items-center gap-2">
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

            {/* Right: 3D BENTO MATRIX GRID */}
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

          {/* ABOVE-THE-FOLD QUICK 3-FIELD INQUIRY CARD */}
          <div className="mt-10 lg:mt-12 rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-950 via-brand-navy to-slate-900 p-6 sm:p-8 text-white shadow-2xl relative overflow-hidden">
            <div className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-brand-terracotta/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-emerald-500/15 blur-3xl" />

            <div className="relative z-10">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 pb-4 border-b border-white/10">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-amber-400/15 border border-amber-400/30 px-3 py-1 text-xs font-bold text-amber-300">
                    <Zap className="h-3.5 w-3.5 text-amber-400" />
                    <span>Quick 30-Second Consultation</span>
                  </div>
                  <h3 className="mt-2 text-xl font-bold sm:text-2xl text-white">
                    Tell Us Your Requirement — Get Instant Architecture & Cost Estimate
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm text-slate-300">
                    High-intent inquiry? Skip the full form. Our technical team reviews and responds within 15 minutes.
                  </p>
                </div>
                <div className="flex items-center gap-3 shrink-0 text-xs font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 rounded-xl px-3 py-2">
                  <Activity className="h-4 w-4 animate-pulse" />
                  <span>Guaranteed 15-Min Response</span>
                </div>
              </div>

              {/* The 3-Field Quick Form */}
              <QuickHeroForm />
            </div>
          </div>
        </div>
      </section>

      {/* 4K Bento Matrix Rectangular Telemetry Bar */}
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

      {/* 2. YOUR BUSINESS PROBLEM */}
      <section className="relative mx-auto max-w-7xl px-4 py-16 sm:py-20 sm:px-6 lg:px-8">
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 rounded-full bg-brand-terracotta/10 px-4 py-1.5 text-xs font-bold text-brand-terracotta border border-brand-terracotta/20 mb-3.5">
            <AlertCircle className="h-3.5 w-3.5" />
            <span>YOUR BUSINESS PROBLEM</span>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl leading-tight">
            Is Your Business Facing Any of These Problems?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            You don't need to know exactly what software you need.{" "}
            <span className="font-semibold text-slate-900">Start with the problem.</span> We engineer practical digital systems built specifically around your day-to-day workflow.
          </p>
        </div>

        {/* Master Bento Grid Matrix — Zero White Space, Perfectly Balanced */}
        <div className="space-y-5">
          {/* Row 1: Left Showcase Diagram (7 cols) + Right Cards 01 & 02 (5 cols) */}
          <div className="grid gap-5 lg:grid-cols-12 lg:items-stretch">
            {/* Left Flagship Card with Diagram */}
            <TiltCard className="lg:col-span-7 rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-7 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-rose-500/10 border border-rose-500/20 px-3 py-1 text-xs font-bold text-rose-600">
                    <span className="h-2 w-2 rounded-full bg-rose-500 animate-pulse" />
                    Problem Breakdown
                  </span>
                  <span className="text-xs font-mono font-bold text-slate-400">
                    SYSTEM BOTTLENECKS
                  </span>
                </div>

                <div className="rounded-2xl overflow-hidden bg-slate-950 p-2 sm:p-3 shadow-inner">
                  <TiltImagePanel
                    src={assetPath("/images/02-problem-disconnected-systems.png")}
                    alt="Disconnected Systems and Manual Process Bottlenecks"
                    badgeText="Operational Friction"
                    className="w-full"
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

              <div className="mt-5 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-4 text-slate-600">
                  <span className="inline-flex items-center gap-1.5 font-medium">
                    <span className="h-1.5 w-1.5 rounded-full bg-rose-500" />
                    Manual Data Re-Entry
                  </span>
                  <span className="inline-flex items-center gap-1.5 font-medium">
                    <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                    Unsynced Tools
                  </span>
                </div>
                <Link
                  href="#contact-form"
                  className="inline-flex items-center gap-1 font-bold text-brand-terracotta hover:underline"
                >
                  Diagnose My Workflow <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </TiltCard>

            {/* Right Stack: Card 01 & Card 02 */}
            <div className="lg:col-span-5 flex flex-col gap-5">
              {/* Card 01 */}
              <TiltCard className="flex-1 rounded-3xl border border-slate-200/90 bg-white p-6 shadow-sm hover:shadow-xl hover:border-brand-terracotta/40 transition-all duration-300 flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-terracotta/10 px-2.5 py-0.5 text-xs font-bold text-brand-terracotta">
                      <span className="h-1.5 w-1.5 rounded-full bg-brand-terracotta" />
                      {problemCards[0].badge}
                    </span>
                    <span className="text-xs font-mono font-bold text-slate-400 group-hover:text-brand-terracotta transition-colors">
                      {problemCards[0].id}
                    </span>
                  </div>

                  <div className="flex items-start gap-3 mt-1">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-brand-navy group-hover:bg-brand-navy group-hover:text-white transition-all duration-300">
                      <FileSpreadsheet className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-950 group-hover:text-brand-navy transition-colors">
                        {problemCards[0].title}
                      </h3>
                    </div>
                  </div>

                  <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                    {problemCards[0].description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-400 font-medium">Bottleneck:</span>
                  <span className="font-semibold text-slate-700 truncate max-w-[70%] text-right">
                    {problemCards[0].symptom}
                  </span>
                </div>
              </TiltCard>

              {/* Card 02 */}
              <TiltCard className="flex-1 rounded-3xl border border-slate-200/90 bg-white p-6 shadow-sm hover:shadow-xl hover:border-brand-terracotta/40 transition-all duration-300 flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-terracotta/10 px-2.5 py-0.5 text-xs font-bold text-brand-terracotta">
                      <span className="h-1.5 w-1.5 rounded-full bg-brand-terracotta" />
                      {problemCards[1].badge}
                    </span>
                    <span className="text-xs font-mono font-bold text-slate-400 group-hover:text-brand-terracotta transition-colors">
                      {problemCards[1].id}
                    </span>
                  </div>

                  <div className="flex items-start gap-3 mt-1">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-brand-navy group-hover:bg-brand-navy group-hover:text-white transition-all duration-300">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-950 group-hover:text-brand-navy transition-colors">
                        {problemCards[1].title}
                      </h3>
                    </div>
                  </div>

                  <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                    {problemCards[1].description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-400 font-medium">Bottleneck:</span>
                  <span className="font-semibold text-slate-700 truncate max-w-[70%] text-right">
                    {problemCards[1].symptom}
                  </span>
                </div>
              </TiltCard>
            </div>
          </div>

          {/* Row 2: 3 Balanced Problem Cards (Cards 03, 04, 05) */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[problemCards[2], problemCards[3], problemCards[4]].map((problem) => {
              const Icon = problem.icon;
              return (
                <TiltCard
                  key={problem.title}
                  className="rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-7 shadow-sm hover:shadow-xl hover:border-brand-terracotta/40 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3.5">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-terracotta/10 px-2.5 py-0.5 text-xs font-bold text-brand-terracotta">
                        <span className="h-1.5 w-1.5 rounded-full bg-brand-terracotta" />
                        {problem.badge}
                      </span>
                      <span className="text-xs font-mono font-bold text-slate-400 group-hover:text-brand-terracotta transition-colors">
                        {problem.id}
                      </span>
                    </div>

                    <div className="flex items-start gap-3 mt-2">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-brand-navy group-hover:bg-brand-navy group-hover:text-white transition-all duration-300">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-slate-950 group-hover:text-brand-navy transition-colors">
                          {problem.title}
                        </h3>
                      </div>
                    </div>

                    <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                      {problem.description}
                    </p>
                  </div>

                  <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="text-slate-400 font-medium">Bottleneck:</span>
                    <span className="font-semibold text-slate-700 truncate max-w-[70%] text-right">
                      {problem.symptom}
                    </span>
                  </div>
                </TiltCard>
              );
            })}
          </div>

          {/* Row 3: Card 06 (5 cols) + Featured Card 07 (7 cols) */}
          <div className="grid gap-5 lg:grid-cols-12 lg:items-stretch">
            {/* Card 06 */}
            <div className="lg:col-span-5 flex">
              <TiltCard className="w-full rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-7 shadow-sm hover:shadow-xl hover:border-brand-terracotta/40 transition-all duration-300 flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3.5">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-terracotta/10 px-2.5 py-0.5 text-xs font-bold text-brand-terracotta">
                      <span className="h-1.5 w-1.5 rounded-full bg-brand-terracotta" />
                      {problemCards[5].badge}
                    </span>
                    <span className="text-xs font-mono font-bold text-slate-400 group-hover:text-brand-terracotta transition-colors">
                      {problemCards[5].id}
                    </span>
                  </div>

                  <div className="flex items-start gap-3 mt-2">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-brand-navy group-hover:bg-brand-navy group-hover:text-white transition-all duration-300">
                      <Wrench className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-950 group-hover:text-brand-navy transition-colors">
                        {problemCards[5].title}
                      </h3>
                    </div>
                  </div>

                  <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                    {problemCards[5].description}
                  </p>
                </div>

                <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-400 font-medium">Bottleneck:</span>
                  <span className="font-semibold text-slate-700 truncate max-w-[70%] text-right">
                    {problemCards[5].symptom}
                  </span>
                </div>
              </TiltCard>
            </div>

            {/* Featured Card 07: Need a Customer Portal? */}
            <div className="lg:col-span-7 flex">
              <TiltCard className="w-full rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-950 via-brand-navy to-slate-900 p-6 sm:p-7 text-white shadow-xl flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30 px-3 py-1 text-xs font-bold">
                      <span className="h-1.5 w-1.5 rounded-full bg-amber-400 animate-pulse" />
                      {problemCards[6].badge}
                    </span>
                    <span className="text-xs font-mono font-bold text-slate-400">
                      07
                    </span>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-cyan-300 border border-white/15">
                      <Globe className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">
                        {problemCards[6].title}
                      </h3>
                      <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                        {problemCards[6].description}
                      </p>
                    </div>
                  </div>

                  {/* Feature chips */}
                  <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs text-slate-200">
                    <div className="rounded-xl bg-white/5 border border-white/10 p-2.5 flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                      <span>Self-Service Portal</span>
                    </div>
                    <div className="rounded-xl bg-white/5 border border-white/10 p-2.5 flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                      <span>Order & Status Tracking</span>
                    </div>
                    <div className="rounded-xl bg-white/5 border border-white/10 p-2.5 flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                      <span>Instant WhatsApp Sync</span>
                    </div>
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs">
                  <div className="text-slate-400">
                    <span className="text-amber-400 font-bold">Key Friction: </span>
                    {problemCards[6].symptom}
                  </div>
                  <Link
                    href="#contact-form"
                    className="inline-flex items-center gap-1.5 font-bold text-cyan-300 hover:text-cyan-200 transition"
                  >
                    Build Customer Portal <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </TiltCard>
            </div>
          </div>

          {/* Row 4: High-Conversion Problem Bottom Callout & Actions */}
          <div className="rounded-3xl border border-slate-200 bg-gradient-to-r from-slate-50 via-white to-slate-50 p-6 sm:p-8 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-brand-terracotta">
                  Take the Next Step
                </span>
                <h3 className="text-xl font-bold text-slate-950 sm:text-2xl mt-1">
                  You don't need to know the software. Start with the problem.
                </h3>
                <p className="mt-1.5 text-sm text-slate-600 max-w-2xl">
                  Tell us what your team is struggling with, and we'll help design a solution that fits your exact workflow.
                </p>
              </div>
              <div className="flex flex-wrap sm:flex-nowrap gap-3 shrink-0">
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
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. THE CUSTOM ADVANTAGE */}
      <section className="border-t border-slate-200 bg-[linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-terracotta">
                The Custom Advantage
              </span>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
                Your Business Is Different. Your Software Can Be Too.
              </h2>
              <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
                Every business has its own way of working.
              </p>
              <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
                Instead of changing your business to fit ready-made software, we build a solution around your business requirements.
              </p>
              <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
                We first understand how your business works, what your team needs, and what you want to achieve.
              </p>
              <p className="mt-3 text-lg font-semibold text-brand-navy">
                Then we build a solution that makes your work easier.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="#contact-form"
                  className="inline-flex items-center rounded-xl bg-brand-navy px-6 py-3.5 text-sm font-bold text-white shadow-md hover:bg-brand-navy/90 transition"
                >
                  Discuss Your Custom Requirement
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center rounded-xl bg-emerald-600 px-5 py-3.5 text-sm font-bold text-white shadow-md hover:bg-emerald-700 transition"
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  WhatsApp Us
                </a>
              </div>
            </div>

            {/* 3D Visual Comparison */}
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

          {/* 8 Advantage Cards with 3D Tilt */}
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {customAdvantages.map((item) => (
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

          <div className="mt-12 text-center">
            <p className="text-base font-bold text-brand-navy">
              Build a solution around your business — not the other way around.
            </p>
            <div className="mt-4">
              <Link
                href="#contact-form"
                className="inline-flex items-center text-sm font-bold text-brand-terracotta hover:underline"
              >
                Discuss Your Custom Requirement
                <ArrowRight className="ml-1.5 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. WHAT WE BUILD */}
      <section className="border-t border-slate-200 bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-terracotta/10 border border-brand-terracotta/20 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-brand-terracotta mb-2">
              What We Build
            </span>
            <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-950 leading-tight">
              What Can We Build for You?
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
              We build custom software based on your business requirements — from a simple internal application to a complete business platform.
            </p>
          </div>

          {/* 9 Software Types with 3D Tilt Cards */}
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whatWeBuildItems.map((item) => (
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

      {/* 5. WHAT DO YOU WANT TO IMPROVE? */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-terracotta">
            Focus Areas
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
            Start With Your Business Problem
          </h2>
          <p className="mt-4 text-lg text-slate-600 leading-relaxed">
            You don't need to know what technology you need.
          </p>
          <p className="mt-1 text-lg font-semibold text-brand-navy">
            Just tell us what is difficult today.
          </p>
        </div>

        {/* 8 Improvement Cards */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {improvementAreas.map((item) => (
            <TiltCard
              key={item.title}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-xl transition flex flex-col justify-between"
            >
              <div>
                <div
                  style={{ transform: "translateZ(20px)" }}
                  className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-navy/5 text-brand-navy mb-5"
                >
                  <item.icon className="h-6 w-6" />
                </div>
                <h3
                  style={{ transform: "translateZ(15px)" }}
                  className="text-lg font-bold text-slate-950"
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

        {/* Callout Banner */}
        <div className="mt-12 rounded-3xl bg-[linear-gradient(135deg,#003366_0%,#163a63_60%,#993300_140%)] p-8 text-white shadow-xl sm:p-10">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="max-w-2xl">
              <h3 className="text-2xl font-bold sm:text-3xl">
                Tell us what you are trying to improve.
              </h3>
              <p className="mt-2 text-slate-200 text-base leading-relaxed">
                We'll help you understand what can be built, what to prioritise, and the right next step.
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
            </div>
          </div>
        </div>
      </section>

      {/* 6. BUSINESS AREAS */}
      <section className="border-t border-slate-200 bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-terracotta/10 border border-brand-terracotta/20 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-brand-terracotta mb-2">
              Business Areas
            </span>
            <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-950 leading-tight">
              Software Built Around Your Business
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
              Your application can be designed around the areas where your business needs improvement.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {functionalBusinessAreas.map((area) => (
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

      {/* 7. INTEGRATIONS */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="rounded-[36px] border border-slate-200 bg-slate-950 text-white p-8 sm:p-12 shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(153,51,0,0.25),transparent_40%),radial-gradient(circle_at_bottom_left,rgba(0,51,102,0.35),transparent_50%)]" />

            <div className="relative z-10 max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-terracotta">
                Integrations
              </span>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl text-white">
                Connect the Tools Your Business Already Uses
              </h2>
              <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-300">
                Your business may already use different software and platforms. Instead of replacing everything, we can help connect your systems so information can move between them more easily.
              </p>

              <div className="mt-8">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
                  We Can Work With:
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
                <p className="text-xs uppercase font-mono tracking-wider text-slate-400">
                  The goal is simple:
                </p>
                <h3 className="mt-1 text-xl sm:text-2xl font-bold text-white">
                  Make Your Existing Business Tools Work Better Together.
                </h3>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href="#contact-form"
                    className="inline-flex items-center rounded-xl bg-white px-5 py-3 text-xs font-bold text-brand-navy hover:bg-slate-100 transition shadow-md"
                  >
                    Discuss Your Requirement
                    <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                  </Link>
                  <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center rounded-xl bg-emerald-500 px-5 py-3 text-xs font-bold text-white hover:bg-emerald-600 transition shadow-md"
                  >
                    <MessageCircle className="mr-1.5 h-3.5 w-3.5" />
                    WhatsApp Us
                  </a>
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

      {/* 8. TAMIL NADU */}
      <section className="border-t border-slate-200 bg-[linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-terracotta">
                Tamil Nadu
              </span>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
                Custom Application Development Across Tamil Nadu
              </h2>
              <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-600">
                SoftClinch works with businesses across Tamil Nadu.
              </p>
              <p className="mt-3 text-base leading-relaxed text-slate-700">
                Whether you are based in Chennai, Coimbatore, Madurai, Tiruchirappalli, Salem, Tiruppur, Erode, Hosur, Vellore, or another location in Tamil Nadu, we can work with you on your software requirements.
              </p>

              {/* Serving Businesses Across */}
              <div className="mt-6">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                  Serving Businesses Across:
                </p>
                <div className="flex flex-wrap gap-2">
                  {tamilNaduHubs.map((city) => (
                    <span
                      key={city}
                      className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-800 shadow-sm hover:border-brand-terracotta transition-colors"
                    >
                      <MapPin className="h-3 w-3 text-brand-terracotta" />
                      {city}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 rounded-2xl bg-brand-navy/5 border border-brand-navy/15 p-4">
                <p className="text-sm font-bold text-brand-navy">
                  You don't need to be in Chennai to work with us.
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
        </div>
      </section>

      {/* 9. INDUSTRIES */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-terracotta/10 border border-brand-terracotta/20 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-brand-terracotta mb-2">
            Industries
          </span>
          <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-950 leading-tight">
            Built for Different Types of Businesses
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
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

      {/* 10. OUR PROCESS */}
      <section className="border-t border-slate-200 bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-terracotta">
                Our Process
              </span>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
                From Your Idea to a Working Solution
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

      {/* 11. EXISTING SOFTWARE */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="rounded-[36px] border border-slate-200 bg-[linear-gradient(180deg,#ffffff_0%,#f1f5f9_100%)] p-8 sm:p-10 shadow-sm">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-terracotta">
              Existing Software
            </span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
              Already Have an Application?
            </h2>
            <p className="mt-4 text-base text-slate-700 leading-relaxed">
              You don't always need to start from scratch.
            </p>
            <p className="mt-2 text-base text-slate-700 leading-relaxed">
              If your existing software is outdated, difficult to use, slow, or missing important features, we can help improve it.
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
                  WhatsApp Us
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

      {/* 12. WHY SOFTCLINCH */}
      <section className="border-t border-slate-200 bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-terracotta">
                Why SoftClinch
              </span>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
                Why Choose SoftClinch?
              </h2>
              <p className="mt-4 text-lg text-slate-600 leading-relaxed">
                We focus on solving business challenges with practical, useful software.
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

      {/* 13. COST */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-terracotta">
              Cost
            </span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
              How Much Does Custom Software Cost?
            </h2>
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-600">
              There is no single price for custom application development because every project is different.
            </p>
            <p className="mt-2 text-base sm:text-lg leading-relaxed text-slate-700">
              Instead of giving you an unrealistic fixed price, we'll first understand what you actually need.
            </p>

            <div className="mt-6 rounded-2xl bg-slate-50 border border-slate-200 p-6">
              <h3 className="text-sm font-bold text-slate-950 mb-3">
                We'll first understand:
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
              <h3 className="text-xl font-bold text-slate-950">The Cost Can Depend On:</h3>
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

      {/* 14. REAL BUSINESS EXAMPLES (Continuous Right-to-Left Infinite Slider with 3D Tilt Cards) */}
      <section className="border-t border-slate-200 bg-slate-50/70 py-24 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 -z-0 h-96 w-96 rounded-full bg-brand-navy/5 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 -z-0 h-96 w-96 rounded-full bg-brand-terracotta/5 blur-3xl pointer-events-none" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200 px-3.5 py-1 text-xs font-bold text-emerald-800">
              <Sparkles className="h-3.5 w-3.5 text-emerald-600" />
              <span>Real Business Examples</span>
            </div>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl leading-tight">
              Real Business Problems. Custom Solutions.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
              Our custom solutions have been designed for different business requirements, including:
            </p>

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
                      {/* Header */}
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

                        <div className="flex items-center gap-1 bg-amber-50 border border-amber-200/80 px-2 py-0.5 rounded-full shrink-0">
                          {[...Array(item.rating)].map((_, s) => (
                            <Star key={s} className="h-3 w-3 fill-amber-400 text-amber-400" />
                          ))}
                          <span className="text-[11px] font-bold text-amber-800 ml-0.5">5.0</span>
                        </div>
                      </div>

                      {/* Business Title (Industry Name Only, No personal name, role or location) */}
                      <div className="mb-4">
                        <h3 className="text-lg font-bold text-slate-950 group-hover:text-brand-navy transition-colors">
                          {item.businessTitle}
                        </h3>
                      </div>

                      {/* Highlight Metric */}
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

                      {/* Problem vs Solution Box */}
                      <div className="space-y-2.5 rounded-2xl bg-slate-50 border border-slate-200 p-3.5 text-xs text-slate-700 mb-5">
                        <div>
                          <span className="font-bold text-rose-800 uppercase tracking-wide text-[10px] block mb-0.5">
                            The Challenge:
                          </span>
                          <p className="text-slate-600 leading-relaxed text-[11px] sm:text-xs">{item.problem}</p>
                        </div>
                        <div className="pt-2 border-t border-slate-200">
                          <span className="font-bold text-emerald-800 uppercase tracking-wide text-[10px] block mb-0.5">
                            Custom Solution Built:
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

                    {/* Footer */}
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
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-12 relative z-10 text-center">
          <p className="text-lg font-bold text-slate-900">
            Have a business problem similar to these?
          </p>
          <div className="mt-4">
            <Link
              href="#contact-form"
              className="inline-flex items-center justify-center rounded-xl bg-brand-navy px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-brand-navy/20 transition hover:bg-brand-navy/90 hover:scale-[1.02]"
            >
              Discuss Your Requirement
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 15. COMPLEX BUSINESS REQUIREMENTS */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-brand-navy to-slate-900 p-8 sm:p-12 text-white shadow-xl flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">
              Complex Business Requirements
            </span>
            <h3 className="mt-2 text-2xl font-bold sm:text-3xl text-white">
              Have a Complex or Non-Standard Business Challenge?
            </h3>
            <p className="mt-3 text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
              Not every business problem can be solved with ready-made software. Whether you need to connect your existing systems, track a unique business process, automate repetitive work, or build something completely new, we can discuss your requirement and help you understand what can be built.
            </p>
          </div>
          <Link
            href="#contact-form"
            className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-brand-navy shadow-lg hover:bg-slate-100 transition shrink-0"
          >
            Tell Us What You Need
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* 16. FAQ */}
      <FaqSection title="Frequently Asked Questions" items={customDevelopmentFaq} />

      {/* 17. FINAL CTA & 18. LEAD FORM */}
      <section id="contact-form" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 scroll-mt-12">
        <div className="rounded-[40px] bg-[linear-gradient(135deg,#003366_0%,#0b2545_60%,#993300_150%)] p-8 sm:p-12 lg:p-16 text-white shadow-2xl relative overflow-hidden">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-start relative z-10">
            {/* 17. FINAL CTA Left Column */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/80">
                  Final CTA
                </span>
                <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl leading-tight">
                  Have a Business Problem That Software Could Solve?
                </h2>
                <p className="mt-4 text-base sm:text-lg text-slate-200 leading-relaxed">
                  You don't need to know the technical details.
                </p>

                <div className="mt-6 rounded-3xl bg-white/10 backdrop-blur-sm border border-white/20 p-5 sm:p-6">
                  <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-emerald-300 mb-3">
                    Just tell us:
                  </p>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-slate-100">
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                      <span className="font-semibold">What does your business do?</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                      <span className="font-semibold">What problem are you facing?</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                      <span className="font-semibold">How are you handling it today?</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                      <span className="font-semibold">What would you like to improve or build?</span>
                    </li>
                  </ul>
                  <p className="mt-4 text-xs text-slate-200 font-medium">
                    We'll help you understand what can be built and the right next step for your business.
                  </p>
                </div>

                {/* Direct CTA Buttons */}
                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <Link
                    href="#contact-form"
                    className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-xs sm:text-sm font-bold text-brand-navy shadow-lg hover:bg-slate-100 transition"
                  >
                    Discuss Your Requirement
                    <ArrowRight className="ml-1.5 h-4 w-4" />
                  </Link>

                  <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-xl bg-emerald-500 px-5 py-3 text-xs sm:text-sm font-bold text-white shadow-lg shadow-emerald-500/30 hover:bg-emerald-600 transition hover:scale-[1.02]"
                  >
                    <MessageCircle className="mr-2 h-4 w-4" />
                    WhatsApp Us
                  </a>

                  <a
                    href={PHONE_LINK}
                    className="inline-flex items-center justify-center rounded-xl border border-white/30 bg-white/10 px-4 py-3 text-xs sm:text-sm font-bold text-white hover:bg-white/20 transition"
                  >
                    <Phone className="mr-2 h-4 w-4" />
                    Call Us
                  </a>
                </div>
              </div>

              {/* Complete Ecosystem Visual Panel */}
              <div className="mt-8">
                <TiltImagePanel
                  src={assetPath("/images/21-final-cta-complete-ecosystem.png")}
                  alt="SoftClinch Complete Software Ecosystem"
                  badgeText="End-to-End Delivery"
                />
              </div>
            </div>

            {/* 18. LEAD FORM Right Column */}
            <div className="lg:col-span-7">
              <CustomAppContactForm />
            </div>
          </div>

          {/* 19. FOOTER SECTION */}
          <div className="mt-12 border-t border-white/15 pt-8 text-xs sm:text-sm text-slate-300">
            <div className="font-bold text-white text-base">SoftClinch Consulting Services</div>
            <div className="mt-1.5 text-slate-200">
              Custom Application Development · Business Software · Web Applications · Mobile Apps · CRM · ERP · Automation · SaaS
            </div>
            <div className="mt-3">
              <span className="font-bold text-white">Serving Businesses Across Tamil Nadu:</span>
              <p className="mt-1 text-slate-300 font-mono text-xs">
                Chennai · Coimbatore · Madurai · Salem · Tiruppur · Erode · Hosur · Vellore · Tiruchirappalli · All Tamil Nadu
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER CONTEXTUAL BACKLINKS */}
      <section className="border-t border-slate-200 bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-terracotta">
              Related Services & Capabilities
            </span>
            <h3 className="mt-2 text-2xl font-bold text-slate-950">
              Explore SoftClinch Consulting Capabilities
            </h3>
            <p className="mt-1 text-sm text-slate-600">
              Explore our connected services across custom commerce, artificial intelligence, SAP, and automated communication.
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

      {/* Sticky Floating WhatsApp Button for Instant Mobile/Desktop Inquiries */}
      <FloatingWhatsAppButton />
    </div>
  );
}
