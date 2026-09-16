"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronDown, MapPin, MessageSquareText, Sparkles } from "lucide-react";
import { assetPath } from "@/lib/asset";

const solutions = [
  {
    id: "build",
    label: "BUILD",
    title: "New storefront that scales with your ambition",
    image: assetPath("/images/04-custom-ecommerce-platform.png"),
    description:
      "From concept to launch, we design a commerce experience that matches your products, customers, and growth plans.",
  },
  {
    id: "improve",
    label: "IMPROVE",
    title: "Upgrade the store you already have",
    image: assetPath("/images/05-platform-upgrade.png"),
    description:
      "We remove bottlenecks, improve speed, strengthen UX, and fix the weak spots that slow down revenue growth.",
  },
  {
    id: "connect",
    label: "CONNECT",
    title: "Link your customer journey to the business backend",
    image: assetPath("/images/08-integrations.png"),
    description:
      "ERP, CRM, inventory, payment, shipping, and support systems are integrated so the operation runs cleanly end to end.",
  },
  {
    id: "automate",
    label: "AUTOMATE",
    title: "Turn WhatsApp and repetitive work into a system",
    image: assetPath("/images/06-whatsapp-automation.png"),
    description:
      "We automate order communication, support flows, lead follow-up, and notifications without creating operational chaos.",
  },
  {
    id: "ai",
    label: "ADD AI",
    title: "Use AI where it creates real business value",
    image: assetPath("/images/07-ai-powered-commerce.png"),
    description:
      "We improve product discovery, customer support, recommendations, and the repetitive tasks that eat away team time.",
  },
] as const;

const faqs = [
  {
    question: "Can you build a completely tailored commerce platform?",
    answer:
      "Yes. We can build a commerce platform around your business workflows, integrations, and operational requirements.",
  },
  {
    question: "Can you improve our existing Shopify or WooCommerce store?",
    answer:
      "Yes. We can improve speed, UX, workflows, orders, integrations, and customer experience without replacing everything unnecessarily.",
  },
  {
    question: "Can you connect our website with ERP or CRM?",
    answer:
      "Yes. We can connect eCommerce with ERP, CRM, inventory, payment, shipping, and other business systems.",
  },
  {
    question: "Can you automate WhatsApp communication?",
    answer:
      "Yes. WhatsApp workflows can be used for updates, order support, lead follow-up, notifications, and customer communication.",
  },
  {
    question: "Can AI be added to an existing commerce system?",
    answer:
      "Yes. AI can be used to improve product discovery, customer support, recommendations, lead qualification, and repetitive operational tasks.",
  },
  {
    question: "Do you work with businesses outside Chennai?",
    answer:
      "Yes. We work with businesses across Tamil Nadu and India.",
  },
] as const;

const trustPoints = [
  "10+ Years Engineering",
  "150+ Enterprise Projects",
  "45+ Consultants",
  "Custom Development",
  "eCommerce",
  "Automation",
  "AI",
  "Integrations",
];

const processSteps = [
  { step: "01", title: "DISCOVER", description: "Map the business problem and customer journey." },
  { step: "02", title: "PLAN", description: "Shape the right commerce system and scope." },
  { step: "03", title: "DESIGN", description: "Turn the workflow into a clear product experience." },
  { step: "04", title: "BUILD", description: "Develop the storefront and business interfaces." },
  { step: "05", title: "INTEGRATE", description: "Connect inventory, ERP, CRM, payment and shipping." },
  { step: "06", title: "AUTOMATE", description: "Remove repetitive work across the order journey." },
  { step: "07", title: "SCALE", description: "Keep improving as your business grows." },
] as const;

const industries = [
  { name: "D2C", image: assetPath("/images/11-d2c-commerce.png") },
  { name: "RETAIL", image: assetPath("/images/12-retail-commerce.png") },
  { name: "WHOLESALE", image: assetPath("/images/13-wholesale-commerce.png") },
  { name: "B2B", image: assetPath("/images/14-b2b-commerce.png") },
  { name: "MANUFACTURING", image: assetPath("/images/15-manufacturing-commerce.png") },
  { name: "DISTRIBUTION", image: assetPath("/images/16-distribution-commerce.png") },
] as const;

