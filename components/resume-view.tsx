import {
  Briefcase,
  Code2,
  Download,
  ExternalLink,
  GraduationCap,
  Mail,
  MapPin,
} from 'lucide-react';
import { resumeData } from '@/data/resume';
import { siteConfig } from '@/data/site';
import { ExperienceCard } from '@/components/experience-card';

export function ResumeView() {
  return (
    <article className="space-y-12 animate-fade-up delay-75">
      {/* Profile Overview & Quick Actions */}
      <section className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-xs transition-all hover:border-emerald-300/80 dark:border-zinc-800 dark:bg-zinc-900 sm:p-10">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-start">
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
              {siteConfig.pages.about.eyebrow}
            </p>
            <h1 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-3xl">
              {resumeData.fullName}
            </h1>
            <p className="flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400">
              <MapPin className="h-4 w-4 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
              <span>Melbourne, Victoria, Australia</span>
            </p>
            <p className="max-w-2xl text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
              {resumeData.summary}
            </p>
          </div>

          {/* Quick Action Links: Email, GitHub, LinkedIn, Resume */}
          <div className="flex flex-wrap items-center gap-2 pt-1 text-xs md:justify-end">
            <a
              href={`mailto:${resumeData.contact.email}`}
              className="inline-flex h-9 items-center gap-1.5 rounded-lg border border-zinc-200 bg-zinc-50 px-3 font-medium text-zinc-700 transition-colors hover:border-emerald-300 hover:bg-emerald-50 hover:text-emerald-700 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300 dark:hover:border-emerald-700 dark:hover:text-emerald-300"
            >
              <Mail className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
              <span>{resumeData.contact.email}</span>
            </a>
            <a
              href={resumeData.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-9 items-center gap-1.5 rounded-lg border border-zinc-200 bg-zinc-50 px-3 font-medium text-zinc-700 transition-colors hover:border-emerald-300 hover:bg-emerald-50 hover:text-emerald-700 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300 dark:hover:border-emerald-700 dark:hover:text-emerald-300"
            >
              <span>GitHub</span>
              <ExternalLink className="h-3 w-3 opacity-75" aria-hidden="true" />
            </a>
            <a
              href={resumeData.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-9 items-center gap-1.5 rounded-lg border border-zinc-200 bg-zinc-50 px-3 font-medium text-zinc-700 transition-colors hover:border-emerald-300 hover:bg-emerald-50 hover:text-emerald-700 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300 dark:hover:border-emerald-700 dark:hover:text-emerald-300"
            >
              <span>LinkedIn</span>
              <ExternalLink className="h-3 w-3 opacity-75" aria-hidden="true" />
            </a>
            <a
              href={resumeData.contact.pdfDownloadUrl}
              download="Harry_Rogers_Woollett_Resume.pdf"
              className="inline-flex h-9 items-center gap-1.5 rounded-lg border border-zinc-200 bg-zinc-50 px-3 font-medium text-zinc-700 transition-colors hover:border-emerald-300 hover:bg-emerald-50 hover:text-emerald-700 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300 dark:hover:border-emerald-700 dark:hover:text-emerald-300"
            >
              <Download className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
              <span>{siteConfig.pages.about.downloadResumeLabel}</span>
            </a>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="space-y-6" aria-label="Work experience">
        <h2 className="flex items-center gap-2.5 text-xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
          <Briefcase className="h-5 w-5 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
          <span>{siteConfig.pages.about.experienceTitle}</span>
        </h2>

        <div className="space-y-6">
          {resumeData.experience.map((job) => (
            <ExperienceCard key={`${job.company}-${job.role}`} job={job} />
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section className="space-y-4" aria-label="Education background">
        <h2 className="flex items-center gap-2.5 text-xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
          <GraduationCap className="h-5 w-5 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
          <span>{siteConfig.pages.about.educationTitle}</span>
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {resumeData.education.map((edu) => (
            <div
              key={edu.degree}
              className="rounded-xl border border-zinc-200 bg-white p-6 shadow-xs transition-all hover:-translate-y-0.5 hover:border-emerald-300 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-emerald-700/60"
            >
              <div className="flex items-center justify-between gap-2">
                <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
                  {edu.degree}
                </h3>
                <span className="font-mono text-xs text-zinc-500 dark:text-zinc-400">
                  {edu.year}
                </span>
              </div>
              <p className="mt-1 text-sm text-emerald-700 dark:text-emerald-400">
                {edu.institution}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Skills & Technologies Section */}
      <section className="space-y-4" aria-label="Skills and technologies">
        <h2 className="flex items-center gap-2.5 text-xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
          <Code2 className="h-5 w-5 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
          <span>{siteConfig.pages.about.skillsTitle}</span>
        </h2>
        <div className="grid gap-4 sm:grid-cols-3">
          {resumeData.skills.map((category) => (
            <div
              key={category.title}
              className="rounded-xl border border-zinc-200 bg-white p-5 shadow-xs transition-all hover:border-emerald-300 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-emerald-700/60"
            >
              <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                {category.title}
              </h3>
              <ul role="list" className="mt-3 flex flex-wrap gap-1.5">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-md bg-zinc-100 px-2 py-1 text-xs font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </article>
  );
}
