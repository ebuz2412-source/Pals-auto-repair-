import React from "react";
import { 
  MapPin, 
  Sparkles, 
  UserCheck, 
  Clock, 
  Shield, 
  Headphones, 
  CheckCircle2 
} from "lucide-react";
import { WHY_CHOOSE_US, FAQS } from "../data";

export default function WhyChooseUs() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "MapPin":
        return <MapPin className="w-6 h-6 text-amber-400" />;
      case "Sparkles":
        return <Sparkles className="w-6 h-6 text-amber-400" />;
      case "UserCheck":
        return <UserCheck className="w-6 h-6 text-amber-400" />;
      case "Clock":
        return <Clock className="w-6 h-6 text-amber-400" />;
      case "Shield":
        return <Shield className="w-6 h-6 text-amber-400" />;
      case "Headphones":
        return <Headphones className="w-6 h-6 text-amber-400" />;
      default:
        return <Sparkles className="w-6 h-6 text-amber-400" />;
    }
  };

  return (
    <section id="why-us" className="py-24 bg-zinc-950 text-zinc-100 relative border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-zinc-900 border border-amber-500/30 px-3 py-1 rounded-full text-xs font-mono font-semibold text-amber-400 uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Uncompromising Excellence</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-sans tracking-tight text-white">
            Why Rent With <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-500">Luxury Car Rentals</span>
          </h2>

          <p className="text-sm sm:text-base text-zinc-400 font-sans leading-relaxed">
            We redefine luxury mobility in Lagos through impeccable fleet maintenance, discreet executive hospitality, and an uncompromising commitment to client safety and punctuality.
          </p>
        </div>

        {/* 6 Luxury Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {WHY_CHOOSE_US.map((item) => (
            <div
              key={item.id}
              className="bg-zinc-900/70 border border-zinc-800 hover:border-amber-500/40 p-7 rounded-2xl transition-all duration-300 space-y-4 group"
            >
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                {getIcon(item.icon)}
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-white font-sans group-hover:text-amber-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-sans">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* FAQs Section */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10 space-y-2">
            <h3 className="text-2xl font-bold font-sans text-white">Frequently Asked Questions</h3>
            <p className="text-xs sm:text-sm text-zinc-400">Everything you need to know about our luxury rental process</p>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, index) => (
              <div
                key={index}
                className="bg-zinc-900/80 border border-zinc-800 rounded-xl p-5 sm:p-6 text-left space-y-2"
              >
                <h4 className="text-sm sm:text-base font-bold text-white flex items-start space-x-2">
                  <span className="text-amber-400 font-mono">Q:</span>
                  <span>{faq.q}</span>
                </h4>
                <p className="text-xs sm:text-sm text-zinc-400 pl-6 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
