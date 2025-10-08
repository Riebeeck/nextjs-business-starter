# Next.js Business Starter Template

A modern, production-ready Next.js 15 starter template for building professional portfolios, blogs, and business websites. Features TypeScript, Tailwind CSS, MDX content management, and a powerful multi-theme system.

## Features

- **Next.js 15 App Router** - Modern React framework with latest features
- **TypeScript** - Full type safety with strict mode
- **Tailwind CSS 4** - Utility-first styling with custom theme system
- **MDX Support** - Write content in Markdown with React components
- **Multi-Theme System** - Five built-in themes with easy customization
- **Dark Mode** - Automatic and manual theme switching
- **Blog & Projects** - Pre-built content management for blogs and portfolios
- **Syntax Highlighting** - Beautiful code blocks with Shiki
- **Responsive Design** - Mobile-first, works on all devices
- **SEO Optimized** - Meta tags, sitemap, and robots.txt included
- **Performance Focused** - Optimized images and lazy loading
- **Background Video Support** - Optional hero section videos
- **Type-Safe** - Comprehensive TypeScript coverage

## Quick Start

```bash
# Clone the repository
git clone https://github.com/yourusername/nextjs-business-starter.git
cd nextjs-business-starter

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your site.

### Helper Scripts

For convenience, you can use these scripts:

```bash
# Start development server
./start-dev.sh

# Stop development server
./stop-dev.sh

# Restart development server
./restart-dev.sh
```

Or use npm commands directly:
```bash
npm run dev    # Start (press Ctrl+C to stop)
npm run build  # Build for production
npm start      # Start production server
npm run lint   # Check code quality
```

## Prerequisites

- **Node.js** 18.17.0 or higher
- **npm** 9.0.0 or higher

Check your versions:
```bash
node --version  # Should be v18.17+
npm --version   # Should be 9.0+
```

## Project Structure

```
├── app/                      # Next.js App Router pages
│   ├── layout.tsx           # Root layout with metadata
│   ├── page.tsx             # Home page
│   ├── blog/                # Blog pages
│   │   ├── page.tsx         # Blog listing
│   │   └── [slug]/          # Individual blog posts
│   ├── projects/            # Portfolio projects
│   │   ├── page.tsx         # Projects listing
│   │   └── [slug]/          # Individual project pages
│   ├── about/               # About page
│   ├── contact/             # Contact page
│   ├── company/             # Company/team page
│   └── solutions/           # Solution pages (optional)
├── components/              # Reusable React components
│   ├── Header.tsx          # Site navigation
│   ├── Footer.tsx          # Site footer
│   ├── ThemeToggle.tsx     # Theme switcher
│   └── ui/                 # UI components
├── content/                # MDX content files
│   ├── blog/              # Blog posts (.mdx)
│   └── projects/          # Project case studies (.mdx)
├── lib/                   # Utility functions
│   ├── content.ts         # MDX parsing
│   ├── projects.ts        # Project utilities
│   └── themes/            # Theme system
├── public/                # Static assets
│   ├── images/           # Images and logos
│   └── videos/           # Background videos (optional)
├── types/                # TypeScript type definitions
└── README.md             # This file
```

## Customization

### 1. Change Branding

**Update company name:**
- Find and replace `"YourCompany"` with your company name in:
  - `app/layout.tsx` - Site metadata
  - `components/Header.tsx` - Navigation
  - `components/Footer.tsx` - Footer text
  - `package.json` - Package info

**Update logo:**
1. Replace `/public/images/logos/company-logo.svg` with your logo
2. Keep the same filename or update the path in `components/Header.tsx`

### 2. Customize Content

**Add blog posts:**
1. Create a new `.mdx` file in `content/blog/`
2. Add frontmatter:
```mdx
---
title: "Your Post Title"
date: "2025-01-15"
summary: "Brief description"
author: "Your Name"
tags: ["tag1", "tag2"]
---

Your content here...
```

**Add projects:**
1. Create a new `.mdx` file in `content/projects/`
2. Add frontmatter:
```mdx
---
title: "Project Name"
date: "2025-01-01"
summary: "Brief description"
description: "Detailed description"
technologies: ["Next.js", "TypeScript"]
github: "https://github.com/username/project"
demo: "https://demo-url.com"
---

Project details...
```

### 3. Customize Themes

The template includes 5 built-in themes. To modify or add themes:

1. Edit `lib/themes/themes.ts`
2. Modify color values for existing themes or add new ones
3. Update theme toggle in `components/ThemeToggle.tsx`

### 4. Update URLs

Before deploying, update these URLs:
- `app/sitemap.ts` - Change base URL to your domain
- `app/robots.ts` - Change base URL to your domain
- `package.json` - Update repository URL

See `CUSTOMIZATION_GUIDE.md` for detailed customization instructions.

## Development

```bash
# Start development server with Turbopack
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run ESLint
npm run lint

