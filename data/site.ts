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
      booksTab: string;
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
    builtWith: string;
  };
}

export const siteConfig: SiteConfig = {
  name: 'Harry',
  role: 'Software Engineer',
  title: 'Harry — Software Engineering & Consumptions',
  description:
    'Personal engineering portfolio, architectural case studies, and curated consumptions across film, games, and music.',
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
    { label: 'Productions', href: '/projects' },
    { label: 'Consumptions', href: '/logs' },
    { label: 'About', href: '/about' },
  ],
  hero: {
    eyebrow: 'Portfolio & Cultural Index',
    heading: 'Systems engineering, architectural notes, and consumptions.',
    summary:
      'Exploring distributed systems, resilient frontend architecture, and the films, games, and records shaping how I think about craft.',
    primaryCta: {
      label: 'Explore Productions',
      href: '/projects',
    },
    secondaryCta: {
      label: 'Browse Consumptions',
      href: '/logs',
    },
  },
  sections: {
    projectsHeading: 'Featured Productions',
    projectsSubheading: 'the latest and greatest',
    viewAllProjectsLabel: 'All productions',
    logsHeading: 'Recent Consumptions',
    logsSubheading: 'what i put into my eyes and ears',
    viewAllLogsLabel: 'All consumptions',
    featuredBadge: 'Featured',
    recommendedBadge: 'Recommended',
  },
  pages: {
    projects: {
      title: 'Productions',
      eyebrow: 'Engineering Portfolio',
      heading: 'Systems & Architectural Productions',
      description:
        'A collection of production and exploratory systems focusing on high-throughput distributed event streaming, real-time edge telemetry, and enterprise developer platforms.',
    },
    logs: {
      title: 'Consumptions',
      eyebrow: 'Cultural Archive',
      heading: 'Watching, Playing & Listening',
      description:
        'Personal catalog of films, games, and music consumptions, featuring ratings, analytical impressions, and creative takeaways.',
      searchPlaceholder: 'Search consumptions by title, creator, artist, or tags...',
      allTab: 'All Media',
      filmsTab: 'Films & Series',
      gamesTab: 'Games',
      booksTab: 'Books',
      musicTab: 'Music',
      noResultsMessage: 'No consumptions found matching your filter criteria.',
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
    builtWith: 'Built with love',
  },
};
