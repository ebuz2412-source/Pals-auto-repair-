import React, { useState, useEffect } from "react";
import { 
  Calendar, 
  MapPin, 
  Sparkles, 
  Send, 
  Clock, 
  CheckCircle2
} from "lucide-react";
import { SPACEBOUND_BUSINESS_INFO, SPACEBOUND_SERVICES } from "../data";
import { ConsultationRequest } from "../types";

interface ConsultationSectionProps {
  preselectedService?: string;
}

export default function ConsultationSection({ preselectedService }: ConsultationSectionProps) {
  const [formData, setFormData] = useState<ConsultationRequest>({
    fullName: "",
    phone: "",
    email: "",
    locationInLagos: "Abraham Adesanya / Ajah Axis",
    serviceNeeded: preselectedService || "Bedroom Design",
    propertyType: "Residential Apartment/Villa",
    estimatedRooms: "3 - 5 Rooms / Spaces",
    timeline: "Within 2 - 4 Weeks",
    consultationPreference: "Studio Visit in Abraham Adesanya, Ajah",
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
            Schedule a Personalized <br />
            <span className="italic text-[#B5905C] font-light">Interior Design Consultation</span>
          </h2>

          <p className="text-sm sm:text-base text-[#5E574F] font-sans font-light leading-relaxed">
            Begin the journey to your custom-crafted space. Meet with our interior design team in Abraham Adesanya, Ajah, or request an on-site spatial assessment across Lagos.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Quick Info & Studio Details */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="bg-[#FAF8F5] p-8 border border-[#E7E2D8] space-y-6">
              <div className="space-y-2">
                <span className="text-[10px] font-mono tracking-widest uppercase text-[#B5905C] font-semibold block">
                  Design Studio
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#1C1917]">
                  Spacebound Interiors
                </h3>
                <p className="text-xs text-[#7D7569] font-sans leading-relaxed">
                  Bespoke interior design studio specializing in Bedroom Design, Cabinetry & Hardware Design, Commercial Interior Design, and Dining Room Design.
                </p>
              </div>

              <div className="space-y-4 text-xs font-sans text-[#4A453E] border-t border-[#EFECE6] pt-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-4 h-4 text-[#B5905C] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#1C1917]">Studio Location:</strong>
                    <span>{SPACEBOUND_BUSINESS_INFO.address}</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Clock className="w-4 h-4 text-[#B5905C] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#1C1917]">Studio Hours:</strong>
                    <span>{SPACEBOUND_BUSINESS_INFO.openingHours}</span>
                  </div>
                </div>
              </div>

              {/* Consultation Scope */}
              <div className="space-y-2 pt-2 border-t border-[#EFECE6]">
                <span className="text-[10px] font-mono tracking-widest uppercase text-[#B5905C] font-bold block">
                  What to Expect:
                </span>
                <ul className="space-y-2.5 text-xs text-[#5E574F]">
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#B5905C] flex-shrink-0 mt-0.5" />
                    <span>In-depth spatial analysis & lifestyle / commercial workflow discovery</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#B5905C] flex-shrink-0 mt-0.5" />
                    <span>Custom 3D space planning, cabinetry sketches & hardware specification</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#B5905C] flex-shrink-0 mt-0.5" />
                    <span>Tactile material, wood veneer, stone & textile sample reviews</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#B5905C] flex-shrink-0 mt-0.5" />
                    <span>Transparent project scope, itemized estimation & personalized timeline</span>
                  </li>
                </ul>
              </div>

              <div className="p-4 bg-white border border-[#E7E2D8] text-xs text-[#7D7569]">
                <span className="font-semibold text-[#1C1917] block mb-1">Serving Lagos Clients:</span>
                Abraham Adesanya, Ajah, Lekki Peninsula, Victoria Island, Ikoyi, and surrounding areas.
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Consultation Booking Form */}
          <div className="lg:col-span-7 bg-[#FAF8F5] p-8 sm:p-10 border border-[#E7E2D8] shadow-xs text-left">
            {isSubmitted ? (
              <div className="py-12 text-center space-y-5 animate-in fade-in duration-300">
                <div className="w-16 h-16 bg-[#1C1917] text-[#B5905C] rounded-full flex items-center justify-center mx-auto border border-[#B5905C]/40">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1C1917]">
                  Consultation Request Received
                </h3>
                <p className="text-sm text-[#5E574F] max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{formData.fullName || "valued client"}</strong>. Our design team at Spacebound Interiors in Abraham Adesanya, Ajah, has recorded your inquiry for <strong>{formData.serviceNeeded}</strong>.
                </p>

                <div className="bg-white p-5 border border-[#E7E2D8] text-left max-w-md mx-auto space-y-2 text-xs">
                  <div>
                    <span className="text-[#7D7569] font-mono uppercase text-[10px] block">Service Scope</span>
                    <span className="font-semibold text-[#1C1917]">{formData.serviceNeeded}</span>
                  </div>
                  <div>
                    <span className="text-[#7D7569] font-mono uppercase text-[10px] block">Location in Lagos</span>
                    <span className="font-semibold text-[#1C1917]">{formData.locationInLagos}</span>
                  </div>
                  <div>
                    <span className="text-[#7D7569] font-mono uppercase text-[10px] block">Consultation Preference</span>
                    <span className="font-semibold text-[#1C1917]">{formData.consultationPreference}</span>
                  </div>
                  <div>
                    <span className="text-[#7D7569] font-mono uppercase text-[10px] block">Project Timeline</span>
                    <span className="font-semibold text-[#1C1917]">{formData.timeline}</span>
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="bg-[#1C1917] text-[#FAF8F5] px-6 py-3 text-xs font-semibold tracking-wider uppercase cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="border-b border-[#EFECE6] pb-4 mb-2">
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1C1917]">
                    Tell Us About Your Space
                  </h3>
                  <p className="text-xs text-[#7D7569] mt-1">
                    Provide a few details and our interior design team will prepare your personalized consultation.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#7D7569] mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Adebayo Adeleke"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full bg-white border border-[#E7E2D8] px-3.5 py-2.5 text-xs text-[#1C1917] focus:outline-none focus:border-[#B5905C]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#7D7569] mb-1.5">
                      Your Location in Lagos *
                    </label>
                    <select
                      value={formData.locationInLagos}
                      onChange={(e) => setFormData({ ...formData, locationInLagos: e.target.value })}
                      className="w-full bg-white border border-[#E7E2D8] px-3.5 py-2.5 text-xs text-[#1C1917] focus:outline-none focus:border-[#B5905C]"
                    >
                      <option value="Abraham Adesanya / Ajah Axis">Abraham Adesanya / Ajah Axis</option>
                      <option value="Lekki Phase 1 & Peninsula">Lekki Phase 1 & Peninsula</option>
                      <option value="Ikoyi / Banana Island">Ikoyi / Banana Island</option>
                      <option value="Victoria Island">Victoria Island</option>
                      <option value="Sangotedo & Epe Corridor">Sangotedo & Epe Corridor</option>
                      <option value="Other Lagos Location">Other Lagos Location</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#7D7569] mb-1.5">
                      Service Required *
                    </label>
                    <select
                      value={formData.serviceNeeded}
                      onChange={(e) => setFormData({ ...formData, serviceNeeded: e.target.value })}
                      className="w-full bg-white border border-[#E7E2D8] px-3.5 py-2.5 text-xs text-[#1C1917] focus:outline-none focus:border-[#B5905C]"
                    >
                      {SPACEBOUND_SERVICES.map((s) => (
                        <option key={s.id} value={s.title}>
                          {s.title}
                        </option>
                      ))}
                      <option value="Full Turnkey Residential / Commercial Interior">
                        Full Turnkey Residential / Commercial Interior
                      </option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#7D7569] mb-1.5">
                      Property Category *
                    </label>
                    <select
                      value={formData.propertyType}
                      onChange={(e) => setFormData({ ...formData, propertyType: e.target.value as any })}
                      className="w-full bg-white border border-[#E7E2D8] px-3.5 py-2.5 text-xs text-[#1C1917] focus:outline-none focus:border-[#B5905C]"
                    >
                      <option value="Residential Apartment/Villa">Residential Apartment/Villa</option>
                      <option value="Commercial Office">Commercial Office</option>
                      <option value="Hotel/Shortlet">Hotel / Shortlet Suite</option>
                      <option value="New Construction">New Construction</option>
                      <option value="Renovation">Full Renovation</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#7D7569] mb-1.5">
                      Scope / Number of Rooms
                    </label>
                    <select
                      value={formData.estimatedRooms}
                      onChange={(e) => setFormData({ ...formData, estimatedRooms: e.target.value })}
                      className="w-full bg-white border border-[#E7E2D8] px-3.5 py-2.5 text-xs text-[#1C1917] focus:outline-none focus:border-[#B5905C]"
                    >
                      <option value="Single Room / Focused Area">Single Room / Focused Area</option>
                      <option value="2 - 3 Rooms">2 - 3 Rooms</option>
                      <option value="3 - 5 Rooms / Spaces">3 - 5 Rooms / Spaces</option>
                      <option value="Whole Duplex / Villa">Whole Duplex / Villa</option>
                      <option value="Complete Commercial Suite">Complete Commercial Suite</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#7D7569] mb-1.5">
                      Consultation Format
                    </label>
                    <select
                      value={formData.consultationPreference}
                      onChange={(e) => setFormData({ ...formData, consultationPreference: e.target.value as any })}
                      className="w-full bg-white border border-[#E7E2D8] px-3.5 py-2.5 text-xs text-[#1C1917] focus:outline-none focus:border-[#B5905C]"
                    >
                      <option value="Studio Visit in Abraham Adesanya, Ajah">Studio Visit in Abraham Adesanya, Ajah</option>
                      <option value="On-Site Space Assessment">On-Site Space Assessment in Lagos</option>
                      <option value="Digital Concept Review">Digital Concept Review</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#7D7569] mb-1.5">
                    Project Notes or Specific Aspirations
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Describe your design aspirations, preferred wood finishes, hardware style, or architectural specifications..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full bg-white border border-[#E7E2D8] p-3 text-xs text-[#1C1917] focus:outline-none focus:border-[#B5905C]"
                  ></textarea>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full bg-[#1C1917] hover:bg-[#2B2723] text-[#FAF8F5] py-4 px-6 text-xs font-semibold tracking-[0.16em] uppercase border border-[#1C1917] hover:border-[#B5905C] transition-all duration-200 shadow-sm flex items-center justify-center space-x-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4 text-[#B5905C]" />
                    <span>Submit Consultation Request</span>
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
