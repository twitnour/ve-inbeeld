import { ChevronDown } from 'lucide-react'
import { FormField } from '../FormField/FormField'
import styles from './SelectField.module.css'

export interface SelectOption {
  value: string
  label: string
}

interface SelectFieldProps {
  id: string
  name: string
  label: string
  value: string
  onChange: (value: string) => void
  onBlur?: () => void
  required?: boolean
  error?: string
  options: SelectOption[]
  placeholder?: string
}

/**
 * A labeled native <select>, styled to match TextInput. A native
 * element rather than a custom listbox — full keyboard and screen
 * reader support for free, no extra dependency.
 */
export function SelectField({
  id,
  name,
  label,
  value,
  onChange,
  onBlur,
  required,
  error,
  options,
  placeholder,
}: SelectFieldProps) {
  const controlClassName = [styles.control, error && styles.invalid].filter(Boolean).join(' ')

  return (
    <FormField label={label} htmlFor={id} required={required} error={error}>
      <div className={styles.wrap}>
        <select
          id={id}
          name={name}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          onBlur={onBlur}
          required={required}
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? `${id}-error` : undefined}
          className={controlClassName}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <ChevronDown size={16} aria-hidden="true" className={styles.icon} />
      </div>
    </FormField>
  )
}
