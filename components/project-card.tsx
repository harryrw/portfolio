import { FolderGit2 } from 'lucide-react';
import { siteConfig } from '@/data/site';
import type { Project } from '@/types/portfolio';

export function ProjectCard({ project }: { project: Project }) {
  return (
    <li className="flex flex-col justify-between rounded-xl border border-zinc-200 bg-white p-6 shadow-xs transition-all hover:border-emerald-300 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-emerald-700/60">
      <div>
        <div className="flex items-center justify-between gap-2">
          <span className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-500 dark:text-zinc-400">
            <FolderGit2 className="h-4 w-4 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
            <time dateTime={project.publishedAt}>{project.publishedAt}</time>
          </span>
          {project.featured && (
            <span className="rounded-full border border-emerald-200/60 bg-emerald-50 px-2.5 py-0.5 text-xs font-medium text-emerald-700 dark:border-emerald-800/60 dark:bg-emerald-950/60 dark:text-emerald-300">
              {siteConfig.sections.featuredBadge}
            </span>
          )}
        </div>
        <h3 className="mt-3 text-lg font-semibold text-zinc-900 dark:text-zinc-100">
          {project.title}
        </h3>
        <p className="mt-1 text-sm font-medium text-zinc-700 dark:text-zinc-300">
          {project.tagline}
        </p>
        <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
          {project.overview}
        </p>
      </div>

      <ul
        role="list"
        className="mt-5 flex flex-wrap gap-1.5 border-t border-zinc-100 pt-4 dark:border-zinc-800/80"
      >
        {project.techStack.map((tech) => (
          <li
            key={`${project.slug}-${tech.name}`}
            className="rounded-md bg-zinc-100 px-2.5 py-1 text-xs font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
          >
            {tech.name}
          </li>
        ))}
      </ul>
    </li>
  );
}
