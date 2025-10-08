'use client';

import { useState } from 'react';
import { projectCategories, getProjectsByCategory } from '@/lib/projects';
import ProjectCard from './components/ProjectCard';
import EmptyState from './components/EmptyState';

export default function ProjectsPage() {
  const [activeTab, setActiveTab] = useState<keyof typeof projectCategories>('web');

  const categoryProjects = getProjectsByCategory(activeTab);
  const category = projectCategories[activeTab];

  return (
    <div className="min-h-screen py-16" style={{ backgroundColor: 'var(--theme-background)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1
            className="text-3xl md:text-4xl font-semibold mb-4"
            style={{ color: 'var(--theme-text)' }}
          >
            Our Work
          </h1>
          <p
            className="text-base md:text-lg max-w-3xl mx-auto"
            style={{ color: 'var(--theme-text-secondary)' }}
          >
            Explore projects across data engineering, machine learning, AI, DevOps, and analytics.
            From scalable data pipelines to ML operations and infrastructure automation.
          </p>
        </div>

        {/* Category Tabs */}
        <div
          className="flex flex-wrap justify-center gap-2 mb-8 pb-4 border-b"
          style={{ borderColor: 'var(--theme-border)' }}
        >
          {Object.entries(projectCategories).map(([key, cat]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key as keyof typeof projectCategories)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                activeTab === key ? 'shadow-md' : 'hover:opacity-80'
              }`}
              style={{
                backgroundColor:
                  activeTab === key ? 'var(--theme-primary)' : 'var(--theme-bg-tertiary)',
                color: activeTab === key ? 'var(--theme-background)' : 'var(--theme-text-secondary)',
                border: activeTab === key ? 'none' : '1px solid var(--theme-border)',
              }}
            >
              <span className="mr-2">{cat.emoji}</span>
              {cat.name}
            </button>
          ))}
        </div>

        {/* Category Description */}
        <div className="text-center mb-8">
          <p className="text-sm" style={{ color: 'var(--theme-text-secondary)' }}>
            {category.description}
          </p>
        </div>

        {/* Projects Grid */}
        {categoryProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categoryProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <EmptyState
            category={category.name}
            emoji={category.emoji}
            description={category.description}
          />
        )}
      </div>
    </div>
  );
}