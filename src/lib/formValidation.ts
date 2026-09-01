import { isPositiveInteger, isValidEmail, isValidPhone } from './validation'
import { QUOTE_REQUEST_TYPES } from './quoteRequestTypes'

export type FormErrors<V extends Record<string, string>> = Partial<Record<keyof V, string>>

export interface ContactFormValues extends Record<string, string> {
  name: string
  email: string
  phone: string
  organization: string
  subject: string
  message: string
  /** Hidden spam-trap field — must stay empty; see HoneypotField. */
  honeypot: string
}

export const initialContactValues: ContactFormValues = {
  name: '',
  email: '',
  phone: '',
  organization: '',
  subject: '',
  message: '',
  honeypot: '',
}

export function validateContactForm(values: ContactFormValues): FormErrors<ContactFormValues> {
  const errors: FormErrors<ContactFormValues> = {}

  if (!values.name.trim()) errors.name = 'Vul je naam in.'
  if (!values.email.trim()) errors.email = 'Vul je e-mailadres in.'
  else if (!isValidEmail(values.email)) errors.email = 'Vul een geldig e-mailadres in.'
  if (values.phone.trim() && !isValidPhone(values.phone)) {
    errors.phone = 'Vul een geldig telefoonnummer in.'
  }
  if (!values.message.trim()) errors.message = 'Vertel kort waarmee ik je kan helpen.'

  return errors
}

export interface QuoteFormValues extends Record<string, string> {
  firstName: string
  lastName: string
  email: string
  phone: string
  organization: string
  requestType: string
  participantCount: string
  message: string
  /** Hidden spam-trap field — must stay empty; see HoneypotField. */
  honeypot: string
}

export const initialQuoteValues: QuoteFormValues = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  organization: '',
  requestType: '',
  participantCount: '',
  message: '',
  honeypot: '',
}

const VALID_REQUEST_TYPES = new Set(QUOTE_REQUEST_TYPES.map((option) => option.value))

export function validateQuoteForm(values: QuoteFormValues): FormErrors<QuoteFormValues> {
  const errors: FormErrors<QuoteFormValues> = {}

  if (!values.firstName.trim()) errors.firstName = 'Vul je voornaam in.'
  if (!values.lastName.trim()) errors.lastName = 'Vul je achternaam in.'
  if (!values.email.trim()) errors.email = 'Vul je e-mailadres in.'
  else if (!isValidEmail(values.email)) errors.email = 'Vul een geldig e-mailadres in.'
  if (values.phone.trim() && !isValidPhone(values.phone)) {
    errors.phone = 'Vul een geldig telefoonnummer in.'
  }
  if (!values.requestType || !VALID_REQUEST_TYPES.has(values.requestType)) {
    errors.requestType = 'Kies waarvoor je een offerte wilt aanvragen.'
  }
  if (values.participantCount.trim() && !isPositiveInteger(values.participantCount)) {
    errors.participantCount = 'Vul een geldig aantal deelnemers in (een heel getal groter dan 0).'
  }
  if (!values.message.trim()) errors.message = 'Beschrijf kort waar je hulp bij zoekt.'

  return errors
}
