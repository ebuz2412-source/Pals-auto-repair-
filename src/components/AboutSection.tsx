import React from "react";
import { 
  MapPin, 
  Sparkles, 
  Check, 
  Ruler, 
  ShieldCheck, 
  Layers, 
  Star,
  ArrowRight
} from "lucide-react";
import { ESTIE_BUSINESS_INFO, ESTIE_IMAGES, getWhatsAppUrl } from "../data";

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
                  src={ESTIE_IMAGES.showroomTextures}
                  alt="Estie Interior Studio & Fabric Selection in Sangotedo Lagos"
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
                  Verified excellence by homeowners, architects, and corporate executives across Lagos.
                </p>
              </div>

              {/* Location Tag */}
              <div className="absolute top-4 left-4 bg-[#1C1917]/90 text-[#FAF8F5] px-3.5 py-1.5 text-[11px] font-mono tracking-wider uppercase backdrop-blur-sm">
                Sangotedo Showroom
              </div>
            </div>

            {/* Micro Details Grid */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-4 bg-white border border-[#E7E2D8] text-left">
                <span className="font-serif text-2xl font-normal text-[#B5905C] block">100%</span>
                <span className="text-xs font-semibold text-[#1C1917] block uppercase tracking-wider">Custom Tailoring</span>
                <p className="text-[11px] text-[#7D7569] mt-0.5">Every curtain, blind, and headboard made to measure.</p>
              </div>
              <div className="p-4 bg-white border border-[#E7E2D8] text-left">
                <span className="font-serif text-2xl font-normal text-[#B5905C] block">Km 46</span>
                <span className="text-xs font-semibold text-[#1C1917] block uppercase tracking-wider">Lekki-Epe Axis</span>
                <p className="text-[11px] text-[#7D7569] mt-0.5">Beside Safeway Hospital, serving all of Lagos.</p>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Craftsmanship Story */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="inline-flex items-center space-x-2 bg-white border border-[#E7E2D8] px-3.5 py-1 rounded-full text-xs font-mono font-medium text-[#B5905C] uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#B5905C]" />
              <span>About Estie Interior</span>
            </div>

            <div className="space-y-3">
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1C1917] tracking-tight leading-tight">
                Where Architectural Vision Meets <br />
                <span className="italic text-[#B5905C] font-light">Artisanal Finishing</span>
              </h2>

              <p className="text-sm sm:text-base text-[#5E574F] font-sans font-light leading-relaxed">
                Located on the bustling Lekki-Epe corridor in Sangotedo, <strong>ESTIE INTERIOR</strong> is a premier interior design and bespoke window treatment studio dedicated to elevating Nigerian homes, corporate headquarters, and luxury developments.
              </p>

              <p className="text-xs sm:text-sm text-[#7D7569] font-sans leading-relaxed">
                We believe exceptional spaces are born from thoughtful restraint, tactile materials, and precise execution. From custom ripple-fold sheer drapery that filters tropical sunlight to motorized architectural blinds, tailored commercial suites, and imported European flooring, every project is executed with obsessive craftsmanship.
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
                    End-to-End Window Treatment Expertise
                  </h4>
                  <p className="text-xs text-[#7D7569]">
                    Specialized in all kinds of windows—double-volume curtains, smart motorized shades, Basswood blinds, and architectural pelmets.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-5 h-5 rounded-full bg-[#EFE9DF] flex items-center justify-center text-[#B5905C] flex-shrink-0 mt-0.5">
                  <Check className="w-3 h-3" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#1C1917]">
                    Commercial & Residential Versatility
                  </h4>
                  <p className="text-xs text-[#7D7569]">
                    Seamlessly bridging high-traffic corporate offices, boutique retail spaces, and serene private master sanctuaries.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-5 h-5 rounded-full bg-[#EFE9DF] flex items-center justify-center text-[#B5905C] flex-shrink-0 mt-0.5">
                  <Check className="w-3 h-3" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#1C1917]">
                    Sangotedo Showroom & Physical Fabric Library
                  </h4>
                  <p className="text-xs text-[#7D7569]">
                    Visit our studio beside Safeway Hospital to feel texture swatches, test motorization systems, and discuss your blueprints in person.
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
                <span>Book a Consultation</span>
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
