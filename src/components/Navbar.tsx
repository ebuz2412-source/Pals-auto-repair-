import React, { useState, useEffect } from "react";
import { MapPin, Menu, X, MessageSquare, PhoneCall, Sparkles, Car } from "lucide-react";
import { BUSINESS_INFO, getWhatsAppUrl } from "../data";

interface NavbarProps {
  onRentClick: () => void;
  onSectionScroll: (sectionId: string) => void;
}

export default function Navbar({ onRentClick, onSectionScroll }: NavbarProps) {
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
    { label: "Our Fleet", target: "fleet" },
    { label: "Services", target: "services" },
    { label: "Reserve a Car", target: "booking" },
    { label: "Why Choose Us", target: "why-us" },
    { label: "VIP Reviews", target: "testimonials" },
    { label: "Contact & Location", target: "contact" },
  ];

  const handleNavClick = (target: string) => {
    setIsOpen(false);
    onSectionScroll(target);
  };

  return (
    <header
      id="luxury-site-header"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-zinc-950/95 backdrop-blur-md shadow-2xl border-b border-zinc-800/80 py-3"
          : "bg-gradient-to-b from-zinc-950/95 via-zinc-950/75 to-transparent py-4"
      }`}
    >
      {/* Top Luxury Address & VIP Concierge Bar */}
      <div className="hidden lg:block border-b border-zinc-800/50 pb-2 mb-2.5 px-6 max-w-7xl mx-auto">
        <div className="flex justify-between items-center text-xs font-sans text-zinc-400">
          <div className="flex items-center space-x-6">
            <span className="flex items-center text-zinc-300 font-medium">
              <MapPin className="w-3.5 h-3.5 text-amber-400 mr-1.5 flex-shrink-0" />
              {BUSINESS_INFO.address}
            </span>
            <span className="flex items-center text-amber-400/90 font-mono text-[11px] tracking-wider uppercase">
              <Sparkles className="w-3 h-3 text-amber-400 mr-1.5 flex-shrink-0" />
              24/7 VIP Concierge & Chauffeur Services in Victoria Island
            </span>
          </div>
          <div className="flex items-center space-x-5">
            <a
              id="topbar-call-link"
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="flex items-center text-zinc-300 hover:text-amber-400 transition-colors font-medium text-xs"
            >
              <PhoneCall className="w-3.5 h-3.5 mr-1.5 text-amber-400" />
              <span>{BUSINESS_INFO.phone}</span>
            </a>
            <a
              id="topbar-whatsapp-link"
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-emerald-400 hover:text-emerald-300 transition-colors font-semibold text-xs"
            >
              <MessageSquare className="w-3.5 h-3.5 mr-1.5 text-emerald-400" />
              <span>WhatsApp VIP Desk</span>
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Brand */}
          <div
            id="nav-brand-logo"
            className="flex items-center space-x-3 cursor-pointer group"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 via-amber-500 to-yellow-600 text-zinc-950 flex items-center justify-center font-serif font-black text-xl shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform duration-300">
              <Car className="w-5 h-5 text-zinc-950" />
            </div>
            <div>
              <span className="block text-lg sm:text-xl font-extrabold tracking-tight text-white font-sans uppercase">
                LUXURY CAR RENTALS
              </span>
              <span className="block text-[10px] font-mono tracking-widest text-amber-400 uppercase font-semibold">
                VICTORIA ISLAND • LAGOS
              </span>
            </div>
          </div>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.target}
                id={`nav-link-${item.target}`}
                onClick={() => handleNavClick(item.target)}
                className="px-3.5 py-2 text-xs font-semibold tracking-wider text-zinc-300 hover:text-amber-400 hover:bg-zinc-900/60 rounded-lg transition-all duration-150 cursor-pointer"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center space-x-3">
            <a
              id="navbar-call-btn"
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="inline-flex items-center space-x-1.5 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 hover:border-zinc-500 text-zinc-200 px-3.5 py-2 rounded-xl text-xs font-semibold font-sans transition-all duration-150"
            >
              <PhoneCall className="w-3.5 h-3.5 text-amber-400" />
              <span>Call Now</span>
            </a>
            <a
              id="navbar-whatsapp-btn"
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 bg-emerald-600/20 hover:bg-emerald-600/30 border border-emerald-500/40 text-emerald-400 px-3.5 py-2 rounded-xl text-xs font-bold font-sans transition-all duration-150"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
              <span>WhatsApp</span>
            </a>
            <button
              id="navbar-rent-btn"
              onClick={onRentClick}
              className="bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 text-zinc-950 px-4 py-2 rounded-xl text-xs font-black font-sans uppercase tracking-wider shadow-lg shadow-amber-500/20 hover:shadow-amber-500/30 transition-all duration-150 transform active:scale-95 cursor-pointer"
            >
              Rent a Car
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex items-center space-x-2">
            <a
              id="navbar-mobile-whatsapp-btn"
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-emerald-400 hover:text-white bg-zinc-900 border border-emerald-500/30 rounded-xl"
              aria-label="WhatsApp Us"
            >
              <MessageSquare className="w-5 h-5" />
            </a>
            <button
              id="mobile-menu-btn"
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-xl text-zinc-300 hover:text-white hover:bg-zinc-800 focus:outline-none transition-colors duration-150"
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div
          id="mobile-nav-dropdown"
          className="lg:hidden bg-zinc-950/98 backdrop-blur-xl border-b border-zinc-800 animate-in fade-in slide-in-from-top duration-200"
        >
          <div className="px-4 pt-3 pb-6 space-y-1.5">
            {navItems.map((item) => (
              <button
                key={item.target}
                id={`mobile-nav-${item.target}`}
                onClick={() => handleNavClick(item.target)}
                className="block w-full text-left px-4 py-2.5 rounded-xl text-sm font-semibold text-zinc-200 hover:text-amber-400 hover:bg-zinc-900 transition-colors"
              >
                {item.label}
              </button>
            ))}
            <div className="pt-4 border-t border-zinc-800 space-y-3">
              <div className="flex items-start text-xs font-sans text-zinc-400 px-2">
                <MapPin className="w-4 h-4 text-amber-400 mr-2 flex-shrink-0 mt-0.5" />
                <span>{BUSINESS_INFO.address}</span>
              </div>
              <div className="grid grid-cols-3 gap-2 pt-2">
                <a
                  id="mobile-menu-call"
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="inline-flex items-center justify-center space-x-1 bg-zinc-900 border border-zinc-700 text-zinc-200 py-2.5 rounded-xl text-xs font-bold"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-amber-400" />
                  <span>Call</span>
                </a>
                <a
                  id="mobile-menu-wa"
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center space-x-1 bg-emerald-600 text-white py-2.5 rounded-xl text-xs font-bold"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
                <button
                  id="mobile-menu-rent"
                  onClick={() => {
                    setIsOpen(false);
                    onRentClick();
                  }}
                  className="bg-amber-500 text-zinc-950 py-2.5 rounded-xl text-xs font-black uppercase text-center"
                >
                  Rent Car
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
