"use client";
import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'motion/react';
import { Database, Settings, GitBranch, Shield, Workflow, Boxes, ArrowRight, Check, Building2, Factory, TruckIcon, ShoppingBag } from 'lucide-react';

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

export const SAPConsulting = () => {
  const [showStickyCTA, setShowStickyCTA] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowStickyCTA(window.scrollY > 800);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#F8FAFC] overflow-hidden font-sans pt-20">
      {/* Sticky CTA Bar */}
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: showStickyCTA ? 0 : -100 }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-lg border-b border-gray-200 z-[60] shadow-sm"
      >

      </motion.div>

      {/* Hero Section */}
      <section className="relative bg-white overflow-hidden py-12 lg:py-24 min-h-[600px]">
        {/* Animated Parallax Background */}
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-brand-navy/10 to-brand-terracotta/10 rounded-full blur-3xl"
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
                SAP Implementation & Enterprise ERP Solutions
              </motion.div>

              <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
                SAP Implementation &{' '}
                <span className="bg-gradient-to-r from-brand-navy to-brand-terracotta bg-clip-text text-transparent">
                  Enterprise Digital Transformation
                </span>
              </h1>

              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Streamline finance, operations, and supply chain with SAP S/4HANA and ERP modernization.
              </p>

              <div className="flex gap-4 flex-wrap">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button className="bg-brand-navy hover:bg-brand-navy/90 text-white px-8 py-4 text-base rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center font-semibold">
                    Talk to SAP Expert
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button variant="outline" className="border-2 border-slate-200 text-slate-700 font-semibold px-8 py-4 text-base rounded-lg hover:bg-slate-50 hover:border-brand-navy transition-all duration-300">
                    Download Case Study
                  </Button>
                </motion.div>
              </div>
            </motion.div>

            {/* Right: Dashboard Image with Tilt Effect */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              {/* Subtle Parallax Background */}
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 bg-gradient-to-br from-brand-navy/20 via-brand-terracotta/10 to-brand-navy/5 rounded-[20px] blur-3xl transform scale-110"
              />

              {/* Floating Animation with Tilt */}
              <motion.div
                animate={{
                  y: [0, -15, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="relative"
              >
                <motion.div
                  whileHover={{
                    scale: 1.05,
                    rotateY: 8,
                    rotateX: -5
                  }}
                  transition={{ duration: 0.4 }}
                  className="rounded-[20px] overflow-hidden shadow-2xl border border-slate-100 bg-white"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1770219733996-85ce5b943a18?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbnRlcnByaXNlJTIwZXJwJTIwc3lzdGVtJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc3MjAwNzM2MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Enterprise ERP Dashboard"
                    className="w-full h-auto object-cover"
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SAP Services - Glass Cards */}
      <section className="max-w-[1200px] mx-auto px-8 py-20">
        <FadeInSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Comprehensive SAP Services
            </h2>
            <p className="text-xl text-slate-600 max-w-[700px] mx-auto">
              End-to-end SAP consulting and implementation for enterprise success
            </p>
          </div>
        </FadeInSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              icon: Database,
              title: 'SAP S/4HANA Implementation',
              description: 'Complete greenfield or brownfield S/4HANA deployment with industry best practices and proven methodologies for seamless enterprise transformation.',
              features: ['System Architecture Design', 'Module Configuration', 'Data Migration Strategy', 'Go-Live Support & Training']
            },
            {
              icon: GitBranch,
              title: 'SAP Migration & Upgrades',
              description: 'Seamless migration from legacy SAP systems to S/4HANA with minimal disruption, maximum data integrity, and optimized performance.',
              features: ['ECC to S/4HANA Migration', 'System Consolidation', 'Database Optimization', 'Upgrade Planning & Execution']
            },
            {
              icon: Settings,
              title: 'Business Process Optimization',
              description: 'Reengineer and optimize business processes to leverage SAP capabilities, drive operational efficiency, and reduce costs.',
              features: ['Process Mapping & Analysis', 'Workflow Automation', 'Best Practice Implementation', 'Change Management Support']
            },
            {
              icon: Workflow,
              title: 'SAP Integration Services',
              description: 'Connect SAP with third-party systems, cloud applications, and legacy platforms for unified, real-time operations.',
              features: ['API Development & Integration', 'Middleware Solutions', 'EDI Implementation', 'Cloud Connectivity']
            },
            {
              icon: Shield,
              title: 'Custom SAP Development',
              description: 'Tailored enhancements, custom modules, and specialized functionality to meet unique business requirements.',
              features: ['ABAP Custom Development', 'Fiori App Creation', 'Custom Reports & Analytics', 'Enhancement Framework']
            },
            {
              icon: Boxes,
              title: 'Managed SAP Support',
              description: 'Ongoing support, maintenance, and optimization to ensure your SAP environment performs at peak efficiency.',
              features: ['24/7 Technical Support', 'System Health Monitoring', 'Performance Tuning', 'Regular Updates & Patches']
            }
          ].map((service, index) => (
            <FadeInSection key={index} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="h-full"
              >
                <Card className="relative overflow-hidden bg-white p-8 rounded-[20px] shadow-sm border border-slate-100 hover:shadow-xl hover:border-brand-navy/20 transition-all duration-300 h-full flex flex-col">
                  {/* Glass effect overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent pointer-events-none" />

                  <div className="relative z-10 flex flex-col h-full">
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
                        <li key={idx} className="flex items-start gap-2 text-sm text-slate-600">
                          <Check className="w-4 h-4 text-brand-terracotta flex-shrink-0 mt-0.5" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
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
                  SAP Implementation Services
                </h2>
                <p className="text-slate-600 leading-relaxed text-lg mb-6">
                  Enterprise SAP implementation is a transformative journey that requires deep technical expertise, industry knowledge, and proven change management methodologies. Our SAP consulting practice brings together certified consultants, technical architects, and business process experts who have successfully delivered hundreds of implementations across diverse industries. We understand that SAP S/4HANA is more than a technology upgrade—it's a strategic business transformation that touches every aspect of your operations, from financial management and supply chain optimization to human capital management and customer relationship processes.
                </p>
                <p className="text-slate-600 leading-relaxed text-lg">
                  Our implementation approach balances speed-to-value with long-term scalability, ensuring your SAP environment is architected for both current needs and future growth. We leverage industry best practices and pre-configured templates while maintaining the flexibility to address your unique business requirements. From initial discovery and blueprint design through system configuration, integration, testing, and go-live support, we provide comprehensive guidance that minimizes disruption and accelerates time-to-benefit. Our team handles complex data migrations, custom development requirements, integration with third-party systems, and extensive user training to ensure successful adoption across your organization.
                </p>
              </div>
            </FadeInSection>

            <FadeInSection>
              <div>
                <h2 className="text-4xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                  <span className="w-8 h-1 bg-brand-terracotta rounded-full block"></span>
                  SAP Digital Transformation Consulting
                </h2>
                <p className="text-slate-600 leading-relaxed text-lg mb-6">
                  Digital transformation powered by SAP technologies enables enterprises to reimagine business processes, enhance operational agility, and unlock new revenue opportunities. Our consulting services extend beyond technical implementation to encompass strategic business transformation, helping you leverage SAP's intelligent enterprise capabilities including artificial intelligence, machine learning, advanced analytics, and IoT integration. We work closely with executive leadership and business stakeholders to align SAP investments with strategic objectives, ensuring technology decisions drive measurable business outcomes.
                </p>
                <p className="text-slate-600 leading-relaxed text-lg">
                  Modern SAP environments must integrate seamlessly with cloud applications, mobile platforms, and third-party systems to support today's distributed, real-time business operations. Our expertise in API development, middleware integration, and cloud connectivity ensures your SAP infrastructure becomes the central nervous system of your digital ecosystem. We help enterprises modernize legacy systems, automate manual processes, implement real-time analytics dashboards, and create mobile-first user experiences that enhance productivity. Through our managed services and ongoing optimization programs, we ensure your SAP investment continues delivering value long after initial deployment, adapting to changing business requirements and emerging technology capabilities.
                </p>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="max-w-[1200px] mx-auto px-8 py-20 border-t border-slate-100">
        <FadeInSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Industries We Serve
            </h2>
            <p className="text-xl text-slate-600">
              Specialized SAP solutions for your industry
            </p>
          </div>
        </FadeInSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: Building2, title: 'Financial Services', color: 'from-brand-navy to-brand-navy/70' },
            { icon: Factory, title: 'Manufacturing', color: 'from-brand-terracotta to-brand-terracotta/70' },
            { icon: TruckIcon, title: 'Logistics & Supply Chain', color: 'from-brand-navy to-brand-navy/70' },
            { icon: ShoppingBag, title: 'Retail & Distribution', color: 'from-brand-terracotta to-brand-terracotta/70' }
          ].map((industry, index) => (
            <FadeInSection key={index} delay={index * 0.1}>
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="bg-white p-8 rounded-[20px] shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 text-center group">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.8 }}
                    className={`w-20 h-20 bg-gradient-to-br ${industry.color} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg transition-all duration-300`}
                  >
                    <industry.icon className="w-10 h-10 text-white" />
                  </motion.div>
                  <h3 className="text-lg font-bold text-slate-900">{industry.title}</h3>
                </Card>
              </motion.div>
            </FadeInSection>
          ))}
        </div>
      </section>

      {/* Enterprise Process Flow */}
      <section className="bg-gradient-to-br from-slate-50 to-brand-navy/5 py-20 border-t border-slate-100">
        <div className="max-w-[1200px] mx-auto px-8">
          <FadeInSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">
                Our Implementation Methodology
              </h2>
              <p className="text-xl text-slate-600">
                Proven approach for successful SAP deployments
              </p>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { phase: 'Discovery & Analysis', description: 'Requirements gathering, current state assessment, and strategic roadmap development.', icon: '🔍' },
              { phase: 'System Architecture', description: 'Solution design, technical specifications, and integration blueprint creation.', icon: '🏗️' },
              { phase: 'Deployment & Integration', description: 'System configuration, custom development, testing, and data migration.', icon: '⚙️' },
              { phase: 'Support & Optimization', description: 'Go-live support, user training, and continuous improvement programs.', icon: '🚀' }
            ].map((item, index) => (
              <FadeInSection key={index} delay={index * 0.15}>
                <motion.div
                  whileHover={{ y: -10 }}
                  className="bg-white p-8 rounded-[20px] shadow-sm hover:shadow-xl border border-slate-100 hover:border-brand-navy/20 text-center h-full transition-all"
                >
                  <div className="text-6xl mb-6">{item.icon}</div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{item.phase}</h3>
                  <p className="text-slate-600 leading-relaxed text-sm">{item.description}</p>
                </motion.div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Transformation & Enterprise Section (Alternative Instead of their CTA section, or just use their basic CTA section but styled) */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-navy opacity-100" />

        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -bottom-[200px] -right-[200px] w-[700px] h-[700px] bg-brand-terracotta/20 rounded-full blur-3xl"
        />


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
