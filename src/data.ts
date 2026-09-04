import { 
  SpaceboundBusinessInfo, 
  SpaceboundService, 
  PortfolioProject, 
  GalleryItem, 
  ClientReview 
} from "./types";

// High-fidelity curated luxury interior assets
import heroLivingImg from "./assets/images/estie_hero_interior_1788461305260.jpg";
import bedroomDesignImg from "./assets/images/spacebound_bedroom_design_1788547951678.jpg";
import cabinetryHardwareImg from "./assets/images/spacebound_cabinetry_hardware_1788547919385.jpg";
import diningDesignImg from "./assets/images/spacebound_dining_design_1788547934444.jpg";

export const SPACEBOUND_IMAGES = {
  hero: heroLivingImg,
  bedroomDesign: bedroomDesignImg,
  cabinetryHardware: cabinetryHardwareImg,
  diningDesign: diningDesignImg,
  commercialOffice: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
  modernLiving: heroLivingImg,
  loungeDetail: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",
  architecturalPantry: cabinetryHardwareImg,
};

// Backward-compatible alias for existing components
export const ESTIE_IMAGES = SPACEBOUND_IMAGES;

export const SPACEBOUND_BUSINESS_INFO: SpaceboundBusinessInfo = {
  name: "Spacebound Interiors",
  tagline: "Refined Interiors. Bespoke Craftsmanship. Modern Living.",
  motto: "Transforming Spaces with Enduring Elegance & Personalized Design",
  type: "Interior Designer",
  address: "Estate, Abraham Adesanya, Ajah, Lagos 106104, Lagos, Nigeria",
  landmark: "Estate, Abraham Adesanya, Ajah",
  city: "Ajah",
  state: "Lagos State",
  country: "Nigeria",
  postalCode: "106104",
  rating: 5.0,
  reviewCount: 1,
  openingHours: "Monday – Saturday: 9:00 AM – 6:00 PM (Consultations by Appointment)",
};

// Backward-compatible alias
export const ESTIE_BUSINESS_INFO = SPACEBOUND_BUSINESS_INFO;

