import Link from 'next/link'
import Icon from '@/components/Icon'
import { SITE_URL } from '@/data/content'
import { pageMeta } from '@/app/seo'

export const metadata = pageMeta({
  title: 'Thank You - Your Fortune Gainhol Registration Is Received',
  description: 'Your Fortune Gainhol registration has been received. Our team will contact you shortly.',
  robots: 'noindex, nofollow',
  canonical: `${SITE_URL}thank-you`,
})

export default function ThankYou() {

  return (
    <section className="centered-page">
      <div className="container">
        <div className="centered-page__icon" data-reveal>
          <Icon name="check" size={38} strokeWidth={2.6} />
        </div>
        <h1 data-reveal>Thank You!</h1>
        <p data-reveal>
          Your registration has been received. Our team will contact you shortly to activate your
          Fortune Gainhol account and guide you through your first trade.
        </p>
        <div data-reveal style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link className="btn btn--gold" href="/">
            Back to home
          </Link>
          <Link className="btn btn--ghost" href="/faq">
            Read the FAQ
          </Link>
        </div>
      </div>
    </section>
  )
}
