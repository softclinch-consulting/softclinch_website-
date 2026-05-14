import Link from "next/link";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  ChevronRight,
  Cloud,
  Database,
  Factory,
  LayoutDashboard,
  Link2,
  Route,
  Search,
  ShieldCheck,
  Smartphone,
  Stethoscope,
} from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FaqSection } from "@/components/FaqSection";
import { ServiceMediaPanel } from "@/components/ServiceMediaPanel";
import { ServiceStatStrip } from "@/components/ServiceStatStrip";
import {
  aiPoweredBusinessSystemsFaq,
  aiPoweredBusinessSystemsSeo,
} from "@/lib/aiPoweredBusinessSystemsSeo";

const trustMetrics = [
  { value: "10+ Years", label: "Enterprise Engineering Expertise" },
  { value: "150+ Projects", label: "Successfully Delivered" },
  { value: "99.9% SLA", label: "Enterprise Uptime Reliability" },
];

const enterpriseChallenges = [
  "Limited customization and vendor lock-in",
  "Software that forces teams to change workflows",
  "High recurring licensing costs",
  "Poor integration between systems",
  "Security and compliance risks",
  "Performance issues at scale",
  "Slow business operations and manual processes",
  "Difficult scalability for growing enterprises",
];

const enterpriseBenefits = [
  "Built specifically for your business workflows",
  "Fully scalable cloud-native architecture",
  "Seamless integration with ERP, CRM, and third-party systems",
  "Enterprise-grade security and compliance",
  "Faster operational efficiency and automation",
  "Lower long-term operational costs",
  "Better user adoption and productivity",
  "Future-ready infrastructure for business growth",
];

const services = [
  {
    title: "SaaS Platform Development",
    subtitle:
      "Build scalable SaaS applications with multi-tenant architecture, subscription billing, analytics dashboards, and enterprise-grade infrastructure.",
    features: [
      "Multi-tenant SaaS architecture",
      "Subscription billing systems",
      "User roles & permissions",
      "Usage analytics & reporting",
      "API-first infrastructure",
      "Scalable cloud deployment",
    ],
    cta: "Start your SaaS platform",
    href: "/custom-application-development",
    icon: Database,
  },
  {
    title: "Enterprise Web Applications",
    subtitle:
      "Custom enterprise portals, admin dashboards, workflow automation systems, and real-time business applications.",
    features: [
      "Real-time dashboards",
      "Workflow automation",
      "Business intelligence reporting",
      "Secure access management",
      "Responsive enterprise UI/UX",
      "High-performance architecture",
    ],
    cta: "Build your enterprise web application",
    href: "/custom-application-development",
    icon: LayoutDashboard,
  },
  {
    title: "Cloud-Native Application Development",
    subtitle:
      "Scalable applications deployed on AWS, Azure, and Google Cloud using modern microservices architecture.",
    features: [
      "Microservices architecture",
      "Kubernetes & Docker deployment",
      "Auto-scaling infrastructure",
      "CI/CD automation",
      "Disaster recovery systems",
      "Enterprise cloud security",
    ],
    cta: "Launch your cloud-native solution",
    href: "/custom-application-development",
    icon: Cloud,
  },
  {
    title: "API Development & System Integration",
    subtitle:
      "Secure integration between ERP systems, CRMs, payment gateways, analytics platforms, and enterprise software ecosystems.",
    features: [
      "REST & GraphQL APIs",
      "Real-time synchronization",
      "Webhook automation",
      "ERP & CRM integration",
      "Legacy system modernization",
      "Secure API authentication",
    ],
    cta: "Integrate your enterprise systems",
    href: "/custom-application-development",
    icon: Link2,
  },
  {
    title: "Progressive Web Applications (PWA)",
    subtitle:
      "Fast, installable web applications delivering app-like experiences across desktop and mobile devices.",
    features: [
      "Offline functionality",
      "Push notifications",
      "Native-like performance",
      "SEO-friendly architecture",
      "Cross-device compatibility",
      "Lightning-fast loading",
    ],
    cta: "Develop your PWA experience",
    href: "/custom-application-development",
    icon: Search,
  },
  {
    title: "Enterprise Mobile Applications",
    subtitle:
      "Custom iOS and Android enterprise applications integrated with backend systems and cloud infrastructure.",
    features: [
      "Native & cross-platform development",
      "Secure enterprise authentication",
      "Offline-first experience",
      "Push notifications",
      "Cloud synchronization",
      "Enterprise mobility solutions",
    ],
    cta: "Build your mobile enterprise app",
    href: "/custom-application-development",
    icon: Smartphone,
  },
];

