import React, { useState } from "react";
import { 
  Sparkles, 
  Droplets, 
  DoorOpen, 
  Building2, 
  ShieldCheck, 
  Layers, 
  Maximize2, 
  Clock, 
  ArrowRight, 
  Check, 
  MessageSquare,
  Calculator,
  ChevronRight,
  Info
} from "lucide-react";
import { GLASS_SERVICES, BUSINESS_INFO } from "../data";
import { GlassService } from "../types";

interface ServicesSectionProps {
  onSelectServiceForQuote: (serviceTitle: string) => void;
}

export default function ServicesSection({ onSelectServiceForQuote }: ServicesSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [activeModalService, setActiveModalService] = useState<GlassService | null>(null);

  const categories = [
    { id: "all", label: "All Glass & Mirrors" },
    { id: "mirrors", label: "Custom Mirrors" },
    { id: "showers", label: "Shower Enclosures" },
    { id: "doors", label: "Doors & Shopfronts" },
    { id: "partitions", label: "Office Partitions" },
    { id: "balustrades", label: "Glass Railings" },
    { id: "tempered", label: "Tempered & Tabletop" },
    { id: "windows", label: "Window Glazing" },
    { id: "repairs", label: "24/7 Repairs" },
  ];

  const filteredServices = selectedCategory === "all"
    ? GLASS_SERVICES
    : GLASS_SERVICES.filter(s => s.category === selectedCategory);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case "Sparkles": return <Sparkles className="w-5 h-5 text-sky-400" />;
      case "Droplets": return <Droplets className="w-5 h-5 text-sky-400" />;
      case "DoorOpen": return <DoorOpen className="w-5 h-5 text-sky-400" />;
      case "Building2": return <Building2 className="w-5 h-5 text-sky-400" />;
      case "ShieldCheck": return <ShieldCheck className="w-5 h-5 text-sky-400" />;
      case "Layers": return <Layers className="w-5 h-5 text-sky-400" />;
      case "Maximize2": return <Maximize2 className="w-5 h-5 text-sky-400" />;
      case "Clock": return <Clock className="w-5 h-5 text-emerald-400" />;
      default: return <Sparkles className="w-5 h-5 text-sky-400" />;
    }
  };

  return (
    <section id="services" className="py-20 lg:py-28 bg-[#0B0F17] border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-widest text-sky-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>FABRICATION & INSTALLATION SERVICES</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Custom Glass & Mirror Solutions
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            From millimeter-precision mirror beveling and frameless glass shower enclosures to acoustic office partitions and structural balustrades, we fabricate and install to the highest standards across Lagos.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto no-scrollbar gap-2 pb-4 mb-8">
          {categories.map((cat) => (
            <button
              key={cat.id}
              id={`service-cat-${cat.id}`}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-medium whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? "bg-sky-500 text-white shadow-md shadow-sky-500/20 font-semibold"
                  : "bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              id={`service-card-${service.id}`}
              className="glass-panel rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col group"
            >
              {/* Image Header */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>

                <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/10 text-[10px] font-semibold text-slate-300 uppercase tracking-wider">
                  {service.categoryLabel}
                </div>

                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                  <div className="w-9 h-9 rounded-lg bg-slate-900/90 border border-white/20 flex items-center justify-center shadow-md">
                    {getServiceIcon(service.iconName)}
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="font-heading text-lg font-bold text-white group-hover:text-sky-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                    {service.shortDescription}
                  </p>
                </div>

                {/* Key Features list */}
                <div className="space-y-1.5 pt-2 border-t border-white/10">
                  {service.features.slice(0, 3).map((feat, idx) => (
                    <div key={idx} className="flex items-start space-x-2 text-xs text-slate-400">
                      <Check className="w-3.5 h-3.5 text-sky-400 mt-0.5 flex-shrink-0" />
                      <span className="line-clamp-1">{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Card Actions */}
                <div className="pt-3 border-t border-white/10 flex items-center justify-between gap-2">
                  <button
                    id={`service-learn-more-${service.id}`}
                    onClick={() => setActiveModalService(service)}
                    className="text-xs font-semibold text-sky-400 hover:text-sky-300 flex items-center space-x-1 cursor-pointer py-1.5"
                  >
                    <span>Specifications</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>

                  <div className="flex items-center space-x-1.5">
                    <a
                      id={`service-whatsapp-${service.id}`}
                      href={`https://wa.me/?text=Hello%20Glass%20and%20Mirror%20Vendor%2C%20I%20am%20interested%20in%20your%20service%3A%20${encodeURIComponent(service.title)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/20 text-xs transition-colors"
                      title="Inquire via WhatsApp"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                    </a>

                    <button
                      id={`service-quote-${service.id}`}
                      onClick={() => onSelectServiceForQuote(service.title)}
                      className="px-3 py-1.5 rounded-lg bg-sky-500 hover:bg-sky-400 text-white text-xs font-semibold shadow-sm transition-all cursor-pointer"
                    >
                      Get Quote
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 24/7 Emergency Glazing Callout Strip */}
        <div className="mt-12 glass-panel p-6 sm:p-8 rounded-2xl border border-emerald-500/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 flex-shrink-0">
              <Clock className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <div className="inline-flex items-center space-x-1.5 text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-0.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                <span>Immediate Assistance</span>
              </div>
              <h3 className="font-heading text-lg sm:text-xl font-bold text-white">
                Need Urgent Glass Replacement or Repair in Lagos?
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm mt-1">
                Our shop is open 24 hours. We handle emergency shattered door glass, storefront damage, and broken shower glass with rapid response across Lagos.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 flex-shrink-0 w-full md:w-auto">
            <a
              id="emergency-glazing-whatsapp"
              href="https://wa.me/?text=URGENT%3A%20I%20need%20emergency%20glass%20repair%20or%20replacement%20in%20Lagos."
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 md:flex-initial text-center inline-flex items-center justify-center space-x-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold transition-all shadow-lg"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Emergency WhatsApp</span>
            </a>

            <a
              id="emergency-glazing-call"
              href={BUSINESS_INFO.phoneLink}
              className="flex-1 md:flex-initial text-center inline-flex items-center justify-center space-x-2 px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white border border-white/20 text-xs font-semibold transition-all"
            >
              <Clock className="w-4 h-4 text-emerald-400" />
              <span>Call 24/7</span>
            </a>
          </div>
        </div>
      </div>

      {/* Service Detailed Specifications Modal */}
      {activeModalService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in">
          <div className="glass-panel max-w-2xl w-full rounded-2xl border border-white/20 bg-[#0F172A] p-6 sm:p-8 space-y-5 max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-sky-400">
                  {activeModalService.categoryLabel}
                </span>
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-white mt-1">
                  {activeModalService.title}
                </h3>
              </div>
              <button
                id="close-service-modal-btn"
                onClick={() => setActiveModalService(null)}
                className="text-slate-400 hover:text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
                aria-label="Close modal"
              >
                ✕
              </button>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed">
              {activeModalService.fullDescription}
            </p>

            <div className="space-y-3">
              <h4 className="text-xs font-semibold text-white uppercase tracking-wider">
                Key Features & Engineering:
              </h4>
              <div className="space-y-2">
                {activeModalService.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start space-x-2 text-xs text-slate-300">
                    <Check className="w-4 h-4 text-sky-400 mt-0.5 flex-shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                <span className="text-[11px] font-semibold text-sky-400 block mb-1">Specifications:</span>
                <ul className="text-xs text-slate-300 space-y-1">
                  {activeModalService.specs.map((s, idx) => (
                    <li key={idx}>• {s}</li>
                  ))}
                </ul>
              </div>

              <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                <span className="text-[11px] font-semibold text-sky-400 block mb-1">Ideal Application:</span>
                <p className="text-xs text-slate-300">{activeModalService.idealFor}</p>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-end space-x-3">
              <a
                id="modal-whatsapp-inquiry"
                href={`https://wa.me/?text=Hello%20Glass%20and%20Mirror%20Vendor%2C%20I%20would%20like%20to%20order%20or%20inquire%20about%3A%20${encodeURIComponent(activeModalService.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold inline-flex items-center space-x-2"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Inquire on WhatsApp</span>
              </a>

              <button
                id="modal-calculate-quote-btn"
                onClick={() => {
                  const title = activeModalService.title;
                  setActiveModalService(null);
                  onSelectServiceForQuote(title);
                }}
                className="px-4 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-white text-xs font-semibold cursor-pointer"
              >
                Calculate Price & Quote
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
