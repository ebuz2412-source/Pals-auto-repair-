import React, { useState } from "react";
import { 
  Car, 
  Sparkles, 
  MessageSquare, 
  ArrowRight, 
  CheckCircle2, 
  UserCheck, 
  Zap, 
  Shield, 
  Eye, 
  X,
  Gauge,
  Key
} from "lucide-react";
import { FleetCategory, VehicleItem } from "../types";
import { FLEET_CATEGORIES, FLEET_INVENTORY, LUXURY_IMAGES, getVehicleBookingWhatsAppUrl, getWhatsAppUrl } from "../data";

interface FleetSectionProps {
  onSelectVehicleForBooking: (vehicleName: string, category: string) => void;
}

export default function FleetSection({ onSelectVehicleForBooking }: FleetSectionProps) {
  const [activeCategory, setActiveCategory] = useState<FleetCategory>("all");
  const [modalVehicle, setModalVehicle] = useState<VehicleItem | null>(null);

  const filteredVehicles = activeCategory === "all"
    ? FLEET_INVENTORY
    : FLEET_INVENTORY.filter(v => v.category === activeCategory);

  const getImageSource = (key: VehicleItem["imageKey"]) => {
    return LUXURY_IMAGES[key] || LUXURY_IMAGES.hero;
  };

  return (
    <section id="fleet" className="py-24 bg-zinc-950 text-zinc-100 relative border-b border-zinc-800">
      {/* Background Accent Gradients */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/5 rounded-full filter blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-10 left-1/4 w-96 h-96 bg-yellow-500/5 rounded-full filter blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-zinc-900 border border-amber-500/30 px-3 py-1 rounded-full text-xs font-mono font-semibold text-amber-400 uppercase tracking-wider">
            <Car className="w-3.5 h-3.5 text-amber-400" />
            <span>Victoria Island Luxury Showroom</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-sans tracking-tight text-white">
            Our Premium <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-500">Fleet</span>
          </h2>

          <p className="text-sm sm:text-base text-zinc-400 font-sans leading-relaxed">
            Choose from our curated collection of luxury sedans, commanding SUVs, dynamic sports cars, chauffeured executive VIP transports, and prestigious exotic vehicles.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-4 mb-10 gap-2 no-scrollbar">
          {FLEET_CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                id={`fleet-tab-${cat.id}`}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold font-sans whitespace-nowrap transition-all duration-200 cursor-pointer border ${
                  isActive
                    ? "bg-amber-500 text-zinc-950 border-amber-400 shadow-lg shadow-amber-500/20"
                    : "bg-zinc-900/80 hover:bg-zinc-800 text-zinc-300 border-zinc-800 hover:border-zinc-700"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Vehicle Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredVehicles.map((vehicle) => (
            <div
              key={vehicle.id}
              id={`vehicle-card-${vehicle.id}`}
              className="bg-zinc-900/90 border border-zinc-800/90 hover:border-amber-500/40 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-amber-500/5 transition-all duration-300 flex flex-col group"
            >
              {/* Card Image Container */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-950">
                <img
                  src={getImageSource(vehicle.imageKey)}
                  alt={vehicle.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent"></div>

                {/* Category Badge */}
                <div className="absolute top-3 left-3">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-md text-[11px] font-mono font-bold uppercase tracking-wider bg-zinc-950/80 backdrop-blur-md border border-amber-500/30 text-amber-400">
                    {vehicle.categoryLabel}
                  </span>
                </div>

                {/* Availability Badge */}
                <div className="absolute top-3 right-3">
                  <span className="inline-flex items-center space-x-1 px-2 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-emerald-950/80 text-emerald-400 border border-emerald-500/30">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span>Available in VI</span>
                  </span>
                </div>

                {/* Pricing / Booking Display */}
                <div className="absolute bottom-3 left-3 right-3 flex justify-between items-end">
                  <div>
                    <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest block">
                      Rental Option
                    </span>
                    <span className="text-sm font-bold text-amber-400 font-sans">
                      {vehicle.pricingDisplay}
                    </span>
                  </div>
                  <button
                    onClick={() => setModalVehicle(vehicle)}
                    className="p-2 rounded-lg bg-zinc-900/90 hover:bg-amber-500 text-zinc-300 hover:text-zinc-950 border border-zinc-700/80 transition-colors cursor-pointer"
                    title="View Full Specifications"
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="text-lg font-bold font-sans text-white group-hover:text-amber-400 transition-colors">
                    {vehicle.name}
                  </h3>
                  <p className="text-xs text-amber-400/90 font-mono font-medium">
                    {vehicle.tagline}
                  </p>
                  <p className="text-xs text-zinc-400 line-clamp-2 leading-relaxed font-sans">
                    {vehicle.shortDescription}
                  </p>
                </div>

                {/* Key Spec Matrix Chips */}
                <div className="grid grid-cols-2 gap-2 text-[11px] font-mono py-2 border-y border-zinc-800/80">
                  <div className="bg-zinc-950/70 p-2 rounded-lg border border-zinc-800/60">
                    <span className="text-zinc-500 block text-[9px] uppercase">Seating</span>
                    <span className="text-zinc-200 font-semibold truncate block">{vehicle.specs.seatingCapacity}</span>
                  </div>
                  <div className="bg-zinc-950/70 p-2 rounded-lg border border-zinc-800/60">
                    <span className="text-zinc-500 block text-[9px] uppercase">Engine Power</span>
                    <span className="text-zinc-200 font-semibold truncate block">{vehicle.specs.engineAndPower}</span>
                  </div>
                  <div className="bg-zinc-950/70 p-2 rounded-lg border border-zinc-800/60">
                    <span className="text-zinc-500 block text-[9px] uppercase">Drive System</span>
                    <span className="text-zinc-200 font-semibold truncate block">{vehicle.specs.driveType}</span>
                  </div>
                  <div className="bg-zinc-950/70 p-2 rounded-lg border border-zinc-800/60">
                    <span className="text-zinc-500 block text-[9px] uppercase">Transmission</span>
                    <span className="text-zinc-200 font-semibold truncate block">{vehicle.specs.transmission}</span>
                  </div>
                </div>

                {/* Action Buttons: Reserve Vehicle & WhatsApp Inquire */}
                <div className="grid grid-cols-2 gap-2 pt-1">
                  <button
                    id={`book-btn-${vehicle.id}`}
                    onClick={() => onSelectVehicleForBooking(vehicle.name, vehicle.categoryLabel)}
                    className="w-full inline-flex items-center justify-center space-x-1 bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold text-xs py-2.5 px-3 rounded-xl transition-all duration-150 cursor-pointer shadow-md shadow-amber-500/10"
                  >
                    <span>Reserve Car</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <a
                    id={`wa-vehicle-${vehicle.id}`}
                    href={getVehicleBookingWhatsAppUrl(vehicle.name, vehicle.categoryLabel)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center space-x-1 bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 text-zinc-200 hover:text-white font-semibold text-xs py-2.5 px-3 rounded-xl transition-all duration-150"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Fleet Bottom Notice */}
        <div className="mt-14 p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="space-y-1">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Need a Custom Multi-Vehicle Convoy or Specific Luxury Specification?
            </h4>
            <p className="text-xs text-zinc-400">
              Our Victoria Island concierge team coordinates bespoke fleets for diplomatic summits, bridal entourages, and media productions.
            </p>
          </div>
          <a
            href={getWhatsAppUrl("Hello Luxury Car Rentals, I would like to arrange a bespoke multi-car luxury convoy / corporate fleet reservation.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-zinc-800 hover:bg-zinc-700 text-amber-400 border border-amber-500/30 px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-colors"
          >
            <MessageSquare className="w-4 h-4 text-emerald-400" />
            <span>Speak with Fleet Concierge</span>
          </a>
        </div>
      </div>

      {/* Vehicle Specification & Detail Modal */}
      {modalVehicle && (
        <div 
          id="vehicle-spec-modal"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 animate-in fade-in duration-200"
          onClick={() => setModalVehicle(null)}
        >
          <div
            className="bg-zinc-900 border border-zinc-700 max-w-2xl w-full rounded-2xl overflow-hidden shadow-2xl relative max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="relative aspect-video w-full overflow-hidden bg-zinc-950">
              <img
                src={getImageSource(modalVehicle.imageKey)}
                alt={modalVehicle.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent"></div>
              
              <button
                onClick={() => setModalVehicle(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-zinc-950/80 border border-zinc-700 text-zinc-300 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="absolute bottom-4 left-6 right-6">
                <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider block">
                  {modalVehicle.categoryLabel}
                </span>
                <h3 className="text-2xl font-black text-white">{modalVehicle.name}</h3>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto space-y-6 text-left">
              <div>
                <h4 className="text-xs font-mono uppercase text-zinc-400 tracking-wider mb-2">Overview</h4>
                <p className="text-sm text-zinc-300 leading-relaxed">{modalVehicle.longDescription}</p>
              </div>

              {/* Specs Grid */}
              <div>
                <h4 className="text-xs font-mono uppercase text-zinc-400 tracking-wider mb-3">Vehicle Specifications</h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
                  <div className="bg-zinc-950 p-3 rounded-xl border border-zinc-800">
                    <span className="text-zinc-500 block text-[10px] uppercase">Seating</span>
                    <span className="text-zinc-200 font-semibold">{modalVehicle.specs.seatingCapacity}</span>
                  </div>
                  <div className="bg-zinc-950 p-3 rounded-xl border border-zinc-800">
                    <span className="text-zinc-500 block text-[10px] uppercase">Engine</span>
                    <span className="text-zinc-200 font-semibold">{modalVehicle.specs.engineAndPower}</span>
                  </div>
                  <div className="bg-zinc-950 p-3 rounded-xl border border-zinc-800">
                    <span className="text-zinc-500 block text-[10px] uppercase">Drive System</span>
                    <span className="text-zinc-200 font-semibold">{modalVehicle.specs.driveType}</span>
                  </div>
                  <div className="bg-zinc-950 p-3 rounded-xl border border-zinc-800">
                    <span className="text-zinc-500 block text-[10px] uppercase">Transmission</span>
                    <span className="text-zinc-200 font-semibold">{modalVehicle.specs.transmission}</span>
                  </div>
                  <div className="bg-zinc-950 p-3 rounded-xl border border-zinc-800 col-span-2 sm:col-span-2">
                    <span className="text-zinc-500 block text-[10px] uppercase">Comfort & Tech Feature</span>
                    <span className="text-amber-400 font-semibold">{modalVehicle.specs.comfortHighlight}</span>
                  </div>
                </div>
              </div>

              {/* Luxury Inclusions */}
              <div>
                <h4 className="text-xs font-mono uppercase text-zinc-400 tracking-wider mb-2">Key Luxury Amenities</h4>
                <ul className="space-y-1.5 text-xs text-zinc-300">
                  {modalVehicle.features.map((feat, idx) => (
                    <li key={idx} className="flex items-center space-x-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Ideal Applications */}
              <div>
                <h4 className="text-xs font-mono uppercase text-zinc-400 tracking-wider mb-2">Recommended For</h4>
                <div className="flex flex-wrap gap-1.5">
                  {modalVehicle.idealFor.map((app, idx) => (
                    <span key={idx} className="px-2.5 py-1 rounded-md bg-zinc-950 border border-zinc-800 text-[11px] text-zinc-300">
                      {app}
                    </span>
                  ))}
                </div>
              </div>

              {/* Modal Footer Actions */}
              <div className="pt-4 border-t border-zinc-800 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => {
                    const veh = modalVehicle;
                    setModalVehicle(null);
                    onSelectVehicleForBooking(veh.name, veh.categoryLabel);
                  }}
                  className="flex-1 bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold text-sm py-3 px-4 rounded-xl flex items-center justify-center space-x-2 transition-colors cursor-pointer"
                >
                  <span>Book This Vehicle</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href={getVehicleBookingWhatsAppUrl(modalVehicle.name, modalVehicle.categoryLabel)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm py-3 px-4 rounded-xl flex items-center justify-center space-x-2 transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp Inquire</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
