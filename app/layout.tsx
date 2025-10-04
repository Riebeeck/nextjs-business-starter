import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import ThemeProvider from '@/components/ThemeProvider';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Studio - Modern Portfolio & Content Platform',
    template: '%s | Studio',
  },
  description:
    'A clean, minimalist platform for showcasing work, writing, and digital products. Built with Next.js, TypeScript, and Tailwind CSS.',
  openGraph: {
    title: 'Studio - Modern Portfolio & Content Platform',
    description:
      'A clean, minimalist platform for showcasing work, writing, and digital products.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Studio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Studio - Modern Portfolio & Content Platform',
    description:
      'A clean, minimalist platform for showcasing work, writing, and digital products.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
