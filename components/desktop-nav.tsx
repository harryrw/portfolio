'use client';

import {
  useState,
  useRef,
  useCallback,
  useLayoutEffect,
  useEffect,
} from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { siteConfig } from '@/data/site';
import { usePageTransition } from '@/components/page-transition';

function getActiveHref(path: string): string {
  if (path === '/') return '/';
  const match = siteConfig.navItems.find(
    (item) => item.href !== '/' && path.startsWith(item.href)
  );
  return match ? match.href : (path === '/' ? '/' : '');
}

export function DesktopNav() {
  const pathname = usePathname();
  const { navigateWithTransition } = usePageTransition();

  const [activeHref, setActiveHref] = useState(() => getActiveHref(pathname));
  const [isReady, setIsReady] = useState(false);
  const [pillStyle, setPillStyle] = useState({
    left: 0,
    top: 0,
    width: 0,
    height: 0,
    opacity: 0,
  });

  const navRef = useRef<HTMLUListElement | null>(null);
  const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({});

  const updatePill = useCallback(() => {
    const activeEl = linkRefs.current[activeHref];
    const navEl = navRef.current;
    if (!activeEl || !navEl) {
      setPillStyle((prev) => ({ ...prev, opacity: 0 }));
      return;
    }

    setPillStyle({
      left: activeEl.offsetLeft,
      top: activeEl.offsetTop,
      width: activeEl.offsetWidth,
      height: activeEl.offsetHeight,
      opacity: 1,
    });
    setIsReady(true);
  }, [activeHref]);

  useEffect(() => {
    setActiveHref(getActiveHref(pathname));
  }, [pathname]);

  useLayoutEffect(() => {
    updatePill();
  }, [updatePill]);

  useEffect(() => {
    window.addEventListener('resize', updatePill);
    return () => window.removeEventListener('resize', updatePill);
  }, [updatePill]);

  return (
    <nav aria-label={siteConfig.navAriaLabel} className="hidden md:block">
      <ul ref={navRef} className="relative flex items-center gap-1">
        {/* Sliding green highlight pill */}
        <li
          aria-hidden="true"
          className={`pointer-events-none absolute rounded-md bg-emerald-50 dark:bg-emerald-950/60 ${
            isReady
              ? 'transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]'
              : 'transition-opacity duration-150'
          }`}
          style={{
            transform: `translate3d(${pillStyle.left}px, ${pillStyle.top}px, 0)`,
            width: `${pillStyle.width}px`,
            height: `${pillStyle.height}px`,
            opacity: pillStyle.opacity,
          }}
        />

        {siteConfig.navItems.map((item) => {
          const isActive = item.href === activeHref;

          return (
            <li key={item.href} className="relative z-10">
              <Link
                href={item.href}
                ref={(el) => {
                  linkRefs.current[item.href] = el;
                }}
                aria-current={isActive ? 'page' : undefined}
                onClick={(e) => {
                  if (
                    !e.metaKey &&
                    !e.ctrlKey &&
                    !e.altKey &&
                    !e.shiftKey &&
                    e.button === 0
                  ) {
                    e.preventDefault();
                    setActiveHref(item.href);
                    navigateWithTransition(item.href);
                  }
                }}
                className={`inline-flex min-h-9 items-center rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${
                  !isReady && isActive
                    ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300'
                    : isActive
                      ? 'text-emerald-700 dark:text-emerald-300'
                      : 'text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100'
                }`}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
