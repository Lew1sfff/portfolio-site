"use client";

import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLang } from "./LangProvider";
import type { Project } from "@/data/projects";

interface ProjectNavProps {
  prevProject: Project | null;
  nextProject: Project | null;
}

export default function ProjectNav({ prevProject, nextProject }: ProjectNavProps) {
  const { t } = useLang();

  return (
    <nav className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20 flex items-center justify-between border-t border-dark-700/50">
      {prevProject ? (
        <Link
          href={`/projects/${prevProject.id}`}
          className="group flex items-center gap-3 text-text-secondary hover:text-electric transition-colors"
        >
          <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <div className="text-left">
            <p className="text-xs text-text-muted uppercase tracking-wider">{t("nav.prev")}</p>
            <p className="text-sm font-medium">{prevProject.title}</p>
          </div>
        </Link>
      ) : (
        <div />
      )}
      {nextProject ? (
        <Link
          href={`/projects/${nextProject.id}`}
          className="group flex items-center gap-3 text-text-secondary hover:text-electric transition-colors"
        >
          <div className="text-right">
            <p className="text-xs text-text-muted uppercase tracking-wider">{t("nav.next")}</p>
            <p className="text-sm font-medium">{nextProject.title}</p>
          </div>
          <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      ) : (
        <div />
      )}
    </nav>
  );
}
