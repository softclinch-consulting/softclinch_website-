"use client";
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

export const CTA = () => {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl  mx-auto px-4 sm:px-6 lg:px-8">
                <div className="relative  group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-brand-navy to-brand-terracotta rounded-[3rem] blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>

                    <div className="relative  bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-2xl flex flex-col lg:flex-row">

                        <div className="lg:w-3/5 p-8 md:p-16 lg:p-20 relative z-10 bg-white">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                <div className="flex items-center gap-2 mb-6">
                                    <span className="w-12 h-1 bg-brand-terracotta rounded-full"></span>
                                    <span className="text-brand-navy font-bold tracking-widest text-xs uppercase flex items-center gap-1">
                                        <Sparkles size={14} className="text-brand-terracotta" />
                                        Final CTA
                                    </span>
                                </div>
                                <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-slate-900 mb-8 leading-[1.1]">
                                    Ready to Grow Your Business with <span className="text-brand-navy">AI, SEO</span> &amp; <span className="relative inline-block">
                                        Automation
                                        <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 100 10" preserveAspectRatio="none">
                                            <path d="M0 5 Q 25 0, 50 5 T 100 5" stroke="#993300" strokeWidth="2" fill="transparent" />
                                        </svg>
                                    </span>?
                                </h2>
                                <p className="text-slate-600 text-lg mb-12 leading-relaxed max-w-xl">
                                    Talk to our experts about SAP consulting, WhatsApp automation, SEO, AI search optimization, and custom software solutions tailored for your business growth.
                                </p>

                                <div className="flex flex-col sm:flex-row gap-5">
                                    <Link
                                        href="/contact"
                                        className="inline-flex bg-brand-navy  items-center justify-center gap-2 bg-brand-navy text-white px-10 py-5 rounded-2xl font-bold hover: transition-all shadow-xl hover:shadow-brand-navy/20 group"
                                    >
                                        Get Started Today
                                        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                    <Link
                                        href="/contact"
                                        className="inline-flex items-center justify-center gap-2 bg-slate-50 text-slate-900 border border-slate-200 px-10 py-5 rounded-2xl font-bold hover:bg-white hover:border-brand-terracotta hover:text-brand-terracotta transition-all"
                                    >
                                        Request Consultation
                                    </Link>
                                </div>
                            </motion.div>
                        </div>

                        <div className="lg:w-2/5  relative min-h-[300px] lg:min-h-full overflow-hidden">
                            <div className="absolute inset-0 bg-brand-navy">
                                <div className="absolute top-0 right-0 w-full h-full">
                                    <svg viewBox="0 0 400 600" className="w-full h-full opacity-20" preserveAspectRatio="none">
                                        <path d="M0,0 L400,0 L400,600 L100,600 Q150,300 0,0" fill="#993300" />
                                    </svg>
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-br from-brand-navy via-brand-navy/90 to-transparent"></div>

                                <div className="relative bg-brand-navy   h-full flex flex-col justify-center p-12 text-white">
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.8, delay: 0.2 }}
                                        className="space-y-8"
                                    >
                                        <div className="p-6 bg-white backdrop-blur-md rounded-2xl border border-white/20">
                                            <div className="text-black font-display font-bold mb-1">SAP</div>
                                            <div className="text-black text-sm uppercase tracking-wider font-semibold">Consulting & AMS Support</div>
                                        </div>
                                        <div className="p-6 bg-white backdrop-blur-md rounded-2xl border border-white/20 translate-x-8">
                                            <div className="text-black font-display font-bold mb-1">AI</div>
                                            <div className="text-black text- uppercase tracking-wider font-semibold">Automation & Workflow Systems</div>
                                        </div>
                                        <div className="p-6 bg-white backdrop-blur-md rounded-2xl border border-white/20">
                                            <div className="text-black font-display font-bold mb-1">SEO</div>
                                            <div className="text-black text-sm uppercase tracking-wider font-semibold">Search, GEO & AEO Growth</div>
                                        </div>
                                    </motion.div>
                                </div>

                                <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-brand-terracotta/40 rounded-full blur-3xl"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
