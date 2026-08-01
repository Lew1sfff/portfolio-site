"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import type { MediaItem } from "@/data/projects";
import Lightbox from "./Lightbox";

gsap.registerPlugin(ScrollTrigger);

interface MediaGalleryProps {
  media: MediaItem[];
}

export default function MediaGallery({ media }: MediaGalleryProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const progressRef = useRef<HTMLDivElement>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Check mobile
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // GSAP reveal animations for gallery items
  useEffect(() => {
    const ctx = gsap.context(() => {
      itemRefs.current.forEach((el, i) => {
        if (!el) return;
        gsap.from(el, {
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
          },
          y: 50,
          opacity: 0,
          clipPath: "inset(0 100% 0 0)",
          duration: 1,
          delay: isMobile ? i * 0.08 : 0,
          ease: "power3.inOut",
          onComplete: () => {
            el.style.clipPath = "inset(0 0 0 0)";
          },
        });
      });
    });
    return () => ctx.revert();
  }, [media, isMobile]);

  // Scroll progress bar
  useEffect(() => {
    if (isMobile || !scrollRef.current || !progressRef.current) return;
    const el = scrollRef.current;
    const bar = progressRef.current;

    const onScroll = () => {
      const max = el.scrollWidth - el.clientWidth;
      const pct = max > 0 ? el.scrollLeft / max : 0;
      bar.style.transform = `scaleX(${pct})`;
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, [isMobile]);

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
      {/* Desktop scroll controls */}
      {!isMobile && (
        <>
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
        </>
      )}

      {/* Gallery */}
      {isMobile ? (
        /* Mobile: vertical grid */
        <div className="grid grid-cols-2 gap-3 px-4 pb-8">
          {media.map((item, index) => (
            <div
              key={index}
              ref={(el) => { itemRefs.current[index] = el; }}
              className="relative group cursor-pointer overflow-hidden rounded-xl border border-dark-700/30 hover:border-electric/40 transition-all duration-500"
              style={{
                aspectRatio: item.portrait ? "3/4" : item.type === "video" ? "16/9" : "4/3",
              }}
              onClick={() => setLightboxIndex(index)}
            >
              {item.type === "image" ? (
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  quality={80}
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="50vw"
                  loading="lazy"
                />
              ) : (
                <div className="relative w-full h-full bg-dark-800 flex items-center justify-center">
                  <video
                    ref={(el) => { videoRefs.current[index] = el; }}
                    onLoadedData={() => setVideoVolume(index)}
                    src={item.src}
                    className="w-full h-full object-cover"
                    preload="none"
                    playsInline
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-dark-950/30 pointer-events-none">
                    <div className="w-12 h-12 rounded-full bg-electric/80 flex items-center justify-center shadow-[0_0_30px_rgba(0,212,255,0.3)]">
                      <Play className="w-5 h-5 text-dark-900 ml-0.5" fill="currentColor" />
                    </div>
                  </div>
                </div>
              )}
              <div className="absolute top-2 left-2 text-white/40 text-[10px] font-mono">
                {String(index + 1).padStart(2, "0")}
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* Desktop: horizontal scroll */
        <>
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
                    quality={80}
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
                      preload="none"
                      playsInline
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-dark-950/30 group-hover:bg-dark-950/10 transition-colors pointer-events-none">
                      <div className="w-20 h-20 rounded-full bg-electric/80 flex items-center justify-center group-hover:scale-110 transition-transform shadow-[0_0_40px_rgba(0,212,255,0.3)]">
                        <Play className="w-8 h-8 text-dark-900 ml-1" fill="currentColor" />
                      </div>
                    </div>
                  </div>
                )}

                <div className="absolute top-4 left-4 text-white/40 text-xs font-mono tracking-wider">
                  {String(index + 1).padStart(2, "0")}
                </div>
              </div>
            ))}
          </div>

          {/* Scroll progress bar */}
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="h-[2px] bg-dark-700/50 rounded-full overflow-hidden">
              <div
                ref={progressRef}
                className="h-full bg-electric/60 rounded-full origin-left transition-transform duration-100"
                style={{ transform: "scaleX(0)" }}
              />
            </div>
          </div>
        </>
      )}

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
