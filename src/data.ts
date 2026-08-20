import { EquipmentItem, SpecificationGuideItem, TestimonialItem } from "./types";

export const PETHONA_BUSINESS_INFO = {
  name: "Pethona Integrated & Resources LTD",
  shortName: "Pethona Equipment",
  tagline: "Reliable Forklifts & Heavy Equipment for Your Business",
  subheading: "Supplying dependable industrial forklifts, hydraulic excavators, crawler bulldozers, wheel loaders, backhoe loaders, and heavy machinery for industrial, logistics, and construction operations in Lagos and nationwide.",
  businessType: "Forklift & Heavy Equipment Dealer",
  address: "74 Itire St, beside MFM, Idi Oro, Lagos 100253, Lagos, Nigeria",
  addressShort: "74 Itire St, beside MFM, Idi Oro, Lagos 100253",
  stateCountry: "Lagos, Nigeria",
  postalCode: "100253",
  hours: [
    { days: "Monday - Friday", times: "8:00 AM - 6:00 PM" },
    { days: "Saturday", times: "9:00 AM - 4:00 PM" },
    { days: "Sunday", times: "By Appointment / WhatsApp Inquiries" }
  ],
  googleMapsUrl: "https://maps.google.com/?q=74+Itire+St,+beside+MFM,+Idi+Oro,+Lagos+100253,+Nigeria",
  defaultWhatsAppMessage: "Hello Pethona Integrated & Resources LTD, I am inquiring about available forklifts and heavy equipment. Please share current availability and pricing details.",
  inquiryNotice: "Browse our forklift and heavy machinery categories below. Contact our sales desk directly for machine availability, on-site inspections, and formal price quotes."
};

export function getWhatsAppUrl(customMessage?: string): string {
  const text = customMessage || PETHONA_BUSINESS_INFO.defaultWhatsAppMessage;
  return `https://wa.me/?text=${encodeURIComponent(text)}`;
}

export function getEquipmentWhatsAppUrl(equipmentName: string, specsSummary?: string): string {
  const message = `Hello Pethona Integrated & Resources LTD, I'm interested in the ${equipmentName}${specsSummary ? ` (${specsSummary})` : ""}. Please share current availability, inspection details, and quote.`;
  return `https://wa.me/?text=${encodeURIComponent(message)}`;
}

export const EQUIPMENT_MAIN_TABS = [
  { id: "all", label: "All Equipment" },
  { id: "forklifts", label: "Forklifts" },
  { id: "heavy_equipment", label: "Heavy Equipment & Machinery" }
] as const;

export const EQUIPMENT_SUB_CATEGORIES = [
  { id: "all", label: "All Categories", group: "all" },
  { id: "electric_forklift", label: "Electric Forklifts", group: "forklifts" },
  { id: "diesel_forklift", label: "Diesel Forklifts", group: "forklifts" },
  { id: "lpg_forklift", label: "LPG / Gas Forklifts", group: "forklifts" },
  { id: "warehouse_reach", label: "Warehouse & Reach Trucks", group: "forklifts" },
  { id: "heavyduty_forklift", label: "Heavy-Duty Forklifts", group: "forklifts" },
  { id: "excavator", label: "Excavators", group: "heavy_equipment" },
  { id: "bulldozer", label: "Bulldozers", group: "heavy_equipment" },
  { id: "wheel_loader", label: "Wheel Loaders", group: "heavy_equipment" },
  { id: "backhoe_loader", label: "Backhoe Loaders", group: "heavy_equipment" }
] as const;

