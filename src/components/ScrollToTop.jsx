'use client'
import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

/**
 * Scrolls to the top on every route change - same behavior as the
 * old SPA (instant, overriding the CSS smooth scroll for the reset).
 * Anchor clicks (#register, #faq) don't change the pathname, so the
 * native smooth anchor scrolling is untouched.
 */
export default function ScrollToTop() {
  const pathname = usePathname()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])

  return null
}
