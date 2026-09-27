import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#06030c] border-t border-[#F59E0B]/20 py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-[#7C3AED]/30 border border-[#FBBF24]/40 p-1 flex items-center justify-center">
            <svg viewBox="0 0 100 100" className="w-full h-full fill-none">
              <circle cx="50" cy="50" r="44" stroke="#FBBF24" strokeWidth="4" />
              <path d="M26 65 L74 65 L66 40 L50 52 L34 40 Z" fill="#FBBF24" />
            </svg>
          </div>
          <div>
            <span className="font-cinzel text-base font-bold gold-text uppercase block">
              SHUBHAARAMBH EVENTS
            </span>
            <span className="font-playfair italic text-xs text-gray-400">
              Turning Moments Into Unforgettable Experiences
            </span>
          </div>
        </div>

        <div className="flex items-center gap-6 font-outfit text-xs uppercase tracking-wider text-gray-400">
          <a href="#home" className="hover:text-[#FBBF24] transition-colors">
            Home
          </a>
          <a href="#about" className="hover:text-[#FBBF24] transition-colors">
            About
          </a>
          <a href="#services" className="hover:text-[#FBBF24] transition-colors">
            Services
          </a>
          <a href="#gallery" className="hover:text-[#FBBF24] transition-colors">
            Gallery
          </a>
          <a href="#contact" className="hover:text-[#FBBF24] transition-colors">
            Contact
          </a>
        </div>

        <div className="flex items-center gap-4 text-gray-400 text-xs">
          <span>© SHUBHAARAMBH EVENTS. All Rights Reserved.</span>
        </div>
      </div>
    </footer>
  );
};
