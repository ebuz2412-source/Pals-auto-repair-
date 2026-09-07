import {
  BusinessInfo,
  GlassService,
  GlassProject,
  GalleryShowcaseItem
} from "./types";

// Custom generated high-fidelity glass & mirror photography
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
  name: "Glass and Mirror Vendor",
  tagline: "Precision Glass Cutting, Custom Mirrors & Architectural Glazing in Lagos",
  shortDescription: "Specialized glass and mirror shop based in Mushin, Lagos. We supply, custom-fabricate, and install premium architectural glass, frameless shower cubicles, custom LED and bevelled mirrors, office glass partitions, and toughened safety glass across Lagos, Nigeria.",
  type: "Glass & Mirror Shop / Glass & Mirror Vendor",
  address: "52 Bauri Street, Mushin, Lagos 100253, Lagos, Nigeria",
  street: "52 Bauri Street",
  area: "Mushin",
  postalCode: "100253",
  city: "Lagos",
  state: "Lagos State",
  country: "Nigeria",
  serviceArea: "Lagos, Nigeria (Island & Mainland)",
  openingHours: "Open 24 hours",
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=52+Bauri+Street%2C+Mushin%2C+Lagos+100253%2C+Lagos%2C+Nigeria",
  whatsappUrl: "https://wa.me/?text=Hello%20Glass%20and%20Mirror%20Vendor%2C%20I%20would%20like%20to%20inquire%20about%20your%20glass%20and%20mirror%20products%20and%20installation%20in%20Lagos.",
  phoneLink: "tel:+2348000000000",
  displayPhone: "+234 (Contact via Call / WhatsApp)",
};

