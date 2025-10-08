import type { Metadata } from 'next';
import Link from 'next/link';
import VideoHeroSection from '@/components/ui/VideoHeroSection';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about YourCompany, our mission, and the team behind our innovative solutions.',
  openGraph: {
    title: 'About Us - YourCompany',
    description: 'Building innovative solutions for modern businesses.',
  },
};

export default function Company() {
  const teamMembers = [
    {
      name: 'John Doe',
      role: 'Founder & CEO',
      bio: 'John is a seasoned entrepreneur with over 15 years of experience in technology and business development. He founded YourCompany with a vision to deliver innovative solutions that help businesses grow and succeed in the digital age.',
      location: 'San Francisco, CA',
      social: {
        linkedin: 'https://linkedin.com/in/yourprofile',
        github: 'https://github.com/yourprofile',
        twitter: 'https://twitter.com/yourprofile',
      },
    },
  ];

  const principles = [
    {
      icon: '🎯',
      title: 'Quality First',
      description:
        'We build robust, scalable solutions with meticulous attention to detail. Every project is crafted for performance and maintainability.',
    },
    {
      icon: '🚀',
      title: 'Innovation Driven',
      description:
        'We stay at the cutting edge of technology, constantly exploring new approaches to deliver transformative solutions.',
    },
    {
      icon: '🤝',
      title: 'Client Partnership',
      description:
        'We work closely with our clients as true partners, ensuring transparent communication and shared success throughout every engagement.',
    },
    {
      icon: '📊',
      title: 'Results Focused',
      description:
        'We focus on measurable outcomes that drive real business value, delivering solutions that make a tangible impact.',
    },
  ];

  const expertise = [
    {
      area: 'Web Development',
      description: 'Modern, responsive websites and web applications',
    },
    {
      area: 'Mobile Apps',
      description: 'Native and cross-platform mobile solutions',
    },
    {
      area: 'Digital Strategy',
      description: 'Consulting and planning for digital transformation',
    },
    {
      area: 'Cloud Solutions',
      description: 'Scalable infrastructure and cloud-based services',
    },
  ];

  return (
    <div style={{ backgroundColor: 'var(--theme-background)' }}>
      {/* Hero Section with background video */}
      <VideoHeroSection
        videoSrc="/videos/backgrounds/hero_section.mp4"
        overlayOpacity={0.45}
        showOnMobile={true}
      >
        <h1
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
          style={{
            color: 'var(--theme-text)',
            textShadow: '0 2px 4px rgba(0,0,0,0.3)',
          }}
        >
          Building Digital Solutions
          <br />
          <span style={{ color: 'var(--theme-primary)' }}>That Matter</span>
        </h1>
        <p
          className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto"
          style={{
            color: 'var(--theme-text-secondary)',
            textShadow: '0 2px 4px rgba(0,0,0,0.3)',
          }}
        >
          YourCompany is dedicated to building innovative solutions that help businesses
          succeed in the digital age. We combine creativity with technical expertise to deliver
          exceptional results.
        </p>
      </VideoHeroSection>

      {/* Mission Section */}
      <section
        className="py-16 md:py-24 border-y"
        style={{ borderColor: 'var(--theme-border)', backgroundColor: 'var(--theme-bg-secondary)' }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2
                className="text-3xl md:text-4xl font-semibold mb-6"
                style={{ color: 'var(--theme-text)' }}
              >
                Our Mission
              </h2>
              <p
                className="text-lg leading-relaxed mb-6"
                style={{ color: 'var(--theme-text-secondary)' }}
              >
                We believe in creating solutions that make a real difference for our clients.
                Our mission is to combine cutting-edge technology with thoughtful design to
                deliver products and services that exceed expectations.
              </p>
              <p
                className="text-lg leading-relaxed"
                style={{ color: 'var(--theme-text-secondary)' }}
              >
                Whether you&apos;re a startup or an established enterprise, we&apos;re here to help you
                navigate the digital landscape and achieve your business goals.
              </p>
            </div>
            <div
              className="rounded-lg p-8 border"
              style={{
                backgroundColor: 'var(--theme-bg-tertiary)',
                borderColor: 'var(--theme-border)',
              }}
            >
              <h3
                className="text-xl font-semibold mb-4"
                style={{ color: 'var(--theme-text)' }}
              >
                What We Do
              </h3>
              <ul className="space-y-3">
                {expertise.map((item) => (
                  <li key={item.area}>
                    <div
                      className="font-medium mb-1"
                      style={{ color: 'var(--theme-text)' }}
                    >
                      {item.area}
                    </div>
                    <div
                      className="text-sm"
                      style={{ color: 'var(--theme-text-secondary)' }}
                    >
                      {item.description}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Principles Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="text-3xl md:text-4xl font-semibold mb-4"
              style={{ color: 'var(--theme-text)' }}
            >
              How We Work
            </h2>
            <p
              className="text-lg max-w-2xl mx-auto"
              style={{ color: 'var(--theme-text-secondary)' }}
            >
              Our approach is grounded in these core principles that drive everything we build.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {principles.map((principle) => (
              <div
                key={principle.title}
                className="rounded-lg border p-8 hover:shadow-lg transition-shadow"
                style={{
                  backgroundColor: 'var(--theme-bg-tertiary)',
                  borderColor: 'var(--theme-border)',
                }}
              >
                <div className="text-4xl mb-4">{principle.icon}</div>
                <h3
                  className="text-xl font-semibold mb-3"
                  style={{ color: 'var(--theme-text)' }}
                >
                  {principle.title}
                </h3>
                <p
                  className="text-base leading-relaxed"
                  style={{ color: 'var(--theme-text-secondary)' }}
                >
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section
        id="team"
        className="py-16 md:py-24 border-y"
        style={{ borderColor: 'var(--theme-border)', backgroundColor: 'var(--theme-bg-secondary)' }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="text-3xl md:text-4xl font-semibold mb-4"
              style={{ color: 'var(--theme-text)' }}
            >
              Meet the Team
            </h2>
            <p
              className="text-lg max-w-2xl mx-auto"
              style={{ color: 'var(--theme-text-secondary)' }}
            >
              The people behind our innovative solutions and exceptional service.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="rounded-lg border p-8 md:p-12"
                style={{
                  backgroundColor: 'var(--theme-bg-tertiary)',
                  borderColor: 'var(--theme-border)',
                }}
              >
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  {/* Profile Avatar */}
                  <div className="flex-shrink-0">
                    <div
                      className="w-32 h-32 rounded-full flex items-center justify-center text-5xl font-bold"
                      style={{
                        background:
                          'linear-gradient(135deg, var(--theme-primary) 0%, var(--theme-accent) 100%)',
                        color: 'var(--theme-background)',
                      }}
                    >
                      {member.name
                        .split(' ')
                        .map((n) => n[0])
                        .join('')}
                    </div>
                  </div>

                  {/* Profile Info */}
                  <div className="flex-1">
                    <h3
                      className="text-2xl font-semibold mb-2"
                      style={{ color: 'var(--theme-text)' }}
                    >
                      {member.name}
                    </h3>
                    <p className="text-lg mb-2" style={{ color: 'var(--theme-primary)' }}>
                      {member.role}
                    </p>
                    <p className="text-sm mb-4" style={{ color: 'var(--theme-text-tertiary)' }}>
                      📍 {member.location}
                    </p>
                    <p
                      className="text-base leading-relaxed mb-6"
                      style={{ color: 'var(--theme-text-secondary)' }}
                    >
                      {member.bio}
                    </p>

                    {/* Social Links */}
                    <div className="flex gap-4">
                      <Link
                        href={member.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-opacity hover:opacity-70"
                        style={{ color: 'var(--theme-text-secondary)' }}
                        aria-label="LinkedIn"
                      >
                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                      </Link>
                      <Link
                        href={member.social.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-opacity hover:opacity-70"
                        style={{ color: 'var(--theme-text-secondary)' }}
                        aria-label="GitHub"
                      >
                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
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
                        className="transition-opacity hover:opacity-70"
                        style={{ color: 'var(--theme-text-secondary)' }}
                        aria-label="X (Twitter)"
                      >
                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-3xl md:text-4xl font-semibold mb-6"
            style={{ color: 'var(--theme-text)' }}
          >
            Let&apos;s Build Something Great
          </h2>
          <p
            className="text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed"
            style={{ color: 'var(--theme-text-secondary)' }}
          >
            Ready to take your business to the next level? We&apos;re here to help you build
            innovative solutions that drive real results and exceed your expectations.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 font-medium rounded-lg transition-all hover:opacity-90 hover:scale-105"
              style={{
                backgroundColor: 'var(--theme-primary)',
                color: 'var(--theme-background)',
              }}
            >
              Start a Conversation
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center justify-center px-8 py-4 border-2 font-medium rounded-lg transition-all hover:opacity-80"
              style={{
                borderColor: 'var(--theme-border)',
                color: 'var(--theme-text)',
              }}
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
