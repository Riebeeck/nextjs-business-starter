export default function Loading() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="h-8 w-48 bg-gray-200 dark:bg-gray-800 rounded animate-pulse mb-8" />

        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="block p-6 border border-gray-200 dark:border-gray-800 rounded-lg"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                <div className="h-6 w-64 bg-gray-200 dark:bg-gray-800 rounded animate-pulse" />
                <div className="h-4 w-24 bg-gray-200 dark:bg-gray-800 rounded animate-pulse" />
              </div>
              <div className="h-4 w-full bg-gray-200 dark:bg-gray-800 rounded animate-pulse mb-2" />
              <div className="h-4 w-3/4 bg-gray-200 dark:bg-gray-800 rounded animate-pulse" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
