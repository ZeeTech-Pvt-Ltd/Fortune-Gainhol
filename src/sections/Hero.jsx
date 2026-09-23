import Icon from '../components/Icon'
import RegistrationForm from '../components/RegistrationForm'
import { HERO } from '../data/content'

const TRUST_ICONS = { 0: 'lock', 1: 'shield', 2: 'headset' }

export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-grid">
          <div>
            {/* Above-the-fold elements render instantly (no reveal fade):
                the animation would delay FCP/LCP on mobile. */}
            <div className="hero-badge">
              <span className="hero-badge__dot">
                <Icon name="sparkle" size={13} filled />
                New
              </span>
              {HERO.badge}
            </div>

            <h1>
              {HERO.title[0]} <span className="hl">{HERO.title[1]}</span> {HERO.title[2]}
            </h1>

            <p className="hero__lead">
              {HERO.lead}
            </p>

            <div className="hero__trust">
              {HERO.trust.map((item, i) => (
                <span key={item}>
                  <Icon name={TRUST_ICONS[i]} size={16} />
                  {item}
                </span>
              ))}
            </div>
          </div>

          <RegistrationForm idPrefix="hero" title={HERO.formTitle} subtitle={HERO.formSubtitle} />
        </div>
      </div>
    </section>
  )
}
