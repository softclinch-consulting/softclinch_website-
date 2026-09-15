"use client";
import React from "react";
import Link from "next/link";
import { Shield, Clock, Mail, MapPin, Phone, Globe, ChevronRight, FileText, Lock } from "lucide-react";

export const PrivacyPolicy = () => {
    const sections = [
        { id: "information-collect", number: "1", title: "Information We Collect" },
        { id: "how-we-use", number: "2", title: "How We Use Your Information" },
        { id: "sharing", number: "3", title: "Sharing of Information" },
        { id: "cookies", number: "4", title: "Cookies & Tracking" },
        { id: "data-security", number: "5", title: "Data Security" },
        { id: "your-rights", number: "6", title: "Your Rights" },
        { id: "third-party", number: "7", title: "Third-Party Links" },
        { id: "childrens-privacy", number: "8", title: "Children's Privacy" },
        { id: "changes", number: "9", title: "Changes to This Policy" },
        { id: "contact-us", number: "10", title: "Contact Us" },
    ];

    return (
        <div className="bg-slate-50 min-h-screen py-12 md:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Hero Header */}
                <div className="relative rounded-3xl bg-brand-navy overflow-hidden text-white p-8 md:p-14 mb-12 shadow-2xl">
                    <div className="absolute -right-20 -top-20 w-96 h-96 bg-brand-terracotta/20 rounded-full blur-3xl pointer-events-none" />
                    <div className="relative z-10 max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-brand-terracotta border border-white/10 text-xs font-semibold uppercase tracking-wider mb-6">
                            <Lock size={14} /> Data Protection & Privacy
                        </div>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display tracking-tight mb-4">
                            Privacy Policy
                        </h1>
                        <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-6">
                            SoftClinch Consulting Services Pvt. Ltd. ("SoftClinch", "we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website www.softclinch.com, engage with our services, or interact with us.
                        </p>
                        <p className="text-slate-300 text-sm italic mb-6">
                            By using our website, you consent to the practices described in this policy.
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
                        <section id="information-collect" className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200/80 scroll-mt-36">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="w-8 h-8 rounded-xl bg-brand-navy text-white flex items-center justify-center font-bold text-sm">1</span>
                                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Information We Collect</h2>
                            </div>
                            <p className="text-slate-600 leading-relaxed mb-6">
                                We may collect the following types of information:
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="bg-slate-50 p-5 rounded-xl border border-slate-100">
                                    <h3 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-brand-terracotta" />
                                        Personal Information:
                                    </h3>
                                    <ul className="space-y-2 text-slate-600 text-sm">
                                        <li className="flex items-center gap-2">
                                            <ChevronRight size={14} className="text-brand-terracotta" />
                                            Name, email address, phone number
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <ChevronRight size={14} className="text-brand-terracotta" />
                                            Company name and designation
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <ChevronRight size={14} className="text-brand-terracotta" />
                                            Project details or inquiries
                                        </li>
                                    </ul>
                                </div>
                                <div className="bg-slate-50 p-5 rounded-xl border border-slate-100">
                                    <h3 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-brand-navy" />
                                        Non-Personal Information:
                                    </h3>
                                    <ul className="space-y-2 text-slate-600 text-sm">
                                        <li className="flex items-center gap-2">
                                            <ChevronRight size={14} className="text-brand-navy" />
                                            IP address, browser type, operating system
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <ChevronRight size={14} className="text-brand-navy" />
                                            Pages visited, time spent, referral URLs
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* Section 2 */}
                        <section id="how-we-use" className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200/80 scroll-mt-36">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="w-8 h-8 rounded-xl bg-brand-navy text-white flex items-center justify-center font-bold text-sm">2</span>
                                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">How We Use Your Information</h2>
                            </div>
                            <p className="text-slate-600 leading-relaxed mb-4">
                                We use your information to:
                            </p>
                            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100">
                                <ul className="space-y-2.5 text-slate-600">
                                    <li className="flex items-start gap-2.5">
                                        <ChevronRight size={16} className="text-brand-terracotta flex-shrink-0 mt-1" />
                                        <span>Provide and manage our services</span>
                                    </li>
                                    <li className="flex items-start gap-2.5">
                                        <ChevronRight size={16} className="text-brand-terracotta flex-shrink-0 mt-1" />
                                        <span>Respond to inquiries and customer support requests</span>
                                    </li>
                                    <li className="flex items-start gap-2.5">
                                        <ChevronRight size={16} className="text-brand-terracotta flex-shrink-0 mt-1" />
                                        <span>Improve website functionality and user experience</span>
                                    </li>
                                    <li className="flex items-start gap-2.5">
                                        <ChevronRight size={16} className="text-brand-terracotta flex-shrink-0 mt-1" />
                                        <span>Send marketing and service-related communications (if opted in)</span>
                                    </li>
                                    <li className="flex items-start gap-2.5">
                                        <ChevronRight size={16} className="text-brand-terracotta flex-shrink-0 mt-1" />
                                        <span>Comply with legal obligations</span>
                                    </li>
                                </ul>
                            </div>
                        </section>

                        {/* Section 3 */}
                        <section id="sharing" className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200/80 scroll-mt-36">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="w-8 h-8 rounded-xl bg-brand-navy text-white flex items-center justify-center font-bold text-sm">3</span>
                                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Sharing of Information</h2>
                            </div>
                            <p className="text-slate-600 leading-relaxed mb-4">
                                We do not sell, trade, or rent your personal information. We may share your data with:
                            </p>
                            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100">
                                <ul className="space-y-2.5 text-slate-600">
                                    <li className="flex items-start gap-2.5">
                                        <ChevronRight size={16} className="text-brand-terracotta flex-shrink-0 mt-1" />
                                        <span>Service providers and contractors working on our behalf</span>
                                    </li>
                                    <li className="flex items-start gap-2.5">
                                        <ChevronRight size={16} className="text-brand-terracotta flex-shrink-0 mt-1" />
                                        <span>Legal authorities when required by law or to protect our rights</span>
                                    </li>
                                    <li className="flex items-start gap-2.5">
                                        <ChevronRight size={16} className="text-brand-terracotta flex-shrink-0 mt-1" />
                                        <span>Third parties with your explicit consent</span>
                                    </li>
                                </ul>
                            </div>
                        </section>

                        {/* Section 4 */}
                        <section id="cookies" className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200/80 scroll-mt-36">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="w-8 h-8 rounded-xl bg-brand-navy text-white flex items-center justify-center font-bold text-sm">4</span>
                                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Cookies and Tracking Technologies</h2>
                            </div>
                            <p className="text-slate-600 leading-relaxed mb-4">
                                SoftClinch uses cookies and similar technologies to:
                            </p>
                            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 mb-4">
                                <ul className="space-y-2.5 text-slate-600">
                                    <li className="flex items-start gap-2.5">
                                        <ChevronRight size={16} className="text-brand-terracotta flex-shrink-0 mt-1" />
                                        <span>Analyze website traffic and usage</span>
                                    </li>
                                    <li className="flex items-start gap-2.5">
                                        <ChevronRight size={16} className="text-brand-terracotta flex-shrink-0 mt-1" />
                                        <span>Enhance user experience</span>
                                    </li>
                                    <li className="flex items-start gap-2.5">
                                        <ChevronRight size={16} className="text-brand-terracotta flex-shrink-0 mt-1" />
                                        <span>Remember user preferences</span>
                                    </li>
                                </ul>
                            </div>
                            <p className="text-slate-600 leading-relaxed">
                                You can control cookie preferences through your browser settings.
                            </p>
                        </section>

                        {/* Section 5 */}
                        <section id="data-security" className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200/80 scroll-mt-36">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="w-8 h-8 rounded-xl bg-brand-navy text-white flex items-center justify-center font-bold text-sm">5</span>
                                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Data Security</h2>
                            </div>
                            <p className="text-slate-600 leading-relaxed">
                                We implement appropriate technical and organizational measures to protect your data. While we strive to secure your information, no electronic transmission or storage is 100% secure.
                            </p>
                        </section>

                        {/* Section 6 */}
                        <section id="your-rights" className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200/80 scroll-mt-36">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="w-8 h-8 rounded-xl bg-brand-navy text-white flex items-center justify-center font-bold text-sm">6</span>
                                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Your Rights</h2>
                            </div>
                            <p className="text-slate-600 leading-relaxed mb-4">
                                You have the right to:
                            </p>
                            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 mb-4">
                                <ul className="space-y-2.5 text-slate-600">
                                    <li className="flex items-start gap-2.5">
                                        <ChevronRight size={16} className="text-brand-terracotta flex-shrink-0 mt-1" />
                                        <span>Access, update, or delete your personal information</span>
                                    </li>
                                    <li className="flex items-start gap-2.5">
                                        <ChevronRight size={16} className="text-brand-terracotta flex-shrink-0 mt-1" />
                                        <span>Opt-out of marketing communications at any time</span>
                                    </li>
                                    <li className="flex items-start gap-2.5">
                                        <ChevronRight size={16} className="text-brand-terracotta flex-shrink-0 mt-1" />
                                        <span>Withdraw consent where processing is based on consent</span>
                                    </li>
                                </ul>
                            </div>
                            <p className="text-slate-600 leading-relaxed">
                                To exercise your rights, contact us at{" "}
                                <a href="mailto:projects@softclinch.com" className="text-brand-navy font-semibold underline hover:text-brand-terracotta">
                                    projects@softclinch.com
                                </a>.
                            </p>
                        </section>

                        {/* Section 7 */}
                        <section id="third-party" className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200/80 scroll-mt-36">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="w-8 h-8 rounded-xl bg-brand-navy text-white flex items-center justify-center font-bold text-sm">7</span>
                                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Third-Party Links</h2>
                            </div>
                            <p className="text-slate-600 leading-relaxed">
                                Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of such external sites.
                            </p>
                        </section>

                        {/* Section 8 */}
                        <section id="childrens-privacy" className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200/80 scroll-mt-36">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="w-8 h-8 rounded-xl bg-brand-navy text-white flex items-center justify-center font-bold text-sm">8</span>
                                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Children’s Privacy</h2>
                            </div>
                            <p className="text-slate-600 leading-relaxed">
                                SoftClinch does not knowingly collect or solicit data from individuals under the age of 16. If we learn that we have collected personal data from a minor, we will delete it promptly.
                            </p>
                        </section>

                        {/* Section 9 */}
                        <section id="changes" className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200/80 scroll-mt-36">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="w-8 h-8 rounded-xl bg-brand-navy text-white flex items-center justify-center font-bold text-sm">9</span>
                                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Changes to This Policy</h2>
                            </div>
                            <p className="text-slate-600 leading-relaxed">
                                We may update this Privacy Policy periodically. Changes will be posted on this page with the revised effective date. Please review it regularly for updates.
                            </p>
                        </section>

                        {/* Section 10 */}
                        <section id="contact-us" className="bg-brand-navy rounded-2xl p-6 sm:p-8 text-white shadow-xl scroll-mt-36 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-terracotta/10 rounded-full blur-2xl pointer-events-none" />
                            <div className="relative z-10">
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="w-8 h-8 rounded-xl bg-brand-terracotta text-white flex items-center justify-center font-bold text-sm">10</span>
                                    <h2 className="text-xl sm:text-2xl font-bold">Contact Us</h2>
                                </div>
                                <p className="text-slate-300 mb-6">
                                    For questions or concerns regarding this Privacy Policy, please contact:
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
                                        <a href="tel:+919445179931" className="hover:text-white transition-colors">
                                            +91-9445179931
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
