import type { ChangeEvent } from 'react'
import { FormField } from '../FormField/FormField'
import styles from './TextInput.module.css'

interface SharedProps {
  id: string
  name: string
  label: string
  value: string
  onChange: (value: string) => void
  onBlur?: () => void
  required?: boolean
  error?: string
  hint?: string
  placeholder?: string
  autoComplete?: string
}

interface SingleLineProps extends SharedProps {
  multiline?: false
  type?: 'text' | 'email' | 'tel'
  inputMode?: 'text' | 'numeric' | 'tel' | 'email'
}

interface MultilineProps extends SharedProps {
  multiline: true
}

type TextInputProps = SingleLineProps | MultilineProps

/**
 * A single-line input or a textarea (pass `multiline`), sharing one
 * FormField layout and one visual style. The only reusable text
 * control in the form system — no separate TextArea component, since
 * the two only differ by which native element they render.
 */
export function TextInput(props: TextInputProps) {
  const { id, name, label, value, onChange, onBlur, required, error, hint, placeholder, autoComplete } = props

  const describedBy =
    [error ? `${id}-error` : null, hint && !error ? `${id}-hint` : null].filter(Boolean).join(' ') ||
    undefined

  const controlClassName = [styles.control, error && styles.invalid].filter(Boolean).join(' ')

  return (
    <FormField label={label} htmlFor={id} required={required} error={error} hint={hint}>
      {props.multiline ? (
        <textarea
          id={id}
          name={name}
          rows={5}
          value={value}
          onChange={(event: ChangeEvent<HTMLTextAreaElement>) => onChange(event.target.value)}
          onBlur={onBlur}
          required={required}
          placeholder={placeholder}
          autoComplete={autoComplete}
          aria-invalid={error ? true : undefined}
          aria-describedby={describedBy}
          className={controlClassName}
        />
      ) : (
        <input
          id={id}
          name={name}
          type={props.type ?? 'text'}
          inputMode={props.inputMode}
          value={value}
          onChange={(event: ChangeEvent<HTMLInputElement>) => onChange(event.target.value)}
          onBlur={onBlur}
          required={required}
          placeholder={placeholder}
          autoComplete={autoComplete}
          aria-invalid={error ? true : undefined}
          aria-describedby={describedBy}
          className={controlClassName}
        />
      )}
    </FormField>
  )
}
