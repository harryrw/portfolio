import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';
import './globals.css';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { siteConfig } from '@/data/site';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.title,
  authors: [{ name: siteConfig.name, url: siteConfig.siteUrl }],
  creator: siteConfig.name,
  keywords: [
    'Software Engineering',
    'Distributed Systems',
    'Next.js',
    'TypeScript',
    'Tailwind CSS',
    'Architecture',
    'Productions',
    'Consumptions',
  ],
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/toucan.png', type: 'image/png' },
    ],
    shortcut: '/icon.svg',
    apple: '/toucan.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.siteUrl,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: `${siteConfig.name} Portfolio, Productions & Consumptions`,
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    creator: siteConfig.twitterHandle,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="color-scheme" content="light dark" />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var m=window.matchMedia('(prefers-color-scheme: dark)');var s=localStorage.getItem('color-scheme');var d=s?s==='dark':m.matches;if(d){document.documentElement.classList.add('dark');}else{document.documentElement.classList.remove('dark');}}catch(e){}})();`,
          }}
        />
      </head>
      <body className="flex min-h-screen flex-col bg-zinc-50 text-zinc-900 antialiased selection:bg-emerald-100 selection:text-emerald-900 transition-colors dark:bg-zinc-950 dark:text-zinc-100 dark:selection:bg-emerald-900/60 dark:selection:text-emerald-200">
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-md focus:bg-emerald-600 focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-white focus:shadow-md"
        >
          {siteConfig.skipLinkLabel}
        </a>
        <Header />
        <main
          id="content"
          tabIndex={-1}
          className="mx-auto w-full max-w-5xl flex-1 px-4 py-10 sm:px-6 lg:px-8 focus:outline-none"
        >
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
