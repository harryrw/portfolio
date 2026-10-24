import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { getFeaturedProjects, getMediaEntries } from '@/lib/data';
import { siteConfig } from '@/data/site';
import { ProjectCard } from '@/components/project-card';
import { MediaCard } from '@/components/media-card';

export default function HomePage() {
  const projects = getFeaturedProjects();
  const mediaEntries = getMediaEntries();

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-xs transition-colors dark:border-zinc-800 dark:bg-zinc-900 sm:p-10">
        <p className="text-xs font-semibold tracking-wider text-emerald-600 uppercase dark:text-emerald-400">
          {siteConfig.hero.eyebrow}
        </p>
        <h1 className="mt-3 max-w-3xl text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl">
          {siteConfig.hero.heading}
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-zinc-600 dark:text-zinc-400 sm:text-lg">
          {siteConfig.hero.summary}
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <Link
            href={siteConfig.hero.primaryCta.href}
            className="inline-flex min-h-10 items-center gap-2 rounded-lg bg-emerald-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-emerald-700 dark:bg-emerald-600 dark:hover:bg-emerald-500"
          >
            <span>{siteConfig.hero.primaryCta.label}</span>
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
          <Link
            href={siteConfig.hero.secondaryCta.href}
            className="inline-flex min-h-10 items-center gap-2 rounded-lg border border-zinc-300 bg-white px-4 py-2 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-50 hover:text-zinc-900 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:bg-zinc-800 dark:hover:text-white"
          >
            <span>{siteConfig.hero.secondaryCta.label}</span>
          </Link>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="space-y-6">
        <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
              {siteConfig.sections.projectsHeading}
            </h2>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
              {siteConfig.sections.projectsSubheading}
            </p>
          </div>
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300"
          >
            <span>{siteConfig.sections.viewAllProjectsLabel}</span>
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <ul role="list" className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </ul>
      </section>

      {/* Media Log Section */}
      <section className="space-y-6">
        <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
              {siteConfig.sections.logsHeading}
            </h2>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
              {siteConfig.sections.logsSubheading}
            </p>
          </div>
          <Link
            href="/logs"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300"
          >
            <span>{siteConfig.sections.viewAllLogsLabel}</span>
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <ul role="list" className="grid gap-6 md:grid-cols-3">
          {mediaEntries.map((entry) => (
            <MediaCard key={entry.id} entry={entry} />
          ))}
        </ul>
      </section>
    </div>
  );
}
