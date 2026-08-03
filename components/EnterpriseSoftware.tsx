"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Bot,
  BrainCircuit,
  Building2,
  CheckCircle2,
  Cloud,
  Database,
  GraduationCap,
  HeartPulse,
  LineChart,
  MessageSquareMore,
  ShieldCheck,
  ShoppingCart,
  Truck,
  Wallet,
} from "lucide-react";
import { FaqSection } from "@/components/FaqSection";
import { ServiceStatStrip } from "@/components/ServiceStatStrip";
import { ServiceMediaPanel } from "@/components/ServiceMediaPanel";
import { reviews } from "@/lib/reviews";

const trustItems = [
  { value: "AI + Cloud", label: "Built for modern digital transformation" },
  { value: "Enterprise-Ready", label: "Secure, scalable, workflow-driven systems" },
  { value: "Custom-Built", label: "Applications aligned to your business model" },
  { value: "Growth-Focused", label: "Designed to improve operations and CX" },
];

const deliverables = [
  "AI-powered business applications",
  "Enterprise software solutions",
  "SaaS platforms",
  "eCommerce applications",
  "CRM & ERP systems",
  "Workflow automation software",
  "AI chatbot integrations",
  "Business intelligence dashboards",
  "Cloud-based applications",
  "Customer engagement systems",
];

const coreServices = [
  {
    title: "AI Application Development",
    icon: BrainCircuit,
    intro:
      "We develop intelligent AI-powered applications that automate business processes, improve productivity, and deliver data-driven insights.",
    items: [
      "AI chatbot development",
      "Generative AI integration",
      "AI automation systems",
      "Conversational AI solutions",
      "AI-powered CRM systems",
      "AI recommendation engines",
      "AI analytics dashboards",
      "Predictive analytics solutions",
      "AI customer support systems",
      "AI workflow automation",
      "AI lead generation systems",
      "WhatsApp AI automation",
    ],
    benefits: [
      "Reduce manual operations",
      "Improve customer response time",
      "Increase business efficiency",
      "Automate repetitive workflows",
      "Generate intelligent insights",
      "Improve sales and engagement",
    ],
  },
  {
    title: "Custom Enterprise Application Development",
    icon: Building2,
    intro:
      "Build enterprise-grade applications customized for your organization's operations and growth.",
    items: [
      "ERP software development",
      "CRM application development",
      "HR management systems",
      "Inventory management software",
      "Business process automation",
      "Employee management portals",
      "Internal enterprise applications",
      "Analytics dashboards",
      "Multi-user enterprise platforms",
      "Document management systems",
      "Enterprise workflow systems",
      "SaaS application development",
    ],
    benefits: [
      "Scalable architecture",
      "Enterprise-level security",
      "Cloud-ready infrastructure",
      "API integration support",
      "High-performance applications",
      "Long-term scalability",
      "Custom business workflows",
    ],
  },
  {
    title: "eCommerce Application Development",
    icon: ShoppingCart,
    intro:
      "Launch high-converting eCommerce applications powered by AI automation and advanced customer analytics.",
    items: [
      "Custom eCommerce website development",
      "Shopify development",
      "WooCommerce development",
      "Marketplace development",
      "Multi-vendor platforms",
      "AI-powered product recommendations",
      "Cart recovery automation",
      "Customer behavior analytics",
      "Order management systems",
      "Payment gateway integration",
      "Mobile commerce applications",
      "Subscription commerce systems",
    ],
    benefits: [
      "Fast loading architecture",
      "SEO-friendly structure",
      "AI-driven recommendations",
      "Mobile-first experience",
      "Advanced analytics integration",
      "Conversion-focused UI/UX",
      "Scalable cloud deployment",
    ],
  },
  {
    title: "Cloud & Automation Services",
    icon: Cloud,
    intro:
      "Improve operational efficiency with scalable cloud infrastructure and automation systems.",
    items: [
      "AWS cloud deployment",
      "Azure cloud solutions",
      "Cloud-native application development",
      "API development & integration",
      "Enterprise automation systems",
      "DevOps implementation",
      "Database optimization",
      "System integration services",
      "Server optimization",
      "Secure cloud architecture",
    ],
    benefits: [
      "Scalable infrastructure",
      "Automation-first operations",
      "Reliable deployments",
      "Secure system design",
      "Integration-ready architecture",
      "Performance optimization",
    ],
  },
];

