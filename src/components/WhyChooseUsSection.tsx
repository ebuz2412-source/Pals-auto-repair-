import React from "react";
import { 
  Award, 
  MapPin, 
  ShieldCheck, 
  Sparkles, 
  Ruler, 
  Clock, 
  Star, 
  Quote,
  CheckCircle2
} from "lucide-react";
import { WHY_ESTIE_PILLARS, ESTIE_REVIEWS, ESTIE_BUSINESS_INFO } from "../data";

export default function WhyChooseUsSection() {
  const getPillarIcon = (iconName: string) => {
    switch (iconName) {
      case "Award":
        return <Award className="w-5 h-5 text-[#B5905C]" />;
      case "MapPin":
        return <MapPin className="w-5 h-5 text-[#B5905C]" />;
      case "ShieldCheck":
        return <ShieldCheck className="w-5 h-5 text-[#B5905C]" />;
      case "Sparkles":
        return <Sparkles className="w-5 h-5 text-[#B5905C]" />;
      case "Ruler":
        return <Ruler className="w-5 h-5 text-[#B5905C]" />;
      case "Clock":
        return <Clock className="w-5 h-5 text-[#B5905C]" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#B5905C]" />;
    }
  };

  return (
    <section className="py-24 bg-[#FAF8F5] text-[#1C1917] border-b border-[#E7E2D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-white border border-[#E7E2D8] px-3.5 py-1.5 rounded-full text-xs font-mono font-medium text-[#B5905C] uppercase tracking-wider">
            <Award className="w-3.5 h-3.5 text-[#B5905C]" />
            <span>Why Choose Estie Interior</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1C1917] tracking-tight leading-tight">
            Uncompromising Standards & <br />
            <span className="italic text-[#B5905C] font-light">Flawless Lagos Execution</span>
          </h2>

          <p className="text-sm sm:text-base text-[#5E574F] font-sans font-light leading-relaxed">
            Our 5.0-star reputation is built on meticulous measurement, authentic materials, on-time project completion, and a physical design studio in Sangotedo where you can touch and feel every finish.
          </p>
        </div>

        {/* 6 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {WHY_ESTIE_PILLARS.map((pillar, idx) => (
            <div
              key={idx}
              className="bg-white p-7 border border-[#E7E2D8] hover:border-[#B5905C] transition-all duration-300 shadow-2xs hover:shadow-md text-left space-y-3"
            >
              <div className="w-10 h-10 rounded-xs bg-[#FAF8F5] border border-[#E7E2D8] flex items-center justify-center">
                {getPillarIcon(pillar.icon)}
              </div>

              <h3 className="font-serif text-lg font-bold text-[#1C1917]">
                {pillar.title}
              </h3>

              <p className="text-xs sm:text-sm text-[#5E574F] font-sans leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        {/* Client Reviews Header & Banner */}
        <div className="bg-white border border-[#E7E2D8] p-8 sm:p-12 mb-12 shadow-sm text-left">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-8 border-b border-[#EFECE6]">
            <div className="space-y-2">
              <span className="text-[10px] font-mono tracking-widest uppercase text-[#B5905C] font-semibold">
                Client Testimonials
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1C1917]">
                Rated 5.0 Stars by Discerning Clients
              </h3>
              <p className="text-xs sm:text-sm text-[#7D7569]">
                Verified reviews from homeowners, commercial managers, and architects in Lagos.
              </p>
            </div>

            {/* Rating Stat Box */}
            <div className="flex items-center space-x-4 bg-[#FAF8F5] p-4 border border-[#E7E2D8]">
              <div className="font-serif text-4xl font-bold text-[#1C1917]">
                5.0
              </div>
              <div>
                <div className="flex items-center text-[#B5905C]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#B5905C]" />
                  ))}
                </div>
                <div className="text-[11px] font-mono text-[#7D7569] uppercase tracking-wider mt-0.5">
                  Based on 4 Verified Reviews
                </div>
              </div>
            </div>
          </div>

          {/* 4 Verified Reviews Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
            {ESTIE_REVIEWS.map((rev) => (
              <div
                key={rev.id}
                className="bg-[#FAF8F5] p-6 border border-[#E7E2D8] flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-[#B5905C]">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-[#B5905C]" />
                      ))}
                    </div>
                    <span className="text-[11px] font-mono text-[#7D7569]">
                      {rev.date}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-[#4A453E] font-sans italic leading-relaxed">
                    "{rev.reviewText}"
                  </p>
                </div>

                <div className="pt-3 border-t border-[#E7E2D8] flex items-center justify-between text-left">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#1C1917]">
                      {rev.clientName}
                    </h4>
                    <span className="text-[11px] text-[#7D7569] block">
                      {rev.clientTitle} • {rev.location}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono bg-white px-2 py-0.5 border border-[#E7E2D8] text-[#B5905C] font-medium uppercase">
                    Verified
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
