import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FleetSection from "./components/FleetSection";
import ServicesSection from "./components/ServicesSection";
import BookingInquirySection from "./components/BookingInquirySection";
import WhyChooseUs from "./components/WhyChooseUs";
import Testimonials from "./components/Testimonials";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import { MessageSquare, PhoneCall } from "lucide-react";
import { BUSINESS_INFO, getWhatsAppUrl } from "./data";

export default function App() {
  const [selectedVehicleForBooking, setSelectedVehicleForBooking] = useState<string | undefined>(undefined);
  const [selectedServiceForBooking, setSelectedServiceForBooking] = useState<string | undefined>(undefined);

  const handleSectionScroll = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const handleSelectVehicleForBooking = (vehicleName: string, category: string) => {
    setSelectedVehicleForBooking(`${vehicleName} (${category})`);
    handleSectionScroll("booking");
  };

  const handleSelectServiceForBooking = (serviceTitle: string) => {
    setSelectedServiceForBooking(serviceTitle);
    handleSectionScroll("booking");
  };

  return (
    <div
      id="app-root"
      className="min-h-screen bg-zinc-950 font-sans text-zinc-300 antialiased selection:bg-amber-500 selection:text-zinc-950"
    >
      {/* Sticky Luxury Navbar */}
      <Navbar
        onRentClick={() => handleSectionScroll("booking")}
        onSectionScroll={handleSectionScroll}
      />

      {/* Hero Section */}
      <Hero
        onRentClick={() => handleSectionScroll("booking")}
        onFleetClick={() => handleSectionScroll("fleet")}
        onServicesClick={() => handleSectionScroll("services")}
        onContactClick={() => handleSectionScroll("contact")}
      />

      {/* Luxury Fleet Section */}
      <FleetSection onSelectVehicleForBooking={handleSelectVehicleForBooking} />

      {/* Luxury Services Section */}
      <ServicesSection onSelectServiceForBooking={handleSelectServiceForBooking} />

      {/* Booking / Inquiry Section */}
      <BookingInquirySection
        initialVehicle={selectedVehicleForBooking}
        initialService={selectedServiceForBooking}
      />

      {/* Why Choose Us & Standards */}
      <WhyChooseUs />

      {/* Client Testimonials */}
      <Testimonials />

      {/* Contact Section & Victoria Island Map */}
      <ContactSection />

      {/* Footer */}
      <Footer onSectionScroll={handleSectionScroll} />

      {/* Floating Action Buttons: Call Now & WhatsApp */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end space-y-3">
        {/* Quick Call Floating Button */}
        <a
          id="floating-call-btn"
          href={`tel:${BUSINESS_INFO.phoneRaw}`}
          className="bg-zinc-900/90 hover:bg-zinc-800 text-amber-400 p-3 sm:px-4 sm:py-2.5 rounded-full shadow-2xl flex items-center space-x-2 border border-amber-500/40 hover:scale-105 transition-all duration-200"
          aria-label="Call Luxury Car Rentals"
        >
          <PhoneCall className="w-4 h-4 text-amber-400" />
          <span className="hidden sm:inline text-xs font-bold font-sans text-white">
            Call Concierge
          </span>
        </a>

        {/* WhatsApp Floating Button */}
        <a
          id="floating-whatsapp-btn"
          href={getWhatsAppUrl("Hello Luxury Car Rentals, I would like to inquire about reserving a luxury vehicle from your Victoria Island fleet.")}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-emerald-600 hover:bg-emerald-500 text-white p-3.5 sm:px-4 sm:py-3 rounded-full shadow-2xl flex items-center space-x-2 border border-emerald-400/40 hover:scale-105 transition-all duration-200 group"
          aria-label="Chat with Luxury Car Rentals on WhatsApp"
        >
          <MessageSquare className="w-5 h-5 group-hover:rotate-12 transition-transform" />
          <span className="hidden sm:inline text-xs font-bold font-sans">
            WhatsApp VIP Desk
          </span>
        </a>
      </div>
    </div>
  );
}
