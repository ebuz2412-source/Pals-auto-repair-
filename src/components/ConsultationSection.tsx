import React, { useState, useEffect } from "react";
import { 
  Calendar, 
  MapPin, 
  MessageSquare, 
  Phone, 
  Check, 
  Sparkles, 
  Send, 
  Clock, 
  Building2,
  CheckCircle2
} from "lucide-react";
import { ESTIE_BUSINESS_INFO, ESTIE_SERVICES, getWhatsAppUrl } from "../data";
import { ConsultationRequest } from "../types";

interface ConsultationSectionProps {
  preselectedService?: string;
}

export default function ConsultationSection({ preselectedService }: ConsultationSectionProps) {
  const [formData, setFormData] = useState<ConsultationRequest>({
    fullName: "",
    phone: "",
    email: "",
    locationInLagos: "Sangotedo / Lekki Corridor",
    serviceNeeded: preselectedService || "Curtains & Bespoke Drapery",
    propertyType: "Residential Apartment/Villa",
    estimatedRooms: "3 - 5 Rooms / Windows",
    timeline: "Within 2 - 4 Weeks",
    consultationPreference: "Sangotedo Showroom Visit",
    notes: ""
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (preselectedService) {
      setFormData(prev => ({ ...prev, serviceNeeded: preselectedService }));
    }
  }, [preselectedService]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const getCustomWhatsAppText = () => {
    return `Hello ESTIE INTERIOR, I would like to book a consultation:
- Name: ${formData.fullName || "Prospective Client"}
- Phone: ${formData.phone || "Not specified"}
- Service Needed: ${formData.serviceNeeded}
- Lagos Location: ${formData.locationInLagos}
- Property: ${formData.propertyType}
- Rooms/Windows: ${formData.estimatedRooms}
- Consultation Format: ${formData.consultationPreference}
- Timeline: ${formData.timeline}
${formData.notes ? `- Notes: ${formData.notes}` : ""}`;
  };

  return (
    <section id="consultation" className="py-24 bg-white text-[#1C1917] border-b border-[#E7E2D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-[#FAF8F5] border border-[#E7E2D8] px-3.5 py-1.5 rounded-full text-xs font-mono font-medium text-[#B5905C] uppercase tracking-wider">
            <Calendar className="w-3.5 h-3.5 text-[#B5905C]" />
            <span>Consultation & Project Assessment</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1C1917] tracking-tight leading-tight">
            Book a Design & <br />
            <span className="italic text-[#B5905C] font-light">Window Dressing Consultation</span>
          </h2>

          <p className="text-sm sm:text-base text-[#5E574F] font-sans font-light leading-relaxed">
            Visit our Sangotedo showroom beside Safeway Hospital or schedule an on-site visit anywhere in Lagos for laser measurements and tactile fabric curation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Quick Info & Showroom Details */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="bg-[#FAF8F5] p-8 border border-[#E7E2D8] space-y-6">
              <div className="space-y-2">
                <span className="text-[10px] font-mono tracking-widest uppercase text-[#B5905C] font-semibold block">
                  Studio Showroom
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#1C1917]">
                  ESTIE INTERIOR
                </h3>
                <p className="text-xs text-[#7D7569] font-sans">
                  Showroom, fabric library, and window treatment workshop located along the prime Lekki Expressway.
                </p>
              </div>

              <div className="space-y-4 text-xs font-sans text-[#4A453E] border-t border-[#EFECE6] pt-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-4 h-4 text-[#B5905C] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#1C1917]">Address:</strong>
                    <span>Km 46 Lekki-Epe Express Way, Beside Safeway Hospital, Sangotedo, East, Lagos, Nigeria</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Clock className="w-4 h-4 text-[#B5905C] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#1C1917]">Working Hours:</strong>
                    <span>{ESTIE_BUSINESS_INFO.openingHours}</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Phone className="w-4 h-4 text-[#B5905C] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#1C1917]">Direct Line:</strong>
                    <a href={`tel:${ESTIE_BUSINESS_INFO.phoneRaw}`} className="hover:text-[#B5905C] underline">
                      {ESTIE_BUSINESS_INFO.phone}
                    </a>
                  </div>
                </div>
              </div>

              {/* Consultation Format Options */}
              <div className="space-y-2 pt-2 border-t border-[#EFECE6]">
                <span className="text-[10px] font-mono tracking-widest uppercase text-[#B5905C] font-bold block">
                  What to Expect:
                </span>
                <ul className="space-y-2 text-xs text-[#5E574F]">
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#B5905C] flex-shrink-0 mt-0.5" />
                    <span>Browse 300+ sheer linen, blackout velvet & upholstery swatches</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#B5905C] flex-shrink-0 mt-0.5" />
                    <span>Live demonstration of motorized zebra & Basswood Venetian blinds</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#B5905C] flex-shrink-0 mt-0.5" />
                    <span>Transparent itemized quotation based on laser measurements</span>
                  </li>
                </ul>
              </div>

              {/* Instant WhatsApp Quick Link */}
              <div className="pt-2">
                <a
                  href={getWhatsAppUrl("Hello ESTIE INTERIOR, I would like to schedule a showroom consultation appointment.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#2E7D32] hover:bg-[#1B5E20] text-white py-3 px-4 text-xs font-semibold tracking-[0.14em] uppercase transition-all flex items-center justify-center space-x-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Message on WhatsApp Now</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Consultation Booking Form */}
          <div className="lg:col-span-7 bg-[#FAF8F5] p-8 sm:p-10 border border-[#E7E2D8] text-left">
            {isSubmitted ? (
              <div className="py-12 text-center space-y-6 animate-in fade-in duration-300">
                <div className="w-14 h-14 rounded-full bg-[#EFE9DF] text-[#B5905C] flex items-center justify-center mx-auto">
                  <Check className="w-7 h-7" />
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-mono tracking-widest uppercase text-[#B5905C] font-semibold">
                    Consultation Request Received
                  </span>
                  <h3 className="font-serif text-3xl font-bold text-[#1C1917]">
                    Thank You, {formData.fullName || "Valued Client"}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5E574F] max-w-md mx-auto leading-relaxed">
                    Our principal design consultant from the Sangotedo showroom will reach out to confirm your appointment details.
                  </p>
                </div>

                <div className="p-4 bg-white border border-[#E7E2D8] max-w-md mx-auto text-left text-xs space-y-1.5 text-[#4A453E]">
                  <div><strong>Service:</strong> {formData.serviceNeeded}</div>
                  <div><strong>Location:</strong> {formData.locationInLagos}</div>
                  <div><strong>Preference:</strong> {formData.consultationPreference}</div>
                  <div><strong>Property:</strong> {formData.propertyType}</div>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                  <a
                    href={`https://wa.me/2348146284099?text=${encodeURIComponent(getCustomWhatsAppText())}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto bg-[#2E7D32] hover:bg-[#1B5E20] text-white px-6 py-3 text-xs font-semibold tracking-[0.14em] uppercase transition-all flex items-center justify-center space-x-2"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Send via WhatsApp for Instant Response</span>
                  </a>

                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="w-full sm:w-auto bg-white border border-[#D6CABE] text-[#1C1917] px-6 py-3 text-xs font-semibold tracking-[0.14em] uppercase hover:bg-[#FAF8F5] cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-[#1C1917] mb-1">
                    Tell Us About Your Space
                  </h3>
                  <p className="text-xs text-[#7D7569] font-sans">
                    Complete the form below and we will contact you within 2 business hours.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#1C1917]">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Arc. Babatunde or Mrs. Adeleke"
                      className="w-full px-4 py-2.5 bg-white border border-[#D6CABE] focus:border-[#B5905C] focus:outline-none text-xs text-[#1C1917] placeholder:text-[#A89F91]"
                    />
                  </div>

                  {/* Phone / WhatsApp */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#1C1917]">
                      Phone / WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. +234 812 345 6789"
                      className="w-full px-4 py-2.5 bg-white border border-[#D6CABE] focus:border-[#B5905C] focus:outline-none text-xs text-[#1C1917] placeholder:text-[#A89F91]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Email */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#1C1917]">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="client@domain.com"
                      className="w-full px-4 py-2.5 bg-white border border-[#D6CABE] focus:border-[#B5905C] focus:outline-none text-xs text-[#1C1917] placeholder:text-[#A89F91]"
                    />
                  </div>

                  {/* Location in Lagos */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#1C1917]">
                      Location in Lagos *
                    </label>
                    <select
                      value={formData.locationInLagos}
                      onChange={(e) => setFormData({ ...formData, locationInLagos: e.target.value })}
                      className="w-full px-4 py-2.5 bg-white border border-[#D6CABE] focus:border-[#B5905C] focus:outline-none text-xs text-[#1C1917]"
                    >
                      <option value="Sangotedo / Lekki Corridor">Sangotedo / Lekki Corridor</option>
                      <option value="Lekki Phase 1 / Oniru">Lekki Phase 1 / Oniru</option>
                      <option value="Ikoyi / Banana Island">Ikoyi / Banana Island</option>
                      <option value="Victoria Island">Victoria Island</option>
                      <option value="Ajah / Abraham Adesanya">Ajah / Abraham Adesanya</option>
                      <option value="Chevron / Orchid / Osapa">Chevron / Orchid / Osapa</option>
                      <option value="Epe / Lakowe">Epe / Lakowe</option>
                      <option value="Ikeja / Mainland Lagos">Ikeja / Mainland Lagos</option>
                      <option value="Other Location in Lagos">Other Location in Lagos</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Service Needed */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#1C1917]">
                      Service Needed *
                    </label>
                    <select
                      value={formData.serviceNeeded}
                      onChange={(e) => setFormData({ ...formData, serviceNeeded: e.target.value })}
                      className="w-full px-4 py-2.5 bg-white border border-[#D6CABE] focus:border-[#B5905C] focus:outline-none text-xs text-[#1C1917]"
                    >
                      <option value="Commercial Interior Design">Commercial Interior Design</option>
                      <option value="Curtains & Bespoke Drapery">Curtains & Bespoke Drapery</option>
                      <option value="Luxury Blinds & Automated Shading">Luxury Blinds & Automated Shading</option>
                      <option value="Window Design & Architectural Styling">Window Design & Architectural Styling</option>
                      <option value="All Kinds of Windows & Window Treatments">All Kinds of Windows & Treatments</option>
                      <option value="Flooring Selection & Surfaces">Flooring Selection & Surfaces</option>
                      <option value="Bespoke Bedding & Bedroom Textiles">Bespoke Bedding & Bedroom Textiles</option>
                      <option value="Complete Full-House Turnkey Interior">Complete Full-House Turnkey Interior</option>
                    </select>
                  </div>

                  {/* Consultation Preference */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#1C1917]">
                      Consultation Format
                    </label>
                    <select
                      value={formData.consultationPreference}
                      onChange={(e) => setFormData({ ...formData, consultationPreference: e.target.value as any })}
                      className="w-full px-4 py-2.5 bg-white border border-[#D6CABE] focus:border-[#B5905C] focus:outline-none text-xs text-[#1C1917]"
                    >
                      <option value="Sangotedo Showroom Visit">Visit Sangotedo Showroom (Beside Safeway)</option>
                      <option value="On-Site Space Assessment">On-Site Assessment & Laser Measurement</option>
                      <option value="Virtual Consultation via WhatsApp">Virtual Consultation via WhatsApp</option>
                    </select>
                  </div>
                </div>

                {/* Additional Notes */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#1C1917]">
                    Project Details & Window Dimensions (Optional)
                  </label>
                  <textarea
                    rows={3}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="Tell us about your room heights, window count, fabric preferences, or move-in timeline..."
                    className="w-full px-4 py-2.5 bg-white border border-[#D6CABE] focus:border-[#B5905C] focus:outline-none text-xs text-[#1C1917] placeholder:text-[#A89F91]"
                  ></textarea>
                </div>

                {/* Submit button & WhatsApp alternative */}
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <button
                    type="submit"
                    className="flex-1 bg-[#1C1917] hover:bg-[#2B2723] text-[#FAF8F5] py-4 px-6 text-xs font-semibold tracking-[0.16em] uppercase border border-[#1C1917] hover:border-[#B5905C] transition-all cursor-pointer flex items-center justify-center space-x-2"
                  >
                    <Send className="w-4 h-4 text-[#B5905C]" />
                    <span>Submit Consultation Booking</span>
                  </button>

                  <a
                    href={`https://wa.me/2348146284099?text=${encodeURIComponent(getCustomWhatsAppText())}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white hover:bg-[#FAF8F5] text-[#1C1917] py-4 px-6 text-xs font-semibold tracking-[0.14em] uppercase border border-[#D6CABE] hover:border-[#B5905C] transition-all flex items-center justify-center space-x-2"
                  >
                    <MessageSquare className="w-4 h-4 text-[#2E7D32]" />
                    <span>Book via WhatsApp</span>
                  </a>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
