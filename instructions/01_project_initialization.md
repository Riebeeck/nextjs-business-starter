# Phase 1: Project Initialization & Setup

Create a production-ready Next.js 14+ portfolio website using TypeScript and Tailwind CSS. The project must be:
- Fully portable and uploadable to GitHub
- Self-contained with all dependencies properly configured
- Following modern Next.js App Router best practices

## Prerequisites

Before starting, ensure you have:
- **Node.js** version 18.17 or higher installed
- **npm** (comes with Node.js) or **yarn** package manager
- **Git** installed and configured

Check your versions:
```bash
node --version  # Should be v18.17+
npm --version   # Should be 9.0+
git --version
```

## Environment Setup

This is a **Node.js/JavaScript project** (not Python), so we use:
- **Node.js** runtime environment
- **npm** or **yarn** for package management
- **package.json** to track all dependencies (equivalent to requirements.txt)
- **package-lock.json** or **yarn.lock** for exact version locking

**Note**: If you're familiar with Python virtual environments, think of Node.js project isolation this way:
- `node_modules/` = your isolated environment (like venv)
- `package.json` = your requirements.txt
- `package-lock.json` = your pinned versions
- `npm install` = pip install -r requirements.txt

## Initial Setup Requirements:

### 1. Initialize Next.js Project:
- Use Next.js 14+ with App Router
- Configure TypeScript with strict mode
- Set up Tailwind CSS with PostCSS
- Install and configure the following dependencies:
  * `contentlayer` or `next-mdx-remote` for MDX processing
  * `gray-matter` for frontmatter parsing
  * `rehype-pretty-code` or `shiki` for code syntax highlighting
  * `next-themes` for dark mode support
  * Any necessary type definitions

### 2. Project Structure:
```
/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── about/
│   │   └── page.tsx
│   ├── blog/
│   │   ├── page.tsx
│   │   └── [slug]/
│   │       └── page.tsx
│   └── projects/
│       ├── page.tsx
│       └── [slug]/
│           └── page.tsx
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── ThemeToggle.tsx
│   └── (other reusable components)
├── content/
│   ├── blog/
│   │   ├── example-post-1.mdx
│   │   └── example-post-2.mdx
│   └── projects/
│       ├── example-project-1.mdx
│       └── example-project-2.mdx
├── lib/
│   └── (utility functions for content parsing)
├── public/
│   └── (images and static assets)
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── postcss.config.js
└── README.md
```

### 3. Configuration Files:
- Create `package.json` with all necessary dependencies
- Configure `tsconfig.json` with appropriate compiler options
- Set up `tailwind.config.ts` with custom theme (Inter or Sora font)
- Configure `postcss.config.js` for Tailwind
- Add `.gitignore` for Next.js projects
- Create a comprehensive `README.md` with setup instructions

---

## Execution Prompt:

Create a new Next.js 14 project with TypeScript and Tailwind CSS for a personal portfolio website.

**IMPORTANT - Environment Setup First:**
1. Verify Node.js version 18.17+ is installed: `node --version`
2. Create project directory if needed: `mkdir -p core_web && cd core_web`
3. Initialize Next.js with: `npx create-next-app@latest . --typescript --tailwind --app --no-src-dir --import-alias "@/*"`

**Project Configuration:**
1. Initialize with App Router (not Pages Router)
2. Set up TypeScript with strict mode enabled
3. Configure Tailwind CSS with PostCSS
4. Install these dependencies:
   ```bash
   npm install next-mdx-remote gray-matter rehype-pretty-code shiki next-themes
   npm install -D @types/node @types/react @types/react-dom
   ```
5. Create the folder structure: app/, components/, content/blog/, content/projects/, lib/, public/
6. Configure Tailwind to use Inter font from Google Fonts
7. Set up proper TypeScript types for MDX content with frontmatter (title, date, summary, author)
8. Create a comprehensive README.md with:
   - Project description
   - Prerequisites (Node.js version)
   - Installation instructions (`npm install`)
   - Development server command (`npm run dev`)
   - Build command (`npm run build`)
   - Deployment instructions
9. Ensure package.json includes all dependencies with specific versions
10. Create .nvmrc file with Node.js version for consistency
11. Ensure all configuration files are properly set up for GitHub deployment

**Reproducibility Requirements:**
- package.json must list ALL dependencies with versions
- package-lock.json must be generated (do NOT gitignore it)
- Create .nvmrc file with: `18.17.0` (or current Node version)
- Create .node-version file for other version managers
- README.md must include exact setup steps for new developers

Do NOT implement any pages or components yet - just the project scaffolding.
