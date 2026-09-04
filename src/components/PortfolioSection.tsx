import React, { useState } from "react";
import { 
  MapPin, 
  Sparkles, 
  ArrowRight, 
  Check, 
  Calendar,
  X
} from "lucide-react";
import { SPACEBOUND_PORTFOLIO_PROJECTS } from "../data";
import { PortfolioProject } from "../types";

interface PortfolioSectionProps {
  onBookConsultation: () => void;
}

export default function PortfolioSection({ onBookConsultation }: PortfolioSectionProps) {
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);

  return (
    <section id="portfolio" className="py-24 bg-[#FAF8F5] text-[#1C1917] border-b border-[#E7E2D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-white border border-[#E7E2D8] px-3.5 py-1.5 rounded-full text-xs font-mono font-medium text-[#B5905C] uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#B5905C]" />
            <span>Selected Portfolio</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1C1917] tracking-tight leading-tight">
            Curated Spaces & <br />
            <span className="italic text-[#B5905C] font-light">Architectural Interiors</span>
          </h2>

          <p className="text-sm sm:text-base text-[#5E574F] font-sans font-light leading-relaxed">
            Explore our curated residential sanctuaries, bespoke cabinetry installations, and commercial environments in Abraham Adesanya, Ajah, and across Lagos.
          </p>
        </div>

        {/* Portfolio Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {SPACEBOUND_PORTFOLIO_PROJECTS.map((project) => (
            <div
              key={project.id}
              id={`portfolio-card-${project.id}`}
              className="bg-white border border-[#E7E2D8] hover:border-[#B5905C] transition-all duration-300 flex flex-col group overflow-hidden shadow-xs hover:shadow-lg text-left cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              {/* Image Showcase */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#EDE7DD]">
                <img
                  src={project.image}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C1917]/70 via-transparent to-transparent"></div>

                <div className="absolute top-4 left-4">
                  <span className="bg-[#FAF8F5]/95 text-[#1C1917] text-[10px] font-mono tracking-widest uppercase px-3 py-1 font-semibold border border-white/60">
                    {project.clientType}
                  </span>
                </div>

                <div className="absolute top-4 right-4 flex items-center space-x-1.5 bg-[#1C1917]/80 text-[#FAF8F5] text-[11px] font-mono px-3 py-1 backdrop-blur-xs">
                  <MapPin className="w-3 h-3 text-[#B5905C]" />
                  <span>{project.location.split(",")[0]}</span>
                </div>

                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-[10px] font-mono tracking-widest uppercase text-[#E4DCD0] font-semibold block">
                    {project.category}
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-white drop-shadow-xs">
                    {project.title}
                  </h3>
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <p className="text-xs sm:text-sm text-[#5E574F] font-sans font-light leading-relaxed">
                  {project.description}
                </p>

                {/* Highlights */}
                <div className="space-y-1.5 pt-2 border-t border-[#EFECE6]">
                  <span className="text-[10px] font-mono tracking-widest uppercase text-[#7D7569] font-semibold block">
                    Execution Highlights:
                  </span>
                  <ul className="space-y-1 text-xs text-[#1C1917]">
                    {project.highlights.map((h, i) => (
                      <li key={i} className="flex items-center space-x-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#B5905C] flex-shrink-0"></span>
                        <span className="truncate">{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Services Pills */}
                <div className="pt-2 flex flex-wrap gap-1.5">
                  {project.servicesIncluded.map((s, i) => (
                    <span
                      key={i}
                      className="text-[10px] font-sans px-2.5 py-1 bg-[#FAF8F5] border border-[#E7E2D8] text-[#5E574F]"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                {/* Bottom Trigger */}
                <div className="pt-4 border-t border-[#EFECE6] flex items-center justify-between text-xs font-semibold uppercase tracking-[0.14em] text-[#1C1917] group-hover:text-[#B5905C] transition-colors">
                  <span>View Project Details</span>
                  <ArrowRight className="w-4 h-4 text-[#B5905C] group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Deep Dive Modal */}
      {selectedProject && (
        <div
          id="project-detail-modal"
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#1C1917]/70 backdrop-blur-xs p-4 animate-in fade-in duration-200"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-[#FAF8F5] border border-[#E7E2D8] max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative text-left"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Image */}
            <div className="relative aspect-[16/9] w-full bg-[#EDE7DD]">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#FAF8F5] via-transparent to-transparent"></div>

              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#1C1917]/80 hover:bg-[#1C1917] text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="absolute bottom-4 left-6 right-6">
                <span className="bg-[#1C1917] text-[#FAF8F5] text-[10px] font-mono tracking-widest uppercase px-2.5 py-1 font-semibold">
                  {selectedProject.category}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1C1917] mt-2">
                  {selectedProject.title}
                </h3>
                <span className="text-xs font-mono text-[#7D7569]">
                  {selectedProject.location}
                </span>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-[#7D7569] mb-2">
                  Project Narrative
                </h4>
                <p className="text-sm text-[#4A453E] font-sans font-light leading-relaxed">
                  {selectedProject.description}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-[#7D7569] mb-2">
                  Services Delivered
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.servicesIncluded.map((serv, i) => (
                    <span key={i} className="px-3 py-1 bg-white border border-[#E7E2D8] text-xs font-medium text-[#1C1917]">
                      {serv}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-[#7D7569] mb-2">
                  Key Design Features
                </h4>
                <div className="space-y-2 text-xs text-[#4A453E]">
                  {selectedProject.highlights.map((h, i) => (
                    <div key={i} className="flex items-start space-x-2 bg-white p-2.5 border border-[#E7E2D8]">
                      <Check className="w-4 h-4 text-[#B5905C] flex-shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-[#EFECE6] flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => {
                    setSelectedProject(null);
                    onBookConsultation();
                  }}
                  className="w-full bg-[#1C1917] hover:bg-[#2B2723] text-[#FAF8F5] py-3.5 px-4 text-xs font-semibold tracking-[0.14em] uppercase border border-[#1C1917] hover:border-[#B5905C] transition-all cursor-pointer text-center flex items-center justify-center space-x-2"
                >
                  <Calendar className="w-3.5 h-3.5 text-[#B5905C]" />
                  <span>Consult on a Similar Project</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
