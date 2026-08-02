"use client";

import { useEffect, useRef } from "react";
import { useLang } from "./LangProvider";

const experiences = [
  {
    year: "2025",
    titleKey: { zh: "自由视觉创作者", en: "Freelance Visual Creator" },
    descKey: { zh: "专注商业摄影、产品拍摄及品牌视觉设计，服务多个电商品牌。", en: "Focused on commercial photography, product shooting, and brand visual design for multiple e-commerce brands." },
  },
  {
    year: "2024",
    titleKey: { zh: "商业摄影 & 设计", en: "Commercial Photography & Design" },
    descKey: { zh: "参与多个品牌的视觉项目，涵盖服装、美妆、餐饮等行业。", en: "Participated in visual projects for multiple brands, covering fashion, beauty, and F&B industries." },
  },
  {
    year: "2023",
    titleKey: { zh: "开始视觉创作之路", en: "Started Visual Creative Journey" },
    descKey: { zh: "踏入摄影与设计领域，开始积累商业项目经验。", en: "Stepped into photography and design, began accumulating commercial project experience." },
  },
];

export default function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { t, lang } = useLang();

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
        {t("about.exp.tag")}
      </p>
      <h2 className="text-2xl md:text-3xl font-bold text-text-primary tracking-tight mb-8">
        {t("about.exp.title")}
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
              {exp.titleKey[lang]}
            </h3>
            <p className="text-text-secondary mt-2 leading-relaxed">
              {exp.descKey[lang]}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
