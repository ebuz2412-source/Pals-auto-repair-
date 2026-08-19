import React, { useState, useEffect } from "react";
import { Truck, MessageSquare, CheckCircle2, ChevronRight, ChevronLeft, Trash2, Building, PhoneCall, Mail, Sparkles, MapPin } from "lucide-react";
import { FORKLIFT_INVENTORY, TUNNEX_BUSINESS_INFO, getWhatsAppUrl } from "../data";
import { ForkliftInquiryRequest } from "../types";

interface InquiryWizardProps {
  initialForklift?: string;
}

export default function InquiryWizard({ initialForklift = "" }: InquiryWizardProps) {
  const [step, setStep] = useState(1);

  // Form State
  const [forkliftType, setForkliftType] = useState(initialForklift || "Electric Forklift (1.5 - 3.5 Ton)");
  const [tonnageRequirement, setTonnageRequirement] = useState("2.5 - 3.5 Ton");
  const [liftHeight, setLiftHeight] = useState("3.0m - 4.5m Standard Mast");
  const [operatingEnvironment, setOperatingEnvironment] = useState("Indoor Warehouse & Factory Floor");
  const [tirePreference, setTirePreference] = useState("Solid Rubber (Puncture-Proof)");
  const [companyName, setCompanyName] = useState("");
  const [contactPerson, setContactPerson] = useState("");
  const [contactPhone, setContactPhone] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [locationInNigeria, setLocationInNigeria] = useState("Lagos State");
  const [specialNotes, setSpecialNotes] = useState("");

  // Validation Errors
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Inquiry History State (persisted in localStorage)
  const [inquiryHistory, setInquiryHistory] = useState<ForkliftInquiryRequest[]>([]);
  const [activeInquiry, setActiveInquiry] = useState<ForkliftInquiryRequest | null>(null);

  useEffect(() => {
    if (initialForklift) {
      setForkliftType(initialForklift);
      setStep(1);
    }
  }, [initialForklift]);

  // Load inquiries from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("tunnex_forklift_inquiries");
    if (saved) {
      try {
        setInquiryHistory(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to parse inquiry history");
      }
    }
  }, []);

  const validateStep = (currentStep: number) => {
    const newErrors: Record<string, string> = {};

    if (currentStep === 1) {
      if (!forkliftType) newErrors.forkliftType = "Please select an equipment category";
      if (!tonnageRequirement) newErrors.tonnageRequirement = "Please select load capacity";
    }

    if (currentStep === 2) {
      if (!operatingEnvironment) newErrors.operatingEnvironment = "Please specify operating environment";
    }

    if (currentStep === 3) {
      if (!contactPerson.trim()) newErrors.contactPerson = "Your name is required";
      if (!contactPhone.trim()) {
        newErrors.contactPhone = "Phone / WhatsApp number is required";
      } else if (contactPhone.replace(/[^0-9+]/g, "").length < 8) {
        newErrors.contactPhone = "Please enter a valid phone number";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(step)) {
      setStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    setStep((prev) => prev - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep(3)) return;

    const randomId = "TUNNEX-" + Math.floor(100000 + Math.random() * 900000);

    const newInquiry: ForkliftInquiryRequest = {
      id: randomId,
      companyName: companyName || "Independent Business",
      contactPerson,
      contactPhone,
      contactEmail: contactEmail || "N/A",
      locationInNigeria: locationInNigeria || "Lagos",
      forkliftType,
      tonnageRequirement,
      liftHeight,
      operatingEnvironment,
      tirePreference,
      specialNotes: specialNotes || "Standard inquiry",
      status: "Inquiry Generated",
      createdAt: new Date().toLocaleDateString("en-NG", {
        month: "short",
        day: "numeric",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    const updated = [newInquiry, ...inquiryHistory].slice(0, 5);
    setInquiryHistory(updated);
    localStorage.setItem("tunnex_forklift_inquiries", JSON.stringify(updated));

    setActiveInquiry(newInquiry);
    setStep(4);
  };

  const resetForm = () => {
    setStep(1);
    setCompanyName("");
    setContactPerson("");
    setContactPhone("");
    setContactEmail("");
    setSpecialNotes("");
    setErrors({});
    setActiveInquiry(null);
  };

  const deleteInquiry = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const filtered = inquiryHistory.filter((q) => q.id !== id);
    setInquiryHistory(filtered);
    localStorage.setItem("tunnex_forklift_inquiries", JSON.stringify(filtered));
    if (activeInquiry?.id === id) {
      setActiveInquiry(null);
      setStep(1);
    }
  };

  // Pre-generate formatted WhatsApp message for instant 1-click send
  const getSubmissionWhatsAppUrl = (inquiry: ForkliftInquiryRequest) => {
    const text = `Hello Tunnex Mega Investment, I would like to request price & availability for:
- Equipment: ${inquiry.forkliftType}
- Capacity: ${inquiry.tonnageRequirement}
- Lift Height: ${inquiry.liftHeight}
- Environment: ${inquiry.operatingEnvironment}
- Company: ${inquiry.companyName}
- Contact: ${inquiry.contactPerson} (${inquiry.contactPhone})
- Location: ${inquiry.locationInNigeria}
- Notes: ${inquiry.specialNotes}
Reference ID: ${inquiry.id}`;
    return getWhatsAppUrl(text);
  };

  return (
    <section id="quote" className="py-20 bg-zinc-950 text-white border-b border-zinc-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest bg-amber-500/10 border border-amber-500/30 px-3 py-1 rounded-full">
            Inquire For Price & Stock
          </span>
          <h2 className="text-3xl sm:text-4xl font-black font-sans tracking-tight text-white">
            Forklift Price & Specification Inquiry Wizard
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 font-sans leading-relaxed">
            Tell us your lifting capacity, mast height, and facility type. We will provide pricing, current stock availability, and equipment options.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Interactive Multi-Step Form */}
          <div className="lg:col-span-8 bg-zinc-900/90 border border-zinc-800 rounded-2xl p-6 sm:p-8 shadow-2xl backdrop-blur-sm">
            
            {/* Step Header Indicator */}
            {step < 4 && (
              <div className="flex justify-between items-center mb-8 border-b border-zinc-800 pb-5">
                <div className="flex items-center space-x-2.5">
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center font-mono text-xs font-bold ${step === 1 ? "bg-amber-500 text-zinc-950" : "bg-zinc-800 text-zinc-400"}`}>
                    1
                  </div>
                  <span className={`text-xs font-sans font-bold uppercase hidden sm:inline ${step === 1 ? "text-white" : "text-zinc-500"}`}>
                    Forklift Type
                  </span>
                </div>
                <div className="h-px bg-zinc-800 flex-grow mx-3"></div>
                <div className="flex items-center space-x-2.5">
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center font-mono text-xs font-bold ${step === 2 ? "bg-amber-500 text-zinc-950" : "bg-zinc-800 text-zinc-400"}`}>
                    2
                  </div>
                  <span className={`text-xs font-sans font-bold uppercase hidden sm:inline ${step === 2 ? "text-white" : "text-zinc-500"}`}>
                    Specs & Setup
                  </span>
                </div>
                <div className="h-px bg-zinc-800 flex-grow mx-3"></div>
                <div className="flex items-center space-x-2.5">
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center font-mono text-xs font-bold ${step === 3 ? "bg-amber-500 text-zinc-950" : "bg-zinc-800 text-zinc-400"}`}>
                    3
                  </div>
                  <span className={`text-xs font-sans font-bold uppercase hidden sm:inline ${step === 3 ? "text-white" : "text-zinc-500"}`}>
                    Contact & Submit
                  </span>
                </div>
              </div>
            )}

            {/* Step 1: Forklift Type & Tonnage */}
            {step === 1 && (
              <div className="space-y-6">
                <div className="flex items-center space-x-2.5">
                  <Truck className="w-5 h-5 text-amber-400" />
                  <h3 className="font-bold text-base sm:text-lg text-white font-sans">
                    Select Equipment Category & Desired Capacity
                  </h3>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-mono font-bold uppercase tracking-wider text-zinc-400 mb-2">
                      Forklift Type
                    </label>
                    <select
                      id="inquiry-type-select"
                      value={forkliftType}
                      onChange={(e) => setForkliftType(e.target.value)}
                      className="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-3.5 text-white font-sans text-sm focus:outline-none focus:border-amber-500"
                    >
                      <option value="Electric Forklift (1.5 - 3.5 Ton)">Electric Forklift (Indoor / Battery Powered)</option>
                      <option value="Diesel Heavy Duty Forklift (3.0 - 10.0+ Ton)">Diesel Forklift (High Torque / Outdoor Yards)</option>
                      <option value="LPG / Petrol Dual-Fuel Forklift (2.0 - 5.0 Ton)">LPG / Gas Forklift (Versatile Indoor & Outdoor)</option>
                      <option value="Warehouse Reach Truck (1.5 - 2.5 Ton)">Warehouse Reach Truck (High-Bay Narrow Aisle)</option>
                      <option value="Heavy-Duty Container / Yard Handler (10.0 - 16.0+ Ton)">Heavy Duty Industrial / Yard Handler</option>
                      <option value="Other Custom Forklift Specification">Other / Not Sure (Consult Tunnex Team)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold uppercase tracking-wider text-zinc-400 mb-2">
                      Required Load Capacity (Tonnage)
                    </label>
                    <select
                      id="inquiry-tonnage-select"
                      value={tonnageRequirement}
                      onChange={(e) => setTonnageRequirement(e.target.value)}
                      className="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-3.5 text-white font-sans text-sm focus:outline-none focus:border-amber-500"
                    >
                      <option value="1.5 - 2.0 Ton (Light Warehouse)">1.5 - 2.0 Ton (Standard Light Duty)</option>
                      <option value="2.5 - 3.5 Ton (Most Popular Commercial)">2.5 - 3.5 Ton (Standard Commercial Warehousing)</option>
                      <option value="4.0 - 5.0 Ton (Medium Manufacturing)">4.0 - 5.0 Ton (Manufacturing & Heavy Pallets)</option>
                      <option value="7.0 - 10.0 Ton (Heavy Industrial)">7.0 - 10.0 Ton (Heavy Yard & Metal Logistics)</option>
                      <option value="10.0+ Ton (Specialized)">10.0+ Ton (Heavy Container Handling)</option>
                    </select>
                  </div>
                </div>

                <div className="flex justify-end pt-4">
                  <button
                    id="inquiry-step1-next"
                    onClick={handleNext}
                    className="inline-flex items-center space-x-2 bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold font-sans text-xs sm:text-sm px-6 py-3 rounded-xl transition-all cursor-pointer"
                  >
                    <span>Next: Operational Environment</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Environment & Mast Specs */}
            {step === 2 && (
              <div className="space-y-6">
                <div className="flex items-center space-x-2.5">
                  <Building className="w-5 h-5 text-amber-400" />
                  <h3 className="font-bold text-base sm:text-lg text-white font-sans">
                    Facility Layout & Lift Requirements
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono font-bold uppercase tracking-wider text-zinc-400 mb-2">
                      Operating Environment
                    </label>
                    <select
                      id="inquiry-environment-select"
                      value={operatingEnvironment}
                      onChange={(e) => setOperatingEnvironment(e.target.value)}
                      className="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-3.5 text-white font-sans text-sm focus:outline-none focus:border-amber-500"
                    >
                      <option value="Indoor Warehouse & Factory Floor">Indoor Warehouse & Factory Floor</option>
                      <option value="Paved Outdoor Yard & Loading Dock">Paved Outdoor Yard & Loading Dock</option>
                      <option value="Rough Terrain / Construction Yard">Rough Terrain / Unpaved Logistics Yard</option>
                      <option value="Cold Storage / Food Processing">Cold Storage / Food Processing Facility</option>
                      <option value="Mixed Indoor & Outdoor Operations">Mixed Indoor & Outdoor Operations</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold uppercase tracking-wider text-zinc-400 mb-2">
                      Estimated Mast Lift Height
                    </label>
                    <select
                      id="inquiry-mast-select"
                      value={liftHeight}
                      onChange={(e) => setLiftHeight(e.target.value)}
                      className="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-3.5 text-white font-sans text-sm focus:outline-none focus:border-amber-500"
                    >
                      <option value="3.0m Standard Duplex Mast">3.0m (Standard Truck Loading)</option>
                      <option value="4.5m Triplex Free-Lift Mast">4.5m (Standard Warehouse Racks)</option>
                      <option value="6.0m High-Reach Triplex Mast">6.0m (High-Bay Warehouse Storage)</option>
                      <option value="7.5m+ Specialized Reach Mast">7.5m+ (Ultra High-Bay Racking)</option>
                    </select>
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-xs font-mono font-bold uppercase tracking-wider text-zinc-400 mb-2">
                      Tire Preference
                    </label>
                    <select
                      id="inquiry-tire-select"
                      value={tirePreference}
                      onChange={(e) => setTirePreference(e.target.value)}
                      className="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-3.5 text-white font-sans text-sm focus:outline-none focus:border-amber-500"
                    >
                      <option value="Solid Rubber (Puncture-Proof)">Solid Rubber Tires (100% Puncture-Proof for Warehouses)</option>
                      <option value="Pneumatic Air-Filled Tires">Pneumatic Air-Filled Tires (Cushioned for Rough Yards)</option>
                      <option value="Non-Marking Solid Tires">Non-Marking Clean Solid Tires (Food / Pharma Floors)</option>
                    </select>
                  </div>
                </div>

                <div className="flex justify-between pt-4">
                  <button
                    id="inquiry-step2-back"
                    onClick={handleBack}
                    className="inline-flex items-center space-x-1.5 bg-zinc-800 hover:bg-zinc-700 text-white font-sans text-xs px-5 py-3 rounded-xl transition-all"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    <span>Back</span>
                  </button>
                  <button
                    id="inquiry-step2-next"
                    onClick={handleNext}
                    className="inline-flex items-center space-x-2 bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold font-sans text-xs sm:text-sm px-6 py-3 rounded-xl transition-all cursor-pointer"
                  >
                    <span>Next: Business Contact Details</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Contact & Business Details */}
            {step === 3 && (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="flex items-center space-x-2.5">
                  <Building className="w-5 h-5 text-amber-400" />
                  <h3 className="font-bold text-base sm:text-lg text-white font-sans">
                    Business Contact Details
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono font-bold uppercase tracking-wider text-zinc-400 mb-1.5">
                      Company / Business Name (Optional)
                    </label>
                    <input
                      id="inquiry-company-input"
                      type="text"
                      placeholder="e.g. Apex Logistics Nigeria Ltd"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      className="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-3 text-white font-sans text-sm focus:outline-none focus:border-amber-500"
                    >
                    </input>
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold uppercase tracking-wider text-zinc-400 mb-1.5">
                      Contact Person *
                    </label>
                    <input
                      id="inquiry-name-input"
                      type="text"
                      placeholder="e.g. Adebayo Ogunleye"
                      value={contactPerson}
                      onChange={(e) => setContactPerson(e.target.value)}
                      className={`w-full bg-zinc-950 border ${errors.contactPerson ? "border-amber-500" : "border-zinc-800"} rounded-xl p-3 text-white font-sans text-sm focus:outline-none focus:border-amber-500`}
                    />
                    {errors.contactPerson && <p className="text-amber-400 text-xs mt-1">{errors.contactPerson}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold uppercase tracking-wider text-zinc-400 mb-1.5">
                      Phone / WhatsApp Number *
                    </label>
                    <input
                      id="inquiry-phone-input"
                      type="tel"
                      placeholder="e.g. +234 80 1234 5678"
                      value={contactPhone}
                      onChange={(e) => setContactPhone(e.target.value)}
                      className={`w-full bg-zinc-950 border ${errors.contactPhone ? "border-amber-500" : "border-zinc-800"} rounded-xl p-3 text-white font-sans text-sm focus:outline-none focus:border-amber-500`}
                    />
                    {errors.contactPhone && <p className="text-amber-400 text-xs mt-1">{errors.contactPhone}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold uppercase tracking-wider text-zinc-400 mb-1.5">
                      Location / State in Nigeria
                    </label>
                    <input
                      id="inquiry-location-input"
                      type="text"
                      placeholder="e.g. Lagos (Ikeja, Ijegun, Apapa), Ogun, etc."
                      value={locationInNigeria}
                      onChange={(e) => setLocationInNigeria(e.target.value)}
                      className="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-3 text-white font-sans text-sm focus:outline-none focus:border-amber-500"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-xs font-mono font-bold uppercase tracking-wider text-zinc-400 mb-1.5">
                      Specific Notes or Inquiries (Optional)
                    </label>
                    <textarea
                      id="inquiry-notes-textarea"
                      placeholder="Any specific brands, container mast requirements, delivery preferences, or questions?"
                      value={specialNotes}
                      onChange={(e) => setSpecialNotes(e.target.value)}
                      rows={3}
                      className="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-3 text-white font-sans text-sm focus:outline-none focus:border-amber-500 resize-none"
                    />
                  </div>
                </div>

                <div className="flex justify-between pt-4 border-t border-zinc-800">
                  <button
                    id="inquiry-step3-back"
                    type="button"
                    onClick={handleBack}
                    className="inline-flex items-center space-x-1.5 bg-zinc-800 hover:bg-zinc-700 text-white font-sans text-xs px-5 py-3 rounded-xl transition-all"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    <span>Back</span>
                  </button>
                  <button
                    id="inquiry-submit-btn"
                    type="submit"
                    className="inline-flex items-center space-x-2 bg-amber-500 hover:bg-amber-400 text-zinc-950 font-black font-sans text-xs sm:text-sm px-7 py-3 rounded-xl uppercase tracking-wider shadow-lg shadow-amber-500/20 cursor-pointer"
                  >
                    <span>Generate Inquiry Summary</span>
                  </button>
                </div>
              </form>
            )}

            {/* Step 4: Submission Confirmation & 1-Click WhatsApp Transmit */}
            {step === 4 && activeInquiry && (
              <div className="space-y-6 text-zinc-100 animate-in zoom-in-95 duration-200">
                <div className="flex flex-col items-center text-center pb-4 border-b border-zinc-800">
                  <div className="w-14 h-14 bg-emerald-600/20 border border-emerald-500/30 rounded-full flex items-center justify-center text-emerald-400 mb-3">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-black font-sans text-white">Forklift Inquiry Generated</h3>
                  <p className="text-xs font-mono text-zinc-400 mt-1 uppercase tracking-wider">
                    Reference ID: <span className="text-amber-400 font-bold">{activeInquiry.id}</span>
                  </p>
                </div>

                {/* Inquiry Summary Card */}
                <div className="bg-zinc-950 rounded-xl border border-zinc-800 p-5 font-mono text-xs space-y-3 text-left">
                  <div className="flex justify-between border-b border-zinc-900 pb-2">
                    <span className="text-zinc-500 uppercase">Equipment Requested:</span>
                    <span className="text-white font-bold text-right">{activeInquiry.forkliftType}</span>
                  </div>
                  <div className="flex justify-between border-b border-zinc-900 pb-2">
                    <span className="text-zinc-500 uppercase">Load Capacity:</span>
                    <span className="text-amber-400 font-bold text-right">{activeInquiry.tonnageRequirement}</span>
                  </div>
                  <div className="flex justify-between border-b border-zinc-900 pb-2">
                    <span className="text-zinc-500 uppercase">Mast Lift Height:</span>
                    <span className="text-white text-right">{activeInquiry.liftHeight}</span>
                  </div>
                  <div className="flex justify-between border-b border-zinc-900 pb-2">
                    <span className="text-zinc-500 uppercase">Operating Environment:</span>
                    <span className="text-white text-right">{activeInquiry.operatingEnvironment}</span>
                  </div>
                  <div className="flex justify-between border-b border-zinc-900 pb-2">
                    <span className="text-zinc-500 uppercase">Client / Company:</span>
                    <span className="text-white text-right">{activeInquiry.contactPerson} ({activeInquiry.companyName})</span>
                  </div>
                  <div className="flex justify-between border-b border-zinc-900 pb-2">
                    <span className="text-zinc-500 uppercase">Contact Phone:</span>
                    <span className="text-white text-right">{activeInquiry.contactPhone}</span>
                  </div>
                  <div className="flex justify-between pt-1">
                    <span className="text-zinc-500 uppercase">Pricing Status:</span>
                    <span className="text-amber-400 font-bold font-sans">Contact For Price</span>
                  </div>
                </div>

                {/* Instant 1-Click WhatsApp Transmit Action */}
                <div className="bg-emerald-950/40 border border-emerald-500/30 p-5 rounded-xl space-y-3 text-center">
                  <h4 className="text-sm font-bold text-white font-sans">
                    Send this inquiry directly to Tunnex Mega Investment on WhatsApp
                  </h4>
                  <p className="text-xs text-zinc-300">
                    Click the button below to open WhatsApp with your exact equipment specifications pre-filled.
                  </p>
                  <a
                    id="submit-to-whatsapp-btn"
                    href={getSubmissionWhatsAppUrl(activeInquiry)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center space-x-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm px-6 py-3.5 rounded-xl shadow-lg transition-all w-full sm:w-auto"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Send Inquiry to WhatsApp Now</span>
                  </a>
                </div>

                <div className="flex justify-center pt-2">
                  <button
                    onClick={resetForm}
                    className="text-xs text-zinc-400 hover:text-white underline cursor-pointer"
                  >
                    Start a New Inquiry
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Dealership Assistance & Saved Inquiries */}
          <div className="lg:col-span-4 space-y-5">
            {/* Quick Contact Assistance Card */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5 shadow-xl space-y-3 text-left">
              <h4 className="font-mono text-xs font-bold text-amber-400 uppercase tracking-widest flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                Yard Inspection & Visit
              </h4>
              <p className="text-xs text-zinc-300 font-sans leading-relaxed">
                Want to inspect available forklifts in person? Visit our dealer yard at <strong>{TUNNEX_BUSINESS_INFO.addressShort}</strong>.
              </p>
              <div className="pt-2">
                <a
                  href={getWhatsAppUrl("Hello Tunnex Mega Investment, I would like to schedule a visit to your Ijegun yard to view your forklifts.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1.5 text-xs font-bold text-emerald-400 hover:text-emerald-300"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Book Yard Inspection on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Saved Inquiries Panel */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5 shadow-xl text-left">
              <div className="flex justify-between items-center mb-3 border-b border-zinc-800 pb-2">
                <h4 className="font-mono text-xs font-bold text-white uppercase tracking-wider">
                  Recent Inquiries ({inquiryHistory.length})
                </h4>
              </div>

              {inquiryHistory.length === 0 ? (
                <p className="text-xs text-zinc-500 font-sans italic py-4 text-center">
                  No previous inquiries created in this session.
                </p>
              ) : (
                <div className="space-y-2.5 max-h-72 overflow-y-auto">
                  {inquiryHistory.map((item) => (
                    <div
                      key={item.id}
                      onClick={() => {
                        setActiveInquiry(item);
                        setStep(4);
                      }}
                      className={`p-3 bg-zinc-950 hover:bg-zinc-800/80 rounded-xl border cursor-pointer transition-all ${
                        activeInquiry?.id === item.id ? "border-amber-500" : "border-zinc-800"
                      }`}
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <span className="block text-xs font-bold text-white font-sans">
                            {item.forkliftType}
                          </span>
                          <span className="block text-[10px] text-amber-400 font-mono mt-0.5">
                            {item.tonnageRequirement} • {item.id}
                          </span>
                          <span className="block text-[9px] text-zinc-500 font-mono mt-0.5">
                            {item.createdAt}
                          </span>
                        </div>
                        <button
                          onClick={(e) => deleteInquiry(item.id, e)}
                          className="text-zinc-500 hover:text-red-400 p-1"
                          title="Remove Inquiry"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
