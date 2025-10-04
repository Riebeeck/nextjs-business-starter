import Link from 'next/link';
import { getAllBlogPosts, getAllProjects } from '@/lib/content';

export default async function Home() {
  const posts = await getAllBlogPosts();
  const projects = await getAllProjects();

  const recentPosts = posts.slice(0, 3);
  const featuredProjects = projects.slice(0, 3);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <section className="py-16 md:py-24 lg:py-32">
          <h1 className="text-2xl md:text-3xl font-medium text-gray-900 dark:text-white mb-4 max-w-3xl">
            Building digital products with clean code and thoughtful design
          </h1>
          <p className="text-base text-gray-600 dark:text-gray-400 mb-8 max-w-2xl">
            A collection of projects, experiments, and insights from the world of modern web development.
          </p>
          <div className="flex gap-3 flex-wrap">
            <Link
              href="/projects"
              className="px-4 py-2 bg-gray-900 text-white text-sm rounded-md hover:bg-gray-800 transition-colors dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100"
            >
              View Work
            </Link>
            <Link
              href="/blog"
              className="px-4 py-2 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-md hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            >
              Read Articles
            </Link>
          </div>
        </section>

        {/* Recent Posts */}
        <section className="py-12 md:py-16 border-t border-gray-200 dark:border-gray-800">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl md:text-2xl font-medium text-gray-900 dark:text-white">Recent Writing</h2>
            <Link
              href="/blog"
              className="text-sm text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
            >
              View all →
            </Link>
          </div>
          <div className="space-y-4">
            {recentPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block p-6 border border-gray-200 dark:border-gray-800 rounded-lg hover:border-gray-300 dark:hover:border-gray-700 transition-all"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">
                    {post.title}
                  </h3>
                  <time className="text-xs text-gray-500 dark:text-gray-400">
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                    })}
                  </time>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">{post.summary}</p>
                {post.tags && post.tags.length > 0 && (
                  <div className="flex gap-2 mt-3">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </Link>
            ))}
          </div>
        </section>

        {/* Featured Projects */}
        <section className="py-12 md:py-16 border-t border-gray-200 dark:border-gray-800">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl md:text-2xl font-medium text-gray-900 dark:text-white">
              Featured Work
            </h2>
            <Link
              href="/projects"
              className="text-sm text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
            >
              View all →
            </Link>
          </div>
          <div className="grid gap-4 md:gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="group block p-6 border border-gray-200 dark:border-gray-800 rounded-lg hover:border-gray-300 dark:hover:border-gray-700 transition-all"
              >
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{project.summary}</p>
                {project.technologies && project.technologies.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                )}
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}