"use client";
import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'motion/react';
import { TrendingUp, Target, Search, BarChart, Mail, Zap, Check, ArrowRight } from 'lucide-react';

const Button = ({ children, className, variant, ...props }: any) => {
  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
};

const Card = ({ children, className }: any) => {
  return <div className={className}>{children}</div>;
};

export const DigitalMarketing = () => {
  const heroRef = useRef(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, 50]);

  return (
    <div className="min-h-screen bg-[#F8FAFC] overflow-hidden font-sans pt-20">

      {/* Hero Section */}
      <section className="relative bg-white overflow-hidden py-12 lg:py-24" ref={heroRef}>
        {/* Animated Background Gradient Blob */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-[300px] -right-[300px] w-[800px] h-[800px] bg-gradient-to-br from-brand-navy/10 to-brand-terracotta/10 rounded-full blur-3xl"
        />

        <div className="max-w-[1200px] mx-auto px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Text Content */}
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
                Performance Digital Marketing & Revenue Growth
              </motion.div>

              <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
                Data-Driven Digital Marketing for{' '}
                <span className="bg-gradient-to-r from-brand-navy to-brand-terracotta bg-clip-text text-transparent">
                  Predictable Growth
                </span>
              </h1>

              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                We design scalable marketing systems combining paid ads, SEO, funnels, automation, and advanced analytics.
              </p>

              <div className="flex gap-4 flex-wrap">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button className="bg-brand-navy hover:bg-brand-navy/90 text-white px-8 py-4 text-base rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center font-semibold">
                    Book Growth Strategy Call
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button variant="outline" className="border-2 border-slate-200 text-slate-700 font-semibold px-8 py-4 text-base rounded-lg hover:bg-slate-50 hover:border-brand-navy transition-all duration-300">
                    View Case Studies
                  </Button>
                </motion.div>
              </div>
            </motion.div>

            {/* Right: Floating Dashboard Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              {/* Gradient Blob Behind */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-navy/20 via-brand-terracotta/10 to-brand-navy/5 rounded-[20px] blur-3xl transform scale-110" />

              {/* Floating Animation */}
              <motion.div
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="relative"
              >
                <motion.div
                  whileHover={{ scale: 1.05, rotateY: 5 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-[20px] overflow-hidden shadow-2xl border border-slate-100 bg-white"
                >
                  <img
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmFseXRpY3MlMjBkYXNoYm9hcmQlMjBncm93dGglMjBjaGFydHxlbnwxfHx8fDE3NzIwMDczNjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Analytics Dashboard"
                    className="w-full h-auto object-cover"
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* SVG Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full text-[#F8FAFC]">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="currentColor" />
          </svg>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="max-w-[1200px] mx-auto px-8 py-20">
        <FadeInSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Comprehensive Marketing Solutions
            </h2>
            <p className="text-xl text-slate-600 max-w-[700px] mx-auto">
              End-to-end digital marketing services designed to drive measurable results
            </p>
          </div>
        </FadeInSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: Target,
              title: 'Performance Advertising',
              description: 'Strategic campaign management across Google, Meta, and LinkedIn with continuous optimization for maximum ROI.',
              features: ['Google Ads', 'Meta Ads', 'LinkedIn Campaigns', 'Budget Optimization']
            },
            {
              icon: Search,
              title: 'SEO & Content Marketing',
              description: 'Comprehensive search engine optimization and strategic content creation to drive organic traffic.',
              features: ['Technical SEO', 'Content Strategy', 'Link Building', 'Keyword Research']
            },
            {
              icon: TrendingUp,
              title: 'Funnel Architecture & CRO',
              description: 'Data-driven funnel analysis and conversion rate optimization to maximize customer acquisition.',
              features: ['Landing Pages', 'A/B Testing', 'User Journey Mapping', 'Conversion Tracking']
            },
            {
              icon: Mail,
              title: 'Marketing Automation',
              description: 'Sophisticated automation workflows and CRM integration for personalized customer experiences.',
              features: ['Email Automation', 'Lead Scoring', 'CRM Integration', 'Drip Campaigns']
            },
            {
              icon: BarChart,
              title: 'Analytics & Attribution',
              description: 'Advanced tracking and attribution modeling to measure true marketing impact across all channels.',
              features: ['Multi-Touch Attribution', 'Custom Dashboards', 'ROI Tracking', 'Performance Reports']
            },
            {
              icon: Zap,
              title: 'Growth Strategy',
              description: 'High-level marketing strategy development and go-to-market planning for sustainable growth.',
              features: ['Market Research', 'Competitor Analysis', 'GTM Strategy', 'Growth Planning']
            }
          ].map((service, index) => (
            <FadeInSection key={index} delay={index * 0.1}>
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
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-slate-600">
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

      {/* SEO Content Block */}
      <section className="bg-white py-20">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="max-w-[900px] mx-auto space-y-16">
            <FadeInSection>
              <div>
                <h2 className="text-4xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                  <span className="w-8 h-1 bg-brand-terracotta rounded-full block"></span>
                  Performance Marketing Agency
                </h2>
                <p className="text-slate-600 leading-relaxed text-lg mb-6">
                  In today's competitive digital landscape, success demands more than just running ads—it requires a comprehensive, data-driven approach to customer acquisition and revenue growth. Our performance marketing methodology combines advanced targeting strategies, sophisticated funnel architecture, and real-time optimization to deliver measurable results. We specialize in creating scalable demand generation systems that integrate seamlessly across paid search, social media advertising, and display networks, ensuring your marketing budget translates directly into qualified pipeline and revenue.
                </p>
                <p className="text-slate-600 leading-relaxed text-lg">
                  Every campaign we design is built with clear attribution tracking and ROI measurement from day one. Our team leverages proprietary analytics frameworks and industry-leading tools to understand customer behavior at every touchpoint, enabling continuous optimization and informed decision-making. From initial audience research through creative testing, budget allocation, and conversion optimization, we provide end-to-end management that drives predictable, sustainable growth.
                </p>
              </div>
            </FadeInSection>

            <FadeInSection>
              <div>
                <h2 className="text-4xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                  <span className="w-8 h-1 bg-brand-terracotta rounded-full block"></span>
                  SEO & Organic Growth Strategy
                </h2>
                <p className="text-slate-600 leading-relaxed text-lg mb-6">
                  Search engine optimization is no longer optional—it's a critical component of any sustainable digital marketing strategy. Our SEO services go beyond basic keyword optimization to deliver comprehensive technical improvements, authoritative content creation, and strategic link building that elevates your domain authority and organic visibility. We conduct deep competitive analysis and keyword research to identify high-intent search opportunities, then develop content strategies that capture qualified traffic at every stage of the buyer journey.
                </p>
                <p className="text-slate-600 leading-relaxed text-lg">
                  Our technical SEO expertise ensures your website architecture, page speed, mobile responsiveness, and structured data are optimized for both search engines and user experience. We implement sophisticated tracking and reporting systems that demonstrate clear correlation between organic rankings and business outcomes. From on-page optimization and content development to backlink acquisition and local SEO, our holistic approach builds long-term organic growth.
                </p>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="max-w-[1200px] mx-auto px-8 py-20">
        <FadeInSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Our Marketing Process
            </h2>
            <p className="text-xl text-slate-600">
              A systematic approach to driving measurable growth
            </p>
          </div>
        </FadeInSection>

        <div className="relative">
          {/* Animated Connecting Line */}
          <div className="absolute top-20 left-0 right-0 h-1 bg-brand-navy/10 hidden lg:block">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              transition={{ duration: 2, ease: "easeInOut" }}
              className="h-full bg-gradient-to-r from-brand-navy to-brand-terracotta"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {[
              { step: '01', title: 'Audit & Research', description: 'Comprehensive analysis of current performance, competitive landscape, and growth opportunities.' },
              { step: '02', title: 'Strategy & Funnel Design', description: 'Custom marketing roadmap with detailed funnel architecture and channel strategy.' },
              { step: '03', title: 'Campaign Execution', description: 'Multi-channel campaign launch with advanced tracking and creative optimization.' },
              { step: '04', title: 'Optimization & Scaling', description: 'Continuous testing, data analysis, and refinement to maximize ROI and scale results.' }
            ].map((item, index) => (
              <FadeInSection key={index} delay={index * 0.2}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="text-center"
                >
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

      {/* Results Section with Animated Counters */}
      <section className="bg-gradient-to-br from-slate-50 to-brand-navy/5 py-20 border-y border-slate-100">
        <div className="max-w-[1200px] mx-auto px-8">
          <FadeInSection>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">
                Proven Results That Matter
              </h2>
              <p className="text-xl text-slate-600">
                Real outcomes from our marketing campaigns
              </p>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedCounter end={200} suffix="%" label="ROI Growth" />
            <AnimatedCounter end={3} suffix="x" label="Lead Volume Increase" />
            <AnimatedCounter end={40} suffix="%" label="CAC Reduction" />
          </div>
        </div>
      </section>


    </div>
  );
};

// Fade In Section Component
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

// Animated Counter Component
function AnimatedCounter({ end, suffix = '', label }: { end: number; suffix?: string; label: string }) {
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
