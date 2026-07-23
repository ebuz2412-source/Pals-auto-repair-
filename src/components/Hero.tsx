import React, { useState, useEffect, useRef } from "react";
import { Phone, Calendar, Shield, Award, Users, Star, Video, Upload, RotateCcw, Check, FileVideo, Globe, AlertTriangle } from "lucide-react";
import { CALGARY_LOCATION } from "../data";

// Safe scan for local videos inside workspace upload paths using Vite's glob import
const getLocalWorkspaceVideo = () => {
  try {
    const urls: string[] = [];
    
    // Glob files in standard directories
    const v1 = (import.meta as any).glob('/assets/*.{mp4,webm,mov,ogg}', { eager: true, query: '?url', import: 'default' });
    urls.push(...(Object.values(v1) as string[]));
    
    const v2 = (import.meta as any).glob('/assets/**/*.{mp4,webm,mov,ogg}', { eager: true, query: '?url', import: 'default' });
    urls.push(...(Object.values(v2) as string[]));

    const v3 = (import.meta as any).glob('/src/assets/**/*.{mp4,webm,mov,ogg}', { eager: true, query: '?url', import: 'default' });
    urls.push(...(Object.values(v3) as string[]));

    const v4 = (import.meta as any).glob('/public/*.{mp4,webm,mov,ogg}', { eager: true, query: '?url', import: 'default' });
    urls.push(...(Object.values(v4) as string[]));

    const uniqueUrls = Array.from(new Set(urls.filter(Boolean)));
    return uniqueUrls.length > 0 ? uniqueUrls[0] : null;
  } catch (e) {
    console.error("Error scanning workspace videos:", e);
    return null;
  }
};

interface HeroProps {
  onQuoteClick: () => void;
  onServicesClick: () => void;
}