const advantages = [
  {
    title: "Enterprise-Focused Development",
    description:
      "We build scalable enterprise solutions designed for performance, security, and long-term growth.",
  },
  {
    title: "AI-Powered Innovation",
    description:
      "Integrate Artificial Intelligence into business operations to automate workflows and improve decision-making.",
  },
  {
    title: "Scalable Architecture",
    description:
      "Applications are built for scalability, speed, and future business expansion.",
  },
  {
    title: "Custom Development Approach",
    description:
      "Every application is designed based on your workflow, business model, and customer requirements.",
  },
  {
    title: "Security & Performance",
    description:
      "Enterprise-level security practices with optimized application performance.",
  },
  {
    title: "End-to-End Support",
    description:
      "From strategy and development to deployment and maintenance, we provide complete technical support.",
  },
];

const industries = [
  {
    name: "Enterprise Businesses",
    icon: Building2,
    description:
      "Transform enterprise operations using AI-driven business systems, workflow automation, and centralized management platforms.",
  },
  {
    name: "eCommerce Brands",
    icon: ShoppingCart,
    description:
      "Increase conversion rates and improve customer engagement using intelligent eCommerce platforms and automation systems.",
  },
  {
    name: "Retail Businesses",
    icon: LineChart,
    description:
      "Build omnichannel retail applications with inventory automation and customer analytics.",
  },
  {
    name: "Healthcare",
    icon: HeartPulse,
    description:
      "Develop secure healthcare systems, appointment platforms, and AI-powered patient engagement applications.",
  },
  {
    name: "Logistics & Supply Chain",
    icon: Truck,
    description:
      "Automate logistics operations, shipment tracking, and inventory management systems.",
  },
  {
    name: "Education & Training",
    icon: GraduationCap,
    description:
      "Create LMS platforms, online learning systems, and AI-powered education applications.",
  },
  {
    name: "Real Estate",
    icon: Database,
    description:
      "Develop CRM platforms, property management systems, and customer engagement tools.",
  },
  {
    name: "Finance & Banking",
    icon: Wallet,
    description:
      "Build secure fintech applications, analytics dashboards, and enterprise finance systems.",
  },
];

const searchSolutions = [
  {
    title: "AI Development Company for Enterprises",
    description:
      "We provide enterprise AI application development services that help businesses automate operations, improve productivity, and scale using intelligent systems.",
  },
  {
    title: "Custom Software Development for eCommerce",
    description:
      "Develop custom eCommerce applications with AI automation, customer analytics, and scalable infrastructure.",
  },
  {
    title: "Enterprise Automation Software Development",
    description:
      "Reduce manual processes using enterprise automation software powered by AI and workflow systems.",
  },
  {
    title: "SaaS Application Development Services",
    description:
      "Build secure SaaS platforms with multi-user architecture, analytics, and subscription systems.",
  },
  {
    title: "AI Chatbot Development Company",
    description:
      "Integrate AI chatbots for customer support, lead generation, sales automation, and WhatsApp communication.",
  },
  {
    title: "Enterprise Digital Transformation Services",
    description:
      "Modernize legacy systems and optimize business operations using cloud technology and AI-driven applications.",
  },
];

