import React from 'react';

export const Ticker: React.FC = () => {
  const tickerItems = [
    '✦ ROYAL PALACE WEDDINGS',
    '✦ MEGA ARENA CONCERTS',
    '✦ HIGH-NET-WORTH GALAS',
    '✦ CELEBRITY SANGEET NIGHTS',
    '✦ HIGH-TECH LASER & DRONE SHOWS',
    '✦ MICHELIN GOURMET CATERING',
    '✦ BESPOKE HYDRAULIC STAGES'
  ];

  return (
    <div className="w-full bg-[#110822] border-y border-[#F59E0B]/30 py-3.5 overflow-hidden select-none">
      <div className="flex items-center gap-8 font-cinzel text-xs font-semibold tracking-[0.25em] text-[#FDE68A] justify-around whitespace-nowrap px-4 animate-none overflow-x-auto no-scrollbar">
        {tickerItems.map((item, idx) => (
          <React.Fragment key={idx}>
            <span className="hover:text-white transition-colors cursor-default">{item}</span>
            {idx < tickerItems.length - 1 && <span className="text-[#F59E0B]/60">•</span>}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
