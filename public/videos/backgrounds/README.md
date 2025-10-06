# Background Videos Directory

This directory contains background videos for hero sections across the website.

## Required Videos

### Home Page Hero
- **File:** `home-hero.mp4` (required)
- **File:** `home-hero.webm` (optional, for better compression)
- **File:** `home-hero-poster.jpg` (required, fallback image)

**Specifications:**
- Resolution: 1920x1080 (1080p)
- Duration: 10-30 seconds (seamless loop)
- File Size: < 5MB (critical for performance)
- Format: MP4 (H.264 codec)
- Frame Rate: 24-30 fps
- Audio: None (remove audio track)

**Content Suggestions:**
- Abstract data visualization
- Code scrolling/typing animation
- Geometric patterns
- Particle effects
- Subtle, professional, not distracting

### Company Page Hero
- **File:** `company-hero.mp4` (optional, currently uses home-hero.mp4)
- **File:** `company-hero.webm` (optional)
- **File:** `company-hero-poster.jpg` (optional)

**Content Suggestions:**
- Team collaboration scenes
- Technology in action
- Office/workspace environment
- Human-focused, warm, inviting

## Video Optimization

### Compress Video for Web (MP4)
```bash
ffmpeg -i input.mov \
  -c:v libx264 \
  -crf 28 \
  -preset slow \
  -vf "scale=1920:1080" \
  -r 24 \
  -an \
  -movflags +faststart \
  home-hero.mp4
```

### Create WebM Version (Optional)
```bash
ffmpeg -i input.mov \
  -c:v libvpx-vp9 \
  -crf 35 \
  -b:v 0 \
  -vf "scale=1920:1080" \
  -r 24 \
  -an \
  home-hero.webm
```

### Create Poster Image
```bash
ffmpeg -i home-hero.mp4 \
  -ss 00:00:02 \
  -vframes 1 \
  -q:v 2 \
  home-hero-poster.jpg
```

## Finding/Creating Videos

### Stock Video Sources (Free)
- [Pexels Videos](https://www.pexels.com/videos/) - Free stock videos
- [Pixabay Videos](https://pixabay.com/videos/) - Free stock videos
- [Coverr](https://coverr.co/) - Free background videos

**Search Terms:**
- "abstract technology"
- "data visualization"
- "code programming"
- "particles background"
- "geometric animation"
- "digital network"

### AI Video Generation
- [Runway ML](https://runwayml.com/) - AI video generation
- [Synthesia](https://www.synthesia.io/) - AI video creation

### Custom Animation
- After Effects - Professional motion graphics
- Blender - 3D animation (free)
- Motion - Apple's motion graphics tool

## Current Status

⚠️ **PLACEHOLDER FILES NEEDED**

The implementation is complete, but you need to add actual video files:

1. **Option 1: Quick Start (Use Stock Video)**
   - Visit Pexels or Pixabay
   - Search for "abstract technology background"
   - Download a suitable video
   - Optimize using FFmpeg commands above
   - Place in this directory

2. **Option 2: Temporary Placeholder**
   - Create a simple solid color video or gradient
   - Use as placeholder until final video is ready
   - Poster image can be a screenshot of your site

3. **Option 3: No Video Yet**
   - The site will gracefully fall back to poster image
   - Or show a gradient overlay if no poster exists
   - Mobile users will see poster image regardless

## Testing Checklist

After adding videos:
- [ ] Video file size < 5MB
- [ ] Video loops seamlessly (no visible jump)
- [ ] Poster image created and looks good
- [ ] Video plays automatically on desktop
- [ ] Poster shows on mobile
- [ ] Text is readable over video
- [ ] Works in all 5 themes
- [ ] Respects prefers-reduced-motion

## Performance Notes

- **Desktop:** Loads and plays video automatically
- **Mobile:** Shows poster image only (saves bandwidth)
- **Reduced Motion:** Shows poster image (respects user preference)
- **Slow Connection:** Poster image shows while video loads

## File Size Guidelines

| Resolution | Target Size | Max Size |
|------------|-------------|----------|
| 1080p      | 3-4 MB      | 5 MB     |
| 720p       | 2-3 MB      | 4 MB     |

If your video is too large:
1. Increase CRF value (28 → 32 → 35)
2. Lower resolution (1080p → 720p)
3. Reduce frame rate (30fps → 24fps)
4. Shorten duration (30s → 20s → 10s)

## Troubleshooting

**Video not playing?**
- Check file path is correct
- Ensure MP4 format with H.264 codec
- Verify file is in this directory
- Check browser console for errors

**Video too large?**
- Use FFmpeg commands above to compress
- Target 3-4 MB for optimal performance
- Consider 720p instead of 1080p

**Video doesn't loop smoothly?**
- Ensure first and last frames match
- Use video editing software to create seamless loop
- Or find/create video designed for looping

## Next Steps

1. **Source or create video content**
2. **Optimize using FFmpeg commands**
3. **Create poster image**
4. **Test on multiple devices and browsers**
5. **Verify performance metrics**
6. **Adjust overlay opacity if needed** (in component props)

---

**Note:** Until you add actual video files, the site will gracefully handle missing videos by showing the poster image or falling back to the gradient overlay.
