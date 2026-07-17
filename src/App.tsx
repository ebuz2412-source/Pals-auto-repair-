import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import QuoteWizard from "./components/QuoteWizard";
import WhyChooseUs from "./components/WhyChooseUs";
import Testimonials from "./components/Testimonials";
import AboutUs from "./components/AboutUs";
import BlueprintGallery from "./components/BlueprintGallery";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function App() {
  const [selectedServiceForQuote, setSelectedServiceForQuote] = useState("");

  const handleSectionScroll = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80; // height of navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const handleBookServiceShortcut = (serviceTitle: string) => {
    setSelectedServiceForQuote(serviceTitle);
    handleSectionScroll("quote");
  };

  return (
    <div id="app-root" className="min-h-screen bg-zinc-950 font-sans text-zinc-300 antialiased selection:bg-red-500 selection:text-white">
      {/* Floating Sticky Navigation Bar */}
      <Navbar
        onBookClick={() => handleSectionScroll("quote")}
        onSectionScroll={handleSectionScroll}
      />

      {/* Hero Intro Section */}
      <Hero
        onQuoteClick={() => handleSectionScroll("quote")}
        onServicesClick={() => handleSectionScroll("services")}
      />

      {/* Detailed Services list */}
      <Services onQuoteClickWithService={handleBookServiceShortcut} />

      {/* Why Choose Us trust factors */}
      <WhyChooseUs />

      {/* Multi-step Interactive Quote Estimator / Appointment Scheduler */}
      <QuoteWizard initialService={selectedServiceForQuote} />

      {/* Customer Testimonials reviews */}
      <Testimonials />

      {/* About the workshop and staff */}
      <AboutUs />

      {/* Interactive Vector Blueprints (replaces AI-generated imagery) */}
      <BlueprintGallery />

      {/* Contact card, business hours and real Google Map */}
      <ContactSection />

      {/* Brand Footer with regulatory seals (AMVIC, Red Seal) */}
      <Footer onSectionScroll={handleSectionScroll} />
    </div>
  );
}
