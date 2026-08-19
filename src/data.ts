import { ForkliftItem, SpecificationGuideItem, TestimonialItem } from "./types";

export const TUNNEX_BUSINESS_INFO = {
  name: "Tunnex Mega Investment",
  shortName: "Tunnex Forklifts",
  tagline: "Quality Forklifts for Your Business",
  subheading: "We sell forklifts and provide forklift solutions for businesses across Lagos and nationwide.",
  businessType: "Forklift Dealer / Forklift Sales",
  address: "288 Papa Major Bus Stop, Ikotun-Ijegun Road, Ijegun, Lagos, Nigeria, 100213",
  addressShort: "288 Papa Major Bus Stop, Ikotun-Ijegun Rd, Ijegun, Lagos",
  stateCountry: "Lagos, Nigeria",
  postalCode: "100213",
  hours: [
    { days: "Monday - Friday", times: "8:00 AM - 6:00 PM" },
    { days: "Saturday", times: "9:00 AM - 4:00 PM" },
    { days: "Sunday", times: "By Appointment / WhatsApp" }
  ],
  googleMapsUrl: "https://maps.google.com/?q=288+Papa+Major+Bus+Stop,+Ikotun-Ijegun+Road,+Ijegun,+Lagos,+Nigeria",
  defaultWhatsAppMessage: "Hello Tunnex Mega Investment, I'm interested in your forklifts. I'd like to know what is currently available.",
  inquiryNotice: "Sample inventory listings shown below. Contact us directly to confirm current stock availability and receive a formal quotation."
};

export function getWhatsAppUrl(customMessage?: string): string {
  const text = customMessage || TUNNEX_BUSINESS_INFO.defaultWhatsAppMessage;
  return `https://wa.me/?text=${encodeURIComponent(text)}`;
}

export function getForkliftWhatsAppUrl(forkliftName: string, specsSummary?: string): string {
  const message = `Hello Tunnex Mega Investment, I'm inquiring about the ${forkliftName}${specsSummary ? ` (${specsSummary})` : ""}. Could you please share the current price, availability, and inspection details?`;
  return `https://wa.me/?text=${encodeURIComponent(message)}`;
}

export const FORKLIFT_CATEGORIES = [
  { id: "all", label: "All Forklifts" },
  { id: "electric", label: "Electric Forklifts" },
  { id: "diesel", label: "Diesel Forklifts" },
  { id: "lpg", label: "LPG / Gas Forklifts" },
  { id: "warehouse", label: "Warehouse Forklifts" },
  { id: "heavyduty", label: "Heavy-Duty Forklifts" }
] as const;

