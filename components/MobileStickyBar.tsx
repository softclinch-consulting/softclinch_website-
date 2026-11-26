"use client";

import Link from "next/link";
import { Phone, MessageCircle, Calendar } from "lucide-react";
import { trackPhoneClick, trackWhatsAppClick, trackCtaClick } from "@/lib/analytics";

export function MobileStickyBar() {
  const whatsappUrl =
    "https://wa.me/919445679878?text=Hi%20SoftClinch%2C%20I%20would%20like%20to%20discuss%20a%20project%20requirement.";

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 px-3 py-2 shadow-[0_-4px_20px_rgba(0,0,0,0.08)]">
      <div className="grid grid-cols-3 gap-2">
        {/* Call button */}
        <a
          href="tel:+919445679878"
          data-location="mobile_sticky_bar"
          onClick={() =>
            trackPhoneClick({
              cta_location: "mobile_sticky_bar",
              cta_text: "Call SoftClinch",
              phone_number: "+91 94456 79878",
            })
          }
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-slate-50 text-slate-800 border border-slate-200 font-semibold text-xs active:bg-slate-100 transition-colors"
        >
          <Phone size={18} className="text-brand-navy mb-0.5" />
          <span>Call</span>
        </a>

        {/* WhatsApp button */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          data-location="mobile_sticky_bar"
          onClick={() =>
            trackWhatsAppClick({
              cta_location: "mobile_sticky_bar",
              cta_text: "WhatsApp SoftClinch",
              link_url: whatsappUrl,
            })
          }
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-200 font-semibold text-xs active:bg-emerald-100 transition-colors"
        >
          <MessageCircle size={18} className="text-emerald-600 mb-0.5" />
          <span>WhatsApp</span>
        </a>

        {/* Consult button */}
        <Link
          href="/contact"
          onClick={() =>
            trackCtaClick("Consultation", "mobile_sticky_bar")
          }
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-brand-navy text-white font-semibold text-xs active:bg-brand-navy/90 transition-colors shadow-sm"
        >
          <Calendar size={18} className="text-white mb-0.5" />
          <span>Consult</span>
        </Link>
      </div>
    </div>
  );
}
