import React, { useState } from "react";
import { Phone, Mail, MapPin, Clock, MessageSquare, ExternalLink, Send, CheckCircle2, Building2 } from "lucide-react";
import { TUNNEX_BUSINESS_INFO, getWhatsAppUrl } from "../data";
import tunnexYardImg from "../assets/images/tunnex_forklift_yard_1787165397537.jpg";

export default function ContactSection() {
  const [formSent, setFormSent] = useState(false);
  const [senderName, setSenderName] = useState("");
  const [senderPhone, setSenderPhone] = useState("");
  const [senderMessage, setSenderMessage] = useState("");

  const handleQuickSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!senderName || !senderPhone) return;

    const whatsappMessage = `Hello Tunnex Mega Investment, my name is ${senderName} (${senderPhone}). Inquiry: ${senderMessage || "I'd like information on available forklifts."}`;
    window.open(getWhatsAppUrl(whatsappMessage), "_blank");
    setFormSent(true);
  };

  return (
    <section id="contact" className="py-20 bg-zinc-950 text-white relative overflow-hidden border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest bg-amber-500/10 border border-amber-500/30 px-3.5 py-1 rounded-full">
            Contact & Dealership Yard
          </span>
          <h2 className="text-3xl sm:text-4xl font-black font-sans tracking-tight text-white">
            Connect with Tunnex Mega Investment
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 font-sans leading-relaxed">
            Reach out to our sales team to discuss forklift availability, arrange on-site inspections in Ijegun, Lagos, or receive custom equipment quotes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Dealership Contact Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Card: Yard Address */}
            <div className="p-5 bg-zinc-900/90 border border-zinc-800 rounded-2xl flex items-start space-x-4 shadow-md">
              <div className="p-3 bg-amber-500/10 text-amber-400 border border-amber-500/20 rounded-xl flex-shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <span className="block text-xs font-mono font-bold text-zinc-400 uppercase tracking-wider">
                  Showroom & Yard Address
                </span>
                <p className="text-sm font-bold text-white font-sans leading-snug">
                  {TUNNEX_BUSINESS_INFO.address}
                </p>
                <span className="text-xs text-amber-400 font-mono block">
                  Postal Code: {TUNNEX_BUSINESS_INFO.postalCode}
                </span>
                <a
                  id="directions-link"
                  href="https://maps.google.com/?q=288+Papa+Major+Bus+Stop+Ikotun+Ijegun+Road+Lagos+Nigeria"
                  target="_blank"
                  referrerPolicy="no-referrer"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-xs font-bold text-amber-400 hover:text-amber-300 pt-1"
                >
                  <span>Open Directions in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5 ml-1" />
                </a>
              </div>
            </div>

            {/* Card: Direct WhatsApp & Phone */}
            <div className="p-5 bg-zinc-900/90 border border-zinc-800 rounded-2xl flex items-start space-x-4 shadow-md">
              <div className="p-3 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-xl flex-shrink-0">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <span className="block text-xs font-mono font-bold text-zinc-400 uppercase tracking-wider">
                  Instant WhatsApp Inquiries
                </span>
                <p className="text-xs text-zinc-300 font-sans">
                  Chat directly with our sales team for fast equipment photos, forklift specifications, and quotations.
                </p>
                <div className="pt-2">
                  <a
                    id="contact-whatsapp-link"
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold px-4 py-2 rounded-xl transition-all"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>WhatsApp Sales Desk</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Card: Operating Hours */}
            <div className="p-5 bg-zinc-900/90 border border-zinc-800 rounded-2xl space-y-3 shadow-md">
              <div className="flex items-center space-x-2 border-b border-zinc-800 pb-2.5">
                <Clock className="w-4 h-4 text-amber-400" />
                <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                  Yard & Inspection Hours
                </h4>
              </div>
              <div className="space-y-2 text-xs font-sans">
                {TUNNEX_BUSINESS_INFO.hours.map((h, idx) => (
                  <div key={idx} className="flex justify-between text-zinc-300">
                    <span>{h.days}</span>
                    <span className="font-mono text-zinc-400">{h.times}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Direct Message Form & Map */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Quick Send Message Card */}
            <div className="bg-zinc-900/90 border border-zinc-800 rounded-2xl p-6 sm:p-7 shadow-2xl">
              <div className="flex items-center space-x-2.5 mb-4 border-b border-zinc-800 pb-3">
                <Send className="w-5 h-5 text-amber-400" />
                <h3 className="text-lg font-bold text-white font-sans">
                  Quick Equipment Inquiry
                </h3>
              </div>

              {formSent ? (
                <div className="p-6 bg-emerald-950/40 border border-emerald-500/30 rounded-xl text-center space-y-3">
                  <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                  <h4 className="text-base font-bold text-white">Opening WhatsApp Chat...</h4>
                  <p className="text-xs text-zinc-300">
                    If WhatsApp didn't open automatically, click below:
                  </p>
                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-emerald-600 text-white text-xs font-bold px-5 py-2.5 rounded-xl"
                  >
                    Open WhatsApp Chat
                  </a>
                </div>
              ) : (
                <form onSubmit={handleQuickSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono font-bold uppercase text-zinc-400 mb-1">
                        Your Full Name *
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        placeholder="e.g. Chukwuemeka Eze"
                        value={senderName}
                        onChange={(e) => setSenderName(e.target.value)}
                        className="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-3 text-white font-sans text-xs sm:text-sm focus:outline-none focus:border-amber-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono font-bold uppercase text-zinc-400 mb-1">
                        Phone / WhatsApp Number *
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        required
                        placeholder="e.g. 080 1234 5678"
                        value={senderPhone}
                        onChange={(e) => setSenderPhone(e.target.value)}
                        className="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-3 text-white font-sans text-xs sm:text-sm focus:outline-none focus:border-amber-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold uppercase text-zinc-400 mb-1">
                      Forklift Type / Inquired Details
                    </label>
                    <textarea
                      id="contact-message"
                      rows={3}
                      placeholder="Tell us what forklift capacity, power type, or mast height your business is looking for..."
                      value={senderMessage}
                      onChange={(e) => setSenderMessage(e.target.value)}
                      className="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-3 text-white font-sans text-xs sm:text-sm focus:outline-none focus:border-amber-500 resize-none"
                    />
                  </div>

                  <button
                    id="contact-submit-btn"
                    type="submit"
                    className="w-full inline-flex items-center justify-center space-x-2 bg-amber-500 hover:bg-amber-400 text-zinc-950 font-black font-sans text-xs sm:text-sm py-3.5 px-6 rounded-xl uppercase tracking-wider shadow-lg shadow-amber-500/20 cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Send via WhatsApp</span>
                  </button>
                </form>
              )}
            </div>

            {/* Google Map Location Frame */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden shadow-xl p-3">
              <div className="flex justify-between items-center px-2 py-1.5 mb-2">
                <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest flex items-center">
                  <MapPin className="w-3.5 h-3.5 text-amber-400 mr-1.5" />
                  Ikotun-Ijegun Road, Lagos
                </span>
                <span className="text-[10px] font-mono text-amber-400 bg-amber-950/40 border border-amber-500/30 px-2 py-0.5 rounded">
                  Nigeria 100213
                </span>
              </div>
              <div className="h-56 w-full rounded-xl overflow-hidden bg-zinc-950 border border-zinc-800">
                <iframe
                  id="google-maps-iframe"
                  title="Tunnex Mega Investment Forklift Dealer Yard Lagos"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.854619754128!2d3.262521!3d6.539824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8fbc923a1a1f%3A0x62c95a3ad5d321!2sIkotun-Ijegun%20Rd%2C%20Lagos!5e0!3m2!1sen!2sng!4v1700000000000!5m2!1sen!2sng"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="w-full h-full grayscale opacity-80 hover:opacity-100 transition-opacity duration-300"
                ></iframe>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
