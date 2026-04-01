import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "../components/Header";
import { Footer } from "@/components/Footer";
import { CTA } from "@/components/CTA";
import { SeoJsonLd } from "@/components/SeoJsonLd";
import { DEFAULT_DESCRIPTION, DEFAULT_TITLE, SITE_NAME, getSiteUrl } from "@/lib/site";
import { organizationJsonLd, websiteJsonLd } from "@/lib/schema";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: `${DEFAULT_TITLE} | ${SITE_NAME}`,
    template: `%s | ${SITE_NAME}`,
  },
  description: DEFAULT_DESCRIPTION,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${DEFAULT_TITLE} | ${SITE_NAME}`,
    description: DEFAULT_DESCRIPTION,
    siteName: SITE_NAME,
    url: "/",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${DEFAULT_TITLE} | ${SITE_NAME}`,
    description: DEFAULT_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <SeoJsonLd data={[organizationJsonLd(), websiteJsonLd()]} />
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow pt-[132px] md:pt-[132px]">{children}</main>
          <CTA />
          <Footer />
        </div>
      </body>
    </html>
  );
}

