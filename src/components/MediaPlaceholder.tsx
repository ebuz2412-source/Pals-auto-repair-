import React from "react";
import { Image, FileVideo, Truck } from "lucide-react";
import heroForkliftImg from "../assets/images/hero_forklift_tunnex_1787165325067.jpg";

interface MediaPlaceholderProps {
  sectionName: string;
  expectedFile: string;
  description: string;
  type?: "image" | "video";
  aspectRatio?: string;
}

export default function MediaPlaceholder({
  sectionName,
  expectedFile,
  description,
  type = "image",
  aspectRatio = "aspect-video"
}: MediaPlaceholderProps) {
  return (
    <div className={`relative w-full ${aspectRatio} rounded-xl overflow-hidden shadow-lg border border-zinc-800 bg-zinc-950`}>
      <img
        src={heroForkliftImg}
        alt={sectionName}
        referrerPolicy="no-referrer"
        className="w-full h-full object-cover opacity-60"
      />
      
      {/* Visual content overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/50 to-transparent flex flex-col justify-end p-5 text-left">
        <div className="space-y-1.5 max-w-md">
          {/* Badge */}
          <div className="inline-flex items-center space-x-1 bg-amber-950/60 border border-amber-900/40 px-2 py-0.5 rounded text-[9px] font-mono font-semibold text-amber-400 uppercase tracking-wider">
            {type === "video" ? (
              <FileVideo className="w-2.5 h-2.5 mr-1 text-amber-500" />
            ) : (
              <Truck className="w-2.5 h-2.5 mr-1 text-amber-400" />
            )}
            <span>Forklift Equipment Visual</span>
          </div>

          {/* Section title */}
          <h4 className="text-xs font-bold font-mono text-zinc-100 uppercase tracking-wider">
            {sectionName}
          </h4>

          {/* Equipment description */}
          <p className="text-[11px] text-zinc-300 leading-normal font-sans">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
