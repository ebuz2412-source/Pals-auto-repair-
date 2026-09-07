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
import { MessageSquare, Phone, Compass, Calculator } from "lucide-react";
import { BUSINESS_INFO } from "./data";

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

  const handleOpenQuote = (serviceTitle?: string) => {
    if (serviceTitle) {
      setPreselectedService(serviceTitle);
    }
    handleSectionScroll("calculator");
  };

  return (
    <div
      id="glass-and-mirror-vendor-app"
      className="min-h-screen bg-[#0B0F17] font-sans text-slate-100 antialiased selection:bg-sky-500 selection:text-white"
    >
      {/* Sticky Top Navigation */}
      <Navbar
        onSectionScroll={handleSectionScroll}
        onRequestQuote={() => handleOpenQuote()}
      />

      {/* Hero Section */}
      <Hero
        onExploreServices={() => handleSectionScroll("services")}
        onRequestQuote={() => handleOpenQuote()}
        onViewProjects={() => handleSectionScroll("projects")}
      />

      {/* About Section */}
      <AboutSection
        onRequestQuote={() => handleOpenQuote()}
        onExploreServices={() => handleSectionScroll("services")}
      />

      {/* Services Section */}
      <ServicesSection
        onSelectServiceForQuote={(serviceTitle) => handleOpenQuote(serviceTitle)}
      />

      {/* Projects / Portfolio Section */}
      <PortfolioSection
        onRequestQuote={() => handleOpenQuote()}
      />

      {/* Craftsmanship & Finishes Gallery */}
      <GallerySection />

      {/* Why Choose Us */}
      <WhyChooseUsSection
        onRequestQuote={() => handleOpenQuote()}
      />

      {/* Instant Glass Sizing & Quote Calculator */}
      <ConsultationSection
        preselectedService={preselectedService}
      />

      {/* Contact & Location */}
      <ContactSection />

      {/* Footer */}
      <Footer
        onSectionScroll={handleSectionScroll}
        onRequestQuote={() => handleOpenQuote()}
      />

      {/* Floating Quick Action Contact Bar */}
      <div 
        id="floating-quick-actions"
        className="fixed bottom-5 right-4 sm:right-6 z-40 flex items-center space-x-2.5"
      >
        {/* Directions Quick Action */}
        <a
          id="floating-directions-btn"
          href={BUSINESS_INFO.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:flex items-center space-x-2 bg-slate-900/90 hover:bg-slate-800 text-slate-200 px-3.5 py-2.5 rounded-full shadow-xl border border-white/20 backdrop-blur-md transition-transform hover:scale-105"
          aria-label="Directions to 52 Bauri St, Mushin"
        >
          <Compass className="w-4 h-4 text-sky-400" />
          <span className="text-xs font-semibold">Directions</span>
        </a>

        {/* Call Quick Action */}
        <a
          id="floating-call-btn"
          href={BUSINESS_INFO.phoneLink}
          className="flex items-center space-x-2 bg-slate-900/95 hover:bg-slate-800 text-white px-3.5 py-2.5 rounded-full shadow-xl border border-white/20 backdrop-blur-md transition-transform hover:scale-105"
          aria-label="Call Glass and Mirror Vendor"
        >
          <Phone className="w-4 h-4 text-sky-400" />
          <span className="hidden sm:inline text-xs font-semibold">Call 24/7</span>
        </a>

        {/* WhatsApp Quick Action Button */}
        <a
          id="floating-whatsapp-btn"
          href={BUSINESS_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 bg-emerald-600 hover:bg-emerald-500 text-white p-3 sm:px-4 sm:py-2.5 rounded-full shadow-2xl shadow-emerald-600/40 border border-emerald-400/40 transition-transform hover:scale-105 cursor-pointer"
          aria-label="Chat on WhatsApp with Glass and Mirror Vendor"
        >
          <MessageSquare className="w-5 h-5 text-white" />
          <span className="text-xs font-semibold uppercase tracking-wider hidden sm:inline">
            WhatsApp
          </span>
        </a>
      </div>
    </div>
  );
}
