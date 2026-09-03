import { 
  EstieBusinessInfo, 
  EstieService, 
  PortfolioProject, 
  GalleryItem, 
  ClientReview 
} from "./types";

// Local high-fidelity AI-generated luxury assets
import heroGeneratedImg from "./assets/images/estie_hero_interior_1788461305260.jpg";
import windowGeneratedImg from "./assets/images/estie_window_treatment_1788461322535.jpg";
import beddingGeneratedImg from "./assets/images/estie_luxury_bedding_1788461338211.jpg";
import modernBlindsImg from "./assets/images/estie_modern_blinds_1788461922317.jpg";
import windowDesignImg from "./assets/images/estie_window_design_1788461939605.jpg";
import allWindowsImg from "./assets/images/estie_all_windows_1788461953390.jpg";
import oakFlooringImg from "./assets/images/estie_oak_flooring_1788461967163.jpg";
import studioShowroomImg from "./assets/images/estie_design_studio_1788461993928.jpg";

export const ESTIE_IMAGES = {
  hero: heroGeneratedImg,
  windowTreatment: windowGeneratedImg,
  luxuryBedding: beddingGeneratedImg,
  modernBlinds: modernBlindsImg,
  architecturalWindows: windowDesignImg,
  allWindows: allWindowsImg,
  flooringHardwood: oakFlooringImg,
  showroomTextures: studioShowroomImg,
  
  // Handpicked high-end architectural and interior photography
  curtainsDrapery: windowGeneratedImg,
  commercialOffice: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
  luxuryLivingRoom: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",
  diningElegance: "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1200&q=80",
  minimalistStudio: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
};

export const ESTIE_BUSINESS_INFO: EstieBusinessInfo = {
  name: "ESTIE INTERIOR",
  tagline: "Luxury interiors. Beautiful spaces. Exceptional finishing.",
  motto: "Transform Your Space Into Something Extraordinary",
  type: "Interior Designer / Interior Décor & Window Treatment Business",
  address: "Km 46 Lekki-Epe Express Way, Beside Safeway Hospital, Sangotedo, East, Lagos, Nigeria",
  landmark: "Beside Safeway Hospital, Km 46 Lekki-Epe Expressway",
  city: "Sangotedo, Lekki",
  state: "Lagos State",
  country: "Nigeria",
  rating: 5.0,
  reviewCount: 4,
  phone: "+234 814 628 4099",
  phoneRaw: "+2348146284099",
  whatsappNumber: "+2348146284099",
  email: "contact@estieinterior.com",
  openingHours: "Monday – Saturday: 8:30 AM – 6:30 PM (Sundays by appointment)",
};

