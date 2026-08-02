"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const prevPath = useRef(pathname);

  useEffect(() => {
    if (prevPath.current !== pathname) {
      setIsTransitioning(true);
      const timer = setTimeout(() => {
        setIsTransitioning(false);
        prevPath.current = pathname;
      }, 400);
      return () => clearTimeout(timer);
    }
  }, [pathname]);

  return (
    <>
      {/* Transition overlay */}
      <div
        className={`fixed inset-0 z-[90] bg-dark-950 pointer-events-none transition-opacity duration-400 ${
          isTransitioning ? "opacity-0" : "opacity-0"
        }`}
        style={{
          transition: isTransitioning ? "opacity 0.4s ease-out" : "none",
        }}
      />
      {/* Page content with fade */}
      <div
        key={pathname}
        className="animate-fade-in"
        style={{ animationDuration: "0.5s" }}
      >
        {children}
      </div>
    </>
  );
}
