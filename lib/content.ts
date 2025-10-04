import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import type { BlogPost, Project } from '@/types/content';

const contentDirectory = path.join(process.cwd(), 'content');

/**
 * Get all blog posts sorted by date (newest first)
 */
export async function getAllBlogPosts(): Promise<BlogPost[]> {
  const blogDir = path.join(contentDirectory, 'blog');
  
  // Check if directory exists
  if (!fs.existsSync(blogDir)) {
    return [];
  }

  const fileNames = fs.readdirSync(blogDir);
  const posts = fileNames
    .filter((fileName) => fileName.endsWith('.mdx'))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, '');
      const fullPath = path.join(blogDir, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);

      return {
        slug,
        title: data.title || '',
        date: data.date || '',
        summary: data.summary || '',
        author: data.author || 'Riebeeck van Niekerk',
        tags: data.tags || [],
        image: data.image,
        content,
      } as BlogPost;
    });

  // Sort by date (newest first)
  return posts.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
}

/**
 * Get a single blog post by slug
 */
export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  try {
    const fullPath = path.join(contentDirectory, 'blog', `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title || '',
      date: data.date || '',
      summary: data.summary || '',
      author: data.author || 'Riebeeck van Niekerk',
      tags: data.tags || [],
      image: data.image,
      content,
    } as BlogPost;
  } catch {
    return null;
  }
}

/**
 * Get all projects sorted by date (newest first)
 */
export async function getAllProjects(): Promise<Project[]> {
  const projectsDir = path.join(contentDirectory, 'projects');
  
  // Check if directory exists
  if (!fs.existsSync(projectsDir)) {
    return [];
  }

  const fileNames = fs.readdirSync(projectsDir);
  const projects = fileNames
    .filter((fileName) => fileName.endsWith('.mdx'))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, '');
      const fullPath = path.join(projectsDir, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);

      return {
        slug,
        title: data.title || '',
        date: data.date || '',
        summary: data.summary || '',
        description: data.description || data.summary || '',
        technologies: data.technologies || [],
        image: data.image,
        github: data.github,
        demo: data.demo,
        content,
      } as Project;
    });

  // Sort by date (newest first)
  return projects.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
}

/**
 * Get a single project by slug
 */
export async function getProject(slug: string): Promise<Project | null> {
  try {
    const fullPath = path.join(contentDirectory, 'projects', `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title || '',
      date: data.date || '',
      summary: data.summary || '',
      description: data.description || data.summary || '',
      technologies: data.technologies || [],
      image: data.image,
      github: data.github,
      demo: data.demo,
      content,
    } as Project;
  } catch {
    return null;
  }
}

/**
 * Get all unique tags from blog posts
 */
export async function getAllTags(): Promise<string[]> {
  const posts = await getAllBlogPosts();
  const tags = new Set<string>();
  
  posts.forEach((post) => {
    post.tags?.forEach((tag) => tags.add(tag));
  });
  
  return Array.from(tags).sort();
}
