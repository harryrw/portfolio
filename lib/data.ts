import projectsData from '@/data/projects.json';
import mediaData from '@/data/media.json';
import type {
  MediaCategory,
  MediaEntry,
  Project,
  TechCategory,
  PlayEntry,
} from '@/types/portfolio';

const VALID_TECH_CATEGORIES: Set<TechCategory> = new Set([
  'Frontend',
  'Backend',
  'Database',
  'DevOps',
  'Architecture',
]);

const VALID_MEDIA_CATEGORIES: Set<MediaCategory> = new Set([
  'watching',
  'playing',
  'listening',
  'reading',
]);

const VALID_PLAY_PLATFORMS: Set<PlayEntry['platform']> = new Set([
  'PC',
  'PlayStation',
  'PS5 / PC',
  'Switch',
  'Other',
]);

function validateProject(item: unknown): Project {
  if (!item || typeof item !== 'object') {
    throw new Error('Project must be a non-null object');
  }
  const p = item as Record<string, unknown>;

  if (
    typeof p.slug !== 'string' ||
    typeof p.title !== 'string' ||
    typeof p.tagline !== 'string' ||
    typeof p.featured !== 'boolean' ||
    typeof p.publishedAt !== 'string' ||
    typeof p.overview !== 'string' ||
    !Array.isArray(p.techStack) ||
    !Array.isArray(p.takeaways)
  ) {
    throw new Error(`Invalid project structure: ${JSON.stringify(p.slug ?? item)}`);
  }

  for (const tech of p.techStack) {
    if (
      !tech ||
      typeof tech !== 'object' ||
      typeof tech.name !== 'string' ||
      !VALID_TECH_CATEGORIES.has(tech.category as TechCategory)
    ) {
      throw new Error(`Invalid tech tag in project ${p.slug}: ${JSON.stringify(tech)}`);
    }
  }

  return item as unknown as Project;
}

function validateMediaEntry(item: unknown): MediaEntry {
  if (!item || typeof item !== 'object') {
    throw new Error('MediaEntry must be a non-null object');
  }
  const m = item as Record<string, unknown>;

  if (
    typeof m.id !== 'string' ||
    typeof m.title !== 'string' ||
    typeof m.category !== 'string' ||
    !VALID_MEDIA_CATEGORIES.has(m.category as MediaCategory) ||
    typeof m.loggedDate !== 'string' ||
    typeof m.releaseYear !== 'number' ||
    typeof m.rating !== 'number' ||
    typeof m.recommended !== 'boolean' ||
    typeof m.reviewBody !== 'string' ||
    !Array.isArray(m.tags)
  ) {
    throw new Error(`Invalid media entry structure: ${JSON.stringify(m.id ?? item)}`);
  }

  if (m.category === 'playing') {
    const platform = m.platform as PlayEntry['platform'];
    if (!VALID_PLAY_PLATFORMS.has(platform)) {
      throw new Error(`Invalid platform in PlayEntry ${m.id}: ${String(m.platform)}`);
    }
  }

  return item as unknown as MediaEntry;
}

export function getProjects(): Project[] {
  return (projectsData as unknown[]).map(validateProject);
}

export function getFeaturedProjects(): Project[] {
  return getProjects().filter((project) => project.featured);
}

export function getMediaEntries(): MediaEntry[] {
  return (mediaData as unknown[]).map(validateMediaEntry);
}
