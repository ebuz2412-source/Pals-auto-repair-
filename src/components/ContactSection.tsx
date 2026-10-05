import React from "react";
import { 
  MapPin, 
  Clock, 
  Phone, 
  MessageSquare, 
  Compass, 
  Sparkles, 
  Truck, 
  ExternalLink,
  Navigation,
  ShieldCheck
} from "lucide-react";
import { BUSINESS_INFO, SERVICE_AREAS_LAGOS } from "../data";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#0E131F] border-b border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-widest text-sky-400">
            <MapPin className="w-3.5 h-3.5" />
            <span>FIND OUR WORKSHOP & SHOWROOM</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Contact & Location
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Conveniently based in Mushin to serve both Lagos Mainland and Lagos Island. Visit our workshop for cut-to-size glass pickups or schedule site measurement and installation anywhere in Lagos.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Location Card */}
          <div className="glass-panel p-6 sm:p-7 rounded-2xl border border-white/15 space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-400/20 flex items-center justify-center text-sky-400">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="font-heading text-lg font-bold text-white">Workshop & Shop Address</h3>
              <p className="text-slate-200 text-sm font-semibold">
                {BUSINESS_INFO.address}
              </p>
              <p className="text-slate-400 text-xs leading-relaxed">
                Central Mushin location with direct access to Surulere, Ikeja, Oshodi, and Island expressways.
              </p>
            </div>

            <div className="pt-4 border-t border-white/10">
              <a
                id="contact-directions-btn"
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-xl bg-sky-500 hover:bg-sky-400 text-white text-xs font-semibold inline-flex items-center justify-center space-x-2 shadow-sm transition-all"
              >
                <Compass className="w-4 h-4" />
                <span>Open Google Maps Directions</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Operating Hours & Phone Numbers Card */}
          <div className="glass-panel p-6 sm:p-7 rounded-2xl border border-emerald-500/30 space-y-4 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/10 rounded-bl-full pointer-events-none"></div>
            
            <div className="space-y-3 relative z-10">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <Phone className="w-6 h-6" />
              </div>
              <div className="flex items-center space-x-2">
                <h3 className="font-heading text-lg font-bold text-white">Direct Phone Lines</h3>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              </div>
              <div className="text-emerald-400 font-semibold text-xs uppercase tracking-wider">
                Open 24 Hours Daily
              </div>
              <div className="space-y-1.5 pt-1">
                <a
                  href="tel:08138511873"
                  className="block text-white hover:text-sky-300 font-mono text-sm font-semibold transition-colors"
                >
                  📞 08138511873
                </a>
                <a
                  href="tel:09014120207"
                  className="block text-white hover:text-sky-300 font-mono text-sm font-semibold transition-colors"
                >
                  📞 09014120207
                </a>
              </div>
              <p className="text-slate-400 text-xs">
                Available 24/7 for inquiries, site bookings, and urgent glass repairs.
              </p>
            </div>

            <div className="pt-4 border-t border-white/10 relative z-10 grid grid-cols-2 gap-2">
              <a
                id="contact-call-btn-1"
                href="tel:08138511873"
                className="py-2.5 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold text-center border border-white/20 transition-all"
              >
                Call Line 1
              </a>
              <a
                id="contact-call-btn-2"
                href="tel:09014120207"
                className="py-2.5 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold text-center border border-white/20 transition-all"
              >
                Call Line 2
              </a>
            </div>
          </div>

          {/* WhatsApp & Social Media Card */}
          <div className="glass-panel p-6 sm:p-7 rounded-2xl border border-white/15 space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                <MessageSquare className="w-6 h-6" />
              </div>
              <h3 className="font-heading text-lg font-bold text-white">WhatsApp & Social Media</h3>
              <div className="space-y-1.5">
                <div className="text-xs text-slate-300">
                  <span className="text-slate-400 block">WhatsApp Numbers:</span>
                  <div className="flex flex-wrap gap-2 mt-1">
                    <a
                      href="https://wa.me/2349014120207"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-2.5 py-1 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 font-mono text-xs hover:bg-emerald-500/20"
                    >
                      💬 09014120207
                    </a>
                    <a
                      href="https://wa.me/2349046187593"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-2.5 py-1 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 font-mono text-xs hover:bg-emerald-500/20"
                    >
                      💬 09046187593
                    </a>
                  </div>
                </div>

                <div className="pt-2 text-xs text-slate-300">
                  <span className="text-slate-400 block mb-1">Follow Our Works:</span>
                  <div className="flex flex-wrap gap-2">
                    <a
                      href={BUSINESS_INFO.tiktokUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-2.5 py-1 rounded bg-white/10 hover:bg-white/15 text-slate-200 text-xs border border-white/10 inline-flex items-center space-x-1"
                    >
                      <span>TikTok:</span>
                      <strong className="text-white">@{BUSINESS_INFO.tiktok}</strong>
                    </a>
                    <a
                      href={BUSINESS_INFO.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-2.5 py-1 rounded bg-white/10 hover:bg-white/15 text-pink-300 text-xs border border-white/10 inline-flex items-center space-x-1"
                    >
                      <span>IG:</span>
                      <strong className="text-white">@{BUSINESS_INFO.instagram}</strong>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10">
              <a
                id="contact-whatsapp-btn"
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold inline-flex items-center justify-center space-x-2 shadow-lg shadow-emerald-600/20 transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Interactive Location Showcase & Map Embed / Visualizer */}
        <div className="glass-panel rounded-2xl border border-white/15 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Map Frame */}
            <div className="lg:col-span-7 bg-slate-950 relative min-h-[360px] flex items-center justify-center">
              {/* Google Maps iFrame */}
              <iframe
                title="OLANREWAJU GLAZIER Location Map"
                src="https://maps.google.com/maps?q=24+Buhari+Street,+Mushin,+Lagos,+Nigeria&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full min-h-[360px] border-0 filter contrast-125 opacity-90 hover:opacity-100 transition-opacity"
                loading="lazy"
              ></iframe>

              {/* Inset Badge */}
              <div className="absolute top-4 left-4 glass-panel px-3 py-2 rounded-xl border border-white/20 shadow-xl pointer-events-none">
                <div className="text-white font-heading font-bold text-xs flex items-center space-x-1.5">
                  <MapPin className="w-3.5 h-3.5 text-sky-400" />
                  <span>24 Buhari St, Mushin</span>
                </div>
                <span className="text-[10px] text-emerald-400 font-medium">Open 24 Hours</span>
              </div>
            </div>

            {/* Road Connectivity & Access Directions */}
            <div className="lg:col-span-5 p-6 sm:p-8 space-y-6 bg-slate-900/60 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-sky-400">
                  <Navigation className="w-4 h-4" />
                  <span>Road Connectivity & Delivery Access</span>
                </div>

                <h3 className="font-heading text-xl font-bold text-white">
                  Strategically Situated in Mushin, Lagos
                </h3>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  Located in the heart of Lagos Mainland, our 24, Buhari Street workshop provides rapid access to both Mainland commercial hubs and Island residential estates:
                </p>

                <div className="space-y-2.5 text-xs text-slate-300">
                  <div className="flex items-start space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400 mt-1.5 flex-shrink-0"></span>
                    <span><strong>From Surulere & Yaba:</strong> Quick transit via Western Avenue / Funsho Williams and Agege Motor Road.</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400 mt-1.5 flex-shrink-0"></span>
                    <span><strong>From Ikeja & Maryland:</strong> Direct access down Ikorodu Road or Oshodi expressway.</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400 mt-1.5 flex-shrink-0"></span>
                    <span><strong>To Lagos Island, VI & Lekki:</strong> Seamless link via 3rd Mainland Bridge or Eko Bridge for timely site installations.</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-3">
                <a
                  id="map-directions-link-btn"
                  href={BUSINESS_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-white text-xs font-semibold inline-flex items-center space-x-2 shadow-sm transition-all"
                >
                  <Compass className="w-4 h-4" />
                  <span>Navigate with Google Maps</span>
                </a>

                <a
                  id="map-whatsapp-inquiry-btn"
                  href={BUSINESS_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-slate-200 text-xs font-semibold inline-flex items-center space-x-2 border border-white/15 transition-all"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-400" />
                  <span>Send Site Location</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
