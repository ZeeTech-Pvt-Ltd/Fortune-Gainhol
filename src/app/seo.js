import { SITE_URL } from '@/data/content'

const OG_IMAGE = `${SITE_URL}og-image.png` // matches useMeta's og-image fallback

/**
 * Builds page metadata with the same shape the old useMeta hook produced:
 * title/description mirrored into OG/Twitter, canonical → og:url, and the
 * default og:image. Omitted keywords/robots simply don't render (the old
 * hook wrote an empty keywords tag - omitting is strictly better).
 */
export function pageMeta({ title, description, keywords, robots, canonical }) {
  return {
    title,
    description,
    ...(keywords ? { keywords } : {}),
    ...(robots ? { robots } : {}),
    alternates: { canonical },
    openGraph: { title, description, url: canonical, type: 'website', images: [OG_IMAGE] },
    twitter: { card: 'summary_large_image', title, description, images: [OG_IMAGE] },
  }
}
