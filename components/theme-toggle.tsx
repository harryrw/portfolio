'use client';

import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { siteConfig } from '@/data/site';

export function ThemeToggle() {
  const [isDark, setIsDark] = useState<boolean>(false);
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
    const root = document.documentElement;
    const hasDark = root.classList.contains('dark');
    setIsDark(hasDark);

    const handleStorage = (e: StorageEvent) => {
      if (e.key === 'color-scheme') {
        const nextDark = e.newValue === 'dark';
        setIsDark(nextDark);
        root.classList.toggle('dark', nextDark);
        const meta = document.querySelector('meta[name="color-scheme"]');
        if (meta) meta.setAttribute('content', e.newValue || 'light dark');
      }
    };

    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, []);

  const toggleTheme = () => {
    const nextDark = !isDark;
    setIsDark(nextDark);
    const root = document.documentElement;
    root.classList.toggle('dark', nextDark);

    const schemeValue = nextDark ? 'dark' : 'light';
    try {
      localStorage.setItem('color-scheme', schemeValue);
    } catch {
      // localStorage may fail in restricted/private sandboxes
    }

    const meta = document.querySelector('meta[name="color-scheme"]');
    if (meta) {
      meta.setAttribute('content', schemeValue);
    }
  };

  const label = isDark
    ? siteConfig.themeToggleLightLabel
    : siteConfig.themeToggleDarkLabel;

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={label}
      title={label}
      className="group relative inline-flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-200 bg-white p-2 text-zinc-600 transition-colors hover:border-emerald-300 hover:bg-emerald-50 hover:text-emerald-700 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:border-emerald-600/50 dark:hover:bg-zinc-800 dark:hover:text-emerald-400"
    >
      {mounted ? (
        isDark ? (
          <Sun className="h-4 w-4 transition-transform group-hover:rotate-45" aria-hidden="true" />
        ) : (
          <Moon className="h-4 w-4 transition-transform group-hover:-rotate-12" aria-hidden="true" />
        )
      ) : (
        <span className="h-4 w-4" aria-hidden="true" />
      )}
      <span className="sr-only">{label}</span>
    </button>
  );
}
