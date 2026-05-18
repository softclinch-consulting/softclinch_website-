import Link from "next/link";
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
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FaqSection } from "@/components/FaqSection";
import { ServiceStatStrip } from "@/components/ServiceStatStrip";

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
];

const testimonials = [
  {
    name: "Enterprise Client",
    quote:
      "The AI automation platform significantly reduced our manual workflow operations and improved productivity across teams.",
  },
  {
    name: "eCommerce Brand",
    quote:
      "Our conversion rates improved after implementing AI recommendations and automation systems.",
  },
  {
    name: "SaaS Startup",
    quote:
      "The custom application architecture was scalable, secure, and perfectly aligned with our business growth strategy.",
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
        <li key={item} className="flex gap-3">
          <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-brand-terracotta" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function EnterpriseSoftware() {
  return (
    <div className="bg-[linear-gradient(180deg,#f7fafc_0%,#ffffff_18%,#f8fafc_100%)] pt-20 text-slate-900">
      <section className="relative overflow-hidden border-b border-slate-200">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(11,37,69,0.16),transparent_40%),radial-gradient(circle_at_80%_15%,rgba(194,94,63,0.16),transparent_28%),linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)]" />
        <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Enterprise" }]} />
          <div className="grid gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
            <div>
              <div className="mb-6 inline-flex items-center rounded-full border border-brand-navy/10 bg-white/80 px-4 py-2 text-sm font-semibold text-brand-navy shadow-sm backdrop-blur">
                AI applications, enterprise software, automation, and eCommerce systems
              </div>
              <h1 className="max-w-5xl text-4xl font-bold tracking-tight text-slate-950 md:text-5xl lg:text-6xl">
                AI-Powered Enterprise & eCommerce Application Development
              </h1>
              <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-600 md:text-xl">
                Build scalable AI applications, enterprise software, automation systems, and custom eCommerce platforms designed to accelerate business growth, automate operations, and improve customer experience.
              </p>
              <p className="mt-5 max-w-4xl text-base leading-8 text-slate-600 md:text-lg">
                We help enterprises, startups, and fast-growing eCommerce brands develop secure, scalable, and high-performance digital solutions powered by Artificial Intelligence, cloud infrastructure, automation, and advanced analytics.
              </p>
              <p className="mt-5 max-w-4xl text-base leading-8 text-slate-600 md:text-lg">
                From AI automation platforms to enterprise business systems and intelligent eCommerce applications, we create custom software solutions tailored to your business goals.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/contact" className="inline-flex items-center rounded-2xl bg-brand-navy px-6 py-4 font-semibold text-white shadow-lg shadow-brand-navy/20 transition hover:bg-brand-navy/90">
                  Book Free Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link href="/contact" className="inline-flex items-center rounded-2xl border border-slate-300 bg-white px-6 py-4 font-semibold text-slate-700 transition hover:border-brand-terracotta hover:text-brand-terracotta">
                  Schedule Strategy Call
                </Link>
              </div>
              <p className="mt-8 max-w-4xl text-sm leading-7 text-slate-500 md:text-base">
                Trusted by modern businesses for AI software development, enterprise automation, custom applications, and scalable digital transformation solutions.
              </p>
            </div>

            <div className="rounded-[36px] border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/80">
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { icon: Bot, label: "AI chatbots & automation" },
                  { icon: Building2, label: "Enterprise workflow systems" },
                  { icon: ShoppingCart, label: "Conversion-ready commerce apps" },
                  { icon: Cloud, label: "Cloud-native deployment" },
                  { icon: ShieldCheck, label: "Secure architecture" },
                  { icon: MessageSquareMore, label: "Customer engagement platforms" },
                ].map((item) => (
                  <div key={item.label} className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                    <item.icon className="h-6 w-6 text-brand-navy" />
                    <p className="mt-4 text-sm font-semibold leading-6 text-slate-800">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="px-6 lg:px-8">
        <ServiceStatStrip items={trustItems} />
      </div>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-terracotta">About</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
              Enterprise AI Solutions & Custom Software Development Company
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-600">
              Looking for a reliable AI application development company for enterprise software or eCommerce solutions?
            </p>
            <p className="mt-4 text-base leading-8 text-slate-600">
              We specialize in AI-powered custom application development that helps businesses streamline workflows, automate repetitive operations, improve customer engagement, and scale efficiently.
            </p>
            <p className="mt-4 text-base leading-8 text-slate-600">
              Our development team builds enterprise-grade applications with modern architecture, cloud scalability, automation capabilities, and seamless integrations.
            </p>
            <p className="mt-4 text-base leading-8 text-slate-600">
              Whether you need enterprise automation, AI integration, or a scalable eCommerce platform, we provide end-to-end digital transformation services.
            </p>
          </div>
          <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-slate-950">We deliver</h3>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {deliverables.map((item) => (
                <div key={item} className="rounded-2xl bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-terracotta">Services</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
              Our Core Services
            </h2>
          </div>
          <div className="mt-12 grid gap-8 xl:grid-cols-2">
            {coreServices.map((service) => (
              <article key={service.title} className="rounded-[32px] border border-slate-200 bg-slate-50 p-8 shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-brand-navy shadow-sm">
                    <service.icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-950">{service.title}</h3>
                </div>
                <p className="mt-5 text-base leading-8 text-slate-600">{service.intro}</p>
                <div className="mt-8 grid gap-8 lg:grid-cols-2">
                  <div>
                    <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-terracotta">Solutions Include</h4>
                    <div className="mt-4">
                      <ListBlock items={service.items} />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-terracotta">Benefits</h4>
                    <div className="mt-4">
                      <ListBlock items={service.benefits} />
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-terracotta">Why Choose Us</p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
            Why Businesses Choose Our AI & Custom Software Development Company
          </h2>
          <p className="mt-5 text-base leading-8 text-slate-600">
            We combine AI innovation, enterprise-grade development standards, and scalable technology architecture to build future-ready business applications.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {advantages.map((item) => (
            <div key={item.title} className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
              <h3 className="text-xl font-bold text-slate-950">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-terracotta">Industries</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
              Industries We Serve
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {industries.map((industry) => (
              <div key={industry.name} className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
                <industry.icon className="h-8 w-8 text-brand-navy" />
                <h3 className="mt-5 text-xl font-bold text-slate-950">{industry.name}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-terracotta">SEO Optimized Business Solutions</p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
            Frequently Searched Business Solutions
          </h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {searchSolutions.map((item) => (
            <div key={item.title} className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
              <h3 className="text-xl font-bold text-slate-950">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-terracotta">Development Process</p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
                Our Development Process
              </h2>
            </div>
            <div className="space-y-4">
              {processSteps.map((item) => (
                <div key={item.step} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                  <h3 className="text-lg font-bold text-slate-950">{item.step}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-terracotta">Results</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
              Business Outcomes You Can Expect
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {outcomes.map((item) => (
              <div key={item.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-lg font-semibold text-slate-900">{item.title}</p>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-terracotta">Technologies</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
              Technologies We Work With
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {technologyGroups.map((group) => (
              <div key={group.title} className="rounded-3xl border border-slate-200 bg-slate-50 p-7 shadow-sm">
                <h3 className="text-xl font-bold text-slate-950">{group.title}</h3>
                <div className="mt-5 flex flex-wrap gap-3">
                  {group.items.map((item) => (
                    <span key={item} className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-terracotta">Testimonials</p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
            What Businesses Say About Our Solutions
          </h2>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {testimonials.map((item) => (
            <blockquote key={item.name} className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <p className="text-lg leading-8 text-slate-700">&ldquo;{item.quote}&rdquo;</p>
              <footer className="mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-brand-terracotta">
                {item.name}
              </footer>
            </blockquote>
          ))}
        </div>
      </section>

      <FaqSection title="Frequently Asked Questions" items={faqItems} includeSEO={false} />

      <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-8">
        <div className="overflow-hidden rounded-[36px] bg-brand-navy text-white shadow-2xl">
          <div className="grid gap-10 px-8 py-12 lg:grid-cols-[1fr_0.9fr] lg:px-12 lg:py-14">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-terracotta">Ready to Build?</p>
              <h2 className="mt-4 text-4xl font-bold">
                Build AI-powered applications that scale with your business
              </h2>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-200">
                Talk to SoftClinch about enterprise software, AI automation, cloud-native systems, and custom eCommerce applications tailored to your growth goals.
              </p>
            </div>
            <div className="flex flex-col justify-center gap-4">
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-4 font-semibold text-brand-navy transition hover:bg-slate-100">
                Book Free Consultation
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link href="/contact" className="inline-flex items-center justify-center rounded-2xl border border-white/20 px-6 py-4 font-semibold text-white transition hover:bg-white/10">
                Schedule Strategy Call
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
