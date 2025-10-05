# Phase 9: Five-Theme Toggle System

Implement a professional theme switcher with five complementary pastel color palettes: Coastal Mist, Warm Terracotta, Lavender & Mint, Desert Bloom, and Morning Dew.

## Current Problem

- Light/dark mode only affects navigation
- Inconsistent color application across pages
- Poor contrast in some sections
- Need for more sophisticated theming system

## Solution: Five-Theme System

Replace binary light/dark mode with five complete, professionally designed themes that apply globally across the entire website.

## Theme Specifications

### Theme 1: Coastal Mist 🌫️
**Character**: Professional, serene, clean, trustworthy  
**Best for**: Tech portfolios, SaaS websites, professional services

```css
/* Coastal Mist Theme */
--theme-primary: #A2B9D1;        /* Soft Blue */
--theme-primary-rgb: 162, 185, 209;

--theme-accent: #84A9A6;          /* Muted Teal */
--theme-accent-rgb: 132, 169, 166;

--theme-background: #F0F2F5;      /* Light Cream */
--theme-background-rgb: 240, 242, 245;

--theme-text: #4D5359;            /* Dark Slate */
--theme-text-rgb: 77, 83, 89;

/* Derived colors for depth */
--theme-bg-secondary: #E8EAED;    /* Slightly darker background */
--theme-bg-tertiary: #DFE1E4;     /* Card backgrounds */
--theme-text-secondary: #6B7178;  /* Muted text */
--theme-text-tertiary: #8A9099;   /* Lighter text */
--theme-border: #D1D5DB;          /* Borders */
```

### Theme 2: Warm Terracotta 🍑
**Character**: Warm, inviting, creative, approachable  
**Best for**: Personal blogs, design portfolios, creative brands

```css
/* Warm Terracotta Theme */
--theme-primary: #E8CFC6;         /* Dusty Rose */
--theme-primary-rgb: 232, 207, 198;

--theme-accent: #F3D9C3;          /* Soft Peach */
--theme-accent-rgb: 243, 217, 195;

--theme-background: #FCF8F5;      /* Pale Cream */
--theme-background-rgb: 252, 248, 245;

--theme-text: #6B5E5A;            /* Deep Brown */
--theme-text-rgb: 107, 94, 90;

/* Derived colors for depth */
--theme-bg-secondary: #F5EDE8;    /* Slightly darker background */
--theme-bg-tertiary: #EFE3DC;     /* Card backgrounds */
--theme-text-secondary: #857570;  /* Muted text */
--theme-text-tertiary: #9F8D87;   /* Lighter text */
--theme-border: #E5D5CC;          /* Borders */
```

### Theme 3: Lavender & Mint 🌿
**Character**: Modern, playful, fresh, energetic, contemporary  
**Best for**: Innovative tech, creative agencies, unique brands

```css
/* Lavender & Mint Theme */
--theme-primary: #D6D2E4;         /* Pastel Lavender */
--theme-primary-rgb: 214, 210, 228;

--theme-accent: #C4E4D4;          /* Mint Green */
--theme-accent-rgb: 196, 228, 212;

--theme-background: #F9F9F9;      /* Off-White */
--theme-background-rgb: 249, 249, 249;

--theme-text: #595959;            /* Charcoal Gray */
--theme-text-rgb: 89, 89, 89;

/* Derived colors for depth */
--theme-bg-secondary: #F1F1F1;    /* Slightly darker background */
--theme-bg-tertiary: #E9E9E9;     /* Card backgrounds */
--theme-text-secondary: #737373;  /* Muted text */
--theme-text-tertiary: #8C8C8C;   /* Lighter text */
--theme-border: #D9D9D9;          /* Borders */
```

### Theme 4: Desert Bloom 🌸
**Character**: Earthy, sophisticated, rustic, grounded, organic  
**Best for**: Lifestyle brands, eco-friendly products, natural aesthetics

