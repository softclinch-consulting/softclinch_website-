import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Bot,
  Building2,
  CheckCircle2,
  ChevronRight,
  ClipboardList,
  Database,
  Factory,
  Landmark,
  LayoutDashboard,
  Link2,
  MessageSquareMore,
  Route,
  Search,
  Settings2,
  ShieldCheck,
  Stethoscope,
  Truck,
  Workflow,
} from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FaqSection } from "@/components/FaqSection";
import {
  aiPoweredBusinessSystemsFaq,
  aiPoweredBusinessSystemsSeo,
} from "@/lib/aiPoweredBusinessSystemsSeo";

const trustSignals = [
  "AI-powered systems strategy",
  "ERP-aware workflow modernization",
  "CRM and WhatsApp integration expertise",
  "Built for GCC and global operations",
];

const businessProblems = [
  "Disconnected systems slow down teams and create duplicated work across sales, operations, and service functions.",
  "Delayed lead response and scattered communication reduce conversion quality and weaken customer experience.",
  "Manual workflows, approvals, and follow-ups increase operational cost while limiting visibility for leadership.",
  "Reporting delays and fragmented data make it harder to manage performance, forecast demand, and scale confidently.",
];

const ecosystemPillars = [
  {
    title: "Custom applications",
    description:
      "Purpose-built platforms for your internal operations, service delivery, customer workflows, and commercial teams.",
    icon: Database,
  },
  {
    title: "AI automation",
    description:
      "Intelligent routing, AI copilots, approvals, and response systems that reduce manual effort without adding operational complexity.",
    icon: Bot,
  },
  {
    title: "CRM and lead systems",
    description:
      "Unified customer records, pipeline automation, and clear lead ownership across high-growth teams.",
    icon: Building2,
  },
  {
    title: "Workflow optimization",
    description:
      "Structured process design for approvals, handoffs, escalations, reporting, and role-based accountability.",
    icon: Workflow,
  },
  {
    title: "Digital growth infrastructure",
    description:
      "SEO systems, conversion journeys, dashboards, and acquisition workflows connected to real business outcomes.",
    icon: Search,
  },
];

