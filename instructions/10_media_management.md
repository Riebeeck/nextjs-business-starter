# Media Management Guide

This guide explains how to add and use images, videos, logos, and other media assets in your website.

## Directory Structure

All media files are stored in the `public/` directory:

```
public/
├── images/
│   ├── logos/           # Custom logos and brand assets
│   ├── blog/            # Blog post images
│   ├── projects/        # Project screenshots/images
│   ├── og/              # Open Graph images for social sharing
│   └── general/         # General site images (hero, about, etc.)
├── videos/
│   ├── demos/           # Product/project demos
│   ├── tutorials/       # Tutorial videos
│   └── general/         # Other video content
└── assets/              # Other media (PDFs, documents, etc.)
```

## Adding Images

### 1. Optimize Your Images First

Before adding images to your project, optimize them:

- **Tools:** [Squoosh](https://squoosh.app/), [TinyPNG](https://tinypng.com/), or ImageOptim
- **Target sizes:**
  - Hero images: < 200KB
  - Thumbnails: < 100KB
  - Logos: < 50KB

### 2. Choose the Right Format

- **WebP** - Best for photos (modern browsers, great compression)
- **SVG** - Perfect for logos and icons (scalable, small file size)
- **PNG** - Use for images requiring transparency
- **JPG** - Fallback for photos

### 3. Save to Appropriate Directory

```bash
# Example: Adding a logo
public/images/logos/my-company-logo.svg

# Example: Adding a blog post image
public/images/blog/nextjs-tutorial-hero.jpg

# Example: Adding a project screenshot
public/images/projects/dashboard-screenshot.png
```

### 4. Use in MDX Content

```mdx
---
title: "My Blog Post"
date: "2025-10-05"
summary: "A great post"
image: "/images/blog/nextjs-tutorial-hero.jpg"
---

# My Blog Post

Here's an inline image:

![Dashboard screenshot showing analytics](/images/projects/dashboard-screenshot.png)

The alt text will automatically appear as a caption below the image.
```

### 5. Use in React Components

```tsx
import Image from 'next/image';

export default function MyComponent() {
  return (
    <Image
      src="/images/logos/my-logo.svg"
      alt="Company Logo"
      width={200}
      height={200}
      priority // Use for above-the-fold images
      className="rounded-lg"
    />
  );
}
```

## Adding Videos

### Local MP4 Files

#### 1. Optimize Your Video

Use [HandBrake](https://handbrake.fr/) or FFmpeg:

```bash
# Compress to MP4 (H.264)
ffmpeg -i input.mov -c:v libx264 -crf 23 -c:a aac -b:a 128k output.mp4

# Convert to WebM (optional, for better compression)
ffmpeg -i input.mov -c:v libvpx-vp9 -crf 30 -b:v 0 -c:a libopus output.webm
```

**Guidelines:**
- Keep videos under 50MB when possible
- Resolution: 1080p for demos, 720p for tutorials
- Duration: < 2 minutes ideal (use YouTube for longer videos)

#### 2. Save to Videos Directory

```bash
# Example: Adding a demo video
public/videos/demos/product-walkthrough.mp4

# Example: Adding a tutorial
public/videos/tutorials/how-to-setup.mp4
```

#### 3. Use in MDX Content

```mdx
# Project Demo

Check out this demo of the feature:

<video src="/videos/demos/product-walkthrough.mp4" controls />

Or with more options:

<video 
  src="/videos/demos/background-animation.mp4" 
  autoPlay 
  loop 
  muted 
/>
```

### YouTube Videos

For longer videos or to save bandwidth, use YouTube:

#### 1. Upload to YouTube

Upload your video to YouTube and get the video ID from the URL:
- URL: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`
- Video ID: `dQw4w9WgXcQ`

#### 2. Use in MDX Content

```mdx
# Tutorial Video

<YouTube id="dQw4w9WgXcQ" title="How to Build a Next.js App" />
```

## Adding Logos

### 1. Create Your Logo

- **Preferred format:** SVG (scalable, small file size)
- **Fallback format:** PNG with transparent background
- **Recommended sizes:** 512x512, 256x256, 128x128

### 2. Save to Logos Directory

```bash
public/images/logos/company-logo.svg
public/images/logos/company-logo-512.png
public/images/logos/company-logo-256.png
```

### 3. Use in Components

```tsx
// In Header.tsx or any component
import Image from 'next/image';

<Image
  src="/images/logos/company-logo.svg"
  alt="Company Name"
  width={150}
  height={50}
  priority
/>
```

## Open Graph Images (Social Sharing)

When you share your site on social media, Open Graph images appear as previews.

### 1. Create OG Image

- **Required size:** 1200x630 pixels
- **Format:** JPG or PNG
- **Content:** Include title, logo, and visual interest
- **Tools:** [Canva](https://www.canva.com/), Figma, or [og-image.vercel.app](https://og-image.vercel.app/)

### 2. Save to OG Directory

```bash
public/images/og/homepage-og.jpg
public/images/og/blog-default-og.jpg
public/images/og/projects-default-og.jpg
```

### 3. Use in Metadata

```tsx
// In app/page.tsx or any page
export const metadata = {
  title: 'My Portfolio',
  description: 'Welcome to my portfolio',
  openGraph: {
    title: 'My Portfolio',
    description: 'Welcome to my portfolio',
    images: ['/images/og/homepage-og.jpg'],
  },
};
```

For dynamic pages:

```tsx
// In app/blog/[slug]/page.tsx
export async function generateMetadata({ params }): Promise<Metadata> {
  const post = await getBlogPost(params.slug);
  
  return {
    title: post.title,
    description: post.summary,
    openGraph: {
      title: post.title,
      description: post.summary,
      images: [post.image || '/images/og/blog-default-og.jpg'],
    },
  };
}
```

## Best Practices

### Image Optimization Checklist

- [ ] Compress images before adding to project
- [ ] Use WebP format when possible
- [ ] Provide appropriate alt text
- [ ] Use next/image component (not `<img>`)
- [ ] Specify width and height attributes
- [ ] Add `priority` prop for above-the-fold images

### Video Best Practices

- [ ] Compress videos to reasonable file sizes (< 50MB)
- [ ] Provide both MP4 and WebM formats for compatibility
- [ ] Use YouTube/Vimeo for videos > 2 minutes
- [ ] Always include controls for user-initiated playback
- [ ] Mute autoplay videos (better UX)
- [ ] Consider mobile data usage

### Naming Conventions

- Use kebab-case: `my-project-hero.jpg`
- Be descriptive: `dashboard-analytics-screenshot.png`
- Include dimensions for multiple sizes: `logo-512.png`
- Avoid special characters and spaces
- Use consistent naming across similar assets

### Accessibility

- Always provide meaningful alt text for images
- Don't use "image of" or "picture of" in alt text
- For decorative images, use empty alt: `alt=""`
- Provide captions or transcripts for videos
- Ensure sufficient color contrast in images with text

## Example: Complete Blog Post with Media

```mdx
---
title: "Building a Modern Dashboard"
date: "2025-10-05"
summary: "Learn how to build a beautiful analytics dashboard"
image: "/images/blog/dashboard-tutorial-hero.jpg"
---

# Building a Modern Dashboard

![Final dashboard design](/images/blog/dashboard-final.jpg)

In this tutorial, we'll build a modern analytics dashboard using Next.js and Tailwind CSS.

## Design Process

Here's a quick video walkthrough of the design:

<YouTube id="abc123def45" title="Dashboard Design Walkthrough" />

## Implementation

Let's start by looking at the component structure:

![Component architecture diagram](/images/blog/dashboard-architecture.png)

### Demo

Here's the final result in action:

<video src="/videos/demos/dashboard-demo.mp4" controls />

## Conclusion

You can find the complete source code on [GitHub](https://github.com/username/repo).
```

## Troubleshooting

### Image Not Showing

1. Check the file path is correct (case-sensitive)
2. Ensure the file is in the `public/` directory
3. Verify the file extension matches (.jpg vs .jpeg)
4. Clear Next.js cache: `rm -rf .next && npm run dev`

### Video Not Playing

1. Check browser compatibility (use MP4 with H.264)
2. Verify file size isn't too large (< 50MB recommended)
3. Ensure correct MIME type in source tag
4. Test in multiple browsers

### Next.js Image Optimization Errors

1. Provide width and height attributes
2. For external images, add domain to `next.config.ts`:

```typescript
// next.config.ts
const nextConfig = {
  images: {
    domains: ['example.com'],
  },
};
```

## Quick Reference

### MDX Syntax

```mdx
# Images
![Alt text](/images/blog/my-image.jpg)

# Local Videos
<video src="/videos/demos/my-demo.mp4" controls />

# YouTube Videos
<YouTube id="VIDEO_ID" title="Video Title" />
```

### Component Usage

```tsx
import Image from 'next/image';

<Image
  src="/images/logos/logo.svg"
  alt="Logo"
  width={200}
  height={200}
  priority
/>
```

### FFmpeg Commands

```bash
# Compress video
ffmpeg -i input.mp4 -c:v libx264 -crf 28 output.mp4

# Create thumbnail
ffmpeg -i video.mp4 -ss 00:00:05 -vframes 1 thumb.jpg

# Convert to WebM
ffmpeg -i input.mp4 -c:v libvpx-vp9 -crf 30 output.webm
```
