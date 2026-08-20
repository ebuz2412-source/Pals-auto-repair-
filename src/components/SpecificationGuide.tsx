import React, { useState } from "react";
import { SPEC_GUIDES, PETHONA_BUSINESS_INFO, getWhatsAppUrl } from "../data";
import { SpecificationGuideItem } from "../types";
import { Scale, ArrowUpRight, Zap, CircleDot, CheckCircle2, MessageSquare, HardHat, Truck } from "lucide-react";

const ICONS_MAP: Record<string, any> = {
  Scale,
  ArrowUpRight,
  Zap,
  CircleDot
};

export default function SpecificationGuide() {
  const [activeItem, setActiveItem] = useState<SpecificationGuideItem>(SPEC_GUIDES[0]);

  // Vector industrial diagrams for equipment buyers
  const renderForkliftSchematic = (id: string) => {
    switch (id) {
      case "g1": // Load Capacity & Center
        return (
          <div className="w-full bg-zinc-950 rounded-2xl border border-zinc-800 p-6 relative overflow-hidden flex flex-col items-center justify-center">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#27272a_1px,transparent_1px),linear-gradient(to_bottom,#27272a_1px,transparent_1px)] bg-[size:16px_16px] opacity-20"></div>
            
            {/* SVG Load Center Diagram */}
            <svg className="w-full max-w-sm h-36 text-amber-500 relative z-10" viewBox="0 0 100 45" fill="none" stroke="currentColor" strokeWidth="0.8">
              <line x1="5" y1="40" x2="95" y2="40" stroke="#52525b" strokeWidth="0.5" />
              <path d="M15,40 L15,25 L35,25 L40,15 L55,15 L55,40 Z" stroke="#d97706" strokeWidth="0.9" fill="#18181b" />
              <line x1="55" y1="5" x2="55" y2="40" stroke="#f59e0b" strokeWidth="1.5" />
              <line x1="55" y1="38" x2="85" y2="38" stroke="#f59e0b" strokeWidth="1.5" />
              <rect x="58" y="20" width="22" height="18" rx="1" stroke="#f59e0b" strokeWidth="0.8" fill="#78350f" fillOpacity="0.4" />
              <circle cx="25" cy="40" r="3.5" stroke="#71717a" strokeWidth="0.8" fill="#09090b" />
              <circle cx="50" cy="40" r="3.5" stroke="#71717a" strokeWidth="0.8" fill="#09090b" />
              <line x1="69" y1="15" x2="69" y2="40" stroke="#ef4444" strokeWidth="0.6" strokeDasharray="1.5,1.5" />
              <circle cx="69" cy="29" r="1.5" fill="#ef4444" />
              <text x="63" y="13" fontSize="2.5" fill="#ef4444" fontFamily="monospace">500mm Center</text>
            </svg>

            {/* Readout stats */}
            <div className="w-full grid grid-cols-3 gap-2 text-center font-mono text-[10px] text-zinc-400 mt-4 relative z-10 border-t border-zinc-900 pt-3">
              <div>
                <span className="block text-zinc-500">STD_CENTER</span>
                <span className="text-white font-bold">500 mm</span>
              </div>
              <div>
                <span className="block text-zinc-500">STABILITY_FACTOR</span>
                <span className="text-emerald-400 font-bold">1.33 SAFE</span>
              </div>
              <div>
                <span className="block text-zinc-500">MAST_TILT</span>
                <span className="text-amber-400 font-bold">6° / 12°</span>
              </div>
            </div>
          </div>
        );

      case "g2": // Mast Types
        return (
          <div className="w-full bg-zinc-950 rounded-2xl border border-zinc-800 p-6 relative overflow-hidden flex flex-col items-center justify-center">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#27272a_1px,transparent_1px),linear-gradient(to_bottom,#27272a_1px,transparent_1px)] bg-[size:16px_16px] opacity-20"></div>
            
            <svg className="w-full max-w-sm h-36 text-amber-500 relative z-10" viewBox="0 0 100 45" fill="none" stroke="currentColor" strokeWidth="0.8">
              <rect x="25" y="10" width="8" height="30" stroke="#71717a" strokeWidth="0.7" fill="#18181b" />
              <rect x="27" y="5" width="4" height="25" stroke="#f59e0b" strokeWidth="0.8" fill="#27272a" />
              <line x1="29" y1="38" x2="29" y2="8" stroke="#3b82f6" strokeWidth="1" />
              <line x1="42" y1="5" x2="42" y2="40" stroke="#f59e0b" strokeWidth="0.5" strokeDasharray="2,1" />
              <text x="45" y="24" fontSize="3" fill="#f59e0b" fontFamily="monospace">Lift Height: 3.0m - 7.5m</text>
              <path d="M60,5 L85,5 L85,40" stroke="#52525b" strokeWidth="0.7" strokeDasharray="2,2" />
              <text x="62" y="12" fontSize="2.5" fill="#a1a1aa" fontFamily="monospace">Container Entry Spec</text>
            </svg>

            <div className="w-full grid grid-cols-3 gap-2 text-center font-mono text-[10px] text-zinc-400 mt-4 relative z-10 border-t border-zinc-900 pt-3">
              <div>
                <span className="block text-zinc-500">MAST_TYPE</span>
                <span className="text-white font-bold">2-Stage / 3-Stage</span>
              </div>
              <div>
                <span className="block text-zinc-500">FREE_LIFT</span>
                <span className="text-emerald-400 font-bold">Full Option</span>
              </div>
              <div>
                <span className="block text-zinc-500">CLEARANCE</span>
                <span className="text-amber-400 font-bold">Low Overhead</span>
              </div>
            </div>
          </div>
        );

      case "g3": // Fuel & Powertrain
        return (
          <div className="w-full bg-zinc-950 rounded-2xl border border-zinc-800 p-6 relative overflow-hidden flex flex-col items-center justify-center">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#27272a_1px,transparent_1px),linear-gradient(to_bottom,#27272a_1px,transparent_1px)] bg-[size:16px_16px] opacity-20"></div>
            
            <div className="grid grid-cols-3 gap-3 w-full max-w-sm relative z-10 py-2">
              <div className="bg-zinc-900 border border-zinc-800 p-3 rounded-xl text-center space-y-1">
                <span className="text-emerald-400 font-mono text-xs font-bold block">ELECTRIC</span>
                <span className="text-[10px] text-zinc-400 block">Zero Emissions</span>
                <span className="text-[9px] text-zinc-500 block">Indoor Warehouses</span>
              </div>
              <div className="bg-zinc-900 border border-zinc-800 p-3 rounded-xl text-center space-y-1">
                <span className="text-amber-400 font-mono text-xs font-bold block">DIESEL</span>
                <span className="text-[10px] text-zinc-400 block">High Torque</span>
                <span className="text-[9px] text-zinc-500 block">Outdoor Yards</span>
              </div>
              <div className="bg-zinc-900 border border-zinc-800 p-3 rounded-xl text-center space-y-1">
                <span className="text-blue-400 font-mono text-xs font-bold block">LPG / GAS</span>
                <span className="text-[10px] text-zinc-400 block">Quick Refuel</span>
                <span className="text-[9px] text-zinc-500 block">Indoor / Outdoor</span>
              </div>
            </div>

            <div className="w-full grid grid-cols-3 gap-2 text-center font-mono text-[10px] text-zinc-400 mt-4 relative z-10 border-t border-zinc-900 pt-3">
              <div>
                <span className="block text-zinc-500">ENERGY</span>
                <span className="text-white font-bold">48V / 80V / Fuel</span>
              </div>
              <div>
                <span className="block text-zinc-500">DUTY_CYCLE</span>
                <span className="text-emerald-400 font-bold">Multi-Shift</span>
              </div>
              <div>
                <span className="block text-zinc-500">OPERATIONAL</span>
                <span className="text-amber-400 font-bold">Cost-Efficient</span>
              </div>
            </div>
          </div>
        );

      case "g4": // Tires
        return (
          <div className="w-full bg-zinc-950 rounded-2xl border border-zinc-800 p-6 relative overflow-hidden flex flex-col items-center justify-center">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#27272a_1px,transparent_1px),linear-gradient(to_bottom,#27272a_1px,transparent_1px)] bg-[size:16px_16px] opacity-20"></div>
            
            <div className="grid grid-cols-2 gap-4 w-full max-w-sm relative z-10 py-3">
              <div className="bg-zinc-900 border border-zinc-800 p-3 rounded-xl text-center space-y-1">
                <span className="text-amber-400 font-mono text-xs font-bold block">SOLID RUBBER</span>
                <span className="text-[10px] text-zinc-300 block">100% Puncture Proof</span>
                <span className="text-[9px] text-zinc-500 block">Smooth warehouse floors</span>
              </div>
              <div className="bg-zinc-900 border border-zinc-800 p-3 rounded-xl text-center space-y-1">
                <span className="text-amber-400 font-mono text-xs font-bold block">PNEUMATIC TREAD</span>
                <span className="text-[10px] text-zinc-300 block">Deep Air Cushioning</span>
                <span className="text-[9px] text-zinc-500 block">Rough outdoor surfaces</span>
              </div>
            </div>

            <div className="w-full grid grid-cols-3 gap-2 text-center font-mono text-[10px] text-zinc-400 mt-4 relative z-10 border-t border-zinc-900 pt-3">
              <div>
                <span className="block text-zinc-500">TIRE_COMPOUND</span>
                <span className="text-white font-bold">Industrial Grade</span>
              </div>
              <div>
                <span className="block text-zinc-500">FLOOR_PROTECT</span>
                <span className="text-emerald-400 font-bold">Non-Marking Opt</span>
              </div>
              <div>
                <span className="block text-zinc-500">TERRAIN</span>
                <span className="text-amber-400 font-bold">All-Ground</span>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section id="specs" className="py-20 bg-zinc-950 text-white border-b border-zinc-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest bg-amber-500/10 border border-amber-500/30 px-3 py-1 rounded-full">
            Equipment Buyer's Guide
          </span>
          <h2 className="text-3xl sm:text-4xl font-black font-sans tracking-tight text-white">
            Machinery & Forklift Technical Guidelines
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 font-sans leading-relaxed">
            Understanding key operational specifications helps you select the right equipment for your warehouse dimensions, project terrain, lifting tonnages, and operational environment.
          </p>
        </div>

        {/* Layout: Guide Selector on Left, Interactive Schematic on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Interactive Topics List */}
          <div className="lg:col-span-5 space-y-3 text-left">
            {SPEC_GUIDES.map((item) => {
              const isActive = activeItem.id === item.id;
              const IconComp = ICONS_MAP[item.iconName] || Scale;
              return (
                <div
                  key={item.id}
                  id={`spec-tab-${item.id}`}
                  onClick={() => setActiveItem(item)}
                  className={`p-4 rounded-2xl border cursor-pointer transition-all duration-200 ${
                    isActive
                      ? "bg-zinc-900 text-white border-amber-500/60 shadow-xl"
                      : "bg-zinc-900/40 text-zinc-300 border-zinc-800 hover:bg-zinc-900/80 hover:border-zinc-700"
                  }`}
                >
                  <div className="flex items-start space-x-3.5">
                    <div className={`p-2.5 rounded-xl mt-0.5 flex-shrink-0 ${isActive ? "bg-amber-500 text-zinc-950 font-bold" : "bg-zinc-800 text-zinc-400"}`}>
                      <IconComp className="w-5 h-5" />
                    </div>
                    <div className="space-y-1">
                      <span className={`text-[10px] font-mono font-bold tracking-widest uppercase block ${isActive ? "text-amber-400" : "text-zinc-500"}`}>
                        {item.category}
                      </span>
                      <h4 className="text-sm sm:text-base font-bold font-sans leading-tight">
                        {item.title}
                      </h4>
                      <p className={`text-xs font-sans leading-relaxed line-clamp-2 ${isActive ? "text-zinc-300" : "text-zinc-400"}`}>
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Active Schematic */}
          <div className="lg:col-span-7 bg-zinc-900/80 border border-zinc-800 rounded-2xl p-6 shadow-xl relative space-y-5">
            <div className="flex justify-between items-center border-b border-zinc-800 pb-3">
              <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest">
                Technical Diagram
              </span>
              <span className="text-[10px] font-mono text-zinc-400 bg-zinc-950 px-2.5 py-1 rounded border border-zinc-800">
                {activeItem.techHighlight}
              </span>
            </div>

            {/* Dynamic vector schematic */}
            {renderForkliftSchematic(activeItem.id)}

            {/* Description note */}
            <div className="p-4 bg-zinc-950 rounded-xl border border-zinc-800/80 text-xs text-zinc-300 leading-relaxed space-y-2 text-left">
              <span className="font-bold text-white block">Application Tip:</span>
              <p>{activeItem.description}</p>
            </div>

            {/* Consultation CTA */}
            <div className="pt-2 flex justify-between items-center">
              <span className="text-xs text-zinc-400">Need help deciding on specs?</span>
              <a
                href={getWhatsAppUrl(`Hello Pethona Integrated & Resources LTD, I'd like some technical advice regarding ${activeItem.title} for my operations.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold px-4 py-2 rounded-lg transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Ask Pethona Team</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
