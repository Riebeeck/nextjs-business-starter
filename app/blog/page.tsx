import Link from 'next/link';
import type { Metadata } from 'next';
import { getAllBlogPosts } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Articles and insights on software development, web technologies, and modern development practices.',
};

export default async function Blog() {
  const posts = await getAllBlogPosts();

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Blog
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Thoughts on web development, best practices, and lessons learned.
          </p>
        </div>

        {/* Posts List */}
        <div className="space-y-8">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="border-b border-gray-200 dark:border-gray-800 pb-8 last:border-0"
            >
              <Link href={`/blog/${post.slug}`} className="group">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 mb-3">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {post.title}
                  </h2>
                  <time className="text-sm text-gray-500 dark:text-gray-400 whitespace-nowrap">
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </time>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{post.summary}</p>
                {post.tags && post.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </Link>
            </article>
          ))}
        </div>

        {posts.length === 0 && (
          <p className="text-center text-gray-600 dark:text-gray-400 py-12">
            No blog posts yet. Check back soon!
          </p>
        )}
      </div>
    </div>
  );
}
