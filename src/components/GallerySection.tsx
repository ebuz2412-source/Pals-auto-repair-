import React, { useState } from "react";
import { 
  Sparkles, 
  Eye, 
  X, 
  ChevronLeft, 
  ChevronRight,
  Maximize2
} from "lucide-react";
import { SPACEBOUND_GALLERY } from "../data";
import { GalleryItem } from "../types";

export default function GallerySection() {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems = activeFilter === "all"
    ? SPACEBOUND_GALLERY
    : SPACEBOUND_GALLERY.filter(item => item.category === activeFilter);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextLightbox = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
    }
  };

  const prevLightbox = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  return (
    <section id="gallery" className="py-24 bg-white text-[#1C1917] border-b border-[#E7E2D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-[#FAF8F5] border border-[#E7E2D8] px-3.5 py-1.5 rounded-full text-xs font-mono font-medium text-[#B5905C] uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#B5905C]" />
            <span>Visual Showcase</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1C1917] tracking-tight leading-tight">
            Interior Architecture & <br />
            <span className="italic text-[#B5905C] font-light">Craftsmanship Gallery</span>
          </h2>

          <p className="text-sm sm:text-base text-[#5E574F] font-sans font-light leading-relaxed">
            A visual curation of custom bedroom sanctuaries, bespoke fluted cabinetry, statement dining salons, and executive commercial environments by Spacebound Interiors.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-4 mb-10 gap-2 no-scrollbar">
          {[
            { id: "all", label: "All Works" },
            { id: "bedroom", label: "Bedroom Design" },
            { id: "cabinetry", label: "Cabinetry & Hardware" },
            { id: "commercial", label: "Commercial Design" },
            { id: "dining", label: "Dining Room Design" },
            { id: "living", label: "Living Spaces" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] transition-all cursor-pointer border ${
                activeFilter === tab.id
                  ? "bg-[#1C1917] text-[#FAF8F5] border-[#1C1917]"
                  : "bg-[#FAF8F5] text-[#7D7569] border-[#E7E2D8] hover:border-[#B5905C] hover:text-[#1C1917]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Grid Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => openLightbox(index)}
              className="group relative aspect-[4/5] bg-[#EDE7DD] border border-[#E7E2D8] overflow-hidden cursor-pointer shadow-2xs hover:shadow-md transition-all duration-300"
            >
              <img
                src={item.image}
                alt={item.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />

              {/* Hover Dark Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C1917]/85 via-[#1C1917]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-5 text-left text-white">
                <div className="self-end">
                  <span className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-xs flex items-center justify-center text-white">
                    <Maximize2 className="w-4 h-4" />
                  </span>
                </div>

                <div className="space-y-1">
                  <span className="text-[10px] font-mono tracking-widest uppercase text-[#E4DCD0] font-semibold">
                    {item.categoryLabel}
                  </span>
                  <h4 className="font-serif text-base font-bold text-white leading-tight">
                    {item.title}
                  </h4>
                  <p className="text-[11px] text-[#D6CABE] line-clamp-2">
                    {item.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && filteredItems[lightboxIndex] && (
        <div
          id="gallery-lightbox"
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#1C1917]/90 backdrop-blur-md p-4 animate-in fade-in duration-200"
          onClick={closeLightbox}
        >
          <div
            className="relative max-w-4xl w-full max-h-[90vh] flex flex-col bg-[#1C1917] border border-[#2D2926] shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Toolbar */}
            <div className="p-4 flex items-center justify-between border-b border-[#2D2926] text-white">
              <div className="text-left">
                <span className="text-[10px] font-mono tracking-widest uppercase text-[#B5905C]">
                  {filteredItems[lightboxIndex].categoryLabel}
                </span>
                <h4 className="font-serif text-lg font-bold text-white">
                  {filteredItems[lightboxIndex].title}
                </h4>
              </div>

              <div className="flex items-center space-x-3">
                <span className="text-xs font-mono text-[#A89F91]">
                  {lightboxIndex + 1} / {filteredItems.length}
                </span>
                <button
                  onClick={closeLightbox}
                  className="p-2 text-[#D6CABE] hover:text-white cursor-pointer"
                  aria-label="Close lightbox"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Lightbox Image Stage */}
            <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-black flex items-center justify-center overflow-hidden">
              <img
                src={filteredItems[lightboxIndex].image}
                alt={filteredItems[lightboxIndex].title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain"
              />

              {/* Prev / Next buttons */}
              <button
                onClick={prevLightbox}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#1C1917]/70 hover:bg-[#1C1917] text-white flex items-center justify-center backdrop-blur-xs transition-colors cursor-pointer"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={nextLightbox}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#1C1917]/70 hover:bg-[#1C1917] text-white flex items-center justify-center backdrop-blur-xs transition-colors cursor-pointer"
                aria-label="Next image"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Bottom Caption */}
            <div className="p-4 bg-[#1C1917] text-left">
              <p className="text-xs text-[#D6CABE] font-sans">
                {filteredItems[lightboxIndex].caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
