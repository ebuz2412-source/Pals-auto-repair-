/**
 * Shared Type Definitions for Tunnex Mega Investment (Forklift Dealer)
 */

export type ForkliftCategory = "all" | "electric" | "diesel" | "lpg" | "warehouse" | "heavyduty";

export interface ForkliftSpec {
  loadCapacity: string;
  liftHeight: string;
  fuelType: string;
  engineMotor: string;
  tireType: string;
  turningRadius: string;
  operatingWeight: string;
}

export interface ForkliftItem {
  id: string;
  name: string;
  category: ForkliftCategory;
  categoryLabel: string;
  tagline: string;
  shortDescription: string;
  longDescription: string;
  pricingDisplay: string; // "Contact for Price"
  imageKey: string;
  condition: "Brand New / Imported" | "Certified Inspected" | "Heavy Duty Spec";
  specs: ForkliftSpec;
  features: string[];
  recommendedApplications: string[];
  isAvailable: boolean;
}

export interface ForkliftInquiryRequest {
  id: string;
  companyName: string;
  contactPerson: string;
  contactPhone: string;
  contactEmail: string;
  locationInNigeria: string;
  forkliftType: string;
  tonnageRequirement: string;
  liftHeight: string;
  operatingEnvironment: string;
  tirePreference: string;
  specialNotes: string;
  status: string;
  createdAt: string;
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
