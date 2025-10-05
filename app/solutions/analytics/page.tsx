import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Analytics Solutions',
  description: 'Business intelligence and reporting solutions.',
};

export default function Analytics() {
  return (
    <div
      className="min-h-[calc(100vh-200px)]"
      style={{ backgroundColor: 'var(--theme-background)' }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <h1
          className="text-3xl md:text-4xl font-semibold mb-6"
          style={{ color: 'var(--theme-text)' }}
        >
          Analytics Solutions
        </h1>
        <p
          className="text-lg mb-8"
          style={{ color: 'var(--theme-text-secondary)' }}
        >
          Keep dashboards and models fresh with pipelines that ensure data quality, timeliness, and
          auditability.
        </p>
        <p
          className="text-base"
          style={{ color: 'var(--theme-text-secondary)' }}
        >
          Content coming soon. Explore our{' '}
          <a
            href="/projects"
            className="hover:underline"
            style={{ color: 'var(--theme-primary)' }}
          >
            analytics projects
          </a>
          .
        </p>
      </div>
    </div>
  );
}