import React, { useState } from "react";
import { 
  Building2, 
  BedDouble, 
  Maximize2, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  X,
  Plus,
  Calendar,
  Layers
} from "lucide-react";
import { SPACEBOUND_SERVICES } from "../data";
import { SpaceboundService } from "../types";

interface ServicesSectionProps {
  onSelectServiceForConsultation: (serviceTitle: string) => void;
}

export default function ServicesSection({ onSelectServiceForConsultation }: ServicesSectionProps) {
  const [activeCategoryFilter, setActiveCategoryFilter] = useState<string>("all");
  const [activeModalService, setActiveModalService] = useState<SpaceboundService | null>(null);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case "Building2":
        return <Building2 className="w-5 h-5 text-[#B5905C]" />;
      case "BedDouble":
        return <BedDouble className="w-5 h-5 text-[#B5905C]" />;
      case "Maximize2":
        return <Maximize2 className="w-5 h-5 text-[#B5905C]" />;
      case "Sparkles":
        return <Sparkles className="w-5 h-5 text-[#B5905C]" />;
      default:
        return <Layers className="w-5 h-5 text-[#B5905C]" />;
    }
  };

  const filteredServices = activeCategoryFilter === "all"
    ? SPACEBOUND_SERVICES
    : SPACEBOUND_SERVICES.filter(s => s.category === activeCategoryFilter);

  return (
    <section id="services" className="py-24 bg-white text-[#1C1917] border-b border-[#E7E2D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-[#FAF8F5] border border-[#E7E2D8] px-3.5 py-1.5 rounded-full text-xs font-mono font-medium text-[#B5905C] uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#B5905C]" />
            <span>Curated Interior Services</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1C1917] tracking-tight leading-tight">
            Tailored Solutions for <br />
            <span className="italic text-[#B5905C] font-light">Refined Living & Working</span>
          </h2>

          <p className="text-sm sm:text-base text-[#5E574F] font-sans font-light leading-relaxed">
            From serene master bedrooms and bespoke architectural cabinetry to imposing executive commercial spaces and sculptural dining salons, Spacebound Interiors delivers craftsmanship and modern design across Lagos.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-4 mb-12 gap-2 no-scrollbar">
          {[
            { id: "all", label: "All 4 Services" },
            { id: "bedroom", label: "Bedroom Design" },
            { id: "cabinetry", label: "Cabinetry & Hardware" },
            { id: "commercial", label: "Commercial Design" },
            { id: "dining", label: "Dining Room Design" },
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

        {/* Services Grid (2x2 on desktop for 4 prominent services) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
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
                    {service.categoryLabel}
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

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-5 text-left">
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <div className="p-2 bg-white border border-[#E7E2D8] rounded-xs shadow-2xs">
                      {getServiceIcon(service.iconName)}
                    </div>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1C1917]">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-[#5E574F] font-sans font-light leading-relaxed">
                    {service.shortDescription}
                  </p>

                  {/* Feature Highlights */}
                  <div className="space-y-1.5 pt-2">
                    <span className="text-[10px] font-mono tracking-widest uppercase text-[#7D7569] font-semibold block">
                      Core Elements:
                    </span>
                    <ul className="space-y-1 text-xs text-[#1C1917]">
                      {service.features.slice(0, 3).map((feat, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#B5905C] flex-shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Bottom CTA Actions */}
                <div className="pt-4 border-t border-[#EFECE6] flex items-center justify-between gap-2">
                  <button
                    onClick={() => onSelectServiceForConsultation(service.title)}
                    className="text-xs font-semibold uppercase tracking-[0.14em] text-[#1C1917] hover:text-[#B5905C] flex items-center space-x-1.5 transition-colors cursor-pointer group/btn"
                  >
                    <span>Request Consultation</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#B5905C] group-hover/btn:translate-x-1 transition-transform" />
                  </button>

                  <button
                    onClick={() => setActiveModalService(service)}
                    className="text-[11px] font-mono text-[#7D7569] hover:text-[#1C1917] transition-colors cursor-pointer"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Studio Consultation Callout Banner */}
        <div className="mt-16 p-8 bg-[#FAF8F5] border border-[#E7E2D8] flex flex-col md:flex-row items-center justify-between gap-6 text-left">
          <div className="space-y-1 max-w-2xl">
            <span className="text-[11px] font-mono tracking-widest uppercase text-[#B5905C] font-semibold block">
              Personalized Space Planning & Turnkey Design
            </span>
            <h3 className="font-serif text-2xl font-normal text-[#1C1917]">
              Ready to Design Your Dream Space in Lagos?
            </h3>
            <p className="text-xs sm:text-sm text-[#5E574F] font-sans leading-relaxed">
              Our interior designers collaborate with you from spatial concept and 3D visualization through bespoke cabinetry detailing, material selection, and final staging in Abraham Adesanya, Ajah, and across Lagos.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <button
              onClick={() => onSelectServiceForConsultation("Full Interior Design Consultation")}
              className="bg-[#1C1917] hover:bg-[#2B2723] text-[#FAF8F5] px-6 py-3.5 text-xs font-semibold tracking-[0.14em] uppercase border border-[#1C1917] hover:border-[#B5905C] transition-all whitespace-nowrap cursor-pointer text-center flex items-center justify-center space-x-2"
            >
              <Calendar className="w-3.5 h-3.5 text-[#B5905C]" />
              <span>Schedule Consultation</span>
            </button>
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
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#1C1917]/80 hover:bg-[#1C1917] text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="absolute bottom-4 left-6 right-6">
                <span className="bg-[#1C1917] text-[#FAF8F5] text-[10px] font-mono tracking-widest uppercase px-2.5 py-1 font-semibold">
                  {activeModalService.categoryLabel}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1C1917] mt-2">
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
                <p className="text-sm text-[#4A453E] font-sans font-light leading-relaxed">
                  {activeModalService.fullDescription}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-[#7D7569] mb-2">
                  Key Deliverables & Specifications
                </h4>
                <ul className="space-y-2 text-xs text-[#1C1917]">
                  {activeModalService.features.map((feat, i) => (
                    <li key={i} className="flex items-start space-x-2 bg-white p-2.5 border border-[#E7E2D8]">
                      <CheckCircle2 className="w-4 h-4 text-[#B5905C] flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white p-4 border border-[#E7E2D8]">
                  <h5 className="text-[11px] font-mono uppercase tracking-wider text-[#7D7569] mb-1">
                    Signature Materials
                  </h5>
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {activeModalService.materialsOrOptions.map((mat, i) => (
                      <span key={i} className="text-[10px] bg-[#FAF8F5] border border-[#E7E2D8] px-2 py-0.5 text-[#5E574F]">
                        {mat}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-white p-4 border border-[#E7E2D8]">
                  <h5 className="text-[11px] font-mono uppercase tracking-wider text-[#7D7569] mb-1">
                    Ideal Application
                  </h5>
                  <p className="text-xs text-[#1C1917] font-sans mt-2">
                    {activeModalService.idealFor}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-[#EFECE6] flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => {
                    const title = activeModalService.title;
                    setActiveModalService(null);
                    onSelectServiceForConsultation(title);
                  }}
                  className="flex-1 bg-[#1C1917] hover:bg-[#2B2723] text-[#FAF8F5] py-3.5 px-4 text-xs font-semibold tracking-[0.14em] uppercase border border-[#1C1917] hover:border-[#B5905C] transition-all cursor-pointer text-center flex items-center justify-center space-x-2"
                >
                  <Calendar className="w-3.5 h-3.5 text-[#B5905C]" />
                  <span>Book Consultation for this Service</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
