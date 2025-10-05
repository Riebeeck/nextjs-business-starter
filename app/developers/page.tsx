import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Developers',
  description: 'Documentation, API references, and resources for developers.',
};

export default function Developers() {
  const resources = [
    {
      title: 'Documentation',
      description: 'Comprehensive guides and tutorials for getting started.',
      href: '#',
    },
    {
      title: 'API Reference',
      description: 'Detailed API documentation and code examples.',
      href: '#',
    },
    {
      title: 'GitHub',
      description: 'Explore our open source projects and contribute.',
      href: 'https://github.com/Riebeeck',
    },
  ];

  return (
    <div style={{ backgroundColor: 'var(--theme-background)' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center mb-12">
          <h1
            className="text-3xl md:text-4xl font-semibold mb-4"
            style={{ color: 'var(--theme-text)' }}
          >
            Developer Resources
          </h1>
          <p
            className="text-lg max-w-2xl mx-auto"
            style={{ color: 'var(--theme-text-secondary)' }}
          >
            Tools, documentation, and resources to help you build with our platform.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {resources.map((resource) => (
            <Link key={resource.title} href={resource.href} className="block">
              <div
                className="rounded-lg border p-6 shadow-sm transition-all hover:shadow-md hover-theme-lift"
                style={{
                  backgroundColor: 'var(--theme-bg-tertiary)',
                  borderColor: 'var(--theme-border)',
                }}
              >
                <h3
                  className="text-lg font-semibold mb-2"
                  style={{ color: 'var(--theme-text)' }}
                >
                  {resource.title}
                </h3>
                <p
                  className="text-base"
                  style={{ color: 'var(--theme-text-secondary)' }}
                >
                  {resource.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}