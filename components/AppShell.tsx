"use client";

import { ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { SoftClinchAIWidget } from "@/components/SoftClinchAIWidget";
import { WhatsAppFloatingButton } from "@/components/WhatsAppFloatingButton";
import { MobileStickyBar } from "@/components/MobileStickyBar";

export function AppShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isLandingPage = pathname?.startsWith("/lp");

  if (isLandingPage) {
    return (
      <div className="min-h-screen flex flex-col bg-slate-50">
        <header className="border-b border-slate-200 bg-white py-4 px-4 sm:px-8 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-xl font-bold tracking-tight text-brand-navy">SoftClinch</span>
            </Link>
            <a
              href="tel:+919445679878"
              className="inline-flex items-center gap-2 rounded-full border border-brand-navy/20 bg-brand-navy/5 px-4 py-2 text-xs font-semibold text-brand-navy transition hover:bg-brand-navy hover:text-white"
            >
              <span>Call Us: +91 94456 79878</span>
            </a>
          </div>
        </header>
        <main className="flex-grow">{children}</main>
        <footer className="border-t border-slate-200 bg-white py-6 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} SoftClinch Technologies. All rights reserved. Ashok Nagar, Chennai, Tamil Nadu 600083.
        </footer>
        <WhatsAppFloatingButton />
        <MobileStickyBar />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col pb-16 md:pb-0">
      <Header />
      <main className="flex-grow pt-[132px] md:pt-[132px]">{children}</main>
      {pathname !== "/contact" && (
        <section className="bg-white px-4 py-10 sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 rounded-3xl bg-slate-50 px-6 py-8 text-center sm:flex-row sm:px-10 sm:text-left">
            <div>
              <h2 className="text-xl font-bold text-brand-navy">Have a question?</h2>
              <p className="mt-1 text-slate-600">Get in touch with our team.</p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-brand-navy px-7 py-3 font-semibold text-white transition hover:bg-brand-navy/90"
            >
              Contact Us
            </Link>
          </div>
        </section>
      )}
      <Footer />
      <SoftClinchAIWidget />
      <WhatsAppFloatingButton />
      <MobileStickyBar />
    </div>
  );
}