import React, { useState } from 'react';
import { Sparkles, Lightbulb, Cog, Users, Speaker } from 'lucide-react';

export const About: React.FC = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const mandapImgUrl =
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDZq83dTXv7ohohI5G4C5649-eYZol3hSJBTTpp63tmExjv63ESKTUxhz7lo4EqlQcqstsIA-O0o5NfpW-AX1uy_KguJ22ZunFcJuoVd2PSAUZyGBqgea8ljEu589aVywhU9bJxC4-BJLrlKc9Cgt0u2QkocRyoR0yJfywB3E5DvxxsClEqXmbGbJX1rs0QljeSFEeGorrNrCqLXwgca5IuCwUf6cF3d-xvsdSz7bMIAjrbJQqDAbDX';

  return (
    <section id="about" className="py-24 max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Visual Showcase Frame */}
        <div className="lg:col-span-6 relative">
          <div className="rounded-2xl overflow-hidden p-2 bg-gradient-to-br from-[#F59E0B]/40 via-[#6B21A8]/30 to-[#090514] shadow-2xl">
            <div className="rounded-xl overflow-hidden aspect-[4/3] relative bg-[#120B22]">
              {!imageError ? (
                <img
                  src={mandapImgUrl}
                  alt="Royal Wedding Mandap Architecture"
                  referrerPolicy="no-referrer"
                  onLoad={() => setImageLoaded(true)}
                  onError={() => setImageError(true)}
                  className={`w-full h-full object-cover transition-transform duration-700 hover:scale-105 ${
                    imageLoaded ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-[#120B22]">
                  <Sparkles className="w-12 h-12 text-[#FBBF24] mb-3" />
                  <span className="font-cinzel text-lg text-white font-bold">Uncompromising Grandeur</span>
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-[#090514] via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#090514]/90 border border-[#F59E0B]/30 shadow-lg">
                <span className="font-cinzel text-xs text-[#FBBF24] font-bold uppercase tracking-wider block mb-1">
                  Uncompromising Grandeur
                </span>
                <p className="font-playfair text-sm text-gray-200 italic">
                  “Where technical mastery meets Indian heritage &amp; celebration.”
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Editorial & Pillars */}
        <div className="lg:col-span-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#120B22] border border-[#F59E0B]/30 text-[#FBBF24] font-outfit text-xs uppercase tracking-widest font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#FBBF24]" />
            About Shubhaarambh
          </div>

          <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-white tracking-wide leading-tight mb-4">
            Architects of Extraordinary Occasions &amp; Monumental Productions
          </h2>

          <div className="p-5 rounded-xl purple-glass border-l-4 border-[#F59E0B] mb-5">
            <p className="font-playfair text-base text-purple-100 italic">
              “We create memorable experiences by bringing together entertainment, decoration, technology, creativity and professional event management under one roof.”
            </p>
          </div>

          <p className="font-body text-sm text-gray-300 leading-relaxed mb-6">
            At Shubhaarambh Events, we envision events not merely as dates on a calendar, but as living theatrical masterpieces. Whether designing a magnificent palace wedding in Rajasthan, orchestrating an arena concert with 40,000 attendees, or hosting high-profile corporate galas, our turnkey execution ensures effortless grandeur.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-3.5 rounded-xl bg-[#120B22] border border-[#F59E0B]/20 flex items-start gap-3 hover:border-[#FBBF24]/50 transition-colors">
              <Lightbulb className="w-6 h-6 text-[#FBBF24] shrink-0 mt-0.5" />
              <div>
                <h3 className="font-outfit text-xs font-bold text-white uppercase tracking-wider">Creative Concepts</h3>
                <p className="font-body text-[11px] text-gray-400 mt-0.5">Imaginative themes crafted from scratch.</p>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-[#120B22] border border-[#F59E0B]/20 flex items-start gap-3 hover:border-[#FBBF24]/50 transition-colors">
              <Cog className="w-6 h-6 text-[#C084FC] shrink-0 mt-0.5" />
              <div>
                <h3 className="font-outfit text-xs font-bold text-white uppercase tracking-wider">Flawless Execution</h3>
                <p className="font-body text-[11px] text-gray-400 mt-0.5">Second-by-second timeline precision.</p>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-[#120B22] border border-[#F59E0B]/20 flex items-start gap-3 hover:border-[#FBBF24]/50 transition-colors">
              <Users className="w-6 h-6 text-pink-400 shrink-0 mt-0.5" />
              <div>
                <h3 className="font-outfit text-xs font-bold text-white uppercase tracking-wider">Elite Artists</h3>
                <p className="font-body text-[11px] text-gray-400 mt-0.5">Top vocalists, Sufi bands &amp; DJs.</p>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-[#120B22] border border-[#F59E0B]/20 flex items-start gap-3 hover:border-[#FBBF24]/50 transition-colors">
              <Speaker className="w-6 h-6 text-[#FBBF24] shrink-0 mt-0.5" />
              <div>
                <h3 className="font-outfit text-xs font-bold text-white uppercase tracking-wider">Cutting-Edge Gear</h3>
                <p className="font-body text-[11px] text-gray-400 mt-0.5">Tour-grade sound, lasers &amp; cryo pyros.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
