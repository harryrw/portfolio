import { ExternalLink, FolderGit2 } from 'lucide-react';
import { siteConfig } from '@/data/site';
import type { Project } from '@/types/portfolio';

export function ProjectCard({ project }: { project: Project }) {
  return (
    <li className="group flex flex-col justify-between overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-emerald-300 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-emerald-700/60">
      <div>
        {project.previewImage && (
          <div className="relative aspect-[5/2] w-full overflow-hidden border-b border-zinc-100 bg-zinc-950 dark:border-zinc-800">
            <img
              src={project.previewImage}
              alt={`${project.title} architecture diagram`}
              width={800}
              height={320}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            />
          </div>
        )}

        <div className="p-6">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-500 dark:text-zinc-400">
              <FolderGit2 className="h-4 w-4 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
              <time dateTime={project.publishedAt}>{project.publishedAt}</time>
            </span>
          </div>
          <h3 className="mt-3 text-lg font-semibold text-zinc-900 transition-colors group-hover:text-emerald-600 dark:text-zinc-100 dark:group-hover:text-emerald-400">
            {project.title}
          </h3>
          <p className="mt-1 text-sm font-medium text-zinc-700 dark:text-zinc-300">
            {project.tagline}
          </p>
          <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
            {project.overview}
          </p>
        </div>
      </div>

      <div className="space-y-3 px-6 pb-6">
        {project.links.github && (
          <div className="flex items-center gap-3 text-xs font-medium">
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-emerald-700 hover:text-emerald-800 dark:text-emerald-400 dark:hover:text-emerald-300"
            >
              <span>Source Code</span>
              <ExternalLink className="h-3 w-3" aria-hidden="true" />
            </a>
          </div>
        )}
        <ul
          role="list"
          className="flex flex-wrap gap-1.5 border-t border-zinc-100 pt-4 dark:border-zinc-800/80"
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
      </div>
    </li>
  );
}
