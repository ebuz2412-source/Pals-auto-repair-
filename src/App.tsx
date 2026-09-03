import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import PortfolioSection from "./components/PortfolioSection";
import GallerySection from "./components/GallerySection";
import WhyChooseUsSection from "./components/WhyChooseUsSection";
import ConsultationSection from "./components/ConsultationSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import { MessageSquare, Phone } from "lucide-react";
import { ESTIE_BUSINESS_INFO, getWhatsAppUrl } from "./data";

export default function App() {
  const [preselectedService, setPreselectedService] = useState<string | undefined>(undefined);

  const handleSectionScroll = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 90;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const handleOpenConsultation = (serviceTitle?: string) => {
    if (serviceTitle) {
      setPreselectedService(serviceTitle);
    }
    handleSectionScroll("consultation");
  };

  return (
    <div
      id="estie-interior-app"
      className="min-h-screen bg-[#FAF8F5] font-sans text-[#1C1917] antialiased selection:bg-[#B5905C] selection:text-white"
    >
      {/* Sticky Top Navigation */}
      <Navbar
        onSectionScroll={handleSectionScroll}
        onBookConsultation={() => handleOpenConsultation()}
      />

      {/* Hero Section */}
      <Hero
        onExploreServices={() => handleSectionScroll("services")}
        onBookConsultation={() => handleOpenConsultation()}
        onViewPortfolio={() => handleSectionScroll("portfolio")}
      />

      {/* About & Studio Craftsmanship */}
      <AboutSection
        onBookConsultation={() => handleOpenConsultation()}
        onExploreServices={() => handleSectionScroll("services")}
      />

      {/* 7 Core Services Section */}
      <ServicesSection
        onSelectServiceForConsultation={(serviceTitle) => handleOpenConsultation(serviceTitle)}
      />

      {/* Portfolio of Curated Lagos Spaces */}
      <PortfolioSection
        onBookConsultation={() => handleOpenConsultation()}
      />

      {/* Visual Design & Window Treatment Gallery with Lightbox */}
      <GallerySection />

      {/* Why Choose Us & Verified 5.0 Star Client Reviews */}
      <WhyChooseUsSection />

      {/* Interactive Consultation Booking Wizard */}
      <ConsultationSection
        preselectedService={preselectedService}
      />

      {/* Contact, Directions & Interactive Sangotedo Map */}
      <ContactSection />

      {/* Luxury Footer */}
      <Footer
        onSectionScroll={handleSectionScroll}
        onBookConsultation={() => handleOpenConsultation()}
      />

      {/* Floating Fast-Access WhatsApp Concierge Button */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end space-y-3">
        <a
          id="floating-whatsapp-btn"
          href={getWhatsAppUrl("Hello ESTIE INTERIOR, I would like to book a showroom consultation or ask about window treatments.")}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center bg-[#2E7D32] hover:bg-[#1B5E20] text-white p-3 sm:px-4 sm:py-3 rounded-full shadow-xl transition-all duration-300 hover:scale-105"
          aria-label="Chat with ESTIE INTERIOR on WhatsApp"
        >
          <MessageSquare className="w-5 h-5 flex-shrink-0" />
          <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out font-sans text-xs font-semibold uppercase tracking-wider pl-0 group-hover:pl-2.5">
            Chat With Studio
          </span>
        </a>

        {/* Quick Phone Call Pill on Mobile */}
        <a
          href={`tel:${ESTIE_BUSINESS_INFO.phoneRaw}`}
          className="sm:hidden flex items-center justify-center w-10 h-10 bg-[#1C1917] text-[#FAF8F5] rounded-full shadow-lg border border-[#B5905C]/50"
          aria-label="Call ESTIE INTERIOR"
        >
          <Phone className="w-4 h-4 text-[#B5905C]" />
        </a>
      </div>
    </div>
  );
}
