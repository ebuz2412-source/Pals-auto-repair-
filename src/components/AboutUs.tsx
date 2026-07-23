import React from "react";
import { Shield, Award, Users, CheckCircle } from "lucide-react";
import MediaLoader from "./MediaLoader";

export default function AboutUs() {
  return (
    <section id="about" className="py-24 bg-white text-zinc-900 border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Story & Narrative */}
          <div className="lg:col-span-7 space-y-8 text-left">
            <div className="space-y-4">
              <span className="text-xs font-mono font-bold text-red-600 uppercase tracking-widest bg-red-50 border border-red-100 px-3 py-1 rounded-full">
                Our Story & Standards
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-sans tracking-tight text-zinc-950 leading-tight">
                Engineering Trust in Frosty's Vehicle Repair Shop
              </h2>
              <p className="text-sm sm:text-base text-zinc-600 font-sans leading-relaxed">
                Founded as an independent garage, our shop was born out of a simple observation: vehicle owners in Zimbabwe deserved dealership-level expertise without the bloated dealership prices, pushy sales tactics, and lack of transparency.
              </p>
              <p className="text-sm sm:text-base text-zinc-600 font-sans leading-relaxed">
                Today, our state-of-the-art facility features 6 fully active repair bays outfitted with computerized 3D laser alignment consoles, direct-link OBD2 scanner channels, and specialty fluid flushing lines. We remain fully independent, family-owned, and operated.
              </p>
            </div>

            {/* Core Values Bullets */}
            <div className="space-y-4 pt-2">
              <h4 className="text-xs font-mono font-bold text-red-500 uppercase tracking-wider">
                The Pillars of our Service:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-bold text-sm text-zinc-950 font-sans">No Authorized Surprise Costs</span>
                    <span className="text-xs text-zinc-500 font-sans">We write explicit, binding digital estimates before any work begins. Period.</span>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-bold text-sm text-zinc-950 font-sans">Red Seal Certified Crews Only</span>
                    <span className="text-xs text-zinc-500 font-sans">Every wrench turned and diagnostic code read is supervised by fully licensed journeymen.</span>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-bold text-sm text-zinc-950 font-sans">High-Grade Specialty Parts</span>
                    <span className="text-xs text-zinc-500 font-sans">We strictly source premium ceramic pad composites, OEM-spec filters, and synthetic fluids.</span>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-bold text-sm text-zinc-950 font-sans">Community & Road Safety</span>
                    <span className="text-xs text-zinc-500 font-sans">We are dedicated to preparing cars for long road trips, harsh terrains, and safe everyday driving in Zimbabwe.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Mechanical Visual Frame + Real Shop Photo */}
          <div className="lg:col-span-5 relative w-full flex flex-col items-center space-y-6">
            {/* Real Shop Photo Visual Media */}
            <div className="w-full max-w-md overflow-hidden rounded-2xl border border-zinc-200 shadow-xl bg-zinc-50">
              <MediaLoader
                src="/input_file_3.png"
                alt="Frosty's Vehicle Repair Shop Professional Workshop Bay"
                sectionName="About Us: Our Repair Bays"
                expectedFile="input_file_3.png"
                description="Our fully equipped auto repair workshop in Zimbabwe, featuring heavy-duty diagnostic hydraulic lifts."
                aspectRatio="aspect-[4/3]"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="w-full max-w-md bg-zinc-950 text-white rounded-2xl p-6 sm:p-8 shadow-2xl relative border border-zinc-800">
              {/* Corner Grid */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#334155_1px,transparent_1px),linear-gradient(to_bottom,#334155_1px,transparent_1px)] bg-[size:20px_20px] opacity-5 rounded-2xl"></div>

              <div className="relative z-10 space-y-6">
                <div className="border-b border-zinc-800 pb-4 flex justify-between items-center">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-red-500">Shop Diagnostics Frame</span>
                  <span className="text-[9px] font-mono text-zinc-500">EST_VER_3.0</span>
                </div>

                <div className="space-y-4">
                  <div className="bg-zinc-900 border border-zinc-800 p-4 rounded-xl flex items-center space-x-4">
                    <div className="p-3 bg-red-950/50 text-red-500 rounded border border-red-500/20">
                      <Users className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="block text-xl font-extrabold font-mono text-white leading-none">25+ Years</span>
                      <span className="text-xs font-mono text-zinc-400 mt-1 block">Combined Service Experience</span>
                    </div>
                  </div>

                  <div className="bg-zinc-900 border border-zinc-800 p-4 rounded-xl flex items-center space-x-4">
                    <div className="p-3 bg-red-950/50 text-red-500 rounded border border-red-500/20">
                      <Award className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="block text-xl font-extrabold font-mono text-white leading-none">Red Seal Journeymen</span>
                      <span className="text-xs font-mono text-zinc-400 mt-1 block">Nationwide Accredited Technicians</span>
                    </div>
                  </div>

                  <div className="bg-zinc-900 border border-zinc-800 p-4 rounded-xl flex items-center space-x-4">
                    <div className="p-3 bg-red-950/50 text-red-500 rounded border border-red-500/20">
                      <Shield className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="block text-xl font-extrabold font-mono text-white leading-none">24-Month / 40K km</span>
                      <span className="text-xs font-mono text-zinc-400 mt-1 block">Parts & Labour Repair Warranty</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-zinc-800 text-center text-[10px] font-mono text-zinc-500 leading-normal">
                  <p>Registered Auto Repair Center in Zimbabwe</p>
                  <p className="mt-1">Licensed Mechanic & Inspection Facility</p>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
