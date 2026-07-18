import React, { useState, useEffect } from "react";
import MediaPlaceholder from "./MediaPlaceholder";
import computerDiagnosticsImg from "../assets/images/computer_diagnostics_1784272640453.jpg";
import precisionBrakesImg from "../assets/images/precision_brakes_1784406030021.jpg";
import palAutoRepairImg from "../assets/images/pal_auto_repair_1784319256438.jpg";
import steeringSuspensionImg from "../assets/images/steering_suspension_new_1784408445483.jpg";
import climateControlImg from "../assets/images/climate_control_1784321200000_1784320351752.jpg";
import engineTransmissionRepairImg from "../assets/images/engine_transmission_repair_new_1784407131721.jpg";

// Royalty-free stock images for the professional auto repair context
const FALLBACK_IMAGES: Record<string, string> = {
  "input_file_0.png": computerDiagnosticsImg, // user uploaded engine computer diagnostics
  "input_file_1.png": palAutoRepairImg, // real photo of PAL Auto Repair with mechanics
  "input_file_2.png": precisionBrakesImg, // user's uploaded red Acura on the lift
  "input_file_3.png": steeringSuspensionImg, // user's uploaded steering & suspension system image
  "input_file_4.png": engineTransmissionRepairImg, // user's uploaded engine & transmission repair image
  "input_file_5.png": climateControlImg, // user's uploaded Heating, A/C & Climate Control image
};

const DEFAULT_FALLBACK = "https://images.unsplash.com/photo-1617886322168-72b886573c3c?auto=format&fit=crop&q=80&w=1200";

interface MediaLoaderProps {
  src: string;
  alt: string;
  sectionName: string;
  expectedFile: string;
  description: string;
  className?: string;
  type?: "image" | "video";
  aspectRatio?: string;
  videoMuted?: boolean;
  videoLoop?: boolean;
  videoAutoPlay?: boolean;
  fallbackUrl?: string; // Optional custom fallback override
}

// Automatically resolve placeholders directly to online URLs on render
function getCandidateUrls(src: string, expectedFile: string, fallbackUrl?: string, type?: "image" | "video"): string[] {
  const list: string[] = [];

  // 1. First, try the user's actual uploaded files (the relative paths like /input_file_0.png)
  if (expectedFile && expectedFile.startsWith("input_file_")) {
    const baseName = expectedFile.replace(/\.[^/.]+$/, "");
    if (type === "video") {
      list.push(`/${baseName}.mp4`);
      list.push(`/${baseName}.mov`);
      list.push(`/${baseName}.webm`);
    } else {
      list.push(`/${baseName}.jpg`);
      list.push(`/${baseName}.jpeg`);
      list.push(`/${baseName}.png`);
      list.push(`/${baseName}.webp`);
    }

    // If looking for the maintenance image, also add candidate filenames the user might upload
    if (expectedFile === "input_file_1.png") {
      list.push("/pal_auto_repair.jpg");
      list.push("/pal_auto_repair.jpeg");
      list.push("/pal_auto_repair.png");
      list.push("/pal_auto_repair.webp");
      list.push("/pal_auto.jpg");
      list.push("/pal_auto.png");
      list.push("/maintenance.jpg");
      list.push("/maintenance.png");
    }
  }

  // 2. Direct match for src and its standard extension variations
  if (src) {
    list.push(src);
    if (src.includes("input_file_")) {
      const baseName = src.replace(/^\//, "").replace(/\.[^/.]+$/, "");
      if (type === "video") {
        list.push(`/${baseName}.mp4`);
        list.push(`/${baseName}.mov`);
        list.push(`/${baseName}.webm`);
      } else {
        list.push(`/${baseName}.jpg`);
        list.push(`/${baseName}.jpeg`);
        list.push(`/${baseName}.png`);
        list.push(`/${baseName}.webp`);
      }
    }
  }

  // 3. Try the fallback/imported assets if the upload isn't found
  const cleanFile = expectedFile ? expectedFile.trim() : "";
  if (cleanFile && FALLBACK_IMAGES[cleanFile]) {
    list.push(FALLBACK_IMAGES[cleanFile]);
  }
  const cleanSrc = src ? src.replace(/^\//, "").trim() : "";
  if (cleanSrc && FALLBACK_IMAGES[cleanSrc]) {
    list.push(FALLBACK_IMAGES[cleanSrc]);
  }

  // 4. Custom fallback URL override
  if (fallbackUrl) {
    list.push(fallbackUrl);
  }

  list.push(DEFAULT_FALLBACK);

  // Return unique list
  return Array.from(new Set(list));
}

export default function MediaLoader({
  src,
  alt,
  sectionName,
  expectedFile,
  description,
  className = "w-full h-full object-cover rounded-xl shadow-lg border border-zinc-800",
  type = "image",
  aspectRatio = "aspect-video",
  videoMuted = true,
  videoLoop = true,
  videoAutoPlay = true,
  fallbackUrl
}: MediaLoaderProps) {
  const candidates = getCandidateUrls(src, expectedFile, fallbackUrl, type);
  const [candidateIndex, setCandidateIndex] = useState(0);
  const currentSrc = candidates[candidateIndex];
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // When src or parameters change, rebuild candidate list and reset index
  useEffect(() => {
    setCandidateIndex(0);
    setHasError(false);
    setIsLoaded(false);
  }, [src, expectedFile, fallbackUrl, type]);

  const handleLoadError = () => {
    if (candidateIndex < candidates.length - 1) {
      setCandidateIndex((prev) => prev + 1);
      setIsLoaded(false);
    } else {
      setHasError(true);
    }
  };

  // If there's an error or no src can be resolved, show custom visual card instead of a text warning
  if (hasError || !currentSrc) {
    return (
      <MediaPlaceholder
        sectionName={sectionName}
        expectedFile={expectedFile}
        description={description}
        type={type}
        aspectRatio={aspectRatio}
      />
    );
  }

  return (
    <div className={`relative ${aspectRatio} w-full overflow-hidden rounded-xl`}>
      {type === "video" ? (
        <video
          src={currentSrc}
          className={`${className} ${isLoaded ? "opacity-100" : "opacity-0"} transition-opacity duration-500`}
          muted={videoMuted}
          loop={videoLoop}
          autoPlay={videoAutoPlay}
          playsInline
          onLoadedData={() => setIsLoaded(true)}
          onError={handleLoadError}
        >
          Your browser does not support the video tag.
        </video>
      ) : (
        <img
          src={currentSrc}
          alt={alt}
          referrerPolicy="no-referrer"
          className={`${className} ${isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-95"} transition-all duration-500`}
          onLoad={() => setIsLoaded(true)}
          onError={handleLoadError}
        />
      )}

      {/* Loading overlay state */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-zinc-900 flex items-center justify-center">
          <div className="w-6 h-6 border-2 border-red-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
    </div>
  );
}
