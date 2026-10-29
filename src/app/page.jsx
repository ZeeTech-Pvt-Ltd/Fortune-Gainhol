import Hero from '@/sections/Hero'
import StatsBand from '@/sections/StatsBand'
import About from '@/sections/About'
import Assets from '@/sections/Assets'
import HowItWorks from '@/sections/HowItWorks'
import JoinCta from '@/sections/JoinCta'
import MarketTicker from '@/components/MarketTicker'
import Benefits from '@/sections/Benefits'
import Overview from '@/sections/Overview'
import Testimonials from '@/sections/Testimonials'
import Security from '@/sections/Security'
import Capabilities from '@/sections/Capabilities'
import FinalCta from '@/sections/FinalCta'
import FaqSection from '@/sections/FaqSection'
import { ServiceJsonLd, FinancialProductJsonLd } from '@/components/JsonLd'
import { SITE_URL } from '@/data/content'
import { pageMeta } from '@/app/seo'

export const metadata = pageMeta({
  title: 'Fortune Gainhol - AI-Powered Trading Platform | Now in Australia',
  description:
    'Fortune Gainhol is an AI-powered trading platform for Bitcoin, Ethereum and 300+ assets. Secure, simple and now available in Australia.',
  keywords:
    'Fortune Gainhol, AI trading platform, crypto trading Australia, buy Bitcoin Australia, Ethereum trading, cryptocurrency exchange Australia, crypto analytics',
  canonical: SITE_URL,
})

export default function HomePage() {
  return (
    <>
      <ServiceJsonLd />
      <FinancialProductJsonLd />
      <Hero />
      <StatsBand />
      <About pathname="/" />
      <Assets />
      <HowItWorks />
      <JoinCta />
      <MarketTicker />
      <Benefits />
      <Overview />
      <Testimonials />
      <Security />
      <Capabilities />
      <FinalCta pathname="/" />
      <FaqSection />
    </>
  )
}
