import type { Metadata } from 'next';
import { getMediaEntries } from '@/lib/data';
import { siteConfig } from '@/data/site';
import { LogsClient } from '@/components/logs-client';

export const metadata: Metadata = {
  title: siteConfig.pages.logs.title,
  description: siteConfig.pages.logs.description,
};

export default function LogsPage() {
  const entries = getMediaEntries();

  return (
    <div className="space-y-12">
      {/* Page Header */}
      <header className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-xs transition-colors dark:border-zinc-800 dark:bg-zinc-900 sm:p-10">
        <p className="text-xs font-semibold tracking-wider text-emerald-600 uppercase dark:text-emerald-400">
          {siteConfig.pages.logs.eyebrow}
        </p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl">
          {siteConfig.pages.logs.heading}
        </h1>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-zinc-600 dark:text-zinc-400 sm:text-lg">
          {siteConfig.pages.logs.description}
        </p>
      </header>

      {/* Consumptions Interactive Search & Filter View */}
      <section aria-label="Consumptions archive">
        <LogsClient initialEntries={entries} />
      </section>
    </div>
  );
}
