import { FleetCategory, VehicleItem, LuxuryServiceItem, TestimonialItem, LuxuryStandardItem } from "./types";

// Generated high-resolution luxury automotive imagery
import heroLuxuryCarImg from "./assets/images/luxury_hero_car_1787772294713.jpg";
import luxurySuvImg from "./assets/images/luxury_suv_fleet_1787772309772.jpg";
import luxurySedanImg from "./assets/images/luxury_sedan_fleet_1787772325177.jpg";
import luxurySportsImg from "./assets/images/luxury_sports_fleet_1787772337767.jpg";
import luxuryChauffeurImg from "./assets/images/luxury_chauffeur_vip_1787772351479.jpg";
import luxuryExoticImg from "./assets/images/luxury_exotic_fleet_1787772384699.jpg";

export const LUXURY_IMAGES = {
  hero: heroLuxuryCarImg,
  suv: luxurySuvImg,
  sedan: luxurySedanImg,
  sports: luxurySportsImg,
  chauffeur: luxuryChauffeurImg,
  exotic: luxuryExoticImg,
};

export const BUSINESS_INFO = {
  name: "Luxury Car Rentals",
  tagline: "Luxury Cars. Exceptional Journeys.",
  subheading: "Experience the pinnacle of automotive prestige in Lagos. Providing chauffeured and self-drive luxury sedans, premium SUVs, high-performance sports cars, executive transports, and exotic vehicles.",
  businessType: "Luxury & Exotic Car Rental",
  address: "Adetokunbo Ademola Street, Victoria Island, Lagos 106104, Lagos",
  addressShort: "Adetokunbo Ademola Street, Victoria Island, Lagos",
  cityState: "Victoria Island, Lagos 106104, Nigeria",
  phone: "+234 800 LUXURY (800 589 879)",
  phoneRaw: "+234800589879",
  email: "concierge@luxurycarrentals.ng",
  operatingHours: "24/7 VIP Concierge & Chauffeur Services",
  deskHours: "Monday – Sunday: 24 Hours Available for Reservations",
  googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.7277871239855!2d3.424368574992015!3d6.42900099356209!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf539268f7f2b%3A0xb35a1cb361309f7a!2sAdetokunbo%20Ademola%20St%2C%20Victoria%20Island%2C%20Lagos!5e0!3m2!1sen!2sng!4v1710000000000!5m2!1sen!2sng",
  defaultWhatsAppMessage: "Hello Luxury Car Rentals, I am inquiring about renting a luxury vehicle from your fleet in Victoria Island, Lagos. Please share availability and rental rates.",
};

export function getWhatsAppUrl(customMessage?: string): string {
  const text = customMessage || BUSINESS_INFO.defaultWhatsAppMessage;
  return `https://wa.me/?text=${encodeURIComponent(text)}`;
}

export function getVehicleBookingWhatsAppUrl(vehicleName: string, category: string, dates?: string): string {
  const message = `Hello Luxury Car Rentals, I would like to reserve the ${vehicleName} (${category})${dates ? ` for the dates: ${dates}` : ""}. Please confirm availability, chauffeur options, and rates.`;
  return `https://wa.me/?text=${encodeURIComponent(message)}`;
}

export const FLEET_CATEGORIES: { id: FleetCategory; label: string; count: string }[] = [
  { id: "all", label: "All Vehicles", count: "Complete Fleet" },
  { id: "luxury_sedan", label: "Luxury Sedans", count: "Executive Saloons" },
  { id: "suv", label: "Luxury SUVs", count: "Prestige 4x4" },
  { id: "sports_car", label: "Sports Cars", count: "Grand Tourers" },
  { id: "executive_car", label: "Executive Cars", count: "VIP Transport" },
  { id: "exotic_vehicle", label: "Exotic Vehicles", count: "Ultra-Prestige" },
];

