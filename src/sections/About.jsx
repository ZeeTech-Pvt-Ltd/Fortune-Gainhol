import { Link, useLocation } from 'react-router-dom'
import Icon from '../components/Icon'
import { DashboardArt } from '../components/Art'
import { ABOUT } from '../data/content'

export default function About() {
  const { pathname } = useLocation()
  // On the homepage this scrolls to the #register form; elsewhere it routes.
  const ctaLink = pathname === '/' ? { href: '#register' } : { to: '/sign-up' }
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about__copy">
            <span className="kicker kicker--chip" data-reveal>
              {ABOUT.kicker}
            </span>
            <h2 data-reveal>{ABOUT.title}</h2>
            <p data-reveal>{ABOUT.text}</p>
            <ul className="about__points">
              {ABOUT.points.map((point) => (
                <li key={point} data-reveal>
                  <span className="point-mark">
                    <Icon name="check" size={15} strokeWidth={3} />
                  </span>
                  {point}
                </li>
              ))}
            </ul>
            <div data-reveal>
              {ctaLink.to ? (
                <Link className="btn btn--pine" to={ctaLink.to}>
                  Get started
                  <Icon name="arrow-right" size={18} />
                </Link>
              ) : (
                <a className="btn btn--pine" href={ctaLink.href}>
                  Get started
                  <Icon name="arrow-right" size={18} />
                </a>
              )}
            </div>
          </div>

          <div className="about__art" data-reveal>
            <DashboardArt />
          </div>
        </div>
      </div>
    </section>
  )
}
