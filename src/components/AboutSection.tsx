import React from "react";
import { 
  Sparkles, 
  Check, 
  Star,
  ArrowRight,
  Maximize2,
  Calendar
} from "lucide-react";
import { SPACEBOUND_BUSINESS_INFO, SPACEBOUND_IMAGES } from "../data";

interface AboutSectionProps {
  onBookConsultation: () => void;
  onExploreServices: () => void;
}

export default function AboutSection({ onBookConsultation, onExploreServices }: AboutSectionProps) {
  return (
    <section id="about" className="py-24 bg-[#FAF8F5] text-[#1C1917] border-b border-[#E7E2D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Collage with Generous Spacing */}
          <div className="lg:col-span-6 space-y-6">
            <div className="relative">
              {/* Primary Studio Image */}
              <div className="relative aspect-[4/3] rounded-sm overflow-hidden border border-[#E7E2D8] shadow-lg bg-[#EFE9DF]">
                <img
                  src={SPACEBOUND_IMAGES.cabinetryHardware}
                  alt="Spacebound Interiors Bespoke Cabinetry & Hardware Craftsmanship in Lagos"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Overlapping Detail Badge */}
              <div className="absolute -bottom-6 -right-4 sm:-bottom-8 sm:-right-6 bg-white border border-[#E7E2D8] p-6 shadow-xl max-w-xs text-left">
                <div className="flex items-center space-x-1 text-[#B5905C] mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#B5905C]" />
                  ))}
                </div>
                <div className="font-serif text-2xl font-bold text-[#1C1917]">5.0 Rating</div>
                <p className="text-xs text-[#7D7569] font-sans mt-1">
                  Rated 5.0 stars with verified client appreciation for custom spaces, precision joinery, and tailored interior elegance.
                </p>
              </div>

              {/* Location Tag */}
              <div className="absolute top-4 left-4 bg-[#1C1917]/90 text-[#FAF8F5] px-3.5 py-1.5 text-[11px] font-mono tracking-wider uppercase backdrop-blur-sm">
                Ajah, Lagos Studio
              </div>
            </div>

            {/* Micro Details Grid */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-4 bg-white border border-[#E7E2D8] text-left">
                <span className="font-serif text-2xl font-normal text-[#B5905C] block">Custom</span>
                <span className="text-xs font-semibold text-[#1C1917] block uppercase tracking-wider">Tailored Spaces</span>
                <p className="text-[11px] text-[#7D7569] mt-0.5">Personalized residential and commercial design solutions.</p>
              </div>
              <div className="p-4 bg-white border border-[#E7E2D8] text-left">
                <span className="font-serif text-2xl font-normal text-[#B5905C] block">Ajah</span>
                <span className="text-xs font-semibold text-[#1C1917] block uppercase tracking-wider">Abraham Adesanya</span>
                <p className="text-[11px] text-[#7D7569] mt-0.5">Serving discerning clients across Lagos, Nigeria.</p>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Craftsmanship Story */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="inline-flex items-center space-x-2 bg-white border border-[#E7E2D8] px-3.5 py-1 rounded-full text-xs font-mono font-medium text-[#B5905C] uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#B5905C]" />
              <span>About Spacebound Interiors</span>
            </div>

            <div className="space-y-3">
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1C1917] tracking-tight leading-tight">
                Where Modern Elegance Meets <br />
                <span className="italic text-[#B5905C] font-light">Artisanal Craftsmanship</span>
              </h2>

              <p className="text-sm sm:text-base text-[#5E574F] font-sans font-light leading-relaxed">
                Located in <strong>Estate, Abraham Adesanya, Ajah, Lagos</strong>, <strong>Spacebound Interiors</strong> is a premium interior design studio creating refined, highly personalized environments for distinguished homeowners and forward-thinking businesses.
              </p>

              <p className="text-xs sm:text-sm text-[#7D7569] font-sans leading-relaxed">
                We believe exceptional interior design transcends transient trends. By combining architectural spatial balance, honest materiality, bespoke cabinetry, and curated hardware, we orchestrate spaces that feel effortless, warm, and deeply personal. Every bedroom retreat, dining salon, custom walk-in wardrobe, and commercial suite is realized with uncompromising attention to detail.
              </p>
            </div>

            {/* Core Values / Distinctions */}
            <div className="space-y-3.5 pt-2 border-t border-[#EFECE6]">
              <div className="flex items-start space-x-3">
                <div className="w-5 h-5 rounded-full bg-[#EFE9DF] flex items-center justify-center text-[#B5905C] flex-shrink-0 mt-0.5">
                  <Check className="w-3 h-3" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#1C1917]">
                    Personalized Interior Solutions
                  </h4>
                  <p className="text-xs text-[#7D7569]">
                    Each project begins with deep listening to uncover your daily rituals, aesthetic affinities, and lifestyle or commercial workflow requirements.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-5 h-5 rounded-full bg-[#EFE9DF] flex items-center justify-center text-[#B5905C] flex-shrink-0 mt-0.5">
                  <Check className="w-3 h-3" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#1C1917]">
                    Bespoke Cabinetry & Architectural Hardware
                  </h4>
                  <p className="text-xs text-[#7D7569]">
                    Specialized in precision millwork, fluted timber joinery, custom walk-in wardrobes, and hand-finished bronze and brass hardware.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-5 h-5 rounded-full bg-[#EFE9DF] flex items-center justify-center text-[#B5905C] flex-shrink-0 mt-0.5">
                  <Check className="w-3 h-3" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#1C1917]">
                    Residential Sanctuaries & Commercial Prestige
                  </h4>
                  <p className="text-xs text-[#7D7569]">
                    Bridging tranquil private master bedrooms and dramatic dining salons with commanding corporate boardrooms and executive suites.
                  </p>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={onBookConsultation}
                className="bg-[#1C1917] hover:bg-[#2B2723] text-[#FAF8F5] px-7 py-3.5 text-xs font-semibold tracking-[0.14em] uppercase border border-[#1C1917] hover:border-[#B5905C] transition-all cursor-pointer flex items-center space-x-2"
              >
                <span>Request Consultation</span>
                <ArrowRight className="w-4 h-4 text-[#B5905C]" />
              </button>

              <button
                onClick={onExploreServices}
                className="bg-white hover:bg-[#F5F1EA] text-[#1C1917] px-7 py-3.5 text-xs font-semibold tracking-[0.14em] uppercase border border-[#D6CABE] hover:border-[#B5905C] transition-all cursor-pointer"
              >
                Explore Services
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
