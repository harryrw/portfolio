import { Disc3, ExternalLink, Film, Gamepad2, Play, Star } from 'lucide-react';
import type { MediaEntry } from '@/types/portfolio';

function getMediaSubtitle(entry: MediaEntry): string {
  switch (entry.category) {
    case 'watching':
      return `${entry.format} · ${entry.director} (${entry.releaseYear})`;
    case 'playing':
      return `${entry.platform} · ${entry.developer} · ${entry.status}`;
    case 'listening':
      return `${entry.format} · ${entry.artist} (${entry.releaseYear})`;
  }
}

function CategoryIcon({ category }: { category: MediaEntry['category'] }) {
  switch (category) {
    case 'watching':
      return <Film className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />;
    case 'playing':
      return <Gamepad2 className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />;
    case 'listening':
      return <Disc3 className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />;
  }
}

export function MediaCard({ entry }: { entry: MediaEntry }) {
  return (
    <li className="group flex flex-col justify-between overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-emerald-300 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-emerald-700/60">
      <div>
        {/* Iconic Frame / Visual Cover */}
        {entry.coverImage && (
          <div className="relative aspect-video w-full overflow-hidden border-b border-zinc-100 bg-zinc-950 dark:border-zinc-800">
            <img
              src={entry.coverImage}
              alt={`${entry.title} iconic frame`}
              width={640}
              height={360}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
            <div className="absolute right-3 bottom-2.5 left-3 flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 rounded-md bg-white/95 px-2 py-0.5 text-xs font-medium text-zinc-900 capitalize shadow-xs backdrop-blur-xs dark:bg-zinc-900/90 dark:text-zinc-100">
                <CategoryIcon category={entry.category} />
                <span>{entry.category}</span>
              </span>
              <span
                className="inline-flex items-center gap-1 rounded-md bg-black/75 px-2 py-0.5 text-xs font-semibold text-amber-400 backdrop-blur-xs"
                aria-label={`Rated ${entry.rating} out of 5 stars`}
              >
                <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" aria-hidden="true" />
                <span>{entry.rating}/5</span>
              </span>
            </div>
          </div>
        )}

        <div className="p-5">
          <h3 className="text-base font-semibold text-zinc-900 transition-colors group-hover:text-emerald-600 dark:text-zinc-100 dark:group-hover:text-emerald-400">
            {entry.title}
          </h3>
          <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
            {getMediaSubtitle(entry)}
          </p>
          {entry.reviewTitle && (
            <p className="mt-3 text-sm font-medium text-zinc-800 dark:text-zinc-200">
              {entry.reviewTitle}
            </p>
          )}
          <p className="mt-1.5 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
            {entry.reviewBody}
          </p>
        </div>
      </div>

      <div className="space-y-3 px-5 pb-5">
        {entry.youtubeUrl && (
          <a
            href={entry.youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-emerald-200 bg-emerald-50/80 px-3 py-2 text-xs font-semibold text-emerald-800 transition-colors hover:bg-emerald-600 hover:text-white dark:border-emerald-800/60 dark:bg-emerald-950/50 dark:text-emerald-300 dark:hover:bg-emerald-600 dark:hover:text-white"
          >
            <Play className="h-3.5 w-3.5 fill-current" aria-hidden="true" />
            <span>{entry.youtubeLabel ?? 'Watch on YouTube'}</span>
            <ExternalLink className="h-3 w-3 opacity-75" aria-hidden="true" />
          </a>
        )}

        <ul
          role="list"
          className="flex flex-wrap gap-1.5 border-t border-zinc-100 pt-3 dark:border-zinc-800/80"
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
      </div>
    </li>
  );
}
