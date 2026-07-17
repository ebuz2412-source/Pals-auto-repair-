import React from "react";
import { Image, FileVideo } from "lucide-react";

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
  // A beautiful, automatic high-quality auto repair workshop image
  const DEFAULT_FALLBACK = "https://images.unsplash.com/photo-1617886322168-72b886573c3c?auto=format&fit=crop&q=80&w=1200";

  return (
    <div className={`relative w-full ${aspectRatio} rounded-xl overflow-hidden shadow-lg border border-zinc-800 bg-zinc-950`}>
      {/* Background auto shop fallback image */}
      <img
        src={DEFAULT_FALLBACK}
        alt={sectionName}
        referrerPolicy="no-referrer"
        className="w-full h-full object-cover opacity-60"
      />
      
      {/* Visual content overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/50 to-transparent flex flex-col justify-end p-5 text-left">
        <div className="space-y-1.5 max-w-md">
          {/* Badge */}
          <div className="inline-flex items-center space-x-1 bg-red-950/60 border border-red-900/40 px-2 py-0.5 rounded text-[9px] font-mono font-semibold text-red-400 uppercase tracking-wider">
            {type === "video" ? (
              <FileVideo className="w-2.5 h-2.5 mr-1 text-red-500" />
            ) : (
              <Image className="w-2.5 h-2.5 mr-1 text-red-400" />
            )}
            <span>Auto Service Visual</span>
          </div>

          {/* Section title */}
          <h4 className="text-xs font-bold font-mono text-zinc-100 uppercase tracking-wider">
            {sectionName}
          </h4>

          {/* Service description */}
          <p className="text-[11px] text-zinc-300 leading-normal font-sans">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
