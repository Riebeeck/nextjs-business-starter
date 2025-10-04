import Link from 'next/link';
import Image from 'next/image';
import type { MDXComponents } from 'mdx/types';

export const mdxComponents: MDXComponents = {
  // Headings
  h1: ({ children }) => (
    <h1 className="text-4xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2 className="text-3xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="text-2xl font-semibold mt-6 mb-3 text-gray-900 dark:text-white">
      {children}
    </h3>
  ),
  h4: ({ children }) => (
    <h4 className="text-xl font-semibold mt-4 mb-2 text-gray-900 dark:text-white">
      {children}
    </h4>
  ),
  
  // Paragraphs
  p: ({ children }) => (
    <p className="text-gray-700 dark:text-gray-300 leading-7 mb-4">
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
          className="text-blue-600 dark:text-blue-400 hover:underline"
        >
          {children}
        </a>
      );
    }
    
    return (
      <Link href={href || '#'} className="text-blue-600 dark:text-blue-400 hover:underline">
        {children}
      </Link>
    );
  },
  
  // Lists
  ul: ({ children }) => (
    <ul className="list-disc list-inside mb-4 space-y-2 text-gray-700 dark:text-gray-300">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="list-decimal list-inside mb-4 space-y-2 text-gray-700 dark:text-gray-300">
      {children}
    </ol>
  ),
  li: ({ children }) => (
    <li className="ml-4">{children}</li>
  ),
  
  // Code blocks
  code: ({ children, className }) => {
    const isInline = !className;
    
    if (isInline) {
      return (
        <code className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-1.5 py-0.5 rounded text-sm font-mono">
          {children}
        </code>
      );
    }
    
    return (
      <code className={className}>
        {children}
      </code>
    );
  },
  pre: ({ children }) => (
    <pre className="bg-gray-900 dark:bg-gray-950 text-gray-100 p-4 rounded-lg overflow-x-auto mb-4 text-sm">
      {children}
    </pre>
  ),
  
  // Blockquotes
  blockquote: ({ children }) => (
    <blockquote className="border-l-4 border-blue-500 pl-4 italic my-4 text-gray-700 dark:text-gray-300">
      {children}
    </blockquote>
  ),
  
  // Horizontal rule
  hr: () => (
    <hr className="my-8 border-gray-200 dark:border-gray-800" />
  ),
  
  // Tables
  table: ({ children }) => (
    <div className="overflow-x-auto mb-4">
      <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-800">
        {children}
      </table>
    </div>
  ),
  th: ({ children }) => (
    <th className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-left text-sm font-semibold text-gray-900 dark:text-white">
      {children}
    </th>
  ),
  td: ({ children }) => (
    <td className="px-4 py-2 text-sm text-gray-700 dark:text-gray-300">
      {children}
    </td>
  ),
  
  // Images
  img: ({ src, alt }) => (
    <span className="block my-4">
      <Image
        src={src || ''}
        alt={alt || ''}
        width={800}
        height={400}
        className="rounded-lg"
      />
    </span>
  ),
};
