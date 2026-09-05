import type { ReactNode } from 'react'
import { AlertCircle } from 'lucide-react'
import styles from './FormField.module.css'

interface FormFieldProps {
  label: string
  htmlFor: string
  required?: boolean
  error?: string
  hint?: string
  children: ReactNode
}

/**
 * Layout primitive for one form field: a real associated <label>, the
 * control itself, and an optional hint or error message underneath.
 * Optional fields are marked "(optioneel)" in the label rather than
 * marking required ones, so nothing depends on a lone asterisk.
 * Errors are never color-only — they carry an icon and a Dutch
 * sentence. Used by TextInput and SelectField, not directly.
 */
export function FormField({ label, htmlFor, required, error, hint, children }: FormFieldProps) {
  return (
    <div className={styles.field}>
      <label htmlFor={htmlFor} className={styles.label}>
        {label}
        {!required && <span className={styles.optional}> (optioneel)</span>}
      </label>
      {children}
      {hint && !error && (
        <p id={`${htmlFor}-hint`} className={styles.hint}>
          {hint}
        </p>
      )}
      {error && (
        <p id={`${htmlFor}-error`} className={styles.error}>
          <AlertCircle size={14} aria-hidden="true" className={styles.errorIcon} />
          <span>{error}</span>
        </p>
      )}
    </div>
  )
}
