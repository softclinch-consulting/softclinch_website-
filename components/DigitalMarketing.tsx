"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  BarChart,
  Check,
  Mail,
  Search,
  Star,
  Target,
  TrendingUp,
  Zap,
} from "lucide-react";
import { FaqSection } from "@/components/FaqSection";
import { ServiceMediaPanel } from "@/components/ServiceMediaPanel";
import { digitalMarketingFaq } from "@/lib/faqs";
import { reviews } from "@/lib/reviews";

const Card = ({ children, className }: { children: React.ReactNode; className: string }) => {
  return <div className={className}>{children}</div>;
};

export const DigitalMarketing = () => {
  const heroRef = useRef(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, 50]);

  const allReviews = [...reviews, ...reviews]; // duplicate for seamless loop

  return (
    <div className="min-h-screen bg-[#F8FAFC] overflow-hidden font-sans pt-0">
      <section className="relative bg-white overflow-hidden pt-8 pb-12 lg:pt-12 lg:pb-24" ref={heroRef}>
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -top-[300px] -right-[300px] w-[800px] h-[800px] bg-gradient-to-br from-brand-navy/10 to-brand-terracotta/10 rounded-full blur-3xl"
        />

        <div className="max-w-[1200px] mx-auto px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-block bg-brand-navy/10 text-brand-navy px-4 py-1.5 rounded-full text-sm font-semibold mb-6"
              >
                AI SEO, GEO, AEO & Performance Marketing
              </motion.div>

              <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
                AI-Powered Digital Marketing, SEO &{" "}
                <span className="bg-gradient-to-r from-brand-navy to-brand-terracotta bg-clip-text text-transparent">
                  Performance Growth Solutions
                </span>
              </h1>

              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Generate qualified leads, increase revenue, and scale faster with SEO, Google Ads, AI search optimization, conversion funnels, automation, and performance marketing strategies built for modern businesses.
              </p>

              <div className="flex gap-4 flex-wrap">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href="/contact"
                    className="bg-brand-navy hover:bg-brand-navy/90 text-white px-8 py-4 text-base rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center font-semibold"
                  >
                    Book Free Growth Consultation
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href="/case-studies"
                    className="border-2 border-slate-200 text-slate-700 font-semibold px-8 py-4 text-base rounded-lg hover:bg-slate-50 hover:border-brand-navy transition-all duration-300 inline-flex"
                  >
                    View Success Stories
                  </Link>
                </motion.div>
              </div>

              <p className="text-sm text-slate-500 mt-8 leading-relaxed max-w-xl">
                Performance-focused digital marketing agency helping startups, ecommerce brands, and enterprises grow through SEO, GEO, AEO, PPC, AI-driven marketing, and conversion optimization.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
              style={{ y }}
            >
              <ServiceMediaPanel
                title="Growth Campaign Dashboard"
                subtitle="SEO, paid media, attribution, and conversion performance working together in one decision layer."
                imageSrc="/digital_marketing_hero_v2.png"
                imageAlt="Digital marketing service preview"
                points={[
                  "SEO + GEO + AEO strategy",
                  "Google Ads and funnel optimization",
                  "Conversion tracking and analytics",
                  "Automation and lead growth systems",
                ]}
              />
            </motion.div>
          </div>

          <div className="mt-12 lg:mt-16 grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                icon: TrendingUp,
                title: "140%",
                description: "Average ROI Growth",
              },
              {
                icon: Target,
                title: "2X",
                description: "Increase in Qualified Leads",
              },
              {
                icon: BarChart,
                title: "28%",
                description: "Lower Customer Acquisition Cost",
              },
              {
                icon: Search,
                title: "AI + SEO",
                description: "Optimized for Google & AI Search Engines",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
                whileHover={{ y: -6, scale: 1.01 }}
                className="h-full"
              >
                <div className="h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-lg transition-all">
                  <div className="w-12 h-12 rounded-xl bg-brand-navy/5 flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-brand-terracotta" />
                  </div>
                  <div className="text-2xl font-bold text-slate-900 mb-2">{item.title}</div>
                  <div className="text-sm text-slate-600 leading-relaxed">{item.description}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full text-[#F8FAFC]">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="currentColor" />
          </svg>
        </div>
      </section>

      <section className="max-w-[1200px] mx-auto px-8 py-20">
        <FadeInSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Digital Marketing Services Designed for Modern Search & Revenue Growth
            </h2>
            <p className="text-xl text-slate-600 max-w-[760px] mx-auto">
              Built for Google rankings, AI discovery, qualified lead generation, and measurable revenue growth.
            </p>
          </div>
        </FadeInSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: Search,
              title: "SEO, GEO & AEO Optimization",
              description:
                "Improve visibility across Google Search, ChatGPT, Gemini, Perplexity, and AI-powered search engines using advanced SEO, GEO, and Answer Engine Optimization strategies.",
              features: ["Technical SEO", "AI Search Optimization", "Entity SEO", "Topical Authority"],
            },
            {
              icon: Target,
              title: "Google Ads & Performance Marketing",
              description:
                "High-converting Google Ads, Meta Ads, YouTube Ads, and remarketing campaigns optimized for ROI, lead generation, and scalable growth.",
              features: ["Google Ads", "Meta Ads", "YouTube Ads", "Remarketing"],
            },
            {
              icon: TrendingUp,
              title: "Conversion Funnels & CRO",
              description:
                "Build landing pages, lead funnels, and conversion systems designed to increase inquiries, bookings, and sales performance.",
              features: ["Landing Pages", "A/B Testing", "Lead Funnels", "CRO Systems"],
            },
            {
              icon: Mail,
              title: "AI Marketing Automation",
              description:
                "Automate lead nurturing, customer engagement, WhatsApp campaigns, CRM workflows, and personalized communication systems.",
              features: ["WhatsApp Workflows", "CRM Automation", "AI Chatbots", "Lead Nurturing"],
            },
            {
              icon: Zap,
              title: "Content Marketing & Authority Building",
              description:
                "Create SEO-optimized content, topical authority clusters, and strategic content systems that drive long-term organic traffic.",
              features: ["Content Clusters", "Authority Building", "Keyword Strategy", "Content Systems"],
            },
            {
              icon: BarChart,
              title: "Analytics & Attribution Tracking",
              description:
                "Advanced reporting dashboards, conversion tracking, attribution models, and performance insights for data-driven scaling.",
              features: ["Dashboards", "Conversion Tracking", "Attribution", "Performance Insights"],
            },
          ].map((service, index) => (
            <FadeInSection key={service.title} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="h-full"
              >
                <Card className="bg-white p-8 rounded-[20px] shadow-sm border border-slate-100 hover:shadow-xl hover:border-brand-navy/20 transition-all duration-300 h-full flex flex-col">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="w-16 h-16 bg-brand-navy/5 rounded-full flex items-center justify-center mb-6 shrink-0"
                  >
                    <service.icon className="w-8 h-8 text-brand-terracotta" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 mb-6 leading-relaxed flex-grow">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mt-auto">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-slate-600">
                        <Check className="w-4 h-4 text-brand-terracotta flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            </FadeInSection>
          ))}
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="max-w-[900px] mx-auto space-y-16">
            <FadeInSection>
              <div>
                <h2 className="text-4xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                  <span className="w-8 h-1 bg-brand-terracotta rounded-full block"></span>
                  Built for the Future of Search & Digital Growth
                </h2>
                <p className="text-slate-600 leading-relaxed text-lg mb-6">
                  Modern digital marketing is no longer just about rankings. Businesses need visibility across Google Search, AI search engines, voice search, local search, and answer engines.
                </p>
                <p className="text-slate-600 leading-relaxed text-lg mb-6">
                  Our strategies combine SEO, AI search optimization, automation, analytics, and performance marketing to help brands dominate modern digital discovery platforms.
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    "AI Search Optimization (GEO & AEO)",
                    "Topical Authority SEO",
                    "Entity-Based SEO Strategy",
                    "First-Party Data Tracking",
                    "Conversion-Focused Landing Pages",
                    "Performance Creative Testing",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-slate-600">
                      <Check className="w-4 h-4 text-brand-terracotta flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeInSection>

            <FadeInSection>
              <div>
                <h2 className="text-4xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                  <span className="w-8 h-1 bg-brand-terracotta rounded-full block"></span>
                  SEO Services for Long-Term Organic Growth
                </h2>
                <p className="text-slate-600 leading-relaxed text-lg mb-6">
                  Our SEO services focus on technical optimization, high-intent keyword targeting, content strategy, authority building, and AI search visibility to help businesses generate sustainable organic traffic and qualified leads.
                </p>
                <p className="text-slate-600 leading-relaxed text-lg">
                  We optimize websites for Google rankings, featured snippets, local SEO, entity SEO, AI answer engines, and conversion-focused search experiences.
                </p>
              </div>
            </FadeInSection>

            <FadeInSection>
              <div>
                <h2 className="text-4xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                  <span className="w-8 h-1 bg-brand-terracotta rounded-full block"></span>
                  Google Ads & Paid Media Campaign Management
                </h2>
                <p className="text-slate-600 leading-relaxed text-lg mb-6">
                  Scale customer acquisition with data-driven Google Ads, Meta Ads, YouTube campaigns, remarketing strategies, and landing page optimization designed for measurable ROI.
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    "Google Search Ads",
                    "Meta & Instagram Ads",
                    "YouTube Video Campaigns",
                    "Remarketing & Retargeting",
                    "Lead Generation Campaigns",
                    "Ecommerce Performance Marketing",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-slate-600">
                      <Check className="w-4 h-4 text-brand-terracotta flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      <section className="max-w-[1200px] mx-auto px-8 py-20">
        <FadeInSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Why Businesses Choose SoftClinch
            </h2>
            <p className="text-xl text-slate-600">
              Search strategy, paid media, automation, and CRO working toward measurable growth.
            </p>
          </div>
        </FadeInSection>

        <div className="relative">
          <div className="absolute top-20 left-0 right-0 h-1 bg-brand-navy/10 hidden lg:block">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 2, ease: "easeInOut" }}
              className="h-full bg-gradient-to-r from-brand-navy to-brand-terracotta"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {[
              { step: "01", title: "SEO + AI Search Expertise", description: "We optimize businesses for both traditional search engines and AI-powered search platforms." },
              { step: "02", title: "Revenue-Focused Marketing", description: "Every strategy is built to improve leads, conversions, revenue, and long-term growth." },
              { step: "03", title: "Advanced Funnel & CRO Systems", description: "High-converting customer journeys designed to maximize ROI from every traffic source." },
              { step: "04", title: "Automation & Scalable Growth", description: "CRM automation, WhatsApp workflows, AI chatbots, and automated lead nurturing systems." },
            ].map((item, index) => (
              <FadeInSection key={item.title} delay={index * 0.2}>
                <motion.div whileHover={{ scale: 1.05 }} className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-brand-navy to-brand-navy/80 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl border-4 border-white">
                    <span className="text-2xl font-bold text-white">{item.step}</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed text-sm">{item.description}</p>
                </motion.div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-slate-50 to-brand-navy/5 py-20 border-y border-slate-100">
        <div className="max-w-[1200px] mx-auto px-8">
          <FadeInSection>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">
                Proven Results That Matter
              </h2>
              <p className="text-xl text-slate-600">
                Outcomes aligned with lead generation, CAC reduction, and scalable revenue.
              </p>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedCounter end={140} suffix="%" label="Average ROI Growth" />
            <AnimatedCounter end={2} suffix="x" label="Qualified Lead Increase" />
            <AnimatedCounter end={28} suffix="%" label="Lower CAC" />
          </div>
        </div>
      </section>

      <section className="bg-white py-20 overflow-hidden">
        {/* Heading centered */}
        <FadeInSection>
          <div className="max-w-[1200px] mx-auto px-8 text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <svg viewBox="0 0 24 24" className="w-8 h-8" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              <span className="text-sm font-bold text-slate-500 uppercase tracking-widest">Google Reviews</span>
            </div>
            <h2 className="text-4xl font-bold text-slate-900 mb-4">What Our Clients Say</h2>
            <p className="text-lg text-slate-600 mb-4 max-w-2xl mx-auto">
              Trusted for delivery, clarity, and measurable results — all from real Google customers.
            </p>
            <div className="flex items-center justify-center gap-3">
              <div className="flex items-center gap-1 text-amber-400">
                {[0,1,2,3,4].map(s => <Star key={s} className="w-5 h-5 fill-current" />)}
              </div>
              <span className="text-xl font-bold text-slate-900">5.0</span>
              <span className="text-sm text-slate-500">· {reviews.length} verified reviews</span>
            </div>
          </div>
        </FadeInSection>

        {/* Horizontal scrolling marquee — full width */}
        <div className="relative w-full">
          {/* Left fade */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          {/* Right fade */}
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          <style>{`
            @keyframes marqueeScroll {
              0%   { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .marquee-track {
              display: flex;
              width: max-content;
              animation: marqueeScroll 30s linear infinite;
            }
            .marquee-track:hover {
              animation-play-state: paused;
            }
          `}</style>

          <div className="overflow-hidden w-full">
            <div className="marquee-track gap-5 py-3 px-4">
              {allReviews.map((review, i) => (
                <div
                  key={`${review.name}-${i}`}
                  className="w-[300px] shrink-0 bg-slate-50 border border-slate-200 rounded-2xl px-6 py-5 flex flex-col gap-3 hover:shadow-lg hover:border-brand-navy/25 transition-all cursor-default"
                >
                  {/* Top: stars + Google badge */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-amber-400">
                      {[0,1,2,3,4].map(s => (
                        <Star key={s} className="w-3.5 h-3.5 fill-current" />
                      ))}
                    </div>
                    <div className="flex items-center gap-1 bg-white border border-slate-200/60 px-2 py-0.5 rounded-full text-[10px] font-bold text-slate-400 shadow-sm">
                      <svg viewBox="0 0 24 24" className="w-3 h-3" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05"/>
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                      </svg>
                      Google
                    </div>
                  </div>
                  {/* Review text */}
                  <p className="text-slate-700 text-sm leading-relaxed flex-1">&quot;{review.text}&quot;</p>
                  {/* Bottom: name + verified */}
                  <div className="flex items-center justify-between border-t border-slate-200/60 pt-3">
                    <span className="font-bold text-slate-900 text-sm">{review.name}</span>
                    <span className="text-[10px] font-semibold text-emerald-600 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block"></span> Verified
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FaqSection title="Digital Marketing FAQs" items={digitalMarketingFaq} />

      <section className="bg-white py-20">
        <div className="max-w-[1200px] mx-auto px-8 text-center">
          <FadeInSection>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Ready to Scale Your Business with AI-Powered Marketing?
            </h2>
            <p className="text-xl text-slate-600 max-w-[780px] mx-auto mb-8">
              Talk to our experts about SEO, AI search optimization, Google Ads, conversion funnels, automation systems, and performance marketing strategies tailored for your business growth.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link
                href="/contact"
                className="bg-brand-navy hover:bg-brand-navy/90 text-white px-8 py-4 text-base rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center font-semibold"
              >
                Get Free Strategy Call
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/services"
                className="border-2 border-slate-200 text-slate-700 font-semibold px-8 py-4 text-base rounded-lg hover:bg-slate-50 hover:border-brand-navy transition-all duration-300 inline-flex"
              >
                Explore Services
              </Link>
            </div>
          </FadeInSection>
        </div>
      </section>
    </div>
  );
};

function FadeInSection({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref as any, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay }}
    >
      {children}
    </motion.div>
  );
}

function AnimatedCounter({ end, suffix = "", label }: { end: number; suffix?: string; label: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref as any, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    const duration = 2000;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      setCount(Math.floor(progress * end));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, end]);

  return (
    <motion.div
      ref={ref}
      whileHover={{ scale: 1.05 }}
      className="bg-white p-10 rounded-[20px] shadow-sm hover:shadow-xl transition-all text-center border border-slate-100"
    >
      <div className="text-6xl font-bold bg-gradient-to-r from-brand-navy to-brand-terracotta bg-clip-text text-transparent mb-2">
        {count}{suffix}
      </div>
      <div className="text-lg text-slate-600 font-medium">{label}</div>
    </motion.div>
  );
}
