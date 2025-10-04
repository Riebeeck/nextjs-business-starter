import Link from 'next/link';
import type { Metadata } from 'next';
import { getAllProjects } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'A showcase of software development projects, experiments, and case studies.',
};

export default async function Projects() {
  const projects = await getAllProjects();

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Projects
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            A collection of projects I&apos;ve built, from web applications to open source
            contributions.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="group block"
            >
              <article className="h-full p-6 border border-gray-200 dark:border-gray-800 rounded-lg hover:shadow-lg transition-all">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.summary}</p>
                
                {project.technologies && project.technologies.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>
                )}

                <div className="flex gap-4 text-sm text-blue-600 dark:text-blue-400">
                  {project.github && <span>GitHub →</span>}
                  {project.demo && <span>Live Demo →</span>}
                </div>
              </article>
            </Link>
          ))}
        </div>

        {projects.length === 0 && (
          <p className="text-center text-gray-600 dark:text-gray-400 py-12">
            No projects yet. Check back soon!
          </p>
        )}
      </div>
    </div>
  );
}
