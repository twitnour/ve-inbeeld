import { Link2, Mail, Phone } from 'lucide-react'
import styles from './TopBar.module.css'

/**
 * Narrow utility bar above the header with placeholder contact details.
 * Uses --color-secondary as background — a warm, muted brand tone that
 * still keeps 7:1+ contrast with --color-text, so it reads as an
 * integrated brand element rather than a dark corporate utility strip.
 */
export function TopBar() {
  return (
    <div className={styles.topBar}>
      <div className={styles.inner}>
        <div className={styles.contactGroup}>
          <a href="tel:+310000000000" className={styles.contactLink}>
            <Phone size={14} aria-hidden="true" />
            <span className={styles.label}>+31 6 00 00 00 00</span>
          </a>
          <a href="mailto:info@veinbeeld.nl" className={styles.contactLink}>
            <Mail size={14} aria-hidden="true" />
            <span className={styles.label}>info@veinbeeld.nl</span>
          </a>
        </div>
        <a
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noreferrer noopener"
          className={styles.contactLink}
          aria-label="VE in Beeld op LinkedIn (opent in nieuw tabblad)"
        >
          <Link2 size={14} aria-hidden="true" />
          <span className={styles.label}>LinkedIn</span>
        </a>
      </div>
    </div>
  )
}
