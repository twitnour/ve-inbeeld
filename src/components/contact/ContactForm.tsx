import { useCallback } from 'react'
import { TextInput } from '../forms/TextInput/TextInput'
import { HoneypotField } from '../forms/HoneypotField/HoneypotField'
import { FormMessage } from '../forms/FormMessage/FormMessage'
import { FormRow } from '../forms/FormSection/FormSection'
import { Button } from '../Button/Button'
import { useFormState } from '../../hooks/useFormState'
import { initialContactValues, validateContactForm, type ContactFormValues } from '../../lib/formValidation'
import { submitForm } from '../../lib/formSubmission'
import styles from './ContactForm.module.css'

export function ContactForm() {
  const onSubmit = useCallback((values: ContactFormValues) => submitForm('contact', values), [])

  const { values, setValue, setTouchedField, fieldError, status, handleSubmit } = useFormState({
    initialValues: initialContactValues,
    validate: validateContactForm,
    onSubmit,
  })

  if (status === 'success') {
    return (
      <FormMessage tone="success">
        Bedankt voor je bericht. Ik neem zo snel mogelijk contact met je op.
      </FormMessage>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className={styles.form}>
      <HoneypotField value={values.honeypot} onChange={(value) => setValue('honeypot', value)} />

      <FormRow>
        <TextInput
          id="contact-name"
          name="name"
          label="Naam"
          autoComplete="name"
          required
          value={values.name}
          onChange={(value) => setValue('name', value)}
          onBlur={() => setTouchedField('name')}
          error={fieldError('name')}
        />
        <TextInput
          id="contact-email"
          name="email"
          label="E-mailadres"
          type="email"
          autoComplete="email"
          required
          value={values.email}
          onChange={(value) => setValue('email', value)}
          onBlur={() => setTouchedField('email')}
          error={fieldError('email')}
        />
      </FormRow>

      <FormRow>
        <TextInput
          id="contact-phone"
          name="phone"
          label="Telefoonnummer"
          type="tel"
          autoComplete="tel"
          placeholder="06 12345678"
          value={values.phone}
          onChange={(value) => setValue('phone', value)}
          onBlur={() => setTouchedField('phone')}
          error={fieldError('phone')}
        />
        <TextInput
          id="contact-organization"
          name="organization"
          label="Organisatie"
          autoComplete="organization"
          value={values.organization}
          onChange={(value) => setValue('organization', value)}
          onBlur={() => setTouchedField('organization')}
          error={fieldError('organization')}
        />
      </FormRow>

      <TextInput
        id="contact-subject"
        name="subject"
        label="Onderwerp"
        value={values.subject}
        onChange={(value) => setValue('subject', value)}
        onBlur={() => setTouchedField('subject')}
        error={fieldError('subject')}
      />

      <TextInput
        id="contact-message"
        name="message"
        label="Bericht"
        multiline
        required
        value={values.message}
        onChange={(value) => setValue('message', value)}
        onBlur={() => setTouchedField('message')}
        error={fieldError('message')}
      />

      <p className={styles.privacy}>
        Je gegevens worden alleen gebruikt om contact met je op te nemen naar aanleiding van je
        bericht.
      </p>

      {status === 'error' && (
        <FormMessage tone="error">
          Het versturen is niet gelukt. Probeer het later opnieuw of neem rechtstreeks contact op
          via <a href="mailto:info@veinbeeld.nl">info@veinbeeld.nl</a>.
        </FormMessage>
      )}

      <Button type="submit" variant="primary" disabled={status === 'submitting'}>
        {status === 'submitting' ? 'Versturen…' : 'Verstuur bericht'}
      </Button>
    </form>
  )
}
