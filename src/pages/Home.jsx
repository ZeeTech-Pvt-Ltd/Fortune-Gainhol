import { useEffect, useState } from 'react'
import useMeta from '../hooks/useMeta'
import { SITE_URL } from '../data/content'

import Hero from '../sections/Hero'
import StatsBand from '../sections/StatsBand'
import MarketTicker from '../components/MarketTicker'
import About from '../sections/About'
import Assets from '../sections/Assets'
import HowItWorks from '../sections/HowItWorks'
import JoinCta from '../sections/JoinCta'
import Benefits from '../sections/Benefits'
import Overview from '../sections/Overview'
import Testimonials from '../sections/Testimonials'
import Security from '../sections/Security'
import Capabilities from '../sections/Capabilities'
import FinalCta from '../sections/FinalCta'
import FaqSection from '../sections/FaqSection'

// Mounts below-the-fold content once the browser is idle, so the initial
// render stays light and the main thread is free for first paint + LCP.
function BelowTheFold({ children }) {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const schedule = () => setShow(true)
    const id = window.requestIdleCallback
      ? window.requestIdleCallback(schedule, { timeout: 1500 })
      : window.setTimeout(schedule, 600)
    return () => (window.requestIdleCallback ? window.cancelIdleCallback(id) : window.clearTimeout(id))
  }, [])

  useEffect(() => {
    if (show) window.dispatchEvent(new Event('reveal:rescan'))
  }, [show])

  return show ? children : null
}

export default function Home() {
  useMeta({
    title: 'Fortune Gainhol - AI-Powered Trading Platform | Now in the United States',
    description:
      'Fortune Gainhol is an AI-powered trading platform for Bitcoin, Ethereum and 300+ assets. Secure, simple and now available in the United States.',
    keywords:
      'Fortune Gainhol, AI trading platform, crypto trading United States, buy Bitcoin USA, Ethereum trading, cryptocurrency exchange USA, crypto analytics',
    canonical: SITE_URL,
  })

  return (
    <>
      <Hero />
      <StatsBand />
      {/* Everything below the fold mounts once the browser is idle */}
      <BelowTheFold>
        <About />
        <Assets />
        <HowItWorks />
        <JoinCta />
        <MarketTicker />
        <Benefits />
        <Overview />
        <Testimonials />
        <Security />
        <Capabilities />
        <FinalCta />
        <FaqSection />
      </BelowTheFold>
    </>
  )
}
