# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

Le Monde-Actuel is an independent online news journal focused on news and analysis for Chad and international audiences. It's a React 19 + TypeScript single-page application built with Vite, covering multiple news categories (Politics, Economy, Society, Culture, Sports, International).

**Contact**: +235 69864054

## Essential Commands

### Development
```bash
npm run dev          # Start dev server (http://localhost:5173)
npm run build        # TypeScript compilation + production build
npm run lint         # Run ESLint checks
npm run preview      # Preview production build locally
```

### Setup
```bash
npm install          # Install dependencies (Node.js 18+ required)
```

## Architecture

### Application Structure

**Entry Point Flow:**
- `src/main.tsx` → `src/App.tsx` (router setup) → Page components
- React Router DOM handles all navigation with client-side routing
- Persistent layout: `Header` and `Footer` wrap all pages

**Routing Strategy:**
```
/                    → Home (featured article + news grid)
/:category           → Category (filtered article lists)
/article/:id         → Article (full article view)
/equipe              → Team (editorial team page)
/contact             → Contact (contact form)
```

Note: The `/:category` route dynamically handles all category URLs (politique, economie, societe, culture, sport, international), which could conflict with static routes like `/equipe` and `/contact`. Consider reordering routes or using more specific patterns if route conflicts occur.

### Component Organization

```
src/
├── main.tsx              # React root entry
├── App.tsx               # Router + layout setup
├── index.css             # Global styles + CSS variables
├── components/           # Shared layout components
│   ├── Header.tsx/.css   # Site header with navigation
│   └── Footer.tsx/.css   # Site footer
└── pages/                # Page-level components
    ├── Home.tsx/.css     # Homepage with featured article
    ├── Category.tsx/.css # Category article listings
    ├── Article.tsx/.css  # Full article view
    ├── Team.tsx/.css     # Editorial team
    └── Contact.tsx/.css  # Contact form
```

**Styling Approach:**
- Component-specific CSS files co-located with `.tsx` files
- Global design system in `src/index.css` with CSS custom properties
- No CSS-in-JS or utility frameworks (plain CSS)

### Design System

**Color Palette** (defined in `src/index.css`):
```css
--primary-color: #c41e3a      /* Red - main brand color */
--secondary-color: #1a1a2e    /* Dark blue */
--accent-color: #0f3460       /* Accent blue */
--text-primary: #1a1a1a       /* Main text */
--text-secondary: #666        /* Secondary text */
```

**Typography:**
- Headings: Arial, Helvetica, sans-serif
- Body text: Georgia, Times New Roman, serif (journalistic style)

### Data Management

**Current State:**
- Mock data defined as constants in page components (e.g., `featuredArticle`, `newsArticles` in `Home.tsx`)
- No backend API integration yet
- No state management library

**Future Considerations:**
When implementing real data, you'll likely need to:
- Add API service layer (e.g., `src/services/api.ts`)
- Implement data fetching in components or add React Query/SWR
- Replace mock data arrays with API calls

## Development Guidelines

### TypeScript Configuration
- Project uses TypeScript 5.9 with strict type checking
- Separate configs: `tsconfig.app.json` (app code), `tsconfig.node.json` (Vite config)
- Always run `npm run build` before committing to catch type errors

### Linting
- ESLint configured with TypeScript support
- Includes React Hooks and React Refresh plugins
- Run `npm run lint` after making changes

### Adding New Pages
1. Create page component in `src/pages/` with corresponding CSS file
2. Add route in `src/App.tsx` Routes section
3. Add navigation link in `src/components/Header.tsx` if needed

### Responsive Design
- Mobile-first approach with responsive utilities
- Breakpoint at 768px for mobile/tablet adjustments
- Test on multiple device sizes (phone, tablet, desktop)

### Categories
The application supports six news categories:
- **Politique** (Politics)
- **Économie** (Economy)
- **Société** (Society)
- **Culture** (Culture)
- **Sport** (Sports)
- **International** (International)

When working with categories, use these exact French names to maintain consistency.

## Deployment

### Build Output
- Production files generated in `dist/` directory
- Static files ready for any hosting platform (Netlify, Vercel, standard web server)

### Production Checklist
Before deploying:
1. Run `npm run build` to ensure clean build
2. Run `npm run lint` to verify code quality
3. Test with `npm run preview`
4. Verify all routes work in production build (SPA routing configuration may be needed)
