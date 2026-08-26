import React from "react";
import { 
  Briefcase, 
  HeartHandshake, 
  Plane, 
  Sparkles, 
  Compass, 
  Film, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2 
} from "lucide-react";
import { LUXURY_SERVICES, getWhatsAppUrl } from "../data";

interface ServicesSectionProps {
  onSelectServiceForBooking: (serviceTitle: string) => void;
}

export default function ServicesSection({ onSelectServiceForBooking }: ServicesSectionProps) {
  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case "Briefcase":
        return <Briefcase className="w-5 h-5 text-amber-400" />;
      case "HeartHandshake":
        return <HeartHandshake className="w-5 h-5 text-amber-400" />;
      case "Plane":
        return <Plane className="w-5 h-5 text-amber-400" />;
      case "Sparkles":
        return <Sparkles className="w-5 h-5 text-amber-400" />;
      case "Compass":
        return <Compass className="w-5 h-5 text-amber-400" />;
      case "Film":
        return <Film className="w-5 h-5 text-amber-400" />;
      case "ShieldCheck":
        return <ShieldCheck className="w-5 h-5 text-amber-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-amber-400" />;
    }
  };

  return (
    <section id="services" className="py-24 bg-zinc-950 text-zinc-100 relative border-b border-zinc-800">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-amber-500/5 rounded-full filter blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-zinc-900 border border-amber-500/30 px-3 py-1 rounded-full text-xs font-mono font-semibold text-amber-400 uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Tailored Luxury Experiences</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-sans tracking-tight text-white">
            Bespoke <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-500">Rental Services</span>
          </h2>

          <p className="text-sm sm:text-base text-zinc-400 font-sans leading-relaxed">
            From boardroom arrivals and high-society nuptials to discreet airport protocols, our Victoria Island team delivers flawless automotive hospitality.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {LUXURY_SERVICES.map((service) => (
            <div
              key={service.id}
              id={`service-card-${service.id}`}
              className="bg-zinc-900/80 hover:bg-zinc-900 border border-zinc-800 hover:border-amber-500/40 rounded-2xl p-6 sm:p-7 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                {/* Header with Icon & Badge */}
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                    {getServiceIcon(service.iconName)}
                  </div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-amber-400 bg-amber-950/40 border border-amber-500/30 px-2.5 py-1 rounded-md">
                    {service.badge}
                  </span>
                </div>

                {/* Service Title & Subtitle */}
                <div className="space-y-1">
                  <h3 className="text-lg sm:text-xl font-bold font-sans text-white group-hover:text-amber-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs font-mono text-amber-400/90 font-medium">
                    {service.subtitle}
                  </p>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-sans">
                  {service.description}
                </p>

                {/* Bullet Highlights */}
                <div className="space-y-2 pt-2">
                  <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider block">
                    Service Inclusions
                  </span>
                  <ul className="space-y-1.5 text-xs text-zinc-300">
                    {service.highlights.map((h, i) => (
                      <li key={i} className="flex items-start space-x-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 flex-shrink-0 mt-0.5" />
                        <span className="leading-snug">{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card Footer: Action */}
              <div className="pt-6 mt-6 border-t border-zinc-800/80 flex items-center justify-between">
                <button
                  onClick={() => onSelectServiceForBooking(service.title)}
                  className="text-xs font-bold text-amber-400 hover:text-amber-300 flex items-center space-x-1.5 cursor-pointer transition-colors group/btn"
                >
                  <span>Request for This Service</span>
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover/btn:translate-x-1 transition-transform" />
                </button>

                <a
                  href={getWhatsAppUrl(`Hello Luxury Car Rentals, I am interested in booking your service: "${service.title}". Please provide rates and details.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] font-mono text-emerald-400 hover:text-emerald-300 underline underline-offset-4"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
