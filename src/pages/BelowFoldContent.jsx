// Everything below the hero on the homepage, in its own chunk. Loaded
// after the browser is idle so the entry bundle stays small and the
// first paint (FCP/LCP) isn't waiting on this code.

import { useEffect, useState } from 'react'
import About from '../sections/About'
import Assets from '../sections/Assets'
import HowItWorks from '../sections/HowItWorks'
import JoinCta from '../sections/JoinCta'
import MarketTicker from '../components/MarketTicker'
import Benefits from '../sections/Benefits'
import Overview from '../sections/Overview'
import Testimonials from '../sections/Testimonials'
import Security from '../sections/Security'
import Capabilities from '../sections/Capabilities'
import FinalCta from '../sections/FinalCta'
import FaqSection from '../sections/FaqSection'

// Mounts once the browser is idle, so the initial render stays light
// and the main thread is free for first paint + LCP.
export default function BelowFoldContent() {
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

  if (!show) return null

  return (
    <>
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
    </>
  )
}
