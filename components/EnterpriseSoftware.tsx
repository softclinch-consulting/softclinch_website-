import Link from "next/link";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  ChevronRight,
  Cloud,
  Database,
  Factory,
  Link2,
  Route,
  ShieldCheck,
  Smartphone,
  Stethoscope,
  Truck,
} from "lucide-react";
import { ServiceStatStrip } from "@/components/ServiceStatStrip";

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

const enterpriseServices = [
  {
    title: "SaaS Platform Development",
    icon: Database,
    features: [
      "Multi-tenant SaaS architecture",
      "Subscription billing systems",
      "User roles & permissions",
      "Usage analytics & reporting",
      "API-first infrastructure",
      "Scalable cloud deployment",
    ],
  },
  {
    title: "Enterprise Web Applications",
    icon: Building2,
    features: [
      "Real-time dashboards",
      "Workflow automation",
      "Business intelligence reporting",
      "Secure access management",
      "Responsive enterprise UI/UX",
      "High-performance architecture",
    ],
  },
  {
    title: "Cloud-Native Application Development",
    icon: Cloud,
    features: [
      "Microservices architecture",
      "Kubernetes & Docker deployment",
      "Auto-scaling infrastructure",
      "CI/CD automation",
      "Disaster recovery systems",
      "Enterprise cloud security",
    ],
  },
  {
    title: "API Development & System Integration",
    icon: Link2,
    features: [
      "REST & GraphQL APIs",
      "Real-time synchronization",
      "Webhook automation",
      "ERP & CRM integration",
      "Legacy system modernization",
      "Secure API authentication",
    ],
  },
  {
    title: "Progressive Web Applications (PWA)",
    icon: Smartphone,
    features: [
      "Offline functionality",
      "Push notifications",
      "Native-like performance",
      "SEO-friendly architecture",
      "Cross-device compatibility",
      "Lightning-fast loading",
    ],
  },
  {
    title: "Enterprise Mobile Applications",
    icon: Truck,
    features: [
      "Native & cross-platform development",
      "Secure enterprise authentication",
      "Offline-first experience",
      "Push notifications",
      "Cloud synchronization",
      "Enterprise mobility solutions",
    ],
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
    icon: ShieldCheck,
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
    icon: Route,
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
    icon: Building2,
    challenges: [
      "Dynamic pricing",
      "Reservation management",
      "Multi-property operations",
      "Guest communication",
      "Revenue optimization",
    ],
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
    title: "Global FinTech Platform",
    details: [
      "500K+ Active Users",
      "$2M+ Daily Transactions",
      "99.95% Uptime",
      "Deployment Timeline: 14 Months",
    ],
  },
  {
    title: "Healthcare Patient Portal",
    details: [
      "2M+ Patient Records",
      "50K+ Daily Users",
      "HIPAA-Compliant Infrastructure",
      "24/7 Enterprise Support",
    ],
  },
  {
    title: "Manufacturing ERP Integration",
    details: [
      "25+ Production Lines Connected",
      "10K+ Real-Time Data Events/Minute",
      "$500K+ Annual Cost Savings",
      "Deployment Timeline: 8 Months",
    ],
  },
];

export function EnterpriseSoftware() {
  return (
    <div className="bg-[#F6F8FB] text-slate-900">
      <section className="relative overflow-hidden border-b border-slate-200 bg-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(0,51,102,0.12),_transparent_40%),radial-gradient(circle_at_80%_20%,_rgba(153,51,0,0.12),_transparent_28%),linear-gradient(180deg,_#ffffff_0%,_#f8fafc_100%)]" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-24">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <h1 className="text-5xl font-bold leading-tight text-slate-950 md:text-6xl">
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

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/services/custom-application-development"
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
            </div>
            <div className="rounded-[32px] bg-slate-100 p-10 shadow-sm">
              <div className="space-y-6">
                {trustMetrics.map((metric) => (
                  <div key={metric.label} className="rounded-3xl border border-slate-200 bg-white p-6">
                    <div className="text-3xl font-bold text-slate-950">{metric.value}</div>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{metric.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="px-4 sm:px-6 lg:px-8">
        <ServiceStatStrip items={trustMetrics} />
      </div>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
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
              <h3 className="text-xl font-bold text-slate-950">
                ❌ Challenges with Traditional Software
              </h3>
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
              <h3 className="text-xl font-bold text-slate-950">
                ✓ Benefits of Enterprise Custom Applications
              </h3>
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
              OUR ENTERPRISE DEVELOPMENT SERVICES
            </p>
            <h2 className="mt-4 text-4xl font-bold text-slate-950">
              Modern businesses require intelligent digital systems that align with operational workflows, business goals, and customer expectations.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              At SoftClinch, we build scalable enterprise applications designed for automation, operational efficiency, and long-term business growth.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {enterpriseServices.map((service) => (
              <div key={service.title} className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
                <service.icon className="h-8 w-8 text-brand-navy" />
                <h3 className="mt-5 text-2xl font-bold text-slate-950">{service.title}</h3>
                <ul className="mt-6 space-y-3 text-slate-700">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex gap-3">
                      <span className="mt-1 text-brand-terracotta">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-terracotta">
                INDUSTRY-SPECIFIC ENTERPRISE SOLUTIONS
              </p>
              <h2 className="mt-4 text-4xl font-bold text-slate-950">
                Built for mission-critical sectors.
              </h2>
            </div>
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {industries.map((industry) => (
                <div key={industry.name} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                  <industry.icon className="h-8 w-8 text-brand-navy" />
                  <h3 className="mt-5 text-xl font-bold text-slate-900">{industry.name}</h3>
                  <ul className="mt-4 space-y-3 text-slate-600">
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
            Technologies that power enterprise systems.
          </h2>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {technologyStack.map((item) => (
            <div key={item.category} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-950">{item.category}</h3>
              <p className="mt-4 leading-7 text-slate-600">{item.technologies}</p>
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
            Outcomes that show enterprise value.
          </h2>
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
            Enterprise programs with measurable results.
          </h2>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {successStories.map((story) => (
            <div key={story.title} className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h3 className="text-xl font-bold text-slate-950">{story.title}</h3>
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

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-[36px] bg-brand-navy text-white shadow-2xl">
          <div className="grid gap-10 px-8 py-12 lg:grid-cols-[1fr_0.85fr] lg:px-12 lg:py-14">
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
    </div>
  );
}