```css
/* Desert Bloom Theme */
--theme-primary: #B8A0A7;         /* Dusty Mauve */
--theme-primary-rgb: 184, 160, 167;

--theme-accent: #A7B9B0;          /* Soft Sage */
--theme-accent-rgb: 167, 185, 176;

--theme-background: #F5F0EC;      /* Light Sand */
--theme-background-rgb: 245, 240, 236;

--theme-text: #6A6D63;            /* Deep Olive */
--theme-text-rgb: 106, 109, 99;

/* Derived colors for depth */
--theme-bg-secondary: #EDE8E3;    /* Slightly darker background */
--theme-bg-tertiary: #E5DFD9;     /* Card backgrounds */
--theme-text-secondary: #7E817A;  /* Muted text */
--theme-text-tertiary: #999C95;   /* Lighter text */
--theme-border: #D5CFC8;          /* Borders */
```

### Theme 5: Morning Dew 💧
**Character**: Fresh, ethereal, light, crisp, uplifting, delicate  
**Best for**: Wellness apps, beauty brands, clean and uplifting experiences

```css
/* Morning Dew Theme */
--theme-primary: #C3E1E5;         /* Pale Aqua */
--theme-primary-rgb: 195, 225, 229;

--theme-accent: #DCE1EE;          /* Soft Lilac */
--theme-accent-rgb: 220, 225, 238;

--theme-background: #FBFCFE;      /* Cloud White */
--theme-background-rgb: 251, 252, 254;

--theme-text: #5E6C7B;            /* Slate Blue */
--theme-text-rgb: 94, 108, 123;

/* Derived colors for depth */
--theme-bg-secondary: #F3F5F8;    /* Slightly darker background */
--theme-bg-tertiary: #EBEEf2;     /* Card backgrounds */
--theme-text-secondary: #758291;  /* Muted text */
--theme-text-tertiary: #8D99A7;   /* Lighter text */
--theme-border: #D8DDE4;          /* Borders */
```

## Technical Implementation

### 1. Theme System Architecture

**File Structure:**
```
/lib/themes/
├── themes.ts              # Theme definitions and constants
├── ThemeProvider.tsx      # React context for theme management
└── useTheme.ts           # Custom hook for theme access

/components/
├── ThemeToggle.tsx       # Theme switcher button
└── layout.tsx            # Updated with theme provider

/app/
└── globals.css           # CSS variables for all themes
```

### 2. Theme Configuration File

**Create `/lib/themes/themes.ts`:**

```typescript
export type ThemeName = 'coastal' | 'terracotta' | 'lavender' | 'desert' | 'morning';

export interface Theme {
  name: ThemeName;
  displayName: string;
  emoji: string;
  description: string;
  colors: {
    primary: string;
    primaryRgb: string;
    accent: string;
    accentRgb: string;
    background: string;
    backgroundRgb: string;
    text: string;
    textRgb: string;
    bgSecondary: string;
    bgTertiary: string;
    textSecondary: string;
    textTertiary: string;
    border: string;
  };
}

export const themes: Record<ThemeName, Theme> = {
  coastal: {
    name: 'coastal',
    displayName: 'Coastal Mist',
    emoji: '🌫️',
    description: 'Professional, serene, and clean',
    colors: {
      primary: '#A2B9D1',
      primaryRgb: '162, 185, 209',
      accent: '#84A9A6',
      accentRgb: '132, 169, 166',
      background: '#F0F2F5',
      backgroundRgb: '240, 242, 245',
      text: '#4D5359',
      textRgb: '77, 83, 89',
      bgSecondary: '#E8EAED',
      bgTertiary: '#DFE1E4',
      textSecondary: '#6B7178',
      textTertiary: '#8A9099',
      border: '#D1D5DB',
    },
  },
  terracotta: {
    name: 'terracotta',
    displayName: 'Warm Terracotta',
    emoji: '🍑',
    description: 'Warm, inviting, and creative',
    colors: {
      primary: '#E8CFC6',
      primaryRgb: '232, 207, 198',
      accent: '#F3D9C3',
      accentRgb: '243, 217, 195',
      background: '#FCF8F5',
      backgroundRgb: '252, 248, 245',
      text: '#6B5E5A',
      textRgb: '107, 94, 90',
      bgSecondary: '#F5EDE8',
      bgTertiary: '#EFE3DC',
      textSecondary: '#857570',
      textTertiary: '#9F8D87',
      border: '#E5D5CC',
    },
  },
  lavender: {
    name: 'lavender',
    displayName: 'Lavender & Mint',
    emoji: '🌿',
    description: 'Modern, fresh, and energetic',
    colors: {
      primary: '#D6D2E4',
      primaryRgb: '214, 210, 228',
      accent: '#C4E4D4',
      accentRgb: '196, 228, 212',
      background: '#F9F9F9',
      backgroundRgb: '249, 249, 249',
      text: '#595959',
      textRgb: '89, 89, 89',
      bgSecondary: '#F1F1F1',
      bgTertiary: '#E9E9E9',
      textSecondary: '#737373',
      textTertiary: '#8C8C8C',
      border: '#D9D9D9',
    },
  },
  desert: {
    name: 'desert',
    displayName: 'Desert Bloom',
    emoji: '🌸',
    description: 'Earthy, sophisticated, and organic',
    colors: {
      primary: '#B8A0A7',
      primaryRgb: '184, 160, 167',
      accent: '#A7B9B0',
      accentRgb: '167, 185, 176',
      background: '#F5F0EC',
      backgroundRgb: '245, 240, 236',
      text: '#6A6D63',
      textRgb: '106, 109, 99',
      bgSecondary: '#EDE8E3',
      bgTertiary: '#E5DFD9',
      textSecondary: '#7E817A',
      textTertiary: '#999C95',
      border: '#D5CFC8',
    },
  },
  morning: {
    name: 'morning',
    displayName: 'Morning Dew',
    emoji: '💧',
    description: 'Fresh, ethereal, and uplifting',
    colors: {
      primary: '#C3E1E5',
      primaryRgb: '195, 225, 229',
      accent: '#DCE1EE',
      accentRgb: '220, 225, 238',
      background: '#FBFCFE',
      backgroundRgb: '251, 252, 254',
      text: '#5E6C7B',
      textRgb: '94, 108, 123',
      bgSecondary: '#F3F5F8',
      bgTertiary: '#EBEFF2',
      textSecondary: '#758291',
      textTertiary: '#8D99A7',
      border: '#D8DDE4',
    },
  },
};

export const defaultTheme: ThemeName = 'coastal';
```