const services = [
  {
    title: "Custom Application Development",
    subtitle: "Enterprise software, SaaS application development, and internal business platforms",
    problem:
      "Off-the-shelf tools rarely match how a company actually operates. Teams end up working around software instead of using software to improve operations.",
    solution:
      "SoftClinch designs and builds custom application development solutions including CRM systems, ERP-style platforms, internal operations software, booking systems, enterprise applications, and SaaS systems. This is ideal for businesses looking for a custom software development company UAE teams can trust for scalable delivery.",
    benefits: [
      "Operational benefit: replaces fragmented tools with one structured operating environment.",
      "Scalability benefit: modular architecture supports new teams, markets, and integrations without rebuilding the core system.",
      "Enterprise positioning: suitable for organizations that need secure, governed, process-aligned enterprise software solutions.",
    ],
    cta: "Plan your custom application roadmap",
    href: "/custom-application-development",
    icon: Database,
  },
  {
    title: "AI Workflow Automation",
    subtitle: "Intelligent automation for approvals, routing, notifications, and AI copilots",
    problem:
      "Manual decision flows slow execution, hide bottlenecks, and make scale dependent on people remembering the next step.",
    solution:
      "We build AI workflow automation systems with intelligent automation, operational automation, AI copilots, smart notifications, and automated approvals. For businesses searching for an AI automation company Dubai or a broader automation consulting company, this creates measurable operational lift.",
    benefits: [
      "Operational benefit: faster processing, fewer missed steps, and better compliance across teams.",
      "Scalability benefit: automation logic can expand across departments without increasing administrative overhead.",
      "Enterprise positioning: strong fit for organizations pursuing AI business automation with controlled governance.",
    ],
    cta: "Audit your automation opportunities",
    href: "/contact",
    icon: Bot,
  },
  {
    title: "CRM & Lead Management Systems",
    subtitle: "Centralized customer tracking, sales visibility, and pipeline automation",
    problem:
      "When leads, conversations, and follow-ups live across spreadsheets and messaging tools, revenue performance becomes difficult to manage.",
    solution:
      "SoftClinch develops custom CRM software and lead management systems that centralize customer tracking, lead workflows, pipeline automation, sales visibility, and communication history. This supports companies evaluating a CRM development company for growth-focused operational control.",
    benefits: [
      "Operational benefit: clearer ownership, faster follow-up, and stronger reporting across the sales cycle.",
      "Scalability benefit: supports growing acquisition volume, multi-user sales teams, and territory-specific workflows.",
      "Enterprise positioning: provides the structure needed for controlled, auditable customer operations.",
    ],
    cta: "Design a CRM system around your pipeline",
    href: "/contact",
    icon: ClipboardList,
  },
  {
    title: "WhatsApp Automation Solutions",
    subtitle: "Instant lead response, CRM integration, and conversational workflow automation",
    problem:
      "High-intent enquiries often arrive through WhatsApp, but many businesses still manage response and follow-up manually.",
    solution:
      "We deploy WhatsApp automation services with AI WhatsApp workflows, instant lead response, CRM integrations, automated follow-up, and customer communication systems. This is especially valuable for UAE, Saudi Arabia, and Qatar businesses where WhatsApp sits close to the commercial workflow.",
    benefits: [
      "Operational benefit: shorter response times, more consistent follow-up, and fewer lost conversations.",
      "Scalability benefit: supports high lead volumes without requiring the team to manually manage every interaction.",
      "Enterprise positioning: creates a governed communication layer rather than an ad hoc messaging process.",
    ],
    cta: "See how WhatsApp can operate as a workflow channel",
    href: "/whatsapp-automation",
    icon: MessageSquareMore,
  },
  {
    title: "Enterprise Dashboard Systems",
    subtitle: "KPI visibility, executive reporting, and business intelligence interfaces",
    problem:
      "Leaders cannot improve what they cannot see. When reporting is scattered, decisions are slower and accountability is weaker.",
    solution:
      "SoftClinch builds enterprise dashboard systems with KPI dashboards, analytics systems, executive reporting, and business intelligence views connected to operational data. These platforms turn reporting from a periodic activity into an always-available management capability.",
    benefits: [
      "Operational benefit: real-time visibility into pipeline health, fulfillment, team output, and bottlenecks.",
      "Scalability benefit: dashboards can evolve with new business units, markets, and reporting dimensions.",
      "Enterprise positioning: strengthens governance, forecasting, and operational leadership.",
    ],
    cta: "Define the dashboards your leadership team needs",
    href: "/contact",
    icon: LayoutDashboard,
  },
  {
    title: "Workflow & Process Automation",
    subtitle: "Approval systems, routing logic, and workflow management systems",
    problem:
      "Process inconsistency increases delays, errors, and rework, especially once teams expand across departments or geographies.",
    solution:
      "We create workflow automation solutions that cover approval systems, operational routing, workflow optimization, process automation, and enterprise workflow systems. This helps businesses searching for enterprise workflow automation or a business process automation company move from reactive coordination to structured execution.",
    benefits: [
      "Operational benefit: smoother handoffs, reduced delays, and better process discipline.",
      "Scalability benefit: reusable workflow logic helps standardize growth across multiple teams.",
      "Enterprise positioning: ideal for companies that need repeatable operational workflow systems, not one-off fixes.",
    ],
    cta: "Modernize the workflows that slow your teams down",
    href: "/contact",
    icon: Route,
  },
  {
    title: "Digital Growth Systems",
    subtitle: "SEO systems, conversion architecture, and acquisition workflows",
    problem:
      "Many businesses invest in digital marketing without connecting traffic, leads, follow-up, and reporting into one accountable growth engine.",
    solution:
      "SoftClinch builds digital growth systems that combine SEO systems, lead generation funnels, authority positioning, conversion optimization, and acquisition infrastructure with CRM and automation workflows. This moves the conversation beyond campaigns into scalable digital performance.",
    benefits: [
      "Operational benefit: stronger alignment between marketing activity, lead flow, and sales response.",
      "Scalability benefit: supports long-term acquisition without depending on disconnected manual tactics.",
      "Enterprise positioning: fits businesses that want a digital transformation company with operational depth, not just promotional execution.",
    ],
    cta: "Build a growth system around your commercial goals",
    href: "/digital-marketing",
    icon: Search,
  },
  {
    title: "Enterprise Workflow Modernization",
    subtitle: "AI operational layers for ERP-connected businesses",
    problem:
      "Many companies already use ERP platforms such as SAP, yet still struggle with manual approvals, disconnected workflows, reporting inefficiencies, fragmented communication, and operational complexity around the core system.",
    solution:
      "SoftClinch builds enterprise modernization solutions on top of existing ecosystems through AI operational layers, dashboards, workflow systems, automation infrastructure, and enterprise interfaces. Instead of replacing the ERP, we improve how people work around it and across it.",
    benefits: [
      "Operational benefit: bridges the gap between core systems and real-world execution.",
      "Scalability benefit: extends the value of existing platforms while supporting modernization in phases.",
      "Enterprise positioning: especially relevant for mature businesses pursuing enterprise workflow modernization without a disruptive rip-and-replace program.",
    ],
    cta: "Explore a modernization layer for your existing systems",
    href: "/sap-ams-support",
    icon: Settings2,
  },
];

