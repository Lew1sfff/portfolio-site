"use client";

import { useEffect, useRef } from "react";

const skills = [
  { name: "商业摄影", color: "electric" },
  { name: "产品拍摄", color: "neon-green" },
  { name: "人像摄影", color: "hot-orange" },
  { name: "视频拍摄", color: "electric" },
  { name: "平面设计", color: "neon-green" },
  { name: "海报设计", color: "hot-orange" },
  { name: "品牌视觉", color: "electric" },
  { name: "社交媒体", color: "neon-green" },
  { name: "创意策划", color: "hot-orange" },
];

const colorMap: Record<string, string> = {
  electric: "bg-electric/10 text-electric border-electric/30",
  "neon-green": "bg-neon-green/10 text-neon-green border-neon-green/30",
  "hot-orange": "bg-hot-orange/10 text-hot-orange border-hot-orange/30",
};

export default function SkillsCloud() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const tags = entry.target.querySelectorAll(".skill-tag");
            tags.forEach((tag, i) => {
              setTimeout(() => {
                (tag as HTMLElement).style.opacity = "1";
                (tag as HTMLElement).style.transform = "translateY(0) scale(1)";
              }, i * 80);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="mb-20">
      <p className="text-electric text-sm tracking-[0.2em] uppercase mb-4">
        Skills
      </p>
      <h2 className="text-2xl md:text-3xl font-bold text-text-primary tracking-tight mb-8">
        技能
      </h2>
      <div
        ref={containerRef}
        className="flex flex-wrap gap-3"
      >
        {skills.map((skill) => (
          <span
            key={skill.name}
            className={`skill-tag px-4 py-2 text-sm rounded-full border transition-all duration-300 cursor-default hover:scale-110 hover:shadow-lg ${
              colorMap[skill.color]
            }`}
            style={{ opacity: 0, transform: "translateY(10px) scale(0.9)" }}
          >
            {skill.name}
          </span>
        ))}
      </div>
    </section>
  );
}
