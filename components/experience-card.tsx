import { Calendar } from 'lucide-react';
import type { WorkExperience } from '@/data/resume';

export function ExperienceCard({ job }: { job: WorkExperience }) {
  return (
    <div className="rounded-xl border border-zinc-200 bg-white p-6 shadow-xs transition-colors dark:border-zinc-800 dark:bg-zinc-900">
      <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
        <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
          {job.role}
        </h3>
        <span className="inline-flex items-center gap-1.5 font-mono text-xs text-zinc-500 dark:text-zinc-400">
          <Calendar className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
          <span>{job.period}</span>
        </span>
      </div>
      <p className="mt-1 text-sm font-medium text-emerald-700 dark:text-emerald-400">
        {job.company}
      </p>
      <ul className="mt-4 space-y-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
        {job.highlights.map((item, idx) => (
          <li key={idx} className="flex items-start gap-2">
            <span
              className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500"
              aria-hidden="true"
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
