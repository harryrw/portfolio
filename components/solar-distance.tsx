'use client';

import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

/**
 * Calculates astronomical distance from Earth to Sun in km
 * using orbital Keplerian mechanics (mean anomaly & equation of center).
 */
function calculateEarthSunDistanceKm(timeMs: number): number {
  const jd = timeMs / 86400000 + 2440587.5;
  const d = jd - 2451545.0; // Days since J2000.0 epoch
  const g = (357.529 + 0.98560028 * d) % 360; // Mean anomaly of Sun (degrees)
  const gRad = (g * Math.PI) / 180;
  // Distance in Astronomical Units (AU)
  const rAU = 1.00014 - 0.01671 * Math.cos(gRad) - 0.00014 * Math.cos(2 * gRad);
  return rAU * 149597870.7; // 1 AU in km
}

/**
 * Calculates astronomical distance from Earth to Moon in km
 * using periodic perturbation terms from Jean Meeus (Astronomical Algorithms).
 */
function calculateEarthMoonDistanceKm(timeMs: number): number {
  const jd = timeMs / 86400000 + 2440587.5;
  const t = (jd - 2451545.0) / 36525; // Julian centuries from J2000.0

  const toRad = Math.PI / 180;
  const d = ((297.8501921 + 445267.1114034 * t) % 360) * toRad; // Mean elongation
  const m = ((357.5291092 + 35999.0502909 * t) % 360) * toRad; // Sun anomaly
  const mp = ((134.9633964 + 477198.8675055 * t) % 360) * toRad; // Moon anomaly

  let dist = 385000.56;
  dist -= 20905.355 * Math.cos(mp);
  dist -= 3699.111 * Math.cos(2 * d - mp);
  dist -= 2955.968 * Math.cos(2 * d);
  dist -= 569.925 * Math.cos(2 * mp);
  dist += 246.158 * Math.cos(2 * d - 2 * mp);
  dist -= 204.586 * Math.cos(2 * d - m - mp);
  dist -= 170.733 * Math.cos(2 * d + mp);
  dist -= 152.138 * Math.cos(2 * d - m);
  dist += 129.62 * Math.cos(mp - m);
  dist += 108.743 * Math.cos(2 * d - m + mp);

  return dist;
}

export function SolarDistance({
  className,
  isMobile,
}: {
  className?: string;
  isMobile?: boolean;
}) {
  const [sunKm, setSunKm] = useState<number>(() =>
    calculateEarthSunDistanceKm(Date.now())
  );
  const [moonKm, setMoonKm] = useState<number>(() =>
    calculateEarthMoonDistanceKm(Date.now())
  );

  useEffect(() => {
    // Update live orbital measurements every second
    const interval = setInterval(() => {
      const now = Date.now();
      setSunKm(calculateEarthSunDistanceKm(now));
      setMoonKm(calculateEarthMoonDistanceKm(now));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formattedSunKm = Math.round(sunKm).toLocaleString();
  const currentAU = (sunKm / 149597870.7).toFixed(4);
  const formattedMoonKm = Math.round(moonKm).toLocaleString();

  const mobile = isMobile ?? Boolean(className);

  const sunDisplayClass = mobile
    ? 'inline-flex dark:hidden'
    : 'hidden sm:inline-flex dark:hidden';

  const moonDisplayClass = mobile
    ? 'hidden dark:inline-flex'
    : 'hidden dark:sm:inline-flex';

  return (
    <>
      {/* Light Mode: Live Earth-Sun Distance */}
      <div
        aria-label={`Live distance from Earth to the Sun: ${formattedSunKm} kilometers (${currentAU} AU)`}
        title={`Live Earth-Sun Distance: ${formattedSunKm} km (${currentAU} AU). Real-time orbital calculation.`}
        suppressHydrationWarning
        className={`items-center gap-1.5 rounded-lg border border-zinc-200/90 bg-zinc-50/90 px-2.5 py-1 font-mono text-xs shadow-2xs transition-colors ${sunDisplayClass}`}
      >
        <Sun className="h-3.5 w-3.5 shrink-0 text-amber-500 fill-amber-500/20" aria-hidden="true" />
        <span className="font-semibold text-zinc-800" suppressHydrationWarning>
          {formattedSunKm} km
        </span>
        <span className="text-[10px] uppercase tracking-wider text-zinc-600 dark:text-zinc-400">
          from Sun
        </span>
      </div>

      {/* Dark Mode: Live Earth-Moon Distance */}
      <div
        aria-label={`Live distance from Earth to the Moon: ${formattedMoonKm} kilometers`}
        title={`Live Earth-Moon Distance: ${formattedMoonKm} km. Real-time lunar orbital calculation.`}
        suppressHydrationWarning
        className={`items-center gap-1.5 rounded-lg border border-zinc-800/90 bg-zinc-900/90 px-2.5 py-1 font-mono text-xs shadow-2xs transition-colors ${moonDisplayClass}`}
      >
        <Moon className="h-3.5 w-3.5 shrink-0 text-indigo-400 fill-indigo-400/20" aria-hidden="true" />
        <span className="font-semibold text-zinc-200" suppressHydrationWarning>
          {formattedMoonKm} km
        </span>
        <span className="text-[10px] uppercase tracking-wider text-zinc-600 dark:text-zinc-400">
          from Moon
        </span>
      </div>
    </>
  );
}
