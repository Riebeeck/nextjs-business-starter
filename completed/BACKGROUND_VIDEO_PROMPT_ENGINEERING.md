# Background Video Prompt Engineering - Complete

**Date:** October 5, 2025  
**Status:** ✅ Complete  
**Objective:** Create comprehensive documentation and prompts for implementing background video functionality

## What Was Created

### 1. Comprehensive Implementation Guide
**File:** `instructions/12_background_video_implementation.md`

A complete 600+ line guide covering:
- Component architecture and specifications
- Video asset preparation and optimization
- Page implementation strategies
- Performance optimization techniques
- Theme integration patterns
- Accessibility considerations
- Testing checklist
- Example implementations
- Troubleshooting guide
- Video content suggestions
- Resource links

**Use Case:** Reference documentation for understanding the full scope and technical details.

### 2. Quick Start Guide
**File:** `instructions/12_background_video_QUICK_START.md`

A condensed guide with:
- Current architecture context
- Component requirements
- Video specifications
- Implementation steps
- Code quality standards
- Example usage
- Testing checklist
- FFmpeg commands

**Use Case:** Faster reference for developers familiar with the project who need key details.

### 3. Copy-Paste Cursor Prompt
**File:** `instructions/PROMPT_background_video.md`

A ready-to-use prompt containing:
- Clear task description
- Exact component specifications
- File paths and line numbers
- Props and features required
- Code quality requirements
- Expected results
- Testing criteria

**Use Case:** Direct input for Cursor AI to implement the feature immediately.

## How to Use These Documents

### Scenario 1: You Want Cursor to Implement Now
1. Open Cursor
2. Copy the entire contents of `instructions/PROMPT_background_video.md`
3. Paste into Cursor chat
4. Cursor will create the components and update pages
5. Review and test the implementation

### Scenario 2: You Want to Understand First
1. Read `instructions/12_background_video_implementation.md`
2. Review the architecture and examples
3. Understand the trade-offs and decisions
4. Then use the quick start or prompt to implement

### Scenario 3: You're Implementing Manually
1. Use `instructions/12_background_video_QUICK_START.md` as reference
2. Follow the implementation steps
3. Copy example code as needed
4. Use testing checklist to verify

## Key Technical Decisions

### Component Architecture
- **BackgroundVideo:** Low-level component handling video playback, overlays, and responsive behavior
- **VideoHeroSection:** High-level wrapper for hero sections with sensible defaults
- **Separation of Concerns:** Video logic separate from content layout

### Performance Strategy
- Hide video on mobile (show poster image)
- Respect `prefers-reduced-motion`
- Target < 5MB file size
- Use modern codecs (H.264, VP9)
- Lazy loading consideration

### Theme Integration
- Use CSS variables for overlays: `rgba(var(--theme-background-rgb), opacity)`
- Gradient overlays for better text contrast
- Text shadows for readability
- Test across all 5 themes

### Accessibility
- ARIA labels on video elements
- Respect user motion preferences
- Maintain keyboard navigation
- Semantic HTML structure

## Video Specifications

### Technical Requirements
- **Format:** MP4 (H.264) primary, WebM (VP9) optional
- **Resolution:** 1920x1080 (1080p)
- **File Size:** < 5MB (critical)
- **Duration:** 10-30 seconds (seamless loop)
- **Frame Rate:** 24-30 fps
- **Bitrate:** 1-2 Mbps
- **Audio:** None (remove to reduce size)

### Optimization Command
```bash
ffmpeg -i input.mov \
  -c:v libx264 -crf 28 -preset slow \
  -vf "scale=1920:1080" -r 24 -an \
  -movflags +faststart \
  output.mp4
```

### Poster Image
```bash
ffmpeg -i output.mp4 -ss 00:00:02 -vframes 1 -q:v 2 poster.jpg
```

## Implementation Checklist

When implementing, ensure:

### Components
- [ ] BackgroundVideo.tsx created with all required props
- [ ] VideoHeroSection.tsx created as wrapper
- [ ] Both components follow TypeScript standards
- [ ] JSDoc comments added
- [ ] No ESLint errors

### Pages
- [ ] Home page hero updated (app/page.tsx)
- [ ] Company page hero updated (app/company/page.tsx)
- [ ] Existing content preserved
- [ ] Text shadows added for readability

### Performance
- [ ] Video files < 5MB
- [ ] Poster images created
- [ ] Mobile optimization (hide video)
- [ ] Prefers-reduced-motion support

