import { useEffect, useRef, useState, type ReactNode } from 'react'
import styles from './Reveal.module.css'

interface RevealProps {
  children: ReactNode
  className?: string
}

/**
 * Gently fades and lifts its children into view the first time they
 * scroll into the viewport. Renders already-visible immediately when
 * the browser reports prefers-reduced-motion (the global reduced-motion
 * rule also collapses the transition itself, as a second safeguard).
 */
export function Reveal({ children, className }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  // Reduced motion is resolved once, up front, so it never needs a
  // setState-in-effect — the observer effect below simply doesn't run.
  const [visible, setVisible] = useState(
    () => window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  )

  useEffect(() => {
    if (visible) return

    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { rootMargin: '0px 0px -60px 0px' },
    )
    observer.observe(node)

    return () => observer.disconnect()
  }, [visible])

  const classNames = [styles.reveal, visible && styles.visible, className].filter(Boolean).join(' ')

  return (
    <div ref={ref} className={classNames}>
      {children}
    </div>
  )
}
