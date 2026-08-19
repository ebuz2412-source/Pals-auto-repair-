import React, { useState } from "react";
import { Star, MessageSquare, Quote, CheckCircle2, Building2 } from "lucide-react";
import { TESTIMONIALS, getWhatsAppUrl } from "../data";

export default function Testimonials() {
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Warehousing", "Manufacturing", "Logistics", "Heavy Industry"];

  const filteredTestimonials = filter === "All"
    ? TESTIMONIALS
    : TESTIMONIALS.filter((t) => t.category.toLowerCase().includes(filter.toLowerCase()));

  return (
    <section id="testimonials" className="py-20 bg-zinc-900 text-white border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest bg-amber-500/10 border border-amber-500/30 px-3 py-1 rounded-full">
            Client Feedback & Experience
          </span>
          <h2 className="text-3xl sm:text-4xl font-black font-sans tracking-tight text-white">
            What Businesses Say About Tunnex Forklifts
          </h2>
          <p className="text-sm text-zinc-400 font-sans leading-relaxed">
            Feedback from warehouse managers, factory operators, and logistics teams using equipment supplied by Tunnex Mega Investment.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              id={`testimonial-filter-${cat.toLowerCase()}`}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold font-sans transition-all duration-150 cursor-pointer ${
                filter === cat
                  ? "bg-amber-500 text-zinc-950 shadow-md shadow-amber-500/20"
                  : "bg-zinc-950 text-zinc-400 border border-zinc-800 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {filteredTestimonials.map((item) => (
            <div
              key={item.id}
              id={`testimonial-card-${item.id}`}
              className="bg-zinc-950/80 border border-zinc-800 rounded-2xl p-6 sm:p-7 shadow-xl relative flex flex-col justify-between hover:border-amber-500/40 transition-all duration-200"
            >
              <div className="space-y-4">
                {/* Rating Stars & Category Badge */}
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < item.rating
                            ? "text-amber-400 fill-current"
                            : "text-zinc-700"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-[10px] font-mono text-zinc-400 bg-zinc-900 border border-zinc-800 px-2.5 py-0.5 rounded">
                    {item.category}
                  </span>
                </div>

                {/* Review Text */}
                <p className="text-zinc-300 text-xs sm:text-sm font-sans leading-relaxed italic">
                  "{item.text}"
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center justify-between pt-5 mt-5 border-t border-zinc-800/80">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-zinc-900 rounded-xl flex items-center justify-center text-amber-400 font-mono font-bold text-xs border border-zinc-800">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block font-bold text-xs sm:text-sm text-white font-sans">{item.name}</span>
                    <span className="block text-[11px] text-zinc-400 font-sans">{item.role} • {item.company}</span>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-[10px] font-mono text-amber-400 font-bold flex items-center justify-end">
                    <CheckCircle2 className="w-3.5 h-3.5 mr-1" />
                    Verified Equipment
                  </span>
                  <span className="text-[10px] font-mono text-zinc-500 block mt-0.5">{item.equipment}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Consultation Callout */}
        <div className="mt-12 text-center">
          <p className="text-xs text-zinc-400 font-sans mb-3">
            Want to discuss equipment suitability for your facility?
          </p>
          <a
            href={getWhatsAppUrl("Hello Tunnex Mega Investment, I would like to inquire about customer recommendations and forklift options.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold px-5 py-2.5 rounded-xl shadow transition-colors"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Connect with Tunnex Sales Team</span>
          </a>
        </div>

      </div>
    </section>
  );
}
