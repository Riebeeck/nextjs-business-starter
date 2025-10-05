'use client';

import { useTheme } from '@/lib/themes/ThemeProvider';
import { themes } from '@/lib/themes/themes';

export default function ThemeToggle() {
  const { theme, cycleTheme } = useTheme();
  const currentTheme = themes[theme];

  return (
    <button
      onClick={cycleTheme}
      className="group relative flex items-center gap-2 px-4 py-2 rounded-lg border transition-all duration-200 hover:scale-105"
      style={{
        borderColor: 'var(--theme-border)',
        backgroundColor: 'var(--theme-bg-tertiary)',
        color: 'var(--theme-text)',
      }}
      aria-label={`Current theme: ${currentTheme.displayName}. Click to cycle themes.`}
      title={`Switch theme (Current: ${currentTheme.displayName})`}
    >
      {/* Emoji indicator */}
      <span className="text-xl" role="img" aria-label={currentTheme.displayName}>
        {currentTheme.emoji}
      </span>

      {/* Theme name (hidden on mobile) */}
      <span className="hidden sm:inline text-sm font-medium">
        {currentTheme.displayName}
      </span>

      {/* Hover tooltip */}
      <div
        className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 rounded-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-50"
        style={{
          backgroundColor: 'var(--theme-text)',
          color: 'var(--theme-background)',
        }}
      >
        <div className="text-xs font-medium">{currentTheme.displayName}</div>
        <div className="text-xs opacity-80">{currentTheme.description}</div>
        <div
          className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-4 border-transparent"
          style={{ borderTopColor: 'var(--theme-text)' }}
        />
      </div>
    </button>
  );
}