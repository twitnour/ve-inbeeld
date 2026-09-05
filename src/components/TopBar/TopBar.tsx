import { Link2, Mail, Phone } from 'lucide-react'
import { businessInfo } from '../../lib/businessInfo'
import styles from './TopBar.module.css'

/**
 * Narrow utility bar above the header with contact details — see
 * src/lib/businessInfo.ts for where the actual values come from.
 * Uses --color-secondary as background — a warm, muted brand tone that
 * still keeps 7:1+ contrast with --color-text, so it reads as an
 * integrated brand element rather than a dark corporate utility strip.
 */
export function TopBar() {
  return (
    <div className={styles.topBar}>
      <div className={styles.inner}>
        <div className={styles.contactGroup}>
          <a href={businessInfo.phoneHref} className={styles.contactLink}>
            <Phone size={14} aria-hidden="true" />
            <span className={styles.label}>{businessInfo.phoneNumber}</span>
          </a>
          <a href={`mailto:${businessInfo.contactEmail}`} className={styles.contactLink}>
            <Mail size={14} aria-hidden="true" />
            <span className={styles.label}>{businessInfo.contactEmail}</span>
          </a>
        </div>
        <a
          href={businessInfo.linkedinUrl}
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
