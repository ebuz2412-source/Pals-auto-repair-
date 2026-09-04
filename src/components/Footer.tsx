import React from "react";
import { 
  MapPin, 
  Star, 
  Calendar, 
  ArrowUp,
  Clock,
  Sparkles
} from "lucide-react";
import { SPACEBOUND_BUSINESS_INFO, SPACEBOUND_SERVICES } from "../data";

interface FooterProps {
  onSectionScroll: (sectionId: string) => void;
  onBookConsultation: () => void;
}

export default function Footer({ onSectionScroll, onBookConsultation }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#1C1917] text-[#FAF8F5] pt-20 pb-12 border-t border-[#2B2723]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-[#2D2926] text-left">
          
          {/* Brand & Narrative Column */}
          <div className="lg:col-span-5 space-y-5">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-[#B5905C] text-[#1C1917] flex items-center justify-center font-serif text-lg font-bold">
                S
              </div>
              <div>
                <span className="block font-serif text-xl font-bold tracking-[0.16em] uppercase text-white">
                  SPACEBOUND INTERIORS
                </span>
                <span className="block text-[9px] font-mono tracking-[0.25em] text-[#B5905C] uppercase font-semibold">
                  Interior Designer • Ajah, Lagos
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#A89F91] font-sans font-light leading-relaxed max-w-md">
              Spacebound Interiors is a premier Lagos interior design studio crafting custom residential retreats, bespoke architectural cabinetry, high-performance commercial suites, and timeless dining rooms.
            </p>

            <div className="flex items-center space-x-2 text-xs text-[#E4DCD0]">
              <div className="flex items-center text-[#B5905C]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#B5905C]" />
                ))}
              </div>
              <span className="font-mono text-[11px] text-[#A89F91]">
                5.0 Stars (1 Verified Client Review)
              </span>
            </div>

            <div className="pt-2">
              <button
                onClick={onBookConsultation}
                className="bg-[#B5905C] hover:bg-[#C8A26E] text-[#1C1917] px-6 py-3 text-xs font-semibold tracking-[0.14em] uppercase transition-colors shadow-xs cursor-pointer flex items-center space-x-2"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Request Consultation</span>
              </button>
            </div>
          </div>

          {/* 4 Core Services Column */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif text-base font-bold text-white uppercase tracking-wider">
              Interior Services
            </h4>
            <ul className="space-y-2.5 text-xs text-[#A89F91]">
              {SPACEBOUND_SERVICES.map((serv) => (
                <li key={serv.id}>
                  <button
                    onClick={() => onSectionScroll("services")}
                    className="hover:text-[#B5905C] transition-colors cursor-pointer text-left"
                  >
                    {serv.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Studio Location & Access Column */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-serif text-base font-bold text-white uppercase tracking-wider">
              Studio Location
            </h4>
            
            <div className="space-y-3 text-xs text-[#A89F91]">
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-[#B5905C] flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed text-white">
                  {SPACEBOUND_BUSINESS_INFO.address}
                </span>
              </div>

              <div className="flex items-start space-x-2.5">
                <Clock className="w-4 h-4 text-[#B5905C] flex-shrink-0 mt-0.5" />
                <span>{SPACEBOUND_BUSINESS_INFO.openingHours}</span>
              </div>

              <div className="p-3 bg-[#24201D] border border-[#2D2926] text-[11px] text-[#A89F91]">
                Serving Abraham Adesanya, Ajah, Lekki Peninsula, Victoria Island, Ikoyi, and all Lagos environs.
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#7D7569]">
          <div>
            © {new Date().getFullYear()} Spacebound Interiors. All rights reserved. Interior Designer in Estate, Abraham Adesanya, Ajah, Lagos 106104, Nigeria.
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-1.5 text-[#A89F91] hover:text-[#B5905C] transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
