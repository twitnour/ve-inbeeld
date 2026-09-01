<?php

declare(strict_types=1);

namespace VeInBeeld;

use PHPMailer\PHPMailer\PHPMailer;

/**
 * Builds and sends the two notification emails over SMTP via
 * PHPMailer. Throws on any failure (PHPMailer's exception mode is
 * enabled) — the caller (api/contact.php) is responsible for catching
 * that, logging it server-side, and never exposing it to the visitor.
 */
final class Mailer
{
    /**
     * @param array<string,string> $data validated + trimmed contact fields
     */
    public static function sendContact(array $data): void
    {
        $rows = [
            'Naam' => $data['name'],
            'E-mail' => $data['email'],
        ];
        if ($data['phone'] !== '') {
            $rows['Telefoon'] = $data['phone'];
        }
        if ($data['organization'] !== '') {
            $rows['Organisatie'] = $data['organization'];
        }
        if ($data['subject'] !== '') {
            $rows['Onderwerp'] = Validator::CONTACT_SUBJECTS[$data['subject']] ?? $data['subject'];
        }

        self::send(
            subject: sprintf('Nieuw contactbericht via VE in Beeld — %s', $data['name']),
            rows: $rows,
            message: $data['message'],
            messageLabel: 'Bericht',
            replyToEmail: $data['email'],
            replyToName: $data['name'],
        );
    }

    /**
     * @param array<string,string> $data validated + trimmed quote fields
     */
    public static function sendQuote(array $data): void
    {
        $fullName = trim($data['firstName'] . ' ' . $data['lastName']);

        $rows = [
            'Voornaam' => $data['firstName'],
            'Achternaam' => $data['lastName'],
            'E-mail' => $data['email'],
        ];
        if ($data['phone'] !== '') {
            $rows['Telefoon'] = $data['phone'];
        }
        if ($data['organization'] !== '') {
            $rows['Organisatie'] = $data['organization'];
        }
        $rows['Type aanvraag'] = Validator::QUOTE_REQUEST_TYPES[$data['requestType']] ?? $data['requestType'];
        if ($data['participantCount'] !== '') {
            $rows['Aantal deelnemers'] = $data['participantCount'];
        }

        $subjectSuffix = $data['organization'] !== '' ? $data['organization'] : $fullName;

        self::send(
            subject: sprintf('Nieuwe offerteaanvraag via VE in Beeld — %s', $subjectSuffix),
            rows: $rows,
            message: $data['message'],
            messageLabel: 'Beschrijving van de vraag',
            replyToEmail: $data['email'],
            replyToName: $fullName,
        );
    }

    /**
     * @param array<string,string> $rows ordered label => value pairs shown above the message
     */
    private static function send(
        string $subject,
        array $rows,
        string $message,
        string $messageLabel,
        string $replyToEmail,
        string $replyToName,
    ): void {
        $config = Config::load();

        $mail = new PHPMailer(true);
        $mail->isSMTP();
        $mail->Host = $config['SMTP_HOST'];
        $mail->Port = (int) $config['SMTP_PORT'];
        $mail->SMTPAuth = true;
        $mail->Username = $config['SMTP_USERNAME'];
        $mail->Password = $config['SMTP_PASSWORD'];

        switch (strtolower($config['SMTP_ENCRYPTION'])) {
            case 'ssl':
                $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
                break;
            case 'none':
            case '':
                $mail->SMTPSecure = '';
                $mail->SMTPAutoTLS = false;
                break;
            default:
                $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        }

        $mail->CharSet = 'UTF-8';

        // From is always the configured business mailbox, never the
        // visitor's own address — using their address as From would
        // fail SPF/DMARC checks on most providers and let the endpoint
        // be used to spoof arbitrary senders. Reply-To is the visitor,
        // so replying in a mail client goes straight to them.
        $mail->setFrom($config['CONTACT_FROM_EMAIL'], 'VE in Beeld website');
        $mail->addAddress($config['CONTACT_TO_EMAIL']);
        $mail->addReplyTo($replyToEmail, $replyToName !== '' ? $replyToName : $replyToEmail);

        $mail->Subject = $subject;
        $mail->isHTML(true);
        $mail->Body = self::renderHtml($rows, $message, $messageLabel);
        $mail->AltBody = self::renderText($rows, $message, $messageLabel);

        $mail->send();
    }

    /**
     * @param array<string,string> $rows
     */
    private static function renderHtml(array $rows, string $message, string $messageLabel): string
    {
        $lines = [];
        foreach ($rows as $label => $value) {
            $lines[] = sprintf(
                '<p style="margin:0 0 8px;font-family:sans-serif;font-size:14px;color:#191a14;">'
                    . '<strong>%s:</strong> %s</p>',
                self::escape($label),
                nl2br(self::escape($value)),
            );
        }
        $lines[] = sprintf(
            '<p style="margin:16px 0 4px;font-family:sans-serif;font-size:14px;color:#191a14;">'
                . '<strong>%s:</strong></p>'
                . '<p style="white-space:pre-wrap;margin:0;font-family:sans-serif;font-size:14px;color:#191a14;">%s</p>',
            self::escape($messageLabel),
            nl2br(self::escape($message)),
        );

        return implode('', $lines);
    }

    /**
     * @param array<string,string> $rows
     */
    private static function renderText(array $rows, string $message, string $messageLabel): string
    {
        $lines = [];
        foreach ($rows as $label => $value) {
            $lines[] = "{$label}: {$value}";
        }
        $lines[] = '';
        $lines[] = "{$messageLabel}:";
        $lines[] = $message;

        return implode("\n", $lines);
    }

    private static function escape(string $value): string
    {
        return htmlspecialchars($value, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
    }
}
