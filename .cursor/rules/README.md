# Cursor Rules for Portfolio Website

This directory contains Cursor AI rules to ensure consistent, high-quality code throughout the portfolio website project.

## Rule Files

### Core Development Rules (Always Applied)

1. **`nextjs-typescript.mdc`**
   - Next.js 14+ App Router conventions
   - TypeScript best practices
   - File naming and component structure
   - Metadata and SEO patterns

2. **`tailwind-styling.mdc`**
   - Tailwind CSS utility class organization
   - Responsive design patterns
   - Dark mode implementation
   - Accessibility standards

3. **`components.mdc`**
   - Component architecture
   - Server vs Client component usage
   - Props and type definitions
   - Component organization

4. **`performance-seo.mdc`**
   - Image optimization with next/image
   - Loading states and code splitting
   - SEO metadata patterns
   - Core Web Vitals optimization

5. **`code-quality.mdc`**
   - ESLint and Prettier configuration
   - Import organization
   - Error handling patterns
   - Type safety guidelines

### Context-Specific Rules (Applied as Needed)

6. **`content-mdx.mdc`**
   - MDX frontmatter structure
   - Content file naming
   - Markdown guidelines
   - Content parsing standards

7. **`git-github.mdc`**
   - Commit message conventions
   - Git workflow
   - Deployment guidelines
   - Repository setup

## How Rules Are Applied

- **Always Applied**: Core rules (nextjs-typescript, tailwind-styling, components, performance-seo, code-quality) are automatically applied to relevant files based on glob patterns
- **Context-Specific**: Content and Git rules are applied when working with specific file types or tasks
- **Scoped**: Rules use glob patterns to target specific file types and directories

## Rule Structure

Each rule file uses MDC format:
```mdc
---
description: Brief description of the rule
globs:
  - "**/*.tsx"
  - "**/*.ts"
alwaysApply: true/false
---

# Rule Content
Guidelines and standards...
```

## Customization

To modify rules:
1. Edit the relevant `.mdc` file
2. Rules are version-controlled with the project
3. Changes apply immediately to Cursor AI suggestions

## Benefits

- **Consistency**: Enforces coding standards across the entire project
- **Quality**: Catches common mistakes and anti-patterns
- **Learning**: Provides inline guidance and best practices
- **Efficiency**: Reduces code review time and refactoring needs
- **Maintainability**: Makes codebase easier to understand and modify
