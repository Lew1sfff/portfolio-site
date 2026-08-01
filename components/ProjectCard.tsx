"use client";

import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${project.id}`}
      className="group relative block overflow-hidden rounded-xl aspect-[3/4] border border-dark-700/50 transition-all duration-500 hover:border-electric/40 hover:shadow-[0_0_30px_rgba(0,212,255,0.15)]"
    >
      {/* Image with shimmer placeholder */}
      <div className="absolute inset-0 bg-dark-800 animate-pulse" />
      <Image
        src={project.cover}
        alt={project.title}
        fill
        quality={80}
        className="object-cover transition-transform duration-700 group-hover:scale-110"
        sizes="(max-width: 768px) 100vw, 50vw"
        loading="lazy"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Content on hover */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
        <h3 className="text-xl md:text-2xl font-bold text-white mb-2 drop-shadow-lg">
          {project.title}
        </h3>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-xs rounded-full bg-white/20 text-white border border-white/40 backdrop-blur-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Always visible title on mobile */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black via-black/80 to-transparent md:hidden">
        <h3 className="text-base font-bold text-white drop-shadow-lg">
          {project.title}
        </h3>
      </div>
    </Link>
  );
}
