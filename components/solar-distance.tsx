'use client';

import { useEffect, useState } from 'react';
import { Sun } from 'lucide-react';

/**
 * Calculates the astronomical distance from Earth to the Sun in kilometers
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

export function SolarDistance({ className }: { className?: string }) {
  const [distanceKm, setDistanceKm] = useState<number>(() =>
    calculateEarthSunDistanceKm(Date.now())
  );

  useEffect(() => {
    // Update live measurement every second
    const interval = setInterval(() => {
      setDistanceKm(calculateEarthSunDistanceKm(Date.now()));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formattedKm = Math.round(distanceKm).toLocaleString();
  const currentAU = (distanceKm / 149597870.7).toFixed(4);

  return (
    <div
      aria-label={`Live distance from Earth to the Sun: ${formattedKm} kilometers (${currentAU} AU)`}
      title={`Live Earth-Sun Distance: ${formattedKm} km (${currentAU} AU). Real-time orbital mechanics calculation.`}
      suppressHydrationWarning
      className={`items-center gap-1.5 rounded-lg border border-zinc-200/90 bg-zinc-50/90 px-2.5 py-1 font-mono text-xs shadow-2xs transition-colors dark:border-zinc-800/90 dark:bg-zinc-900/90 ${className ?? 'hidden sm:inline-flex'}`}
    >
      <Sun className="h-3.5 w-3.5 shrink-0 text-amber-500 fill-amber-500/20" aria-hidden="true" />
      <span className="font-semibold text-zinc-800 dark:text-zinc-200" suppressHydrationWarning>
        {formattedKm} km
      </span>
      <span className="text-[10px] uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
        to Sun
      </span>
    </div>
  );
}
