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
    <div className="space-y-12">
      {/* Page Header */}
      <header className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-xs transition-colors dark:border-zinc-800 dark:bg-zinc-900 sm:p-10">
        <p className="text-xs font-semibold tracking-wider text-emerald-600 uppercase dark:text-emerald-400">
          {siteConfig.pages.projects.eyebrow}
        </p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl">
          {siteConfig.pages.projects.heading}
        </h1>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-zinc-600 dark:text-zinc-400 sm:text-lg">
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
