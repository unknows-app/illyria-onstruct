# Illyria Construct - Interior Design Studio Website

A premium, fully responsive interior design studio website built with Next.js 16, React 19, TypeScript, Tailwind CSS v4, and Framer Motion.

## 🎨 Features

- **Modern Tech Stack**: Next.js 16 App Router, React 19, TypeScript (strict mode)
- **Stunning Animations**: Framer Motion for smooth scroll animations and micro-interactions
- **Responsive Design**: Mobile-first approach with breakpoints for all screen sizes
- **Brand Identity**: Custom design system with cohesive color palette and typography
- **SEO Optimized**: Comprehensive metadata and semantic HTML
- **Accessible**: WCAG 2.1 AA compliance with proper ARIA labels
- **Performance**: Optimized images, lazy loading, and efficient animations

## 🚀 Getting Started

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 📁 Project Structure

```
illyria-construct/
├── app/
│   ├── components/          # Shared components
│   │   ├── Header.tsx
│   │   ├── SiteFooter.tsx
│   │   └── sections/        # Homepage sections
│   ├── about/              # About page
│   ├── services/           # Services page
│   ├── projects/           # Projects gallery
│   ├── gallery/            # Image gallery
│   ├── contact/            # Contact form
│   └── globals.css         # Brand styles
└── public/                 # Static assets
```

## 🎨 Brand Colors

- **Primary Brand**: `#2F4A3A` - Deep forest green
- **Brand Soft**: `#3B5A48` - Lighter forest green
- **Brand Beige**: `#F4EEE5` - Warm background
- **Brand Gold**: `#C4A962` - Accent gold

## 📄 Pages

- **/** - Homepage with hero, services, projects, testimonials
- **/about** - Company story, team, values
- **/services** - Detailed service offerings
- **/projects** - Filterable project gallery
- **/gallery** - Image gallery with lightbox
- **/contact** - Contact form and information

## 🎬 Animations

All animations use Framer Motion for smooth, performant effects:

- Scroll-triggered reveals
- Stagger animations for lists
- Hover interactions
- Page transitions

## 🔧 Customization

### Brand Colors

Edit `app/globals.css` to modify the color scheme.

### Content

Update text and images in respective page files under `app/`.

### Navigation

Modify `app/components/Header.tsx` to add/remove menu items.

## 🚀 Deployment

Deploy to Vercel with one click:

```bash
npm i -g vercel
vercel
```

Or use any hosting platform that supports Next.js.

## 📞 Contact

**Illyria Construct**

- Email: <hello@illyriaconstruct.com>
- Phone: +380 (93) 123-4567
- Location: Lviv, Ukraine

---

**Built with Next.js 16, React 19, TypeScript, Tailwind CSS v4, and Framer Motion**
