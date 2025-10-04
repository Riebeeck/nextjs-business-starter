# Design Guidelines & Visual Standards

Reference this document when implementing design changes throughout the project.

## Design Inspiration

- **Primary**: [Squarespace](https://www.squarespace.com/) - Clean, minimalist, professional
- **Secondary**: [Vercel Templates](https://vercel.com/templates) - Modern, developer-focused
- **E-commerce**: [Medusa Commerce](https://vercel.com/new/templates/ecommerce/medusa) - Product-focused layouts

## Core Design Principles

### 1. Minimalism First
- **Less is more**: Remove unnecessary elements
- **White space**: Generous padding and margins
- **Clean lines**: Subtle borders, no heavy shadows
- **Focused content**: One primary message per section

### 2. Typography Hierarchy

```css
/* Refined Typography Scale */
h1: text-2xl md:text-3xl (24px-30px)
h2: text-xl md:text-2xl (20px-24px)
h3: text-lg md:text-xl (18px-20px)
Body: text-sm md:text-base (14px-16px)
Small: text-xs md:text-sm (12px-14px)

/* Font Weights */
Regular: font-normal (400)
Medium: font-medium (500)
Semibold: font-semibold (600)
Avoid: font-bold (700+) except for rare emphasis
```

**Rules:**
- No large hero text (avoid text-4xl, text-5xl, text-6xl)
- Use tight line heights (leading-tight, leading-snug)
- Limit text blocks to 60-70 characters wide
- Use font-medium for headings, not font-bold

### 3. Spacing System

Use Tailwind's spacing scale consistently:

```css
/* Section Spacing */
py-12 md:py-16 lg:py-24  /* Between major sections */
py-8 md:py-12            /* Between subsections */
py-6 md:py-8             /* Within components */

/* Container Spacing */
px-4 md:px-6 lg:px-8     /* Horizontal padding */
max-w-6xl mx-auto        /* Content container */
max-w-7xl mx-auto        /* Wide container */

/* Component Spacing */
gap-4 md:gap-6 lg:gap-8  /* Grid/flex gaps */
space-y-4 md:space-y-6   /* Vertical stacking */
```

### 4. Color Palette

**Light Mode:**
```css
Background: bg-white, bg-gray-50
Text: text-gray-900, text-gray-700, text-gray-600
Borders: border-gray-200, border-gray-300
Accents: bg-gray-100, hover:bg-gray-50
```

**Dark Mode:**
```css
Background: dark:bg-gray-900, dark:bg-gray-950
Text: dark:text-gray-100, dark:text-gray-300, dark:text-gray-400
Borders: dark:border-gray-800, dark:border-gray-700
Accents: dark:bg-gray-800, dark:hover:bg-gray-800/50
```

**Accent Colors (use sparingly):**
```css
Primary: blue-600, dark:blue-400
Success: green-600, dark:green-400
Warning: amber-600, dark:amber-400
Error: red-600, dark:red-400
```

### 5. Layout Patterns

**Hero Section:**
```tsx
<section className="py-16 md:py-24 lg:py-32">
  <div className="max-w-6xl mx-auto px-4">
    <h1 className="text-2xl md:text-3xl font-medium mb-4">
      Clean, focused headline
    </h1>
    <p className="text-base text-gray-600 dark:text-gray-400 max-w-2xl">
      Concise description, not a wall of text.
    </p>
  </div>
</section>
```

**Card Grid:**
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
  <div className="group border border-gray-200 dark:border-gray-800 rounded-lg p-6 hover:border-gray-300 dark:hover:border-gray-700 transition-colors">
    {/* Card content */}
  </div>
</div>
```

**Bento Box Layout:**
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-fr">
  <div className="col-span-1 md:col-span-2 lg:col-span-2">
    {/* Large card */}
  </div>
  <div className="col-span-1">
    {/* Small card */}
  </div>
</div>
```

### 6. Interactive Elements

**Buttons:**
```tsx
// Primary
<button className="px-4 py-2 bg-gray-900 text-white text-sm rounded-md hover:bg-gray-800 transition-colors dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100">

// Secondary
<button className="px-4 py-2 border border-gray-300 text-gray-700 text-sm rounded-md hover:bg-gray-50 transition-colors dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800">

// Ghost
<button className="px-4 py-2 text-gray-700 text-sm hover:bg-gray-100 rounded-md transition-colors dark:text-gray-300 dark:hover:bg-gray-800">
```

**Links:**
```tsx
<a className="text-gray-700 hover:text-gray-900 transition-colors underline-offset-4 hover:underline dark:text-gray-300 dark:hover:text-gray-100">
```

**Cards:**
```tsx
<div className="group border border-gray-200 rounded-lg p-6 hover:shadow-md hover:border-gray-300 transition-all dark:border-gray-800 dark:hover:border-gray-700">
```

### 7. Hover & Focus States

**Hover Effects:**
- Subtle scale: `hover:scale-[1.02]`
- Border changes: `hover:border-gray-300`
- Background: `hover:bg-gray-50`
- Shadow: `hover:shadow-md`
- Opacity: `group-hover:opacity-100`

**Focus States (Accessibility):**
```css
focus:outline-none 
focus:ring-2 
focus:ring-blue-500 
focus:ring-offset-2 
dark:focus:ring-offset-gray-900
```

### 8. Animations & Transitions

**Standard Transitions:**
```css
transition-colors duration-200
transition-all duration-200
transition-transform duration-200
```

**Micro-animations:**
```tsx
// Fade in on scroll (optional: use framer-motion)
<div className="opacity-0 animate-fade-in">

// Slide up on scroll
<div className="translate-y-4 animate-slide-up">
```

### 9. Responsive Breakpoints

Test at these widths:
- **Mobile**: 375px (iPhone SE)
- **Tablet**: 768px (iPad)
- **Desktop**: 1024px (Laptop)
- **Large**: 1440px (Desktop)

**Mobile-First Approach:**
```tsx
// Base styles for mobile, then add breakpoints
<div className="text-sm md:text-base lg:text-lg">
<div className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
<div className="px-4 md:px-6 lg:px-8">
```

## Branding Guidelines

### Generic Brand Identity

**DO NOT:**
- Use "Riebeeck van Niekerk" prominently
- Include personal photos in hero sections
- Make it feel like a personal blog

**DO:**
- Use generic brand name: "Studio", "Lab", "Forge", "Atelier"
- Focus on work and products
- Keep branding minimal and professional
- Make it feel like a business/agency

**Example Brand Names (choose one or customize):**
- "Studio" - Clean, minimal
- "Lab" - Experimental, technical
- "Forge" - Building, creating
- "Atelier" - Craftsmanship, design
- "Works" - Portfolio-focused
- "Digital" - Tech-focused

### Logo & Header

```tsx
// Minimal logo/brand
<div className="text-lg font-medium">Studio</div>

// Or with icon
<div className="flex items-center gap-2">
  <Icon className="w-5 h-5" />
  <span className="text-lg font-medium">Studio</span>
</div>
```

## E-commerce Design Patterns

### Product/Service Cards

```tsx
<div className="group border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all dark:border-gray-800">
  <div className="aspect-video bg-gray-100 dark:bg-gray-800">
    {/* Image or preview */}
  </div>
  <div className="p-6">
    <h3 className="text-lg font-medium mb-2">Product Name</h3>
    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
      Brief description
    </p>
    <div className="flex items-center justify-between">
      <span className="text-lg font-medium">$99</span>
      <button className="text-sm text-blue-600 hover:text-blue-700">
        Learn More →
      </button>
    </div>
  </div>
</div>
```

### Call-to-Action Sections

```tsx
<section className="py-16 bg-gray-50 dark:bg-gray-900">
  <div className="max-w-4xl mx-auto px-4 text-center">
    <h2 className="text-2xl font-medium mb-4">
      Ready to get started?
    </h2>
    <p className="text-gray-600 dark:text-gray-400 mb-8">
      Brief value proposition
    </p>
    <button className="px-6 py-3 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-colors dark:bg-white dark:text-gray-900">
      Get Started
    </button>
  </div>
</section>
```

### Pricing Display (Future)

```tsx
<div className="border border-gray-200 rounded-lg p-8 dark:border-gray-800">
  <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">
    Professional
  </div>
  <div className="flex items-baseline gap-1 mb-6">
    <span className="text-3xl font-medium">$99</span>
    <span className="text-gray-600 dark:text-gray-400">/mo</span>
  </div>
  <ul className="space-y-3 mb-8">
    <li className="flex items-center gap-2 text-sm">
      <Check className="w-4 h-4" />
      Feature one
    </li>
  </ul>
  <button className="w-full py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
    Choose Plan
  </button>
</div>
```

## Component Library

### Recommended Icons
- **lucide-react** (preferred): Clean, consistent, MIT licensed
- **heroicons**: Alternative, Tailwind-designed

```bash
npm install lucide-react
```

### Recommended Animations (Optional)
```bash
npm install framer-motion
```

## Accessibility Checklist

- [ ] All interactive elements have focus states
- [ ] Color contrast meets WCAG AA (4.5:1 for text)
- [ ] All images have alt text
- [ ] Keyboard navigation works throughout
- [ ] Semantic HTML (header, main, section, article, footer)
- [ ] ARIA labels where needed
- [ ] Skip to content link for screen readers

## Testing Checklist

- [ ] Test on Chrome, Firefox, Safari
- [ ] Test on mobile (iOS Safari, Chrome)
- [ ] Test light and dark modes
- [ ] Test at 375px, 768px, 1024px, 1440px
- [ ] Run Lighthouse audit (aim for 90+ on all metrics)
- [ ] Test keyboard navigation
- [ ] Test with screen reader (VoiceOver or NVDA)

## Examples to Study

1. **Squarespace Homepage**: Clean hero, card grids, subtle animations
2. **Vercel Templates**: Modern layouts, great typography
3. **Linear.app**: Minimal, refined, professional
4. **Stripe.com**: Clean product pages, great use of white space
5. **Resend.com**: Developer-focused, minimal branding

## Anti-Patterns to Avoid

❌ Large, bold hero text (text-5xl, text-6xl)  
❌ Heavy drop shadows (shadow-2xl)  
❌ Cluttered layouts with too much content  
❌ Personal branding (photos, full name prominently)  
❌ Aggressive CTAs (bright colors, multiple buttons)  
❌ Overly complex animations  
❌ Inconsistent spacing  
❌ Poor mobile responsiveness  

## Summary

**Goal**: Create a clean, professional, minimalist platform that can showcase work and eventually sell products/services. Think "design studio" or "digital agency", not "personal blog".
