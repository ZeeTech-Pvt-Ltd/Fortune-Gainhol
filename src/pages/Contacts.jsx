import { Link } from 'react-router-dom'
import Icon from '../components/Icon'
import RegistrationForm from '../components/RegistrationForm'
import useMeta from '../hooks/useMeta'
import { BreadcrumbJsonLd } from '../components/JsonLd'
import { SITE_URL, SUPPORT_EMAIL, HERO } from '../data/content'

const CONTACT_CARDS = [
  {
    icon: 'mail',
    title: 'Email us',
    text: `Write to ${SUPPORT_EMAIL} - we reply within one business day.`,
    href: `mailto:${SUPPORT_EMAIL}`,
  },
  {
    icon: 'clock',
    title: 'Support hours',
    text: 'Our professional support team is available 24 hours a day, 7 days a week.',
  },
  {
    icon: 'headset',
    title: 'Dedicated account manager',
    text: 'Every Fortune Gainhol client gets a personal manager to guide their first trades.',
  },
  {
    icon: 'globe',
    title: 'Availability',
    text: 'Fortune Gainhol is now available in Australia, with more regions coming soon.',
  },
]

export default function Contacts() {
  useMeta({
    title: 'Contact Us - Get in Touch with the Fortune Gainhol Team',
    description:
      'Contact the Fortune Gainhol team - support is available 24/7 by email, with a dedicated account manager for every client.',
    keywords: 'contact Fortune Gainhol, crypto trading support Australia, Fortune Gainhol help, 24/7 trading support',
    canonical: `${SITE_URL}contact-us`,
  })

  return (
    <>
      <BreadcrumbJsonLd items={[{ name: 'Contact Us', slug: 'contact-us' }]} />
      <section className="page-hero">
        <div className="container">
          <h1 data-reveal>Contact Us</h1>
          <p data-reveal>
            Questions about your account, deposits or trading? The Fortune Gainhol team is here for
            you around the clock.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="card-grid contact-grid">
            {CONTACT_CARDS.map((card, i) => (
              <div className="card" key={card.title} data-reveal style={{ transitionDelay: `${i * 60}ms` }}>
                <span className="card__icon">
                  <Icon name={card.icon} size={24} strokeWidth={1.9} />
                </span>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
                {card.href && (
                  <a
                    href={card.href}
                    style={{ display: 'inline-block', marginTop: 14, fontWeight: 600 }}
                  >
                    {SUPPORT_EMAIL}
                  </a>
                )}
              </div>
            ))}
          </div>

          <p data-reveal style={{ textAlign: 'center', marginTop: 40, color: 'var(--muted)' }}>
            Ready to start?{' '}
            <Link to="/sign-up" style={{ fontWeight: 600 }}>
              Create your free account
            </Link>{' '}
            or check the <Link to="/faq" style={{ fontWeight: 600 }}>FAQ</Link>.
          </p>
        </div>
      </section>

      <section className="section section--cream">
        <div className="container">
          <div className="join-grid">
            <div className="join__copy">
              <span className="kicker" data-reveal>
                Get started
              </span>
              <h2 data-reveal>Register and a manager will reach out to you</h2>
              <p data-reveal>
                Fill in the form and one of our account managers will contact you shortly to
                activate your account and answer any questions you have - no obligation, no
                pressure.
              </p>
              <ul className="join__points">
                <li data-reveal>
                  <span className="point-mark">
                    <Icon name="check" size={15} strokeWidth={3} />
                  </span>
                  Free registration - cancel anytime
                </li>
                <li data-reveal>
                  <span className="point-mark">
                    <Icon name="check" size={15} strokeWidth={3} />
                  </span>
                  A dedicated manager replies within one business day
                </li>
                <li data-reveal>
                  <span className="point-mark">
                    <Icon name="check" size={15} strokeWidth={3} />
                  </span>
                  Your data is protected with 256-bit SSL encryption
                </li>
              </ul>
            </div>

            <RegistrationForm idPrefix="contact" title={HERO.formTitle} subtitle={HERO.formSubtitle} />
          </div>
        </div>
      </section>
    </>
  )
}
