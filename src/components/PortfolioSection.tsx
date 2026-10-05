import React, { useState } from "react";
import { 
  MapPin, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Layers, 
  Maximize2, 
  MessageSquare,
  ShieldCheck
} from "lucide-react";
import { GLASS_PROJECTS, BUSINESS_INFO } from "../data";

interface PortfolioSectionProps {
  onRequestQuote: () => void;
}

export default function PortfolioSection({ onRequestQuote }: PortfolioSectionProps) {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const filters = ["All", "Residential", "Commercial", "Architectural"];

  const filteredProjects = activeFilter === "All"
    ? GLASS_PROJECTS
    : GLASS_PROJECTS.filter(p => p.type === activeFilter);

  return (
    <section id="projects" className="py-20 lg:py-28 bg-[#0E131F] border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-widest text-sky-400">
              <Sparkles className="w-3.5 h-3.5" />
              <span>FABRICATION & INSTALLATION SHOWCASE</span>
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              Selected Glass & Mirror Installations
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Explore our glass installations across residential residences, corporate offices, and modern developments in Lagos.
            </p>
          </div>

          {/* Filters */}
          <div className="flex items-center space-x-2 bg-slate-900/90 p-1.5 rounded-xl border border-white/10 self-start md:self-end">
            {filters.map((filter) => (
              <button
                key={filter}
                id={`project-filter-${filter.toLowerCase()}`}
                onClick={() => setActiveFilter(filter)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                  activeFilter === filter
                    ? "bg-sky-500 text-white shadow-sm font-semibold"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              id={`project-card-${project.id}`}
              className="glass-panel rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col group"
            >
              {/* Image Container */}
              <div className="relative aspect-[16/11] overflow-hidden bg-slate-950">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent"></div>

                <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/10 text-[10px] font-semibold text-slate-300 uppercase tracking-wider">
                  {project.type}
                </div>

                <div className="absolute bottom-3 left-3 flex items-center space-x-1.5 text-xs font-medium text-sky-300 bg-slate-950/80 px-2.5 py-1 rounded-md border border-white/10 backdrop-blur-md">
                  <MapPin className="w-3.5 h-3.5 text-sky-400" />
                  <span>{project.location}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400 block">
                    {project.category}
                  </span>
                  <h3 className="font-heading text-lg font-bold text-white group-hover:text-sky-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Materials Used Tag List */}
                <div className="space-y-1.5 pt-2 border-t border-white/10">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block">
                    Materials & Specifications:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {project.materialsUsed.map((mat, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] px-2 py-0.5 rounded bg-white/5 border border-white/10 text-slate-300"
                      >
                        {mat}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Highlights */}
                <div className="space-y-1 pt-1">
                  {project.keyHighlights.map((hl, idx) => (
                    <div key={idx} className="flex items-center space-x-1.5 text-xs text-slate-400">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>

                {/* Card Action Footer */}
                <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                  <a
                    id={`project-whatsapp-btn-${project.id}`}
                    href={`https://wa.me/2349014120207?text=Hello%20OLANREWAJU%20GLAZIER%2C%20I%20saw%20your%20project%20%22${encodeURIComponent(project.title)}%22%20in%20${encodeURIComponent(project.location)}%20and%20want%20something%20similar.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1.5 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Inquire About Similar</span>
                  </a>

                  <button
                    id={`project-quote-btn-${project.id}`}
                    onClick={onRequestQuote}
                    className="text-xs font-semibold text-sky-400 hover:text-sky-300 flex items-center space-x-1 cursor-pointer"
                  >
                    <span>Get Estimate</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
