"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Globe, Cpu, Database, ChevronRight, ArrowRight, CheckCircle, Zap, Users, Code, Smartphone, Cloud, Building2 } from 'lucide-react';

const ServiceCard = ({ title, description, icon: Icon, path, index }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    viewport={{ once: true }}
    className="group"
  >
    <Link href={path}>
      <div className="relative bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-slate-200/50 hover:border-brand-navy/30 hover:shadow-2xl hover:shadow-brand-navy/10 transition-all duration-500 h-full flex flex-col overflow-hidden">
        {/* Floating background elements */}
        <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-brand-terracotta/10 to-brand-navy/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700"></div>
        <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-tr from-blue-500/10 to-purple-500/10 rounded-full blur-lg group-hover:scale-125 transition-transform duration-500"></div>

        <div className="relative z-10">
          <div className="w-16 h-16 bg-gradient-to-br from-slate-900 to-brand-navy rounded-2xl flex items-center justify-center mb-8 text-white group-hover:scale-110 transition-transform duration-300 shadow-lg">
            <Icon size={32} />
          </div>
          <h2 className="text-3xl font-display font-bold text-slate-900 mb-4 group-hover:text-brand-navy transition-colors duration-300">{title}</h2>
          <p className="text-slate-600 leading-relaxed mb-8 flex-grow">{description}</p>
          <div className="flex items-center gap-2 text-brand-terracotta font-bold group-hover:gap-3 transition-all duration-300">
            Learn More <ChevronRight size={20} />
          </div>
        </div>
      </div>
    </Link>
  </motion.div>
);

const ProcessStep = ({ step, title, description, icon: Icon, index }: any) => (
  <motion.div
    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6, delay: index * 0.2 }}
    viewport={{ once: true }}
    className="flex items-center gap-8"
  >
    <div className="flex-shrink-0">
      <div className="w-16 h-16 bg-gradient-to-br from-brand-navy to-brand-terracotta rounded-2xl flex items-center justify-center text-white shadow-lg">
        <Icon size={24} />
      </div>
    </div>
    <div className="flex-1">
      <div className="text-sm font-bold text-brand-terracotta mb-2">STEP {step}</div>
      <h3 className="text-2xl font-display font-bold text-slate-900 mb-3">{title}</h3>
      <p className="text-slate-600 leading-relaxed">{description}</p>
    </div>
  </motion.div>
);

const FeatureHighlight = ({ title, description, metrics, index }: any) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    viewport={{ once: true }}
    className="bg-gradient-to-br from-slate-50 to-white p-8 rounded-3xl border border-slate-200/50 shadow-lg hover:shadow-xl transition-shadow duration-300"
  >
    <h3 className="text-2xl font-display font-bold text-slate-900 mb-4">{title}</h3>
    <p className="text-slate-600 mb-6 leading-relaxed">{description}</p>
    <div className="grid grid-cols-2 gap-4">
      {metrics.map((metric: any, idx: number) => (
        <div key={idx} className="text-center">
          <div className="text-3xl font-bold text-brand-navy mb-1">{metric.value}</div>
          <div className="text-sm text-slate-500">{metric.label}</div>
        </div>
      ))}
    </div>
  </motion.div>
);

