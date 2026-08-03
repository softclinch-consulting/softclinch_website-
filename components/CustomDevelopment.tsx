"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Cloud,
  Database,
  Layers3,
  ServerCog,
  Smartphone,
  Workflow,
  CheckCircle2,
  Code,
  Zap,
  HelpCircle,
  Cpu,
  Shield,
  Activity,
  Heart,
  ShoppingCart,
  Factory,
  Truck,
  GraduationCap,
  Landmark,
  Briefcase,
  Building2,
  Target,
  Laptop,
} from "lucide-react";
import { FaqSection } from "@/components/FaqSection";
import { ServiceMediaPanel } from "@/components/ServiceMediaPanel";
import { ServiceStatStrip } from "@/components/ServiceStatStrip";
import { customDevelopmentFaq } from "@/lib/faqs";

const detailedServices = [
  {
    icon: Layers3,
    title: "SaaS Application Development",
    tagline: "Launch and scale cloud-based software products with modern architecture and subscription-ready infrastructure.",
    points: [
      "Multi-Tenant SaaS Architecture",
      "Subscription Billing Systems",
      "User Authentication & Authorization",
      "Role-Based Access Control",
      "Customer Portals",
      "Admin Dashboards",
      "Analytics & Reporting",
      "API Integrations",
      "Cloud Infrastructure Setup",
    ],
    footer: "We help businesses build scalable SaaS products that deliver exceptional user experiences while supporting long-term growth.",
    tech: "Next.js, React, Node.js, TypeScript, PostgreSQL, MongoDB, Docker, Kubernetes, AWS",
  },
  {
    icon: Code,
    title: "Custom Web Application Development",
    tagline: "Build secure and scalable web applications tailored to your business requirements and customer experiences.",
    points: [
      "Customer Self-Service Portals",
      "Booking & Reservation Systems",
      "Membership Platforms",
      "Internal Business Applications",
      "Workflow Management Systems",
      "Reporting & Analytics Platforms",
      "Marketplace Solutions",
      "Business Process Automation Tools",
    ],
    footer: "Every application is designed for performance, usability, security, and scalability.",
  },
  {
    icon: Zap,
    title: "MVP Development Services",
    tagline: "Bring your product idea to market faster with a Minimum Viable Product (MVP).",
    description: "Our MVP development services help startups and businesses validate ideas, gather user feedback, and reduce development risk before investing in a full-scale platform.",
    points: [
      "Product Discovery",
      "Feature Prioritization",
      "UI/UX Design",
      "MVP Development",
      "Cloud Deployment",
      "User Testing",
      "Product Scaling Roadmaps",
    ],
    footer: "MVP development is the process of building a simplified version of a software product with essential features. It enables businesses to test market demand, validate assumptions, and gather real user feedback before expanding functionality.",
  },
  {
    icon: ServerCog,
    title: "API Development & Integration Services",
    tagline: "Connect systems, applications, and platforms through secure API solutions.",
    points: [
      "REST API Development",
      "GraphQL APIs",
      "Third-Party Integrations",
      "Payment Gateway Integration",
      "CRM Integrations",
      "ERP Integrations",
      "SAP Integrations",
      "HubSpot Integrations",
      "WhatsApp API Integrations",
      "Marketing Automation Integrations",
      "Webhook Development",
    ],
    footer: "We help businesses create connected digital ecosystems that improve operational efficiency and data flow.",
  },
  {
    icon: Cloud,
    title: "Cloud Application Development",
    tagline: "Build modern cloud-native applications designed for scalability, resilience, and high performance.",
    points: [
      "AWS Development",
      "Microsoft Azure Solutions",
      "Google Cloud Applications",
      "Docker Containerization",
      "Kubernetes Deployment",
      "Serverless Architecture",
      "Cloud Migration Services",
      "High Availability Infrastructure",
    ],
    footer: "Cloud-native applications provide the flexibility and reliability required by modern businesses.",
  },
  {
    icon: Database,
    title: "CRM & Dashboard Development",
    tagline: "Gain real-time visibility into business performance through custom dashboards and CRM systems.",
    points: [
      "CRM Platforms",
      "Sales Dashboards",
      "Lead Management Systems",
      "KPI Reporting Tools",
      "Customer Service Portals",
      "Business Intelligence Dashboards",
      "Executive Reporting Systems",
    ],
    footer: "Transform business data into actionable insights that support better decision-making.",
  },
];

