import { SITE_URL, SITE_NAME, RATING } from '../data/content'

// Inline JSON-LD blocks for crawlers. Rendered directly in the page so
// they exist in the DOM without extra lifecycle code.
export function BreadcrumbJsonLd({ items }) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      ...items.map((item, i) => ({
        '@type': 'ListItem',
        position: i + 2,
        name: item.name,
        item: `${SITE_URL}${item.slug}`,
      })),
    ],
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
}

export function FaqJsonLd({ faqs }) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
}

// The trading platform described as a Service, with the site's rating.
export function ServiceJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'AI-powered trading platform',
    name: SITE_NAME,
    url: SITE_URL,
    description:
      'AI-powered trading platform for Bitcoin, Ethereum and 300+ assets with 256-bit encryption and 98% cold storage.',
    provider: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
    areaServed: { '@type': 'Country', name: 'Australia' },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: RATING.score,
      reviewCount: RATING.meta.match(/\d+/)?.[0] || '0',
      bestRating: '5',
    },
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'AUD',
      description: 'Free account registration',
    },
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
}

// Product page: the platform as a finance application.
export function SoftwareApplicationJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: SITE_NAME,
    url: SITE_URL,
    applicationCategory: 'FinanceApplication',
    operatingSystem: 'Web, Android, iOS',
    description:
      'Trade Bitcoin, Ethereum and 300+ assets with AI-driven analytics, portfolio tracking and bank-grade security.',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: RATING.score,
      reviewCount: RATING.meta.match(/\d+/)?.[0] || '0',
      bestRating: '5',
    },
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'AUD' },
    provider: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
}
