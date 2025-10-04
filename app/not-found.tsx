import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-2xl mx-auto text-center py-24">
        <h1 className="text-6xl font-medium text-gray-900 dark:text-white mb-4">404</h1>
        <h2 className="text-2xl font-medium text-gray-900 dark:text-white mb-4">
          Page not found
        </h2>
        <p className="text-base text-gray-600 dark:text-gray-400 mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="flex gap-3 justify-center">
          <Link
            href="/"
            className="px-4 py-2 bg-gray-900 text-white text-sm rounded-md hover:bg-gray-800 transition-colors dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100"
          >
            Go Home
          </Link>
          <Link
            href="/blog"
            className="px-4 py-2 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-md hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
          >
            Browse Articles
          </Link>
        </div>
      </div>
    </div>
  );
}
