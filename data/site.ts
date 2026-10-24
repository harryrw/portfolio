export interface NavItem {
  label: string;
  href: '/' | '/projects' | '/logs' | '/about';
}

export interface SiteConfig {
  name: string;
  role: string;
  title: string;
  description: string;
  siteUrl: string;
  twitterHandle: string;
  skipLinkLabel: string;
  navAriaLabel: string;
  mobileMenuOpenLabel: string;
  mobileMenuCloseLabel: string;
  themeToggleLightLabel: string;
  themeToggleDarkLabel: string;
  navItems: NavItem[];
  telemetry: {
    statusLabel: string;
    httpStatus: string;
    focusStatus: string;
    latency: string;
    region: string;
  };
  hero: {
    eyebrow: string;
    heading: string;
    summary: string;
    primaryCta: {
      label: string;
      href: '/projects';
    };
    secondaryCta: {
      label: string;
      href: '/logs';
    };
  };
  sections: {
    projectsHeading: string;
    projectsSubheading: string;
    viewAllProjectsLabel: string;
    logsHeading: string;
    logsSubheading: string;
    viewAllLogsLabel: string;
    featuredBadge: string;
    recommendedBadge: string;
  };
  pages: {
    projects: {
      title: string;
      eyebrow: string;
      heading: string;
      description: string;
    };
    logs: {
      title: string;
      eyebrow: string;
      heading: string;
      description: string;
      searchPlaceholder: string;
      allTab: string;
      filmsTab: string;
      gamesTab: string;
      musicTab: string;
      noResultsMessage: string;
    };
    about: {
      title: string;
      eyebrow: string;
      heading: string;
      description: string;
      downloadResumeLabel: string;
      experienceTitle: string;
      educationTitle: string;
      skillsTitle: string;
    };
  };
  footer: {
    copyright: string;
    builtWith: string;
  };
}

export const siteConfig: SiteConfig = {
  name: 'Harry',
  role: 'Software Engineer',
  title: 'Harry — Software Engineering & Media Logs',
  description:
    'Personal engineering portfolio, architectural case studies, and curated cultural logs across film, games, and music.',
  siteUrl: 'https://portfoliohrw-xi.vercel.app',
  twitterHandle: '@harryrw',
  skipLinkLabel: 'Skip to main content',
  navAriaLabel: 'Primary',
  mobileMenuOpenLabel: 'Open navigation menu',
  mobileMenuCloseLabel: 'Close navigation menu',
  themeToggleLightLabel: 'Switch to light theme',
  themeToggleDarkLabel: 'Switch to dark theme',
  telemetry: {
    statusLabel: 'Status: Online',
    httpStatus: 'HTTP: 200 OK',
    focusStatus: 'Focus: Active',
    latency: '14ms',
    region: 'SYD-1',
  },
  navItems: [
    { label: 'Home', href: '/' },
    { label: 'Projects', href: '/projects' },
    { label: 'Logs', href: '/logs' },
    { label: 'About', href: '/about' },
  ],
  hero: {
    eyebrow: 'Portfolio & Cultural Index',
    heading: 'Systems engineering, architectural notes, and media logs.',
    summary:
      'Exploring distributed systems, resilient frontend architecture, and the films, games, and records shaping how I think about craft.',
    primaryCta: {
      label: 'Explore Projects',
      href: '/projects',
    },
    secondaryCta: {
      label: 'Browse Media Logs',
      href: '/logs',
    },
  },
  sections: {
    projectsHeading: 'Featured Engineering Projects',
    projectsSubheading: 'Selected case studies in distributed architecture and developer tooling.',
    viewAllProjectsLabel: 'All projects',
    logsHeading: 'Recent Media Logs',
    logsSubheading: 'Notes on watching, playing, and listening.',
    viewAllLogsLabel: 'All logs',
    featuredBadge: 'Featured',
    recommendedBadge: 'Recommended',
  },
  pages: {
    projects: {
      title: 'Projects',
      eyebrow: 'Engineering Portfolio',
      heading: 'Systems & Architectural Case Studies',
      description:
        'A collection of production and exploratory projects focusing on high-throughput distributed event streaming, real-time edge telemetry, and enterprise developer platforms.',
    },
    logs: {
      title: 'Media Logs',
      eyebrow: 'Cultural Archive',
      heading: 'Watching, Playing & Listening',
      description:
        'Personal catalog of films, games, and music logs, featuring ratings, analytical impressions, and creative takeaways.',
      searchPlaceholder: 'Search logs by title, director, artist, or tags...',
      allTab: 'All Media',
      filmsTab: 'Films',
      gamesTab: 'Games',
      musicTab: 'Music',
      noResultsMessage: 'No media logs found matching your filter criteria.',
    },
    about: {
      title: 'About & Resume',
      eyebrow: 'Background & Profile',
      heading: 'Harry Rogers Woollett',
      description:
        'Systems developer at the Department of Education (Financial Services Division) based in Melbourne, Australia. Specializing in financial web reporting systems, enterprise databases, and automation frameworks.',
      downloadResumeLabel: 'Download Resume (PDF)',
      experienceTitle: 'Professional Experience',
      educationTitle: 'Education',
      skillsTitle: 'Skills & Technologies',
    },
  },
  footer: {
    copyright: '© 2026 Harry. All rights reserved.',
    builtWith: 'Built with Next.js App Router, TypeScript & Tailwind CSS.',
  },
};