const industries = [
  {
    name: "Healthcare & Life Sciences",
    icon: Stethoscope,
    challenges: [
      "Secure patient data",
      "Regulatory compliance",
      "Clinical workflow automation",
      "Medical device integration",
      "Real-time healthcare monitoring",
    ],
  },
  {
    name: "Finance & Banking",
    icon: Building2,
    challenges: [
      "PCI-DSS compliance",
      "Transaction security",
      "Fraud prevention",
      "Real-time reconciliation",
      "Audit trail management",
    ],
  },
  {
    name: "Manufacturing & Supply Chain",
    icon: Factory,
    challenges: [
      "Inventory visibility",
      "Production planning",
      "Demand forecasting",
      "Vendor management",
      "Operational automation",
    ],
  },
  {
    name: "Enterprise Services",
    icon: ShieldCheck,
    challenges: [
      "Workflow automation",
      "Team collaboration",
      "Business reporting",
      "Resource optimization",
      "Performance tracking",
    ],
  },
  {
    name: "Retail & E-commerce",
    icon: Link2,
    challenges: [
      "Real-time inventory sync",
      "Mobile commerce optimization",
      "Customer personalization",
      "Fraud prevention",
      "Order automation",
    ],
  },
  {
    name: "Hospitality & Travel",
    icon: Route,
    challenges: [
      "Dynamic pricing",
      "Reservation management",
      "Multi-property operations",
      "Guest communication",
      "Revenue optimization",
    ],
  },
];

const processSteps = [
  {
    title: "Discovery & Consultation",
    description:
      "Business analysis, workflow understanding, requirement gathering, and technical planning.",
  },
  {
    title: "Architecture & UX Design",
    description:
      "System architecture, UI/UX design, infrastructure planning, database schema, and API strategy.",
  },
  {
    title: "Agile Development",
    description:
      "Sprint-based development with continuous delivery, weekly demos, and transparent communication.",
  },
  {
    title: "Testing & Quality Assurance",
    description:
      "Automation testing, security audits, performance optimization, and enterprise QA validation.",
  },
  {
    title: "Deployment & Launch",
    description:
      "Production deployment, monitoring setup, DevOps automation, and infrastructure optimization.",
  },
  {
    title: "Ongoing Support & Scaling",
    description:
      "24/7 monitoring, maintenance, upgrades, security patches, and continuous feature enhancements.",
  },
];

const technologyStack = [
  { category: "Frontend", technologies: "React, Next.js, TypeScript" },
  { category: "Backend", technologies: "Node.js, Python, .NET Core" },
  { category: "Databases", technologies: "PostgreSQL, MongoDB, Redis" },
  { category: "Cloud", technologies: "AWS, Azure, Google Cloud" },
  { category: "DevOps", technologies: "Docker, Kubernetes, CI/CD" },
  { category: "APIs", technologies: "REST, GraphQL, gRPC" },
  { category: "Real-Time", technologies: "Firebase, WebSockets" },
  { category: "Security", technologies: "OAuth2, JWT, TLS/SSL" },
];

