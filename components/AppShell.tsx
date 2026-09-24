"use client";

import { ReactNode } from "react";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { SoftClinchAIWidget } from "@/components/SoftClinchAIWidget";

export function AppShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-[132px] md:pt-[132px]">{children}</main>
      <Footer />
      <SoftClinchAIWidget />
    </div>
  );
}