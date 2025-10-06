import Link from 'next/link';
import { getAllBlogPosts, getAllProjects } from '@/lib/content';
import VideoHeroSection from '@/components/ui/VideoHeroSection';

export default async function Home() {
  const posts = await getAllBlogPosts();
  const projects = await getAllProjects();

  const recentPosts = posts.slice(0, 3);
  const featuredProjects = projects.slice(0, 3);

  return (
    <div style={{ backgroundColor: 'var(--theme-background)' }}>
      {/* Hero Section with background video */}
      <VideoHeroSection
        videoSrc="/videos/backgrounds/lattice_medium.mp4"
        overlayOpacity={0.45}
        showOnMobile={true}
      >
        <h1
          className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 max-w-4xl mx-auto leading-tight"
          style={{
            color: 'var(--theme-text)',
            textShadow: '0 2px 4px rgba(0,0,0,0.3)',
          }}
        >
          Building digital products with clean code and thoughtful design
        </h1>
        <p
          className="text-lg mb-10 max-w-2xl mx-auto"
          style={{
            color: 'var(--theme-text-secondary)',
            textShadow: '0 2px 4px rgba(0,0,0,0.3)',
          }}
        >
          Scalable solutions for data engineering, machine learning, and modern web development.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link href="/projects">
            <button
              className="px-6 py-3 rounded-md font-medium transition-all hover:opacity-90 hover:scale-105"
              style={{
                backgroundColor: 'var(--theme-primary)',
                color: 'var(--theme-text)',
              }}
            >
              View Work
            </button>
          </Link>
          <Link href="/blog">
            <button
              className="px-6 py-3 rounded-md font-medium transition-all border backdrop-blur-sm"
              style={{
                backgroundColor: 'rgba(var(--theme-bg-tertiary-rgb), 0.8)',
                borderColor: 'var(--theme-border)',
                color: 'var(--theme-text)',
              }}
            >
              Read Articles
            </button>
          </Link>
        </div>
      </VideoHeroSection>

      {/* Recent Posts */}
      <section
        className="py-16 md:py-24 border-t"
        style={{ borderColor: 'var(--theme-border)' }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2
              className="text-2xl md:text-3xl font-semibold"
              style={{ color: 'var(--theme-text)' }}
            >
              Recent Writing
            </h2>
            <Link
              href="/blog"
              className="text-sm font-medium transition-colors hover:opacity-80"
              style={{ color: 'var(--theme-primary)' }}
            >
              View all →
            </Link>
          </div>
          <div className="space-y-6">
            {recentPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="block">
                <div
                  className="rounded-lg border p-6 shadow-sm transition-all hover:shadow-md hover-theme-lift"
                  style={{
                    backgroundColor: 'var(--theme-bg-tertiary)',
                    borderColor: 'var(--theme-border)',
                  }}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                    <h3
                      className="text-lg font-semibold"
                      style={{ color: 'var(--theme-text)' }}
                    >
                      {post.title}
                    </h3>
                    <time
                      className="text-sm"
                      style={{ color: 'var(--theme-text-tertiary)' }}
                    >
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                      })}
                    </time>
                  </div>
                  <p
                    className="text-base mb-4"
                    style={{ color: 'var(--theme-text-secondary)' }}
                  >
                    {post.summary}
                  </p>
                  {post.tags && post.tags.length > 0 && (
                    <div className="flex gap-2 flex-wrap">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center rounded-md px-2.5 py-0.5 text-xs font-medium transition-colors"
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
        </div>
      </section>

      {/* Featured Projects */}
      <section
        className="py-16 md:py-24 border-t"
        style={{
          borderColor: 'var(--theme-border)',
          backgroundColor: 'var(--theme-bg-secondary)',
        }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2
              className="text-2xl md:text-3xl font-semibold"
              style={{ color: 'var(--theme-text)' }}
            >
              Featured Work
            </h2>
            <Link
              href="/projects"
              className="text-sm font-medium transition-colors hover:opacity-80"
              style={{ color: 'var(--theme-primary)' }}
            >
              View all →
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <Link key={project.slug} href={`/projects/${project.slug}`} className="block">
                <div
                  className="rounded-lg border p-6 shadow-sm transition-all hover:shadow-md hover-theme-lift"
                  style={{
                    backgroundColor: 'var(--theme-bg-tertiary)',
                    borderColor: 'var(--theme-border)',
                  }}
                >
                  <h3
                    className="text-lg font-semibold mb-3"
                    style={{ color: 'var(--theme-text)' }}
                  >
                    {project.title}
                  </h3>
                  <p
                    className="text-base mb-4"
                    style={{ color: 'var(--theme-text-secondary)' }}
                  >
                    {project.summary}
                  </p>
                  {project.technologies && project.technologies.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="inline-flex items-center rounded-md px-2.5 py-0.5 text-xs font-medium transition-colors"
                          style={{
                            backgroundColor: `rgba(var(--theme-primary-rgb), 0.1)`,
                            color: 'var(--theme-primary)',
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span
                          className="inline-flex items-center rounded-md px-2.5 py-0.5 text-xs font-medium transition-colors"
                          style={{
                            backgroundColor: 'var(--theme-bg-secondary)',
                            color: 'var(--theme-text-secondary)',
                          }}
                        >
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}