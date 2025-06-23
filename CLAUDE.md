# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15 marketing website for "Help Me Speak Languages" - a language learning platform. The application showcases language training programs, pricing, placement tests, and lead capture functionality.

## Essential Commands

### Development
```bash
npm run dev          # Start development server (localhost:3000)
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

### Process Management
If the dev server appears to start but isn't accessible:
```bash
pkill -f "next"                    # Kill all Next.js processes
lsof -i :3000                      # Check what's using port 3000
curl -I http://localhost:3000      # Test if server responds
```

## Architecture & Key Patterns

### UI Component System
- **shadcn/ui based**: Uses Radix UI primitives with class-variance-authority (CVA)
- **Button component**: Primary reusable component in `/src/components/ui/button.tsx`
- **Styling**: TailwindCSS 4.x with `cn()` utility for conditional classes
- **Pattern**: Components use `asChild` prop pattern for polymorphic behavior

### Page Structure
- **App Router**: Next.js 13+ app directory structure
- **Route-based pages**: Each route has dedicated `page.tsx` in `/src/app/[route]/`
- **Shared layout**: Global layout with Inter font, metadata, and consistent wrapper

### Key Pages & Features
- **Homepage** (`/`): Hero, features, CTA sections
- **Programs** (`/programs`): Main conversion page with pricing, hover effects, "Most Popular" badges
- **Placement Test** (`/placement-test`): Lead capture and assessment
- **Pricing** (`/pricing`): Structured pricing tiers
- **Contact/Get Started**: Lead generation forms

### TypeScript Structure
- **Core types**: Defined in `/src/lib/types.ts`
- **Key interfaces**: `LeadCapture`, `PlacementTestResult`, `Program`, `BlogPost`, `Testimonial`
- **Utility functions**: `/src/lib/utils.ts` contains `cn()` for className merging

### Styling Conventions
- **Design system**: Blue (#3B82F6) primary, semantic color variants (green, purple, orange)
- **Responsive**: Mobile-first with `sm:`, `md:`, `lg:` breakpoints
- **Interactive elements**: Use hover states with transitions and transform effects
- **Spacing**: Consistent padding/margin with Tailwind scale

### Content Patterns
- **Static data**: Languages, programs, and features are defined inline as arrays
- **Pricing display**: Format as "Starting at $X" in colored boxes matching component themes
- **Social proof**: Student counts, "Most Popular" badges, testimonial integration

## Development Notes

### ESLint Configuration
- Uses Next.js ESLint config with strict rules
- Common issues: Unescaped quotes/apostrophes in JSX (use `&apos;` or disable for development)
- Module assignment warnings in `/src/lib/modules.ts`

### Port Management
- Default port 3000, but will auto-assign if occupied (3001, 3002, etc.)
- Server may appear to start but not be accessible due to process conflicts

### Component Enhancement Patterns
- **Hover effects**: Use `hover:shadow-xl hover:-translate-y-1 transition-all duration-300`
- **Badges**: Absolute positioned elements with `transform -translate-x-1/2`
- **Responsive grids**: Progressive disclosure with `grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5`
- **Pricing indicators**: Colored background boxes matching component theme colors