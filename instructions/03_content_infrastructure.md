# Phase 3: Content Infrastructure

Set up the content management system using MDX files.

## Requirements:

### 1. Content Utilities (`lib/content.ts` or similar):
- Create functions to read and parse MDX files from content/blog/ and content/projects/
- Parse frontmatter using gray-matter
- Sort content by date (newest first)
- Generate slugs from filenames
- TypeScript interfaces for BlogPost and Project types:
  * title: string
  * date: string
  * summary: string
  * author?: string
  * tags?: string[]
  * image?: string

### 2. MDX Configuration:
- Set up rehype-pretty-code or shiki for code syntax highlighting
- Configure MDX components for custom styling (headings, links, code blocks, etc.)
- Create a components map for MDX rendering

### 3. Sample Content:
- Create 2 example blog posts in content/blog/:
  * Include frontmatter with all metadata
  * Add sample markdown content with headings, lists, links, and code blocks
  * Use realistic technical content
- Create 2 example projects in content/projects/:
  * Include frontmatter with metadata
  * Add detailed project descriptions
  * Include technology stack information

---

## Execution Prompt:

Set up the content management system using MDX files.

1. **Content Utilities** (`lib/content.ts` or similar):
   - Create functions to read and parse MDX files from content/blog/ and content/projects/
   - Parse frontmatter using gray-matter
   - Sort content by date (newest first)
   - Generate slugs from filenames
   - TypeScript interfaces for BlogPost and Project types:
     * title: string
     * date: string
     * summary: string
     * author?: string
     * tags?: string[]
     * image?: string

2. **MDX Configuration**:
   - Set up rehype-pretty-code or shiki for code syntax highlighting
   - Configure MDX components for custom styling (headings, links, code blocks, etc.)
   - Create a components map for MDX rendering

3. **Sample Content**:
   - Create 2 example blog posts in content/blog/:
     * Include frontmatter with all metadata
     * Add sample markdown content with headings, lists, links, and code blocks
     * Use realistic technical content
   - Create 2 example projects in content/projects/:
     * Include frontmatter with metadata
     * Add detailed project descriptions
     * Include technology stack information

Ensure all TypeScript types are properly defined and exported.
