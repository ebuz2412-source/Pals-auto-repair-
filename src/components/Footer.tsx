import React from "react";
import { Phone, MapPin, Award, CheckCircle2 } from "lucide-react";
import { CALGARY_LOCATION } from "../data";

interface FooterProps {
  onSectionScroll: (sectionId: string) => void;
}

export default function Footer({ onSectionScroll }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-950 text-zinc-400 border-t border-zinc-900 py-16 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top brand grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 border-b border-zinc-900 pb-12 mb-12">
          
          {/* Brand Intro Column */}
          <div className="md:col-span-4 space-y-4">
            <div 
              id="footer-logo"
              className="flex items-center space-x-2 cursor-pointer"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <div className="w-8 h-8 bg-red-600 rounded flex items-center justify-center text-white font-mono font-bold text-base tracking-wider">
                P
              </div>
              <div>
                <span className="block text-base font-bold font-sans tracking-tight text-white leading-none">
                  PAL AUTO
                </span>
                <span className="block text-[10px] font-semibold font-mono tracking-widest text-red-500 uppercase leading-none mt-1">
                  REPAIRS
                </span>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-zinc-500 leading-relaxed max-w-sm">
              An independent, locally owned Red Seal vehicle service facility in Calgary, Alberta. Engineered to keep your ride safe, reliable, and winter-ready with dealership-grade scanning diagnostics and transparent digital reports.
            </p>
          </div>

          {/* Quick Jump Column */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              {[
                { name: "Services Catalogue", target: "services" },
                { name: "Why Choose Us", target: "why-choose-us" },
                { name: "Free Quote Estimator", target: "quote" },
                { name: "Client Reviews", target: "testimonials" },
                { name: "Our Workshop Story", target: "about" },
                { name: "Diagnostic Blueprints", target: "gallery" },
                { name: "Contact & Hours", target: "contact" }
              ].map((link, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => onSectionScroll(link.target)}
                    className="hover:text-white hover:underline transition-all text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Business Hours Column */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider">
              Business Hours
            </h4>
            <ul className="space-y-3 text-xs">
              {CALGARY_LOCATION.hours.map((h, idx) => (
                <li key={idx} className="flex justify-between border-b border-zinc-900/60 pb-1.5 last:border-0 last:pb-0">
                  <span className="text-zinc-500">{h.days}</span>
                  <span className="text-zinc-300 font-mono text-right">{h.times}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Regulatory & Trade Badges Column */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider">
              Accreditations
            </h4>
            
            <div className="space-y-3">
              <div className="flex items-start space-x-2 bg-zinc-900/40 p-2.5 rounded-lg border border-zinc-850">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 mt-0.5 flex-shrink-0" />
                <span className="text-[10px] font-sans leading-relaxed text-zinc-400">
                  <strong>AMVIC Licensed:</strong> Consumer protection under strict Alberta motor vehicle industry regulations.
                </span>
              </div>

              <div className="flex items-start space-x-2 bg-zinc-900/40 p-2.5 rounded-lg border border-zinc-850">
                <Award className="w-3.5 h-3.5 text-red-500 mt-0.5 flex-shrink-0" />
                <span className="text-[10px] font-sans leading-relaxed text-zinc-400">
                  <strong>Red Seal Standard:</strong> Supervised by certified interprovincial Canadian Journeymen.
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom fine prints */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-[10px] font-mono text-zinc-600 gap-4">
          <p className="text-center sm:text-left">
            © {currentYear} Pal Auto Repairs. All Rights Reserved. Private Independent Shop.
          </p>
          <div className="flex space-x-4">
            <span className="text-zinc-600">AMVIC Registration: #7281A-CGY</span>
            <span>•</span>
            <span className="text-zinc-600">AMA Certified Partner</span>
            <span>•</span>
            <span className="text-zinc-600">Designed for Calgary, AB</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