const processSteps = [
  {
    step: "1. Discovery & Requirement Analysis",
    description:
      "We analyze your business model, operational challenges, customer journey, and project requirements.",
  },
  {
    step: "2. Strategy & Architecture Planning",
    description:
      "Our experts design scalable architecture and AI implementation strategies aligned with your goals.",
  },
  {
    step: "3. UI/UX Design",
    description:
      "We create modern, responsive, and conversion-focused user experiences.",
  },
  {
    step: "4. Application Development",
    description:
      "Develop secure applications with scalable backend systems, APIs, and AI integrations.",
  },
  {
    step: "5. Testing & Quality Assurance",
    description:
      "Applications are tested for performance, scalability, security, and user experience.",
  },
  {
    step: "6. Deployment & Maintenance",
    description:
      "We deploy applications on scalable cloud infrastructure with ongoing support and optimization.",
  },
];

const outcomes = [
  {
    title: "Improve Operational Efficiency",
    description:
      "Automate repetitive workflows and reduce manual operations using AI-powered systems.",
  },
  {
    title: "Increase Customer Engagement",
    description:
      "Deliver personalized experiences and faster customer interactions.",
  },
  {
    title: "Scale Faster",
    description:
      "Build scalable digital infrastructure that grows with your business.",
  },
  {
    title: "Better Business Insights",
    description:
      "Use analytics dashboards and AI reporting for smarter decision-making.",
  },
  {
    title: "Higher eCommerce Conversions",
    description:
      "Optimize online customer journeys with AI-driven recommendations and automation.",
  },
  {
    title: "Enhanced Enterprise Security",
    description:
      "Protect proprietary data and customer transaction assets with modern encryption and secure cloud protocols.",
  },
];

const technologyGroups = [
  {
    title: "Frontend Technologies",
    items: ["React.js", "Next.js", "Angular", "Vue.js", "HTML5", "Tailwind CSS"],
  },
  {
    title: "Backend Technologies",
    items: ["Node.js", "Python", "PHP", "Java", ".NET"],
  },
  {
    title: "AI & Automation",
    items: ["OpenAI Integration", "Machine Learning", "NLP Solutions", "AI Chatbots", "Predictive Analytics"],
  },
  {
    title: "Cloud Platforms",
    items: ["AWS", "Microsoft Azure", "Google Cloud", "Vercel", "Docker"],
  },
  {
    title: "Databases",
    items: ["MongoDB", "PostgreSQL", "MySQL", "Firebase", "SQL Server"],
  },
  {
    title: "eCommerce & Integrations",
    items: ["Shopify API", "WooCommerce", "Stripe Checkout", "PayPal SDK", "REST/GraphQL APIs"],
  },
];



const faqItems = [
  {
    question: "What industries do you work with?",
    answer:
      "We work with enterprise businesses, eCommerce brands, healthcare, logistics, retail, finance, education, and SaaS startups.",
  },
  {
    question: "Do you provide AI integration services?",
    answer:
      "Yes, we provide AI integration services including chatbots, automation systems, analytics, and machine learning solutions.",
  },
  {
    question: "Can you develop custom enterprise software?",
    answer:
      "Yes, we develop enterprise-grade applications customized to your business workflows and operational requirements.",
  },
  {
    question: "Do you build scalable SaaS applications?",
    answer:
      "Yes, we develop scalable SaaS applications with multi-user architecture, analytics, and subscription systems.",
  },
];

