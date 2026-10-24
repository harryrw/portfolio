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
