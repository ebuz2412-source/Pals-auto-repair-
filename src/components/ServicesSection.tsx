import React, { useState } from "react";
import { 
  Building2, 
  Layers, 
  SlidersHorizontal, 
  Compass, 
  Maximize2, 
  Grid, 
  BedDouble, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  MessageSquare,
  X,
  Plus
} from "lucide-react";
import { ESTIE_SERVICES, getServiceBookingWhatsAppUrl, getWhatsAppUrl } from "../data";
import { EstieService } from "../types";

interface ServicesSectionProps {
  onSelectServiceForConsultation: (serviceTitle: string) => void;
}

export default function ServicesSection({ onSelectServiceForConsultation }: ServicesSectionProps) {
  const [activeCategoryFilter, setActiveCategoryFilter] = useState<string>("all");
  const [activeModalService, setActiveModalService] = useState<EstieService | null>(null);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case "Building2":
        return <Building2 className="w-5 h-5 text-[#B5905C]" />;
      case "Layers":
        return <Layers className="w-5 h-5 text-[#B5905C]" />;
      case "SlidersHorizontal":
        return <SlidersHorizontal className="w-5 h-5 text-[#B5905C]" />;
      case "Compass":
        return <Compass className="w-5 h-5 text-[#B5905C]" />;
      case "Maximize2":
        return <Maximize2 className="w-5 h-5 text-[#B5905C]" />;
      case "Grid":
        return <Grid className="w-5 h-5 text-[#B5905C]" />;
      case "BedDouble":
        return <BedDouble className="w-5 h-5 text-[#B5905C]" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#B5905C]" />;
    }
  };

  const filteredServices = activeCategoryFilter === "all"
    ? ESTIE_SERVICES
    : ESTIE_SERVICES.filter(s => {
        if (activeCategoryFilter === "windows") {
          return s.category === "windows";
        }
        if (activeCategoryFilter === "design") {
          return s.category === "design";
        }
        if (activeCategoryFilter === "finishing") {
          return s.category === "flooring" || s.category === "furnishings";
        }
        return true;
      });

  return (
    <section id="services" className="py-24 bg-white text-[#1C1917] border-b border-[#E7E2D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-[#FAF8F5] border border-[#E7E2D8] px-3.5 py-1.5 rounded-full text-xs font-mono font-medium text-[#B5905C] uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#B5905C]" />
            <span>Curated Interior & Window Services</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1C1917] tracking-tight leading-tight">
            Tailored Solutions for <br />
            <span className="italic text-[#B5905C] font-light">Refined Living & Working</span>
          </h2>

          <p className="text-sm sm:text-base text-[#5E574F] font-sans font-light leading-relaxed">
            From comprehensive commercial office fit-outs and European flooring curation to bespoke motorized blinds and hand-stitched bedding ensembles, we deliver comprehensive design excellence in Sangotedo, Lagos.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-4 mb-12 gap-2 no-scrollbar">
          {[
            { id: "all", label: "All 7 Services" },
            { id: "windows", label: "Windows, Blinds & Curtains" },
            { id: "design", label: "Commercial Interior Design" },
            { id: "finishing", label: "Flooring & Bespoke Bedding" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveCategoryFilter(tab.id)}
              className={`px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.14em] transition-all cursor-pointer border ${
                activeCategoryFilter === tab.id
                  ? "bg-[#1C1917] text-[#FAF8F5] border-[#1C1917]"
                  : "bg-[#FAF8F5] text-[#7D7569] border-[#E7E2D8] hover:border-[#B5905C] hover:text-[#1C1917]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              id={`service-${service.id}`}
              className="bg-[#FAF8F5] border border-[#E7E2D8] hover:border-[#B5905C] transition-all duration-300 flex flex-col justify-between group overflow-hidden shadow-2xs hover:shadow-md"
            >
              {/* Image Container */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#EFE9DF]">
                <img
                  src={service.image}
                  alt={service.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C1917]/60 via-transparent to-transparent"></div>

                {/* Category Badge */}
                <div className="absolute top-3 left-3">
                  <span className="bg-[#FAF8F5]/90 text-[#1C1917] text-[10px] font-mono tracking-widest uppercase px-2.5 py-1 font-semibold backdrop-blur-xs border border-white/60">
                    {service.categoryLabel || service.category}
                  </span>
                </div>

                {/* Detail View Icon */}
                <button
                  onClick={() => setActiveModalService(service)}
                  className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-white/90 hover:bg-[#1C1917] text-[#1C1917] hover:text-white flex items-center justify-center transition-colors shadow-xs cursor-pointer"
                  title="View Full Specifications"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>

              {/* Body Content */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4 text-left">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="p-1.5 bg-white border border-[#E7E2D8] rounded-xs">
                      {getServiceIcon(service.iconName)}
                    </div>
                    <span className="text-[10px] font-mono tracking-widest uppercase text-[#B5905C] font-semibold">
                      Sangotedo Workshop
                    </span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-[#1C1917] group-hover:text-[#B5905C] transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-xs text-[#5E574F] font-sans leading-relaxed line-clamp-2">
                    {service.shortDescription}
                  </p>
                </div>

                {/* Features Checklist */}
                <div className="space-y-1.5 py-3 border-t border-[#EFECE6] text-xs text-[#7D7569]">
                  {service.features.slice(0, 3).map((feature, idx) => (
                    <div key={idx} className="flex items-start space-x-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#B5905C] flex-shrink-0 mt-0.5" />
                      <span className="truncate">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Card Bottom CTA Actions */}
                <div className="pt-2 border-t border-[#EFECE6] flex items-center justify-between gap-2">
                  <button
                    onClick={() => onSelectServiceForConsultation(service.title)}
                    className="text-xs font-semibold uppercase tracking-[0.14em] text-[#1C1917] hover:text-[#B5905C] flex items-center space-x-1.5 transition-colors cursor-pointer group/btn"
                  >
                    <span>Consultation</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#B5905C] group-hover/btn:translate-x-1 transition-transform" />
                  </button>

                  <a
                    href={getServiceBookingWhatsAppUrl(service.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] font-mono text-[#2E7D32] hover:text-[#1B5E20] flex items-center space-x-1"
                  >
                    <MessageSquare className="w-3 h-3" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Showroom Visit Callout Banner */}
        <div className="mt-16 p-8 bg-[#FAF8F5] border border-[#E7E2D8] flex flex-col md:flex-row items-center justify-between gap-6 text-left">
          <div className="space-y-1 max-w-2xl">
            <span className="text-[11px] font-mono tracking-widest uppercase text-[#B5905C] font-semibold block">
              Bespoke Window Dressing Consultations
            </span>
            <h3 className="font-serif text-2xl font-normal text-[#1C1917]">
              Need Laser Window Measurements for Your New Space?
            </h3>
            <p className="text-xs sm:text-sm text-[#5E574F] font-sans leading-relaxed">
              Our technical styling team visits your site across Sangotedo, Lekki, Ikoyi, Victoria Island, and greater Lagos with full fabric swatches, motorization samples, and laser measurement instruments.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <button
              onClick={() => onSelectServiceForConsultation("Bespoke Laser Window Measurement")}
              className="bg-[#1C1917] hover:bg-[#2B2723] text-[#FAF8F5] px-6 py-3.5 text-xs font-semibold tracking-[0.14em] uppercase border border-[#1C1917] hover:border-[#B5905C] transition-all whitespace-nowrap cursor-pointer text-center"
            >
              Book Measurement
            </button>
            <a
              href={getWhatsAppUrl("Hello ESTIE INTERIOR, I would like to schedule an on-site laser window measurement and fabric consultation.")}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white hover:bg-[#F5F1EA] text-[#1C1917] px-6 py-3.5 text-xs font-semibold tracking-[0.14em] uppercase border border-[#D6CABE] hover:border-[#B5905C] transition-all whitespace-nowrap text-center flex items-center justify-center space-x-2"
            >
              <MessageSquare className="w-4 h-4 text-[#2E7D32]" />
              <span>WhatsApp Direct</span>
            </a>
          </div>
        </div>
      </div>

      {/* Service Detail Modal */}
      {activeModalService && (
        <div
          id="service-detail-modal"
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#1C1917]/70 backdrop-blur-xs p-4 animate-in fade-in duration-200"
          onClick={() => setActiveModalService(null)}
        >
          <div
            className="bg-[#FAF8F5] border border-[#E7E2D8] max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative text-left"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Image Header */}
            <div className="relative aspect-[16/9] w-full bg-[#EFE9DF]">
              <img
                src={activeModalService.image}
                alt={activeModalService.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#FAF8F5] via-transparent to-transparent"></div>

              <button
                onClick={() => setActiveModalService(null)}
                className="absolute top-4 right-4 p-2 bg-white/90 text-[#1C1917] hover:text-[#B5905C] transition-colors shadow-sm cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="absolute bottom-4 left-6 right-6">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#B5905C] font-semibold block">
                  ESTIE INTERIOR • {activeModalService.categoryLabel || activeModalService.category}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1C1917]">
                  {activeModalService.title}
                </h3>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-[#7D7569] mb-2">
                  Service Overview
                </h4>
                <p className="text-sm text-[#4A453E] leading-relaxed font-sans font-light">
                  {activeModalService.fullDescription}
                </p>
              </div>

              {/* Inclusions */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-[#7D7569] mb-3">
                  Scope & Tailored Inclusions
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#1C1917]">
                  {activeModalService.features.map((feat, i) => (
                    <div key={i} className="flex items-start space-x-2 bg-white p-2.5 border border-[#E7E2D8]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#B5905C] flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Materials / Options */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-[#7D7569] mb-2">
                  Materials, Finishes & Options
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeModalService.materialsOrOptions.map((opt, i) => (
                    <span key={i} className="px-3 py-1 bg-white border border-[#E7E2D8] text-xs font-medium text-[#4A453E]">
                      {opt}
                    </span>
                  ))}
                </div>
              </div>

              {/* Ideal Space */}
              <div className="bg-white p-4 border border-[#E7E2D8]">
                <span className="text-[10px] font-mono tracking-widest uppercase text-[#B5905C] font-bold block mb-1">
                  Recommended For
                </span>
                <p className="text-xs text-[#5E574F] font-sans">
                  {activeModalService.idealFor}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-[#EFECE6] flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => {
                    const title = activeModalService.title;
                    setActiveModalService(null);
                    onSelectServiceForConsultation(title);
                  }}
                  className="flex-1 bg-[#1C1917] hover:bg-[#2B2723] text-[#FAF8F5] py-3 px-4 text-xs font-semibold tracking-[0.14em] uppercase border border-[#1C1917] hover:border-[#B5905C] transition-all cursor-pointer text-center"
                >
                  Request Consultation For This Service
                </button>
                <a
                  href={getServiceBookingWhatsAppUrl(activeModalService.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-[#2E7D32] hover:bg-[#1B5E20] text-white py-3 px-4 text-xs font-semibold tracking-[0.14em] uppercase transition-all flex items-center justify-center space-x-2 text-center"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Inquire on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