function SectionBadge({ children }: { children: string }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.24em] text-blue-700">
      <Sparkles className="h-3.5 w-3.5" />
      {children}
    </span>
  );
}

function ButtonPrimary({ children, href = "/contact", className = "" }: { children: React.ReactNode; href?: string; className?: string }) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-blue-700 ${className}`}
    >
      {children}
      <ArrowRight className="h-4 w-4" />
    </Link>
  );
}

function ButtonSecondary({ children, href = "https://wa.me/919876543210", className = "" }: { children: React.ReactNode; href?: string; className?: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-xl border border-blue-200 bg-white px-6 py-3.5 text-sm font-bold text-blue-700 transition hover:bg-blue-50 ${className}`}
    >
      <MessageSquareText className="h-4 w-4" />
      {children}
    </a>
  );
}

export function CustomCommerceLanding() {
  const [activeSolution, setActiveSolution] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSolution((prev) => (prev + 1) % solutions.length);
    }, 3200);
    return () => clearInterval(timer);
  }, []);

  const activeSolutionData = useMemo(() => solutions[activeSolution], [activeSolution]);

  return (
    <div className="commerce-readable bg-white text-[17px] text-slate-900">
      <section className="border-b border-[#dcebe2] bg-[linear-gradient(180deg,#f3f8f5_0%,#ffffff_100%)]">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[0.88fr_1.12fr] lg:px-8 lg:py-20">
          <div className="max-w-xl">
            <SectionBadge>CUSTOM COMMERCE ENGINEERING</SectionBadge>
            <h1 className="mt-6 text-4xl font-black leading-[1.08] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Your eCommerce Business Has Grown. Has Your Technology?
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-600 sm:text-xl">
              Custom eCommerce platforms and applications built around the way your business actually operates.
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate-700">
              Build a new commerce platform. Upgrade your existing store. Connect ERP, CRM, inventory and payments. Automate WhatsApp. Add AI where it creates real business value.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <ButtonPrimary href="/contact" className="rounded-full px-7 py-4 text-base">Book a Free eCommerce Consultation</ButtonPrimary>
              <ButtonSecondary href="https://wa.me/919876543210" className="rounded-full px-7 py-4 text-base">Talk to Our Commerce Team on WhatsApp</ButtonSecondary>
            </div>
          </div>

          <img
            src={assetPath("/images/commerce-custom-hero.jpeg")}
            alt="Connected eCommerce platform across storefront, customer communication, fulfillment, and AI"
            className="h-auto w-full rounded-[28px] border border-[#dcebe2] bg-white object-cover shadow-[0_24px_60px_rgba(30,52,42,0.10)]"
          />
        </div>
      </section>
      <section className="border-y border-blue-100 bg-blue-50/80">
        <div className="overflow-hidden py-6">
          <div className="commerce-trust-track flex w-max items-center text-center text-sm font-semibold uppercase tracking-[0.22em] text-blue-700">
            {[...trustPoints, ...trustPoints].map((point, index) => (
              <div key={`${point}-${index}`} className="flex items-center gap-8 px-4 sm:px-6">
                <span>{point}</span>
                <span className="h-6 w-px bg-blue-200" aria-hidden="true" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="capabilities" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <SectionBadge>THE BUSINESS PROBLEM</SectionBadge>
          <h2 className="mt-6 text-4xl font-black text-slate-900 sm:text-5xl lg:text-[58px]">Your Store Isn't the Whole Commerce System.</h2>
          <p className="mt-6 max-w-2xl text-xl text-slate-600">One order enters the business, then creates a chain of manual work across every disconnected system.</p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <img
              src={assetPath("/images/02-problem-disconnected-systems.png")}
              alt="Disconnected commerce systems creating operational friction"
              className="mb-6 h-auto w-full rounded-2xl border border-slate-200 object-cover"
            />
            <div className="mb-6 flex items-center justify-between text-[12px] font-bold uppercase tracking-[0.22em] text-slate-500">
              <span>ORDER PLACED</span>
              <ArrowRight className="h-4 w-4 rotate-90" />
              <span>OPERATIONS</span>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "Orders increasing",
                "Manual work increasing",
                "Inventory mismatch",
                "ERP disconnected",
                "Support becomes repetitive",
                "Operations harder to manage",
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-blue-100 bg-blue-50 p-4 text-base font-medium text-slate-700">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col justify-center rounded-[32px] border border-blue-200 bg-blue-50 p-6 sm:p-8">
            <div className="mb-4 text-[12px] font-bold uppercase tracking-[0.22em] text-blue-700">Connected system</div>
            {[
              { label: "WhatsApp", state: "broken" },
              { label: "ERP", state: "broken" },
              { label: "Inventory", state: "connected" },
              { label: "CRM", state: "broken" },
              { label: "Support", state: "connected" },
            ].map((node) => (
              <div key={node.label} className="mb-3 flex items-center justify-between rounded-xl border border-blue-100 bg-white px-4 py-3">
                <span className="text-base text-slate-700">{node.label}</span>
                <span className={`h-2.5 w-2.5 rounded-full ${node.state === "broken" ? "bg-rose-400" : "bg-blue-600"}`} />
              </div>
            ))}
            <p className="mt-6 text-xl leading-relaxed text-slate-700">
              Your business has changed. Your technology needs to change with it.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-blue-100 bg-blue-50/70">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <SectionBadge>THE REFRAME</SectionBadge>
            <h2 className="mt-6 text-4xl font-black sm:text-5xl lg:text-[58px]">You Don't Need More Tools.<br />You Need Them to Work Together.</h2>
            <p className="mt-6 text-xl text-slate-600">We turn disconnected systems into one connected commerce ecosystem.</p>
          </div>

          <div className="mt-12 rounded-[32px] border border-blue-200 bg-white p-6 sm:p-8">
            <img
              src={assetPath("/images/03-reframe-transformation.png")}
              alt="Commerce transformation from disconnected tools to a connected system"
              className="mb-6 h-auto w-full rounded-2xl border border-blue-100 object-cover"
            />
            <div className="flex flex-col gap-3 text-center sm:flex-row sm:items-center sm:justify-center">
              {['eCOMMERCE', 'INVENTORY', 'ERP', 'CRM', 'PAYMENT', 'SHIPPING', 'WHATSAPP', 'AI'].map((item, index) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-xs font-black uppercase tracking-[0.24em] text-blue-700">{item}</span>
                  {index < 7 && <span className="text-blue-600">→</span>}
                </div>
              ))}
            </div>
            <p className="mx-auto mt-8 max-w-2xl text-center text-lg text-slate-600">
              We first understand what you already have. Then we tell you what actually needs to change.
            </p>
          </div>
        </div>
      </section>

      <section id="solutions" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-3xl">
          <SectionBadge>WHAT WE BUILD</SectionBadge>
          <h2 className="mt-6 text-4xl font-black sm:text-5xl lg:text-[58px]">Commerce Technology Around Your Business.</h2>
          <p className="mt-6 text-xl text-slate-600">Build, upgrade, integrate, automate and scale the parts of commerce that matter most.</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-[30px] border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
            {solutions.map((item, index) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveSolution(index)}
                className={`mb-3 flex w-full items-center justify-between rounded-2xl border px-4 py-4 text-left transition ${activeSolution === index ? "border-blue-200 bg-blue-50" : "border-slate-200 bg-slate-50 hover:border-blue-200"}`}
              >
                <span className="text-sm font-black uppercase tracking-[0.22em] text-blue-700">{item.label}</span>
                <ArrowRight className={`h-4 w-4 transition ${activeSolution === index ? "text-blue-700" : "text-slate-400"}`} />
              </button>
            ))}
            <div className="mt-5 overflow-hidden rounded-2xl border border-blue-100 bg-blue-50">
              <img
                src={activeSolutionData.image}
                alt={activeSolutionData.title}
                className="h-36 w-full object-cover"
              />
              <div className="p-4">
                <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-blue-700">About this capability</div>
                <h3 className="mt-2 text-lg font-black text-slate-900">{activeSolutionData.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{activeSolutionData.description}</p>
              </div>
            </div>
          </div>

          <div className="rounded-[30px] border border-blue-200 bg-blue-50 p-6 sm:p-8">
            <div className="mb-4 text-[11px] font-bold uppercase tracking-[0.22em] text-blue-700">Selected capability</div>
            <div className="mb-6 overflow-hidden rounded-[24px] border border-blue-200 bg-white">
              <img src={activeSolutionData.image} alt={activeSolutionData.title} className="h-64 w-full object-cover sm:h-80 lg:h-96" />
            </div>
            <h3 className="text-3xl font-black text-slate-900 sm:text-[38px]">{activeSolutionData.title}</h3>
            <p className="mt-4 max-w-xl text-lg text-slate-700">{activeSolutionData.description}</p>

            <div className="mt-8 rounded-[26px] border border-blue-100 bg-white p-4 sm:p-5">
              <div className="mb-4 flex items-center justify-between rounded-xl bg-slate-100 px-3 py-2">
                <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-slate-500">Product search</span>
                <span className="text-blue-600">•</span>
              </div>
              <div className="grid gap-3 sm:grid-cols-3">
                {[
                  { name: "Trail Runner X", price: "₹4,299", image: assetPath("/images/04-custom-ecommerce-platform.png") },
                  { name: "Speed Boost V2", price: "₹3,499", image: assetPath("/images/05-platform-upgrade.png") },
                  { name: "Urban Stride", price: "₹2,899", image: assetPath("/images/08-integrations.png") },
                ].map((product) => (
                  <div key={product.name} className="overflow-hidden rounded-2xl border border-blue-100 bg-blue-50">
                    <div className="aspect-[4/4.2] overflow-hidden bg-slate-100">
                      <img src={product.image} alt={product.name} className="h-full w-full object-cover" />
                    </div>
                    <div className="p-3">
                      <div className="text-[10px] text-slate-600">{product.name}</div>
                      <div className="mt-1 text-[12px] font-bold text-blue-700">{product.price}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-blue-100 bg-blue-50/70">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mb-8 max-w-3xl">
            <SectionBadge>BUSINESS SYSTEM INTEGRATION</SectionBadge>
            <h2 className="mt-6 text-4xl font-black sm:text-5xl lg:text-[58px]">One Order. Every System Connected.</h2>
            <p className="mt-6 text-xl text-slate-600">Your website is only one part of your commerce business.</p>
          </div>

          <div className="relative overflow-hidden rounded-[34px] border border-blue-200 bg-white p-8 sm:p-10">
            <img
              src={assetPath("/images/09-automation.png")}
              alt="Commerce automation connecting orders, inventory, payment, and delivery"
              className="relative mb-8 h-auto w-full rounded-2xl border border-blue-100 object-cover"
            />
            <div className="absolute inset-0 opacity-70" style={{ background: "linear-gradient(180deg, rgba(59,130,246,0.08), rgba(255,255,255,0.02))" }} />
            <div className="relative grid gap-4 sm:grid-cols-2 lg:grid-cols-8">
              {[
                "Customer",
                "eCommerce",
                "Order",
                "Inventory",
                "ERP / CRM",
                "Payment",
                "Delivery",
                "WhatsApp + AI",
              ].map((item, index) => (
                <div key={item} className="flex justify-center">
                  <div className="rounded-2xl border border-blue-200 bg-blue-50 px-4 py-3 text-center text-[11px] font-bold uppercase tracking-[0.18em] text-blue-700">
                    {item}
                  </div>
                  {index < 7 && <div className="hidden text-blue-600 lg:flex lg:items-center lg:justify-center lg:pl-3">↓</div>}
                </div>
              ))}
            </div>
            <p className="relative mt-10 text-center text-2xl font-semibold text-slate-700">One connected system. One better way to run commerce.</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <SectionBadge>WHEN YOUR BUSINESS OUTGROWS STANDARD</SectionBadge>
          <h2 className="mt-6 text-4xl font-black sm:text-5xl lg:text-[58px]">Your Business Doesn't Work Like Everyone Else.</h2>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <div className="rounded-[30px] border border-slate-200 bg-white p-8">
            <div className="mb-6 text-[12px] font-bold uppercase tracking-[0.2em] text-slate-500">STANDARD</div>
            <ul className="space-y-3 text-lg text-slate-700">
              <li className="flex items-center gap-3"><span className="h-2.5 w-2.5 rounded-full bg-[#ff8d8d]" /> Fixed features</li>
              <li className="flex items-center gap-3"><span className="h-2.5 w-2.5 rounded-full bg-[#ff8d8d]" /> Manual work</li>
              <li className="flex items-center gap-3"><span className="h-2.5 w-2.5 rounded-full bg-[#ff8d8d]" /> Workarounds</li>
              <li className="flex items-center gap-3"><span className="h-2.5 w-2.5 rounded-full bg-[#ff8d8d]" /> Disconnected tools</li>
            </ul>
          </div>

          <div className="rounded-[30px] border border-blue-200 bg-blue-50 p-8">
            <div className="mb-6 text-[12px] font-bold uppercase tracking-[0.2em] text-[#8ef5a6]">CUSTOM</div>
            <ul className="space-y-3 text-lg text-slate-700">
              <li className="flex items-center gap-3"><span className="h-2.5 w-2.5 rounded-full bg-blue-600" /> Your workflow</li>
              <li className="flex items-center gap-3"><span className="h-2.5 w-2.5 rounded-full bg-blue-600" /> Less manual work</li>
              <li className="flex items-center gap-3"><span className="h-2.5 w-2.5 rounded-full bg-blue-600" /> Connected systems</li>
              <li className="flex items-center gap-3"><span className="h-2.5 w-2.5 rounded-full bg-blue-600" /> Built to grow</li>
            </ul>
          </div>
        </div>

        <p className="mt-8 text-xl text-slate-600">Don't customize everything. Customize what matters.</p>
      </section>

      <section className="border-t border-blue-100 bg-blue-50/70">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <SectionBadge>WHATSAPP COMMERCE</SectionBadge>
            <h2 className="mt-6 text-4xl font-black sm:text-5xl lg:text-[58px]">Your Customers Are Already on WhatsApp.</h2>
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="rounded-[30px] border border-blue-200 bg-white p-6">
              <img
                src={assetPath("/images/06-whatsapp-automation.png")}
                alt="WhatsApp order support connected to commerce operations"
                className="mb-5 h-48 w-full rounded-2xl border border-blue-100 object-cover"
              />
              <div className="rounded-[24px] border border-blue-100 bg-blue-50 p-4">
                <div className="space-y-4 text-sm">
                  <div className="ml-auto max-w-[70%] rounded-2xl rounded-br-md bg-blue-600 p-3 text-white">Where is my order?</div>
                  <div className="max-w-[80%] rounded-2xl rounded-bl-md bg-[#0B2420] p-3 text-white/80">Order #SC10482 has been shipped. Expected delivery: Tomorrow.</div>
                  <div className="ml-auto max-w-[70%] rounded-2xl rounded-br-md bg-blue-600 p-3 text-white">Can I change the delivery address?</div>
                  <div className="max-w-[80%] rounded-2xl rounded-bl-md bg-[#0B2420] p-3 text-white/80">I can help with that.</div>
                </div>
              </div>
            </div>

            <div className="rounded-[30px] border border-blue-200 bg-white p-6">
              <div className="mb-4 text-[11px] font-bold uppercase tracking-[0.22em] text-[#8ef5a6]">Conversation capabilities</div>
              <div className="grid gap-3 sm:grid-cols-2">
                {['Order updates', 'Customer questions', 'Lead follow-up', 'Support', 'Notifications', 'Human handoff'].map((item) => (
                  <div key={item} className="rounded-2xl border border-blue-100 bg-blue-50 px-4 py-3 text-base text-slate-700">{item}</div>
                ))}
              </div>
              <div className="mt-6 rounded-2xl border border-blue-200 bg-blue-50 p-4 text-lg text-slate-700">AI → Human Handoff</div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <SectionBadge>AI COMMERCE</SectionBadge>
            <h2 className="mt-6 text-4xl font-black sm:text-5xl lg:text-[58px]">Use AI Where It Actually Helps Your Business.</h2>
            <p className="mt-6 max-w-xl text-xl text-slate-600">Product data, customer context and availability come together to make the next recommendation useful.</p>
          </div>

          <div className="rounded-[32px] border border-slate-200 bg-white p-6">
            <img
              src={assetPath("/images/07-ai-powered-commerce.png")}
              alt="AI-powered product recommendation in a commerce experience"
              className="mb-5 h-48 w-full rounded-2xl border border-blue-100 object-cover"
            />
            <div className="rounded-[24px] border border-blue-100 bg-blue-50 p-4">
              <div className="mb-3 text-[11px] font-bold uppercase tracking-[0.22em] text-[#8ef5a6]">Customer conversation</div>
              <div className="space-y-3 text-sm">
                <div className="mr-auto max-w-[80%] rounded-2xl rounded-bl-md bg-[#0A1B18] p-3 text-white/80">Which product is best for me?</div>
                <div className="ml-auto max-w-[80%] rounded-2xl rounded-br-md bg-blue-100 p-3 text-blue-900">Based on what you're looking for, these two products are the best match.</div>
              </div>
              <div className="mt-5 rounded-2xl border border-blue-200 bg-white p-4 text-sm text-slate-600">
                AI checks: customer requirement + product catalogue + stock + business rules
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {['Product search', 'Customer support', 'Recommendations', 'Lead qualification', 'WhatsApp conversations', 'Repetitive tasks'].map((item) => (
            <div key={item} className="rounded-2xl border border-blue-100 bg-blue-50 px-4 py-4 text-base text-slate-700">{item}</div>
          ))}
        </div>
      </section>

      <section className="border-t border-blue-100 bg-blue-50/70">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <SectionBadge>BUSINESS AUTOMATION</SectionBadge>
            <h2 className="mt-6 text-4xl font-black sm:text-5xl lg:text-[58px]">One Order Shouldn't Create Seven Manual Tasks.</h2>
          </div>

          <div className="mt-12 rounded-[34px] border border-blue-200 bg-white p-6 shadow-sm sm:p-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              {['Order placed', 'Payment confirmation', 'Inventory update', 'ERP update', 'CRM update', 'Shipping process', 'WhatsApp notification'].map((item, index) => (
                <div key={item} className="flex items-center gap-3 text-center text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500">
                  <span className="rounded-full border border-blue-200 bg-blue-50 px-3 py-2 text-blue-700">{item}</span>
                  {index < 6 && <span className="hidden text-blue-600 sm:inline">→</span>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <SectionBadge>READY FOR YOUR NEXT BIG SALE?</SectionBadge>
          <h2 className="mt-6 text-4xl font-black sm:text-5xl lg:text-[58px]">More Customers Shouldn't Mean More Problems.</h2>
          <p className="mt-6 text-xl text-slate-600">When traffic and orders increase, your commerce system should be ready.</p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-[30px] border border-slate-200 bg-white p-8">
            <div className="mb-7">
              <div className="text-xs font-bold uppercase tracking-[0.24em] text-blue-700">Growth signals</div>
              <h3 className="mt-3 text-2xl font-black text-slate-900 sm:text-3xl">Demand is moving up.</h3>
              <p className="mt-3 text-base leading-relaxed text-slate-600">Your commerce system should absorb growth without adding more manual work.</p>
            </div>
            <div className="relative space-y-4">
              <div className="absolute bottom-8 left-8 top-8 w-px bg-blue-200" aria-hidden="true" />
              {['CUSTOMERS ↑', 'ORDERS ↑', 'TRAFFIC ↑'].map((item) => (
                <div key={item} className="relative flex min-h-20 w-full items-center justify-between rounded-2xl border border-blue-100 bg-blue-50 px-5 text-base font-bold uppercase tracking-[0.22em] text-slate-700 sm:text-lg">
                  <span>{item}</span>
                  <ArrowRight className="h-5 w-5 text-blue-600" />
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[30px] border border-blue-200 bg-blue-50 p-8">
            <img
              src={assetPath("/images/10-seasonal-scale.png")}
              alt="Commerce system scaling for seasonal order volume"
              className="mb-6 h-auto w-full rounded-2xl border border-blue-100 object-cover"
            />
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {['Website speed', 'Mobile experience', 'Checkout', 'Payments', 'Stock', 'Delivery', 'WhatsApp', 'Support', 'Automation'].map((item) => (
                <div key={item} className="rounded-2xl border border-blue-100 bg-white px-4 py-4 text-base text-slate-700">{item}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-blue-100 bg-blue-50/70">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <SectionBadge>BUILT AROUND YOUR BUSINESS</SectionBadge>
            <h2 className="mt-6 text-4xl font-black sm:text-5xl lg:text-[58px]">Different Business.<br />Different Requirements.</h2>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {industries.map((industry) => (
              <div key={industry.name} className="overflow-hidden rounded-[28px] border border-blue-200 bg-white">
                <img src={industry.image} alt={`${industry.name} commerce systems`} className="h-40 w-full object-cover" />
                <div className="p-6">
                  <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-blue-700">{industry.name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="border-t border-blue-100 bg-blue-50/70">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <SectionBadge>FROM PROBLEM TO SYSTEM</SectionBadge>
            <h2 className="mt-6 text-4xl font-black sm:text-5xl lg:text-[58px]">From Business Problem to Commerce System.</h2>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-7">
            {processSteps.map((step) => (
              <div key={step.step} className="rounded-[24px] border border-blue-200 bg-white p-5 shadow-sm">
                <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-blue-700">{step.step}</div>
                <div className="mt-5 text-2xl font-black text-slate-900">{step.title}</div>
                <p className="mt-3 text-base text-slate-600">{step.description}</p>
              </div>
            ))}
          </div>
          <img
            src={assetPath("/images/18-process.png")}
            alt="SoftClinch commerce development process"
            className="mt-8 h-auto w-full rounded-[28px] border border-blue-100 object-cover"
          />
        </div>
      </section>

      <section id="why-softclinch" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <SectionBadge>WHY SOFTCLINCH</SectionBadge>
            <h2 className="mt-6 text-4xl font-black sm:text-5xl lg:text-[58px]">We Understand the Business Behind the Website.</h2>
            <p className="mt-6 text-xl text-slate-600">
              You don't need another company that only builds pages. You need a team that understands the business problem and builds the technology around it.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {['10+ years engineering', '150+ enterprise projects', '45+ consultants', 'Custom Development'].map((item) => (
                <div key={item} className="rounded-2xl border border-blue-100 bg-blue-50 px-4 py-3 text-sm text-slate-700">{item}</div>
              ))}
            </div>
          </div>

          <div className="rounded-[32px] border border-blue-200 bg-blue-50 p-6 sm:p-8">
            <img
              src={assetPath("/images/19-why-softclinch.png")}
              alt="SoftClinch commerce engineering team and capabilities"
              className="mb-6 h-auto w-full rounded-2xl border border-blue-100 object-cover"
            />
            <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-blue-700">Business problem first</div>
            <div className="mt-5 text-3xl font-black text-slate-900">Technology second.</div>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {['Custom Development', 'eCommerce', 'Automation', 'AI', 'Integrations'].map((item) => (
                <div key={item} className="rounded-2xl border border-blue-100 bg-white px-4 py-3 text-sm text-slate-700">{item}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-blue-100 bg-blue-50/70">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <SectionBadge>WHAT WE BUILD</SectionBadge>
            <h2 className="mt-6 text-4xl font-black sm:text-5xl lg:text-[58px]">From Simple Stores to Complex Commerce Systems.</h2>
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
            {['BUILD', 'UPGRADE', 'INTEGRATE', 'AUTOMATE', 'SCALE'].map((item, index) => (
              <div key={item} className="flex items-center gap-3">
                <span className="rounded-full border border-blue-200 bg-white px-5 py-3 text-[11px] font-black uppercase tracking-[0.2em] text-blue-700">{item}</span>
                {index < 4 && <span className="text-blue-600">→</span>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <SectionBadge>CHENNAI • TAMIL NADU • INDIA</SectionBadge>
          <h2 className="mt-6 text-4xl font-black sm:text-5xl lg:text-[58px]">eCommerce Development in Chennai.</h2>
          <p className="mt-6 text-xl text-slate-600">We help growing businesses in Chennai, Tamil Nadu and across India build better eCommerce systems.</p>
        </div>
        <img
          src={assetPath("/images/20-chennai-tamil-nadu.png")}
          alt="Commerce engineering for businesses in Chennai and Tamil Nadu"
          className="mt-10 h-auto w-full rounded-[28px] border border-blue-100 object-cover"
        />
      </section>

      <section id="faqs" className="border-t border-blue-100 bg-blue-50/70">
        <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-3xl">
            <SectionBadge>COMMON QUESTIONS</SectionBadge>
            <h2 className="mt-6 text-4xl font-black sm:text-5xl lg:text-[58px]">Before We Start</h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div key={faq.question} className="rounded-[22px] border border-blue-200 bg-white">
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left"
                >
                  <span className="text-lg font-bold text-slate-900">{faq.question}</span>
                  <ChevronDown className={`h-5 w-5 min-w-5 text-[#8ef5a6] transition ${openFaq === index ? "rotate-180" : ""}`} />
                </button>
                {openFaq === index && <div className="px-5 pb-5 text-base leading-relaxed text-slate-600">{faq.answer}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[34px] border border-blue-200 bg-[radial-gradient(circle_at_20%_10%,rgba(59,130,246,0.16),transparent_30%),linear-gradient(180deg,#eff6ff,#dbeafe)] p-8 sm:p-10 lg:p-12">
          <img
            src={assetPath("/images/21-final-cta-complete-ecosystem.png")}
            alt="Complete commerce ecosystem ready to scale"
            className="mb-8 h-auto w-full rounded-2xl border border-blue-100 object-cover"
          />
          <div className="relative z-10 max-w-3xl">
            <SectionBadge>LET'S BUILD WHAT COMES NEXT</SectionBadge>
            <h2 className="mt-6 text-4xl font-black sm:text-5xl lg:text-[58px]">Your Business Has Outgrown the Basic Store.<br />Let's Build the System Behind Your Growth.</h2>
            <p className="mt-6 text-xl text-slate-700">Tell us what you're trying to build, improve or automate. We'll help you figure out the right next step.</p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <ButtonPrimary href="/contact" className="rounded-full px-7 py-4 text-base">Book a Free eCommerce Consultation</ButtonPrimary>
              <ButtonSecondary href="https://wa.me/919876543210" className="rounded-full px-7 py-4 text-base">Talk to Our Commerce Team on WhatsApp</ButtonSecondary>
            </div>
            <div className="mt-6 flex items-center gap-2 text-sm text-slate-600">
              <MapPin className="h-4 w-4 text-[#8ef5a6]" />
              Chennai • Tamil Nadu • India
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-20 pt-10 sm:px-6 lg:px-8">
        <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8 lg:p-10">
          <h3 className="text-3xl font-black text-slate-900 sm:text-4xl">Start Your Commerce Project</h3>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {[
              { label: "Name" },
              { label: "Company" },
              { label: "Phone / WhatsApp" },
              { label: "Email" },
            ].map((field) => (
              <label key={field.label} className="block text-sm text-slate-600">
                <span className="mb-2 block">{field.label}</span>
                <input className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none placeholder:text-slate-400" placeholder={field.label} />
              </label>
            ))}
          </div>

          <div className="mt-6">
            <label className="block text-sm text-slate-600">
              <span className="mb-2 block">Requirement</span>
              <select className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none">
                <option>New eCommerce</option>
                <option>Improve Existing Store</option>
                <option>Shopify / WooCommerce</option>
                <option>Custom Application</option>
                <option>ERP / CRM Integration</option>
                <option>WhatsApp Automation</option>
                <option>AI</option>
                <option>Not Sure</option>
              </select>
            </label>
          </div>

          <label className="mt-6 block text-sm text-slate-600">
            <span className="mb-2 block">Message</span>
            <textarea rows={5} className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none placeholder:text-slate-400" placeholder="Tell us about your goals, pain points, or existing system." />
          </label>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <ButtonPrimary href="/contact" className="rounded-full px-7 py-4 text-base">Book My Consultation</ButtonPrimary>
            <div className="text-sm text-slate-500">We'll review your requirement and help identify the right next step.</div>
          </div>
        </div>
      </section>
    </div>
  );
}
