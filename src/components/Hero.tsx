import React, { useState } from 'react';
import { ArrowRight, Calendar } from 'lucide-react';

interface HeroProps {
  onExploreServices: () => void;
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreServices, onOpenBooking }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const heroImageUrl =
    'https://lh3.googleusercontent.com/aida/AEtjO1XOiYRrAkRtWOgzRMQYrW5e_KBh_acXFTdO9lB1N_mUZY2-dcmOT58gthWWmp9YmGJrHvJbQTm3Bh44U2kiRdoJQ76ImEfdT_h70DmYh_9-i4zjqZfFaQjXWxrbvHOUFaufzirbE-CA8IvT2H8DfKMoD0UTB0wZKV4ZwyLL-6sm6-YwddjppblyRlexHGcuwItqNaBYOnffSa6iZdCYiOX0HsgDg3HqrfkcaSJ58QqkVAhYMoXlGXxTrA';

  return (
    <section id="home" className="relative min-h-[680px] sm:min-h-screen pt-28 sm:pt-32 pb-[120px] sm:pb-16 flex items-center justify-center overflow-hidden" style={{ paddingBottom: 'max(120px, env(safe-area-inset-bottom))' }}>
      {/* Background with luxury scrims */}
      <div className="absolute inset-0 z-0 bg-[#090514]">
        {!imageError ? (
          <img
            src={heroImageUrl}
            alt="Grand Royal Event & Concert Stage Production"
            referrerPolicy="no-referrer"
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageError(true)}
            className={`w-full h-full object-cover transition-opacity duration-1000 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-[#120B22] via-[#090514] to-[#1e0d38]" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[#090514] via-[#090514]/80 to-[#090514]/60" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#7C3AED]/30 via-[#090514]/70 to-[#090514]" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 overflow-hidden text-center flex flex-col items-center">
        {/* Top Tag */}
        <div className="inline-flex max-w-full items-center gap-2 px-3 sm:px-5 py-1.5 rounded-full purple-glass mb-5 sm:mb-6 border border-[#F59E0B]/30 shadow-lg">
          <span className="text-[#FBBF24] text-[10px] sm:text-xs font-bold tracking-[0.14em] sm:tracking-[0.25em] uppercase font-outfit text-center">
            ✨ PLAN • DECORATE • CELEBRATE
          </span>
        </div>

        {/* Marquee Headline */}
        <h1 className="font-cinzel text-3xl sm:text-5xl md:text-6xl lg:text-[72px] font-bold uppercase leading-[0.95] tracking-[0.04em] text-center px-2 break-words max-w-full gold-text mb-4 drop-shadow-2xl">
          Shubhaarambh
        </h1>
        <p className="font-outfit text-xs sm:text-xl md:text-2xl font-bold tracking-[0.2em] sm:tracking-[0.35em] uppercase text-[#FDE68A] mb-5 sm:mb-6 drop-shadow-md">
          Event Management
        </p>

        {/* Tagline */}
        <p className="font-playfair italic text-sm sm:text-2xl text-purple-200 font-medium mb-3 px-2">
          “Turning Moments Into Unforgettable Experiences”
        </p>
        <p className="font-body text-xs sm:text-base text-gray-300 max-w-2xl mx-auto leading-relaxed mb-8 sm:mb-10 px-2">
          Complete Event Solutions for Royal Weddings, Arena Music Concerts, Grand Corporate Galas, and Bespoke Indian Celebrations.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto mb-10 sm:mb-16">
          <button
            type="button"
            onClick={onExploreServices}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full gold-btn text-[#090514] font-outfit text-xs font-bold tracking-widest uppercase shadow-xl cursor-pointer"
          >
            <span>EXPLORE OUR 24+ SERVICES</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={onOpenBooking}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full purple-glass text-[#FDE68A] hover:text-white font-outfit text-xs font-bold tracking-widest uppercase shadow-lg border border-[#F59E0B]/30 hover:border-[#FBBF24] transition-all cursor-pointer"
          >
            <Calendar className="w-4 h-4 text-[#FBBF24]" />
            <span>CONTACT NOW / GET QUOTE</span>
          </button>
        </div>

        {/* 4 Luxury Stats Cards */}
        <div className="relative z-10 w-full grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-[#F59E0B]/20">
          <div className="p-4 rounded-xl bg-[#120B22]/80 border border-[#F59E0B]/20 shadow-lg">
            <div className="font-cinzel text-2xl sm:text-3xl font-extrabold gold-text mb-0.5 tabular-nums">
              500+
            </div>
            <div className="font-outfit text-[11px] uppercase tracking-wider text-gray-400">
              Luxury Events Done
            </div>
          </div>
          <div className="p-4 rounded-xl bg-[#120B22]/80 border border-[#F59E0B]/20 shadow-lg">
            <div className="font-cinzel text-2xl sm:text-3xl font-extrabold text-[#C084FC] mb-0.5 tabular-nums">
              100%
            </div>
            <div className="font-outfit text-[11px] uppercase tracking-wider text-gray-400">
              Bespoke Stage &amp; SFX
            </div>
          </div>
          <div className="p-4 rounded-xl bg-[#120B22]/80 border border-[#F59E0B]/20 shadow-lg">
            <div className="font-cinzel text-2xl sm:text-3xl font-extrabold text-[#FBBF24] mb-0.5 tabular-nums">
              24+
            </div>
            <div className="font-outfit text-[11px] uppercase tracking-wider text-gray-400">
              Specialized Services
            </div>
          </div>
          <div className="p-4 rounded-xl bg-[#120B22]/80 border border-[#F59E0B]/20 shadow-lg">
            <div className="font-cinzel text-2xl sm:text-3xl font-extrabold text-pink-400 mb-0.5">
              Pan-India
            </div>
            <div className="font-outfit text-[11px] uppercase tracking-wider text-gray-400">
              Production Reach
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
