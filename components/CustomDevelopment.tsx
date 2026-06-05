import Link from "next/link";
import {
  ArrowRight,
  Cloud,
  Database,
  Layers3,
  Palette,
  ServerCog,
  Smartphone,
  Workflow,
} from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FaqSection } from "@/components/FaqSection";
import { ServiceMediaPanel } from "@/components/ServiceMediaPanel";
import { ServiceStatStrip } from "@/components/ServiceStatStrip";
import { customDevelopmentFaq } from "@/lib/faqs";

const serviceCards = [
  {
    icon: Layers3,
    title: "SaaS Platform Development",
    description:
      "Build scalable multi-tenant SaaS applications with subscription billing, role-based access control, cloud infrastructure, and secure authentication systems.",
  },
  {
    icon: Smartphone,
    title: "Progressive Web Apps",
    description:
      "Develop responsive progressive web applications with offline functionality, push notifications, fast performance, and app-like user experiences.",
  },
  {
    icon: Database,
    title: "CRM & Admin Dashboards",
    description:
      "Custom CRM systems, analytics dashboards, admin portals, and workflow management tools designed for operational efficiency and business growth.",
  },
  {
    icon: Cloud,
    title: "Cloud-Based Applications",
    description:
      "Cloud-native applications built on AWS, Azure, and Google Cloud using scalable microservices architecture and high-availability infrastructure.",
  },
  {
    icon: ServerCog,
    title: "API & Third-Party Integrations",
    description:
      "Secure REST APIs, GraphQL endpoints, webhook integrations, and third-party system integrations for seamless business connectivity.",
  },
  {
    icon: Palette,
    title: "UI/UX Engineering",
    description:
      "Modern UI/UX design and front-end engineering focused on responsive layouts, accessibility, usability, and high-performance experiences.",
  },
];

const contentSections = [
  {
    title: "Enterprise Software Development Services",
    body:
      "Build enterprise-grade applications, internal systems, customer portals, and scalable digital platforms optimized for performance, security, and business efficiency.",
  },
  {
    title: "SaaS Application Development Company",
    body:
      "Launch scalable SaaS products with subscription systems, cloud infrastructure, analytics dashboards, and multi-tenant architecture.",
  },
  {
    title: "Custom Web Application Development",
    body:
      "Develop secure and scalable web applications tailored to your business processes, customer experiences, and operational requirements.",
  },
  {
    title: "API Development & System Integrations",
    body:
      "Connect CRMs, ERPs, payment gateways, third-party services, and automation platforms with secure API integration solutions.",
  },
  {
    title: "Cloud-Native Application Architecture",
    body:
      "Modern cloud-native systems designed for scalability, resilience, performance optimization, and enterprise-grade reliability.",
  },
];

const processSteps = [
  {
    title: "Requirement Analysis",
    description:
      "Understanding business goals, workflows, user requirements, and technical specifications.",
  },
  {
    title: "System Architecture & UX Design",
    description:
      "Designing scalable architecture, APIs, databases, and user-centered interfaces.",
  },
  {
    title: "Agile Development",
    description:
      "Iterative full-stack development with continuous integration, testing, and optimization.",
  },
  {
    title: "Deployment & Ongoing Support",
    description:
      "Secure cloud deployment, monitoring, maintenance, and long-term application support.",
  },
];

const techStack = [
  "Next.js",
  "React",
  "Node.js",
  "TypeScript",
  "Python",
  "PostgreSQL",
  "MongoDB",
  "Docker",
  "Kubernetes",
  "AWS",
];

const internalLinks = [
  { label: "AI-Powered Business Systems", href: "/services/ai-powered-business-systems" },
  { label: "Digital Marketing", href: "/digital-marketing" },
  { label: "SAP AMS Support", href: "/sap-ams-support" },
  { label: "SAP Consulting", href: "/services/sap-consulting" },
  { label: "All Services", href: "/services" },
  { label: "Contact Us", href: "/contact" },
];

