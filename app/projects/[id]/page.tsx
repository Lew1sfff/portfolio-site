import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import { projects, getProjectById, getSortedProjects } from "@/data/projects";
import ProjectHero from "@/components/ProjectHero";
import MediaGallery from "@/components/MediaGallery";
import BackButton from "@/components/BackButton";

interface PageProps {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  return projects.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const project = getProjectById(id);
  if (!project) return { title: "Not Found" };
  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: `${project.title} | 林弋普作品集`,
      description: project.description,
      type: "article",
      images: [
        {
          url: project.cover,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { id } = await params;
  const project = getProjectById(id);
  if (!project) notFound();

  const sorted = getSortedProjects();
  const currentIndex = sorted.findIndex((p) => p.id === id);
  const prevProject = currentIndex > 0 ? sorted[currentIndex - 1] : null;
  const nextProject = currentIndex < sorted.length - 1 ? sorted[currentIndex + 1] : null;

  return (
    <>

      <BackButton />

      <ProjectHero project={project} />
      <MediaGallery media={project.media} />

      {/* Prev / Next navigation */}
      <nav className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20 flex items-center justify-between border-t border-dark-700/50">
        {prevProject ? (
          <Link
            href={`/projects/${prevProject.id}`}
            className="group flex items-center gap-3 text-text-secondary hover:text-electric transition-colors"
          >
            <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            <div className="text-left">
              <p className="text-xs text-text-muted uppercase tracking-wider">上一个项目</p>
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
              <p className="text-xs text-text-muted uppercase tracking-wider">下一个项目</p>
              <p className="text-sm font-medium">{nextProject.title}</p>
            </div>
            <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        ) : (
          <div />
        )}
      </nav>
    </>
  );
}
