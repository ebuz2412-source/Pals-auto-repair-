export interface BusinessInfo {
  name: string;
  tagline: string;
  shortDescription: string;
  type: string;
  address: string;
  street: string;
  area: string;
  postalCode: string;
  city: string;
  state: string;
  country: string;
  serviceArea: string;
  openingHours: string;
  googleMapsUrl: string;
  whatsappUrl: string;
  phoneLink: string;
  displayPhone: string;
}

export interface GlassService {
  id: string;
  title: string;
  category: "mirrors" | "showers" | "doors" | "partitions" | "balustrades" | "tempered" | "windows" | "repairs" | "shopfront" | "tabletop" | "fabrication";
  categoryLabel: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  iconName: string;
  features: string[];
  specs: string[];
  idealFor: string;
}

export interface GlassProject {
  id: string;
  title: string;
  category: string;
  location: string;
  description: string;
  image: string;
  type: "Residential" | "Commercial" | "Architectural" | "Hospitality";
  materialsUsed: string[];
  keyHighlights: string[];
}

export interface GalleryShowcaseItem {
  id: string;
  title: string;
  category: "all" | "mirrors" | "showers" | "partitions" | "doors" | "balustrades" | "fabrication" | "shopfront" | "tabletop";
  categoryLabel: string;
  image: string;
  caption: string;
  details: string;
}

export interface QuoteCalculationInput {
  fullName: string;
  phoneNumber: string;
  email: string;
  locationInLagos: string;
  productType: string;
  glassThickness: string;
  glassFinish: string;
  widthMm: number;
  heightMm: number;
  quantity: number;
  needInstallation: boolean;
  notes: string;
}
