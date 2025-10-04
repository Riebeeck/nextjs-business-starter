export default function Loading() {
  return (
    <article className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="h-10 w-3/4 bg-gray-200 dark:bg-gray-800 rounded animate-pulse mb-4" />
        <div className="h-6 w-full bg-gray-200 dark:bg-gray-800 rounded animate-pulse mb-6" />

        <div className="flex gap-2 mb-8">
          <div className="h-6 w-20 bg-gray-200 dark:bg-gray-800 rounded animate-pulse" />
          <div className="h-6 w-20 bg-gray-200 dark:bg-gray-800 rounded animate-pulse" />
          <div className="h-6 w-20 bg-gray-200 dark:bg-gray-800 rounded animate-pulse" />
        </div>

        <div className="space-y-4">
          <div className="h-4 w-full bg-gray-200 dark:bg-gray-800 rounded animate-pulse" />
          <div className="h-4 w-full bg-gray-200 dark:bg-gray-800 rounded animate-pulse" />
          <div className="h-4 w-3/4 bg-gray-200 dark:bg-gray-800 rounded animate-pulse" />
          <div className="h-4 w-full bg-gray-200 dark:bg-gray-800 rounded animate-pulse" />
          <div className="h-4 w-5/6 bg-gray-200 dark:bg-gray-800 rounded animate-pulse" />
        </div>
      </div>
    </article>
  );
}
