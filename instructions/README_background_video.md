# Background Video Implementation - Documentation Overview

## 📚 Available Documentation

This directory contains comprehensive documentation for implementing background video functionality on your Next.js website.

### 🎯 Choose Your Path

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  What do you want to do?                                    │
│                                                             │
│  ┌────────────────────────────────────────────────────┐   │
│  │ 🚀 Implement NOW with Cursor AI                    │   │
│  │                                                     │   │
│  │ → Use: PROMPT_background_video.md                  │   │
│  │                                                     │   │
│  │ Copy-paste the prompt directly into Cursor         │   │
│  │ Cursor will create components and update pages     │   │
│  └────────────────────────────────────────────────────┘   │
│                                                             │
│  ┌────────────────────────────────────────────────────┐   │
│  │ ⚡ Quick Implementation Reference                   │   │
│  │                                                     │   │
│  │ → Use: 12_background_video_QUICK_START.md          │   │
│  │                                                     │   │
│  │ Condensed guide with key requirements              │   │
│  │ Perfect for developers familiar with the project   │   │
│  └────────────────────────────────────────────────────┘   │
│                                                             │
│  ┌────────────────────────────────────────────────────┐   │
│  │ 📖 Comprehensive Understanding                      │   │
│  │                                                     │   │
│  │ → Use: 12_background_video_implementation.md       │   │
│  │                                                     │   │
│  │ Full guide with examples, troubleshooting, theory  │   │
│  │ Best for learning and reference                    │   │
│  └────────────────────────────────────────────────────┘   │
│                                                             │
│  ┌────────────────────────────────────────────────────┐   │
│  │ 📊 Project Summary & Insights                       │   │
│  │                                                     │   │
│  │ → Use: ../completed/BACKGROUND_VIDEO_PROMPT_       │   │
│  │         ENGINEERING.md                              │   │
│  │                                                     │   │
│  │ Overview of all docs, decisions, and next steps    │   │
│  └────────────────────────────────────────────────────┘   │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

## 📄 Document Details

### 1. PROMPT_background_video.md
**Type:** AI Prompt  
**Length:** ~150 lines  
**Use Case:** Copy-paste into Cursor for immediate implementation

**Contains:**
- Task description
- Exact component specifications
- File paths and requirements
- Testing criteria

**Best For:**
- Quick implementation
- AI-assisted development
- When you trust the architecture

---

### 2. 12_background_video_QUICK_START.md
**Type:** Quick Reference Guide  
**Length:** ~250 lines  
**Use Case:** Fast manual implementation with key details

**Contains:**
- Current architecture context
- Component requirements
- Implementation steps
- Code examples
- Testing checklist

**Best For:**
- Developers familiar with the project
- Manual implementation
- Quick reference during coding

---

### 3. 12_background_video_implementation.md
**Type:** Comprehensive Guide  
**Length:** ~650 lines  
**Use Case:** Complete understanding and reference

**Contains:**
- Full component architecture
- Video optimization techniques
- Performance strategies
- Theme integration patterns
- Accessibility considerations
- Complete code examples
- Troubleshooting guide
- Resources and inspiration

**Best For:**
- Learning the full scope
- Understanding design decisions
- Troubleshooting issues
- Long-term reference

---

### 4. BACKGROUND_VIDEO_PROMPT_ENGINEERING.md
**Type:** Project Summary  
**Length:** ~400 lines  
**Location:** `../completed/`

**Contains:**
- Overview of all documentation
- Key technical decisions
- Implementation checklist
- File structure changes
- Next steps
- Prompt engineering insights

**Best For:**
- Project overview
- Understanding what was created
- Planning implementation
- Team communication

---

## 🚦 Quick Start Guide

### If you're using Cursor AI:

1. Open `PROMPT_background_video.md`
2. Copy the entire prompt
3. Paste into Cursor chat
4. Review and test the implementation

### If you're implementing manually:

1. Read `12_background_video_QUICK_START.md`
2. Create BackgroundVideo component
3. Create VideoHeroSection component
4. Update pages (home, company)
5. Test across themes and devices

### If you want to understand everything first:

1. Read `12_background_video_implementation.md`
2. Review examples and architecture
3. Understand trade-offs
4. Then implement using quick start or prompt

---

## 🎬 Video Requirements Summary

### Technical Specs
- **Format:** MP4 (H.264)
- **Resolution:** 1920x1080
- **File Size:** < 5MB
- **Duration:** 10-30 seconds
- **Frame Rate:** 24-30 fps

