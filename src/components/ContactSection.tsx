import React, { useState } from "react";
import { 
  MapPin, 
  Clock, 
  Compass, 
  Copy, 
  Check, 
  Star, 
  Sparkles,
  Building2
} from "lucide-react";
import { SPACEBOUND_BUSINESS_INFO } from "../data";

export default function ContactSection() {
  const [copiedAddress, setCopiedAddress] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(SPACEBOUND_BUSINESS_INFO.address);
    setCopiedAddress(true);
    setTimeout(() => setCopiedAddress(false), 2500);
  };

  return (
    <section id="contact" className="py-24 bg-[#FAF8F5] text-[#1C1917] border-b border-[#E7E2D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-white border border-[#E7E2D8] px-3.5 py-1.5 rounded-full text-xs font-mono font-medium text-[#B5905C] uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5 text-[#B5905C]" />
            <span>Studio Location & Hours</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1C1917] tracking-tight leading-tight">
            Visit Our Studio in <br />
            <span className="italic text-[#B5905C] font-light">Abraham Adesanya, Ajah</span>
          </h2>

          <p className="text-sm sm:text-base text-[#5E574F] font-sans font-light leading-relaxed">
            Conveniently situated in Estate, Abraham Adesanya, Ajah, Lagos 106104. We welcome residential and commercial clients across Lagos for private interior consultations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Details Card */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="bg-white p-8 border border-[#E7E2D8] shadow-xs space-y-6">
              
              {/* Brand Title */}
              <div className="border-b border-[#EFECE6] pb-5 space-y-2">
                <span className="text-[10px] font-mono tracking-widest uppercase text-[#B5905C] font-semibold block">
                  Official Studio Details
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#1C1917]">
                  Spacebound Interiors
                </h3>
                <span className="inline-block text-xs font-medium text-[#7D7569] uppercase tracking-wider">
                  Interior Designer • Lagos, Nigeria
                </span>
              </div>

              {/* Physical Location */}
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-xs font-mono uppercase text-[#7D7569]">
                  <MapPin className="w-4 h-4 text-[#B5905C]" />
                  <span>Physical Address</span>
                </div>
                <p className="font-serif text-lg font-medium text-[#1C1917] leading-snug">
                  {SPACEBOUND_BUSINESS_INFO.address}
                </p>
                <div className="pt-1">
                  <button
                    onClick={handleCopyAddress}
                    className="inline-flex items-center space-x-1.5 text-xs text-[#B5905C] hover:text-[#1C1917] transition-colors cursor-pointer"
                  >
                    {copiedAddress ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-green-600" />
                        <span className="text-green-600 font-semibold">Address Copied to Clipboard</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Exact Address</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Hours */}
              <div className="space-y-2 border-t border-[#EFECE6] pt-5">
                <div className="flex items-center space-x-2 text-xs font-mono uppercase text-[#7D7569]">
                  <Clock className="w-4 h-4 text-[#B5905C]" />
                  <span>Studio Hours</span>
                </div>
                <p className="text-sm text-[#1C1917] font-sans font-medium">
                  {SPACEBOUND_BUSINESS_INFO.openingHours}
                </p>
                <p className="text-xs text-[#7D7569]">
                  Sunday: Closed (Private on-site appointments by prior arrangement)
                </p>
              </div>

              {/* Verified Rating */}
              <div className="space-y-2 border-t border-[#EFECE6] pt-5">
                <div className="flex items-center space-x-2 text-xs font-mono uppercase text-[#7D7569]">
                  <Star className="w-4 h-4 text-[#B5905C]" />
                  <span>Client Rating</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="flex items-center text-[#B5905C]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#B5905C]" />
                    ))}
                  </div>
                  <span className="text-sm font-semibold text-[#1C1917]">
                    5.0 Stars (1 Review)
                  </span>
                </div>
              </div>

              {/* Landmarks */}
              <div className="bg-[#FAF8F5] p-4 border border-[#E7E2D8] text-xs text-[#5E574F] space-y-1">
                <div className="flex items-center space-x-1.5 font-semibold text-[#1C1917]">
                  <Compass className="w-3.5 h-3.5 text-[#B5905C]" />
                  <span>Landmark & Access Guide:</span>
                </div>
                <p>
                  Located in Abraham Adesanya Estate axis, Ajah, off the Lekki-Epe expressway, Lagos 106104. Convenient access from Sangotedo, Lekki Phase 1, and Victoria Island.
                </p>
              </div>

            </div>
          </div>

          {/* Right Visual Map Card */}
          <div className="lg:col-span-7 bg-white p-4 sm:p-6 border border-[#E7E2D8] shadow-xs text-left">
            <div className="relative aspect-[16/11] w-full bg-[#EAE6DF] border border-[#E7E2D8] overflow-hidden">
              {/* Architectural Stylized Map Simulation of Ajah Axis */}
              <div className="absolute inset-0 bg-[#F4F1EA] flex items-center justify-center p-6 text-center">
                {/* SVG Map Grid Illustration */}
                <svg className="absolute inset-0 w-full h-full opacity-30 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="studio-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#D6CABE" strokeWidth="0.75" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#studio-grid)" />
                  {/* Stylized Lekki-Epe Expressway */}
                  <path d="M -50 180 Q 250 140 500 200 T 900 160" fill="none" stroke="#B5905C" strokeWidth="5" strokeLinecap="round" opacity="0.6" />
                  {/* Axis Road to Abraham Adesanya */}
                  <path d="M 380 170 L 440 380" fill="none" stroke="#1C1917" strokeWidth="3" strokeDasharray="6 4" opacity="0.4" />
                </svg>

                {/* Studio Location Pin Marker */}
                <div className="relative z-10 max-w-sm bg-white/95 backdrop-blur-md p-6 border border-[#B5905C]/40 shadow-xl space-y-3">
                  <div className="w-12 h-12 rounded-full bg-[#1C1917] text-[#B5905C] flex items-center justify-center mx-auto shadow-md">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono tracking-widest uppercase text-[#B5905C] font-semibold block">
                      Interior Designer
                    </span>
                    <h4 className="font-serif text-xl font-bold text-[#1C1917]">
                      Spacebound Interiors
                    </h4>
                    <p className="text-xs text-[#5E574F] mt-1">
                      Estate, Abraham Adesanya, Ajah, Lagos 106104, Lagos, Nigeria
                    </p>
                  </div>

                  <div className="pt-2 border-t border-[#EFECE6] flex items-center justify-center space-x-2 text-[11px] font-mono text-[#7D7569]">
                    <MapPin className="w-3.5 h-3.5 text-[#B5905C]" />
                    <span>Lagos State, Nigeria</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Map Legend */}
            <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-xs text-[#7D7569]">
              <span className="flex items-center space-x-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#B5905C]"></span>
                <span>Lekki-Epe Corridor Access</span>
              </span>
              <span className="flex items-center space-x-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#1C1917]"></span>
                <span>Estate, Abraham Adesanya, Ajah</span>
              </span>
              <span className="font-mono text-[11px] text-[#1C1917]">
                Postal Code: 106104
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
