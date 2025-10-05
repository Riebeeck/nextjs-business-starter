import Link from 'next/link';

export default function NotFound() {
  return (
    <div
      className="container mx-auto px-4 sm:px-6 lg:px-8 py-16"
      style={{ backgroundColor: 'var(--theme-background)' }}
    >
      <div className="max-w-2xl mx-auto text-center py-24">
        <h1
          className="text-6xl font-medium mb-4"
          style={{ color: 'var(--theme-text)' }}
        >
          404
        </h1>
        <h2
          className="text-2xl font-medium mb-4"
          style={{ color: 'var(--theme-text)' }}
        >
          Page not found
        </h2>
        <p
          className="text-base mb-8"
          style={{ color: 'var(--theme-text-secondary)' }}
        >
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="flex gap-3 justify-center">
          <Link
            href="/"
            className="px-4 py-2 text-sm rounded-md transition-all hover:opacity-90"
            style={{
              backgroundColor: 'var(--theme-text)',
              color: 'var(--theme-background)',
            }}
          >
            Go Home
          </Link>
          <Link
            href="/blog"
            className="px-4 py-2 border text-sm rounded-md transition-all hover:opacity-80"
            style={{
              borderColor: 'var(--theme-border)',
              color: 'var(--theme-text)',
            }}
          >
            Browse Articles
          </Link>
        </div>
      </div>
    </div>
  );
}