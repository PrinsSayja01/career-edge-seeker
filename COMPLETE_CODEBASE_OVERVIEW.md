# Complete Codebase Overview - CV Analysis Application

## Project Description
This is a modern React TypeScript application called **ResumeAI** - a CV/Resume analysis platform that helps job seekers optimize their resumes for ATS (Applicant Tracking Systems) and match job requirements.

## Technology Stack
- **Frontend Framework**: React 18.3.1 with TypeScript
- **Build Tool**: Vite 5.4.1
- **UI Framework**: shadcn/ui components with Radix UI primitives
- **Styling**: Tailwind CSS with custom design tokens
- **Routing**: React Router DOM v6
- **State Management**: React Query (TanStack Query)
- **Form Handling**: React Hook Form with Zod validation
- **Icons**: Lucide React
- **Package Manager**: npm (with Bun lockfile support)

## Project Structure

```
├── public/
│   ├── favicon.ico
│   ├── placeholder.svg
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── ui/           # shadcn/ui components (50+ components)
│   │   ├── Features.tsx  # Landing page features section
│   │   ├── Footer.tsx    # Site footer
│   │   ├── Header.tsx    # Navigation header
│   │   ├── Hero.tsx      # Landing page hero section
│   │   └── Pricing.tsx   # Pricing section
│   ├── hooks/
│   │   ├── use-mobile.tsx
│   │   └── use-toast.ts
│   ├── lib/
│   │   └── utils.ts      # Utility functions
│   ├── pages/
│   │   ├── Index.tsx     # Landing page
│   │   ├── CVAnalysis.tsx # Main CV analysis page
│   │   └── NotFound.tsx  # 404 page
│   ├── App.tsx           # Main app component
│   ├── main.tsx          # Application entry point
│   ├── index.css         # Global styles & design system
│   ├── App.css           # Additional styles
│   └── vite-env.d.ts     # Vite type declarations
├── .git/                 # Git repository
├── .gitignore           # Git ignore rules
├── README.md            # Project documentation
├── bun.lockb           # Bun lockfile
├── components.json     # shadcn/ui configuration
├── eslint.config.js    # ESLint configuration
├── index.html          # HTML entry point
├── package.json        # Dependencies and scripts
├── package-lock.json   # npm lockfile
├── postcss.config.js   # PostCSS configuration
├── tailwind.config.ts  # Tailwind CSS configuration
├── tsconfig.json       # TypeScript configuration
├── tsconfig.app.json   # App-specific TS config
├── tsconfig.node.json  # Node-specific TS config
└── vite.config.ts      # Vite configuration
```

## Key Features

### 🎯 CV Analysis Engine
- Upload CV/Resume (PDF, DOCX support)
- Job description analysis
- ATS score calculation
- Missing keyword detection
- Match percentage calculation
- Actionable recommendations

### 🎨 Modern UI/UX
- Professional design with gradients and glassmorphism
- Responsive layout for all devices
- Dark/light mode support
- Smooth animations and transitions
- Accessible components

### 🔧 Developer Experience
- TypeScript for type safety
- ESLint for code quality
- Hot module replacement with Vite
- Component-driven architecture
- Consistent design system

## Core Components

### 1. Landing Page (`src/pages/Index.tsx`)
```typescript
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Features />
      <Pricing />
      <Footer />
    </div>
  );
};
```

### 2. CV Analysis Page (`src/pages/CVAnalysis.tsx`)
Key features:
- File upload for CV/Resume
- Job description input
- Real-time analysis simulation
- Results display with:
  - ATS Score (out of 100)
  - Match percentage
  - Missing keywords
  - Strengths identification
  - Improvement recommendations

### 3. Navigation Header (`src/components/Header.tsx`)
- Responsive navigation
- Mobile menu support
- Brand logo and navigation links
- CTA buttons (Login, Start Free Trial)

### 4. Hero Section (`src/components/Hero.tsx`)
- Gradient background with animations
- Compelling headline and CTA
- Trust indicators
- Link to CV analysis tool

## Configuration Files

