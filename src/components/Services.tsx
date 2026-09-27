import React, { useState, useMemo } from 'react';
import { servicesData } from '../data/servicesData.ts';
import { ServiceItem } from '../types/index.ts';
import { Search, Plus, Check, ArrowRight } from 'lucide-react';

interface ServicesProps {
  onSelectServiceModal: (service: ServiceItem) => void;
  selectedServiceIds: number[];
  onToggleServiceSelection: (id: number) => void;
}

export const Services: React.FC<ServicesProps> = ({
  onSelectServiceModal,
  selectedServiceIds,
  onToggleServiceSelection
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredServices = useMemo(() => {
    return servicesData.filter((item) => {
      const matchesCategory =
        activeCategory === 'all' || item.category === activeCategory;
      const matchesQuery =
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.tag.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section id="services" className="py-24 bg-[#0C0618] border-t border-[#F59E0B]/20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="px-4 py-1 rounded-full bg-[#120B22] border border-[#F59E0B]/30 text-[#FBBF24] font-outfit text-xs uppercase tracking-widest font-semibold inline-block mb-2">
            COMPREHENSIVE CAPABILITIES
          </span>
          <h2 className="font-cinzel text-3xl sm:text-4xl font-black text-white uppercase tracking-wide mb-2">
            OUR SERVICES
          </h2>
          <p className="font-playfair italic text-base text-[#FDE68A]">
            “Every Event. Every Detail. Perfectly Managed.”
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-white/5">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 bg-[#120B22] p-1.5 rounded-2xl border border-[#F59E0B]/20">
            <button
              type="button"
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 rounded-xl text-xs font-outfit font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeCategory === 'all'
                  ? 'gold-btn text-[#090514] shadow-md'
                  : 'text-gray-300 hover:text-white hover:bg-white/5'
              }`}
            >
              All 24 Services
            </button>
            <button
              type="button"
              onClick={() => setActiveCategory('production')}
              className={`px-4 py-2 rounded-xl text-xs font-outfit font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeCategory === 'production'
                  ? 'gold-btn text-[#090514] shadow-md'
                  : 'text-gray-300 hover:text-white hover:bg-white/5'
              }`}
            >
              Stage &amp; Production
            </button>
            <button
              type="button"
              onClick={() => setActiveCategory('artists')}
              className={`px-4 py-2 rounded-xl text-xs font-outfit font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeCategory === 'artists'
                  ? 'gold-btn text-[#090514] shadow-md'
                  : 'text-gray-300 hover:text-white hover:bg-white/5'
              }`}
            >
              Artists &amp; Bands
            </button>
            <button
              type="button"
              onClick={() => setActiveCategory('media')}
              className={`px-4 py-2 rounded-xl text-xs font-outfit font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeCategory === 'media'
                  ? 'gold-btn text-[#090514] shadow-md'
                  : 'text-gray-300 hover:text-white hover:bg-white/5'
              }`}
            >
              Cinema &amp; Reels
            </button>
            <button
              type="button"
              onClick={() => setActiveCategory('hospitality')}
              className={`px-4 py-2 rounded-xl text-xs font-outfit font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeCategory === 'hospitality'
                  ? 'gold-btn text-[#090514] shadow-md'
                  : 'text-gray-300 hover:text-white hover:bg-white/5'
              }`}
            >
              Hospitality &amp; Dining
            </button>
          </div>

          {/* Quick Search */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search 24 services (e.g. DJ, Light, Drone)..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#120B22] border border-[#F59E0B]/20 text-white text-xs placeholder-gray-500 focus:outline-none focus:border-[#FBBF24]"
            />
          </div>
        </div>

        {/* Selected Services Counter Bar */}
        {selectedServiceIds.length > 0 && (
          <div className="mb-6 p-4 rounded-xl purple-glass flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-[#F59E0B] animate-ping" />
              <span className="font-outfit text-xs font-semibold text-white">
                <span className="text-[#FBBF24] font-bold">{selectedServiceIds.length}</span> Services Selected for Custom Event Package
              </span>
            </div>
            <a
              href="#contact"
              className="text-xs font-outfit font-bold uppercase tracking-wider text-[#FBBF24] hover:underline flex items-center gap-1"
            >
              <span>Attach to VIP Quote</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        )}

        {/* Services Grid: All 24 Services */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {filteredServices.map((service) => {
            const isSelected = selectedServiceIds.includes(service.id);
            return (
              <div
                key={service.id}
                className="group relative p-5 rounded-2xl bg-[#120B22] border border-[#7C3AED]/20 hover:border-[#FBBF24] transition-all duration-300 hover:-translate-y-1 shadow-lg flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-cinzel text-2xl font-bold text-[#FBBF24]">
                      {service.numberStr}
                    </span>
                    <span className="material-symbols-outlined text-2xl text-[#FBBF24] group-hover:scale-110 transition-transform">
                      {service.icon}
                    </span>
                  </div>

                  <h3 className="font-outfit text-base font-bold text-white mb-1.5 group-hover:text-[#FDE68A] transition-colors">
                    {service.title}
                  </h3>

                  <p className="font-body text-xs text-gray-300 leading-relaxed mb-4">
                    {service.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/5 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => onSelectServiceModal(service)}
                    className="font-outfit text-[10px] uppercase tracking-wider text-[#FBBF24] font-semibold hover:text-white transition-colors cursor-pointer"
                  >
                    {service.tag}
                  </button>

                  <button
                    type="button"
                    onClick={() => onToggleServiceSelection(service.id)}
                    title={isSelected ? 'Remove from quote' : 'Add to quote'}
                    className={`p-1.5 rounded-lg border transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-[#F59E0B] border-[#F59E0B] text-[#090514]'
                        : 'bg-[#090514] border-white/10 text-gray-400 hover:text-white hover:border-[#FBBF24]'
                    }`}
                  >
                    {isSelected ? <Check className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {filteredServices.length === 0 && (
          <div className="text-center py-12 bg-[#120B22]/50 rounded-2xl border border-white/5">
            <p className="font-outfit text-sm text-gray-400">No services found matching "{searchQuery}".</p>
            <button
              type="button"
              onClick={() => {
                setActiveCategory('all');
                setSearchQuery('');
              }}
              className="mt-3 text-xs font-bold text-[#FBBF24] underline cursor-pointer"
            >
              Reset filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
