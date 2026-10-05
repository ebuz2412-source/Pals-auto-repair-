import React from "react";
import { 
  Clock, 
  MapPin, 
  Sparkles, 
  ShieldCheck, 
  Ruler, 
  CheckCircle2,
  Phone,
  MessageSquare,
  Compass,
  ArrowRight
} from "lucide-react";
import { WHY_CHOOSE_US_POINTS, BUSINESS_INFO } from "../data";

interface WhyChooseUsSectionProps {
  onRequestQuote: () => void;
}

export default function WhyChooseUsSection({ onRequestQuote }: WhyChooseUsSectionProps) {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Clock": return <Clock className="w-6 h-6 text-emerald-400" />;
      case "MapPin": return <MapPin className="w-6 h-6 text-sky-400" />;
      case "Sparkles": return <Sparkles className="w-6 h-6 text-sky-400" />;
      case "ShieldCheck": return <ShieldCheck className="w-6 h-6 text-sky-400" />;
      case "Ruler": return <Ruler className="w-6 h-6 text-sky-400" />;
      case "CheckCircle2": return <CheckCircle2 className="w-6 h-6 text-sky-400" />;
      default: return <ShieldCheck className="w-6 h-6 text-sky-400" />;
    }
  };

  return (
    <section id="why-us" className="py-20 lg:py-28 bg-[#0E131F] border-b border-white/10 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-widest text-sky-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{BUSINESS_INFO.name} • {BUSINESS_INFO.tagline}</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            {BUSINESS_INFO.brandMessage}
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed italic font-medium">
            {BUSINESS_INFO.additionalMessage}
          </p>
        </div>

        {/* 6 Key Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CHOOSE_US_POINTS.map((point, index) => (
            <div
              key={index}
              id={`why-choose-card-${index}`}
              className="glass-panel p-6 sm:p-7 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 space-y-4 group"
            >
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-sky-400/40 transition-colors">
                {getIcon(point.icon)}
              </div>

              <h3 className="font-heading text-lg font-bold text-white group-hover:text-sky-300 transition-colors">
                {point.title}
              </h3>

              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>

        {/* Operational Highlights Banner */}
        <div className="mt-14 glass-panel p-6 sm:p-8 rounded-2xl border border-white/15 bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-slate-950 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              <span>Available 24 Hours • 7 Days a Week</span>
            </div>
            <h3 className="font-heading text-xl sm:text-2xl font-bold text-white">
              Ready to Discuss Your Glass or Glazing Project?
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm max-w-xl">
              Visit our workshop at {BUSINESS_INFO.address}, or call / WhatsApp us for site inspection, measurement, and custom quotes.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              id="why-us-whatsapp-btn"
              href={BUSINESS_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold inline-flex items-center space-x-2 shadow-lg shadow-emerald-600/20 transition-all"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Now</span>
            </a>

            <a
              id="why-us-directions-btn"
              href={BUSINESS_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold inline-flex items-center space-x-2 border border-white/15 transition-all"
            >
              <Compass className="w-4 h-4 text-sky-400" />
              <span>Get Directions</span>
            </a>

            <button
              id="why-us-quote-btn"
              onClick={onRequestQuote}
              className="px-5 py-3 rounded-xl bg-sky-500 hover:bg-sky-400 text-white text-xs font-semibold inline-flex items-center space-x-2 shadow-lg shadow-sky-500/20 transition-all cursor-pointer"
            >
              <span>Glass Calculator</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
