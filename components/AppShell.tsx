"use client";

import { usePathname } from "next/navigation";
import { ReactNode } from "react";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { SoftClinchAIWidget } from "@/components/SoftClinchAIWidget";

export function AppShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const normalizedPathname = pathname.replace(/\/+$/, "") || "/";
  const isStandaloneCommercePage = normalizedPathname === "/custom-commerce-development";

  if (isStandaloneCommercePage) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="pt-[132px] md:pt-[132px]">{children}</main>
        <SoftClinchAIWidget />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-[132px] md:pt-[132px]">{children}</main>
      <Footer />
      <SoftClinchAIWidget />
    </div>
  );
}