export const GLASS_SERVICES: GlassService[] = [
  {
    id: "custom-mirrors",
    title: "Custom Mirrors & Bathroom Vanity Mirrors",
    category: "mirrors",
    categoryLabel: "Custom Mirrors",
    shortDescription: "Bespoke high-definition silver and copper-free mirrors cut to any dimension, including LED backlit vanity mirrors, full-length dressing mirrors, and wall installations.",
    fullDescription: "From luxury residential vanity mirrors to expansive gym wall installations, Glass and Mirror Vendor provides precision-fabricated mirror glass with flawless optical clarity. We offer flat polished edges, bevelled borders (10mm to 30mm), diamond edge treatments, safety vinyl backing, and custom cutouts for power outlets and fixtures.",
    image: GLASS_IMAGES.customMirrors,
    iconName: "Sparkles",
    features: [
      "LED backlit smart mirrors with touch sensors & anti-fog demister pads",
      "Full-height wall mirrors for fitness centers, dance studios, and luxury dressing rooms",
      "Bevelled edge mirrors with custom border widths (10mm, 15mm, 25mm)",
      "Smoked grey, bronze, and antique decorative mirror finishes",
      "Heavy-duty safety vinyl backing to prevent glass shattering"
    ],
    specs: ["4mm, 5mm, 6mm float mirror glass", "Moisture-resistant silvering", "CNC edge bevel & polish"],
    idealFor: "Bathrooms, walk-in closets, residential master bedrooms, commercial gyms, spas, and boutique hotel suites."
  },
  {
    id: "decorative-mirrors",
    title: "Decorative Mirrors & Mirror Wall Panelling",
    category: "mirrors",
    categoryLabel: "Decorative Mirrors",
    shortDescription: "Artistic diamond-cut mirror panels, geometric grid accent walls, bronze and smoke tinted mirrors that enhance interior light and room depth.",
    fullDescription: "Transform blank walls into stunning reflective design statements. We fabricate and install multi-panel geometric mirror walls with bevelled joints, antique-styled bronze reflective glass, and framed feature mirrors that bring unmatched sophistication to living spaces, foyers, and hotel lounges.",
    image: GLASS_IMAGES.decorativeMirror,
    iconName: "Sparkles",
    features: [
      "Diamond and rectangular bevelled mirror tile accent walls",
      "Bronze, grey, and champagne tinted architectural mirror options",
      "Precision CNC cut edges with clean 1mm join tolerances",
      "Safety backing and industrial non-corrosive mirror adhesives",
      "Custom room scaling to maximize natural interior lighting"
    ],
    specs: ["5mm & 6mm Bevelled Mirror Panels", "Distortion-free float reflection", "Zero oxidation silver coat"],
    idealFor: "Dining room feature walls, luxury penthouses, boutique hotel lobbies, and executive reception areas."
  },
  {
    id: "frameless-showers",
    title: "Frameless Glass Showers & Shower Cubicles",
    category: "showers",
    categoryLabel: "Shower Enclosures",
    shortDescription: "Ultra-clear tempered glass shower cubicles, walk-in wet-room screens, and corner enclosures with solid 304 stainless steel or matte black hardware.",
    fullDescription: "Upgrade your bathroom with modern frameless shower enclosures engineered for watertight reliability and clean architectural lines. We fabricate custom 8mm and 10mm tempered safety glass shower doors, sliding cubicle systems, and fixed walk-in panels, paired with corrosion-resistant brass and stainless steel hinges and handles.",
    image: GLASS_IMAGES.showerCubicles,
    iconName: "Droplets",
    features: [
      "8mm & 10mm toughened safety glass certified for impact resistance",
      "Frameless walk-in fixed panels, single pivot doors, and double bypass sliders",
      "High-grade 304 stainless steel, matte black, and brushed gold hardware",
      "Anti-limescale hydrophobic surface protection for effortless cleaning",
      "Precision magnetic door seals and water-deflecting thresholds"
    ],
    specs: ["8mm / 10mm Tempered Glass", "Grade 304 Stainless Hinges", "Laser-leveled wall alignment"],
    idealFor: "Modern residential master bathrooms, luxury apartments, boutique hotels, and guest suites across Lagos."
  },
  {
    id: "glass-doors",
    title: "Frameless Glass Doors & Hydraulic Pivot Systems",
    category: "doors",
    categoryLabel: "Glass Doors",
    shortDescription: "Heavy-duty tempered glass pivot doors, sliding patio glass systems, automatic entrance systems, and frameless interior partition doors.",
    fullDescription: "Make a striking architectural statement with frameless glass doors that maximize natural daylight and interior flow. Glass and Mirror Vendor fabricates and installs floor-spring pivot doors, soft-close sliding systems, bi-fold glass walls, and commercial entrance facades that combine security with sophisticated transparency.",
    image: GLASS_IMAGES.glassDoors,
    iconName: "DoorOpen",
    features: [
      "10mm & 12mm heavy-duty toughened safety glass with polished edges",
      "Dormakaba-style hydraulic floor spring mechanisms with 90° hold-open",
      "Architectural ladder pull handles in brushed stainless, matte black, and satin brass",
      "Top-hung sliding track systems with silent soft-close dampers",
      "Secure cylinder patch fittings and stainless steel center/bottom locks"
    ],
    specs: ["10mm / 12mm Monolithic Tempered", "Floor spring load rated up to 150kg", "Weather-sealed gaskets"],
    idealFor: "Corporate office main entrances, residential terrace access, retail showrooms, and luxury penthouses."
  },
  {
    id: "shopfront-glass",
    title: "Commercial Shopfront Glass & Facade Glazing",
    category: "doors",
    categoryLabel: "Shopfront Glass",
    shortDescription: "Massive floor-to-ceiling clear glass storefronts, display window panels, and commercial shopping mall glass facades engineered for crystal transparency.",
    fullDescription: "Attract customers and showcase retail merchandise with flawless architectural shopfront glass. We supply, deliver, and install large-format toughened and laminated safety glass facades, frameless glass spider fittings, and heavy-duty commercial entrance doors across Lagos shopping centers and high streets.",
    image: GLASS_IMAGES.shopfrontGlass,
    iconName: "Building2",
    features: [
      "Oversized 12mm & 15mm tempered safety glass storefront panels",
      "Laminated anti-intrusion glass for retail security and peace of mind",
      "Frameless patch-fitted glass entrance doors with heavy-duty handles",
      "Weather-sealed structural silicone glazing with clean lines",
      "Rapid turnaround for retail store openings and refits"
    ],
    specs: ["12mm - 19mm Tempered Glass", "Structural silicone weather seal", "High-traffic commercial hinges"],
    idealFor: "Shopping malls, retail boutiques, car showrooms, restaurants, and commercial storefronts across Lagos."
  },
  {
    id: "office-partitions",
    title: "Office Glass Partitions & Demountable Walls",
    category: "partitions",
    categoryLabel: "Office Partitions",
    shortDescription: "Acoustic glass partitioning systems, black slimline aluminum framed glass walls, and frosted privacy banding for corporate workspaces in Lagos.",
    fullDescription: "Transform office layouts into open, collaborative, and quiet working environments. We install single-glazed and double-glazed acoustic glass partitions with slimline powder-coated frames, frameless butt-joint silicone glazing, and decorative manifestation or frosted frosting films for boardroom privacy.",
    image: GLASS_IMAGES.officePartitions,
    iconName: "Building2",
    features: [
      "Single and double glazed acoustic systems for noise reduction up to 42dB",
      "Minimalist black, white, and natural anodized aluminum profile channels",
      "Butt-joint frameless glazing with crystal-clear UV-stable silicone joints",
      "Custom frosted privacy bands, company logo manifestations, and reeded glass",
      "Integrated full-height glass pivot doors or framed acoustic timber/glass doors"
    ],
    specs: ["10mm / 12mm Toughened Glass", "Acoustic rated perimeter seals", "Custom vinyl manifestations"],
    idealFor: "Corporate headquarters, bank branches, co-working spaces, executive boardrooms, and tech hubs in Lagos."
  },
  {
    id: "glass-balustrades",
    title: "Glass Balustrades & Stair Railings",
    category: "balustrades",
    categoryLabel: "Glass Railings",
    shortDescription: "Structural frameless glass railings for staircases, cantilevered balconies, mezzanines, and pool enclosures with stainless steel spigots or channel systems.",
    fullDescription: "Ensure uncompromising safety without obstructing views or light. Our glass balustrades utilize 12mm toughened or 13.52mm laminated structural glass, anchored by heavy-duty 316 marine-grade stainless steel base shoes, spigots, or side-mount standoff pins for unmatched structural rigidity.",
    image: GLASS_IMAGES.balustrades,
    iconName: "ShieldCheck",
    features: [
      "12mm toughened glass or 13.52mm/17.52mm toughened laminated safety glass",
      "Surface-mounted or recessed aluminum U-channel base track systems",
      "Marine-grade 316 stainless steel spigots and side-mount standoff brackets",
      "Optional slimline slotted top capping handrail in stainless steel or matte black",
      "Full compliance with structural loading and building safety standards"
    ],
    specs: ["12mm - 17.52mm Safety Glass", "Grade 316 Marine Stainless Steel", "Engineered wind & impact resistance"],
    idealFor: "Internal staircases, external balcony perimeters, terrace edges, rooftop lounges, and swimming pool fences."
  },
  {
    id: "tabletop-glass",
    title: "Custom Glass Tabletops & Furniture Glass",
    category: "tempered",
    categoryLabel: "Tabletop Glass",
    shortDescription: "Heavy clear tempered glass tops for dining tables, executive conference desks, coffee tables, and protective furniture glass overlays.",
    fullDescription: "Protect and elevate your furniture with custom cut-to-measure tabletop glass. We cut and finish glass to exact shapes (rectangular, circular, racetrack, oval, or custom templates) with flat polished edges, bevelled borders, pencil edges, and radius corners.",
    image: GLASS_IMAGES.tabletopGlass,
    iconName: "Layers",
    features: [
      "6mm, 8mm, 10mm, 12mm, and 15mm heavy clear float and low-iron glass",
      "Flat polished edges, 25mm bevelled borders, and pencil rounded edges",
      "Custom cutouts for cable grommets and umbrella holes",
      "Tempered safety glass resistant to hot dishes, impact, and daily scratches",
      "Clear non-slip silicone bumper pads included for table surfaces"
    ],
    specs: ["6mm to 15mm Tempered Glass", "CNC polished perimeter edges", "Radius & clipped corners"],
    idealFor: "Dining tables, boardroom tables, coffee tables, console tables, and office desk protectors."
  },
  {
    id: "precision-edge-polishing",
    title: "Precision Glass Cutting & CNC Edge Polishing",
    category: "tempered",
    categoryLabel: "Edge Polishing",
    shortDescription: "Automated diamond wheel edge grinding, precision bevels, mitre cuts, and custom waterjet cutouts for hinges, handles, and electrical sockets.",
    fullDescription: "At our 52 Bauri Street workshop in Mushin, we operate precision glass processing machinery. We produce flat polished edges with clean arris chamfers, decorative bevelled borders from 10mm to 35mm, internal corner cutouts, and drilled holes with smooth, chip-free finishes.",
    image: GLASS_IMAGES.edgePolishing,
    iconName: "Layers",
    features: [
      "Flat polished edges with satin arris chamfer for total handling safety",
      "Bevelled edges from 10mm to 35mm width for mirrors and decorative panels",
      "Mitred edges (22.5° and 45°) for seamless glass-to-glass corner joints",
      "Precision hole drilling and hinge cutouts for architectural hardware",
      "Rapid turnaround on cut-to-size orders for fabricators and carpenters"
    ],
    specs: ["Diamond-wheel polishing", "CNC waterjet tolerance ±0.5mm", "Smooth touch-safe edges"],
    idealFor: "Carpenters, interior designers, aluminium fabricators, furniture makers, and glaziers."
  },
  {
    id: "tempered-specialty-glass",
    title: "Tempered, Laminated & Specialty Glass Sheets",
    category: "tempered",
    categoryLabel: "Specialty Glass",
    shortDescription: "Custom cut-to-size float glass, heat-strengthened safety glass, laminated soundproof glass, tinted grey/bronze glass, and decorative fluted glass.",
    fullDescription: "Whatever your architectural glass specifications, our Mushin glass shop cuts, drills, shapes, and finishes glass to exact millimeter tolerances. We supply clear float, low-iron extra clear, grey and bronze solar-reflective tinted glass, acid-etched frosted glass, fluted/moroccan reeded glass, and fire-resistant safety panels.",
    image: GLASS_IMAGES.temperedGlass,
    iconName: "Layers",
    features: [
      "Glass thicknesses: 4mm, 5mm, 6mm, 8mm, 10mm, 12mm, 15mm, and 19mm",
      "Toughening & heat-strengthening processes for 5x regular glass strength",
      "Multi-layer PVB laminated glass for acoustic insulation and intrusion resistance",
      "Fluted/reeded textured architectural glass for modern cabinet doors and dividers",
      "Tinted glass in Dark Grey, Euro Bronze, Ocean Blue, and reflective solar coat"
    ],
    specs: ["4mm to 19mm sheets", "PVB & SGP interlayers", "CNC waterjet cutout precision"],
    idealFor: "Interior decorators, furniture manufacturers, aluminium fabricators, and building contractors."
  },
  {
    id: "window-glazing",
    title: "Architectural Window Glass & Glazing",
    category: "windows",
    categoryLabel: "Window Glazing",
    shortDescription: "High-performance window glass replacements, sliding window panes, casement glazing, and double-glazed insulated glass units (IGU).",
    fullDescription: "Keep your spaces energy-efficient and secure with precision-glazed window glass. We supply and replace window panes for residential and commercial aluminium window profiles, curtain walls, and skylights, offering energy-saving tinted and low-E options suited for the tropical Lagos climate.",
    image: GLASS_IMAGES.windowGlazing,
    iconName: "Maximize2",
    features: [
      "Standard and custom cut-to-measure window pane replacements",
      "Insulated Double Glazing (DGU) with argon gas fill for thermal and acoustic efficiency",
      "Solar control reflective glass minimizing heat build-up and air-conditioning costs",
      "Safety laminated security panes resistant to forced entry",
      "Fast replacement service for cracked or fogged window panels"
    ],
    specs: ["Single & Double Glazed Units", "Weather-resistant butyl sealant", "Aluminum spacer bars"],
    idealFor: "Residential villas, commercial towers, schools, hospitals, and estate properties throughout Lagos."
  },
  {
    id: "glass-repairs-replacement",
    title: "24/7 Glass Replacement & Emergency Glazing",
    category: "repairs",
    categoryLabel: "Glass Repairs",
    shortDescription: "Round-the-clock emergency glass cutting and replacement for shattered doors, cracked storefronts, damaged shower glass, and broken mirrors across Lagos.",
    fullDescription: "Because glass emergencies require immediate attention, Glass and Mirror Vendor operates 24 hours. Our experienced technicians safely measure, cut, board up, or replace broken storefronts, shattered tempered doors, fractured windows, and damaged mirrors with rapid turnaround anywhere in Lagos.",
    image: GLASS_IMAGES.glassCutting,
    iconName: "Clock",
    features: [
      "24 hours operational availability for emergency site response",
      "Safe removal and professional disposal of dangerous shattered glass fragments",
      "Rapid on-site measurement and expedited precision glass fabrication",
      "Temporary secure boarding services when custom fabrication is in progress",
      "Mobile team equipped for emergency repairs across Lagos Mainland and Island"
    ],
    specs: ["24/7 Availability", "Safety disposal protocols", "Expedited fabrication pipeline"],
    idealFor: "Retail stores, bank branches, corporate offices, restaurants, and residential emergencies in Lagos."
  }
];

