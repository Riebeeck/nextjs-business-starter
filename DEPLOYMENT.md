# Deployment Guide

Complete guide to deploying your Next.js Business Starter Template to various platforms.

## Table of Contents

1. [Pre-Deployment Checklist](#pre-deployment-checklist)
2. [Vercel (Recommended)](#vercel-recommended)
3. [Netlify](#netlify)
4. [AWS Amplify](#aws-amplify)
5. [Docker](#docker)
6. [Self-Hosted](#self-hosted)
7. [Post-Deployment](#post-deployment)

---

## Pre-Deployment Checklist

Before deploying, ensure you've completed these steps:

### 1. Update URLs

**`app/sitemap.ts`** (line 6):
```typescript
const baseUrl = 'https://yourdomain.com'; // Update this
```

**`app/robots.ts`** (line 4):
```typescript
sitemap: 'https://yourdomain.com/sitemap.xml', // Update this
```

### 2. Verify Build

```bash
npm run build
npm start
```

Visit `http://localhost:3000` and test:
- All pages load correctly
- Navigation works
- Blog posts display
- Projects display
- Theme switching works
- Mobile responsive

### 3. Check Dependencies

```bash
npm audit
npm audit fix
```

### 4. Environment Variables

Prepare your environment variables (you'll add these in the deployment platform):

```env
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXT_PUBLIC_SITE_NAME=YourCompany
# Add any other variables you need
```

### 5. Update package.json

Verify these fields are correct:
- `"name"`
- `"version"`
- `"description"`
- `"author"`
- `"repository"`

---

## Vercel (Recommended)

Vercel is the easiest deployment option for Next.js projects.

### Initial Deployment

1. **Push code to GitHub:**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Visit [Vercel](https://vercel.com):**
   - Sign in with GitHub
   - Click "Add New Project"
   - Import your repository

3. **Configure project:**
   - Framework Preset: Next.js (auto-detected)
   - Root Directory: ./
   - Build Command: `npm run build` (auto-detected)
   - Output Directory: `.next` (auto-detected)
   - Install Command: `npm install` (auto-detected)

4. **Add Environment Variables:**
   - Click "Environment Variables"
   - Add your variables:
     - `NEXT_PUBLIC_SITE_URL` = `https://yourdomain.com`
     - `NEXT_PUBLIC_SITE_NAME` = `YourCompany`

5. **Deploy:**
   - Click "Deploy"
   - Wait 2-3 minutes
   - Your site is live!

### Custom Domain

1. **In Vercel Dashboard:**
   - Go to your project
   - Click "Settings" → "Domains"
   - Add your domain: `yourdomain.com`

2. **Update DNS:**
   - Add CNAME record: `www` → `cname.vercel-dns.com`
   - Add A record: `@` → Vercel's IP (shown in dashboard)

3. **SSL:**
   - Automatically provisioned by Vercel
   - Usually takes 5-10 minutes

### Automatic Deployments

- Every `git push` to `main` branch triggers a deployment
- Preview deployments for pull requests
- Instant rollbacks available

### Vercel CLI (Optional)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Deploy to production
vercel --prod
```

---

## Netlify

Netlify is another excellent option for Next.js.

### Initial Deployment

1. **Push code to GitHub:**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Visit [Netlify](https://netlify.com):**
   - Sign in with GitHub
   - Click "Add new site" → "Import an existing project"
   - Connect to GitHub
   - Select your repository

3. **Configure build:**
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Netlify will detect Next.js and configure automatically

4. **Add Environment Variables:**
   - Go to "Site settings" → "Environment variables"
   - Add your variables

5. **Deploy:**
   - Click "Deploy site"
   - Wait 3-5 minutes
   - Your site is live!

### Custom Domain

1. **In Netlify Dashboard:**
   - Go to "Domain settings"
   - Click "Add custom domain"
   - Enter your domain

2. **Update DNS:**
   - Point your domain to Netlify's nameservers
   - Or add DNS records shown in dashboard

3. **SSL:**
   - Automatically provisioned with Let's Encrypt
   - Takes 5-10 minutes

### netlify.toml (Optional)

Create `netlify.toml` in root:
```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"

[build.environment]
  NODE_VERSION = "18.17.0"
```

---

## AWS Amplify

AWS Amplify provides hosting with CI/CD.

### Initial Deployment

1. **Push code to GitHub**

2. **Visit [AWS Amplify Console](https://console.aws.amazon.com/amplify/):**
   - Click "New app" → "Host web app"
   - Connect GitHub
   - Select repository and branch

3. **Configure build:**
   - Amplify auto-detects Next.js
   - Verify build settings:
     ```yaml
     version: 1
     frontend:
       phases:
         preBuild:
           commands:
             - npm ci
         build:
           commands:
             - npm run build
       artifacts:
         baseDirectory: .next
         files:
           - '**/*'
       cache:
         paths:
           - node_modules/**/*
     ```

4. **Add Environment Variables:**
   - In build settings
   - Add your variables

5. **Deploy:**
   - Click "Save and deploy"
   - First build takes 5-10 minutes

### Custom Domain

1. **In Amplify Console:**
   - Go to "Domain management"
   - Click "Add domain"
   - Enter your domain

2. **SSL:**
   - Automatically provisioned
   - Managed by AWS Certificate Manager

---

## Docker

For containerized deployment.

### Create Dockerfile

Create `Dockerfile` in root:
```dockerfile
FROM node:18-alpine AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci

FROM node:18-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

FROM node:18-alpine AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"]
```

### Create .dockerignore

```
node_modules
.next
.git
.env.local
npm-debug.log
```

### Update next.config.ts

Add to enable standalone output:
```typescript
const nextConfig = {
  output: 'standalone',
  // ... rest of config
};
```

### Build and Run

```bash
# Build image
docker build -t nextjs-business-starter .

# Run container
docker run -p 3000:3000 nextjs-business-starter
```

### Docker Compose

Create `docker-compose.yml`:
```yaml
version: '3.8'
services:
  web:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NEXT_PUBLIC_SITE_URL=https://yourdomain.com
      - NEXT_PUBLIC_SITE_NAME=YourCompany
    restart: unless-stopped
```

Run with:
```bash
docker-compose up -d
```

---

## Self-Hosted

Deploy to your own server.

### Prerequisites

- Server with Node.js 18.17+ installed
- Domain pointed to your server
- SSH access

### Deployment Steps

1. **On your server, install Node.js:**
   ```bash
   curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
   sudo apt-get install -y nodejs
   ```

2. **Clone repository:**
   ```bash
   cd /var/www
   git clone https://github.com/yourusername/yourrepo.git
   cd yourrepo
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Build:**
   ```bash
   npm run build
   ```

5. **Set up PM2 (process manager):**
   ```bash
   # Install PM2
   npm install -g pm2

   # Start application
   pm2 start npm --name "nextjs-app" -- start

   # Save PM2 config
   pm2 save

   # Set PM2 to start on boot
   pm2 startup
   ```

6. **Configure Nginx as reverse proxy:**
   ```nginx
   server {
       listen 80;
       server_name yourdomain.com;

       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

7. **Set up SSL with Let's Encrypt:**
   ```bash
   sudo apt install certbot python3-certbot-nginx
   sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com
   ```

### Auto-Deploy Script

Create `deploy.sh`:
```bash
#!/bin/bash
git pull origin main
npm install
npm run build
pm2 restart nextjs-app
```

Make executable:
```bash
chmod +x deploy.sh
```

---

## Post-Deployment

### 1. Verify Deployment

- [ ] All pages load correctly
- [ ] Navigation works
- [ ] Images load
- [ ] Blog posts display
- [ ] Projects display
- [ ] Theme switching works
- [ ] Mobile responsive
- [ ] Forms work (if applicable)
- [ ] SSL certificate is valid

### 2. Test Performance

Use these tools:
- [Google PageSpeed Insights](https://pagespeed.web.dev/)
- [GTmetrix](https://gtmetrix.com/)
- [WebPageTest](https://www.webpagetest.org/)

Target scores:
- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 95+

### 3. Submit to Search Engines

**Google Search Console:**
1. Visit [Google Search Console](https://search.google.com/search-console)
2. Add your property
3. Verify ownership
4. Submit sitemap: `https://yourdomain.com/sitemap.xml`

**Bing Webmaster Tools:**
1. Visit [Bing Webmaster Tools](https://www.bing.com/webmasters)
2. Add your site
3. Submit sitemap

### 4. Set Up Monitoring

**Uptime Monitoring:**
- [UptimeRobot](https://uptimerobot.com/) (free)
- [Pingdom](https://www.pingdom.com/)

**Error Tracking:**
- [Sentry](https://sentry.io/)
- Configure in Next.js

**Analytics:**
- Google Analytics
- [Plausible](https://plausible.io/) (privacy-friendly)
- [Fathom](https://usefathom.com/)

### 5. Backup Strategy

- Database backups (if applicable)
- Code is backed up in Git
- Media files backup
- Regular snapshots of server (if self-hosted)

---

## Troubleshooting

### Build Fails

**Check Node version:**
```bash
node --version  # Should be 18.17.0+
```

**Clear cache:**
```bash
rm -rf .next
npm run clean
npm run build
```

**Check dependencies:**
```bash
rm -rf node_modules package-lock.json
npm install
```

### Images Not Loading

- Verify images are in `/public/` directory
- Check paths are correct (case-sensitive)
- Check file permissions (if self-hosted)

### 404 Errors

- Verify routes exist in `app/` directory
- Check for typos in URLs
- Clear browser cache
- Rebuild application

### Environment Variables Not Working

- Verify variables start with `NEXT_PUBLIC_` for client-side
- Restart development server after adding variables
- Redeploy after changing variables on platform
- Check variable names match exactly (case-sensitive)

---

## Platform Comparison

| Feature | Vercel | Netlify | AWS Amplify | Self-Hosted |
|---------|---------|---------|-------------|-------------|
| **Ease of Setup** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐ |
| **Free Tier** | Yes | Yes | Limited | N/A |
| **Auto Deploys** | Yes | Yes | Yes | Manual |
| **Custom Domains** | Yes | Yes | Yes | Yes |
| **SSL** | Free | Free | Free | Let's Encrypt |
| **Build Time** | Fast | Fast | Medium | Depends |
| **Next.js Support** | Excellent | Excellent | Good | Full Control |
| **Best For** | Next.js apps | All static sites | AWS users | Full control |

**Recommendation:** Start with Vercel for the best Next.js experience.

---

**Need help?** Open an issue on [GitHub](https://github.com/yourusername/nextjs-business-starter/issues).

