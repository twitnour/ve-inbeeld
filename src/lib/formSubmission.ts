export type FormSubmissionType = 'contact' | 'quote'

export interface FormSubmissionResult {
  ok: boolean
}

interface FormSubmissionResponseBody {
  ok?: boolean
}

/**
 * Sends form data to the site's PHP/SMTP mail backend at
 * /api/contact.php (see backend/README.md for the endpoint itself and
 * its deployment).
 *
 * In production this is a same-origin request straight to the deployed
 * PHP file. In local development (`npm run dev`), Vite's dev-only proxy
 * (vite.config.ts) forwards it to a local `php -S` server — the
 * frontend source never needs to know which environment it's running
 * in.
 *
 * The payload always carries `type` plus every raw field value
 * (including the honeypot and `startedAt`) — validation happens both
 * here on the client (see formValidation.ts) and, independently and
 * more strictly, again server-side in PHP; the client is never trusted
 * alone. Success is only ever reported when the server's JSON body
 * itself confirms `ok: true` — an HTTP error, a malformed response, or
 * a network failure all fall through to `{ ok: false }`, so this never
 * claims a message was sent when it wasn't.
 */
export async function submitForm(
  type: FormSubmissionType,
  values: Record<string, string>,
): Promise<FormSubmissionResult> {
  try {
    const response = await fetch('/api/contact.php', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ type, ...values }),
    })

    if (!response.ok) return { ok: false }

    const body = (await response.json().catch(() => null)) as FormSubmissionResponseBody | null
    return { ok: body?.ok === true }
  } catch {
    return { ok: false }
  }
}