export const FLEET_INVENTORY: VehicleItem[] = [
  {
    id: "luxury-sedan-presidential",
    name: "Executive Luxury Saloon Sedan",
    category: "luxury_sedan",
    categoryLabel: "Luxury Sedan",
    tagline: "Unrivaled Elegance, Smooth Power & Rear-Cabin First-Class Comfort",
    shortDescription: "The gold standard in luxury chauffeur travel, offering whisper-quiet cabin acoustics, quilted Nappa leather, and executive legroom.",
    longDescription: "Engineered for elite executives, foreign dignitaries, and discerning travelers. This flagship luxury sedan delivers an exceptionally smooth, serene ride across Victoria Island, Ikoyi, and beyond. Featuring dual rear entertainment screens, rear seat massage functionality, ambient cabin illumination, and active noise suppression.",
    pricingDisplay: "Inquire for Rates",
    imageKey: "sedan",
    specs: {
      seatingCapacity: "4 - 5 Executive Passengers",
      transmission: "9-Speed Seamless Automatic",
      engineAndPower: "Twin-Turbocharged Engine • 429+ HP",
      driveType: "Intelligent All-Wheel Drive (AWD)",
      accelerationOrTopSpeed: "0-100 km/h in 4.9s",
      comfortHighlight: "First-Class Rear Executive Reclining Seats"
    },
    features: [
      "Perforated Nappa Leather Interior with Heated & Cooled Massaging Seats",
      "Burmester® 3D High-End Surround Sound System",
      "Executive Rear Center Console with Climate & Entertainment Controls",
      "Acoustic Glass with Electric Privacy Sunblinds",
      "Chauffeur-Driven or Approved Self-Drive Available"
    ],
    idealFor: [
      "High-Level Corporate & Diplomatic Mobility",
      "Airport VIP Transfers (MMIA / Executive Terminal)",
      "Luxury Dinner Dates & Special Evenings",
      "Executive Business Meetings in VI & Ikoyi"
    ],
    chauffeurAvailable: true,
    selfDriveAvailable: true,
    isAvailable: true,
    featured: true
  },
  {
    id: "luxury-suv-flagship",
    name: "Full-Size Ultra-Luxury SUV",
    category: "suv",
    categoryLabel: "Luxury SUV",
    tagline: "Commanding Road Presence, Elevated Luxury & All-Terrain Dominance",
    shortDescription: "Imposing design, generous luggage capacity, and supreme comfort over all road surfaces across Lagos and interstate routes.",
    longDescription: "Combining majestic presence with effortless torque, our full-size luxury SUVs deliver unmatched confidence and luxury. Ideal for executive convoys, family vacations, wedding escorts, and VIP transit. With electronic air suspension, panoramic sliding roof, and rear privacy glass.",
    pricingDisplay: "Inquire for Rates",
    imageKey: "suv",
    specs: {
      seatingCapacity: "5 - 7 Passenger Executive Configurations",
      transmission: "8-Speed Automatic with Paddle Shift",
      engineAndPower: "V8 Supercharged / Turbo • 518+ HP",
      driveType: "Adaptive Terrain All-Wheel Drive (AWD)",
      accelerationOrTopSpeed: "0-100 km/h in 4.6s",
      comfortHighlight: "Adaptive Air Suspension with Height Control"
    },
    features: [
      "Full Panoramic Sunroof with Solar Reflective Glass",
      "Executive 2nd & 3rd Row Reconfigurable Leather Seating",
      "360-Degree Surround HD Cameras with Blind Spot Protection",
      "Multi-Zone Automatic Climate Control with Air Purifier",
      "Reinforced Security & Convoy Pilot Options Available"
    ],
    idealFor: [
      "VIP Corporate Convoys & Security Details",
      "Luxury Wedding Entourages & Bridal Parties",
      "Airport Transfers with Ample Luggage Capacity",
      "Weekend Escapes to Luxury Beach Resorts & Private Estates"
    ],
    chauffeurAvailable: true,
    selfDriveAvailable: true,
    isAvailable: true,
    featured: true
  },
  {
    id: "sports-car-gt",
    name: "Grand Touring High-Performance Sports Coupe",
    category: "sports_car",
    categoryLabel: "Sports Car",
    tagline: "Heart-Pounding Performance, Aerodynamic Masterpiece & Exhilarating Drive",
    shortDescription: "A pure adrenaline rush designed for those who appreciate precision handling, aggressive exhaust acoustics, and iconic sports styling.",
    longDescription: "Turn every street into a runway. Our grand touring performance sports cars feature lightweight architecture, lightning-quick dual-clutch shifting, sport exhaust systems, and race-inspired cockpit interiors. Perfect for grand entrances, music videos, luxury photoshoots, and weekend thrills.",
    pricingDisplay: "Inquire for Rates",
    imageKey: "sports",
    specs: {
      seatingCapacity: "2 - 4 Sports Bucket Seats",
      transmission: "7-Speed Dual-Clutch Sport Transmission",
      engineAndPower: "Twin-Turbocharged Boxer / V8 • 450+ HP",
      driveType: "Rear-Wheel Drive (RWD) / Performance AWD",
      accelerationOrTopSpeed: "0-100 km/h in 3.4s",
      comfortHighlight: "Adaptive Sport Exhaust & Dynamic Launch Control"
    },
    features: [
      "Carbon Fiber Exterior Trim & Active Aerodynamic Rear Spoiler",
      "Sport Chrono Package with Track-Inspired Digital Instruments",
      "Alcantara & Carbon Fiber Sport Steering Wheel",
      "Custom Valved Exhaust with Switchable Loud Mode",
      "Bespoke Sound System with Apple CarPlay & Android Auto"
    ],
    idealFor: [
      "Luxury Photoshoots & High-End Commercial Productions",
      "Special Occasions, Birthdays & Milestone Celebrations",
      "Thrilling Weekend Drives along the Coastal Corridors",
      "Unforgettable Red Carpet & Gala Entrances"
    ],
    chauffeurAvailable: true,
    selfDriveAvailable: true,
    isAvailable: true,
    featured: true
  },
  {
    id: "executive-van-vip",
    name: "Chauffeured Executive VIP Jet Van",
    category: "executive_car",
    categoryLabel: "Executive Car",
    tagline: "A Private Jet on Wheels for Boardroom Meetings On-The-Move",
    shortDescription: "Equipped with captain recliner chairs, partition smart TV, onboard Wi-Fi, and mini-bar for high-profile group executive transit.",
    longDescription: "Designed for business leaders who value continuous productivity and uncompromising privacy. The executive cabin provides reclining captain chairs with leg rests, folding conference tables, high-speed Starlink Wi-Fi, privacy intercom to the chauffeur, and ambient starlight roof lighting.",
    pricingDisplay: "Inquire for Rates",
    imageKey: "chauffeur",
    specs: {
      seatingCapacity: "4 - 7 VIP First-Class Recliners",
      transmission: "Smooth Heavy-Duty Automatic",
      engineAndPower: "Turbocharged Diesel / V6 • Smooth Torque",
      driveType: "Rear-Wheel Drive / 4x4",
      accelerationOrTopSpeed: "Pristine Paved Highway Transit",
      comfortHighlight: "Full Partition, 43-Inch Smart TV & Starlight Roof"
    },
    features: [
      "Aviation-Grade Reclining Captain Chairs with Heating & Massage",
      "Motorized Privacy Glass Partition with Chauffeur Intercom",
      "43-inch 4K Smart TV, Apple TV & Premium Studio Sound",
      "Onboard Espresso Machine, Chilled Mini-Bar & Wine Cooler",
      "Discreet Vetted Chauffeurs Trained in Executive Protocol"
    ],
    idealFor: [
      "Corporate Board Members & Executive Traveling Teams",
      "Celebrity Touring & High-Security VIP Mobility",
      "Interstate Luxury Travel between Lagos & Major Hubs",
      "Mobile Office & Confidential Business Negotiations"
    ],
    chauffeurAvailable: true,
    selfDriveAvailable: false,
    isAvailable: true,
    featured: true
  },
  {
    id: "exotic-supercar-flagship",
    name: "Prestige Exotic Supercar & Ultra-Luxury",
    category: "exotic_vehicle",
    categoryLabel: "Exotic Vehicle",
    tagline: "The Pinnacle of Automotive Extravagance & Status",
    shortDescription: "Ultra-rare, high-status exotic vehicles crafted with hand-finished bespoke materials, dramatic presence, and unmatched prestige.",
    longDescription: "When only the absolute summit of luxury will suffice. Our exotic collection brings together prestigious hand-built vehicles and hypercars. Ideal for royal visits, high-society weddings, VIP red carpets, and executive leisure.",
    pricingDisplay: "Inquire for Rates",
    imageKey: "exotic",
    specs: {
      seatingCapacity: "2 - 5 Ultra-Luxury Seats",
      transmission: "Performance Automatic / Dual-Clutch",
      engineAndPower: "Hand-Assembled V10 / V12 Twin-Turbo • 600+ HP",
      driveType: "Permanent All-Wheel Drive / RWD",
      accelerationOrTopSpeed: "Breathtaking Speed & Majestic Presence",
      comfortHighlight: "Hand-Stitched Bespoke Leather & Starlight Headliner"
    },
    features: [
      "Iconic Dihedral / Coach Doors with Motorized Soft-Close",
      "Bespoke Hand-Polished Veneers and Rare Alloy Accents",
      "Custom Starlight Fibre-Optic Ceiling Illumination",
      "VIP Dedicated White-Glove Concierge & Chauffeur",
      "Flawless Showroom Condition Maintained Daily"
    ],
    idealFor: [
      "Ultra-Luxury Weddings & Bridal Grand Entrances",
      "International Celebrity & Dignitary Hosting",
      "Premier Red Carpet & Film Premieres in Lagos",
      "Milestone Anniversaries & Exclusive Celebrations"
    ],
    chauffeurAvailable: true,
    selfDriveAvailable: true,
    isAvailable: true,
    featured: true
  }
];

