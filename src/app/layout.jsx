import '../styles/global.css'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ScrollToTop from '@/components/ScrollToTop'
import { SITE_NAME, SITE_URL, SUPPORT_EMAIL } from '@/data/content'

// Self-hosted Inter; display=optional preserves the current no-CLS
// guarantee (no swap after first paint on slow connections).
const inter = Inter({
  subsets: ['latin'],
  display: 'optional',
  variable: '--font-inter',
})

const DEFAULT_TITLE = 'Fortune Gainhol - AI-Powered Trading Platform | Now in Australia'
const DEFAULT_DESC =
  'Fortune Gainhol is an AI-powered trading platform for Bitcoin, Ethereum and 300+ assets. Secure, simple and now available in Australia.'

export const metadata = {
  metadataBase: new URL(SITE_URL),
  // Pages export absolute titles, so no template is applied - titles stay
  // byte-identical to the Vite site.
  title: { default: DEFAULT_TITLE },
  description: DEFAULT_DESC,
  keywords:
    'Fortune Gainhol, AI trading platform, crypto trading Australia, buy Bitcoin Australia, Ethereum trading, cryptocurrency exchange Australia, crypto analytics',
  verification: { google: 'h0XsDnqF75fh5gHnOrm-stw4Vbl0NQMt9jjMdyFMr8c' },
  icons: { icon: '/favicon.svg' },
  openGraph: {
    type: 'website',
    siteName: SITE_NAME,
    title: 'Fortune Gainhol - AI-Powered Trading Platform',
    description: DEFAULT_DESC,
    url: SITE_URL,
    images: ['/og-image.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fortune Gainhol - AI-Powered Trading Platform',
    description: DEFAULT_DESC,
    images: ['/og-image.png'],
  },
}

export const viewport = { themeColor: '#0d2c22' }

const ORG_JSON_LD = JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}favicon.svg`,
  contactPoint: {
    '@type': 'ContactPoint',
    email: SUPPORT_EMAIL,
    contactType: 'customer support',
    availableLanguage: ['English'],
  },
})

const GTAG_ID = 'G-PE28G7GLNT'

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <ScrollToTop />
        <Header />
        <main>{children}</main>
        <Footer />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: ORG_JSON_LD }} />
        <Script
          id="gtag-src"
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${GTAG_ID}`}
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', '${GTAG_ID}');`,
          }}
        />
      </body>
    </html>
  )
}
