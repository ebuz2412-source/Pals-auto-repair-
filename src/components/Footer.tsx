import React from "react";
import { 
  ArrowUp, 
  MapPin, 
  Phone, 
  Mail, 
  Star, 
  MessageSquare,
  Sparkles
} from "lucide-react";
import { ESTIE_BUSINESS_INFO, getWhatsAppUrl } from "../data";

interface FooterProps {
  onSectionScroll: (sectionId: string) => void;
  onBookConsultation: () => void;
}

export default function Footer({ onSectionScroll, onBookConsultation }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#1C1917] text-[#D6CABE] pt-20 pb-12 border-t border-[#2D2926]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-[#2D2926] text-left">
          
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-5">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xs bg-[#2B2723] text-[#FAF8F5] flex items-center justify-center font-serif text-lg tracking-widest border border-[#B5905C]/40">
                E
              </div>
              <div>
                <span className="block font-serif text-xl sm:text-2xl font-bold tracking-[0.16em] text-white uppercase">
                  ESTIE INTERIOR
                </span>
                <span className="block text-[9px] font-sans tracking-[0.25em] text-[#B5905C] uppercase font-semibold">
                  Sangotedo, Lagos
                </span>
              </div>
            </div>

            <p className="text-xs text-[#A89F91] font-sans font-light leading-relaxed">
              Luxury interior design, bespoke window drapery, motorized blinds, tailored bedding, and surface finishing studio based at Km 46 Lekki-Epe Expressway, Beside Safeway Hospital, Sangotedo, Lagos.
            </p>

            <div className="flex items-center space-x-2 text-xs text-[#B5905C] pt-1">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#B5905C]" />
                ))}
              </div>
              <span className="font-mono text-white">5.0 Star Rating</span>
              <span className="text-[#7D7569]">• 4 Client Reviews</span>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#B5905C] font-semibold">
              Explore
            </h4>
            <ul className="space-y-2 text-xs font-sans">
              <li>
                <button
                  onClick={() => onSectionScroll("hero")}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSectionScroll("about")}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  About Studio
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSectionScroll("services")}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSectionScroll("portfolio")}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Portfolio
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSectionScroll("gallery")}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSectionScroll("contact")}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Contact & Map
                </button>
              </li>
            </ul>
          </div>

          {/* Services List (All 7 required services) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#B5905C] font-semibold">
              Our Services
            </h4>
            <ul className="space-y-2 text-xs font-sans text-[#A89F91]">
              <li className="hover:text-white transition-colors">Commercial Interior Design</li>
              <li className="hover:text-white transition-colors">Flooring Selection</li>
              <li className="hover:text-white transition-colors">Window Design & Styling</li>
              <li className="hover:text-white transition-colors">Bespoke Bedding Ensembles</li>
              <li className="hover:text-white transition-colors">Luxury & Motorized Blinds</li>
              <li className="hover:text-white transition-colors">Curtains & Bespoke Drapery</li>
              <li className="hover:text-white transition-colors">All Kinds of Window Treatments</li>
            </ul>
          </div>

          {/* Showroom & Contact */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#B5905C] font-semibold">
              Showroom Location
            </h4>
            <div className="space-y-3 text-xs text-[#A89F91]">
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-[#B5905C] flex-shrink-0 mt-0.5" />
                <span>Km 46 Lekki-Epe Express Way, Beside Safeway Hospital, Sangotedo, East, Lagos</span>
              </div>
              <div className="flex items-start space-x-2.5">
                <Phone className="w-4 h-4 text-[#B5905C] flex-shrink-0 mt-0.5" />
                <a href={`tel:${ESTIE_BUSINESS_INFO.phoneRaw}`} className="hover:text-white">
                  {ESTIE_BUSINESS_INFO.phone}
                </a>
              </div>
              <div className="flex items-start space-x-2.5">
                <MessageSquare className="w-4 h-4 text-[#2E7D32] flex-shrink-0 mt-0.5" />
                <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="hover:text-white text-[#81C784]">
                  WhatsApp Showroom Desk
                </a>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onBookConsultation}
                className="w-full bg-[#FAF8F5] hover:bg-white text-[#1C1917] py-2.5 px-4 text-xs font-semibold tracking-[0.14em] uppercase transition-all cursor-pointer text-center font-sans"
              >
                Book a Consultation
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#7D7569]">
          <p>
            © {new Date().getFullYear()} ESTIE INTERIOR. All Rights Reserved. Sangotedo, Lekki, Lagos, Nigeria.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center space-x-2 hover:text-[#FAF8F5] transition-colors cursor-pointer group"
          >
            <span className="uppercase font-mono text-[10px] tracking-wider">Back to top</span>
            <div className="w-7 h-7 rounded-xs bg-[#2B2723] flex items-center justify-center text-[#B5905C] group-hover:bg-[#B5905C] group-hover:text-[#1C1917] transition-colors">
              <ArrowUp className="w-3.5 h-3.5" />
            </div>
          </button>
        </div>

      </div>
    </footer>
  );
}
