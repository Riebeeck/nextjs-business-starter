# Media Quick Start Guide

## 📁 Where to Put Your Files

```
public/
├── images/
│   ├── logos/          ← Your custom logos go here
│   ├── blog/           ← Blog post images
│   ├── projects/       ← Project screenshots
│   ├── og/             ← Social sharing images (1200x630)
│   └── general/        ← Other site images
├── videos/
│   ├── demos/          ← Product demos
│   ├── tutorials/      ← Tutorial videos
│   └── general/        ← Other videos
└── assets/             ← PDFs, documents, downloads
```

## 🚀 Quick Examples

### Add a Logo

1. Save your logo: `public/images/logos/my-logo.svg`
2. Use in component:
   ```tsx
   import Image from 'next/image';
   
   <Image 
     src="/images/logos/my-logo.svg" 
     alt="My Company" 
     width={150} 
     height={50} 
   />
   ```

### Add a Blog Image

1. Save image: `public/images/blog/my-post-hero.jpg`
2. Use in MDX:
   ```mdx
   ![Description of image](/images/blog/my-post-hero.jpg)
   ```

### Add a Video

1. Save video: `public/videos/demos/my-demo.mp4`
2. Use in MDX:
   ```mdx
   <video src="/videos/demos/my-demo.mp4" controls />
   ```

### Embed YouTube

```mdx
<YouTube id="VIDEO_ID" title="Video Title" />
```

## 📝 Before You Add Media

### Images
- ✅ Optimize with [Squoosh](https://squoosh.app/) or [TinyPNG](https://tinypng.com/)
- ✅ Target: < 200KB for hero images, < 100KB for thumbnails
- ✅ Prefer WebP or SVG formats
- ✅ Use descriptive file names: `dashboard-screenshot.png`

### Videos
- ✅ Compress with [HandBrake](https://handbrake.fr/) or FFmpeg
- ✅ Keep under 50MB and 2 minutes
- ✅ Use YouTube for longer videos
- ✅ Provide MP4 format (best compatibility)

## 🛠️ Useful Commands

### Compress Video
```bash
ffmpeg -i input.mov -c:v libx264 -crf 23 -c:a aac output.mp4
```

### Create Video Thumbnail
```bash
ffmpeg -i video.mp4 -ss 00:00:05 -vframes 1 thumbnail.jpg
```

## 📚 Full Documentation

See `instructions/10_media_management.md` for complete guide.

## 🎯 Next Steps

1. Add your logos to `public/images/logos/`
2. Add project screenshots to `public/images/projects/`
3. Add videos to `public/videos/demos/`
4. Update your content to use the new media!

## 💡 Tips

- Always use `next/image` component (not `<img>`)
- Add meaningful alt text for accessibility
- Test on mobile devices
- Keep file sizes reasonable for fast loading
