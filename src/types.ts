export interface EstieBusinessInfo {
  name: string;
  tagline: string;
  motto: string;
  type: string;
  address: string;
  landmark: string;
  city: string;
  state: string;
  country: string;
  rating: number;
  reviewCount: number;
  phone: string;
  phoneRaw: string;
  whatsappNumber: string;
  email: string;
  openingHours: string;
}

export interface EstieService {
  id: string;
  title: string;
  category: "design" | "windows" | "furnishings" | "flooring";
  categoryLabel: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  iconName: string;
  features: string[];
  materialsOrOptions: string[];
  idealFor: string;
}

export interface PortfolioProject {
  id: string;
  title: string;
  category: string;
  location: string;
  year: string;
  description: string;
  image: string;
  clientType: "Residential" | "Commercial" | "Hospitality";
  servicesIncluded: string[];
  highlights: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: "all" | "living" | "window-treatments" | "bedding" | "flooring" | "commercial";
  categoryLabel: string;
  image: string;
  caption: string;
}

export interface ClientReview {
  id: string;
  clientName: string;
  clientTitle: string;
  location: string;
  rating: number;
  projectType: string;
  date: string;
  reviewText: string;
}

export interface ConsultationRequest {
  fullName: string;
  phone: string;
  email: string;
  locationInLagos: string;
  serviceNeeded: string;
  propertyType: "Residential Apartment/Villa" | "Commercial Office" | "Hotel/Shortlet" | "New Construction" | "Renovation";
  estimatedRooms: string;
  timeline: string;
  consultationPreference: "Sangotedo Showroom Visit" | "On-Site Space Assessment" | "Virtual Consultation via WhatsApp";
  notes: string;
}
