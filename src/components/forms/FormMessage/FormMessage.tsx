import type { ReactNode } from 'react'
import { AlertCircle, CheckCircle2 } from 'lucide-react'
import styles from './FormMessage.module.css'

interface FormMessageProps {
  tone: 'success' | 'error'
  children: ReactNode
}

/**
 * A success or error banner for a form's outcome. Distinguished by
 * icon and copy, not color alone — both stay within the brand palette
 * (no red/green), so "success" and "error" read from the icon and the
 * message text, with role="status"/"alert" for assistive tech.
 */
export function FormMessage({ tone, children }: FormMessageProps) {
  const Icon = tone === 'success' ? CheckCircle2 : AlertCircle

  return (
    <div
      className={`${styles.message} ${styles[tone]}`}
      role={tone === 'error' ? 'alert' : 'status'}
    >
      <Icon size={20} aria-hidden="true" className={styles.icon} />
      <p className={styles.text}>{children}</p>
    </div>
  )
}
