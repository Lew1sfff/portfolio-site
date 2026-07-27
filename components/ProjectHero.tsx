import type { Project } from "@/data/projects";

interface ProjectHeroProps {
  project: Project;
}

export default function ProjectHero({ project }: ProjectHeroProps) {
  return (
    <section className="relative h-screen flex items-end overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={project.cover}
          alt={project.title}
          className="w-full h-full object-cover scale-105 animate-[scaleIn_20s_ease-out_forwards]"
          style={{ transform: "scale(1.05)" }}
        />
      </div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/40 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-dark-950/60 to-transparent" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 pb-16 md:pb-24">
        <div className="animate-fade-in-up">
          <p className="text-electric text-sm tracking-[0.3em] uppercase mb-4 font-mono">
            {project.year}
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tight leading-[0.9] mb-6">
            {project.title}
          </h1>
          <p className="text-text-secondary text-lg md:text-xl max-w-2xl leading-relaxed mb-8">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-3">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 text-sm rounded-full bg-white/5 text-text-secondary border border-white/10 backdrop-blur-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 right-8 flex flex-col items-center gap-2 text-text-muted text-xs tracking-wider animate-bounce-down">
        <span className="uppercase">Scroll</span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-text-muted to-transparent" />
      </div>
    </section>
  );
}
