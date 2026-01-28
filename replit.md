# CCI Nigeria - Cancer Consciousness Initiative Website

## Overview

This is a professional, multi-page NGO website for Cancer Consciousness Initiative (CCI) Nigeria. The organization is dedicated to reducing the cancer burden in Nigeria through awareness campaigns, screening programs, and patient support initiatives.

The website features:
- Home page with hero section and mission highlights
- About page with organization history and goals
- Staff page showcasing team members
- Projects page displaying initiative cards
- Contact page with form submission and location info
- Responsive design with smooth animations

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight React router)
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: shadcn/ui (Radix UI primitives with custom styling)
- **Animations**: Framer Motion for page transitions and scroll effects
- **Forms**: React Hook Form with Zod validation
- **Data Fetching**: TanStack React Query for server state management
- **SEO**: React Helmet Async for meta tag management

### Backend Architecture
- **Runtime**: Node.js with Express
- **Language**: TypeScript with ESM modules
- **API Pattern**: RESTful endpoints defined in `shared/routes.ts`
- **Validation**: Zod schemas shared between client and server

### Data Storage
- **Database**: PostgreSQL
- **ORM**: Drizzle ORM with type-safe schema definitions
- **Schema Location**: `shared/schema.ts` contains table definitions
- **Migrations**: Drizzle Kit for database migrations (`npm run db:push`)

### Build System
- **Development**: Vite dev server with HMR
- **Production**: Custom build script using esbuild for server, Vite for client
- **Output**: Server bundles to `dist/index.cjs`, client to `dist/public`

### Project Structure
```
client/           # React frontend application
  src/
    components/   # Reusable UI components
    pages/        # Route page components
    hooks/        # Custom React hooks
    lib/          # Utilities and query client
server/           # Express backend
  index.ts        # Server entry point
  routes.ts       # API route handlers
  storage.ts      # Database operations
  db.ts           # Database connection
shared/           # Shared between client and server
  schema.ts       # Drizzle database schema
  routes.ts       # API route definitions with Zod schemas
```

## External Dependencies

### Database
- PostgreSQL database (connection via `DATABASE_URL` environment variable)
- Drizzle ORM for database operations
- connect-pg-simple for session storage (available but not currently used)

### UI Framework
- Tailwind CSS for styling
- Radix UI primitives via shadcn/ui components
- Lucide React and React Icons for iconography
- Google Fonts (DM Sans, Outfit)

### Key NPM Packages
- `@tanstack/react-query`: Server state management
- `framer-motion`: Animation library
- `react-hook-form` + `@hookform/resolvers`: Form handling with Zod validation
- `react-helmet-async`: SEO meta tags
- `wouter`: Client-side routing
- `zod`: Schema validation (shared between client/server)
- `drizzle-zod`: Generate Zod schemas from Drizzle tables

### Development Tools
- Vite with React plugin
- Replit-specific plugins for development (error overlay, cartographer, dev banner)
- TypeScript with strict mode