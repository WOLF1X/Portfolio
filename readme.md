# Portfolio Website


## Overview

This is a professional portfolio website for Binit Deb, a Full Stack Developer. The application is built as a full-stack web application using React for the frontend and Express.js for the backend, with a focus on modern design and responsive user experience.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: Shadcn/UI component library with Radix UI primitives
- **Routing**: Wouter for client-side routing
- **State Management**: React Query (TanStack Query) for server state
- **Build Tool**: Vite for development and production builds
- **Theme System**: Custom light/dark mode implementation with CSS variables

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Runtime**: Node.js with ES modules
- **Database ORM**: Drizzle ORM configured for PostgreSQL
- **Database**: Neon Database (serverless PostgreSQL)
- **Session Management**: Connect-pg-simple for PostgreSQL session storage
- **Validation**: Zod for request/response validation
- **Development**: TSX for TypeScript execution

### Project Structure
- **Monorepo**: Single repository with shared code between client and server
- **Client**: Located in `/client` directory with Vite configuration
- **Server**: Located in `/server` directory with Express setup
- **Shared**: Common schemas and types in `/shared` directory

## Key Components

### Frontend Components
1. **Portfolio Page**: Main landing page with all sections
2. **Navigation**: Fixed header with smooth scrolling and theme toggle
3. **Hero Section**: Introduction with call-to-action buttons
4. **About Section**: Personal information and downloadable resume
5. **Projects Section**: Filterable project showcase with categories
6. **Skills Section**: Animated skill bars and technology icons
7. **Contact Section**: Form with validation and email integration
8. **Footer**: Links and additional navigation

### Backend Components
1. **Contact API**: POST `/api/contact` endpoint for form submissions
2. **User Storage**: In-memory storage with interface for future database integration
3. **Middleware**: Request logging and error handling
4. **Development Server**: Vite integration for hot module replacement

### UI System
- **Design System**: Consistent color palette with CSS custom properties
- **Components**: Comprehensive UI library including buttons, forms, cards, dialogs
- **Responsive Design**: Mobile-first approach with breakpoint system
- **Accessibility**: ARIA labels and keyboard navigation support

## Data Flow

### Contact Form Flow
1. User fills out contact form with validation
2. Form data is validated using Zod schema
3. POST request sent to `/api/contact` endpoint
4. Server logs submission and responds with success/error
5. Client displays toast notification to user

### Theme Management
1. Theme preference stored in localStorage
2. CSS custom properties updated on theme change
3. System preference detection for initial theme
4. Smooth transitions between light and dark modes

### Navigation Flow
1. Single-page application with smooth scrolling
2. Navigation items trigger scroll to sections
3. Mobile-responsive menu with hamburger toggle
4. Scroll-based header background changes

## External Dependencies

### Database
- **Neon Database**: Serverless PostgreSQL for production
- **Drizzle ORM**: Type-safe database operations
- **Connection**: Environment-based DATABASE_URL configuration

### UI Libraries
- **Radix UI**: Accessible component primitives
- **Lucide React**: Icon library for consistent iconography
- **Embla Carousel**: Touch-friendly carousel component
- **React Hook Form**: Form state management with validation

### Development Tools
- **TypeScript**: Full type safety across the stack
- **ESLint**: Code linting and formatting
- **PostCSS**: CSS processing with Tailwind

## Deployment Strategy

### Build Process
1. Frontend build using Vite to `/dist/public`
2. Backend build using esbuild to `/dist/index.js`
3. Single deployment artifact with static file serving
4. Environment-based configuration for database and external services

### Production Configuration
- **Static Assets**: Served from `/dist/public`
- **API Routes**: Express server handles `/api/*` endpoints
- **Fallback**: SPA routing with index.html fallback
- **Environment Variables**: DATABASE_URL and NODE_ENV configuration

### Development Workflow
- **Hot Reload**: Vite middleware integrated with Express
- **Database Migrations**: Drizzle Kit for schema management
- **Type Safety**: Shared types between client and server
- **Code Generation**: Automatic schema-to-TypeScript type generation

## Changelog

```
Changelog:
- July 05, 2025. Initial setup
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```# my-portfolio
