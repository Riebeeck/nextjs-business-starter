# Images Directory

This directory contains all image assets for the website.

## Structure

- **logos/** - Custom logos and brand assets
  - Use SVG format when possible for scalability
  - PNG with transparent background as fallback
  - Recommended sizes: 512x512, 256x256, 128x128

- **blog/** - Blog post images
  - Hero images for blog posts
  - Inline images referenced in MDX content
  - Recommended format: WebP (with JPG fallback)
  - Recommended size: 1200x630 for hero images

- **projects/** - Project screenshots and images
  - Project hero images
  - Screenshots, mockups, diagrams
  - Recommended format: WebP (with PNG fallback for screenshots)
  - Recommended size: 1200x630 for hero images

- **og/** - Open Graph images for social sharing
  - Used for social media previews (Twitter, LinkedIn, Facebook)
  - Required size: 1200x630 pixels
  - Format: JPG or PNG

- **general/** - General site images
  - Hero section images
  - About page photos
  - Background images
  - Icons and illustrations

## Optimization Tips

1. **Always optimize images before uploading:**
   - Use tools like [Squoosh](https://squoosh.app/) or [TinyPNG](https://tinypng.com/)
   - Target file size: < 200KB for hero images, < 100KB for thumbnails

2. **Prefer modern formats:**
   - WebP for photos (better compression)
   - SVG for logos and icons (scalable)
   - PNG for images requiring transparency

3. **Naming conventions:**
   - Use kebab-case: `my-project-hero.jpg`
   - Be descriptive: `nextjs-tutorial-screenshot-1.png`
   - Include dimensions if multiple sizes: `logo-512.png`, `logo-256.png`

## Usage in MDX

### Images
```mdx
![Alt text](/images/blog/my-image.jpg)
```

### With caption
```mdx
![Project screenshot](/images/projects/dashboard.png)
*Figure 1: Dashboard overview showing analytics*
```

## Usage in Components

```tsx
import Image from 'next/image';

<Image
  src="/images/logos/my-logo.svg"
  alt="Company Logo"
  width={200}
  height={200}
  priority
/>
```
