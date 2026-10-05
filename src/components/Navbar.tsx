import React, { useState, useEffect } from "react";
import { 
  Menu, 
  X, 
  MapPin, 
  Clock, 
  Phone, 
  MessageSquare, 
  Compass,
  ArrowRight,
  ShieldCheck,
  Calculator
} from "lucide-react";
import { BUSINESS_INFO } from "../data";

interface NavbarProps {
  onSectionScroll: (sectionId: string) => void;
  onRequestQuote: () => void;
}

export default function Navbar({ onSectionScroll, onRequestQuote }: NavbarProps) {
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
    { label: "Projects", id: "projects" },
    { label: "Why Us", id: "why-us" },
    { label: "Glass Calculator", id: "calculator" },
    { label: "Contact & Location", id: "contact" },
  ];

  const handleNavClick = (id: string) => {
    onSectionScroll(id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0B0F17]/95 backdrop-blur-md shadow-lg border-b border-white/10 py-3"
          : "bg-[#0B0F17]/85 backdrop-blur-sm border-b border-white/5 py-4"
      }`}
    >
      {/* Top Bar for Desktop */}
      <div className="hidden lg:block border-b border-white/5 pb-2 mb-2 text-xs text-slate-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center space-x-1.5 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-sky-400" />
              <span>{BUSINESS_INFO.address}</span>
            </span>
            <span className="flex items-center space-x-1.5 text-emerald-400 font-medium">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Open 24 Hours • Expert In All Kinds Of Glass Works</span>
            </span>
          </div>

          <div className="flex items-center space-x-4">
            <a
              id="topbar-maps-link"
              href={BUSINESS_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors flex items-center space-x-1"
            >
              <Compass className="w-3.5 h-3.5 text-slate-400" />
              <span>Get Directions</span>
            </a>
            <span className="text-white/20">|</span>
            <a
              id="topbar-whatsapp-link"
              href={BUSINESS_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 hover:text-emerald-300 font-medium flex items-center space-x-1"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp: 09014120207</span>
            </a>
            <span className="text-white/20">|</span>
            <a
              id="topbar-call-link"
              href={BUSINESS_INFO.phoneLink}
              className="text-sky-400 hover:text-sky-300 font-medium flex items-center space-x-1"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call: 08138511873</span>
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand Name */}
          <button
            id="nav-logo-btn"
            onClick={() => handleNavClick("hero")}
            className="flex items-center space-x-3 text-left group cursor-pointer focus:outline-none"
          >
            {/* Elegant Glass Cube / Diamond Icon */}
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-slate-700 via-slate-800 to-slate-950 border border-white/20 flex items-center justify-center shadow-inner relative overflow-hidden group-hover:border-sky-400/60 transition-colors">
              <div className="absolute inset-0 bg-sky-400/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="w-5 h-5 border border-sky-300 rotate-45 flex items-center justify-center">
                <div className="w-2.5 h-2.5 bg-white/70"></div>
              </div>
            </div>
            <div>
              <span className="block font-heading text-lg sm:text-xl font-bold tracking-tight text-white group-hover:text-sky-200 transition-colors">
                {BUSINESS_INFO.name}
              </span>
              <span className="block text-[10px] tracking-[0.15em] uppercase text-sky-400 font-semibold">
                {BUSINESS_INFO.tagline}
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                id={`nav-link-${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className="px-3 py-1.5 text-xs lg:text-sm font-medium text-slate-300 hover:text-white rounded-md hover:bg-white/5 transition-colors cursor-pointer"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center space-x-2">
            <a
              id="nav-whatsapp-btn"
              href={BUSINESS_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-3 py-2 rounded-lg text-xs font-semibold tracking-wide transition-all"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>

            <button
              id="nav-quote-btn"
              onClick={onRequestQuote}
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white px-4 py-2 rounded-lg text-xs font-semibold tracking-wide shadow-md shadow-sky-500/20 transition-all cursor-pointer"
            >
              <Calculator className="w-3.5 h-3.5" />
              <span>Get Quote</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-2">
            <a
              id="mobile-nav-whatsapp"
              href={BUSINESS_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-emerald-400 bg-emerald-500/10 rounded-lg border border-emerald-500/20"
              aria-label="WhatsApp"
            >
              <MessageSquare className="w-4 h-4" />
            </a>

            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 focus:outline-none cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div id="mobile-menu-drawer" className="md:hidden bg-[#0F172A] border-b border-white/10 px-4 pt-3 pb-6 mt-3 shadow-2xl space-y-3 animate-in fade-in slide-in-from-top-3">
          <div className="p-3 bg-white/5 rounded-xl border border-white/10 text-xs space-y-1.5 mb-2">
            <div className="flex items-center text-slate-300 space-x-2">
              <MapPin className="w-4 h-4 text-sky-400 flex-shrink-0" />
              <span>{BUSINESS_INFO.address}</span>
            </div>
            <div className="flex items-center text-emerald-400 space-x-2">
              <Clock className="w-4 h-4 flex-shrink-0" />
              <span>Open 24 Hours • Clear Vision, Quality Finish</span>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                id={`mobile-link-${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className="w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium text-slate-200 hover:bg-white/10 hover:text-white transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="pt-2 border-t border-white/10 grid grid-cols-2 gap-2">
            <a
              id="mobile-drawer-directions"
              href={BUSINESS_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-1.5 py-2.5 px-3 rounded-lg text-xs font-semibold bg-white/10 text-slate-200 hover:bg-white/20 border border-white/10"
            >
              <Compass className="w-4 h-4 text-sky-400" />
              <span>Get Directions</span>
            </a>

            <a
              id="mobile-drawer-call"
              href={BUSINESS_INFO.phoneLink}
              className="flex items-center justify-center space-x-1.5 py-2.5 px-3 rounded-lg text-xs font-semibold bg-white/10 text-slate-200 hover:bg-white/20 border border-white/10"
            >
              <Phone className="w-4 h-4 text-emerald-400" />
              <span>Call Us</span>
            </a>
          </div>

          <button
            id="mobile-drawer-quote-btn"
            onClick={() => {
              setMobileMenuOpen(false);
              onRequestQuote();
            }}
            className="w-full py-3 px-4 rounded-lg text-sm font-semibold bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-lg flex items-center justify-center space-x-2"
          >
            <Calculator className="w-4 h-4" />
            <span>Request Quote / Glass Calculator</span>
          </button>
        </div>
      )}
    </header>
  );
}