const industries = [
  {
    name: "Real Estate",
    icon: Landmark,
    description:
      "Lead routing, broker coordination, WhatsApp-first response, site visit workflows, and developer inventory visibility are frequent opportunities for automation and CRM-led process design.",
  },
  {
    name: "Healthcare & Clinics",
    icon: Stethoscope,
    description:
      "Patient enquiries, appointment handling, care coordination, reporting, and administrative approvals benefit from structured workflow management and secure communication systems.",
  },
  {
    name: "Logistics",
    icon: Truck,
    description:
      "Shipment coordination, dispatch workflows, internal approvals, service visibility, and operational dashboards improve when data and actions live in one system.",
  },
  {
    name: "Manufacturing",
    icon: Factory,
    description:
      "Production reporting, quality tracking, approvals, vendor communication, and ERP-adjacent workflows can be modernized without disrupting the core platform.",
  },
  {
    name: "Trading Companies",
    icon: Link2,
    description:
      "Sales operations, distributor coordination, purchase cycles, document flow, and commercial reporting often require better CRM, process routing, and dashboard visibility.",
  },
  {
    name: "Enterprise SMEs",
    icon: ShieldCheck,
    description:
      "Growing companies need scalable systems before complexity outpaces control. Custom applications and automation reduce dependency on spreadsheets and manual coordination.",
  },
];

