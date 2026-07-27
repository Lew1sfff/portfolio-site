import type { Metadata } from "next";
import AboutSection from "@/components/AboutSection";
import SkillsCloud from "@/components/SkillsCloud";
import Timeline from "@/components/Timeline";

export const metadata: Metadata = {
  title: "关于我",
  description: "了解我的背景、技能和创作经历",
};

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-20">
      <AboutSection />
      <SkillsCloud />
      <Timeline />
    </div>
  );
}
