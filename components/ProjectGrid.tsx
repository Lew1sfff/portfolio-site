"use client";

import { useEffect, useRef } from "react";
import ProjectCard from "./ProjectCard";
import type { Project } from "@/data/projects";

interface ProjectGridProps {
  projects: Project[];
}

export default function ProjectGrid({ projects }: ProjectGridProps) {
  const gridRef = useRef<HTMLDivElement>(null);

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
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    const cards = gridRef.current?.querySelectorAll(".reveal");
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
      <div className="mb-12">
        <p className="text-electric text-sm tracking-[0.2em] uppercase mb-2">
          Selected Works
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-text-primary tracking-tight">
          精选项目
        </h2>
      </div>

      <div
        ref={gridRef}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {projects.map((project, index) => (
          <div
            key={project.id}
            className="reveal"
            style={{ transitionDelay: `${(index % 2) * 150}ms` }}
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </section>
  );
}
