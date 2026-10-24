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
      {/* Consumptions Interactive Search & Filter View */}
      <section aria-label="Consumptions archive">
        <LogsClient initialEntries={entries} />
      </section>
    </div>
  );
}
