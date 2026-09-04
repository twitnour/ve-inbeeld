import { useEffect, useState } from 'react'

/** Scroll distance (px) past which the header switches to its compact,
 *  logo-hidden state. Small enough to trigger almost immediately, large
 *  enough that normal scroll jitter (e.g. iOS overscroll bounce) at the
 *  very top of the page doesn't flicker the state. */
const SCROLL_THRESHOLD = 24

/**
 * Tracks whether the page has scrolled past a small threshold — drives
 * the Header's sticky "compact" state (shrunk padding, hidden logo).
 * Uses a passive scroll listener and throttles the resulting state
 * check to once per animation frame, since scroll fires far more often
 * than the page can usefully repaint.
 */
export function useIsScrolled(threshold: number = SCROLL_THRESHOLD): boolean {
  const [isScrolled, setIsScrolled] = useState(() => window.scrollY > threshold)

  useEffect(() => {
    let ticking = false

    const checkScroll = () => {
      setIsScrolled(window.scrollY > threshold)
      ticking = false
    }

    const onScroll = () => {
      if (ticking) return
      ticking = true
      window.requestAnimationFrame(checkScroll)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [threshold])

  return isScrolled
}
