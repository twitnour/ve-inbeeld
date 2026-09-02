import { useCallback, useEffect, useRef } from 'react'
import { TextInput } from '../forms/TextInput/TextInput'
import { SelectField } from '../forms/SelectField/SelectField'
import { HoneypotField } from '../forms/HoneypotField/HoneypotField'
import { FormMessage } from '../forms/FormMessage/FormMessage'
import { FormSection, FormRow } from '../forms/FormSection/FormSection'
import { Button } from '../Button/Button'
import { useFormState } from '../../hooks/useFormState'
import { initialQuoteValues, validateQuoteForm, type QuoteFormValues } from '../../lib/formValidation'
import { submitForm } from '../../lib/formSubmission'
import { QUOTE_REQUEST_TYPES } from '../../lib/quoteRequestTypes'
import { businessInfo } from '../../lib/businessInfo'
import styles from './QuoteForm.module.css'

export function QuoteForm() {
  // Captured once, right after the form mounts — sent along so the
  // backend can flag implausibly fast submissions as likely spam. Not
  // a strong signal on its own, just one extra low-cost check next to
  // the honeypot; see backend/README.md.
  const startedAtRef = useRef<number | null>(null)
  useEffect(() => {
    startedAtRef.current = Date.now()
  }, [])

  const onSubmit = useCallback(
    (values: QuoteFormValues) =>
      submitForm('quote', { ...values, startedAt: String(startedAtRef.current ?? Date.now()) }),
    [],
  )

  const { values, setValue, setTouchedField, fieldError, status, handleSubmit } = useFormState({
    initialValues: initialQuoteValues,
    validate: validateQuoteForm,
    onSubmit,
  })

  if (status === 'success') {
    return (
      <FormMessage tone="success">
        Bedankt voor je aanvraag. Je gegevens zijn goed ontvangen. Ik neem contact met je op om de
        mogelijkheden te bespreken.
      </FormMessage>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className={styles.form}>
      <HoneypotField value={values.honeypot} onChange={(value) => setValue('honeypot', value)} />

      <FormSection heading="Jouw gegevens">
        <FormRow>
          <TextInput
            id="quote-firstName"
            name="firstName"
            label="Voornaam"
            autoComplete="given-name"
            required
            value={values.firstName}
            onChange={(value) => setValue('firstName', value)}
            onBlur={() => setTouchedField('firstName')}
            error={fieldError('firstName')}
          />
          <TextInput
            id="quote-lastName"
            name="lastName"
            label="Achternaam"
            autoComplete="family-name"
            required
            value={values.lastName}
            onChange={(value) => setValue('lastName', value)}
            onBlur={() => setTouchedField('lastName')}
            error={fieldError('lastName')}
          />
        </FormRow>
        <FormRow>
          <TextInput
            id="quote-email"
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
          <TextInput
            id="quote-phone"
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
        </FormRow>
      </FormSection>

      <FormSection heading="Organisatie">
        <FormRow>
          <TextInput
            id="quote-organization"
            name="organization"
            label="Organisatie"
            autoComplete="organization"
            value={values.organization}
            onChange={(value) => setValue('organization', value)}
            onBlur={() => setTouchedField('organization')}
            error={fieldError('organization')}
          />
          <TextInput
            id="quote-participantCount"
            name="participantCount"
            label="Aantal deelnemers"
            inputMode="numeric"
            hint="Een heel getal, bijvoorbeeld 12."
            value={values.participantCount}
            onChange={(value) => setValue('participantCount', value)}
            onBlur={() => setTouchedField('participantCount')}
            error={fieldError('participantCount')}
          />
        </FormRow>
      </FormSection>

      <FormSection heading="Waar kunnen we je mee helpen?">
        <SelectField
          id="quote-requestType"
          name="requestType"
          label="Waarvoor wil je een offerte aanvragen?"
          required
          placeholder="Kies een optie"
          options={QUOTE_REQUEST_TYPES}
          value={values.requestType}
          onChange={(value) => setValue('requestType', value)}
          onBlur={() => setTouchedField('requestType')}
          error={fieldError('requestType')}
        />
        <TextInput
          id="quote-message"
          name="message"
          label="Beschrijving van jouw vraag"
          multiline
          required
          value={values.message}
          onChange={(value) => setValue('message', value)}
          onBlur={() => setTouchedField('message')}
          error={fieldError('message')}
        />
      </FormSection>

      <p className={styles.privacy}>
        Je gegevens worden alleen gebruikt om contact met je op te nemen naar aanleiding van je
        aanvraag.
      </p>

      {status === 'error' && (
        <FormMessage tone="error">
          Het versturen is helaas niet gelukt. Probeer het later opnieuw of neem rechtstreeks
          contact op via{' '}
          <a href={`mailto:${businessInfo.contactEmail}`}>{businessInfo.contactEmail}</a>.
        </FormMessage>
      )}

      <Button type="submit" variant="primary" disabled={status === 'submitting'}>
        {status === 'submitting' ? 'Versturen…' : 'Vraag offerte aan'}
      </Button>
    </form>
  )
}
