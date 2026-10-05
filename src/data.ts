import {
  BusinessInfo,
  GlassService,
  GlassProject,
  GalleryShowcaseItem
} from "./types";

// Custom generated high-fidelity glass & mirror photography (All verified genuine glass/mirror imagery)
import heroGlassImg from "./assets/images/glass_hero_luxury_1788805160617.jpg";
import customMirrorsImg from "./assets/images/custom_mirrors_luxury_1788805173656.jpg";
import showerCubiclesImg from "./assets/images/frameless_glass_shower_1788805186356.jpg";
import officePartitionsImg from "./assets/images/office_glass_partitions_1788805199359.jpg";
import balustradesImg from "./assets/images/glass_balustrades_modern_1788805214145.jpg";
import glassDoorsImg from "./assets/images/glass_doors_entrance_1788805227305.jpg";
import glassCuttingImg from "./assets/images/glass_cutting_table_1788806089682.jpg";
import edgePolishingImg from "./assets/images/glass_edge_polishing_1788806104700.jpg";
import temperedSheetsImg from "./assets/images/tempered_glass_sheets_1788806124386.jpg";
import shopfrontImg from "./assets/images/shopfront_glass_store_1788806139982.jpg";
import glassTabletopImg from "./assets/images/glass_tabletop_luxury_1788806156489.jpg";
import decorativeMirrorImg from "./assets/images/decorative_wall_mirror_1788806174954.jpg";
import windowGlazingImg from "./assets/images/window_glazing_modern_1788806190663.jpg";

export const GLASS_IMAGES = {
  hero: heroGlassImg,
  customMirrors: customMirrorsImg,
  decorativeMirror: decorativeMirrorImg,
  showerCubicles: showerCubiclesImg,
  officePartitions: officePartitionsImg,
  balustrades: balustradesImg,
  glassDoors: glassDoorsImg,
  shopfrontGlass: shopfrontImg,
  tabletopGlass: glassTabletopImg,
  glassCutting: glassCuttingImg,
  edgePolishing: edgePolishingImg,
  temperedGlass: temperedSheetsImg,
  windowGlazing: windowGlazingImg,
};

export const BUSINESS_INFO: BusinessInfo = {
  name: "OLANREWAJU GLAZIER",
  tagline: "CLEAR VISION, QUALITY FINISH",
  shortDescription: "EXPERT IN ALL KINDS OF GLASS WORKS",
  brandMessage: "WE MAKE GLASS BEAUTIFUL & STRONG",
  additionalMessage: "“We don't just fix glass, We build trust with every job.”",
  type: "Expert In All Kinds Of Glass Works",
  address: "24, Buhari Street, Mushin, Lagos, Nigeria",
  street: "24, Buhari Street",
  area: "Mushin",
  city: "Lagos",
  state: "Lagos State",
  country: "Nigeria",
  serviceArea: "Lagos, Nigeria (Island & Mainland)",
  openingHours: "Open 24 Hours",
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=24+Buhari+Street%2C+Mushin%2C+Lagos%2C+Nigeria",
  whatsappUrl: "https://wa.me/2349014120207?text=Hello%20OLANREWAJU%20GLAZIER%2C%20I%20would%20like%20to%20inquire%20about%20your%20glass%20works%20and%20installation%20in%20Lagos.",
  whatsappUrl2: "https://wa.me/2349046187593?text=Hello%20OLANREWAJU%20GLAZIER%2C%20I%20would%20like%20to%20inquire%20about%20your%20glass%20works%20and%20installation%20in%20Lagos.",
  whatsappNumbers: ["09014120207", "09046187593"],
  phoneLink: "tel:08138511873",
  phoneLink2: "tel:09014120207",
  phoneNumbers: ["08138511873", "09014120207"],
  displayPhone: "08138511873",
  displayPhone2: "09014120207",
  tiktok: "olamideolarenwaju40",
  tiktokUrl: "https://www.tiktok.com/@olamideolarenwaju40",
  instagram: "ayuba_44556",
  instagramUrl: "https://www.instagram.com/ayuba_44556",
  highlights: [
    "Quality Materials",
    "Expert Workmanship",
    "On Time Delivery",
    "100% Customer Satisfaction"
  ]
};

