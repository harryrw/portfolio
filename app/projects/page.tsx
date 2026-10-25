import type { Metadata } from 'next';
import { getProjects } from '@/lib/data';
import { siteConfig } from '@/data/site';
import { ProjectCard } from '@/components/project-card';

export const metadata: Metadata = {
  title: siteConfig.pages.projects.title,
  description: siteConfig.pages.projects.description,
};

export default function ProjectsPage() {
  const projects = getProjects();

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <header className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
          {siteConfig.pages.projects.eyebrow}
        </p>
        <h1 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-3xl">
          {siteConfig.pages.projects.heading}
        </h1>
        <p className="max-w-2xl text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
          {siteConfig.pages.projects.description}
        </p>
      </header>

      {/* Productions Grid */}
      <section aria-label="Productions catalog">
        <ul role="list" className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </ul>
      </section>
    </div>
  );
}
