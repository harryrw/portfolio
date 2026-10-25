'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Moon, Sun, Sunrise, Sunset } from 'lucide-react';

type TimeOfDay = 'sunrise' | 'midday' | 'sunset' | 'night';
const ORDER: TimeOfDay[] = ['sunrise', 'midday', 'sunset', 'night'];

interface LandscapeTheme {
  name: TimeOfDay;
  label: string;
  icon: typeof Sun;
  skyGradient: string;
  sunColor: string;
  sunPos: string;
  mountainBack: string;
  mountainFront: string;
  ground: string;
}

const THEMES: Record<TimeOfDay, LandscapeTheme> = {
  sunrise: {
    name: 'sunrise',
    label: 'Dawn',
    icon: Sunrise,
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
    icon: Sun,
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
    icon: Sunset,
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
    icon: Moon,
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

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 9) setTimeOfDay('sunrise');
    else if (hour >= 9 && hour < 17) setTimeOfDay('midday');
    else if (hour >= 17 && hour < 20) setTimeOfDay('sunset');
    else setTimeOfDay('night');
  }, []);

  const cycleTheme = () => {
    setTimeOfDay((prev) => ORDER[(ORDER.indexOf(prev) + 1) % ORDER.length]);
  };

  const current = THEMES[timeOfDay];
  const Icon = current.icon;

  return (
    <div className="flex flex-col items-center justify-center">
      <button
        type="button"
        onClick={cycleTheme}
        aria-label={`Time of day theme: ${current.label}. Click to cycle theme`}
        title={`Theme: ${current.label} (click to cycle)`}
        className="group relative flex h-48 w-48 sm:h-56 sm:w-56 cursor-pointer items-center justify-center rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-zinc-950"
      >
        <div
          aria-hidden="true"
          className="absolute -inset-2 rounded-full bg-gradient-to-tr from-emerald-500/25 via-emerald-400/20 to-teal-500/25 blur-md transition duration-500 group-hover:scale-105"
        />

        <div className="relative h-full w-full overflow-hidden rounded-full border-4 border-white shadow-md transition-transform duration-300 group-hover:scale-[1.02] dark:border-zinc-800">
          <div className={`absolute inset-0 bg-gradient-to-b ${current.skyGradient} transition-all duration-700`} />
          <div className={`absolute rounded-full transition-all duration-700 ${current.sunPos} ${current.sunColor}`} />

          <svg viewBox="0 0 200 200" className="absolute inset-0 h-full w-full pointer-events-none" preserveAspectRatio="none">
            <g className={`transition-opacity duration-700 ${timeOfDay === 'night' ? 'opacity-100' : 'opacity-0'}`}>
              <circle cx="35" cy="22" r="1.2" fill="#ffffff" opacity="0.85" />
              <circle cx="55" cy="42" r="0.9" fill="#fef08a" opacity="0.9" />
              <circle cx="85" cy="18" r="1.4" fill="#ffffff" opacity="0.9" />
              <circle cx="115" cy="32" r="0.8" fill="#ffffff" opacity="0.75" />
              <circle cx="145" cy="18" r="1.3" fill="#fef08a" opacity="0.85" />
              <circle cx="168" cy="44" r="1.0" fill="#ffffff" opacity="0.8" />
              <circle cx="178" cy="26" r="0.8" fill="#ffffff" opacity="0.7" />
              <circle cx="28" cy="50" r="0.9" fill="#fef08a" opacity="0.8" />
              <circle cx="132" cy="48" r="1.1" fill="#ffffff" opacity="0.85" />
              <path d="M 62 25 Q 62 29 66 29 Q 62 29 62 33 Q 62 29 58 29 Q 62 29 62 25 Z" fill="#ffffff" opacity="0.9" />
              <path d="M 152 38 Q 152 41 155 41 Q 152 41 152 44 Q 152 41 149 41 Q 152 41 152 38 Z" fill="#fef08a" opacity="0.95" />
            </g>
            <path d="M-20 135 Q 40 85, 100 115 T 220 120 L 220 220 L -20 220 Z" fill={current.mountainBack} opacity="0.8" />
            <path d="M-20 150 Q 60 110, 140 135 T 220 145 L 220 220 L -20 220 Z" fill={current.mountainFront} opacity="0.95" />
            <rect x="0" y="160" width="200" height="40" fill={current.ground} />
          </svg>

          <Image
            src="/images/avatar-char.png"
            alt="Stylized portrait of Harry"
            width={220}
            height={220}
            priority
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        <span className="absolute -bottom-2 z-10 inline-flex items-center gap-1.5 rounded-full border border-zinc-200/90 bg-white/95 px-2.5 py-0.5 text-[11px] font-medium text-zinc-700 shadow-xs backdrop-blur-xs transition-all duration-200 group-hover:scale-105 group-hover:border-emerald-400 group-hover:text-emerald-700 dark:border-zinc-700/80 dark:bg-zinc-900/95 dark:text-zinc-300 dark:group-hover:border-emerald-500 dark:group-hover:text-emerald-400">
          <Icon className="h-3 w-3 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
          <span>{current.label}</span>
        </span>
      </button>
    </div>
  );
}
