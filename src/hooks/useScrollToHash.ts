import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Scrolls to the element matching the current URL's hash once this
 * page has rendered. Needed for a cross-page link like "/#aanbod":
 * on a client-rendered SPA the target element doesn't exist yet at
 * the moment a browser normally attempts its native hash-scroll, and
 * some browsers then retry that native attempt later on their own —
 * racing against a single scrollIntoView call here and sometimes
 * winning with a stale position. Re-asserting the scroll a few times
 * lets the last, correctly-timed call win.
 */
export function useScrollToHash() {
  const { hash } = useLocation()

  useEffect(() => {
    if (!hash) return

    const id = hash.slice(1)
    const scrollToTarget = () => document.getElementById(id)?.scrollIntoView()

    const timeouts = [0, 150, 400, 800].map((delay) => window.setTimeout(scrollToTarget, delay))

    return () => timeouts.forEach((timeout) => window.clearTimeout(timeout))
  }, [hash])
}
