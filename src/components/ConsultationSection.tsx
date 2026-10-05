import React, { useState, useEffect } from "react";
import { 
  Calculator, 
  Sparkles, 
  Check, 
  Send, 
  Ruler, 
  ShieldCheck, 
  MessageSquare, 
  Phone,
  Layers,
  MapPin,
  Clock
} from "lucide-react";
import { BUSINESS_INFO, SERVICE_AREAS_LAGOS } from "../data";

interface ConsultationSectionProps {
  preselectedService?: string;
}

export default function ConsultationSection({ preselectedService }: ConsultationSectionProps) {
  const [productType, setProductType] = useState<string>(preselectedService || "Custom Mirrors");
  const [glassThickness, setGlassThickness] = useState<string>("8mm Tempered Glass");
  const [glassFinish, setGlassFinish] = useState<string>("Clear Float Glass");
  const [widthMm, setWidthMm] = useState<number>(1000);
  const [heightMm, setHeightMm] = useState<number>(2100);
  const [quantity, setQuantity] = useState<number>(1);
  const [needInstallation, setNeedInstallation] = useState<boolean>(true);
  const [locationInLagos, setLocationInLagos] = useState<string>("Mushin / Mainland");

  const [fullName, setFullName] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [notes, setNotes] = useState<string>("");

  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  useEffect(() => {
    if (preselectedService) {
      setProductType(preselectedService);
    }
  }, [preselectedService]);

  // Calculate Square Meters
  const areaSqM = Number(((widthMm * heightMm) / 1000000 * quantity).toFixed(2));

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  // Build prefilled WhatsApp message with the exact glass specifications
  const getWhatsAppMessage = () => {
    const text = `Hello OLANREWAJU GLAZIER,
I would like an inquiry/quote for:
• Product: ${productType}
• Dimensions: ${widthMm}mm (W) x ${heightMm}mm (H)
• Quantity: ${quantity} unit(s) (${areaSqM} m² total)
• Glass Spec: ${glassThickness} (${glassFinish})
• Installation Required: ${needInstallation ? "Yes (Lagos On-Site)" : "Supply Only / Pick-up"}
• Location: ${locationInLagos}
${fullName ? `• Name: ${fullName}` : ""}
${phoneNumber ? `• Phone: ${phoneNumber}` : ""}
${notes ? `• Notes: ${notes}` : ""}`;
    return encodeURIComponent(text);
  };

  return (
    <section id="calculator" className="py-20 lg:py-28 bg-[#0B0F17] border-b border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-widest text-sky-400">
            <Calculator className="w-3.5 h-3.5" />
            <span>INSTANT ESTIMATOR & CUSTOM QUOTE</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Glass Sizing & Quote Calculator
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Select your product, input approximate measurements in millimeters, and generate an instant quote request for fabrication and installation in Lagos.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive Calculator Form */}
          <div className="lg:col-span-7 glass-panel p-6 sm:p-8 rounded-2xl border border-white/15 space-y-6">
            <h3 className="font-heading text-xl font-bold text-white flex items-center space-x-2">
              <Ruler className="w-5 h-5 text-sky-400" />
              <span>Configure Your Glass or Mirror Specifications</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Product Type */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-300">Product / Service Needed</label>
                <select
                  id="calc-product-type"
                  value={productType}
                  onChange={(e) => setProductType(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl bg-slate-900 border border-white/15 text-white text-xs focus:border-sky-400 focus:outline-none"
                >
                  <option value="Aluminium & Glass Windows">Aluminium & Glass Windows</option>
                  <option value="Glass Doors (Sliding & Swing)">Glass Doors (Sliding & Swing)</option>
                  <option value="Shower Enclosures">Shower Enclosures</option>
                  <option value="Glass Partitions & Office Dividers">Glass Partitions & Office Dividers</option>
                  <option value="Shopfronts & Storefronts">Shopfronts & Storefronts</option>
                  <option value="Mirrors (Wall Mirrors, Vanity Mirrors)">Mirrors (Wall Mirrors, Vanity Mirrors)</option>
                  <option value="Table Tops & Glass Shelves">Table Tops & Glass Shelves</option>
                  <option value="Toughened & Tempered Glass">Toughened & Tempered Glass</option>
                  <option value="Broken Glass Replacement">Broken Glass Replacement</option>
                  <option value="Tinted, Frosted & Reflective Glass">Tinted, Frosted & Reflective Glass</option>
                </select>
              </div>

              {/* Glass Thickness */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-300">Glass Thickness</label>
                <select
                  id="calc-thickness"
                  value={glassThickness}
                  onChange={(e) => setGlassThickness(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl bg-slate-900 border border-white/15 text-white text-xs focus:border-sky-400 focus:outline-none"
                >
                  <option value="5mm Mirror Glass">5mm High-Clarity Mirror</option>
                  <option value="6mm Safety-Backed Mirror">6mm Safety-Backed Mirror</option>
                  <option value="6mm Toughened Glass">6mm Toughened Glass</option>
                  <option value="8mm Tempered Glass">8mm Tempered Glass (Standard Showers)</option>
                  <option value="10mm Tempered Glass">10mm Tempered Glass (Heavy Duty Showers/Partitions)</option>
                  <option value="12mm Tempered Glass">12mm Monolithic Tempered (Doors/Balustrades)</option>
                  <option value="13.52mm Laminated Safety Glass">13.52mm Toughened Laminated (Structural Balustrade)</option>
                </select>
              </div>

              {/* Glass Finish */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-300">Glass Style / Finish</label>
                <select
                  id="calc-finish"
                  value={glassFinish}
                  onChange={(e) => setGlassFinish(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl bg-slate-900 border border-white/15 text-white text-xs focus:border-sky-400 focus:outline-none"
                >
                  <option value="Clear Float Glass">Clear Float Glass</option>
                  <option value="Ultra-Clear Low-Iron Glass">Ultra-Clear Low-Iron Glass (Crystal)</option>
                  <option value="Frosted / Acid-Etched Privacy Glass">Frosted / Acid-Etched Privacy</option>
                  <option value="Tinted Dark Grey Glass">Tinted Dark Grey Glass</option>
                  <option value="Tinted Euro Bronze Glass">Tinted Euro Bronze Glass</option>
                  <option value="Fluted / Reeded Architectural Glass">Fluted / Reeded Textured Glass</option>
                  <option value="Silver High-Clarity Mirror">Silver High-Clarity Mirror</option>
                  <option value="Bronze Decorative Mirror">Bronze Decorative Mirror</option>
                </select>
              </div>

              {/* Lagos Delivery / Installation Location */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-300">Project Location in Lagos</label>
                <select
                  id="calc-location"
                  value={locationInLagos}
                  onChange={(e) => setLocationInLagos(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl bg-slate-900 border border-white/15 text-white text-xs focus:border-sky-400 focus:outline-none"
                >
                  <option value="Mushin / Surulere (Mainland)">Mushin / Surulere (Mainland)</option>
                  <option value="Ikeja / Maryland / Opebi">Ikeja / Maryland / Opebi</option>
                  <option value="Victoria Island / Ikoyi">Victoria Island / Ikoyi</option>
                  <option value="Lekki Phase 1 / Chevron">Lekki Phase 1 / Chevron</option>
                  <option value="Ajah / Sangotedo / Ibeju-Lekki">Ajah / Sangotedo / Ibeju-Lekki</option>
                  <option value="Yaba / Gbagada / Magodo">Yaba / Gbagada / Magodo</option>
                  <option value="Festac / Amuwo-Odofin / Apapa">Festac / Amuwo-Odofin / Apapa</option>
                  <option value="Other Lagos Location">Other Lagos Location</option>
                </select>
              </div>
            </div>

            {/* Dimension Sliders & Inputs */}
            <div className="p-4 bg-white/5 rounded-xl border border-white/10 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-white">Approximate Dimensions (in Millimeters):</span>
                <span className="text-xs font-mono text-sky-400 font-bold">
                  {widthMm}mm × {heightMm}mm ({areaSqM} m²)
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs text-slate-300">
                    <span>Width (mm):</span>
                    <span className="font-mono text-white font-semibold">{widthMm} mm</span>
                  </div>
                  <input
                    id="calc-width-slider"
                    type="range"
                    min="300"
                    max="3500"
                    step="50"
                    value={widthMm}
                    onChange={(e) => setWidthMm(Number(e.target.value))}
                    className="w-full accent-sky-400 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400">
                    <span>300mm</span>
                    <span>3,500mm</span>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs text-slate-300">
                    <span>Height (mm):</span>
                    <span className="font-mono text-white font-semibold">{heightMm} mm</span>
                  </div>
                  <input
                    id="calc-height-slider"
                    type="range"
                    min="300"
                    max="3500"
                    step="50"
                    value={heightMm}
                    onChange={(e) => setHeightMm(Number(e.target.value))}
                    className="w-full accent-sky-400 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400">
                    <span>300mm</span>
                    <span>3,500mm</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-white/10">
                <div className="flex items-center space-x-2">
                  <label className="text-xs text-slate-300">Quantity:</label>
                  <input
                    id="calc-qty-input"
                    type="number"
                    min="1"
                    max="100"
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(1, Number(e.target.value)))}
                    className="w-16 px-2 py-1 bg-slate-900 border border-white/20 rounded text-center text-xs text-white"
                  />
                </div>

                <label className="flex items-center space-x-2 cursor-pointer text-xs text-slate-300">
                  <input
                    id="calc-install-checkbox"
                    type="checkbox"
                    checked={needInstallation}
                    onChange={(e) => setNeedInstallation(e.target.checked)}
                    className="w-4 h-4 accent-sky-500 rounded cursor-pointer"
                  />
                  <span>Include On-Site Installation in Lagos</span>
                </label>
              </div>
            </div>

            {/* Direct WhatsApp Instant Action */}
            <div className="pt-2">
              <a
                id="calc-direct-whatsapp-btn"
                href={`https://wa.me/2349014120207?text=${getWhatsAppMessage()}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs tracking-wide flex items-center justify-center space-x-2 shadow-lg shadow-emerald-600/25 transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Send Measurements to WhatsApp (09014120207)</span>
              </a>
            </div>
          </div>

          {/* Right Column: Customer Contact Submission & Summary Box */}
          <div className="lg:col-span-5 glass-panel p-6 sm:p-8 rounded-2xl border border-white/15 space-y-6">
            <h3 className="font-heading text-xl font-bold text-white flex items-center space-x-2">
              <Send className="w-5 h-5 text-sky-400" />
              <span>Request Formal Written Quotation</span>
            </h3>

            {isSubmitted ? (
              <div className="p-6 bg-emerald-500/10 rounded-xl border border-emerald-500/30 text-center space-y-3 animate-in fade-in">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="text-white font-heading font-bold text-lg">Quote Request Received!</h4>
                <p className="text-slate-300 text-xs leading-relaxed">
                  Thank you, <strong className="text-white">{fullName || "valued client"}</strong>. The {BUSINESS_INFO.name} team will review your {productType} specifications ({areaSqM} m²) and contact you promptly via phone or WhatsApp.
                </p>
                <div className="pt-2">
                  <a
                    id="quote-followup-whatsapp"
                    href={`https://wa.me/2349014120207?text=${getWhatsAppMessage()}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1.5 text-xs text-emerald-400 hover:text-emerald-300 font-semibold"
                  >
                    <span>Need immediate response? Tap here to WhatsApp 09014120207 directly.</span>
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4">
                {/* Summary Pill */}
                <div className="p-3.5 bg-slate-900/90 rounded-xl border border-white/10 text-xs space-y-1">
                  <div className="text-slate-400">Current Selection:</div>
                  <div className="text-white font-semibold flex items-center justify-between">
                    <span>{productType}</span>
                    <span className="text-sky-400 font-mono">{areaSqM} m²</span>
                  </div>
                  <div className="text-slate-400 text-[11px]">
                    {widthMm}mm × {heightMm}mm • {glassThickness} • {locationInLagos}
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-300">Your Full Name *</label>
                  <input
                    id="quote-name-input"
                    type="text"
                    required
                    placeholder="e.g. Tunde Adeyemi"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl bg-slate-900 border border-white/15 text-white text-xs focus:border-sky-400 focus:outline-none"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-300">Phone Number (Call / WhatsApp) *</label>
                  <input
                    id="quote-phone-input"
                    type="tel"
                    required
                    placeholder="e.g. 08012345678"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl bg-slate-900 border border-white/15 text-white text-xs focus:border-sky-400 focus:outline-none"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-300">Email Address (Optional)</label>
                  <input
                    id="quote-email-input"
                    type="email"
                    placeholder="e.g. tunde@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl bg-slate-900 border border-white/15 text-white text-xs focus:border-sky-400 focus:outline-none"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-300">Special Notes / Site Details</label>
                  <textarea
                    id="quote-notes-input"
                    rows={2}
                    placeholder="e.g., Need hole cutouts for shower mixer or power sockets..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-white/15 text-white text-xs focus:border-sky-400 focus:outline-none resize-none"
                  ></textarea>
                </div>

                <button
                  id="submit-quote-request-btn"
                  type="submit"
                  className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-semibold text-xs tracking-wide shadow-lg shadow-sky-500/20 transition-all cursor-pointer"
                >
                  Submit Quote Request
                </button>
              </form>
            )}

            {/* Workshop Quick Info */}
            <div className="pt-2 border-t border-white/10 text-xs text-slate-400 space-y-1.5">
              <div className="flex items-center space-x-2 text-slate-300">
                <MapPin className="w-3.5 h-3.5 text-sky-400 flex-shrink-0" />
                <span>{BUSINESS_INFO.address}</span>
              </div>
              <div className="flex items-center space-x-2 text-emerald-400 font-medium">
                <Clock className="w-3.5 h-3.5 flex-shrink-0" />
                <span>Open 24 Hours • Ready for urgent orders</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
