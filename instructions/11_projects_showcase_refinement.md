# Phase 10: Projects Showcase Refinement

Refine the Projects tab to create a professional demo/project repository inspired by Databricks' demo library, with placeholder content for future work.

## Design Reference

**Gold Standard**: [Databricks Demo Library](https://www.databricks.com/resources/demos/library)

### What We're Adopting from Databricks:
- Clean, filterable project grid
- Category tabs for different domains
- Professional placeholder messaging
- "Coming Soon" states for future content
- Clear project cards with descriptions
- Consistent visual hierarchy
- Search/filter functionality (future)
- Tags for technologies used

## Current State

**What's Working:**
- Machine Learning tab has good placeholder content
- Analytics and Reporting tab shows proper "coming soon" messaging
- Theme integration is working

**What Needs Improvement:**
- AI, Data Engineering, and DevOps tabs need similar placeholder views
- Need consistent card layouts across all categories
- Add visual indicators for project status (Live, Coming Soon, In Progress)
- Better integration with overall site navigation
- Add technology stack badges
- Improve empty state messaging

## Project Categories Structure

### 1. AI (Artificial Intelligence)
**Focus**: LLMs, GenAI applications, AI agents, prompt engineering

**Placeholder Projects:**
- LLM-Powered Chat Application
- Document Q&A with RAG
- AI Content Generator
- Sentiment Analysis Pipeline
- Image Classification System

### 2. Machine Learning (Current - Enhance)
**Focus**: ML operations, model training, inference, MLOps

**Current Projects:**
- ML Operations (placeholder)

**Additional Placeholders:**
- Predictive Maintenance Model
- Customer Churn Prediction
- Time Series Forecasting
- A/B Testing Framework
- Feature Store Implementation

### 3. Data Engineering
**Focus**: ETL pipelines, data orchestration, streaming, data quality

**Placeholder Projects:**
- Real-Time Data Pipeline
- Batch ETL Orchestration
- Data Quality Framework
- Change Data Capture (CDC)
- Data Lake Architecture

### 4. DevOps
**Focus**: CI/CD, infrastructure automation, monitoring, deployment

**Placeholder Projects:**
- Kubernetes Deployment Pipeline
- Infrastructure as Code (Terraform)
- Monitoring & Alerting System
- Blue-Green Deployment
- Container Orchestration

### 5. Analytics & Reporting (Current - Enhance)
**Focus**: BI dashboards, data visualization, reporting automation

**Current Projects:**
- Analytics dashboard (placeholder)

**Additional Placeholders:**
- Executive Dashboard
- Real-Time Analytics Platform
- Custom Reporting Engine
- Data Visualization Library
- KPI Tracking System

## Component Architecture

### File Structure
```
/app/projects/
├── page.tsx                    # Main projects page with tabs
├── components/
│   ├── ProjectCard.tsx        # Individual project card
│   ├── ProjectGrid.tsx        # Grid layout for projects
│   ├── ProjectTabs.tsx        # Category tabs
│   ├── ProjectFilter.tsx      # Filter/search (future)
│   └── EmptyState.tsx         # "Coming soon" placeholder
└── [slug]/
    └── page.tsx               # Individual project detail page

/lib/
└── projects.ts                # Project data and types
```

### Project Data Structure

**Create `/lib/projects.ts`:**

```typescript
export type ProjectCategory = 'ai' | 'ml' | 'data-engineering' | 'devops' | 'analytics';

export type ProjectStatus = 'live' | 'coming-soon' | 'in-progress';

export interface Project {
  id: string;
  title: string;
  slug: string;
  description: string;
  longDescription?: string;
  category: ProjectCategory;
  status: ProjectStatus;
  technologies: string[];
  icon?: string;
  image?: string;
  demoUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  comingSoonMessage?: string;
}

export const projectCategories = {
  ai: {
    id: 'ai',
    name: 'AI',
    emoji: '🧠',
    description: 'Large language models, GenAI applications, and AI agents',
  },
  ml: {
    id: 'ml',
    name: 'Machine Learning',
    emoji: '🤖',
    description: 'ML operations, model training, and inference pipelines',
  },
  'data-engineering': {
    id: 'data-engineering',
    name: 'Data Engineering',
    emoji: '⚙️',
    description: 'ETL pipelines, data orchestration, and streaming',
  },
  devops: {
    id: 'devops',
    name: 'DevOps',
    emoji: '🚀',
    description: 'CI/CD, infrastructure automation, and deployment',
  },
  analytics: {
    id: 'analytics',
    name: 'Analytics',
    emoji: '📊',
    description: 'BI dashboards, data visualization, and reporting',
  },
} as const;

export const projects: Project[] = [
  // AI Projects
  {
    id: 'llm-chat-app',
    title: 'LLM-Powered Chat Application',
    slug: 'llm-chat-app',
    description: 'Build conversational AI applications with large language models and context management.',
    category: 'ai',
    status: 'coming-soon',
    technologies: ['Python', 'LangChain', 'OpenAI', 'FastAPI'],
    icon: '💬',
    comingSoonMessage: 'Implementing advanced RAG techniques and multi-turn conversations.',
  },
  {
    id: 'document-qa',
    title: 'Document Q&A with RAG',
    slug: 'document-qa',
    description: 'Query documents using retrieval-augmented generation for accurate, context-aware answers.',
    category: 'ai',
    status: 'coming-soon',
    technologies: ['Python', 'LlamaIndex', 'ChromaDB', 'Next.js'],
    icon: '📄',
    comingSoonMessage: 'Building vector store integration and semantic search capabilities.',
  },
  
  // ML Projects
  {
    id: 'ml-operations',
    title: 'ML Operations Pipeline',
    slug: 'ml-operations',
    description: 'Operationalize complex ML workflows—from model training to inference—with reliability and reproducibility.',
    category: 'ml',
    status: 'coming-soon',
    technologies: ['Python', 'MLflow', 'Kubernetes', 'Docker'],
    icon: '🔄',
    comingSoonMessage: 'Projects coming soon. Check back later!',
  },
  {
    id: 'predictive-maintenance',
    title: 'Predictive Maintenance Model',
    slug: 'predictive-maintenance',
    description: 'Predict equipment failures before they happen using time-series analysis and anomaly detection.',
    category: 'ml',
    status: 'coming-soon',
    technologies: ['Python', 'Scikit-learn', 'TensorFlow', 'Pandas'],
    icon: '🔧',
    comingSoonMessage: 'Developing anomaly detection algorithms and real-time monitoring.',
  },
  
  // Data Engineering Projects
  {
    id: 'realtime-pipeline',
    title: 'Real-Time Data Pipeline',
    slug: 'realtime-pipeline',
    description: 'Process streaming data with low latency using modern data engineering tools and practices.',
    category: 'data-engineering',
    status: 'coming-soon',
    technologies: ['Apache Kafka', 'Apache Spark', 'Python', 'Delta Lake'],
    icon: '⚡',
    comingSoonMessage: 'Building scalable streaming architecture with fault tolerance.',
  },
  {
    id: 'etl-orchestration',
    title: 'Batch ETL Orchestration',
    slug: 'etl-orchestration',
    description: 'Orchestrate complex data transformations with dependency management and monitoring.',
    category: 'data-engineering',
    status: 'coming-soon',
    technologies: ['Apache Airflow', 'dbt', 'Python', 'PostgreSQL'],
    icon: '🔀',
    comingSoonMessage: 'Implementing DAG-based workflows and data lineage tracking.',
  },
  {
    id: 'data-quality',
    title: 'Data Quality Framework',
    slug: 'data-quality',
    description: 'Ensure data reliability with automated validation, profiling, and quality metrics.',
    category: 'data-engineering',
    status: 'coming-soon',
    technologies: ['Great Expectations', 'Python', 'SQL', 'Grafana'],
    icon: '✓',
    comingSoonMessage: 'Developing comprehensive data validation rules and alerting.',
  },
  
  // DevOps Projects
  {
    id: 'k8s-pipeline',
    title: 'Kubernetes Deployment Pipeline',
    slug: 'k8s-pipeline',
    description: 'Automated CI/CD pipeline for containerized applications with GitOps principles.',
    category: 'devops',
    status: 'coming-soon',
    technologies: ['Kubernetes', 'ArgoCD', 'GitHub Actions', 'Helm'],
    icon: '☸️',
    comingSoonMessage: 'Setting up automated deployments with rollback capabilities.',
  },
  {
    id: 'iac-terraform',
    title: 'Infrastructure as Code',
    slug: 'iac-terraform',
    description: 'Provision and manage cloud infrastructure using declarative configuration.',
    category: 'devops',
    status: 'coming-soon',
    technologies: ['Terraform', 'AWS', 'Azure', 'GCP'],
    icon: '🏗️',
    comingSoonMessage: 'Building reusable modules for multi-cloud deployments.',
  },
  {
    id: 'monitoring-system',
    title: 'Monitoring & Alerting System',
    slug: 'monitoring-system',
    description: 'Comprehensive observability stack for metrics, logs, and distributed tracing.',
    category: 'devops',
    status: 'coming-soon',
    technologies: ['Prometheus', 'Grafana', 'Loki', 'Jaeger'],
    icon: '📈',
    comingSoonMessage: 'Implementing full-stack observability and SLO tracking.',
  },
  
  // Analytics Projects
  {
    id: 'executive-dashboard',
    title: 'Executive Dashboard',
    slug: 'executive-dashboard',
    description: 'High-level KPI tracking and business intelligence for decision makers.',
    category: 'analytics',
    status: 'coming-soon',
    technologies: ['Tableau', 'Power BI', 'Python', 'SQL'],
    icon: '📊',
    comingSoonMessage: 'Projects coming soon. Check back later!',
  },
  {
    id: 'realtime-analytics',
    title: 'Real-Time Analytics Platform',
    slug: 'realtime-analytics',
    description: 'Live data visualization and analytics for operational decision making.',
    category: 'analytics',
    status: 'coming-soon',
    technologies: ['Apache Druid', 'Superset', 'Kafka', 'React'],
    icon: '⚡',
    comingSoonMessage: 'Building low-latency analytics with sub-second query performance.',
  },
];

// Helper functions
export function getProjectsByCategory(category: ProjectCategory): Project[] {
  return projects.filter(p => p.category === category);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter(p => p.featured);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(p => p.slug === slug);
}
```

## Component Implementations

### 1. Project Card Component

**Create `/app/projects/components/ProjectCard.tsx`:**

```typescript
'use client';

import Link from 'next/link';
import type { Project } from '@/lib/projects';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const statusStyles = {
    live: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
    'in-progress': 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
    'coming-soon': 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300',
  };

  const statusLabels = {
    live: 'Live Demo',
    'in-progress': 'In Progress',
    'coming-soon': 'Coming Soon',
  };

  return (
    <div
      className="group relative rounded-lg border p-6 transition-all hover:shadow-lg"
      style={{
        backgroundColor: 'var(--theme-bg-tertiary)',
        borderColor: 'var(--theme-border)',
      }}
    >
      {/* Status Badge */}
      <div className="absolute top-4 right-4">
        <span
          className={`text-xs px-2 py-1 rounded-full font-medium ${statusStyles[project.status]}`}
        >
          {statusLabels[project.status]}
        </span>
      </div>

      {/* Icon */}
      {project.icon && (
        <div className="text-4xl mb-4">{project.icon}</div>
      )}

      {/* Title */}
      <h3
        className="text-xl font-semibold mb-2 group-hover:underline"
        style={{ color: 'var(--theme-text)' }}
      >
        {project.title}
      </h3>

      {/* Description */}
      <p
        className="text-sm mb-4 line-clamp-3"
        style={{ color: 'var(--theme-text-secondary)' }}
      >
        {project.description}
      </p>

      {/* Technologies */}
      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.slice(0, 4).map((tech) => (
          <span
            key={tech}
            className="text-xs px-2 py-1 rounded"
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
            className="text-xs px-2 py-1"
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
```

### 2. Empty State Component

**Create `/app/projects/components/EmptyState.tsx`:**

```typescript
interface EmptyStateProps {
  category: string;
  emoji: string;
}

export default function EmptyState({ category, emoji }: EmptyStateProps) {
  return (
    <div
      className="text-center py-16 px-4 rounded-lg"
      style={{ backgroundColor: 'var(--theme-bg-secondary)' }}
    >
      <div className="text-6xl mb-4">{emoji}</div>
      <h3
        className="text-2xl font-semibold mb-2"
        style={{ color: 'var(--theme-text)' }}
      >
        {category}
      </h3>
      <p
        className="text-base mb-4 max-w-2xl mx-auto"
        style={{ color: 'var(--theme-text-secondary)' }}
      >
        Operationalize complex workflows—from development to deployment—with reliability
        and reproducibility.
      </p>
      <p
        className="text-sm italic"
        style={{ color: 'var(--theme-text-tertiary)' }}
      >
        Projects coming soon. Check back later!
      </p>
    </div>
  );
}
```

### 3. Updated Projects Page

**Update `/app/projects/page.tsx`:**

```typescript
'use client';

import { useState } from 'react';
import { projects, projectCategories, getProjectsByCategory } from '@/lib/projects';
import ProjectCard from './components/ProjectCard';
import EmptyState from './components/EmptyState';

export default function ProjectsPage() {
  const [activeTab, setActiveTab] = useState<keyof typeof projectCategories>('ai');

  const categoryProjects = getProjectsByCategory(activeTab);
  const category = projectCategories[activeTab];

  return (
    <div className="min-h-screen py-16" style={{ backgroundColor: 'var(--theme-background)' }}>
      <div className="max-w-7xl mx-auto px-4">
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
        <div className="flex flex-wrap justify-center gap-2 mb-12 border-b pb-4" style={{ borderColor: 'var(--theme-border)' }}>
          {Object.entries(projectCategories).map(([key, cat]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key as keyof typeof projectCategories)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                activeTab === key ? 'shadow-md' : ''
              }`}
              style={{
                backgroundColor: activeTab === key ? 'var(--theme-primary)' : 'var(--theme-bg-tertiary)',
                color: activeTab === key ? 'var(--theme-text)' : 'var(--theme-text-secondary)',
                borderColor: 'var(--theme-border)',
              }}
            >
              <span className="mr-2">{cat.emoji}</span>
              {cat.name}
            </button>
          ))}
        </div>

        {/* Category Description */}
        <div className="text-center mb-8">
          <p
            className="text-sm"
            style={{ color: 'var(--theme-text-secondary)' }}
          >
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
          <EmptyState category={category.name} emoji={category.emoji} />
        )}
      </div>
    </div>
  );
}
```

## Design Requirements

### Visual Consistency
- Use theme variables for all colors
- Maintain spacing consistency (py-16, gap-6, etc.)
- Smooth transitions on hover (200-300ms)
- Responsive grid (1 col mobile, 2 col tablet, 3 col desktop)

### Status Indicators
- **Live**: Green badge, show demo/GitHub links
- **In Progress**: Blue badge, show progress message
- **Coming Soon**: Gray badge, show coming soon message

### Technology Badges
- Show up to 4 technologies
- "+X more" indicator for additional techs
- Subtle background color from theme
- Small, compact design

### Placeholder Messaging
- Professional, not apologetic
- Specific about what's being built
- Encouraging users to check back
- Consistent tone across all categories

## Integration Requirements

### Navigation
- Projects tab in main navigation
- Breadcrumbs on individual project pages
- Back to projects link on detail pages

### Theme System
- All components use CSS variables
- Smooth theme transitions
- Proper contrast in all 5 themes
- Test with each theme

### Performance
- Lazy load project images (when added)
- Optimize card rendering
- Smooth tab transitions
- No layout shift

### Accessibility
- Keyboard navigation for tabs
- Proper ARIA labels
- Focus states visible
- Screen reader friendly

## Future Enhancements (Phase 11+)

### Search & Filter
- Search by project name/description
- Filter by technology
- Filter by status
- Sort options (newest, popular, etc.)

### Project Detail Pages
- Full project description
- Architecture diagrams
- Code snippets
- Live demos embedded
- GitHub integration

### Featured Projects
- Highlight selected projects on homepage
- Carousel or grid of featured work
- "Featured" badge on cards

## Testing Checklist

- [ ] All 5 category tabs work correctly
- [ ] Projects display in correct categories
- [ ] Status badges show correct colors
- [ ] Technology badges display properly
- [ ] Coming soon messages are clear
- [ ] Hover effects work smoothly
- [ ] Responsive on mobile, tablet, desktop
- [ ] Theme switching works for all components
- [ ] Keyboard navigation works
- [ ] No console errors
- [ ] Empty states display correctly
- [ ] Links work (when projects go live)

---

## EXECUTION PROMPT:

Refine the Projects tab to create a professional demo/project repository inspired by Databricks' demo library. Implement placeholder content for AI, Data Engineering, and DevOps categories to match the existing Machine Learning and Analytics tabs.

**CRITICAL REQUIREMENTS:**

1. **Create Project Data Structure:**
   - Create `/lib/projects.ts` with TypeScript interfaces
   - Define ProjectCategory type: 'ai' | 'ml' | 'data-engineering' | 'devops' | 'analytics'
   - Define ProjectStatus type: 'live' | 'coming-soon' | 'in-progress'
   - Create project data array with placeholders for all categories
   - Include: title, description, category, status, technologies, icon, comingSoonMessage

2. **Project Categories with Placeholders:**
   
   **AI (🧠):**
   - LLM-Powered Chat Application
   - Document Q&A with RAG
   - AI Content Generator
   - Sentiment Analysis Pipeline
   - Image Classification System
   
   **Machine Learning (🤖):**
   - ML Operations Pipeline (existing)
   - Predictive Maintenance Model
   - Customer Churn Prediction
   - Time Series Forecasting
   - Feature Store Implementation
   
   **Data Engineering (⚙️):**
   - Real-Time Data Pipeline
   - Batch ETL Orchestration
   - Data Quality Framework
   - Change Data Capture (CDC)
   - Data Lake Architecture
   
   **DevOps (🚀):**
   - Kubernetes Deployment Pipeline
   - Infrastructure as Code (Terraform)
   - Monitoring & Alerting System
   - Blue-Green Deployment
   - Container Orchestration
   
   **Analytics (📊):**
   - Executive Dashboard (existing)
   - Real-Time Analytics Platform
   - Custom Reporting Engine
   - Data Visualization Library
   - KPI Tracking System

3. **Create Project Card Component:**
   - Create `/app/projects/components/ProjectCard.tsx`
   - Display project icon (emoji), title, description
   - Show status badge (Live/In Progress/Coming Soon)
   - Display technology badges (up to 4, then "+X more")
   - Show coming soon message for placeholder projects
   - Use theme variables for all colors
   - Hover effects: shadow-lg, scale effect
   - Responsive design

4. **Create Empty State Component:**
   - Create `/app/projects/components/EmptyState.tsx`
   - Display category emoji and name
   - Show professional "coming soon" message
   - Use theme variables
   - Center-aligned, clean design

5. **Update Projects Page:**
   - Update `/app/projects/page.tsx`
   - Implement tab navigation for all 5 categories
   - Active tab styling with theme colors
   - Display category description below tabs
   - Grid layout: 1 col mobile, 2 col tablet, 3 col desktop
   - Show ProjectCard for each project in active category
   - Show EmptyState if no projects in category (shouldn't happen now)

6. **Visual Design:**
   - Use theme variables throughout:
     * --theme-background (page background)
     * --theme-bg-tertiary (card backgrounds)
     * --theme-border (borders)
     * --theme-text (headings)
     * --theme-text-secondary (descriptions)
     * --theme-text-tertiary (subtle text)
     * --theme-primary (active tab, links)
   - Status badge colors:
     * Live: green-100/green-800 (light), green-900/green-200 (dark)
     * In Progress: blue-100/blue-800 (light), blue-900/blue-200 (dark)
     * Coming Soon: gray-100/gray-800 (light), gray-800/gray-300 (dark)
   - Smooth transitions (200-300ms)
   - Consistent spacing (py-16, gap-6, p-6)

7. **Content Guidelines:**
   - Professional, specific coming soon messages
   - Example: "Implementing advanced RAG techniques and multi-turn conversations."
   - Example: "Building scalable streaming architecture with fault tolerance."
   - Example: "Setting up automated deployments with rollback capabilities."
   - NOT: "Coming soon!" or "Under construction"

8. **Responsive Design:**
   - Mobile (< 768px): 1 column grid, stacked tabs
   - Tablet (768px - 1024px): 2 column grid
   - Desktop (> 1024px): 3 column grid
   - Tab navigation wraps on mobile
   - All text readable at all sizes

9. **Theme Integration:**
   - Test with all 5 themes (Coastal, Terracotta, Lavender, Desert, Morning)
   - Ensure proper contrast in all themes
   - Smooth color transitions when theme changes
   - No hard-coded colors

10. **Accessibility:**
    - Keyboard navigation for tabs (Tab + Enter)
    - Proper ARIA labels on tabs
    - Focus states visible
    - Semantic HTML (section, article, nav)
    - Alt text for icons (use aria-label)

**IMPORTANT:**
- Maintain consistency with existing Machine Learning and Analytics tabs
- All projects should have status: 'coming-soon' initially
- Use professional, specific placeholder messaging
- Each category should have 3-5 placeholder projects
- Technology stacks should be realistic and relevant
- Integrate seamlessly with theme system
- No lorem ipsum or generic placeholders

Run `npm run dev` and verify:
1. All 5 category tabs work
2. Each category shows placeholder projects
3. Status badges display correctly
4. Technology badges show properly
5. Coming soon messages are professional
6. Theme switching works across all components
7. Responsive design works on mobile/tablet/desktop
8. Hover effects are smooth
9. No console errors