export const ESTIE_SERVICES: EstieService[] = [
  {
    id: "commercial-interior-design",
    title: "Commercial Interior Design",
    category: "design",
    categoryLabel: "Commercial Design",
    shortDescription: "Sophisticated corporate offices, luxury retail boutiques, healthcare suites, and executive boardrooms built for productivity and prestige.",
    fullDescription: "We design tailored commercial environments that elevate your brand identity while enhancing workflow and client impressions. From corporate headquarters along the Lekki corridor to boutique clinics and executive lounges in Lagos, our turnkey service encompasses space planning, ergonomic furniture curation, acoustic treatments, and custom lighting.",
    image: ESTIE_IMAGES.commercialOffice,
    iconName: "Building2",
    features: [
      "Executive boardroom & office space planning",
      "Bespoke commercial reception & lounge fabrication",
      "Acoustic paneling & architectural lighting",
      "Durable high-traffic luxury materials & finishes",
      "Full project supervision & turnkey handover"
    ],
    materialsOrOptions: ["Acoustic wall felt", "Commercial grade quartz", "Tempered fluted glass", "Ergonomic leather"],
    idealFor: "Corporate Offices, Tech Hubs, Law Firms, Clinics & Luxury Retail Showrooms"
  },
  {
    id: "curtains",
    title: "Curtains & Bespoke Drapery",
    category: "windows",
    categoryLabel: "Curtains & Drapery",
    shortDescription: "Hand-tailored custom drapery, sheer cascades, wave fold linens, and blackout velvets crafted to frame your architectural windows.",
    fullDescription: "Curtains define the soul of a luxury room. At ESTIE INTERIOR, we handcraft custom curtains using premium imported linens, French sheer weaves, rich velvets, and textured jacquards. Engineered with custom ripple-fold tracks, ceiling recesses, and double-track systems for effortless layering and light management.",
    image: ESTIE_IMAGES.windowTreatment,
    iconName: "Layers",
    features: [
      "Floor-to-ceiling ripple fold & pinch pleat styling",
      "Luxury sheer linen daylight filtering curtains",
      "Thermal blackout lining for restful bedrooms",
      "Custom ceiling-recessed and motorized curtain tracks",
      "Expert precision measurement & professional on-site hanging"
    ],
    materialsOrOptions: ["Pure Turkish linen", "Belgian velvet", "Airy French sheers", "Lined blackout sateen"],
    idealFor: "Living Rooms, Master Bedrooms, Dining Suites & High-Ceiling Villas"
  },
  {
    id: "blinds",
    title: "Luxury Blinds & Automated Shading",
    category: "windows",
    categoryLabel: "Window Blinds",
    shortDescription: "Motorized zebra blinds, real wood Venetian slats, roller shades, and vertical sheer panels designed for contemporary light control.",
    fullDescription: "Experience modern minimalism with our extensive collection of luxury window blinds. From motorized zebra shades that seamlessly transition between daylight and privacy to genuine Basswood Venetian blinds and blackout roller cassettes, our window shades integrate with smart home remotes and wall switches.",
    image: ESTIE_IMAGES.modernBlinds,
    iconName: "SlidersHorizontal",
    features: [
      "Smart motorized blinds (remote & wall switch control)",
      "Day & Night zebra / combi blinds with precision alignment",
      "Natural Basswood Venetian blinds with 50mm slats",
      "UV-protective solar screen roller shades",
      "Custom color-matched cassettes and bottom rails"
    ],
    materialsOrOptions: ["Natural Basswood", "Anti-static fabric", "UV-block solar weave", "Aluminum headrails"],
    idealFor: "Modern Living Areas, Home Offices, Bathrooms & Contemporary Penthouses"
  },
  {
    id: "window-design",
    title: "Window Design & Architectural Styling",
    category: "windows",
    categoryLabel: "Architectural Windows",
    shortDescription: "Harmonizing window proportions, architectural moldings, motorized transoms, and cohesive glazing layouts for seamless interior aesthetics.",
    fullDescription: "Windows are the focal point of interior daylight. Our window design service analyzes your room's natural sun trajectory, window sill depths, and room proportions to design custom treatment layouts. We consult on pelmet framing, decorative valances, hidden motorization channels, and custom drapery hardware finishes.",
    image: ESTIE_IMAGES.architecturalWindows,
    iconName: "Compass",
    features: [
      "Architectural window assessment & light trajectory analysis",
      "Custom pelmet boxes & recessed ceiling pocket detailing",
      "Arched, bay, corner, and double-volume window solutions",
      "Bespoke brass, champagne, and matte black drapery hardware",
      "Coordination with architects and building contractors"
    ],
    materialsOrOptions: ["Architectural pelmets", "Custom curved tracks", "Champagne gold rods", "Concealed motorized bays"],
    idealFor: "Architectural Homes, Double-Height Foyers, Arched Windows & Penthouse Glazing"
  },
  {
    id: "windows-and-window-treatments",
    title: "All Kinds of Windows & Window Treatments",
    category: "windows",
    categoryLabel: "Complete Window Solutions",
    shortDescription: "Complete end-to-end window solutions—from custom structural glazing and privacy films to complete multi-layered drapery ensembles.",
    fullDescription: "No window specification is beyond our Sangotedo showroom. We supply, customize, and install every class of window treatment available in modern architecture. Whether your project requires frosted smart glass, sunscreen films, soundproofing seals, plantation shutters, or dual blackout-sheer combinations, ESTIE INTERIOR delivers uncompromising precision.",
    image: ESTIE_IMAGES.allWindows,
    iconName: "Maximize2",
    features: [
      "Comprehensive catalog of residential & commercial window dressings",
      "Custom plantation shutters & timber louvers",
      "Architectural window films (frosted, solar rejection, security)",
      "Sound-dampening acoustic drapery systems",
      "Flawless on-site laser measurement and lifetime installation guarantee"
    ],
    materialsOrOptions: ["Plantation timber", "Ceramic solar film", "Dual-roller cassettes", "Acoustic interlinings"],
    idealFor: "Entire Residential Estates, New Developments, Hotels & Waterfront Properties"
  },
  {
    id: "flooring-selection",
    title: "Flooring Selection & Surface Finishing",
    category: "flooring",
    categoryLabel: "Flooring & Surfaces",
    shortDescription: "Curated European hardwood, engineered herringbone timber, porcelain marble slabs, and plush bespoke area rugs.",
    fullDescription: "The foundation of an unforgettable room is underfoot. ESTIE INTERIOR guides clients through premium flooring selections suited for the Lagos climate. We specify moisture-resistant engineered oak, Italian porcelain stoneware, seamless microcement, and custom-loomed wool rugs that anchor your furniture with warmth and sophistication.",
    image: ESTIE_IMAGES.flooringHardwood,
    iconName: "Grid",
    features: [
      "Engineered oak & teak herringbone wood parquet",
      "Large-format Italian & Spanish porcelain tiles",
      "Luxury vinyl tiles (LVT) with authentic timber texture",
      "Custom sized hand-tufted wool & silk area rugs",
      "Subfloor moisture barrier testing & precision installation"
    ],
    materialsOrOptions: ["European White Oak", "Calacatta Gold porcelain", "Embossed SPC/LVT", "Pure New Zealand wool"],
    idealFor: "Living Salons, Dining Areas, Executive Suites & Master Bedrooms"
  },
  {
    id: "bedding",
    title: "Bespoke Bedding & Bedroom Textiles",
    category: "furnishings",
    categoryLabel: "Bespoke Bedding",
    shortDescription: "Custom upholstered headboards, Egyptian cotton duvets, silk-blend throw pillows, and tailored bed-runners for sanctuary sleeping.",
    fullDescription: "Your bedroom should be your private five-star retreat. Our bedding design service custom-crafts luxury bedding ensembles to match your room's aesthetic. We source 800+ thread-count Egyptian cotton, washed French flax linens, handcrafted quilted coverlets, custom bolster pillows, and padded headboards tailored to your exact dimensions.",
    image: ESTIE_IMAGES.luxuryBedding,
    iconName: "BedDouble",
    features: [
      "Custom upholstered headboards & padded wall panels",
      "800–1000 thread-count long-staple Egyptian cotton sheets",
      "Handcrafted accent cushions, bolsters & velvet bed runners",
      "Hypoallergenic down-alternative duvets & memory pillows",
      "Color-coordinated ensembles matching your window curtains"
    ],
    materialsOrOptions: ["Egyptian long-staple cotton", "Washed Belgian linen", "Mulberry silk trims", "Boucle upholstery"],
    idealFor: "Master Bedroom Suites, Guest Sanctuaries, Honeymoon Suites & Shortlets"
  }
];