export const EQUIPMENT_INVENTORY: EquipmentItem[] = [
  // --- HEAVY MACHINERY ---
  {
    id: "heavy-excavator-21t",
    name: "Heavy Hydraulic Tracked Excavator",
    group: "Heavy Equipment",
    category: "excavator",
    categoryLabel: "Excavator",
    tagline: "High Digging Power & Precision Hydraulics for Heavy Earthmoving",
    shortDescription: "Heavy-duty tracked hydraulic excavator built for site preparation, trenching, deep excavation, quarry work, and civil engineering projects.",
    longDescription: "Engineered for high breakout force and steady hydraulic cycle times, this heavy-duty crawler excavator delivers outstanding productivity for major earthmoving, foundation digging, and infrastructure construction. Equipped with a reinforced steel boom, wear-resistant bucket, and robust steel track undercarriage.",
    pricingDisplay: "Contact for Price",
    imageKey: "excavator",
    specs: {
      capacityOrWeight: "21.5 - 23.0 Ton Operating Weight",
      reachOrLiftHeight: "9.8 m Max Reach | 6.6 m Max Dig Depth",
      enginePower: "115 - 128 kW Heavy Turbo Diesel",
      fuelType: "Industrial Diesel",
      undercarriageOrTires: "Heavy-Duty Reinforced Steel Crawler Tracks",
      operatingMetric: "Standard Bucket: 1.0 - 1.2 m³ Capacity"
    },
    features: [
      "High-efficiency hydraulic pump system with multi-mode flow control",
      "Heavy steel reinforced X-frame undercarriage for durability",
      "Spacious climate-controlled operator cab with 360-degree visibility",
      "Dual auxiliary hydraulic lines for breakers and augers",
      "Heavy-duty rock bucket with hardened replaceable teeth"
    ],
    recommendedApplications: [
      "Civil Construction & Site Grading",
      "Deep Foundation Digging & Trenching",
      "Road Construction & Drainage Infrastructure",
      "Quarry & Material Extraction Sites"
    ],
    isAvailable: true
  },
  {
    id: "heavy-bulldozer-d6",
    name: "Heavy-Duty Crawler Bulldozer",
    group: "Heavy Equipment",
    category: "bulldozer",
    categoryLabel: "Bulldozer",
    tagline: "Massive Pushing Capacity & Heavy Tractive Force for Site Leveling",
    shortDescription: "Rugged crawler bulldozer with hydraulic push blade and rear ripper, designed for heavy site clearing, land development, and leveling.",
    longDescription: "Built for tough land clearing, bulk earthmoving, and grade leveling, this crawler bulldozer features high ground clearance, wide track shoes for high flotation, and high torque transmission. The heavy front semi-U blade cuts through dense soil and overburden while the rear multi-shank ripper breaks up compacted ground.",
    pricingDisplay: "Contact for Price",
    imageKey: "bulldozer",
    specs: {
      capacityOrWeight: "17.5 - 19.0 Ton Operating Weight",
      reachOrLiftHeight: "1,150 mm Max Blade Lift | 500 mm Dig Depth",
      enginePower: "130 - 145 kW High-Torque Turbo Diesel",
      fuelType: "Industrial Diesel",
      undercarriageOrTires: "Sealed & Lubricated Heavy Crawler Track System",
      operatingMetric: "Blade Capacity: 4.5 - 5.2 m³ Semi-U Blade"
    },
    features: [
      "High-strength hydraulic tilt and angle push blade",
      "Hydraulic rear 3-shank heavy ground ripper attachment",
      "Powershift transmission with smooth directional shuttling",
      "Heavy ROPS/FOPS reinforced operator protection canopy",
      "Heavy radiator cooling package engineered for tropical ambient climates"
    ],
    recommendedApplications: [
      "Land Clearing & Agricultural Bush Clearing",
      "Road Sub-base Construction & Grading",
      "Mining & Quarry Overburden Removal",
      "Industrial Site Reclamation & Leveling"
    ],
    isAvailable: true
  },
  {
    id: "heavy-wheel-loader-50",
    name: "Front-End Articulated Wheel Loader",
    group: "Heavy Equipment",
    category: "wheel_loader",
    categoryLabel: "Wheel Loader",
    tagline: "Rapid Bulk Material Loading & High Cycle Stockpile Handling",
    shortDescription: "Powerful articulated wheel loader ideal for aggregate handling, batching plant feeding, truck loading, and bulk material transfer.",
    longDescription: "This articulated front wheel loader combines rapid loading cycle times with heavy payload capacity. Featuring a heavy Z-bar linkage geometry for maximum breakout force, automatic bucket leveler, and robust 4-wheel drive axles with planetary final drives.",
    pricingDisplay: "Contact for Price",
    imageKey: "wheel_loader",
    specs: {
      capacityOrWeight: "5.0 Ton Rated Load (17.5 Ton Operating Weight)",
      reachOrLiftHeight: "3,100 mm - 3,400 mm Dump Clearance",
      enginePower: "160 - 175 kW Turbocharged Industrial Diesel",
      fuelType: "Industrial Diesel",
      undercarriageOrTires: "Heavy Off-Road 23.5-25 16PR Pneumatic Tires",
      operatingMetric: "Standard Bucket: 3.0 m³ General Purpose Bucket"
    },
    features: [
      "Articulated hydraulic steering with tight turning radius",
      "High breakout force Z-bar loader linkage",
      "Heavy-duty 4-wheel drive with limited slip differentials",
      "Air-conditioned sealed cabin with pilot joystick controls",
      "Quick coupler option for stone forks and log grapples"
    ],
    recommendedApplications: [
      "Concrete Batching Plants & Asphalt Yards",
      "Quarry Stockpile & Gravel Loading",
      "Port Bulk Cargo Transfer & Logistics",
      "Heavy Sand & Aggregate Supply Depots"
    ],
    isAvailable: true
  },
  {
    id: "heavy-backhoe-loader-4x4",
    name: "Industrial 4x4 Backhoe Loader",
    group: "Heavy Equipment",
    category: "backhoe_loader",
    categoryLabel: "Backhoe Loader",
    tagline: "Dual-Purpose Excavation & Loading Versatility in One Machine",
    shortDescription: "Versatile multipurpose machine equipped with a front loader bucket and rear hydraulic digging backhoe arm for urban and construction utilities.",
    longDescription: "The ultimate job site utility machine, this 4x4 backhoe loader provides both front loading and rear trenching capabilities. Highly mobile between sites on rubber pneumatic tires, it is ideal for utility trenching, municipal maintenance, pipe laying, and loading dump trucks.",
    pricingDisplay: "Contact for Price",
    imageKey: "backhoe_loader",
    specs: {
      capacityOrWeight: "8.5 Ton Operating Weight | 1.0 m³ Loader Bucket",
      reachOrLiftHeight: "4.4 m Max Dig Depth | 2.8 m Dump Height",
      enginePower: "74 - 82 kW (100 HP) Turbo Diesel",
      fuelType: "Industrial Diesel",
      undercarriageOrTires: "Heavy 4-Wheel Drive Industrial Traction Tires",
      operatingMetric: "Rear Bucket: 0.25 - 0.30 m³ Trenching Bucket"
    },
    features: [
      "4-in-1 multi-purpose front clam loader bucket",
      "Sideshift or center-mount rear hydraulic backhoe arm",
      "Dual hydraulic stabilizer outriggers for secure digging",
      "4WD powershift transmission with road travel speeds up to 40 km/h",
      "High-output hydraulic pump supporting rock hammers"
    ],
    recommendedApplications: [
      "Urban Drainage & Pipeline Trenching",
      "General Construction & Site Utility Work",
      "Municipal Maintenance & Road Repairs",
      "Foundation & Electrical Cable Laying"
    ],
    isAvailable: true
  },

  // --- FORKLIFTS ---
  {
    id: "electric-25t",
    name: "2.5 Ton Electric Counterbalance Forklift",
    group: "Forklifts",
    category: "electric_forklift",
    categoryLabel: "Electric Forklift",
    tagline: "Zero Emissions & Low Noise for Indoor Warehouses",
    shortDescription: "Ideal for indoor warehouses, food processing, and pharmaceuticals requiring clean, emission-free operation and tight maneuverability.",
    longDescription: "This 2.5-ton electric counterbalance forklift is designed for quiet, smooth indoor material handling. Equipped with high-efficiency AC traction motors, regenerative braking, and ergonomic operator controls, it delivers reliable multi-shift productivity without exhaust fumes.",
    pricingDisplay: "Contact for Price",
    imageKey: "electric",
    specs: {
      capacityOrWeight: "2,500 kg (2.5 Ton) Load Capacity",
      reachOrLiftHeight: "3,000 mm - 4,500 mm Duplex/Triplex Mast",
      enginePower: "Dual AC High-Torque Drive Motors",
      fuelType: "Electric (48V / 80V High Capacity Industrial Battery)",
      undercarriageOrTires: "Solid Non-Marking Industrial Rubber Tires",
      operatingMetric: "Turning Radius: 2,050 mm | Weight: 4,100 kg"
    },
    features: [
      "Zero exhaust emissions for clean indoor warehouse compliance",
      "Ergonomic full-suspension seat with operator presence safety sensing",
      "Digital LED display with battery state-of-charge indicator",
      "Integrated hydraulic side shifter for quick pallet alignment",
      "Heavy-duty overhead guard cage for operator protection"
    ],
    recommendedApplications: [
      "Indoor Logistics & Pallet Warehouses",
      "FMCG, Food & Beverage Storage Facilities",
      "Pharmaceutical Storage & Distribution",
      "Manufacturing & Packaging Lines"
    ],
    isAvailable: true
  },
  {
    id: "diesel-35t",
    name: "3.5 Ton Rugged Diesel Industrial Forklift",
    group: "Forklifts",
    category: "diesel_forklift",
    categoryLabel: "Diesel Forklift",
    tagline: "High Torque & Continuous Power for Heavy Outdoor Yard Work",
    shortDescription: "Built for tough outdoor yard operations, construction supply depots, logistics hubs, and continuous industrial pallet lifting.",
    longDescription: "Engineered for robust power and heavy continuous duties, this 3.5-ton diesel forklift delivers superior torque and lifting speed. Built with a reinforced steel chassis, heavy-duty hydraulic cooling, and deep-tread pneumatic tires for rough paved or gravel grounds.",
    pricingDisplay: "Contact for Price",
    imageKey: "diesel",
    specs: {
      capacityOrWeight: "3,500 kg (3.5 Ton) Load Capacity",
      reachOrLiftHeight: "3,000 mm - 4,800 mm High-Visibility Mast",
      enginePower: "4-Cylinder Heavy Industrial Diesel Engine",
      fuelType: "Industrial Diesel",
      undercarriageOrTires: "Heavy-Duty Deep Lug-Tread Pneumatic Tires",
      operatingMetric: "Turning Radius: 2,420 mm | Weight: 4,850 kg"
    },
    features: [
      "High-power industrial diesel engine with high gradeability",
      "Wide-view mast channels offering unobstructed forward visibility",
      "Dual front headlights and rear safety beacon light",
      "High-capacity hydraulic oil cooling radiator for tropical climates",
      "Full steel overhead protection cage with safety seatbelt"
    ],
    recommendedApplications: [
      "Open Logistics Yards & Freight Depots",
      "Building Material & Hardware Wholesalers",
      "Industrial Factory Yards & Fabrication Shops",
      "Container Freight Stations & Loading Docks"
    ],
    isAvailable: true
  },
  {
    id: "lpg-30t",
    name: "3.0 Ton Dual-Fuel LPG / Gasoline Forklift",
    group: "Forklifts",
    category: "lpg_forklift",
    categoryLabel: "LPG / Gas Forklift",
    tagline: "Versatile Indoor & Outdoor Performance with Quick Refueling",
    shortDescription: "Flexible dual-fuel capability providing low emissions for indoor use and quick cylinder swaps for continuous operation.",
    longDescription: "The 3.0-ton LPG/Gasoline forklift bridges the gap between indoor cleanliness and outdoor power. Featuring low particulate emissions compared to standard diesel and rapid propane tank swaps that eliminate lengthy battery charging downtimes.",
    pricingDisplay: "Contact for Price",
    imageKey: "lpg",
    specs: {
      capacityOrWeight: "3,000 kg (3.0 Ton) Load Capacity",
      reachOrLiftHeight: "3,000 mm - 4,500 mm Triplex Mast",
      enginePower: "Low-Emission Industrial Dual-Fuel Engine",
      fuelType: "LPG (Propane) / Dual-Fuel Gasoline",
      undercarriageOrTires: "Pneumatic or Solid Cushion Industrial Tires",
      operatingMetric: "Turning Radius: 2,280 mm | Weight: 4,350 kg"
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
    group: "Forklifts",
    category: "warehouse_reach",
    categoryLabel: "Warehouse Reach Truck",
    tagline: "Maximized Vertical Storage in Narrow Aisle Pallet Racking",
    shortDescription: "Specialized for high-density warehouse racking systems with extended vertical lifting capability and compact turning.",
    longDescription: "Designed specifically for vertical pallet optimization in modern warehouses, this 2.0-ton reach truck features a forward-extending mast assembly and compact chassis that operates seamlessly in narrow aisles up to high pallet storage tiers.",
    pricingDisplay: "Contact for Price",
    imageKey: "warehouse",
    specs: {
      capacityOrWeight: "2,000 kg (2.0 Ton) Load Capacity",
      reachOrLiftHeight: "4,500 mm - 7,500 mm Extended Triplex Mast",
      enginePower: "AC Drive & High-Output Hydraulic Lift Pump",
      fuelType: "Electric (High Capacity Industrial Battery)",
      undercarriageOrTires: "Polyurethane Drive & Load Wheels",
      operatingMetric: "Turning Radius: 1,750 mm (Narrow Aisle Capable)"
    },
    features: [
      "Moving mast mechanism for deep pallet rack reach",
      "Proportional hydraulic fingertip controls",
      "Mast height safety cut-off and speed-limiting sensors",
      "Camera & screen mast monitoring option for high tier lifts",
      "360-degree electric steering for tight warehouse turns"
    ],
    recommendedApplications: [
      "High-Bay Pallet Racking Warehouses",
      "Cold Storage & Logistics Freezers",
      "Third-Party Logistics (3PL) Hubs",
      "E-Commerce Fulfillment Centers"
    ],
    isAvailable: true
  },
  {
    id: "heavyduty-70t",
    name: "7.0 Ton Heavy-Duty Industrial Forklift",
    group: "Forklifts",
    category: "heavyduty_forklift",
    categoryLabel: "Heavy-Duty Forklift",
    tagline: "Massive Load Capacity for Heavy Industrial Cargo & Steel",
    shortDescription: "Engineered for primary industries, steel handling, heavy machinery transport, and oversized industrial containers.",
    longDescription: "When standard material handling equipment falls short, this 7.0-ton heavy-duty industrial forklift provides the robust lifting backbone needed for steel, precast concrete, timber bundles, and machinery skids in demanding industrial settings.",
    pricingDisplay: "Contact for Price",
    imageKey: "heavyduty",
    specs: {
      capacityOrWeight: "7,000 kg (7.0 Ton) Load Capacity",
      reachOrLiftHeight: "3,000 mm - 4,500 mm Reinforced Mast",
      enginePower: "High-Displacement 6-Cylinder Turbo Diesel",
      fuelType: "Heavy Industrial Turbo Diesel",
      undercarriageOrTires: "Dual Front Heavy Pneumatic Drive Tires",
      operatingMetric: "Turning Radius: 3,350 mm | Weight: 9,400 kg"
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

export const WHY_CHOOSE_PETHONA = [
  {
    id: "w1",
    title: "Diverse Machinery Inventory",
    description: "From 2.0 to 7.0-ton industrial forklifts to heavy hydraulic excavators, bulldozers, wheel loaders, and backhoe loaders for commercial and construction demands."
  },
  {
    id: "w2",
    title: "Rigorous Equipment Inspection",
    description: "Every machine undergoes thorough mechanical, engine, hydraulic, and structural checks to ensure dependable operation on your job site or warehouse."
  },
  {
    id: "w3",
    title: "Dedicated Lagos Location",
    description: "Conveniently located at 74 Itire St, beside MFM, Idi Oro, Lagos 100253, making physical inspection and equipment consultation straightforward."
  },
  {
    id: "w4",
    title: "Business & Project Support",
    description: "We help contractors, logistics providers, and factory managers select the right machine specifications, tonnages, and attachments for their operations."
  },
  {
    id: "w5",
    title: "Transparent Inquiries & Fast Response",
    description: "Direct phone, WhatsApp, and email channels so you can quickly confirm machine availability, request photos, and receive competitive price quotes."
  }
];

export const SPEC_GUIDES: SpecificationGuideItem[] = [
  {
    id: "sg1",
    title: "Excavator Tonnage & Bucket Sizing",
    category: "Heavy Earthmoving Guide",
    description: "Selecting between 8-ton compact and 20+ ton heavy excavators depends on trench depth, haul truck size, and soil density. Match bucket capacity to cycle time targets.",
    techHighlight: "Tracked crawler stability with high hydraulic breakout force",
    iconName: "Truck"
  },
  {
    id: "sg2",
    title: "Bulldozer Blade Types & Ground Pressure",
    category: "Earthmoving & Leveling",
    description: "Semi-U blades maximize bulk earth pushing volume, while straight blades offer high penetration in hard soils. Wide track shoes provide flotation in soft terrain.",
    techHighlight: "Hydraulic push blade & rear multi-shank ripper controls",
    iconName: "Layers"
  },
  {
    id: "sg3",
    title: "Wheel Loader Capacity & Dump Clearance",
    category: "Bulk Material Handling",
    description: "Verify dump clearance height against your highest hopper or truck sideboards. Articulated steering allows quick maneuvering in tight batching plant bins.",
    techHighlight: "Z-bar loader linkage with high bucket breakout torque",
    iconName: "Compass"
  },
  {
    id: "sg4",
    title: "Forklift Power: Electric vs Diesel vs LPG",
    category: "Warehouse & Yard Logistics",
    description: "Electric units are zero-emission for food/pharma warehouses. Diesel offers maximum torque for outdoor yards. LPG provides quick tank swaps for 24/7 operations.",
    techHighlight: "Rated at 500mm standard load centers with duplex/triplex masts",
    iconName: "Zap"
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "t1",
    name: "Engr. Babatunde Alabi",
    role: "Project Site Director",
    company: "Lagos Civil & Infrastructure Works",
    category: "Construction & Earthmoving",
    text: "We acquired heavy hydraulic excavators and backhoe loaders from Pethona Integrated & Resources LTD for our drainage and road preparation projects. The equipment has been dependable with solid hydraulic performance.",
    rating: 5,
    equipment: "Heavy Tracked Hydraulic Excavator"
  },
  {
    id: "t2",
    name: "Alhaji Musa Danjuma",
    role: "Logistics Operations Lead",
    company: "Industrial Pallet & Freight Services",
    category: "Warehousing & Logistics",
    text: "Pethona's team provided clear guidance when we were choosing between 3.5-ton diesel and 2.5-ton electric forklifts. The machines arrived in great condition and have supported our daily warehouse throughput.",
    rating: 5,
    equipment: "3.5 Ton Diesel Industrial Forklift"
  },
  {
    id: "t3",
    name: "Emeka Okonkwo",
    role: "Quarry & Batching Plant Manager",
    company: "Granite & Concrete Aggregates LTD",
    category: "Heavy Material Handling",
    text: "The articulated wheel loader we purchased from Pethona has handled high-volume aggregate stockpile loading without issue. Fast communication on WhatsApp made the purchase process smooth.",
    rating: 5,
    equipment: "Front-End Articulated Wheel Loader"
  },
  {
    id: "t4",
    name: "Tariq Adeleke",
    role: "Fleet & Heavy Equipment Supervisor",
    company: "Urban Earthmoving & Site Prep",
    category: "Site Preparation",
    text: "We visited their yard at 74 Itire St, beside MFM in Idi Oro to inspect the crawler bulldozer before confirming. Honest inspection and smooth coordination from the Pethona team.",
    rating: 5,
    equipment: "Heavy Crawler Bulldozer"
  }
];