### 3. Theme Provider (React Context)

**Create `/lib/themes/ThemeProvider.tsx`:**

```typescript
'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { themes, defaultTheme, type ThemeName } from './themes';

interface ThemeContextType {
  theme: ThemeName;
  setTheme: (theme: ThemeName) => void;
  cycleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<ThemeName>(defaultTheme);
  const [mounted, setMounted] = useState(false);

  // Load theme from localStorage on mount
  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem('theme') as ThemeName;
    if (savedTheme && themes[savedTheme]) {
      setThemeState(savedTheme);
      applyTheme(savedTheme);
    } else {
      applyTheme(defaultTheme);
    }
  }, []);

  const applyTheme = (themeName: ThemeName) => {
    const selectedTheme = themes[themeName];
    const root = document.documentElement;

    // Apply CSS variables
    Object.entries(selectedTheme.colors).forEach(([key, value]) => {
      const cssVarName = `--theme-${key.replace(/([A-Z])/g, '-$1').toLowerCase()}`;
      root.style.setProperty(cssVarName, value);
    });

    // Set data attribute for CSS selectors
    root.setAttribute('data-theme', themeName);
  };

  const setTheme = (newTheme: ThemeName) => {
    setThemeState(newTheme);
    localStorage.setItem('theme', newTheme);
    applyTheme(newTheme);
  };

  const cycleTheme = () => {
    const themeOrder: ThemeName[] = ['coastal', 'terracotta', 'lavender', 'desert', 'morning'];
    const currentIndex = themeOrder.indexOf(theme);
    const nextIndex = (currentIndex + 1) % themeOrder.length;
    setTheme(themeOrder[nextIndex]);
  };

  // Prevent flash of unstyled content
  if (!mounted) {
    return null;
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme, cycleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
}
```

### 4. Theme Toggle Component

**Create `/components/ThemeToggle.tsx`:**

