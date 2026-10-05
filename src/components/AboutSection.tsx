import React from "react";
import { 
  MapPin, 
  Clock, 
  CheckCircle2, 
  Ruler, 
  Sparkles, 
  ShieldCheck, 
  Compass, 
  Phone, 
  MessageSquare,
  Truck,
  ArrowRight
} from "lucide-react";
import { BUSINESS_INFO, GLASS_IMAGES, SERVICE_AREAS_LAGOS } from "../data";

interface AboutSectionProps {
  onRequestQuote: () => void;
  onExploreServices: () => void;
}

export default function AboutSection({ onRequestQuote, onExploreServices }: AboutSectionProps) {
  return (
    <section id="about" className="py-20 lg:py-28 bg-[#0E131F] border-b border-white/10 relative overflow-hidden">
      {/* Glow highlight */}
      <div className="absolute top-1/2 -left-48 w-96 h-96 bg-sky-500/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image Mosaic showcasing real craftsmanship */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative">
              {/* Primary Workshop & Product Image */}
              <div className="rounded-2xl overflow-hidden border border-white/15 shadow-2xl bg-slate-900 aspect-[4/3] relative">
                <img
                  src={GLASS_IMAGES.customMirrors}
                  alt="OLANREWAJU GLAZIER - Custom mirrors and glass fabrication in Mushin Lagos"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>

                {/* Floating location tag on image */}
                <div className="absolute bottom-4 left-4 right-4 glass-panel p-3.5 rounded-xl border border-white/20">
                  <div className="flex items-center space-x-2 text-sky-400 font-semibold text-xs mb-1">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{BUSINESS_INFO.address}</span>
                  </div>
                  <p className="text-white text-xs font-medium">
                    {BUSINESS_INFO.brandMessage} — Central fabrication workshop supplying glass & mirror installations across all of Lagos.
                  </p>
                </div>
              </div>

              {/* Secondary Inset Image - Precision Edge Finishing */}
              <div className="hidden sm:block absolute -bottom-8 -right-6 w-56 rounded-xl overflow-hidden border-2 border-slate-900 shadow-2xl bg-slate-950">
                <div className="aspect-[4/3] relative">
                  <img
                    src={GLASS_IMAGES.edgePolishing}
                    alt="Precision glass cutting and edge polishing on diamond wheel"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-slate-950/30"></div>
                  <div className="absolute bottom-2 left-2 right-2 px-2 py-1 bg-black/75 rounded text-[10px] text-slate-200 font-medium text-center">
                    Precision Edge Polishing
                  </div>
                </div>
              </div>
            </div>

            {/* Quick 24 Hours Availability Indicator Banner */}
            <div className="pt-8 sm:pt-4">
              <div className="glass-panel p-4 rounded-xl border border-emerald-500/20 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 flex-shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">Open 24 Hours Daily</h4>
                    <p className="text-xs text-slate-400">08138511873 • 09014120207</p>
                  </div>
                </div>

                <a
                  id="about-call-now"
                  href={BUSINESS_INFO.phoneLink}
                  className="px-3.5 py-1.5 rounded-lg bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 text-xs font-semibold border border-emerald-500/30 transition-colors"
                >
                  Call Now
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: About Content */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-widest text-sky-400">
              <Sparkles className="w-3.5 h-3.5" />
              <span>ABOUT {BUSINESS_INFO.name}</span>
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
              {BUSINESS_INFO.shortDescription}
            </h2>

            <div className="p-3.5 rounded-xl bg-sky-500/10 border border-sky-400/20 text-sky-200 text-xs font-medium">
              <strong className="text-white uppercase font-bold block mb-0.5">{BUSINESS_INFO.brandMessage}</strong>
              {BUSINESS_INFO.additionalMessage}
            </div>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Based at <strong className="text-white font-medium">{BUSINESS_INFO.address}</strong>, <span className="text-white font-semibold">{BUSINESS_INFO.name}</span> is your dependable glass expert providing master craftsmanship across residential, commercial, and architectural projects throughout Lagos, Nigeria.
            </p>

            <p className="text-slate-400 text-sm leading-relaxed">
              We specialize in Aluminium & Glass Windows, Sliding & Swing Glass Doors, Shower Enclosures, Glass Partitions & Office Dividers, Shopfronts & Storefronts, Custom Wall & Vanity Mirrors, Table Tops & Glass Shelves, Toughened & Tempered Glass, Broken Glass Replacement, and Tinted, Frosted & Reflective Glass.
            </p>

            {/* Core Pillars / Business Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="glass-panel p-3.5 rounded-xl border border-white/10">
                <div className="flex items-center space-x-2.5 text-white font-semibold text-sm mb-1">
                  <ShieldCheck className="w-4 h-4 text-sky-400" />
                  <span>Quality Materials</span>
                </div>
                <p className="text-xs text-slate-400">
                  Certified safety glass, high-clarity mirrors, and durable aluminium hardware.
                </p>
              </div>

              <div className="glass-panel p-3.5 rounded-xl border border-white/10">
                <div className="flex items-center space-x-2.5 text-white font-semibold text-sm mb-1">
                  <Ruler className="w-4 h-4 text-sky-400" />
                  <span>Expert Workmanship</span>
                </div>
                <p className="text-xs text-slate-400">
                  Precision cutting, edge polishing, beveling, and seamless mounting.
                </p>
              </div>

              <div className="glass-panel p-3.5 rounded-xl border border-white/10">
                <div className="flex items-center space-x-2.5 text-white font-semibold text-sm mb-1">
                  <Clock className="w-4 h-4 text-emerald-400" />
                  <span>On Time Delivery</span>
                </div>
                <p className="text-xs text-slate-400">
                  Punctual project schedules and fast turnaround across Lagos.
                </p>
              </div>

              <div className="glass-panel p-3.5 rounded-xl border border-white/10">
                <div className="flex items-center space-x-2.5 text-white font-semibold text-sm mb-1">
                  <CheckCircle2 className="w-4 h-4 text-sky-400" />
                  <span>100% Customer Satisfaction</span>
                </div>
                <p className="text-xs text-slate-400">
                  Building lasting trust with every single installation and repair.
                </p>
              </div>
            </div>

            {/* Lagos Service Coverage List */}
            <div className="pt-2 border-t border-white/10">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                Serving All Areas Across Lagos State:
              </h4>
              <div className="flex flex-wrap gap-2">
                {SERVICE_AREAS_LAGOS.map((area, idx) => (
                  <span
                    key={idx}
                    className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-slate-300"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-4">
              <a
                id="about-directions-btn"
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-semibold border border-white/15 transition-all"
              >
                <Compass className="w-4 h-4 text-sky-400" />
                <span>Get Directions (Mushin)</span>
              </a>

              <a
                id="about-whatsapp-btn"
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-emerald-600/90 hover:bg-emerald-600 text-white text-xs font-semibold transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>

              <button
                id="about-quote-btn"
                onClick={onRequestQuote}
                className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-white text-xs font-semibold transition-all cursor-pointer"
              >
                <span>Request a Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