function ListBlock({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3 text-slate-700">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-sm font-semibold">
          <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-brand-terracotta" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function EnterpriseSoftware() {
  return (
    <div className="bg-[#F8FAFC] text-slate-900 overflow-hidden">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-slate-200/60 bg-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(0,51,102,0.08),_transparent_40%),radial-gradient(circle_at_80%_20%,_rgba(162,59,42,0.08),_transparent_28%),linear-gradient(180deg,_#ffffff_0%,_#f8fafc_100%)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-navy/30 to-transparent" />

        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32 z-10">

          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center mt-4">
            <div>
              <div className="mb-6 inline-flex items-center rounded-full border border-brand-navy/10 bg-white/85 px-4 py-2 text-xs sm:text-sm font-semibold text-brand-navy shadow-sm backdrop-blur">
                AI applications, enterprise software, automation, and eCommerce systems
              </div>
              <h1 className="max-w-5xl text-4xl font-display font-bold tracking-tight text-slate-955 md:text-5xl lg:text-6xl leading-tight">
                AI-Powered Enterprise & eCommerce Application Development
              </h1>
              <p className="mt-6 max-w-4xl text-base sm:text-lg leading-relaxed text-slate-600 font-medium">
                Build scalable AI applications, enterprise software, automation systems, and custom eCommerce platforms designed to accelerate business growth, automate operations, and improve customer experience.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-2xl bg-brand-navy px-8 py-4 font-bold text-white shadow-lg shadow-brand-navy/20 transition hover:bg-brand-navy/90 hover:-translate-y-0.5">
                  <span>Book Free Consultation</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <Link href="/contact" className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-8 py-4 font-bold text-slate-700 transition hover:border-brand-terracotta hover:text-brand-terracotta hover:-translate-y-0.5">
                  Schedule Strategy Call
                </Link>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {[
                  "AI chatbots & automation",
                  "Enterprise workflow systems",
                  "Conversion-ready commerce apps",
                  "Cloud-native deployment",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-brand-terracotta" />
                    <span className="text-xs sm:text-sm font-semibold text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <ServiceMediaPanel
              title="Enterprise & Commerce Systems"
              subtitle="Scalable cloud architectures, AI automation workflows, CRM/ERP dashboards, and secure backend systems."
              imageSrc="/enterprise_hero_illustration.png"
              imageAlt="Enterprise & eCommerce systems preview"
              theme="light"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="mx-auto max-w-7xl px-4 pt-8 pb-24 sm:px-6 lg:px-8">
        {/* Intro */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="inline-flex rounded-full border border-brand-terracotta/15 bg-brand-terracotta/5 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-brand-terracotta mb-4">
            Our Core Focus
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-slate-955 leading-tight">
            Enterprise AI Solutions & Custom Software Development Company
          </h2>
          <p className="mt-6 text-base sm:text-lg leading-relaxed text-slate-600 font-medium">
            We specialize in AI-powered custom application development that helps businesses streamline workflows, automate repetitive operations, improve customer engagement, and scale efficiently.
          </p>
        </div>

        {/* 3-Column Core Pillars */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "AI Automation Integration",
              tagline: "Intelligent Process Execution",
              icon: BrainCircuit,
              desc: "Deploy intelligent automation layers, custom AI chatbots, and automated workflows to eliminate manual operations and improve customer response speed.",
              color: "text-amber-500 bg-amber-50 border-amber-100/60"
            },
            {
              title: "Enterprise Infrastructure",
              tagline: "Scalable Operations Support",
              icon: Building2,
              desc: "Build secure, cloud-ready ERP, CRM, and workflow platforms customized for your team's operational needs and long-term scalability.",
              color: "text-blue-500 bg-blue-50 border-blue-100/60"
            },
            {
              title: "eCommerce Optimization",
              tagline: "Conversion & Growth Focus",
              icon: ShoppingCart,
              desc: "Deliver high-converting online storefronts powered by AI product recommendations, automated checkouts, and customer behavior insights.",
              color: "text-emerald-500 bg-emerald-50 border-emerald-100/60"
            }
          ].map((card) => (
            <div
              key={card.title}
              className="group relative rounded-[2.5rem] border border-slate-200 bg-white p-8 sm:p-10 shadow-sm hover:shadow-xl hover:border-brand-navy/20 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              {/* Top gradient indicator */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-navy to-brand-terracotta opacity-0 group-hover:opacity-100 transition-opacity" />

              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-2xl border ${card.color}`}>
                    <card.icon className="h-6 w-6" />
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-400">READY TO SCALE</span>
                </div>

                <h3 className="text-xl font-display font-bold text-slate-955 group-hover:text-brand-navy transition-colors mb-2">
                  {card.title}
                </h3>
                <span className="text-[11px] font-black uppercase tracking-[0.15em] text-brand-terracotta block mb-4">
                  {card.tagline}
                </span>

                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-semibold">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Deliverables Bento Section */}
        <div className="mt-20 pt-16 border-t border-slate-200/60">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-mono font-black uppercase tracking-[0.2em] text-brand-terracotta">
              {"// WHAT WE BUILD"}
            </span>
            <h3 className="mt-3 text-2xl sm:text-3xl font-display font-bold text-slate-955">
              Our Project Deliverables
            </h3>
            <p className="mt-3 text-sm text-slate-500 font-semibold">
              Every system is engineered from the ground up to support high-performance scaling and seamless workflows.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {deliverables.map((item, index) => (
              <div
                key={item}
                className="group relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md hover:border-brand-navy/30 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Visual bullet indicator */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono font-black text-slate-400 group-hover:text-brand-terracotta transition-colors">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-brand-terracotta transition-colors" />
                </div>

                <p className="text-xs sm:text-sm font-bold text-slate-800 leading-snug group-hover:text-brand-navy transition-colors">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 border-t border-slate-200/80">
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="inline-flex rounded-full border border-brand-terracotta/15 bg-brand-terracotta/5 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-brand-terracotta mb-4">
            Services
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-slate-955 leading-tight">
            Our Core Services
          </h2>
        </div>

        <div className="mt-12 grid gap-8 xl:grid-cols-2">
          {coreServices.map((service, index) => (
            <article
              key={service.title}
              className="group relative rounded-[2.5rem] border border-slate-200 bg-white p-8 sm:p-10 shadow-sm hover:shadow-xl hover:border-brand-navy/20 transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              {/* Accent top gradient bar */}
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-brand-navy to-brand-terracotta opacity-80 group-hover:opacity-100 transition-opacity" />

              <div>
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-navy/5 text-brand-navy border border-brand-navy/10 group-hover:bg-brand-navy group-hover:text-white transition-colors duration-300">
                    <service.icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-slate-955 leading-tight">{service.title}</h3>
                </div>
                <p className="mt-5 text-sm sm:text-base leading-relaxed text-slate-600 font-semibold">{service.intro}</p>

                <div className="mt-8 grid gap-8 lg:grid-cols-2">
                  <div>
                    <h4 className="text-[10px] font-black uppercase tracking-[0.18em] text-[#A23B2A] mb-4">Solutions Include</h4>
                    <ListBlock items={service.items.slice(0, 6)} />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-black uppercase tracking-[0.18em] text-[#A23B2A] mb-4">Benefits</h4>
                    <ListBlock items={service.benefits} />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 border-t border-slate-200/80">
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="inline-flex rounded-full border border-brand-terracotta/15 bg-brand-terracotta/5 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-brand-terracotta mb-4">
            Why Choose Us
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-slate-955 leading-tight">
            Why Businesses Choose SoftClinch
          </h2>
          <p className="mt-6 text-base sm:text-lg leading-relaxed text-slate-600 font-medium">
            We combine AI innovation, enterprise-grade development standards, and scalable technology architecture to build future-ready business applications.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {advantages.map((item, index) => (
            <div
              key={item.title}
              className="group relative rounded-[2.5rem] border border-slate-200 bg-white p-8 sm:p-10 shadow-sm hover:shadow-xl hover:border-brand-navy/20 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              {/* Accent top gradient bar */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-navy to-brand-terracotta opacity-0 group-hover:opacity-100 transition-opacity" />

              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="text-xs font-mono font-black text-slate-400 group-hover:text-brand-terracotta transition-colors">
                    {"// ADVANTAGE 0" + (index + 1)}
                  </span>
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 animate-pulse" />
                </div>

                <h3 className="text-lg font-display font-bold text-slate-955 mb-4 group-hover:text-brand-navy transition-colors">
                  {item.title}
                </h3>

                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-semibold">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Industries Section */}
      <section className="mx-auto max-w-7xl px-4 pt-12 pb-24 sm:px-6 lg:px-8 border-t border-slate-200/80">
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="inline-flex rounded-full border border-brand-terracotta/15 bg-brand-terracotta/5 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-brand-terracotta mb-4">
            Industries
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-slate-955 leading-tight">
            Industries We Serve
          </h2>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {industries.map((industry) => (
            <div
              key={industry.name}
              className="group relative rounded-[2.5rem] border border-slate-200 bg-white p-8 shadow-sm hover:shadow-xl hover:border-brand-navy/20 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-navy to-brand-terracotta opacity-0 group-hover:opacity-100 transition-opacity" />

              <div>
                <industry.icon className="h-8 w-8 text-brand-navy group-hover:text-brand-terracotta transition-colors" />
                <h3 className="mt-5 text-xl font-display font-bold text-slate-955 group-hover:text-brand-navy transition-colors">{industry.name}</h3>
                <p className="mt-4 text-xs sm:text-sm leading-relaxed text-slate-500 font-semibold">{industry.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Frequently Searched Business Solutions */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 border-t border-slate-200/80">
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="inline-flex rounded-full border border-brand-terracotta/15 bg-brand-terracotta/5 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-brand-terracotta mb-4">
            Solutions
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-slate-955 leading-tight">
            Frequently Searched Business Solutions
          </h2>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {searchSolutions.map((item) => (
            <div
              key={item.title}
              className="group relative rounded-[2.5rem] border border-slate-200 bg-white p-8 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between border-t-2 border-t-brand-navy/20 hover:border-t-brand-terracotta/80"
            >
              <div>
                <h3 className="text-lg font-display font-bold text-slate-955 group-hover:text-brand-navy transition-colors">{item.title}</h3>
                <p className="mt-4 text-xs sm:text-sm leading-relaxed text-slate-500 font-semibold">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Development Process */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 border-t border-slate-200/80">
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="inline-flex rounded-full border border-brand-terracotta/15 bg-brand-terracotta/5 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-brand-terracotta mb-4">
            Development Process
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-slate-955 leading-tight">
            Our Development Process
          </h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((item, index) => (
            <div
              key={item.step}
              className="group relative rounded-[2.5rem] border border-slate-200 bg-white p-8 sm:p-10 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-navy to-brand-terracotta opacity-0 group-hover:opacity-100 transition-opacity" />

              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="text-xs font-mono font-black text-slate-400 group-hover:text-brand-terracotta transition-colors">
                    {"// STEP 0" + (index + 1)}
                  </span>
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 animate-pulse" />
                </div>

                <h3 className="text-lg font-display font-bold text-slate-955 mb-4 group-hover:text-brand-navy transition-colors">
                  {item.step.replace(/^\d+\.\s*/, "")}
                </h3>

                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-semibold">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Outcomes Section */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 border-t border-slate-200/80">
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="inline-flex rounded-full border border-brand-terracotta/15 bg-brand-terracotta/5 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-brand-terracotta mb-4">
            Results
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-slate-955 leading-tight">
            Business Outcomes You Can Expect
          </h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {outcomes.map((item, index) => (
            <div
              key={item.title}
              className="group relative rounded-[2.5rem] border border-slate-200 bg-white p-8 sm:p-10 shadow-sm hover:shadow-xl hover:border-brand-navy/35 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-brand-navy to-brand-terracotta opacity-80 group-hover:opacity-100 transition-opacity" />

              <div>
                <h3 className="text-lg font-display font-bold text-slate-955 mb-4 group-hover:text-brand-navy transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-semibold">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Technologies Section */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 border-t border-slate-200/80">
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="inline-flex rounded-full border border-brand-terracotta/15 bg-brand-terracotta/5 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-brand-terracotta mb-4">
            Technologies
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-slate-955 leading-tight">
            Technologies We Work With
          </h2>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {technologyGroups.map((group) => (
            <div
              key={group.title}
              className="group relative rounded-[2.5rem] border border-slate-200 bg-white p-8 sm:p-10 shadow-sm hover:shadow-xl hover:border-brand-navy/35 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              <div>
                <h3 className="text-lg font-display font-bold text-slate-955 mb-6 group-hover:text-brand-navy transition-colors">{group.title}</h3>
                <div className="flex flex-wrap gap-2.5">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-xs sm:text-sm font-semibold text-slate-600 hover:border-brand-navy/35 transition-colors duration-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 overflow-hidden border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
          <span className="inline-flex rounded-full border border-brand-terracotta/15 bg-brand-terracotta/5 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-brand-terracotta mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-slate-955 leading-tight mb-4">
            What Businesses Say About SoftClinch
          </h2>
          <div className="flex items-center justify-center gap-2 text-amber-400">
            <span className="text-slate-900 font-bold text-xl">5.0</span>
            {[...Array(5)].map((_, i) => (
              <svg key={i} viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            ))}
            <span className="text-slate-500 font-normal text-sm ml-1">· {reviews.length} verified Google reviews</span>
          </div>
        </div>

        <div className="relative w-full">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#F8FAFC] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#F8FAFC] to-transparent z-10 pointer-events-none" />
          <style>{`
            @keyframes entMarquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
            .ent-marquee-track { display: flex; width: max-content; animation: entMarquee 30s linear infinite; }
            .ent-marquee-track:hover { animation-play-state: paused; }
          `}</style>
          <div className="overflow-hidden w-full">
            <div className="ent-marquee-track gap-5 py-3 px-4">
              {[...reviews, ...reviews].map((item, i) => (
                <div
                  key={`${item.name}-${i}`}
                  className="w-[300px] shrink-0 group relative rounded-[2rem] border border-slate-200 bg-white px-6 py-5 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col gap-3 cursor-default overflow-hidden"
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-navy to-brand-terracotta opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="flex items-center justify-between">
                    <div className="flex gap-0.5 text-amber-400">
                      {[...Array(item.rating)].map((_, s) => (
                        <svg key={s} viewBox="0 0 24 24" className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                      ))}
                    </div>
                    <div className="flex items-center gap-1 bg-slate-50 border border-slate-200/60 px-2 py-0.5 rounded-full text-[9px] font-bold text-slate-500 shadow-sm">
                      <svg viewBox="0 0 24 24" className="w-3 h-3" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05"/>
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                      </svg>
                      Google
                    </div>
                  </div>
                  <p className="text-sm leading-relaxed text-slate-700 font-medium flex-1">&ldquo;{item.text}&rdquo;</p>
                  <footer className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-terracotta border-t border-slate-100 pt-3 flex items-center justify-between">
                    <span>{item.name}</span>
                    <span className="text-[9px] font-bold text-emerald-600 tracking-normal normal-case flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block"></span> Verified
                    </span>
                  </footer>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <FaqSection title="Frequently Asked Questions" items={faqItems} includeSEO={false} />

      {/* CTA Section */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 border-t border-slate-200/80">
        <div className="relative overflow-hidden rounded-[3rem] bg-brand-navy text-white shadow-2xl">
          {/* Subtle decoration */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#A23B2A]/20 blur-[100px] rounded-full pointer-events-none" />

          <div className="relative grid gap-10 px-8 py-14 lg:grid-cols-[1.1fr_0.9fr] lg:px-16 lg:py-16 items-center z-10">
            <div>
              <span className="text-xs font-black uppercase tracking-[0.2em] text-[#A23B2A]">
                Ready to Build?
              </span>
              <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-display font-bold leading-tight">
                Build AI-Powered Applications That Scale with Your Business
              </h2>
              <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-200">
                Talk to SoftClinch about enterprise software, AI automation, cloud-native systems, and custom eCommerce applications tailored to your growth goals.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-8 py-4 font-bold text-brand-navy transition hover:bg-slate-100 hover:-translate-y-0.5 shadow-lg"
              >
                <span>Book Free Consultation</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-2xl border border-white/20 px-8 py-4 font-bold text-white transition hover:bg-white/10 hover:-translate-y-0.5"
              >
                Schedule Strategy Call
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