export const SPACEBOUND_SERVICES: SpaceboundService[] = [
  {
    id: "bedroom-design",
    title: "Bedroom Design",
    category: "bedroom",
    categoryLabel: "Bedroom Design",
    shortDescription: "Tailored master suites and tranquil bedroom sanctuaries combining custom floating bedframes, acoustic feature paneling, architectural lighting, and refined textiles.",
    fullDescription: "Your bedroom should be an intimate sanctuary of restorative luxury. At Spacebound Interiors, we design personalized bedroom retreats that balance serenity, tactile warmth, and spatial balance. From custom-engineered upholstered headboards and fluted wood feature walls with concealed LED channels to bespoke nightstands and layered acoustic drapery, every element is curated to reflect your personal lifestyle.",
    image: SPACEBOUND_IMAGES.bedroomDesign,
    iconName: "BedDouble",
    features: [
      "Custom upholstered floating beds & integrated feature headboards",
      "Architectural ambient, accent & low-glare task lighting schemes",
      "Concealed acoustic wall panels & motorized blackout window drapery",
      "Bespoke bedside floating vanities & built-in reading sconces",
      "Textile curation spanning long-staple cottons, silks & boucle textures"
    ],
    materialsOrOptions: ["Smoked Oak Veneer", "Italian Bouclé Upholstery", "Brushed Brass Sconces", "Acoustic Suede Paneling"],
    idealFor: "Master Bedroom Suites, Penthouse Sanctuaries, Guest Havens & Luxury Residences"
  },
  {
    id: "cabinetry-and-hardware-design",
    title: "Cabinetry & Hardware Design",
    category: "cabinetry",
    categoryLabel: "Cabinetry & Hardware",
    shortDescription: "Precision-crafted architectural millwork, bespoke walk-in wardrobes, luxury kitchen joinery, and custom artisan hardware details.",
    fullDescription: "Exceptional cabinetry is the backbone of enduring interior architecture. Spacebound Interiors designs, details, and oversees the fabrication of bespoke cabinetry systems tailored to millimeter tolerances. We specify premium marine-grade hardwoods, fluted timber veneers, soft-close Blum mechanisms, and hand-finished knurled brass, bronze, and gunmetal hardware to deliver tactile luxury with seamless functional storage.",
    image: SPACEBOUND_IMAGES.cabinetryHardware,
    iconName: "Maximize2",
    features: [
      "Custom walk-in dressing rooms & illuminated glass-front wardrobes",
      "Architectural kitchen joinery with concealed appliances & hidden pantries",
      "Bespoke living room media units, fluted consoles & floating credenzas",
      "Curated artisan hardware: knurled brass, patinated bronze & leather pulls",
      "Integrated motion-sensor internal LED lighting & organizers"
    ],
    materialsOrOptions: ["Fluted White Oak", "Brushed Knurled Brass", "Bronze Patina Hardware", "Tinted Fluted Glass"],
    idealFor: "Walk-in Closets, Luxury Kitchens, Executive Studies & Custom Living Joinery"
  },
  {
    id: "commercial-interior-design",
    title: "Commercial Interior Design",
    category: "commercial",
    categoryLabel: "Commercial Design",
    shortDescription: "Elevated corporate headquarters, executive boardrooms, boutique private practices, and reception lounges designed to embody brand prestige and productivity.",
    fullDescription: "We craft sophisticated commercial spaces that project corporate authority and stimulate innovation. Spacebound Interiors transforms commercial footprints along the Ajah, Lekki, and Lagos business corridors into high-performance environments. Our comprehensive scope spans spatial ergonomics, acoustic zoning, executive furniture curation, brand-aligned reception statement pieces, and durable commercial finishes.",
    image: SPACEBOUND_IMAGES.commercialOffice,
    iconName: "Building2",
    features: [
      "Executive boardroom & collaborative workspace space planning",
      "Bespoke reception lounges, reception desks & architectural feature entries",
      "High-performance acoustic ceiling baffles & wall treatments",
      "Commercial-grade durable luxury surfaces & scratch-resistant finishes",
      "Turnkey project supervision, code compliance & phased handover"
    ],
    materialsOrOptions: ["Acoustic Timber Felt", "Calacatta Quartz Slabs", "Architectural Aluminum", "Full-Grain Executive Leather"],
    idealFor: "Corporate Headquarters, Tech Firms, Law Offices, Executive Boardrooms & Boutique Clinics"
  },
  {
    id: "dining-room-design",
    title: "Dining Room Design",
    category: "dining",
    categoryLabel: "Dining Room Design",
    shortDescription: "Sculptural dining suites, statement stone tables, bespoke wine credenzas, and ambient illumination designed for memorable culinary gatherings.",
    fullDescription: "The dining room is the social centerpiece of a sophisticated home. Spacebound Interiors designs magnetic dining environments that blend intimacy with dramatic presence. We orchestrate custom-proportioned travertine and marble dining tables, sculptural seating, bespoke buffet credenzas, and statement architectural chandeliers to create an unforgettable setting for entertaining family and esteemed guests.",
    image: SPACEBOUND_IMAGES.diningDesign,
    iconName: "Sparkles",
    features: [
      "Custom dining table fabrication in natural travertine, marble & solid timber",
      "Ergonomic, sculptural designer dining chair curation and upholstery",
      "Statement architectural chandeliers & warm layered dimmer circuits",
      "Custom wall finishes, fluted boiserie & curated contemporary art curation",
      "Integrated wine display credenzas & concealed service cabinetry"
    ],
    materialsOrOptions: ["Roman Travertine", "Nero Marquina Marble", "Solid Walnut", "Brushed Champagne Bronze"],
    idealFor: "Formal Dining Rooms, Open-Concept Living/Dining Salons & Luxury Penthouse Suites"
  }
];

// Backward-compatible alias
export const ESTIE_SERVICES = SPACEBOUND_SERVICES;

