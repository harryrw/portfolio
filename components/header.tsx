'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Code2, Menu, X } from 'lucide-react';
import { siteConfig } from '@/data/site';
import { ThemeToggle } from '@/components/theme-toggle';

export function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-zinc-200/80 bg-white/90 backdrop-blur-md transition-colors dark:border-zinc-800/80 dark:bg-zinc-950/90">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="group inline-flex items-center gap-2.5 text-base font-semibold tracking-tight text-zinc-900 transition-colors hover:text-emerald-600 dark:text-zinc-100 dark:hover:text-emerald-400"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-emerald-200 bg-emerald-50 text-emerald-600 transition-colors group-hover:border-emerald-300 group-hover:bg-emerald-100 dark:border-emerald-800/60 dark:bg-emerald-950/50 dark:text-emerald-400 dark:group-hover:border-emerald-700 dark:group-hover:bg-emerald-900/40">
            <Code2 className="h-4 w-4" aria-hidden="true" />
          </span>
          <span>{siteConfig.name}</span>
          <span className="hidden rounded-full bg-zinc-100 px-2 py-0.5 text-xs font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400 sm:inline-block">
            {siteConfig.role}
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav aria-label={siteConfig.navAriaLabel} className="hidden md:block">
          <ul className="flex items-center gap-1">
            {siteConfig.navItems.map((item) => {
              const isActive =
                item.href === '/'
                  ? pathname === '/'
                  : pathname.startsWith(item.href);

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={isActive ? 'page' : undefined}
                    className={`inline-flex min-h-9 items-center rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300'
                        : 'text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-zinc-100'
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Action Controls: Theme Toggle & Mobile Trigger */}
        <div className="flex items-center gap-2">
          <ThemeToggle />

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-primary-nav"
            aria-label={
              mobileMenuOpen
                ? siteConfig.mobileMenuCloseLabel
                : siteConfig.mobileMenuOpenLabel
            }
            className="inline-flex min-h-9 min-w-9 items-center justify-center rounded-lg border border-zinc-200 bg-white p-2 text-zinc-700 transition-colors hover:bg-zinc-100 hover:text-zinc-900 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-100 md:hidden"
          >
            {mobileMenuOpen ? (
              <X className="h-4 w-4" aria-hidden="true" />
            ) : (
              <Menu className="h-4 w-4" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <nav
          id="mobile-primary-nav"
          aria-label={siteConfig.navAriaLabel}
          className="border-t border-zinc-200 bg-white px-4 py-3 dark:border-zinc-800 dark:bg-zinc-950 sm:px-6 md:hidden"
        >
          <ul className="flex flex-col gap-1">
            {siteConfig.navItems.map((item) => {
              const isActive =
                item.href === '/'
                  ? pathname === '/'
                  : pathname.startsWith(item.href);

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={isActive ? 'page' : undefined}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex min-h-10 items-center rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300'
                        : 'text-zinc-700 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-900 dark:hover:text-zinc-100'
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      )}
    </header>
  );
}
