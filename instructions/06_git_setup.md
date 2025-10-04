# Phase 6: Git Repository Setup

Set up Git version control and connect to your GitHub repository.

## Prerequisites

1. Create a new repository on GitHub:
   - Go to https://github.com/Riebeeck
   - Click "New repository" or visit https://github.com/new
   - Repository name: `core_web`
   - Description: "Personal portfolio website built with Next.js 14, TypeScript, and Tailwind CSS"
   - Visibility: Public (recommended for portfolio) or Private
   - **Do NOT** initialize with README, .gitignore, or license (we already have these)
   - Click "Create repository"

## Git Setup Commands

Once you've created the repository on GitHub, run these commands:

```bash
# Initialize Git repository (if not already initialized)
git init

# Add all files to staging
git add .

# Create initial commit
git commit -m "feat: initial portfolio website setup with Next.js 14, TypeScript, and Tailwind CSS"

# Add remote repository (replace with your actual repo URL)
git remote add origin https://github.com/Riebeeck/core_web.git

# Verify remote is set correctly
git remote -v

# Push to GitHub
git branch -M main
git push -u origin main
```

## Execution Prompt

```
Initialize Git repository and connect to GitHub.

1. Verify .gitignore is properly configured for Next.js
2. Initialize Git if not already done: `git init`
3. Stage all files: `git add .`
4. Create initial commit with message: "feat: initial portfolio website setup with Next.js 14, TypeScript, and Tailwind CSS"
5. Add remote: `git remote add origin https://github.com/Riebeeck/core_web.git`
6. Push to main branch: `git branch -M main && git push -u origin main`

Confirm that the repository is successfully connected and all files are pushed to GitHub.
```

## Verification

After pushing, verify:
- Visit https://github.com/Riebeeck/core_web
- All files should be visible
- README.md should display properly
- No sensitive files (.env, node_modules) should be present

## Future Commits

Use conventional commit format:
```bash
# Feature
git commit -m "feat(blog): add new blog post about TypeScript"

# Fix
git commit -m "fix(header): resolve mobile menu toggle issue"

# Documentation
git commit -m "docs: update README with deployment instructions"

# Style
git commit -m "style(components): format code with prettier"
```

## Deployment Setup (After Git Push)

### Option 1: Vercel (Recommended)
1. Go to https://vercel.com
2. Sign in with GitHub
3. Click "Add New Project"
4. Import `Riebeeck/core_web`
5. Vercel auto-detects Next.js settings
6. Click "Deploy"
7. Your site will be live at `https://core-web-[random].vercel.app`
8. Configure custom domain if desired

### Option 2: Netlify
1. Go to https://netlify.com
2. Sign in with GitHub
3. Click "Add new site" → "Import an existing project"
4. Select `Riebeeck/core_web`
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
6. Click "Deploy site"

### Option 3: GitHub Pages (Requires Static Export)
If you want to use GitHub Pages, you'll need to configure Next.js for static export:

1. Update `next.config.js`:
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/core_web',
};

module.exports = nextConfig;
```

2. Add GitHub Actions workflow (`.github/workflows/deploy.yml`):
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./out
```

3. Enable GitHub Pages in repository settings:
   - Go to Settings → Pages
   - Source: Deploy from a branch
   - Branch: `gh-pages` / `root`

## Repository Settings

Recommended settings for your GitHub repository:

1. **About Section**:
   - Description: "Personal portfolio website built with Next.js 14, TypeScript, and Tailwind CSS"
   - Website: Add your deployed URL
   - Topics: `nextjs`, `typescript`, `tailwindcss`, `portfolio`, `blog`, `mdx`

2. **Branch Protection** (Optional for solo project):
   - Settings → Branches → Add rule
   - Branch name pattern: `main`
   - Require pull request reviews before merging

3. **Social Preview**:
   - Upload a screenshot of your site as the social preview image
   - This shows up when sharing the repo link

## Troubleshooting

### If remote already exists:
```bash
git remote remove origin
git remote add origin https://github.com/Riebeeck/core_web.git
```

### If push is rejected:
```bash
git pull origin main --rebase
git push -u origin main
```

### If you need to change commit message:
```bash
git commit --amend -m "new message"
git push --force-with-lease
```
