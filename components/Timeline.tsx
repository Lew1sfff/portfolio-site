"use client";

import { useEffect, useRef } from "react";

const experiences = [
  {
    year: "2025",
    title: "自由视觉创作者",
    description: "专注商业摄影、产品拍摄及品牌视觉设计，服务多个电商品牌。",
  },
  {
    year: "2024",
    title: "商业摄影 & 设计",
    description: "参与多个品牌的视觉项目，涵盖服装、美妆、餐饮等行业。",
  },
  {
    year: "2023",
    title: "开始视觉创作之路",
    description: "踏入摄影与设计领域，开始积累商业项目经验。",
  },
];

export default function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);

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
      { threshold: 0.2 }
    );

    const items = containerRef.current?.querySelectorAll(".timeline-item");
    items?.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section>
      <p className="text-electric text-sm tracking-[0.2em] uppercase mb-4">
        Experience
      </p>
      <h2 className="text-2xl md:text-3xl font-bold text-text-primary tracking-tight mb-8">
        经历
      </h2>
      <div ref={containerRef} className="relative pl-8">
        {/* Vertical line */}
        <div className="absolute left-[7px] top-2 bottom-2 w-[2px] bg-gradient-to-b from-electric via-electric/50 to-transparent" />

        {experiences.map((exp, index) => (
          <div
            key={index}
            className="timeline-item reveal relative mb-12 last:mb-0"
            style={{ transitionDelay: `${index * 200}ms` }}
          >
            {/* Dot with glow */}
            <div className="absolute -left-[1.65rem] top-1.5 w-4 h-4 rounded-full bg-electric border-[3px] border-dark-900 shadow-[0_0_12px_rgba(0,212,255,0.5)]" />

            <span className="text-electric text-sm font-mono tracking-wider">{exp.year}</span>
            <h3 className="text-lg font-semibold text-text-primary mt-2">
              {exp.title}
            </h3>
            <p className="text-text-secondary mt-2 leading-relaxed">
              {exp.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
