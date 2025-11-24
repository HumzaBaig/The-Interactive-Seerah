# Seerah Timeline - Interactive Educational Application

## Overview

Seerah Timeline is an interactive web application that presents the life of Prophet Muhammad ﷺ through a visual, chronological timeline. The project is based on "The Sealed Nectar" (Ar-Raheeq Al-Makhtum) and provides an educational journey through major events, organized by periods (Pre-Prophethood, Makkah, Madinah) and categories (revelations, battles, treaties, migrations, etc.).

The application emphasizes respectful, culturally-sensitive design following Islamic principles - using geometric patterns, typography, and architectural elements rather than figurative representation.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized production builds
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state management
- **UI Components**: Shadcn/ui component library built on Radix UI primitives
- **Styling**: Tailwind CSS with custom design tokens for Islamic-inspired aesthetics

**Design System**:
- Typography: Amiri/Scheherazade (Arabic serif), Raleway (UI elements), Aref Ruqaa (decorative)
- Color scheme: Neutral base with primary accent (32° hue, 85% saturation, 45% lightness)
- Spacing system: Consistent rhythm using Tailwind units (3, 4, 6, 8, 12, 16)
- Dark mode support with theme toggle

**Key Components**:
- `TimelineViewer`: Horizontal scrolling timeline with zoom/pan controls
- `EventNode`: Interactive event markers on timeline
- `EventDetailModal`: Full event details in modal dialogs
- `FilterSidebar`: Category and period filtering
- `SearchBar`: Event search with live results
- `HeroSection`: Landing section with period navigation

**Data Structure**:
- Events stored as `SeerahEvent` objects with properties: title, date, year, period, category, location, description, significance
- Timeline periods defined as `TimelinePeriod` objects with start/end years and visual styling
- All timeline data currently in-memory via `seerah-events.ts`

### Backend Architecture

**Runtime**: Node.js with Express
- **Development**: tsx for TypeScript execution in dev mode
- **Production**: esbuild bundling for optimized deployment
- **API Pattern**: RESTful endpoints under `/api` prefix (currently minimal, designed for future expansion)

**Storage Layer**:
- Abstract `IStorage` interface for CRUD operations
- Current implementation: In-memory storage (`MemStorage`)
- Database-ready: Drizzle ORM configured for PostgreSQL migration path
- Schema defined in `shared/schema.ts` for type safety across client/server

**Session Management**:
- Prepared for session handling with `connect-pg-simple` for PostgreSQL-backed sessions
- Cookie-based authentication infrastructure in place

**Development vs Production**:
- Dev mode: Vite middleware integration with HMR
- Production: Static file serving from `dist/public` directory
- Separate entry points (`index-dev.ts`, `index-prod.ts`)

### Database Design

**ORM**: Drizzle ORM with PostgreSQL dialect
- Schema location: `shared/schema.ts`
- Migrations: Output to `./migrations` directory
- Type-safe queries with Drizzle-Zod schema validation

**Current Schema**:
- `users` table: Basic authentication setup (id, username, password)
- Event data: Currently in-memory TypeScript objects, ready for database migration

**Migration Strategy**:
- Schema changes via `drizzle-kit push` command
- Type definitions automatically generated from schema
- Shared types between client/server via `@shared` alias

### Application Structure

**Monorepo Layout**:
```
/client          # Frontend React application
  /src
    /components  # Reusable UI components
    /pages       # Page-level components
    /data        # Static data (timeline events)
    /hooks       # Custom React hooks
    /lib         # Utilities and helpers
/server          # Backend Express application
  /routes.ts     # API route definitions
  /storage.ts    # Data access layer
/shared          # Shared types and schemas
```

**Path Aliases**:
- `@/*` → `client/src/*`
- `@shared/*` → `shared/*`
- `@assets/*` → `attached_assets/*`

**Build Process**:
1. Client: Vite builds React app to `dist/public`
2. Server: esbuild bundles Express app to `dist/index.js`
3. Combined deployment: Static assets + API server

## External Dependencies

### UI/Component Libraries
- **Radix UI**: Unstyled, accessible component primitives (accordion, dialog, dropdown, etc.)
- **Shadcn/ui**: Pre-built component implementations using Radix + Tailwind
- **Lucide React**: Icon library for UI elements
- **CMDK**: Command palette component for search functionality
- **Embla Carousel**: Touch-friendly carousel component

### Data & State Management
- **TanStack Query**: Server state management, caching, and synchronization
- **React Hook Form**: Form state management with `@hookform/resolvers` for validation
- **Zod**: Runtime type validation and schema validation
- **Drizzle-Zod**: Bridge between Drizzle ORM schemas and Zod validators

### Database & ORM
- **Drizzle ORM**: Type-safe ORM for PostgreSQL
- **@neondatabase/serverless**: Serverless PostgreSQL driver (Neon DB compatible)
- **connect-pg-simple**: PostgreSQL session store for Express

### Styling & Utilities
- **Tailwind CSS**: Utility-first CSS framework
- **class-variance-authority**: Variant-based component styling
- **clsx** + **tailwind-merge**: Class name utilities
- **date-fns**: Date manipulation and formatting

### Development Tools
- **Vite**: Frontend build tool and dev server
- **tsx**: TypeScript execution for Node.js
- **esbuild**: Fast JavaScript bundler
- **TypeScript**: Static type checking
- **Replit Plugins**: Development tooling (error overlay, dev banner, cartographer)

### Fonts
- **Google Fonts**: Amiri, Raleway, Aref Ruqaa via CDN for Islamic-inspired typography

### Future Integration Points
- PostgreSQL database (via DATABASE_URL environment variable)
- Session management (prepared infrastructure)
- User authentication (schema in place)
- API endpoints (routing infrastructure ready)