export const LUXURY_SERVICES: LuxuryServiceItem[] = [
  {
    id: "business-trips",
    title: "Business Trips & Corporate Mobility",
    subtitle: "Punctual, Posh & Productive Executive Transport",
    description: "Ensure your corporate executives, international partners, and board members travel in absolute comfort and privacy across Victoria Island, Ikoyi, and Ikeja business districts.",
    iconName: "Briefcase",
    badge: "Corporate Fleet",
    highlights: [
      "Dedicated uniformed chauffeurs with executive route knowledge",
      "In-cabin Wi-Fi, charging ports, and whisper-quiet privacy",
      "Flexible hourly, daily, and monthly corporate retainer contracts",
      "Discreet billing and streamlined corporate invoicing"
    ],
    recommendedVehicles: ["Executive Luxury Saloon Sedan", "Full-Size Ultra-Luxury SUV", "Chauffeured Executive VIP Jet Van"]
  },
  {
    id: "weddings",
    title: "Weddings & Matrimonial Entourages",
    subtitle: "Make an Unforgettable Grand Entrance on Your Special Day",
    description: "Complete your dream wedding with our prestigious bridal fleet. We provide immaculate lead cars, groom transports, and coordinated bridesmaid/groomsmen luxury convoys.",
    iconName: "HeartHandshake",
    badge: "Bridal Prestige",
    highlights: [
      "Complimentary decorative satin ribbons and floral mountings",
      "Chilled champagne bucket and red carpet step-out service",
      "Punctual arrival guaranteed 1 hour prior to wedding call time",
      "Camera-ready vehicles detailed to showroom perfection"
    ],
    recommendedVehicles: ["Prestige Exotic Supercar & Ultra-Luxury", "Executive Luxury Saloon Sedan", "Full-Size Ultra-Luxury SUV"]
  },
  {
    id: "airport-transfers",
    title: "Airport VIP Meet-and-Greet Transfers",
    subtitle: "Seamless First-Class Transit from Runway to Destination",
    description: "Stress-free airport pickups and drop-offs at Murtala Muhammed International Airport (MMIA), General Aviation Terminal (GAT), and Executive Private Jet Wings.",
    iconName: "Plane",
    badge: "Airport Protocol",
    highlights: [
      "Real-time flight tracking to accommodate delays and early arrivals",
      "Tarmac / Terminal meet-and-greet with luggage assistance",
      "Air-conditioned cabin cooled and ready upon landing",
      "Direct transit to luxury hotels across Victoria Island and Ikoyi"
    ],
    recommendedVehicles: ["Full-Size Ultra-Luxury SUV", "Executive Luxury Saloon Sedan", "Chauffeured Executive VIP Jet Van"]
  },
  {
    id: "special-occasions",
    title: "Special Occasions & Milestone Galas",
    subtitle: "Elevate Birthdays, Anniversaries & Romance",
    description: "Celebrate life's monumental moments in style. Arrive at fine dining restaurants, private yachts, or high-profile soirees in a stunning luxury vehicle.",
    iconName: "Sparkles",
    badge: "Celebration",
    highlights: [
      "Personalized itinerary with multiple scenic photo stops",
      "Curated in-car mood lighting and playlist integration",
      "Flexible evening and late-night concierge coverage",
      "Chauffeur standing by throughout your entire event"
    ],
    recommendedVehicles: ["Grand Touring High-Performance Sports Coupe", "Prestige Exotic Supercar & Ultra-Luxury"]
  },
  {
    id: "vacations-leisure",
    title: "Vacations & Luxury Leisure Escapes",
    subtitle: "Tour Lagos and Coastal Resorts in Total Comfort",
    description: "Explore the best of Lagos, from private beach resorts on the Lekki corridor to upscale cultural centers, with an effortless, climate-controlled ride.",
    iconName: "Compass",
    badge: "Leisure & Escapes",
    highlights: [
      "High-ground clearance luxury SUVs suited for coastal estate roads",
      "Spacious cargo space for luggage, golf bags, and leisure gear",
      "Experienced local drivers knowledgeable on top destinations",
      "Custom multi-day vacation packages"
    ],
    recommendedVehicles: ["Full-Size Ultra-Luxury SUV", "Grand Touring High-Performance Sports Coupe"]
  },
  {
    id: "events-productions",
    title: "Events & High-Profile Gatherings",
    subtitle: "Concerts, Red Carpets & Film/Music Video Productions",
    description: "Providing show-stopping vehicles for movie sets, music video shoots, fashion runways, album launches, and star-studded red carpet galas.",
    iconName: "Film",
    badge: "Media & Galas",
    highlights: [
      "Static display and dynamic driving scene hire options",
      "Flexible half-day and full-day production studio rates",
      "Flawless exterior paintwork with zero blemishes for close-up 4K cameras",
      "Dedicated handler on set to position and maintain vehicles"
    ],
    recommendedVehicles: ["Prestige Exotic Supercar & Ultra-Luxury", "Grand Touring High-Performance Sports Coupe"]
  },
  {
    id: "executive-transportation",
    title: "Executive & Chauffeur-Driven Transportation",
    subtitle: "Discreet, Armed Protocol & High-Security Convoys",
    description: "Complete peace of mind for diplomats, multinationals, and VIPs requiring advanced security escorts, pilot vehicles, and defensive-driving trained chauffeurs.",
    iconName: "ShieldCheck",
    badge: "Security & Chauffeur",
    highlights: [
      "Vetted executive drivers certified in security and evasive maneuvers",
      "Optional armed escort chaser vehicles and security protocol",
      "GPS tracked fleet with 24/7 central monitoring headquarters",
      "Strict non-disclosure agreements (NDA) adhered to by all personnel"
    ],
    recommendedVehicles: ["Chauffeured Executive VIP Jet Van", "Full-Size Ultra-Luxury SUV", "Executive Luxury Saloon Sedan"]
  }
];

