import React from "react";
import { ArrowRight, PhoneCall, MessageSquare, Shield, Sparkles, MapPin, Award, CheckCircle2 } from "lucide-react";
import { BUSINESS_INFO, getWhatsAppUrl, LUXURY_IMAGES } from "../data";

interface HeroProps {
  onRentClick: () => void;
  onFleetClick: () => void;
  onServicesClick?: () => void;
  onContactClick?: () => void;
}

export default function Hero({ onRentClick, onFleetClick, onServicesClick, onContactClick }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative min-h-[95vh] bg-zinc-950 flex items-center justify-center pt-32 pb-20 overflow-hidden border-b border-zinc-800/80"
    >
      {/* Ambient Lighting & Luxury Grid Backdrop */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(245,158,11,0.12),transparent_70%)]"></div>
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-amber-500/8 rounded-full filter blur-[150px] pointer-events-none"></div>
        <div className="absolute bottom-10 right-1/4 w-[450px] h-[450px] bg-yellow-600/8 rounded-full filter blur-[140px] pointer-events-none"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#27272a_1px,transparent_1px),linear-gradient(to_bottom,#27272a_1px,transparent_1px)] bg-[size:4.5rem_4.5rem] [mask-image:radial-gradient(ellipse_70%_50%_at_50%_40%,#000_65%,transparent_100%)] opacity-15"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Headline, Luxury Positioning, 4 Key Action Buttons */}
        <div className="lg:col-span-7 space-y-7 text-left">
          {/* VIP Badge */}
          <div className="inline-flex items-center space-x-2 bg-zinc-900/90 border border-amber-500/30 px-3.5 py-1.5 rounded-full shadow-inner">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span className="text-[11px] font-mono font-semibold tracking-wider text-amber-400 uppercase">
              Premier Luxury & Exotic Car Rental • Victoria Island, Lagos
            </span>
          </div>

          {/* Main Headline */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-sans tracking-tight text-white leading-[1.1]">
              Luxury Cars. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-500">
                Exceptional Journeys.
              </span>
            </h1>
            <p className="text-base sm:text-lg text-zinc-300 max-w-2xl font-normal leading-relaxed">
              Arrive with distinction. We provide Lagos's finest fleet of luxury sedans, prestige SUVs, grand touring sports cars, executive VIP transports, and exotic vehicles for discerning clients, weddings, corporate missions, and high-profile events.
            </p>
          </div>

          {/* Value Highlights Pill Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-1">
            <div className="bg-zinc-900/80 border border-zinc-800 p-3 rounded-xl flex items-center space-x-2.5">
              <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 flex-shrink-0">
                <Award className="w-4 h-4" />
              </div>
              <div>
                <span className="block text-[10px] font-mono text-zinc-400 uppercase tracking-wider">Fleet Standard</span>
                <span className="text-xs font-bold text-white">Showroom Pristine</span>
              </div>
            </div>

            <div className="bg-zinc-900/80 border border-zinc-800 p-3 rounded-xl flex items-center space-x-2.5">
              <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 flex-shrink-0">
                <Shield className="w-4 h-4" />
              </div>
              <div>
                <span className="block text-[10px] font-mono text-zinc-400 uppercase tracking-wider">Driver Options</span>
                <span className="text-xs font-bold text-white">Chauffeur & Self-Drive</span>
              </div>
            </div>

            <div className="bg-zinc-900/80 border border-zinc-800 p-3 rounded-xl flex items-center space-x-2.5 col-span-2 sm:col-span-1">
              <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 flex-shrink-0">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <span className="block text-[10px] font-mono text-zinc-400 uppercase tracking-wider">Prime Location</span>
                <span className="text-xs font-bold text-white">Victoria Island</span>
              </div>
            </div>
          </div>

          {/* 4 Prominent Action Buttons: Rent a Car | View Our Fleet | WhatsApp | Call Now */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            {/* 1. Rent a Car */}
            <button
              id="hero-rent-car-btn"
              onClick={onRentClick}
              className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-zinc-950 font-black font-sans text-sm px-6 py-3.5 rounded-xl shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 transition-all duration-150 transform hover:-translate-y-0.5 cursor-pointer"
            >
              <span>Rent a Car</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            {/* 2. View Our Fleet */}
            <button
              id="hero-view-fleet-btn"
              onClick={onFleetClick}
              className="inline-flex items-center justify-center space-x-2 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 hover:border-zinc-500 text-zinc-100 font-bold font-sans text-sm px-5 py-3.5 rounded-xl transition-all duration-150 cursor-pointer"
            >
              <span>View Our Fleet</span>
            </button>

            {/* 3. WhatsApp */}
            <a
              id="hero-whatsapp-btn"
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center space-x-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold font-sans text-sm px-5 py-3.5 rounded-xl shadow-lg shadow-emerald-950/40 hover:shadow-emerald-900/50 transition-all duration-150 transform hover:-translate-y-0.5"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>

            {/* 4. Call Now */}
            <a
              id="hero-call-now-btn"
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="inline-flex items-center justify-center space-x-2 bg-zinc-900/90 hover:bg-zinc-800 border border-amber-500/40 hover:border-amber-400 text-amber-400 font-bold font-sans text-sm px-5 py-3.5 rounded-xl transition-all duration-150"
            >
              <PhoneCall className="w-4 h-4 text-amber-400" />
              <span>Call Now</span>
            </a>
          </div>

          {/* Location Verification line */}
          <div className="flex items-center space-x-2 text-xs text-zinc-400 font-sans pt-1">
            <MapPin className="w-4 h-4 text-amber-400 flex-shrink-0" />
            <span>
              Flagship Showroom & Dispatch: <strong className="text-zinc-200">{BUSINESS_INFO.address}</strong>
            </span>
          </div>
        </div>

        {/* Right Column: Hero Luxury Vehicle Display Card */}
        <div className="lg:col-span-5 relative w-full flex justify-center">
          <div className="w-full max-w-lg bg-zinc-900/90 border border-zinc-800 rounded-2xl p-4 sm:p-5 shadow-2xl backdrop-blur-md relative overflow-hidden group">
            {/* Header Badge */}
            <div className="flex justify-between items-center border-b border-zinc-800/90 pb-3 mb-4">
              <div className="flex items-center space-x-2">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse"></span>
                <span className="text-xs font-mono font-bold tracking-wider text-zinc-200 uppercase">
                  Flagship Luxury Showcase
                </span>
              </div>
              <span className="text-[11px] font-mono text-amber-400 bg-amber-950/50 border border-amber-500/30 px-2.5 py-0.5 rounded-full">
                Victoria Island Fleet
              </span>
            </div>

            {/* Hero Car Showcase Image */}
            <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden border border-zinc-800 bg-zinc-950 mb-4">
              <img
                src={LUXURY_IMAGES.hero}
                alt="Luxury Car Rentals Victoria Island Lagos"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent"></div>
              <div className="absolute bottom-3 left-3 right-3 flex justify-between items-end">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-amber-400 font-bold block">
                    Ultra-Prestige & Executive Class
                  </span>
                  <span className="text-sm font-bold text-white font-sans">
                    Sedans • SUVs • Sports & Exotics
                  </span>
                </div>
                <div className="bg-zinc-900/90 border border-zinc-700/80 px-2.5 py-1 rounded text-[11px] font-mono font-semibold text-zinc-300">
                  Daily & Chauffeur Hire
                </div>
              </div>
            </div>

            {/* Quick Fleet Highlights Grid */}
            <div className="grid grid-cols-2 gap-2 text-xs font-sans mb-4">
              <div className="bg-zinc-950/80 border border-zinc-800 p-2.5 rounded-lg">
                <span className="text-[10px] font-mono text-amber-400/90 block uppercase">Chauffeur Service</span>
                <span className="font-bold text-white text-xs sm:text-sm">Uniformed & Security Protocol</span>
              </div>
              <div className="bg-zinc-950/80 border border-zinc-800 p-2.5 rounded-lg">
                <span className="text-[10px] font-mono text-amber-400/90 block uppercase">Airport Protocol</span>
                <span className="font-bold text-white text-xs sm:text-sm">MMIA VIP Meet & Greet</span>
              </div>
            </div>

            {/* Quick Card Footer Action */}
            <div className="flex items-center justify-between pt-2.5 border-t border-zinc-800/80">
              <div className="flex items-center space-x-1.5 text-xs text-zinc-400">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                <span>Instant Victoria Island Dispatch</span>
              </div>
              <button
                onClick={onRentClick}
                className="text-xs font-bold text-amber-400 hover:text-amber-300 flex items-center space-x-1 cursor-pointer transition-colors"
              >
                <span>Reserve Now</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