export const FORKLIFT_INVENTORY: ForkliftItem[] = [
  {
    id: "electric-25t",
    name: "2.5 Ton Electric Counterbalance Forklift",
    category: "electric",
    categoryLabel: "Electric Forklift",
    tagline: "Zero Emissions & Low Noise for Indoor Warehouses",
    shortDescription: "Ideal for indoor warehouses, food processing, and pharmaceuticals requiring clean, emission-free operation and tight maneuverability.",
    longDescription: "This 2.5-ton electric counterbalance forklift is designed for quiet, smooth indoor material handling. Equipped with high-efficiency AC traction motors, regenerative braking, and ergonomic operator controls, it delivers reliable multi-shift productivity without exhaust fumes.",
    pricingDisplay: "Contact for Price",
    imageKey: "electric",
    condition: "Certified Inspected",
    specs: {
      loadCapacity: "2,500 kg (2.5 Ton)",
      liftHeight: "3,000 mm - 4,500 mm (Duplex / Triplex Mast)",
      fuelType: "Electric (48V / 80V High Capacity Battery)",
      engineMotor: "High-Torque Dual AC Drive Motors",
      tireType: "Solid Non-Marking Industrial Tires",
      turningRadius: "2,050 mm",
      operatingWeight: "Approx. 4,100 kg"
    },
    features: [
      "Zero exhaust emissions for clean indoor compliance",
      "Ergonomic full-suspension seat with safety interlock",
      "Digital LED display with battery state-of-charge indicator",
      "Integrated side shifter for precise pallet positioning",
      "Heavy-duty overhead guard cage for operator safety"
    ],
    recommendedApplications: [
      "Indoor Logistics Warehouses",
      "FMCG & Food Storage Facilities",
      "Pharmaceutical Distribution",
      "Manufacturing & Packaging Lines"
    ],
    isAvailable: true
  },
  {
    id: "diesel-35t",
    name: "3.5 Ton Rugged Diesel Industrial Forklift",
    category: "diesel",
    categoryLabel: "Diesel Forklift",
    tagline: "High Torque & Power for Heavy Outdoor Yard Work",
    shortDescription: "Built for tough outdoor yard operations, construction supply, logistics hubs, and heavy industrial pallet handling.",
    longDescription: "Engineered for robust power and continuous outdoor duties, this 3.5-ton diesel forklift delivers superior torque and lifting speed. Built with a reinforced steel chassis, heavy-duty hydraulic cooling, and deep-tread pneumatic tires for rough paved or unpaved grounds.",
    pricingDisplay: "Contact for Price",
    imageKey: "diesel",
    condition: "Heavy Duty Spec",
    specs: {
      loadCapacity: "3,500 kg (3.5 Ton)",
      liftHeight: "3,000 mm - 4,800 mm High-Visibility Mast",
      fuelType: "Industrial Diesel",
      engineMotor: "4-Cylinder Heavy-Duty Industrial Diesel Engine",
      tireType: "Heavy-Duty Pneumatic / Lug-Tread Tires",
      turningRadius: "2,420 mm",
      operatingWeight: "Approx. 4,850 kg"
    },
    features: [
      "High-power diesel engine with exceptional gradeability",
      "Wide-view mast offering unobstructed operator visibility",
      "Dual front headlights and rear safety beacon light",
      "Heavy-duty hydraulic oil cooling radiator for hot ambient climates",
      "Full steel overhead protection cage and safety seatbelt"
    ],
    recommendedApplications: [
      "Open Logistics Yards & Freight Hubs",
      "Building Material & Hardware Depots",
      "Factory Yards & Heavy Fabrication",
      "Container Freight Stations & Loading Docks"
    ],
    isAvailable: true
  },
  {
    id: "lpg-30t",
    name: "3.0 Ton Dual-Fuel LPG / Gasoline Forklift",
    category: "lpg",
    categoryLabel: "LPG / Gas Forklift",
    tagline: "Versatile Indoor & Outdoor Performance with Quick Refueling",
    shortDescription: "Flexible dual-fuel capability providing low emissions for indoor use and quick cylinder swaps for uninterrupted productivity.",
    longDescription: "The 3.0-ton LPG/Gasoline forklift bridges the gap between indoor cleanliness and outdoor power. Featuring low particulate emissions compared to standard diesel and rapid propane tank swaps that eliminate lengthy battery charging downtimes.",
    pricingDisplay: "Contact for Price",
    imageKey: "lpg",
    condition: "Certified Inspected",
    specs: {
      loadCapacity: "3,000 kg (3.0 Ton)",
      liftHeight: "3,000 mm - 4,500 mm Triplex Mast",
      fuelType: "LPG (Propane) / Dual-Fuel Gasoline",
      engineMotor: "Industrial Low-Emission Gas Engine",
      tireType: "Pneumatic or Solid Cushion Industrial Tires",
      turningRadius: "2,280 mm",
      operatingWeight: "Approx. 4,350 kg"
    },
    features: [
      "Quick-clamp rear LPG cylinder mounting bracket",
      "Clean-burning fuel system with reduced carbon emissions",
      "Smooth hydraulic controls with tilt and side-shift",
      "Hydrostatic power steering for responsive handling",
      "Low maintenance downtime with easy filter access"
    ],
    recommendedApplications: [
      "Hybrid Indoor/Outdoor Warehouses",
      "Distribution Centers & Cross-Docks",
      "Retail Superstores & Hardware Marts",
      "Food & Beverage Packaging Depots"
    ],
    isAvailable: true
  },
  {
    id: "warehouse-reach-20t",
    name: "2.0 Ton High-Reach Warehouse Reach Truck",
    category: "warehouse",
    categoryLabel: "Warehouse Forklift",
    tagline: "Maximized Vertical Storage in Narrow Aisle Racking",
    shortDescription: "Specialized for high-density warehouse racking systems with extended vertical lifting capability and compact turning.",
    longDescription: "Designed specifically for vertical pallet optimization in modern warehouses, this 2.0-ton reach truck features a forward-extending mast assembly and compact chassis that operates seamlessly in narrow aisles up to high pallet storage tiers.",
    pricingDisplay: "Contact for Price",
    imageKey: "warehouse",
    condition: "Brand New / Imported",
    specs: {
      loadCapacity: "2,000 kg (2.0 Ton)",
      liftHeight: "4,500 mm - 7,500 mm Extended Triplex Mast",
      fuelType: "Electric (High Capacity Industrial Battery)",
      engineMotor: "AC Drive & Heavy Hydraulic Lift Pump",
      tireType: "Polyurethane Drive & Load Wheels",
      turningRadius: "1,750 mm (Narrow Aisle Capable)",
      operatingWeight: "Approx. 3,600 kg"
    },
    features: [
      "Pantograph or moving mast mechanism for deep rack reach",
      "Proportional hydraulic fingertip controls",
      "Mast height safety cut-off and speed-limiting sensors",
      "Camera & screen mast monitoring option for high tier lifts",
      "360-degree electric steering for tight warehouse turns"
    ],
    recommendedApplications: [
      "High-Bay Pallet Racking Warehouses",
      "Cold Storage & Freezers",
      "Third-Party Logistics (3PL) Hubs",
      "E-Commerce Fulfillment Centers"
    ],
    isAvailable: true
  },
  {
    id: "heavyduty-70t",
    name: "7.0 Ton Heavy-Duty Industrial Forklift",
    category: "heavyduty",
    categoryLabel: "Heavy-Duty Forklift",
    tagline: "Massive Load Capacity for Industrial Cargo & Machinery",
    shortDescription: "Engineered for primary industries, steel handling, heavy machinery transport, and oversized industrial containers.",
    longDescription: "When standard material handling equipment falls short, this 7.0-ton heavy-duty industrial forklift provides the robust lifting backbone needed for steel, precast concrete, timber bundles, and machinery skids in demanding industrial settings.",
    pricingDisplay: "Contact for Price",
    imageKey: "heavyduty",
    condition: "Heavy Duty Spec",
    specs: {
      loadCapacity: "7,000 kg (7.0 Ton)",
      liftHeight: "3,000 mm - 4,500 mm Reinforced Mast",
      fuelType: "Heavy Industrial Turbo Diesel",
      engineMotor: "High-Displacement 6-Cylinder Turbo Engine",
      tireType: "Dual Front Heavy Pneumatic Drive Tires",
      turningRadius: "3,350 mm",
      operatingWeight: "Approx. 9,400 kg"
    },
    features: [
      "Dual front drive wheels for superior ground stability",
      "Reinforced heavy-gauge mast channels with heavy roller bearings",
      "Hydraulic fork positioner & side-shifter for varying cargo sizes",
      "Air-conditioned fully enclosed operator cabin option",
      "Heavy cast counterweight engineered for maximum tipping safety"
    ],
    recommendedApplications: [
      "Steel Mills & Metal Stockholders",
      "Precast Concrete & Construction Yards",
      "Heavy Machinery & Generator Rigging",
      "Port Logistics & Heavy Container Terminals"
    ],
    isAvailable: true
  }
];

