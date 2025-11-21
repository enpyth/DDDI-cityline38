import Providers from '@/components/layout/providers';
import { Toaster } from '@/components/ui/sonner';
import { fontVariables } from '@/lib/font';
import ThemeProvider from '@/components/layout/ThemeToggle/theme-provider';
import { cn } from '@/lib/utils';
import type { Metadata, Viewport } from 'next';
import { cookies } from 'next/headers';
import NextTopLoader from 'nextjs-toploader';
import { NuqsAdapter } from 'nuqs/adapters/next/app';
import './globals.css';
import './theme.css';
import LayoutShell from '@/components/layout/layoutshell';
import AppClient from '@/components/layout/AppClient';

const META_THEME_COLORS = {
  light: '#ffffff',
  dark: '#09090b'
};

export const metadata: Metadata = {
  metadataBase: new URL('https://cityline38.com.au'), // Assuming .com.au based on location (Adelaide, SA)
  title: {
    default: 'Cityline 38 Adelaide',
    template: '%s | Cityline 38'
  },
  description: 'Cityline 38 offers modern 3-storey townhouses in Everard Park, Adelaide. Experience the perfect balance of urban energy and everyday calm. Register your interest today.',
  keywords: ['Cityline 38', 'Cityline 38 Adelaide', 'Cityline 38 Everard Park Real Estate'],
  authors: [{ name: 'Cityline 38' }],
  creator: 'Cityline 38',
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    url: 'https://cityline38.com.au',
    title: 'Cityline 38 | Modern Townhouses in Everard Park',
    description: 'Where urban energy meets everyday calm. Discover modern 3-storey townhouses in Everard Park, just 10 minutes from Adelaide CBD.',
    siteName: 'Cityline 38',
    images: [
      {
        url: '/imgs/05.jpg', // Using one of the hero images
        width: 1200,
        height: 630,
        alt: 'Cityline 38 Townhouses',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cityline 38 | Modern Townhouses in Everard Park',
    description: 'Where urban energy meets everyday calm. Discover modern 3-storey townhouses in Everard Park.',
    images: ['/imgs/05.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: META_THEME_COLORS.light
};

export default async function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const activeThemeValue = cookieStore.get('active_theme')?.value;
  const isScaled = activeThemeValue?.endsWith('-scaled');

  return (
    <html lang='en' suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.theme === 'dark' || ((!('theme' in localStorage) || localStorage.theme === 'system') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.querySelector('meta[name="theme-color"]').setAttribute('content', '${META_THEME_COLORS.dark}')
                }
              } catch (_) {}
            `
          }}
        />
      </head>
      <body
        className={cn(
          'bg-background font-sans antialiased overflow-x-hidden',
          activeThemeValue ? `theme-${activeThemeValue}` : '',
          isScaled ? 'theme-scaled' : '',
          fontVariables
        )}
      >
        <NextTopLoader showSpinner={false} />
        <NuqsAdapter>
          <ThemeProvider
            attribute='class'
            defaultTheme='system'
            enableSystem
            disableTransitionOnChange
            enableColorScheme
          >
            {/* <AppClient> */}
            <Providers>
              <LayoutShell>{children}</LayoutShell>
              {/* // </AppClient> */}
            </Providers>
            <Toaster />
          </ThemeProvider>
        </NuqsAdapter>
      </body>
    </html>
  );
}
