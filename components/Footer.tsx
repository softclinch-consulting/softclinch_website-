"use client";
import Image from "next/image";
import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, Linkedin, Twitter, Github, ChevronRight } from 'lucide-react';

export const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-brand-navy text-white pt-20 pb-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
                    {/* Brand Section */}
                    <div className="col-span-1 lg:col-span-1">
                        <Link href="/" className="flex items-center gap-2 mb-8">
                            <Image
                                src="/softclinch.jpeg"
                                alt="SoftClinch Logo"
                                width={150}
                                height={60}
                                className="object-contain"
                                priority
                              />
                        </Link>
                        <p className="text-slate-400 leading-relaxed mb-8">
                            Engineering-led consulting firm specializing in scalable digital systems, SAP implementation, and enterprise automation solutions.
                        </p>
                        <div className="flex gap-4">
                            {[Linkedin, Twitter, Github].map((Icon, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-navy transition-colors border border-white/10"
                                >
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-bold mb-8">Solutions</h4>
                        <ul className="space-y-4">
                            {[
                                { name: 'WhatsApp Automation', path: '/whatsapp-automation' },
                                { name: 'Digital Marketing', path: '/services/digital-marketing' },
                                { name: 'Custom App Dev', path: '/services/custom-app-dev' },
                                { name: 'SAP Consulting', path: '/services/sap-consulting' },
                            ].map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.path}
                                        className="text-slate-400 hover:text-white transition-colors flex items-center gap-2 group"
                                    >
                                        <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 transition-all -ml-4 group-hover:ml-0" />
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="text-lg font-bold mb-8">Company</h4>
                        <ul className="space-y-4">
                            {[
                                { name: 'About Us', path: '/about' },
                                { name: 'Case Studies', path: '/case-studies' },
                                { name: 'Resources', path: '/resources' },
                                { name: 'Contact', path: '/contact' },
                            ].map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.path}
                                        className="text-slate-400 hover:text-white transition-colors flex items-center gap-2 group"
                                    >
                                        <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 transition-all -ml-4 group-hover:ml-0" />
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact info */}
                    <div>
                        <h4 className="text-lg font-bold mb-8">Get in Touch</h4>
                        <div className="space-y-6">
                            <div className="flex gap-4 items-start">
                                <MapPin size={20} className="text-brand-terracotta flex-shrink-0" />
                                <p className="text-slate-400 text-sm">
                                    Tech Park, IT Corridor, Bangalore, KA, India.
                                </p>
                            </div>
                            <div className="flex gap-4 items-center">
                                <Mail size={20} className="text-brand-terracotta flex-shrink-0" />
                                <p className="text-slate-400 text-sm">contact@softclinch.com</p>
                            </div>
                            <div className="flex gap-4 items-center">
                                <Phone size={20} className="text-brand-terracotta flex-shrink-0" />
                                <p className="text-slate-400 text-sm">+91 (800) 123-4567</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-slate-500">
                    <p>© {currentYear} SoftClinch Consulting Services. All rights reserved.</p>
                    <div className="flex gap-8">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};
