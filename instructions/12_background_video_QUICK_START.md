# Background Video Implementation - Quick Start Prompt

## Context for Cursor AI

I want to add cinematic background videos to my Next.js website's hero sections, similar to the aesthetic approach used by Latticeabs. The implementation must maintain my existing architecture and standards.

## Current Architecture

- **Framework:** Next.js 15 with App Router (TypeScript)
- **Styling:** Tailwind CSS with custom theme system (5 themes via CSS variables)
- **Theme System:** Located in `lib/themes/` with CSS variables like `--theme-background`, `--theme-text`, `--theme-primary`
- **Structure:** Server Components by default, Client Components only when needed
- **Standards:** All rules in `.cursor/rules/` directory

## Requirements

### 1. Create Reusable Components

**Create `components/ui/BackgroundVideo.tsx`:**
- Client component (`"use client"`)
- Accept props: `videoSrc`, `videoSrcWebM`, `posterImage`, `overlayOpacity`, `showOnMobile`, `children`
- Auto-play, loop, muted, playsInline
- Respect `prefers-reduced-motion` (show poster instead)
- Hide video on mobile by default (show poster)
- Theme-aware overlay using CSS variables: `rgba(var(--theme-background-rgb), opacity)`
- Proper z-index layering (video: 0, overlay: 1, content: 10)

**Create `components/ui/VideoHeroSection.tsx`:**
- Wrapper component for hero sections with video backgrounds
- Use BackgroundVideo component internally
- Include proper padding: `py-20 md:py-32 lg:py-40`
- Center content with max-width container

### 2. Video Specifications

**Technical Requirements:**
- Format: MP4 (H.264) primary, WebM optional
- Resolution: 1920x1080
- File size: < 5MB
- Duration: 10-30 seconds (seamless loop)
- No audio track
- Include poster image (JPG)

**Storage Location:**
```
public/videos/backgrounds/
├── home-hero.mp4
├── home-hero.webm (optional)
└── home-hero-poster.jpg
```

### 3. Update Pages

**Update `app/page.tsx`:**
- Replace existing hero section (lines 14-60) with VideoHeroSection
- Maintain existing content (heading, description, CTA buttons)
- Add text shadows for readability: `textShadow: '0 2px 4px rgba(0,0,0,0.3)'`
- Use overlay opacity: 0.5

**Update `app/company/page.tsx`:**
- Replace hero section (lines 78-98) with VideoHeroSection
- Maintain existing content
- Use overlay opacity: 0.5

### 4. Performance & Accessibility

**Must Include:**
- `aria-hidden="true"` and `role="presentation"` on video element
- Lazy loading consideration
- Mobile optimization (hide video, show poster)
- Prefers-reduced-motion support
- Proper semantic HTML structure

### 5. Theme Integration

**Overlay Gradient:**
```tsx
background: `linear-gradient(
  135deg,
  rgba(var(--theme-background-rgb), ${overlayOpacity}) 0%,
  rgba(var(--theme-background-rgb), ${overlayOpacity * 0.8}) 100%
)`
```

**Text Styling:**
- Use existing theme CSS variables
- Add text shadows for contrast
- Ensure readability across all 5 themes

## Implementation Steps

1. **Create BackgroundVideo component** with all requirements above
2. **Create VideoHeroSection component** as wrapper
3. **Update home page** hero section
4. **Update company page** hero section
5. **Test** with all themes and responsive breakpoints

## Code Quality Standards

- Follow existing TypeScript standards (strict mode, no `any`)
- Use proper import organization (React → External → Internal → Components)
- Maintain Tailwind class organization
- Include JSDoc comments for component props
- Ensure ESLint compliance

## Example Usage

```tsx
<VideoHeroSection
  videoSrc="/videos/backgrounds/home-hero.mp4"
  videoSrcWebM="/videos/backgrounds/home-hero.webm"
  posterImage="/videos/backgrounds/home-hero-poster.jpg"
  overlayOpacity={0.5}
  showOnMobile={false}
>
  <h1 style={{ color: 'var(--theme-text)', textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}>
    Your Heading
  </h1>
  {/* Rest of content */}
</VideoHeroSection>
```

## Testing Checklist

After implementation, verify:
- [ ] Video plays automatically on desktop
- [ ] Poster image shows on mobile
- [ ] Respects prefers-reduced-motion
- [ ] Text readable in all 5 themes
- [ ] No TypeScript errors
- [ ] No ESLint warnings
- [ ] Proper responsive behavior

## Video Preparation Command

If you need to optimize a video:

```bash
# Compress video for web
ffmpeg -i input.mov \
  -c:v libx264 -crf 28 -preset slow \
  -vf "scale=1920:1080" -r 24 -an \
  -movflags +faststart \
  output.mp4

# Create poster image
ffmpeg -i output.mp4 -ss 00:00:02 -vframes 1 -q:v 2 poster.jpg
```

## Notes

- Start with BackgroundVideo component (most complex)
- Keep video subtle and professional
- Prioritize performance (< 5MB file size)
- Ensure accessibility (prefers-reduced-motion, ARIA labels)
- Test across all themes before considering complete

---

**Reference:** See `instructions/12_background_video_implementation.md` for complete details.
