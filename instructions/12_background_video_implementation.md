# Background Video Implementation Guide

## Overview

This guide provides instructions for implementing cinematic background videos on your Next.js website, inspired by modern web design patterns (like Latticeabs). The implementation will maintain your existing theme system, performance standards, and responsive design principles.

## Objectives

1. Add background video support to hero sections across the site
2. Create reusable components for video backgrounds
3. Ensure performance optimization (lazy loading, proper compression)
4. Maintain accessibility and mobile responsiveness
5. Support your existing 5-theme system with proper overlays
6. Provide fallback images for slow connections

## Implementation Strategy

### Phase 1: Video Component Architecture

#### 1.1 Create BackgroundVideo Component

Create a new reusable component at `components/ui/BackgroundVideo.tsx`:

**Requirements:**
- Accept video source(s) as props (MP4, WebM for browser compatibility)
- Support optional poster image (fallback/loading state)
- Include overlay opacity control for text readability
- Respect user's motion preferences (`prefers-reduced-motion`)
- Auto-play, loop, and mute by default
- Responsive behavior (hide on mobile if needed)
- Theme-aware overlay colors

**Component Props:**
```typescript
interface BackgroundVideoProps {
  videoSrc: string;           // Primary video source (MP4)
  videoSrcWebM?: string;      // Optional WebM for better compression
  posterImage?: string;       // Fallback image while loading
  overlayOpacity?: number;    // 0-1, default 0.4
  overlayColor?: string;      // CSS color, defaults to theme background
  className?: string;         // Additional Tailwind classes
  showOnMobile?: boolean;     // Whether to show video on mobile (default: false)
  children?: React.ReactNode; // Content to overlay on video
}
```

**Key Features:**
- Use `<video>` element with proper attributes: `autoPlay`, `loop`, `muted`, `playsInline`
- Implement `prefers-reduced-motion` media query to show static poster instead
- Position video absolutely with proper z-index layering
- Add gradient overlay for text readability
- Optimize video loading with `loading="lazy"` attribute
- Handle video load errors gracefully

#### 1.2 Create VideoHeroSection Component

Create `components/ui/VideoHeroSection.tsx` for hero sections with video backgrounds:

**Requirements:**
- Wrap BackgroundVideo with typical hero section structure
- Support heading, subheading, and CTA buttons
- Ensure text contrast against video
- Responsive typography and spacing
- Theme-aware text colors

### Phase 2: Video Asset Preparation

#### 2.1 Video Specifications

**Technical Requirements:**
- **Format:** MP4 (H.264) primary, WebM (VP9) optional
- **Resolution:** 1920x1080 (1080p) for desktop
- **Frame Rate:** 24-30 fps
- **Duration:** 10-30 seconds (loop seamlessly)
- **File Size:** Target < 5MB (critical for performance)
- **Bitrate:** 1-2 Mbps for 1080p background video
- **Audio:** Remove audio track (not needed, reduces file size)

**Optimization Commands:**

```bash
# Compress video for web (MP4)
ffmpeg -i input.mov \
  -c:v libx264 \
  -crf 28 \
  -preset slow \
  -vf "scale=1920:1080" \
  -r 24 \
  -an \
  -movflags +faststart \
  output.mp4

# Create WebM version (better compression)
ffmpeg -i input.mov \
  -c:v libvpx-vp9 \
  -crf 35 \
  -b:v 0 \
  -vf "scale=1920:1080" \
  -r 24 \
  -an \
  output.webm

# Create poster image (frame at 2 seconds)
ffmpeg -i output.mp4 \
  -ss 00:00:02 \
  -vframes 1 \
  -q:v 2 \
  poster.jpg
```

#### 2.2 Video Storage Structure

```
public/videos/
├── backgrounds/
│   ├── home-hero.mp4
│   ├── home-hero.webm
│   ├── home-hero-poster.jpg
│   ├── company-hero.mp4
│   ├── company-hero.webm
│   └── company-hero-poster.jpg
├── demos/
├── tutorials/
└── general/
```

### Phase 3: Page Implementation

#### 3.1 Update Home Page (app/page.tsx)

Replace the existing hero section (lines 14-60) with VideoHeroSection:

