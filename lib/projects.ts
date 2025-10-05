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
  {
    id: 'ai-content-generator',
    title: 'AI Content Generator',
    slug: 'ai-content-generator',
    description: 'Generate high-quality content using fine-tuned language models and prompt engineering.',
    category: 'ai',
    status: 'coming-soon',
    technologies: ['Python', 'GPT-4', 'Anthropic Claude', 'React'],
    icon: '✍️',
    comingSoonMessage: 'Developing prompt templates and content quality validation.',
  },
  {
    id: 'sentiment-analysis',
    title: 'Sentiment Analysis Pipeline',
    slug: 'sentiment-analysis',
    description: 'Real-time sentiment analysis for customer feedback and social media monitoring.',
    category: 'ai',
    status: 'coming-soon',
    technologies: ['Python', 'Transformers', 'Apache Kafka', 'PostgreSQL'],
    icon: '😊',
    comingSoonMessage: 'Training custom models for domain-specific sentiment detection.',
  },
  {
    id: 'image-classification',
    title: 'Image Classification System',
    slug: 'image-classification',
    description: 'Deploy computer vision models for automated image categorization and tagging.',
    category: 'ai',
    status: 'coming-soon',
    technologies: ['Python', 'PyTorch', 'FastAPI', 'Docker'],
    icon: '🖼️',
    comingSoonMessage: 'Implementing transfer learning and model optimization techniques.',
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
    comingSoonMessage: 'Building end-to-end MLOps platform with automated retraining.',
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
  {
    id: 'customer-churn',
    title: 'Customer Churn Prediction',
    slug: 'customer-churn',
    description: 'Identify at-risk customers using machine learning to reduce churn and improve retention.',
    category: 'ml',
    status: 'coming-soon',
    technologies: ['Python', 'XGBoost', 'Scikit-learn', 'SQL'],
    icon: '📉',
    comingSoonMessage: 'Training ensemble models and implementing feature engineering pipelines.',
  },
  {
    id: 'time-series-forecasting',
    title: 'Time Series Forecasting',
    slug: 'time-series-forecasting',
    description: 'Forecast future trends using advanced time-series models for demand planning and inventory optimization.',
    category: 'ml',
    status: 'coming-soon',
    technologies: ['Python', 'Prophet', 'ARIMA', 'TensorFlow'],
    icon: '📈',
    comingSoonMessage: 'Implementing multi-horizon forecasting with uncertainty quantification.',
  },
  {
    id: 'feature-store',
    title: 'Feature Store Implementation',
    slug: 'feature-store',
    description: 'Centralized feature management for consistent ML feature engineering across teams.',
    category: 'ml',
    status: 'coming-soon',
    technologies: ['Python', 'Feast', 'Redis', 'Spark'],
    icon: '🗄️',
    comingSoonMessage: 'Building real-time and batch feature serving infrastructure.',
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
  {
    id: 'cdc-pipeline',
    title: 'Change Data Capture (CDC)',
    slug: 'cdc-pipeline',
    description: 'Capture and replicate database changes in real-time for data synchronization.',
    category: 'data-engineering',
    status: 'coming-soon',
    technologies: ['Debezium', 'Kafka', 'PostgreSQL', 'MongoDB'],
    icon: '🔄',
    comingSoonMessage: 'Implementing log-based CDC with minimal database impact.',
  },
  {
    id: 'data-lake',
    title: 'Data Lake Architecture',
    slug: 'data-lake',
    description: 'Build scalable data lake with bronze, silver, and gold layers for analytics.',
    category: 'data-engineering',
    status: 'coming-soon',
    technologies: ['AWS S3', 'Delta Lake', 'Apache Spark', 'Python'],
    icon: '🏞️',
    comingSoonMessage: 'Designing medallion architecture with data governance.',
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
  {
    id: 'blue-green-deployment',
    title: 'Blue-Green Deployment',
    slug: 'blue-green-deployment',
    description: 'Zero-downtime deployment strategy with instant rollback capabilities.',
    category: 'devops',
    status: 'coming-soon',
    technologies: ['Kubernetes', 'Istio', 'Jenkins', 'Docker'],
    icon: '🔵',
    comingSoonMessage: 'Implementing traffic splitting and automated health checks.',
  },
  {
    id: 'container-orchestration',
    title: 'Container Orchestration',
    slug: 'container-orchestration',
    description: 'Manage containerized applications at scale with automated scaling and healing.',
    category: 'devops',
    status: 'coming-soon',
    technologies: ['Kubernetes', 'Docker', 'Helm', 'Prometheus'],
    icon: '📦',
    comingSoonMessage: 'Building auto-scaling policies and resource optimization.',
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
    comingSoonMessage: 'Designing interactive dashboards with drill-down capabilities.',
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
  {
    id: 'custom-reporting',
    title: 'Custom Reporting Engine',
    slug: 'custom-reporting',
    description: 'Flexible reporting system with scheduled reports and custom visualizations.',
    category: 'analytics',
    status: 'coming-soon',
    technologies: ['Python', 'Pandas', 'Plotly', 'PostgreSQL'],
    icon: '📄',
    comingSoonMessage: 'Developing template engine and automated report distribution.',
  },
  {
    id: 'data-viz-library',
    title: 'Data Visualization Library',
    slug: 'data-viz-library',
    description: 'Reusable visualization components for consistent data storytelling.',
    category: 'analytics',
    status: 'coming-soon',
    technologies: ['D3.js', 'React', 'TypeScript', 'Storybook'],
    icon: '📈',
    comingSoonMessage: 'Creating interactive chart library with accessibility features.',
  },
  {
    id: 'kpi-tracking',
    title: 'KPI Tracking System',
    slug: 'kpi-tracking',
    description: 'Monitor and track key performance indicators with automated alerting.',
    category: 'analytics',
    status: 'coming-soon',
    technologies: ['Python', 'SQL', 'Grafana', 'Slack'],
    icon: '🎯',
    comingSoonMessage: 'Implementing metric definitions and anomaly detection.',
  },
];

// Helper functions
export function getProjectsByCategory(category: ProjectCategory): Project[] {
  return projects.filter((p) => p.category === category);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
