import ComingSoon from '../components/ComingSoon'
import useMeta from '../hooks/useMeta'
import { SITE_URL } from '../data/content'

export default function Team() {
  useMeta({
    title: 'Our Team - The People Behind Fortune Gainhol',
    description: 'Meet the trading, engineering and support professionals behind Fortune Gainhol.',
    canonical: `${SITE_URL}team`,
  })

  return (
    <ComingSoon
      title="Our Team"
      description="Profiles of the traders, engineers and support professionals behind Fortune Gainhol are on the way."
    />
  )
}