export const GLASS_PROJECTS: GlassProject[] = [
  {
    id: "proj-1",
    title: "Frameless Glass Shower & LED Vanity Mirror Installation",
    category: "Shower Enclosures & Custom Mirrors",
    location: "Ikoyi, Lagos",
    description: "Full supply and installation of 10mm tempered frameless shower cubicles with matte black hardware, paired with custom circular LED backlit vanity mirrors.",
    image: GLASS_IMAGES.showerCubicles,
    type: "Residential",
    materialsUsed: ["10mm Clear Tempered Glass", "304 Stainless Matte Black Hinges", "5mm Copper-Free Mirror with LED Halo"],
    keyHighlights: ["Zero water leakage design", "Laser-measured alignment", "Touch-dimmable mirror backlighting"]
  },
  {
    id: "proj-2",
    title: "Acoustic Glass Office Partitions & Pivot Entrance",
    category: "Office Glass Partitions",
    location: "Victoria Island, Lagos",
    description: "Floor-to-ceiling single-glazed acoustic office partitions with black powder-coated aluminum channels, custom frosted privacy bands, and 12mm pivot doors.",
    image: GLASS_IMAGES.officePartitions,
    type: "Commercial",
    materialsUsed: ["12mm Acoustic Tempered Glass", "Slimline Black Channel Profiles", "Dormakaba Floor Spring Hinges"],
    keyHighlights: ["Enhanced acoustic separation", "Minimalist visual aesthetic", "Frosted manifestation band"]
  },
  {
    id: "proj-3",
    title: "Geometric Bevelled Wall Mirror Installation",
    category: "Decorative Mirror Feature Wall",
    location: "Lekki Phase 1, Lagos",
    description: "Precision installation of diamond-bevelled 6mm safety-backed silver mirror panels spanning an entire luxury living room accent wall.",
    image: GLASS_IMAGES.decorativeMirror,
    type: "Residential",
    materialsUsed: ["6mm High-Clarity Silver Mirror", "25mm CNC Bevelled Edges", "Safety Vinyl Backing"],
    keyHighlights: ["Distortion-free reflection", "Seamless 1mm join lines", "Safety shatter-resistant backing"]
  },
  {
    id: "proj-4",
    title: "Frameless Tempered Glass Balustrades on Floating Stairs",
    category: "Architectural Glass Railings",
    location: "Ikeja GRA, Lagos",
    description: "Installation of 12mm clear tempered glass balustrades secured with satin stainless steel spigots along a cantilevered staircase and upper mezzanine.",
    image: GLASS_IMAGES.balustrades,
    type: "Architectural",
    materialsUsed: ["12mm Toughened Safety Glass", "Grade 316 Stainless Steel Spigots", "Precision Bevelled Handrail Glass"],
    keyHighlights: ["Unobstructed sightlines", "Rigid structural stability", "Compliant safety standards"]
  },
  {
    id: "proj-5",
    title: "Commercial Retail Storefront & Glass Pivot Entrance",
    category: "Shopfront Glass & Facade",
    location: "Surulere, Lagos",
    description: "Heavy-duty 12mm tempered clear glass storefront panels with floor-spring pivot doors, brushed stainless steel ladder pull handles, and weather-sealed joints.",
    image: GLASS_IMAGES.shopfrontGlass,
    type: "Commercial",
    materialsUsed: ["12mm Monolithic Toughened Glass", "Heavy-Duty Floor Spring", "1800mm Stainless Ladder Handle"],
    keyHighlights: ["Effortless 90-degree hold open", "High-traffic durability", "Crystal-clear retail showcase"]
  },
  {
    id: "proj-6",
    title: "Custom Heavy Tempered Glass Tabletop & Conference Suite",
    category: "Tabletop Glass & Furniture Glazing",
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
    categoryLabel: "Bathroom Mirrors",
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
    title: "Acoustic Glass Office Wall",
    category: "partitions",
    categoryLabel: "Office Partitions",
    image: GLASS_IMAGES.officePartitions,
    caption: "Modern corporate glass partition with frosted horizontal privacy strip.",
    details: "12mm acoustic glass installed in slimline anodized aluminum channel."
  },
  {
    id: "gal-4",
    title: "Frameless Glass Stair Balustrade",
    category: "balustrades",
    categoryLabel: "Glass Railings",
    image: GLASS_IMAGES.balustrades,
    caption: "Modern floating staircase protected with clear tempered glass balustrades.",
    details: "12mm safety toughened glass mounted with grade 316 stainless steel spigots."
  },
  {
    id: "gal-5",
    title: "Architectural Pivot Glass Door",
    category: "doors",
    categoryLabel: "Glass Doors",
    image: GLASS_IMAGES.glassDoors,
    caption: "Floor-to-ceiling glass pivot door for modern commercial building entrance.",
    details: "12mm clear safety glass with hydraulic bottom floor pivot."
  },
  {
    id: "gal-6",
    title: "Precision Glass Edge Polishing",
    category: "fabrication",
    categoryLabel: "Edge Polishing",
    image: GLASS_IMAGES.edgePolishing,
    caption: "Close-up diamond wheel flat polishing with chamfered arris bevel.",
    details: "Fabricated at our Mushin workshop with crystal-clear edge clarity."
  },
  {
    id: "gal-7",
    title: "Decorative Bevelled Mirror Wall",
    category: "mirrors",
    categoryLabel: "Decorative Mirrors",
    image: GLASS_IMAGES.decorativeMirror,
    caption: "Geometric multi-panel wall mirror creating depth and reflective elegance.",
    details: "6mm silver mirror tiles with 25mm bevelled edge borders."
  },
  {
    id: "gal-8",
    title: "Commercial Retail Shopfront Glass",
    category: "doors",
    categoryLabel: "Shopfront Glass",
    image: GLASS_IMAGES.shopfrontGlass,
    caption: "Massive clear tempered glass storefront panels with pivot entrance doors.",
    details: "12mm clear architectural safety glass with stainless steel patch hardware."
  },
  {
    id: "gal-9",
    title: "Custom Cut Glass Tabletop",
    category: "tabletop",
    categoryLabel: "Tabletop Glass",
    image: GLASS_IMAGES.tabletopGlass,
    caption: "Thick clear tempered glass tabletop with flat polished edges.",
    details: "12mm polished edge float glass engineered for furniture strength and beauty."
  },
  {
    id: "gal-10",
    title: "Precision Glass Sheet Cutting & Measuring",
    category: "fabrication",
    categoryLabel: "Glass Cutting",
    image: GLASS_IMAGES.glassCutting,
    caption: "Glazier cutting architectural float glass sheet on felt-topped workshop table.",
    details: "Manual and CNC scoring with precision glass cutter and T-square ruler."
  },
  {
    id: "gal-11",
    title: "Architectural Window Glazing",
    category: "doors",
    categoryLabel: "Window Glazing",
    image: GLASS_IMAGES.windowGlazing,
    caption: "Expansive floor-to-ceiling clear glass sliding window and facade panes.",
    details: "Insulated and tempered safety glazing units for modern residences."
  },
  {
    id: "gal-12",
    title: "Tempered Safety Glass Sheet Stacks",
    category: "fabrication",
    categoryLabel: "Safety Glass",
    image: GLASS_IMAGES.temperedGlass,
    caption: "Heavy architectural tempered glass panels on workshop A-frame storage racks.",
    details: "High-clarity float glass ready for cutouts, drilling, and site installation."
  }
];

