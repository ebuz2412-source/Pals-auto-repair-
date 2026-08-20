import React from "react";
import { MessageSquare, MapPin, HardHat, Truck, CheckCircle2 } from "lucide-react";
import { PETHONA_BUSINESS_INFO, getWhatsAppUrl } from "../data";

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
              className="flex items-center space-x-2.5 cursor-pointer"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <div className="w-9 h-9 bg-amber-500 rounded-xl flex items-center justify-center text-zinc-950 font-black text-lg">
                P
              </div>
              <div>
                <span className="block text-base font-extrabold font-sans tracking-tight text-white leading-none">
                  PETHONA INTEGRATED
                </span>
                <span className="block text-[10px] font-bold font-mono tracking-widest text-amber-400 uppercase leading-none mt-1">
                  & RESOURCES LTD • HEAVY EQUIPMENT
                </span>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed max-w-sm">
              Pethona Integrated & Resources LTD is a commercial dealer in forklifts and heavy equipment including excavators, bulldozers, wheel loaders, and backhoe loaders in Lagos and nationwide across Nigeria.
            </p>
            <div className="pt-2">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold px-4 py-2 rounded-xl transition-all"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp Sales Desk</span>
              </a>
            </div>
          </div>

          {/* Quick Navigation Column */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              {[
                { name: "Equipment Showcase", target: "inventory" },
                { name: "Why Choose Pethona", target: "why-choose-us" },
                { name: "Request a Quote", target: "inquiry" },
                { name: "About Pethona", target: "about" },
                { name: "Technical Specs", target: "specs" },
                { name: "Client Reviews", target: "testimonials" },
                { name: "Contact & Yard", target: "contact" }
              ].map((link, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => onSectionScroll(link.target)}
                    className="hover:text-amber-400 hover:underline transition-all text-left cursor-pointer"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Operating Hours Column */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider">
              Yard & Office Hours
            </h4>
            <ul className="space-y-2.5 text-xs">
              {PETHONA_BUSINESS_INFO.hours.map((h, idx) => (
                <li key={idx} className="flex justify-between border-b border-zinc-900 pb-1.5 last:border-0 last:pb-0">
                  <span className="text-zinc-400">{h.days}</span>
                  <span className="text-zinc-200 font-mono text-right">{h.times}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Yard Address & Logistics Badge */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider">
              Dealership Location
            </h4>
            <div className="space-y-3 text-xs">
              <div className="bg-zinc-900/60 p-3 rounded-xl border border-zinc-800 space-y-1">
                <div className="flex items-center text-amber-400 font-bold space-x-1.5">
                  <MapPin className="w-4 h-4" />
                  <span>Idi Oro, Lagos State</span>
                </div>
                <p className="text-[11px] text-zinc-300">
                  {PETHONA_BUSINESS_INFO.address}
                </p>
                <span className="text-[10px] font-mono text-zinc-400 block">
                  Postal Code: {PETHONA_BUSINESS_INFO.postalCode}
                </span>
              </div>

              <div className="flex items-start space-x-2 bg-zinc-900/60 p-2.5 rounded-xl border border-zinc-800">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 mt-0.5 flex-shrink-0" />
                <span className="text-[10px] font-sans leading-relaxed text-zinc-300">
                  <strong>Nationwide Machinery Supply:</strong> Assisting contractors and industrial enterprises with heavy machinery and forklift delivery across Nigeria.
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom fine prints */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-[10px] font-mono text-zinc-500 gap-4">
          <p className="text-center sm:text-left">
            © {currentYear} Pethona Integrated & Resources LTD. All Rights Reserved. Forklift & Heavy Equipment Dealer.
          </p>
          <div className="flex space-x-3">
            <span>74 Itire St, beside MFM, Idi Oro, Lagos 100253, Nigeria</span>
            <span>•</span>
            <span className="text-amber-400 font-semibold">Contact for Price</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
