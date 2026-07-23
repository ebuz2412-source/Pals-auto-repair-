import React, { useState } from "react";
import { Star, MessageSquare, Quote, CheckCircle } from "lucide-react";
import { TESTIMONIALS } from "../data";

export default function Testimonials() {
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Heating & Climate", "Brakes & Safety", "Diagnostics", "Scheduled Maintenance"];

  const filteredTestimonials = filter === "All"
    ? TESTIMONIALS
    : TESTIMONIALS.filter(t => t.tag.toLowerCase().includes(filter.split(" ")[0].toLowerCase()));

  return (
    <section id="testimonials" className="py-24 bg-zinc-950 text-white border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-mono font-bold text-red-500 uppercase tracking-widest bg-zinc-900 border border-zinc-800 px-3 py-1 rounded-full">
            Customer Satisfaction
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-sans tracking-tight text-white">
            What Our Customers Say About Us
          </h2>
          <p className="text-sm text-zinc-400 font-sans leading-relaxed">
            Real feedback from local vehicle owners who have experienced our transparent diagnostic inspection workflow and certified craftsmanship.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              id={`filter-btn-${cat.replace(/\s+/g, "-")}`}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full text-xs font-mono font-bold tracking-wider uppercase border transition-all duration-200 ${
                filter === cat
                  ? "bg-red-600 text-white border-red-600 shadow-lg shadow-red-950/40"
                  : "bg-zinc-900 text-zinc-400 border-zinc-800 hover:text-white hover:border-zinc-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredTestimonials.map((item) => (
            <div
              key={item.id}
              id={`testimonial-card-${item.id}`}
              className="bg-zinc-900/60 border border-zinc-800/80 rounded-2xl p-6 sm:p-8 shadow-xl relative overflow-hidden backdrop-blur-sm hover:border-zinc-700 transition-colors duration-300 flex flex-col justify-between"
            >
              {/* Top Quote Icon Accent */}
              <div className="absolute top-4 right-4 text-zinc-800/40 pointer-events-none">
                <Quote className="w-12 h-12 transform rotate-180" />
              </div>

              <div className="space-y-6">
                {/* Rating Stars */}
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < item.rating
                          ? "text-yellow-500 fill-current"
                          : "text-zinc-700"
                      }`}
                    />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-zinc-300 text-sm sm:text-base font-sans leading-relaxed italic relative z-10">
                  "{item.text}"
                </p>
              </div>

              {/* Author Footer */}
              <div className="flex items-center justify-between pt-6 mt-6 border-t border-zinc-800/60">
                <div className="flex items-center space-x-3">
                  {/* Styled Avatar Placeholder */}
                  <div className="w-10 h-10 bg-zinc-800 rounded-full flex items-center justify-center text-red-500 font-mono font-bold text-sm border border-zinc-700">
                    {item.name.split(" ").map(n => n[0]).join("")}
                  </div>
                  <div>
                    <span className="block font-bold text-sm text-white font-sans leading-none">{item.name}</span>
                    <span className="block text-xs text-zinc-400 font-sans mt-1">{item.vehicle}</span>
                  </div>
                </div>
                <div className="flex flex-col items-end text-right font-mono text-[10px]">
                  <span className="text-zinc-500">{item.date}</span>
                  <span className="text-red-500 font-bold tracking-wider uppercase mt-1 flex items-center">
                    <CheckCircle className="w-3 h-3 text-red-500 mr-1" />
                    Verified client
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Highlight Stats Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-zinc-800/80 pt-16 mt-16 text-center font-mono">
          <div>
            <div className="text-3xl sm:text-4xl font-extrabold text-white">4.9★</div>
            <div className="text-xs text-zinc-500 uppercase tracking-widest mt-2">Google Rating</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-extrabold text-red-500">98%</div>
            <div className="text-xs text-zinc-500 uppercase tracking-widest mt-2">First-Time Diagnostics Success</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-extrabold text-white">20,000+</div>
            <div className="text-xs text-zinc-500 uppercase tracking-widest mt-2">Satisfied Clients</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-extrabold text-white">100%</div>
            <div className="text-xs text-zinc-500 uppercase tracking-widest mt-2">Certified Technical Staff</div>
          </div>
        </div>

      </div>
    </section>
  );
}