const businessImpact = [
  { value: "50–70% Faster", label: "Product Launch Timelines" },
  { value: "40% Lower TCO", label: "Compared to Multiple SaaS Tools" },
  { value: "10x Scalability", label: "Without Major Re-Architecture" },
  { value: "85%+ Adoption", label: "Improved User Adoption" },
  { value: "99.9% Uptime", label: "Enterprise Reliability" },
  { value: "25%+ Revenue Growth", label: "Through Automation & Optimization" },
];

const successStories = [
  {
    name: "Global FinTech Platform",
    details: [
      "500K+ Active Users",
      "$2M+ Daily Transactions",
      "99.95% Uptime",
      "Deployment Timeline: 14 Months",
    ],
  },
  {
    name: "Healthcare Patient Portal",
    details: [
      "2M+ Patient Records",
      "50K+ Daily Users",
      "HIPAA-Compliant Infrastructure",
      "24/7 Enterprise Support",
    ],
  },
  {
    name: "Manufacturing ERP Integration",
    details: [
      "25+ Production Lines Connected",
      "10K+ Real-Time Data Events/Minute",
      "$500K+ Annual Cost Savings",
      "Deployment Timeline: 8 Months",
    ],
  },
];

const comparisonPoints = [
  {
    label: "Traditional agencies",
    text: "Often focus on websites or campaigns as isolated deliverables rather than the operating systems behind revenue and service delivery.",
  },
  {
    label: "Generic software companies",
    text: "May build features well, but often miss the workflow, reporting, change management, and business adoption layer.",
  },
  {
    label: "Isolated AI tools",
    text: "Can automate fragments of work, but without structured integration they frequently create another disconnected layer.",
  },
  {
    label: "SoftClinch unified ecosystem model",
    text: "Combines applications, CRM, automation, dashboards, digital growth systems, and modernization strategy into one scalable operating environment.",
  },
];

const globalPoints = [
  "Built for GCC businesses navigating growth, service responsiveness, and cross-team coordination.",
  "Relevant for UAE companies, Saudi Arabia businesses, Qatar enterprises, Kuwait SMEs, and Germany enterprise workflow markets.",
  "Designed for organizations investing in AI transformation, scalable operations, and long-term digital infrastructure.",
  "Structured for international teams that need enterprise modernization solutions without unnecessary complexity.",
];

const relatedLinks = [
  { label: "Custom Application Development", href: "/custom-application-development" },
  { label: "WhatsApp Automation", href: "/whatsapp-automation" },
  { label: "Digital Growth Systems", href: "/digital-marketing" },
  { label: "SAP AMS Support", href: "/sap-ams-support" },
  { label: "Contact SoftClinch", href: "/contact" },
];

