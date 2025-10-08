export type ProjectCategory = 'web' | 'mobile' | 'design' | 'consulting';

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
  web: {
    id: 'web',
    name: 'Web Development',
    emoji: '🌐',
    description: 'Web applications, websites, and online platforms',
  },
  mobile: {
    id: 'mobile',
    name: 'Mobile Apps',
    emoji: '📱',
    description: 'iOS and Android mobile applications',
  },
  design: {
    id: 'design',
    name: 'Design',
    emoji: '🎨',
    description: 'UI/UX design, branding, and visual identity',
  },
  consulting: {
    id: 'consulting',
    name: 'Consulting',
    emoji: '💼',
    description: 'Strategy, advisory, and business consulting services',
  },
} as const;

export const projects: Project[] = [
  // Web Development Projects
  {
    id: 'e-commerce-platform',
    title: 'E-Commerce Platform',
    slug: 'e-commerce-platform',
    description: 'Full-featured online store with payment processing and inventory management.',
    category: 'web',
    status: 'coming-soon',
    technologies: ['Next.js', 'React', 'Node.js', 'PostgreSQL', 'Stripe'],
    icon: '🛒',
    comingSoonMessage: 'Building comprehensive e-commerce solution with modern features.',
  },
  {
    id: 'cms-website',
    title: 'Content Management System',
    slug: 'cms-website',
    description: 'Custom CMS for managing and publishing digital content efficiently.',
    category: 'web',
    status: 'coming-soon',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
    icon: '📝',
    comingSoonMessage: 'Developing flexible content management capabilities.',
  },
  {
    id: 'social-platform',
    title: 'Social Networking Platform',
    slug: 'social-platform',
    description: 'Connect people through shared interests with real-time messaging and feeds.',
    category: 'web',
    status: 'coming-soon',
    technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Redis'],
    icon: '👥',
    comingSoonMessage: 'Implementing social features and real-time capabilities.',
  },
  {
    id: 'booking-system',
    title: 'Online Booking System',
    slug: 'booking-system',
    description: 'Streamlined appointment scheduling and booking management solution.',
    category: 'web',
    status: 'coming-soon',
    technologies: ['React', 'TypeScript', 'Node.js', 'Calendar API'],
    icon: '📅',
    comingSoonMessage: 'Creating intuitive scheduling interface with notifications.',
  },
  {
    id: 'portfolio-builder',
    title: 'Portfolio Builder',
    slug: 'portfolio-builder',
    description: 'Drag-and-drop portfolio website builder for creatives and professionals.',
    category: 'web',
    status: 'coming-soon',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js'],
    icon: '🎨',
    comingSoonMessage: 'Building customizable templates and editor interface.',
  },

  // Mobile App Projects
  {
    id: 'fitness-tracker',
    title: 'Fitness Tracking App',
    slug: 'fitness-tracker',
    description: 'Track workouts, nutrition, and health metrics with personalized insights.',
    category: 'mobile',
    status: 'coming-soon',
    technologies: ['React Native', 'TypeScript', 'Firebase', 'HealthKit'],
    icon: '💪',
    comingSoonMessage: 'Developing workout tracking and progress visualization.',
  },
  {
    id: 'task-manager-mobile',
    title: 'Task Management App',
    slug: 'task-manager-mobile',
    description: 'Organize tasks, projects, and collaborate with teams on the go.',
    category: 'mobile',
    status: 'coming-soon',
    technologies: ['React Native', 'TypeScript', 'Redux', 'SQLite'],
    icon: '✅',
    comingSoonMessage: 'Creating intuitive task organization and team features.',
  },
  {
    id: 'recipe-app',
    title: 'Recipe & Meal Planning App',
    slug: 'recipe-app',
    description: 'Discover recipes, plan meals, and generate shopping lists automatically.',
    category: 'mobile',
    status: 'coming-soon',
    technologies: ['Flutter', 'Dart', 'Firebase', 'Cloud Functions'],
    icon: '🍳',
    comingSoonMessage: 'Building recipe database and meal planning features.',
  },
  {
    id: 'expense-tracker',
    title: 'Personal Finance Tracker',
    slug: 'expense-tracker',
    description: 'Monitor spending, create budgets, and achieve financial goals.',
    category: 'mobile',
    status: 'coming-soon',
    technologies: ['React Native', 'TypeScript', 'SQLite', 'Chart.js'],
    icon: '💰',
    comingSoonMessage: 'Implementing budget tracking and expense categorization.',
  },
  {
    id: 'language-learning',
    title: 'Language Learning App',
    slug: 'language-learning',
    description: 'Interactive language learning with gamification and progress tracking.',
    category: 'mobile',
    status: 'coming-soon',
    technologies: ['React Native', 'TypeScript', 'Audio API', 'Firebase'],
    icon: '🗣️',
    comingSoonMessage: 'Creating engaging lessons and pronunciation features.',
  },

  // Design Projects
  {
    id: 'brand-identity',
    title: 'Brand Identity System',
    slug: 'brand-identity',
    description: 'Comprehensive brand identity including logo, colors, and guidelines.',
    category: 'design',
    status: 'coming-soon',
    technologies: ['Figma', 'Adobe Illustrator', 'Photoshop'],
    icon: '🎯',
    comingSoonMessage: 'Developing complete brand identity package.',
  },
  {
    id: 'ui-kit',
    title: 'UI Component Library',
    slug: 'ui-kit',
    description: 'Reusable design system and component library for consistency.',
    category: 'design',
    status: 'coming-soon',
    technologies: ['Figma', 'React', 'Storybook', 'Tailwind CSS'],
    icon: '🧩',
    comingSoonMessage: 'Creating comprehensive component library.',
  },
  {
    id: 'ux-redesign',
    title: 'UX Redesign Project',
    slug: 'ux-redesign',
    description: 'User experience improvement through research and iterative design.',
    category: 'design',
    status: 'coming-soon',
    technologies: ['Figma', 'User Research', 'Prototyping'],
    icon: '🔍',
    comingSoonMessage: 'Conducting user research and creating prototypes.',
  },
  {
    id: 'mobile-app-design',
    title: 'Mobile App UI Design',
    slug: 'mobile-app-design',
    description: 'Modern mobile interface design with focus on usability.',
    category: 'design',
    status: 'coming-soon',
    technologies: ['Figma', 'Sketch', 'Principle', 'InVision'],
    icon: '📱',
    comingSoonMessage: 'Designing intuitive mobile user interfaces.',
  },
  {
    id: 'illustration-set',
    title: 'Custom Illustration Set',
    slug: 'illustration-set',
    description: 'Unique illustration library for brand and marketing materials.',
    category: 'design',
    status: 'coming-soon',
    technologies: ['Adobe Illustrator', 'Procreate', 'Figma'],
    icon: '🖼️',
    comingSoonMessage: 'Creating cohesive illustration style.',
  },

  // Consulting Projects
  {
    id: 'digital-transformation',
    title: 'Digital Transformation Strategy',
    slug: 'digital-transformation',
    description: 'Guide organizations through digital transformation initiatives.',
    category: 'consulting',
    status: 'coming-soon',
    technologies: ['Strategy', 'Analysis', 'Planning'],
    icon: '🚀',
    comingSoonMessage: 'Developing digital transformation roadmap.',
  },
  {
    id: 'tech-audit',
    title: 'Technology Stack Audit',
    slug: 'tech-audit',
    description: 'Comprehensive review of technology choices and recommendations.',
    category: 'consulting',
    status: 'coming-soon',
    technologies: ['Analysis', 'Architecture', 'Best Practices'],
    icon: '🔍',
    comingSoonMessage: 'Conducting thorough technology assessment.',
  },
  {
    id: 'process-optimization',
    title: 'Process Optimization',
    slug: 'process-optimization',
    description: 'Streamline workflows and improve operational efficiency.',
    category: 'consulting',
    status: 'coming-soon',
    technologies: ['Process Analysis', 'Automation', 'Training'],
    icon: '⚙️',
    comingSoonMessage: 'Identifying efficiency opportunities.',
  },
  {
    id: 'product-strategy',
    title: 'Product Strategy Consulting',
    slug: 'product-strategy',
    description: 'Define product vision, roadmap, and go-to-market strategy.',
    category: 'consulting',
    status: 'coming-soon',
    technologies: ['Strategy', 'Market Research', 'Planning'],
    icon: '📊',
    comingSoonMessage: 'Developing comprehensive product strategy.',
  },
  {
    id: 'training-workshop',
    title: 'Technical Training & Workshops',
    slug: 'training-workshop',
    description: 'Custom training programs for teams and organizations.',
    category: 'consulting',
    status: 'coming-soon',
    technologies: ['Training', 'Education', 'Mentoring'],
    icon: '🎓',
    comingSoonMessage: 'Creating tailored training curriculum.',
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
