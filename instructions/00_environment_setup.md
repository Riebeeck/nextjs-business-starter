# Phase 0: Environment Setup & Prerequisites

**READ THIS FIRST** before proceeding to Phase 1.

## Understanding the Tech Stack

This is a **JavaScript/TypeScript project** using Node.js, not Python. Here's the ecosystem comparison:

| Python Ecosystem | Node.js Ecosystem (This Project) |
|-----------------|----------------------------------|
| Python interpreter | Node.js runtime |
| `venv` / `virtualenv` | `node_modules/` directory |
| `requirements.txt` | `package.json` |
| `pip install` | `npm install` |
| `pip freeze` | `package-lock.json` |
| `python app.py` | `npm run dev` |

## Prerequisites Installation

### 1. Install Node.js (Required)

**macOS (using Homebrew):**
```bash
# Install Homebrew if not already installed
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Install Node.js (LTS version)
brew install node@18

# Verify installation
node --version  # Should show v18.17.0 or higher
npm --version   # Should show 9.0.0 or higher
```

**Alternative - Using NVM (Node Version Manager):**
```bash
# Install NVM
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# Restart terminal, then install Node.js
nvm install 18
nvm use 18
nvm alias default 18

# Verify
node --version
npm --version
```

**Windows:**
- Download from https://nodejs.org/ (LTS version)
- Run installer
- Verify in PowerShell: `node --version`

### 2. Verify Git Installation

```bash
git --version  # Should show git version 2.x or higher

# If not installed on macOS:
brew install git

# Configure Git (if first time)
git config --global user.name "Riebeeck van Niekerk"
git config --global user.email "riebeeck.vanniekerk@gmail.com"
```

### 3. Choose Your Package Manager

This project uses **npm** (comes with Node.js), but you can also use **yarn** or **pnpm**:

```bash
# npm (default, already installed with Node.js)
npm --version

# OR install yarn (optional alternative)
npm install -g yarn
yarn --version

# OR install pnpm (optional alternative)
npm install -g pnpm
pnpm --version
```

**Recommendation**: Stick with **npm** for simplicity.

## Project Isolation & Reproducibility

### How Node.js Projects Work

Unlike Python's virtual environments, Node.js projects are isolated through:

1. **`node_modules/` directory**: Contains all dependencies (like Python's venv)
   - Created when you run `npm install`
   - Specific to each project
   - Listed in `.gitignore` (not committed to Git)

2. **`package.json`**: Defines dependencies and scripts
   - Like Python's `requirements.txt`
   - **IS committed to Git**
   - Contains dependency names and version ranges

3. **`package-lock.json`**: Locks exact versions
   - Like Python's `pip freeze` output
   - **IS committed to Git** (important for reproducibility)
   - Ensures everyone gets the exact same versions

### Project Setup Workflow

```bash
# 1. Clone or create project
cd /Users/riebeeck.vanniekerk/Documents/personal_projects/core_web

# 2. Install dependencies (creates node_modules/)
npm install

# 3. Start development server
npm run dev

# 4. Build for production
npm run build

# 5. Start production server
npm start
```

## Version Management (Optional but Recommended)

Create version lock files to ensure consistency across environments:

### .nvmrc (for NVM users)
```bash
echo "18.17.0" > .nvmrc
```

### .node-version (for other version managers)
```bash
echo "18.17.0" > .node-version
```

### .npmrc (npm configuration)
```bash
echo "engine-strict=true" > .npmrc
```

Then add to `package.json`:
```json
{
  "engines": {
    "node": ">=18.17.0",
    "npm": ">=9.0.0"
  }
}
```

## Docker Support (Future)

If you want to containerize this project later, here's a preview:

**Dockerfile** (will be created in Phase 5):
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

**docker-compose.yml**:
```yaml
version: '3.8'
services:
  web:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
```

## Verification Checklist

Before proceeding to Phase 1, verify:

- [ ] Node.js 18.17+ installed: `node --version`
- [ ] npm 9.0+ installed: `npm --version`
- [ ] Git installed: `git --version`
- [ ] Git configured with your name and email
- [ ] You understand Node.js uses `package.json` not `requirements.txt`
- [ ] You understand `node_modules/` is like Python's venv
- [ ] You're in the correct directory: `/Users/riebeeck.vanniekerk/Documents/personal_projects/core_web`

## Common Questions

**Q: Why no virtual environment like Python?**  
A: Node.js isolates dependencies per-project through `node_modules/`. Each project has its own isolated dependencies.

**Q: Can I use different Node versions for different projects?**  
A: Yes! Use NVM (Node Version Manager) to switch between Node versions, similar to pyenv.

**Q: What if someone else wants to run my project?**  
A: They just need:
1. Node.js installed
2. Clone your repo
3. Run `npm install` (reads package.json and package-lock.json)
4. Run `npm run dev`

**Q: How do I add new dependencies?**  
A: Use `npm install <package-name>` - it automatically updates package.json and package-lock.json

**Q: Should I commit node_modules/?**  
A: **NO!** Never commit `node_modules/`. Always commit `package.json` and `package-lock.json` instead.

## Ready to Start?

Once you've verified all prerequisites, proceed to **Phase 1: Project Initialization**.
