import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with us to discuss your project or collaboration opportunities.',
};

export default function Contact() {
  return (
    <div
      className="min-h-[calc(100vh-200px)]"
      style={{ backgroundColor: 'var(--theme-background)' }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center">
          <h1
            className="text-3xl md:text-4xl font-semibold mb-6"
            style={{ color: 'var(--theme-text)' }}
          >
            Get in Touch
          </h1>
          <p
            className="text-lg mb-8 max-w-2xl mx-auto"
            style={{ color: 'var(--theme-text-secondary)' }}
          >
            Interested in working together? We&apos;d love to hear from you.
          </p>
          <p
            className="text-base"
            style={{ color: 'var(--theme-text-secondary)' }}
          >
            Contact form coming soon. For now, reach out via{' '}
            <a
              href="mailto:hello@yourcompany.com"
              className="hover:underline"
              style={{ color: 'var(--theme-primary)' }}
            >
              email
            </a>
            {' '}or connect with us on{' '}
            <a
              href="https://linkedin.com/company/yourcompany"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
              style={{ color: 'var(--theme-primary)' }}
            >
              LinkedIn
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}