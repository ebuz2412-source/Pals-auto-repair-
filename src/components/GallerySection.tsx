import React, { useState } from "react";
import { Sparkles, Maximize2, X, ChevronRight, Layers } from "lucide-react";
import { GALLERY_ITEMS } from "../data";
import { GalleryShowcaseItem } from "../types";

export default function GallerySection() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [activeLightboxItem, setActiveLightboxItem] = useState<GalleryShowcaseItem | null>(null);

  const filterTabs = [
    { id: "all", label: "All Items" },
    { id: "mirrors", label: "Mirrors" },
    { id: "showers", label: "Showers" },
    { id: "partitions", label: "Partitions" },
    { id: "doors", label: "Doors & Facades" },
    { id: "balustrades", label: "Balustrades" },
    { id: "fabrication", label: "Cutting & Edging" },
    { id: "tabletop", label: "Tabletops" },
  ];

  const filteredItems = activeCategory === "all"
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === activeCategory);

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-[#0B0F17] border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-10">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-widest text-sky-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>VISUAL CRAFTSMANSHIP & FINISHES</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Glass & Mirror Details
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Take a closer look at the precision cuts, bevelled edges, polished borders, and hardware alignments crafted at our Mushin workshop.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center justify-center overflow-x-auto no-scrollbar gap-2 mb-10">
          {filterTabs.map(tab => (
            <button
              key={tab.id}
              id={`gallery-filter-${tab.id}`}
              onClick={() => setActiveCategory(tab.id)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                activeCategory === tab.id
                  ? "bg-white text-slate-950 font-semibold shadow-sm"
                  : "bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              id={`gallery-item-${item.id}`}
              onClick={() => setActiveLightboxItem(item)}
              className="glass-panel group rounded-2xl overflow-hidden border border-white/10 hover:border-white/25 transition-all duration-300 cursor-pointer relative"
            >
              <div className="aspect-[4/3] overflow-hidden bg-slate-950 relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/10 to-transparent"></div>

                {/* Hover overlay indicator */}
                <div className="absolute inset-0 bg-sky-500/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="p-3 rounded-full bg-slate-950/80 text-white backdrop-blur-md border border-white/20">
                    <Maximize2 className="w-5 h-5 text-sky-400" />
                  </div>
                </div>

                <div className="absolute top-3 left-3 bg-slate-950/80 px-2.5 py-1 rounded-md text-[10px] font-semibold text-slate-300 uppercase tracking-wider border border-white/10">
                  {item.categoryLabel}
                </div>

                <div className="absolute bottom-3 left-3 right-3">
                  <h3 className="text-white font-heading font-bold text-base">
                    {item.title}
                  </h3>
                  <p className="text-slate-300 text-xs line-clamp-1 mt-0.5">
                    {item.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeLightboxItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in">
          <div className="relative max-w-3xl w-full glass-panel rounded-2xl overflow-hidden border border-white/20 bg-[#0F172A] shadow-2xl">
            <button
              id="close-lightbox-btn"
              onClick={() => setActiveLightboxItem(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 hover:bg-black text-white transition-colors"
              aria-label="Close image"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="aspect-[16/10] bg-slate-950 overflow-hidden">
              <img
                src={activeLightboxItem.image}
                alt={activeLightboxItem.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="p-6 space-y-2">
              <span className="text-[10px] uppercase font-bold tracking-widest text-sky-400">
                {activeLightboxItem.categoryLabel}
              </span>
              <h3 className="font-heading text-xl font-bold text-white">
                {activeLightboxItem.title}
              </h3>
              <p className="text-slate-300 text-sm">
                {activeLightboxItem.caption}
              </p>
              <div className="pt-2 text-xs text-slate-400 border-t border-white/10">
                <strong className="text-slate-200">Fabrication Details: </strong>
                {activeLightboxItem.details}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
