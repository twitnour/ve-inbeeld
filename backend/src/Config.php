<?php

declare(strict_types=1);

namespace VeInBeeld;

/**
 * Loads SMTP/mail configuration without ever hardcoding secrets.
 *
 * Two sources are checked, in priority order:
 *
 *   1. Real environment variables (getenv()) — the preferred approach
 *      whenever the host provides a way to set them (cPanel/Plesk
 *      "Environment Variables" panels, an Apache SetEnv directive, a
 *      PHP-FPM pool's env[...] config, etc.). Nothing to commit, nothing
 *      that can leak via a misconfigured web server.
 *   2. A local config.php file, required from the path in the
 *      VE_INBEELD_CONFIG_FILE environment variable if set, otherwise
 *      defaulting to config.php next to this backend's composer.json
 *      (i.e. one directory above src/). That file returns a plain
 *      array and is git-ignored — see config.example.php. Values found
 *      via getenv() always win over this file when both are set.
 */
final class Config
{
    private const KEYS = [
        'SMTP_HOST',
        'SMTP_PORT',
        'SMTP_USERNAME',
        'SMTP_PASSWORD',
        'SMTP_ENCRYPTION',
        'CONTACT_TO_EMAIL',
        'CONTACT_FROM_EMAIL',
    ];

    /** @var array<string,string>|null */
    private static ?array $values = null;

    /**
     * @return array<string,string>
     */
    public static function load(): array
    {
        if (self::$values !== null) {
            return self::$values;
        }

        $values = [];

        foreach (self::KEYS as $key) {
            $value = getenv($key);
            if ($value !== false && $value !== '') {
                $values[$key] = $value;
            }
        }

        if (count($values) < count(self::KEYS)) {
            $configPath = getenv('VE_INBEELD_CONFIG_FILE');
            if ($configPath === false || $configPath === '') {
                $configPath = __DIR__ . '/../config.php';
            }

            if (is_file($configPath)) {
                /** @var mixed $fileValues */
                $fileValues = require $configPath;
                if (is_array($fileValues)) {
                    // Values already set from a real environment variable win.
                    $values += $fileValues;
                }
            }
        }

        // Non-secret defaults so an incompletely configured host still
        // produces predictable behaviour rather than undefined-index
        // warnings.
        $values += [
            'SMTP_PORT' => '587',
            'SMTP_ENCRYPTION' => 'tls',
        ];

        self::$values = $values;

        return $values;
    }

    public static function isComplete(): bool
    {
        $values = self::load();

        foreach (self::KEYS as $key) {
            if (empty($values[$key])) {
                return false;
            }
        }

        return true;
    }
}
