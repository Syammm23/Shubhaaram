export interface ServiceItem {
  id: number;
  numberStr: string;
  title: string;
  tag: string;
  category: 'production' | 'artists' | 'media' | 'hospitality';
  icon: string;
  description: string;
  inclusions: string[];
  specs: string;
}

export interface GalleryItem {
  id: number;
  title: string;
  category: 'EVENTS' | 'DECORATION' | 'STAGE' | 'DJ' | 'PERFORMANCES' | 'FIREWORKS';
  categoryLabel: string;
  badgeColor: string;
  imageUrl: string;
  description: string;
  location: string;
}

export interface InquiryFormData {
  name: string;
  phone: string;
  email?: string;
  eventType: string;
  eventDate: string;
  guestCount: string;
  message: string;
  selectedServices?: string[];
}
