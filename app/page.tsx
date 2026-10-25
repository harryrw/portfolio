import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { getFeaturedProjects, getMediaEntries } from '@/lib/data';
import { siteConfig } from '@/data/site';
import { ProjectCard } from '@/components/project-card';
import { MediaCard } from '@/components/media-card';
import { DynamicAvatar } from '@/components/dynamic-avatar';

export default function HomePage() {
  const projects = getFeaturedProjects();
  const allMedia = getMediaEntries();

  // Exactly one entry from each of the 4 media categories: Film/Show, Game, Book, Music (2x2 grid)
  const latestWatch = allMedia.find((m) => m.category === 'watching');
  const latestPlay = allMedia.find((m) => m.category === 'playing');
  const latestRead = allMedia.find((m) => m.category === 'reading');
  const latestListen = allMedia.find((m) => m.category === 'listening');

  const fourConsumptions = [latestWatch, latestPlay, latestRead, latestListen].filter(
    (e): e is NonNullable<typeof e> => Boolean(e)
  );

  return (
    <div className="space-y-12 sm:space-y-16">
      {/* Hero Section with Stylized Indie-Web Avatar with Dynamic Landscape Background */}
      <section className="animate-fade-up relative overflow-hidden rounded-2xl border border-zinc-200 bg-white p-6 shadow-xs transition-colors dark:border-zinc-800 dark:bg-zinc-900 sm:p-10">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl dark:bg-emerald-500/15"
        />

        <div className="relative grid items-center gap-8 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <h1 className="font-serif text-3xl font-normal tracking-tight text-zinc-900 text-balance leading-[1.15] dark:text-zinc-100 sm:text-4xl lg:text-5xl">
              {siteConfig.hero.heading}
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-zinc-600 text-pretty dark:text-zinc-400 sm:text-lg">
              {siteConfig.hero.summary}
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Link
                href={siteConfig.hero.primaryCta.href}
                className="inline-flex min-h-10 items-center gap-2 rounded-lg bg-emerald-600 px-4 py-2 text-sm font-medium text-white shadow-xs transition-all hover:-translate-y-0.5 hover:bg-emerald-700 dark:bg-emerald-600 dark:hover:bg-emerald-500"
              >
                <span>{siteConfig.hero.primaryCta.label}</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                href={siteConfig.hero.secondaryCta.href}
                className="inline-flex min-h-10 items-center gap-2 rounded-lg border border-zinc-300 bg-white px-4 py-2 text-sm font-medium text-zinc-700 transition-all hover:-translate-y-0.5 hover:bg-zinc-50 hover:text-zinc-900 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:bg-zinc-800 dark:hover:text-white"
              >
                <span>{siteConfig.hero.secondaryCta.label}</span>
              </Link>
            </div>
          </div>

          {/* Stylized Illustrated Avatar with Time-of-Day Dynamic Landscape */}
          <div className="flex justify-center lg:col-span-4">
            <DynamicAvatar />
          </div>
        </div>
      </section>

      {/* Featured Productions Section */}
      <section className="animate-fade-up delay-150 space-y-6">
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

      {/* Consumptions Section - 2x2 Grid with one entry per category */}
      <section className="animate-fade-up delay-225 space-y-6">
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

        <ul role="list" className="grid gap-6 sm:grid-cols-2">
          {fourConsumptions.map((entry) => (
            <MediaCard key={entry.id} entry={entry} />
          ))}
        </ul>
      </section>
    </div>
  );
}
