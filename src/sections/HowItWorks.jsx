import Icon from '../components/Icon'
import { STEPS } from '../data/content'

export default function HowItWorks() {
  return (
    <section className="section section--dark" id="how">
      <div className="container">
        <div className="section-head">
          <span className="kicker" data-reveal>
            {STEPS.kicker}
          </span>
          <h2 data-reveal>{STEPS.title}</h2>
        </div>

        <div className="steps-grid">
          {STEPS.steps.map((step, i) => (
            <div className="step-card" key={step.title} data-reveal style={{ transitionDelay: `${i * 80}ms` }}>
              <span className="step-card__icon">
                <Icon name={step.icon} size={26} strokeWidth={1.7} />
              </span>
              <div className="step-card__num">0{i + 1}</div>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
