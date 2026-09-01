<?php

declare(strict_types=1);

namespace VeInBeeld;

/**
 * Server-side validation for both submission types. Mirrors the
 * frontend's validation (src/lib/formValidation.ts) but never trusts
 * it — this runs again independently against the raw decoded JSON
 * body, since a request can reach this endpoint without ever going
 * through the React form (a bot, a tampered request, a future
 * integration).
 *
 * The option lists below (labels shown in the email) must be kept in
 * sync by hand with their frontend counterparts —
 * src/lib/contactSubjectOptions.ts and src/lib/quoteRequestTypes.ts —
 * since the two runtimes don't share a schema. If those files change,
 * update the matching array here too.
 */
final class Validator
{
    private const MAX_SHORT = 200;
    private const MAX_MESSAGE = 5000;
    private const MAX_PARTICIPANTS = 100000;

    /** @var array<string,string> */
    public const CONTACT_SUBJECTS = [
        'basistraining-uk-puk' => 'Basistraining Uk & Puk',
        'nascholing-uk-puk-editie-2' => 'Nascholing Uk & Puk editie 2',
        'herscholing' => 'Herscholing',
        'beeldcoaching-op-maat' => 'Beeldcoaching op maat',
        'workshops-volwassenen' => 'Workshops volwassenen',
        'creatieve-workshops-kinderen' => 'Creatieve workshops kinderen',
        'anders' => 'Anders',
    ];

    /** @var array<string,string> */
    public const QUOTE_REQUEST_TYPES = [
        'uk-puk-editie-2' => 'VE-training Uk & Puk editie 2',
        'nascholing-uk-puk-editie-2' => 'Nascholing Uk & Puk editie 2',
        'beeldcoaching' => 'Beeldcoaching op maat',
        'workshop' => 'Workshop',
        'anders' => 'Anders / ik weet het nog niet',
    ];

    /**
     * @param array<mixed> $data
     * @return array{0: array<string,string>, 1: list<string>}
     */
    public static function validateContact(array $data): array
    {
        $errors = [];
        $clean = [
            'name' => self::str($data, 'name'),
            'email' => self::str($data, 'email'),
            'phone' => self::str($data, 'phone'),
            'organization' => self::str($data, 'organization'),
            'subject' => self::str($data, 'subject'),
            'message' => self::str($data, 'message'),
        ];

        if ($clean['name'] === '') {
            $errors[] = 'Vul je naam in.';
        } elseif (mb_strlen($clean['name']) > self::MAX_SHORT) {
            $errors[] = 'Naam is te lang.';
        }

        if ($clean['email'] === '') {
            $errors[] = 'Vul je e-mailadres in.';
        } elseif (!self::isValidEmail($clean['email'])) {
            $errors[] = 'Vul een geldig e-mailadres in.';
        }

        if ($clean['phone'] !== '' && !self::isValidPhone($clean['phone'])) {
            $errors[] = 'Vul een geldig telefoonnummer in.';
        }

        if (mb_strlen($clean['organization']) > self::MAX_SHORT) {
            $errors[] = 'Organisatie is te lang.';
        }

        if ($clean['subject'] !== '' && !isset(self::CONTACT_SUBJECTS[$clean['subject']])) {
            $errors[] = 'Ongeldig onderwerp gekozen.';
        }

        if ($clean['message'] === '') {
            $errors[] = 'Vertel kort waarmee ik je kan helpen.';
        } elseif (mb_strlen($clean['message']) > self::MAX_MESSAGE) {
            $errors[] = 'Bericht is te lang.';
        }

        return [$clean, $errors];
    }

    /**
     * @param array<mixed> $data
     * @return array{0: array<string,string>, 1: list<string>}
     */
    public static function validateQuote(array $data): array
    {
        $errors = [];
        $clean = [
            'firstName' => self::str($data, 'firstName'),
            'lastName' => self::str($data, 'lastName'),
            'email' => self::str($data, 'email'),
            'phone' => self::str($data, 'phone'),
            'organization' => self::str($data, 'organization'),
            'requestType' => self::str($data, 'requestType'),
            'participantCount' => self::str($data, 'participantCount'),
            'message' => self::str($data, 'message'),
        ];

        if ($clean['firstName'] === '') {
            $errors[] = 'Vul je voornaam in.';
        } elseif (mb_strlen($clean['firstName']) > self::MAX_SHORT) {
            $errors[] = 'Voornaam is te lang.';
        }

        if ($clean['lastName'] === '') {
            $errors[] = 'Vul je achternaam in.';
        } elseif (mb_strlen($clean['lastName']) > self::MAX_SHORT) {
            $errors[] = 'Achternaam is te lang.';
        }

        if ($clean['email'] === '') {
            $errors[] = 'Vul je e-mailadres in.';
        } elseif (!self::isValidEmail($clean['email'])) {
            $errors[] = 'Vul een geldig e-mailadres in.';
        }

        if ($clean['phone'] !== '' && !self::isValidPhone($clean['phone'])) {
            $errors[] = 'Vul een geldig telefoonnummer in.';
        }

        if (mb_strlen($clean['organization']) > self::MAX_SHORT) {
            $errors[] = 'Organisatie is te lang.';
        }

        if ($clean['requestType'] === '' || !isset(self::QUOTE_REQUEST_TYPES[$clean['requestType']])) {
            $errors[] = 'Kies waarvoor je een offerte wilt aanvragen.';
        }

        if ($clean['participantCount'] !== '') {
            $count = $clean['participantCount'];
            if (!ctype_digit($count) || (int) $count < 1 || (int) $count > self::MAX_PARTICIPANTS) {
                $errors[] = 'Vul een geldig aantal deelnemers in (een heel getal groter dan 0).';
            }
        }

        if ($clean['message'] === '') {
            $errors[] = 'Beschrijf kort waar je hulp bij zoekt.';
        } elseif (mb_strlen($clean['message']) > self::MAX_MESSAGE) {
            $errors[] = 'Bericht is te lang.';
        }

        return [$clean, $errors];
    }

    /**
     * @param array<mixed> $data
     */
    private static function str(array $data, string $key): string
    {
        $value = $data[$key] ?? '';

        if (!is_string($value)) {
            return '';
        }

        return trim($value);
    }

    public static function isValidEmail(string $value): bool
    {
        return filter_var($value, FILTER_VALIDATE_EMAIL) !== false;
    }

    public static function isValidPhone(string $value): bool
    {
        return (bool) preg_match('/^[+\d][\d\s()-]{5,19}$/', $value);
    }
}
