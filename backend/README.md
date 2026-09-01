# VE in Beeld — mail backend

A small PHP backend that sends the Contact and Offerte-aanvragen forms
by email over SMTP, using [PHPMailer](https://github.com/PHPMailer/PHPMailer).
It's deliberately independent of any specific hosting platform — no
Vercel/Netlify/Cloudflare functions, just plain PHP that runs on
conventional shared hosting.

```
React/Vite frontend  →  POST /api/contact.php  →  PHP endpoint  →  SMTP  →  info@veinbeeld.nl
```

## Layout

```
backend/
  api/
    contact.php          the one public endpoint (POST-only)
  src/
    Config.php            loads SMTP settings (env vars, then config.php)
    Validator.php          server-side validation for both form types
    Mailer.php             builds + sends the HTML/plain-text email via PHPMailer
    JsonResponse.php        small JSON-response helper
  vendor/                  Composer dependencies (git-ignored, generated)
  composer.json / .lock
  config.example.php       template — copy to config.php, fill in, never commit
  .htaccess                defense-in-depth for shared hosting (see below)
```

`vendor/`, `src/` and `config.php` are only ever required *from inside
`src/Config.php` and `api/contact.php`* relative to their own file
locations — nothing in this backend assumes a particular absolute path,
which is what makes both deployment options below work unmodified.

## Why this isn't under the frontend's `public/`

Vite's `public/` folder is copied byte-for-byte into `dist/` on every
build. Composer's `vendor/` directory doesn't belong in that pipeline —
it's PHP-only, has nothing to do with the frontend build, and mixing a
Composer project into a static-asset folder invites exactly the kind of
"vendor path broke after deploy" issue this was built to avoid. Keeping
`backend/` as its own top-level Composer project keeps `npm run build`
producing a plain static site (see **Production build** below) and
keeps the PHP deployment step explicit and separate.

## SMTP configuration

The endpoint reads these seven values, in this order of priority:

1. **Real environment variables** (`getenv()`), if your host provides a
   way to set them — a cPanel/Plesk "Environment Variables" panel, an
   Apache `SetEnv` directive, a PHP-FPM pool's `env[...]`, etc. This is
   the preferred approach: nothing on disk to leak.
2. A local **`config.php`** file (git-ignored — copy it from
   `config.example.php`), for hosts with no way to set real environment
   variables. Any key already found via `getenv()` wins over this file.

```php
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USERNAME=...
SMTP_PASSWORD=...
SMTP_ENCRYPTION=tls        # 'tls', 'ssl' or 'none'
CONTACT_TO_EMAIL=info@veinbeeld.nl
CONTACT_FROM_EMAIL=info@veinbeeld.nl
```

`CONTACT_FROM_EMAIL` is always used as the message's From address —
never the visitor's own address, which would fail SPF/DMARC checks on
most providers. The visitor's address is set as Reply-To instead, so
replying in a mail client goes straight to them.

## Composer / PHPMailer setup

```bash
cd backend
composer install
```

This downloads PHPMailer into `backend/vendor/`, which `api/contact.php`
requires via `vendor/autoload.php`. `composer.lock` is committed so
installs are reproducible; `vendor/` itself is git-ignored and must be
either generated on the server (if it has Composer/SSH access) or
uploaded from your machine (see **Production deployment**).

## Local development

Two servers run side by side; the frontend never needs to know which
environment it's in — it always calls `/api/contact.php`.

**Terminal 1 — frontend:**

```bash
npm run dev
```

**Terminal 2 — backend:**

```bash
cd backend
composer install          # first time only
cp config.example.php config.php   # first time only — fill in real/test SMTP values
php -S localhost:8000 -t .
```

`vite.config.ts` proxies `/api/*` to `http://localhost:8000` only in
`vite dev` — this has no effect on `vite build`/`vite preview` or on a
production deployment, which always serves `/api/contact.php`
same-origin from the real web server.

Open `http://localhost:5173/contact` or `/offerte-aanvragen` and submit
the form — it goes through the full stack (React → Vite proxy → PHP →
PHPMailer → your configured SMTP server).

**Testing without real SMTP credentials:** point `config.php` at any
local SMTP-speaking stub (e.g. a throwaway Python script, or a tool
like MailHog/Mailpit if you have one installed) to see full sends
without touching a real mailbox. To specifically exercise the failure
path, point `SMTP_HOST`/`SMTP_PORT` at something nothing is listening
on — the endpoint correctly returns `500 { ok: false, error:
"delivery_failed" }` and logs the real PHPMailer error server-side only.

## Production build

```bash
npm run build
```

produces a plain static site in `dist/` — no PHP, no `vendor/`, nothing
backend-related. `backend/` is deployed as a separate step.

## Production deployment (conventional/shared hosting)

Run `composer install` once (locally, or on the server if it has SSH +
Composer) so `backend/vendor/` exists, then upload:

- the contents of `dist/` → your site's document root
- the contents of `backend/` (`api/`, `src/`, `vendor/`, and a real
  `config.php` with production SMTP values — composer.json/lock aren't
  needed at runtime) → merged into that same document root, so that
  `backend/api/contact.php` ends up at `<docroot>/api/contact.php` and
  `backend/vendor/`, `backend/src/`, `backend/config.php` end up at
  `<docroot>/vendor/`, `<docroot>/src/`, `<docroot>/config.php` — i.e.
  upload `backend/`'s contents "flattened" into the site root, keeping
  `api/` as a subfolder. No SSH or Composer needed on the server itself
  with this approach — just upload the already-built `vendor/` folder.

This is the **simple deployment**: one set of files, works over plain
FTP. `backend/.htaccess` (Apache) denies direct web access to
`vendor/`, `src/`, `config.php` and `composer.*` in this layout — copy
it to the same directory those end up in (merge it into an existing
`.htaccess` there if one already exists, rather than overwriting it).

**More secure deployment**, for hosts that let you place files outside
the public web root (common on cPanel: your home directory sits one
level above `public_html/`):

```
~/veinbeeld-backend/       (NOT web-accessible)
  src/
  vendor/
  config.php
public_html/                (web root — dist/ contents go here)
  index.html, assets/...
  api/
    contact.php             (only this one file, from backend/api/)
```

Set the environment variable `VEINBEELD_BACKEND_ROOT` to the absolute
path of `~/veinbeeld-backend` (however your host lets you set env
vars) — `api/contact.php` reads it to find `vendor/autoload.php`, and
`Config.php` finds `config.php` and `src/` the same way regardless,
since those always stay together as one unit. With this layout nothing
sensitive is reachable by URL at all, and `backend/.htaccess` isn't
needed.

## Security notes

- Same-origin only: no `Access-Control-Allow-Origin` header is sent, so
  a browser on another origin can't read this endpoint's response.
- The endpoint never lets the caller choose a recipient, a From
  address, or raw mail headers — those are always the configured
  values.
- All input is treated as untrusted and re-validated server-side
  (`Validator.php`), independent of the frontend's own validation.
  HTML email bodies escape every field; a plain-text alternative body
  is always included too.
- Errors returned to the browser are always generic (`delivery_failed`,
  `validation_failed`, …) — SMTP errors, credentials, server paths and
  PHPMailer internals are logged server-side (`error_log`) only, never
  sent to the client.
- The honeypot field (`honeypot`) and a submission-timing check
  (`startedAt`, rejecting submissions faster than ~1 second) both
  short-circuit to a normal-looking `200 { ok: true }` without sending
  mail — neither is exposed to the caller, and neither is meant as
  strong security. Real rate limiting (e.g. per-IP) needs
  infrastructure this project doesn't assume (a persistent store, a
  reverse proxy, etc.) and isn't implemented here — add it at the host
  level if abuse becomes a problem.
- No submissions are stored anywhere — the endpoint only ever sends the
  one email and returns.

## Shared-hosting limitations

- No SSH/Composer on the server is assumed by default — see "simple
  deployment" above, which just needs file upload.
- No real rate limiting or CAPTCHA is implemented (see above) — this is
  a known, documented gap, not an oversight.
- Nothing here talks to a database — there isn't one.
