import React from 'react';
import { GalleryItem } from '../types/index.ts';
import { X, MapPin } from 'lucide-react';

interface GalleryLightboxProps {
  item: GalleryItem | null;
  isOpen: boolean;
  onClose: () => void;
}

export const GalleryLightbox: React.FC<GalleryLightboxProps> = ({
  item,
  isOpen,
  onClose
}) => {
  if (!isOpen || !item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start sm:items-center justify-center overflow-y-auto p-3 sm:p-4 bg-[#090514]/90 backdrop-blur-lg">
      <div className="relative my-auto w-full max-w-4xl max-h-[calc(100vh-1.5rem)] overflow-y-auto rounded-3xl bg-[#120B22] border border-[#F59E0B]/40 shadow-2xl flex flex-col">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-[#090514]/80 text-white hover:bg-black/90 transition-colors border border-white/20 cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Big Preview Image */}
        <div className="relative w-full aspect-[16/9] sm:aspect-[16/10] bg-[#090514] overflow-hidden">
          <img
            src={item.imageUrl}
            alt={item.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#120B22] via-transparent to-transparent pointer-events-none" />
        </div>

        {/* Metadata Details */}
        <div className="p-5 sm:p-8 bg-[#120B22]">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
            <span
              className={`px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider ${item.badgeColor}`}
            >
              {item.categoryLabel}
            </span>
            <div className="flex items-center gap-1.5 text-xs text-[#FBBF24]">
              <MapPin className="w-4 h-4" />
              <span>{item.location}</span>
            </div>
          </div>

          <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-white mb-2">
            {item.title}
          </h3>

          <p className="font-body text-sm text-gray-300 leading-relaxed mb-4">
            {item.description}
          </p>

          <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:justify-between">
            <span className="font-outfit text-xs text-gray-400">
              Shubhaarambh Ultra Luxury Production Archives
            </span>
            <button
              type="button"
              onClick={onClose}
              className="w-full sm:w-auto px-5 py-2 rounded-full gold-btn text-[#090514] font-outfit text-xs font-bold uppercase tracking-wider cursor-pointer"
            >
              Close Showcase
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