export const SPACEBOUND_PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: "abraham-adesanya-master-sanctuary",
    title: "The Abraham Adesanya Sanctuary",
    category: "Master Bedroom & Custom Cabinetry Design",
    location: "Abraham Adesanya Estate, Ajah, Lagos",
    year: "2025",
    description: "A private primary bedroom suite featuring bespoke fluted oak wall paneling, a floating upholstered bedframe, and an integrated walk-in dressing wardrobe with knurled brass hardware.",
    image: SPACEBOUND_IMAGES.bedroomDesign,
    clientType: "Residential",
    servicesIncluded: ["Bedroom Design", "Cabinetry & Hardware Design"],
    highlights: ["Concealed linear LED headboard backlighting", "Bespoke fluted oak dressing suite", "Artisan knurled brass hardware"]
  },
  {
    id: "ajah-executive-commercial-suite",
    title: "Ajah Financial Advisory Suite",
    category: "Commercial Interior Design",
    location: "Ajah / Lekki Corridor, Lagos",
    year: "2025",
    description: "A 380 sqm corporate office and executive boardroom characterized by acoustic slatted timber partitions, executive conference furniture, and an imposing reception lounge.",
    image: SPACEBOUND_IMAGES.commercialOffice,
    clientType: "Commercial",
    servicesIncluded: ["Commercial Interior Design"],
    highlights: ["Acoustic felt ceiling baffles", "Bespoke quartz reception desk", "Smart presentation lighting"]
  },
  {
    id: "lekki-contemporary-dining-salon",
    title: "Peninsula Travertine Dining Salon",
    category: "Dining Room Design & Bespoke Millwork",
    location: "Lekki Peninsula, Lagos",
    year: "2024",
    description: "A dramatic 10-seater dining room featuring a monolithic Roman travertine table, sculptural curved chairs, bespoke fluted credenza, and a statement brass chandelier.",
    image: SPACEBOUND_IMAGES.diningDesign,
    clientType: "Residential",
    servicesIncluded: ["Dining Room Design", "Cabinetry & Hardware Design"],
    highlights: ["Monolithic travertine dining table", "Sculptural brushed bronze chandelier", "Seamless wine display joinery"]
  },
  {
    id: "royal-palms-bespoke-cabinetry",
    title: "Architectural Wardrobe & Joinery Suite",
    category: "Cabinetry & Hardware Design",
    location: "Estate, Abraham Adesanya Axis, Lagos",
    year: "2024",
    description: "Complete millwork transformation across an upscale duplex, including tinted glass-door walk-in closets, soft-touch pantry drawers, and custom solid bronze pull hardware.",
    image: SPACEBOUND_IMAGES.cabinetryHardware,
    clientType: "Residential",
    servicesIncluded: ["Cabinetry & Hardware Design", "Bedroom Design"],
    highlights: ["Full-height tempered smoked glass wardrobes", "Hand-finished bronze bar pulls", "Motion-activated interior drawer illumination"]
  }
];

// Backward-compatible alias
export const ESTIE_PORTFOLIO_PROJECTS = SPACEBOUND_PORTFOLIO_PROJECTS;

