"use client";

import { useState, useEffect } from "react";

export default function EntranceAnimation({ onDone }: { onDone: () => void }) {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    // Phase 1: name appears (0ms)
    const t1 = setTimeout(() => setPhase(1), 100);
    // Phase 2: subtitle appears (800ms)
    const t2 = setTimeout(() => setPhase(2), 900);
    // Phase 3: split open (1800ms)
    const t3 = setTimeout(() => setPhase(3), 1800);
    // Phase 4: done (2600ms)
    const t4 = setTimeout(() => onDone(), 2600);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, [onDone]);

  return (
    <div className="fixed inset-0 z-[200] pointer-events-none">
      {/* Left panel */}
      <div
        className={`absolute inset-y-0 left-0 w-1/2 bg-dark-950 transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] ${
          phase >= 3 ? "-translate-x-full" : "translate-x-0"
        }`}
      />

      {/* Right panel */}
      <div
        className={`absolute inset-y-0 right-0 w-1/2 bg-dark-950 transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] ${
          phase >= 3 ? "translate-x-full" : "translate-x-0"
        }`}
      />

      {/* Center content */}
      <div
        className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-300 ${
          phase >= 3 ? "opacity-0" : "opacity-100"
        }`}
      >
        {/* Name */}
        <div className="overflow-hidden">
          <h1
            className={`text-6xl md:text-8xl lg:text-9xl font-black text-white tracking-tight transition-all duration-700 ease-out ${
              phase >= 1
                ? "translate-y-0 opacity-100"
                : "translate-y-full opacity-0"
            }`}
          >
            Lew1s' works
          </h1>
        </div>

        {/* Subtitle */}
        <div className="overflow-hidden mt-4">
          <p
            className={`text-text-secondary text-sm md:text-base tracking-[0.3em] uppercase transition-all duration-500 ease-out ${
              phase >= 2
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            Creative Portfolio
          </p>
        </div>

        {/* Decorative line */}
        <div className="mt-8 w-0 bg-electric h-[2px] transition-all duration-500 ease-out"
          style={{ width: phase >= 2 ? "120px" : "0px" }}
        />
      </div>
    </div>
  );
}
