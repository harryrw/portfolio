# Harry — Engineering Portfolio & Cultural Media Log

[![Next.js 15](https://img.shields.io/badge/Next.js-15.5-black?style=flat&logo=next.js)](https://nextjs.org/)
[![React 19](https://img.shields.io/badge/React-19-blue?style=flat&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind-v4.1-38BDF8?style=flat&logo=tailwindcss)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-emerald.svg)](LICENSE)

A high-performance personal engineering portfolio, architectural case study registry, and curated cultural index (film, games, music). Built with a "live system" telemetry HUD, dynamic theme-aware SVG favicon, accessible navigation, and strict data/presentation decoupling.

---

## 🌐 Live Production Deployment

- **Production URL**: [https://portfoliohrw-xi.vercel.app](https://portfoliohrw-xi.vercel.app)
- **Source Repository**: [https://github.com/harryrw/portfolio](https://github.com/harryrw/portfolio)

---

## 🛠 Tech Stack

| Technology | Role | Details |
| :--- | :--- | :--- |
| **Next.js 15** | Framework | App Router, Server/Client component boundaries, static optimization |
| **React 19** | UI Library | Concurrent primitives, pure render trees, hydration guards |
| **TypeScript 5.8** | Language | Strict type checking (`strict: true`), zero implicit `any`, comprehensive schemas |
| **Tailwind CSS v4** | Styling | White & Emerald light theme, deep Zinc dark mode, `@custom-variant dark` |
| **Lucide React** | Iconography | Accessible inline SVGs with `aria-hidden="true"` |
| **Native CSS & SVG** | Telemetry | SMIL pulse animations, `@media (prefers-color-scheme)` within SVG favicon |

---

## 🏛 Architectural Principles

As governed by `.antigravity/rules.md`:

1. **Data-First Decoupling**: Data schemas and seed records are strictly separated from presentation logic. View JSX never hardcodes static copy.
2. **Focused Modularity**: All component files remain strictly under 150 lines, isolating discrete concerns into dedicated sub-components.
3. **Accessibility First (WCAG AA)**: Semantic HTML landmarks (`<header>`, `<nav>`, `<main id="content">`, `<footer>`), skip-to-content links, `:focus-visible` offset rings, and accessible button names.
4. **FOUC-Free Theme Engine**: Native `color-scheme` hinting paired with an inline pre-render script to eliminate theme flashes on load.
5. **Dynamic Telemetry & Status**: Inline SVG favicon reacting to system preferences with animated heartbeat telemetry alongside an on-page live status HUD.

---

## 📁 Project Structure

```text
HarryWebsite/
├── .antigravity/
│   └── rules.md                # Engineering & architectural guardrails
├── app/
│   ├── globals.css             # Tailwind v4 configuration & base layer styles
│   ├── icon.svg                # Dynamic SVG favicon with SMIL heartbeat & media queries
│   ├── layout.tsx              # Root layout with OpenGraph metadata, skip-link, & FOUC script
│   └── page.tsx                # Home scaffold rendering telemetry HUD, projects, & logs
├── components/
│   ├── header.tsx              # Sticky navigation header with mobile drawer (<120 lines)
│   ├── footer.tsx              # Semantic footer (<20 lines)
│   ├── project-card.tsx        # Engineering case study card (<50 lines)
│   ├── media-card.tsx          # Cultural media review card (<80 lines)
│   ├── theme-toggle.tsx        # Accessible Sun/Moon theme toggle (<75 lines)
│   └── StatusBanner.tsx        # Live telemetry HUD with animated SVG waveform (<110 lines)
├── data/
│   ├── media.json              # Seed entries for films, games, and albums
│   ├── projects.json           # Engineering case studies
│   └── site.ts                 # Centralized site configuration, copy, and telemetry data
├── lib/
│   └── data.ts                 # Strongly-typed data accessors
├── types/
│   └── portfolio.ts            # Canonical domain models (Project, MediaEntry, etc.)
├── next.config.ts              # Next.js build configuration
├── package.json                # Project dependencies and script runner
├── postcss.config.mjs          # PostCSS integration
├── rules.md                    # Core architectural standards
└── tsconfig.json               # TypeScript compiler options
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js**: `v20.x` or higher (tested with `v24.12.0`)
- **npm**: `v10.x` or higher (tested with `v11.6.2`)

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/harryrw/portfolio.git
cd portfolio
npm install
```

### Development Server

Start the local development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

Verify type integrity and compile an optimized static export:

```bash
npm run build
npm run start
```

---

## 📡 Live Telemetry & Dynamic Features

- **Theme-Aware Dynamic Favicon**: Displays an active terminal indicator (`~`) with a gentle 2.5s fading status dot. Responds dynamically to `prefers-color-scheme` (Emerald-400 / Zinc-950 in dark mode; Emerald-600 / White in light mode).
- **Status HUD**: Located at the top of the home view, featuring:
  - Pulsing green status indicator via Tailwind's `animate-ping`
  - Real-time active session duration counter
  - Infinite animated SVG waveform visualizer
  - Monospace HTTP and activity badges (`HTTP: 200 OK`, `Vibe: Building & Listening`)

---

## 📄 License

Distributed under the [MIT License](LICENSE).
