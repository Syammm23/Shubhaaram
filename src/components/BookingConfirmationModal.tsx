import React from 'react';
import { InquiryFormData } from '../types/index.ts';
import { CheckCircle2, MessageSquare, X, Calendar, Users, Phone, Sparkles } from 'lucide-react';

interface BookingConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  inquiry: InquiryFormData | null;
  bookingRef: string;
}

export const BookingConfirmationModal: React.FC<BookingConfirmationModalProps> = ({
  isOpen,
  onClose,
  inquiry,
  bookingRef
}) => {
  if (!isOpen || !inquiry) return null;

  const handleWhatsAppForward = () => {
    const servicesList = inquiry.selectedServices && inquiry.selectedServices.length > 0
      ? `\n- Services: ${inquiry.selectedServices.join(', ')}`
      : '';
    const message = encodeURIComponent(
      `Hello Shubhaarambh Events!\nI have submitted my event inquiry (Ref: ${bookingRef}):\n- Name: ${inquiry.name}\n- Phone: ${inquiry.phone}\n- Event: ${inquiry.eventType}\n- Date: ${inquiry.eventDate || 'To be finalized'}\n- Guests: ${inquiry.guestCount}${servicesList}\n- Notes: ${inquiry.message || 'None'}\n\nPlease share the proposal and quotation.`
    );
    window.open(`https://wa.me/916355790121?text=${message}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start sm:items-center justify-center overflow-y-auto p-3 sm:p-4 bg-[#090514]/90 ">
      <div className="relative my-auto w-full max-w-lg max-h-[calc(100vh-1.5rem)] overflow-y-auto rounded-3xl bg-[#120B22] border border-[#F59E0B]/40 shadow-2xl p-5 sm:p-8 text-left">
        {/* Top Close */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/5 text-gray-400 hover:text-white transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Success Icon */}
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#F59E0B]/20 to-[#7C3AED]/20 border border-[#F59E0B]/40 flex items-center justify-center text-[#FBBF24] mb-4">
          <CheckCircle2 className="w-8 h-8" />
        </div>

        <span className="font-outfit text-xs font-bold uppercase tracking-widest text-[#FBBF24]">
          INQUIRY RECEIVED • REF: {bookingRef}
        </span>
        <h3 className="font-cinzel text-2xl font-bold text-white mt-1 mb-2">
          Your Royal Celebration Begins
        </h3>
        <p className="font-body text-xs text-gray-300 leading-relaxed mb-6">
          Thank you, <strong className="text-white">{inquiry.name}</strong>. Our senior event director is reviewing your requirements and will contact you at <strong className="text-white">{inquiry.phone}</strong> within 24 hours.
        </p>

        {/* Event Details Card */}
        <div className="p-4 rounded-2xl bg-[#090514] border border-white/10 space-y-2.5 mb-6 text-xs text-gray-300">
          <div className="flex items-center justify-between">
            <span className="text-gray-400 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#FBBF24]" />
              Event Type:
            </span>
            <span className="font-semibold text-white">{inquiry.eventType}</span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-gray-400 flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-[#FBBF24]" />
              Date:
            </span>
            <span className="font-semibold text-white">
              {inquiry.eventDate || 'Flexible / To Be Decided'}
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-gray-400 flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5 text-[#FBBF24]" />
              Guests:
            </span>
            <span className="font-semibold text-white">{inquiry.guestCount}</span>
          </div>

          {inquiry.selectedServices && inquiry.selectedServices.length > 0 && (
            <div className="pt-2 border-t border-white/5">
              <span className="text-gray-400 block mb-1">Custom Services Requested:</span>
              <div className="flex flex-wrap gap-1">
                {inquiry.selectedServices.map((s, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-0.5 rounded bg-[#120B22] border border-[#F59E0B]/20 text-[10px] text-[#FDE68A]"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Call to Actions */}
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            type="button"
            onClick={handleWhatsAppForward}
            className="flex-1 inline-flex items-center justify-center gap-2 py-3 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white font-outfit text-xs font-bold uppercase tracking-wider shadow-lg transition-colors cursor-pointer"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Connect on WhatsApp Now</span>
          </button>

          <button
            type="button"
            onClick={onClose}
            className="py-3 px-6 rounded-full bg-white/5 hover:bg-white/10 text-gray-300 font-outfit text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
