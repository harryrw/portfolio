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
    stars: true,
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

          <svg viewBox="0 0 200 200" className="absolute inset-0 h-full w-full pointer-events-none" preserveAspectRatio="none">
            {current.stars && (
              <g fill="#ffffff" opacity="0.65">
                <circle cx="35" cy="45" r="1.5" />
                <circle cx="160" cy="50" r="1.2" />
                <circle cx="140" cy="85" r="1" />
                <circle cx="65" cy="75" r="1.5" />
              </g>
            )}
            <path d="M-10 160 Q 50 110, 110 145 T 210 150 L 210 200 L -10 200 Z" fill={current.mountainBack} opacity="0.75" />
            <path d="M-10 175 Q 80 140, 160 165 T 220 180 L 220 200 L -10 200 Z" fill={current.mountainFront} opacity="0.9" />
            <rect x="0" y="185" width="200" height="20" fill={current.ground} />
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