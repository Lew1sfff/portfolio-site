"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile("ontouchstart" in window || navigator.maxTouchPoints > 0);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const onMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };
    const onLeave = () => setIsVisible(false);
    const onEnter = () => setIsVisible(true);

    // Detect hoverable elements
    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("a, button, [role='button'], input, textarea, .cursor-pointer")) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);
    document.addEventListener("mouseover", onOver);

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
      document.removeEventListener("mouseover", onOver);
    };
  }, [isMobile, isVisible]);

  if (isMobile) return null;

  return (
    <div
      className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference transition-opacity duration-200"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: `translate(${pos.x - (isHovering ? 24 : 8)}px, ${pos.y - (isHovering ? 24 : 8)}px)`,
        transition: "transform 0.15s ease-out, opacity 0.2s",
      }}
    >
      <div
        className="rounded-full bg-white transition-all duration-200"
        style={{
          width: isHovering ? 48 : 16,
          height: isHovering ? 48 : 16,
          opacity: isHovering ? 0.4 : 0.8,
        }}
      />
    </div>
  );
}
