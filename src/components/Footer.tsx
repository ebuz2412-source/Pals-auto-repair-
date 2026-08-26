import React from "react";
import { 
  Car, 
  MapPin, 
  PhoneCall, 
  MessageSquare, 
  Mail, 
  Sparkles, 
  ShieldCheck, 
  ArrowUp 
} from "lucide-react";
import { BUSINESS_INFO, getWhatsAppUrl, FLEET_CATEGORIES } from "../data";

interface FooterProps {
  onSectionScroll: (sectionId: string) => void;
}

export default function Footer({ onSectionScroll }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-zinc-950 text-zinc-400 border-t border-zinc-800/80 pt-16 pb-12 font-sans relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-zinc-800/80 text-left">
          {/* Brand & Location Column (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center space-x-3 cursor-pointer" onClick={scrollToTop}>
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-yellow-600 text-zinc-950 flex items-center justify-center font-bold text-xl shadow-lg shadow-amber-500/20">
                <Car className="w-5 h-5 text-zinc-950" />
              </div>
              <div>
                <span className="block text-lg font-black tracking-tight text-white uppercase font-sans">
                  LUXURY CAR RENTALS
                </span>
                <span className="block text-[10px] font-mono tracking-widest text-amber-400 uppercase font-semibold">
                  VICTORIA ISLAND • LAGOS
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-sans">
              Nigeria's premier luxury and exotic car rental service. Delivering chauffeured executive saloons, luxury SUVs, high-performance sports cars, VIP vans, and exotic supercars.
            </p>

            <div className="flex items-start space-x-2.5 text-xs text-zinc-300 pt-1">
              <MapPin className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
              <span>{BUSINESS_INFO.address}</span>
            </div>
          </div>

          {/* Quick Fleet Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white">
              Fleet Categories
            </h4>
            <ul className="space-y-2 text-xs">
              {FLEET_CATEGORIES.filter(c => c.id !== "all").map((cat) => (
                <li key={cat.id}>
                  <button
                    onClick={() => onSectionScroll("fleet")}
                    className="hover:text-amber-400 transition-colors text-left"
                  >
                    {cat.label} ({cat.count})
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Luxury Services Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white">
              Luxury Services
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => onSectionScroll("services")} className="hover:text-amber-400 transition-colors text-left">
                  Business Trips & Corporate Mobility
                </button>
              </li>
              <li>
                <button onClick={() => onSectionScroll("services")} className="hover:text-amber-400 transition-colors text-left">
                  Weddings & Bridal Entourages
                </button>
              </li>
              <li>
                <button onClick={() => onSectionScroll("services")} className="hover:text-amber-400 transition-colors text-left">
                  Airport VIP Meet & Greet
                </button>
              </li>
              <li>
                <button onClick={() => onSectionScroll("services")} className="hover:text-amber-400 transition-colors text-left">
                  Special Occasions & Milestone Galas
                </button>
              </li>
              <li>
                <button onClick={() => onSectionScroll("services")} className="hover:text-amber-400 transition-colors text-left">
                  Vacations & Leisure Escapes
                </button>
              </li>
              <li>
                <button onClick={() => onSectionScroll("services")} className="hover:text-amber-400 transition-colors text-left">
                  Executive Chauffeur & Armed Escort
                </button>
              </li>
            </ul>
          </div>

          {/* Direct Channels (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white">
              VIP Contact
            </h4>
            <div className="space-y-2.5 text-xs">
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="flex items-center space-x-2 text-zinc-300 hover:text-amber-400 transition-colors"
              >
                <PhoneCall className="w-3.5 h-3.5 text-amber-400" />
                <span>{BUSINESS_INFO.phone}</span>
              </a>

              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp Desk</span>
              </a>

              <a
                href={`mailto:${BUSINESS_INFO.email}`}
                className="flex items-center space-x-2 text-zinc-300 hover:text-amber-400 transition-colors truncate"
              >
                <Mail className="w-3.5 h-3.5 text-amber-400" />
                <span className="truncate">{BUSINESS_INFO.email}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Footer Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>© {new Date().getFullYear()} Luxury Car Rentals. Victoria Island, Lagos. All rights reserved.</p>
          <div className="flex items-center space-x-4">
            <span className="text-[11px] font-mono text-zinc-400">Adetokunbo Ademola St, Victoria Island, Lagos 106104</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-amber-400 transition-colors"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
