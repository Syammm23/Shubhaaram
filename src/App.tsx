import React, { useState } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { Ticker } from './components/Ticker.tsx';
import { About } from './components/About.tsx';
import { Services } from './components/Services.tsx';
import { Gallery } from './components/Gallery.tsx';
import { WhyChooseUs } from './components/WhyChooseUs.tsx';
import { ContactSection } from './components/ContactSection.tsx';
import { Footer } from './components/Footer.tsx';
import { FloatingWhatsApp } from './components/FloatingWhatsApp.tsx';
import { ServiceModal } from './components/ServiceModal.tsx';
import { GalleryLightbox } from './components/GalleryLightbox.tsx';
import { BookingConfirmationModal } from './components/BookingConfirmationModal.tsx';
import { ServiceItem, GalleryItem, InquiryFormData } from './types/index.ts';

export default function App() {
  const [activeServiceModal, setActiveServiceModal] = useState<ServiceItem | null>(null);
  const [activeLightboxItem, setActiveLightboxItem] = useState<GalleryItem | null>(null);
  const [selectedServiceIds, setSelectedServiceIds] = useState<number[]>([]);
  const [submittedInquiry, setSubmittedInquiry] = useState<InquiryFormData | null>(null);
  const [bookingRef, setBookingRef] = useState<string>('');
  const [isConfirmationOpen, setIsConfirmationOpen] = useState<boolean>(false);

  const handleToggleServiceSelection = (id: number) => {
    setSelectedServiceIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleRemoveService = (id: number) => {
    setSelectedServiceIds((prev) => prev.filter((item) => item !== id));
  };

  const handleSubmitInquiry = (data: InquiryFormData) => {
    const randomCode = Math.floor(10000 + Math.random() * 90000);
    const ref = `SHUBH-${randomCode}`;
    setBookingRef(ref);
    setSubmittedInquiry(data);
    setIsConfirmationOpen(true);

    // Save in local storage history
    try {
      const existing = JSON.parse(localStorage.getItem('shubhaarambh_inquiries') || '[]');
      existing.unshift({ ref, timestamp: new Date().toISOString(), ...data });
      localStorage.setItem('shubhaarambh_inquiries', JSON.stringify(existing.slice(0, 10)));
    } catch {
      // Ignore if localStorage unavailable
    }
  };

  const scrollToServices = () => {
    const el = document.getElementById('services');
    if (el) {
      el.scrollIntoView({ behavior: 'auto', block: 'start' });
    }
  };

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'auto', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-[#090514] text-gray-200 antialiased selection:bg-[#F59E0B] selection:text-[#090514] relative">
      {/* Top Fixed Navbar */}
      <Navbar onOpenBookingModal={scrollToContact} />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <Hero
          onExploreServices={scrollToServices}
          onOpenBooking={scrollToContact}
        />

        {/* Marquee Ticker */}
        <Ticker />

        {/* About Section */}
        <About />

        {/* 24 Services Grid */}
        <Services
          onSelectServiceModal={(svc) => setActiveServiceModal(svc)}
          selectedServiceIds={selectedServiceIds}
          onToggleServiceSelection={handleToggleServiceSelection}
        />

        {/* Event Gallery */}
        <Gallery
          onOpenLightbox={(item) => setActiveLightboxItem(item)}
        />

        {/* Why Choose Us */}
        <WhyChooseUs />

        {/* Contact & VIP Booking */}
        <ContactSection
          selectedServiceIds={selectedServiceIds}
          onRemoveService={handleRemoveService}
          onSubmitInquiry={handleSubmitInquiry}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Action */}
      <FloatingWhatsApp />

      {/* Modals */}
      <ServiceModal
        service={activeServiceModal}
        isOpen={!!activeServiceModal}
        onClose={() => setActiveServiceModal(null)}
        isSelected={activeServiceModal ? selectedServiceIds.includes(activeServiceModal.id) : false}
        onToggleSelect={handleToggleServiceSelection}
      />

      <GalleryLightbox
        item={activeLightboxItem}
        isOpen={!!activeLightboxItem}
        onClose={() => setActiveLightboxItem(null)}
      />

      <BookingConfirmationModal
        isOpen={isConfirmationOpen}
        onClose={() => setIsConfirmationOpen(false)}
        inquiry={submittedInquiry}
        bookingRef={bookingRef}
      />
    </div>
  );
}
