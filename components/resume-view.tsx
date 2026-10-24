import {
  Briefcase,
  Download,
  GraduationCap,
  Mail,
  MapPin,
  Phone,
  Wrench,
} from 'lucide-react';
import { resumeData } from '@/data/resume';
import { siteConfig } from '@/data/site';
import { ExperienceCard } from '@/components/experience-card';

export function ResumeView() {
  return (
    <article className="space-y-12">
      {/* Profile Overview & Quick Actions */}
      <section className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-xs transition-colors dark:border-zinc-800 dark:bg-zinc-900 sm:p-10">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-start">
          <div className="space-y-3">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200/80 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 dark:border-emerald-800/60 dark:bg-emerald-950/60 dark:text-emerald-300">
              <span className="h-2 w-2 rounded-full bg-emerald-500" aria-hidden="true" />
              {resumeData.role}
            </span>
            <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl">
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

          {/* Download Action & Contact Pills */}
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center md:flex-col md:items-end">
            <a
              href={resumeData.contact.pdfDownloadUrl}
              download="Harry_Rogers_Woollett_Resume.pdf"
              className="inline-flex min-h-10 items-center justify-center gap-2 rounded-lg bg-emerald-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-emerald-700 dark:bg-emerald-600 dark:hover:bg-emerald-500"
            >
              <Download className="h-4 w-4" aria-hidden="true" />
              <span>{siteConfig.pages.about.downloadResumeLabel}</span>
            </a>

            <div className="flex flex-wrap gap-2 text-xs text-zinc-600 dark:text-zinc-400">
              <a
                href={`mailto:${resumeData.contact.email}`}
                className="inline-flex items-center gap-1 rounded-md border border-zinc-200 bg-zinc-50 px-2.5 py-1 transition-colors hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:bg-zinc-800"
              >
                <Mail className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
                <span>{resumeData.contact.email}</span>
              </a>
              <a
                href={`tel:${resumeData.contact.phone.replace(/\s+/g, '')}`}
                className="inline-flex items-center gap-1 rounded-md border border-zinc-200 bg-zinc-50 px-2.5 py-1 transition-colors hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:bg-zinc-800"
              >
                <Phone className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
                <span>{resumeData.contact.phone}</span>
              </a>
            </div>
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

      {/* Skills Matrix & Education Two-Column */}
      <div className="grid gap-8 md:grid-cols-2">
        {/* Skills */}
        <section className="space-y-4" aria-label="Skills & technologies">
          <h2 className="flex items-center gap-2.5 text-xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
            <Wrench className="h-5 w-5 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
            <span>{siteConfig.pages.about.skillsTitle}</span>
          </h2>
          <div className="space-y-4 rounded-xl border border-zinc-200 bg-white p-6 shadow-xs dark:border-zinc-800 dark:bg-zinc-900">
            {resumeData.skills.map((category) => (
              <div key={category.title} className="space-y-2">
                <h3 className="text-xs font-semibold tracking-wider text-zinc-500 uppercase dark:text-zinc-400">
                  {category.title}
                </h3>
                <ul className="flex flex-wrap gap-1.5">
                  {category.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-md border border-zinc-200 bg-zinc-50 px-2.5 py-1 text-xs font-medium text-zinc-700 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="space-y-4" aria-label="Education background">
          <h2 className="flex items-center gap-2.5 text-xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
            <GraduationCap className="h-5 w-5 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
            <span>{siteConfig.pages.about.educationTitle}</span>
          </h2>
          <div className="space-y-4">
            {resumeData.education.map((edu) => (
              <div
                key={edu.degree}
                className="rounded-xl border border-zinc-200 bg-white p-6 shadow-xs dark:border-zinc-800 dark:bg-zinc-900"
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
      </div>
    </article>
  );
}
