import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Company',
  description:
    'Learn about Studio, our mission, and the team building modern digital solutions.',
};

export default function Company() {
  const teamMembers = [
    {
      name: 'Riebeeck van Niekerk',
      role: 'Founder & Lead Developer',
      bio: 'Engineer, developer, and architect specializing in distributed systems, scalable architecture, and artificial intelligence. Based in Los Angeles, CA.',
      image: null, // Placeholder for future profile image
      social: {
        linkedin: 'https://www.linkedin.com/in/riebeeckvanniekerk/',
        github: 'https://github.com/Riebeeck',
        twitter: 'https://x.com',
      },
    },
  ];

  const values = [
    {
      title: 'Quality First',
      description:
        'We believe in building products that are robust, scalable, and maintainable. Quality is never compromised.',
    },
    {
      title: 'Innovation',
      description:
        'We stay at the forefront of technology, exploring new tools and methodologies to deliver cutting-edge solutions.',
    },
    {
      title: 'Transparency',
      description:
        'Open communication and honest collaboration are at the heart of everything we do.',
    },
    {
      title: 'Impact',
      description:
        'We focus on building solutions that make a real difference for our clients and their users.',
    },
  ];

  return (
    <div style={{ backgroundColor: 'var(--theme-background)' }}>
      {/* Hero Section */}
      <section className="py-16 md:py-24 border-b border-theme" style={{ borderColor: 'var(--theme-border)' }} className="">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-semibold text-theme-primary" style={{ color: 'var(--theme-text)' }} className=" mb-6">
            About Studio
          </h1>
          <p className="text-lg text-theme-secondary" style={{ color: 'var(--theme-text-secondary)' }} className=" leading-relaxed max-w-3xl mx-auto">
            We build modern digital products with clean code and thoughtful design. Our focus is on
            creating scalable solutions that power analytics, machine learning, and business
            intelligence at scale.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-16 md:py-24 border-b border-theme" style={{ borderColor: 'var(--theme-border)' }} className="">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-theme-primary" style={{ color: 'var(--theme-text)' }} className=" mb-4">
              Our Team
            </h2>
            <p className="text-base text-theme-secondary" style={{ color: 'var(--theme-text-secondary)' }} className=" max-w-2xl mx-auto">
              Meet the people building the future of digital products.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="text-center rounded-lg border p-6 shadow-sm"
                style={{
                  backgroundColor: 'var(--theme-bg-tertiary)',
                  borderColor: 'var(--theme-border)',
                }}
              >
                {/* Profile Image Placeholder */}
                <div className="aspect-square bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-950 dark:to-purple-950 rounded-lg mb-6 flex items-center justify-center">
                  <div className="text-6xl font-semibold text-indigo-600 dark:text-indigo-400">
                    {member.name.charAt(0)}
                  </div>
                </div>

                <h3 className="text-lg font-semibold text-theme-primary" style={{ color: 'var(--theme-text)' }} className=" mb-1">
                  {member.name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-slate-400 mb-4">{member.role}</p>
                <p className="text-sm text-gray-700 dark:text-slate-300 mb-6">{member.bio}</p>

                {/* Social Links */}
                <div className="flex justify-center gap-4">
                  <Link
                    href={member.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </Link>
                  <Link
                    href={member.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                    aria-label="GitHub"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Link>
                  <Link
                    href={member.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                    aria-label="X (Twitter)"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 border-b border-theme" style={{ borderColor: 'var(--theme-border)' }} className="">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-theme-primary" style={{ color: 'var(--theme-text)' }} className=" mb-4">
              Our Values
            </h2>
            <p className="text-base text-theme-secondary" style={{ color: 'var(--theme-text-secondary)' }} className=" max-w-2xl mx-auto">
              The principles that guide our work and relationships.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-lg border p-6 shadow-sm"
                style={{
                  backgroundColor: 'var(--theme-bg-tertiary)',
                  borderColor: 'var(--theme-border)',
                }}
              >
                <h3 className="text-lg font-semibold text-theme-primary" style={{ color: 'var(--theme-text)' }} className=" mb-3">
                  {value.title}
                </h3>
                <p className="text-sm text-theme-secondary" style={{ color: 'var(--theme-text-secondary)' }} className="">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-theme-primary" style={{ color: 'var(--theme-text)' }} className=" mb-4">
            Let&apos;s Build Something Together
          </h2>
          <p className="text-base text-theme-secondary" style={{ color: 'var(--theme-text-secondary)' }} className=" mb-8 max-w-2xl mx-auto">
            Interested in working with us? We&apos;re always looking for exciting projects and
            collaborations.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Get in Touch
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-gray-300 dark:border-slate-600 text-gray-700 dark:text-slate-300 font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