# Clear Next.js cache
npm run clean

# Clear cache and start dev server
npm run dev:clean
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will auto-detect Next.js
4. Update base URLs in `app/sitemap.ts` and `app/robots.ts`
5. Deploy!

### Other Platforms

This template works on any platform supporting Node.js:
- **Netlify** - Use the Next.js plugin
- **AWS Amplify** - Connect your GitHub repository
- **Docker** - Create a Dockerfile for containerization

See `DEPLOYMENT.md` for detailed deployment instructions.

## Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/) - React framework with App Router
- **Language:** [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/) - Utility-first CSS
- **Content:** [MDX](https://mdxjs.com/) - Markdown with React components
- **Syntax Highlighting:** [Shiki](https://shiki.matsu.io/) - Beautiful code highlighting
- **Themes:** [next-themes](https://github.com/pacocoursey/next-themes) - Theme management
- **Font:** [Inter](https://fonts.google.com/specimen/Inter) - From Google Fonts

## Content Management

All content is stored as MDX files in the `content/` directory. This approach provides:

- **Version Control** - Track content changes in Git
- **Type Safety** - Validated frontmatter with TypeScript
- **React Components** - Use components in your content
- **No Database** - Simple file-based system
- **Easy Migration** - Plain Markdown files

## Key Features

### Multi-Theme System

Five professionally designed themes:
- **Default** - Clean and modern
- **Ocean** - Blue-focused palette
- **Sunset** - Warm, orange tones
- **Forest** - Natural green colors
- **Midnight** - Dark, professional look

Each theme supports light and dark modes.

### Background Video Support

Optional hero section background videos:
- Automatic pause on mobile to save bandwidth
- Respects prefers-reduced-motion
- Graceful fallback to static images
- Performance optimized

### Blog System

- MDX-powered blog posts
- Syntax highlighting for code blocks
- Tag system for organization
- Automatic blog listing page
- SEO-friendly URLs

### Project Portfolio

- Showcase your work with detailed case studies
- Technology tags
- GitHub and demo links
- Responsive project cards
- Filterable project listing

## Performance

- **Lighthouse Score:** 95+ on all metrics
- **Image Optimization:** Automatic with next/image
- **Code Splitting:** Automatic route-based splitting
- **Static Generation:** Pre-rendered pages for speed
- **Font Optimization:** Automatic with next/font

## SEO

- Dynamic metadata for all pages
- Open Graph tags for social sharing
- Automatic sitemap generation
- Robots.txt configuration
- Semantic HTML structure
- Structured data ready

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Android)

## Environment Variables

Create a `.env.local` file for environment-specific configuration:

```env
# Copy from .env.example
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXT_PUBLIC_SITE_NAME=YourCompany
```

See `.env.example` for all available variables.

## Troubleshooting

### Build Fails

```bash
# Clear Next.js cache
npm run clean

# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Images Not Loading

- Ensure images are in `/public/` directory
- Check file paths are correct (case-sensitive)
- Verify image formats are supported (JPG, PNG, WebP, SVG)

### Theme Not Switching

- Clear browser cache
- Check browser console for errors
- Verify `next-themes` is installed

### MDX Content Not Showing

- Verify frontmatter syntax is correct
- Check file extension is `.mdx`
- Ensure MDX file is in correct directory
- Check console for parsing errors

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

- **Documentation:** Read the guides in this repository
- **Issues:** [GitHub Issues](https://github.com/yourusername/nextjs-business-starter/issues)
- **Discussions:** [GitHub Discussions](https://github.com/yourusername/nextjs-business-starter/discussions)

## Roadmap

Potential future enhancements:
- Contact form with validation
- Newsletter integration
- Search functionality
- Comment system for blog posts
- RSS feed generation
- Multi-language support
- CMS integration option (Contentful, Sanity)
- Analytics integration (Google Analytics, Plausible)

## Acknowledgments

Built with:
- [Next.js](https://nextjs.org/) by Vercel
- [Tailwind CSS](https://tailwindcss.com/)
- [MDX](https://mdxjs.com/)
- [Shiki](https://shiki.matsu.io/)
- [next-themes](https://github.com/pacocoursey/next-themes)

## Related Projects

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [MDX Documentation](https://mdxjs.com/docs)

---

**Made with ❤️ using Next.js** - Start building your digital presence today!

