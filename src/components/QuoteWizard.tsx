import React, { useState, useEffect } from "react";
import { Car, Wrench, Calendar, User, CheckCircle2, ChevronRight, ChevronLeft, Plus, Trash2, ShieldAlert } from "lucide-react";
import { SERVICES } from "../data";
import { QuoteRequest } from "../types";

interface QuoteWizardProps {
  initialService?: string;
}

export default function QuoteWizard({ initialService = "" }: QuoteWizardProps) {
  const [step, setStep] = useState(1);
  
  // Form State
  const [year, setYear] = useState("");
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [mileage, setMileage] = useState("");
  const [serviceType, setServiceType] = useState(initialService || SERVICES[0].title);
  const [description, setDescription] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [preferredDate, setPreferredDate] = useState("");

  // Error State
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Quote History State (persisted in localStorage)
  const [quotesHistory, setQuotesHistory] = useState<QuoteRequest[]>([]);
  const [activeQuote, setActiveQuote] = useState<QuoteRequest | null>(null);

  // Sync initial service selection from props
  useEffect(() => {
    if (initialService) {
      setServiceType(initialService);
      setStep(2); // Jump straight to vehicle details with this service, or let them see step 2
    }
  }, [initialService]);

  // Load quote history from local storage
  useEffect(() => {
    const saved = localStorage.getItem("cgy_shop_quotes");
    if (saved) {
      try {
        setQuotesHistory(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to parse quote history");
      }
    }
  }, []);

  // Calculate dynamic, realistic quote ranges
  const calculateEstimate = () => {
    const selected = SERVICES.find(s => s.title === serviceType) || SERVICES[0];
    let base = selected.basePrice;
    
    // Premium Vehicle Factor (German cars require specialty diagnostic scanners and fluid specifications)
    const isPremiumMake = ["bmw", "mercedes", "audi", "porsche", "land rover", "volvo"].includes(make.toLowerCase().trim());
    if (isPremiumMake) {
      base += 60; // Extra for specialized equipment
    }

    // Heavy Duty Factor (Trucks and SUVs require heavier duty parts/rotors/lifts)
    const isTruckOrSUV = ["f150", "f-150", "ram", "silverado", "sierra", "tundra", "tacoma", "rav4", "crv", "explorer", "grand cherokee"].includes(model.toLowerCase().trim()) || mileage === "Heavy-Duty/Truck";
    if (isTruckOrSUV) {
      base += 40;
    }

    // High Mileage preventative factor
    const milesNum = parseInt(mileage.replace(/[^0-9]/g, "")) || 0;
    if (milesNum > 150000) {
      base += 20; // Extra fluid gasket checks
    }

    const lowEstimate = base;
    const highEstimate = Math.ceil(base * 1.25);

    return {
      range: `Request a Free Estimate`,
      materials: 0,
      labor: 0,
    };
  };

  const validateStep = (currentStep: number) => {
    const newErrors: Record<string, string> = {};

    if (currentStep === 1) {
      if (!year) newErrors.year = "Year is required";
      else if (parseInt(year) < 1980 || parseInt(year) > 2027) newErrors.year = "Enter a valid year";
      
      if (!make.trim()) newErrors.make = "Make is required";
      if (!model.trim()) newErrors.model = "Model is required";
      if (!mileage) newErrors.mileage = "Select approximate mileage range";
    }

    if (currentStep === 2) {
      if (!serviceType) newErrors.serviceType = "Select a service type";
    }

    if (currentStep === 3) {
      if (!customerName.trim()) newErrors.customerName = "Name is required";
      if (!customerEmail.trim()) {
        newErrors.customerEmail = "Email is required";
      } else if (!/\S+@\S+\.\S+/.test(customerEmail)) {
        newErrors.customerEmail = "Invalid email address";
      }
      if (!customerPhone.trim()) {
        newErrors.customerPhone = "Phone number is required";
      } else if (customerPhone.replace(/[^0-9]/g, "").length < 10) {
        newErrors.customerPhone = "Enter a valid 10-digit phone number";
      }
      if (!preferredDate) newErrors.preferredDate = "Please choose a preferred drop-off date";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(step)) {
      setStep(prev => prev + 1);
    }
  };

  const handleBack = () => {
    setStep(prev => prev - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep(3)) return;

    const finalEstimate = calculateEstimate();
    const randomId = "CGY-" + Math.floor(100000 + Math.random() * 900000);
    
    const newQuote: QuoteRequest = {
      id: randomId,
      year,
      make,
      model,
      mileage,
      serviceType,
      description: description || "No special comments provided.",
      customerName,
      customerEmail,
      customerPhone,
      preferredDate,
      status: "confirmed",
      quoteAmountRange: finalEstimate.range,
      createdAt: new Date().toLocaleDateString("en-CA", { hour: "2-digit", minute: "2-digit" }),
    };

    const updatedHistory = [newQuote, ...quotesHistory].slice(0, 5); // Keep up to 5 quotes locally
    setQuotesHistory(updatedHistory);
    localStorage.setItem("cgy_shop_quotes", JSON.stringify(updatedHistory));
    
    setActiveQuote(newQuote);
    setStep(4);
  };

  const resetForm = () => {
    setStep(1);
    setYear("");
    setMake("");
    setModel("");
    setMileage("");
    setServiceType(SERVICES[0].title);
    setDescription("");
    setCustomerName("");
    setCustomerEmail("");
    setCustomerPhone("");
    setPreferredDate("");
    setErrors({});
    setActiveQuote(null);
  };

  const deleteQuote = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const filtered = quotesHistory.filter(q => q.id !== id);
    setQuotesHistory(filtered);
    localStorage.setItem("cgy_shop_quotes", JSON.stringify(filtered));
    if (activeQuote?.id === id) {
      setActiveQuote(null);
      setStep(1);
    }
  };

  return (
    <section id="quote" className="py-24 bg-zinc-950 text-white border-b border-zinc-800 relative overflow-hidden">
      {/* Background Tech Details */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:5rem_5rem] opacity-5"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-mono font-bold text-red-500 uppercase tracking-widest bg-zinc-900 border border-zinc-800 px-3 py-1 rounded-full">
            Transparent Estimates
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-sans tracking-tight">
            Dealer Diagnostics & Live Quote Tool
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 font-sans">
            Input your vehicle specifications and required services below to generate a transparent, instant cost breakdown and secure a diagnostic service bay slot.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Form / Steps */}
          <div className="lg:col-span-8 bg-zinc-900/80 border border-zinc-800 rounded-2xl p-6 sm:p-8 shadow-2xl backdrop-blur-sm">
            
            {/* Step Indicators */}
            {step < 4 && (
              <div className="flex justify-between items-center mb-8 border-b border-zinc-800 pb-6">
                <div className="flex items-center space-x-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center font-mono text-xs font-bold ${step === 1 ? "bg-red-600 text-white" : "bg-zinc-800 text-zinc-400"}`}>
                    1
                  </div>
                  <span className={`text-xs font-sans font-semibold tracking-wider uppercase hidden sm:inline ${step === 1 ? "text-white" : "text-zinc-500"}`}>
                    Vehicle details
                  </span>
                </div>
                <div className="h-px bg-zinc-800 flex-grow mx-4"></div>
                <div className="flex items-center space-x-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center font-mono text-xs font-bold ${step === 2 ? "bg-red-600 text-white" : "bg-zinc-800 text-zinc-400"}`}>
                    2
                  </div>
                  <span className={`text-xs font-sans font-semibold tracking-wider uppercase hidden sm:inline ${step === 2 ? "text-white" : "text-zinc-500"}`}>
                    Service required
                  </span>
                </div>
                <div className="h-px bg-zinc-800 flex-grow mx-4"></div>
                <div className="flex items-center space-x-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center font-mono text-xs font-bold ${step === 3 ? "bg-red-600 text-white" : "bg-zinc-800 text-zinc-400"}`}>
                    3
                  </div>
                  <span className={`text-xs font-sans font-semibold tracking-wider uppercase hidden sm:inline ${step === 3 ? "text-white" : "text-zinc-500"}`}>
                    Customer & Date
                  </span>
                </div>
              </div>
            )}

            {/* Step 1: Vehicle Details */}
            {step === 1 && (
              <div className="space-y-6 animate-in fade-in slide-in-from-right duration-200">
                <div className="flex items-center space-x-3 mb-2">
                  <Car className="w-5 h-5 text-red-500" />
                  <h3 className="font-bold text-lg text-white font-sans">Vehicle Information</h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Year */}
                  <div>
                    <label className="block text-xs font-mono font-bold uppercase tracking-wider text-zinc-400 mb-2">
                      Vehicle Year
                    </label>
                    <input
                      id="quote-year-input"
                      type="number"
                      placeholder="e.g. 2019"
                      value={year}
                      onChange={(e) => setYear(e.target.value)}
                      className={`w-full bg-zinc-950 border ${errors.year ? "border-red-500" : "border-zinc-800"} rounded p-3 text-white font-sans focus:outline-none focus:border-red-500 text-sm`}
                    />
                    {errors.year && <p className="text-red-500 text-xs mt-1 font-mono">{errors.year}</p>}
                  </div>

                  {/* Make */}
                  <div>
                    <label className="block text-xs font-mono font-bold uppercase tracking-wider text-zinc-400 mb-2">
                      Vehicle Make
                    </label>
                    <input
                      id="quote-make-input"
                      type="text"
                      placeholder="e.g. Toyota, Ford, BMW"
                      value={make}
                      onChange={(e) => setMake(e.target.value)}
                      className={`w-full bg-zinc-950 border ${errors.make ? "border-red-500" : "border-zinc-800"} rounded p-3 text-white font-sans focus:outline-none focus:border-red-500 text-sm`}
                    />
                    {errors.make && <p className="text-red-500 text-xs mt-1 font-mono">{errors.make}</p>}
                  </div>

                  {/* Model */}
                  <div>
                    <label className="block text-xs font-mono font-bold uppercase tracking-wider text-zinc-400 mb-2">
                      Vehicle Model
                    </label>
                    <input
                      id="quote-model-input"
                      type="text"
                      placeholder="e.g. RAV4, F-150, Civic"
                      value={model}
                      onChange={(e) => setModel(e.target.value)}
                      className={`w-full bg-zinc-950 border ${errors.model ? "border-red-500" : "border-zinc-800"} rounded p-3 text-white font-sans focus:outline-none focus:border-red-500 text-sm`}
                    />
                    {errors.model && <p className="text-red-500 text-xs mt-1 font-mono">{errors.model}</p>}
                  </div>

                  {/* Mileage */}
                  <div>
                    <label className="block text-xs font-mono font-bold uppercase tracking-wider text-zinc-400 mb-2">
                      Approximate Mileage
                    </label>
                    <select
                      id="quote-mileage-select"
                      value={mileage}
                      onChange={(e) => setMileage(e.target.value)}
                      className={`w-full bg-zinc-950 border ${errors.mileage ? "border-red-500" : "border-zinc-800"} rounded p-3 text-white font-sans focus:outline-none focus:border-red-500 text-sm`}
                    >
                      <option value="">Select Range</option>
                      <option value="Under 50,000 km">Under 50,000 km</option>
                      <option value="50,000 - 100,000 km">50,000 - 100,000 km</option>
                      <option value="100,000 - 150,000 km">100,000 - 150,000 km</option>
                      <option value="Over 150,000 km">Over 150,000 km (High Mileage)</option>
                      <option value="Heavy-Duty/Truck">Heavy-Duty Utility / Commercial Truck</option>
                    </select>
                    {errors.mileage && <p className="text-red-500 text-xs mt-1 font-mono">{errors.mileage}</p>}
                  </div>
                </div>

                {/* German vehicle warning indicator */}
                {make && ["bmw", "mercedes", "audi", "porsche", "land rover"].includes(make.toLowerCase().trim()) && (
                  <div className="flex items-center space-x-3 bg-zinc-950 border border-amber-500/30 p-4 rounded-lg mt-4 text-amber-300">
                    <ShieldAlert className="w-5 h-5 flex-shrink-0" />
                    <p className="text-xs font-mono">
                      SPECIALTY DETECTED: European vehicles require dealer-grade synthetic engine fluids, specific diagnostic code scanning, and custom ECU resetting tolerances. Our Red Seal team is fully certified for European models.
                    </p>
                  </div>
                )}

                <div className="flex justify-end pt-6">
                  <button
                    id="quote-step1-next-btn"
                    onClick={handleNext}
                    className="flex items-center space-x-2 bg-red-600 hover:bg-red-700 text-white font-bold font-sans text-sm px-6 py-3 rounded tracking-wider shadow-lg shadow-red-950/40 transition-all duration-200"
                  >
                    <span>Next: Service Select</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Service Selection */}
            {step === 2 && (
              <div className="space-y-6 animate-in fade-in slide-in-from-right duration-200">
                <div className="flex items-center space-x-3 mb-2">
                  <Wrench className="w-5 h-5 text-red-500" />
                  <h3 className="font-bold text-lg text-white font-sans">Select Requested Service</h3>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-mono font-bold uppercase tracking-wider text-zinc-400 mb-2">
                      Primary Service Type
                    </label>
                    <select
                      id="quote-service-select"
                      value={serviceType}
                      onChange={(e) => setServiceType(e.target.value)}
                      className="w-full bg-zinc-950 border border-zinc-800 rounded p-3 text-white font-sans focus:outline-none focus:border-red-500 text-sm"
                    >
                      {SERVICES.map((s) => (
                        <option key={s.id} value={s.title}>
                          {s.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold uppercase tracking-wider text-zinc-400 mb-2">
                      Issue Description / Symptoms (Optional)
                    </label>
                    <textarea
                      id="quote-description-textarea"
                      placeholder="Please describe any warning lights, noises (squeaking, grinding, clunking), vibrations, or specific vehicle concerns. (e.g. Grinding sound when braking on winter hills)"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      rows={4}
                      className="w-full bg-zinc-950 border border-zinc-800 rounded p-3 text-white font-sans focus:outline-none focus:border-red-500 text-sm resize-none"
                    />
                  </div>
                </div>

                <div className="flex justify-between pt-6">
                  <button
                    id="quote-step2-back-btn"
                    onClick={handleBack}
                    className="flex items-center space-x-2 bg-zinc-800 hover:bg-zinc-700 text-white font-medium font-sans text-sm px-6 py-3 rounded transition-all duration-200"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    <span>Back</span>
                  </button>
                  <button
                    id="quote-step2-next-btn"
                    onClick={handleNext}
                    className="flex items-center space-x-2 bg-red-600 hover:bg-red-700 text-white font-bold font-sans text-sm px-6 py-3 rounded tracking-wider shadow-lg shadow-red-950/40 transition-all duration-200"
                  >
                    <span>Next: Personal details</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Contact & Booking Details */}
            {step === 3 && (
              <form onSubmit={handleSubmit} className="space-y-6 animate-in fade-in slide-in-from-right duration-200">
                <div className="flex items-center space-x-3 mb-2">
                  <User className="w-5 h-5 text-red-500" />
                  <h3 className="font-bold text-lg text-white font-sans">Contact & Preferred Drop-Off</h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-mono font-bold uppercase tracking-wider text-zinc-400 mb-2">
                      Full Name
                    </label>
                    <input
                      id="quote-name-input"
                      type="text"
                      placeholder="John Doe"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      className={`w-full bg-zinc-950 border ${errors.customerName ? "border-red-500" : "border-zinc-800"} rounded p-3 text-white font-sans focus:outline-none focus:border-red-500 text-sm`}
                    />
                    {errors.customerName && <p className="text-red-500 text-xs mt-1 font-mono">{errors.customerName}</p>}
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-xs font-mono font-bold uppercase tracking-wider text-zinc-400 mb-2">
                      Phone Number
                    </label>
                    <input
                      id="quote-phone-input"
                      type="tel"
                      placeholder="(403) 555-0100"
                      value={customerPhone}
                      onChange={(e) => setCustomerPhone(e.target.value)}
                      className={`w-full bg-zinc-950 border ${errors.customerPhone ? "border-red-500" : "border-zinc-800"} rounded p-3 text-white font-sans focus:outline-none focus:border-red-500 text-sm`}
                    />
                    {errors.customerPhone && <p className="text-red-500 text-xs mt-1 font-mono">{errors.customerPhone}</p>}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-mono font-bold uppercase tracking-wider text-zinc-400 mb-2">
                      Email Address
                    </label>
                    <input
                      id="quote-email-input"
                      type="email"
                      placeholder="johndoe@example.com"
                      value={customerEmail}
                      onChange={(e) => setCustomerEmail(e.target.value)}
                      className={`w-full bg-zinc-950 border ${errors.customerEmail ? "border-red-500" : "border-zinc-800"} rounded p-3 text-white font-sans focus:outline-none focus:border-red-500 text-sm`}
                    />
                    {errors.customerEmail && <p className="text-red-500 text-xs mt-1 font-mono">{errors.customerEmail}</p>}
                  </div>

                  {/* Drop-Off Date */}
                  <div>
                    <label className="block text-xs font-mono font-bold uppercase tracking-wider text-zinc-400 mb-2">
                      Preferred Drop-Off Date
                    </label>
                    <input
                      id="quote-date-input"
                      type="date"
                      min={new Date().toISOString().split("T")[0]}
                      value={preferredDate}
                      onChange={(e) => setPreferredDate(e.target.value)}
                      className={`w-full bg-zinc-950 border ${errors.preferredDate ? "border-red-500" : "border-zinc-800"} rounded p-3 text-white font-mono focus:outline-none focus:border-red-500 text-sm`}
                    />
                    {errors.preferredDate && <p className="text-red-500 text-xs mt-1 font-mono">{errors.preferredDate}</p>}
                  </div>
                </div>

                <div className="flex justify-between pt-6 border-t border-zinc-800/60 mt-4">
                  <button
                    id="quote-step3-back-btn"
                    type="button"
                    onClick={handleBack}
                    className="flex items-center space-x-2 bg-zinc-800 hover:bg-zinc-700 text-white font-medium font-sans text-sm px-6 py-3 rounded transition-all duration-200"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    <span>Back</span>
                  </button>
                  <button
                    id="quote-submit-btn"
                    type="submit"
                    className="bg-red-600 hover:bg-red-700 text-white font-bold font-sans text-sm px-8 py-3.5 rounded tracking-widest uppercase shadow-xl shadow-red-950/40 transition-all duration-200 active:scale-95"
                  >
                    Generate Estimate & Book
                  </button>
                </div>
              </form>
            )}

            {/* Step 4: Live Estimate Result State */}
            {step === 4 && activeQuote && (
              <div className="space-y-6 text-zinc-100 animate-in zoom-in-95 duration-200">
                <div className="flex flex-col items-center text-center pb-4 border-b border-zinc-800">
                  <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center text-white mb-4 animate-bounce">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-black font-sans text-white">Diagnostic Work Order Generated!</h3>
                  <p className="text-xs font-mono text-zinc-400 mt-1 uppercase tracking-widest">
                    Confirmation Code: <span className="text-red-500 font-bold">{activeQuote.id}</span>
                  </p>
                </div>

                {/* Estimate Breakdown Card (Invoice Blueprint layout) */}
                <div className="bg-zinc-950 rounded-xl border border-zinc-800 p-6 font-mono text-xs relative overflow-hidden">
                  {/* Decorative corner tag */}
                  <div className="absolute top-0 right-0 bg-red-600 text-white px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-wider rounded-bl">
                    PENDING_CONFIRMATION
                  </div>

                  <h4 className="text-sm font-bold text-white uppercase border-b border-zinc-800 pb-3 mb-4 flex items-center">
                    <Car className="w-4 h-4 mr-2 text-red-500" />
                    Estimate Details
                  </h4>

                  <div className="space-y-3.5">
                    <div className="flex justify-between border-b border-zinc-900 pb-2">
                      <span className="text-zinc-500 uppercase">Vehicle</span>
                      <span className="text-white text-right">{activeQuote.year} {activeQuote.make} {activeQuote.model}</span>
                    </div>
                    <div className="flex justify-between border-b border-zinc-900 pb-2">
                      <span className="text-zinc-500 uppercase">Service Type</span>
                      <span className="text-white text-right font-sans font-semibold">{activeQuote.serviceType}</span>
                    </div>
                    <div className="flex justify-between border-b border-zinc-900 pb-2">
                      <span className="text-zinc-500 uppercase">Preferred Drop-Off</span>
                      <span className="text-white text-right">{activeQuote.preferredDate}</span>
                    </div>
                    <div className="flex justify-between border-b border-zinc-900 pb-2">
                      <span className="text-zinc-500 uppercase">Mileage Tier</span>
                      <span className="text-white text-right">{activeQuote.mileage}</span>
                    </div>
                    <div className="border-b border-zinc-900 pb-3">
                      <span className="text-zinc-500 uppercase block mb-1">Customer Notes</span>
                      <span className="text-zinc-300 font-sans leading-relaxed">{activeQuote.description}</span>
                    </div>

                    {/* Calculated Pricing Rows */}
                    <div className="pt-4 space-y-2">
                      <div className="flex justify-between text-zinc-400 text-[11px]">
                        <span>SPECIALIZED PARTS & MATERIALS (EST.)</span>
                        <span>Included</span>
                      </div>
                      <div className="flex justify-between text-zinc-400 text-[11px]">
                        <span>RED SEAL LABOUR CHARGE (EST.)</span>
                        <span>Included</span>
                      </div>
                      <div className="flex justify-between items-center text-sm font-bold border-t border-zinc-800 pt-4 mt-2">
                        <span className="text-white uppercase tracking-wider">Estimated Cost Range *</span>
                        <span className="text-red-400 text-lg font-black">{activeQuote.quoteAmountRange}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-zinc-900 p-4 rounded-lg border border-zinc-800 text-zinc-400 text-xs space-y-2 leading-relaxed">
                  <p className="font-semibold text-zinc-300">📌 Next Steps & Warranty Protection:</p>
                  <p>1. Our Red Seal Service Advisor will contact you within **30 minutes** (during regular business hours) at **{activeQuote.customerPhone}** to confirm diagnostic bay availability for **{activeQuote.preferredDate}**.</p>
                  <p>2. Drop your vehicle at **1234 9th Ave SE, Calgary** on your selected date. Feel free to use our secure 24-hour lockbox key drop.</p>
                  <p>3. **Peace of Mind Warranty:** All parts & labor are backed by our signature Calgary-wide 24-month/40,000 km warranty.</p>
                </div>

                <div className="flex justify-center pt-4">
                  <button
                    id="quote-done-btn"
                    onClick={resetForm}
                    className="bg-red-600 hover:bg-red-700 text-white font-bold font-sans text-sm px-8 py-3.5 rounded tracking-widest uppercase transition-all duration-200"
                  >
                    Calculate Another Estimate
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Quotes History & Local Persistence */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Live Service Guarantee Box */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 shadow-xl">
              <h4 className="font-mono text-xs font-bold text-red-500 uppercase tracking-widest mb-3 flex items-center">
                <CheckCircle2 className="w-4 h-4 mr-2" />
                Our Work Guarantee
              </h4>
              <ul className="space-y-3.5 text-xs text-zinc-400 font-sans leading-relaxed">
                <li className="flex items-start">
                  <span className="text-red-500 font-bold mr-2">✓</span>
                  <span><strong>Zero surprise costs:</strong> We strictly never perform unauthorized repairs. All quotes are final until you approve.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 font-bold mr-2">✓</span>
                  <span><strong>Digital reports:</strong> We text you high-definition photos of any worn parts before we touch them.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 font-bold mr-2">✓</span>
                  <span><strong>OEM spec standards:</strong> We strictly follow your manufacturer's fluid and torque requirements.</span>
                </li>
              </ul>
            </div>

            {/* Saved Estimates History Panel */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 shadow-xl">
              <div className="flex justify-between items-center mb-4 border-b border-zinc-800 pb-3">
                <h4 className="font-mono text-xs font-bold text-white uppercase tracking-wider flex items-center">
                  <Car className="w-4 h-4 mr-2 text-red-500" />
                  Your Saved Estimates ({quotesHistory.length})
                </h4>
              </div>

              {quotesHistory.length === 0 ? (
                <p className="text-xs text-zinc-500 font-sans italic text-center py-6">
                  No previous estimates found on this browser. Generate one to view history.
                </p>
              ) : (
                <div className="space-y-3 max-h-80 overflow-y-auto pr-1">
                  {quotesHistory.map((q) => (
                    <div
                      key={q.id}
                      id={`saved-quote-${q.id}`}
                      onClick={() => {
                        setActiveQuote(q);
                        setStep(4);
                      }}
                      className={`p-3 bg-zinc-950 hover:bg-zinc-800 rounded border cursor-pointer transition-all duration-200 text-left ${
                        activeQuote?.id === q.id ? "border-red-600" : "border-zinc-800"
                      }`}
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <span className="block text-[11px] font-bold text-white font-sans leading-tight">
                            {q.year} {q.make} {q.model}
                          </span>
                          <span className="block text-[10px] text-zinc-400 mt-1 font-sans">
                            {q.serviceType}
                          </span>
                          <span className="block text-[9px] font-mono text-zinc-500 mt-1">
                            CODE: {q.id} | {q.createdAt}
                          </span>
                        </div>
                        <div className="flex flex-col items-end justify-between h-full space-y-2">
                          <button
                            id={`delete-quote-${q.id}`}
                            onClick={(e) => deleteQuote(q.id, e)}
                            className="text-zinc-500 hover:text-red-500 p-1"
                            title="Delete Estimate"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                          <span className="text-[11px] font-bold font-mono text-red-400 leading-none">
                            Call for Quote
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                  <p className="text-[9px] font-mono text-zinc-500 text-center pt-2 border-t border-zinc-800/60">
                    Estimates saved securely in local browser cache.
                  </p>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