export function AIPoweredBusinessSystems() {
  return (
    <div className="bg-[#F6F8FB] pt-24 text-slate-900">
      <section className="relative overflow-hidden border-b border-slate-200 bg-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(0,51,102,0.12),_transparent_40%),radial-gradient(circle_at_80%_20%,_rgba(153,51,0,0.12),_transparent_28%),linear-gradient(180deg,_#ffffff_0%,_#f8fafc_100%)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-navy/40 to-transparent" />

        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services" },
              { label: "AI-Powered Business Systems" },
            ]}
          />

          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <div className="inline-flex rounded-full border border-brand-navy/10 bg-brand-navy/5 px-4 py-2 text-sm font-semibold text-brand-navy">
                AI-Powered Business Systems
              </div>
              <h1 className="mt-6 max-w-4xl text-5xl font-bold leading-tight text-slate-950 md:text-6xl">
                Enterprise Applications Built for Scale, Automation & Growth
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
                Custom enterprise software, SaaS platforms, cloud-native
                applications, and AI-powered business systems engineered to
                streamline operations, improve efficiency, and accelerate
                digital transformation.
              </p>
              <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
                Trusted by businesses across Healthcare, Finance, Manufacturing,
                Retail, Logistics, and Enterprise Services.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/custom-application-development"
                  className="inline-flex items-center gap-2 rounded-2xl bg-brand-navy px-6 py-4 font-semibold text-white shadow-lg shadow-brand-navy/15 transition hover:bg-brand-navy/90"
                >
                  Start Your Project
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-2xl border border-slate-300 bg-white px-6 py-4 font-semibold text-slate-800 transition hover:border-brand-terracotta hover:text-brand-terracotta"
                >
                  Schedule Free Consultation
                </Link>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {trustMetrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="rounded-3xl border border-slate-200 bg-slate-50 px-5 py-6 shadow-sm"
                  >
                    <div className="text-3xl font-bold text-slate-950">
                      {metric.value}
                    </div>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {metric.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <ServiceMediaPanel
              title="Operational Architecture Preview"
              subtitle="A video-style systems panel showing AI orchestration, dashboards, CRM routing, and enterprise workflow modernization."
              imageSrc="/hero/custom-applications.svg"
              imageAlt="AI-powered business systems architecture preview"
              points={[
                "AI copilots and agents",
                "CRM and lead routing",
                "WhatsApp workflows",
                "Executive dashboards",
                "Approval systems",
                "ERP-connected interfaces",
              ]}
              mode="video"
            />
          </div>
        </div>
      </section>

      <div className="px-4 sm:px-6 lg:px-8">
        <ServiceStatStrip
          items={trustMetrics}
        />
      </div>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-terracotta">
              WHY CUSTOM ENTERPRISE SOFTWARE?
            </p>
            <h2 className="mt-4 text-4xl font-bold text-slate-950">
              Modern Enterprises Need More Than Generic Software
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Off-the-shelf platforms often create operational bottlenecks,
              fragmented workflows, and rising licensing costs. As businesses
              grow, they require scalable systems tailored to their exact
              operational needs.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h3 className="text-xl font-bold text-slate-950">❌ Challenges with Traditional Software</h3>
              <ul className="mt-6 space-y-4 text-slate-700">
                {enterpriseChallenges.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-1 text-brand-terracotta">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h3 className="text-xl font-bold text-slate-950">✓ Benefits of Enterprise Custom Applications</h3>
              <ul className="mt-6 space-y-4 text-slate-700">
                {enterpriseBenefits.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-1 text-brand-navy">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-terracotta">
              ENTERPRISE SOFTWARE DEVELOPMENT SERVICES
            </p>
            <h2 className="mt-4 text-4xl font-bold text-slate-950">
              Modern businesses require intelligent digital systems that align with operational workflows, business goals, and customer expectations.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Generic SaaS platforms often limit innovation, create inefficiencies, and increase operational complexity. At SoftClinch, we build scalable enterprise applications designed for automation, operational efficiency, and long-term business growth.
            </p>
            <div className="mt-8 grid gap-4 lg:grid-cols-2">
              <div className="space-y-3 rounded-3xl border border-slate-200 bg-slate-50 p-6">
                <h3 className="text-lg font-semibold text-slate-950">We specialize in:</h3>
                <ul className="mt-4 space-y-2 text-slate-700">
                  <li>• Enterprise SaaS development</li>
                  <li>• AI-powered business systems</li>
                  <li>• Business workflow automation</li>
                  <li>• Enterprise cloud applications</li>
                  <li>• ERP & CRM integration</li>
                  <li>• Enterprise analytics dashboards</li>
                  <li>• API-first enterprise architecture</li>
                  <li>• Legacy application modernization</li>
                </ul>
              </div>
              <div className="space-y-3 rounded-3xl border border-slate-200 bg-slate-50 p-6">
                <h3 className="text-lg font-semibold text-slate-950">Our technology stack includes:</h3>
                <p className="mt-4 text-slate-700">
                  React, Next.js, Node.js, Python, .NET, PostgreSQL, Kubernetes, AWS, Azure, and Google Cloud to build secure, scalable, and high-performance applications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-terracotta">
            Services
          </p>
          <h2 className="mt-4 text-4xl font-bold text-slate-950">
            Enterprise development services built for scalable systems and automation.
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            Each service area is designed to solve a business problem, improve workflow performance, and enable long-term operational growth.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {services.map((service) => (
            <article
              key={service.title}
              className="rounded-[30px] border border-slate-200 bg-white p-8 shadow-sm"
            >
              <div className="flex items-start gap-4">
                <div className="rounded-2xl bg-brand-navy/8 p-3">
                  <service.icon className="h-7 w-7 text-brand-navy" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-slate-950">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm font-medium text-brand-terracotta">
                    {service.subtitle}
                  </p>
                </div>
              </div>

              <div className="mt-6 space-y-4 text-slate-700">
                <ul className="space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex gap-3">
                      <span className="mt-1 text-brand-terracotta">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href={service.href}
                className="mt-6 inline-flex items-center gap-2 font-semibold text-brand-navy transition hover:text-brand-terracotta"
              >
                {service.cta}
                <ArrowRight className="h-5 w-5" />
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-terracotta">
                Industry-Specific Enterprise Solutions
              </p>
              <h2 className="mt-4 text-4xl font-bold text-slate-950">
                Industry solutions for complex enterprise operations.
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                We build enterprise software for sectors where security, compliance, integration, and operational efficiency are mission-critical.
              </p>
            </div>
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {industries.map((industry) => (
                <div
                  key={industry.name}
                  className="rounded-3xl border border-slate-200 bg-slate-50 p-6"
                >
                  <industry.icon className="h-8 w-8 text-brand-navy" />
                  <h3 className="mt-5 text-xl font-bold text-slate-900">
                    {industry.name}
                  </h3>
                  <ul className="mt-5 space-y-3 text-slate-600">
                    {industry.challenges.map((challenge) => (
                      <li key={challenge} className="flex gap-3">
                        <span className="mt-1 text-brand-terracotta">•</span>
                        <span>{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-terracotta">
            ENTERPRISE TECHNOLOGY STACK
          </p>
          <h2 className="mt-4 text-4xl font-bold text-slate-950">
            A technology stack built for enterprise scale, security, and integration.
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            Our engineering teams leverage modern cloud, API, and data technologies to deliver resilient enterprise applications.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {technologyStack.map((item) => (
            <div
              key={item.category}
              className="rounded-3xl border border-slate-200 bg-white p-6"
            >
              <h3 className="text-lg font-semibold text-slate-950">
                {item.category}
              </h3>
              <p className="mt-4 leading-7 text-slate-600">
                {item.technologies}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-terracotta">
            Process
          </p>
          <h2 className="mt-4 text-4xl font-bold text-slate-950">
            A delivery process built for enterprise clarity.
          </h2>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {processSteps.map((step, index) => (
            <div
              key={step.title}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-terracotta">
                Step {index + 1}
              </div>
              <h3 className="mt-4 text-xl font-bold text-slate-900">
                {step.title}
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-terracotta">
            BUSINESS IMPACT & ROI
          </p>
          <h2 className="mt-4 text-4xl font-bold text-slate-950">
            Enterprise outcomes that prove long-term value.
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            Custom enterprise software should drive measurable improvements in launch speed, cost efficiency, scalability, adoption, reliability, and revenue growth.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {businessImpact.map((item) => (
            <div key={item.label} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="text-3xl font-bold text-slate-950">{item.value}</div>
              <p className="mt-3 text-sm leading-6 text-slate-600">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-terracotta">
            SUCCESS STORIES
          </p>
          <h2 className="mt-4 text-4xl font-bold text-slate-950">
            Enterprise success stories with measurable outcomes.
          </h2>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {successStories.map((story) => (
            <div key={story.name} className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h3 className="text-xl font-bold text-slate-950">{story.name}</h3>
              <ul className="mt-5 space-y-3 text-slate-700">
                {story.details.map((detail) => (
                  <li key={detail} className="flex gap-3">
                    <span className="mt-1 text-brand-terracotta">•</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-terracotta">
                Why SoftClinch
              </p>
              <h2 className="mt-4 text-4xl font-bold">
                Unified systems thinking, not isolated delivery.
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-300">
                SoftClinch is built for businesses that need operational
                intelligence, scalable systems, enterprise integration, AI
                enablement, and workflow modernization working together over the
                long term.
              </p>
            </div>

            <div className="space-y-4">
              {comparisonPoints.map((point) => (
                <div
                  key={point.label}
                  className="rounded-3xl border border-white/10 bg-white/5 p-6"
                >
                  <h3 className="text-lg font-bold text-white">{point.label}</h3>
                  <p className="mt-3 leading-7 text-slate-300">{point.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-10 rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm lg:grid-cols-[1fr_0.95fr] lg:p-10">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-terracotta">
              Global Positioning
            </p>
            <h2 className="mt-4 text-4xl font-bold text-slate-950">
              Built for GCC businesses and globally scalable operations.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              SoftClinch is positioned as a premium digital transformation
              company for businesses modernizing enterprise operations,
              implementing AI business automation, and building digital
              infrastructure that can scale across markets, teams, and service
              models.
            </p>
          </div>

          <div className="space-y-4">
            {globalPoints.map((point) => (
              <div key={point} className="flex gap-3">
                <ChevronRight className="mt-1 h-5 w-5 shrink-0 text-brand-terracotta" />
                <p className="leading-7 text-slate-700">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-8 sm:px-6 lg:px-8">
        <div className="rounded-[32px] border border-slate-200 bg-slate-50 p-8 lg:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-terracotta">
            Related Links
          </p>
          <h2 className="mt-4 text-3xl font-bold text-slate-950">
            Internal paths that support this solution ecosystem.
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {relatedLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-2xl border border-slate-200 bg-white px-5 py-4 font-medium text-slate-800 transition hover:border-brand-navy hover:text-brand-navy"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-[36px] bg-brand-navy text-white shadow-2xl">
          <div className="grid gap-10 px-8 py-12 lg:grid-cols-[1fr_0.8fr] lg:px-12 lg:py-14">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-terracotta">
                Final CTA
              </p>
              <h2 className="mt-4 text-4xl font-bold">Ready to Build Enterprise-Grade Software?</h2>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-200">
                Transform operations with scalable enterprise applications engineered for automation, performance, and business growth.
              </p>
            </div>

            <div className="flex flex-col justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-4 font-semibold text-brand-navy transition hover:bg-slate-100"
              >
                Schedule Free Consultation
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-2xl border border-white/20 px-6 py-4 font-semibold text-white transition hover:bg-white/10"
              >
                Talk to Enterprise Experts
              </Link>
            </div>
          </div>
        </div>
      </section>

      <FaqSection title="AI-Powered Business Systems FAQs" items={aiPoweredBusinessSystemsFaq} />

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-terracotta">
            SEO Architecture
          </p>
          <h2 className="mt-4 text-3xl font-bold text-slate-950">
            Search structure aligned to enterprise intent.
          </h2>
          <div className="mt-8 grid gap-8 lg:grid-cols-2">
            <div>
              <h3 className="text-lg font-bold text-slate-900">Focus keywords</h3>
              <div className="mt-4 flex flex-wrap gap-3">
                {aiPoweredBusinessSystemsSeo.focusKeywords.map((keyword) => (
                  <span
                    key={keyword}
                    className="rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-700"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900">Schema implementation</h3>
              <ul className="mt-4 space-y-3 text-slate-700">
                {aiPoweredBusinessSystemsSeo.schemaRecommendations.map((item) => (
                  <li key={item} className="flex gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-terracotta" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
