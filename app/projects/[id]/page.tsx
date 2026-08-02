import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { projects, getProjectById, getSortedProjects } from "@/data/projects";
import ProjectHero from "@/components/ProjectHero";
import MediaGallery from "@/components/MediaGallery";
import BackButton from "@/components/BackButton";
import ProjectNav from "@/components/ProjectNav";

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
      <ProjectNav prevProject={prevProject} nextProject={nextProject} />
    </>
  );
}