export const GLASS_SERVICES: GlassService[] = [
  {
    id: "aluminium-glass-windows",
    title: "Aluminium & Glass Windows",
    category: "windows",
    categoryLabel: "Aluminium & Windows",
    shortDescription: "High-grade aluminium profile framing paired with energy-efficient float, tinted, and tempered glass for modern residential and commercial windows.",
    fullDescription: "OLANREWAJU GLAZIER specializes in the custom fabrication, glazing, and professional installation of aluminium and glass windows. We offer sliding windows, casement windows, projected windows, and fixed architectural glazing units built with high-durability aluminium sections and weather-resistant gaskets.",
    image: GLASS_IMAGES.windowGlazing,
    iconName: "Maximize2",
    features: [
      "Custom sliding, casement, and projected aluminium window frames",
      "Choice of clear, bronze, grey tinted, or reflective solar glass",
      "Acoustic and thermal insulation with weather-tight rubber seals",
      "High-security locks, friction stays, and durable handles",
      "Precision cut and measured to exact building apertures"
    ],
    specs: ["Heavy gauge aluminium profiles", "4mm to 8mm float & tempered glass", "Anti-leak weather seals"],
    idealFor: "Residential villas, private residences, office buildings, and commercial complexes across Lagos."
  },
  {
    id: "glass-doors",
    title: "Glass Doors (Sliding & Swing)",
    category: "doors",
    categoryLabel: "Glass Doors",
    shortDescription: "Heavy-duty tempered frameless sliding and hydraulic floor-spring swing glass doors with premium stainless steel hardware.",
    fullDescription: "Make an unforgettable impression with expertly installed glass doors from OLANREWAJU GLAZIER. Whether you need sleek frameless swing doors with hydraulic floor springs or silent, space-saving top-hung sliding glass doors, we deliver flawless alignment, smooth operation, and superior security.",
    image: GLASS_IMAGES.glassDoors,
    iconName: "DoorOpen",
    features: [
      "10mm & 12mm heavy-duty toughened safety glass with polished edges",
      "Hydraulic floor-spring swing mechanisms with smooth 90° hold-open",
      "Top-hung sliding rail systems with soft-close silent gliding wheels",
      "Architectural tubular ladder handles in stainless steel and matte black",
      "Secure cylinder bottom patch locks and dust-proof floor sockets"
    ],
    specs: ["10mm / 12mm Tempered Safety Glass", "Grade 304 Stainless Patch Fittings", "Floor-spring rated up to 150kg"],
    idealFor: "Office entrances, storefronts, modern living rooms, terrace access, and master suites."
  },
  {
    id: "shower-enclosures",
    title: "Shower Enclosures",
    category: "showers",
    categoryLabel: "Shower Enclosures",
    shortDescription: "Custom frameless tempered glass shower cubicles, corner enclosures, and walk-in wet room screens engineered for watertight luxury.",
    fullDescription: "Transform your bathroom into a luxury sanctuary with custom frameless shower enclosures fabricated and installed by OLANREWAJU GLAZIER. We fabricate custom 8mm and 10mm tempered safety glass shower panels, sliding shower systems, corner cubicles, and walk-in screens equipped with rust-free stainless steel hinges and magnetic seals.",
    image: GLASS_IMAGES.showerCubicles,
    iconName: "Droplets",
    features: [
      "8mm & 10mm toughened safety glass certified for impact and thermal shock",
      "Frameless corner cubicles, walk-in single screens, and sliding doors",
      "Corrosion-resistant 304 stainless steel hinges, clamps, and stabilizer bars",
      "Watertight clear PVC bottom fin sweeps and magnetic door seals",
      "Laser-levelled alignment tailored to sloped bathroom floors"
    ],
    specs: ["8mm / 10mm Toughened Glass", "Rust-free 304 Stainless Hardware", "Watertight seal profile"],
    idealFor: "Modern residential bathrooms, luxury apartments, boutique hotels, and guest suites across Lagos."
  },
  {
    id: "glass-partitions",
    title: "Glass Partitions & Office Dividers",
    category: "partitions",
    categoryLabel: "Glass Partitions",
    shortDescription: "Acoustic glass partitioning, black slimline aluminium channels, and demountable office dividers for collaborative spaces.",
    fullDescription: "Create bright, modern, and noise-controlled commercial spaces with our architectural glass partitions and office dividers. OLANREWAJU GLAZIER supplies and installs floor-to-ceiling single and double glazed wall systems with slimline profiles, clear silicone butt joints, and custom frosted privacy banding.",
    image: GLASS_IMAGES.officePartitions,
    iconName: "Building2",
    features: [
      "Acoustic noise reduction glass systems for executive boardrooms",
      "Minimalist black powder-coated or natural anodized aluminium tracks",
      "Crystal-clear UV-stable silicone butt joints without bulky vertical mullions",
      "Custom frosted privacy manifestations, company logo frosting, or reeded panels",
      "Seamless integration of full-height glass pivot or sliding doors"
    ],
    specs: ["10mm / 12mm Monolithic Safety Glass", "Slimline aluminium channel profiles", "Acoustic perimeter dampeners"],
    idealFor: "Corporate offices, banks, co-working hubs, legal chambers, and commercial studios."
  },
  {
    id: "shopfronts-storefronts",
    title: "Shopfronts & Storefronts",
    category: "doors",
    categoryLabel: "Shopfronts",
    shortDescription: "Expansive floor-to-ceiling clear architectural glass facades, retail display glazing, and shopping mall storefronts.",
    fullDescription: "Attract customers and elevate brand presence with crystal-clear shopfronts and commercial storefronts by OLANREWAJU GLAZIER. We fabricate and install large-format toughened safety glass facades, frameless glass spider fittings, and heavy-duty entrance doors engineered to withstand heavy foot traffic.",
    image: GLASS_IMAGES.shopfrontGlass,
    iconName: "Building2",
    features: [
      "Oversized 12mm & 15mm heavy tempered safety glass storefront panels",
      "Laminated safety glass options for enhanced retail security",
      "Frameless patch-fitted glass entrance doors with heavy-duty handles",
      "Structural weather-sealed silicone joints with crisp lines",
      "Prompt delivery and fast turnaround for retail fit-outs and openings"
    ],
    specs: ["12mm / 15mm Toughened Glass", "High-traffic commercial hinges", "Structural silicone weather seal"],
    idealFor: "Shopping malls, retail stores, boutiques, supermarkets, showrooms, and restaurant entrances."
  },
  {
    id: "mirrors",
    title: "Mirrors (Wall Mirrors, Vanity Mirrors)",
    category: "mirrors",
    categoryLabel: "Wall & Vanity Mirrors",
    shortDescription: "High-definition silver vanity mirrors, smart LED backlit mirrors, bevelled gym wall mirrors, and decorative accent mirrors.",
    fullDescription: "From bespoke bathroom vanity mirrors to expansive full-wall gym mirrors, OLANREWAJU GLAZIER produces precision-cut mirrors with flawless optical clarity. We provide custom shapes (arched, circular, rectangular, oval), elegant bevelled edge borders (10mm to 30mm), diamond polished edges, and safety backing.",
    image: GLASS_IMAGES.customMirrors,
    iconName: "Sparkles",
    features: [
      "High-definition copper-free silver mirrors with distortion-free reflection",
      "Full-height wall mirrors for home gyms, dance studios, and dressing rooms",
      "Precision CNC bevelled edges and flat polished borders",
      "Smart LED backlit vanity mirrors with warm/cool lighting halos",
      "Heavy-duty safety vinyl backing to prevent shattering"
    ],
    specs: ["4mm, 5mm, 6mm float mirror glass", "Moisture-resistant silver coat", "Custom bevel widths 10-30mm"],
    idealFor: "Bathrooms, dressing rooms, walk-in closets, commercial gyms, spas, and luxury bedrooms."
  },
  {
    id: "table-tops-shelves",
    title: "Table Tops & Glass Shelves",
    category: "tabletop",
    categoryLabel: "Table Tops & Shelves",
    shortDescription: "Custom cut-to-size heavy tempered glass tops for dining tables, executive desks, coffee tables, and floating glass wall shelves.",
    fullDescription: "Protect and enhance your furniture with custom cut glass tabletops and floating glass shelves by OLANREWAJU GLAZIER. We fabricate glass to exact dimensions and templates with smooth, touch-safe flat polished edges, bevelled borders, and radius corners resistant to heat, scratches, and daily impacts.",
    image: GLASS_IMAGES.tabletopGlass,
    iconName: "Layers",
    features: [
      "6mm, 8mm, 10mm, 12mm, and 15mm tempered safety glass options",
      "Touch-safe flat polished edges, bevelled edges, and rounded pencil edges",
      "Custom rectangular, round, oval, and racetrack shapes",
      "Floating heavy-duty glass wall shelves with solid chrome or black brackets",
      "Scratch-resistant and heat-resistant tempered surface protection"
    ],
    specs: ["6mm to 15mm Tempered Glass", "CNC diamond polished perimeter", "Clipped and radius corners"],
    idealFor: "Dining tables, boardroom tables, coffee tables, display cabinets, and retail shelving."
  },
  {
    id: "toughened-tempered-glass",
    title: "Toughened & Tempered Glass",
    category: "tempered",
    categoryLabel: "Toughened Glass",
    shortDescription: "Certified high-strength safety tempered and toughened glass sheets (6mm to 19mm) resistant to thermal stress and impact.",
    fullDescription: "OLANREWAJU GLAZIER is your reliable supplier for premium toughened and tempered safety glass in Lagos. Heat-treated to deliver 5 times the mechanical strength of standard float glass, our tempered glass safely crumbles into small granular pebbles rather than jagged shards when subjected to extreme force.",
    image: GLASS_IMAGES.temperedGlass,
    iconName: "ShieldCheck",
    features: [
      "Certified thermal tempering process providing 5x structural strength",
      "Thicknesses available: 6mm, 8mm, 10mm, 12mm, 15mm, and 19mm",
      "Precision cutouts, countersunk holes, and mitred edges executed before tempering",
      "High thermal shock resistance and wind-load endurance",
      "Safe granular fracture pattern adhering to international safety standards"
    ],
    specs: ["6mm - 19mm Tempered Glass", "CNC waterjet cutout precision", "Certified impact rating"],
    idealFor: "Architectural balustrades, structural facades, stair railings, canopy glass, and heavy partition walls."
  },
  {
    id: "broken-glass-replacement",
    title: "Broken Glass Replacement",
    category: "repairs",
    categoryLabel: "Glass Replacement",
    shortDescription: "Prompt response for broken windows, shattered sliding doors, cracked storefronts, damaged shower cubicles, and broken mirrors.",
    fullDescription: "Accidents happen, and broken glass is an urgent safety hazard. OLANREWAJU GLAZIER provides prompt broken glass replacement across Lagos. Our experienced glaziers safely remove and dispose of broken glass, accurately measure on site, and fabricate expedited replacement glass to restore safety and peace of mind.",
    image: GLASS_IMAGES.glassCutting,
    iconName: "Clock",
    features: [
      "Prompt response for emergency glass breakages across Lagos",
      "Safe clean-up, removal, and disposal of hazardous broken glass fragments",
      "Precise on-site laser measurement and rapid fabrication turnaround",
      "Temporary securing and weatherproofing while custom fabrication is underway",
      "Replacement of cracked window panes, shattered doors, and broken mirrors"
    ],
    specs: ["Rapid Lagos response", "Safe fragment extraction", "Exact dimensional replication"],
    idealFor: "Homes, shops, offices, commercial complexes, schools, and banks experiencing glass damage."
  },
  {
    id: "tinted-frosted-reflective",
    title: "Tinted, Frosted & Reflective Glass",
    category: "fabrication",
    categoryLabel: "Specialty Glass",
    shortDescription: "Solar control tinted glass (Bronze, Grey, Blue), acid-etched frosted privacy glass, one-way reflective glass, and sandblasted designs.",
    fullDescription: "Elevate privacy, solar comfort, and architectural aesthetics with our specialty tinted, frosted, and reflective glass solutions. OLANREWAJU GLAZIER supplies and fabricates Euro Bronze, Dark Grey, Ocean Blue, reflective mirror-coat glass, and acid-etched frosted glass for window glazing, partition walls, and doors.",
    image: GLASS_IMAGES.edgePolishing,
    iconName: "Sparkles",
    features: [
      "Solar control reflective glass that rejects tropical solar heat and UV radiation",
      "Deep tinted glass in Euro Bronze, Dark Grey, and Blue hues",
      "Smooth acid-etched and sandblasted frosted glass for total bathroom & office privacy",
      "One-way reflective glass allowing clear view outward while blocking sight inward",
      "Available in annealed, tempered, and laminated configurations"
    ],
    specs: ["4mm to 12mm thickness", "Solar heat gain reduction", "Durable non-peeling finish"],
    idealFor: "Window facades, office conference rooms, bathroom windows, decorative cabinets, and doors."
  }
];

