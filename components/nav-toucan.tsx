'use client';

import Image from 'next/image';
import Link from 'next/link';

export function NavToucan() {
  return (
    <Link
      href="/"
      aria-label="Home"
      className="group relative flex h-10 w-10 items-center justify-center rounded-full p-0.5 transition-transform duration-300 hover:scale-105"
    >
      <div className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-full border border-emerald-300/80 shadow-2xs transition-all duration-300 group-hover:border-emerald-500 group-hover:shadow-xs dark:border-emerald-700/60">
        {/* Light Mode Jungle Sky */}
        <div className="absolute inset-0 bg-gradient-to-b from-sky-300 via-amber-100 to-emerald-400 dark:hidden">
          <div className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-amber-300 shadow-[0_0_8px_rgba(251,191,36,0.8)]" />
          <svg viewBox="0 0 40 40" className="absolute inset-0 h-full w-full pointer-events-none" preserveAspectRatio="none">
            <path d="M 0 35 Q 12 24, 25 36 T 40 33 L 40 40 L 0 40 Z" fill="#047857" opacity="0.85" />
            <path d="M 0 37 Q 20 28, 40 36 L 40 40 L 0 40 Z" fill="#065f46" />
          </svg>
        </div>

        {/* Dark Mode Night Sky with Stars & Moon */}
        <div className="absolute inset-0 hidden bg-gradient-to-b from-indigo-950 via-slate-900 to-zinc-950 dark:block">
          <svg viewBox="0 0 40 40" className="absolute inset-0 h-full w-full pointer-events-none">
            <circle cx="8" cy="8" r="0.75" fill="#fef08a" opacity="0.9" />
            <circle cx="32" cy="10" r="0.6" fill="#ffffff" opacity="0.8" />
            <circle cx="12" cy="28" r="0.6" fill="#ffffff" opacity="0.7" />
            <circle cx="30" cy="26" r="0.75" fill="#fef08a" opacity="0.85" />
          </svg>
          <div className="absolute top-1 right-1.5 h-2 w-2 rounded-full bg-amber-100 shadow-[0_0_4px_rgba(254,243,199,0.8)]" />
        </div>

        {/* Clean Toucan Icon */}
        <Image
          src="/images/toucan-clean.png"
          alt="Toucan logo"
          width={34}
          height={34}
          className="relative h-7 w-7 object-contain transition-transform duration-300 group-hover:scale-110"
        />
      </div>
    </Link>
  );
}