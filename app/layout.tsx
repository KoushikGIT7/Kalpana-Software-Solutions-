import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/providers/ThemeProvider'
import { CookieConsent } from '@/components/ui/CookieConsent'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { ScrollProgressBar } from '@/components/ui/ScrollProgressBar'
import { ScrollToTop } from '@/components/ui/ScrollToTop'
import { FloatingWhatsApp } from '@/components/ui/FloatingWhatsApp'
import { KalpanaAIChat } from '@/components/ui/KalpanaAIChat'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
  weight: ['400', '500', '600'],
})

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://kalpana-software.vercel.app'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Kalpanaaaa Software Solutions - Enterprise Automation & Engineering',
    template: '%s | Kalpanaaaa Software Solutions',
  },
  description:
    'Bespoke engineering partner providing full-lifecycle IT automation and software solutions.',
  keywords: [
    'software development company India',
    'enterprise software engineering',
    'full-stack development',
    'React Next.js development',
    'cloud infrastructure DevOps',
    'QA automation',
    'government software',
    'healthcare software',
  ],
  authors: [{ name: 'Kalpana Software Solutions' }],
  creator: 'Kalpana Software Solutions',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'Kalpana Software Solutions',
    title: 'Kalpana Software Solutions — Bespoke Engineering Partner',
    description:
      'Production-grade software engineering for government, healthcare, finance, and education. 100+ projects delivered. Founder-led delivery.',
    images: [
      {
        url: '/images/og/homepage.png',
        width: 1200,
        height: 630,
        alt: 'Kalpana Software Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kalpana Software Solutions — Bespoke Engineering Partner',
    description:
      'Production-grade software engineering for government, healthcare, finance, and education.',
    images: ['/images/og/homepage.png'],
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
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: 'var(--bg)' },
    { media: '(prefers-color-scheme: light)', color: '#FFFFFF' },
  ],
  colorScheme: 'dark light',
  width: 'device-width',
  initialScale: 1,
}

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Kalpana Software Solutions',
  url: siteUrl,
  logo: `${siteUrl}/images/logo/logo_full.png`,
  description:
    'Bespoke software engineering for enterprise clients in government, healthcare, finance, and education.',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'IN',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    availableLanguage: 'English',
  },
}

/**
 * Anti-FOUC theme init script.
 * Runs synchronously before the first paint.
 * Uses the same storageKey as next-themes ('kss-theme').
 * Also detects system preference when no stored value exists.
 */
const themeInitScript = `(function(){try{var s=localStorage.getItem('kss-theme');if(s==='dark'){document.documentElement.classList.add('dark')}else if(!s&&window.matchMedia('(prefers-color-scheme: dark)').matches){document.documentElement.classList.add('dark')}else{document.documentElement.classList.remove('dark')}}catch(e){}})();`

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>): React.ReactElement {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable}`}
      // suppressHydrationWarning prevents Next.js hydration mismatch warning
      // caused by the theme class being set by the inline script before hydration
      suppressHydrationWarning
    >
      <head>
        {/* Anti-FOUC: must be first in <head>, runs before any CSS paint */}
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body
        className="font-sans antialiased overflow-x-hidden overflow-x-clip w-full relative"
        style={{
          fontFamily: 'var(--font-inter), var(--font-sans)',
          background: 'var(--bg)',
          color: 'var(--text-primary)',
        }}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          storageKey="kss-theme"
          disableTransitionOnChange={false}
        >
          <ScrollToTop />
          <ScrollProgressBar />
          <Header />
          {children}
          {/* StickyMobileCTA removed */}
          <FloatingWhatsApp />
          <KalpanaAIChat />
          <CookieConsent />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
