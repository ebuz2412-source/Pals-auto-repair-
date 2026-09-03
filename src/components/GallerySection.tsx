import React, { useState } from "react";
import { 
  Sparkles, 
  Eye, 
  X, 
  ChevronLeft, 
  ChevronRight,
  Maximize2
} from "lucide-react";
import { ESTIE_GALLERY } from "../data";
import { GalleryItem } from "../types";

export default function GallerySection() {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems = activeFilter === "all"
    ? ESTIE_GALLERY
    : ESTIE_GALLERY.filter(item => item.category === activeFilter);

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
            Design & Window <br />
            <span className="italic text-[#B5905C] font-light">Treatment Gallery</span>
          </h2>

          <p className="text-sm sm:text-base text-[#5E574F] font-sans font-light leading-relaxed">
            A glimpse into the textures, draping, automated blinds, and architectural finishes designed and installed by ESTIE INTERIOR.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-4 mb-10 gap-2 no-scrollbar">
          {[
            { id: "all", label: "All Works" },
            { id: "window-treatments", label: "Window Treatments" },
            { id: "bedding", label: "Bespoke Bedding" },
            { id: "living", label: "Living Spaces" },
            { id: "commercial", label: "Commercial Offices" },
            { id: "flooring", label: "Flooring Selection" },
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

        {/* Masonry / Grid Gallery */}
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

              {/* Static subtle label on bottom when not hovered */}
              <div className="absolute bottom-0 inset-x-0 bg-[#1C1917]/60 backdrop-blur-xs py-2 px-3 text-left group-hover:opacity-0 transition-opacity">
                <span className="text-[10px] font-mono tracking-wider uppercase text-[#E4DCD0] block truncate">
                  {item.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && filteredItems[lightboxIndex] && (
        <div
          id="gallery-lightbox"
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#1C1917]/90 backdrop-blur-sm p-4 select-none animate-in fade-in duration-200"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 p-2.5 text-white/80 hover:text-white bg-black/40 rounded-full cursor-pointer z-10"
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation Arrows */}
          <button
            onClick={prevLightbox}
            className="absolute left-4 sm:left-8 p-3 text-white/80 hover:text-white bg-black/40 hover:bg-black/60 rounded-full cursor-pointer z-10 transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextLightbox}
            className="absolute right-4 sm:right-8 p-3 text-white/80 hover:text-white bg-black/40 hover:bg-black/60 rounded-full cursor-pointer z-10 transition-colors"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Center Image Container */}
          <div
            className="max-w-4xl w-full max-h-[85vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative max-h-[75vh] w-auto overflow-hidden rounded-sm border border-white/20 shadow-2xl">
              <img
                src={filteredItems[lightboxIndex].image}
                alt={filteredItems[lightboxIndex].title}
                referrerPolicy="no-referrer"
                className="max-h-[75vh] max-w-full object-contain"
              />
            </div>

            {/* Caption Bar */}
            <div className="mt-4 text-center max-w-xl text-white space-y-1">
              <span className="text-[10px] font-mono tracking-widest uppercase text-[#B5905C] font-semibold">
                {filteredItems[lightboxIndex].categoryLabel} ({lightboxIndex + 1} of {filteredItems.length})
              </span>
              <h3 className="font-serif text-lg sm:text-xl font-bold">
                {filteredItems[lightboxIndex].title}
              </h3>
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
