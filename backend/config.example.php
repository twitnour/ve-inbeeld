<?php
/**
 * Copy this file to config.php (same directory) and fill in real values.
 *
 * config.php is git-ignored and must never be committed — it holds live
 * SMTP credentials. See backend/README.md for deployment details.
 *
 * Every key below can instead be set as a genuine server/environment
 * variable (read via getenv()) if your host supports that — real
 * environment variables always take priority over this file when both
 * are set, so this file only needs to fill in whatever your host can't
 * provide as an environment variable.
 */

return [
    'SMTP_HOST' => '',
    'SMTP_PORT' => '587',
    'SMTP_USERNAME' => '',
    'SMTP_PASSWORD' => '',
    // 'tls' (STARTTLS, typical for port 587), 'ssl' (implicit TLS, typical
    // for port 465), or 'none' (unencrypted — do not use in production).
    'SMTP_ENCRYPTION' => 'tls',
    'CONTACT_TO_EMAIL' => 'info@veinbeeld.nl',
    'CONTACT_FROM_EMAIL' => 'info@veinbeeld.nl',
];