export const SPACEBOUND_GALLERY: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Serene Master Bedroom Sanctuary",
    category: "bedroom",
    categoryLabel: "Bedroom Design",
    image: SPACEBOUND_IMAGES.bedroomDesign,
    caption: "Floating bedframe design with fluted feature wall, integrated ambient lighting, and bespoke brass accents."
  },
  {
    id: "gal-2",
    title: "Architectural Cabinetry & Fluted Joinery",
    category: "cabinetry",
    categoryLabel: "Cabinetry & Hardware",
    image: SPACEBOUND_IMAGES.cabinetryHardware,
    caption: "Bespoke fluted oak millwork fitted with hand-finished knurled brass pull handles and warm recessed illumination."
  },
  {
    id: "gal-3",
    title: "Executive Boardroom & Commercial Space",
    category: "commercial",
    categoryLabel: "Commercial Design",
    image: SPACEBOUND_IMAGES.commercialOffice,
    caption: "Tailored commercial boardroom interior engineered for prestige, acoustic balance, and collaborative productivity."
  },
  {
    id: "gal-4",
    title: "Sculptural Travertine Dining Salon",
    category: "dining",
    categoryLabel: "Dining Room Design",
    image: SPACEBOUND_IMAGES.diningDesign,
    caption: "Monolithic travertine stone dining table framed by sculptural seating and an architectural statement chandelier."
  },
  {
    id: "gal-5",
    title: "Refined Modern Living Architecture",
    category: "living",
    categoryLabel: "Living Spaces",
    image: SPACEBOUND_IMAGES.hero,
    caption: "Cohesive open-plan contemporary living environment celebrating clean lines, warm neutrals, and organic textures."
  },
  {
    id: "gal-6",
    title: "Bespoke Wardrobe & Hardware Detailing",
    category: "cabinetry",
    categoryLabel: "Cabinetry & Hardware",
    image: SPACEBOUND_IMAGES.cabinetryHardware,
    caption: "Precision joinery detailing showcasing millimeter-perfect reveals and custom architectural hardware."
  },
  {
    id: "gal-7",
    title: "Intimate Ambient Dining Setting",
    category: "dining",
    categoryLabel: "Dining Room Design",
    image: SPACEBOUND_IMAGES.diningDesign,
    caption: "Harmonious material palette uniting natural stone, warm timber, and soft atmospheric lighting."
  },
  {
    id: "gal-8",
    title: "Tranquil Bedroom Layering & Textiles",
    category: "bedroom",
    categoryLabel: "Bedroom Design",
    image: SPACEBOUND_IMAGES.bedroomDesign,
    caption: "Custom upholstered headboard paired with organic washed linens and recessed architectural sconces."
  }
];

// Backward-compatible alias
export const ESTIE_GALLERY = SPACEBOUND_GALLERY;

export const SPACEBOUND_REVIEWS: ClientReview[] = [
  {
    id: "rev-1",
    clientName: "Adebayo & Tolu Balogun",
    clientTitle: "Residential Clients",
    location: "Estate, Abraham Adesanya, Ajah, Lagos",
    rating: 5,
    projectType: "Full Residence Bedroom, Cabinetry & Dining Interior Design",
    date: "Verified Review",
    reviewText: "Spacebound Interiors transformed our home into an absolute masterpiece. The custom cabinetry and architectural hardware in our kitchen and wardrobes were executed with astonishing precision. Our bedroom and dining spaces feel like a private luxury sanctuary. Their modern aesthetic, personalized approach, and dedication to true craftsmanship set them apart in Lagos. Deserving of every star!"
  }
];

// Backward-compatible alias
export const ESTIE_REVIEWS = SPACEBOUND_REVIEWS;

export const WHY_SPACEBOUND_PILLARS = [
  {
    title: "5.0-Star Rated Interior Craftsmanship",
    description: "Flawless attention to joinery tolerances, material integrity, and artisanal finishing backed by verified 5-star client satisfaction in Lagos.",
    icon: "Award"
  },
  {
    title: "Estate, Abraham Adesanya Location",
    description: "Based in Estate, Abraham Adesanya, Ajah, Lagos 106104. Conveniently situated to serve residential and commercial clients across the Lekki peninsula and Lagos.",
    icon: "MapPin"
  },
  {
    title: "Bespoke Cabinetry & Hardware Precision",
    description: "Custom millwork, walk-in closets, kitchen joinery, and curated architectural hardware engineered to your exact spatial dimensions.",
    icon: "Maximize2"
  },
  {
    title: "Personalized Solutions & Custom Spaces",
    description: "Every layout, textile, and material is curated specifically around your lifestyle and functional requirements—never off-the-shelf templates.",
    icon: "Sparkles"
  },
  {
    title: "Commercial & Executive Versatility",
    description: "From intimate bedroom and dining retreats to high-profile corporate suites and boardroom fit-outs built for durability and prestige.",
    icon: "ShieldCheck"
  },
  {
    title: "Meticulous Turnkey Project Execution",
    description: "Clear communication, detailed spatial planning, transparent timelines, and disciplined on-site installation protocol from concept to handover.",
    icon: "Clock"
  }
];

// Backward-compatible alias
export const WHY_ESTIE_PILLARS = WHY_SPACEBOUND_PILLARS;