export const GLASS_PROJECTS: GlassProject[] = [
  {
    id: "proj-1",
    title: "Frameless Glass Shower & LED Vanity Mirror Installation",
    category: "Shower Enclosures & Wall Mirrors",
    location: "Ikoyi, Lagos",
    description: "Full supply and installation of 10mm tempered frameless shower cubicles with matte black hardware, paired with custom circular LED backlit vanity mirrors.",
    image: GLASS_IMAGES.showerCubicles,
    type: "Residential",
    materialsUsed: ["10mm Clear Tempered Glass", "304 Stainless Matte Black Hinges", "5mm Copper-Free Mirror with LED Halo"],
    keyHighlights: ["Zero water leakage design", "Laser-measured alignment", "Touch-dimmable mirror backlighting"]
  },
  {
    id: "proj-2",
    title: "Acoustic Glass Office Partitions & Swing Entrance",
    category: "Glass Partitions & Office Dividers",
    location: "Victoria Island, Lagos",
    description: "Floor-to-ceiling single-glazed acoustic office partitions with black powder-coated aluminium channels, custom frosted privacy bands, and 12mm swing doors.",
    image: GLASS_IMAGES.officePartitions,
    type: "Commercial",
    materialsUsed: ["12mm Acoustic Tempered Glass", "Slimline Black Channel Profiles", "Hydraulic Floor Spring Hinges"],
    keyHighlights: ["Enhanced acoustic separation", "Minimalist visual aesthetic", "Frosted manifestation band"]
  },
  {
    id: "proj-3",
    title: "Aluminium & Glass Windows Glazing Project",
    category: "Aluminium & Glass Windows",
    location: "Lekki Phase 1, Lagos",
    description: "Precision installation of modern heavy-gauge aluminium sliding and casement windows fitted with solar-control tinted and tempered glass.",
    image: GLASS_IMAGES.windowGlazing,
    type: "Residential",
    materialsUsed: ["Heavy Gauge Aluminium Frame", "6mm Solar Reflective Glass", "Weather-tight EPDM Gaskets"],
    keyHighlights: ["Superior thermal insulation", "Smooth gliding roller tracks", "High-security multi-point locks"]
  },
  {
    id: "proj-4",
    title: "Toughened & Tempered Glass Balustrades on Floating Stairs",
    category: "Toughened & Tempered Glass",
    location: "Ikeja GRA, Lagos",
    description: "Installation of 12mm clear tempered glass balustrades secured with satin stainless steel spigots along a cantilevered staircase and upper mezzanine.",
    image: GLASS_IMAGES.balustrades,
    type: "Architectural",
    materialsUsed: ["12mm Toughened Safety Glass", "Grade 316 Stainless Steel Spigots", "Precision Bevelled Edges"],
    keyHighlights: ["Unobstructed sightlines", "Rigid structural stability", "100% compliant safety standards"]
  },
  {
    id: "proj-5",
    title: "Commercial Retail Storefront & Glass Swing Entrance",
    category: "Shopfronts & Storefronts",
    location: "Surulere, Lagos",
    description: "Heavy-duty 12mm tempered clear glass storefront panels with floor-spring swing doors, brushed stainless steel ladder pull handles, and weather-sealed joints.",
    image: GLASS_IMAGES.shopfrontGlass,
    type: "Commercial",
    materialsUsed: ["12mm Monolithic Toughened Glass", "Heavy-Duty Floor Spring", "1800mm Stainless Ladder Handle"],
    keyHighlights: ["Effortless 90-degree hold open", "High-traffic durability", "Crystal-clear retail showcase"]
  },
  {
    id: "proj-6",
    title: "Custom Heavy Tempered Glass Tabletop & Glass Shelves",
    category: "Table Tops & Glass Shelves",
    location: "Maryland, Lagos",
    description: "Fabrication of 15mm ultra-clear tempered glass tabletop with flat polished edges and pencil radius corners for a corporate executive boardroom suite.",
    image: GLASS_IMAGES.tabletopGlass,
    type: "Commercial",
    materialsUsed: ["15mm Ultra-Clear Low-Iron Glass", "Flat Polished Edge with Chamfer", "Silicone Cushion Mounts"],
    keyHighlights: ["Impact resistant safety glass", "Scratch-resistant polished surface", "Precision edge finish"]
  }
];

