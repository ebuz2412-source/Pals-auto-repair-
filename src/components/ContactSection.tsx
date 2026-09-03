import React from "react";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageSquare, 
  Star, 
  Compass, 
  Navigation,
  Sparkles
} from "lucide-react";
import { ESTIE_BUSINESS_INFO, getWhatsAppUrl } from "../data";

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-[#FAF8F5] text-[#1C1917] border-b border-[#E7E2D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-white border border-[#E7E2D8] px-3.5 py-1.5 rounded-full text-xs font-mono font-medium text-[#B5905C] uppercase tracking-wider">
            <Compass className="w-3.5 h-3.5 text-[#B5905C]" />
            <span>Visit Showroom & Studio</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1C1917] tracking-tight leading-tight">
            Connect With Our <br />
            <span className="italic text-[#B5905C] font-light">Sangotedo Showroom</span>
          </h2>

          <p className="text-sm sm:text-base text-[#5E574F] font-sans font-light leading-relaxed">
            Experience our fabrics, drapery tracks, motorized blinds, and surface finishes in person at our design showroom in Sangotedo, Lagos.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Contact Details Card */}
          <div className="lg:col-span-5 bg-white p-8 sm:p-10 border border-[#E7E2D8] shadow-xs flex flex-col justify-between space-y-8 text-left">
            <div className="space-y-6">
              <div>
                <div className="flex items-center space-x-2 text-[#B5905C] mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#B5905C]" />
                  ))}
                  <span className="text-xs font-mono font-semibold text-[#1C1917]">5.0 (4 Reviews)</span>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1C1917]">
                  ESTIE INTERIOR
                </h3>
                <span className="text-[11px] font-mono tracking-widest uppercase text-[#B5905C] font-semibold block mt-1">
                  Interior Designer • Window Treatments • Décor
                </span>
              </div>

              {/* Specific Location Details as requested */}
              <div className="space-y-4 pt-2 text-xs font-sans text-[#4A453E]">
                <div className="flex items-start space-x-3.5">
                  <div className="p-2 bg-[#FAF8F5] border border-[#E7E2D8] rounded-xs text-[#B5905C] flex-shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs uppercase tracking-wider text-[#1C1917]">
                      Showroom Address
                    </h4>
                    <p className="text-xs text-[#5E574F] mt-0.5 leading-relaxed font-light">
                      Km 46 Lekki-Epe Express Way, Beside Safeway Hospital, Sangotedo, East, Lagos, Nigeria
                    </p>
                    <span className="inline-block mt-1 text-[11px] font-mono text-[#B5905C]">
                      Landmark: Beside Safeway Hospital
                    </span>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <div className="p-2 bg-[#FAF8F5] border border-[#E7E2D8] rounded-xs text-[#B5905C] flex-shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs uppercase tracking-wider text-[#1C1917]">
                      Phone Inquiries
                    </h4>
                    <a
                      href={`tel:${ESTIE_BUSINESS_INFO.phoneRaw}`}
                      className="text-xs text-[#1C1917] hover:text-[#B5905C] font-mono mt-0.5 block"
                    >
                      {ESTIE_BUSINESS_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <div className="p-2 bg-[#FAF8F5] border border-[#E7E2D8] rounded-xs text-[#2E7D32] flex-shrink-0">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs uppercase tracking-wider text-[#1C1917]">
                      WhatsApp Direct Desk
                    </h4>
                    <a
                      href={getWhatsAppUrl("Hello ESTIE INTERIOR, I am inquiring about visiting your Sangotedo showroom.")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-[#2E7D32] hover:underline font-mono mt-0.5 block"
                    >
                      +234 814 628 4099 (Chat Online)
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <div className="p-2 bg-[#FAF8F5] border border-[#E7E2D8] rounded-xs text-[#B5905C] flex-shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs uppercase tracking-wider text-[#1C1917]">
                      Visiting Hours
                    </h4>
                    <p className="text-xs text-[#5E574F] mt-0.5 leading-relaxed">
                      {ESTIE_BUSINESS_INFO.openingHours}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Action */}
            <div className="pt-4 border-t border-[#EFECE6] flex flex-col sm:flex-row gap-3">
              <a
                href={getWhatsAppUrl("Hello ESTIE INTERIOR, I am heading to your Sangotedo showroom and would like directions.")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-[#2E7D32] hover:bg-[#1B5E20] text-white py-3.5 px-4 text-xs font-semibold tracking-[0.14em] uppercase transition-all flex items-center justify-center space-x-2 text-center"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Get Directions via WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Interactive Map & Directions */}
          <div className="lg:col-span-7 bg-white border border-[#E7E2D8] overflow-hidden flex flex-col justify-between shadow-xs">
            <div className="relative w-full h-[360px] sm:h-[420px] bg-[#EDE7DD]">
              {/* Google Maps Embed for Sangotedo / Lekki-Epe Expressway */}
              <iframe
                title="ESTIE INTERIOR Location Map - Km 46 Lekki-Epe Expressway Beside Safeway Hospital Sangotedo Lagos"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15858.948256334586!2d3.619077!3d6.471694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf6f45233e7db%3A0xa647fafe79b30c1e!2sSangotedo%2C%20Lagos!5e0!3m2!1sen!2sng!4v1700000000000!5m2!1sen!2sng"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>

              {/* Floating Overlay Card */}
              <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-sm bg-[#FAF8F5]/95 backdrop-blur-md p-4 border border-[#E7E2D8] shadow-lg text-left">
                <div className="flex items-center space-x-2 text-[#B5905C] mb-1">
                  <Navigation className="w-3.5 h-3.5" />
                  <span className="text-[10px] font-mono tracking-widest uppercase font-bold">
                    Quick Navigation
                  </span>
                </div>
                <h4 className="font-serif text-sm font-bold text-[#1C1917]">
                  Beside Safeway Hospital, Sangotedo
                </h4>
                <p className="text-[11px] text-[#7D7569] mt-0.5">
                  Accessible right off Km 46 on the Lekki-Epe Expressway, East Lagos. Ample client parking available.
                </p>
              </div>
            </div>

            {/* Bottom Service Area Badges */}
            <div className="p-5 bg-[#FAF8F5] border-t border-[#E7E2D8] text-left">
              <span className="text-[10px] font-mono tracking-widest uppercase text-[#7D7569] font-semibold block mb-2">
                On-Site Measurement & Delivery Locations Across Lagos:
              </span>
              <div className="flex flex-wrap gap-2 text-[11px] text-[#4A453E]">
                {[
                  "Sangotedo",
                  "Lekki Corridor",
                  "Ajah & VGC",
                  "Ikoyi & Banana Island",
                  "Victoria Island",
                  "Chevron & Orchid",
                  "Pinnock Beach",
                  "Epe & Lakowe",
                ].map((area, i) => (
                  <span key={i} className="px-2.5 py-1 bg-white border border-[#E7E2D8] text-[10px] font-mono">
                    ✓ {area}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
