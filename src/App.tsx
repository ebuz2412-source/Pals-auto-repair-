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
import { Calendar } from "lucide-react";

export default function App() {
  const [preselectedService, setPreselectedService] = useState<string | undefined>(undefined);

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

  const handleOpenConsultation = (serviceTitle?: string) => {
    if (serviceTitle) {
      setPreselectedService(serviceTitle);
    }
    handleSectionScroll("consultation");
  };

  return (
    <div
      id="spacebound-interiors-app"
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

      {/* 4 Core Services: Bedroom, Cabinetry & Hardware, Commercial, Dining Room */}
      <ServicesSection
        onSelectServiceForConsultation={(serviceTitle) => handleOpenConsultation(serviceTitle)}
      />

      {/* Selected Project Portfolio */}
      <PortfolioSection
        onBookConsultation={() => handleOpenConsultation()}
      />

      {/* Visual Design & Craftsmanship Gallery */}
      <GallerySection />

      {/* Why Choose Us & Verified 5.0 Star Client Review */}
      <WhyChooseUsSection />

      {/* Interactive Consultation Booking Wizard */}
      <ConsultationSection
        preselectedService={preselectedService}
      />

      {/* Studio Location & Interactive Ajah Map */}
      <ContactSection />

      {/* Luxury Footer */}
      <Footer
        onSectionScroll={handleSectionScroll}
        onBookConsultation={() => handleOpenConsultation()}
      />

      {/* Floating Quick Consultation Access Pill */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          id="floating-consultation-btn"
          onClick={() => handleOpenConsultation()}
          className="group flex items-center bg-[#1C1917] hover:bg-[#2B2723] text-[#FAF8F5] p-3 sm:px-4 sm:py-3 rounded-full shadow-xl transition-all duration-300 hover:scale-105 border border-[#B5905C]/60 cursor-pointer"
          aria-label="Request Design Consultation"
        >
          <Calendar className="w-5 h-5 text-[#B5905C] flex-shrink-0" />
          <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out font-sans text-xs font-semibold uppercase tracking-wider pl-0 group-hover:pl-2.5">
            Book Consultation
          </span>
        </button>
      </div>
    </div>
  );
}
