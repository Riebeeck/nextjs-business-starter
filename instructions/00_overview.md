# Portfolio Website Build - Overview

This directory contains phased instructions for building a production-ready Next.js portfolio website.

## Tech Stack

- **Framework:** Next.js 14+ (App Router)
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS with PostCSS
- **Content:** MDX files with frontmatter
- **Dark Mode:** next-themes
- **Syntax Highlighting:** rehype-pretty-code or shiki
- **Font:** Inter from Google Fonts

## Project Goals

- Fully portable and uploadable to GitHub
- Self-contained with all dependencies properly configured
- Following modern Next.js App Router best practices
- Beautiful, responsive, mobile-first design
- Light and dark mode support
- SEO optimized with dynamic metadata
- Production-ready with proper documentation

## Execution Order

Run these instruction files in sequence:

0. **00_environment_setup** - ⚠️ **READ FIRST** - Install Node.js, understand the ecosystem
1. **01_project_initialization** - Set up Next.js, TypeScript, Tailwind, and folder structure
2. **02_core_components** - Build Header, Footer, ThemeToggle, and Layout
3. **03_content_infrastructure** - Set up MDX parsing and create sample content
4. **04_page_implementation** - Create all pages (home, about, blog, projects)
5. **05_polish_optimization** - Design overhaul, SEO, performance, e-commerce prep
6. **06_git_setup** - Initialize Git and push to GitHub (@Riebeeck/core_web)

**Reference**: **07_design_guidelines** - Visual standards and design patterns (reference throughout)

## Key Principles

- **Portability**: All content in local files, no external dependencies
- **Best Practices**: Follow Next.js 14+ App Router conventions
- **Type Safety**: Full TypeScript coverage with proper types
- **Modern Stack**: Latest versions of all dependencies
- **Responsive Design**: Mobile-first approach
- **Accessibility**: Semantic HTML, keyboard navigation, ARIA labels
- **Performance**: Optimized images, code splitting, fast load times
- **SEO**: Dynamic metadata, semantic structure, sitemap
- **Maintainability**: Clean code, consistent patterns, good documentation

## Alternative Approach

If you prefer to build everything at once, you can use the comprehensive prompt in `01_base_website` (original combined version).

## Repository Information

- **GitHub Account**: [@Riebeeck](https://github.com/Riebeeck)
- **Repository**: `https://github.com/Riebeeck/core_web`
- **LinkedIn**: [Riebeeck van Niekerk](https://www.linkedin.com/in/riebeeckvanniekerk/)

## After Completion

Once all phases are complete, you'll have:
- A fully functional portfolio website
- Blog with MDX support and syntax highlighting
- Projects showcase with detailed case studies
- Light/dark mode toggle
- Responsive design for all screen sizes
- SEO-optimized pages
- Version controlled with Git and hosted on GitHub
- Ready to deploy to Vercel, Netlify, or GitHub Pages
- Complete documentation for maintenance and updates
