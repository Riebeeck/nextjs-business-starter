# Phase 8: Design System Overhaul - LlamaIndex Inspired

Systematically redesign the website with proper color contrast, modern aesthetics, and improved navigation structure.

## Design Reference

**Gold Standard**: [LlamaIndex](https://www.llamaindex.ai/)

### What We're Adopting from LlamaIndex:
- Clean, modern navigation with dropdown menus
- Proper color contrast in both light and dark modes
- Smooth theme transitions
- Professional typography
- Card-based layouts with subtle shadows
- Gradient backgrounds (subtle, not overwhelming)
- Clear visual hierarchy
- Responsive mega-menu navigation

## Critical Issues to Fix

### 1. **Color Contrast Problems**
**Current Issues:**
- Dark mode is too dark (text hard to read)
- Light mode has white text on white backgrounds (invisible)
- Poor contrast ratios (fails WCAG AA standards)

**Solution:**
- Implement modern pastel color palette
- Ensure 4.5:1 contrast ratio minimum (WCAG AA)
- Test with contrast checker tools
- Use complementary colors for light/dark modes

### 2. **Navigation Structure**
**Current**: Simple links (Home, About, Projects, Blog)

**New Structure** (LlamaIndex-inspired):
```
Products
├── Product 1
├── Product 2
└── Product 3

Solutions
├── Use Cases
│   ├── Use Case 1
│   ├── Use Case 2
│   └── Use Case 3
└── Industries
    ├── Industry 1
    └── Industry 2

Developers
├── Documentation
├── API Reference
└── GitHub

Resources
├── Blog
├── Case Studies
└── Guides

Company
├── About Us
├── Team (includes your profile)
└── Careers
```

## Design System Requirements

### 1. Color Palette - Modern Pastels

**Light Mode:**
```css
/* Backgrounds */
--bg-primary: #FFFFFF
--bg-secondary: #F8F9FA (soft gray)
--bg-tertiary: #F3F4F6 (slightly darker gray)
--bg-accent: #EEF2FF (soft indigo tint)

/* Text */
--text-primary: #1F2937 (dark gray, not pure black)
--text-secondary: #4B5563 (medium gray)
--text-tertiary: #6B7280 (light gray)

/* Borders */
--border-primary: #E5E7EB
--border-secondary: #D1D5DB

/* Accents */
--accent-primary: #6366F1 (indigo)
--accent-secondary: #8B5CF6 (purple)
--accent-success: #10B981 (green)
--accent-warning: #F59E0B (amber)
```

**Dark Mode:**
```css
/* Backgrounds - NOT pure black */
--bg-primary: #0F172A (slate-900, softer than black)
--bg-secondary: #1E293B (slate-800)
--bg-tertiary: #334155 (slate-700)
--bg-accent: #1E1B4B (indigo-950 with slight tint)

/* Text - High contrast but not pure white */
--text-primary: #F1F5F9 (slate-100, off-white)
--text-secondary: #CBD5E1 (slate-300)
--text-tertiary: #94A3B8 (slate-400)

/* Borders */
--border-primary: #334155 (slate-700)
--border-secondary: #475569 (slate-600)

/* Accents - Brighter in dark mode */
--accent-primary: #818CF8 (indigo-400)
--accent-secondary: #A78BFA (purple-400)
--accent-success: #34D399 (green-400)
--accent-warning: #FBBF24 (amber-400)
```

### 2. Typography System

```css
/* Font Family */
--font-sans: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif

/* Font Sizes (refined scale) */
--text-xs: 0.75rem (12px)
--text-sm: 0.875rem (14px)
--text-base: 1rem (16px)
--text-lg: 1.125rem (18px)
--text-xl: 1.25rem (20px)
--text-2xl: 1.5rem (24px)
--text-3xl: 1.875rem (30px)

/* Font Weights */
--font-normal: 400
--font-medium: 500
--font-semibold: 600

/* Line Heights */
--leading-tight: 1.25
--leading-snug: 1.375
--leading-normal: 1.5
--leading-relaxed: 1.625
```

### 3. Spacing System

```css
/* Consistent spacing scale */
--space-1: 0.25rem (4px)
--space-2: 0.5rem (8px)
--space-3: 0.75rem (12px)
--space-4: 1rem (16px)
--space-6: 1.5rem (24px)
--space-8: 2rem (32px)
--space-12: 3rem (48px)
--space-16: 4rem (64px)
--space-24: 6rem (96px)
```

### 4. Shadow System

```css
/* Subtle, modern shadows */
--shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05)
--shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1)
--shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1)
--shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1)
```

### 5. Border Radius

```css
--radius-sm: 0.375rem (6px)
--radius-md: 0.5rem (8px)
--radius-lg: 0.75rem (12px)
--radius-xl: 1rem (16px)
```

## Navigation Implementation

### Header Component Requirements

**Structure:**
```tsx
<header className="sticky top-0 z-50 backdrop-blur-lg bg-white/80 dark:bg-slate-900/80 border-b border-gray-200 dark:border-slate-700">
  <nav className="max-w-7xl mx-auto px-4">
    <div className="flex items-center justify-between h-16">
      {/* Logo */}
      <Logo />
      
      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-8">
        <DropdownMenu title="Products" items={productsItems} />
        <DropdownMenu title="Solutions" items={solutionsItems} />
        <Link href="/developers">Developers</Link>
        <DropdownMenu title="Resources" items={resourcesItems} />
        <DropdownMenu title="Company" items={companyItems} />
      </div>
      
      {/* Right Side */}
      <div className="flex items-center gap-4">
        <ThemeToggle />
        <Button variant="primary">Get Started</Button>
      </div>
      
      {/* Mobile Menu Toggle */}
      <MobileMenuButton />
    </div>
  </nav>
</header>
```

**Dropdown Menu Features:**
- Smooth fade-in animation (200ms)
- Backdrop blur effect
- Organized sections with icons
- Descriptive subtitles
- Hover states on items
- Click outside to close

### Company Page (replaces About)

**Structure:**
```
/company/page.tsx
├── Hero Section
│   ├── "About Studio" (or your brand name)
│   └── Mission statement
├── Team Section
│   ├── Team grid (2-3 columns)
│   └── Team member cards
│       ├── Photo
│       ├── Name
│       ├── Role
│       ├── Bio
│       └── Social links (LinkedIn, GitHub, Twitter)
├── Values Section
│   └── Company values/principles
└── CTA Section
    └── "Join Us" or "Get in Touch"
```

**Your Profile Card:**
```tsx
<div className="group border border-gray-200 dark:border-slate-700 rounded-lg p-6 hover:shadow-lg transition-all">
  <div className="aspect-square bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-950 dark:to-purple-950 rounded-lg mb-4">
    {/* Profile image or placeholder */}
  </div>
  <h3 className="text-lg font-semibold text-gray-900 dark:text-slate-100 mb-1">
    Riebeeck van Niekerk
  </h3>
  <p className="text-sm text-gray-600 dark:text-slate-400 mb-3">
    Founder & Lead Developer
  </p>
  <p className="text-sm text-gray-700 dark:text-slate-300 mb-4">
    Brief bio about your background and expertise
  </p>
  <div className="flex gap-3">
    <SocialLink href="https://linkedin.com/in/riebeeckvanniekerk" icon={LinkedInIcon} />
    <SocialLink href="https://github.com/Riebeeck" icon={GitHubIcon} />
  </div>
</div>
```

## Systematic Implementation Steps

### Step 1: Create Design System Foundation

**Files to Create:**
```
/lib/design-system/
├── colors.ts          # Color palette constants
├── typography.ts      # Font sizes, weights, line heights
├── spacing.ts         # Spacing scale
└── tokens.ts          # All design tokens exported
```

**Tailwind Config Update:**
```javascript
// tailwind.config.ts
module.exports = {
  theme: {
    extend: {
      colors: {
        // Light mode
        'bg-primary': '#FFFFFF',
        'bg-secondary': '#F8F9FA',
        // ... all colors
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
}
```

### Step 2: Fix Theme Toggle & Color Contrast

**Requirements:**
- Smooth transition (200ms)
- Persist preference in localStorage
- System preference detection
- No flash of wrong theme on load
- Test all text is readable in both modes

**Contrast Testing:**
- Use WebAIM Contrast Checker
- Ensure 4.5:1 ratio for normal text
- Ensure 3:1 ratio for large text
- Test with actual content, not lorem ipsum

### Step 3: Rebuild Navigation

**Order of Implementation:**
1. Create dropdown menu component
2. Define navigation structure (Products, Solutions, etc.)
3. Implement desktop navigation
4. Implement mobile navigation (hamburger menu)
5. Add smooth animations
6. Test keyboard navigation
7. Test screen reader compatibility

### Step 4: Update All Pages

**Systematic approach:**
1. Homepage - Hero, featured sections
2. Products page - Product grid
3. Solutions page - Use cases and industries
4. Developers page - Documentation links
5. Resources/Blog page - Article listings
6. Company page - Team, mission, values
7. Individual blog/project pages

### Step 5: Component Library

**Create reusable components:**
```
/components/ui/
├── Button.tsx         # Primary, secondary, ghost variants
├── Card.tsx           # Standard card with hover effects
├── Badge.tsx          # Tags, labels
├── Input.tsx          # Form inputs
├── Dropdown.tsx       # Dropdown menu
└── Section.tsx        # Page sections with consistent spacing
```

### Step 6: Accessibility Audit

**Checklist:**
- [ ] All interactive elements have focus states
- [ ] Color contrast passes WCAG AA
- [ ] Keyboard navigation works
- [ ] Screen reader tested
- [ ] Alt text on all images
- [ ] Semantic HTML
- [ ] ARIA labels where needed
- [ ] Skip to content link

### Step 7: Responsive Testing

**Test at breakpoints:**
- 375px (Mobile - iPhone SE)
- 768px (Tablet - iPad)
- 1024px (Laptop)
- 1440px (Desktop)
- 1920px (Large Desktop)

### Step 8: Performance Optimization

**Requirements:**
- Lighthouse score 90+ on all metrics
- Optimized images (WebP format)
- Code splitting
- Lazy loading below fold
- Font optimization

## LlamaIndex Design Patterns to Adopt

### 1. Hero Section
- Clean, focused headline (text-2xl to text-3xl)
- Concise subheadline
- Two clear CTAs (primary + secondary)
- Subtle gradient background
- No large images, focus on typography

### 2. Feature Cards
- Grid layout (3 columns on desktop)
- Icon at top
- Title + description
- Hover effect (subtle lift + shadow)
- Border, not heavy shadows

### 3. Testimonials/Stats Section
- Clean typography
- Subtle background color change
- Numbers prominently displayed
- Company logos in grayscale

### 4. Footer
- Organized columns
- Newsletter signup
- Social links
- Legal links
- Dark background in light mode, lighter in dark mode

## Execution Prompt

---

## EXECUTION PROMPT:

Systematically redesign the website with LlamaIndex (https://www.llamaindex.ai/) as the design reference. Focus on proper color contrast, modern pastel colors, and improved navigation.

**CRITICAL: Color Contrast Fix**

1. **Implement Modern Pastel Color Palette:**
   
   **Light Mode:**
   - Background: white (#FFFFFF), soft gray (#F8F9FA), light gray (#F3F4F6)
   - Text: dark gray (#1F2937), medium gray (#4B5563), light gray (#6B7280)
   - Accents: indigo (#6366F1), purple (#8B5CF6)
   - Borders: #E5E7EB, #D1D5DB
   
   **Dark Mode:**
   - Background: slate-900 (#0F172A), slate-800 (#1E293B), slate-700 (#334155)
   - Text: slate-100 (#F1F5F9), slate-300 (#CBD5E1), slate-400 (#94A3B8)
   - Accents: indigo-400 (#818CF8), purple-400 (#A78BFA)
   - Borders: slate-700 (#334155), slate-600 (#475569)
   
   **ENSURE:**
   - Minimum 4.5:1 contrast ratio for all text (WCAG AA)
   - Test with WebAIM Contrast Checker
   - NO pure black (#000000) or pure white text
   - All text readable in both modes

2. **Update Tailwind Config:**
   - Add custom color palette to tailwind.config.ts
   - Define design tokens (spacing, typography, shadows)
   - Configure Inter font from Google Fonts
   - Set up dark mode with 'class' strategy

3. **Redesign Navigation (LlamaIndex-inspired):**
   
   **Structure:**
   ```
   Products (dropdown)
   Solutions (dropdown)
     ├── Use Cases
     └── Industries
   Developers (link)
   Resources (dropdown)
     ├── Blog
     └── Case Studies
   Company (dropdown)
     ├── About Us
     └── Team
   ```
   
   **Features:**
   - Sticky header with backdrop blur
   - Smooth dropdown animations (200ms)
   - Organized sections with icons
   - Mobile hamburger menu
   - Theme toggle in header
   - "Get Started" CTA button

4. **Create Company Page (replaces About):**
   - Hero: "About [Brand Name]" + mission
   - Team section with grid layout
   - Team member cards:
     * Profile image/placeholder
     * Name: Riebeeck van Niekerk
     * Role: Founder & Lead Developer
     * Brief bio
     * LinkedIn: https://linkedin.com/in/riebeeckvanniekerk
     * GitHub: https://github.com/Riebeeck
   - Values/principles section
   - CTA section

5. **Update All Components:**
   - Header with new navigation
   - Footer with organized columns
   - Button variants (primary, secondary, ghost)
   - Card components with proper contrast
   - Ensure all text is readable in both themes

6. **Typography System:**
   - Use Inter font (already configured)
   - Refined scale: text-sm (14px) to text-3xl (30px)
   - Font weights: 400 (normal), 500 (medium), 600 (semibold)
   - Avoid font-bold (700+)
   - Tight line heights for headings

7. **Spacing & Layout:**
   - Consistent spacing: py-12, py-16, py-24 for sections
   - Max-width containers: max-w-6xl, max-w-7xl
   - Generous white space
   - Card-based layouts with gaps: gap-6, gap-8

8. **Interactive Elements:**
   - Subtle hover effects (scale-[1.02], shadow-md)
   - Smooth transitions (200-300ms)
   - Focus states: ring-2 ring-indigo-500 ring-offset-2
   - Proper keyboard navigation

9. **Theme Toggle:**
   - Smooth transition between modes
   - Persist preference in localStorage
   - System preference detection
   - No flash of wrong theme on load
   - Sun/moon icon that changes

10. **Responsive Design:**
    - Mobile-first approach
    - Test at: 375px, 768px, 1024px, 1440px
    - Mobile hamburger menu
    - Collapsible dropdowns on mobile
    - Touch-friendly tap targets (min 44x44px)

11. **Accessibility:**
    - All interactive elements have focus states
    - Color contrast passes WCAG AA
    - Semantic HTML (header, nav, main, section, footer)
    - ARIA labels for dropdowns and mobile menu
    - Keyboard navigation works throughout
    - Alt text on all images

12. **Performance:**
    - Optimize images with next/image
    - Lazy load below-the-fold content
    - Code splitting for dropdown menus
    - Lighthouse score 90+ target

**Design References:**
- Study LlamaIndex navigation structure
- Adopt their color contrast approach
- Use their card layouts and spacing
- Follow their typography hierarchy
- Implement similar dropdown menus

**Testing Checklist:**
- [ ] All text readable in light mode
- [ ] All text readable in dark mode
- [ ] Contrast ratio 4.5:1+ for all text
- [ ] Theme toggle works smoothly
- [ ] Navigation dropdowns work on desktop
- [ ] Mobile menu works properly
- [ ] Company page shows team member
- [ ] All links work correctly
- [ ] Responsive at all breakpoints
- [ ] Keyboard navigation works
- [ ] No console errors

Run `npm run dev` and test thoroughly in both light and dark modes.
