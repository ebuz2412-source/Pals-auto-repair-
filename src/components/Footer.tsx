import React from "react";
import { 
  MapPin, 
  Clock, 
  Phone, 
  MessageSquare, 
  Compass, 
  ArrowUp,
  Sparkles,
  ShieldCheck,
  ChevronRight
} from "lucide-react";
import { BUSINESS_INFO, GLASS_SERVICES, SERVICE_AREAS_LAGOS } from "../data";

interface FooterProps {
  onSectionScroll: (sectionId: string) => void;
  onRequestQuote: () => void;
}

export default function Footer({ onSectionScroll, onRequestQuote }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer id="footer" className="bg-[#070A0F] text-slate-300 border-t border-white/10 pt-16 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-white/10">
          {/* Col 1: Business Identity & Overview */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-slate-700 via-slate-800 to-slate-950 border border-white/20 flex items-center justify-center">
                <div className="w-4 h-4 border border-sky-300 rotate-45 flex items-center justify-center">
                  <div className="w-2 h-2 bg-white/70"></div>
                </div>
              </div>
              <div>
                <span className="block font-heading text-lg font-bold text-white tracking-tight">
                  {BUSINESS_INFO.name}
                </span>
                <span className="block text-[10px] uppercase tracking-widest text-sky-400 font-semibold">
                  {BUSINESS_INFO.tagline}
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">
              {BUSINESS_INFO.shortDescription}
            </p>

            <div className="p-3 rounded-lg bg-white/5 border border-white/10 text-xs italic text-slate-300">
              <strong className="text-white block not-italic font-bold uppercase mb-0.5">{BUSINESS_INFO.brandMessage}</strong>
              {BUSINESS_INFO.additionalMessage}
            </div>

            <div className="space-y-2 pt-1 text-xs">
              <div className="flex items-start space-x-2.5 text-slate-300">
                <MapPin className="w-4 h-4 text-sky-400 mt-0.5 flex-shrink-0" />
                <span>{BUSINESS_INFO.address}</span>
              </div>
              <div className="flex items-center space-x-2.5 text-emerald-400 font-medium">
                <Clock className="w-4 h-4 flex-shrink-0" />
                <span>Open 24 Hours • Call: 08138511873 / 09014120207</span>
              </div>
            </div>

            {/* Social links & Direct buttons */}
            <div className="pt-1 flex flex-wrap items-center gap-2 text-xs">
              <a
                href={BUSINESS_INFO.tiktokUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-2.5 py-1 rounded bg-white/10 hover:bg-white/15 text-slate-200 text-xs border border-white/10"
              >
                TikTok: @{BUSINESS_INFO.tiktok}
              </a>
              <a
                href={BUSINESS_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-2.5 py-1 rounded bg-white/10 hover:bg-white/15 text-pink-300 text-xs border border-white/10"
              >
                Instagram: @{BUSINESS_INFO.instagram}
              </a>
            </div>

            {/* Direct buttons */}
            <div className="flex flex-wrap items-center gap-2 pt-2">
              <a
                id="footer-whatsapp-btn"
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1.5 px-3 py-2 rounded-lg bg-emerald-600/90 hover:bg-emerald-600 text-white text-xs font-semibold transition-all"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp: 09014120207</span>
              </a>

              <a
                id="footer-directions-btn"
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1.5 px-3 py-2 rounded-lg bg-white/10 hover:bg-white/15 text-slate-200 text-xs font-semibold border border-white/10 transition-all"
              >
                <Compass className="w-3.5 h-3.5 text-sky-400" />
                <span>Get Directions</span>
              </a>

              <a
                id="footer-call-btn"
                href={BUSINESS_INFO.phoneLink}
                className="inline-flex items-center space-x-1.5 px-3 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold border border-white/20 transition-all"
              >
                <Phone className="w-3.5 h-3.5 text-sky-400" />
                <span>Call Line 1</span>
              </a>
            </div>
          </div>

          {/* Col 2: Services Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-heading text-xs font-bold text-white uppercase tracking-wider">
              Glass & Mirror Services
            </h4>
            <ul className="space-y-2 text-xs">
              {GLASS_SERVICES.map((s) => (
                <li key={s.id}>
                  <button
                    id={`footer-service-${s.id}`}
                    onClick={() => onSectionScroll("services")}
                    className="hover:text-white transition-colors flex items-center space-x-1.5 text-slate-400 hover:translate-x-1 duration-200 cursor-pointer"
                  >
                    <ChevronRight className="w-3 h-3 text-sky-400" />
                    <span>{s.categoryLabel}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Quick Navigation */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-heading text-xs font-bold text-white uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <button
                  id="footer-nav-hero"
                  onClick={() => onSectionScroll("hero")}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  id="footer-nav-about"
                  onClick={() => onSectionScroll("about")}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  About Workshop
                </button>
              </li>
              <li>
                <button
                  id="footer-nav-services"
                  onClick={() => onSectionScroll("services")}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  All Services
                </button>
              </li>
              <li>
                <button
                  id="footer-nav-projects"
                  onClick={() => onSectionScroll("projects")}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Completed Projects
                </button>
              </li>
              <li>
                <button
                  id="footer-nav-why-us"
                  onClick={() => onSectionScroll("why-us")}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Why Choose Us
                </button>
              </li>
              <li>
                <button
                  id="footer-nav-calculator"
                  onClick={onRequestQuote}
                  className="text-sky-400 hover:text-sky-300 transition-colors font-medium cursor-pointer"
                >
                  Glass Calculator
                </button>
              </li>
              <li>
                <button
                  id="footer-nav-contact"
                  onClick={() => onSectionScroll("contact")}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Contact & Map
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: SEO Areas & Service Coverage in Lagos */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-heading text-xs font-bold text-white uppercase tracking-wider">
              Service Areas in Lagos
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              We deliver cut-to-size glass and provide on-site installation across all parts of Lagos State:
            </p>
            <div className="flex flex-wrap gap-1.5 pt-1">
              {SERVICE_AREAS_LAGOS.map((area, idx) => (
                <span
                  key={idx}
                  className="text-[11px] px-2 py-0.5 rounded bg-white/5 border border-white/10 text-slate-300"
                >
                  {area}
                </span>
              ))}
            </div>

            <div className="pt-3 border-t border-white/10 text-[11px] text-slate-400">
              <span className="text-slate-300 font-semibold block mb-1">Keywords:</span>
              Glass and mirror shop in Lagos, Glass vendor in Lagos, Mirror vendor Lagos, Glass doors Lagos, Office glass partitions Lagos, Custom mirrors Lagos, Glass installation Lagos, Mirror installation Lagos, Glass and mirror shop Mushin.
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} {BUSINESS_INFO.name}. {BUSINESS_INFO.address}. All rights reserved.</p>

          <button
            id="back-to-top-btn"
            onClick={scrollToTop}
            className="flex items-center space-x-1.5 text-slate-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/5 cursor-pointer"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
