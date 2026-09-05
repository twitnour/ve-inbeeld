<?php

declare(strict_types=1);

/**
 * Public endpoint for both the Contact and Offerte forms.
 *
 * POST /api/contact.php
 * Body: JSON, always including a "type": "contact" | "quote" discriminator
 * plus that form's fields (see backend/README.md for the full contract).
 *
 * Same-origin only: no CORS headers are sent, so a browser on another
 * origin cannot read this endpoint's response — the safest default for
 * an endpoint that sends email. Add a narrow, explicit
 * Access-Control-Allow-Origin for one specific origin here if a real
 * cross-origin caller is ever needed; never "*".
 *
 * This file only needs to find Composer's autoloader. Everything else
 * (config, validation, mail sending) lives in src/ and is autoloaded
 * from there — see src/Config.php for why that keeps working whether
 * src/ + vendor/ + config.php sit right next to this file or somewhere
 * outside the web root entirely.
 */

$backendRoot = getenv('VEINBEELD_BACKEND_ROOT');
if ($backendRoot === false || $backendRoot === '') {
    // Default: this file lives in api/, and vendor/ is its sibling —
    // i.e. everything under backend/ was deployed together as one unit.
    $backendRoot = dirname(__DIR__);
}

require $backendRoot . '/vendor/autoload.php';

use VeInBeeld\Config;
use VeInBeeld\JsonResponse;
use VeInBeeld\Mailer;
use VeInBeeld\Validator;

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    JsonResponse::send(405, ['ok' => false, 'error' => 'method_not_allowed']);
}

$raw = file_get_contents('php://input');
if ($raw === false || $raw === '') {
    JsonResponse::send(400, ['ok' => false, 'error' => 'invalid_request']);
}

$data = json_decode($raw, true);
if (!is_array($data) || json_last_error() !== JSON_ERROR_NONE) {
    JsonResponse::send(400, ['ok' => false, 'error' => 'invalid_request']);
}

$type = $data['type'] ?? null;
if ($type !== 'contact' && $type !== 'quote') {
    JsonResponse::send(400, ['ok' => false, 'error' => 'invalid_request']);
}

// --- Spam checks -----------------------------------------------------
// Neither check is exposed to the caller: a tripped honeypot or an
// implausibly fast submission gets exactly the same 200 { ok: true }
// response as a real send, so a bot (or script probing the endpoint)
// learns nothing about why its message never arrived. This is
// deliberately lightweight — not a substitute for real rate limiting,
// which needs host-specific infrastructure (see backend/README.md).
$honeypot = $data['honeypot'] ?? '';
$honeypotTriggered = is_string($honeypot) && trim($honeypot) !== '';

$submittedTooFast = false;
if (isset($data['startedAt']) && is_string($data['startedAt']) && ctype_digit($data['startedAt'])) {
    $elapsedMs = (int) round(microtime(true) * 1000) - (int) $data['startedAt'];
    $submittedTooFast = $elapsedMs >= 0 && $elapsedMs < 1000;
}

if ($honeypotTriggered || $submittedTooFast) {
    JsonResponse::send(200, ['ok' => true]);
}

// --- Validation --------------------------------------------------------
// Never trust the frontend's own validation — this runs again here
// against the raw payload.
if ($type === 'contact') {
    [$clean, $errors] = Validator::validateContact($data);
} else {
    [$clean, $errors] = Validator::validateQuote($data);
}

if ($errors !== []) {
    JsonResponse::send(400, ['ok' => false, 'error' => 'validation_failed', 'messages' => $errors]);
}

if (!Config::isComplete()) {
    error_log('VE in Beeld contact endpoint: SMTP configuration is incomplete.');
    JsonResponse::send(500, ['ok' => false, 'error' => 'delivery_failed']);
}

try {
    if ($type === 'contact') {
        Mailer::sendContact($clean);
    } else {
        Mailer::sendQuote($clean);
    }
} catch (\Throwable $e) {
    // Never leak SMTP/PHPMailer internals, credentials or server paths
    // to the visitor — log server-side only.
    error_log('VE in Beeld contact endpoint: mail send failed: ' . $e->getMessage());
    JsonResponse::send(500, ['ok' => false, 'error' => 'delivery_failed']);
}

JsonResponse::send(200, ['ok' => true]);
