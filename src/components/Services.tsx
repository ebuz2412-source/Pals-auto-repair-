import React, { useState } from "react";
import { Cpu, ShieldCheck, Wrench, Compass, Thermometer, Settings, ChevronRight, CheckCircle2 } from "lucide-react";
import { SERVICES } from "../data";
import { Service } from "../types";
import MediaLoader from "./MediaLoader";

// Icon mapper helper
const IconMap: Record<string, React.ComponentType<any>> = {
  Cpu,
  ShieldCheck,
  Wrench,
  Compass,
  Thermometer,
  Settings
};

interface ServicesProps {
  onQuoteClickWithService: (serviceName: string) => void;
}

export default function Services({ onQuoteClickWithService }: ServicesProps) {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  return (
    <section id="services" className="py-24 bg-white text-zinc-900 border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-red-50 text-red-700 px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider">
            Dealership Alternatives
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-sans tracking-tight text-zinc-950">
            Professional Independent Automotive Services
          </h2>
          <p className="text-base sm:text-lg text-zinc-600 font-sans leading-relaxed">
            Your trusted alternative to expensive dealership service bays in Zimbabwe. We service all makes and models using high-grade tools and parts, with zero compromise on quality or safety.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => {
            const IconComponent = IconMap[service.iconName] || Wrench;
            return (
              <div
                key={service.id}
                id={`service-card-${service.id}`}
                className="group relative bg-zinc-50 hover:bg-zinc-900 border border-zinc-200 hover:border-zinc-800 rounded-xl p-6 transition-all duration-300 shadow-sm hover:shadow-2xl flex flex-col justify-between"
              >
                <div>
                  {/* Top: Icon + Pricing Badge */}
                  <div className="flex justify-between items-start mb-6">
                    <div className="p-3 bg-red-100 text-red-600 rounded-lg group-hover:bg-red-600 group-hover:text-white transition-colors duration-300">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono font-bold text-zinc-500 bg-white border border-zinc-200 group-hover:bg-zinc-800 group-hover:text-zinc-300 group-hover:border-zinc-700 px-2.5 py-1 rounded-full">
                      Call for a Quote
                    </span>
                  </div>

                  {/* Service Visual Media Card Image */}
                  <div className="mb-6 overflow-hidden rounded-lg">
                    <MediaLoader
                      src={
                        service.id === "diagnostics" ? "/input_file_0.png" :
                        service.id === "maintenance" ? "/input_file_1.png" :
                        service.id === "brakes" ? "/input_file_2.png" :
                        service.id === "suspension" ? "/input_file_3.png" :
                        service.id === "drivetrain" ? "/input_file_4.png" :
                        "/input_file_5.png"
                      }
                      alt={service.title}
                      sectionName={`Service: ${service.title}`}
                      expectedFile={
                        service.id === "diagnostics" ? "input_file_0.png" :
                        service.id === "maintenance" ? "input_file_1.png" :
                        service.id === "brakes" ? "input_file_2.png" :
                        service.id === "suspension" ? "input_file_3.png" :
                        service.id === "drivetrain" ? "input_file_4.png" :
                        "input_file_5.png"
                      }
                      fallbackUrl={
                        service.id === "diagnostics" ? "https://images.unsplash.com/photo-1507136566006-cfc505b114fc?auto=format&fit=crop&q=80&w=800" :
                        service.id === "maintenance" ? "https://images.unsplash.com/photo-1551524559-8af4e6624178?auto=format&fit=crop&q=80&w=800" :
                        service.id === "brakes" ? "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&q=80&w=800" :
                        service.id === "suspension" ? "https://images.unsplash.com/photo-1625047509128-8d0ddb7e6a6d?auto=format&fit=crop&q=80&w=800" :
                        service.id === "drivetrain" ? "https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&q=80&w=800" :
                        "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=80&w=800"
                      }
                      description={
                        service.id === "diagnostics" ? "Real OBD2 diagnostic tablet interface showing active vehicle telemetry and engine fault codes." :
                        service.id === "maintenance" ? "Certified mechanics performing an inspection and synthetic fluid service underneath a vehicle on a hoist." :
                        service.id === "brakes" ? "Technician performing a brake safety inspection, servicing a brake rotor and caliper assembly." :
                        service.id === "suspension" ? "3D computerized wheel alignment computer and mechanic servicing vehicle suspension control arms." :
                        service.id === "drivetrain" ? "Certified Red Seal mechanic working directly on the cylinder head and block of a car engine." :
                        "Technician servicing car air conditioning vents and high-efficiency cabin air filters under the dashboard."
                      }
                      aspectRatio="aspect-[16/10]"
                      className="w-full h-44 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300 border border-zinc-200/60 group-hover:border-zinc-800"
                    />
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold font-sans text-zinc-950 group-hover:text-white mb-3 transition-colors duration-200">
                    {service.title}
                  </h3>
                  <p className="text-sm text-zinc-600 group-hover:text-zinc-400 font-sans leading-relaxed mb-6 transition-colors duration-200">
                    {service.shortDescription}
                  </p>

                  {/* Highlights Bullet List */}
                  <ul className="space-y-2 mb-8">
                    {service.features.slice(0, 3).map((feat, idx) => (
                      <li key={idx} className="flex items-center text-xs text-zinc-600 group-hover:text-zinc-400 font-sans font-medium transition-colors duration-200">
                        <CheckCircle2 className="w-3.5 h-3.5 text-red-500 mr-2 flex-shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Action footer */}
                <div className="flex items-center justify-between pt-4 border-t border-zinc-200/60 group-hover:border-zinc-800/80 transition-colors duration-200">
                  <span className="text-xs font-mono text-zinc-400">
                    EST_TIME: {service.timeEstimate}
                  </span>
                  <div className="flex space-x-2">
                    <button
                      id={`btn-service-details-${service.id}`}
                      onClick={() => setSelectedService(service)}
                      className="text-xs font-semibold text-zinc-700 group-hover:text-zinc-300 hover:underline px-2.5 py-1.5"
                    >
                      More Info
                    </button>
                    <button
                      id={`btn-service-book-${service.id}`}
                      onClick={() => onQuoteClickWithService(service.title)}
                      className="bg-zinc-900 group-hover:bg-red-600 text-white font-mono text-xs font-bold px-3 py-1.5 rounded flex items-center transition-all duration-200"
                    >
                      <span>Book</span>
                      <ChevronRight className="w-3.5 h-3.5 ml-1" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Detailed Service Dialog Modal */}
        {selectedService && (
          <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 bg-zinc-950/80 backdrop-blur-sm animate-in fade-in duration-200">
            <div
              id="service-details-modal"
              className="bg-white rounded-xl shadow-2xl max-w-2xl w-full border border-zinc-200 overflow-hidden text-zinc-900 animate-in zoom-in-95 duration-200"
            >
              {/* Modal Banner */}
              <div className="bg-zinc-950 p-6 flex justify-between items-center text-white">
                <div className="flex items-center space-x-3">
                  <span className="p-2 bg-red-600 rounded">
                    {React.createElement(IconMap[selectedService.iconName] || Wrench, { className: "w-5 h-5 text-white" })}
                  </span>
                  <div>
                    <h4 className="font-bold text-lg font-sans tracking-tight">{selectedService.title}</h4>
                    <p className="text-xs font-mono text-zinc-400">EST_TIME: {selectedService.timeEstimate}</p>
                  </div>
                </div>
                <button
                  id="close-service-modal-btn"
                  onClick={() => setSelectedService(null)}
                  className="p-1.5 rounded-full hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors duration-200 font-mono text-sm font-bold"
                >
                  ✕
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6 sm:p-8 space-y-6">
                {/* Modal Visual Media */}
                <div className="overflow-hidden rounded-xl border border-zinc-200 bg-zinc-50">
                  <MediaLoader
                    src={
                      selectedService.id === "diagnostics" ? "/input_file_0.png" :
                      selectedService.id === "maintenance" ? "/input_file_1.png" :
                      selectedService.id === "brakes" ? "/input_file_2.png" :
                      selectedService.id === "suspension" ? "/input_file_3.png" :
                      selectedService.id === "drivetrain" ? "/input_file_4.png" :
                      "/input_file_5.png"
                    }
                    alt={selectedService.title}
                    sectionName={`Service Detail: ${selectedService.title}`}
                    expectedFile={
                      selectedService.id === "diagnostics" ? "input_file_0.png" :
                      selectedService.id === "maintenance" ? "input_file_1.png" :
                      selectedService.id === "brakes" ? "input_file_2.png" :
                      selectedService.id === "suspension" ? "input_file_3.png" :
                      selectedService.id === "drivetrain" ? "input_file_4.png" :
                      "input_file_5.png"
                    }
                    fallbackUrl={
                      selectedService.id === "diagnostics" ? "https://images.unsplash.com/photo-1507136566006-cfc505b114fc?auto=format&fit=crop&q=80&w=1200" :
                      selectedService.id === "maintenance" ? "https://images.unsplash.com/photo-1551524559-8af4e6624178?auto=format&fit=crop&q=80&w=1200" :
                      selectedService.id === "brakes" ? "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&q=80&w=1200" :
                      selectedService.id === "suspension" ? "https://images.unsplash.com/photo-1625047509128-8d0ddb7e6a6d?auto=format&fit=crop&q=80&w=1200" :
                      selectedService.id === "drivetrain" ? "https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&q=80&w=1200" :
                      "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=80&w=1200"
                    }
                    description={
                      selectedService.id === "diagnostics" ? "Real OBD2 diagnostic tablet interface showing active vehicle telemetry and engine fault codes." :
                      selectedService.id === "maintenance" ? "Certified mechanics performing an inspection and synthetic fluid service underneath a vehicle on a hoist." :
                      selectedService.id === "brakes" ? "Technician performing a brake safety inspection, servicing a brake rotor and caliper assembly." :
                      selectedService.id === "suspension" ? "3D computerized wheel alignment computer and mechanic servicing vehicle suspension control arms." :
                      selectedService.id === "drivetrain" ? "Certified Red Seal mechanic working directly on the cylinder head and block of a car engine." :
                      "Technician servicing car air conditioning vents and high-efficiency cabin air filters under the dashboard."
                    }
                    aspectRatio="aspect-video"
                    className="w-full h-64 object-cover"
                  />
                </div>

                <div>
                  <h5 className="text-xs font-mono font-bold text-red-500 uppercase tracking-wider mb-2">Service Overview</h5>
                  <p className="text-zinc-700 text-base font-sans leading-relaxed">
                    {selectedService.longDescription}
                  </p>
                </div>

                <div className="space-y-3">
                  <h5 className="text-xs font-mono font-bold text-red-500 uppercase tracking-wider">What's Included in our Service:</h5>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {selectedService.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start space-x-2 p-2 bg-zinc-50 border border-zinc-100 rounded">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm font-sans font-medium text-zinc-800 leading-snug">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Modal Footer Banner */}
                <div className="flex flex-col sm:flex-row justify-between items-center bg-zinc-50 p-4 rounded-lg border border-zinc-200 gap-4 pt-4">
                  <div className="text-center sm:text-left">
                    <span className="block text-xs font-mono text-zinc-400 uppercase tracking-wider">Pricing</span>
                    <span className="text-xl font-bold font-sans text-zinc-950">Request a Free Estimate</span>
                  </div>
                  <div className="flex space-x-3 w-full sm:w-auto">
                    <button
                      id="modal-service-dismiss-btn"
                      onClick={() => setSelectedService(null)}
                      className="w-1/2 sm:w-auto border border-zinc-300 hover:bg-zinc-100 text-zinc-800 px-4 py-2.5 rounded font-sans text-sm font-semibold transition-colors duration-200"
                    >
                      Close
                    </button>
                    <button
                      id="modal-service-book-btn"
                      onClick={() => {
                        onQuoteClickWithService(selectedService.title);
                        setSelectedService(null);
                      }}
                      className="w-1/2 sm:w-auto bg-red-600 hover:bg-red-700 text-white px-5 py-2.5 rounded font-sans text-sm font-semibold shadow-lg shadow-red-900/10 transition-all duration-200"
                    >
                      Get Quote Now
                    </button>
                  </div>
                </div>
                <p className="text-[10px] font-mono text-zinc-500 text-center">
                  * All services are customized to your specific vehicle year, make, and model. A fully transparent estimate will be supplied prior to any work.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
