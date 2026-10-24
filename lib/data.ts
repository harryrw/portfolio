import projectsData from '@/data/projects.json';
import mediaData from '@/data/media.json';
import type { MediaEntry, Project } from '@/types/portfolio';

export function getProjects(): Project[] {
  return projectsData as Project[];
}

export function getFeaturedProjects(): Project[] {
  return getProjects().filter((project) => project.featured);
}

export function getMediaEntries(): MediaEntry[] {
  return mediaData as MediaEntry[];
}