export const GALLERY_ITEMS: GalleryShowcaseItem[] = [
  {
    id: "gal-1",
    title: "Custom LED Backlit Mirror",
    category: "mirrors",
    categoryLabel: "Wall Mirrors",
    image: GLASS_IMAGES.customMirrors,
    caption: "High-definition copper-free vanity mirror with warm ambient LED glow.",
    details: "5mm silver mirror, CNC cut with polished edge and concealed electronic bracket."
  },
  {
    id: "gal-2",
    title: "Frameless Walk-In Shower Screen",
    category: "showers",
    categoryLabel: "Shower Enclosures",
    image: GLASS_IMAGES.showerCubicles,
    caption: "Minimalist walk-in glass shower enclosure with stainless steel stabilizer arm.",
    details: "10mm tempered glass with easy-clean nano-coating."
  },
  {
    id: "gal-3",
    title: "Acoustic Glass Office Divider",
    category: "partitions",
    categoryLabel: "Glass Partitions",
    image: GLASS_IMAGES.officePartitions,
    caption: "Modern corporate glass partition with frosted horizontal privacy strip.",
    details: "12mm acoustic glass installed in slimline anodized aluminium channel."
  },
  {
    id: "gal-4",
    title: "Toughened Glass Balustrade",
    category: "balustrades",
    categoryLabel: "Tempered Glass",
    image: GLASS_IMAGES.balustrades,
    caption: "Modern floating staircase protected with clear tempered glass balustrades.",
    details: "12mm safety toughened glass mounted with grade 316 stainless steel spigots."
  },
  {
    id: "gal-5",
    title: "Architectural Glass Swing Door",
    category: "doors",
    categoryLabel: "Glass Doors",
    image: GLASS_IMAGES.glassDoors,
    caption: "Floor-to-ceiling glass swing door for modern commercial building entrance.",
    details: "12mm clear safety glass with hydraulic bottom floor pivot."
  },
  {
    id: "gal-6",
    title: "Tinted, Frosted & Edge Polished Glass",
    category: "fabrication",
    categoryLabel: "Specialty Glass",
    image: GLASS_IMAGES.edgePolishing,
    caption: "Close-up diamond wheel flat polishing with chamfered arris bevel.",
    details: "Fabricated at our Mushin workshop with crystal-clear edge clarity."
  },
  {
    id: "gal-7",
    title: "Decorative Bevelled Mirror Wall",
    category: "mirrors",
    categoryLabel: "Vanity Mirrors",
    image: GLASS_IMAGES.decorativeMirror,
    caption: "Geometric multi-panel wall mirror creating depth and reflective elegance.",
    details: "6mm silver mirror tiles with 25mm bevelled edge borders."
  },
  {
    id: "gal-8",
    title: "Commercial Retail Storefront Glass",
    category: "doors",
    categoryLabel: "Shopfronts",
    image: GLASS_IMAGES.shopfrontGlass,
    caption: "Massive clear tempered glass storefront panels with swing entrance doors.",
    details: "12mm clear architectural safety glass with stainless steel patch hardware."
  },
  {
    id: "gal-9",
    title: "Custom Cut Glass Tabletop",
    category: "tabletop",
    categoryLabel: "Table Tops",
    image: GLASS_IMAGES.tabletopGlass,
    caption: "Thick clear tempered glass tabletop with flat polished edges.",
    details: "12mm polished edge float glass engineered for furniture strength and beauty."
  },
  {
    id: "gal-10",
    title: "Broken Glass Replacement & Cutting",
    category: "fabrication",
    categoryLabel: "Glass Cutting",
    image: GLASS_IMAGES.glassCutting,
    caption: "Glazier cutting architectural float glass sheet on felt-topped workshop table.",
    details: "Manual and CNC scoring with precision glass cutter and T-square ruler."
  },
  {
    id: "gal-11",
    title: "Aluminium & Glass Window Glazing",
    category: "doors",
    categoryLabel: "Windows",
    image: GLASS_IMAGES.windowGlazing,
    caption: "Expansive floor-to-ceiling clear glass sliding window and facade panes.",
    details: "Insulated and tempered safety glazing units for modern residences."
  },
  {
    id: "gal-12",
    title: "Toughened & Tempered Safety Glass",
    category: "fabrication",
    categoryLabel: "Toughened Glass",
    image: GLASS_IMAGES.temperedGlass,
    caption: "Heavy architectural tempered glass panels on workshop A-frame storage racks.",
    details: "High-clarity float glass ready for cutouts, drilling, and site installation."
  }
];

