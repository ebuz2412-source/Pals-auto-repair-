export interface SpaceboundBusinessInfo {
  name: string;
  tagline: string;
  motto: string;
  type: string;
  address: string;
  landmark: string;
  city: string;
  state: string;
  country: string;
  postalCode: string;
  rating: number;
  reviewCount: number;
  openingHours: string;
}

export interface SpaceboundService {
  id: string;
  title: string;
  category: "bedroom" | "cabinetry" | "commercial" | "dining";
  categoryLabel: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  iconName: string;
  features: string[];
  materialsOrOptions: string[];
  idealFor: string;
}

export type EstieBusinessInfo = SpaceboundBusinessInfo;
export type EstieService = SpaceboundService;

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
  category: "all" | "bedroom" | "cabinetry" | "commercial" | "dining" | "living";
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
  consultationPreference: "Studio Visit in Abraham Adesanya, Ajah" | "On-Site Space Assessment" | "Digital Concept Review";
  notes: string;
}
