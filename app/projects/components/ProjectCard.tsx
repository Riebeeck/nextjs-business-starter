'use client';

import type { Project } from '@/lib/projects';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const statusStyles = {
    live: {
      bg: 'rgba(16, 185, 129, 0.1)',
      text: 'rgb(5, 150, 105)',
      label: 'Live Demo',
    },
    'in-progress': {
      bg: 'rgba(59, 130, 246, 0.1)',
      text: 'rgb(37, 99, 235)',
      label: 'In Progress',
    },
    'coming-soon': {
      bg: 'var(--theme-bg-secondary)',
      text: 'var(--theme-text-tertiary)',
      label: 'Coming Soon',
    },
  };

  const status = statusStyles[project.status];

  return (
    <div
      className="group relative rounded-lg border p-6 transition-all hover:shadow-lg hover-theme-lift"
      style={{
        backgroundColor: 'var(--theme-bg-tertiary)',
        borderColor: 'var(--theme-border)',
      }}
    >
      {/* Status Badge */}
      <div className="absolute top-4 right-4">
        <span
          className="text-xs px-2.5 py-1 rounded-full font-medium"
          style={{
            backgroundColor: status.bg,
            color: status.text,
          }}
        >
          {status.label}
        </span>
      </div>

      {/* Icon */}
      {project.icon && <div className="text-4xl mb-4">{project.icon}</div>}

      {/* Title */}
      <h3
        className="text-xl font-semibold mb-2 pr-24"
        style={{ color: 'var(--theme-text)' }}
      >
        {project.title}
      </h3>

      {/* Description */}
      <p
        className="text-sm mb-4 line-clamp-3 leading-relaxed"
        style={{ color: 'var(--theme-text-secondary)' }}
      >
        {project.description}
      </p>

      {/* Technologies */}
      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.slice(0, 4).map((tech) => (
          <span
            key={tech}
            className="text-xs px-2.5 py-1 rounded font-medium"
            style={{
              backgroundColor: 'var(--theme-bg-secondary)',
              color: 'var(--theme-text-tertiary)',
            }}
          >
            {tech}
          </span>
        ))}
        {project.technologies.length > 4 && (
          <span
            className="text-xs px-2.5 py-1 font-medium"
            style={{ color: 'var(--theme-text-tertiary)' }}
          >
            +{project.technologies.length - 4} more
          </span>
        )}
      </div>

      {/* Coming Soon Message or Links */}
      {project.status === 'coming-soon' ? (
        <p
          className="text-sm italic"
          style={{ color: 'var(--theme-text-tertiary)' }}
        >
          {project.comingSoonMessage || 'Coming soon. Check back later!'}
        </p>
      ) : (
        <div className="flex gap-3">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium hover:underline"
              style={{ color: 'var(--theme-primary)' }}
            >
              View Demo →
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium hover:underline"
              style={{ color: 'var(--theme-text-secondary)' }}
            >
              GitHub →
            </a>
          )}
        </div>
      )}
    </div>
  );
}