export const WHY_CHOOSE_US_POINTS = [
  {
    icon: "Clock",
    title: "Open 24 Hours",
    description: "Our shop and workshop operate 24 hours. Whether you need an urgent glass replacement in the middle of the night or tight project deadlines met, we are always open."
  },
  {
    icon: "MapPin",
    title: "Lagos-Wide Delivery & Installation",
    description: "Located centrally at 52 Bauri Street, Mushin, we supply and install across both Lagos Mainland and Island, including Ikeja, Surulere, Victoria Island, Lekki, and Ajah."
  },
  {
    icon: "Sparkles",
    title: "Precision Edge Polishing & Bevelling",
    description: "Advanced glass cutting and edge processing: flat polished edges, bevelled borders, pencil edges, mitre cuts, and CNC holes for hinges and sockets."
  },
  {
    icon: "ShieldCheck",
    title: "Certified Tempered Safety Glass",
    description: "We use premium toughened and laminated safety glass engineered to withstand high impact, thermal shock, and everyday wear for total peace of mind."
  },
  {
    icon: "Ruler",
    title: "Custom Sizing & On-Site Laser Measurement",
    description: "No standard templates or guesswork. We measure your space with precision laser tools to fabricate glass that fits exactly to the millimeter."
  },
  {
    icon: "CheckCircle2",
    title: "Professional Glass Technicians",
    description: "Our experienced fabricators and installers handle delicate glass and mirrors with safe rigging, structural anchors, and immaculate cleanup."
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
