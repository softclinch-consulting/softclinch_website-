import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, MessageCircle, Phone, ArrowLeft } from "lucide-react";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Thank You | SoftClinch Consulting Services",
  description: "Thank you for reaching out to SoftClinch. Our enterprise consultants will contact you within 24 hours.",
  canonicalPath: "/thank-you",
  noIndex: true,
  robots: {
    index: false,
    follow: false,
  },
});

export default function ThankYouPage() {
  return (
    <div className="min-h-[75vh] flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div className="max-w-2xl w-full bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 shadow-xl text-center">
        <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
          <CheckCircle2 size={44} />
        </div>

        <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold uppercase tracking-widest mb-4">
          Request Received
        </span>

        <h1 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 mb-4">
          Thank You for Contacting SoftClinch
        </h1>

        <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-8 max-w-lg mx-auto">
          We have received your requirements. A senior solution consultant will review your enquiry and contact you within 24 business hours.
        </p>

        <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200/80 mb-8 text-left space-y-3">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
            Need an immediate response?
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
            <a
              href="https://wa.me/919445679878?text=Hi%20SoftClinch%2C%20I%20just%20submitted%20the%20consultation%20form%20and%20would%20like%20a%20quick%20response."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-bold text-emerald-600 hover:text-emerald-700 transition-colors"
            >
              <MessageCircle size={18} />
              Chat on WhatsApp (+91 94456 79878)
            </a>
            <a
              href="tel:+919445679878"
              className="inline-flex items-center gap-2 text-sm font-bold text-brand-navy hover:text-brand-terracotta transition-colors"
            >
              <Phone size={18} />
              Call +91 94456 79878
            </a>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-brand-navy text-white rounded-full font-bold text-sm hover:bg-brand-navy/90 transition-all shadow-md"
          >
            <ArrowLeft size={16} /> Return to Homepage
          </Link>
          <Link
            href="/services/sap-consulting"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 bg-slate-100 text-slate-800 rounded-full font-bold text-sm hover:bg-slate-200 transition-all"
          >
            Explore SAP Services
          </Link>
        </div>
      </div>
    </div>
  );
}
