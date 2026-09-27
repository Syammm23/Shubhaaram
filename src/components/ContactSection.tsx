import React, { useState } from 'react';
import { Phone, MessageSquare, MapPin, Send, Instagram, Facebook, Youtube, CheckCircle2 } from 'lucide-react';
import { InquiryFormData } from '../types/index.ts';
import { servicesData } from '../data/servicesData.ts';

interface ContactSectionProps {
  selectedServiceIds: number[];
  onRemoveService: (id: number) => void;
  onSubmitInquiry: (data: InquiryFormData) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  selectedServiceIds,
  onRemoveService,
  onSubmitInquiry
}) => {
  const [formData, setFormData] = useState<InquiryFormData>({
    name: '',
    phone: '',
    eventType: 'Royal Wedding & Sangeet',
    eventDate: '',
    guestCount: '300-800',
    message: ''
  });

  const guestCounts = ['100-300', '300-800', '800-2500', '2500+ Mega'];

  const selectedServiceNames = servicesData
    .filter((s) => selectedServiceIds.includes(s.id))
    .map((s) => s.title);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) return;

    onSubmitInquiry({
      ...formData,
      selectedServices: selectedServiceNames
    });
  };

  const handleQuickWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello Shubhaarambh Events! I would like to inquire about planning an event:\n- Name: ${
        formData.name || 'Valued Guest'
      }\n- Event Type: ${formData.eventType}\n- Guests: ${formData.guestCount}`
    );
    window.open(`https://wa.me/919876543210?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-24 max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Column: Direct Placeholders */}
        <div className="lg:col-span-5 flex flex-col justify-between">
          <div>
            <span className="px-4 py-1 rounded-full bg-[#120B22] border border-[#F59E0B]/30 text-[#FBBF24] font-outfit text-xs uppercase tracking-widest font-semibold inline-block mb-2">
              START YOUR JOURNEY
            </span>
            <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-white uppercase tracking-wide leading-tight mb-2">
              Get In Touch
            </h2>
            <p className="font-playfair text-base text-[#FDE68A] italic mb-4">
              Let’s Plan Your Next Event Together
            </p>
            <p className="font-body text-sm text-gray-300 leading-relaxed mb-6">
              Have an upcoming wedding, concert, festival, or corporate gala? Talk to our chief production directors today for a custom walkthrough and quote.
            </p>

            <div className="flex flex-col gap-3.5">
              {/* Call Us */}
              <a
                href="tel:+919876543210"
                className="flex items-center gap-3.5 p-4 rounded-xl bg-[#120B22] border border-[#F59E0B]/20 hover:border-[#FBBF24] transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-[#F59E0B]/10 flex items-center justify-center text-[#FBBF24] group-hover:scale-105 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="font-outfit text-[11px] uppercase tracking-wider text-gray-400">
                    CALL US DIRECTLY
                  </span>
                  <span className="font-outfit text-sm font-bold text-white group-hover:text-[#FDE68A] transition-colors">
                    +91 98765 43210
                  </span>
                </div>
              </a>

              {/* WhatsApp */}
              <button
                type="button"
                onClick={handleQuickWhatsApp}
                className="flex items-center text-left gap-3.5 p-4 rounded-xl bg-[#120B22] border border-[#F59E0B]/20 hover:border-[#25D366] transition-all group cursor-pointer"
              >
                <div className="w-10 h-10 rounded-xl bg-[#25D366]/10 flex items-center justify-center text-[#25D366] group-hover:scale-105 transition-transform">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="font-outfit text-[11px] uppercase tracking-wider text-gray-400">
                    INSTANT WHATSAPP DESK
                  </span>
                  <span className="font-outfit text-sm font-bold text-white group-hover:text-[#25D366] transition-colors">
                    Start Instant Chat (91 98765 43210)
                  </span>
                </div>
              </button>

              {/* Studio & Office */}
              <div className="flex items-center gap-3.5 p-4 rounded-xl bg-[#120B22] border border-[#F59E0B]/20">
                <div className="w-10 h-10 rounded-xl bg-pink-500/10 flex items-center justify-center text-pink-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="font-outfit text-[11px] uppercase tracking-wider text-gray-400">
                    STUDIO &amp; OFFICE
                  </span>
                  <span className="font-outfit text-sm font-bold text-white">
                    Shubhaarambh Complex, Mumbai &amp; Jaipur Hubs
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-white/10">
            <p className="font-outfit text-xs uppercase tracking-wider text-[#FBBF24] font-semibold mb-3">
              OFFICIAL SOCIAL BROADCASTS
            </p>
            <div className="flex flex-wrap gap-2 text-xs font-medium text-gray-300">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#120B22] border border-white/10 hover:border-[#FBBF24] hover:text-white transition-all"
              >
                <Instagram className="w-3.5 h-3.5 text-pink-400" />
                <span>@shubhaarambhevents</span>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#120B22] border border-white/10 hover:border-[#FBBF24] hover:text-white transition-all"
              >
                <Facebook className="w-3.5 h-3.5 text-blue-400" />
                <span>Facebook</span>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#120B22] border border-white/10 hover:border-[#FBBF24] hover:text-white transition-all"
              >
                <Youtube className="w-3.5 h-3.5 text-red-500" />
                <span>YouTube</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Consultation Form */}
        <div className="lg:col-span-7">
          <div className="p-8 rounded-3xl purple-glass shadow-2xl relative overflow-hidden">
            <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-white mb-1">
              Plan Your Celebration
            </h3>
            <p className="font-body text-xs text-gray-300 mb-6">
              Fill out the details below. Our luxury event directors will prepare an initial proposal within 24 hours.
            </p>

            {/* If services are attached */}
            {selectedServiceNames.length > 0 && (
              <div className="mb-5 p-3.5 rounded-xl bg-[#090514]/80 border border-[#F59E0B]/30">
                <span className="font-outfit text-[11px] text-[#FBBF24] uppercase tracking-wider font-bold block mb-1.5">
                  Attached Custom Services ({selectedServiceNames.length}):
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {selectedServiceNames.map((name, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-lg bg-[#120B22] border border-[#F59E0B]/30 text-[11px] text-gray-200"
                    >
                      <span>{name}</span>
                      <button
                        type="button"
                        onClick={() => {
                          const svc = servicesData.find((s) => s.title === name);
                          if (svc) onRemoveService(svc.id);
                        }}
                        className="text-gray-400 hover:text-red-400 ml-1 cursor-pointer"
                      >
                        ×
                      </button>
                    </span>
                  ))}
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="font-outfit text-[11px] uppercase tracking-wider text-[#FDE68A] font-semibold block mb-1">
                    YOUR NAME *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Vikramaditya Rathore"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#090514] border border-[#7C3AED]/30 text-white text-xs placeholder-gray-500 focus:outline-none focus:border-[#FBBF24]"
                  />
                </div>
                <div>
                  <label className="font-outfit text-[11px] uppercase tracking-wider text-[#FDE68A] font-semibold block mb-1">
                    PHONE NUMBER *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#090514] border border-[#7C3AED]/30 text-white text-xs placeholder-gray-500 focus:outline-none focus:border-[#FBBF24]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="font-outfit text-[11px] uppercase tracking-wider text-[#FDE68A] font-semibold block mb-1">
                    EVENT TYPE
                  </label>
                  <select
                    value={formData.eventType}
                    onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#090514] border border-[#7C3AED]/30 text-white text-xs focus:outline-none focus:border-[#FBBF24]"
                  >
                    <option value="Royal Wedding & Sangeet">Royal Wedding &amp; Sangeet</option>
                    <option value="Arena Concert / Music Festival">Arena Concert / Music Festival</option>
                    <option value="Corporate Gala & Awards">Corporate Gala &amp; Awards</option>
                    <option value="Stage, Lights & SFX Production">Stage, Lights &amp; SFX Production</option>
                    <option value="Destination Luxury Celebration">Destination Luxury Celebration</option>
                  </select>
                </div>
                <div>
                  <label className="font-outfit text-[11px] uppercase tracking-wider text-[#FDE68A] font-semibold block mb-1">
                    TENTATIVE EVENT DATE
                  </label>
                  <input
                    type="date"
                    value={formData.eventDate}
                    onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#090514] border border-[#7C3AED]/30 text-white text-xs focus:outline-none focus:border-[#FBBF24]"
                  />
                </div>
              </div>

              <div>
                <label className="font-outfit text-[11px] uppercase tracking-wider text-[#FDE68A] font-semibold block mb-1.5">
                  ESTIMATED GUEST COUNT
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {guestCounts.map((count) => {
                    const isActive = formData.guestCount === count;
                    return (
                      <button
                        type="button"
                        key={count}
                        onClick={() => setFormData({ ...formData, guestCount: count })}
                        className={`py-2 px-1 text-center rounded-lg text-xs font-bold transition-all cursor-pointer ${
                          isActive
                            ? 'bg-[#F59E0B] text-[#090514] border border-[#FBBF24] shadow-md'
                            : 'bg-[#090514] border border-white/10 text-gray-300 hover:border-[#FBBF24]'
                        }`}
                      >
                        {count}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div>
                <label className="font-outfit text-[11px] uppercase tracking-wider text-[#FDE68A] font-semibold block mb-1">
                  SPECIAL REQUIREMENTS / MESSAGE
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about the dream aesthetic, preferred artists, destination venue, or required stage pyrotechnics..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#090514] border border-[#7C3AED]/30 text-white text-xs placeholder-gray-500 focus:outline-none focus:border-[#FBBF24] resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-full gold-btn text-[#090514] font-outfit text-xs font-black uppercase tracking-widest shadow-xl flex items-center justify-center gap-2 cursor-pointer hover:shadow-2xl"
              >
                <span>CONTACT NOW</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
