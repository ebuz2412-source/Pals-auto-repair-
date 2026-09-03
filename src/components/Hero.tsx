import React from "react";
import { 
  MapPin, 
  MessageSquare, 
  ArrowRight, 
  Star, 
  Sparkles, 
  Check, 
  Eye 
} from "lucide-react";
import { ESTIE_BUSINESS_INFO, ESTIE_IMAGES, getWhatsAppUrl } from "../data";

interface HeroProps {
  onExploreServices: () => void;
  onBookConsultation: () => void;
  onViewPortfolio: () => void;
}

export default function Hero({ onExploreServices, onBookConsultation, onViewPortfolio }: HeroProps) {
  return (
    <section id="hero" className="relative pt-32 sm:pt-36 pb-20 lg:pb-28 bg-[#FAF8F5] overflow-hidden border-b border-[#E7E2D8]">
      {/* Background Soft Glow Accents */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#EFE9DF]/60 rounded-full blur-[120px] pointer-events-none -z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Badges & Location Indicator */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-8">
          {/* Subtle Location Indicator */}
          <div className="inline-flex items-center space-x-2 bg-white/90 border border-[#E7E2D8] px-3.5 py-1.5 rounded-full shadow-xs">
            <MapPin className="w-3.5 h-3.5 text-[#B5905C]" />
            <span className="text-xs font-medium text-[#4A453E] tracking-wider uppercase">
              Sangotedo, Lagos
            </span>
          </div>

          {/* 5.0 Star Rating & Craftsmanship Note */}
          <div className="inline-flex items-center space-x-2 bg-white/90 border border-[#E7E2D8] px-3.5 py-1.5 rounded-full shadow-xs text-xs font-medium text-[#4A453E]">
            <div className="flex items-center text-[#B5905C]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-[#B5905C]" />
              ))}
            </div>
            <span>5.0 Stars (4 Verified Client Reviews)</span>
          </div>
        </div>

        {/* Hero Central Header */}
        <div className="max-w-4xl mx-auto text-center space-y-6 mb-12">
          {/* Tagline Label */}
          <div className="inline-block">
            <span className="text-xs font-medium tracking-[0.28em] text-[#B5905C] uppercase font-sans border-b border-[#B5905C]/40 pb-1">
              ESTIE INTERIOR • BESPOKE DESIGN & WINDOW DRESSING
            </span>
          </div>

          {/* Headline as requested: "Transform Your Space Into Something Extraordinary" */}
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-[#1C1917] tracking-tight leading-[1.08]">
            Transform Your Space Into <br className="hidden sm:inline" />
            <span className="italic font-light text-[#B5905C]">Something Extraordinary</span>
          </h1>

          {/* Subheadline as requested */}
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-[#5E574F] font-sans font-light leading-relaxed">
            Elegant interior design, window treatments and décor solutions tailored to create beautiful, comfortable spaces.
          </p>

          {/* Call to Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            {/* Primary CTA: "Explore Our Services" */}
            <button
              id="hero-explore-services-btn"
              onClick={onExploreServices}
              className="w-full sm:w-auto bg-[#1C1917] hover:bg-[#2B2723] text-[#FAF8F5] px-8 py-4 text-xs font-semibold tracking-[0.16em] uppercase border border-[#1C1917] hover:border-[#B5905C] transition-all duration-200 shadow-sm cursor-pointer flex items-center justify-center space-x-2.5 group"
            >
              <span>Explore Our Services</span>
              <ArrowRight className="w-4 h-4 text-[#B5905C] group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Secondary CTA: "Chat on WhatsApp" */}
            <a
              id="hero-whatsapp-btn"
              href={getWhatsAppUrl("Hello ESTIE INTERIOR, I saw your showroom on the website and would like to inquire about interior design / window treatments for my space.")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-white hover:bg-[#F5F1EA] text-[#1C1917] px-8 py-4 text-xs font-semibold tracking-[0.16em] uppercase border border-[#D6CABE] hover:border-[#B5905C] transition-all duration-200 shadow-xs flex items-center justify-center space-x-2.5"
            >
              <MessageSquare className="w-4 h-4 text-[#2E7D32]" />
              <span>Chat on WhatsApp</span>
            </a>

            {/* Direct Consultation Link */}
            <button
              onClick={onBookConsultation}
              className="text-xs font-semibold tracking-[0.14em] uppercase text-[#7D7569] hover:text-[#1C1917] underline underline-offset-8 transition-colors py-2 cursor-pointer"
            >
              Or Book Consultation
            </button>
          </div>
        </div>

        {/* Full-width Stunning Hero Photography Container */}
        <div className="relative rounded-none sm:rounded-2xl overflow-hidden border border-[#E7E2D8] shadow-xl bg-[#EDE7DD] group">
          <div className="relative aspect-[16/9] sm:aspect-[21/10] w-full overflow-hidden">
            <img
              src={ESTIE_IMAGES.hero}
              alt="Estie Interior Luxury Living Space & Bespoke Window Drapery in Lagos"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-1000 ease-out"
            />

            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#1C1917]/75 via-transparent to-[#1C1917]/10"></div>

            {/* Floating Brand Badge & Location Tag */}
            <div className="absolute top-4 left-4 sm:top-6 sm:left-6">
              <div className="bg-[#FAF8F5]/90 backdrop-blur-md px-4 py-2 border border-white/60 shadow-md">
                <span className="block text-[10px] font-mono tracking-widest uppercase text-[#B5905C] font-semibold">
                  Showroom Flagship
                </span>
                <span className="block font-serif text-sm sm:text-base font-bold text-[#1C1917]">
                  Km 46 Lekki-Epe Express Way, Sangotedo
                </span>
              </div>
            </div>

            {/* Bottom Floating Value Chips */}
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 flex flex-wrap items-end justify-between gap-3 text-white">
              <div className="space-y-1 max-w-xl text-left">
                <span className="text-[11px] font-mono tracking-[0.2em] uppercase text-[#E4DCD0] font-semibold block">
                  Signature Philosophy
                </span>
                <p className="font-serif text-lg sm:text-2xl font-normal text-white drop-shadow-sm">
                  “Luxury interiors. Beautiful spaces. Exceptional finishing.”
                </p>
              </div>

              <div className="flex items-center space-x-2">
                <button
                  onClick={onViewPortfolio}
                  className="bg-white/95 hover:bg-white text-[#1C1917] px-4 py-2.5 text-xs font-semibold tracking-wider uppercase backdrop-blur-sm transition-all shadow-sm flex items-center space-x-2 cursor-pointer"
                >
                  <Eye className="w-3.5 h-3.5 text-[#B5905C]" />
                  <span>View Project Portfolio</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Feature Value Pillars below hero */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-8">
          <div className="bg-white p-5 border border-[#E7E2D8] text-left space-y-1.5 shadow-2xs">
            <span className="text-[10px] font-mono tracking-widest text-[#B5905C] uppercase font-bold block">
              Bespoke Windows
            </span>
            <h4 className="font-serif text-base font-medium text-[#1C1917]">
              Curtains & Automated Blinds
            </h4>
            <p className="text-xs text-[#7D7569] leading-relaxed">
              Tailored sheer drapery, blackout velvets, and smart motorized shading.
            </p>
          </div>

          <div className="bg-white p-5 border border-[#E7E2D8] text-left space-y-1.5 shadow-2xs">
            <span className="text-[10px] font-mono tracking-widest text-[#B5905C] uppercase font-bold block">
              Commercial Design
            </span>
            <h4 className="font-serif text-base font-medium text-[#1C1917]">
              Offices, Boardrooms & Retail
            </h4>
            <p className="text-xs text-[#7D7569] leading-relaxed">
              Productive, high-prestige executive environments along the Lekki corridor.
            </p>
          </div>

          <div className="bg-white p-5 border border-[#E7E2D8] text-left space-y-1.5 shadow-2xs">
            <span className="text-[10px] font-mono tracking-widest text-[#B5905C] uppercase font-bold block">
              Surfaces & Finishing
            </span>
            <h4 className="font-serif text-base font-medium text-[#1C1917]">
              Flooring Selection
            </h4>
            <p className="text-xs text-[#7D7569] leading-relaxed">
              Herringbone oak timber, Italian porcelain slabs, and luxury SPC tiles.
            </p>
          </div>

          <div className="bg-white p-5 border border-[#E7E2D8] text-left space-y-1.5 shadow-2xs">
            <span className="text-[10px] font-mono tracking-widest text-[#B5905C] uppercase font-bold block">
              Sanctuary Living
            </span>
            <h4 className="font-serif text-base font-medium text-[#1C1917]">
              Custom Bedding Ensembles
            </h4>
            <p className="text-xs text-[#7D7569] leading-relaxed">
              Egyptian cotton sheets, custom headboards, and plush tailored cushions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
