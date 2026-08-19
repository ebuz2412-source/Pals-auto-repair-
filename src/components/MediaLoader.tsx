import React, { useState, useEffect } from "react";
import MediaPlaceholder from "./MediaPlaceholder";
import heroForkliftImg from "../assets/images/hero_forklift_tunnex_1787165325067.jpg";
import electricForkliftImg from "../assets/images/electric_forklift_1787165336816.jpg";
import dieselForkliftImg from "../assets/images/diesel_forklift_1787165348263.jpg";
import lpgGasForkliftImg from "../assets/images/lpg_gas_forklift_1787165359127.jpg";
import warehouseReachTruckImg from "../assets/images/warehouse_reach_truck_1787165373779.jpg";
import heavydutyForkliftImg from "../assets/images/heavyduty_forklift_1787165386207.jpg";
import tunnexYardImg from "../assets/images/tunnex_forklift_yard_1787165397537.jpg";

// Verified professional forklift dealer equipment assets
export const FORKLIFT_IMAGES: Record<string, string> = {
  hero: heroForkliftImg,
  electric: electricForkliftImg,
  diesel: dieselForkliftImg,
  lpg: lpgGasForkliftImg,
  warehouse: warehouseReachTruckImg,
  heavyduty: heavydutyForkliftImg,
  yard: tunnexYardImg,
  "input_file_0.png": electricForkliftImg,
  "input_file_1.png": dieselForkliftImg,
  "input_file_2.png": lpgGasForkliftImg,
  "input_file_3.png": warehouseReachTruckImg,
  "input_file_4.png": heavydutyForkliftImg,
  "input_file_5.png": tunnexYardImg,
};

const DEFAULT_FALLBACK = heroForkliftImg;

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

  // 3. Try the forklift imported assets
  const cleanFile = expectedFile ? expectedFile.trim() : "";
  if (cleanFile && FORKLIFT_IMAGES[cleanFile]) {
    list.push(FORKLIFT_IMAGES[cleanFile]);
  }
  const cleanSrc = src ? src.replace(/^\//, "").trim() : "";
  if (cleanSrc && FORKLIFT_IMAGES[cleanSrc]) {
    list.push(FORKLIFT_IMAGES[cleanSrc]);
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
