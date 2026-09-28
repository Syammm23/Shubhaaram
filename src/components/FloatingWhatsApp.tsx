import React from 'react';

export const FloatingWhatsApp: React.FC = () => {
  const whatsappUrl =
    'https://wa.me/919876543210?text=Hello%20Shubhaarambh%20Events!%20I%20would%20like%20to%20inquire%20about%20planning%20a%20luxury%20event.';

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      title="Chat with us on WhatsApp"
      className="whatsapp-float fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center group"
    >
      <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
        <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.299.144.35.491 1.199.534 1.286.043.087.072.188.014.303-.058.116-.087.188-.173.289l-.26.302c-.087.087-.179.182-.077.357.101.174.45 1.008 1.488 1.834.722.576 1.332.754 1.52.841.188.087.299.072.411-.058.112-.13.477-.557.604-.748.127-.191.254-.159.426-.095.172.064 1.088.513 1.275.607.187.094.312.14.358.219.046.079.046.852-.098 1.257z" />
      </svg>
      <span className="absolute right-16 px-3 py-1.5 rounded-lg bg-[#090514] text-white text-xs font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 border border-[#F59E0B]/30 pointer-events-none">
        Chat with us on WhatsApp
      </span>
    </a>
  );
};
