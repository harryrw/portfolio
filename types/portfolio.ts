// --- 1. Portfolio & Case Studies ---

export type TechCategory = 
  | 'Frontend' 
  | 'Backend' 
  | 'Database' 
  | 'DevOps' 
  | 'Architecture';

export interface TechTag {
  name: string;
  category: TechCategory;
}

export interface ProjectTakeaway {
  challenge: string;
  solution: string;
}

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  featured: boolean;
  publishedAt: string;
  previewImage?: string;
  links: {
    github?: string;
    liveDemo?: string;
  };
  techStack: TechTag[];
  overview: string;
  architectureOverview?: string;
  takeaways: ProjectTakeaway[];
}

// --- 2. Culture & Media Log (Watch, Play, Listen, Read) ---

export type MediaCategory = 'watching' | 'playing' | 'listening' | 'reading';

export type RatingScore = 1 | 2 | 3 | 4 | 5; // 1-5 star scale

export interface BaseMediaEntry {
  id: string;
  title: string;
  category: MediaCategory;
  loggedDate: string; // ISO format: YYYY-MM-DD
  releaseYear: number;
  rating: RatingScore;
  recommended: boolean;
  reviewTitle?: string;
  reviewBody: string;
  coverImage?: string;
  youtubeUrl?: string;
  youtubeLabel?: string;
  tags: string[];
}

export interface WatchEntry extends BaseMediaEntry {
  category: 'watching';
  format: 'Film' | 'Series' | 'Documentary';
  director: string;
}

export interface PlayEntry extends BaseMediaEntry {
  category: 'playing';
  platform: 'PC' | 'PlayStation' | 'Switch' | 'Other';
  developer: string;
  status: 'Completed' | 'In Progress' | 'Endless';
}

export interface ListenEntry extends BaseMediaEntry {
  category: 'listening';
  format: 'Album' | 'EP' | 'Mix' | 'Track';
  artist: string;
  standoutTrack?: string;
}

export interface ReadEntry extends BaseMediaEntry {
  category: 'reading';
  format: 'Book' | 'Essay' | 'Novel';
  author: string;
}

export type MediaEntry = WatchEntry | PlayEntry | ListenEntry | ReadEntry;
