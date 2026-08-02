"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProjectCard from "./ProjectCard";
import { useLang } from "./LangProvider";
import type { Project } from "@/data/projects";

gsap.registerPlugin(ScrollTrigger);

interface ProjectGridProps {
  projects: Project[];
}

export default function ProjectGrid({ projects }: ProjectGridProps) {
  const gridRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const { t } = useLang();

  useEffect(() => {
    // Heading animation
    if (headingRef.current) {
      gsap.from(headingRef.current.children, {
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 85%",
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
      });
    }

    // Card animations
    const cards = gridRef.current?.querySelectorAll(".project-card");
    if (!cards) return;

    cards.forEach((card, i) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: "top 88%",
        },
        y: 60,
        opacity: 0,
        scale: 0.96,
        duration: 0.9,
        delay: (i % 2) * 0.15,
        ease: "power3.out",
      });
    });
  }, []);

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

      <div
        ref={gridRef}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </section>
  );
}
