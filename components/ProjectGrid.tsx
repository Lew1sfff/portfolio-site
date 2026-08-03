"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProjectCard from "./ProjectCard";
import { useLang } from "./LangProvider";
import type { Project, Category } from "@/data/projects";

gsap.registerPlugin(ScrollTrigger);

const categories: { value: Category | "all"; labelKey: string }[] = [
  { value: "all", labelKey: "filter.all" },
  { value: "photography", labelKey: "filter.photography" },
  { value: "portrait", labelKey: "filter.portrait" },
  { value: "design", labelKey: "filter.design" },
  { value: "social", labelKey: "filter.social" },
];

interface ProjectGridProps {
  projects: Project[];
}

export default function ProjectGrid({ projects }: ProjectGridProps) {
  const gridRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const { t } = useLang();
  const [active, setActive] = useState<Category | "all">("all");

  const filtered = active === "all" ? projects : projects.filter((p) => p.category === active);

  useEffect(() => {
    // Heading animation
    if (headingRef.current) {
      gsap.fromTo(headingRef.current.children, { y: 40, opacity: 0 }, {
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
      });
    }

    // Card animations
    const cards = gridRef.current?.querySelectorAll(".project-card");
    if (!cards) return;

    cards.forEach((card, i) => {
      gsap.fromTo(card, { y: 60, opacity: 0, scale: 0.96 }, {
        scrollTrigger: {
          trigger: card,
          start: "top 88%",
          toggleActions: "play none none none",
        },
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.9,
        delay: (i % 2) * 0.15,
        ease: "power3.out",
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  // Animate cards on filter change
  useEffect(() => {
    const cards = gridRef.current?.querySelectorAll(".project-card");
    if (!cards) return;

    gsap.fromTo(
      cards,
      { opacity: 0, y: 30, scale: 0.96 },
      { opacity: 1, y: 0, scale: 1, duration: 0.5, stagger: 0.08, ease: "power2.out" }
    );
  }, [active]);

  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
      <div ref={headingRef} className="mb-12">
        <p className="text-electric text-sm tracking-[0.2em] uppercase mb-2">
          {t("grid.tag")}
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-text-primary tracking-tight">
          {t("grid.title")}
        </h2>
      </div>

      {/* Filter tabs */}
      <div className="flex flex-wrap gap-2 mb-10">
        {categories.map((cat) => (
          <button
            key={cat.value}
            onClick={() => setActive(cat.value)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              active === cat.value
                ? "bg-electric text-dark-950 shadow-[0_0_12px_rgba(0,212,255,0.3)]"
                : "bg-dark-800/60 text-text-secondary hover:bg-dark-700 hover:text-text-primary border border-dark-700/50"
            }`}
          >
            {t(cat.labelKey)}
          </button>
        ))}
      </div>

      <div
        ref={gridRef}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {filtered.map((project) => (
          <div key={project.id} className="project-card">
            <ProjectCard project={project} />
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-text-muted py-20">{t("filter.empty")}</p>
      )}
    </section>
  );
}
