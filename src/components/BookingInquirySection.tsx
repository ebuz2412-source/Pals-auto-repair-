import React, { useState, useEffect } from "react";
import { 
  Calendar, 
  Car, 
  User, 
  Phone, 
  Mail, 
  MapPin, 
  MessageSquare, 
  CheckCircle2, 
  Sparkles, 
  Shield, 
  Clock, 
  X,
  FileText
} from "lucide-react";
import { FLEET_INVENTORY, BUSINESS_INFO, getWhatsAppUrl } from "../data";

interface BookingInquirySectionProps {
  initialVehicle?: string;
  initialService?: string;
}

export default function BookingInquirySection({ initialVehicle, initialService }: BookingInquirySectionProps) {
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [desiredVehicle, setDesiredVehicle] = useState(initialVehicle || FLEET_INVENTORY[0].name);
  const [rentalDate, setRentalDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [chauffeurPreference, setChauffeurPreference] = useState<"Chauffeur-Driven" | "Self-Drive" | "Undecided">("Chauffeur-Driven");
  const [pickupLocation, setPickupLocation] = useState("Victoria Island Flagship Office");
  const [additionalRequirements, setAdditionalRequirements] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState("");

  // Update vehicle if initialVehicle prop changes
  useEffect(() => {
    if (initialVehicle) {
      setDesiredVehicle(initialVehicle);
    }
  }, [initialVehicle]);

  // Update notes if initialService prop changes
  useEffect(() => {
    if (initialService) {
      setAdditionalRequirements(prev => prev ? `${prev}, Service: ${initialService}` : `Service requested: ${initialService}`);
    }
  }, [initialService]);

  const generateWhatsAppMessage = () => {
    const lines = [
      `*LUXURY CAR RENTALS - RESERVATION REQUEST*`,
      `📍 *Location:* Adetokunbo Ademola St, Victoria Island, Lagos`,
      `---------------------------------`,
      `👤 *Client Name:* ${fullName || "Not specified"}`,
      `📞 *Phone:* ${phoneNumber || "Not specified"}`,
      email ? `✉️ *Email:* ${email}` : null,
      `🚗 *Desired Vehicle:* ${desiredVehicle}`,
      `📅 *Rental Date:* ${rentalDate || "To be discussed"}`,
      `📅 *Return Date:* ${returnDate || "To be discussed"}`,
      `👔 *Chauffeur Option:* ${chauffeurPreference}`,
      `📍 *Pickup / Delivery:* ${pickupLocation}`,
      additionalRequirements ? `📝 *Additional Requirements:* ${additionalRequirements}` : null,
      `---------------------------------`,
      `Please confirm availability, quote, and next steps.`
    ].filter(Boolean);

    return lines.join("\n");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phoneNumber || !desiredVehicle) {
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setBookingRef(`LCR-${Math.floor(100000 + Math.random() * 900000)}`);
      setIsSubmitted(true);
    }, 600);
  };

  const handleWhatsAppDirect = () => {
    const message = generateWhatsAppMessage();
    window.open(`https://wa.me/?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <section id="booking" className="py-24 bg-zinc-950 text-zinc-100 relative border-b border-zinc-800">
      {/* Glow Effects */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-amber-500/5 rounded-full filter blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Context & VIP Booking Concierge Guarantees */}
          <div className="lg:col-span-5 space-y-7 text-left">
            <div className="inline-flex items-center space-x-2 bg-zinc-900 border border-amber-500/30 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold text-amber-400 uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Direct Reservation Desk</span>
            </div>

            <div className="space-y-3">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-sans tracking-tight text-white leading-tight">
                Request Your <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-500">
                  Luxury Rental
                </span>
              </h2>
              <p className="text-sm sm:text-base text-zinc-400 font-sans leading-relaxed">
                Submit your reservation details below. Our Victoria Island concierge team will immediately review fleet schedule, prepare your tailored quotation, and confirm your booking.
              </p>
            </div>

            {/* Guarantees Box */}
            <div className="bg-zinc-900/80 border border-zinc-800 p-6 rounded-2xl space-y-4">
              <h4 className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider">
                The Luxury Car Rentals Standard
              </h4>

              <ul className="space-y-3 text-xs sm:text-sm text-zinc-300 font-sans">
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Guaranteed Vehicle Model:</strong> You receive the exact vehicle category and specifications reserved.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Concierge Delivery:</strong> Available for delivery to your Victoria Island hotel, residence, or airport tarmac.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Rapid Confirmation:</strong> Instant replies via WhatsApp or phone within minutes.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Security & Privacy:</strong> Strict NDAs and optional armed security escort pilots.</span>
                </li>
              </ul>
            </div>

            {/* Quick Contact Line */}
            <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800 text-xs text-zinc-400 space-y-1">
              <span className="font-mono text-[11px] text-amber-400 uppercase block font-semibold">Immediate Assistance</span>
              <p>Prefer to speak directly with our concierge? Call <strong className="text-white">{BUSINESS_INFO.phone}</strong> or message us on WhatsApp.</p>
            </div>
          </div>

          {/* Right Column: Multi-Field Luxury Reservation Form */}
          <div className="lg:col-span-7">
            <div className="bg-zinc-900/95 border border-zinc-800 rounded-2xl p-6 sm:p-8 shadow-2xl backdrop-blur-sm">
              <form onSubmit={handleSubmit} className="space-y-5 text-left">
                {/* Form Header */}
                <div className="border-b border-zinc-800 pb-4 mb-2 flex justify-between items-center">
                  <div>
                    <h3 className="text-lg font-bold text-white font-sans">Rental Inquiry & Booking Form</h3>
                    <p className="text-xs text-zinc-400">Complete the details below for instant rate confirmation</p>
                  </div>
                  <span className="text-[11px] font-mono text-amber-400 bg-amber-950/40 border border-amber-500/30 px-2.5 py-1 rounded-md">
                    VI Desk
                  </span>
                </div>

                {/* 1. Personal Details Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
                      Full Name <span className="text-amber-400">*</span>
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        required
                        placeholder="e.g. Dr. Adeyemi Adeleke"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className="w-full bg-zinc-950 border border-zinc-800 focus:border-amber-400 focus:ring-1 focus:ring-amber-400 rounded-xl pl-10 pr-4 py-3 text-xs sm:text-sm text-white placeholder-zinc-600 outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
                      Phone Number <span className="text-amber-400">*</span>
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="tel"
                        required
                        placeholder="e.g. +234 803 000 0000"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        className="w-full bg-zinc-950 border border-zinc-800 focus:border-amber-400 focus:ring-1 focus:ring-amber-400 rounded-xl pl-10 pr-4 py-3 text-xs sm:text-sm text-white placeholder-zinc-600 outline-none transition-colors"
                      />
                    </div>
                  </div>
                </div>

                {/* 2. Email & Desired Vehicle */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
                      Email Address <span className="text-zinc-500 text-[10px]">(Optional)</span>
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="email"
                        placeholder="e.g. client@domain.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-zinc-950 border border-zinc-800 focus:border-amber-400 focus:ring-1 focus:ring-amber-400 rounded-xl pl-10 pr-4 py-3 text-xs sm:text-sm text-white placeholder-zinc-600 outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
                      Desired Vehicle / Category <span className="text-amber-400">*</span>
                    </label>
                    <div className="relative">
                      <Car className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <select
                        value={desiredVehicle}
                        onChange={(e) => setDesiredVehicle(e.target.value)}
                        className="w-full bg-zinc-950 border border-zinc-800 focus:border-amber-400 focus:ring-1 focus:ring-amber-400 rounded-xl pl-10 pr-4 py-3 text-xs sm:text-sm text-white outline-none transition-colors appearance-none"
                      >
                        {FLEET_INVENTORY.map((v) => (
                          <option key={v.id} value={v.name}>
                            {v.name} ({v.categoryLabel})
                          </option>
                        ))}
                        <option value="Multi-Vehicle Convoy / Custom Fleet">
                          Multi-Vehicle Convoy / Custom Fleet
                        </option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* 3. Rental Dates & Times */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
                      Rental Date (Pickup) <span className="text-amber-400">*</span>
                    </label>
                    <div className="relative">
                      <Calendar className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="date"
                        required
                        value={rentalDate}
                        onChange={(e) => setRentalDate(e.target.value)}
                        className="w-full bg-zinc-950 border border-zinc-800 focus:border-amber-400 focus:ring-1 focus:ring-amber-400 rounded-xl pl-10 pr-4 py-3 text-xs sm:text-sm text-white outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
                      Return Date (Drop-off) <span className="text-amber-400">*</span>
                    </label>
                    <div className="relative">
                      <Calendar className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="date"
                        required
                        value={returnDate}
                        onChange={(e) => setReturnDate(e.target.value)}
                        className="w-full bg-zinc-950 border border-zinc-800 focus:border-amber-400 focus:ring-1 focus:ring-amber-400 rounded-xl pl-10 pr-4 py-3 text-xs sm:text-sm text-white outline-none transition-colors"
                      />
                    </div>
                  </div>
                </div>

                {/* 4. Chauffeur Option & Pickup Location */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
                      Chauffeur Preference
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        type="button"
                        onClick={() => setChauffeurPreference("Chauffeur-Driven")}
                        className={`py-2.5 px-3 rounded-xl text-xs font-bold font-sans border transition-all cursor-pointer ${
                          chauffeurPreference === "Chauffeur-Driven"
                            ? "bg-amber-500 text-zinc-950 border-amber-400"
                            : "bg-zinc-950 text-zinc-400 border-zinc-800 hover:border-zinc-700"
                        }`}
                      >
                        Chauffeur-Driven
                      </button>
                      <button
                        type="button"
                        onClick={() => setChauffeurPreference("Self-Drive")}
                        className={`py-2.5 px-3 rounded-xl text-xs font-bold font-sans border transition-all cursor-pointer ${
                          chauffeurPreference === "Self-Drive"
                            ? "bg-amber-500 text-zinc-950 border-amber-400"
                            : "bg-zinc-950 text-zinc-400 border-zinc-800 hover:border-zinc-700"
                        }`}
                      >
                        Approved Self-Drive
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
                      Pickup / Delivery Location
                    </label>
                    <div className="relative">
                      <MapPin className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <select
                        value={pickupLocation}
                        onChange={(e) => setPickupLocation(e.target.value)}
                        className="w-full bg-zinc-950 border border-zinc-800 focus:border-amber-400 focus:ring-1 focus:ring-amber-400 rounded-xl pl-10 pr-4 py-3 text-xs sm:text-sm text-white outline-none transition-colors appearance-none"
                      >
                        <option value="Victoria Island Flagship Office (Adetokunbo Ademola St)">
                          Victoria Island Flagship Office (Adetokunbo Ademola St)
                        </option>
                        <option value="Hotel Delivery (Victoria Island / Ikoyi)">
                          Hotel Delivery (Victoria Island / Ikoyi)
                        </option>
                        <option value="Airport Meet & Greet (MMIA International)">
                          Airport Meet & Greet (MMIA International)
                        </option>
                        <option value="Airport Meet & Greet (Executive / Private Jet Terminal)">
                          Airport Meet & Greet (Executive / Private Jet Terminal)
                        </option>
                        <option value="Private Residence Delivery (Lagos)">
                          Private Residence Delivery (Lagos)
                        </option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* 5. Additional Requirements */}
                <div>
                  <label className="block text-xs font-mono font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
                    Additional Requirements / Special Requests
                  </label>
                  <textarea
                    rows={3}
                    placeholder="e.g. Wedding satin ribbons required, armed security escort pilot, airport flight details, multi-day itinerary, child seat..."
                    value={additionalRequirements}
                    onChange={(e) => setAdditionalRequirements(e.target.value)}
                    className="w-full bg-zinc-950 border border-zinc-800 focus:border-amber-400 focus:ring-1 focus:ring-amber-400 rounded-xl p-3.5 text-xs sm:text-sm text-white placeholder-zinc-600 outline-none transition-colors resize-none"
                  ></textarea>
                </div>

                {/* Action Buttons: Submit Reservation & Send to WhatsApp */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 text-zinc-950 font-black font-sans text-xs sm:text-sm py-3.5 px-4 rounded-xl shadow-lg shadow-amber-500/20 hover:shadow-amber-500/30 transition-all duration-150 transform active:scale-98 cursor-pointer flex items-center justify-center space-x-2"
                  >
                    <span>{isSubmitting ? "Processing Reservation..." : "Submit Reservation Request"}</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleWhatsAppDirect}
                    className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold font-sans text-xs sm:text-sm py-3.5 px-4 rounded-xl shadow-lg shadow-emerald-950/40 hover:shadow-emerald-900/50 transition-all duration-150 flex items-center justify-center space-x-2 cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Instant WhatsApp Booking</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Confirmation Modal */}
      {isSubmitted && (
        <div
          id="booking-confirmation-modal"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 animate-in fade-in duration-200"
        >
          <div className="bg-zinc-900 border border-zinc-700 max-w-lg w-full rounded-2xl p-6 sm:p-8 shadow-2xl text-left relative space-y-5">
            <button
              onClick={() => setIsSubmitted(false)}
              className="absolute top-4 right-4 p-2 rounded-full text-zinc-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-1">
              <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider">
                Reservation Request Received
              </span>
              <h3 className="text-2xl font-black text-white font-sans">
                Thank You, {fullName}!
              </h3>
              <p className="text-xs text-zinc-400">
                Booking Reference ID: <strong className="text-amber-400 font-mono">{bookingRef}</strong>
              </p>
            </div>

            <div className="bg-zinc-950 p-4 rounded-xl border border-zinc-800 text-xs space-y-2 text-zinc-300">
              <div className="flex justify-between border-b border-zinc-800/80 pb-1.5">
                <span className="text-zinc-500">Vehicle:</span>
                <span className="font-bold text-white">{desiredVehicle}</span>
              </div>
              <div className="flex justify-between border-b border-zinc-800/80 pb-1.5">
                <span className="text-zinc-500">Dates:</span>
                <span className="font-semibold text-zinc-200">{rentalDate || "Pending"} to {returnDate || "Pending"}</span>
              </div>
              <div className="flex justify-between border-b border-zinc-800/80 pb-1.5">
                <span className="text-zinc-500">Service Type:</span>
                <span className="font-semibold text-amber-400">{chauffeurPreference}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-500">Pickup Location:</span>
                <span className="font-semibold text-zinc-200 truncate max-w-[200px]">{pickupLocation}</span>
              </div>
            </div>

            <p className="text-xs text-zinc-400 leading-relaxed">
              Our Victoria Island VIP concierge team is reviewing your reservation. For immediate priority confirmation, you can also send this booking directly to our WhatsApp dispatch.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                onClick={handleWhatsAppDirect}
                className="flex-1 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs py-3 px-4 rounded-xl flex items-center justify-center space-x-2 transition-colors cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Send to WhatsApp</span>
              </button>
              <button
                onClick={() => setIsSubmitted(false)}
                className="flex-1 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 font-bold text-xs py-3 px-4 rounded-xl transition-colors cursor-pointer"
              >
                Close Window
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
