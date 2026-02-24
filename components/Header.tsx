"use client";
import Image from "next/image";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'WhatsApp Automation', path: '/whatsapp-automation' },

        { name: 'Contact', path: '/contact' },
    ];

    return (
        <header
            className={` fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled
                ? "bg-white backdrop-blur-md shadow-sm py-4"
                : "bg-transparent py-9"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    <Link href="/" className="flex items-center gap-3">
                        <Image
                            src="/softclinch.jpeg"
                            alt="SoftClinch Logo"
                            width={220}
                            height={80}
                            className="object-contain"
                            priority
                        />


                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.path}
                                className={`text-sm font-semibold transition-colors ${pathname === link.path ? 'text-brand-navy' : 'text-slate-600 hover:text-brand-navy'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            href="/contact"
                            className="bg-brand-navy text-white px-8 py-2.5 rounded-full text-sm font-semibold hover:bg-brand-navy/90 transition-all shadow-md hover:shadow-lg"
                        >
                            Request Consultation
                        </Link>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 text-slate-600"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-t border-slate-100 overflow-hidden"
                    >
                        <div className="px-4 py-8 space-y-6">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.path}
                                    className="text-lg font-bold text-slate-900 block"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link
                                href="/contact"
                                className="w-full bg-brand-navy text-white py-4 rounded-xl text-center font-bold block"
                                onClick={() => setIsOpen(false)}
                            >
                                Request Consultation
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};