export function CustomDevelopment() {
  return (
    <div className="bg-[linear-gradient(180deg,#f8fafc_0%,#ffffff_18%,#f8fafc_100%)] pt-20 text-slate-900">
      <section className="relative overflow-hidden border-b border-slate-200">
        <div className="absolute inset-x-0 top-0 h-[520px] bg-[radial-gradient(circle_at_top_left,rgba(11,37,69,0.14),transparent_46%),radial-gradient(circle_at_top_right,rgba(194,94,63,0.16),transparent_38%)]" />
        <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Custom Application Development" },
            ]}
          />
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div>
              <div className="mb-6 inline-flex items-center rounded-full border border-brand-navy/10 bg-white/80 px-4 py-2 text-sm font-semibold text-brand-navy shadow-sm backdrop-blur">
                Custom software, SaaS platforms, APIs, and enterprise systems
              </div>
              <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-slate-950 md:text-5xl lg:text-6xl">
                Custom Web, SaaS & Enterprise Application Development
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 md:text-xl">
                Build secure, scalable, cloud-native web applications, SaaS platforms, dashboards, APIs, and enterprise software tailored to your business workflows and growth goals.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center rounded-xl bg-brand-navy px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-navy/20 transition hover:bg-brand-navy/90"
                >
                  Start Your Project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center rounded-xl border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 transition hover:border-brand-terracotta hover:text-brand-terracotta"
                >
                  Explore Services
                </Link>
              </div>
              <p className="mt-8 max-w-3xl text-sm leading-7 text-slate-500 md:text-base">
                Custom software development company specializing in SaaS platforms, enterprise applications, API integrations, cloud-native systems, and scalable digital products.
              </p>
            </div>

            <ServiceMediaPanel
              title="Product and Platform Preview"
              subtitle="A visual layer for SaaS products, internal tools, dashboards, and API-connected enterprise applications."
              imageSrc="/custom_app_dev_hero.png"
              imageAlt="Custom application development preview"
              points={[
                "Cloud-native architecture",
                "SaaS platforms and admin systems",
                "API integrations and workflow tools",
                "Responsive web and mobile-ready products",
              ]}
              theme="light"
            />
          </div>
        </div>
      </section>

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

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-terracotta">
            Services
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
            Custom development services for scalable digital products and internal systems
          </h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {serviceCards.map((service) => (
            <article
              key={service.title}
              className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-navy/5 text-brand-navy">
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-xl font-bold text-slate-950">{service.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{service.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            {contentSections.map((section) => (
              <div
                key={section.title}
                className="rounded-[32px] border border-slate-200 bg-slate-50 p-8"
              >
                <h2 className="text-3xl font-bold tracking-tight text-slate-950">
                  {section.title}
                </h2>
                <p className="mt-5 text-base leading-8 text-slate-600">{section.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="rounded-[36px] border border-slate-200 bg-white p-8 shadow-sm md:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-terracotta">
            Modern Technology Stack
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
            Modern technology choices for full-stack product development
          </h2>
          <p className="mt-5 max-w-4xl text-base leading-8 text-slate-600">
            We build applications using modern technologies including Next.js, React, Node.js, TypeScript, Python, PostgreSQL, MongoDB, Docker, Kubernetes, and AWS cloud infrastructure.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[linear-gradient(180deg,#f8fafc_0%,#eef4f8_100%)]">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-terracotta">
            Development Process
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
            Our development process
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {processSteps.map((step, index) => (
              <div
                key={step.title}
                className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
              >
                <div className="text-sm font-semibold text-brand-terracotta">
                  0{index + 1}
                </div>
                <h3 className="mt-4 text-xl font-bold text-slate-950">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
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
              Technical SEO
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950">
              Structured for search and performance
            </h2>
            <div className="mt-6 space-y-4 text-sm leading-7 text-slate-600">
              <p>
                This page now uses a cleaner H1/H2/H3 hierarchy, expanded service copy, valid internal linking, FAQ schema, service schema, and breadcrumb schema for stronger crawlability.
              </p>
              <p>
                The rewrite also removes the previous animation-heavy structure and remote media dependency from this route, which helps support better mobile performance and Core Web Vitals.
              </p>
            </div>
            <div className="mt-8 rounded-2xl bg-slate-50 p-5">
              <div className="flex items-start gap-3">
                <Workflow className="mt-1 h-5 w-5 flex-shrink-0 text-brand-terracotta" />
                <p className="text-sm leading-7 text-slate-600">
                  Good SEO here comes from matching high-intent search themes with clear service positioning, strong metadata, structured schema, and fast-rendering page sections.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="rounded-[36px] bg-[linear-gradient(135deg,#0b2545_0%,#163a63_55%,#c25e3f_140%)] px-8 py-12 text-white shadow-[0_32px_100px_-40px_rgba(11,37,69,0.75)] md:px-12">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/75">
            Ready to build?
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-bold tracking-tight md:text-4xl">
            Launch a custom application that streamlines operations, improves productivity, and scales with your business.
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-200">
            Partner with SoftClinch to design, build, and support enterprise-grade web and SaaS applications, API integrations, dashboards, automation flows, and long-term product growth.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-brand-navy transition hover:bg-slate-100"
            >
              Start Your Project
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center rounded-xl border border-white/30 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Schedule a Consultation
            </Link>
          </div>
        </div>
      </section>

      <FaqSection title="Custom Development FAQs" items={customDevelopmentFaq} />
    </div>
  );
}