export const WHY_CHOOSE_US: LuxuryStandardItem[] = [
  {
    id: "prime-location",
    title: "Victoria Island Flagship Location",
    description: "Centrally positioned on Adetokunbo Ademola Street, Victoria Island for rapid vehicle dispatch, viewings, and immediate bookings across Lagos.",
    icon: "MapPin"
  },
  {
    id: "flawless-fleet",
    title: "Showroom-Grade Maintenance",
    description: "Every vehicle is thoroughly sanitized, multi-point safety inspected, and detailed to concours standards prior to every handover.",
    icon: "Sparkles"
  },
  {
    id: "elite-chauffeurs",
    title: "Trained Professional Chauffeurs",
    description: "Polite, uniformed, and knowledgeable drivers trained in executive etiquette, route efficiency, and defensive driving.",
    icon: "UserCheck"
  },
  {
    id: "bespoke-flexibility",
    title: "Tailored Hourly to Monthly Terms",
    description: "Flexible rental structures whether you need an exotic car for a 4-hour photoshoot, a weekend wedding, or a long-term corporate lease.",
    icon: "Clock"
  },
  {
    id: "security-protocol",
    title: "Security & Escort Options",
    description: "Coordinated armed security details, pilot escort vehicles, and VIP protocol for high-profile delegations and foreign visitors.",
    icon: "Shield"
  },
  {
    id: "24-7-concierge",
    title: "24/7 Dedicated VIP Concierge",
    description: "Instant reservations, roadside assistance, and swift booking updates via direct phone, WhatsApp, or email anytime of day or night.",
    icon: "Headphones"
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "t1",
    clientName: "Dr. Oluwaseun Davies",
    clientTitle: "Managing Partner",
    organizationOrEvent: "Private Equity Summit, Eko Hotel VI",
    serviceUsed: "Business Trips & Corporate Mobility",
    vehicleRented: "Executive Luxury Saloon Sedan",
    comment: "Luxury Car Rentals delivered world-class service during our annual summit in Victoria Island. The chauffeur was punctual, polite, and navigated Lagos traffic effortlessly. Highly recommended for international executives.",
    rating: 5,
    date: "Recent Reservation"
  },
  {
    id: "t2",
    clientName: "Folashade & Tunde Adeleke",
    clientTitle: "Bride & Groom",
    organizationOrEvent: "Grand Wedding at Landmark Centre",
    serviceUsed: "Weddings & Matrimonial Entourages",
    vehicleRented: "Prestige Exotic Supercar & Ultra-Luxury",
    comment: "The wedding cars arrived 45 minutes ahead of time in pristine condition with beautiful ribbons. Our bridal entrance was magnificent and the photos looked straight out of a luxury magazine!",
    rating: 5,
    date: "Recent Wedding"
  },
  {
    id: "t3",
    clientName: "Marcus Sterling",
    clientTitle: "Regional VP, Energy Infrastructure",
    organizationOrEvent: "MMIA Airport VIP Transfer & Ikoyi Stay",
    serviceUsed: "Airport Transfers & Executive Protocol",
    vehicleRented: "Full-Size Ultra-Luxury SUV",
    comment: "From the moment I walked out of the private jet terminal, their driver was waiting with a cold towel and chilled water in a spotless SUV. Smooth, secure, and completely dependable.",
    rating: 5,
    date: "Recent Airport Transfer"
  },
  {
    id: "t4",
    clientName: "Ngozi Ezechukwu",
    clientTitle: "Executive Producer",
    organizationOrEvent: "Commercial Film Shoot on Victoria Island",
    serviceUsed: "Events & Media Productions",
    vehicleRented: "Grand Touring High-Performance Sports Coupe",
    comment: "Rented their sports coupe for a two-day fashion and commercial shoot. The vehicle's paintwork and interior were immaculate. The team at their Adetokunbo Ademola office was extremely accommodating.",
    rating: 5,
    date: "Recent Production"
  }
];