export const ESTIE_PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: "sangotedo-contemporary-villa",
    title: "The Sangotedo Sanctuary Villa",
    category: "Full Residential Interior & Window Design",
    location: "Sangotedo, Lekki Corridor, Lagos",
    year: "2025",
    description: "Turnkey interior styling for a 5-bedroom contemporary villa, featuring double-height motorized sheer curtains, Basswood blinds, herringbone oak flooring, and custom master bedding.",
    image: ESTIE_IMAGES.hero,
    clientType: "Residential",
    servicesIncluded: ["Window Design", "Curtains", "Blinds", "Flooring Selection", "Bedding"],
    highlights: ["Double-height 6-meter motorized ripple drapery", "European oak flooring", "Custom upholstered bed suite"]
  },
  {
    id: "ikoyi-waterfront-residence",
    title: "Ikoyi Waterfront Penthouse",
    category: "Luxury Window Treatments & Living Décor",
    location: "Banana Island / Ikoyi, Lagos",
    year: "2025",
    description: "An airy, minimalist residence overlooking the Lagos lagoon. Fitted with smart automated solar roller blinds, pure Belgian linen sheer curtains, and custom acoustic wall finishes.",
    image: ESTIE_IMAGES.luxuryLivingRoom,
    clientType: "Residential",
    servicesIncluded: ["All Kinds of Windows & Treatments", "Curtains", "Blinds"],
    highlights: ["Lagoon glare reduction with solar shades", "Ceiling-recessed electric tracks", "Monochrome neutral palette"]
  },
  {
    id: "lekki-corporate-headquarters",
    title: "Lekki Financial Suite & Boardroom",
    category: "Commercial Interior Design",
    location: "Lekki Phase 1, Lagos",
    year: "2024",
    description: "A 450 sqm corporate office and executive boardroom designed with fluted wood acoustic panels, motorized blackout zebra blinds, and Italian large-format porcelain tile flooring.",
    image: ESTIE_IMAGES.commercialOffice,
    clientType: "Commercial",
    servicesIncluded: ["Commercial Interior Design", "Blinds", "Flooring Selection"],
    highlights: ["Acoustic boardroom panels", "Motorized smart conference blinds", "Anti-scratch commercial floor"]
  },
  {
    id: "pinnock-beach-master-suite",
    title: "Pinnock Beach Master Retreat",
    category: "Bedding, Curtains & Interior Styling",
    location: "Pinnock Beach Estate, Osapa London, Lagos",
    year: "2024",
    description: "A private primary bedroom suite complete with floor-to-ceiling velvet blackout curtains layered over airy sheers, custom King-size tufted headboard, and 1000-thread count bedding.",
    image: ESTIE_IMAGES.luxuryBedding,
    clientType: "Residential",
    servicesIncluded: ["Bedding", "Curtains", "Window Design"],
    highlights: ["100% total room blackout for sleep", "Custom bouclé bedframe", "Hand-stitched decorative cushions"]
  }
];

