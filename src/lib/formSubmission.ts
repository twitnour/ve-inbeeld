export type FormSubmissionType = 'contact' | 'quote'

export interface FormSubmissionResult {
  ok: boolean
}

/**
 * Sends form data to the site's email backend.
 *
 * No serverless endpoint exists in this project yet (see claude.md,
 * "Contact & Offerte forms", for what still needs to be built and
 * connected: a secure server-side endpoint holding the email provider's
 * API key). Until one exists at this path, `fetch` correctly resolves
 * to a non-OK response, this returns `{ ok: false }`, and the calling
 * form shows its real error state. Nothing here fakes a successful
 * send — nowhere in this project is delivery success shown without an
 * actual send attempt.
 *
 * The payload always carries `type` plus every raw field value
 * (including the honeypot) — validation happens both here on the
 * client (see formValidation.ts) and, once built, must happen again
 * server-side; never trust the client alone.
 */
export async function submitForm(
  type: FormSubmissionType,
  values: Record<string, string>,
): Promise<FormSubmissionResult> {
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ type, ...values }),
    })

    return { ok: response.ok }
  } catch {
    return { ok: false }
  }
}
