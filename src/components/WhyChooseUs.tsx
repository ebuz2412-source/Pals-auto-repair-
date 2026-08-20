import React from "react";
import { ShieldCheck, HardHat, Briefcase, MapPin, MessageSquare, CheckCircle2, Truck, Layers } from "lucide-react";
import { WHY_CHOOSE_PETHONA, PETHONA_BUSINESS_INFO, getWhatsAppUrl } from "../data";

const ICONS = [
  HardHat,
  ShieldCheck,
  MapPin,
  Briefcase,
  MessageSquare
];

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-20 bg-zinc-900 text-zinc-100 border-b border-zinc-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-14 gap-6">
          <div className="max-w-2xl space-y-3">
            <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest bg-amber-500/10 border border-amber-500/30 px-3 py-1 rounded-full">
              Why Choose Pethona
            </span>
            <h2 className="text-3xl sm:text-4xl font-black font-sans tracking-tight text-white">
              Dependable Machinery & Forklift Solutions
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 font-sans leading-relaxed">
              We supply reliable heavy earthmoving equipment and material handling forklifts, helping contractors, warehouses, and industrial operations in Lagos and nationwide maintain productivity.
            </p>
          </div>
          
          <div className="flex-shrink-0 bg-zinc-950 text-white rounded-2xl p-5 border border-zinc-800 shadow-xl flex items-center space-x-4 max-w-sm">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 flex-shrink-0">
              <MapPin className="w-6 h-6" />
            </div>
            <div className="text-xs font-sans">
              <span className="block font-bold text-white uppercase text-xs">Lagos Machinery Yard</span>
              <span className="text-zinc-400">{PETHONA_BUSINESS_INFO.addressShort}</span>
            </div>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CHOOSE_PETHONA.map((item, index) => {
            const IconComponent = ICONS[index % ICONS.length];
            return (
              <div
                key={item.id}
                id={`why-card-${item.id}`}
                className="bg-zinc-950/80 rounded-2xl border border-zinc-800 p-6 shadow-md hover:border-amber-500/40 hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Icon Wrapper */}
                  <div className="w-10 h-10 bg-amber-500/10 text-amber-400 border border-amber-500/20 rounded-xl flex items-center justify-center">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  {/* Title */}
                  <h3 className="text-lg font-bold font-sans text-white">
                    {item.title}
                  </h3>
                  {/* Description */}
                  <p className="text-xs sm:text-sm text-zinc-400 font-sans leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-5 mt-4 border-t border-zinc-800/80 flex items-center justify-between text-zinc-500 text-xs">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-amber-400 font-semibold">
                    Pethona Quality
                  </span>
                  <CheckCircle2 className="w-4 h-4 text-amber-400" />
                </div>
              </div>
            );
          })}

          {/* Quick Contact Card inside the grid */}
          <div className="bg-gradient-to-br from-amber-500/20 to-zinc-950 rounded-2xl border border-amber-500/40 p-6 shadow-md flex flex-col justify-between">
            <div className="space-y-3">
              <span className="text-[10px] font-mono uppercase tracking-widest text-amber-400 font-bold">
                Machinery Consultations
              </span>
              <h3 className="text-lg font-bold text-white font-sans">
                Need to verify current machine availability?
              </h3>
              <p className="text-xs text-zinc-300 font-sans leading-relaxed">
                Connect with our equipment sales team via WhatsApp for fast stock confirmations, equipment photos, and formal quotations.
              </p>
            </div>
            <div className="pt-4 mt-2">
              <a
                href={getWhatsAppUrl("Hello Pethona Integrated & Resources LTD, I'd like to consult on available heavy equipment and forklifts.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center space-x-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold py-3 px-4 rounded-xl shadow-lg transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
