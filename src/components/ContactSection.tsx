import React from "react";
import { Phone, Mail, MapPin, Clock, Calendar, ShieldCheck, ExternalLink } from "lucide-react";
import { CALGARY_LOCATION } from "../data";
import MediaLoader from "./MediaLoader";

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-zinc-950 text-white relative overflow-hidden">
      {/* Decorative Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:6rem_6rem] opacity-5"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-mono font-bold text-red-500 uppercase tracking-widest bg-zinc-900 border border-zinc-800 px-3 py-1 rounded-full">
            Contact & Support
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-sans tracking-tight">
            Schedule a Drop-Off or Visit Our Shop
          </h2>
          <p className="text-sm text-zinc-400 font-sans leading-relaxed">
            Have an urgent repair or warning light? Give us a call or visit our professional diagnostic center in Central Calgary. No appointment required for rapid safety bulb or battery replacements.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Contact cards and business hours */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            
            {/* Shop Exterior Facade Visual */}
            <div className="overflow-hidden rounded-2xl border border-zinc-800 shadow-md bg-zinc-900">
              <MediaLoader
                src="/input_file_5.png"
                alt="Pal Auto Repairs Professional Shop Front Exterior"
                sectionName="Contact Section: Shop Front"
                expectedFile="input_file_5.png"
                description="Our diagnostic center front facade, featuring visible bay doors and customer intake reception."
                aspectRatio="aspect-[16/8]"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Quick Contact Details */}
            <div className="space-y-6">
              
              {/* Card Address */}
              <div className="flex items-start space-x-4 p-5 bg-zinc-900 border border-zinc-800 rounded-2xl">
                <div className="p-3 bg-red-950/40 text-red-500 border border-red-500/15 rounded-xl flex-shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <span className="block text-xs font-mono font-bold text-zinc-400 uppercase tracking-wider mb-1">Workshop Address</span>
                  <p className="text-base font-sans font-bold text-white">{CALGARY_LOCATION.address}</p>
                  <p className="text-xs font-sans text-zinc-400 mt-1">{CALGARY_LOCATION.neighborhood}</p>
                  <a
                    id="directions-link"
                    href="https://maps.google.com/?q=1234+9th+Ave+SE,+Calgary,+AB+T2G+0T1"
                    target="_blank"
                    referrerPolicy="no-referrer"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-xs font-mono text-red-400 hover:text-red-300 font-bold mt-2 hover:underline"
                  >
                    <span>Get Driving Directions</span>
                    <ExternalLink className="w-3 h-3 ml-1" />
                  </a>
                </div>
              </div>

              {/* Card Phone */}
              <div className="flex items-start space-x-4 p-5 bg-zinc-900 border border-zinc-800 rounded-2xl">
                <div className="p-3 bg-red-950/40 text-red-500 border border-red-500/15 rounded-xl flex-shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <span className="block text-xs font-mono font-bold text-zinc-400 uppercase tracking-wider mb-1">Direct Booking lines</span>
                  <a
                    id="contact-phone-primary"
                    href={`tel:${CALGARY_LOCATION.phone.replace(/[^0-9+]/g, "")}`}
                    className="block text-xl font-mono font-bold text-white hover:text-red-400 transition-colors"
                  >
                    {CALGARY_LOCATION.phone}
                  </a>
                  <a
                    id="contact-phone-secondary"
                    href={`tel:${CALGARY_LOCATION.altPhone.replace(/[^0-9+]/g, "")}`}
                    className="block text-sm font-mono text-zinc-400 hover:text-zinc-200 transition-colors mt-1"
                  >
                    Alt Line: {CALGARY_LOCATION.altPhone}
                  </a>
                </div>
              </div>

              {/* Card Email */}
              <div className="flex items-start space-x-4 p-5 bg-zinc-900 border border-zinc-800 rounded-2xl">
                <div className="p-3 bg-red-950/40 text-red-500 border border-red-500/15 rounded-xl flex-shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <span className="block text-xs font-mono font-bold text-zinc-400 uppercase tracking-wider mb-1">Email Correspondence</span>
                  <a
                    id="contact-email"
                    href={`mailto:${CALGARY_LOCATION.email}`}
                    className="block text-base font-sans font-bold text-white hover:text-red-400 transition-colors"
                  >
                    {CALGARY_LOCATION.email}
                  </a>
                  <p className="text-xs font-sans text-zinc-400 mt-1">Estimates, corporate fleet accounts, and invoice support.</p>
                </div>
              </div>

            </div>

            {/* Business Hours Panel */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
              <h4 className="text-sm font-bold uppercase font-mono tracking-wider border-b border-zinc-800 pb-3 mb-4 flex items-center">
                <Clock className="w-4 h-4 mr-2 text-red-500" />
                Workshop Business Hours
              </h4>
              <div className="space-y-2 text-sm font-sans font-medium">
                {CALGARY_LOCATION.hours.map((h, idx) => (
                  <div key={idx} className="flex justify-between py-1.5 border-b border-zinc-950 last:border-0">
                    <span className="text-zinc-400">{h.days}</span>
                    <span className="text-white font-mono">{h.times}</span>
                  </div>
                ))}
              </div>
              <div className="flex items-center space-x-2 bg-zinc-950 p-3 rounded-lg border border-zinc-800/60 mt-5 text-zinc-500 text-[11px] font-mono leading-relaxed">
                <ShieldCheck className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                <span>After-hours key drop-box is monitored 24/7 with secure continuous video recording.</span>
              </div>
            </div>

          </div>

          {/* Right Column: Embedded Interactive Google Map */}
          <div className="lg:col-span-7 bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden p-3 shadow-2xl relative min-h-[350px] flex flex-col">
            <div className="flex justify-between items-center px-3 py-2 border-b border-zinc-800 pb-3 mb-3">
              <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest flex items-center">
                <MapPin className="w-4 h-4 text-red-500 mr-1.5" />
                Google Maps Navigation
              </span>
              <span className="text-[10px] font-mono text-zinc-500">
                LAT: 51.0396° N | LON: -114.0354° W
              </span>
            </div>

            {/* Real Interactive Map Iframe - points to 1234 9th Ave SE Calgary */}
            <div className="flex-grow w-full rounded-xl overflow-hidden border border-zinc-800 bg-zinc-950">
              <iframe
                id="google-maps-iframe"
                title="Pal Auto Repairs Google Map Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2508.8266497140885!2d-114.0354148!3d51.0396001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53717aa343277717%3A0xc3fa5990f1ea09b7!2s1234%209%20Ave%20SE%2C%20Calgary%2C%20AB%20T2G%200T1!5e0!3m2!1sen!2sca!4v1700000000000!5m2!1sen!2sca"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer"
                className="w-full h-full grayscale opacity-80 hover:opacity-100 transition-opacity duration-300 min-h-[300px]"
              ></iframe>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
