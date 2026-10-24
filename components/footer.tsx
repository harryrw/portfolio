import { Heart } from 'lucide-react';
import { siteConfig } from '@/data/site';

export function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-white transition-colors dark:border-zinc-800 dark:bg-zinc-950">
      <div className="mx-auto flex max-w-5xl items-center justify-center px-4 py-8 text-sm sm:px-6 lg:px-8">
        <p className="inline-flex items-center gap-1.5 text-zinc-500 transition-colors hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-200">
          <span>Built with</span>
          <Heart className="h-3.5 w-3.5 fill-rose-500 text-rose-500 animate-pulse" aria-hidden="true" />
          <span>love</span>
        </p>
      </div>
    </footer>
  );
}
