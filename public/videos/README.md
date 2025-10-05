# Videos Directory

This directory contains all video assets for the website.

## Structure

- **demos/** - Product and project demonstration videos
  - Feature showcases
  - Product walkthroughs
  - Interactive demos

- **tutorials/** - Tutorial and educational videos
  - How-to guides
  - Technical explanations
  - Code walkthroughs

- **general/** - Other video content
  - Background videos
  - Promotional content
  - Testimonials

## Video Format Guidelines

### Recommended Formats
1. **MP4 (H.264)** - Best browser compatibility
2. **WebM** - Smaller file size, good for modern browsers
3. Provide both formats for maximum compatibility

### Optimization Tips

1. **Compression:**
   - Use tools like [HandBrake](https://handbrake.fr/) or [FFmpeg](https://ffmpeg.org/)
   - Target bitrate: 2-5 Mbps for 1080p, 1-2 Mbps for 720p
   - Keep file sizes reasonable (< 50MB when possible)

2. **Resolution:**
   - 1080p (1920x1080) for high-quality demos
   - 720p (1280x720) for tutorials and general content
   - Consider providing multiple resolutions

3. **Duration:**
   - Keep videos concise (< 2 minutes ideal)
   - Longer videos should be hosted on YouTube/Vimeo

## Usage in MDX

### Local MP4 Video
```mdx
<video controls width="100%">
  <source src="/videos/demos/my-demo.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>
```

### YouTube Embed
```mdx
<iframe
  width="100%"
  height="400"
  src="https://www.youtube.com/embed/VIDEO_ID"
  title="Video title"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
></iframe>
```

## FFmpeg Quick Commands

### Convert to MP4 (H.264)
```bash
ffmpeg -i input.mov -c:v libx264 -crf 23 -c:a aac -b:a 128k output.mp4
```

### Convert to WebM
```bash
ffmpeg -i input.mov -c:v libvpx-vp9 -crf 30 -b:v 0 -c:a libopus output.webm
```

### Compress existing MP4
```bash
ffmpeg -i input.mp4 -c:v libx264 -crf 28 -c:a aac -b:a 96k output-compressed.mp4
```

### Create thumbnail
```bash
ffmpeg -i video.mp4 -ss 00:00:05 -vframes 1 thumbnail.jpg
```

## Hosting Considerations

### Local Hosting (public/videos/)
**Pros:**
- Full control
- No external dependencies
- Works offline

**Cons:**
- Increases deployment size
- Uses your bandwidth
- No adaptive streaming

**Best for:** Short demos (< 2 min), small file sizes (< 20MB)

### External Hosting (YouTube/Vimeo)
**Pros:**
- Free bandwidth
- Adaptive streaming
- Better performance
- Analytics

**Cons:**
- Requires internet
- Platform dependencies
- Ads (YouTube free tier)

**Best for:** Longer videos, tutorials, promotional content
