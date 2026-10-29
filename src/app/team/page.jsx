import ComingSoon from '@/components/ComingSoon'
import { SITE_URL } from '@/data/content'
import { pageMeta } from '@/app/seo'

export const metadata = pageMeta({
  title: 'Our Team - The People Behind Fortune Gainhol',
  description: 'Meet the trading, engineering and support professionals behind Fortune Gainhol.',
  canonical: `${SITE_URL}team`,
})

export default function Team() {

  return (
    <ComingSoon
      title="Our Team"
      description="Profiles of the traders, engineers and support professionals behind Fortune Gainhol are on the way."
    />
  )
}
