import React from "react";
import { Star, Sparkles, Quote } from "lucide-react";
import { TESTIMONIALS } from "../data";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-zinc-950 text-zinc-100 relative border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-zinc-900 border border-amber-500/30 px-3 py-1 rounded-full text-xs font-mono font-semibold text-amber-400 uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Client Testimonials</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-sans tracking-tight text-white">
            Trusted by Leaders, Brides & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-500">
              VIP Travelers
            </span>
          </h2>

          <p className="text-sm sm:text-base text-zinc-400 font-sans leading-relaxed">
            Read what corporate clients, wedding couples, and executive delegations in Lagos have to say about their experience with Luxury Car Rentals.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {TESTIMONIALS.map((testimonial) => (
            <div
              key={testimonial.id}
              id={`testimonial-${testimonial.id}`}
              className="bg-zinc-900/80 border border-zinc-800 hover:border-amber-500/30 rounded-2xl p-6 sm:p-8 flex flex-col justify-between space-y-5 transition-colors"
            >
              <div className="space-y-4">
                {/* Rating and Quote Icon */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-amber-500/30" />
                </div>

                {/* Comment */}
                <p className="text-xs sm:text-sm text-zinc-300 italic leading-relaxed">
                  "{testimonial.comment}"
                </p>
              </div>

              {/* Client Info & Vehicle Tag */}
              <div className="pt-4 border-t border-zinc-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <h4 className="text-sm font-bold text-white">{testimonial.clientName}</h4>
                  <p className="text-[11px] text-zinc-400">{testimonial.clientTitle} • {testimonial.organizationOrEvent}</p>
                </div>
                <div className="text-left sm:text-right">
                  <span className="inline-block text-[10px] font-mono font-semibold text-amber-400 bg-amber-950/40 border border-amber-500/30 px-2 py-0.5 rounded">
                    {testimonial.vehicleRented}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
