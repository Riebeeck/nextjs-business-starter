# Studio - Modern Portfolio & Content Platform

A clean, minimalist portfolio and content platform built with Next.js 15, TypeScript, and Tailwind CSS. Designed for showcasing work, writing, and future product offerings with a professional, business-ready aesthetic.

## 🚀 Tech Stack

- **Framework:** Next.js 15.5+ (App Router)
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS 4
- **Content:** MDX with gray-matter frontmatter parsing
- **Syntax Highlighting:** rehype-pretty-code + Shiki
- **Dark Mode:** next-themes
- **Font:** Inter from Google Fonts

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** version 18.17.0 or higher
- **npm** version 9.0.0 or higher
- **Git** for version control

Check your versions:
```bash
node --version  # Should be v18.17+
npm --version   # Should be 9.0+
git --version
```

## 🛠️ Installation

1. **Clone the repository:**
```bash
git clone https://github.com/Riebeeck/core_web.git
cd core_web
```

2. **Install dependencies:**
```bash
npm install
```

This will install all required packages including:
- next, react, react-dom
- next-mdx-remote, gray-matter
- rehype-pretty-code, shiki
- next-themes
- TypeScript and type definitions

## 🏃 Development

Start the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

The page auto-updates as you edit files. Changes to components, pages, and content will be reflected immediately.

## 📁 Project Structure

```
core_web/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Home page
│   ├── about/             # About page
│   ├── blog/              # Blog listing and posts
│   │   └── [slug]/        # Dynamic blog post pages
│   └── projects/          # Projects listing and details
│       └── [slug]/        # Dynamic project pages
├── components/            # Reusable React components
│   ├── Header.tsx         # Site header with navigation
│   ├── Footer.tsx         # Site footer
│   └── ThemeToggle.tsx    # Dark mode toggle
├── content/               # MDX content files
│   ├── blog/              # Blog posts (.mdx)
│   └── projects/          # Project case studies (.mdx)
├── lib/                   # Utility functions
│   └── content.ts         # MDX parsing and content utilities
├── types/                 # TypeScript type definitions
│   └── content.ts         # Content and frontmatter types
├── public/                # Static assets (images, icons)
├── package.json           # Dependencies and scripts
├── tsconfig.json          # TypeScript configuration
├── next.config.ts         # Next.js configuration
└── README.md              # This file
```

## ✨ Features

- **Minimalist Design:** Clean, professional aesthetic inspired by Squarespace and Vercel
- **Blog with MDX:** Write content in Markdown with React component support
- **Project Showcase:** Display work with detailed case studies
- **Dark Mode:** Automatic theme switching with manual toggle
- **SEO Optimized:** Dynamic metadata, sitemap, and robots.txt
- **Fully Responsive:** Mobile-first design that works on all devices
- **Type-Safe:** Full TypeScript coverage with strict mode
- **Performance:** Optimized with Next.js 15 App Router and static generation
- **E-commerce Ready:** Designed with future product/service sales in mind

## 🎨 Customization

### Branding

The site uses a generic "Studio" brand by default. To customize:

1. Update the brand name in `components/Header.tsx`
2. Update the site title in `app/layout.tsx`
3. Update the base URL in `app/sitemap.ts` and `app/robots.ts`
4. Replace the default content with your own

**Suggested brand names:** Studio, Lab, Forge, Atelier, Works, Digital

### Adding Blog Posts

Create a new `.mdx` file in `content/blog/`:

```mdx
---
title: "Your Post Title"
date: "2025-10-04"
summary: "A brief description of your post"
author: "Your Name"
tags: ["tag1", "tag2"]
---

Your content here with full MDX support...
```

### Adding Projects

Create a new `.mdx` file in `content/projects/`:

```mdx
---
title: "Project Name"
date: "2025-10-04"
summary: "Brief project description"
description: "Detailed description"
technologies: ["Next.js", "TypeScript", "Tailwind"]
github: "https://github.com/username/repo"
demo: "https://demo-url.com"
---

Project details and case study...
```

## 🏗️ Building for Production

Build the production-ready application:
```bash
npm run build
```

This creates an optimized production build in the `.next` directory.

Start the production server:
```bash
npm start
```

## 🚢 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and configure the build
4. Update the base URL in `app/sitemap.ts` and `app/robots.ts` with your domain
5. Deploy!

### Other Platforms

This project can be deployed to any platform that supports Node.js:
- **Netlify:** Use the Next.js plugin
- **AWS Amplify:** Connect your GitHub repository
- **Docker:** Create a Dockerfile for containerized deployment

### Environment Variables

When deploying, update these values:
- Base URL in `app/sitemap.ts` (line 6)
- Base URL in `app/robots.ts` (line 4)

## 📝 Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run clean` - Clear Next.js cache
- `npm run dev:clean` - Clear cache and start dev server

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file for local environment variables:
```env
# Add your environment variables here
```

### TypeScript

TypeScript is configured with strict mode enabled. See `tsconfig.json` for compiler options.

### Tailwind CSS

Tailwind is configured to use the Inter font and supports dark mode. Customize colors and theme in `app/globals.css`.

## 📚 Content Management

All content is stored as MDX files in the `content/` directory. This approach provides:
- Full version control for content
- Markdown with React components
- Type-safe frontmatter
- No external CMS required

## 🌙 Dark Mode

Dark mode is implemented using `next-themes` and automatically respects the user's system preference. Users can toggle between light and dark modes using the theme toggle component.

## 🛣️ Roadmap

### Future Enhancements

- **E-commerce Integration:** Add product listings and Stripe payment integration
- **Newsletter:** Email subscription with ConvertKit or Mailchimp
- **Analytics:** Google Analytics or Plausible integration
- **Search:** Full-text search for blog posts and projects
- **Comments:** Add comment system for blog posts
- **RSS Feed:** Auto-generated RSS feed for blog
- **CMS Integration:** Optional Sanity or Contentful integration

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

Built with:
- [Next.js](https://nextjs.org/) - The React Framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- [MDX](https://mdxjs.com/) - Markdown for the component era
- [Shiki](https://shiki.matsu.io/) - Beautiful syntax highlighting
- [next-themes](https://github.com/pacocoursey/next-themes) - Dark mode support

## 🎨 Design Philosophy

This project follows a minimalist design approach inspired by:
- **Squarespace:** Clean layouts, generous white space
- **Vercel:** Modern typography, subtle interactions
- **Linear:** Professional aesthetic, refined details

**Key principles:**
- Typography-focused (smaller, refined text)
- Generous white space
- Subtle animations and transitions
- Professional, business-ready design
- E-commerce capabilities in mind

---

**Note:** This project uses Node.js and npm for package management. If you're familiar with Python, think of:
- `package.json` as `requirements.txt`
- `node_modules/` as your virtual environment
- `npm install` as `pip install -r requirements.txt`