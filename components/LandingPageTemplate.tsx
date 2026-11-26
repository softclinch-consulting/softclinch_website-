"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  CheckCircle2,
  Clock,
  ShieldCheck,
  Star,
  Users,
  MessageSquare,
  ArrowRight,
  PhoneCall,
  ChevronDown,
} from "lucide-react";
import ReCAPTCHA from "react-google-recaptcha";
import { assetPath } from "@/lib/asset";
import { CONTACT } from "@/lib/contact";
import { getTrafficAttribution, trackLeadGenerated, trackWhatsAppClick, trackPhoneClick } from "@/lib/analytics";
import {
  validateContactFormData,
  type ContactFormData,
  type ContactValidationErrors,
} from "@/lib/contact-form";

interface LPConfig {
  eyebrow: string;
  title: string;
  subtitle: string;
  serviceDefault: string;
  benefits: string[];
  proofPoints: { label: string; value: string }[];
  faqs: { question: string; answer: string }[];
}

const LP_CONFIGS: Record<string, LPConfig> = {
  "sap-ams-support": {
    eyebrow: "Enterprise SAP Application Management Services (AMS)",
    title: "Reliable SAP AMS Support in Chennai & India",
    subtitle:
      "Keep your critical ECC & S/4HANA operations running smoothly with 24/7 proactive monitoring, rapid incident resolution, and certified SAP consultants.",
    serviceDefault: "SAP AMS Support",
    benefits: [
      "Guaranteed Incident SLAs with L1–L3 coverage across all standard and custom modules.",
      "Dedicated SAP Functional & Technical consultants (FICO, MM, SD, PP, ABAP, BASIS).",
      "Proactive health checks, performance tuning, and patch management with zero surprise downtime.",
    ],
    proofPoints: [
      { label: "Uptime Support Commitment", value: "{{ENTERPRISE_SYSTEM_UPTIME_SLA}}" },
      { label: "Google Review Rating", value: "5.0 ★" },
      { label: "Initial Response SLA", value: "Under 15 Mins" },
      { label: "Delivery Location", value: "Ashok Nagar, Chennai" },
    ],
    faqs: [
      {
        question: "What SAP modules do your AMS support engineers cover?",
        answer:
          "We provide comprehensive L1 through L3 functional and technical support across SAP FI/CO, SD, MM, PP, QM, PM, ABAP, BASIS, and S/4HANA integration points.",
      },
      {
        question: "How fast do your consultants respond to critical (P1) incidents?",
        answer:
          "For business-critical P1 incidents, our certified consultants acknowledge within 15 minutes and initiate resolution immediately under strict contractual SLAs.",
      },
      {
        question: "Can we engage SoftClinch on a hybrid or shared-services model?",
        answer:
          "Yes. We offer dedicated, shared, and blended ticket-bucket delivery models tailored to your operational volume and budget.",
      },
    ],
  },
  "sap-s4hana-migration": {
    eyebrow: "SAP S/4HANA Migration & Implementation Services",
    title: "Smooth S/4HANA Migration with Zero Business Disruption",
    subtitle:
      "Modernize your enterprise ERP with proven Greenfield, Brownfield, or Selective Data Transition roadmaps designed and executed by senior SAP architects in Chennai.",
    serviceDefault: "SAP S/4HANA Implementation",
    benefits: [
      "Thorough readiness assessment, custom ABAP code remediation, and business partner conversions.",
      "Near-zero downtime cutover strategies safeguarding financial and supply-chain continuity.",
      "Post-go-live hypercare, staff enablement, and ongoing Fiori interface optimization.",
    ],
    proofPoints: [
      { label: "Custom Code Transition", value: "100% Remediated" },
      { label: "Google Review Rating", value: "5.0 ★" },
      { label: "Delivery Model", value: "Onsite & Offshore" },
      { label: "Delivery Location", value: "Chennai, India" },
    ],
    faqs: [
      {
        question: "How do you determine whether Greenfield or Brownfield is right for us?",
        answer:
          "We run an initial technical and functional discovery to analyze your current ECC customization, data volume, and business goals before recommending the optimal path.",
      },
      {
        question: "How is data integrity guaranteed during the migration?",
        answer:
          "We execute multiple mock data migrations, reconciliation checklists, and sign-offs for general ledger balances and open items before executing the final cutover.",
      },
      {
        question: "Do you support SAP Fiori app configuration and user adoption?",
        answer:
          "Yes, we configure role-based SAP Fiori launchpads and conduct end-user workshops to ensure fast adoption across procurement, finance, and logistics teams.",
      },
    ],
  },
};

