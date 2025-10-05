'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

export interface DropdownItem {
  name: string;
  href: string;
  description?: string;
  icon?: React.ReactNode;
}

export interface DropdownSection {
  title?: string;
  items: DropdownItem[];
}

interface DropdownProps {
  title: string;
  sections: DropdownSection[];
  className?: string;
}

export default function Dropdown({ title, sections, className = '' }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 text-sm font-medium transition-colors hover:opacity-80"
        style={{ color: 'var(--theme-text-secondary)' }}
        aria-expanded={isOpen}
      >
        {title}
        <svg
          className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div
          className="absolute top-full left-0 mt-2 w-64 rounded-lg shadow-xl backdrop-blur-lg animate-in fade-in slide-in-from-top-2 duration-200 z-50 border"
          style={{
            backgroundColor: 'var(--theme-bg-tertiary)',
            borderColor: 'var(--theme-border)',
          }}
        >
          <div className="p-2">
            {sections.map((section, sectionIdx) => (
              <div
                key={sectionIdx}
                className={sectionIdx > 0 ? 'mt-2 pt-2 border-t' : ''}
                style={sectionIdx > 0 ? { borderColor: 'var(--theme-border)' } : {}}
              >
                {section.title && (
                  <div
                    className="px-3 py-2 text-xs font-semibold uppercase tracking-wider"
                    style={{ color: 'var(--theme-text-tertiary)' }}
                  >
                    {section.title}
                  </div>
                )}
                {section.items.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="flex items-start gap-3 px-3 py-2 rounded-md transition-colors hover:opacity-80"
                    style={{ color: 'var(--theme-text)' }}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.icon && (
                      <div
                        className="flex-shrink-0 w-5 h-5"
                        style={{ color: 'var(--theme-text-tertiary)' }}
                      >
                        {item.icon}
                      </div>
                    )}
                    <div className="flex-1 min-w-0">
                      <div
                        className="text-sm font-medium"
                        style={{ color: 'var(--theme-text)' }}
                      >
                        {item.name}
                      </div>
                      {item.description && (
                        <div
                          className="text-xs mt-0.5"
                          style={{ color: 'var(--theme-text-secondary)' }}
                        >
                          {item.description}
                        </div>
                      )}
                    </div>
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
