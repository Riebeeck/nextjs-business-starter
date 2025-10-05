import Link from 'next/link';
import Image from 'next/image';
import type { MDXComponents } from 'mdx/types';

export const mdxComponents: MDXComponents = {
  // Headings - Using theme variables for dark, readable text
  h1: ({ children }) => (
    <h1
      className="text-3xl md:text-4xl font-semibold mt-8 mb-4"
      style={{ color: 'var(--theme-text)' }}
    >
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2
      className="text-2xl md:text-3xl font-semibold mt-8 mb-4"
      style={{ color: 'var(--theme-text)' }}
    >
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3
      className="text-xl md:text-2xl font-semibold mt-6 mb-3"
      style={{ color: 'var(--theme-text)' }}
    >
      {children}
    </h3>
  ),
  h4: ({ children }) => (
    <h4
      className="text-lg md:text-xl font-semibold mt-4 mb-2"
      style={{ color: 'var(--theme-text)' }}
    >
      {children}
    </h4>
  ),
  h5: ({ children }) => (
    <h5
      className="text-base md:text-lg font-semibold mt-3 mb-2"
      style={{ color: 'var(--theme-text)' }}
    >
      {children}
    </h5>
  ),
  h6: ({ children }) => (
    <h6
      className="text-sm md:text-base font-semibold mt-2 mb-1"
      style={{ color: 'var(--theme-text)' }}
    >
      {children}
    </h6>
  ),

  // Paragraphs
  p: ({ children }) => (
    <p className="leading-7 mb-4" style={{ color: 'var(--theme-text-secondary)' }}>
      {children}
    </p>
  ),

  // Links
  a: ({ href, children }) => {
    const isExternal = href?.startsWith('http');

    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
          style={{ color: 'var(--theme-primary)' }}
        >
          {children}
        </a>
      );
    }

    return (
      <Link href={href || '#'} className="hover:underline" style={{ color: 'var(--theme-primary)' }}>
        {children}
      </Link>
    );
  },

  // Lists
  ul: ({ children }) => (
    <ul className="list-disc list-inside mb-4 space-y-2" style={{ color: 'var(--theme-text-secondary)' }}>
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="list-decimal list-inside mb-4 space-y-2" style={{ color: 'var(--theme-text-secondary)' }}>
      {children}
    </ol>
  ),
  li: ({ children }) => <li className="ml-4">{children}</li>,

  // Code blocks
  code: ({ children, className }) => {
    const isInline = !className;

    if (isInline) {
      return (
        <code
          className="px-1.5 py-0.5 rounded text-sm font-mono"
          style={{
            backgroundColor: 'var(--theme-bg-secondary)',
            color: 'var(--theme-text)',
          }}
        >
          {children}
        </code>
      );
    }

    return <code className={className}>{children}</code>;
  },
  pre: ({ children }) => (
    <pre
      className="p-4 rounded-lg overflow-x-auto mb-4 text-sm"
      style={{
        backgroundColor: 'var(--theme-text)',
        color: 'var(--theme-background)',
      }}
    >
      {children}
    </pre>
  ),

  // Blockquotes
  blockquote: ({ children }) => (
    <blockquote
      className="border-l-4 pl-4 italic my-4"
      style={{
        borderColor: 'var(--theme-primary)',
        color: 'var(--theme-text-secondary)',
      }}
    >
      {children}
    </blockquote>
  ),

  // Horizontal rule
  hr: () => <hr className="my-8" style={{ borderColor: 'var(--theme-border)' }} />,

  // Tables
  table: ({ children }) => (
    <div className="overflow-x-auto mb-4">
      <table className="min-w-full divide-y" style={{ borderColor: 'var(--theme-border)' }}>
        {children}
      </table>
    </div>
  ),
  th: ({ children }) => (
    <th
      className="px-4 py-2 text-left text-sm font-semibold"
      style={{
        backgroundColor: 'var(--theme-bg-secondary)',
        color: 'var(--theme-text)',
      }}
    >
      {children}
    </th>
  ),
  td: ({ children }) => (
    <td className="px-4 py-2 text-sm" style={{ color: 'var(--theme-text-secondary)' }}>
      {children}
    </td>
  ),

  // Images - Enhanced with better responsive sizing
  img: ({ src, alt }) => (
    <span className="block my-6">
      <Image
        src={src || ''}
        alt={alt || ''}
        width={1200}
        height={630}
        className="rounded-lg w-full h-auto"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
      />
      {alt && (
        <span
          className="block text-sm text-center mt-2 italic"
          style={{ color: 'var(--theme-text-secondary)' }}
        >
          {alt}
        </span>
      )}
    </span>
  ),

  // Video support
  video: ({ src, controls = true, autoPlay = false, loop = false, muted = false, ...props }) => (
    <div className="my-6">
      <video
        controls={controls}
        autoPlay={autoPlay}
        loop={loop}
        muted={muted}
        className="w-full rounded-lg"
        style={{ maxHeight: '600px' }}
        {...props}
      >
        <source src={src} type="video/mp4" />
        <source src={src?.replace('.mp4', '.webm')} type="video/webm" />
        Your browser does not support the video tag.
      </video>
    </div>
  ),

  // YouTube embed component
  YouTube: ({ id, title = 'YouTube video' }: { id: string; title?: string }) => (
    <div className="my-6 relative w-full" style={{ paddingBottom: '56.25%' }}>
      <iframe
        className="absolute top-0 left-0 w-full h-full rounded-lg"
        src={`https://www.youtube.com/embed/${id}`}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  ),

  // Strong/Bold
  strong: ({ children }) => (
    <strong className="font-semibold" style={{ color: 'var(--theme-text)' }}>
      {children}
    </strong>
  ),

  // Emphasis/Italic
  em: ({ children }) => <em className="italic">{children}</em>,
};