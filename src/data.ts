import { Service, Testimonial, GalleryItem } from "./types";

export const SERVICES: Service[] = [
  {
    id: "diagnostics",
    title: "Red Seal Computer Diagnostics",
    shortDescription: "Advanced dealer-grade scanner technology to pinpoint electrical, engine, and dashboard warning lights accurately.",
    longDescription: "Our team uses OEM-level diagnostic software and scanners to interface with your vehicle's Engine Control Unit (ECU) and secondary control modules. We diagnose check engine lights, ABS faults, airbag warnings, and complex electrical gremlins, saving you time and costly guess-and-test repair parts.",
    basePrice: 129,
    timeEstimate: "1 - 1.5 Hours",
    features: [
      "OEM-level full vehicle module scan",
      "Sensor real-time data analysis",
      "Comprehensive digital inspection report",
      "Clear explanation before any parts are replaced"
    ],
    iconName: "Cpu"
  },
  {
    id: "brakes",
    title: "Precision Brake & Safety Systems",
    shortDescription: "Complete brake pad, rotor, caliper, and hydraulic fluid services optimized for Alberta's demanding driving conditions.",
    longDescription: "Brakes are your vehicle's single most critical safety system, especially when stopping on Calgary's icy winter roads or descending steep mountain passes. We use premium high-friction pads and rust-resistant rotors engineered to withstand extreme temperature fluctuations and prevent brake fade.",
    basePrice: 199,
    timeEstimate: "1.5 - 2 Hours",
    features: [
      "Premium low-dust ceramic brake pads",
      "Precision rotor run-out verification",
      "Brake fluid moisture & copper level testing",
      "Complete caliper lubrication and slide pin service"
    ],
    iconName: "ShieldCheck"
  },
  {
    id: "maintenance",
    title: "Scheduled Maintenance & Fluid Care",
    shortDescription: "Warranty-approved multi-point inspections, synthetic oil services, and preventative fluid flushes.",
    longDescription: "Keep your factory or aftermarket warranty 100% valid with our OEM-scheduled maintenance programs. We provide 30k/60k/90k services, premium full-synthetic oil changes, transmission flushes, and cooling system flushes tailored specifically to Calgary's severe climate driving schedule.",
    basePrice: 89,
    timeEstimate: "45 Mins - 1 Hour",
    features: [
      "Warranty-approved premium synthetic oil & filter",
      "Detailed 45-point mechanical inspection",
      "Battery cold-cranking amps (CCA) load test",
      "Fluid level checks & top-ups included"
    ],
    iconName: "Wrench"
  },
  {
    id: "suspension",
    title: "Steering, Suspension & Alignment",
    shortDescription: "Pothole-ready strut, shock, ball joint, tie rod, and precision 3D wheel alignment services.",
    longDescription: "Calgary's spring pothole season and gravel roads take a severe toll on steering and suspension. If your car pulls, rides rough, or makes clunking noises over bumps, our certified technicians can restore your vehicle's original handling precision, tyre life, and highway stability.",
    basePrice: 149,
    timeEstimate: "1 - 2 Hours",
    features: [
      "3D computerized wheel alignment check",
      "Heavy-duty shock and strut replacement",
      "Premium tie rod, ball joint, and control arm services",
      "Tire wear and air pressure balancing"
    ],
    iconName: "Compass"
  },
  {
    id: "climate",
    title: "Heating, A/C & Climate Control",
    shortDescription: "Stay warm in a -30°C blizzard and cool during hot Alberta summers with climate system services.",
    longDescription: "A fully functional cabin climate system is both a comfort and safety requirement. We specialize in winter block heater installations, high-output heater core flushes for freezing Alberta winters, and environmentally safe R134a/R1234yf air conditioning recharges for hot summer days.",
    basePrice: 119,
    timeEstimate: "1 - 1.5 Hours",
    features: [
      "Heater core back-flush for maximum heat output",
      "A/C refrigerant recovery, vacuum leak test & recharge",
      "Cabin air filter inspection & replacement",
      "Block heater testing & coolant frost plug installation"
    ],
    iconName: "Thermometer"
  },
  {
    id: "drivetrain",
    title: "Precision Engine & Transmission Repair",
    shortDescription: "From timing belt replacements and oil leak seals to complete engine and drivetrain repairs.",
    longDescription: "Our senior technicians are Red Seal certified and have decades of combined experience in complex engine and transmission repairs. Whether you have an active oil leak, a worn timing belt, a slipping clutch, or require major drivetrain rebuilds, we deliver dealer-grade craftsmanship at independent prices.",
    basePrice: 249,
    timeEstimate: "Varies by Vehicle",
    features: [
      "Timing belt and chain precision replacement",
      "Engine oil leak and valve cover gasket sealing",
      "Transmission fluid and filter preventative service",
      "Axle shaft, CV joint, and differential repairs"
    ],
    iconName: "Settings"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Sarah Jenkins",
    vehicle: "2019 Toyota RAV4 AWD",
    rating: 5,
    text: "Saved my heating system right before a -30°C Calgary cold snap! Other places wanted to replace the entire heater core, but these guys did a specialized back-flush that solved the issue for a fraction of the cost. Super honest and transparent team.",
    date: "Jan 12, 2026",
    tag: "Heating & Climate"
  },
  {
    id: "t2",
    name: "David Miller",
    vehicle: "2018 Ford F-150 SuperCrew",
    rating: 5,
    text: "Excellent brake and suspension service before a heavy towing trip through the Rocky Mountains. They walked me through the digital inspection report, showing me pictures of my pad wear on my phone. Unbelievable professionalism, highly recommend!",
    date: "Feb 28, 2026",
    tag: "Brakes & Safety"
  },
  {
    id: "t3",
    name: "Marc-Antoine Cloutier",
    vehicle: "2021 Subaru Outback",
    rating: 5,
    text: "Finding an independent mechanic you can trust with modern electrical and AWD systems is tough. Their diagnostics are spot on, and they use dealer-grade tools without the dealership markups. Great communication throughout the process.",
    date: "Mar 15, 2026",
    tag: "Diagnostics"
  },
  {
    id: "t4",
    name: "Elena Rostova",
    vehicle: "2017 Honda Civic Touring",
    rating: 5,
    text: "As someone who doesn't know much about cars, I always worry about being overcharged. They were so respectful, showed me exactly what needed immediate attention, and what could wait. Their 24-month warranty gives me great peace of mind.",
    date: "Apr 03, 2026",
    tag: "Scheduled Maintenance"
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g1",
    title: "Digital ECU Diagnostics",
    category: "Electrical & Computer",
    description: "Real-time engine control unit telemetry showing fuel trims, cylinder performance, and active sensor diagnostics.",
    blueprintType: "ecu"
  },
  {
    id: "g2",
    title: "Brake Tolerance Blueprint",
    category: "Safety & Braking Systems",
    description: "Precision measurements of brake rotor thickness and run-out, confirming absolute compliance with safety standards.",
    blueprintType: "brake"
  },
  {
    id: "g3",
    title: "3D Suspension Geometry",
    category: "Steering & Alignment",
    description: "Visual computer alignment measurements plotting caster, camber, and toe angles for perfect straight-line tracking.",
    blueprintType: "alignment"
  },
  {
    id: "g4",
    title: "Calgary Winter Readiness Scan",
    category: "Preventative Maintenance",
    description: "Comprehensive cold-weather telemetry analyzing engine block heater output, antifreeze concentration, and battery cell health.",
    blueprintType: "winter"
  }
];

export const CALGARY_LOCATION = {
  address: "1234 9th Ave SE, Calgary, AB T2G 0T1",
  neighborhood: "Inglewood / East Calgary Auto District",
  phone: "+1 (403) 555-0190",
  altPhone: "+1 (403) 555-0191",
  email: "service@calgaryautorepair.ca",
  hours: [
    { days: "Monday - Friday", times: "7:30 AM - 5:30 PM" },
    { days: "Saturday", times: "8:00 AM - 1:00 PM" },
    { days: "Sunday & Holidays", times: "Closed" }
  ]
};
