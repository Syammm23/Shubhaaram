import React from 'react';
import { ServiceItem } from '../types/index.ts';
import { X, Check, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';

interface ServiceModalProps {
  service: ServiceItem | null;
  isOpen: boolean;
  onClose: () => void;
  isSelected: boolean;
  onToggleSelect: (id: number) => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({
  service,
  isOpen,
  onClose,
  isSelected,
  onToggleSelect
}) => {
  if (!isOpen || !service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start sm:items-center justify-center overflow-y-auto p-3 sm:p-4 bg-[#090514]/85 backdrop-blur-md">
      <div className="relative my-auto w-full max-w-xl max-h-[calc(100vh-1.5rem)] sm:max-h-[calc(100vh-2rem)] overflow-y-auto rounded-3xl bg-[#120B22] border border-[#F59E0B]/30 shadow-2xl p-5 sm:p-8 text-left">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="font-cinzel text-3xl font-extrabold text-[#FBBF24]">
            {service.numberStr}
          </span>
          <div className="h-6 w-[1px] bg-white/10" />
          <span className="px-3 py-1 rounded-full bg-[#090514] border border-[#F59E0B]/30 text-[#FBBF24] font-outfit text-[11px] font-bold uppercase tracking-wider">
            {service.tag}
          </span>
        </div>

        <h3 className="font-cinzel text-2xl font-bold text-white mb-2">
          {service.title}
        </h3>

        <p className="font-body text-sm text-gray-300 leading-relaxed mb-6">
          {service.description}
        </p>

        {/* Inclusions */}
        <div className="mb-6">
          <h4 className="font-outfit text-xs uppercase tracking-wider text-[#FDE68A] font-bold mb-3 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#FBBF24]" />
            What is Included
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {service.inclusions.map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-2 p-2.5 rounded-xl bg-[#090514] border border-white/5 text-xs text-gray-300"
              >
                <CheckCircle2 className="w-4 h-4 text-[#FBBF24] shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Specs */}
        <div className="mb-8 p-3.5 rounded-xl bg-[#090514] border border-[#7C3AED]/20">
          <div className="flex items-center gap-2 mb-1">
            <ShieldCheck className="w-4 h-4 text-[#C084FC]" />
            <span className="font-outfit text-[11px] uppercase tracking-wider text-gray-400 font-semibold">
              Production Standards &amp; Redundancy
            </span>
          </div>
          <p className="font-body text-xs text-gray-300 leading-relaxed">
            {service.specs}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-4 pt-4 border-t border-white/10">
          <button
            type="button"
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2.5 rounded-full bg-white/5 text-gray-300 hover:text-white font-outfit text-xs font-semibold uppercase tracking-wider cursor-pointer"
          >
            Close Details
          </button>

          <button
            type="button"
            onClick={() => onToggleSelect(service.id)}
            className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full font-outfit text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
              isSelected
                ? 'bg-emerald-600 hover:bg-emerald-500 text-white'
                : 'gold-btn text-[#090514]'
            }`}
          >
            {isSelected ? (
              <>
                <Check className="w-4 h-4" />
                <span>Included In Quote (Remove)</span>
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4" />
                <span>Include In My Quote</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