**Current Structure:**
```tsx
<section className="relative py-20 md:py-32 lg:py-40 overflow-hidden">
  <div className="absolute inset-0 opacity-30" style={{...}} />
  <div className="relative max-w-6xl mx-auto px-4...">
    {/* Content */}
  </div>
</section>
```

**New Structure:**
```tsx
<VideoHeroSection
  videoSrc="/videos/backgrounds/home-hero.mp4"
  videoSrcWebM="/videos/backgrounds/home-hero.webm"
  posterImage="/videos/backgrounds/home-hero-poster.jpg"
  overlayOpacity={0.5}
  showOnMobile={false}
>
  <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6...">
    Building digital products with clean code and thoughtful design
  </h1>
  <p className="text-lg mb-10...">
    Scalable solutions for data engineering, machine learning, and modern web development.
  </p>
  {/* CTA Buttons */}
</VideoHeroSection>
```

#### 3.2 Update Company Page (app/company/page.tsx)

Apply similar treatment to the company page hero (lines 78-98).

#### 3.3 Optional: Solutions Pages

Consider adding background videos to:
- `app/solutions/analytics/page.tsx`
- `app/solutions/data-engineering/page.tsx`
- `app/solutions/machine-learning/page.tsx`

### Phase 4: Performance Optimization

#### 4.1 Lazy Loading Strategy

- Use `loading="lazy"` attribute on video element
- Consider Intersection Observer for below-fold videos
- Implement connection-aware loading (check `navigator.connection`)

#### 4.2 Mobile Optimization

**Approach 1: Hide on Mobile (Recommended)**
```tsx
<BackgroundVideo 
  showOnMobile={false}
  posterImage="/path/to/poster.jpg"
/>
```
- Shows poster image on mobile
- Saves bandwidth
- Better mobile performance

**Approach 2: Mobile-Optimized Video**
```tsx
<BackgroundVideo 
  videoSrc="/videos/backgrounds/home-hero-mobile.mp4"
  showOnMobile={true}
/>
```
- Create separate, smaller video for mobile (720p, higher compression)
- Use media queries to load appropriate version

#### 4.3 Prefers-Reduced-Motion

Automatically detect and respect user preferences:

```tsx
// In BackgroundVideo component
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (prefersReducedMotion) {
  // Show poster image instead of video
  return <img src={posterImage} alt="" />;
}
```

### Phase 5: Theme Integration

#### 5.1 Overlay Color Adaptation

Ensure video overlays adapt to your 5-theme system:

```tsx
// In BackgroundVideo component
<div 
  className="absolute inset-0 z-10"
  style={{
    background: `linear-gradient(
      135deg,
      rgba(var(--theme-background-rgb), ${overlayOpacity}) 0%,
      rgba(var(--theme-background-rgb), ${overlayOpacity * 0.8}) 100%
    )`,
  }}
/>
```

#### 5.2 Text Contrast

Ensure sufficient contrast for text over video:
- Use semi-transparent dark overlay (0.4-0.6 opacity)
- Add text shadows if needed: `text-shadow: 0 2px 4px rgba(0,0,0,0.3)`
- Test with all 5 themes (Midnight, Forest, Ocean, Sunset, Monochrome)

### Phase 6: Accessibility Considerations

#### 6.1 ARIA Labels and Semantics

```tsx
<video
  aria-hidden="true"  // Background video is decorative
  role="presentation"
  // ... other attributes
/>
```

#### 6.2 Keyboard Navigation

Ensure CTA buttons and links remain keyboard accessible over video background.

#### 6.3 Screen Readers

Background videos should not interfere with screen reader navigation. Use proper semantic HTML structure.

### Phase 7: Testing Checklist

#### 7.1 Browser Compatibility
- [ ] Chrome/Edge (Chromium)
- [ ] Firefox
- [ ] Safari (desktop and iOS)
- [ ] Mobile browsers (Chrome, Safari)

#### 7.2 Performance Metrics
- [ ] Video file size < 5MB
- [ ] Page load time impact < 500ms
- [ ] Lighthouse Performance score > 90
- [ ] Core Web Vitals (LCP, FID, CLS) within thresholds

