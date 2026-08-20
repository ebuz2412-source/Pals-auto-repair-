import React, { useState, useEffect } from "react";
import MediaPlaceholder from "./MediaPlaceholder";

// Forklift Assets
import heroMachineryImg from "../assets/images/pethona_hero_1787249582581.jpg";
import heroForkliftImg from "../assets/images/hero_forklift_tunnex_1787165325067.jpg";
import electricForkliftImg from "../assets/images/electric_forklift_1787165336816.jpg";
import dieselForkliftImg from "../assets/images/diesel_forklift_1787165348263.jpg";
import lpgGasForkliftImg from "../assets/images/lpg_gas_forklift_1787165359127.jpg";
import warehouseReachTruckImg from "../assets/images/warehouse_reach_truck_1787165373779.jpg";
import heavydutyForkliftImg from "../assets/images/heavyduty_forklift_1787165386207.jpg";

// Heavy Equipment & Machinery Assets
import heavyExcavatorImg from "../assets/images/heavy_excavator_1787249520629.jpg";
import heavyBulldozerImg from "../assets/images/heavy_bulldozer_1787249533527.jpg";
import wheelLoaderImg from "../assets/images/wheel_loader_1787249555740.jpg";
import backhoeLoaderImg from "../assets/images/backhoe_loader_1787249568713.jpg";
import yardImg from "../assets/images/tunnex_forklift_yard_1787165397537.jpg";

// Verified professional equipment dealership assets dictionary
export const EQUIPMENT_IMAGES: Record<string, string> = {
  hero: heroMachineryImg,
  hero_forklift: heroForkliftImg,
  excavator: heavyExcavatorImg,
  bulldozer: heavyBulldozerImg,
  wheel_loader: wheelLoaderImg,
  backhoe_loader: backhoeLoaderImg,
  electric: electricForkliftImg,
  diesel: dieselForkliftImg,
  lpg: lpgGasForkliftImg,
  warehouse: warehouseReachTruckImg,
  heavyduty: heavydutyForkliftImg,
  yard: yardImg,
  "input_file_0.png": heavyExcavatorImg,
  "input_file_1.png": heavyBulldozerImg,
  "input_file_2.png": wheelLoaderImg,
  "input_file_3.png": backhoeLoaderImg,
  "input_file_4.png": dieselForkliftImg,
  "input_file_5.png": yardImg,
};

export const FORKLIFT_IMAGES = EQUIPMENT_IMAGES;

const DEFAULT_FALLBACK = heroMachineryImg;

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
  fallbackUrl?: string;
}

function getCandidateUrls(src: string, expectedFile: string, fallbackUrl?: string, type?: "image" | "video"): string[] {
  const list: string[] = [];

  // 1. First, check direct match in our equipment registry
  const cleanFile = expectedFile ? expectedFile.trim() : "";
  if (cleanFile && EQUIPMENT_IMAGES[cleanFile]) {
    list.push(EQUIPMENT_IMAGES[cleanFile]);
  }
  const cleanSrc = src ? src.replace(/^\//, "").trim() : "";
  if (cleanSrc && EQUIPMENT_IMAGES[cleanSrc]) {
    list.push(EQUIPMENT_IMAGES[cleanSrc]);
  }

  // 2. Direct src if provided
  if (src && !src.startsWith("input_file_")) {
    list.push(src);
  }

  // 3. Custom fallback URL override
  if (fallbackUrl) {
    list.push(fallbackUrl);
  }

  list.push(DEFAULT_FALLBACK);

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
    <div className={`relative ${aspectRatio} w-full overflow-hidden rounded-xl bg-zinc-950`}>
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

      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-zinc-900 flex items-center justify-center">
          <div className="w-6 h-6 border-2 border-amber-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
    </div>
  );
}