### Package.json Scripts
```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "build:dev": "vite build --mode development",
    "lint": "eslint .",
    "preview": "vite preview"
  }
}
```

### Vite Configuration
- React SWC plugin for fast compilation
- Path aliases (@/ pointing to src/)
- Development server on port 8080
- Component tagger for development

### Tailwind Configuration
- Custom design system with HSL color variables
- Professional color palette (blues, purples, greens)
- Custom gradients and shadows
- Typography system with Inter and Cal Sans fonts
- Dark mode support

## Design System

### Color Palette
- **Primary**: Professional blue (`hsl(217, 91%, 60%)`)
- **Secondary**: Elegant purple (`hsl(262, 83%, 58%)`)
- **Accent**: Success green (`hsl(142, 76%, 36%)`)
- **Warning**: Amber (`hsl(38, 92%, 50%)`)
- **Muted**: Subtle grays for backgrounds

### Gradients
- **Primary**: Blue to purple gradient
- **Hero**: Multi-color gradient (blue → purple → magenta)
- **Accent**: Green gradient for success states

### Typography
- **Sans**: Inter font family
- **Display**: Cal Sans for headings

## Development Setup

### Prerequisites
- Node.js (recommended: latest LTS)
- npm or bun package manager

### Installation & Running
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linting
npm run lint
```

### Environment
- Development server: `http://localhost:8080`
- Hot module replacement enabled
- TypeScript strict mode

## Key Dependencies

### Core
- `react`: ^18.3.1
- `react-dom`: ^18.3.1
- `typescript`: ^5.5.3
- `vite`: ^5.4.1

### UI & Styling
- `tailwindcss`: ^3.4.11
- `@radix-ui/*`: Multiple Radix UI primitives
- `lucide-react`: ^0.462.0 (icons)
- `class-variance-authority`: ^0.7.1
- `tailwind-merge`: ^2.5.2

### Routing & State
- `react-router-dom`: ^6.26.2
- `@tanstack/react-query`: ^5.56.2

### Forms & Validation
- `react-hook-form`: ^7.53.0
- `@hookform/resolvers`: ^3.9.0
- `zod`: ^3.23.8

### UI Enhancements
- `sonner`: ^1.5.0 (toast notifications)
- `date-fns`: ^3.6.0 (date utilities)
- `embla-carousel-react`: ^8.3.0 (carousels)

## File Contents Summary

### Entry Points
- **`src/main.tsx`**: Application root with React 18 createRoot
- **`src/App.tsx`**: Router setup with QueryClient provider
- **`index.html`**: HTML template with meta tags

### Routing Structure
- `/` → Landing page (Index.tsx)
- `/cv-analysis` → CV analysis tool
- `*` → 404 Not Found page

### Styling Architecture
- Global styles in `src/index.css` with CSS custom properties
- Component-specific styles using Tailwind classes
- Design tokens defined as CSS variables
- Responsive design with mobile-first approach

## Features in Detail

### CV Analysis Workflow
1. **Upload**: User uploads CV/Resume (PDF/DOCX)
2. **Input**: User pastes job description
3. **Analysis**: System processes both documents
4. **Results**: Display ATS score, match percentage, and recommendations

### Analysis Results Include
- **ATS Score**: Numerical score out of 100
- **Match Percentage**: How well CV matches job requirements
- **Missing Keywords**: Important terms not found in CV
- **Strengths**: Existing skills that match well
- **Recommendations**: Actionable improvement suggestions

### UI/UX Highlights
- **Glassmorphism**: Backdrop blur effects
- **Gradient Backgrounds**: Modern visual appeal
- **Micro-animations**: Smooth transitions
- **Responsive Design**: Works on all screen sizes
- **Accessibility**: ARIA labels and keyboard navigation

## Build & Deployment

### Production Build
```bash
npm run build
```
Outputs optimized static files to `dist/` directory.

### Deployment Options
- Static hosting (Vercel, Netlify, etc.)
- CDN deployment
- Docker containerization support

This codebase represents a modern, professional CV analysis application with excellent developer experience and user interface design.