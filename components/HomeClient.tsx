"use client";

import { useState, useCallback } from "react";
import Hero from "@/components/Hero";
import ProjectGrid from "@/components/ProjectGrid";
import EntranceAnimation from "@/components/EntranceAnimation";
import SilkBackground from "@/components/SilkBackground";
import type { Project } from "@/data/projects";

export default function HomeClient({ projects }: { projects: Project[] }) {
  const [showEntrance, setShowEntrance] = useState(true);

  const handleDone = useCallback(() => setShowEntrance(false), []);

  return (
    <>
      {showEntrance && <EntranceAnimation onDone={handleDone} />}
      <SilkBackground color="#00d4ff" backgroundColor="#0a0a0a" speed={0.8} density={1.2} />
      <Hero />
      <ProjectGrid projects={projects} />
    </>
  );
}
