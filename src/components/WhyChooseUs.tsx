import React from "react";
import { Award, ShieldCheck, Eye, Snowflake, Battery, Milestone } from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    {
      id: "f1",
      icon: Award,
      title: "Licensed Professional Technicians",
      description: "Our mechanics hold high professional standards. We possess continuous diagnostic training on European, Japanese, and Domestic drivetrains."
    },
    {
      id: "f2",
      icon: ShieldCheck,
      title: "24-Month / 40,000 km Warranty",
      description: "Every replacement part and hour of labor is backed by our worry-free warranty. We stand by the long-term durability of our work."
    },
    {
      id: "f3",
      icon: Eye,
      title: "100% Transparent Digital Inspections",
      description: "No mystery recommendations. We text clear high-definition photographs and diagnostic codes straight to your smartphone, showing you exactly what we see."
    },
    {
      id: "f4",
      icon: Snowflake,
      title: "Vehicle Climate & Maintenance Specialists",
      description: "From coolant temperature testing and heavy-duty battery checks to climate control services and tyre setups, we keep your vehicle running smoothly."
    },
    {
      id: "f5",
      icon: Battery,
      title: "Dealership Technology, Half the Cost",
      description: "We utilize OEM-spec OBD2 software scanning consoles and physical testing platforms identical to elite dealerships, without charging dealer markup premiums."
    },
    {
      id: "f6",
      icon: Milestone,
      title: "Proudly Local & Independent",
      description: "We are an active part of the Zimbabwe community. We operate on honesty, transparency, and building lifelong relationships with vehicle owners."
    }
  ];

  return (
    <section id="why-choose-us" className="py-24 bg-zinc-50 text-zinc-900 border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl space-y-4">
            <span className="text-xs font-mono font-bold text-red-600 uppercase tracking-widest bg-red-50 border border-red-100 px-3 py-1 rounded-full">
              Trust & Quality Assurance
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-sans tracking-tight text-zinc-950">
              Zimbabwe's Most Reliable Dealership Alternative
            </h2>
            <p className="text-sm sm:text-base text-zinc-600 font-sans leading-relaxed">
              We understand that vehicle maintenance can be stressful. That's why we've re-engineered our business around complete transparency, technical excellence, and quick turnaround times.
            </p>
          </div>
          <div className="flex-shrink-0 bg-zinc-900 text-white rounded-xl p-5 border border-zinc-800 shadow-md flex items-center space-x-4 max-w-sm">
            <span className="text-4xl font-extrabold font-mono text-red-500">4.9★</span>
            <div className="text-xs font-sans">
              <span className="block font-bold">CERTIFIED SERVICE</span>
              <span className="text-zinc-400">Top-rated diagnostic and repair standards in Zimbabwe.</span>
            </div>
          </div>
        </div>

        {/* Features Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item) => (
            <div
              key={item.id}
              id={`why-card-${item.id}`}
              className="bg-white rounded-xl border border-zinc-200/80 p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Icon Wrapper */}
                <div className="w-10 h-10 bg-red-50 text-red-600 rounded-lg flex items-center justify-center">
                  <item.icon className="w-5 h-5" />
                </div>
                {/* Title */}
                <h3 className="text-lg font-bold font-sans text-zinc-950">
                  {item.title}
                </h3>
                {/* Description */}
                <p className="text-sm text-zinc-600 font-sans leading-relaxed">
                  {item.description}
                </p>
              </div>
              <div className="pt-6 mt-4 border-t border-zinc-100 text-right">
                <span className="text-[10px] font-mono font-bold text-red-500 uppercase tracking-widest">
                  Certified Technician
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Vehicle Health Banner */}
        <div className="mt-16 bg-zinc-900 rounded-2xl p-8 text-white border border-zinc-800 shadow-xl relative overflow-hidden">
          {/* Radial glow background */}
          <div className="absolute -top-1/2 -left-1/4 w-[350px] h-[350px] bg-red-900/20 rounded-full filter blur-[80px] pointer-events-none"></div>
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center space-x-2 bg-red-900/40 border border-red-500/30 px-3 py-1 rounded-full">
                <Snowflake className="w-4 h-4 text-red-400 animate-spin" style={{ animationDuration: '6s' }} />
                <span className="text-xs font-mono text-red-300 font-semibold uppercase tracking-wider">Vehicle Care Advisory</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold font-sans tracking-tight">
                Is your vehicle road-ready?
              </h3>
              <p className="text-sm text-zinc-300 font-sans leading-relaxed">
                Temperature changes, dust, and heavy road wear can degrade battery voltage, wear down suspension, and impact engine fluid health. Don't get stranded on the road. Speak to our mechanics about a customized Vehicle Inspection package today.
              </p>
            </div>
            <div className="lg:col-span-4 flex justify-start lg:justify-end">
              <a
                id="winter-cta-phone"
                href="tel:+263782831734"
                className="inline-flex items-center space-x-3 bg-red-600 hover:bg-red-700 text-white font-bold font-sans text-sm px-6 py-4 rounded-lg shadow-lg shadow-red-950/40 transition-colors duration-200"
              >
                <span>Call for Vehicle Checkup</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
