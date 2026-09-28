import React, { useState } from 'react';
import { ArrowRight, Menu, X, PhoneCall } from 'lucide-react';

interface NavbarProps {
  onOpenBookingModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBookingModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#090514] border-b border-[#F59E0B]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between gap-3">
        {/* Brand Zone */}
        <a href="#home" className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FBBF24]">
          <div className="w-9 h-9 sm:w-10 sm:h-10 shrink-0 rounded-xl bg-gradient-to-br from-[#7C3AED] to-[#090514] border border-[#FBBF24]/40 p-1.5 flex items-center justify-center shadow-lg transition-transform group-hover:scale-105">
            <svg viewBox="0 0 100 100" className="w-full h-full fill-none">
              <circle cx="50" cy="50" r="44" stroke="#FBBF24" strokeWidth="3" strokeDasharray="6 4" />
              <path d="M26 65 L74 65 L66 40 L50 52 L34 40 Z" fill="#FBBF24" />
              <circle cx="50" cy="30" r="5" fill="#FBBF24" />
            </svg>
          </div>
          <div className="flex min-w-0 flex-col">
            <span className="font-cinzel text-[15px] sm:text-xl font-bold tracking-[0.12em] sm:tracking-widest gold-text uppercase leading-none truncate">
              Shubhaarambh
            </span>
            <span className="font-outfit text-[8px] sm:text-[9px] tracking-[0.18em] sm:tracking-[0.3em] text-[#FBBF24] uppercase mt-0.5 truncate">
              Event Management
            </span>
          </div>
        </a>

        {/* Desktop Nav Zone */}
        <nav className="hidden lg:flex items-center gap-6 bg-[#120B22]/90 border border-[#F59E0B]/20 px-6 py-2 rounded-full shadow-inner">
          <a href="#home" className="text-xs font-semibold uppercase tracking-wider text-[#FBBF24] hover:text-white transition-colors">
            Home
          </a>
          <a href="#about" className="text-xs font-medium uppercase tracking-wider text-gray-300 hover:text-[#FDE68A] transition-colors">
            About Us
          </a>
          <a href="#services" className="text-xs font-medium uppercase tracking-wider text-gray-300 hover:text-[#FDE68A] transition-colors">
            Services
          </a>
          <a href="#gallery" className="text-xs font-medium uppercase tracking-wider text-gray-300 hover:text-[#FDE68A] transition-colors">
            Gallery
          </a>
          <a href="#why-choose-us" className="text-xs font-medium uppercase tracking-wider text-gray-300 hover:text-[#FDE68A] transition-colors">
            Why Choose Us
          </a>
          <a href="#contact" className="text-xs font-medium uppercase tracking-wider text-gray-300 hover:text-[#FDE68A] transition-colors">
            Contact
          </a>
        </nav>

        {/* Primary Action & Mobile Menu Button */}
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            onClick={(e) => {
              if (onOpenBookingModal) {
                // If modal requested
                // default anchor or custom handler
              }
            }}
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full gold-btn text-[#090514] font-outfit text-xs font-bold uppercase tracking-wider shadow-lg whitespace-nowrap"
          >
            <span>Plan Royal Event</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl bg-[#120B22] border border-[#F59E0B]/30 text-gray-300 hover:text-[#FBBF24] transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden max-h-[calc(100vh-5rem)] overflow-y-auto bg-[#090514] border-b border-[#F59E0B]/30 px-4 sm:px-6 py-5 sm:py-6">
          <div className="flex flex-col gap-4 font-outfit text-sm uppercase tracking-wider">
            <a
              href="#home"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 text-[#FBBF24] font-bold border-b border-white/5"
            >
              Home
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 text-gray-300 hover:text-white border-b border-white/5"
            >
              About Us
            </a>
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 text-gray-300 hover:text-white border-b border-white/5"
            >
              Services (24+)
            </a>
            <a
              href="#gallery"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 text-gray-300 hover:text-white border-b border-white/5"
            >
              Event Gallery
            </a>
            <a
              href="#why-choose-us"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 text-gray-300 hover:text-white border-b border-white/5"
            >
              Why Choose Us
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 text-gray-300 hover:text-white border-b border-white/5"
            >
              Contact &amp; VIP Desk
            </a>
            
            <div className="pt-2 flex flex-col gap-3">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-full gold-btn text-[#090514] font-bold text-xs"
              >
                <span>Plan Royal Event</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="tel:+919876543210"
                className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-full bg-[#120B22] border border-[#F59E0B]/30 text-white font-bold text-xs"
              >
                <PhoneCall className="w-4 h-4 text-[#FBBF24]" />
                <span>Call +91 98765 43210</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
