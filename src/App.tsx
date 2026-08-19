import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ForkliftInventory from "./components/ForkliftInventory";
import WhyChooseUs from "./components/WhyChooseUs";
import InquiryWizard from "./components/InquiryWizard";
import AboutUs from "./components/AboutUs";
import SpecificationGuide from "./components/SpecificationGuide";
import Testimonials from "./components/Testimonials";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import { MessageSquare } from "lucide-react";
import { getWhatsAppUrl } from "./data";

export default function App() {
  const [selectedForkliftForInquiry, setSelectedForkliftForInquiry] = useState("");

  const handleSectionScroll = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80; // height of navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const handleInquireShortcut = (forkliftName: string) => {
    setSelectedForkliftForInquiry(forkliftName);
    handleSectionScroll("quote");
  };

  return (
    <div
      id="app-root"
      className="min-h-screen bg-zinc-950 font-sans text-zinc-300 antialiased selection:bg-amber-500 selection:text-zinc-950"
    >
      {/* Floating Sticky Navigation Bar */}
      <Navbar
        onInquiryClick={() => handleSectionScroll("quote")}
        onSectionScroll={handleSectionScroll}
      />

      {/* Hero Intro Section */}
      <Hero
        onInventoryClick={() => handleSectionScroll("inventory")}
        onContactClick={() => handleSectionScroll("contact")}
      />

      {/* Available Forklift Inventory Showcase */}
      <ForkliftInventory onInquireWithForklift={handleInquireShortcut} />

      {/* Why Choose Tunnex Mega Investment */}
      <WhyChooseUs />

      {/* Multi-step Interactive Price & Stock Inquiry Wizard */}
      <InquiryWizard initialForklift={selectedForkliftForInquiry} />

      {/* About Tunnex Mega Investment */}
      <AboutUs />

      {/* Forklift Selection & Specification Guide */}
      <SpecificationGuide />

      {/* Customer / Client Feedback */}
      <Testimonials />

      {/* Contact card, business hours, and Lagos Google Map */}
      <ContactSection />

      {/* Footer */}
      <Footer onSectionScroll={handleSectionScroll} />

      {/* Persistent Floating WhatsApp Quick Button */}
      <a
        id="floating-whatsapp-btn"
        href={getWhatsAppUrl("Hello Tunnex Mega Investment, I'd like to make an inquiry about available forklifts.")}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 bg-emerald-600 hover:bg-emerald-500 text-white p-3.5 sm:px-4 sm:py-3 rounded-full shadow-2xl flex items-center space-x-2 border border-emerald-400/40 hover:scale-105 transition-all duration-200 group"
        aria-label="Chat with Tunnex Mega Investment on WhatsApp"
      >
        <MessageSquare className="w-5 h-5 group-hover:rotate-12 transition-transform" />
        <span className="hidden sm:inline text-xs font-bold font-sans">
          WhatsApp Sales
        </span>
      </a>
    </div>
  );
}
