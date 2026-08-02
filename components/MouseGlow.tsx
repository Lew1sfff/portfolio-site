"use client";

import { useEffect, useState } from "react";

export default function MouseGlow() {
  const [pos, setPos] = useState({ x: -500, y: -500 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile("ontouchstart" in window || navigator.maxTouchPoints > 0);
  }, []);

  useEffect(() => {
    if (isMobile) return;
    const onMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };
    document.addEventListener("mousemove", onMove);
    return () => document.removeEventListener("mousemove", onMove);
  }, [isMobile]);

  if (isMobile) return null;

  return (
    <div
      className="fixed pointer-events-none z-[1] transition-all duration-300 ease-out"
      style={{
        left: pos.x - 200,
        top: pos.y - 200,
        width: 400,
        height: 400,
        background: "radial-gradient(circle, rgba(0,212,255,0.06) 0%, rgba(0,212,255,0.02) 40%, transparent 70%)",
        borderRadius: "50%",
      }}
    />
  );
}
