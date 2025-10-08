# Contributing to Next.js Business Starter

Thank you for your interest in contributing! This document provides guidelines for contributing to this project.

## Ways to Contribute

- Report bugs
- Suggest new features
- Improve documentation
- Submit pull requests
- Share the project

## Reporting Issues

Before creating an issue:
1. Check if the issue already exists
2. Use the issue template (if available)
3. Include relevant details:
   - Node.js version
   - npm version
   - Operating system
   - Steps to reproduce
   - Expected vs. actual behavior
   - Screenshots (if applicable)

## Pull Requests

### Getting Started

1. Fork the repository
2. Clone your fork:
   ```bash
   git clone https://github.com/yourusername/nextjs-business-starter.git
   cd nextjs-business-starter
   ```

3. Create a branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```

4. Install dependencies:
   ```bash
   npm install
   ```

5. Run development server:
   ```bash
   npm run dev
   ```

### Making Changes

1. **Follow existing code style**
   - Use TypeScript
   - Follow ESLint rules
   - Use Prettier formatting
   - Write semantic commit messages

2. **Test your changes**
   - Run `npm run lint`
   - Run `npm run build`
   - Test in development mode
   - Test in production build
   - Verify responsive design

3. **Update documentation**
   - Update README if needed
   - Add comments for complex code
   - Update CHANGELOG.md

### Submitting

1. Commit your changes:
   ```bash
   git add .
   git commit -m "feat: add amazing feature"
   ```

2. Push to your fork:
   ```bash
   git push origin feature/your-feature-name
   ```

3. Open a Pull Request:
   - Use a clear title
   - Describe what you changed and why
   - Reference related issues
   - Include screenshots if UI changes

## Commit Messages

Follow conventional commits format:

- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation changes
- `style:` Code style changes (formatting, etc.)
- `refactor:` Code refactoring
- `test:` Adding or updating tests
- `chore:` Maintenance tasks

Examples:
- `feat: add dark mode toggle animation`
- `fix: resolve mobile navigation bug`
- `docs: update installation instructions`

## Code Style

- Use TypeScript with strict mode
- Follow existing patterns in the codebase
- Use meaningful variable and function names
- Add comments for complex logic
- Keep functions small and focused
- Prefer functional components
- Use Server Components by default

## Development Workflow

1. **Start development server:**
   ```bash
   npm run dev
   ```

2. **Run linter:**
   ```bash
   npm run lint
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

4. **Test production build:**
   ```bash
   npm start
   ```

## Project Structure

```
├── app/           # Next.js pages (App Router)
├── components/    # Reusable components
├── content/       # MDX content
├── lib/           # Utility functions
├── public/        # Static assets
└── types/         # TypeScript types
```

## Need Help?

- Check existing documentation
- Look at closed issues
- Ask in discussions
- Review existing code examples

## Code of Conduct

- Be respectful and inclusive
- Focus on constructive feedback
- Help others learn
- Keep discussions on-topic

## License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

Thank you for contributing!

