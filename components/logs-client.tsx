'use client';

import { useMemo, useState } from 'react';
import { Disc3, Film, Gamepad2, Search, SlidersHorizontal, X } from 'lucide-react';
import type { MediaCategory, MediaEntry } from '@/types/portfolio';
import { siteConfig } from '@/data/site';
import { MediaCard } from '@/components/media-card';

type FilterType = 'all' | MediaCategory;

interface LogsClientProps {
  initialEntries: MediaEntry[];
}

export function LogsClient({ initialEntries }: LogsClientProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');

  const filteredEntries = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return initialEntries.filter((entry) => {
      const matchesCategory =
        activeFilter === 'all' || entry.category === activeFilter;
      const matchesSearch =
        q === '' ||
        entry.title.toLowerCase().includes(q) ||
        (entry.reviewTitle && entry.reviewTitle.toLowerCase().includes(q)) ||
        entry.tags.some((tag) => tag.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [initialEntries, searchQuery, activeFilter]);

  const filterTabs: { id: FilterType; label: string; icon: typeof Film }[] = [
    { id: 'all', label: siteConfig.pages.logs.allTab, icon: SlidersHorizontal },
    { id: 'watching', label: siteConfig.pages.logs.filmsTab, icon: Film },
    { id: 'playing', label: siteConfig.pages.logs.gamesTab, icon: Gamepad2 },
    { id: 'listening', label: siteConfig.pages.logs.musicTab, icon: Disc3 },
  ];

  return (
    <div className="space-y-8">
      {/* Search Bar & Media Filter Tabs */}
      <div className="flex flex-col gap-4 rounded-xl border border-zinc-200 bg-white p-4 shadow-xs dark:border-zinc-800 dark:bg-zinc-900 md:flex-row md:items-center md:justify-between">
        {/* Semantic Search Box */}
        <search className="relative flex-1">
          <label htmlFor="log-search-input" className="sr-only">
            {siteConfig.pages.logs.searchPlaceholder}
          </label>
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-zinc-400">
            <Search className="h-4 w-4" aria-hidden="true" />
          </div>
          <input
            id="log-search-input"
            type="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={siteConfig.pages.logs.searchPlaceholder}
            className="w-full rounded-lg border border-zinc-200 bg-zinc-50 py-2 pr-9 pl-9 text-sm text-zinc-900 transition-colors placeholder:text-zinc-500 focus:border-emerald-500 focus:bg-white focus:outline-none dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-100 dark:placeholder:text-zinc-500 dark:focus:border-emerald-500 dark:focus:bg-zinc-900"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              aria-label="Clear search query"
              className="absolute inset-y-0 right-0 flex items-center pr-3 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200"
            >
              <X className="h-4 w-4" aria-hidden="true" />
            </button>
          )}
        </search>

        {/* Category Filter Pills */}
        <div
          role="radiogroup"
          aria-label="Filter logs by media type"
          className="flex flex-wrap items-center gap-1.5"
        >
          {filterTabs.map((tab) => {
            const Icon = tab.icon;
            const isSelected = activeFilter === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                role="radio"
                aria-checked={isSelected}
                onClick={() => setActiveFilter(tab.id)}
                className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${
                  isSelected
                    ? 'bg-emerald-600 text-white shadow-xs dark:bg-emerald-500 dark:text-zinc-950'
                    : 'border border-zinc-200 bg-zinc-50 text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 dark:border-zinc-700 dark:bg-zinc-800/80 dark:text-zinc-300 dark:hover:bg-zinc-700'
                }`}
              >
                <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Filtered Logs Grid or Empty State */}
      {filteredEntries.length > 0 ? (
        <ul role="list" className="grid gap-6 sm:grid-cols-2">
          {filteredEntries.map((entry) => (
            <MediaCard key={entry.id} entry={entry} />
          ))}
        </ul>
      ) : (
        <div className="rounded-xl border border-dashed border-zinc-300 p-12 text-center dark:border-zinc-700">
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            {siteConfig.pages.logs.noResultsMessage}
          </p>
          <button
            type="button"
            onClick={() => {
              setSearchQuery('');
              setActiveFilter('all');
            }}
            className="mt-3 text-xs font-medium text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300"
          >
            Reset search and filters
          </button>
        </div>
      )}
    </div>
  );
}
