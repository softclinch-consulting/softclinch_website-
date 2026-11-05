"use client";

import { useReducedMotion, motion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  Building2,
  Check,
  ChevronDown,
  ClipboardList,
  Code2,
  GraduationCap,
  HeartPulse,
  MapPin,
  MessageCircle,
  MonitorSmartphone,
  Palette,
  RefreshCw,
  ShoppingBag,
  ShoppingCart,
  Sparkles,
  Utensils,
  Wrench,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { CONTACT } from "@/lib/contact";
import type { FaqItem } from "@/lib/faqs";

const chatLink = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(
  "Hi SoftClinch, I would like to discuss a website development requirement."
)}`;

const services: {
  title: string;
  description: string;
  suitable: string;
  icon: LucideIcon;
  number: string;
}[] = [
  {
    title: "Business Website Development",
    description:
      "Present your company, services and expertise through a professional website. Make it easy for customers to explore your offering, view your work and contact your team.",
    suitable: "Small businesses, consultants, service providers and growing companies.",
    icon: Building2,
    number: "01",
  },
  {
    title: "Ecommerce Website Development",
    description:
      "Build an online store with product categories, search, cart, checkout and order management. Add UPI, card payments, COD, shipping and inventory integrations based on your requirements. We help you choose WooCommerce, Shopify or custom ecommerce development according to your catalogue, budget and operations.",
    suitable: "Retailers, D2C brands, wholesalers and businesses moving online.",
    icon: ShoppingCart,
    number: "02",
  },
  {
    title: "Landing Page Development",
    description:
      "Give your advertising campaigns a focused destination with clear messaging, relevant proof and an easy enquiry process. Create dedicated pages for services, offers, product launches and lead generation campaigns.",
    suitable: "Google Ads, social media campaigns and targeted promotions.",
    icon: Palette,
    number: "03",
  },
  {
    title: "Custom Web Application Development",
    description:
      "Manage more of your business online with booking systems, customer portals, dashboards and applications built around your workflows. Connect relevant tools and data through integrations defined in your project scope.",
    suitable: "Businesses with requirements beyond a standard website.",
    icon: Code2,
    number: "04",
  },
  {
    title: "Website Redesign",
    description:
      "Improve an existing website with clearer navigation, updated design, mobile-friendly layouts and better performance. We review your current pages and plan how to handle existing content and URLs during the redesign.",
    suitable: "Businesses with outdated or difficult-to-manage websites.",
    icon: RefreshCw,
    number: "05",
  },
  {
    title: "Website Maintenance and Support",
    description:
      "Keep your website maintained with an agreed plan for updates, backups, monitoring and technical support. Choose support based on your platform, website complexity and frequency of changes.",
    suitable: "Businesses that need ongoing help after launch.",
    icon: Wrench,
    number: "06",
  },
];

const benefits = [
  {
    title: "Clear Business Messaging",
    description: "Help visitors quickly understand what you do, who you serve and how to get started.",
    icon: MessageCircle,
  },
  {
    title: "Mobile-Friendly Experience",
    description:
      "Give customers a consistent experience across phones, tablets and desktops, with readable content and accessible contact options.",
    icon: MonitorSmartphone,
  },
  {
    title: "SEO Foundations",
    description:
      "Build with a logical page structure, descriptive titles, internal links and performance considerations. Ongoing SEO can be planned separately to support your search visibility.",
    icon: Sparkles,
  },
  {
    title: "The Right Platform",
    description:
      "Choose a platform based on the features you need, how you will manage content and how your business may grow.",
    icon: ShoppingBag,
  },
  {
    title: "Practical Content Management",
    description:
      "For websites with a content management system, update the agreed text, images, products and other content through an editor, with handover guidance.",
    icon: ClipboardList,
  },
  {
    title: "Clear Scope and Communication",
    description:
      "Understand the deliverables, milestones, revision stages, third-party costs and support terms before development begins.",
    icon: BadgeCheck,
  },
];

const industries: { name: string; features: string; icon: LucideIcon }[] = [
  { name: "Healthcare", features: "Service pages, doctor profiles, appointment requests and location details", icon: HeartPulse },
  { name: "Retail and D2C", features: "Product catalogues, online stores, payments and order management", icon: ShoppingBag },
  { name: "Education and Training", features: "Course pages, batch information, admission enquiries and registrations", icon: GraduationCap },
  { name: "Restaurants and Hospitality", features: "Menus, galleries, booking enquiries and online ordering", icon: Utensils },
  { name: "Real Estate", features: "Property listings, enquiry forms and site-visit requests", icon: Building2 },
  { name: "Professional Services", features: "Service pages, team profiles, case studies and consultation enquiries", icon: BriefcaseBusiness },
  { name: "Manufacturing and Export", features: "Product specifications, downloadable catalogues and quotation requests", icon: Wrench },
  { name: "Travel and Tourism", features: "Package listings, itineraries, booking enquiries and customer support options", icon: MapPin },
];

const process = [
  {
    number: "01",
    title: "Share Your Requirements",
    description: "Tell us about your business, audience, existing website and the features you need.",
  },
  {
    number: "02",
    title: "Agree on the Plan",
    description:
      "We define the pages, platform, deliverables, timeline and costs. You review the proposed design direction before development progresses.",
  },
  {
    number: "03",
    title: "Build and Review",
    description:
      "We develop the website, add the agreed content and test key layouts, forms and customer journeys across relevant devices.",
  },
  {
    number: "04",
    title: "Launch and Handover",
    description:
      "After approval, we launch your website, provide the agreed access and guidance, and begin any selected maintenance or support plan.",
  },
];

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.14 }}
      transition={{ duration: reduceMotion ? 0 : 0.55, delay: reduceMotion ? 0 : delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
  light = false,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  light?: boolean;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className={`mb-4 text-xs font-bold uppercase tracking-[0.22em] ${light ? "text-orange-200" : "text-[#993300]"}`}>
        {eyebrow}
      </p>
      <h2 className={`text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-[3.25rem] ${light ? "text-white" : "text-[#092744]"}`}>
        {title}
      </h2>
      {description && (
        <p className={`mx-auto mt-5 max-w-2xl text-base leading-7 sm:text-lg ${light ? "text-blue-100/75" : "text-slate-600"}`}>
          {description}
        </p>
      )}
    </div>
  );
}

function PrimaryLink({ children, href = "/contact" }: { children: ReactNode; href?: string }) {
  return (
    <Link
      href={href}
      className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#993300] px-6 py-3 text-sm font-bold text-white shadow-lg shadow-[#993300]/20 transition hover:-translate-y-0.5 hover:bg-[#7d2a00] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#993300]"
    >
      {children}
      <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
    </Link>
  );
}

export function WebsiteDevelopment({ faqs }: { faqs: FaqItem[] }) {
  return (
    <div className="overflow-hidden bg-white text-slate-800">
      <section className="relative isolate bg-[#071d33] text-white">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_75%_15%,rgba(0,104,161,0.42),transparent_38%),radial-gradient(ellipse_at_0%_100%,rgba(153,51,0,0.24),transparent_38%)]" />
        <div className="absolute inset-0 -z-10 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,.55)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.55)_1px,transparent_1px)] [background-size:46px_46px]" />
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-20 pt-16 sm:px-8 sm:pb-24 sm:pt-20 lg:grid-cols-[1.05fr_.95fr] lg:px-10 lg:pb-28 lg:pt-24">
          <div className="relative z-10">
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.07] px-4 py-2 text-xs font-semibold tracking-wide text-blue-100"
            >
              <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,.8)]" />
              Websites made for growing businesses
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="max-w-3xl text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.8rem]"
            >
              Website Development Company in India{" "}
              <span className="bg-gradient-to-r from-orange-200 via-orange-300 to-amber-100 bg-clip-text text-transparent">
                for Growing Businesses
              </span>
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.18 }}
            >
              <p className="mt-6 max-w-2xl text-lg leading-8 text-blue-100/85 sm:text-xl">
                Build a website that helps customers understand your business, explore your services and take the next step.
              </p>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-blue-100/65 sm:text-base">
                SoftClinch creates fast, mobile-friendly business websites, ecommerce stores and custom web applications for businesses across India. From your first website to a complete redesign, we build around your goals, customers and daily operations.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <PrimaryLink>Get a Free Website Quote</PrimaryLink>
                <Link
                  href="/case-studies"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/60 hover:bg-white/10"
                >
                  View Our Work <ArrowRight size={16} />
                </Link>
              </div>
              <div className="mt-8 flex flex-wrap gap-x-5 gap-y-3 text-xs font-medium text-blue-100/75 sm:text-sm">
                {["Mobile-friendly design", "SEO foundations", "WhatsApp integration", "Clear project scope"].map((item) => (
                  <span key={item} className="inline-flex items-center gap-2">
                    <Check size={15} className="text-orange-300" /> {item}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          <Reveal className="relative mx-auto w-full max-w-[540px]">
            <div className="absolute -inset-8 rounded-[3rem] bg-blue-500/10 blur-3xl" />
            <Image
              src="/website-development-hero.svg"
              alt="Responsive business website preview shown on desktop and mobile screens"
              width={900}
              height={680}
              priority
              className="relative h-auto w-full drop-shadow-2xl"
            />
            <motion.div
              animate={{ y: [0, -7, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-5 -left-3 flex items-center gap-3 rounded-2xl border border-white/70 bg-white px-4 py-3 text-[#0b2742] shadow-xl sm:-left-8"
            >
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-emerald-50 text-emerald-700"><Check size={18} /></span>
              <span><strong className="block text-xs">Every screen, considered</strong><small className="text-[10px] text-slate-500">Responsive by design</small></span>
            </motion.div>
          </Reveal>
        </div>
        <a href="#website-challenges" aria-label="Scroll to website challenges" className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 text-white/50 transition hover:text-white sm:block">
          <ArrowDown size={20} />
        </a>
      </section>

      <section id="website-challenges" className="bg-white px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
          <Reveal>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-[#993300]">The challenge</p>
            <h2 className="text-3xl font-bold leading-tight text-[#092744] sm:text-4xl">Your Website Should Make It Easier to Win Business</h2>
            <p className="mt-5 text-base leading-7 text-slate-600">
              Visitors need to understand what you offer, why they should choose you and how to contact you. An outdated design, slow pages or confusing navigation can get in the way.
            </p>
            <p className="mt-4 text-sm leading-6 text-slate-500">
              Whether you need a new website or improvements to an existing one, we focus on a clearer customer journey—from the first visit to an enquiry, booking or purchase.
            </p>
          </Reveal>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              "Visitors browse but leave without making an enquiry.",
              "Pages are difficult to use on mobile phones.",
              "Services and products are hard to find.",
              "Updating content takes too much time.",
              "Your website no longer reflects your business.",
            ].map((item, index) => (
              <Reveal key={item} delay={index * 0.05} className={`rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:-translate-y-1 hover:border-[#c77c59]/50 hover:bg-white hover:shadow-lg ${index === 4 ? "sm:col-span-2" : ""}`}>
                <span className="mb-4 grid h-9 w-9 place-items-center rounded-xl bg-[#fff0e8] text-sm font-bold text-[#993300]">0{index + 1}</span>
                <p className="font-semibold leading-6 text-[#173550]">{item}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="website-services" className="bg-[#f5f7fa] px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionHeading
              eyebrow="What we build"
              title="Website Development Services Built Around Your Business"
              description="Choose the kind of website you need today, with a plan that makes sense for the way your business works."
            />
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {services.map(({ title, description, suitable, icon: Icon, number }, index) => (
              <Reveal key={title} delay={(index % 3) * 0.06}>
                <article className="group flex h-full flex-col rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#d8b5a5] hover:shadow-xl sm:p-7">
                  <div className="flex items-center justify-between">
                    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#fff2eb] text-[#993300] transition group-hover:bg-[#993300] group-hover:text-white"><Icon size={22} /></span>
                    <span className="font-mono text-xs font-semibold tracking-widest text-slate-300">{number}</span>
                  </div>
                  <h3 className="mt-6 text-xl font-bold leading-snug text-[#092744]">{title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">{description}</p>
                  <div className="mt-5 border-t border-slate-100 pt-4">
                    <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#993300]">Suitable for</p>
                    <p className="mt-1.5 text-sm leading-5 text-slate-600">{suitable}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
          <div className="mt-10 text-center">
            <PrimaryLink>Discuss Your Website Requirements</PrimaryLink>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#092744] px-5 py-20 text-white sm:px-8 sm:py-24 lg:px-10">
        <div className="absolute -right-36 -top-32 h-96 w-96 rounded-full bg-emerald-400/10 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[.9fr_1.1fr]">
          <Reveal>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-emerald-300">A direct way to connect</p>
            <h2 className="text-3xl font-bold leading-tight sm:text-4xl">Turn Website Visits into WhatsApp Conversations</h2>
            <p className="mt-5 text-base leading-7 text-blue-100/75">
              Give visitors a simple way to ask about your services, request product details or discuss a requirement. A WhatsApp chat button can open a conversation with a pre-filled message, helping customers contact your team directly from your website.
            </p>
            <a href={chatLink} target="_blank" rel="noreferrer" className="mt-7 inline-flex min-h-12 items-center gap-2 rounded-full bg-[#21a66a] px-6 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#188958]">
              <MessageCircle size={18} /> Discuss WhatsApp Integration <ArrowRight size={16} />
            </a>
          </Reveal>
          <Reveal>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-6">
                <div className="mb-4 grid h-11 w-11 place-items-center rounded-xl bg-emerald-400/15 text-emerald-300"><MessageCircle size={21} /></div>
                <h3 className="text-lg font-bold">Start with Website Chat</h3>
                <ul className="mt-4 space-y-3 text-sm leading-5 text-blue-100/75">
                  {["Click-to-chat buttons on relevant pages.", "Pre-filled messages for services or products.", "Clear contact options for mobile and desktop visitors."].map((item) => (
                    <li key={item} className="flex gap-2"><Check size={16} className="mt-0.5 shrink-0 text-emerald-300" />{item}</li>
                  ))}
                </ul>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-6">
                <div className="mb-4 grid h-11 w-11 place-items-center rounded-xl bg-orange-300/15 text-orange-200"><Sparkles size={21} /></div>
                <h3 className="text-lg font-bold">Add Automation as Your Business Grows</h3>
                <p className="mt-4 text-sm leading-6 text-blue-100/75">
                  Optional Inaiwazhi integration can support configured replies, enquiry routing, lead follow-ups and connected workflows.
                </p>
              </div>
            </div>
            <p className="mt-4 text-xs leading-5 text-blue-100/55">
              Automation features depend on your selected plan, setup and integrations. Any applicable platform, messaging and implementation charges are explained in your proposal.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionHeading
              eyebrow="Why SoftClinch"
              title="A Website Planned for Your Customers and Your Team"
              description="A considered website should be clear to your customers and practical for the people who manage it."
            />
          </Reveal>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map(({ title, description, icon: Icon }, index) => (
              <Reveal key={title} delay={(index % 3) * 0.05}>
                <article className="h-full rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-[#d9b8a8] hover:shadow-lg">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-[#f2f6fa] text-[#0d4c77]"><Icon size={20} /></span>
                  <h3 className="mt-5 text-lg font-bold text-[#092744]">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f5f7fa] px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionHeading
              eyebrow="Industries"
              title="Website Solutions for Different Business Needs"
              description="Features are selected according to your project requirements."
            />
          </Reveal>
          <div className="mt-12 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="hidden grid-cols-[.75fr_1.25fr] bg-[#092744] px-7 py-4 text-xs font-bold uppercase tracking-[0.15em] text-white sm:grid">
              <span>Industry</span><span>Website features we can build</span>
            </div>
            {industries.map(({ name, features, icon: Icon }, index) => (
              <div key={name} className={`grid gap-2 px-5 py-5 sm:grid-cols-[.75fr_1.25fr] sm:items-center sm:px-7 ${index > 0 ? "border-t border-slate-100" : ""}`}>
                <div className="flex items-center gap-3 font-bold text-[#173550]">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-[#fff2eb] text-[#993300]"><Icon size={17} /></span>
                  {name}
                </div>
                <p className="pl-12 text-sm leading-6 text-slate-600 sm:pl-0">{features}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionHeading
              eyebrow="Our process"
              title="From Your First Discussion to Website Launch"
              description="A clear, collaborative process from the first conversation through launch and handover."
            />
          </Reveal>
          <div className="relative mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            <div className="absolute left-[12%] right-[12%] top-7 hidden border-t border-dashed border-slate-300 lg:block" />
            {process.map(({ number, title, description }, index) => (
              <Reveal key={number} delay={index * 0.07} className="relative">
                <article className="h-full rounded-2xl border border-slate-200 bg-white p-6 pt-0 shadow-sm">
                  <span className="relative -top-1 grid h-14 w-14 place-items-center rounded-2xl border-4 border-white bg-[#092744] font-mono text-sm font-bold text-white shadow-md">{number}</span>
                  <h3 className="mt-4 text-lg font-bold leading-snug text-[#092744]">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
                </article>
              </Reveal>
            ))}
          </div>
          <div className="mt-10 text-center">
            <PrimaryLink>Start Your Website Project</PrimaryLink>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#092744] px-5 py-16 text-white sm:px-8 sm:py-20 lg:px-10">
        <div className="absolute -left-16 -top-24 h-72 w-72 rounded-full bg-blue-400/10 blur-3xl" />
        <Reveal className="relative mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="max-w-3xl">
            <p className="mb-3 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-orange-200"><MapPin size={14} /> India-wide service</p>
            <h2 className="text-3xl font-bold leading-tight sm:text-4xl">Website Development for Businesses Across India</h2>
            <p className="mt-4 text-sm leading-7 text-blue-100/75 sm:text-base">
              Work with SoftClinch wherever your business is based in India. We handle discovery, design reviews, project updates and handover through scheduled calls, online meetings and shared feedback. Whether you serve a local community or customers nationwide, we plan your website around the people you want to reach.
            </p>
          </div>
          <PrimaryLink>Talk to Our Team</PrimaryLink>
        </Reveal>
      </section>

      <section className="px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionHeading
              eyebrow="FAQs"
              title="Frequently Asked Questions About Website Development"
            />
          </Reveal>
          <div className="mt-10 grid gap-3 lg:grid-cols-2 lg:gap-5">
            {[faqs.slice(0, 6), faqs.slice(6, 12)].map((column, columnIndex) => (
              <div key={columnIndex} className="space-y-3">
                {column.map(({ question, answer }, index) => (
                  <Reveal key={question} delay={index % 3 * 0.035}>
                    <details className="group rounded-2xl border border-slate-200 bg-white px-5 py-1 transition open:border-[#d8b5a5] open:shadow-md sm:px-6">
                      <summary className="flex cursor-pointer list-none items-center justify-between gap-5 py-5 text-left font-semibold leading-6 text-[#12334f] marker:hidden [&::-webkit-details-marker]:hidden">
                        {question}
                        <ChevronDown size={19} className="shrink-0 text-[#993300] transition-transform group-open:rotate-180" />
                      </summary>
                      <p className="border-t border-slate-100 pb-5 pt-4 text-sm leading-7 text-slate-600">{answer}</p>
                    </details>
                  </Reveal>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f5f7fa] px-5 py-16 sm:px-8 lg:px-10">
        <Reveal className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 rounded-[2rem] bg-white p-7 text-center shadow-sm sm:flex-row sm:p-10 sm:text-left">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#993300]">Let’s build your next step</p>
            <h2 className="mt-2 text-2xl font-bold text-[#092744] sm:text-3xl">Ready to talk about your website?</h2>
            <p className="mt-2 text-sm text-slate-600">Tell us what you need. We’ll help you work out the right scope.</p>
          </div>
          <PrimaryLink>Get a Free Website Quote</PrimaryLink>
        </Reveal>
      </section>
    </div>
  );
}
