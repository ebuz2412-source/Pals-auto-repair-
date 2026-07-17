import React, { useState, useEffect } from "react";
import { Phone, MapPin, Menu, X, Shield, Clock } from "lucide-react";
import { CALGARY_LOCATION } from "../data";

interface NavbarProps {
  onBookClick: () => void;
  onSectionScroll: (sectionId: string) => void;
}

export default function Navbar({ onBookClick, onSectionScroll }: NavbarProps) {
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
    { label: "Services", target: "services" },
    { label: "Why Choose Us", target: "why-choose-us" },
    { label: "Quote Estimator", target: "quote" },
    { label: "Testimonials", target: "testimonials" },
    { label: "About", target: "about" },
    { label: "Interactive Blueprint", target: "gallery" },
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
          ? "bg-zinc-950/95 backdrop-blur-md shadow-lg border-b border-zinc-800 py-3"
          : "bg-gradient-to-b from-zinc-950/80 to-transparent py-5"
      }`}
    >
      {/* Top Quick Info bar - hidden on smaller screens, collapses nicely */}
      <div className="hidden lg:block border-b border-zinc-800/50 pb-2 mb-3 px-6 max-w-7xl mx-auto">
        <div className="flex justify-between items-center text-xs font-mono text-zinc-400">
          <div className="flex items-center space-x-6">
            <span className="flex items-center">
              <MapPin className="w-3.5 h-3.5 text-red-500 mr-1.5" />
              {CALGARY_LOCATION.address}
            </span>
            <span className="flex items-center">
              <Clock className="w-3.5 h-3.5 text-zinc-400 mr-1.5" />
              Mon-Fri 7:30 AM - 5:30 PM | Sat 8 AM - 1 PM
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="flex items-center text-red-400 font-semibold animate-pulse">
              <Shield className="w-3.5 h-3.5 mr-1" />
              Red Seal Certified Team
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div 
            id="nav-logo"
            className="flex items-center space-x-2 cursor-pointer group"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <div className="w-10 h-10 bg-red-600 rounded flex items-center justify-center text-white font-mono font-bold text-lg tracking-wider transform group-hover:rotate-12 transition-transform duration-300 shadow-md shadow-red-900/30">
              P
            </div>
            <div>
              <span className="block text-lg font-bold font-sans tracking-tight text-white leading-none">
                PAL AUTO
              </span>
              <span className="block text-xs font-semibold font-mono tracking-widest text-red-500 uppercase leading-none mt-1">
                REPAIRS
              </span>
            </div>
          </div>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex space-x-1 lg:space-x-2">
            {navItems.map((item) => (
              <button
                key={item.target}
                id={`nav-link-${item.target}`}
                onClick={() => handleNavClick(item.target)}
                className="px-3 py-2 text-sm font-medium text-zinc-300 hover:text-white hover:bg-zinc-800/50 rounded transition-colors duration-200"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Right Action Button */}
          <div className="hidden sm:flex items-center space-x-4">
            <a
              id="navbar-phone-btn"
              href={`tel:${CALGARY_LOCATION.phone.replace(/[^0-9+]/g, "")}`}
              className="flex items-center text-zinc-300 hover:text-red-400 transition-colors duration-200 text-sm font-mono"
            >
              <Phone className="w-4 h-4 text-red-500 mr-2" />
              <span>{CALGARY_LOCATION.phone}</span>
            </a>
            <button
              id="navbar-cta-btn"
              onClick={onBookClick}
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded text-sm font-semibold tracking-wide shadow-lg shadow-red-900/20 hover:shadow-red-900/40 transition-all duration-200 transform active:scale-95"
            >
              Get a Quote
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <a
              id="navbar-mobile-phone"
              href={`tel:${CALGARY_LOCATION.phone.replace(/[^0-9+]/g, "")}`}
              className="p-2 text-zinc-300 hover:text-red-500 bg-zinc-900 rounded-full"
              aria-label="Call Shop"
            >
              <Phone className="w-5 h-5" />
            </a>
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded text-zinc-400 hover:text-white hover:bg-zinc-800 focus:outline-none transition-colors duration-200"
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
          className="md:hidden bg-zinc-950 border-b border-zinc-800 animate-in fade-in slide-in-from-top duration-200"
        >
          <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <button
                key={item.target}
                id={`mobile-nav-link-${item.target}`}
                onClick={() => handleNavClick(item.target)}
                className="block w-full text-left px-4 py-3 rounded text-base font-medium text-zinc-300 hover:text-white hover:bg-zinc-900 transition-colors duration-200"
              >
                {item.label}
              </button>
            ))}
            <div className="pt-4 pb-2 border-t border-zinc-800 px-4 space-y-3">
              <div className="flex items-center text-sm font-mono text-zinc-400">
                <MapPin className="w-4 h-4 text-red-500 mr-2 flex-shrink-0" />
                <span>{CALGARY_LOCATION.address}</span>
              </div>
              <button
                id="mobile-nav-cta-btn"
                onClick={() => {
                  setIsOpen(false);
                  onBookClick();
                }}
                className="block w-full text-center bg-red-600 hover:bg-red-700 text-white px-4 py-3 rounded font-semibold transition-all duration-200"
              >
                Get a Free Quote
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
