import ComingSoon from '../components/ComingSoon'
import useMeta from '../hooks/useMeta'
import { SITE_URL } from '../data/content'

export default function Offer() {
  useMeta({
    title: 'Offer - What You Get with Fortune Gainhol',
    description: 'See what is included with a Fortune Gainhol account: AI signals, education, 24/7 support and more.',
    canonical: `${SITE_URL}offer`,
  })

  return (
    <ComingSoon
      title="The Fortune Gainhol Offer"
      description="The full breakdown of what every Fortune Gainhol account includes is coming in the next iteration."
    />
  )
}
