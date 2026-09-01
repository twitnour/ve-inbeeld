export interface ContactSubjectOption {
  value: string
  label: string
}

/**
 * Options for the contact form's optional "Onderwerp" select. Lets a
 * visitor route their message without typing free text; "Anders" covers
 * anything that doesn't fit the listed offerings.
 */
export const CONTACT_SUBJECT_OPTIONS: ContactSubjectOption[] = [
  { value: 'basistraining-uk-puk', label: 'Basistraining Uk & Puk' },
  { value: 'nascholing-uk-puk-editie-2', label: 'Nascholing Uk & Puk editie 2' },
  { value: 'herscholing', label: 'Herscholing' },
  { value: 'beeldcoaching-op-maat', label: 'Beeldcoaching op maat' },
  { value: 'workshops-volwassenen', label: 'Workshops volwassenen' },
  { value: 'creatieve-workshops-kinderen', label: 'Creatieve workshops kinderen' },
  { value: 'anders', label: 'Anders' },
]
