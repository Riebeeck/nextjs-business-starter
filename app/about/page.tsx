import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Learn more about our approach to building digital products and the technologies we work with.',
};

export default function About() {
  const skills = [
    'Next.js',
    'React',
    'TypeScript',
    'Node.js',
    'PostgreSQL',
    'Tailwind CSS',
    'Git',
    'Docker',
  ];

  const experience = [
    {
      title: 'Senior Full-Stack Developer',
      company: 'Tech Company',
      period: '2022 - Present',
      description: 'Building scalable web applications with modern technologies.',
    },
    {
      title: 'Full-Stack Developer',
      company: 'Startup Inc',
      period: '2020 - 2022',
      description: 'Developed and maintained multiple client projects.',
    },
    {
      title: 'Junior Developer',
      company: 'Digital Agency',
      period: '2018 - 2020',
      description: 'Started my journey in web development.',
    },
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-8">
          About Me
        </h1>

        {/* Bio */}
        <section className="mb-16">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Hi! I&apos;m Riebeeck van Niekerk, a software developer with a passion for building
              modern, performant web applications. I specialize in full-stack development with a
              focus on React, Next.js, and TypeScript.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              I love exploring new technologies and sharing what I learn through writing. When
              I&apos;m not coding, you can find me reading tech blogs, contributing to open source,
              or experimenting with new frameworks.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              I believe in writing clean, maintainable code and following best practices. My goal
              is to create applications that not only work well but are also a joy to use and
              maintain.
            </p>
          </div>
        </section>

        {/* Skills */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Skills & Technologies
          </h2>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-lg font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Experience</h2>
          <div className="space-y-8">
            {experience.map((job, index) => (
              <div
                key={index}
                className="border-l-4 border-blue-500 pl-6 py-2"
              >
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {job.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-2">
                  {job.company} • {job.period}
                </p>
                <p className="text-gray-700 dark:text-gray-300">{job.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact CTA */}
        <section className="border-t border-gray-200 dark:border-gray-800 pt-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Let&apos;s Connect
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            I&apos;m always interested in hearing about new projects and opportunities. Feel free
            to reach out!
          </p>
          <div className="flex gap-4">
            <a
              href="https://github.com/Riebeeck"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 rounded-lg font-semibold hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/riebeeckvanniekerk/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