export const ESTIE_GALLERY: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Floor-to-Ceiling Wave Linen Curtains",
    category: "window-treatments",
    categoryLabel: "Window Treatments",
    image: ESTIE_IMAGES.windowTreatment,
    caption: "Bespoke ripple-fold sheer curtains framing floor-to-ceiling windows with soft morning illumination."
  },
  {
    id: "gal-2",
    title: "Master Sanctuary Bedding & Headboard",
    category: "bedding",
    categoryLabel: "Bespoke Bedding",
    image: ESTIE_IMAGES.luxuryBedding,
    caption: "Custom upholstered bed ensemble with layered organic flax linens, velvet cushions, and matching drapes."
  },
  {
    id: "gal-3",
    title: "Modern Minimalist Neutral Living Room",
    category: "living",
    categoryLabel: "Living Spaces",
    image: ESTIE_IMAGES.hero,
    caption: "Warm neutral palette featuring ivory boucle seating, marble accents, and architectural drapery."
  },
  {
    id: "gal-4",
    title: "Executive Conference & Boardroom Design",
    category: "commercial",
    categoryLabel: "Commercial Design",
    image: ESTIE_IMAGES.commercialOffice,
    caption: "Tailored boardroom interior with automated light-filtration blinds and ergonomic conference layout."
  },
  {
    id: "gal-5",
    title: "Herringbone Oak & Large Format Flooring",
    category: "flooring",
    categoryLabel: "Flooring Selection",
    image: ESTIE_IMAGES.flooringHardwood,
    caption: "Precision-installed European oak parquet harmonized with subtle bronze threshold transitions."
  },
  {
    id: "gal-6",
    title: "Motorized Zebra Blinds & Solar Control",
    category: "window-treatments",
    categoryLabel: "Window Treatments",
    image: ESTIE_IMAGES.modernBlinds,
    caption: "Modern dual-tone zebra blinds offering millimeter-precise privacy and daylight filtering."
  },
  {
    id: "gal-7",
    title: "Architectural Window Framing & Styling",
    category: "window-treatments",
    categoryLabel: "Window Treatments",
    image: ESTIE_IMAGES.architecturalWindows,
    caption: "Custom ceiling recessed track systems for seamless window aesthetic without visible hardware."
  },
  {
    id: "gal-8",
    title: "Bespoke Dining Suite & Ambient Lighting",
    category: "living",
    categoryLabel: "Living Spaces",
    image: ESTIE_IMAGES.diningElegance,
    caption: "Intimate neutral dining room with bespoke sheer window treatment and sculptural chandelier."
  },
  {
    id: "gal-9",
    title: "Complete Layered Window Ensembles",
    category: "window-treatments",
    categoryLabel: "Window Treatments",
    image: ESTIE_IMAGES.allWindows,
    caption: "Bespoke combination of interior plantation timber shutters, wave fold sheers, and motorized solar shades."
  }
];

