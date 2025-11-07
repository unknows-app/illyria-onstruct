# Copilot Instructions
Illyria Construct — Next.js 16 App Router, React 19, TypeScript strict, Tailwind v4. Interior design marketing site with animations, dynamic project pages, and centralized data architecture.

## Architecture Overview
**Pages**: All under `app/` using App Router — `/` (homepage), `/about`, `/services`, `/projects`, `/projects/[slug]`, `/gallery`, `/contact`.
**Data Layer**: Centralized in `app/data/` — `projects.ts` (9 projects with full metadata), `team.ts` (4 team members). Import with `@/app/data/projects`.
**Components**: Split into shared (`app/components/`) and page sections (`app/components/sections/`). All animations are client components.

## Page Structure Pattern
Every page follows this shell (see any `page.tsx`):
```tsx
<div className="min-h-screen bg-brand-beige">
  <Header />
  <main>
    <section className="pt-32 pb-16 bg-white">{/* Hero */}</section>
    <section className="py-24 bg-brand-beige">{/* Content */}</section>
  </main>
  <SiteFooter />
</div>
```
- Hero sections: `pt-32` (header clearance), `bg-white`
- Content sections: `py-24`, alternating `bg-white`/`bg-brand-beige`
- Max-width containers: `max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8`

## Animation System (Framer Motion)
**Three reusable animation components** (all in `app/components/`):
1. `<AnimatedSection>` — Scroll-triggered fade-in with direction (`up`, `down`, `left`, `right`)
   ```tsx
   <AnimatedSection delay={0.2} direction="up">...</AnimatedSection>
   ```
2. `<StaggerContainer>` + `<StaggerItem>` — List animations with 0.1s stagger delay
   ```tsx
   <StaggerContainer className="grid grid-cols-3 gap-8">
     {items.map(item => <StaggerItem key={item.id}>...</StaggerItem>)}
   </StaggerContainer>
   ```
3. Never use `<motion.div>` directly in pages — always use these wrappers for consistency

## Data Architecture
**Projects** (`app/data/projects.ts`):
- Export `projects` array (9 items) with `Project` interface
- Helper functions: `getProjectBySlug(slug)`, `getRelatedProjects(slug, category, limit)`
- Dynamic routes use `generateStaticParams()` + `generateMetadata()` (see `app/projects/[slug]/page.tsx`)
- Images stored in `/public/images/projects/` with real filenames (e.g., `spacejoy-tAuc4H7Qf9s-unsplash.jpg`)

**Team** (`app/data/team.ts`):
- Export `teamMembers` array (4 members) with `TeamMember` interface
- Images in `/public/images/team/` — names MUST match data file exactly (e.g., `oksana-shevchenko.jpg`)

## Brand System (Tailwind v4)
**No `tailwind.config.js`** — all customization in `app/globals.css`:
```css
@theme inline {
  --color-brand: #2F4A3A;
  --color-brand-beige: #F4EEE5;
  --color-brand-gold: #C4A962;
}
```
Usage: `bg-brand`, `text-brand-gold`, `hover:bg-brand/10`, `border-brand/20` (opacity with slash)

## Image Handling
- Always use `next/image` `<Image />`, never `<img>`
- Hero images: `priority` prop + `sizes="(max-width: 768px) 100vw, 50vw"`
- Gallery images: `fill` prop for responsive aspect ratios
- Image paths: `/images/projects/`, `/images/team/`, `/images/gallery/`, `/images/hero.jpg`

## Client vs Server Components
**Server by default** (no `'use client'`). Add `'use client'` only when needed:
- Any component using Framer Motion (`AnimatedSection`, `StaggerContainer`, sections)
- `Header.tsx` (uses `usePathname()` for active nav)
- Form components with `useState`
- **Pattern**: Pages are server, import client components for interactive parts

## Dynamic Routing Pattern
See `app/projects/[slug]/page.tsx` as reference:
```tsx
export async function generateStaticParams() {
  return projects.map(p => ({ slug: p.slug }));
}
export async function generateMetadata({ params }) {
  const project = getProjectBySlug(params.slug);
  return { title: project.title, description: project.shortDescription };
}
```

## Navigation & Links
- Active link detection: `const pathname = usePathname(); const isActive = (path) => path === '/' ? pathname === '/' : pathname.startsWith(path);`
- Always `<Link href="/path">`, never `<a>`
- Lucide React icons: `import { Icon } from 'lucide-react'`

## Common Patterns
- **Filtering**: Client state in listing pages (see `app/projects/page.tsx`, `app/gallery/page.tsx`)
- **Category badges**: `<span className="px-3 py-1 bg-brand/10 rounded-full text-xs font-medium text-brand">{category}</span>`
- **Hover effects**: `group` + `group-hover:` classes, scale transitions on images
- **Grid layouts**: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8`

## Development Workflow
- Dev server: `npm run dev` (port 3000)
- Type-check + build: `npm run build` (catches all TS errors)
- Lint: `npm run lint` (ESLint 9 + Next.js rules)
- **Images must exist** in `/public/images/` before referencing in data files — 404s will crash dev server

## Critical Gotchas
1. **Team images**: Data file names MUST match actual filenames (recent fix: `natalia-kovalenko.jpg` not `iryna-kovalchuk.jpg`)
2. **Tailwind v4**: Use `@theme inline` in CSS, NOT `tailwind.config.js`
3. **Aspect ratios**: Use `aspect-[4/3]` or `aspect-square`, not `pb-[75%]` hack
4. **Font loading**: Geist fonts on `<body>` in `layout.tsx`, use `font-sans` class
5. **Footer width**: Full-width `bg-brand`, inner content max-width, NOT inside page max-width container

## Key Files Reference
- `app/layout.tsx` — Root layout, metadata, fonts
- `app/globals.css` — Brand tokens, Tailwind v4 config
- `app/data/projects.ts` — Single source of truth for all project data
- `app/components/AnimatedSection.tsx` — Animation patterns
- `app/projects/[slug]/page.tsx` — Dynamic route + SSG example
- `package.json` — Dependencies (framer-motion, lucide-react, next 16, react 19)