#### 7.3 Responsive Testing
- [ ] Desktop (1920x1080, 1440x900)
- [ ] Tablet (768x1024)
- [ ] Mobile (375x667, 414x896)
- [ ] Video hides on mobile (if showOnMobile=false)

#### 7.4 Theme Testing
- [ ] Midnight theme
- [ ] Forest theme
- [ ] Ocean theme
- [ ] Sunset theme
- [ ] Monochrome theme
- [ ] Text remains readable in all themes

#### 7.5 Accessibility Testing
- [ ] Respects prefers-reduced-motion
- [ ] Keyboard navigation works
- [ ] Screen reader compatibility
- [ ] Sufficient text contrast (WCAG AA)

## Example Implementation

### BackgroundVideo Component

```tsx
'use client';

import { useEffect, useRef, useState } from 'react';

interface BackgroundVideoProps {
  videoSrc: string;
  videoSrcWebM?: string;
  posterImage?: string;
  overlayOpacity?: number;
  overlayColor?: string;
  className?: string;
  showOnMobile?: boolean;
  children?: React.ReactNode;
}

export default function BackgroundVideo({
  videoSrc,
  videoSrcWebM,
  posterImage,
  overlayOpacity = 0.4,
  overlayColor,
  className = '',
  showOnMobile = false,
  children,
}: BackgroundVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    // Check if mobile
    setIsMobile(window.innerWidth < 768);

    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const shouldShowVideo = !prefersReducedMotion && (showOnMobile || !isMobile);

  return (
    <section className={`relative overflow-hidden ${className}`}>
      {/* Video Background */}
      {shouldShowVideo ? (
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          poster={posterImage}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ zIndex: 0 }}
          aria-hidden="true"
          role="presentation"
        >
          {videoSrcWebM && <source src={videoSrcWebM} type="video/webm" />}
          <source src={videoSrc} type="video/mp4" />
        </video>
      ) : (
        posterImage && (
          <img
            src={posterImage}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
            style={{ zIndex: 0 }}
          />
        )
      )}

      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{
          zIndex: 1,
          background: overlayColor
            ? `${overlayColor}`
            : `linear-gradient(135deg, rgba(var(--theme-background-rgb), ${overlayOpacity}) 0%, rgba(var(--theme-background-rgb), ${overlayOpacity * 0.8}) 100%)`,
        }}
      />

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </section>
  );
}
```

### VideoHeroSection Component

```tsx
import BackgroundVideo from './BackgroundVideo';

interface VideoHeroSectionProps {
  videoSrc: string;
  videoSrcWebM?: string;
  posterImage?: string;
  overlayOpacity?: number;
  showOnMobile?: boolean;
  children: React.ReactNode;
}

export default function VideoHeroSection({
  videoSrc,
  videoSrcWebM,
  posterImage,
  overlayOpacity = 0.5,
  showOnMobile = false,
  children,
}: VideoHeroSectionProps) {
  return (
    <BackgroundVideo
      videoSrc={videoSrc}
      videoSrcWebM={videoSrcWebM}
      posterImage={posterImage}
      overlayOpacity={overlayOpacity}
      showOnMobile={showOnMobile}
      className="py-20 md:py-32 lg:py-40"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {children}
      </div>
    </BackgroundVideo>
  );
}
```

### Usage Example

