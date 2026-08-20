import React, { useState } from "react";
import { MessageSquare, Eye, PhoneCall, Check, ArrowRight, X, Info, HardHat, Truck, Layers, Filter } from "lucide-react";
import { EquipmentItem, EquipmentCategory, EquipmentCategoryGroup } from "../types";
import { EQUIPMENT_INVENTORY, EQUIPMENT_SUB_CATEGORIES, EQUIPMENT_MAIN_TABS, PETHONA_BUSINESS_INFO, getEquipmentWhatsAppUrl, getWhatsAppUrl } from "../data";
import { EQUIPMENT_IMAGES } from "./MediaLoader";

interface EquipmentShowcaseProps {
  onInquireWithEquipment: (equipmentName: string) => void;
}

export default function EquipmentShowcase({ onInquireWithEquipment }: EquipmentShowcaseProps) {
  const [selectedMainTab, setSelectedMainTab] = useState<EquipmentCategoryGroup>("all");
  const [selectedSubCategory, setSelectedSubCategory] = useState<string>("all");
  const [activeModalItem, setActiveModalItem] = useState<EquipmentItem | null>(null);

  // Filter items based on main tab and subcategory
  const filteredEquipment = EQUIPMENT_INVENTORY.filter((item) => {
    // 1. Check main group tab filter
    if (selectedMainTab === "forklifts" && item.group !== "Forklifts") return false;
    if (selectedMainTab === "heavy_equipment" && item.group !== "Heavy Equipment") return false;

    // 2. Check subcategory filter
    if (selectedSubCategory !== "all" && item.category !== selectedSubCategory) return false;

    return true;
  });

  const availableSubCategories = EQUIPMENT_SUB_CATEGORIES.filter((sub) => {
    if (selectedMainTab === "all") return true;
    return sub.group === "all" || sub.group === selectedMainTab;
  });

  const handleMainTabChange = (tabId: EquipmentCategoryGroup) => {
    setSelectedMainTab(tabId);
    setSelectedSubCategory("all");
  };

  return (
    <section id="inventory" className="py-20 bg-zinc-950 text-white relative border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-amber-500/10 border border-amber-500/30 px-3.5 py-1 rounded-full">
            <HardHat className="w-3.5 h-3.5 text-amber-400" />
            <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest">
              Machinery & Forklift Fleet
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-sans tracking-tight text-white">
            Equipment Showcase & Availability
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 font-sans leading-relaxed">
            Explore our range of heavy earthmoving machinery and material handling forklifts. Contact Pethona Integrated & Resources LTD for availability, machine inspections, and quotations.
          </p>
        </div>

        {/* Primary Group Tabs: All Equipment | Heavy Equipment | Forklifts */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex p-1.5 bg-zinc-900 border border-zinc-800 rounded-2xl gap-1 shadow-lg">
            {EQUIPMENT_MAIN_TABS.map((tab) => (
              <button
                key={tab.id}
                id={`main-tab-${tab.id}`}
                onClick={() => handleMainTabChange(tab.id as EquipmentCategoryGroup)}
                className={`px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold font-sans transition-all duration-200 cursor-pointer flex items-center space-x-2 ${
                  selectedMainTab === tab.id
                    ? "bg-amber-500 text-zinc-950 shadow-md shadow-amber-500/20"
                    : "text-zinc-400 hover:text-white hover:bg-zinc-800/60"
                }`}
              >
                {tab.id === "heavy_equipment" && <HardHat className="w-4 h-4" />}
                {tab.id === "forklifts" && <Truck className="w-4 h-4" />}
                {tab.id === "all" && <Layers className="w-4 h-4" />}
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Sub-Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {availableSubCategories.map((cat) => (
            <button
              key={cat.id}
              id={`cat-filter-${cat.id}`}
              onClick={() => setSelectedSubCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold font-mono tracking-wider transition-all duration-150 cursor-pointer ${
                selectedSubCategory === cat.id
                  ? "bg-zinc-800 text-amber-400 border border-amber-500/40 shadow"
                  : "bg-zinc-900/60 text-zinc-400 border border-zinc-800/80 hover:text-white hover:border-zinc-700"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Equipment Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredEquipment.map((item) => {
            const imageSrc = EQUIPMENT_IMAGES[item.imageKey] || EQUIPMENT_IMAGES.hero;

            return (
              <div
                key={item.id}
                id={`equipment-card-${item.id}`}
                className="bg-zinc-900/90 border border-zinc-800/90 rounded-2xl overflow-hidden shadow-xl hover:border-amber-500/40 transition-all duration-300 flex flex-col justify-between group"
              >
                {/* Card Top / Image Area */}
                <div>
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-950">
                    <img
                      src={imageSrc}
                      alt={item.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-80"></div>
                    
                    {/* Top Group / Category Badges */}
                    <div className="absolute top-3 left-3 right-3 flex justify-between items-center">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider bg-zinc-950/80 text-amber-400 border border-amber-500/30 px-2.5 py-1 rounded-md backdrop-blur-sm">
                        {item.categoryLabel}
                      </span>
                      <span className="text-[11px] font-mono font-bold text-white bg-zinc-900/90 border border-zinc-700/80 px-2.5 py-1 rounded-md backdrop-blur-sm">
                        {item.pricingDisplay}
                      </span>
                    </div>

                    {/* Image Footer Tagline */}
                    <div className="absolute bottom-3 left-3 right-3">
                      <span className="text-[11px] font-mono text-zinc-300 font-medium line-clamp-1">
                        {item.tagline}
                      </span>
                    </div>
                  </div>

                  {/* Card Content Body */}
                  <div className="p-5 sm:p-6 space-y-4">
                    <div>
                      <span className="text-[10px] font-mono text-amber-500 uppercase tracking-widest block mb-1">
                        {item.group}
                      </span>
                      <h3 className="text-lg sm:text-xl font-bold text-white font-sans tracking-tight leading-snug group-hover:text-amber-400 transition-colors">
                        {item.name}
                      </h3>
                      <p className="text-xs text-zinc-400 font-sans mt-2 line-clamp-2 leading-relaxed">
                        {item.shortDescription}
                      </p>
                    </div>

                    {/* Key Specifications Grid */}
                    <div className="bg-zinc-950/90 border border-zinc-800/80 rounded-xl p-3.5 space-y-2">
                      <div className="flex justify-between text-xs border-b border-zinc-900 pb-1.5">
                        <span className="text-zinc-500 font-mono text-[11px]">Capacity / Weight:</span>
                        <span className="font-bold text-zinc-200 font-sans text-right">{item.specs.capacityOrWeight}</span>
                      </div>
                      <div className="flex justify-between text-xs border-b border-zinc-900 pb-1.5">
                        <span className="text-zinc-500 font-mono text-[11px]">Lift / Reach:</span>
                        <span className="font-bold text-zinc-200 font-sans text-right">{item.specs.reachOrLiftHeight}</span>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span className="text-zinc-500 font-mono text-[11px]">Power / Engine:</span>
                        <span className="font-bold text-amber-400 font-sans text-right">{item.specs.enginePower}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Action Buttons Footer */}
                <div className="p-5 sm:p-6 pt-0 border-t border-zinc-800/60 mt-2 space-y-2">
                  <div className="grid grid-cols-2 gap-2 pt-3">
                    {/* View Details Button */}
                    <button
                      id={`view-details-${item.id}`}
                      onClick={() => setActiveModalItem(item)}
                      className="inline-flex items-center justify-center space-x-1.5 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 hover:text-white text-xs font-bold py-2.5 px-3 rounded-xl transition-all cursor-pointer"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>View Details</span>
                    </button>

                    {/* Request Quote Button */}
                    <button
                      id={`request-quote-${item.id}`}
                      onClick={() => onInquireWithEquipment(item.name)}
                      className="inline-flex items-center justify-center space-x-1.5 bg-amber-500 hover:bg-amber-400 text-zinc-950 text-xs font-black py-2.5 px-3 rounded-xl transition-all shadow-md shadow-amber-500/10 cursor-pointer"
                    >
                      <span>Request Quote</span>
                    </button>
                  </div>

                  {/* Direct WhatsApp Us Button */}
                  <a
                    id={`whatsapp-item-${item.id}`}
                    href={getEquipmentWhatsAppUrl(item.name, item.specs.capacityOrWeight)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center space-x-2 bg-emerald-600/20 hover:bg-emerald-600/30 border border-emerald-500/40 text-emerald-400 hover:text-emerald-300 text-xs font-bold py-2.5 px-4 rounded-xl transition-all"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                    <span>WhatsApp Us About This Machine</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom General Inquiries Banner */}
        <div className="mt-14 bg-zinc-900 border border-zinc-800 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center md:text-left">
            <h3 className="text-lg sm:text-xl font-bold text-white">
              Looking for a Specific Heavy Machine or Forklift?
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 max-w-xl">
              {PETHONA_BUSINESS_INFO.inquiryNotice}
            </p>
          </div>

          <div className="flex items-center space-x-3 flex-shrink-0">
            <a
              id="banner-whatsapp-desk"
              href={getWhatsAppUrl("Hello Pethona Integrated & Resources LTD, I would like to inquire about machine availability and request a custom quote.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm px-5 py-3 rounded-xl shadow transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Contact Sales Desk</span>
            </a>
          </div>
        </div>

      </div>

      {/* Equipment Detailed Modal Drawer */}
      {activeModalItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl p-6 relative text-left">
            {/* Close Button */}
            <button
              onClick={() => setActiveModalItem(null)}
              className="absolute top-4 right-4 p-2 text-zinc-400 hover:text-white bg-zinc-950 border border-zinc-800 rounded-xl cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Image */}
            <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden mb-6 border border-zinc-800">
              <img
                src={EQUIPMENT_IMAGES[activeModalItem.imageKey] || EQUIPMENT_IMAGES.hero}
                alt={activeModalItem.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3 bg-amber-500 text-zinc-950 font-mono font-bold text-xs px-3 py-1 rounded-md">
                {activeModalItem.categoryLabel}
              </div>
            </div>

            {/* Modal Titles */}
            <div className="space-y-2 mb-6">
              <div className="flex justify-between items-center">
                <span className="text-xs font-mono text-amber-400 uppercase font-bold">
                  {activeModalItem.group}
                </span>
                <span className="text-xs font-mono font-bold text-white bg-zinc-950 border border-zinc-800 px-3 py-1 rounded">
                  {activeModalItem.pricingDisplay}
                </span>
              </div>
              <h3 className="text-2xl font-black text-white font-sans">
                {activeModalItem.name}
              </h3>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-sans">
                {activeModalItem.longDescription}
              </p>
            </div>

            {/* Detailed Technical Specifications Table */}
            <div className="mb-6">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400 mb-3 flex items-center">
                <Info className="w-4 h-4 mr-1.5" />
                Technical Specifications
              </h4>
              <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-4 space-y-2 text-xs">
                <div className="flex justify-between py-1.5 border-b border-zinc-900">
                  <span className="text-zinc-400 font-mono">Capacity / Weight:</span>
                  <span className="text-white font-bold text-right">{activeModalItem.specs.capacityOrWeight}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-zinc-900">
                  <span className="text-zinc-400 font-mono">Reach / Lift Height:</span>
                  <span className="text-white font-bold text-right">{activeModalItem.specs.reachOrLiftHeight}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-zinc-900">
                  <span className="text-zinc-400 font-mono">Power & Engine:</span>
                  <span className="text-white font-bold text-right">{activeModalItem.specs.enginePower}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-zinc-900">
                  <span className="text-zinc-400 font-mono">Fuel / Power Type:</span>
                  <span className="text-white font-bold text-right">{activeModalItem.specs.fuelType}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-zinc-900">
                  <span className="text-zinc-400 font-mono">Undercarriage / Tires:</span>
                  <span className="text-white font-bold text-right">{activeModalItem.specs.undercarriageOrTires}</span>
                </div>
                <div className="flex justify-between py-1.5">
                  <span className="text-zinc-400 font-mono">Operational Metric:</span>
                  <span className="text-amber-400 font-bold text-right">{activeModalItem.specs.operatingMetric}</span>
                </div>
              </div>
            </div>

            {/* Key Features List */}
            <div className="mb-6">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400 mb-3">
                Key Features
              </h4>
              <ul className="space-y-2 text-xs">
                {activeModalItem.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start space-x-2 text-zinc-300">
                    <Check className="w-3.5 h-3.5 text-amber-400 mt-0.5 flex-shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Recommended Applications */}
            <div className="mb-6">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400 mb-3">
                Recommended Applications
              </h4>
              <div className="flex flex-wrap gap-2">
                {activeModalItem.recommendedApplications.map((app, idx) => (
                  <span
                    key={idx}
                    className="text-[11px] bg-zinc-950 border border-zinc-800 text-zinc-300 px-2.5 py-1 rounded-lg"
                  >
                    {app}
                  </span>
                ))}
              </div>
            </div>

            {/* Modal Actions */}
            <div className="pt-4 border-t border-zinc-800 flex flex-col sm:flex-row gap-3">
              <a
                href={getEquipmentWhatsAppUrl(activeModalItem.name, activeModalItem.specs.capacityOrWeight)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center space-x-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm py-3 px-4 rounded-xl"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Us About This Machine</span>
              </a>
              <button
                onClick={() => {
                  const name = activeModalItem.name;
                  setActiveModalItem(null);
                  onInquireWithEquipment(name);
                }}
                className="flex-1 inline-flex items-center justify-center space-x-2 bg-amber-500 hover:bg-amber-400 text-zinc-950 font-black text-xs sm:text-sm py-3 px-4 rounded-xl cursor-pointer"
              >
                <span>Request Formal Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
