# Engineering & Architectural Guidelines

## Core Principles
- Framework: Next.js (App Router) with TypeScript (Strict mode enabled).
- Styling: Tailwind CSS. Use clean slate/zinc neutral tones with a subtle accent token. Avoid inline arbitrary CSS or uncontrolled utility bloat.
- Accessibility: Semantic HTML markup, proper ARIA labels for icon-only buttons, and WCAG AA contrast compliance.
- Modularity: Keep data schemas strictly separated from presentation logic. Never hardcode content directly inside view JSX.

## Execution Guardrails
1. Always propose an Implementation Plan before creating or touching files.
2. Build data structures first before writing view logic.
3. Keep component files focused (<150 lines); break sub-components into dedicated files.
4. Verify all changes by building (`npm run build`) and inspecting layouts in the integrated browser before completing a task.