export default function Hero({ onQuoteClick, onServicesClick }: HeroProps) {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [customVideoUrl, setCustomVideoUrl] = useState<string | null>(() => {
    return localStorage.getItem("calgary_hero_custom_video") || null;
  });
  const [showConfig, setShowConfig] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [urlInput, setUrlInput] = useState("");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [bgHasError, setBgHasError] = useState(false);
  const [heroImgSrc, setHeroImgSrc] = useState("https://images.unsplash.com/photo-1617886322168-72b886573c3c?auto=format&fit=crop&q=80&w=1920");
  
  const handleHeroImgError = () => {
    setBgHasError(true);
  };
  
  const fileInputRef = useRef<HTMLInputElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Scan workspace files for any uploaded videos
  const workspaceVideo = getLocalWorkspaceVideo();

  // Determine final video source - prioritize user uploaded files, falling back to stock video
  const defaultVideos = [
    "/input_file_1.mp4",
    "/input_file_0.mp4",
    "/input_file_1.mov",
    "/input_file_0.mov",
    "/input_file_1.webm",
    "/input_file_0.webm",
    "https://assets.mixkit.co/videos/preview/mixkit-car-on-a-lifting-platform-in-a-mechanic-shop-41718-large.mp4",
    "https://assets.mixkit.co/videos/preview/mixkit-mechanic-working-on-a-car-engine-41716-large.mp4",
    "/hero_video.mp4",
    "/workshop_video.mp4"
  ];

  let videoSrc = defaultVideos[0];
  let videoSourceType = "Uploaded Workspace Video Background";

  if (customVideoUrl) {
    videoSrc = customVideoUrl;
    videoSourceType = customVideoUrl.startsWith("blob:") ? "Custom Video Upload" : "Custom Video Link";
  } else if (workspaceVideo) {
    videoSrc = workspaceVideo;
    videoSourceType = "Workspace Local File";
  }

  // Force autoplay and loop reliably across browsers
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = true;
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.log("Autoplay was prevented by browser security rules.", error);
        });
      }
    }
  }, [videoSrc]);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const files = e.dataTransfer.files;
    if (files && files.length > 0) {
      processVideoFile(files[0]);
    }
  };

  const triggerFileSelect = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      processVideoFile(files[0]);
    }
  };

  const processVideoFile = (file: File) => {
    setErrorMsg(null);
    if (!file.type.startsWith("video/")) {
      setErrorMsg("Please upload a valid video file (e.g. .mp4, .webm).");
      return;
    }
    
    // Revoke previous blob URL if any
    if (customVideoUrl && customVideoUrl.startsWith("blob:")) {
      URL.revokeObjectURL(customVideoUrl);
    }
    
    const url = URL.createObjectURL(file);
    setCustomVideoUrl(url);
    localStorage.setItem("calgary_hero_custom_video", url);
    setVideoLoaded(false);
  };

  const handleUrlApply = () => {
    setErrorMsg(null);
    if (urlInput.trim()) {
      if (customVideoUrl && customVideoUrl.startsWith("blob:")) {
        URL.revokeObjectURL(customVideoUrl);
      }
      setCustomVideoUrl(urlInput.trim());
      localStorage.setItem("calgary_hero_custom_video", urlInput.trim());
      setUrlInput("");
      setVideoLoaded(false);
    } else {
      setErrorMsg("Please enter a valid URL.");
    }
  };

  const handleReset = () => {
    setErrorMsg(null);
    if (customVideoUrl && customVideoUrl.startsWith("blob:")) {
      URL.revokeObjectURL(customVideoUrl);
    }
    setCustomVideoUrl(null);
    localStorage.removeItem("calgary_hero_custom_video");
    setVideoLoaded(false);
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen bg-zinc-950 flex items-center justify-center pt-24 pb-16 overflow-hidden"
    >
      {/* Background Video/Image Layer */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
        {/* Poster Image or Fallback (pointing to uploaded /workshop.png) */}
        {!bgHasError ? (
          <img
            src={heroImgSrc}
            alt="Calgary Workshop Bay"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 z-0 ${
              videoLoaded ? "opacity-0" : "opacity-40"
            }`}
            onError={handleHeroImgError}
          />
        ) : (
          /* Technical Grid Fallback */
          <div className="absolute inset-0 bg-zinc-950 z-0">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#334155_1px,transparent_1px),linear-gradient(to_bottom,#334155_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-20"></div>
          </div>
        )}
        
        {/* Actual Video Element */}
        {!bgHasError && (
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className={`w-full h-full object-cover transition-opacity duration-1000 z-10 ${
              videoLoaded ? "opacity-35" : "opacity-0"
            }`}
            onLoadedData={() => setVideoLoaded(true)}
            key={customVideoUrl || workspaceVideo || "default-sources"}
          >
            {customVideoUrl ? (
              <source src={customVideoUrl} />
            ) : workspaceVideo ? (
              <source src={workspaceVideo} />
            ) : (
              defaultVideos.map((src) => {
                let type = "video/mp4";
                if (src.endsWith(".mov")) type = "video/quicktime";
                else if (src.endsWith(".webm")) type = "video/webm";
                return <source key={src} src={src} type={type} />;
              })
            )}
            Your browser does not support the video tag.
          </video>
        )}

        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/90 via-zinc-950/80 to-zinc-950/95 z-20"></div>
        
        {/* Dynamic Grid Background with Radial Gradients over video */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-25 z-20"></div>

        {/* Abstract Glowing Accent Lights */}
        <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-red-900/10 rounded-full filter blur-[100px] pointer-events-none z-20"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-zinc-800/20 rounded-full filter blur-[120px] pointer-events-none z-20"></div>
      </div>

      {/* Hero content container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-30 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Side: Branding, copy, CTAs */}
        <div className="lg:col-span-7 space-y-8 text-left">
          {/* Tagline / Alert */}
          <div className="inline-flex items-center space-x-2 bg-zinc-900/90 border border-zinc-800 px-3.5 py-1.5 rounded-full shadow-inner">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
            </span>
            <span className="text-xs font-mono tracking-wider text-zinc-300 uppercase">
              Dealership Quality, Independent Prices
            </span>
          </div>

          {/* Heading */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-sans tracking-tight text-white leading-tight">
              Zimbabwe's Premier <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-500 to-red-600">
                Frosty's Vehicle Repair Shop
              </span>
            </h1>
            <p className="text-lg text-zinc-300 max-w-xl font-sans font-normal leading-relaxed">
              Decades of combined dealer-level expertise, certified mechanics, and cutting-edge 3D diagnostic technology. Engineered to keep your vehicle safe, reliable, and performing at its best.
            </p>
          </div>

          {/* Features Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <div className="flex items-center space-x-2 bg-zinc-900/50 border border-zinc-800/80 p-3 rounded-lg">
              <Shield className="w-5 h-5 text-red-500 flex-shrink-0" />
              <div>
                <span className="block text-xs font-semibold text-zinc-400 uppercase font-mono tracking-wider">
                  Warranty
                </span>
                <span className="text-sm font-bold text-white font-sans">
                  2-Yr / 40,000 km
                </span>
              </div>
            </div>
            <div className="flex items-center space-x-2 bg-zinc-900/50 border border-zinc-800/80 p-3 rounded-lg">
              <Award className="w-5 h-5 text-red-500 flex-shrink-0" />
              <div>
                <span className="block text-xs font-semibold text-zinc-400 uppercase font-mono tracking-wider">
                  Certification
                </span>
                <span className="text-sm font-bold text-white font-sans">
                  Licensed Red Seal
                </span>
              </div>
            </div>
            <div className="flex items-center space-x-2 bg-zinc-900/50 border border-zinc-800/80 p-3 rounded-lg col-span-2 sm:col-span-1">
              <Star className="w-5 h-5 text-yellow-500 flex-shrink-0 fill-current" />
              <div>
                <span className="block text-xs font-semibold text-zinc-400 uppercase font-mono tracking-wider">
                  Google Reviews
                </span>
                <span className="text-sm font-bold text-white font-sans">
                  4.9★ (350+ reviews)
                </span>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 pt-2">
            <button
              id="hero-get-quote-btn"
              onClick={onQuoteClick}
              className="bg-red-600 hover:bg-red-700 text-white font-bold font-sans text-base px-8 py-4 rounded shadow-xl shadow-red-950/40 hover:shadow-red-950/60 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 text-center cursor-pointer"
            >
              Get a Free Quote
            </button>
            <a
              id="hero-call-now-btn"
              href={`tel:${CALGARY_LOCATION.phone.replace(/[^0-9+]/g, "")}`}
              className="flex items-center justify-center space-x-3 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 hover:border-zinc-500 text-white font-bold font-sans text-base px-8 py-4 rounded shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <Phone className="w-5 h-5 text-red-500 animate-bounce" />
              <span>Call Now: {CALGARY_LOCATION.phone}</span>
            </a>
          </div>

          {/* Location / Availability notice */}
          <p className="text-xs text-zinc-500 font-mono">
            * Located in <span className="text-zinc-300">{CALGARY_LOCATION.address}</span>. Open 24 hours for all auto repair & mechanic needs.
          </p>
        </div>

        {/* Right Side: High-tech Blueprint Diagnostic Frame (Placeholder for visual aesthetic) */}
        <div className="lg:col-span-5 relative w-full flex justify-center">
          <div className="w-full max-w-md bg-zinc-900/90 border border-zinc-800 rounded-2xl p-6 shadow-2xl relative overflow-hidden backdrop-blur-sm">
            {/* Blueprint Header */}
            <div className="flex justify-between items-center border-b border-zinc-800 pb-4 mb-6">
              <div className="flex items-center space-x-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse"></span>
                <span className="text-xs font-mono font-bold tracking-widest text-zinc-400 uppercase">
                  Active Shop Telemetry
                </span>
              </div>
              <span className="text-[10px] font-mono text-zinc-500 bg-zinc-950 px-2 py-0.5 rounded border border-zinc-800">
                LIVE_EST
              </span>
            </div>

            {/* Simulated Live Diagnostic Readout */}
            <div className="space-y-6">
              <div>
                <div className="flex justify-between text-xs font-mono text-zinc-400 mb-1.5">
                  <span>Shop Bay Availability</span>
                  <span className="text-emerald-400">3 of 6 Bays Active</span>
                </div>
                <div className="w-full h-2 bg-zinc-950 rounded-full overflow-hidden border border-zinc-800">
                  <div className="h-full bg-emerald-500 rounded-full" style={{ width: "50%" }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-mono text-zinc-400 mb-1.5">
                  <span>Current Diagnostics Accuracy</span>
                  <span className="text-red-400">100% Guaranteed</span>
                </div>
                <div className="w-full h-2 bg-zinc-950 rounded-full overflow-hidden border border-zinc-800">
                  <div className="h-full bg-gradient-to-r from-red-500 to-orange-500 rounded-full" style={{ width: "100%" }}></div>
                </div>
              </div>

              {/* Technical Specifications Blueprint Graphics (SVG vector car wireframe) */}
              <div className="bg-zinc-950/90 border border-zinc-800/80 rounded-xl p-4 flex flex-col justify-center items-center h-40 relative">
                {/* Simulated Wireframe Grid */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#334155_1px,transparent_1px),linear-gradient(to_bottom,#334155_1px,transparent_1px)] bg-[size:10px_10px] opacity-10 rounded-xl"></div>
                
                {/* SVG Car Outline (Simple, clean, vector blueprint representation) */}
                <svg className="w-48 h-20 text-red-500/80 relative z-10 transform hover:scale-105 transition-transform duration-300" viewBox="0 0 100 40" fill="none" stroke="currentColor" strokeWidth="0.7">
                  {/* Car Body Chassis */}
                  <path d="M5,25 L10,25 C12,18 20,18 22,25 L58,25 C60,18 68,18 70,25 L90,25 L95,20 L92,15 L78,13 L60,13 L45,8 L18,8 L10,14 L5,18 Z" />
                  {/* Wheels */}
                  <circle cx="16" cy="25" r="5" strokeDasharray="2,2" />
                  <circle cx="16" cy="25" r="2" />
                  <circle cx="64" cy="25" r="5" strokeDasharray="2,2" />
                  <circle cx="64" cy="25" r="2" />
                  {/* Scanning Crosshairs */}
                  <line x1="16" y1="5" x2="16" y2="35" stroke="#ef4444" strokeWidth="0.4" strokeDasharray="3,3" />
                  <line x1="64" y1="5" x2="64" y2="35" stroke="#ef4444" strokeWidth="0.4" strokeDasharray="3,3" />
                  <line x1="2" y1="20" x2="98" y2="20" stroke="#ef4444" strokeWidth="0.4" strokeDasharray="3,3" />
                </svg>

                <div className="absolute bottom-2 text-[9px] font-mono text-zinc-500 flex justify-between w-full px-4">
                  <span>SYS_CHECK: OK</span>
                  <span className="text-red-400">OBD2_CONNECTED</span>
                </div>
              </div>

              {/* Shop metrics count */}
              <div className="grid grid-cols-2 gap-4 text-center font-mono pt-2">
                <div className="bg-zinc-950 p-2.5 rounded border border-zinc-800">
                  <div className="text-lg font-bold text-white">45,000+</div>
                  <div className="text-[10px] text-zinc-400 uppercase tracking-widest mt-1">Vehicles Serviced</div>
                </div>
                <div className="bg-zinc-950 p-2.5 rounded border border-zinc-800">
                  <div className="text-lg font-bold text-red-500">25+ Years</div>
                  <div className="text-[10px] text-zinc-400 uppercase tracking-widest mt-1">Combined Red Seal Exp</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating video control customization drawer at the bottom right corner */}
      <div className="absolute bottom-4 right-4 z-50">
        {!showConfig ? (
          <button
            id="video-config-toggle"
            onClick={() => setShowConfig(true)}
            className="flex items-center space-x-2 bg-zinc-900/95 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 text-zinc-300 hover:text-white px-3.5 py-2 rounded-full text-xs font-mono tracking-wide shadow-2xl backdrop-blur-md transition-all duration-200 transform hover:scale-105 cursor-pointer"
          >
            <Video className="w-4 h-4 text-red-500" />
            <span>Customize Hero Video</span>
            {customVideoUrl || workspaceVideo ? (
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
            ) : null}
          </button>
        ) : (
          <div className="w-80 bg-zinc-900/98 border border-zinc-800 rounded-xl p-4 shadow-2xl backdrop-blur-md text-left text-xs font-sans space-y-4 animate-in fade-in slide-in-from-bottom-2 duration-200">
            {/* Header */}
            <div className="flex justify-between items-center border-b border-zinc-800 pb-2">
              <div className="flex items-center space-x-2">
                <Video className="w-4 h-4 text-red-500" />
                <span className="font-bold text-white font-mono uppercase tracking-wide">Video Customization</span>
              </div>
              <button
                onClick={() => setShowConfig(false)}
                className="text-zinc-500 hover:text-zinc-300 font-bold p-1 hover:bg-zinc-800 rounded cursor-pointer"
              >
                ✕
              </button>
            </div>

            {/* Error Message if any */}
            {errorMsg && (
              <div className="bg-red-950/50 border border-red-900/50 text-red-400 p-2.5 rounded flex items-start space-x-2">
                <AlertTriangle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>{errorMsg}</span>
              </div>
            )}

            {/* Current Source Info */}
            <div className="bg-zinc-950/80 p-2 rounded border border-zinc-800 flex items-center justify-between font-mono">
              <div>
                <span className="text-[10px] text-zinc-500 block uppercase tracking-wider">Active Source</span>
                <span className="font-semibold text-zinc-200 text-xs">{videoSourceType}</span>
              </div>
              {customVideoUrl || workspaceVideo ? (
                <span className="text-[10px] bg-red-950/50 border border-red-900/40 text-red-400 px-1.5 py-0.5 rounded">
                  CUSTOM
                </span>
              ) : (
                <span className="text-[10px] bg-zinc-900 border border-zinc-800 text-zinc-400 px-1.5 py-0.5 rounded">
                  DEFAULT
                </span>
              )}
            </div>

            {/* Drag & Drop File Upload */}
            <div
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              onClick={triggerFileSelect}
              className={`border-2 border-dashed rounded-lg p-4 text-center cursor-pointer transition-colors duration-200 ${
                isDragging
                  ? "border-red-500 bg-red-950/10 text-red-400"
                  : "border-zinc-800 hover:border-zinc-700 hover:bg-zinc-950/50 text-zinc-400"
              }`}
            >
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                accept="video/mp4,video/webm,video/ogg,video/quicktime"
                className="hidden"
              />
              <Upload className="w-6 h-6 mx-auto mb-2 text-zinc-500" />
              <p className="font-semibold text-zinc-300">Drag & drop video here</p>
              <p className="text-[10px] text-zinc-500 mt-1 font-mono">or click to browse local files (.mp4, .webm)</p>
            </div>

            {/* URL Input */}
            <div className="space-y-1.5">
              <label className="text-[10px] uppercase font-mono tracking-wider text-zinc-400 block">Or Paste Video URL</label>
              <div className="flex space-x-2">
                <input
                  type="text"
                  placeholder="https://example.com/video.mp4"
                  value={urlInput}
                  onChange={(e) => setUrlInput(e.target.value)}
                  className="bg-zinc-950 border border-zinc-800 rounded px-2 py-1.5 flex-1 text-zinc-200 text-xs focus:outline-none focus:border-red-500 font-mono"
                />
                <button
                  onClick={handleUrlApply}
                  className="bg-red-600 hover:bg-red-700 text-white font-bold px-2.5 py-1.5 rounded transition-colors text-xs font-mono cursor-pointer"
                >
                  Apply
                </button>
              </div>
            </div>

            {/* Reset Actions */}
            <div className="flex items-center justify-between pt-2 border-t border-zinc-800">
              <button
                onClick={handleReset}
                disabled={!customVideoUrl && !workspaceVideo}
                className={`flex items-center space-x-1.5 text-xs font-mono cursor-pointer ${
                  customVideoUrl || workspaceVideo
                    ? "text-red-400 hover:text-red-300"
                    : "text-zinc-600 cursor-not-allowed"
                }`}
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset to Stock</span>
              </button>
              
              <span className="text-[10px] text-zinc-500 font-mono">
                Auto-plays & loops
              </span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
