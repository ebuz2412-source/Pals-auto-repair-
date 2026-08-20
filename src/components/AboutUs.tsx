import React from "react";
import { Truck, MapPin, Building2, MessageSquare, HardHat, Layers } from "lucide-react";
import { PETHONA_BUSINESS_INFO, getWhatsAppUrl } from "../data";
import yardImg from "../assets/images/tunnex_forklift_yard_1787165397537.jpg";

export default function AboutUs() {
  return (
    <section id="about" className="py-20 bg-zinc-950 text-white border-b border-zinc-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Authentic Facts About Pethona Integrated & Resources LTD */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="space-y-3">
              <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest bg-amber-500/10 border border-amber-500/30 px-3.5 py-1 rounded-full">
                About Pethona Integrated & Resources LTD
              </span>
              <h2 className="text-3xl sm:text-4xl font-black font-sans tracking-tight text-white leading-tight">
                Forklift & Heavy Equipment Dealer in Lagos, Nigeria
              </h2>
              <p className="text-base text-zinc-300 font-sans leading-relaxed">
                <strong>Pethona Integrated & Resources LTD</strong> is a commercial dealer in forklifts and heavy industrial equipment, located in Lagos, Nigeria. We supply businesses, contractors, logistics operators, and factories with reliable earthmoving machinery and material handling equipment.
              </p>
              <p className="text-sm text-zinc-400 font-sans leading-relaxed">
                Our machinery inventory encompasses heavy hydraulic excavators, crawler bulldozers, front wheel loaders, and versatile backhoe loaders, as well as electric, diesel, LPG, warehouse, and heavy-duty forklifts. We assist clients in evaluating machine capacities, specifications, and configurations suited for their job sites.
              </p>
            </div>

            {/* Core Business Capabilities */}
            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider">
                Equipment & Solutions Supplied:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="bg-zinc-900/80 border border-zinc-800 p-3.5 rounded-xl flex items-start space-x-3">
                  <HardHat className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-bold text-xs text-white uppercase tracking-wide">Heavy Machinery</span>
                    <span className="text-xs text-zinc-400">Excavators, bulldozers, wheel loaders, and backhoe loaders.</span>
                  </div>
                </div>

                <div className="bg-zinc-900/80 border border-zinc-800 p-3.5 rounded-xl flex items-start space-x-3">
                  <Truck className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-bold text-xs text-white uppercase tracking-wide">Forklift Sales</span>
                    <span className="text-xs text-zinc-400">Electric, diesel, LPG, and high-capacity industrial forklifts.</span>
                  </div>
                </div>

                <div className="bg-zinc-900/80 border border-zinc-800 p-3.5 rounded-xl flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-bold text-xs text-white uppercase tracking-wide">Lagos Yard & Office</span>
                    <span className="text-xs text-zinc-400">Located at 74 Itire St, beside MFM, Idi Oro, Lagos.</span>
                  </div>
                </div>

                <div className="bg-zinc-900/80 border border-zinc-800 p-3.5 rounded-xl flex items-start space-x-3">
                  <MessageSquare className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-bold text-xs text-white uppercase tracking-wide">Direct Inquiries</span>
                    <span className="text-xs text-zinc-400">Direct phone, WhatsApp communication, and quotations.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Inquire Action Button */}
            <div className="pt-2">
              <a
                href={getWhatsAppUrl("Hello Pethona Integrated & Resources LTD, I would like to schedule a visit to inspect available equipment.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold px-5 py-3 rounded-xl shadow-lg transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Inquire About Visiting Our Yard</span>
              </a>
            </div>
          </div>

          {/* Right Column: Yard Photo & Location Box */}
          <div className="lg:col-span-5 relative w-full flex flex-col items-center space-y-5">
            <div className="w-full overflow-hidden rounded-2xl border border-zinc-800 shadow-2xl bg-zinc-900 group">
              <div className="aspect-[16/9] w-full overflow-hidden relative">
                <img
                  src={yardImg}
                  alt="Pethona Integrated & Resources LTD Equipment Yard"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent"></div>
                <div className="absolute bottom-3 left-4 right-4">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-amber-400 font-bold block">
                    Equipment Yard & Operations
                  </span>
                  <span className="text-sm font-bold text-white">
                    Pethona Integrated & Resources LTD
                  </span>
                </div>
              </div>
            </div>

            {/* Verified Location Box */}
            <div className="w-full bg-zinc-900 border border-zinc-800 rounded-2xl p-5 space-y-3 shadow-xl">
              <div className="flex items-start space-x-3">
                <div className="p-2.5 bg-amber-500/10 text-amber-400 rounded-lg border border-amber-500/20 flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 block font-semibold">
                    Yard & Office Address
                  </span>
                  <p className="text-sm font-bold text-white mt-0.5 leading-snug">
                    {PETHONA_BUSINESS_INFO.address}
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-zinc-800 flex justify-between items-center text-xs">
                <span className="text-zinc-400">Postal Code: {PETHONA_BUSINESS_INFO.postalCode}</span>
                <span className="text-amber-400 font-bold font-mono">Lagos, Nigeria</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
