import { Link2, Mail, Phone } from 'lucide-react'
import styles from './ContactDetails.module.css'

/**
 * The clickable ways to reach Marsha directly — mailto/tel/external
 * links, using the same placeholder phone/LinkedIn already used
 * elsewhere on the site (TopBar, Footer).
 */
export function ContactDetails() {
  return (
    <ul className={styles.list}>
      <li>
        <a href="mailto:info@veinbeeld.nl" className={styles.link}>
          <Mail size={18} aria-hidden="true" />
          <span>info@veinbeeld.nl</span>
        </a>
      </li>
      <li>
        <a href="tel:+310000000000" className={styles.link}>
          <Phone size={18} aria-hidden="true" />
          <span>+31 6 00 00 00 00</span>
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/"
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