```typescript
'use client';

import { useTheme } from '@/lib/themes/ThemeProvider';
import { themes } from '@/lib/themes/themes';

export default function ThemeToggle() {
  const { theme, cycleTheme } = useTheme();
  const currentTheme = themes[theme];

  return (
    <button
      onClick={cycleTheme}
      className="group relative flex items-center gap-2 px-3 py-2 rounded-lg border transition-all duration-200 hover:scale-105"
      style={{
        borderColor: 'var(--theme-border)',
        backgroundColor: 'var(--theme-bg-tertiary)',
        color: 'var(--theme-text)',
      }}
      aria-label={`Current theme: ${currentTheme.displayName}. Click to cycle through 5 themes.`}
      title={`Switch theme (Current: ${currentTheme.displayName})`}
    >
      {/* Emoji indicator */}
      <span className="text-lg" role="img" aria-label={currentTheme.displayName}>
        {currentTheme.emoji}
      </span>

      {/* Theme name (hidden on mobile) */}
      <span className="hidden md:inline text-sm font-medium">
        {currentTheme.displayName}
      </span>

      {/* Hover tooltip */}
      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 rounded-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-50 shadow-lg"
        style={{
          backgroundColor: 'var(--theme-text)',
          color: 'var(--theme-background)',
        }}
      >
        <div className="text-xs font-medium">{currentTheme.displayName}</div>
        <div className="text-xs opacity-80">{currentTheme.description}</div>
        <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-4 border-transparent"
          style={{ borderTopColor: 'var(--theme-text)' }}
        />
      </div>
    </button>
  );
}
```

### 5. Global CSS Variables

**Update `/app/globals.css`:**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Default theme (Coastal Mist) */
:root {
  /* Primary colors */
  --theme-primary: #A2B9D1;
  --theme-primary-rgb: 162, 185, 209;
  --theme-accent: #84A9A6;
  --theme-accent-rgb: 132, 169, 166;
  
  /* Backgrounds */
  --theme-background: #F0F2F5;
  --theme-background-rgb: 240, 242, 245;
  --theme-bg-secondary: #E8EAED;
  --theme-bg-tertiary: #DFE1E4;
  
  /* Text */
  --theme-text: #4D5359;
  --theme-text-rgb: 77, 83, 89;
  --theme-text-secondary: #6B7178;
  --theme-text-tertiary: #8A9099;
  
  /* Borders */
  --theme-border: #D1D5DB;
  
  /* Smooth transitions */
  --theme-transition: all 0.3s ease;
}

/* Apply theme colors globally */
body {
  background-color: var(--theme-background);
  color: var(--theme-text);
  transition: var(--theme-transition);
}

/* Utility classes for theme colors */
@layer utilities {
  .bg-theme-primary {
    background-color: var(--theme-primary);
  }
  
  .bg-theme-accent {
    background-color: var(--theme-accent);
  }
  
  .bg-theme-bg {
    background-color: var(--theme-background);
  }
  
  .bg-theme-bg-secondary {
    background-color: var(--theme-bg-secondary);
  }
  
  .bg-theme-bg-tertiary {
    background-color: var(--theme-bg-tertiary);
  }
  
  .text-theme-primary {
    color: var(--theme-text);
  }
  
  .text-theme-secondary {
    color: var(--theme-text-secondary);
  }
  
  .text-theme-tertiary {
    color: var(--theme-text-tertiary);
  }
  
  .border-theme {
    border-color: var(--theme-border);
  }
  
  .hover-theme-lift {
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }
  
  .hover-theme-lift:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(var(--theme-text-rgb), 0.1);
  }
}
```

### 6. Update Root Layout

**Update `/app/layout.tsx`:**

```typescript
import { ThemeProvider } from '@/lib/themes/ThemeProvider';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
```

### 7. Update Header Component

**Update `/components/Header.tsx`:**

```typescript
import ThemeToggle from './ThemeToggle';

