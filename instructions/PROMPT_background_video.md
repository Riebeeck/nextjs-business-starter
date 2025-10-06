# 🎬 CURSOR PROMPT: Add Background Video to Website

Copy and paste this prompt directly into Cursor:

---

## Task: Implement Background Video Hero Sections

I need you to add cinematic background video functionality to my Next.js website, similar to modern sites like Latticeabs. Follow these exact requirements:

### 1. Create Two New Components

**File: `components/ui/BackgroundVideo.tsx`**
- Client component with TypeScript
- Props: `videoSrc` (string), `videoSrcWebM?` (string), `posterImage?` (string), `overlayOpacity?` (number, default 0.4), `showOnMobile?` (boolean, default false), `children` (ReactNode)
- Features:
  - Video element with `autoPlay`, `loop`, `muted`, `playsInline`
  - Check `prefers-reduced-motion` - if true, show poster image instead
  - Check if mobile (< 768px) - if mobile and `showOnMobile=false`, show poster instead
  - Absolute positioned video covering full section
  - Gradient overlay using theme CSS variables: `rgba(var(--theme-background-rgb), ${overlayOpacity})`
  - Z-index layering: video (0), overlay (1), content (10)
  - Support both MP4 and WebM sources
  - Include `aria-hidden="true"` and `role="presentation"` on video

**File: `components/ui/VideoHeroSection.tsx`**
- Wrapper component that uses BackgroundVideo
- Props: same as BackgroundVideo
- Add padding: `py-20 md:py-32 lg:py-40`
- Center content: `max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center`

### 2. Update Home Page

**File: `app/page.tsx`**
- Replace the hero section (lines 14-60) with VideoHeroSection component
- Keep all existing content (heading, description, buttons)
- Add text shadows for readability: `textShadow: '0 2px 4px rgba(0,0,0,0.3)'` to heading and description
- Use these props:
  ```tsx
  videoSrc="/videos/backgrounds/home-hero.mp4"
  videoSrcWebM="/videos/backgrounds/home-hero.webm"
  posterImage="/videos/backgrounds/home-hero-poster.jpg"
  overlayOpacity={0.5}
  showOnMobile={false}
  ```

### 3. Update Company Page

**File: `app/company/page.tsx`**
- Replace the hero section (lines 78-98) with VideoHeroSection
- Keep all existing content
- Use same video props as home page (or create separate company video)

### 4. Requirements

**Code Quality:**
- Follow existing TypeScript standards (no `any` types)
- Use proper import organization
- Add JSDoc comments
- Ensure ESLint compliance

**Performance:**
- Lazy load video when possible
- Optimize for mobile (hide video by default)
- Respect user preferences (reduced motion)

**Theme Integration:**
- Use CSS variables for overlay: `var(--theme-background-rgb)`
- Ensure text readable in all themes
- Maintain existing theme system

**Accessibility:**
- Include ARIA labels
- Support keyboard navigation
- Respect prefers-reduced-motion

### 5. Expected Result

After implementation:
- Desktop: Smooth looping background video with content overlay
- Mobile: Static poster image (better performance)
- Reduced motion: Static poster image
- All themes: Proper overlay and text contrast

### 6. Testing

Verify:
- No TypeScript errors
- No ESLint warnings
- Video plays on desktop
- Poster shows on mobile
- Respects motion preferences
- Text readable in all 5 themes

---

**Start with creating the BackgroundVideo component, then VideoHeroSection, then update the pages. Show me each component as you create it.**