### Optimization Command
```bash
ffmpeg -i input.mov \
  -c:v libx264 -crf 28 -preset slow \
  -vf "scale=1920:1080" -r 24 -an \
  -movflags +faststart \
  output.mp4
```

### Storage Location
```
public/videos/backgrounds/
├── home-hero.mp4
├── home-hero.webm (optional)
└── home-hero-poster.jpg
```

---

## 🏗️ What Will Be Created

### New Components
```
components/ui/
├── BackgroundVideo.tsx       (NEW)
└── VideoHeroSection.tsx      (NEW)
```

### Modified Pages
```
app/
├── page.tsx                  (MODIFIED - hero section)
└── company/page.tsx          (MODIFIED - hero section)
```

### New Assets
```
public/videos/backgrounds/    (NEW DIRECTORY)
├── home-hero.mp4
├── home-hero.webm
├── home-hero-poster.jpg
├── company-hero.mp4
└── company-hero-poster.jpg
```

---

## ✅ Implementation Checklist

### Phase 1: Components
- [ ] Create BackgroundVideo.tsx
- [ ] Create VideoHeroSection.tsx
- [ ] Add TypeScript types
- [ ] Add JSDoc comments
- [ ] Test components in isolation

### Phase 2: Pages
- [ ] Update app/page.tsx hero section
- [ ] Update app/company/page.tsx hero section
- [ ] Add text shadows for readability
- [ ] Verify content preserved

### Phase 3: Assets
- [ ] Source or create video content
- [ ] Optimize videos (< 5MB)
- [ ] Create poster images
- [ ] Place in public/videos/backgrounds/

### Phase 4: Testing
- [ ] Test on desktop browsers
- [ ] Test on mobile devices
- [ ] Test all 5 themes
- [ ] Test prefers-reduced-motion
- [ ] Verify accessibility
- [ ] Check performance metrics

---

## 🎨 Design Principles

### Video Content
- **Subtle:** Should enhance, not distract
- **Professional:** Aligned with brand
- **Seamless:** Loop without visible jump
- **Relevant:** Related to page content

### Performance
- **Mobile-First:** Hide video on mobile by default
- **Accessible:** Respect user preferences
- **Fast:** < 5MB file size target
- **Optimized:** Modern codecs and compression

### Integration
- **Theme-Aware:** Works with all 5 themes
- **Responsive:** Adapts to screen sizes
- **Consistent:** Follows existing patterns
- **Maintainable:** Clean, documented code

---

## 🔗 Related Documentation

### Project Standards
- `.cursor/rules/` - Code quality standards
- `instructions/09_five_theme_system.md` - Theme system details
- `instructions/10_media_management.md` - Media guidelines

### Inspiration
- [Latticeabs](https://latticeabs.com/) - Background video reference
- [Apple](https://www.apple.com/) - Product videos
- [Stripe](https://stripe.com/) - Abstract backgrounds

---

## 🆘 Need Help?

### Common Issues

**Video not playing?**
→ See troubleshooting in `12_background_video_implementation.md` (line 850+)

**Performance problems?**
→ Check optimization section in comprehensive guide (line 450+)

**Theme conflicts?**
→ Review theme integration section (line 550+)

**Accessibility concerns?**
→ See accessibility section (line 650+)

---

## 📊 Estimated Time

- **With Cursor AI:** 30-60 minutes (including testing)
- **Manual Implementation:** 2-3 hours (including testing)
- **With Video Creation:** +2-4 hours (sourcing/creating content)
- **Full Optimization:** +1-2 hours (compression, testing)

---

## 🎯 Success Criteria

Implementation is complete when:

1. ✅ BackgroundVideo and VideoHeroSection components created
2. ✅ Home and company pages updated
3. ✅ Videos play on desktop, poster shows on mobile
4. ✅ Respects prefers-reduced-motion
5. ✅ Text readable in all 5 themes
6. ✅ No TypeScript or ESLint errors
7. ✅ Performance metrics acceptable (Lighthouse > 90)
8. ✅ Accessibility standards met (WCAG AA)

---

## 📞 Quick Links

- **Cursor Prompt:** `PROMPT_background_video.md`
- **Quick Start:** `12_background_video_QUICK_START.md`
- **Full Guide:** `12_background_video_implementation.md`
- **Summary:** `../completed/BACKGROUND_VIDEO_PROMPT_ENGINEERING.md`

---

**Ready to implement?** Choose your path above and get started! 🚀
