import ComingSoon from '@/components/ComingSoon'
import { SITE_URL } from '@/data/content'
import { pageMeta } from '@/app/seo'

export const metadata = pageMeta({
  title: 'Offer - What You Get with Fortune Gainhol',
  description: 'See what is included with a Fortune Gainhol account: AI signals, education, 24/7 support and more.',
  canonical: `${SITE_URL}offer`,
})

export default function Offer() {

  return (
    <ComingSoon
      title="The Fortune Gainhol Offer"
      description="The full breakdown of what every Fortune Gainhol account includes is coming in the next iteration."
    />
  )
}
