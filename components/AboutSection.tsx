"use client";

import { useLang } from "./LangProvider";

export default function AboutSection() {
  const { t, lang } = useLang();

  return (
    <section className="mb-20">
      <p className="text-electric text-sm tracking-[0.2em] uppercase mb-4">
        {t("about.tag")}
      </p>
      <h1 className="text-4xl md:text-5xl font-bold text-text-primary tracking-tight mb-8">
        {t("about.title")}
      </h1>
      <div className="max-w-3xl space-y-6 text-text-secondary text-lg leading-relaxed">
        {lang === "zh" ? (
          <>
            <p>
              你好，我是<span className="text-yellow-400 font-semibold">林弋普</span>，一名视觉设计师，专注于商业摄影、产品拍摄与设计领域。
              擅长将品牌理念转化为有冲击力的视觉语言，用镜头和设计讲述独特的故事。
            </p>
            <p>
              从电商产品拍摄到品牌视觉系统设计，我积累了丰富的跨领域经验。
              每一个项目都是一次新的探索——我享受在创意与技术之间找到平衡的过程。
            </p>
            <p>
              目前专注于商业摄影、视觉设计和创意内容制作，期待与更多有趣的品牌合作。
            </p>
          </>
        ) : (
          <>
            <p>
              Hi, I'm <span className="text-yellow-400 font-semibold">Lin Yipu</span>, a visual designer specializing in commercial photography, product shooting, and design.
              I excel at transforming brand concepts into impactful visual language, telling unique stories through lenses and design.
            </p>
            <p>
              From e-commerce product photography to brand visual system design, I've accumulated extensive cross-disciplinary experience.
              Every project is a new exploration — I enjoy finding the balance between creativity and technology.
            </p>
            <p>
              Currently focused on commercial photography, visual design, and creative content production. Looking forward to collaborating with more interesting brands.
            </p>
          </>
        )}
      </div>
    </section>
  );
}
