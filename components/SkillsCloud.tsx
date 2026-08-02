"use client";

import { useEffect, useRef } from "react";
import { useLang } from "./LangProvider";

const skills = [
  { nameKey: "skill.commercial", color: "electric" },
  { nameKey: "skill.product", color: "neon-green" },
  { nameKey: "skill.portrait", color: "hot-orange" },
  { nameKey: "skill.video", color: "electric" },
  { nameKey: "skill.graphics", color: "neon-green" },
  { nameKey: "skill.poster", color: "hot-orange" },
  { nameKey: "skill.branding", color: "electric" },
  { nameKey: "skill.social", color: "neon-green" },
  { nameKey: "skill.creative", color: "hot-orange" },
];

const colorMap: Record<string, string> = {
  electric: "bg-electric/10 text-electric border-electric/30",
  "neon-green": "bg-neon-green/10 text-neon-green border-neon-green/30",
  "hot-orange": "bg-hot-orange/10 text-hot-orange border-hot-orange/30",
};

export default function SkillsCloud() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { t } = useLang();

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
        {t("about.skills.tag")}
      </p>
      <h2 className="text-2xl md:text-3xl font-bold text-text-primary tracking-tight mb-8">
        {t("about.skills.title")}
      </h2>
      <div ref={containerRef} className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <span
            key={skill.nameKey}
            className={`skill-tag px-4 py-2 text-sm rounded-full border transition-all duration-300 cursor-default hover:scale-110 hover:shadow-lg ${
              colorMap[skill.color]
            }`}
            style={{ opacity: 0, transform: "translateY(10px) scale(0.9)" }}
          >
            {t(skill.nameKey)}
          </span>
        ))}
      </div>
    </section>
  );
}
