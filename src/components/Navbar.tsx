import React, { useState, useEffect } from "react";
import { 
  Menu, 
  X, 
  MapPin, 
  Phone, 
  MessageSquare, 
  Calendar, 
  Star,
  Sparkles
} from "lucide-react";
import { ESTIE_BUSINESS_INFO, getWhatsAppUrl } from "../data";

interface NavbarProps {
  onSectionScroll: (sectionId: string) => void;
  onBookConsultation: () => void;
}

export default function Navbar({ onSectionScroll, onBookConsultation }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", id: "hero" },
    { label: "About", id: "about" },
    { label: "Services", id: "services" },
    { label: "Portfolio", id: "portfolio" },
    { label: "Gallery", id: "gallery" },
    { label: "Contact", id: "contact" },
  ];

  const handleNavClick = (id: string) => {
    onSectionScroll(id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#FAF8F5]/95 backdrop-blur-md shadow-sm border-b border-[#E7E2D8] py-3.5"
          : "bg-[#FAF8F5]/80 backdrop-blur-sm border-b border-[#EFECE6] py-5"
      }`}
    >
      {/* Top Location & Rating Strip */}
      <div className="hidden lg:block border-b border-[#EFECE6] pb-2 mb-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center text-[11px] text-[#7D7569]">
          <div className="flex items-center space-x-4">
            <span className="flex items-center space-x-1">
              <MapPin className="w-3.5 h-3.5 text-[#B5905C]" />
              <span>Km 46 Lekki-Epe Express Way, Beside Safeway Hospital, Sangotedo, Lagos</span>
            </span>
            <span className="inline-block w-1 h-1 rounded-full bg-[#D6CABE]"></span>
            <span className="flex items-center space-x-1 text-[#1C1917] font-medium">
              <Star className="w-3.5 h-3.5 fill-[#B5905C] text-[#B5905C]" />
              <span>5.0 Star Rating (4 Verified Reviews)</span>
            </span>
          </div>

          <div className="flex items-center space-x-4">
            <a
              href={`tel:${ESTIE_BUSINESS_INFO.phoneRaw}`}
              className="hover:text-[#B5905C] transition-colors flex items-center space-x-1"
            >
              <Phone className="w-3 h-3 text-[#B5905C]" />
              <span>{ESTIE_BUSINESS_INFO.phone}</span>
            </a>
            <span className="text-[#D6CABE]">|</span>
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#B5905C] transition-colors flex items-center space-x-1 text-[#2E7D32]"
            >
              <MessageSquare className="w-3 h-3" />
              <span>WhatsApp Showroom</span>
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Brand Identity */}
          <div 
            onClick={() => handleNavClick("hero")}
            className="cursor-pointer group flex items-center space-x-3 text-left"
          >
            <div className="w-10 h-10 rounded-sm bg-[#1C1917] text-[#FAF8F5] flex items-center justify-center font-serif text-lg tracking-widest border border-[#B5905C]/40 shadow-sm group-hover:border-[#B5905C] transition-colors">
              E
            </div>
            <div>
              <span className="block font-serif text-xl sm:text-2xl font-bold tracking-[0.18em] text-[#1C1917] leading-none uppercase">
                ESTIE INTERIOR
              </span>
              <span className="block text-[9px] font-sans tracking-[0.25em] text-[#B5905C] uppercase font-semibold mt-1">
                Luxury Spaces • Sangotedo, Lagos
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8 text-[13px] tracking-wide font-medium text-[#4A453E]">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="hover:text-[#B5905C] transition-colors uppercase tracking-[0.12em] py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#B5905C] hover:after:w-full after:transition-all cursor-pointer"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Action CTA: Book a Consultation */}
          <div className="hidden sm:flex items-center space-x-3">
            <button
              id="nav-book-consultation-btn"
              onClick={onBookConsultation}
              className="bg-[#1C1917] hover:bg-[#2B2723] text-[#FAF8F5] border border-[#1C1917] hover:border-[#B5905C] px-5 py-2.5 rounded-none text-xs tracking-[0.14em] font-semibold uppercase transition-all duration-200 shadow-sm cursor-pointer flex items-center space-x-2"
            >
              <Calendar className="w-3.5 h-3.5 text-[#B5905C]" />
              <span>Book a Consultation</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#1C1917] hover:text-[#B5905C] focus:outline-none cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF8F5] border-b border-[#E7E2D8] px-4 pt-4 pb-6 space-y-4 shadow-lg animate-in slide-in-from-top-4 duration-200">
          <div className="space-y-1 pb-3 border-b border-[#EFECE6]">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="block w-full text-left py-2.5 text-sm font-medium uppercase tracking-[0.12em] text-[#1C1917] hover:text-[#B5905C]"
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="space-y-2.5 pt-2">
            <button
              onClick={() => {
                onBookConsultation();
                setMobileMenuOpen(false);
              }}
              className="w-full bg-[#1C1917] text-[#FAF8F5] py-3 text-xs tracking-[0.14em] font-semibold uppercase text-center flex items-center justify-center space-x-2"
            >
              <Calendar className="w-4 h-4 text-[#B5905C]" />
              <span>Book a Consultation</span>
            </button>

            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#2E7D32] text-white py-3 text-xs tracking-[0.14em] font-semibold uppercase text-center flex items-center justify-center space-x-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>

          <div className="text-[11px] text-[#7D7569] pt-2 text-center">
            Km 46 Lekki-Epe Express Way, Beside Safeway Hospital, Sangotedo, Lagos
          </div>
        </div>
      )}
    </header>
  );
}
