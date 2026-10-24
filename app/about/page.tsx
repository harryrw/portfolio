import type { Metadata } from 'next';
import { siteConfig } from '@/data/site';
import { ResumeView } from '@/components/resume-view';

export const metadata: Metadata = {
  title: siteConfig.pages.about.title,
  description: siteConfig.pages.about.description,
};

export default function AboutPage() {
  return (
    <div className="space-y-8">
      {/* Structured Cohesive Resume View */}
      <ResumeView />
    </div>
  );
}
