import React from "react";
import { MessageSquare, ArrowRight, MapPin, HardHat, Truck } from "lucide-react";
import { PETHONA_BUSINESS_INFO, getWhatsAppUrl } from "../data";
import heroMachineryImg from "../assets/images/pethona_hero_1787249582581.jpg";

interface HeroProps {
  onInventoryClick?: () => void;
  onEquipmentClick?: () => void;
  onQuoteClick?: () => void;
  onContactClick?: () => void;
}

export default function Hero({ onInventoryClick, onEquipmentClick, onQuoteClick, onContactClick }: HeroProps) {
  const handleViewEquipment = () => {
    if (onInventoryClick) onInventoryClick();
    else if (onEquipmentClick) onEquipmentClick();
  };

  const handleRequestQuote = () => {
    if (onQuoteClick) onQuoteClick();
    else if (onContactClick) onContactClick();
  };

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] bg-zinc-950 flex items-center justify-center pt-28 pb-16 overflow-hidden border-b border-zinc-800"
    >
      {/* Background Lighting & Industrial Grids */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#27272a_1px,transparent_1px),linear-gradient(to_bottom,#27272a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_45%,#000_70%,transparent_100%)] opacity-20"></div>
        <div className="absolute top-1/4 left-1/6 w-[450px] h-[450px] bg-amber-500/10 rounded-full filter blur-[140px] pointer-events-none"></div>
        <div className="absolute bottom-1/4 right-1/6 w-[400px] h-[400px] bg-amber-600/10 rounded-full filter blur-[140px] pointer-events-none"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Headline, Value Proposition, Action CTAs */}
        <div className="lg:col-span-7 space-y-7 text-left">
          {/* Business Tagline Pill */}
          <div className="inline-flex items-center space-x-2.5 bg-zinc-900/90 border border-amber-500/30 px-3.5 py-1.5 rounded-full shadow-inner">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
            </span>
            <span className="text-xs font-mono font-semibold tracking-wide text-amber-400 uppercase">
              Pethona Integrated & Resources LTD • Forklifts & Heavy Equipment
            </span>
          </div>

          {/* Primary Main Headline */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-sans tracking-tight text-white leading-[1.1]">
              Reliable Forklifts & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-500">
                Heavy Equipment
              </span>{" "}
              for Your Business
            </h1>
            <p className="text-base sm:text-lg text-zinc-300 max-w-2xl font-sans font-normal leading-relaxed">
              Customers can contact Pethona Integrated & Resources LTD for equipment availability, inspections, and inquiries. We supply industrial forklifts, excavators, bulldozers, wheel loaders, and backhoe loaders for operations across Lagos and nationwide.
            </p>
          </div>

          {/* Value Highlights Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-1">
            <div className="bg-zinc-900/80 border border-zinc-800 p-3 rounded-xl flex items-center space-x-2.5">
              <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 flex-shrink-0">
                <HardHat className="w-4 h-4" />
              </div>
              <div>
                <span className="block text-[11px] font-mono text-zinc-400 uppercase tracking-wider">Heavy Plant</span>
                <span className="text-xs font-bold text-white">Excavators & Dozers</span>
              </div>
            </div>

            <div className="bg-zinc-900/80 border border-zinc-800 p-3 rounded-xl flex items-center space-x-2.5">
              <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 flex-shrink-0">
                <Truck className="w-4 h-4" />
              </div>
              <div>
                <span className="block text-[11px] font-mono text-zinc-400 uppercase tracking-wider">Forklifts</span>
                <span className="text-xs font-bold text-white">Electric, Diesel, LPG</span>
              </div>
            </div>

            <div className="bg-zinc-900/80 border border-zinc-800 p-3 rounded-xl flex items-center space-x-2.5 col-span-2 sm:col-span-1">
              <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 flex-shrink-0">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <span className="block text-[11px] font-mono text-zinc-400 uppercase tracking-wider">Yard Location</span>
                <span className="text-xs font-bold text-white">Idi Oro, Lagos</span>
              </div>
            </div>
          </div>

          {/* Prominent Action Buttons: View Equipment | Request a Quote | WhatsApp Us */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
            <button
              id="hero-view-equipment-btn"
              onClick={handleViewEquipment}
              className="inline-flex items-center justify-center space-x-2 bg-amber-500 hover:bg-amber-400 text-zinc-950 font-black font-sans text-sm px-6 py-3.5 rounded-xl shadow-lg shadow-amber-500/20 hover:shadow-amber-500/30 transition-all duration-150 transform hover:-translate-y-0.5 cursor-pointer"
            >
              <span>View Equipment</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              id="hero-request-quote-btn"
              onClick={handleRequestQuote}
              className="inline-flex items-center justify-center space-x-2 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 hover:border-zinc-500 text-zinc-100 font-bold font-sans text-sm px-6 py-3.5 rounded-xl transition-all duration-150 cursor-pointer"
            >
              <span>Request a Quote</span>
            </button>

            <a
              id="hero-whatsapp-btn"
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center space-x-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold font-sans text-sm px-6 py-3.5 rounded-xl shadow-lg shadow-emerald-950/40 hover:shadow-emerald-900/50 transition-all duration-150 transform hover:-translate-y-0.5"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Us</span>
            </a>
          </div>

          {/* Address Line Notice */}
          <div className="flex items-center space-x-2 text-xs text-zinc-400 font-sans pt-1">
            <MapPin className="w-4 h-4 text-amber-500 flex-shrink-0" />
            <span>
              Yard & Office: <strong className="text-zinc-200">{PETHONA_BUSINESS_INFO.address}</strong>
            </span>
          </div>
        </div>

        {/* Right Column: Machinery & Forklift Visual Showcase Card */}
        <div className="lg:col-span-5 relative w-full flex justify-center">
          <div className="w-full max-w-lg bg-zinc-900/90 border border-zinc-800 rounded-2xl p-4 sm:p-5 shadow-2xl backdrop-blur-sm relative overflow-hidden">
            {/* Equipment Showcase Header */}
            <div className="flex justify-between items-center border-b border-zinc-800 pb-3 mb-4">
              <div className="flex items-center space-x-2">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-pulse"></span>
                <span className="text-xs font-mono font-bold tracking-wider text-zinc-300 uppercase">
                  Machinery & Forklift Fleet
                </span>
              </div>
              <span className="text-[11px] font-mono text-amber-400 bg-amber-950/40 border border-amber-500/30 px-2 py-0.5 rounded">
                Contact for Price
              </span>
            </div>

            {/* Machinery Photo */}
            <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden border border-zinc-800 bg-zinc-950 mb-4 group">
              <img
                src={heroMachineryImg}
                alt="Pethona Integrated & Resources LTD Heavy Equipment and Forklifts"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-transparent to-transparent"></div>
              <div className="absolute bottom-3 left-3 right-3 flex justify-between items-end">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-amber-400 font-bold block">
                    Heavy Machinery & Forklift Solutions
                  </span>
                  <span className="text-sm font-bold text-white font-sans">
                    Excavators • Bulldozers • Loaders • Forklifts
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Equipment Matrix */}
            <div className="grid grid-cols-2 gap-2 text-xs font-sans mb-4">
              <div className="bg-zinc-950/80 border border-zinc-800 p-2.5 rounded-lg">
                <span className="text-[10px] font-mono text-zinc-400 block uppercase">Heavy Plant Machinery</span>
                <span className="font-bold text-white text-xs sm:text-sm">Excavators, Dozers, Loaders</span>
              </div>
              <div className="bg-zinc-950/80 border border-zinc-800 p-2.5 rounded-lg">
                <span className="text-[10px] font-mono text-zinc-400 block uppercase">Forklift Capacities</span>
                <span className="font-bold text-white text-xs sm:text-sm">2.0 Ton to 7.0+ Ton Units</span>
              </div>
            </div>

            {/* Quick Card Footer Action */}
            <div className="flex items-center justify-between pt-2 border-t border-zinc-800/80">
              <span className="text-xs text-zinc-400">Need specific machine specifications?</span>
              <a
                href={getWhatsAppUrl("Hello Pethona Integrated & Resources LTD, I'd like to check current equipment availability and pricing.")}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-amber-400 hover:text-amber-300 flex items-center space-x-1"
              >
                <span>Inquire on WhatsApp</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
