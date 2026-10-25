import Link from 'next/link';
import { Compass, Home } from 'lucide-react';
import { siteConfig } from '@/data/site';

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <div className="space-y-6">
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-300/80 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-800 dark:border-emerald-700/60 dark:bg-emerald-950/60 dark:text-emerald-300">
          <Compass className="h-3.5 w-3.5 animate-spin" aria-hidden="true" style={{ animationDuration: '6s' }} />
          <span>Error 404 · Coordinate Lost</span>
        </div>

        <div className="space-y-2">
          <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-5xl">
            Lost in the Orbit
          </h1>
          <p className="mx-auto max-w-md text-sm text-zinc-600 dark:text-zinc-400">
            The page you are looking for has either drifted out of communication range or
            never existed in this solar system.
          </p>
        </div>

        <div className="pt-2">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white shadow-xs transition-colors hover:bg-emerald-700 dark:bg-emerald-600 dark:hover:bg-emerald-500"
          >
            <Home className="h-4 w-4" aria-hidden="true" />
            <span>Return to {siteConfig.title}</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
