'use client';

import { useEffect, useState } from 'react';

type TimeOfDay = 'sunrise' | 'midday' | 'sunset' | 'night';

interface LandscapeTheme {
  name: TimeOfDay;
  label: string;
  skyGradient: string;
  sunColor: string;
  sunPos: string;
  mountainBack: string;
  mountainFront: string;
  ground: string;
  stars?: boolean;
}

const THEMES: Record<TimeOfDay, LandscapeTheme> = {
  sunrise: {
    name: 'sunrise',
    label: 'Dawn',
    skyGradient: 'from-amber-200 via-rose-300 to-indigo-400',
    sunColor: 'bg-amber-100 shadow-[0_0_24px_rgba(251,191,36,0.8)]',
    sunPos: 'bottom-10 left-12 h-14 w-14',
    mountainBack: '#9370db',
    mountainFront: '#6a5acd',
    ground: '#e9a180',
  },
  midday: {
    name: 'midday',
    label: 'Day',
    skyGradient: 'from-sky-300 via-cyan-200 to-emerald-200',
    sunColor: 'bg-amber-300 shadow-[0_0_30px_rgba(253,224,71,0.9)]',
    sunPos: 'top-6 right-10 h-16 w-16',
    mountainBack: '#6ee7b7',
    mountainFront: '#10b981',
    ground: '#059669',
  },
  sunset: {
    name: 'sunset',
    label: 'Dusk',
    skyGradient: 'from-amber-400 via-rose-500 to-purple-800',
    sunColor: 'bg-amber-200 shadow-[0_0_28px_rgba(251,146,60,0.85)]',
    sunPos: 'bottom-8 right-12 h-16 w-16',
    mountainBack: '#7e22ce',
    mountainFront: '#4c1d95',
    ground: '#3b0764',
  },
  night: {
    name: 'night',
    label: 'Night',
    skyGradient: 'from-slate-900 via-indigo-950 to-zinc-950',
    sunColor: 'bg-amber-50 shadow-[0_0_20px_rgba(254,243,199,0.7)]',
    sunPos: 'top-6 left-10 h-12 w-12',
    mountainBack: '#1e1b4b',
    mountainFront: '#0f172a',
    ground: '#090d16',
  },
};

export function DynamicAvatar() {
  const [timeOfDay, setTimeOfDay] = useState<TimeOfDay>('midday');
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 9) setTimeOfDay('sunrise');
    else if (hour >= 9 && hour < 17) setTimeOfDay('midday');
    else if (hour >= 17 && hour < 20) setTimeOfDay('sunset');
    else setTimeOfDay('night');
  }, []);

  const current = THEMES[timeOfDay];

  return (
    <div className="flex items-center justify-center">
      <div className="group relative flex h-48 w-48 sm:h-56 sm:w-56 items-center justify-center">
        <div
          aria-hidden="true"
          className="absolute -inset-2 rounded-full bg-gradient-to-tr from-emerald-500/25 via-emerald-400/20 to-teal-500/25 blur-md transition duration-500 group-hover:scale-105"
        />

        <div className="relative h-full w-full overflow-hidden rounded-full border-4 border-white shadow-md dark:border-zinc-800">
          <div className={`absolute inset-0 bg-gradient-to-b ${current.skyGradient} transition-all duration-700`} />
          <div className={`absolute rounded-full transition-all duration-700 ${current.sunPos} ${current.sunColor}`} />

          {/* Continuous Vector Landscape Backing */}
          <svg viewBox="0 0 200 200" className="absolute inset-0 h-full w-full pointer-events-none" preserveAspectRatio="none">
            {/* Distant Rolling Mountains */}
            <path
              d="M-20 135 Q 40 85, 100 115 T 220 120 L 220 220 L -20 220 Z"
              fill={current.mountainBack}
              opacity="0.8"
            />
            {/* Midground Rolling Hills - Extends up to shoulder/neck height */}
            <path
              d="M-20 150 Q 60 110, 140 135 T 220 145 L 220 220 L -20 220 Z"
              fill={current.mountainFront}
              opacity="0.95"
            />
            {/* Solid Foreground Ground Layer filling the bottom half */}
            <rect x="0" y="160" width="200" height="40" fill={current.ground} />
          </svg>

          <img
            src="/images/avatar-char.png"
            alt="Stylized portrait of Harry"
            width={220}
            height={220}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
}