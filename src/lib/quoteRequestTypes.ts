export interface QuoteRequestTypeOption {
  value: string
  label: string
}

/**
 * Options for the quote form's "Waarvoor wil je een offerte aanvragen?"
 * select. Herscholing is deliberately left out — there isn't enough
 * published content about that offer yet to route quote requests to it.
 */
export const QUOTE_REQUEST_TYPES: QuoteRequestTypeOption[] = [
  { value: 'uk-puk-editie-2', label: 'VE-training Uk & Puk editie 2' },
  { value: 'nascholing-uk-puk-editie-2', label: 'Nascholing Uk & Puk editie 2' },
  { value: 'beeldcoaching', label: 'Beeldcoaching op maat' },
  { value: 'workshop', label: 'Workshop' },
  { value: 'anders', label: 'Anders / ik weet het nog niet' },
]
