import React, { useState } from "react";
import { MessageSquare, Eye, CheckCircle2, ArrowRight, Filter, Info, ChevronRight, X, Shield, Sparkles } from "lucide-react";
import { FORKLIFT_INVENTORY, FORKLIFT_CATEGORIES, getForkliftWhatsAppUrl, getWhatsAppUrl, TUNNEX_BUSINESS_INFO } from "../data";
import { ForkliftItem, ForkliftCategory } from "../types";
import { FORKLIFT_IMAGES } from "./MediaLoader";

interface ForkliftInventoryProps {
  onInquireWithForklift?: (forkliftName: string) => void;
}

export default function ForkliftInventory({ onInquireWithForklift }: ForkliftInventoryProps) {
  const [selectedCategory, setSelectedCategory] = useState<ForkliftCategory>("all");
  const [selectedForklift, setSelectedForklift] = useState<ForkliftItem | null>(null);

  const filteredForklifts = selectedCategory === "all"
    ? FORKLIFT_INVENTORY
    : FORKLIFT_INVENTORY.filter((item) => item.category === selectedCategory);

  const handleOpenDetails = (forklift: ForkliftItem) => {
    setSelectedForklift(forklift);
  };

  const handleCloseDetails = () => {
    setSelectedForklift(null);
  };

  return (
    <section id="inventory" className="py-20 bg-zinc-950 text-white relative border-b border-zinc-800">
      {/* Subtle Background Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/5 rounded-full filter blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-amber-600/5 rounded-full filter blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center space-x-2 bg-amber-500/10 border border-amber-500/30 px-3.5 py-1 rounded-full text-amber-400 text-xs font-mono font-semibold uppercase tracking-wider">
            <span>Equipment Catalog & Showcase</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-sans tracking-tight text-white">
            Available Forklifts & Material Handling Equipment
          </h2>
          <p className="text-base text-zinc-400 font-sans leading-relaxed">
            Explore our range of electric, diesel, LPG, warehouse, and heavy-duty forklifts designed for warehouses, logistics yards, manufacturing facilities, and heavy commercial operations.
          </p>
          <div className="inline-flex items-center space-x-1.5 text-xs text-amber-300/80 bg-zinc-900/90 border border-zinc-800 px-3.5 py-1.5 rounded-lg">
            <Info className="w-4 h-4 text-amber-400 flex-shrink-0" />
            <span>Sample specifications shown below. Contact us directly to confirm current stock and obtain formal quotes.</span>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-4 mb-10 gap-2 scrollbar-none">
          {FORKLIFT_CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                id={`filter-${cat.id}`}
                onClick={() => setSelectedCategory(cat.id as ForkliftCategory)}
                className={`px-4 py-2 rounded-xl text-xs font-bold font-sans whitespace-nowrap transition-all duration-150 cursor-pointer flex-shrink-0 ${
                  isActive
                    ? "bg-amber-500 text-zinc-950 shadow-md shadow-amber-500/20"
                    : "bg-zinc-900/80 text-zinc-300 hover:text-white hover:bg-zinc-800 border border-zinc-800"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Forklift Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredForklifts.map((forklift) => {
            const imgSrc = FORKLIFT_IMAGES[forklift.imageKey] || FORKLIFT_IMAGES.hero;
            const whatsappUrl = getForkliftWhatsAppUrl(forklift.name, forklift.specs.loadCapacity);

            return (
              <div
                key={forklift.id}
                id={`forklift-card-${forklift.id}`}
                className="bg-zinc-900/90 border border-zinc-800 hover:border-amber-500/50 rounded-2xl overflow-hidden shadow-lg transition-all duration-200 flex flex-col group"
              >
                {/* Image Container */}
                <div className="relative aspect-[4/3] w-full bg-zinc-950 overflow-hidden">
                  <img
                    src={imgSrc}
                    alt={forklift.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-transparent to-transparent opacity-80"></div>
                  
                  {/* Category badge */}
                  <div className="absolute top-3 left-3">
                    <span className="bg-zinc-950/80 backdrop-blur-md border border-zinc-700/80 text-amber-400 text-[11px] font-mono font-bold px-2.5 py-1 rounded-lg uppercase tracking-wider">
                      {forklift.categoryLabel}
                    </span>
                  </div>

                  {/* Condition Tag */}
                  <div className="absolute top-3 right-3">
                    <span className="bg-amber-500/90 text-zinc-950 text-[10px] font-mono font-extrabold px-2 py-0.5 rounded shadow">
                      {forklift.condition}
                    </span>
                  </div>

                  {/* Pricing tag over image */}
                  <div className="absolute bottom-3 left-3 right-3 flex justify-between items-end">
                    <span className="text-sm font-extrabold text-amber-400 font-mono bg-zinc-950/90 border border-amber-500/40 px-2.5 py-1 rounded-md">
                      {forklift.pricingDisplay}
                    </span>
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold font-sans text-white group-hover:text-amber-400 transition-colors">
                      {forklift.name}
                    </h3>
                    <p className="text-xs text-zinc-400 font-sans line-clamp-2 leading-relaxed">
                      {forklift.shortDescription}
                    </p>
                  </div>

                  {/* Key Specifications Grid */}
                  <div className="grid grid-cols-2 gap-2 text-xs font-sans bg-zinc-950/60 border border-zinc-800/80 p-3 rounded-xl">
                    <div>
                      <span className="text-[10px] font-mono text-zinc-400 uppercase block">Load Capacity</span>
                      <span className="font-bold text-zinc-200">{forklift.specs.loadCapacity}</span>
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-zinc-400 uppercase block">Lift Height</span>
                      <span className="font-bold text-zinc-200">{forklift.specs.liftHeight}</span>
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-zinc-400 uppercase block">Power Source</span>
                      <span className="font-bold text-zinc-200">{forklift.specs.fuelType}</span>
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-zinc-400 uppercase block">Tires</span>
                      <span className="font-bold text-zinc-200">{forklift.specs.tireType}</span>
                    </div>
                  </div>

                  {/* Card Action Buttons */}
                  <div className="grid grid-cols-2 gap-2 pt-2 border-t border-zinc-800/80">
                    <button
                      id={`view-details-${forklift.id}`}
                      onClick={() => handleOpenDetails(forklift)}
                      className="inline-flex items-center justify-center space-x-1.5 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-bold py-2.5 px-3 rounded-xl transition-colors cursor-pointer"
                    >
                      <Eye className="w-3.5 h-3.5 text-zinc-400" />
                      <span>View Details</span>
                    </button>

                    <a
                      id={`whatsapp-card-${forklift.id}`}
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center space-x-1.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold py-2.5 px-3 rounded-xl shadow-md shadow-emerald-950/30 transition-all"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Catalog Footer Notice */}
        <div className="mt-14 bg-zinc-900 border border-zinc-800 rounded-2xl p-6 text-center max-w-3xl mx-auto space-y-3">
          <h4 className="text-base font-bold text-white font-sans">
            Need a specific tonnage, specialized mast, or fleet configuration?
          </h4>
          <p className="text-xs sm:text-sm text-zinc-400 font-sans">
            Contact Tunnex Mega Investment at our Ijegun, Lagos yard. We help businesses assess their workspace dimensions, floor capacity, and lifting requirements.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-3">
            <a
              id="catalog-whatsapp-cta"
              href={getWhatsAppUrl("Hello Tunnex Mega Investment, I have a specific forklift requirement for my business. Can we discuss available models?")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold px-5 py-2.5 rounded-xl shadow"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
            </a>
            {onInquireWithForklift && (
              <button
                onClick={() => onInquireWithForklift("Custom Forklift Specification")}
                className="inline-flex items-center space-x-1.5 bg-amber-500 hover:bg-amber-400 text-zinc-950 text-xs font-extrabold px-5 py-2.5 rounded-xl uppercase tracking-wider"
              >
                <span>Request Custom Quote</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Forklift Detail Modal Drawer */}
      {selectedForklift && (
        <div
          id="forklift-detail-modal"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/80 backdrop-blur-md animate-in fade-in duration-200 overflow-y-auto"
        >
          <div className="bg-zinc-900 border border-zinc-800 w-full max-w-3xl rounded-2xl overflow-hidden shadow-2xl relative my-8">
            {/* Modal Header */}
            <div className="flex justify-between items-center p-5 border-b border-zinc-800 bg-zinc-950">
              <div className="space-y-1">
                <span className="text-[11px] font-mono uppercase tracking-wider text-amber-400 font-bold block">
                  {selectedForklift.categoryLabel} • {selectedForklift.condition}
                </span>
                <h3 className="text-xl sm:text-2xl font-black font-sans text-white">
                  {selectedForklift.name}
                </h3>
              </div>
              <button
                onClick={handleCloseDetails}
                className="p-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-6 max-h-[75vh] overflow-y-auto">
              {/* Image & Main Specs Overview */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                <div className="md:col-span-6 rounded-xl overflow-hidden border border-zinc-800 aspect-[4/3] bg-zinc-950">
                  <img
                    src={FORKLIFT_IMAGES[selectedForklift.imageKey] || FORKLIFT_IMAGES.hero}
                    alt={selectedForklift.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="md:col-span-6 space-y-3">
                  <div className="bg-zinc-950 p-4 rounded-xl border border-zinc-800 space-y-2">
                    <span className="text-xs font-mono text-zinc-400 block uppercase">Pricing</span>
                    <div className="text-xl font-extrabold text-amber-400 font-mono">
                      {selectedForklift.pricingDisplay}
                    </div>
                    <p className="text-xs text-zinc-400">
                      Pricing is based on current stock, mast option, and delivery/pickup preferences in Lagos and nationwide.
                    </p>
                  </div>

                  <p className="text-xs text-zinc-300 leading-relaxed font-sans">
                    {selectedForklift.longDescription}
                  </p>
                </div>
              </div>

              {/* Complete Technical Specifications Table */}
              <div className="space-y-3">
                <h4 className="text-sm font-bold uppercase font-mono tracking-wider text-amber-400">
                  Technical Specifications
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="bg-zinc-950 p-3 rounded-lg border border-zinc-800 flex justify-between">
                    <span className="text-zinc-400">Rated Load Capacity:</span>
                    <span className="font-bold text-white text-right">{selectedForklift.specs.loadCapacity}</span>
                  </div>
                  <div className="bg-zinc-950 p-3 rounded-lg border border-zinc-800 flex justify-between">
                    <span className="text-zinc-400">Max Mast Lift Height:</span>
                    <span className="font-bold text-white text-right">{selectedForklift.specs.liftHeight}</span>
                  </div>
                  <div className="bg-zinc-950 p-3 rounded-lg border border-zinc-800 flex justify-between">
                    <span className="text-zinc-400">Powertrain / Fuel:</span>
                    <span className="font-bold text-white text-right">{selectedForklift.specs.fuelType}</span>
                  </div>
                  <div className="bg-zinc-950 p-3 rounded-lg border border-zinc-800 flex justify-between">
                    <span className="text-zinc-400">Engine / Motor Type:</span>
                    <span className="font-bold text-white text-right">{selectedForklift.specs.engineMotor}</span>
                  </div>
                  <div className="bg-zinc-950 p-3 rounded-lg border border-zinc-800 flex justify-between">
                    <span className="text-zinc-400">Tire Configuration:</span>
                    <span className="font-bold text-white text-right">{selectedForklift.specs.tireType}</span>
                  </div>
                  <div className="bg-zinc-950 p-3 rounded-lg border border-zinc-800 flex justify-between">
                    <span className="text-zinc-400">Turning Radius:</span>
                    <span className="font-bold text-white text-right">{selectedForklift.specs.turningRadius}</span>
                  </div>
                  <div className="bg-zinc-950 p-3 rounded-lg border border-zinc-800 flex justify-between sm:col-span-2">
                    <span className="text-zinc-400">Estimated Operating Weight:</span>
                    <span className="font-bold text-white text-right">{selectedForklift.specs.operatingWeight}</span>
                  </div>
                </div>
              </div>

              {/* Key Features List */}
              <div className="space-y-2">
                <h4 className="text-sm font-bold uppercase font-mono tracking-wider text-amber-400">
                  Key Equipment Features
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedForklift.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start space-x-2 text-xs text-zinc-300">
                      <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recommended Applications */}
              <div className="space-y-2">
                <h4 className="text-sm font-bold uppercase font-mono tracking-wider text-amber-400">
                  Recommended Applications
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedForklift.recommendedApplications.map((app, idx) => (
                    <span key={idx} className="bg-zinc-950 border border-zinc-800 text-zinc-300 text-xs px-3 py-1 rounded-full">
                      {app}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="p-5 border-t border-zinc-800 bg-zinc-950 flex flex-col sm:flex-row justify-between items-center gap-3">
              <span className="text-xs text-zinc-400">
                Dealer Yard: {TUNNEX_BUSINESS_INFO.addressShort}
              </span>
              <div className="flex items-center space-x-3 w-full sm:w-auto">
                <button
                  onClick={handleCloseDetails}
                  className="w-1/2 sm:w-auto px-4 py-2.5 rounded-xl border border-zinc-800 hover:bg-zinc-800 text-zinc-300 text-xs font-semibold"
                >
                  Close
                </button>
                <a
                  href={getForkliftWhatsAppUrl(selectedForklift.name, selectedForklift.specs.loadCapacity)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/2 sm:w-auto inline-flex items-center justify-center space-x-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold px-5 py-2.5 rounded-xl shadow-lg"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Inquire on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
