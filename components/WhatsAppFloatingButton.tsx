"use client";

import React, { useState } from "react";
import { MessageCircle, X } from "lucide-react";

export function WhatsAppFloatingButton() {
  const [showTooltip, setShowTooltip] = useState(true);

  const whatsappUrl =
    "https://wa.me/919445679878?text=Hi%20SoftClinch%2C%20I%20would%20like%20to%20discuss%20a%20requirement.";

  return (
    <div
      className="fixed left-6 bottom-6 z-50 flex items-center gap-2"
      style={{ filter: "drop-shadow(0 10px 25px rgba(34, 197, 94, 0.35))" }}
    >
      {/* Tooltip on desktop */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-white text-slate-800 text-xs font-semibold px-3.5 py-2 rounded-full shadow-lg border border-slate-100 animate-in fade-in slide-in-from-left duration-300">
          <span>Need quick answers? Chat on WhatsApp</span>
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setShowTooltip(false);
            }}
            aria-label="Dismiss tooltip"
            className="text-slate-400 hover:text-slate-600 transition-colors ml-1"
          >
            <X size={12} />
          </button>
        </div>
      )}

      {/* Pulsing button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with SoftClinch on WhatsApp (+91 94456 79878)"
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white shadow-xl transition-all duration-300 hover:scale-110 active:scale-95"
      >
        {/* Radar ping ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-75 animate-ping -z-10 group-hover:opacity-0" />

        {/* WhatsApp Icon */}
        <MessageCircle className="w-7 h-7 fill-white/20 stroke-white stroke-[2.2]" />

        {/* Online Indicator Badge */}
        <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-emerald-300 border-2 border-white rounded-full" />
      </a>
    </div>
  );
}
