import { siteConfig } from '@/data/site';

export function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-white transition-colors dark:border-zinc-800 dark:bg-zinc-950">
      <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-2 px-4 py-8 text-sm text-zinc-600 dark:text-zinc-400 sm:flex-row sm:items-center sm:px-6 lg:px-8">
        <p>{siteConfig.footer.copyright}</p>
        <p className="text-zinc-500 dark:text-zinc-500">{siteConfig.footer.builtWith}</p>
      </div>
    </footer>
  );
}