const benefits = [
  {
    title: "Custom-Built Solutions",
    description: "Designed from the ground up to support your unique business operations, customer workflows, and long-term goals.",
    icon: Target,
  },
  {
    title: "Modern Technology Stack",
    description: "Built on high-performance frameworks like Next.js, React, Node.js, and cloud ecosystems for speed and scalability.",
    icon: Cpu,
  },
  {
    title: "Agile Development Methodology",
    description: "Iterative sprints, continuous integration, and transparent updates keep projects on track and adaptable.",
    icon: Workflow,
  },
  {
    title: "Cloud-Native Architecture",
    description: "Engineered for high availability, serverless infrastructure, and efficient containerization using Docker & K8s.",
    icon: Cloud,
  },
  {
    title: "API-First Development Approach",
    description: "Secure, structured integration layers enabling easy connection with CRMs, ERPs, SAP, and automation services.",
    icon: ServerCog,
  },
  {
    title: "Scalable Infrastructure",
    description: "Deployments designed on AWS, Azure, or GCP to auto-scale dynamically with growing customer demand.",
    icon: Database,
  },
  {
    title: "Transparent Project Delivery",
    description: "Clear communication, regular milestone updates, staging reviews, and structured code handover.",
    icon: Activity,
  },
  {
    title: "Long-Term Support & Maintenance",
    description: "Continuous security patching, performance optimization, cloud maintenance, and feature enhancements.",
    icon: Shield,
  },
];

const industries = [
  {
    name: "Healthcare",
    description: "Patient portals, healthcare management systems, appointment scheduling applications, and operational workflow solutions.",
    icon: Heart,
  },
  {
    name: "Retail & E-commerce",
    description: "Order management systems, inventory platforms, customer portals, and digital commerce applications.",
    icon: ShoppingCart,
  },
  {
    name: "Manufacturing",
    description: "Production management systems, workflow automation tools, and operational dashboards.",
    icon: Factory,
  },
  {
    name: "Logistics & Supply Chain",
    description: "Shipment tracking platforms, warehouse management systems, and logistics automation solutions.",
    icon: Truck,
  },
  {
    name: "Education",
    description: "Learning management systems, student portals, and online education platforms.",
    icon: GraduationCap,
  },
  {
    name: "Financial Services",
    description: "Customer portals, reporting applications, workflow management systems, and secure digital solutions.",
    icon: Landmark,
  },
  {
    name: "Professional Services",
    description: "Client management systems, project tracking tools, reporting dashboards, and workflow automation platforms.",
    icon: Briefcase,
  },
  {
    name: "Real Estate",
    description: "Property management systems, real estate CRMs, lead automation workflows, and customer portals.",
    icon: Building2,
  },
];

