'use client';

import Link, { LinkProps } from 'next/link';
import { usePageTransition } from '@/components/page-transition';

interface TransitionLinkProps extends LinkProps {
  children: React.ReactNode;
  className?: string;
  'aria-label'?: string;
  'aria-current'?: 'page' | 'step' | 'location' | 'date' | 'time' | boolean;
}

export function TransitionLink({
  href,
  children,
  onClick,
  ...rest
}: TransitionLinkProps) {
  const { navigateWithTransition } = usePageTransition();

  return (
    <Link
      href={href}
      onClick={(e) => {
        onClick?.(e);
        if (
          !e.defaultPrevented &&
          !e.metaKey &&
          !e.ctrlKey &&
          !e.altKey &&
          !e.shiftKey &&
          e.button === 0 &&
          typeof href === 'string' &&
          href.startsWith('/')
        ) {
          e.preventDefault();
          navigateWithTransition(href);
        }
      }}
      {...rest}
    >
      {children}
    </Link>
  );
}
