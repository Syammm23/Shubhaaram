import React, { useState } from 'react';
import { galleryData } from '../data/galleryData.ts';
import { GalleryItem } from '../types/index.ts';
import { Maximize2, Sparkles } from 'lucide-react';

interface GalleryProps {
  onOpenLightbox: (item: GalleryItem) => void;
}

export const Gallery: React.FC<GalleryProps> = ({ onOpenLightbox }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});

  const categories = [
    'ALL',
    'EVENTS',
    'DECORATION',
    'STAGE',
    'DJ',
    'PERFORMANCES',
    'FIREWORKS'
  ];

  const filteredItems = galleryData.filter((item) => {
    if (selectedCategory === 'ALL') return true;
    return item.category === selectedCategory;
  });

  const handleImageError = (id: number) => {
    setImageErrors((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section id="gallery" className="py-24 max-w-7xl mx-auto px-6">
      {/* Header & Filter Controls */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
        <div>
          <span className="px-4 py-1 rounded-full bg-[#120B22] border border-[#F59E0B]/30 text-[#FBBF24] font-outfit text-xs uppercase tracking-widest font-semibold inline-block mb-2">
            VISUAL SHOWCASE
          </span>
          <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-white uppercase tracking-wide">
            Event Gallery
          </h2>
          <p className="font-body text-sm text-gray-400 mt-1">
            Moments of magic captured in pristine high definition across India.
          </p>
        </div>

        {/* Interactive Filter Pills */}
        <div className="flex flex-wrap items-center gap-1.5 bg-[#120B22] p-1.5 rounded-2xl border border-[#F59E0B]/20 text-[11px] font-semibold uppercase tracking-wider">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-xl transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#F59E0B] text-[#090514] font-bold shadow-md'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Gallery Grid with 6 High-Res Event Moments */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            onClick={() => onOpenLightbox(item)}
            className="group relative h-80 rounded-2xl overflow-hidden bg-[#120B22] border border-white/10 hover:border-[#FBBF24]/60 transition-all duration-500 shadow-xl cursor-pointer"
          >
            {!imageErrors[item.id] ? (
              <img
                src={item.imageUrl}
                alt={item.title}
                referrerPolicy="no-referrer"
                onError={() => handleImageError(item.id)}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#120B22] to-[#1e0d38] p-6 text-center">
                <Sparkles className="w-10 h-10 text-[#FBBF24] mb-2" />
                <span className="font-cinzel text-white text-sm font-bold">{item.title}</span>
              </div>
            )}

            <div className="absolute inset-0 bg-gradient-to-t from-[#090514] via-[#090514]/35 to-transparent pointer-events-none" />

            {/* Click to expand hover hint */}
            <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#090514]/80 backdrop-blur-md border border-white/20 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <Maximize2 className="w-4 h-4 text-[#FBBF24]" />
            </div>

            <div className="absolute bottom-4 left-4 right-4">
              <span
                className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider inline-block mb-1.5 shadow-sm ${item.badgeColor}`}
              >
                {item.categoryLabel}
              </span>
              <h3 className="font-cinzel text-base sm:text-lg font-bold text-white group-hover:text-[#FDE68A] transition-colors leading-tight">
                {item.title}
              </h3>
              <p className="font-outfit text-xs text-gray-300 line-clamp-1 mt-1">
                📍 {item.location}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
