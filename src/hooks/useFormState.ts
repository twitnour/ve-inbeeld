import { useCallback, useState, type FormEvent } from 'react'
import type { FormErrors } from '../lib/formValidation'

export type FormStatus = 'idle' | 'submitting' | 'success' | 'error'

interface UseFormStateOptions<V extends Record<string, string>> {
  initialValues: V
  validate: (values: V) => FormErrors<V>
  onSubmit: (values: V) => Promise<{ ok: boolean }>
}

/**
 * Generic form state: values, per-field touched tracking (so errors
 * only show after a field has been interacted with), validation,
 * submit status and a guard against double submission. Shared by the
 * contact and quote forms, which each just supply their own values
 * shape, validate function and submit handler.
 */
export function useFormState<V extends Record<string, string>>({
  initialValues,
  validate,
  onSubmit,
}: UseFormStateOptions<V>) {
  const [values, setValues] = useState<V>(initialValues)
  const [touched, setTouched] = useState<Partial<Record<keyof V, boolean>>>({})
  const [status, setStatus] = useState<FormStatus>('idle')

  const errors = validate(values)

  const setValue = useCallback((name: keyof V, value: string) => {
    setValues((prev) => ({ ...prev, [name]: value }))
  }, [])

  const setTouchedField = useCallback((name: keyof V) => {
    setTouched((prev) => ({ ...prev, [name]: true }))
  }, [])

  const fieldError = useCallback(
    (name: keyof V) => (touched[name] ? errors[name] : undefined),
    [touched, errors],
  )

  const handleSubmit = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault()

      // Reveal every field's error (if any) on a submit attempt, not
      // just the ones already touched.
      const allTouched = {} as Partial<Record<keyof V, boolean>>
      for (const key of Object.keys(values) as (keyof V)[]) {
        allTouched[key] = true
      }
      setTouched(allTouched)

      if (Object.keys(errors).length > 0) return
      // Belt-and-suspenders double-submit guard, alongside the
      // disabled submit button while status === 'submitting'.
      if (status === 'submitting') return

      setStatus('submitting')
      const result = await onSubmit(values)
      setStatus(result.ok ? 'success' : 'error')
    },
    [values, errors, status, onSubmit],
  )

  return { values, setValue, setTouchedField, fieldError, errors, status, handleSubmit }
}
