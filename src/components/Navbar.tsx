import React, { useState, useEffect } from "react";
import { MapPin, Menu, X, MessageSquare, PhoneCall, Truck, ShieldCheck } from "lucide-react";
import { TUNNEX_BUSINESS_INFO, getWhatsAppUrl } from "../data";

interface NavbarProps {
  onInquiryClick: () => void;
  onSectionScroll: (sectionId: string) => void;
}

export default function Navbar({ onInquiryClick, onSectionScroll }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Forklift Inventory", target: "inventory" },
    { label: "Why Choose Us", target: "why-choose-us" },
    { label: "Specifications", target: "specs" },
    { label: "About Tunnex", target: "about" },
    { label: "Request Quote", target: "inquiry" },
    { label: "Contact & Location", target: "contact" },
  ];

  const handleNavClick = (target: string) => {
    setIsOpen(false);
    onSectionScroll(target);
  };

  return (
    <header
      id="site-header"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-zinc-950/95 backdrop-blur-md shadow-xl border-b border-zinc-800 py-3"
          : "bg-gradient-to-b from-zinc-950/90 via-zinc-950/70 to-transparent py-4"
      }`}
    >
      {/* Top Quick Info bar - hidden on smaller screens */}
      <div className="hidden lg:block border-b border-zinc-800/60 pb-2 mb-3 px-6 max-w-7xl mx-auto">
        <div className="flex justify-between items-center text-xs font-sans text-zinc-400">
          <div className="flex items-center space-x-6">
            <span className="flex items-center text-zinc-300">
              <MapPin className="w-3.5 h-3.5 text-amber-500 mr-1.5 flex-shrink-0" />
              {TUNNEX_BUSINESS_INFO.addressShort}
            </span>
            <span className="flex items-center text-zinc-400">
              <Truck className="w-3.5 h-3.5 text-amber-500 mr-1.5 flex-shrink-0" />
              Forklift Dealer & Industrial Material Handling Solutions
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <a
              id="topbar-whatsapp-link"
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-emerald-400 hover:text-emerald-300 transition-colors font-medium text-xs"
            >
              <MessageSquare className="w-3.5 h-3.5 mr-1 text-emerald-400" />
              <span>Direct WhatsApp Inquiry</span>
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div 
            id="nav-logo"
            className="flex items-center space-x-3 cursor-pointer group"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <div className="w-10 h-10 bg-amber-500 text-zinc-950 rounded-lg flex items-center justify-center font-mono font-extrabold text-xl tracking-wider transform group-hover:scale-105 transition-transform duration-200 shadow-md shadow-amber-500/20">
              T
            </div>
            <div>
              <span className="block text-lg font-black font-sans tracking-tight text-white leading-none">
                TUNNEX MEGA
              </span>
              <span className="block text-[11px] font-bold font-mono tracking-wider text-amber-400 uppercase leading-none mt-1">
                FORKLIFT DEALER • LAGOS
              </span>
            </div>
          </div>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex space-x-1">
            {navItems.map((item) => (
              <button
                key={item.target}
                id={`nav-link-${item.target}`}
                onClick={() => handleNavClick(item.target)}
                className="px-3 py-2 text-xs font-semibold uppercase tracking-wider text-zinc-300 hover:text-amber-400 hover:bg-zinc-900/60 rounded-md transition-colors duration-150"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center space-x-3">
            <a
              id="navbar-whatsapp-btn"
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 bg-emerald-600/20 hover:bg-emerald-600/30 border border-emerald-500/40 text-emerald-400 px-3.5 py-2 rounded-lg text-xs font-bold font-sans transition-all duration-150"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
              <span>WhatsApp</span>
            </a>
            <button
              id="navbar-cta-btn"
              onClick={onInquiryClick}
              className="bg-amber-500 hover:bg-amber-400 text-zinc-950 px-4 py-2 rounded-lg text-xs font-extrabold font-sans uppercase tracking-wider shadow-lg shadow-amber-500/20 hover:shadow-amber-500/30 transition-all duration-150 transform active:scale-95"
            >
              Inquire / Quote
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center space-x-2">
            <a
              id="navbar-mobile-whatsapp"
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-emerald-400 hover:text-white bg-zinc-900 border border-emerald-500/30 rounded-lg"
              aria-label="WhatsApp Us"
            >
              <MessageSquare className="w-5 h-5" />
            </a>
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-zinc-300 hover:text-white hover:bg-zinc-800 focus:outline-none transition-colors duration-150"
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div 
          id="mobile-nav-menu"
          className="lg:hidden bg-zinc-950 border-b border-zinc-800 animate-in fade-in slide-in-from-top duration-200"
        >
          <div className="px-3 pt-3 pb-5 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.target}
                id={`mobile-nav-link-${item.target}`}
                onClick={() => handleNavClick(item.target)}
                className="block w-full text-left px-4 py-2.5 rounded-lg text-sm font-semibold text-zinc-200 hover:text-amber-400 hover:bg-zinc-900 transition-colors"
              >
                {item.label}
              </button>
            ))}
            <div className="pt-4 pb-2 border-t border-zinc-800 px-3 space-y-3">
              <div className="flex items-start text-xs font-sans text-zinc-400">
                <MapPin className="w-4 h-4 text-amber-500 mr-2 flex-shrink-0 mt-0.5" />
                <span>{TUNNEX_BUSINESS_INFO.address}</span>
              </div>
              <div className="grid grid-cols-2 gap-2 pt-2">
                <a
                  id="mobile-whatsapp-btn"
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center space-x-1.5 bg-emerald-600 hover:bg-emerald-700 text-white px-3 py-2.5 rounded-lg text-xs font-bold text-center"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp Us</span>
                </a>
                <button
                  id="mobile-inquiry-btn"
                  onClick={() => {
                    setIsOpen(false);
                    onInquiryClick();
                  }}
                  className="bg-amber-500 hover:bg-amber-400 text-zinc-950 px-3 py-2.5 rounded-lg text-xs font-extrabold uppercase text-center"
                >
                  Get a Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