### Theme Integration
- [ ] Overlay uses CSS variables
- [ ] Text readable in all 5 themes
- [ ] Gradient overlay implemented
- [ ] Theme switching works correctly

### Accessibility
- [ ] ARIA labels present
- [ ] Keyboard navigation works
- [ ] Screen reader compatible
- [ ] Motion preferences respected

### Testing
- [ ] Desktop browsers (Chrome, Firefox, Safari)
- [ ] Mobile browsers (iOS Safari, Chrome)
- [ ] All 5 themes tested
- [ ] Responsive breakpoints verified
- [ ] Performance metrics acceptable

## File Structure After Implementation

```
components/
├── ui/
│   ├── BackgroundVideo.tsx       (NEW)
│   ├── VideoHeroSection.tsx      (NEW)
│   ├── Badge.tsx
│   ├── Button.tsx
│   └── Card.tsx

public/
├── videos/
│   ├── backgrounds/               (NEW)
│   │   ├── home-hero.mp4
│   │   ├── home-hero.webm
│   │   ├── home-hero-poster.jpg
│   │   ├── company-hero.mp4
│   │   └── company-hero-poster.jpg
│   ├── demos/
│   └── tutorials/

app/
├── page.tsx                       (MODIFIED - hero section)
├── company/
│   └── page.tsx                   (MODIFIED - hero section)
```

## Next Steps After Implementation

1. **Source/Create Videos:**
   - Find stock videos or create custom content
   - Ensure videos are subtle and professional
   - Consider brand alignment

2. **Optimize Videos:**
   - Use FFmpeg commands provided
   - Test file sizes (< 5MB target)
   - Create poster images

3. **Test Thoroughly:**
   - All browsers and devices
   - All theme variations
   - Performance metrics
   - Accessibility features

4. **Monitor Performance:**
   - Check Lighthouse scores
   - Monitor Core Web Vitals
   - Track page load times
   - Gather user feedback

5. **Iterate:**
   - Adjust overlay opacity if needed
   - Refine video content
   - Optimize further if performance issues
   - Consider additional pages (solutions pages)

## Resources Created

### Documentation
- ✅ Comprehensive implementation guide (600+ lines)
- ✅ Quick start reference guide
- ✅ Copy-paste Cursor prompt

### Code Examples
- ✅ Complete BackgroundVideo component
- ✅ Complete VideoHeroSection component
- ✅ Usage examples for pages
- ✅ FFmpeg optimization commands

### Testing & QA
- ✅ Browser compatibility checklist
- ✅ Performance metrics checklist
- ✅ Responsive testing checklist
- ✅ Theme testing checklist
- ✅ Accessibility testing checklist

## Inspiration & References

### Design Inspiration
- **Latticeabs:** Subtle, professional background video
- **Apple:** Product showcase videos
- **Stripe:** Abstract animated backgrounds
- **Linear:** Smooth, minimal animations

### Technical Resources
- **FFmpeg Documentation:** Video optimization
- **Next.js Image/Video Best Practices**
- **Web Performance Guidelines**
- **WCAG Accessibility Standards**

## Conclusion

You now have three levels of documentation:

1. **Deep Dive:** Full implementation guide with all details
2. **Quick Reference:** Essential information for fast implementation
3. **AI Prompt:** Ready-to-use prompt for Cursor

Choose the approach that fits your workflow:
- **Want it done fast?** Use the Cursor prompt
- **Want to understand?** Read the full guide
- **Want quick reference?** Use the quick start

All documents are consistent, follow your project standards, and integrate seamlessly with your existing architecture.

## Prompt Engineering Insights

### What Made These Prompts Effective

1. **Context-Aware:** Referenced existing architecture (App Router, theme system, file structure)
2. **Specific:** Exact file paths, line numbers, prop names
3. **Standards-Aligned:** Followed project's TypeScript, ESLint, and component standards
4. **Complete:** Included performance, accessibility, and testing requirements
5. **Actionable:** Clear steps, examples, and expected outcomes
6. **Flexible:** Three levels of detail for different use cases

### Key Principles Applied

- **Specificity over Ambiguity:** "Replace lines 14-60" vs "update the hero"
- **Context First:** Explain the "why" before the "how"
- **Standards Enforcement:** Reference existing rules and patterns
- **Testing Built-In:** Include verification steps in the prompt
- **Progressive Disclosure:** Simple prompt → Quick start → Full guide

---

**Status:** Ready for implementation  
**Next Action:** Choose your approach and implement background video functionality  
**Estimated Time:** 2-4 hours (including video sourcing and optimization)
