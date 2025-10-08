import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/lib/themes/ThemeProvider';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'YourCompany - Modern Business Template',
    template: '%s | YourCompany',
  },
  description:
    'A professional Next.js 15 starter template for building modern portfolios, blogs, and business websites. Built with TypeScript, Tailwind CSS, and MDX.',
  openGraph: {
    title: 'YourCompany - Modern Business Template',
    description:
      'A professional Next.js starter template for portfolios, blogs, and business websites.',
    type: 'website',
    locale: 'en_US',
    siteName: 'YourCompany',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'YourCompany - Modern Business Template',
    description:
      'A professional Next.js starter template for portfolios, blogs, and business websites.',
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
        <ThemeProvider>
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