const techStackDetails = {
  frontend: {
    title: "Frontend Technologies",
    description: "Modern client-side frameworks and languages to deliver lightning-fast page speeds, responsive layouts, and interactive user experiences.",
    items: [
      { name: "Next.js", desc: "React framework for production-grade Server-Side Rendering (SSR) & Static Generation.", feature: "SSR & SSG" },
      { name: "React", desc: "Component-driven UI library for building dynamic, high-performance web applications.", feature: "Component UI" },
      { name: "TypeScript", desc: "Type-safe superset of JavaScript, preventing compile-time bugs and scaling cleanly.", feature: "Type Safety" },
      { name: "JavaScript", desc: "Core scripting language powering standard web behaviors and interactive client states.", feature: "Dynamic Scripting" },
    ],
  },
  backend: {
    title: "Backend Technologies",
    description: "Robust server-side frameworks built for scalability, fast response times, high security, and clean API design.",
    items: [
      { name: "Node.js", desc: "Event-driven, non-blocking asynchronous JavaScript runtime for high-concurrency apps.", feature: "Async I/O" },
      { name: "Python", desc: "Highly readable backend language optimized for data analytics, scripting, and AI routing.", feature: "Data & AI Ready" },
      { name: "Express.js", desc: "Minimalist backend framework for routing and middleware-driven API integration.", feature: "RESTful APIs" },
    ],
  },
  databases: {
    title: "Databases & Storage",
    description: "Secure, reliable relational and non-relational storage architectures tailored to performance and schema needs.",
    items: [
      { name: "PostgreSQL", desc: "Enterprise-grade open-source relational database for complex data relations and ACID compliance.", feature: "SQL / Relational" },
      { name: "MongoDB", desc: "Flexible document-based NoSQL database optimized for scale, caching, and JSON storage.", feature: "NoSQL / JSON" },
      { name: "MySQL", desc: "Classic, widely supported relational database optimized for fast reads and standard transactions.", feature: "SQL / ACID" },
    ],
  },
  devops: {
    title: "Cloud & DevOps Infrastructure",
    description: "Automated pipelines and cloud-native containerized hosting infrastructures to ensure high availability and stability.",
    items: [
      { name: "AWS", desc: "Industry-standard cloud ecosystem for serverless, lambda functions, EC2, and S3 assets.", feature: "Cloud Hosting" },
      { name: "Microsoft Azure", desc: "Enterprise-level cloud computing services, secure app service domains, and active directory.", feature: "Enterprise Cloud" },
      { name: "Google Cloud", desc: "Google-infrastructure hosting, Kubernetes engines, and advanced analytics setups.", feature: "GCP Engines" },
      { name: "Docker", desc: "Container virtualization keeping developer local environments identical to production hosts.", feature: "Containers" },
      { name: "Kubernetes", desc: "Container fleet orchestrator managing automated auto-scaling and failover operations.", feature: "K8s Orchestration" },
      { name: "CI/CD Pipelines", desc: "Continuous automated code integration, unit testing, security checks, and deploy runs.", feature: "DevOps Pipelines" },
    ],
  },
};

const processSteps = [
  {
    title: "Discovery & Requirement Analysis",
    description: "We understand your business goals, workflows, technical requirements, and project objectives.",
  },
  {
    title: "Solution Architecture & UX Design",
    description: "Our team designs scalable architectures, APIs, databases, and user-friendly experiences.",
  },
  {
    title: "Agile Development",
    description: "Applications are built through iterative development cycles with continuous testing and optimization.",
  },
  {
    title: "Quality Assurance",
    description: "Comprehensive testing ensures performance, security, reliability, and usability.",
  },
  {
    title: "Deployment & Launch",
    description: "Applications are deployed securely with cloud infrastructure, monitoring, and performance optimization.",
  },
  {
    title: "Ongoing Support & Enhancement",
    description: "We provide maintenance, updates, feature enhancements, and long-term technical support.",
  },
];

const internalLinks = [
  { label: "SAP Consulting", href: "/services/sap-consulting" },
  { label: "SAP AMS Support", href: "/sap-ams-support" },
  { label: "AI-Powered Business Systems", href: "/services/ai-powered-business-systems" },
  { label: "Digital Marketing", href: "/digital-marketing" },
  { label: "All Services", href: "/services" },
  { label: "Contact Us", href: "/contact" },
];

