import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Case Studies',
  description: 'Real-world examples of our work and the impact we create.',
};

export default function CaseStudies() {
  return (
    <div
      className="min-h-[calc(100vh-200px)]"
      style={{ backgroundColor: 'var(--theme-background)' }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center">
          <h1
            className="text-3xl md:text-4xl font-semibold mb-6"
            style={{ color: 'var(--theme-text)' }}
          >
            Case Studies
          </h1>
          <p
            className="text-lg mb-8 max-w-2xl mx-auto"
            style={{ color: 'var(--theme-text-secondary)' }}
          >
            Detailed examples of how we solve real-world problems for our clients.
          </p>
          <p
            className="text-base"
            style={{ color: 'var(--theme-text-secondary)' }}
          >
            Case studies coming soon. Check out our{' '}
            <a
              href="/projects"
              className="hover:underline"
              style={{ color: 'var(--theme-primary)' }}
            >
              projects
            </a>{' '}
            in the meantime.
          </p>
        </div>
      </div>
    </div>
  );
}