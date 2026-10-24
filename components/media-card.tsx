import { Disc3, Film, Gamepad2, Star } from 'lucide-react';
import type { MediaEntry } from '@/types/portfolio';

function getMediaSubtitle(entry: MediaEntry): string {
  switch (entry.category) {
    case 'watching':
      return `${entry.format} · Directed by ${entry.director} (${entry.releaseYear})`;
    case 'playing':
      return `${entry.platform} · ${entry.developer} · ${entry.status}`;
    case 'listening':
      return `${entry.format} · ${entry.artist} (${entry.releaseYear})`;
  }
}

function CategoryIcon({ category }: { category: MediaEntry['category'] }) {
  switch (category) {
    case 'watching':
      return <Film className="h-4 w-4 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />;
    case 'playing':
      return <Gamepad2 className="h-4 w-4 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />;
    case 'listening':
      return <Disc3 className="h-4 w-4 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />;
  }
}

export function MediaCard({ entry }: { entry: MediaEntry }) {
  return (
    <li className="flex flex-col justify-between rounded-xl border border-zinc-200 bg-white p-5 shadow-xs transition-all hover:border-emerald-300 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-emerald-700/60">
      <div>
        <div className="flex items-center justify-between gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-md bg-zinc-100 px-2 py-1 text-xs font-medium text-zinc-700 capitalize dark:bg-zinc-800 dark:text-zinc-300">
            <CategoryIcon category={entry.category} />
            <span>{entry.category}</span>
          </span>
          <span
            className="inline-flex items-center gap-1 text-xs font-semibold text-amber-700 dark:text-amber-400"
            aria-label={`Rated ${entry.rating} out of 5 stars`}
          >
            <Star
              className="h-3.5 w-3.5 fill-amber-400 text-amber-500 dark:fill-amber-400/90 dark:text-amber-400"
              aria-hidden="true"
            />
            <span>{entry.rating}/5</span>
          </span>
        </div>
        <h3 className="mt-3 text-base font-semibold text-zinc-900 dark:text-zinc-100">
          {entry.title}
        </h3>
        <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">{getMediaSubtitle(entry)}</p>
        {entry.reviewTitle && (
          <p className="mt-3 text-sm font-medium text-zinc-800 dark:text-zinc-200">
            {entry.reviewTitle}
          </p>
        )}
        <p className="mt-1.5 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
          {entry.reviewBody}
        </p>
      </div>

      <ul
        role="list"
        className="mt-4 flex flex-wrap gap-1.5 border-t border-zinc-100 pt-3 dark:border-zinc-800/80"
      >
        {entry.tags.map((tag) => (
          <li
            key={`${entry.id}-${tag}`}
            className="rounded-md bg-zinc-100 px-2 py-0.5 text-xs text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"
          >
            {tag}
          </li>
        ))}
      </ul>
    </li>
  );
}