const CaseStudyBlock = ({ title, description, image, results, index }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: index * 0.2 }}
    viewport={{ once: true }}
    className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
  >
    <div className="flex-1">
      <div className="relative">
        {/* Real image container with premium styling */}
        <div className="relative bg-gradient-to-br from-slate-100 to-slate-200 p-8 rounded-3xl shadow-2xl overflow-hidden group">
          <div className="bg-white rounded-2xl p-6 shadow-lg overflow-hidden">
            <img
              src={image}
              alt={`${title} mockup`}
              className="w-full h-64 object-cover rounded-xl shadow-md transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          {/* Floating UI elements */}
          <div className="absolute -top-4 -right-4 w-12 h-12 bg-brand-terracotta rounded-full flex items-center justify-center text-white shadow-lg animate-pulse">
            <Zap size={20} />
          </div>
          <div className="absolute -bottom-6 -left-6 w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white shadow-lg animate-bounce">
            <Users size={16} />
          </div>
          {/* Glassmorphism overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent rounded-3xl backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>
      </div>
    </div>
    <div className="flex-1">
      <h3 className="text-3xl font-display font-bold text-slate-900 mb-6">{title}</h3>
      <p className="text-slate-600 leading-relaxed mb-8 text-lg">{description}</p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {results.map((result: any, idx: number) => (
          <div key={idx} className="text-center p-4 bg-white/50 backdrop-blur-sm rounded-xl border border-slate-200/50">
            <div className="text-2xl font-bold text-brand-navy mb-1">{result.value}</div>
            <div className="text-sm text-slate-500">{result.label}</div>
          </div>
        ))}
      </div>
    </div>
  </motion.div>
);

export const Services = () => {
  const services = [
    {
      title: "Digital Marketing",
      description: "Data-driven performance marketing focused on measurable ROI, SEO, GEO, and AEO strategies for modern search landscapes.",
      icon: Globe,
      path: "/digital-marketing"
    },
    {
      title: "Custom App Development",
      description: "Engineering robust, scalable software solutions including SaaS platforms, web apps, and mobile applications.",
      icon: Cpu,
      path: "/custom-application-development"
    },
    {
      title: "AI-Powered Business Systems",
      description: "AI-enabled workflows, automation systems, and business applications built to modernize operations.",
      icon: Zap,
      path: "/services/ai-powered-business-systems"
    },
    {
      title: "Enterprise Software",
      description: "Custom enterprise software, SaaS platforms, and cloud-native applications engineered for scale and reliability.",
      icon: Building2,
      path: "/services/enterprise-software"
    },
    {
      title: "SAP AMS Support",
      description: "Expert guidance and operational support for SAP implementation, migration, and application management services.",
      icon: Database,
      path: "/sap-ams-support"
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Strategy",
      description: "We analyze your business needs, identify opportunities, and create a comprehensive roadmap for success.",
      icon: Users
    },
    {
      step: "02",
      title: "Design & Architecture",
      description: "Our experts design scalable solutions and create detailed technical architectures tailored to your requirements.",
      icon: Code
    },
    {
      step: "03",
      title: "Development & Testing",
      description: "We build robust, high-performance solutions with rigorous testing to ensure quality and reliability.",
      icon: Smartphone
    },
    {
      step: "04",
      title: "Deployment & Support",
      description: "Seamless deployment with ongoing monitoring, optimization, and dedicated support for continued success.",
      icon: Cloud
    }
  ];

  const features = [
    {
      title: "Enterprise-Grade Solutions",
      description: "Built for scale with robust architecture, security, and performance optimization.",
      metrics: [
        { value: "99.9%", label: "Uptime SLA" },
        { value: "24/7", label: "Support" }
      ]
    },
    {
      title: "Agile Development",
      description: "Iterative approach with regular feedback loops and rapid deployment cycles.",
      metrics: [
        { value: "2-4", label: "Week Sprints" },
        { value: "50+", label: "Projects" }
      ]
    },
    {
      title: "Cross-Platform Expertise",
      description: "Full-stack development across web, mobile, and cloud platforms.",
      metrics: [
        { value: "15+", label: "Technologies" },
        { value: "100%", label: "Responsive" }
      ]
    }
  ];

  const caseStudies = [
    {
      title: "E-commerce Platform Transformation",
      description: "Complete digital overhaul for a retail client, resulting in 300% increase in online sales and improved customer experience.",
      image: "/custom_app_dev_hero.png",
      results: [
        { value: "300%", label: "Sales Growth" },
        { value: "50%", label: "Faster Load Times" },
        { value: "95%", label: "Customer Satisfaction" }
      ]
    },
    {
      title: "SAP Implementation Success",
      description: "End-to-end SAP deployment for manufacturing company, streamlining operations and reducing costs by 40%.",
      image: "/sap_consulting_hero.png",
      results: [
        { value: "40%", label: "Cost Reduction" },
        { value: "60%", label: "Process Efficiency" },
        { value: "99%", label: "System Accuracy" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-navy/5 via-transparent to-brand-terracotta/5"></div>
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-tr from-brand-terracotta/10 to-orange-400/10 rounded-full blur-3xl"></div>

        {/* Hero Image Background */}
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-1/2 h-full opacity-10">
          <img
            src="/digital_marketing_hero.png"
            alt="Services Hero"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-6xl lg:text-7xl font-display font-bold text-slate-900 mb-8 leading-tight">
              Enterprise Consulting &<br />
              <span className="bg-gradient-to-r from-brand-navy to-brand-terracotta bg-clip-text text-transparent">
                Engineering Services
              </span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-12 leading-relaxed">
              We provide specialized technology consulting and engineering services designed to scale with your business. Click on a service to explore our full capabilities.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full border border-slate-200/50 shadow-lg">
                <CheckCircle size={20} className="text-green-500" />
                <span className="text-slate-700 font-medium">Enterprise Scale</span>
              </div>
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full border border-slate-200/50 shadow-lg">
                <CheckCircle size={20} className="text-green-500" />
                <span className="text-slate-700 font-medium">24/7 Support</span>
              </div>
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full border border-slate-200/50 shadow-lg">
                <CheckCircle size={20} className="text-green-500" />
                <span className="text-slate-700 font-medium">Proven Results</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Showcase */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-slate-900 mb-6">
              Our Core Services
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Comprehensive solutions tailored for modern enterprises
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={service.title} {...service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-navy to-slate-800"></div>
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.1)_0%,_transparent_50%)]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-display font-bold mb-6">
              Our Proven Process
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              A systematic approach that delivers exceptional results
            </p>
          </motion.div>

          <div className="space-y-12">
            {processSteps.map((step, index) => (
              <ProcessStep key={step.step} {...step} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-slate-900 mb-6">
              Why Choose SoftClinch
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Measurable results backed by industry expertise
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureHighlight key={feature.title} {...feature} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-slate-900 mb-6">
              Success Stories
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Real results from real clients
            </p>
          </motion.div>

          <div className="space-y-24">
            {caseStudies.map((study, index) => (
              <CaseStudyBlock key={study.title} {...study} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-brand-navy to-brand-terracotta relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-10 right-10 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-white/5 rounded-full blur-2xl"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
              Let's discuss how our enterprise solutions can drive your digital transformation and accelerate growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/contact">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-brand-navy px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center gap-2 justify-center"
                >
                  Get Started Today <ArrowRight size={20} />
                </motion.div>
              </Link>
              <Link href="/about">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-bold text-lg border border-white/20 hover:bg-white/20 transition-colors duration-300"
                >
                  Learn More About Us
                </motion.div>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
