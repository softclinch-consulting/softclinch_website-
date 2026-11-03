"use client";

import { ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { SoftClinchAIWidget } from "@/components/SoftClinchAIWidget";
import { WhatsAppFloatingButton } from "@/components/WhatsAppFloatingButton";

export function AppShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen flex flex-col">
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
    </div>
  );
}