const DEFAULT_LP_CONFIG: LPConfig = {
  eyebrow: "Enterprise SAP & Software Engineering Partner",
  title: "Accelerate Enterprise Growth with SoftClinch",
  subtitle:
    "Chennai-based SAP consulting, 24/7 AMS support, and bespoke enterprise software engineering built for resilient business operations.",
  serviceDefault: "SAP Consulting",
  benefits: [
    "Certified SAP practitioners and full-stack software architects working as your extended team.",
    "Transparent milestone tracking, measurable outcomes, and rigorous security governance.",
    "Rapid consultation response within 2 business hours from our Ashok Nagar headquarters.",
  ],
  proofPoints: [
    { label: "Enterprise Uptime Commitment", value: "{{ENTERPRISE_SYSTEM_UPTIME_SLA}}" },
    { label: "Google Review Rating", value: "5.0 ★" },
    { label: "Consultation SLA", value: "Within 2 Hours" },
    { label: "Office Location", value: "Ashok Nagar, Chennai" },
  ],
  faqs: [
    {
      question: "Where is SoftClinch based and can we meet onsite?",
      answer:
        "Our headquarters is located at 1st Avenue, Ashok Nagar, Chennai. We welcome in-person meetings at our office or on-site client discovery workshops.",
    },
    {
      question: "How quickly can we begin an engagement?",
      answer:
        "Following your initial consultation, we typically deliver an assessment roadmap and proposal within 48 to 72 hours.",
    },
  ],
};

const CLIENT_LOGOS = [
  { name: "Prenora Investment Holding", path: "/client-logos/sc-clients-001.webp" },
  { name: "Rane", path: "/client-logos/sc-clients-002.webp" },
  { name: "NTT DATA", path: "/client-logos/sc-clients-003.webp" },
  { name: "Fujitsu", path: "/client-logos/sc-clients-004.webp" },
  { name: "Star Eltech", path: "/client-logos/sc-clients-005.webp" },
];

