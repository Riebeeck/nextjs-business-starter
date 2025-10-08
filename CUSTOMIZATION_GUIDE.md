# Customization Guide

Complete guide to customizing the Next.js Business Starter Template for your needs.

## Table of Contents

1. [Branding](#branding)
2. [Content](#content)
3. [Styling & Themes](#styling--themes)
4. [Navigation](#navigation)
5. [Pages](#pages)
6. [Advanced](#advanced)

---

## Branding

### Change Company Name

**Find and replace** `"YourCompany"` in these files:

1. **`app/layout.tsx`** (lines 16-17, 22, 27, 31)
   - Update site title and metadata

2. **`components/Header.tsx`** (line 98)
   - Update navigation brand text

3. **`components/Footer.tsx`** (lines 195, 201)
   - Update footer branding and copyright

4. **`package.json`** (line 20)
   - Update author field

### Replace Logo

**Option 1: Same filename (easiest)**
1. Replace `/public/images/logos/company-logo.svg` with your logo
2. Keep the filename as `company-logo.svg`
3. Done! No code changes needed

**Option 2: Different filename**
1. Add your logo to `/public/images/logos/`
2. Update `/components/Header.tsx` (line 87):
```typescript
src="/images/logos/your-logo.svg"  // Change this line
alt="Your Company Name"             // And this line
```

**Logo Requirements:**
- Format: SVG (preferred) or PNG
- Recommended size: 200x200px or larger
- Use `currentColor` for SVG fills to support theme colors

### Update Metadata

Edit **`app/layout.tsx`** metadata:
```typescript
export const metadata: Metadata = {
  title: {
    default: 'Your Company Name - Tagline',
    template: '%s | Your Company Name',
  },
  description: 'Your company description for search engines',
  // ... update other fields
};
```

---

## Content

### Add Blog Posts

1. Create `/content/blog/your-post-slug.mdx`
2. Add frontmatter:
```mdx
---
title: "Your Post Title"
date: "2025-01-15"
summary: "Brief description for cards and SEO"
author: "Your Name"
tags: ["category1", "category2"]
---

# Your Post Title

Your content here with full Markdown support...

## Heading 2

- Bullet points
- **Bold text**
- *Italic text*
- [Links](https://example.com)

` ``typescript
// Code blocks with syntax highlighting
const example = "value";
` ``
```

3. The post automatically appears on `/blog`

### Add Projects

1. Create `/content/projects/your-project-slug.mdx`
2. Add frontmatter:
```mdx
---
title: "Project Name"
date: "2025-01-01"
summary: "Brief description"
description: "Longer description for the project page"
technologies: ["Next.js", "TypeScript", "Tailwind CSS"]
github: "https://github.com/username/repo"
demo: "https://demo-url.com"
---

# Project Name

Detailed project description, challenges, solutions, etc...
```

3. The project automatically appears on `/projects`

### Delete Example Content

**Remove example blog posts:**
```bash
rm content/blog/welcome-to-your-blog.mdx
rm content/blog/getting-started-nextjs.mdx
rm content/blog/why-typescript.mdx
```

**Remove example projects:**
```bash
rm content/projects/example-portfolio.mdx
rm content/projects/ecommerce-platform.mdx
rm content/projects/task-management-app.mdx
```

### Add Images

1. Place images in `/public/images/`
   - `/public/images/blog/` for blog images
   - `/public/images/projects/` for project images

2. Reference in MDX:
```mdx
![Alt text](/images/blog/my-image.jpg)
```

3. Or use Next.js Image component:
```mdx
import Image from 'next/image';

<Image 
  src="/images/blog/my-image.jpg" 
  alt="Description"
  width={800}
  height={600}
/>
```

---

## Styling & Themes

### Modify Existing Themes

Edit **`lib/themes/themes.ts`**:

```typescript
export const themes = {
  default: {
    name: 'Default',
    colors: {
      light: {
        background: '#ffffff',      // Change background color
        text: '#1a1a1a',           // Change text color
        primary: '#3b82f6',        // Change primary/accent color
        // ... modify other colors
      },
      dark: {
        // ... same for dark mode
      },
    },
  },
  // ... other themes
};
```

### Add New Theme

1. Edit **`lib/themes/themes.ts`**, add new theme:
```typescript
export const themes = {
  // ... existing themes
  mytheme: {
    name: 'My Theme',
    colors: {
      light: {
        background: '#f5f5f5',
        text: '#333333',
        primary: '#ff6b6b',
        secondary: '#4ecdc4',
        accent: '#ffe66d',
        'bg-secondary': '#eeeeee',
        'bg-tertiary': '#ffffff',
        'text-secondary': '#666666',
        'text-tertiary': '#999999',
        border: '#dddddd',
      },
      dark: {
        // Mirror structure for dark mode
      },
    },
  },
};
```

2. Update **`components/ThemeToggle.tsx`** to show new theme in dropdown

### Customize Tailwind

Edit **`app/globals.css`** to modify global styles:

```css
/* Add custom utilities */
@layer utilities {
  .text-balance {
    text-wrap: balance;
  }
}

/* Modify existing styles */
.hover-theme-lift {
  transition: transform 0.2s ease;
}

.hover-theme-lift:hover {
  transform: translateY(-2px); /* Adjust lift amount */
}
```

---

## Navigation

### Update Navigation Links

Edit **`components/Header.tsx`**:

**Main navigation** (line 104-122):
```typescript
<Link href="/your-page">Your Page</Link>
```

**Dropdown menus** (lines 13-70):
```typescript
const solutionsItems: DropdownSection[] = [
  {
    title: 'Your Section',
    items: [
      {
        name: 'Your Link',
        href: '/your-path',
        description: 'Description of your link',
      },
    ],
  },
];
```

### Simplify Navigation

To remove dropdowns and use simple links:

Replace the dropdown:
```typescript
<Dropdown title="Solutions" sections={solutionsItems} />
```

With a simple link:
```typescript
<Link
  href="/solutions"
  className="text-sm font-medium transition-colors hover:opacity-80"
  style={{ color: 'var(--theme-text-secondary)' }}
>
  Solutions
</Link>
```

### Update Footer Links

Edit **`components/Footer.tsx`** (lines 8-27):

```typescript
const footerLinks = {
  products: [
    { name: 'Your Link', href: '/your-path' },
  ],
  // ... other sections
};
```

### Update Social Links

Edit **`components/Footer.tsx`** (lines 29-76):

```typescript
const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com/yourusername',
    // ... icon
  },
  // ... add/remove social links
];
```

---

## Pages

### Modify Home Page

Edit **`app/page.tsx`**:

- Hero text (lines 20-37)
- Button text (lines 39-61)
- Section content (lines 65-221)

### Edit About/Company Page

Edit **`app/company/page.tsx`**:

- Update team members (lines 16-28)
- Update company values (lines 30-55)
- Update expertise areas (lines 57-74)

### Add New Page

1. Create directory: `app/your-page/`
2. Create `page.tsx`:
```typescript
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Your Page Title',
  description: 'Your page description',
};

export default function YourPage() {
  return (
    <div>
      <h1>Your Page</h1>
      <p>Your content...</p>
    </div>
  );
}
```

3. Add link to navigation

### Remove Unwanted Pages

Delete directories you don't need:
```bash
rm -rf app/solutions/      # Remove solutions pages
rm -rf app/developers/     # Remove developers page
rm -rf app/case-studies/   # Remove case studies
```

Then update navigation to remove links to deleted pages.

---

## Advanced

### Add Background Video

1. Add video file to `/public/videos/backgrounds/`
2. Edit page (e.g., `app/page.tsx`):
```typescript
<VideoHeroSection
  videoSrc="/videos/backgrounds/your-video.mp4"
  overlayOpacity={0.45}
  showOnMobile={true}  // or false to hide on mobile
>
  {/* Your hero content */}
</VideoHeroSection>
```

### Add Contact Form

1. Install form library:
```bash
npm install react-hook-form zod @hookform/resolvers
```

2. Create form component in `components/`
3. Add API route in `app/api/contact/route.ts`
4. Update `app/contact/page.tsx`

### Add Analytics

**Google Analytics:**
1. Add to `.env.local`:
```env
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

2. Create `app/GoogleAnalytics.tsx`
3. Add to `app/layout.tsx`

**Plausible (privacy-friendly):**
1. Add script to `app/layout.tsx`:
```typescript
<Script
  defer
  data-domain="yourdomain.com"
  src="https://plausible.io/js/script.js"
/>
```

### Custom Fonts

To use a different Google Font:

1. Edit **`app/layout.tsx`**:
```typescript
import { YourFont } from 'next/font/google';

const yourFont = YourFont({
  variable: '--font-your-font',
  subsets: ['latin'],
  display: 'swap',
});
```

2. Update body className
3. Update Tailwind config if needed

### Environment Variables

Create `.env.local` (never commit this file):
```env
# Public (accessible in browser)
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXT_PUBLIC_SITE_NAME=YourCompany

# Private (server-side only)
DATABASE_URL=postgresql://...
API_SECRET_KEY=...
```

Access in code:
```typescript
// Public
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

// Private (server-side only)
const dbUrl = process.env.DATABASE_URL;
```

---

## Quick Customization Checklist

Before deploying, customize:

- [ ] Company name (search and replace "YourCompany")
- [ ] Logo (`/public/images/logos/company-logo.svg`)
- [ ] Site metadata (`app/layout.tsx`)
- [ ] Footer copyright and social links
- [ ] Delete example blog posts
- [ ] Delete example projects
- [ ] Add your own content
- [ ] Update navigation links
- [ ] Update contact information
- [ ] Change site URLs in `sitemap.ts` and `robots.ts`
- [ ] Update `package.json` author and repository
- [ ] Create `.env.local` with your values

---

**Need more help?** Check the [README](README.md) or [open an issue](https://github.com/yourusername/nextjs-business-starter/issues).