export const WHY_CHOOSE_TUNNEX = [
  {
    id: "b1",
    title: "Quality Equipment",
    description: "Every forklift we supply undergoes rigorous mechanical and hydraulic inspection to ensure dependable performance for your daily business operations."
  },
  {
    id: "b2",
    title: "Professional Service",
    description: "Our knowledgeable team works with you to understand your load capacities, mast heights, and working environment to recommend the right forklift."
  },
  {
    id: "b3",
    title: "Business-Focused Solutions",
    description: "We understand that material handling downtime impacts your bottom line. We provide equipment suited for warehouses, logistics yards, factories, and commercial depots."
  },
  {
    id: "b4",
    title: "Convenient Lagos Location",
    description: "Located at 288 Papa Major Bus Stop on Ikotun-Ijegun Road, Ijegun, Lagos, allowing easy access for physical inspections and swift customer support."
  },
  {
    id: "b5",
    title: "Easy Customer Inquiries",
    description: "Transparent communication with direct phone, WhatsApp, and email channels so you can quickly get specifications, stock updates, and formal price quotes."
  }
];

export const SPEC_GUIDES: SpecificationGuideItem[] = [
  {
    id: "g1",
    title: "Load Capacity & Load Center",
    category: "Equipment Selection Guide",
    description: "Forklift ratings (e.g. 2.5T, 3.5T, 7.0T) are measured at a standard 500mm or 600mm load center. Always choose a capacity that exceeds your heaviest standard pallet.",
    techHighlight: "Rated at 500mm standard load center",
    iconName: "Scale"
  },
  {
    id: "g2",
    title: "Mast Types & Clear Ceiling Height",
    category: "Lifting Specifications",
    description: "Duplex (2-stage) masts are cost-effective for standard heights, while Triplex (3-stage) masts offer full free lift for low doorway clearance and high vertical stacking.",
    techHighlight: "Duplex & Triplex full-free-lift configurations",
    iconName: "ArrowUpRight"
  },
  {
    id: "g3",
    title: "Power Source: Electric vs Diesel vs LPG",
    category: "Fuel & Powertrain",
    description: "Electric units are emission-free for food and pharmaceutical warehouses. Diesel provides maximum outdoor torque and all-weather durability. LPG allows quick indoor/outdoor fuel changes.",
    techHighlight: "Tailored to your specific site airflow & shift hours",
    iconName: "Zap"
  },
  {
    id: "g4",
    title: "Tire Types: Solid vs Pneumatic",
    category: "Ground Stability",
    description: "Solid puncture-proof rubber tires are ideal for smooth warehouse floors and recycling yards with debris. Pneumatic air-filled tires provide cushioning over rough outdoor terrain.",
    techHighlight: "Non-marking solid rubber or heavy pneumatic tread",
    iconName: "CircleDot"
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "t1",
    name: "Emeka Nwankwo",
    role: "Warehouse Operations Manager",
    company: "Lagos Logistics Hub",
    category: "Warehousing",
    text: "We acquired two 2.5-ton electric forklifts for our FMCG distribution warehouse in Lagos. The battery runtime and compact turning radius inside our narrow pallet aisles have significantly sped up dispatch.",
    rating: 5,
    equipment: "2.5 Ton Electric Counterbalance"
  },
  {
    id: "t2",
    name: "Alhaji Bello Garba",
    role: "Plant Director",
    company: "Manufacturing & Precast Ltd",
    category: "Manufacturing",
    text: "Tunnex Mega Investment provided clear technical advice when we were deciding between diesel and LPG. The 3.5-ton diesel unit we purchased handles heavy outdoor pallets with ease.",
    rating: 5,
    equipment: "3.5 Ton Rugged Diesel"
  },
  {
    id: "t3",
    name: "Oluwaseun Adeyemi",
    role: "Supply Chain Lead",
    company: "Industrial Cross-Dock Depot",
    category: "Logistics",
    text: "Direct communication via WhatsApp was extremely convenient. We visited their yard at Papa Major Bus Stop in Ijegun to inspect the machine before finalizing our order.",
    rating: 5,
    equipment: "3.0 Ton LPG / Gas Forklift"
  },
  {
    id: "t4",
    name: "Chief Anthony Okoro",
    role: "Operations Supervisor",
    company: "Steel & Machinery Fabrication",
    category: "Heavy Industry",
    text: "The 7.0-ton heavy duty forklift has been a reliable asset in our fabrication yard. Heavy lifting is steady and the mast visibility gives our operators great confidence.",
    rating: 5,
    equipment: "7.0 Ton Heavy-Duty Industrial"
  }
];
