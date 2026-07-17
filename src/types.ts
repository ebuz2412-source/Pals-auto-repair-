/**
 * Shared Type Definitions for Pal Auto Repairs
 */

export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  basePrice: number;
  timeEstimate: string;
  features: string[];
  iconName: string;
}

export interface Testimonial {
  id: string;
  name: string;
  vehicle: string;
  rating: number;
  text: string;
  date: string;
  tag: string; // e.g. "Brake Service", "Winter Prep"
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  description: string;
  blueprintType: "ecu" | "brake" | "alignment" | "winter";
}

export interface QuoteRequest {
  id: string;
  year: string;
  make: string;
  model: string;
  mileage: string;
  serviceType: string;
  description: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  preferredDate: string;
  status: "pending" | "confirmed";
  quoteAmountRange: string;
  createdAt: string;
}
