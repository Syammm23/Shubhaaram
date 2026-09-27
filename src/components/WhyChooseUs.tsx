import React from 'react';
import {
  CheckSquare,
  Palette,
  UsersRound,
  Camera,
  Speaker,
  Megaphone
} from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const cards = [
    {
      title: 'Complete Event Solutions',
      icon: <CheckSquare className="w-8 h-8 text-[#FBBF24]" />,
      desc: 'Single-window turnkey management. From vendor contracting to stage fabrication and artist hospitality, we absorb 100% of the operational pressure.'
    },
    {
      title: 'Creative Decorations',
      icon: <Palette className="w-8 h-8 text-[#C084FC]" />,
      desc: 'Bespoke thematic designs combining Indian regal opulence with minimalist modern aesthetics. Every setup is uniquely crafted for your story.'
    },
    {
      title: 'Professional Event Management Team',
      icon: <UsersRound className="w-8 h-8 text-pink-400]" />,
      desc: 'Seasoned showrunners and stage directors with over a decade of concert and royal wedding experience, directing second-by-second timelines.'
    },
    {
      title: 'Photography & Videography',
      icon: <Camera className="w-8 h-8 text-[#FBBF24]" />,
      desc: 'Award-winning lensmen capturing timeless cinematic memories in pristine 4K/8K, delivered with same-day edits and viral short-form reels.'
    },
    {
      title: 'Entertainment for Every Occasion',
      icon: <Speaker className="w-8 h-8 text-[#C084FC]" />,
      desc: 'Curated roster of top-tier Bollywood vocalists, international DJs, Sufi musicians, LED dance performers, and breathtaking SFX pyrotechnics.'
    },
    {
      title: 'Advertising & Branding Solutions',
      icon: <Megaphone className="w-8 h-8 text-pink-400" />,
      desc: 'Strategic brand sponsorship tie-ups, customized eco water bottle branding, stage banner graphics, and experiential corporate activations.'
    }
  ];

  return (
    <section id="why-choose-us" className="py-24 bg-[#0C0618] border-y border-[#F59E0B]/20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="px-4 py-1 rounded-full bg-[#120B22] border border-[#F59E0B]/30 text-[#FBBF24] font-outfit text-xs uppercase tracking-widest font-semibold inline-block mb-2">
            THE GOLD STANDARD
          </span>
          <h2 className="font-cinzel text-3xl sm:text-4xl font-black text-white uppercase tracking-wide mb-2">
            Why Choose Us
          </h2>
          <p className="font-body text-sm text-gray-400">
            The benchmark in premium event production, bespoke design &amp; flawless execution.
          </p>
        </div>

        {/* 6 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-[#120B22] border border-[#7C3AED]/20 hover:border-[#F59E0B]/60 transition-all duration-300 hover:-translate-y-1.5 shadow-lg group"
            >
              <div className="mb-4 transform group-hover:scale-110 transition-transform">
                {card.icon}
              </div>
              <h3 className="font-cinzel text-lg font-bold text-white mb-2 group-hover:text-[#FDE68A] transition-colors">
                {card.title}
              </h3>
              <p className="font-body text-xs text-gray-300 leading-relaxed">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
