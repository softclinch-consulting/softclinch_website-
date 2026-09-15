"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FileText, Shield, Scale, Clock, Mail, MapPin, Phone, Globe, ChevronRight } from "lucide-react";

export const TermsOfUse = () => {
    const sections = [
        { id: "acceptance", number: "1", title: "Acceptance of Terms" },
        { id: "changes", number: "2", title: "Changes to Terms" },
        { id: "use", number: "3", title: "Use of Website" },
        { id: "ip", number: "4", title: "Intellectual Property" },
        { id: "disclaimer", number: "5", title: "Services Disclaimer" },
        { id: "liability", number: "6", title: "Limitation of Liability" },
        { id: "third-party", number: "7", title: "Third-Party Links" },
        { id: "termination", number: "8", title: "Termination" },
        { id: "governing-law", number: "9", title: "Governing Law" },
        { id: "contact", number: "10", title: "Contact Information" },
    ];

    return (
        <div className="bg-slate-50 min-h-screen py-12 md:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Hero Header */}
                <div className="relative rounded-3xl bg-brand-navy overflow-hidden text-white p-8 md:p-14 mb-12 shadow-2xl">
                    <div className="absolute -right-20 -top-20 w-96 h-96 bg-brand-terracotta/20 rounded-full blur-3xl pointer-events-none" />
                    <div className="relative z-10 max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-brand-terracotta border border-white/10 text-xs font-semibold uppercase tracking-wider mb-6">
                            <Scale size={14} /> Legal Documentation
                        </div>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display tracking-tight mb-4">
                            Terms of Use
                        </h1>
                        <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-6">
                            Welcome to www.softclinch.com ("Website"), owned and operated by SoftClinch Consulting Services Pvt. Ltd. ("SoftClinch", "we", "our", or "us"). By accessing or using this Website, you agree to comply with and be bound by the following Terms of Use. Please read them carefully before using our site or services.
                        </p>
                        <div className="flex flex-wrap gap-4 text-xs sm:text-sm text-slate-400 pt-4 border-t border-white/10">
                            <span className="flex items-center gap-1.5">
                                <Clock size={14} className="text-brand-terracotta" />
                                <strong>Effective Date:</strong> 25/06/2025
                            </span>
                            <span className="hidden sm:inline">•</span>
                            <span className="flex items-center gap-1.5">
                                <Clock size={14} className="text-brand-terracotta" />
                                <strong>Last Updated:</strong> 25/06/2025
                            </span>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {/* Quick Navigation Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-32 bg-white rounded-2xl p-6 shadow-sm border border-slate-200/80">
                            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-4 flex items-center gap-2">
                                <FileText size={16} /> Table of Contents
                            </h3>
                            <nav className="space-y-1">
                                {sections.map((s) => (
                                    <a
                                        key={s.id}
                                        href={`#${s.id}`}
                                        className="flex items-center gap-2.5 px-3 py-2 text-sm text-slate-600 hover:text-brand-navy hover:bg-slate-50 rounded-lg transition-colors group"
                                    >
                                        <span className="w-5 h-5 rounded-full bg-slate-100 group-hover:bg-brand-navy group-hover:text-white flex items-center justify-center text-xs font-bold transition-colors">
                                            {s.number}
                                        </span>
                                        <span className="truncate">{s.title}</span>
                                    </a>
                                ))}
                            </nav>
                        </div>
                    </div>

                    {/* Main Content Area */}
                    <div className="lg:col-span-3 space-y-8">
                        {/* Section 1 */}
                        <section id="acceptance" className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200/80 scroll-mt-36">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="w-8 h-8 rounded-xl bg-brand-navy text-white flex items-center justify-center font-bold text-sm">1</span>
                                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Acceptance of Terms</h2>
                            </div>
                            <p className="text-slate-600 leading-relaxed">
                                By accessing this Website, you confirm that you have read, understood, and agree to be bound by these Terms. If you do not agree with any part of these terms, please do not use our Website.
                            </p>
                        </section>

                        {/* Section 2 */}
                        <section id="changes" className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200/80 scroll-mt-36">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="w-8 h-8 rounded-xl bg-brand-navy text-white flex items-center justify-center font-bold text-sm">2</span>
                                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Changes to Terms</h2>
                            </div>
                            <p className="text-slate-600 leading-relaxed">
                                SoftClinch reserves the right to modify these Terms of Use at any time. Updated terms will be posted on this page with the revised date. Continued use of the Website after such changes constitutes your acceptance.
                            </p>
                        </section>

                        {/* Section 3 */}
                        <section id="use" className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200/80 scroll-mt-36">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="w-8 h-8 rounded-xl bg-brand-navy text-white flex items-center justify-center font-bold text-sm">3</span>
                                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Use of Website</h2>
                            </div>
                            <p className="text-slate-600 leading-relaxed mb-4">
                                You agree to use the Website for lawful purposes only and in a way that does not infringe on the rights of, restrict, or inhibit anyone else’s use and enjoyment of the Website.
                            </p>
                            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100">
                                <p className="font-semibold text-slate-800 mb-3">You must not:</p>
                                <ul className="space-y-2.5 text-slate-600">
                                    <li className="flex items-start gap-2.5">
                                        <ChevronRight size={16} className="text-brand-terracotta flex-shrink-0 mt-1" />
                                        <span>Use the site to distribute any malicious, harmful, or offensive content.</span>
                                    </li>
                                    <li className="flex items-start gap-2.5">
                                        <ChevronRight size={16} className="text-brand-terracotta flex-shrink-0 mt-1" />
                                        <span>Attempt to gain unauthorized access to our servers or other systems.</span>
                                    </li>
                                    <li className="flex items-start gap-2.5">
                                        <ChevronRight size={16} className="text-brand-terracotta flex-shrink-0 mt-1" />
                                        <span>Copy, duplicate, or exploit any content for commercial purposes without written consent.</span>
                                    </li>
                                </ul>
                            </div>
                        </section>

                        {/* Section 4 */}
                        <section id="ip" className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200/80 scroll-mt-36">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="w-8 h-8 rounded-xl bg-brand-navy text-white flex items-center justify-center font-bold text-sm">4</span>
                                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Intellectual Property</h2>
                            </div>
                            <p className="text-slate-600 leading-relaxed mb-3">
                                All content on the Website—including text, graphics, logos, images, software, and design—is the intellectual property of SoftClinch or its licensors and is protected by applicable intellectual property laws.
                            </p>
                            <p className="text-slate-600 leading-relaxed">
                                You may not reproduce, distribute, or transmit any part of the Website content without prior written permission.
                            </p>
                        </section>

                        {/* Section 5 */}
                        <section id="disclaimer" className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200/80 scroll-mt-36">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="w-8 h-8 rounded-xl bg-brand-navy text-white flex items-center justify-center font-bold text-sm">5</span>
                                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Services Disclaimer</h2>
                            </div>
                            <p className="text-slate-600 leading-relaxed mb-3">
                                While we strive for accuracy, the content provided on this Website is for informational purposes only and may not always reflect the most up-to-date information regarding our services, projects, or technologies.
                            </p>
                            <p className="text-slate-600 leading-relaxed">
                                SoftClinch makes no warranties, expressed or implied, about the accuracy, completeness, reliability, or suitability of the information.
                            </p>
                        </section>

                        {/* Section 6 */}
                        <section id="liability" className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200/80 scroll-mt-36">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="w-8 h-8 rounded-xl bg-brand-navy text-white flex items-center justify-center font-bold text-sm">6</span>
                                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Limitation of Liability</h2>
                            </div>
                            <p className="text-slate-600 leading-relaxed">
                                SoftClinch will not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from your access to or use of this Website, including but not limited to viruses, loss of data, or service interruptions.
                            </p>
                        </section>

                        {/* Section 7 */}
                        <section id="third-party" className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200/80 scroll-mt-36">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="w-8 h-8 rounded-xl bg-brand-navy text-white flex items-center justify-center font-bold text-sm">7</span>
                                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Third-Party Links</h2>
                            </div>
                            <p className="text-slate-600 leading-relaxed">
                                Our Website may contain links to external websites or resources. We do not endorse or assume responsibility for the content, products, or services on third-party websites.
                            </p>
                        </section>

                        {/* Section 8 */}
                        <section id="termination" className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200/80 scroll-mt-36">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="w-8 h-8 rounded-xl bg-brand-navy text-white flex items-center justify-center font-bold text-sm">8</span>
                                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Termination</h2>
                            </div>
                            <p className="text-slate-600 leading-relaxed">
                                We reserve the right to restrict or terminate your access to the Website at our sole discretion, without notice or liability, if we believe you have violated these Terms.
                            </p>
                        </section>

                        {/* Section 9 */}
                        <section id="governing-law" className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200/80 scroll-mt-36">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="w-8 h-8 rounded-xl bg-brand-navy text-white flex items-center justify-center font-bold text-sm">9</span>
                                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Governing Law</h2>
                            </div>
                            <p className="text-slate-600 leading-relaxed">
                                These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions. Disputes arising out of or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts in Chennai, Tamil Nadu, India.
                            </p>
                        </section>

                        {/* Section 10 */}
                        <section id="contact" className="bg-brand-navy rounded-2xl p-6 sm:p-8 text-white shadow-xl scroll-mt-36 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-terracotta/10 rounded-full blur-2xl pointer-events-none" />
                            <div className="relative z-10">
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="w-8 h-8 rounded-xl bg-brand-terracotta text-white flex items-center justify-center font-bold text-sm">10</span>
                                    <h2 className="text-xl sm:text-2xl font-bold">Contact Information</h2>
                                </div>
                                <p className="text-slate-300 mb-6">
                                    If you have any questions or concerns about these Terms of Use, please contact:
                                </p>
                                <div className="space-y-3 bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 text-sm sm:text-base">
                                    <div className="font-semibold text-lg text-white mb-2">SoftClinch Consulting Services Pvt. Ltd.</div>
                                    <div className="flex items-start gap-3 text-slate-300">
                                        <MapPin size={18} className="text-brand-terracotta flex-shrink-0 mt-1" />
                                        <span>No.30, 53rd Street, Ashok Nagar, Chennai, TN, INDIA - 600083</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-slate-300">
                                        <Mail size={18} className="text-brand-terracotta flex-shrink-0" />
                                        <a href="mailto:projects@softclinch.com" className="hover:text-white transition-colors underline">
                                            projects@softclinch.com
                                        </a>
                                    </div>
                                    <div className="flex items-center gap-3 text-slate-300">
                                        <Phone size={18} className="text-brand-terracotta flex-shrink-0" />
                                        <a href="tel:+919841299878" className="hover:text-white transition-colors">
                                            +91-9841299878
                                        </a>
                                    </div>
                                    <div className="flex items-center gap-3 text-slate-300">
                                        <Globe size={18} className="text-brand-terracotta flex-shrink-0" />
                                        <a href="https://www.softclinch.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                                            www.softclinch.com
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};
