import { lazy, Suspense, useEffect, useState } from 'react'
import useMeta from '../hooks/useMeta'
import { ServiceJsonLd } from '../components/JsonLd'
import { SITE_URL } from '../data/content'

import Hero from '../sections/Hero'
import StatsBand from '../sections/StatsBand'

// Below-the-fold sections live in their own chunk, fetched only after
// the browser is idle - keeps the entry bundle small for first paint.
const BelowFoldContent = lazy(() => import('./BelowFoldContent'))

function BelowTheFold() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const schedule = () => setShow(true)
    const id = window.requestIdleCallback
      ? window.requestIdleCallback(schedule, { timeout: 1500 })
      : window.setTimeout(schedule, 600)
    return () => (window.requestIdleCallback ? window.cancelIdleCallback(id) : window.clearTimeout(id))
  }, [])

  // No fallback UI: the hero + stats render instantly either way.
  return show ? (
    <Suspense fallback={null}>
      <BelowFoldContent />
    </Suspense>
  ) : null
}

export default function Home() {
  useMeta({
    title: 'Fortune Gainhol - AI-Powered Trading Platform | Now in Australia',
    description:
      'Fortune Gainhol is an AI-powered trading platform for Bitcoin, Ethereum and 300+ assets. Secure, simple and now available in Australia.',
    keywords:
      'Fortune Gainhol, AI trading platform, crypto trading Australia, buy Bitcoin Australia, Ethereum trading, cryptocurrency exchange Australia, crypto analytics',
    canonical: SITE_URL,
  })

  return (
    <>
      <ServiceJsonLd />
      <Hero />
      <StatsBand />
      <BelowTheFold />
    </>
  )
}
