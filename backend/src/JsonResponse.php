<?php

declare(strict_types=1);

namespace VeInBeeld;

/**
 * Sends a JSON response with the right status/content-type and stops
 * execution — the endpoint always ends in exactly one of these.
 */
final class JsonResponse
{
    /**
     * @param array<string,mixed> $body
     */
    public static function send(int $status, array $body): never
    {
        http_response_code($status);
        header('Content-Type: application/json; charset=utf-8');
        echo json_encode($body, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
        exit;
    }
}
