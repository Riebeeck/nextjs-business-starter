export default function Loading() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="h-8 w-48 bg-gray-200 dark:bg-gray-800 rounded animate-pulse mb-8" />

        <div className="grid gap-4 md:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="block p-6 border border-gray-200 dark:border-gray-800 rounded-lg"
            >
              <div className="h-6 w-3/4 bg-gray-200 dark:bg-gray-800 rounded animate-pulse mb-2" />
              <div className="h-4 w-full bg-gray-200 dark:bg-gray-800 rounded animate-pulse mb-2" />
              <div className="h-4 w-2/3 bg-gray-200 dark:bg-gray-800 rounded animate-pulse mb-4" />
              <div className="flex gap-2">
                <div className="h-6 w-16 bg-gray-200 dark:bg-gray-800 rounded animate-pulse" />
                <div className="h-6 w-16 bg-gray-200 dark:bg-gray-800 rounded animate-pulse" />
                <div className="h-6 w-16 bg-gray-200 dark:bg-gray-800 rounded animate-pulse" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
