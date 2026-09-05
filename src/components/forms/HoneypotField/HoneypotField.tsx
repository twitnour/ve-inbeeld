import styles from './HoneypotField.module.css'

interface HoneypotFieldProps {
  value: string
  onChange: (value: string) => void
}

/**
 * A hidden spam trap: real visitors never see or reach it (off-screen,
 * aria-hidden, unfocusable, excluded from autofill), but simple bots
 * that blindly fill every field in a form will. The value travels in
 * the submission payload for the future server endpoint to check —
 * see formSubmission.ts. Uses a bot-tempting field name ("website")
 * rather than the site's real "organisatie" field.
 */
export function HoneypotField({ value, onChange }: HoneypotFieldProps) {
  return (
    <div className={styles.wrap} aria-hidden="true">
      <label htmlFor="website">Website</label>
      <input
        type="text"
        id="website"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
    </div>
  )
}
