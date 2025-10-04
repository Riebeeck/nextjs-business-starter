// Type definitions for MDX content and frontmatter

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  summary: string;
  author: string;
  tags?: string[];
  image?: string;
  content: string;
}

export interface Project {
  slug: string;
  title: string;
  date: string;
  summary: string;
  description: string;
  technologies: string[];
  image?: string;
  github?: string;
  demo?: string;
  content: string;
}

export interface Frontmatter {
  title: string;
  date: string;
  summary: string;
  author?: string;
  description?: string;
  technologies?: string[];
  tags?: string[];
  image?: string;
  github?: string;
  demo?: string;
}