export const WHY_CHOOSE_US_POINTS = [
  {
    icon: "ShieldCheck",
    title: "Quality Materials",
    description: "We use only top-grade certified toughened safety glass, high-definition copper-free mirrors, and corrosion-resistant aluminium and stainless steel hardware for enduring longevity."
  },
  {
    icon: "Sparkles",
    title: "Expert Workmanship",
    description: "With years of master craftsmanship, our experienced glaziers execute millimeter-precise cuts, flawless diamond edge polishing, bevelled detailing, and immaculate on-site installations."
  },
  {
    icon: "Clock",
    title: "On Time Delivery",
    description: "We respect your schedule and deadlines. From site measurement to fabrication and final installation, our team ensures punctual delivery across all locations in Lagos."
  },
  {
    icon: "CheckCircle2",
    title: "100% Customer Satisfaction",
    description: "“We don't just fix glass, We build trust with every job.” We take pride in delivering superior finishes, transparent pricing, and dependable customer service."
  },
  {
    icon: "Clock",
    title: "Open 24 Hours Daily",
    description: "Our workshop operates 24 hours to handle rush orders, night-shift commercial installations, and prompt broken glass replacement across Lagos."
  },
  {
    icon: "MapPin",
    title: "Centrally Located in Mushin",
    description: "Situated at 24, Buhari Street, Mushin, Lagos, we easily access all parts of Lagos Mainland and Lagos Island, from Ikeja and Surulere to Victoria Island and Lekki."
  }
];

export const SERVICE_AREAS_LAGOS = [
  "Mushin & Surulere",
  "Ikeja & Maryland",
  "Victoria Island & Ikoyi",
  "Lekki & Ajah",
  "Yaba & Lagos Island",
  "Opebi, Allen & Ilupeju",
  "Magodo & Gbagada",
  "Festac & Apapa"
];
