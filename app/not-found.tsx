"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function NotFound() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const ctx = gsap.context(() => {
      gsap.from(".nf-404", {
        scale: 0.5,
        opacity: 0,
        duration: 1.2,
        ease: "elastic.out(1, 0.5)",
      });
      gsap.from(".nf-text", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        delay: 0.3,
        ease: "power3.out",
      });
      gsap.from(".nf-btn", {
        y: 20,
        opacity: 0,
        duration: 0.6,
        delay: 0.6,
        ease: "power3.out",
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="min-h-screen flex flex-col items-center justify-center bg-dark-950 px-6 relative overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-electric/5 blur-[120px]" />
      </div>

      {/* 404 number */}
      <p className="nf-404 text-electric text-sm tracking-[0.3em] uppercase mb-4 relative">
        404
      </p>
      <h1 className="nf-text text-6xl md:text-8xl font-black text-text-primary tracking-tight mb-6 relative">
        页面未找到
      </h1>
      <p className="nf-text text-text-secondary text-lg max-w-md text-center mb-10 relative">
        你访问的页面不存在或已被移除
      </p>
      <Link
        href="/"
        className="nf-btn relative px-8 py-3 rounded-full bg-electric text-dark-950 font-semibold text-sm tracking-wide hover:bg-electric-dim transition-colors"
      >
        返回首页
      </Link>
    </div>
  );
}
