import { Mail, Phone } from 'lucide-react'
import styles from './TopBar.module.css'

/**
 * Thin utility bar above the main header. Placeholder contact details
 * for now — content and visibility (e.g. hide on mobile) can be
 * refined during page design.
 */
export function TopBar() {
  return (
    <div className={styles.topBar}>
      <div className={styles.inner}>
        <a href="mailto:info@veinbeeld.nl" className={styles.contactLink}>
          <Mail size={14} aria-hidden="true" />
          <span>info@veinbeeld.nl</span>
        </a>
        <a href="tel:+310000000000" className={styles.contactLink}>
          <Phone size={14} aria-hidden="true" />
          <span>+31 6 00 00 00 00</span>
        </a>
      </div>
    </div>
  )
}
