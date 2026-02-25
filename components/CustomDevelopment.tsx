"use client";
import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Code, Smartphone, Cloud, Lock, Zap, Layers, Database, Globe, GitBranch, Palette, ArrowRight, Check } from 'lucide-react';

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

export const CustomDevelopment = () => {
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
                {/* Animated Gradient Mesh Background */}
                <div className="absolute inset-0">
                    <motion.div
                        animate={{
                            backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
                        }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                        className="absolute inset-0 opacity-10"
                        style={{
                            background: 'radial-gradient(circle at 20% 50%, rgba(0, 51, 102, 0.4) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(153, 51, 0, 0.4) 0%, transparent 50%), radial-gradient(circle at 40% 20%, rgba(0, 51, 102, 0.2) 0%, transparent 50%)',
                            backgroundSize: '200% 200%',
                        }}
                    />
                </div>

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
                                Custom Web & SaaS Application Development
                            </motion.div>

                            <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
                                Scalable Web &{' '}
                                <span className="bg-gradient-to-r from-brand-navy to-brand-terracotta bg-clip-text text-transparent">
                                    SaaS Application Development
                                </span>
                            </h1>

                            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                                We build secure, high-performance, cloud-native applications tailored to your business needs.
                            </p>

                            <div className="flex gap-4 flex-wrap">
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Button className="bg-brand-navy hover:bg-brand-navy/90 text-white px-8 py-4 text-base rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center font-semibold group">
                                        Start Your Project
                                        <motion.div
                                            className="inline-block ml-2"
                                            animate={{ x: [0, 5, 0] }}
                                            transition={{ duration: 1.5, repeat: Infinity }}
                                        >
                                            <ArrowRight className="w-5 h-5" />
                                        </motion.div>
                                    </Button>
                                </motion.div>
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Button variant="outline" className="border-2 border-slate-200 text-slate-700 font-semibold px-8 py-4 text-base rounded-lg hover:bg-slate-50 hover:border-brand-navy transition-all duration-300">
                                        View Portfolio
                                    </Button>
                                </motion.div>
                            </div>
                        </motion.div>

                        {/* Right: Floating Code Window Effect */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="relative"
                        >
                            {/* Animated gradient mesh */}
                            <motion.div
                                animate={{
                                    rotate: [0, 360],
                                    scale: [1, 1.2, 1],
                                }}
                                transition={{
                                    duration: 25,
                                    repeat: Infinity,
                                    ease: "linear"
                                }}
                                className="absolute inset-0 bg-gradient-to-br from-brand-navy/20 via-brand-terracotta/10 to-brand-navy/5 rounded-[20px] blur-3xl"
                            />

                            {/* Floating Code Window */}
                            <motion.div
                                animate={{
                                    y: [0, -20, 0],
                                }}
                                transition={{
                                    duration: 6,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                className="relative"
                            >
                                <motion.div
                                    whileHover={{
                                        scale: 1.03,
                                        rotateY: 10,
                                        rotateX: -5
                                    }}
                                    transition={{ duration: 0.4 }}
                                    className="rounded-[20px] overflow-hidden shadow-2xl border border-slate-100 bg-white"
                                    style={{ transformStyle: 'preserve-3d' }}
                                >
                                    <img
                                        src="https://images.unsplash.com/photo-1763568258612-0ae7f6eb1422?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RlJTIwZWRpdG9yJTIwZGV2ZWxvcGVyJTIwc2NyZWVufGVufDF8fHx8MTc3MjAwNzM2Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                                        alt="Code Editor"
                                        className="w-full h-auto object-cover"
                                    />
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Development Services */}
            <section className="max-w-[1200px] mx-auto px-8 py-20">
                <FadeInSection>
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-slate-900 mb-4">
                            Custom Development Services
                        </h2>
                        <p className="text-xl text-slate-600 max-w-[700px] mx-auto">
                            Full-stack development expertise for modern web applications
                        </p>
                    </div>
                </FadeInSection>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        {
                            icon: Code,
                            title: 'SaaS Platform Development',
                            description: 'Build multi-tenant SaaS applications with subscription management, user authentication, and scalable cloud architecture.',
                            features: ['Multi-Tenancy Architecture', 'Subscription Billing', 'Role-Based Access', 'API Development']
                        },
                        {
                            icon: Smartphone,
                            title: 'Progressive Web Apps',
                            description: 'Modern web applications that deliver native app experiences with offline capabilities and push notifications.',
                            features: ['Responsive Design', 'Offline Functionality', 'Push Notifications', 'App-Like UX']
                        },
                        {
                            icon: Database,
                            title: 'CRM & Admin Dashboards',
                            description: 'Custom internal tools, admin dashboards, and enterprise portals for streamlined operations.',
                            features: ['Data Visualization', 'Real-Time Analytics', 'Custom Workflows', 'Integration Layers']
                        },
                        {
                            icon: Cloud,
                            title: 'Cloud-Based Applications',
                            description: 'Scalable, resilient applications built on AWS, Azure, or Google Cloud with microservices architecture.',
                            features: ['Microservices Design', 'Container Orchestration', 'Auto-Scaling', 'High Availability']
                        },
                        {
                            icon: GitBranch,
                            title: 'API & Third-Party Integrations',
                            description: 'RESTful APIs, GraphQL endpoints, and third-party integrations to connect your systems.',
                            features: ['REST & GraphQL APIs', 'Webhook Integration', 'Third-Party Connectors', 'Data Sync']
                        },
                        {
                            icon: Palette,
                            title: 'UI/UX Engineering',
                            description: 'User-centered design and front-end development that delivers intuitive, beautiful interfaces.',
                            features: ['Design Systems', 'Responsive Layouts', 'Accessibility', 'Performance Optimization']
                        }
                    ].map((service, index) => (
                        <FadeInSection key={index} delay={index * 0.1}>
                            <motion.div
                                whileHover={{ y: -10, scale: 1.03 }}
                                transition={{ duration: 0.3 }}
                                className="h-full"
                            >
                                <Card className="bg-white p-8 rounded-[20px] shadow-sm border border-slate-100 hover:shadow-xl hover:border-brand-navy/20 transition-all duration-300 h-full flex flex-col group">
                                    <motion.div
                                        whileHover={{
                                            rotate: [0, -10, 10, -10, 0],
                                            scale: 1.1
                                        }}
                                        transition={{ duration: 0.5 }}
                                        className="w-16 h-16 bg-brand-navy/5 rounded-full flex items-center justify-center mb-6 group-hover:shadow-lg shrink-0"
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
                                            <motion.li
                                                key={idx}
                                                initial={{ opacity: 0, x: -10 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                transition={{ delay: idx * 0.1 }}
                                                className="flex items-start gap-2 text-sm text-slate-600"
                                            >
                                                <Check className="w-4 h-4 text-brand-terracotta flex-shrink-0 mt-0.5" />
                                                {feature}
                                            </motion.li>
                                        ))}
                                    </ul>
                                </Card>
                            </motion.div>
                        </FadeInSection>
                    ))}
                </div>
            </section>

            {/* SEO Content Block */}
            <section className="bg-white py-20 border-t border-slate-100">
                <div className="max-w-[1200px] mx-auto px-8">
                    <div className="max-w-[900px] mx-auto space-y-16">
                        <FadeInSection>
                            <div>
                                <h2 className="text-4xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                                    <span className="w-8 h-1 bg-brand-terracotta rounded-full block"></span>
                                    Custom Web Application Development
                                </h2>
                                <p className="text-slate-600 leading-relaxed text-lg mb-6">
                                    Modern businesses require custom software solutions that align precisely with their unique workflows, business logic, and competitive positioning. Off-the-shelf platforms often force companies to adapt their processes to software limitations, creating inefficiencies and compromising competitive advantages. Our custom web application development services deliver tailored solutions built from the ground up to match your exact requirements. We specialize in architecting scalable, secure, and high-performance applications using modern frameworks and cloud-native infrastructure that evolves alongside your business needs.
                                </p>
                                <p className="text-slate-600 leading-relaxed text-lg">
                                    Our development process emphasizes clean architecture, maintainable code, and comprehensive testing to ensure your application performs reliably under real-world conditions. We leverage industry best practices in API design, database optimization, caching strategies, and security protocols to build enterprise-grade solutions. From responsive front-end interfaces built with React and Next.js to robust backend systems powered by Node.js, Python, or .NET Core, our full-stack expertise covers every aspect of modern web development. Whether you're launching a customer-facing SaaS product, building internal operations tools, or creating complex data-driven platforms, our team delivers solutions that drive measurable business outcomes.
                                </p>
                            </div>
                        </FadeInSection>

                        <FadeInSection>
                            <div>
                                <h2 className="text-4xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                                    <span className="w-8 h-1 bg-brand-terracotta rounded-full block"></span>
                                    SaaS & Enterprise Software Solutions
                                </h2>
                                <p className="text-slate-600 leading-relaxed text-lg mb-6">
                                    The SaaS model has revolutionized software delivery, enabling businesses to deploy scalable solutions with subscription-based revenue models and continuous feature updates. Our SaaS development expertise spans multi-tenant architecture design, subscription billing integration, role-based access control, and comprehensive analytics dashboards. We build platforms that can scale from dozens to millions of users while maintaining performance, security, and reliability. Our cloud-native approach leverages containerization, microservices architecture, and automated CI/CD pipelines to enable rapid iteration and seamless deployment.
                                </p>
                                <p className="text-slate-600 leading-relaxed text-lg">
                                    Enterprise software demands more than functional code—it requires thoughtful architecture that supports long-term maintainability, extensibility, and integration capabilities. We design modular systems with well-documented APIs that facilitate future enhancements and third-party integrations. Our technology stack choices prioritize proven, enterprise-grade solutions with strong community support and long-term viability. From database selection and caching strategies to load balancing and disaster recovery planning, we address the full spectrum of concerns that determine software success. Our ongoing support and optimization services ensure your application continues performing at peak efficiency as user loads grow and business requirements evolve.
                                </p>
                            </div>
                        </FadeInSection>
                    </div>
                </div>
            </section>

            {/* Technology Stack - Animated Badges */}
            <section className="max-w-[1200px] mx-auto px-8 py-20 border-t border-slate-100">
                <FadeInSection>
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-slate-900 mb-4">
                            Modern Technology Stack
                        </h2>
                        <p className="text-xl text-slate-600">
                            Built with proven, enterprise-grade technologies
                        </p>
                    </div>
                </FadeInSection>

                <div className="flex flex-wrap justify-center gap-6">
                    {[
                        { name: 'Next.js', color: 'bg-slate-900 text-white border-transparent' },
                        { name: 'React', color: 'bg-white text-slate-900 border-slate-200 hover:border-brand-navy' },
                        { name: 'Node.js', color: 'bg-white text-slate-900 border-slate-200 hover:border-brand-terracotta' },
                        { name: 'TypeScript', color: 'bg-brand-navy text-white border-transparent' },
                        { name: 'AWS', color: 'bg-white text-slate-900 border-slate-200 hover:border-brand-terracotta' },
                        { name: 'PostgreSQL', color: 'bg-white text-slate-900 border-slate-200 hover:border-brand-navy' },
                        { name: 'MongoDB', color: 'bg-white text-slate-900 border-slate-200 hover:border-brand-terracotta' },
                        { name: 'Python', color: 'bg-white text-slate-900 border-slate-200 hover:border-brand-navy' },
                        { name: 'Docker', color: 'bg-white text-slate-900 border-slate-200 hover:border-brand-navy' },
                        { name: 'Kubernetes', color: 'bg-white text-slate-900 border-slate-200 hover:border-brand-terracotta' }
                    ].map((tech, index) => (
                        <FadeInSection key={index} delay={index * 0.05}>
                            <motion.div
                                whileHover={{
                                    scale: 1.15,
                                    boxShadow: '0 4px 14px 0 rgba(0, 51, 102, 0.15)'
                                }}
                                whileTap={{ scale: 0.95 }}
                                className={`px-8 py-4 ${tech.color} border font-semibold rounded-full shadow-sm cursor-pointer transition-colors duration-300`}
                            >
                                {tech.name}
                            </motion.div>
                        </FadeInSection>
                    ))}
                </div>
            </section>

            {/* Development Process */}
            <section className="bg-gradient-to-br from-slate-50 to-brand-navy/5 py-20 border-t border-slate-100">
                <div className="max-w-[1200px] mx-auto px-8">
                    <FadeInSection>
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold text-slate-900 mb-4">
                                Our Development Process
                            </h2>
                            <p className="text-xl text-slate-600">
                                Agile methodology with continuous delivery
                            </p>
                        </div>
                    </FadeInSection>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { icon: '📋', phase: 'Requirement Analysis', description: 'Deep dive into your business goals, user needs, and technical requirements.' },
                            { icon: '🎨', phase: 'System Architecture', description: 'UX/UI design, database schema, API design, and infrastructure planning.' },
                            { icon: '💻', phase: 'Agile Development', description: 'Iterative development with weekly demos and continuous integration.' },
                            { icon: '🚀', phase: 'Deployment & Support', description: 'Cloud deployment, monitoring setup, and ongoing maintenance.' }
                        ].map((item, index) => (
                            <FadeInSection key={index} delay={index * 0.15}>
                                <motion.div
                                    whileHover={{ y: -10, scale: 1.05 }}
                                    className="bg-white p-8 rounded-[20px] shadow-sm hover:shadow-xl border border-slate-100 hover:border-brand-navy/20 text-center h-full transition-all"
                                >
                                    <motion.div
                                        animate={{
                                            rotate: [0, 10, -10, 0],
                                        }}
                                        transition={{
                                            duration: 3,
                                            repeat: Infinity,
                                            ease: "easeInOut"
                                        }}
                                        className="text-6xl mb-6"
                                    >
                                        {item.icon}
                                    </motion.div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-3">{item.phase}</h3>
                                    <p className="text-slate-600 leading-relaxed text-sm">{item.description}</p>
                                </motion.div>
                            </FadeInSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* Case Study Preview */}
            <section className="max-w-[1200px] mx-auto px-8 py-20">
                <FadeInSection>
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-slate-900 mb-4">
                            Featured Project
                        </h2>
                        <p className="text-xl text-slate-600">
                            See our recent work in action
                        </p>
                    </div>
                </FadeInSection>

                <FadeInSection>
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="relative rounded-[20px] overflow-hidden shadow-2xl group border border-slate-100"
                    >
                        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/60 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.5 }}
                            className="relative"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1763568258612-0ae7f6eb1422?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RlJTIwZWRpdG9yJTIwZGV2ZWxvcGVyJTIwc2NyZWVufGVufDF8fHx8MTc3MjAwNzM2Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                                alt="Case Study"
                                className="w-full h-[400px] object-cover"
                            />
                        </motion.div>

                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            whileHover={{ y: 0, opacity: 1 }}
                            className="absolute bottom-0 left-0 right-0 p-10 z-20"
                        >
                            <h3 className="text-3xl font-bold text-white mb-3">Enterprise SaaS Platform</h3>
                            <p className="text-white/90 text-lg mb-4">Multi-tenant platform serving 50,000+ users</p>
                            <Button className="bg-white text-brand-navy hover:bg-slate-50 shadow-md font-semibold px-6 py-3 rounded-lg flex items-center inline-flex">
                                View Case Study
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                        </motion.div>
                    </motion.div>
                </FadeInSection>
            </section>

            {/* Final CTA Section */}
            <section className="relative overflow-hidden bg-brand-navy">
                <motion.div
                    animate={{
                        backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
                    }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute inset-0 opacity-20"
                    style={{
                        background: 'radial-gradient(circle at 20% 50%, rgba(153, 51, 0, 0.4) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)',
                        backgroundSize: '200% 200%',
                    }}
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
