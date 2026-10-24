import Link from 'next/link';
import { ArrowRight, Cpu, Layers, Sparkles } from 'lucide-react';
import { getFeaturedProjects, getMediaEntries } from '@/lib/data';
import { siteConfig } from '@/data/site';
import { StatusBanner } from '@/components/StatusBanner';
import { ProjectCard } from '@/components/project-card';
import { MediaCard } from '@/components/media-card';

export default function HomePage() {
  const projects = getFeaturedProjects();
  const mediaEntries = getMediaEntries();

  return (
    <div className="space-y-12 sm:space-y-16">
      {/* Live System Telemetry HUD */}
      <div className="animate-fade-up">
        <StatusBanner />
      </div>

      {/* Hero Section with Ambient Glow & Animated Visual Card */}
      <section className="animate-fade-up delay-75 relative overflow-hidden rounded-2xl border border-zinc-200 bg-white p-6 shadow-xs transition-colors dark:border-zinc-800 dark:bg-zinc-900 sm:p-10">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl dark:bg-emerald-500/15"
        />

        <div className="relative grid items-center gap-8 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <p className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider text-emerald-600 uppercase dark:text-emerald-400">
              <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
              <span>{siteConfig.hero.eyebrow}</span>
            </p>
            <h1 className="mt-3 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl">
              {siteConfig.hero.heading}
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-zinc-600 dark:text-zinc-400 sm:text-lg">
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

          {/* Floating Telemetry Architecture Visual */}
          <div className="animate-float hidden lg:col-span-4 lg:block" aria-hidden="true">
            <div className="rounded-xl border border-emerald-200/70 bg-gradient-to-br from-emerald-50/80 via-white to-zinc-50 p-4 shadow-sm dark:border-emerald-900/50 dark:from-emerald-950/40 dark:via-zinc-900 dark:to-zinc-950">
              <div className="flex items-center justify-between border-b border-zinc-200/70 pb-3 dark:border-zinc-800">
                <span className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-emerald-700 dark:text-emerald-400">
                  <Cpu className="h-3.5 w-3.5" />
                  <span>SYS_INDEX.TS</span>
                </span>
                <span className="flex gap-1">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  <span className="h-2 w-2 rounded-full bg-amber-400" />
                </span>
              </div>
              <div className="mt-3 space-y-2.5 font-mono text-xs">
                <div className="flex items-center justify-between rounded-lg bg-white/90 px-3 py-2 text-zinc-700 shadow-2xs dark:bg-zinc-900/90 dark:text-zinc-300">
                  <span className="inline-flex items-center gap-1.5">
                    <Layers className="h-3.5 w-3.5 text-emerald-500" />
                    <span>Case Studies</span>
                  </span>
                  <span className="font-bold text-emerald-600 dark:text-emerald-400">
                    0{projects.length}
                  </span>
                </div>
                <div className="flex items-center justify-between rounded-lg bg-white/90 px-3 py-2 text-zinc-700 shadow-2xs dark:bg-zinc-900/90 dark:text-zinc-300">
                  <span>Media Archive</span>
                  <span className="font-bold text-emerald-600 dark:text-emerald-400">
                    0{mediaEntries.length}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
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

      {/* Media Log Section */}
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
          {mediaEntries.map((entry) => (
            <MediaCard key={entry.id} entry={entry} />
          ))}
        </ul>
      </section>
    </div>
  );
}
