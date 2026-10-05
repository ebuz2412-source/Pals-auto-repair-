import React from "react";
import { 
  MapPin, 
  Phone, 
  MessageSquare, 
  Compass, 
  ArrowRight, 
  Clock, 
  ShieldCheck, 
  Sparkles,
  Layers,
  ChevronRight,
  Maximize2
} from "lucide-react";
import { BUSINESS_INFO, GLASS_IMAGES } from "../data";

interface HeroProps {
  onExploreServices: () => void;
  onRequestQuote: () => void;
  onViewProjects: () => void;
}

export default function Hero({ onExploreServices, onRequestQuote, onViewProjects }: HeroProps) {
  return (
    <section 
      id="hero" 
      className="relative pt-32 sm:pt-40 pb-20 lg:pb-32 overflow-hidden border-b border-white/10"
      style={{
        background: "radial-gradient(circle at 50% 20%, rgba(30, 41, 59, 0.6) 0%, rgba(11, 15, 23, 1) 80%)"
      }}
    >
      {/* Translucent Glass Grid Ambient Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>

      {/* Subtle light reflections */}
      <div className="absolute -top-32 left-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Badges & Status Strip */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-8">
          {/* Location Badge */}
          <div className="inline-flex items-center space-x-2 bg-slate-900/80 backdrop-blur-md border border-white/10 px-4 py-1.5 rounded-full shadow-sm text-xs font-medium text-slate-300">
            <MapPin className="w-3.5 h-3.5 text-sky-400" />
            <span>{BUSINESS_INFO.address}</span>
          </div>

          {/* 24/7 Availability Badge */}
          <div className="inline-flex items-center space-x-2 bg-slate-900/80 backdrop-blur-md border border-emerald-500/30 px-4 py-1.5 rounded-full shadow-sm text-xs font-medium text-emerald-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            <Clock className="w-3.5 h-3.5" />
            <span>Open 24 Hours • Prompt Lagos-Wide Delivery & Installation</span>
          </div>
        </div>

        {/* Central Hero Typography & Value Proposition */}
        <div className="max-w-4xl mx-auto text-center space-y-6 mb-12">
          {/* Brand Tagline Badge */}
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-sky-400/30 backdrop-blur-sm shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-sky-400" />
            <span className="text-[11px] font-bold tracking-[0.2em] text-sky-300 uppercase">
              {BUSINESS_INFO.name} • {BUSINESS_INFO.tagline}
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.1]">
            {BUSINESS_INFO.brandMessage} <br className="hidden sm:inline" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-400 via-slate-200 to-blue-400">
              {BUSINESS_INFO.shortDescription}
            </span>
          </h1>

          {/* Subtitle / Description */}
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Specializing in Aluminium & Glass Windows, Sliding & Swing Glass Doors, Shower Enclosures, Glass Partitions, Shopfronts, Wall & Vanity Mirrors, Table Tops, and Toughened Glass.
          </p>

          {/* Trust Motto Banner */}
          <div className="inline-block px-4 py-2 rounded-xl bg-slate-900/90 border border-white/10 text-xs sm:text-sm font-medium text-slate-200 italic shadow-inner">
            {BUSINESS_INFO.additionalMessage}
          </div>

          {/* DIRECT CALL-TO-ACTION BUTTONS (Call, WhatsApp, Get Directions, Request Quote) */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 pt-2">
            {/* WhatsApp Button */}
            <a
              id="hero-whatsapp-btn"
              href={BUSINESS_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2.5 bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-3.5 rounded-xl text-sm font-semibold tracking-wide shadow-lg shadow-emerald-600/30 transition-all hover:scale-[1.02] cursor-pointer"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp (09014120207)</span>
            </a>

            {/* Call Us Button */}
            <a
              id="hero-call-btn"
              href={BUSINESS_INFO.phoneLink}
              className="inline-flex items-center space-x-2.5 bg-slate-800 hover:bg-slate-700 text-white border border-white/20 px-6 py-3.5 rounded-xl text-sm font-semibold tracking-wide shadow-md transition-all hover:scale-[1.02] cursor-pointer"
            >
              <Phone className="w-4 h-4 text-sky-400" />
              <span>Call: 08138511873</span>
            </a>

            {/* Get Directions Button (Google Maps) */}
            <a
              id="hero-directions-btn"
              href={BUSINESS_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2.5 bg-white/5 hover:bg-white/10 text-slate-200 border border-white/15 px-6 py-3.5 rounded-xl text-sm font-semibold tracking-wide backdrop-blur-md transition-all hover:scale-[1.02] cursor-pointer"
            >
              <Compass className="w-4 h-4 text-sky-400" />
              <span>Get Directions</span>
            </a>

            {/* Calculate / Request Quote */}
            <button
              id="hero-quote-btn"
              onClick={onRequestQuote}
              className="inline-flex items-center space-x-2.5 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white px-6 py-3.5 rounded-xl text-sm font-semibold tracking-wide shadow-lg shadow-sky-500/25 transition-all hover:scale-[1.02] cursor-pointer"
            >
              <span>Instant Glass Calculator</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Feature Hero Visual Grid */}
        <div className="relative mt-8 lg:mt-14 max-w-6xl mx-auto">
          {/* Framed Glass Showcase Container */}
          <div className="rounded-2xl border border-white/15 bg-slate-900/60 backdrop-blur-xl p-2 sm:p-3 shadow-2xl relative overflow-hidden">
            <div className="relative aspect-[16/9] sm:aspect-[21/9] rounded-xl overflow-hidden bg-slate-950">
              <img
                src={GLASS_IMAGES.hero}
                alt="OLANREWAJU GLAZIER - Expert In All Kinds Of Glass Works in Mushin Lagos"
                className="w-full h-full object-cover object-center transform scale-100 hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent"></div>

              {/* In-Image Glass Overlay Card */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
                <div className="glass-panel p-4 rounded-xl max-w-lg border border-white/15">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-sky-400">
                    Workshop & Glazing Services
                  </span>
                  <h2 className="text-white font-heading font-semibold text-base sm:text-lg mt-0.5">
                    {BUSINESS_INFO.address}
                  </h2>
                  <p className="text-slate-300 text-xs mt-1">
                    {BUSINESS_INFO.brandMessage} — Certified materials, expert workmanship, and prompt Lagos-wide delivery.
                  </p>
                </div>

                <div className="flex items-center space-x-2">
                  <button
                    id="hero-view-services-pill"
                    onClick={onExploreServices}
                    className="glass-panel hover:bg-white/20 text-white text-xs font-semibold px-4 py-2.5 rounded-lg border border-white/20 flex items-center space-x-1.5 transition-colors cursor-pointer"
                  >
                    <span>View All Services</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    id="hero-view-projects-pill"
                    onClick={onViewProjects}
                    className="bg-sky-500 hover:bg-sky-400 text-white text-xs font-semibold px-4 py-2.5 rounded-lg flex items-center space-x-1.5 transition-colors cursor-pointer"
                  >
                    <span>Completed Projects</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Pillars Strip - Showcasing Business Highlights */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mt-6">
            <div className="glass-panel p-3.5 sm:p-4 rounded-xl border border-white/10 flex items-center space-x-3">
              <div className="w-9 h-9 rounded-lg bg-sky-500/10 border border-sky-400/20 flex items-center justify-center flex-shrink-0 text-sky-400">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-semibold text-white">Quality Materials</h4>
                <p className="text-[11px] text-slate-400">Certified Safety Glass</p>
              </div>
            </div>

            <div className="glass-panel p-3.5 sm:p-4 rounded-xl border border-white/10 flex items-center space-x-3">
              <div className="w-9 h-9 rounded-lg bg-sky-500/10 border border-sky-400/20 flex items-center justify-center flex-shrink-0 text-sky-400">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-semibold text-white">Expert Workmanship</h4>
                <p className="text-[11px] text-slate-400">Precision Installation</p>
              </div>
            </div>

            <div className="glass-panel p-3.5 sm:p-4 rounded-xl border border-white/10 flex items-center space-x-3">
              <div className="w-9 h-9 rounded-lg bg-sky-500/10 border border-sky-400/20 flex items-center justify-center flex-shrink-0 text-sky-400">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-semibold text-white">On Time Delivery</h4>
                <p className="text-[11px] text-slate-400">Prompt Across Lagos</p>
              </div>
            </div>

            <div className="glass-panel p-3.5 sm:p-4 rounded-xl border border-emerald-500/20 flex items-center space-x-3">
              <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-400/20 flex items-center justify-center flex-shrink-0 text-emerald-400">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-semibold text-white">100% Satisfaction</h4>
                <p className="text-[11px] text-slate-400">Built On Customer Trust</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
