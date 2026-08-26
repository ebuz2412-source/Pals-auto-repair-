import React from "react";
import { 
  MapPin, 
  PhoneCall, 
  MessageSquare, 
  Mail, 
  Clock, 
  Navigation, 
  Sparkles, 
  ShieldCheck 
} from "lucide-react";
import { BUSINESS_INFO, getWhatsAppUrl } from "../data";

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-zinc-950 text-zinc-100 relative border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-zinc-900 border border-amber-500/30 px-3 py-1 rounded-full text-xs font-mono font-semibold text-amber-400 uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5 text-amber-400" />
            <span>Victoria Island Flagship Hub</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-sans tracking-tight text-white">
            Visit Our Showroom or <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-500">
              Contact Our VIP Concierge
            </span>
          </h2>

          <p className="text-sm sm:text-base text-zinc-400 font-sans leading-relaxed">
            Located on prestigious Adetokunbo Ademola Street in Victoria Island. We welcome in-person vehicle inspections and coordinate instant nationwide dispatch.
          </p>
        </div>

        {/* Contact Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Business Location & Contact Details */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="bg-zinc-900/90 border border-zinc-800 rounded-2xl p-6 sm:p-8 space-y-6">
              {/* 1. Prime Address */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 flex-shrink-0 mt-0.5">
                  <MapPin className="w-6 h-6" />
                </div>
                <div className="space-y-1 text-left">
                  <span className="text-[11px] font-mono font-semibold text-amber-400 uppercase tracking-wider block">
                    Showroom & Fleet Dispatch Location
                  </span>
                  <h3 className="text-base font-bold text-white font-sans">
                    {BUSINESS_INFO.address}
                  </h3>
                  <p className="text-xs text-zinc-400 font-sans">
                    Victoria Island, Lagos 106104, Nigeria
                  </p>
                </div>
              </div>

              {/* 2. Direct Phone / Call Now */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 flex-shrink-0 mt-0.5">
                  <PhoneCall className="w-6 h-6" />
                </div>
                <div className="space-y-1 text-left">
                  <span className="text-[11px] font-mono font-semibold text-amber-400 uppercase tracking-wider block">
                    24/7 Telephone Reservations
                  </span>
                  <a
                    href={`tel:${BUSINESS_INFO.phoneRaw}`}
                    className="text-base font-bold text-white hover:text-amber-400 transition-colors block"
                  >
                    {BUSINESS_INFO.phone}
                  </a>
                  <p className="text-xs text-zinc-400">Direct line to Victoria Island VIP concierge</p>
                </div>
              </div>

              {/* 3. WhatsApp VIP Desk */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 flex-shrink-0 mt-0.5">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div className="space-y-1 text-left">
                  <span className="text-[11px] font-mono font-semibold text-emerald-400 uppercase tracking-wider block">
                    Instant WhatsApp Support
                  </span>
                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-bold text-white hover:text-emerald-400 transition-colors block"
                  >
                    Chat with Concierge on WhatsApp
                  </a>
                  <p className="text-xs text-zinc-400">Instant photos, video walkarounds & reservations</p>
                </div>
              </div>

              {/* 4. Email Concierge */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 flex-shrink-0 mt-0.5">
                  <Mail className="w-6 h-6" />
                </div>
                <div className="space-y-1 text-left">
                  <span className="text-[11px] font-mono font-semibold text-amber-400 uppercase tracking-wider block">
                    Official Email Enquiries
                  </span>
                  <a
                    href={`mailto:${BUSINESS_INFO.email}`}
                    className="text-base font-bold text-white hover:text-amber-400 transition-colors block"
                  >
                    {BUSINESS_INFO.email}
                  </a>
                  <p className="text-xs text-zinc-400">Corporate retainers, RFP proposals & billing</p>
                </div>
              </div>

              {/* 5. Operating Hours */}
              <div className="flex items-start space-x-4 pt-2 border-t border-zinc-800">
                <div className="w-12 h-12 rounded-xl bg-zinc-800 border border-zinc-700 flex items-center justify-center text-zinc-300 flex-shrink-0 mt-0.5">
                  <Clock className="w-6 h-6 text-amber-400" />
                </div>
                <div className="space-y-1 text-left">
                  <span className="text-[11px] font-mono font-semibold text-zinc-400 uppercase tracking-wider block">
                    Operating Schedule
                  </span>
                  <p className="text-xs font-bold text-white">24 Hours a Day • 7 Days a Week</p>
                  <p className="text-xs text-zinc-400">Chauffeurs and vehicle deliveries active around the clock</p>
                </div>
              </div>
            </div>

            {/* Quick Action CTA Box */}
            <div className="grid grid-cols-2 gap-3">
              <a
                id="contact-call-btn"
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="flex items-center justify-center space-x-2 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-zinc-100 font-bold py-3 px-4 rounded-xl text-xs sm:text-sm transition-colors"
              >
                <PhoneCall className="w-4 h-4 text-amber-400" />
                <span>Call Now</span>
              </a>

              <a
                id="contact-whatsapp-btn"
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 px-4 rounded-xl text-xs sm:text-sm transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>

          {/* Right Column: Victoria Island Map & Location Visualizer */}
          <div className="lg:col-span-7 bg-zinc-900/90 border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl flex flex-col">
            {/* Map Header */}
            <div className="p-4 sm:p-5 border-b border-zinc-800 flex justify-between items-center bg-zinc-950/60">
              <div className="flex items-center space-x-2 text-left">
                <Navigation className="w-4 h-4 text-amber-400" />
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-200">
                  Victoria Island, Lagos Showroom Map
                </span>
              </div>
              <span className="text-[10px] font-mono text-amber-400 bg-amber-950/50 border border-amber-500/30 px-2 py-0.5 rounded">
                Live Location
              </span>
            </div>

            {/* Google Map Iframe Embed */}
            <div className="relative w-full h-[400px] lg:h-full min-h-[380px] bg-zinc-950">
              <iframe
                title="Luxury Car Rentals Victoria Island Location Map"
                src="https://maps.google.com/maps?q=Adetokunbo+Ademola+Street,+Victoria+Island,+Lagos,+Nigeria&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) brightness(95%) contrast(90%)" }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              ></iframe>

              {/* Map Floating Location Card */}
              <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-sm bg-zinc-950/95 border border-zinc-800 p-4 rounded-xl shadow-2xl backdrop-blur-md text-left space-y-1.5">
                <div className="flex items-center space-x-1.5 text-[11px] font-mono font-bold text-amber-400 uppercase">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Flagship Office</span>
                </div>
                <h4 className="text-xs font-bold text-white">Adetokunbo Ademola Street, Victoria Island</h4>
                <p className="text-[11px] text-zinc-400">
                  Easy access from Eko Hotel & Suites, Victoria Island commercial hub, and Ikoyi via Falomo Bridge.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
