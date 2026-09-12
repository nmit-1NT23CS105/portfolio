"use client";

import { useState, useEffect } from "react";
import { Clock, MapPin, Sparkles } from "lucide-react";

export default function LiveStatus() {
  const [timeStr, setTimeStr] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const istTime = now.toLocaleTimeString("en-US", {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      });
      setTimeStr(istTime);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="inline-flex flex-wrap items-center justify-center gap-2 sm:gap-4 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/80 text-xs font-mono backdrop-blur-md">
      {/* Pulsing Green Status Beacon */}
      <div className="flex items-center gap-2">
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22C55E] opacity-75" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#22C55E]" />
        </span>
        <span className="text-[#22C55E] font-semibold uppercase tracking-wider">
          Available for Hire
        </span>
      </div>

      <span className="hidden sm:inline text-white/30">•</span>

      {/* Location */}
      <div className="flex items-center gap-1.5 text-white/70">
        <MapPin size={13} className="text-white/50" />
        <span>Bangalore, India</span>
      </div>

      {timeStr && (
        <>
          <span className="hidden sm:inline text-white/30">•</span>
          {/* Live IST Clock */}
          <div className="flex items-center gap-1.5 text-white/60">
            <Clock size={13} className="text-white/50" />
            <span suppressHydrationWarning>{timeStr} IST</span>
          </div>
        </>
      )}
    </div>
  );
}

