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
    <div style={{ backgroundColor: 'var(--theme-background)' }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        {/* Header */}
        <div className="mb-12">
          <h1
            className="text-3xl md:text-4xl font-semibold mb-4"
            style={{ color: 'var(--theme-text)' }}
          >
            Blog
          </h1>
          <p className="text-lg" style={{ color: 'var(--theme-text-secondary)' }}>
            Thoughts on web development, best practices, and lessons learned.
          </p>
        </div>

        {/* Posts List */}
        <div className="space-y-6">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="block">
              <div
                className="rounded-lg border p-6 shadow-sm transition-all hover:shadow-md hover-theme-lift"
                style={{
                  backgroundColor: 'var(--theme-bg-tertiary)',
                  borderColor: 'var(--theme-border)',
                }}
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 mb-3">
                  <h2
                    className="text-xl font-semibold"
                    style={{ color: 'var(--theme-text)' }}
                  >
                    {post.title}
                  </h2>
                  <time
                    className="text-sm whitespace-nowrap"
                    style={{ color: 'var(--theme-text-tertiary)' }}
                  >
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </time>
                </div>
                <p className="text-base mb-4" style={{ color: 'var(--theme-text-secondary)' }}>
                  {post.summary}
                </p>
                {post.tags && post.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center rounded-md px-2.5 py-0.5 text-xs font-medium"
                        style={{
                          backgroundColor: 'var(--theme-bg-secondary)',
                          color: 'var(--theme-text-secondary)',
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>

        {posts.length === 0 && (
          <p
            className="text-center py-12"
            style={{ color: 'var(--theme-text-secondary)' }}
          >
            No blog posts yet. Check back soon!
          </p>
        )}
      </div>
    </div>
  );
}
