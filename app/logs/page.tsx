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
    <div className="space-y-8">
      {/* Page Header */}
      <header className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
          {siteConfig.pages.logs.eyebrow}
        </p>
        <h1 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-3xl">
          {siteConfig.pages.logs.heading}
        </h1>
        <p className="max-w-2xl text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
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
