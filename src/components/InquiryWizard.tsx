import React, { useState, useEffect } from "react";
import { Truck, MessageSquare, CheckCircle2, ChevronRight, ChevronLeft, Trash2, Building, PhoneCall, Mail, HardHat, MapPin, Layers } from "lucide-react";
import { PETHONA_BUSINESS_INFO, getWhatsAppUrl } from "../data";
import { EquipmentInquiryRequest } from "../types";

interface InquiryWizardProps {
  initialForklift?: string;
  initialEquipment?: string;
}

export default function InquiryWizard({ initialForklift = "", initialEquipment = "" }: InquiryWizardProps) {
  const [step, setStep] = useState(1);

  const initialSelect = initialEquipment || initialForklift || "Heavy Hydraulic Excavator (20-30T)";

  // Form State
  const [equipmentType, setEquipmentType] = useState(initialSelect);
  const [capacityOrWeight, setCapacityOrWeight] = useState("20 - 30 Ton / Standard Bucket");
  const [operatingEnvironment, setOperatingEnvironment] = useState("Construction & Road Works");
  const [additionalRequirement, setAdditionalRequirement] = useState("Standard Configuration");
  const [companyName, setCompanyName] = useState("");
  const [contactPerson, setContactPerson] = useState("");
  const [contactPhone, setContactPhone] = useState("");
  const [locationInNigeria, setLocationInNigeria] = useState("Lagos State");
  const [specialNotes, setSpecialNotes] = useState("");

  // Validation Errors
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Inquiry History State (persisted in localStorage)
  const [inquiryHistory, setInquiryHistory] = useState<EquipmentInquiryRequest[]>([]);
  const [activeInquiry, setActiveInquiry] = useState<EquipmentInquiryRequest | null>(null);

  useEffect(() => {
    if (initialEquipment || initialForklift) {
      setEquipmentType(initialEquipment || initialForklift);
      setStep(1);
    }
  }, [initialEquipment, initialForklift]);

  // Load inquiries from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("pethona_equipment_inquiries");
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
      if (!equipmentType) newErrors.equipmentType = "Please select an equipment category";
      if (!capacityOrWeight) newErrors.capacityOrWeight = "Please select capacity / weight class";
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

    const randomId = "PETHONA-" + Math.floor(100000 + Math.random() * 900000);

    const newInquiry: EquipmentInquiryRequest = {
      id: randomId,
      companyName: companyName || "Independent Business",
      contactPerson,
      contactPhone,
      contactEmail: "N/A",
      locationInNigeria: locationInNigeria || "Lagos",
      equipmentType,
      capacityOrWeight,
      operatingEnvironment,
      additionalRequirement,
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
    localStorage.setItem("pethona_equipment_inquiries", JSON.stringify(updated));

    setActiveInquiry(newInquiry);
    setStep(4);
  };

  const resetForm = () => {
    setStep(1);
    setCompanyName("");
    setContactPerson("");
    setContactPhone("");
    setSpecialNotes("");
    setErrors({});
    setActiveInquiry(null);
  };

  const deleteInquiry = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const filtered = inquiryHistory.filter((q) => q.id !== id);
    setInquiryHistory(filtered);
    localStorage.setItem("pethona_equipment_inquiries", JSON.stringify(filtered));
    if (activeInquiry?.id === id) {
      setActiveInquiry(null);
      setStep(1);
    }
  };

  const getSubmissionWhatsAppUrl = (inquiry: EquipmentInquiryRequest) => {
    const text = `Hello Pethona Integrated & Resources LTD, I would like to request price & availability for:
- Equipment: ${inquiry.equipmentType}
- Capacity / Specs: ${inquiry.capacityOrWeight}
- Project Environment: ${inquiry.operatingEnvironment}
- Config: ${inquiry.additionalRequirement}
- Client / Company: ${inquiry.contactPerson} (${inquiry.companyName})
- Phone: ${inquiry.contactPhone}
- Location: ${inquiry.locationInNigeria}
- Notes: ${inquiry.specialNotes}
Reference: ${inquiry.id}`;
    return getWhatsAppUrl(text);
  };

  return (
    <section id="inquiry" className="py-20 bg-zinc-950 text-white border-b border-zinc-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest bg-amber-500/10 border border-amber-500/30 px-3.5 py-1 rounded-full">
            Request Equipment Quote
          </span>
          <h2 className="text-3xl sm:text-4xl font-black font-sans tracking-tight text-white">
            Equipment Inquiry & Quote Generator
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 font-sans leading-relaxed">
            Select your machine type, required tonnage, and project application. Pethona Integrated & Resources LTD will provide stock availability, machine walkaround details, and quotations.
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
                    Equipment Selection
                  </span>
                </div>
                <div className="h-px bg-zinc-800 flex-grow mx-3"></div>
                <div className="flex items-center space-x-2.5">
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center font-mono text-xs font-bold ${step === 2 ? "bg-amber-500 text-zinc-950" : "bg-zinc-800 text-zinc-400"}`}>
                    2
                  </div>
                  <span className={`text-xs font-sans font-bold uppercase hidden sm:inline ${step === 2 ? "text-white" : "text-zinc-500"}`}>
                    Site & Setup
                  </span>
                </div>
                <div className="h-px bg-zinc-800 flex-grow mx-3"></div>
                <div className="flex items-center space-x-2.5">
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center font-mono text-xs font-bold ${step === 3 ? "bg-amber-500 text-zinc-950" : "bg-zinc-800 text-zinc-400"}`}>
                    3
                  </div>
                  <span className={`text-xs font-sans font-bold uppercase hidden sm:inline ${step === 3 ? "text-white" : "text-zinc-500"}`}>
                    Contact & Transmit
                  </span>
                </div>
              </div>
            )}

            {/* Step 1: Equipment Selection */}
            {step === 1 && (
              <div className="space-y-6">
                <div className="flex items-center space-x-2.5">
                  <HardHat className="w-5 h-5 text-amber-400" />
                  <h3 className="font-bold text-base sm:text-lg text-white font-sans">
                    Select Equipment Category & Capacity
                  </h3>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-mono font-bold uppercase tracking-wider text-zinc-400 mb-2">
                      Equipment Category & Type
                    </label>
                    <select
                      id="inquiry-type-select"
                      value={equipmentType}
                      onChange={(e) => setEquipmentType(e.target.value)}
                      className="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-3.5 text-white font-sans text-sm focus:outline-none focus:border-amber-500"
                    >
                      <optgroup label="Heavy Earthmoving & Construction Equipment">
                        <option value="Heavy Hydraulic Crawler Excavator (20-30T)">Heavy Hydraulic Crawler Excavator (20 - 30 Ton)</option>
                        <option value="Crawler Bulldozer with Semi-U Blade (160-220HP)">Crawler Bulldozer with Semi-U Blade (160 - 220 HP)</option>
                        <option value="Articulated Front Wheel Loader (3.0-5.0T Payload)">Articulated Front Wheel Loader (3.0 - 5.0 Ton Payload)</option>
                        <option value="Four-Wheel-Drive Backhoe Loader (4-in-1 Bucket)">4WD Backhoe Loader (4-in-1 Front Bucket & Excavator Arm)</option>
                      </optgroup>
                      <optgroup label="Industrial Forklifts & Material Handling">
                        <option value="Electric Counterbalance Forklift (2.0 - 3.5 Ton)">Electric Counterbalance Forklift (2.0 - 3.5 Ton)</option>
                        <option value="Diesel Heavy Industrial Forklift (3.0 - 10.0+ Ton)">Diesel Heavy Industrial Forklift (3.0 - 10.0+ Ton)</option>
                        <option value="LPG Dual-Fuel Forklift (2.5 - 5.0 Ton)">LPG / Dual-Fuel Forklift (2.5 - 5.0 Ton)</option>
                        <option value="Warehouse Narrow-Aisle Reach Truck (1.5 - 2.5 Ton)">Warehouse Reach Truck (1.5 - 2.5 Ton)</option>
                        <option value="High-Capacity Yard / Port Container Handler (10.0 - 16.0+ Ton)">Heavy Duty Yard Handler (10.0 - 16.0+ Ton)</option>
                      </optgroup>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold uppercase tracking-wider text-zinc-400 mb-2">
                      Target Capacity / Weight Class
                    </label>
                    <select
                      id="inquiry-capacity-select"
                      value={capacityOrWeight}
                      onChange={(e) => setCapacityOrWeight(e.target.value)}
                      className="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-3.5 text-white font-sans text-sm focus:outline-none focus:border-amber-500"
                    >
                      <option value="Standard Work Class (Popular)">Standard Commercial Class (Most Popular)</option>
                      <option value="Heavy Duty / High Tonnage Class">Heavy Duty / High Tonnage Class</option>
                      <option value="Compact / Medium Site Utility">Compact / Medium Site Utility</option>
                      <option value="High Reach / Extended Mast or Arm">High Reach / Extended Mast or Long Reach Arm</option>
                      <option value="Consult Pethona for Recommendation">Consult Pethona Sales Team for Recommendation</option>
                    </select>
                  </div>
                </div>

                <div className="flex justify-end pt-4">
                  <button
                    id="inquiry-step1-next"
                    onClick={handleNext}
                    className="inline-flex items-center space-x-2 bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold font-sans text-xs sm:text-sm px-6 py-3 rounded-xl transition-all cursor-pointer"
                  >
                    <span>Next: Site & Application</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Site Environment & Requirements */}
            {step === 2 && (
              <div className="space-y-6">
                <div className="flex items-center space-x-2.5">
                  <Building className="w-5 h-5 text-amber-400" />
                  <h3 className="font-bold text-base sm:text-lg text-white font-sans">
                    Project Environment & Operational Setup
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono font-bold uppercase tracking-wider text-zinc-400 mb-2">
                      Operational Environment
                    </label>
                    <select
                      id="inquiry-environment-select"
                      value={operatingEnvironment}
                      onChange={(e) => setOperatingEnvironment(e.target.value)}
                      className="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-3.5 text-white font-sans text-sm focus:outline-none focus:border-amber-500"
                    >
                      <option value="Construction & Civil Infrastructure">Construction & Civil Infrastructure</option>
                      <option value="Earthmoving, Road Grading & Land Clearing">Earthmoving, Road Grading & Land Clearing</option>
                      <option value="Quarry, Mining & Aggregate Handling">Quarry, Mining & Aggregate Handling</option>
                      <option value="Industrial Warehouse & Factory Floor">Industrial Warehouse & Factory Floor</option>
                      <option value="Port, Wharf & Container Logistics Yard">Port, Wharf & Container Logistics Yard</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold uppercase tracking-wider text-zinc-400 mb-2">
                      Configuration / Auxiliary Options
                    </label>
                    <select
                      id="inquiry-addon-select"
                      value={additionalRequirement}
                      onChange={(e) => setAdditionalRequirement(e.target.value)}
                      className="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-3.5 text-white font-sans text-sm focus:outline-none focus:border-amber-500"
                    >
                      <option value="Standard Bucket / Forks Configuration">Standard Bucket / Forks Configuration</option>
                      <option value="Hydraulic Piping for Breaker / Attachments">Auxiliary Hydraulic Piping for Attachments</option>
                      <option value="Enclosed AC Operator Cabin">Enclosed Climate-Controlled Operator Cabin</option>
                      <option value="Solid Puncture-Proof Tires / Heavy Shoes">Solid Puncture-Proof Tires / Heavy Duty Track Shoes</option>
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
                      Company / Organization Name (Optional)
                    </label>
                    <input
                      id="inquiry-company-input"
                      type="text"
                      placeholder="e.g. Apex Civil Contractors Ltd"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      className="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-3 text-white font-sans text-sm focus:outline-none focus:border-amber-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold uppercase tracking-wider text-zinc-400 mb-1.5">
                      Contact Person *
                    </label>
                    <input
                      id="inquiry-name-input"
                      type="text"
                      placeholder="e.g. Adebayo Ogunlesi"
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
                      Project Location / State in Nigeria
                    </label>
                    <input
                      id="inquiry-location-input"
                      type="text"
                      placeholder="e.g. Lagos (Idi Oro, Ikeja, Lekki), Ogun, etc."
                      value={locationInNigeria}
                      onChange={(e) => setLocationInNigeria(e.target.value)}
                      className="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-3 text-white font-sans text-sm focus:outline-none focus:border-amber-500"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-xs font-mono font-bold uppercase tracking-wider text-zinc-400 mb-1.5">
                      Specific Inquiries / Machine Notes (Optional)
                    </label>
                    <textarea
                      id="inquiry-notes-textarea"
                      placeholder="Specify required brands, bucket capacity, delivery preferences, or inspection dates..."
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

            {/* Step 4: Submission Summary & 1-Click WhatsApp Send */}
            {step === 4 && activeInquiry && (
              <div className="space-y-6 text-zinc-100 animate-in zoom-in-95 duration-200">
                <div className="flex flex-col items-center text-center pb-4 border-b border-zinc-800">
                  <div className="w-14 h-14 bg-emerald-600/20 border border-emerald-500/30 rounded-full flex items-center justify-center text-emerald-400 mb-3">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-black font-sans text-white">Equipment Inquiry Generated</h3>
                  <p className="text-xs font-mono text-zinc-400 mt-1 uppercase tracking-wider">
                    Reference ID: <span className="text-amber-400 font-bold">{activeInquiry.id}</span>
                  </p>
                </div>

                {/* Inquiry Summary Card */}
                <div className="bg-zinc-950 rounded-xl border border-zinc-800 p-5 font-mono text-xs space-y-3 text-left">
                  <div className="flex justify-between border-b border-zinc-900 pb-2">
                    <span className="text-zinc-500 uppercase">Equipment Requested:</span>
                    <span className="text-white font-bold text-right">{activeInquiry.equipmentType}</span>
                  </div>
                  <div className="flex justify-between border-b border-zinc-900 pb-2">
                    <span className="text-zinc-500 uppercase">Capacity / Class:</span>
                    <span className="text-amber-400 font-bold text-right">{activeInquiry.capacityOrWeight}</span>
                  </div>
                  <div className="flex justify-between border-b border-zinc-900 pb-2">
                    <span className="text-zinc-500 uppercase">Project Environment:</span>
                    <span className="text-white text-right">{activeInquiry.operatingEnvironment}</span>
                  </div>
                  <div className="flex justify-between border-b border-zinc-900 pb-2">
                    <span className="text-zinc-500 uppercase">Configuration:</span>
                    <span className="text-white text-right">{activeInquiry.additionalRequirement}</span>
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
                    Send this inquiry directly to Pethona Integrated & Resources LTD on WhatsApp
                  </h4>
                  <p className="text-xs text-zinc-300">
                    Click the button below to open WhatsApp with your equipment details pre-filled.
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

          {/* Right Column: Yard Inspection & Saved Inquiries */}
          <div className="lg:col-span-4 space-y-5">
            {/* Quick Contact Assistance Card */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5 shadow-xl space-y-3 text-left">
              <h4 className="font-mono text-xs font-bold text-amber-400 uppercase tracking-widest flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                Yard Inspection & Visit
              </h4>
              <p className="text-xs text-zinc-300 font-sans leading-relaxed">
                Want to inspect available heavy machinery and forklifts in person? Visit our yard at <strong>{PETHONA_BUSINESS_INFO.addressShort}</strong>.
              </p>
              <div className="pt-2">
                <a
                  href={getWhatsAppUrl("Hello Pethona Integrated & Resources LTD, I would like to schedule a visit to your Idi Oro yard to inspect available equipment.")}
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
                            {item.equipmentType}
                          </span>
                          <span className="block text-[10px] text-amber-400 font-mono mt-0.5">
                            {item.capacityOrWeight} • {item.id}
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
