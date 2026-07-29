"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MapPin, ChevronRight, Instagram, Facebook } from "lucide-react";
import { CONTACT } from "@/lib/contact";
import { assetPath } from "@/lib/asset";

const ThreadsIcon = ({ size = 24, ...props }: React.ComponentProps<"svg"> & { size?: number }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 192 192"
        fill="currentColor"
        {...props}
    >
        <path d="M141.537 88.9883C140.71 88.5919 139.87 88.2104 139.019 87.8451C137.537 60.5382 122.616 44.905 97.5619 44.745C97.4484 44.7443 97.3355 44.7443 97.222 44.7443C82.2364 44.7443 69.7731 51.1409 62.102 62.7807L75.881 72.2328C81.6116 63.5383 90.6052 61.6848 97.2286 61.6848C97.3051 61.6848 97.3819 61.6848 97.4576 61.6855C105.707 61.7381 111.932 64.1366 115.961 68.814C118.893 72.2193 120.854 76.925 121.825 82.8638C114.511 81.6207 106.601 81.2385 98.145 81.7233C74.3247 83.0954 59.0111 96.9879 60.0396 116.292C60.5615 126.084 65.4397 134.508 73.775 140.011C80.8224 144.663 89.899 146.938 99.3323 146.423C111.79 145.74 121.563 140.987 128.381 132.296C133.559 125.696 136.834 117.143 138.28 106.366C144.217 109.949 148.617 114.664 151.047 120.332C155.179 129.967 155.42 145.8 142.501 158.708C131.182 170.016 117.576 174.908 97.0135 175.059C74.2042 174.89 56.9538 167.575 45.7381 153.317C35.2355 139.966 29.8077 120.682 29.6052 96C29.8077 71.3178 35.2355 52.0336 45.7381 38.6827C56.9538 24.4249 74.2039 17.11 97.0132 16.9405C119.988 17.1113 137.539 24.4614 149.184 38.788C154.894 45.8136 159.199 54.6488 162.037 64.9503L178.184 60.6422C174.744 47.9622 169.331 37.0357 161.965 27.974C147.036 9.60668 125.202 0.195148 97.0695 0H96.9569C68.8816 0.19447 47.2921 9.6418 32.7883 28.0793C19.8819 44.4864 13.2244 67.3157 13.0007 95.9325L13 96L13.0007 96.0675C13.2244 124.684 19.8819 147.514 32.7883 163.921C47.2921 182.358 68.8816 191.806 96.9569 192H97.0695C122.03 191.827 139.624 185.292 154.118 170.811C173.081 151.866 172.51 128.119 166.26 113.541C161.776 103.087 153.227 94.5962 141.537 88.9883ZM98.4405 129.507C88.0005 130.095 77.1544 125.409 76.6196 115.372C76.2232 107.93 81.9158 99.626 99.0812 98.6368C101.047 98.5234 102.976 98.468 104.871 98.468C111.106 98.468 116.939 99.0737 122.242 100.233C120.264 124.935 108.662 128.946 98.4405 129.507Z" />
    </svg>
);

export const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-brand-navy text-white pt-20 pb-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
                    <div className="col-span-1 lg:col-span-1">
                        <Link href="/" className="flex items-center gap-2 mb-8">
                            <Image
                                src={assetPath("/softclinch.jpeg")}
                                alt="SoftClinch Logo"
                                width={150}
                                height={60}
                                className="object-contain"
                                priority
                            />
                        </Link>
                        <p className="text-slate-400 leading-relaxed mb-8">
                            SoftClinch is a technology-driven consulting and digital solutions company specializing in SAP consulting, enterprise automation, SEO, AI-powered growth strategies, WhatsApp automation, and scalable software development solutions for modern businesses.
                        </p>
                        <div className="flex gap-4">
                            {[
                                { Icon: Facebook, href: 'https://www.facebook.com/profile.php?id=61585112649434', label: 'Facebook' },
                                { Icon: Instagram, href: 'https://www.instagram.com/softclinch/?hl=en', label: 'Instagram' },
                                { Icon: ThreadsIcon, href: 'https://www.threads.com/@softclinch?xmt=AQG0YGTQNLGQmWquCThvASSNbce7sVucAGgXk2vRRy9dXOE', label: 'Threads' },
                            ].map(({ Icon, href, label }) => (
                                <a
                                    key={label}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={label}
                                    className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-navy transition-colors border border-white/10"
                                >
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold mb-8">Solutions</h4>
                        <ul className="space-y-4">
                            {[
                                { name: 'SAP Implementation & Rollout', path: '/services/sap-consulting' },
                                { name: 'SAP AMS Support', path: '/sap-ams-support' },
                                { name: 'Custom App Development', path: '/custom-application-development' },
                                { name: 'AI-Powered Business Systems', path: '/services/ai-powered-business-systems' },
                                { name: 'Digital Marketing', path: '/digital-marketing' },
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

                    <div>
                        <h4 className="text-lg font-bold mb-8">Company</h4>
                        <ul className="space-y-4">
                            {[
                                { name: 'About Us', path: '/about' },
                                { name: 'Services', path: '/services' },
                                { name: 'Enterprise', path: '/services/enterprise-software' },
                                { name: 'Blog', path: '/blog' },
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

                    <div>
                        <h4 className="text-lg font-bold mb-8">Get in Touch</h4>
                        <div className="space-y-6">
                            <div className="flex gap-4 items-start">
                                <MapPin size={20} className="text-brand-terracotta flex-shrink-0" />
                                <p className="text-slate-400 text-sm">{CONTACT.address}</p>
                            </div>
                            <div className="flex gap-4 items-center">
                                <Mail size={20} className="text-brand-terracotta flex-shrink-0" />
                                <p className="text-slate-400 text-sm">{CONTACT.email}</p>
                            </div>
                            <div className="flex gap-4 items-center">
                                <Phone size={20} className="text-brand-terracotta flex-shrink-0" />
                                <p className="text-slate-400 text-sm">{CONTACT.phone}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-slate-500">
                    <p>© {currentYear} SoftClinch Consulting Services. All rights reserved.</p>
                    <div className="flex gap-8">
                        <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="/terms-of-use" className="hover:text-white transition-colors">Terms of Use</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};
