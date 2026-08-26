/**
 * Shared Type Definitions for Luxury Car Rentals
 * Location: Adetokunbo Ademola Street, Victoria Island, Lagos 106104, Lagos
 */

export type FleetCategory =
  | "all"
  | "luxury_sedan"
  | "suv"
  | "sports_car"
  | "executive_car"
  | "exotic_vehicle";

export interface VehicleSpecs {
  seatingCapacity: string; // e.g. "4 - 5 Luxury Leather Seats"
  transmission: string; // e.g. "Automatic 9-Speed / Dual-Clutch"
  engineAndPower: string; // e.g. "4.0L Twin-Turbo V8 • 500+ HP"
  driveType: string; // e.g. "All-Wheel Drive (AWD) / RWD"
  accelerationOrTopSpeed: string; // e.g. "0-100 km/h in 4.5s" or "Executive Cruising"
  comfortHighlight: string; // e.g. "Executive Reclining Rear Massage Seats"
}

export interface VehicleItem {
  id: string;
  name: string;
  category: FleetCategory;
  categoryLabel: string;
  tagline: string;
  shortDescription: string;
  longDescription: string;
  pricingDisplay: string; // "Inquire for Rates" / "Contact for Availability"
  imageKey: "hero" | "sedan" | "suv" | "sports" | "chauffeur" | "exotic";
  specs: VehicleSpecs;
  features: string[];
  idealFor: string[];
  chauffeurAvailable: boolean;
  selfDriveAvailable: boolean;
  isAvailable: boolean;
  featured?: boolean;
}

export interface LuxuryServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  badge: string;
  highlights: string[];
  recommendedVehicles: string[];
}

export interface BookingInquiryRequest {
  id: string;
  fullName: string;
  phoneNumber: string;
  email?: string;
  desiredVehicle: string;
  vehicleCategory: string;
  rentalDate: string;
  returnDate: string;
  pickupTime?: string;
  chauffeurPreference: "Chauffeur-Driven" | "Self-Drive" | "Undecided";
  pickupLocation: string;
  additionalRequirements: string;
  specialNotes?: string;
  status: "Pending" | "Confirmed" | "Processing";
  createdAt: string;
}

export interface TestimonialItem {
  id: string;
  clientName: string;
  clientTitle: string;
  organizationOrEvent: string;
  serviceUsed: string;
  vehicleRented: string;
  comment: string;
  rating: number;
  date: string;
}

export interface LuxuryStandardItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}
