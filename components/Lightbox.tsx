"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface LightboxProps {
  items: { src: string; type: "image" | "video"; alt: string }[];
  initialIndex: number;
  onClose: () => void;
}

export default function Lightbox({ items, initialIndex, onClose }: LightboxProps) {
  const [index, setIndex] = useState(initialIndex);
  const item = items[index];

  const goNext = useCallback(() => {
    setIndex((i) => (i + 1) % items.length);
  }, [items.length]);

  const goPrev = useCallback(() => {
    setIndex((i) => (i - 1 + items.length) % items.length);
  }, [items.length]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose, goNext, goPrev]);

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
      >
        <X size={24} />
      </button>

      {/* Counter */}
      <div className="absolute top-6 left-6 z-10 text-white/60 text-sm font-mono">
        {index + 1} / {items.length}
      </div>

      {/* Prev / Next */}
      <button
        onClick={(e) => { e.stopPropagation(); goPrev(); }}
        className="absolute left-4 md:left-8 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={(e) => { e.stopPropagation(); goNext(); }}
        className="absolute right-4 md:right-8 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
      >
        <ChevronRight size={24} />
      </button>

      {/* Content */}
      <div
        className="w-[90vw] h-[85vh] relative"
        onClick={(e) => e.stopPropagation()}
      >
        {item.type === "image" ? (
          <Image
            src={item.src}
            alt={item.alt}
            fill
            quality={90}
            className="object-contain"
            priority
          />
        ) : (
          <video
            src={item.src}
            className="max-w-[90vw] max-h-[85vh] object-contain"
            controls
            autoPlay
            playsInline
            preload="metadata"
          />
        )}
      </div>
    </div>
  );
}