export const FAQS = [
  {
    q: "What documents are required to rent a luxury vehicle?",
    a: "For chauffeur-driven rentals, valid government-issued ID (National ID, International Passport, or Voter's Card) and contact details are required. For approved self-drive rentals, a valid Driver's License, proof of address, and a refundable security deposit are required."
  },
  {
    q: "Do you offer both Chauffeur-Driven and Self-Drive options?",
    a: "Yes. The vast majority of our luxury fleet is available with professional, uniformed chauffeurs for effortless relaxation. Select luxury sedans and sports cars are also available for self-drive subject to standard verification."
  },
  {
    q: "Where is your office located in Victoria Island?",
    a: "Our prime location is on Adetokunbo Ademola Street, Victoria Island, Lagos 106104, Lagos. You are welcome to visit for physical fleet inspection or we can deliver the vehicle directly to your residence, hotel, or airport terminal."
  },
  {
    q: "How quickly can a car be delivered or dispatched?",
    a: "For vehicles in stock, dispatch across Victoria Island, Ikoyi, and Lekki Phase 1 can be fulfilled within 1 to 2 hours. We recommend booking in advance for weddings and major event dates to guarantee vehicle availability."
  },
  {
    q: "Can you provide armed escort vehicles or convoy pilots?",
    a: "Yes. We coordinate certified executive protection personnel and pilot escort vehicles for VIPs, foreign dignitaries, and executive delegations requiring enhanced security protocols."
  }
];
