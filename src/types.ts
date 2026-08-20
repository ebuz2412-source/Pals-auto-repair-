/**
 * Shared Type Definitions for Pethona Integrated & Resources LTD (Forklift & Heavy Equipment Dealer)
 */

export type EquipmentCategoryGroup = "all" | "forklifts" | "heavy_equipment";

export type EquipmentCategory = 
  | "all"
  | "electric_forklift"
  | "diesel_forklift"
  | "lpg_forklift"
  | "warehouse_reach"
  | "heavyduty_forklift"
  | "excavator"
  | "bulldozer"
  | "wheel_loader"
  | "backhoe_loader";

export interface EquipmentSpec {
  capacityOrWeight: string; // e.g. "2.5 Ton Capacity" or "21.5 Ton Operating Weight"
  reachOrLiftHeight: string; // e.g. "4,500 mm Mast" or "9.8 m Max Digging Reach"
  enginePower: string; // e.g. "High-Torque Dual AC Motors" or "110 kW (148 HP) Turbo Diesel"
  fuelType: string; // e.g. "Electric (48V)" or "Diesel" or "LPG / Dual-Fuel"
  undercarriageOrTires: string; // e.g. "Solid Industrial Rubber" or "Steel Heavy Tracked" or "Heavy Off-Road Pneumatic"
  operatingMetric: string; // e.g. "Turning Radius: 2,050mm" or "Bucket Capacity: 1.0 - 1.2 m³"
}

export interface EquipmentItem {
  id: string;
  name: string;
  group: "Forklifts" | "Heavy Equipment";
  category: EquipmentCategory;
  categoryLabel: string;
  tagline: string;
  shortDescription: string;
  longDescription: string;
  pricingDisplay: string; // "Contact for Price" or "Request a Quote"
  imageKey: string;
  specs: EquipmentSpec;
  features: string[];
  recommendedApplications: string[];
  isAvailable: boolean;
}

export interface EquipmentInquiryRequest {
  id: string;
  companyName: string;
  contactPerson: string;
  contactPhone: string;
  contactEmail: string;
  locationInNigeria: string;
  equipmentType: string;
  capacityOrWeight: string;
  operatingEnvironment: string;
  additionalRequirement?: string;
  specialNotes: string;
  status: string;
  createdAt: string;
}

// Backward compatibility alias for legacy components if needed
export interface ForkliftInquiryRequest extends EquipmentInquiryRequest {
  forkliftType?: string;
  tonnageRequirement?: string;
  liftHeight?: string;
  tirePreference?: string;
}

export interface SpecificationGuideItem {
  id: string;
  title: string;
  category: string;
  description: string;
  techHighlight: string;
  iconName: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  category: string;
  text: string;
  rating: number;
  equipment: string;
}