```tsx
// app/page.tsx
import VideoHeroSection from '@/components/ui/VideoHeroSection';
import Link from 'next/link';

export default async function Home() {
  return (
    <div style={{ backgroundColor: 'var(--theme-background)' }}>
      <VideoHeroSection
        videoSrc="/videos/backgrounds/home-hero.mp4"
        videoSrcWebM="/videos/backgrounds/home-hero.webm"
        posterImage="/videos/backgrounds/home-hero-poster.jpg"
        overlayOpacity={0.5}
        showOnMobile={false}
      >
        <h1
          className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 max-w-4xl mx-auto leading-tight"
          style={{ 
            color: 'var(--theme-text)',
            textShadow: '0 2px 4px rgba(0,0,0,0.3)'
          }}
        >
          Building digital products with clean code and thoughtful design
        </h1>
        <p
          className="text-lg mb-10 max-w-2xl mx-auto"
          style={{ 
            color: 'var(--theme-text-secondary)',
            textShadow: '0 1px 2px rgba(0,0,0,0.2)'
          }}
        >
          Scalable solutions for data engineering, machine learning, and modern web development.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link href="/projects">
            <button
              className="px-6 py-3 rounded-md font-medium transition-all hover:opacity-90 hover:scale-105"
              style={{
                backgroundColor: 'var(--theme-primary)',
                color: 'var(--theme-text)',
              }}
            >
              View Work
            </button>
          </Link>
          <Link href="/blog">
            <button
              className="px-6 py-3 rounded-md font-medium transition-all border backdrop-blur-sm"
              style={{
                backgroundColor: 'rgba(var(--theme-bg-tertiary-rgb), 0.8)',
                borderColor: 'var(--theme-border)',
                color: 'var(--theme-text)',
              }}
            >
              Read Articles
            </button>
          </Link>
        </div>
      </VideoHeroSection>

      {/* Rest of your page content */}
    </div>
  );
}
```

## Video Content Suggestions

### Home Page Hero
**Concept:** Abstract data visualization, code scrolling, or geometric animations
**Duration:** 15-20 seconds
**Style:** Subtle, professional, not distracting

### Company Page Hero
**Concept:** Team collaboration, office environment, or technology in action
**Duration:** 20-30 seconds
**Style:** Warm, inviting, human-focused

### Solutions Pages
**Concept:** Relevant technology/data visualizations for each solution
**Duration:** 15-20 seconds
**Style:** Technical but accessible

## Resources

### Video Creation Tools
- **Stock Video:** [Pexels Videos](https://www.pexels.com/videos/), [Pixabay](https://pixabay.com/videos/)
- **AI Generation:** [Runway ML](https://runwayml.com/), [Synthesia](https://www.synthesia.io/)
- **Animation:** [After Effects](https://www.adobe.com/products/aftereffects.html), [Blender](https://www.blender.org/)

### Compression Tools
- **FFmpeg:** Command-line tool (most powerful)
- **HandBrake:** GUI application (user-friendly)
- **Online:** [Clipchamp](https://clipchamp.com/), [Online-Convert](https://www.online-convert.com/)

### Inspiration
- [Latticeabs](https://latticeabs.com/) - Subtle, professional background video
- [Apple](https://www.apple.com/) - Product showcase videos
- [Stripe](https://stripe.com/) - Abstract animated backgrounds
- [Linear](https://linear.app/) - Smooth, minimal animations

## Troubleshooting

### Video Not Playing
1. Check file format (MP4 H.264 most compatible)
2. Verify `muted` attribute is set (required for autoplay)
3. Add `playsInline` for iOS compatibility
4. Check file path and accessibility

### Performance Issues
1. Reduce video file size (target < 5MB)
2. Lower resolution (1080p → 720p)
3. Increase compression (CRF 28 → 32)
4. Consider hiding on mobile

### Text Not Readable
1. Increase overlay opacity (0.4 → 0.6)
2. Add text shadows
3. Use darker overlay gradient
4. Choose less busy video content

### Theme Conflicts
1. Ensure overlay uses CSS variables
2. Test with all 5 themes
3. Adjust overlay opacity per theme if needed
4. Use backdrop-blur for better text contrast

## Next Steps

1. **Create/Source Video Content:** Find or create appropriate background videos
2. **Optimize Videos:** Compress and prepare videos per specifications
3. **Build Components:** Implement BackgroundVideo and VideoHeroSection
4. **Update Pages:** Replace static hero sections with video versions
5. **Test Thoroughly:** Run through complete testing checklist
6. **Monitor Performance:** Check Lighthouse scores and Core Web Vitals
7. **Iterate:** Adjust based on user feedback and analytics

## Maintenance

- **Regular Reviews:** Check video relevance quarterly
- **Performance Monitoring:** Track page load times and video loading
- **Browser Updates:** Test after major browser updates
- **Content Refresh:** Update videos annually to keep site fresh
- **Analytics:** Monitor user engagement with video-enabled pages

---

**Remember:** Background videos should enhance, not distract. Keep them subtle, professional, and performant. When in doubt, prioritize user experience over visual flair.