export function LandingPageTemplate({ slug }: { slug: string }) {
  const router = useRouter();
  const config = LP_CONFIGS[slug] || DEFAULT_LP_CONFIG;

  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: config.serviceDefault,
    message: "",
  });
  const [fieldErrors, setFieldErrors] = useState<ContactValidationErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [captchaToken, setCaptchaToken] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [website, setWebsite] = useState("");
  const [formStartedAt, setFormStartedAt] = useState<number>(Date.now());
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    setFormStartedAt(Date.now());
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setFieldErrors((prev) => ({ ...prev, [name]: undefined }));
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
      setError("Please complete the reCAPTCHA verification.");
      return;
    }

    setIsSubmitting(true);
    setFieldErrors({});

    try {
      const attribution = getTrafficAttribution();
      const response = await fetch("/api/contact/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...validation.data,
          ...attribution,
          captchaToken,
          website,
          formStartedAt,
        }),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        if (data.fieldErrors) setFieldErrors(data.fieldErrors);
        throw new Error(data.error || "Failed to submit request.");
      }

      // Track conversion
      trackLeadGenerated({
        formId: `lp_${slug}_form`,
        service: validation.data.service || config.serviceDefault,
        leadType: "landing_page",
      });

      router.push("/thank-you");
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Unable to submit your request. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero with Above-the-fold Form */}
      <section className="bg-gradient-to-b from-brand-navy to-slate-900 text-white pt-10 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Trust strip */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8 border-b border-white/10 pb-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1 text-xs font-medium text-amber-300">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={13} fill="currentColor" />
                ))}
              </div>
              <span className="font-bold text-white">5.0 Google Rating</span>
              <span className="text-white/40">•</span>
              <span className="text-slate-200">Ashok Nagar, Chennai</span>
            </div>
            <div className="flex items-center gap-4 text-xs text-slate-300">
              <span className="inline-flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-brand-cyan" /> 2-Hour Response SLA
              </span>
              <span className="hidden sm:inline text-white/30">•</span>
              <span className="hidden sm:inline-flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-brand-cyan" /> Enterprise NDAs Signed
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Content */}
            <div className="lg:col-span-7 pt-2">
              <span className="inline-block text-xs uppercase tracking-widest font-bold text-brand-cyan mb-3">
                {config.eyebrow}
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold tracking-tight text-white mb-6 leading-tight">
                {config.title}
              </h1>
              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                {config.subtitle}
              </p>

              {/* 3 Key Benefits */}
              <div className="space-y-4 mb-8">
                {config.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-xl p-3.5">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <p className="text-sm sm:text-base text-slate-100">{benefit}</p>
                  </div>
                ))}
              </div>

              {/* Proof Points Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-white/10">
                {config.proofPoints.map((item, idx) => (
                  <div key={idx} className="rounded-xl bg-white/5 p-3 text-center border border-white/10">
                    <div className="text-sm sm:text-base font-bold text-brand-cyan font-mono">{item.value}</div>
                    <div className="text-[11px] text-slate-400 mt-1 leading-tight">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Above-the-fold Consultation Form */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl bg-white text-slate-900 p-6 sm:p-8 shadow-2xl border border-slate-100">
                <div className="mb-6">
                  <h2 className="text-xl font-bold text-brand-navy">
                    Request a Free SAP Assessment
                  </h2>
                  <p className="text-xs text-slate-600 mt-1">
                    Direct callback from our Chennai technical leads within 2 hours.
                  </p>
                </div>

                {error && (
                  <div className="mb-4 rounded-xl bg-red-50 p-3 text-xs text-red-700 border border-red-200">
                    {error}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-3.5">
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

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Ramesh Kumar"
                      className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-blue"
                    />
                    {fieldErrors.name && (
                      <p className="text-[11px] text-red-600 mt-1">{fieldErrors.name}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="name@company.com"
                      className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-blue"
                    />
                    {fieldErrors.email && (
                      <p className="text-[11px] text-red-600 mt-1">{fieldErrors.email}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Phone / WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-blue"
                    />
                    {fieldErrors.phone && (
                      <p className="text-[11px] text-red-600 mt-1">{fieldErrors.phone}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Service Requirement *
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-sm text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-brand-blue"
                    >
                      <option value="SAP AMS Support">SAP AMS Support (ECC / S/4HANA)</option>
                      <option value="SAP S/4HANA Implementation">SAP S/4HANA Migration & Implementation</option>
                      <option value="SAP Consulting">SAP Consulting & Module Customization</option>
                      <option value="Custom Enterprise Software">Custom Enterprise Software</option>
                      <option value="Inaiwazhi WhatsApp Automation">Inaiwazhi WhatsApp Automation</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Brief Description / Current Challenges (Optional)
                    </label>
                    <textarea
                      name="message"
                      rows={2}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Describe your SAP version, number of users, or key issue..."
                      className="w-full rounded-xl border border-slate-200 px-3.5 py-2 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-blue"
                    />
                  </div>

                  {process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY && (
                    <div className="pt-1">
                      <ReCAPTCHA
                        sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                        onChange={(token) => setCaptchaToken(token || "")}
                      />
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full rounded-xl bg-brand-navy hover:bg-slate-800 text-white font-semibold py-3.5 px-4 text-sm transition shadow-lg hover:shadow-xl flex items-center justify-center gap-2 disabled:opacity-70 mt-2"
                  >
                    {isSubmitting ? (
                      <span>Scheduling Assessment...</span>
                    ) : (
                      <>
                        <span>Get Free Consultation & Proposal</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-slate-500 text-center mt-2">
                    🔒 Strict enterprise confidentiality. NDA signed upon request.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Logos Strip */}
      <section className="py-10 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs uppercase tracking-widest font-bold text-slate-500 mb-6">
            Trusted by Industry Leaders Across Manufacturing, Automotive & Technology
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
            {CLIENT_LOGOS.map((client, idx) => (
              <div
                key={idx}
                className="flex items-center justify-center rounded-xl border border-slate-200 bg-slate-50 px-5 py-3 shadow-sm hover:border-slate-300 transition"
              >
                <Image
                  src={assetPath(client.path)}
                  alt={client.name}
                  width={140}
                  height={50}
                  className="h-7 w-auto object-contain grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Assessment Process (4 Steps) */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs uppercase font-bold tracking-widest text-brand-blue">
              Seamless Onboarding
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-2">
              What Happens When You Request an Assessment?
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              A transparent, structured approach designed to provide clarity before any commitment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Discovery Call",
                desc: "Consultant connects within 2 hours to evaluate your landscape, pain points, and current SLAs.",
              },
              {
                step: "02",
                title: "Gap & Health Audit",
                desc: "We analyze tickets, custom ABAP code, and system utilization without disrupting live operations.",
              },
              {
                step: "03",
                title: "Tailored Proposal",
                desc: "Transparent scope, SLA commitments, team composition, and flexible commercial options.",
              },
              {
                step: "04",
                title: "Smooth Transition",
                desc: "Structured knowledge transfer and pilot cutover ensuring zero business interruption.",
              },
            ].map((item, idx) => (
              <div key={idx} className="rounded-2xl bg-white p-6 border border-slate-200 shadow-sm relative">
                <span className="text-2xl font-black text-brand-blue/30 font-mono block mb-2">
                  {item.step}
                </span>
                <h3 className="text-base font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Frequently Asked Questions
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Have specific questions about our SLA tiers, engagement models, or technical team?
            </p>
          </div>

          <div className="space-y-4">
            {config.faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className="rounded-xl border border-slate-200 overflow-hidden bg-slate-50">
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between p-4 sm:p-5 text-left font-semibold text-slate-900 hover:bg-slate-100 transition"
                  >
                    <span className="text-sm sm:text-base">{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-500 transition-transform ${isOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="p-4 sm:p-5 pt-0 text-sm text-slate-600 leading-relaxed border-t border-slate-200/60 bg-white">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* High-intent Quick Contact Banner */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-brand-navy text-white">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <h3 className="text-xl font-bold">Prefer a direct conversation?</h3>
            <p className="text-sm text-slate-300 mt-1">
              Speak immediately with our SAP technical delivery team in Chennai.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={CONTACT.getWhatsAppUrl(`Hello SoftClinch team, I am inquiring about your ${config.serviceDefault}`)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick({ cta_location: "lp_quick_banner" })}
              className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-3 text-sm font-semibold transition"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Us</span>
            </a>
            <a
              href={`tel:${CONTACT.phone}`}
              onClick={() => trackPhoneClick({ cta_location: "lp_quick_banner" })}
              className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 hover:bg-white/20 text-white px-5 py-3 text-sm font-semibold transition"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Call +91 94456 79878</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
