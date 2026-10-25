'use client';

import React, {
  createContext,
  useContext,
  useRef,
  useCallback,
  useEffect,
} from 'react';
import { usePathname, useRouter } from 'next/navigation';

export const ROUTE_INDEXES: Record<string, number> = {
  '/': 0,
  '/projects': 1,
  '/logs': 2,
  '/about': 3,
};

interface PageTransitionContextType {
  navigateWithTransition: (href: string) => void;
}

const PageTransitionContext = createContext<PageTransitionContextType>({
  navigateWithTransition: () => {},
});

export function usePageTransition() {
  return useContext(PageTransitionContext);
}

export function PageTransitionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const pendingResolveRef = useRef<(() => void) | null>(null);

  // When pathname changes, resolve any pending view transition callback
  useEffect(() => {
    if (pendingResolveRef.current) {
      pendingResolveRef.current();
      pendingResolveRef.current = null;
    }
  }, [pathname]);

  const navigateWithTransition = useCallback(
    (targetHref: string) => {
      if (targetHref === pathname) return;

      const currentIndex = ROUTE_INDEXES[pathname] ?? 0;
      const targetIndex = ROUTE_INDEXES[targetHref] ?? 0;
      const direction = targetIndex >= currentIndex ? 'forward' : 'backward';

      const prefersReducedMotion =
        typeof window !== 'undefined' &&
        window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      // Fallback for browsers without View Transitions or users preferring reduced motion
      if (
        typeof document === 'undefined' ||
        !('startViewTransition' in document) ||
        prefersReducedMotion
      ) {
        router.push(targetHref);
        return;
      }

      document.documentElement.classList.add(`transition-${direction}`);

      let safetyTimeout: ReturnType<typeof setTimeout> | null = null;

      const transitionPromise = new Promise<void>((resolve) => {
        pendingResolveRef.current = () => {
          if (safetyTimeout) clearTimeout(safetyTimeout);
          resolve();
        };

        safetyTimeout = setTimeout(() => {
          if (pendingResolveRef.current) {
            pendingResolveRef.current();
            pendingResolveRef.current = null;
          }
        }, 1500);

        React.startTransition(() => {
          router.push(targetHref);
        });
      });

      const cleanup = () => {
        document.documentElement.classList.remove(
          'transition-forward',
          'transition-backward'
        );
        // Accessibility routing: preserve logical focus on main view container
        document.getElementById('content')?.focus();
      };

      try {
        const transition = (document as unknown as {
          startViewTransition: (options: {
            update: () => Promise<void>;
            types?: string[];
          }) => { finished: Promise<void> };
        }).startViewTransition({
          update: () => transitionPromise,
          types: [direction],
        });
        transition.finished.finally(cleanup);
      } catch {
        const transition = (document as unknown as {
          startViewTransition: (cb: () => Promise<void>) => {
            finished: Promise<void>;
          };
        }).startViewTransition(() => transitionPromise);
        transition.finished.finally(cleanup);
      }
    },
    [pathname, router]
  );

  return (
    <PageTransitionContext.Provider value={{ navigateWithTransition }}>
      {children}
    </PageTransitionContext.Provider>
  );
}
