'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ThemeToggle from './ThemeToggle';
import Dropdown, { DropdownSection } from './ui/Dropdown';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Company dropdown
  const companyItems: DropdownSection[] = [
    {
      items: [
        {
          name: 'About Us',
          href: '/company',
          description: 'Our mission and values',
        },
        {
          name: 'Team',
          href: '/company#team',
          description: 'Meet the people behind the company',
        },
      ],
    },
  ];

  return (
    <header
      className="sticky top-0 z-50 w-full border-b backdrop-blur-lg transition-all"
      style={{
        backgroundColor: 'rgba(var(--theme-background-rgb), 0.8)',
        borderColor: 'var(--theme-border)',
      }}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Global">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-3 -m-1.5 p-1.5 transition-opacity hover:opacity-80">
              <div className="relative w-8 h-8 sm:w-10 sm:h-10">
                <Image
                  src="/images/logos/company-logo.svg"
                  alt="YourCompany"
                  fill
                  priority
                  className="object-contain"
                />
              </div>
              <span
                className="text-lg sm:text-xl font-semibold transition-colors"
                style={{ color: 'var(--theme-text)' }}
              >
                YourCompany
              </span>
            </Link>
          </div>

          {/* Desktop navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-8">
            <Link
              href="/projects"
              className="text-sm font-medium transition-colors hover:opacity-80"
              style={{ color: 'var(--theme-text-secondary)' }}
            >
              Projects
            </Link>
            <Link
              href="/blog"
              className="text-sm font-medium transition-colors hover:opacity-80"
              style={{ color: 'var(--theme-text-secondary)' }}
            >
              Blog
            </Link>
            <Dropdown title="Company" sections={companyItems} />
          </div>

          {/* Right side - Desktop */}
          <div className="hidden lg:flex lg:items-center lg:gap-4">
            <ThemeToggle />
            <button
              className="px-4 py-2 rounded-md text-sm font-medium transition-all hover:opacity-90"
              style={{
                backgroundColor: 'var(--theme-primary)',
                color: 'var(--theme-text)',
              }}
              onClick={() => (window.location.href = '/contact')}
            >
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center gap-3 lg:hidden">
            <ThemeToggle />
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 transition-colors"
              style={{ color: 'var(--theme-text-secondary)' }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div
            className="lg:hidden border-t"
            style={{ borderColor: 'var(--theme-border)' }}
          >
            <div className="space-y-1 py-4">
              <Link
                href="/projects"
                className="block px-3 py-2 text-base font-medium rounded-md transition-colors hover:opacity-80"
                style={{ color: 'var(--theme-text)' }}
                onClick={() => setMobileMenuOpen(false)}
              >
                Projects
              </Link>
              
              <Link
                href="/blog"
                className="block px-3 py-2 text-base font-medium rounded-md transition-colors hover:opacity-80"
                style={{ color: 'var(--theme-text)' }}
                onClick={() => setMobileMenuOpen(false)}
              >
                Blog
              </Link>

              {/* Company section */}
              <div className="px-3 py-2">
                <div
                  className="text-xs font-semibold uppercase tracking-wider mb-2"
                  style={{ color: 'var(--theme-text-tertiary)' }}
                >
                  Company
                </div>
                {companyItems[0].items.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block px-3 py-2 text-sm rounded-md transition-colors hover:opacity-80"
                    style={{ color: 'var(--theme-text-secondary)' }}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              <div className="px-3 pt-4">
                <button
                  className="w-full px-4 py-2 rounded-md font-medium transition-all hover:opacity-90"
                  style={{
                    backgroundColor: 'var(--theme-primary)',
                    color: 'var(--theme-text)',
                  }}
                  onClick={() => (window.location.href = '/contact')}
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
