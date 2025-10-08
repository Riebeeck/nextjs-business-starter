import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  // TODO: Update this URL with your actual domain before deploying
  // Example: const baseUrl = 'https://yourdomain.com';
  const baseUrl = 'https://yourdomain.com';

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/_next/'],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