export function CustomDevelopment() {
  const [activeTab, setActiveTab] = useState<"frontend" | "backend" | "databases" | "devops">("frontend");

  const activeCategory = techStackDetails[activeTab];

  return (
    <div className="bg-[linear-gradient(180deg,#f8fafc_0%,#ffffff_18%,#f8fafc_100%)] pt-0 text-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-slate-200">
        <div className="absolute inset-x-0 top-0 h-[520px] bg-[radial-gradient(circle_at_top_left,rgba(11,37,69,0.14),transparent_46%),radial-gradient(circle_at_top_right,rgba(194,94,63,0.16),transparent_38%)]" />
        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start mt-4">
            <div>
              <div className="mb-6 inline-flex items-center rounded-full border border-brand-navy/10 bg-white/80 px-4 py-2 text-sm font-semibold text-brand-navy shadow-sm backdrop-blur">
                Custom Software Development Company
              </div>
              <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-slate-950 md:text-5xl lg:text-6xl">
                Custom Web, SaaS & Cloud Application Development Services
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-brand-navy font-semibold md:text-xl">
                Build secure, scalable, and cloud-native applications tailored to your business workflows and growth goals.
              </p>
              <div className="mt-6 space-y-4 text-base leading-7 text-slate-600">
                <p>
                  SoftClinch is a custom software development company specializing in web applications, SaaS platforms, MVP development, API integrations, cloud-native systems, and business automation solutions. We help startups, SMEs, and growing businesses transform ideas into scalable digital products that improve efficiency, streamline operations, and accelerate growth.
                </p>
                <p>
                  Whether you're launching a SaaS product, building a customer portal, modernizing existing software, or developing a custom business application, our team delivers technology solutions designed for performance, security, and long-term scalability.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center rounded-xl bg-brand-navy px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-navy/20 transition hover:bg-brand-navy/90"
                >
                  Start Your Project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center rounded-xl border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 transition hover:border-brand-terracotta hover:text-brand-terracotta"
                >
                  Schedule a Consultation
                </Link>
              </div>
            </div>

            <ServiceMediaPanel
              title="Product & SaaS Preview"
              subtitle="Secure, scalable cloud-native web applications, SaaS platforms, admin systems, and API integrations."
              imageSrc="/custom_app_dev_hero.png"
              imageAlt="Custom software and SaaS development preview"
              points={[
                "Cloud-native architecture",
                "SaaS platforms & admin systems",
                "API integrations & workflows",
                "Responsive web & PWAs",
              ]}
              theme="light"
            />
          </div>
        </div>
      </section>

      {/* Stat Strip */}
      <div className="px-6 lg:px-8">
        <ServiceStatStrip
          items={[
            { value: "SaaS", label: "Platform & Product Engineering" },
            { value: "API", label: "Secure Integration-Ready Systems" },
            { value: "Cloud", label: "Scalable Architecture Foundations" },
            { value: "Full-Stack", label: "Frontend, Backend & DevOps Delivery" },
          ]}
        />
      </div>

      {/* Solutions & Introduction Section */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-terracotta">
              Tailored Architecture
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
              Custom Software Solutions Built Around Your Business
            </h2>
            <div className="mt-6 space-y-4 text-base leading-7 text-slate-600">
              <p>
                Off-the-shelf software often forces businesses to change their processes. Custom software gives you the flexibility to build systems that match your operations, workflows, and business objectives.
              </p>
              <p>
                At SoftClinch, we develop applications that solve real business challenges while providing the scalability needed for future growth.
              </p>
            </div>
            
            <div className="mt-10 rounded-[32px] border border-slate-200 bg-slate-50 p-6 md:p-8">
              <h3 className="text-lg font-bold text-slate-950 flex items-center gap-2">
                <HelpCircle className="h-5 w-5 text-brand-terracotta" />
                What is Custom Software Development?
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Custom software development is the process of designing, developing, and maintaining software tailored to a business's specific requirements. Unlike off-the-shelf software, custom applications are built around your workflows, integrations, security requirements, and growth objectives.
              </p>
            </div>
          </div>
          
          <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm">
            <h3 className="text-xl font-bold text-slate-950 mb-6">Our Expertise Includes</h3>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              {[
                "Custom Web Applications",
                "SaaS Platform Development",
                "MVP Development",
                "Progressive Web Applications (PWAs)",
                "CRM & Dashboard Development",
                "Customer Portals",
                "API Development & Integrations",
                "Workflow Automation Systems",
                "Cloud Applications", 
                "Analytics & Reporting Platforms",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-slate-50/50 p-4 text-sm font-medium text-slate-800"
                >
                  <span className="h-2 w-2 rounded-full bg-brand-terracotta flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Breakdown Cards */}
      <section className="bg-slate-50 border-y border-slate-200">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-terracotta">
              Service Offerings
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
              Comprehensive Custom Software Services
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              From early-stage MVPs to high-availability enterprise cloud applications, we deliver end-to-end engineering tailored to your workflow.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {detailedServices.map((service) => (
              <div
                key={service.title}
                className="flex flex-col justify-between rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm transition hover:shadow-lg hover:-translate-y-1"
              >
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-navy/5 text-brand-navy">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-6 text-2xl font-bold text-slate-950">{service.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-500 font-medium">{service.tagline}</p>
                  
                  {service.description && (
                    <p className="mt-3 text-xs leading-5 text-slate-600 bg-slate-50 p-3 rounded-xl border border-slate-100">
                      {service.description}
                    </p>
                  )}

                  <div className="mt-6 border-t border-slate-100 pt-6">
                    <h4 className="text-xs font-semibold uppercase tracking-[0.1em] text-brand-terracotta mb-4">
                      Key Deliverables
                    </h4>
                    <ul className="space-y-2.5">
                      {service.points.map((pt) => (
                        <li key={pt} className="flex items-start gap-2.5 text-sm text-slate-700">
                          <CheckCircle2 className="h-4 w-4 mt-0.5 text-brand-navy flex-shrink-0" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 border-t border-slate-100 pt-6">
                  <p className="text-xs leading-5 text-slate-500 italic">
                    {service.footer}
                  </p>
                  {service.tech && (
                    <div className="mt-4 rounded-xl bg-slate-50 p-3 border border-slate-100">
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-400 block mb-1">
                        Technologies Used
                      </span>
                      <span className="text-xs font-medium text-slate-700 block">
                        {service.tech}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose SoftClinch Section */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-terracotta">
            Our Value Proposition
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
            Why Businesses Choose SoftClinch
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            SoftClinch combines business understanding, modern technology, and agile development practices to deliver software solutions that generate measurable business outcomes.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-navy/5 text-brand-navy">
                <benefit.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-bold text-slate-950">{benefit.title}</h3>
              <p className="mt-2 text-xs leading-5 text-slate-600">{benefit.description}</p>
            </div>
          ))}
        </div>

        <p className="mt-12 text-center text-sm font-semibold text-brand-navy italic">
          "From MVPs to scalable SaaS platforms, we help businesses build technology that supports sustainable growth."
        </p>
      </section>

      {/* Industries We Serve Section */}
      <section className="bg-slate-950 text-white border-y border-slate-950">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-terracotta">
              Target Domains
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-4xl">
              Industries We Serve
            </h2>
            <p className="mt-4 text-slate-400">
              We deliver custom software that solves industry-specific operational challenges and supports growth.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {industries.map((ind) => (
              <div
                key={ind.name}
                className="rounded-[24px] border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-brand-terracotta">
                  <ind.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-white">{ind.name}</h3>
                <p className="mt-2 text-xs leading-5 text-slate-300">{ind.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modern Technology Stack Section (Interactive Design) */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="rounded-[40px] border border-slate-200 bg-white p-6 shadow-sm md:p-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(194,94,63,0.04),transparent_40%)]" />
          
          <div className="relative z-10 grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-terracotta">
                Technology Stack
              </span>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
                Modern Technology Stack
              </h2>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                We build applications using modern, production-grade technologies, frameworks, and cloud-native solutions to ensure speed, flexibility, and maintenance readiness.
              </p>

              {/* Interactive Tabs */}
              <div className="mt-10 flex flex-col gap-3">
                {[
                  { id: "frontend", label: "Frontend Technologies", icon: Laptop, desc: "Interactive, fast client UIs" },
                  { id: "backend", label: "Backend Technologies", icon: Cpu, desc: "Secure API & logic foundations" },
                  { id: "databases", label: "Databases", icon: Database, desc: "ACID compliance & structure" },
                  { id: "devops", label: "Cloud & DevOps", icon: Cloud, desc: "Auto-scaling & container systems" },
                ].map((tab) => {
                  const isSelected = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id as any)}
                      className={[
                        "flex items-center gap-4 rounded-2xl p-4 text-left transition duration-200 border cursor-pointer",
                        isSelected
                          ? "border-brand-navy bg-brand-navy text-white shadow-lg"
                          : "border-slate-100 bg-slate-50/50 text-slate-700 hover:bg-slate-50 hover:border-slate-200",
                      ].join(" ")}
                    >
                      <div
                        className={[
                          "flex h-10 w-10 items-center justify-center rounded-xl",
                          isSelected ? "bg-white/10 text-white" : "bg-brand-navy/5 text-brand-navy",
                        ].join(" ")}
                      >
                        <tab.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="text-sm font-bold">{tab.label}</div>
                        <div
                          className={["text-xs mt-0.5", isSelected ? "text-slate-200" : "text-slate-500"].join(" ")}
                        >
                          {tab.desc}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Displaying active tech category items */}
            <div className="flex flex-col justify-between rounded-3xl border border-slate-200/80 bg-slate-50/50 p-6 md:p-8">
              <div>
                <h3 className="text-xl font-bold text-slate-900">{activeCategory.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{activeCategory.description}</p>
                
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {activeCategory.items.map((tech) => (
                    <div
                      key={tech.name}
                      className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md hover:border-brand-navy/20 group"
                    >
                      <div className="flex justify-between items-start gap-3">
                        <h4 className="text-base font-bold text-slate-950 group-hover:text-brand-terracotta transition-colors">
                          {tech.name}
                        </h4>
                        <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-slate-500">
                          {tech.feature}
                        </span>
                      </div>
                      <p className="mt-3 text-xs leading-5 text-slate-500">
                        {tech.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mt-8 border-t border-slate-200 pt-6 flex flex-wrap gap-4 items-center justify-between">
                <span className="text-xs font-medium text-slate-400">
                  Select a category on the left to explore our full stack expertise.
                </span>
                <span className="text-xs font-semibold text-brand-terracotta flex items-center gap-1.5">
                  Production Ready <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Development Process Section */}
      <section className="bg-[linear-gradient(180deg,#f8fafc_0%,#eef4f8_100%)] border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-terracotta">
              Methodology
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
              Our Development Process
            </h2>
            <p className="mt-4 text-slate-600">
              A structured, agile approach to planning, building, launching, and supporting digital products.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {processSteps.map((step, index) => (
              <div
                key={step.title}
                className="rounded-[24px] border border-slate-200 bg-white p-8 shadow-sm relative overflow-hidden group hover:border-brand-terracotta transition-colors"
              >
                <div className="absolute top-0 right-0 h-24 w-24 translate-x-6 -translate-y-6 bg-slate-50 rounded-full group-hover:bg-brand-terracotta/5 transition-colors" />
                <div className="relative">
                  <span className="text-xs font-bold text-brand-terracotta bg-brand-terracotta/10 px-3 py-1 rounded-full">
                    Step 0{index + 1}
                  </span>
                  <h3 className="mt-5 text-lg font-bold text-slate-950">{step.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing & Estimation Section */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8 border-t border-slate-200">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-terracotta">
              Pricing & Estimations
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
              How Much Does Custom Software Development Cost?
            </h2>
            <p className="mt-6 text-base leading-8 text-slate-600">
              The cost of custom software development depends on project complexity, functionality, integrations, infrastructure requirements, and business objectives.
            </p>
            <p className="mt-4 text-base leading-8 text-slate-600">
              Every project is unique, which is why SoftClinch provides tailored consultations and customized project estimates.
            </p>
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center rounded-xl bg-brand-navy px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-navy/20 transition hover:bg-brand-navy/90"
              >
                Request a Quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm">
            <h3 className="text-xl font-bold text-slate-950 mb-6">Factors Influencing Development Costs</h3>
            <div className="space-y-4">
              {[
                { name: "Number of Features", desc: "Complexity and scope of the features to be built" },
                { name: "Third-Party Integrations", desc: "APIs, CRMs, ERPs, payment gateways, and databases" },
                { name: "User Roles & Permissions", desc: "Access level granularity and RBAC requirements" },
                { name: "Mobile Compatibility", desc: "PWA support and multi-device responsive scaling" },
                { name: "Cloud Infrastructure Requirements", desc: "Server architectures, Docker container environments, AWS/Azure setup" },
                { name: "Security & Compliance Needs", desc: "Data encryption, identity management, and certification prep" },
                { name: "Ongoing Maintenance Requirements", desc: "Updates, SLA support hours, and server monitoring plans" },
              ].map((factor) => (
                <div
                  key={factor.name}
                  className="flex gap-4 items-start border-b border-slate-100 pb-3 last:border-0 last:pb-0"
                >
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-terracotta/10 text-brand-terracotta text-xs font-bold flex-shrink-0">
                    $
                  </span>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">{factor.name}</h4>
                    <p className="text-xs text-slate-500 mt-1">{factor.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Internal Links & Technical Info */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 border-t border-slate-200">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[32px] bg-slate-950 p-8 text-white shadow-[0_24px_80px_-40px_rgba(15,23,42,0.7)]">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-terracotta">
              Internal Links
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight">
              Explore related SoftClinch capabilities
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-300">
              Pair custom software delivery with automation, SAP support, and growth systems to create connected operational infrastructure.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {internalLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm font-medium text-white transition hover:bg-white/10"
                >
                  <span>{item.label}</span>
                  <ArrowRight className="h-4 w-4 text-brand-terracotta" />
                </Link>
              ))}
            </div>
          </div>

          <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-terracotta">
              Technical SEO & Architecture
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950">
              Structured for search and performance
            </h2>
            <div className="mt-6 space-y-4 text-sm leading-7 text-slate-600">
              <p>
                This page uses a clean H1/H2/H3 hierarchy, structured service specifications, secure links, and metadata mapping to support strong indexing and search prominence.
              </p>
              <p>
                Built on a clean-rendering client setup and static-ready sections, this route ensures high mobile responsiveness and optimized Core Web Vitals.
              </p>
            </div>
            <div className="mt-8 rounded-2xl bg-slate-50 p-5">
              <div className="flex items-start gap-3">
                <Workflow className="mt-1 h-5 w-5 flex-shrink-0 text-brand-terracotta" />
                <p className="text-sm leading-7 text-slate-600">
                  Search engines favor sites that match user search intent with structured schema markup, clean responsive components, and lightning-fast loading speeds.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="rounded-[36px] bg-[linear-gradient(135deg,#0b2545_0%,#163a63_55%,#c25e3f_140%)] px-8 py-12 text-white shadow-[0_32px_100px_-40px_rgba(11,37,69,0.75)] md:px-12 md:py-16">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/80">
            Ready to build?
          </p>
          <h2 className="mt-4 max-w-4xl text-3xl font-bold tracking-tight md:text-5xl">
            Ready to Build Your Next Application?
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-8 text-slate-200">
            Whether you're launching a SaaS platform, developing an MVP, creating a customer portal, or building a custom business application, SoftClinch can help transform your ideas into scalable digital solutions.
          </p>
          <p className="mt-4 max-w-3xl text-base leading-8 text-slate-200">
            Partner with SoftClinch to build secure, high-performance applications that support business growth, operational efficiency, and long-term success.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-brand-navy transition hover:bg-slate-100"
            >
              Start Your Project
              <ArrowRight className="ml-2 h-4 w-4 text-brand-navy" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center rounded-xl border border-white/30 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Schedule a Free Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <FaqSection title="Custom Development FAQs" items={customDevelopmentFaq} />
    </div>
  );
}
