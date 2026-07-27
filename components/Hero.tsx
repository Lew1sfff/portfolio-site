"use client";

import { useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";

const keywords = ["设计", "摄影"];

export default function Hero() {
  const wordRef = useRef<HTMLSpanElement>(null);
  const indexRef = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      indexRef.current = (indexRef.current + 1) % keywords.length;
      if (wordRef.current) {
        wordRef.current.style.opacity = "0";
        wordRef.current.style.transform = "translateY(-20px)";
        setTimeout(() => {
          if (wordRef.current) {
            wordRef.current.textContent = keywords[indexRef.current];
            wordRef.current.style.opacity = "1";
            wordRef.current.style.transform = "translateY(0)";
          }
        }, 300);
      }
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-dark-950">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-dark-900 to-dark-900" />

      {/* Grid texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-electric/5 blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-hot-orange/5 blur-3xl" />

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <p className="text-text-secondary text-sm tracking-[0.3em] uppercase mb-6 animate-fade-in">
          Lew1s' works
        </p>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-none animate-fade-in-up">
          <span className="text-text-primary">视觉</span>
          <span
            ref={wordRef}
            className="inline-block text-electric ml-4 transition-all duration-300"
          >
            {keywords[0]}
          </span>
        </h1>

        <p className="mt-8 text-text-secondary text-lg md:text-xl max-w-2xl mx-auto leading-relaxed animate-fade-in delay-300" style={{ opacity: 0 }}>
          用镜头捕捉细节，用设计讲述故事
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 animate-bounce-down">
        <ChevronDown className="w-6 h-6 text-text-muted" />
      </div>
    </section>
  );
}
