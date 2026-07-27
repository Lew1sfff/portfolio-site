"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import type { MediaItem } from "@/data/projects";
import Lightbox from "./Lightbox";

interface MediaGalleryProps {
  media: MediaItem[];
}

export default function MediaGallery({ media }: MediaGalleryProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Image reveal on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    itemRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [media]);

  const scrollByAmount = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = scrollRef.current.clientWidth * 0.75;
    scrollRef.current.scrollBy({
      left: dir === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const setVideoVolume = useCallback((index: number) => {
    const video = videoRefs.current[index];
    if (video) video.volume = 0.2;
  }, []);

  return (
    <section className="relative">
      {/* Scroll controls */}
      <div className="absolute top-1/2 -translate-y-1/2 left-4 z-10 flex flex-col gap-3">
        <button
          onClick={() => scrollByAmount("left")}
          className="w-12 h-12 rounded-full bg-dark-900/80 backdrop-blur-sm border border-dark-600/50 text-text-secondary hover:text-electric hover:border-electric/50 transition-all flex items-center justify-center"
        >
          <ChevronLeft size={24} />
        </button>
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 right-4 z-10 flex flex-col gap-3">
        <button
          onClick={() => scrollByAmount("right")}
          className="w-12 h-12 rounded-full bg-dark-900/80 backdrop-blur-sm border border-dark-600/50 text-text-secondary hover:text-electric hover:border-electric/50 transition-all flex items-center justify-center"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Horizontal scroll gallery */}
      <div
        ref={scrollRef}
        className="horizontal-scroll gap-6 px-6 md:px-12 pb-8"
        style={{ scrollPaddingLeft: "2rem" }}
      >
        {media.map((item, index) => (
          <div
            key={index}
            ref={(el) => { itemRefs.current[index] = el; }}
            className="img-reveal relative group cursor-pointer overflow-hidden rounded-2xl border border-dark-700/30 hover:border-electric/40 transition-all duration-500"
            style={{
              width: item.portrait ? "min(45vw, 450px)" : item.type === "video" ? "min(80vw, 900px)" : "min(70vw, 700px)",
              height: item.portrait ? "min(65vw, 700px)" : item.type === "video" ? "min(45vw, 500px)" : "min(55vw, 550px)",
            }}
            onClick={() => setLightboxIndex(index)}
          >
            {item.type === "image" ? (
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="70vw"
                loading="lazy"
              />
            ) : (
              <div className="relative w-full h-full bg-dark-800 flex items-center justify-center">
                <video
                  ref={(el) => { videoRefs.current[index] = el; }}
                  onLoadedData={() => setVideoVolume(index)}
                  src={item.src}
                  className="w-full h-full object-cover"
                  playsInline
                />
                <div className="absolute inset-0 flex items-center justify-center bg-dark-950/30 group-hover:bg-dark-950/10 transition-colors">
                  <div className="w-20 h-20 rounded-full bg-electric/80 flex items-center justify-center group-hover:scale-110 transition-transform shadow-[0_0_40px_rgba(0,212,255,0.3)]">
                    <Play className="w-8 h-8 text-dark-900 ml-1" fill="currentColor" />
                  </div>
                </div>
              </div>
            )}

            {/* Index number */}
            <div className="absolute top-4 left-4 text-white/40 text-xs font-mono tracking-wider">
              {String(index + 1).padStart(2, "0")}
            </div>
          </div>
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="flex items-center justify-center gap-3 pt-6 text-text-muted text-sm">
        <div className="w-8 h-[1px] bg-dark-600" />
        <span>点击作品可放大浏览</span>
        <div className="w-8 h-[1px] bg-dark-600" />
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox
          items={media}
          initialIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </section>
  );
}
