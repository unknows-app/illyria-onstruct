# AI Assistant Instructions

## Project Overview
**Illyria Construct** - Interior design studio website built with Next.js 16, React 19, TypeScript, and TailwindCSS v4. This is a multi-page marketing site for a Lviv-based interior design studio featuring scroll animations, navigation system, and project galleries.

## Architecture & Critical Structure

### App Router Pages (Full Site)
```
app/
├── page.tsx           # Homepage with hero, projects, packages
├── about/page.tsx     # Studio story, testimonials, FAQ
├── services/page.tsx  # All design services with anchor links
├── projects/page.tsx  # Project portfolio grid
├── gallery/page.tsx   # Media gallery with categories
├── contact/page.tsx   # Contact form and info
├── privacy/page.tsx   # Privacy policy
└── terms/page.tsx     # Terms of service
```

**Every page follows this structure:**
```tsx
<div className="min-h-screen bg-brand-beige">
  <Header />              {/* Sticky nav with active states */}
  <main className="max-w-[1200px] mx-auto px-4 py-16">
    {/* Page content */}
  </main>
  <SiteFooter />          {/* Full-width footer outside container */}
</div>
```

### Component Architecture
**Navigation System** (`components/ui/header-3.tsx`):
- Uses `usePathname()` for active page detection
- Desktop: Radix NavigationMenu with mega dropdowns
- Mobile: Full-screen overlay with `createPortal()`
- All links use Next.js `<Link>` (never `<a>` tags)

**Scroll Animation** (`container-scroll-animation.tsx` + `container-scroll-demo.tsx`):
- framer-motion scroll-triggered 3D transforms
- Uses `useScroll()` hook targeting `containerRef`
- Demo component wraps with title + image props

**Footer** (`components/ui/footer.tsx`):
- Client component (`'use client'`) for newsletter form
- Full-width background with max-width content wrapper
- Uses framer-motion for stagger animations

## Brand System (Critical!)

### Color Palette (app/globals.css)
```css
--brand: #2F4A3A;           /* Primary deep green */
--brand-soft: #3B5A48;      /* Hover state green */
--brand-beige: #F4EEE5;     /* Page background */
--brand-beige-soft: #EFE7DC; /* Card backgrounds */
```

**Usage Pattern:**
- Backgrounds: `bg-brand-beige` (pages), `bg-brand-beige-soft` (sections)
- Accents: `text-brand`, `bg-brand`, `border-brand/10`
- Hover states: `hover:bg-brand/5`, `hover:text-brand`
- Active states: `bg-brand/10 text-brand font-medium`

### Spacing Convention
- Section margins: `mb-16` (64px between major sections)
- Container padding: `px-4 sm:px-6 lg:px-8 py-16`
- Content max-width: `max-w-[1200px]` or `max-w-[1400px]`

## UI Component System
Uses **shadcn/ui** with specific configuration (see `components.json`):
- Style: "new-york" preset with neutral base colors
- Path aliases: `@/components`, `@/lib/utils`, `@/components/ui`, `@/lib`, `@/hooks`
- Icons: Lucide React library
- RSC enabled (React Server Components)

## Development Workflows

### Commands
```bash
npm run dev    # Next.js dev server on localhost:3000
npm run build  # Production build with type checking
npm run lint   # ESLint 9 with Next.js config
```

### Adding New Components via shadcn
```bash
npx shadcn@latest add button navigation-menu
```
Components install to `components/ui/` with path aliases already configured.

## Project-Specific Patterns

### 1. Navigation Links (Always use Link!)
```tsx
// ✅ Correct
<Link href="/projects" className="...">Projects</Link>

// ❌ Wrong - breaks client-side routing
<a href="/projects">Projects</a>
```

### 2. Active Page Detection
```tsx
const pathname = usePathname();
const isActivePath = (path: string) => {
  if (path === '/') return pathname === '/';
  return pathname.startsWith(path);
};
```

### 3. Image Optimization
```tsx
// Homepage hero images need priority
<Image src="/images/..." priority loading="eager" />

// Gallery images use responsive sizes
sizes="(max-width: 768px) 100vw, 360px"
```

### 4. Client vs Server Components
- **Client**: Navigation, footer, scroll animations (use `'use client'`)
- **Server**: All pages by default, static content
- **Pattern**: Keep `'use client'` at leaf components only

## Key Integration Points

### shadcn/ui Configuration
- Style: "new-york" preset
- Path aliases: `@/components/ui`, `@/lib/utils`
- Icons: `lucide-react` (already installed)
- Button variants: `default | outline | ghost | link`

### framer-motion Patterns
```tsx
// Scroll-triggered animations
const { scrollYProgress } = useScroll({ target: containerRef });
const rotate = useTransform(scrollYProgress, [0, 1], [20, 0]);

// Stagger children
variants={container}
transition={{ staggerChildren: 0.08 }}
```

### Next.js Image Paths
All images in `public/images/` (10 interior photos):
- `kam-idris-vqMQN9zImG4-unsplash.jpg`
- `jason-wang-8J49mtYWu7E-unsplash.jpg`
- etc.

Reference as: `/images/filename.jpg`

## Critical "Gotchas"

1. **Footer must be outside max-width container** - It's full-width with internal centering
2. **Always use Next.js Link** - Even in footer, dropdowns, CTAs
3. **Scroll animation needs relative positioning** - Container must have `position: relative`
4. **Brand colors use opacity** - `bg-brand/10`, `border-brand/20` for subtle effects

## Key Configuration Files
- `components.json` - shadcn/ui configuration with path aliases and "new-york" style
- `next.config.ts` - Includes `allowedDevOrigins` for network access
- `app/globals.css` - TailwindCSS v4 with inline theme and brand tokens
- `package.json` - Key deps: framer-motion, @radix-ui, @splinetool

When adding features, maintain consistency with existing page structures, navigation patterns, and brand color usage. Reference `app/page.tsx` as the canonical example of layout structure.
