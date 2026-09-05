import { Link2, Mail, Phone } from 'lucide-react'
import { businessInfo } from '../../lib/businessInfo'
import styles from './ContactDetails.module.css'

/**
 * The clickable ways to reach Marsha directly — mailto/tel/external
 * links; see src/lib/businessInfo.ts for where the values come from
 * (the same source TopBar and Footer read from).
 */
export function ContactDetails() {
  return (
    <ul className={styles.list}>
      <li>
        <a href={`mailto:${businessInfo.contactEmail}`} className={styles.link}>
          <Mail size={18} aria-hidden="true" />
          <span>{businessInfo.contactEmail}</span>
        </a>
      </li>
      <li>
        <a href={businessInfo.phoneHref} className={styles.link}>
          <Phone size={18} aria-hidden="true" />
          <span>{businessInfo.phoneNumber}</span>
        </a>
      </li>
      <li>
        <a
          href={businessInfo.linkedinUrl}
          target="_blank"
          rel="noreferrer noopener"
          className={styles.link}
          aria-label="VE in Beeld op LinkedIn (opent in nieuw tabblad)"
        >
          <Link2 size={18} aria-hidden="true" />
          <span>LinkedIn</span>
        </a>
      </li>
    </ul>
  )
}