const processSteps = [
  {
    title: "Discovery & Business Audit",
    description:
      "We assess commercial goals, operational friction, system gaps, and stakeholder priorities to define the business case for change.",
  },
  {
    title: "Workflow Analysis",
    description:
      "Current-state workflows are mapped to identify delays, duplicated effort, reporting blind spots, and automation opportunities.",
  },
  {
    title: "Solution Architecture",
    description:
      "We design the platform model, integrations, user flows, data structure, and governance needed for reliable enterprise adoption.",
  },
  {
    title: "Development & Integration",
    description:
      "Applications, dashboards, APIs, CRM layers, and communication workflows are built around your actual operational environment.",
  },
  {
    title: "AI Automation Setup",
    description:
      "We configure routing logic, AI-assisted actions, approvals, notifications, and response workflows aligned to business rules.",
  },
  {
    title: "Testing & Optimization",
    description:
      "Every release is validated for usability, reliability, reporting accuracy, and workflow performance before scale-up.",
  },
  {
    title: "Support & Scaling",
    description:
      "We continue with improvements, operational tuning, and phased expansion as volumes, teams, and market needs evolve.",
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
                Enterprise systems that modernize operations, automate workflows,
                and help businesses scale with intelligence.
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
                SoftClinch operates as an AI-powered business systems and
                automation company, not a traditional web development agency. We
                help GCC and international businesses build custom applications,
                enterprise workflow automation, CRM systems, WhatsApp automation,
                executive dashboards, and modernization layers that improve how
                the business runs every day.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-2xl bg-brand-navy px-6 py-4 font-semibold text-white shadow-lg shadow-brand-navy/15 transition hover:bg-brand-navy/90"
                >
                  Book Free Audit
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-2xl border border-slate-300 bg-white px-6 py-4 font-semibold text-slate-800 transition hover:border-brand-terracotta hover:text-brand-terracotta"
                >
                  Schedule Consultation
                </Link>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                {trustSignals.map((signal) => (
                  <div
                    key={signal}
                    className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 shadow-sm"
                  >
                    {signal}
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 rounded-[32px] bg-gradient-to-br from-brand-navy/10 via-transparent to-brand-terracotta/10 blur-2xl" />
              <div className="relative overflow-hidden rounded-[32px] border border-slate-200 bg-slate-950 p-8 text-white shadow-2xl">
                <div className="flex items-center justify-between border-b border-white/10 pb-5">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/60">
                      Operational Architecture
                    </p>
                    <h2 className="mt-2 text-2xl font-bold">
                      Connected systems, visible workflows, scalable decisions
                    </h2>
                  </div>
                  <BarChart3 className="h-10 w-10 text-brand-terracotta" />
                </div>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {[
                    "AI copilots and agents",
                    "CRM and lead routing",
                    "WhatsApp workflows",
                    "Executive dashboards",
                    "Approval systems",
                    "ERP-connected interfaces",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm font-medium text-white/90"
                    >
                      {item}
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-2xl border border-brand-terracotta/20 bg-brand-terracotta/10 p-5 text-sm leading-7 text-white/80">
                  Visual direction: clean system maps, orchestration flows, KPI
                  panels, AI action layers, and enterprise interface patterns
                  rather than agency-style campaign graphics.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-terracotta">
              Business Problems
            </p>
            <h2 className="mt-4 text-4xl font-bold text-slate-950">
              Growth slows down when operations stay disconnected.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Many businesses do not have a marketing problem first. They have
              an operating model problem. Disconnected systems, weak reporting,
              slow response times, and manual workflows limit execution long
              before the market opportunity runs out.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {businessProblems.map((problem) => (
              <div
                key={problem}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <CheckCircle2 className="h-8 w-8 text-brand-terracotta" />
                <p className="mt-4 leading-7 text-slate-700">{problem}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-terracotta">
              Solution Ecosystem
            </p>
            <h2 className="mt-4 text-4xl font-bold text-slate-950">
              One scalable ecosystem instead of isolated fixes.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              SoftClinch combines custom applications, AI automation, CRM
              systems, workflow optimization, and digital growth infrastructure
              into one operational ecosystem. The result is a business system
              designed to improve speed, visibility, service consistency, and
              long-term scalability across commercial and operational teams.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
            {ecosystemPillars.map((pillar) => (
              <div
                key={pillar.title}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-6"
              >
                <pillar.icon className="h-8 w-8 text-brand-navy" />
                <h3 className="mt-5 text-xl font-bold text-slate-900">
                  {pillar.title}
                </h3>
                <p className="mt-3 leading-7 text-slate-600">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-terracotta">
            Services
          </p>
          <h2 className="mt-4 text-4xl font-bold text-slate-950">
            AI-powered business systems built for operational performance.
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            Each service area is designed to solve a business problem, improve
            workflow performance, open AI integration opportunities, and give
            leadership a stronger foundation for scale.
          </p>
        </div>

        <div className="mt-12 space-y-8">
          {services.map((service) => (
            <article
              key={service.title}
              className="rounded-[30px] border border-slate-200 bg-white p-8 shadow-sm lg:p-10"
            >
              <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
                <div>
                  <div className="flex items-center gap-3">
                    <div className="rounded-2xl bg-brand-navy/8 p-3">
                      <service.icon className="h-7 w-7 text-brand-navy" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-slate-950">
                        {service.title}
                      </h3>
                      <p className="mt-1 text-sm font-medium text-brand-terracotta">
                        {service.subtitle}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 space-y-4 text-slate-700">
                    <p>
                      <span className="font-semibold text-slate-950">
                        Business problem:
                      </span>{" "}
                      {service.problem}
                    </p>
                    <p>
                      <span className="font-semibold text-slate-950">
                        SoftClinch solution:
                      </span>{" "}
                      {service.solution}
                    </p>
                    <p>
                      <span className="font-semibold text-slate-950">
                        AI integration opportunity:
                      </span>{" "}
                      These systems can be extended with intelligent routing,
                      predictive alerts, AI assistants, AI agents, sentiment
                      signals, next-step suggestions, and automated exception
                      handling where appropriate.
                    </p>
                  </div>
                </div>

                <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-6">
                  <h4 className="text-lg font-bold text-slate-950">
                    Operational and scalability outcomes
                  </h4>
                  <div className="mt-5 space-y-4">
                    {service.benefits.map((benefit) => (
                      <div
                        key={benefit}
                        className="flex gap-3 rounded-2xl bg-white p-4"
                      >
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-terracotta" />
                        <p className="leading-7 text-slate-700">{benefit}</p>
                      </div>
                    ))}
                  </div>
                  <Link
                    href={service.href}
                    className="mt-6 inline-flex items-center gap-2 font-semibold text-brand-navy transition hover:text-brand-terracotta"
                  >
                    {service.cta}
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-terracotta">
                Industries
              </p>
              <h2 className="mt-4 text-4xl font-bold text-slate-950">
                Designed for operationally complex sectors.
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                We focus on industries where workflow quality, response speed,
                reporting clarity, and system integration have a direct impact
                on growth and service delivery.
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
                  <p className="mt-3 leading-7 text-slate-600">
                    {industry.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
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
              <h2 className="mt-4 text-4xl font-bold">Build Smarter Business Systems</h2>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-200">
                Book a Free AI & Business Growth Audit to identify workflow
                inefficiencies, operational bottlenecks, automation
                opportunities, and scalable digital transformation strategies
                for your business.
              </p>
            </div>

            <div className="flex flex-col justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-4 font-semibold text-brand-navy transition hover:bg-slate-100"
              >
                Book Free Audit
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-2xl border border-white/20 px-6 py-4 font-semibold text-white transition hover:bg-white/10"
              >
                Schedule Consultation
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-2xl border border-white/20 px-6 py-4 font-semibold text-white transition hover:bg-white/10"
              >
                Talk With Our Team
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