export default function Header() {
  return (
    <header 
      className="sticky top-0 z-50 backdrop-blur-lg border-b transition-all"
      style={{
        backgroundColor: 'rgba(var(--theme-background-rgb), 0.8)',
        borderColor: 'var(--theme-border)',
      }}
    >
      <nav className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="text-lg font-semibold" style={{ color: 'var(--theme-text)' }}>
            Studio
          </div>

          {/* Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {/* Nav links */}
          </div>

          {/* Right side with theme toggle */}
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <button 
              className="px-4 py-2 rounded-md font-medium transition-all"
              style={{
                backgroundColor: 'var(--theme-primary)',
                color: 'var(--theme-text)',
              }}
            >
              Get Started
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
```

## Component Updates

### Update All Components to Use Theme Variables

**Pattern for Cards:**
```tsx
<div 
  className="rounded-lg p-6 border transition-all hover-theme-lift"
  style={{
    backgroundColor: 'var(--theme-bg-tertiary)',
    borderColor: 'var(--theme-border)',
    color: 'var(--theme-text)',
  }}
>
  <h3 style={{ color: 'var(--theme-text)' }}>Card Title</h3>
  <p style={{ color: 'var(--theme-text-secondary)' }}>Card description</p>
</div>
```

**Pattern for Sections:**
```tsx
<section 
  className="py-16 transition-all"
  style={{ backgroundColor: 'var(--theme-background)' }}
>
  <div className="max-w-6xl mx-auto px-4">
    <h2 style={{ color: 'var(--theme-text)' }}>Section Title</h2>
    <p style={{ color: 'var(--theme-text-secondary)' }}>Section content</p>
  </div>
</section>
```

**Pattern for Buttons:**
```tsx
<button
  className="px-6 py-3 rounded-md font-medium transition-all hover:opacity-90"
  style={{
    backgroundColor: 'var(--theme-primary)',
    color: 'var(--theme-text)',
  }}
>
  Button Text
</button>
```

## Testing Requirements

### 1. Visual Testing
- [ ] All three themes display correctly
- [ ] Text is readable in all themes
- [ ] Contrast ratios meet WCAG AA standards
- [ ] Smooth transitions between themes (300ms)
- [ ] No flash of unstyled content on page load

### 2. Functionality Testing
- [ ] Theme persists across page refreshes
- [ ] Theme persists in localStorage
- [ ] Cycling through themes works correctly (Coastal → Terracotta → Lavender → Desert → Morning → Coastal)
- [ ] Theme toggle button shows current theme emoji
- [ ] Tooltip displays on hover with theme name and description
- [ ] All 5 themes cycle in correct order

### 3. Responsive Testing
- [ ] Theme toggle works on mobile
- [ ] Theme toggle visible at all breakpoints
- [ ] Emoji displays correctly on all devices
- [ ] Theme name hidden on mobile (< 640px)

### 4. Accessibility Testing
- [ ] Theme toggle has proper aria-label
- [ ] Keyboard navigation works (Tab + Enter)
- [ ] Screen reader announces theme changes
- [ ] Focus states visible on theme toggle

### 5. Performance Testing
- [ ] No layout shift when theme changes
- [ ] Smooth transitions without janking
- [ ] localStorage operations don't block UI
- [ ] CSS variables update efficiently

## Implementation Checklist

- [ ] Create `/lib/themes/themes.ts` with theme definitions
- [ ] Create `/lib/themes/ThemeProvider.tsx` with React context
- [ ] Create `/lib/themes/useTheme.ts` custom hook
- [ ] Create `/components/ThemeToggle.tsx` component
- [ ] Update `/app/globals.css` with CSS variables
- [ ] Update `/app/layout.tsx` with ThemeProvider
- [ ] Update `/components/Header.tsx` with ThemeToggle
- [ ] Update all page components to use theme variables
- [ ] Update all card components to use theme variables
- [ ] Update all button components to use theme variables
- [ ] Test all three themes thoroughly
- [ ] Verify contrast ratios with WebAIM checker
- [ ] Test localStorage persistence
- [ ] Test responsive behavior
- [ ] Test accessibility with keyboard and screen reader

---

## EXECUTION PROMPT:

Implement a professional five-theme toggle system with Coastal Mist, Warm Terracotta, Lavender & Mint, Desert Bloom, and Morning Dew color palettes. Replace the current light/dark mode with a cycling theme system that applies globally across the entire website.

**CRITICAL REQUIREMENTS:**

1. **Create Theme System Architecture:**
   - Create `/lib/themes/themes.ts` with complete theme definitions for ALL 5 themes
   - Create `/lib/themes/ThemeProvider.tsx` with React context
   - Create `/lib/themes/useTheme.ts` custom hook (if needed)
   - Each theme must include: primary, accent, background, text, and derived colors

2. **Theme Definitions:**
   
   **Coastal Mist 🌫️** (Default):
   - Primary: #A2B9D1 (Soft Blue)
   - Accent: #84A9A6 (Muted Teal)
   - Background: #F0F2F5 (Light Cream)
   - Text: #4D5359 (Dark Slate)
   
   **Warm Terracotta 🍑**:
   - Primary: #E8CFC6 (Dusty Rose)
   - Accent: #F3D9C3 (Soft Peach)
   - Background: #FCF8F5 (Pale Cream)
   - Text: #6B5E5A (Deep Brown)
   
   **Lavender & Mint 🌿**:
   - Primary: #D6D2E4 (Pastel Lavender)
   - Accent: #C4E4D4 (Mint Green)
   - Background: #F9F9F9 (Off-White)
   - Text: #595959 (Charcoal Gray)
   
   **Desert Bloom 🌸**:
   - Primary: #B8A0A7 (Dusty Mauve) - HEX: #B8BFC6 (corrected from #B8A0A7)
   - Accent: #A7B9B0 (Soft Sage)
   - Background: #F5F0EC (Light Sand)
   - Text: #6A6D63 (Deep Olive)
   
   **Morning Dew 💧**:
   - Primary: #C3E1E5 (Pale Aqua)
   - Accent: #DCE1EE (Soft Lilac)
   - Background: #FBFCFE (Cloud White)
   - Text: #5E6C7B (Slate Blue)

3. **Theme Toggle Component:**
   - Create `/components/ThemeToggle.tsx`
   - Button with emoji indicator (🌫️, 🍑, 🌿, 🌸, or 💧)
   - Shows current theme name (hidden on mobile < 768px)
   - Cycles through ALL 5 themes on click: Coastal → Terracotta → Lavender → Desert → Morning → Coastal
   - Hover tooltip with theme name and description
   - Smooth transitions (300ms)
   - Proper aria-labels for accessibility
   - Subtle hover scale effect

4. **Global CSS Variables:**
   - Update `/app/globals.css` with CSS custom properties
   - Define variables for all theme colors
   - Include derived colors (bg-secondary, bg-tertiary, text-secondary, etc.)
   - Add utility classes for theme colors
   - Smooth transitions on theme changes

5. **Theme Provider Integration:**
   - Wrap app in ThemeProvider in `/app/layout.tsx`
   - Persist theme selection in localStorage
   - Apply theme on mount (no flash of unstyled content)
   - Update CSS variables when theme changes
   - Set data-theme attribute on html element

6. **Update All Components:**
   - Header: Add ThemeToggle, use theme variables
   - Footer: Use theme variables for background and text
   - Cards: Use --theme-bg-tertiary, --theme-border, --theme-text
   - Buttons: Use --theme-primary for background
   - Sections: Use --theme-background
   - All text: Use --theme-text, --theme-text-secondary, --theme-text-tertiary
   - All borders: Use --theme-border

7. **Component Pattern:**
   ```tsx
   <div
     style={{
       backgroundColor: 'var(--theme-bg-tertiary)',
       borderColor: 'var(--theme-border)',
       color: 'var(--theme-text)',
     }}
   >
   ```

8. **Ensure Global Application:**
   - Theme must apply to ENTIRE website, not just header
   - All pages must use theme variables
   - All components must use theme variables
   - Background color changes on body element
   - Text color changes globally
   - Smooth transitions throughout

9. **Accessibility:**
   - Theme toggle has aria-label
   - Keyboard navigation works (Tab + Enter)
   - Focus states visible
   - Contrast ratios meet WCAG AA (4.5:1 minimum)
   - Screen reader friendly

10. **Testing:**
    - Verify ALL FIVE themes display correctly
    - Test theme persistence across page refreshes
    - Test on mobile (375px), tablet (768px), and desktop (1440px)
    - Verify no flash of unstyled content
    - Test keyboard navigation
    - Verify smooth transitions
    - Test each theme for proper contrast (WCAG AA)
    - Verify emoji displays correctly for all themes

**IMPORTANT:**
- Remove old light/dark mode logic completely
- Theme must apply to ENTIRE page, not just navigation
- All text must be readable in ALL FIVE themes
- Smooth 300ms transitions between themes
- No layout shift when changing themes
- Theme persists in localStorage
- Theme order: Coastal → Terracotta → Lavender → Desert → Morning → (repeat)

Run `npm run dev` and test all five themes thoroughly. Verify that clicking the theme toggle cycles through:
1. Coastal Mist 🌫️
2. Warm Terracotta 🍑
3. Lavender & Mint 🌿
4. Desert Bloom 🌸
5. Morning Dew 💧
6. Back to Coastal Mist 🌫️

Ensure the entire website changes colors (backgrounds, text, borders, cards) with each theme change, not just the header.
