'use client';

import { useEffect, useState } from 'react';
import { Activity, Radio, Wifi } from 'lucide-react';
import { siteConfig } from '@/data/site';

export function StatusBanner() {
  const [secondsActive, setSecondsActive] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsActive((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatUptime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const remainderSecs = secs % 60;
    return `${mins.toString().padStart(2, '0')}:${remainderSecs.toString().padStart(2, '0')}`;
  };

  return (
    <aside
      aria-label="System telemetry status HUD"
      className="group relative overflow-hidden rounded-xl border border-zinc-200/90 bg-white/80 p-3 shadow-xs backdrop-blur-md transition-all hover:border-emerald-300 dark:border-zinc-800/90 dark:bg-zinc-900/80 dark:hover:border-emerald-700/60"
    >
      <div className="flex flex-wrap items-center justify-between gap-3 text-xs">
        {/* Left: Online Status & Indicator */}
        <div className="flex items-center gap-2.5">
          <span className="relative flex h-2.5 w-2.5">
            <span
              className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"
              aria-hidden="true"
            />
            <span
              className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500"
              aria-hidden="true"
            />
          </span>
          <span className="font-mono font-medium tracking-tight text-zinc-900 dark:text-zinc-100">
            {siteConfig.telemetry.statusLabel}
          </span>
          <span className="hidden font-mono text-zinc-400 dark:text-zinc-600 sm:inline">
            /
          </span>
          <span className="hidden items-center gap-1 font-mono text-zinc-500 dark:text-zinc-400 sm:inline-flex">
            <Radio className="h-3 w-3 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
            <span>{siteConfig.telemetry.region}</span>
          </span>
        </div>

        {/* Center / Right: Live Metrics & Waveform */}
        <div className="flex flex-wrap items-center gap-2">
          {/* Waveform Telemetry Heartbeat */}
          <div
            className="flex items-center gap-1.5 rounded-md border border-zinc-200 bg-zinc-50 px-2 py-0.5 text-zinc-600 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300"
            title="Live telemetry waveform"
          >
            <Activity className="h-3 w-3 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
            <svg
              viewBox="0 0 100 20"
              className="h-3.5 w-16 text-emerald-600 dark:text-emerald-400/80"
              aria-hidden="true"
            >
              <path
                d="M0 10 Q12.5 0 25 10 T50 10 T75 10 T100 10"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <animate
                  attributeName="d"
                  dur="3s"
                  repeatCount="indefinite"
                  values="M0 10 Q12.5 0 25 10 T50 10 T75 10 T100 10;
                          M0 10 Q12.5 20 25 10 T50 10 T75 10 T100 10;
                          M0 10 Q12.5 0 25 10 T50 10 T75 10 T100 10"
                />
              </path>
            </svg>
            <span className="font-mono text-[11px] text-zinc-500 dark:text-zinc-400">
              {formatUptime(secondsActive)}
            </span>
          </div>

          {/* HTTP Status Tag */}
          <span className="inline-flex items-center gap-1 rounded-md border border-emerald-200/80 bg-emerald-50 px-2 py-0.5 font-mono text-[11px] font-medium text-emerald-800 dark:border-emerald-900/60 dark:bg-emerald-950/60 dark:text-emerald-300">
            <Wifi className="h-2.5 w-2.5" aria-hidden="true" />
            <span>{siteConfig.telemetry.httpStatus}</span>
          </span>
        </div>
      </div>
    </aside>
  );
}