export const ESTIE_REVIEWS: ClientReview[] = [
  {
    id: "rev-1",
    clientName: "Chief Mrs. Folashade Adeleke",
    clientTitle: "Homeowner",
    location: "Sangotedo, Lekki Corridor, Lagos",
    rating: 5,
    projectType: "Full Villa Curtains, Blinds & Master Bedding",
    date: "January 2025",
    reviewText: "Estie Interior completely transformed our newly built duplex in Sangotedo. Their attention to detail on the double-height curtains was unbelievable. The fabric quality is top-notch, and their team was so punctual and respectful. 5 stars all the way!"
  },
  {
    id: "rev-2",
    clientName: "Engr. Babatunde Oshinowo",
    clientTitle: "Managing Director, Oshinowo Capital Partners",
    location: "Lekki Phase 1, Lagos",
    rating: 5,
    projectType: "Commercial Office Interior & Motorized Blinds",
    date: "December 2024",
    reviewText: "We contracted Estie Interior for our corporate headquarters along the expressway. They handled the commercial layout, executive flooring, and automated zebra blinds. The professionalism and immaculate finishing gave our offices a high-end international look."
  },
  {
    id: "rev-3",
    clientName: "Dr. & Mrs. Nnamdi Okoli",
    clientTitle: "Residential Clients",
    location: "Ajah / Sangotedo Axis, Lagos",
    rating: 5,
    projectType: "Window Treatments & Custom Bedding Ensembles",
    date: "November 2024",
    reviewText: "Finding an interior designer beside Safeway Hospital in Sangotedo with this level of craftsmanship was a blessing. The custom bedding feels like a 5-star hotel in London, and the blackout curtains give us the deepest sleep. Exceptional finishing!"
  },
  {
    id: "rev-4",
    clientName: "Arc. Temiloluwa Bakare",
    clientTitle: "Principal Architect, Studio Bauhaus Lagos",
    location: "Victoria Island & Lekki, Lagos",
    rating: 5,
    projectType: "Collaborative Residential Glazing & Window Treatments",
    date: "October 2024",
    reviewText: "As an architect, I am extremely particular about window proportions and curtain tracks. Estie Interior is my go-to partner. Their technical mastery of ceiling pockets, motorized tracks, and fabric drapery is unmatched in Lagos. Absolutely deserving of their 5.0 rating."
  }
];

export const WHY_ESTIE_PILLARS = [
  {
    title: "5.0-Star Rated Craftsmanship",
    description: "Flawless attention to seams, hemlines, motorized tolerances, and material integrity backed by verified 5-star client satisfaction in Lagos.",
    icon: "Award"
  },
  {
    title: "Prime Sangotedo Showroom",
    description: "Conveniently located on Km 46 Lekki-Epe Expressway, beside Safeway Hospital. Touch our fabric samples, explore motorized blinds, and consult in person.",
    icon: "MapPin"
  },
  {
    title: "Turnkey Commercial & Residential",
    description: "From single-room window treatments to complete multi-floor corporate headquarters and private estates, we handle design, procurement, and installation.",
    icon: "ShieldCheck"
  },
  {
    title: "Bespoke Fabric & Material Library",
    description: "Direct sourcing of Belgian linens, Turkish sheers, Italian velvets, genuine Basswood, and European hardwood surfaces.",
    icon: "Sparkles"
  },
  {
    title: "Laser Precision Measurement",
    description: "We never guess dimensions. Our technical team conducts meticulous on-site laser surveys to ensure millimeter-accurate window fits.",
    icon: "Ruler"
  },
  {
    title: "Prompt Lagos Delivery & Aftercare",
    description: "Reliable project timelines, clean on-site installation protocol, and comprehensive warranty on all motorized tracks and treatments.",
    icon: "Clock"
  }
];

// WhatsApp URL generator for general or specific inquiries
export function getWhatsAppUrl(message?: string): string {
  const defaultText = "Hello ESTIE INTERIOR, I would like to book an interior design consultation / window treatment inquiry.";
  const text = message || defaultText;
  return `https://wa.me/2348146284099?text=${encodeURIComponent(text)}`;
}

export function getServiceBookingWhatsAppUrl(serviceTitle: string): string {
  const text = `Hello ESTIE INTERIOR, I am interested in your service: "${serviceTitle}". I would like to request an estimate and schedule an on-site consultation.`;
  return getWhatsAppUrl(text);
}
