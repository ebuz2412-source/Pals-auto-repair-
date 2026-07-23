import React, { useState } from "react";
import { GALLERY_ITEMS } from "../data";
import { GalleryItem } from "../types";
import { Cpu, ShieldCheck, Compass, Snowflake, Eye, CheckCircle2, Sliders } from "lucide-react";
import MediaLoader from "./MediaLoader";

export default function BlueprintGallery() {
  const [activeItem, setActiveItem] = useState<GalleryItem>(GALLERY_ITEMS[0]);

  // Renders beautiful, stylized vector graphics based on technical blueprints
  const renderBlueprintGraphic = (type: string) => {
    switch (type) {
      case "ecu":
        return (
          <div className="w-full h-64 md:h-80 bg-zinc-950 rounded-2xl border border-zinc-800 relative flex flex-col items-center justify-center p-6 overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:16px_16px] opacity-20"></div>
            
            {/* SVG Graph ECU Diagnostic */}
            <svg className="w-full max-w-sm h-36 text-red-500 relative z-10" viewBox="0 0 100 40" fill="none" stroke="currentColor" strokeWidth="0.8">
              {/* Reference Grid lines */}
              <line x1="0" y1="35" x2="100" y2="35" stroke="#334155" strokeWidth="0.3" strokeDasharray="1,1" />
              <line x1="0" y1="20" x2="100" y2="20" stroke="#334155" strokeWidth="0.3" strokeDasharray="1,1" />
              <line x1="0" y1="5" x2="100" y2="5" stroke="#334155" strokeWidth="0.3" strokeDasharray="1,1" />
              
              {/* Telemetry wave */}
              <path d="M0,35 L10,35 L15,10 L20,38 L25,35 L35,35 L40,5 L45,30 L50,15 L55,35 L70,35 L75,12 L80,35 L90,35 M90,35 L93,25 L96,35 L100,35" stroke="#ef4444" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
              
              {/* Core scanning cursor */}
              <line x1="50" y1="0" x2="50" y2="40" stroke="#ef4444" strokeWidth="0.5" strokeDasharray="2,2" />
              <circle cx="50" cy="15" r="1.5" fill="#ef4444" />
            </svg>

            {/* Readout stats */}
            <div className="w-full grid grid-cols-3 gap-2 text-center font-mono text-[10px] text-zinc-400 mt-4 relative z-10 border-t border-zinc-900 pt-4">
              <div>
                <span className="block text-zinc-600">SYS_OXYGEN_S1</span>
                <span className="text-white font-bold font-sans">0.785 V</span>
              </div>
              <div>
                <span className="block text-zinc-600">FUEL_TRIM_ST</span>
                <span className="text-emerald-400 font-bold font-sans">+1.45%</span>
              </div>
              <div>
                <span className="block text-zinc-600">CYLINDER_MISFIRE</span>
                <span className="text-red-500 font-bold font-sans">0 (NONE)</span>
              </div>
            </div>
            
            <div className="absolute top-3 left-4 flex items-center space-x-1.5 font-mono text-[9px] text-zinc-500">
              <Cpu className="w-3.5 h-3.5 text-red-500" />
              <span>ECU_DATA_LINK: ESTABLISHED</span>
            </div>
          </div>
        );

      case "brake":
        return (
          <div className="w-full h-64 md:h-80 bg-zinc-950 rounded-2xl border border-zinc-800 relative flex flex-col items-center justify-center p-6 overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:16px_16px] opacity-20"></div>
            
            {/* Brake rotor/pad schematic */}
            <svg className="w-48 h-48 text-red-500/80 relative z-10" viewBox="0 0 50 50" fill="none" stroke="currentColor" strokeWidth="0.8">
              {/* Concentric Rotor rings */}
              <circle cx="25" cy="25" r="22" stroke="#334155" strokeWidth="0.5" />
              <circle cx="25" cy="25" r="20" stroke="#ef4444" strokeWidth="1" strokeDasharray="3,2" />
              <circle cx="25" cy="25" r="14" stroke="#334155" strokeWidth="0.5" />
              <circle cx="25" cy="25" r="8" stroke="#334155" strokeWidth="0.5" />
              
              {/* Rotor vents */}
              <line x1="25" y1="5" x2="25" y2="11" stroke="#334155" strokeWidth="0.5" />
              <line x1="25" y1="39" x2="25" y2="45" stroke="#334155" strokeWidth="0.5" />
              <line x1="5" y1="25" x2="11" y2="25" stroke="#334155" strokeWidth="0.5" />
              <line x1="39" y1="25" x2="45" y2="25" stroke="#334155" strokeWidth="0.5" />

              {/* Lug bolts */}
              <circle cx="20" cy="20" r="1" fill="#475569" stroke="none" />
              <circle cx="30" cy="20" r="1" fill="#475569" stroke="none" />
              <circle cx="20" cy="30" r="1" fill="#475569" stroke="none" />
              <circle cx="30" cy="30" r="1" fill="#475569" stroke="none" />

              {/* Brake Caliper Overlay */}
              <path d="M38,10 C46,18 46,32 38,40 L43,42 C51,33 51,17 43,8 Z" fill="#ef4444" stroke="none" opacity="0.9" />
              
              {/* Caliper tolerance gauge pointer */}
              <line x1="43" y1="25" x2="49" y2="25" stroke="#ef4444" strokeWidth="0.5" />
              <text x="44" y="23" fontSize="2" fill="#ef4444" fontFamily="monospace">PAD:9.5mm</text>
            </svg>

            {/* Readout Stats */}
            <div className="w-full grid grid-cols-3 gap-2 text-center font-mono text-[10px] text-zinc-400 mt-2 relative z-10 border-t border-zinc-900 pt-3">
              <div>
                <span className="block text-zinc-600">ROTOR_RUNOUT</span>
                <span className="text-white font-bold font-sans">0.03 mm</span>
              </div>
              <div>
                <span className="block text-zinc-600">PAD_THICKNESS</span>
                <span className="text-emerald-400 font-bold font-sans">9.5 mm (95%)</span>
              </div>
              <div>
                <span className="block text-zinc-600">FLUID_MOISTURE</span>
                <span className="text-emerald-400 font-bold font-sans">0.8% (PASS)</span>
              </div>
            </div>

            <div className="absolute top-3 left-4 flex items-center space-x-1.5 font-mono text-[9px] text-zinc-500">
              <ShieldCheck className="w-3.5 h-3.5 text-red-500" />
              <span>SAFETY_VERIFICATION: CONFIRMED</span>
            </div>
          </div>
        );

      case "alignment":
        return (
          <div className="w-full h-64 md:h-80 bg-zinc-950 rounded-2xl border border-zinc-800 relative flex flex-col items-center justify-center p-6 overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:16px_16px] opacity-20"></div>
            
            {/* 3D alignment vector schematics */}
            <svg className="w-full max-w-xs h-36 text-red-500 relative z-10" viewBox="0 0 100 40" fill="none" stroke="currentColor" strokeWidth="0.8">
              {/* Horizon reference line */}
              <line x1="10" y1="20" x2="90" y2="20" stroke="#334155" strokeWidth="0.5" strokeDasharray="3,3" />

              {/* Left Wheel alignment representation */}
              <rect x="18" y="8" width="8" height="24" rx="1.5" stroke="#334155" strokeWidth="0.5" />
              <line x1="22" y1="2" x2="22" y2="38" stroke="#ef4444" strokeWidth="0.4" strokeDasharray="2,2" />
              <text x="25" y="14" fontSize="3" fill="#34d399" fontFamily="monospace">CAMBER:-0.5°</text>

              {/* Right Wheel alignment representation */}
              <rect x="74" y="8" width="8" height="24" rx="1.5" stroke="#334155" strokeWidth="0.5" />
              <line x1="78" y1="2" x2="78" y2="38" stroke="#ef4444" strokeWidth="0.4" strokeDasharray="2,2" />
              <text x="50" y="14" fontSize="3" fill="#34d399" fontFamily="monospace">CAMBER:-0.5°</text>

              {/* Toe in center crosshair */}
              <circle cx="50" cy="20" r="3" stroke="#ef4444" strokeWidth="0.5" strokeDasharray="1,1" />
              <line x1="45" y1="20" x2="55" y2="20" stroke="#ef4444" strokeWidth="0.5" />
              <line x1="50" y1="15" x2="50" y2="25" stroke="#ef4444" strokeWidth="0.5" />
              <text x="44" y="30" fontSize="3.5" fill="#34d399" fontFamily="monospace" fontWeight="bold">TOE:0.02°</text>
            </svg>

            {/* Readout Stats */}
            <div className="w-full grid grid-cols-3 gap-2 text-center font-mono text-[10px] text-zinc-400 mt-2 relative z-10 border-t border-zinc-900 pt-3">
              <div>
                <span className="block text-zinc-600">STEER_ANGLE</span>
                <span className="text-white font-bold font-sans">0.00° (CENTER)</span>
              </div>
              <div>
                <span className="block text-zinc-600">TOTAL_TOE</span>
                <span className="text-emerald-400 font-bold font-sans">0.04° (IN-SPEC)</span>
              </div>
              <div>
                <span className="block text-zinc-600">THRUST_ANGLE</span>
                <span className="text-emerald-400 font-bold font-sans">0.01° (IN-SPEC)</span>
              </div>
            </div>

            <div className="absolute top-3 left-4 flex items-center space-x-1.5 font-mono text-[9px] text-zinc-500">
              <Compass className="w-3.5 h-3.5 text-red-500" />
              <span>3D_GEOMETRY_LASER: LOCKED</span>
            </div>
          </div>
        );

      case "winter":
        return (
          <div className="w-full h-64 md:h-80 bg-zinc-950 rounded-2xl border border-zinc-800 relative flex flex-col items-center justify-center p-6 overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:16px_16px] opacity-20"></div>
            
            {/* Winter temperature & cold-start testing indicators */}
            <svg className="w-48 h-48 text-red-500/80 relative z-10" viewBox="0 0 50 50" fill="none" stroke="currentColor" strokeWidth="0.8">
              {/* Snowflake core icon drawn via vectors */}
              <line x1="25" y1="5" x2="25" y2="45" stroke="#ef4444" strokeWidth="1" />
              <line x1="5" y1="25" x2="45" y2="25" stroke="#ef4444" strokeWidth="1" />
              <line x1="11" y1="11" x2="39" y2="39" stroke="#ef4444" strokeWidth="0.8" />
              <line x1="11" y1="39" x2="39" y2="11" stroke="#ef4444" strokeWidth="0.8" />

              {/* Snowflake V-branches */}
              <path d="M25,10 L21,7 M25,10 L29,7" stroke="#ef4444" strokeWidth="0.8" />
              <path d="M25,40 L21,43 M25,40 L29,43" stroke="#ef4444" strokeWidth="0.8" />
              <path d="M10,25 L7,21 M10,25 L7,29" stroke="#ef4444" strokeWidth="0.8" />
              <path d="M40,25 L43,21 M40,25 L43,29" stroke="#ef4444" strokeWidth="0.8" />

              {/* Concentric Freeze warning ring */}
              <circle cx="25" cy="25" r="14" stroke="#ef4444" strokeWidth="0.5" strokeDasharray="2,2" />
              
              {/* Temperature text */}
              <rect x="15" y="21" width="20" height="8" rx="1" fill="#09090b" stroke="#ef4444" strokeWidth="0.5" />
              <text x="18" y="26.5" fontSize="5" fill="#ef4444" fontFamily="monospace" fontWeight="bold">-42°C</text>
            </svg>

            {/* Readout Stats */}
            <div className="w-full grid grid-cols-3 gap-2 text-center font-mono text-[10px] text-zinc-400 mt-2 relative z-10 border-t border-zinc-900 pt-3">
              <div>
                <span className="block text-zinc-600">ANTIFREEZE_LIMIT</span>
                <span className="text-emerald-400 font-bold font-sans">-45°C (SAFE)</span>
              </div>
              <div>
                <span className="block text-zinc-600">BATTERY_CCA_CC</span>
                <span className="text-white font-bold font-sans">780 / 800 AMPS</span>
              </div>
              <div>
                <span className="block text-zinc-600">BLOCK_HEATER</span>
                <span className="text-emerald-400 font-bold font-sans">420W (PASS)</span>
              </div>
            </div>

            <div className="absolute top-3 left-4 flex items-center space-x-1.5 font-mono text-[9px] text-zinc-500">
              <Snowflake className="w-3.5 h-3.5 text-red-500" />
              <span>COLD_START_TEST: READY</span>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section id="gallery" className="py-24 bg-white text-zinc-900 border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-mono font-bold text-red-600 uppercase tracking-widest bg-red-50 border border-red-100 px-3 py-1 rounded-full">
            Precision & Technology
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-sans tracking-tight text-zinc-950">
            Digital Diagnostic Blueprint Gallery
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 font-sans leading-relaxed">
            Take an interactive look at the precision tolerances, real-time wave readouts, and laser 3D vehicle geometries processed on our workshop bays.
          </p>
        </div>

        {/* Blueprint Layout (Tabs on Left, Canvas Graphic on Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Interactive Selector List */}
          <div className="lg:col-span-5 space-y-4 text-left">
            {GALLERY_ITEMS.map((item) => {
              const isActive = activeItem.id === item.id;
              return (
                <div
                  key={item.id}
                  id={`blueprint-tab-${item.id}`}
                  onClick={() => setActiveItem(item)}
                  className={`p-5 rounded-xl border cursor-pointer transition-all duration-300 ${
                    isActive
                      ? "bg-zinc-900 text-white border-zinc-900 shadow-xl scale-[1.02]"
                      : "bg-zinc-50 text-zinc-800 border-zinc-200 hover:bg-zinc-100"
                  }`}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`p-2 rounded-lg mt-0.5 ${isActive ? "bg-red-600 text-white" : "bg-zinc-200 text-zinc-700"}`}>
                      {item.blueprintType === "ecu" && <Cpu className="w-5 h-5" />}
                      {item.blueprintType === "brake" && <ShieldCheck className="w-5 h-5" />}
                      {item.blueprintType === "alignment" && <Compass className="w-5 h-5" />}
                      {item.blueprintType === "winter" && <Snowflake className="w-5 h-5" />}
                    </div>
                    <div className="space-y-1">
                      <span className={`text-[10px] font-mono font-bold tracking-widest uppercase ${isActive ? "text-red-400" : "text-zinc-500"}`}>
                        {item.category}
                      </span>
                      <h4 className="text-base font-extrabold font-sans leading-tight">
                        {item.title}
                      </h4>
                      <p className={`text-xs font-sans leading-relaxed ${isActive ? "text-zinc-400" : "text-zinc-500"}`}>
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Active Blueprint Canvas Rendering */}
          <div className="lg:col-span-7 bg-zinc-50 border border-zinc-200/80 rounded-2xl p-6 sm:p-8 shadow-inner relative">
            <div className="flex justify-between items-center mb-4">
              <span className="text-xs font-mono font-bold text-zinc-500 uppercase tracking-widest flex items-center">
                <Sliders className="w-3.5 h-3.5 text-red-500 mr-2" />
                Live Graphic Output
              </span>
              <span className="text-[10px] font-mono font-bold text-zinc-400 bg-white border border-zinc-200 px-2.5 py-0.5 rounded">
                SEC_CHANNEL: {activeItem.blueprintType.toUpperCase()}_01
              </span>
            </div>

            {/* Render the core active vector blueprint element */}
            {renderBlueprintGraphic(activeItem.blueprintType)}

            {/* Real-World Inspection Photo */}
            <div className="mt-6 space-y-2 text-left">
              <span className="text-[10px] font-mono font-bold text-zinc-500 uppercase tracking-widest block">
                Real-World Execution Scan
              </span>
              <div className="overflow-hidden rounded-xl border border-zinc-200/60 bg-white shadow-sm">
                <MediaLoader
                  src={
                    activeItem.blueprintType === "ecu" ? "/input_file_0.png" :
                    activeItem.blueprintType === "brake" ? "/input_file_2.png" :
                    activeItem.blueprintType === "alignment" ? "/input_file_3.png" :
                    "/input_file_5.png"
                  }
                  alt={`Real-world execution of ${activeItem.title}`}
                  sectionName={`Gallery: ${activeItem.title}`}
                  expectedFile={
                    activeItem.blueprintType === "ecu" ? "input_file_0.png" :
                    activeItem.blueprintType === "brake" ? "input_file_2.png" :
                    activeItem.blueprintType === "alignment" ? "input_file_3.png" :
                    "input_file_5.png"
                  }
                  fallbackUrl={
                    activeItem.blueprintType === "ecu" ? "https://images.unsplash.com/photo-1507136566006-cfc505b114fc?auto=format&fit=crop&q=80&w=1200" :
                    activeItem.blueprintType === "brake" ? "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&q=80&w=1200" :
                    activeItem.blueprintType === "alignment" ? "https://images.unsplash.com/photo-1625047509128-8d0ddb7e6a6d?auto=format&fit=crop&q=80&w=1200" :
                    "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=80&w=1200"
                  }
                  description={
                    activeItem.blueprintType === "ecu" ? "Autotech specialist utilizing advanced OBD2 diagnostic systems to analyze live fuel trims and misfires." :
                    activeItem.blueprintType === "brake" ? "Our certified technician inspecting safety-critical brake calipers, rotors, and fluid levels." :
                    activeItem.blueprintType === "alignment" ? "High-spec vehicle parked on the precision hydraulic alignment bays inside our garage." :
                    "Certified technical crew conducting multi-point engine testing for vehicle health and reliability."
                  }
                  aspectRatio="aspect-[16/9]"
                  className="w-full h-48 object-cover"
                />
              </div>
            </div>

            <div className="mt-6 p-4 bg-zinc-100 rounded-xl border border-zinc-200 text-xs text-zinc-600 leading-relaxed space-y-1.5 font-sans text-left">
              <span className="font-bold text-zinc-900 block mb-1">Diagnostic Application Checklist:</span>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                <span>Interfaced via high-speed Controller Area Network (CAN-bus) socket.</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                <span>Full calibration and reset processed to match manufacturer factory parameters.</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
