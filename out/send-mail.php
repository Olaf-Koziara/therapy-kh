<?php
// Włącz raportowanie błędów do bufora
ini_set('display_errors', 0);
error_reporting(E_ALL);

header('Content-Type: application/json; charset=utf-8');

// =========================================================================
// KONFIGURACJA POCZTY (JDM.PL SMTP)
// =========================================================================
// 1. Docelowy adres, na który mają przychodzić wiadomości:
$toEmail = 'olaf.koziara@gmail.com';

// 2. Adres nadawcy (musi być zgodny z kontem na serwerze SMTP):
$fromEmail = 'formularz@kamilahelta.pl';

// 3. Ścieżka do pliku logów (zapisuje się w tym samym folderze):
$logFile = __DIR__ . '/mail_errors.log';

// 4. Konfiguracja SMTP
$config = [
    'DEBUG_MODE' => true,                 // Zwracaj szczegółowy błąd w JSON w razie problemów
    'USE_SMTP'   => true,                 // WŁĄCZONE SMTP dla jdm.pl
    'SMTP_HOST'  => 'smtp.jdm.pl',        // Host poczty wychodzącej JDM
    'SMTP_PORT'  => 587,                  // Port dla STARTTLS
    'SMTP_SECURE'=> 'tls',                // Szyfrowanie STARTTLS
    'SMTP_USER'  => 'formularz@kamilahelta.pl', // Login do skrzynki
    'SMTP_PASS'  => '2iID8LzYt7DJcJlc', // <-- WPISZ SWOJE HASŁO DO SKRZYNKI POCZTOWEJ
];

// =========================================================================
// FUNKCJA POMOCNICZA DO LOGOWANIA
// =========================================================================
function logMessage($msg, $file) {
    $timestamp = date('Y-m-d H:i:s');
    $line = "[{$timestamp}] " . (is_array($msg) ? json_encode($msg, JSON_UNESCAPED_UNICODE) : $msg) . "\n";
    @file_put_contents($file, $line, FILE_APPEND | LOCK_EX);
}

// =========================================================================
// TRYB DIAGNOSTYCZNY (dostępny przez GET np. https://kamilahelta.pl/send-mail.php?diag=1)
// =========================================================================
if ($_SERVER['REQUEST_METHOD'] === 'GET' && isset($_GET['diag'])) {
    $disabledFunctions = explode(',', ini_get('disable_functions'));
    $disabledFunctions = array_map('trim', $disabledFunctions);
    $fsockopenDisabled = in_array('fsockopen', $disabledFunctions);

    // Próba testu połączenia z portem SMTP
    $smtpPing = false;
    $smtpErr = '';
    $testSocket = @stream_socket_client("tcp://{$config['SMTP_HOST']}:{$config['SMTP_PORT']}", $errno, $errstr, 5);
    if ($testSocket) {
        $smtpPing = true;
        fclose($testSocket);
    } else {
        $smtpErr = "$errstr ($errno)";
    }

    echo json_encode([
        'status' => 'Diagnostics OK',
        'php_version' => phpversion(),
        'smtp_host' => $config['SMTP_HOST'],
        'smtp_port' => $config['SMTP_PORT'],
        'smtp_connection_test' => $smtpPing ? 'POŁĄCZONO UDANIE' : 'BŁĄD POŁĄCZENIA: ' . $smtpErr,
        'has_smtp_password_set' => ($config['SMTP_PASS'] !== '' && $config['SMTP_PASS'] !== 'TUTAJ_WPISZ_HASLO_DO_SKRZYNKI'),
        'fsockopen_enabled' => !$fsockopenDisabled,
        'log_file_writable' => is_writable(__DIR__) || (file_exists($logFile) && is_writable($logFile)),
        'log_file_path' => $logFile,
    ], JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
    exit;
}

// Tylko żądania POST dla formularza
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode([
        'success' => false,
        'message' => 'Metoda niedozwolona. Użyj POST.'
    ], JSON_UNESCAPED_UNICODE);
    exit;
}

// Odczyt danych z żądania
$contentType = isset($_SERVER['CONTENT_TYPE']) ? trim($_SERVER['CONTENT_TYPE']) : '';
if (strpos($contentType, 'application/json') !== false) {
    $input = file_get_contents('php://input');
    $data = json_decode($input, true) ?? [];
} else {
    $data = $_POST;
}

// Honeypot dla botów spamujących
if (!empty($data['website'])) {
    logMessage("SPAM BOT zablokowany (honeypot): " . json_encode($data, JSON_UNESCAPED_UNICODE), $logFile);
    echo json_encode(['success' => true, 'message' => 'Dziękujemy za wiadomość.'], JSON_UNESCAPED_UNICODE);
    exit;
}

// Pobranie i oczyszczenie pól formularza
$name = isset($data['name']) ? trim(strip_tags($data['name'])) : '';
$email = isset($data['email']) ? trim($data['email']) : '';
$phone = isset($data['phone']) ? trim(strip_tags($data['phone'])) : '';
$message = isset($data['message']) ? trim(strip_tags($data['message'])) : '';
$rodoConsent = isset($data['rodoConsent']) ? (bool)$data['rodoConsent'] : false;

// Walidacja
$errors = [];
if (empty($name) || mb_strlen($name, 'UTF-8') < 2) {
    $errors[] = 'Imię i nazwisko jest wymagane (min. 2 znaki).';
}
if (empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errors[] = 'Podaj poprawny adres e-mail.';
}
if (empty($message) || mb_strlen($message, 'UTF-8') < 5) {
    $errors[] = 'Treść wiadomości jest wymagana (min. 5 znaków).';
}
if (!$rodoConsent) {
    $errors[] = 'Zgoda na przetwarzanie danych (RODO) jest wymagana.';
}
if (preg_match("/[\r\n]/", $name) || preg_match("/[\r\n]/", $email)) {
    $errors[] = 'Wykryto nieprawidłowe znaki w formularzu.';
}

if (!empty($errors)) {
    logMessage("Błąd walidacji: " . implode(' | ', $errors), $logFile);
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'message' => implode(' ', $errors),
        'errors'  => $errors
    ], JSON_UNESCAPED_UNICODE);
    exit;
}

// Formatowanie wiadomości
$subjectRaw = "Nowa wiadomość z formularza: " . $name;

$body = "Nowa wiadomość z formularza na stronie kamilahelta.pl\n\n";
$body .= "--------------------------------------------------\n";
$body .= "Nadawca: " . $name . "\n";
$body .= "E-mail:  " . $email . "\n";
if (!empty($phone)) {
    $body .= "Telefon: " . $phone . "\n";
}
$body .= "Data:    " . date('Y-m-d H:i:s') . "\n";
$body .= "IP:      " . ($_SERVER['REMOTE_ADDR'] ?? 'nieznane') . "\n";
$body .= "--------------------------------------------------\n\n";
$body .= "Treść wiadomości:\n";
$body .= $message . "\n\n";
$body .= "--------------------------------------------------\n";
$body .= "Zgoda RODO została zaakceptowana w formularzu.\n";

$mailSent = false;
$errorDetails = '';

// Sprawdzenie czy hasło zostało uzupełnione
if ($config['USE_SMTP'] && ($config['SMTP_PASS'] === '' || $config['SMTP_PASS'] === 'TUTAJ_WPISZ_HASLO_DO_SKRZYNKI')) {
    $mailSent = false;
    $errorDetails = "Wymagane jest wpisanie hasła do skrzynki formularz@kamilahelta.pl w pliku send-mail.php (w zmiennej SMTP_PASS).";
    logMessage("BŁĄD: " . $errorDetails, $logFile);
} else if ($config['USE_SMTP']) {
    try {
        logMessage("Wysyłanie maila przez SMTP jdm.pl dla {$email}...", $logFile);
        $mailSent = sendViaSmtp(
            $config['SMTP_HOST'],
            $config['SMTP_PORT'],
            $config['SMTP_USER'],
            $config['SMTP_PASS'],
            $config['SMTP_SECURE'],
            $fromEmail,
            $toEmail,
            $email,
            $name,
            $subjectRaw,
            $body
        );
        logMessage("Mail wysłany pomyślnie przez SMTP na adres {$toEmail}.", $logFile);
    } catch (Exception $e) {
        $mailSent = false;
        $errorDetails = "Błąd SMTP: " . $e->getMessage();
        logMessage("BŁĄD SMTP: " . $e->getMessage(), $logFile);
    }
}

// Odpowiedź
if ($mailSent) {
    http_response_code(200);
    echo json_encode([
        'success' => true,
        'message' => 'Dziękuję za wiadomość. Skontaktuję się z Tobą najszybciej, jak to możliwe.'
    ], JSON_UNESCAPED_UNICODE);
} else {
    http_response_code(500);
    $response = [
        'success' => false,
        'message' => 'Wystąpił problem z wysłaniem wiadomości przez serwer pocztowy. Skontaktuj się bezpośrednio pod adresem: ' . $toEmail
    ];
    if ($config['DEBUG_MODE']) {
        $response['debug'] = $errorDetails;
        $response['log_hint'] = 'Szczegóły błędu zapisano w pliku mail_errors.log';
    }
    echo json_encode($response, JSON_UNESCAPED_UNICODE);
}

// =========================================================================
// LEKKI KLIENT SMTP DLA JDM.PL (STARTTLS / SSL)
// =========================================================================
function sendViaSmtp($host, $port, $user, $pass, $secure, $from, $to, $replyTo, $senderName, $subject, $body) {
    $protocol = ($secure === 'ssl') ? 'ssl://' : 'tcp://';
    $context = stream_context_create([
        'ssl' => [
            'verify_peer' => false,
            'verify_peer_name' => false,
            'allow_self_signed' => true
        ]
    ]);

    $socket = @stream_socket_client($protocol . $host . ':' . $port, $errno, $errstr, 15, STREAM_CLIENT_CONNECT, $context);
    if (!$socket) {
        throw new Exception("Nie można połączyć z serwerem SMTP ($host:$port): $errstr ($errno)");
    }

    $read = function() use ($socket) {
        $data = "";
        while ($str = fgets($socket, 515)) {
            $data .= $str;
            if (substr($str, 3, 1) == " ") break;
        }
        return $data;
    };

    $send = function($cmd, $expectedCode = 250) use ($socket, $read) {
        fputs($socket, $cmd . "\r\n");
        $resp = $read();
        $code = (int)substr($resp, 0, 3);
        if ($expectedCode && $code !== $expectedCode) {
            throw new Exception("Błąd komendy '$cmd' (kod $code): $resp");
        }
        return $resp;
    };

    $banner = $read();
    $helloHost = !empty($_SERVER['SERVER_NAME']) ? $_SERVER['SERVER_NAME'] : 'kamilahelta.pl';
    $send("EHLO " . $helloHost);

    if ($secure === 'tls') {
        $send("STARTTLS", 220);
        $cryptoOk = stream_socket_enable_crypto($socket, true, STREAM_CRYPTO_METHOD_TLS_CLIENT);
        if (!$cryptoOk) {
            throw new Exception("Nie udało się nawiązać szyfrowania STARTTLS");
        }
        $send("EHLO " . $helloHost);
    }

    $send("AUTH LOGIN", 334);
    $send(base64_encode($user), 334);
    $send(base64_encode($pass), 235);

    $send("MAIL FROM: <" . $from . ">", 250);
    $send("RCPT TO: <" . $to . ">", 250);
    $send("DATA", 354);

    $encodedSubject = '=?UTF-8?B?' . base64_encode($subject) . '?=';
    $encodedSenderName = '=?UTF-8?B?' . base64_encode($senderName) . '?=';

    $headers = [
        "From: Formularz kontaktowy <" . $from . ">",
        "To: <" . $to . ">",
        "Reply-To: " . $encodedSenderName . " <" . $replyTo . ">",
        "Subject: " . $encodedSubject,
        "Date: " . date("r"),
        "MIME-Version: 1.0",
        "Content-Type: text/plain; charset=UTF-8; format=flowed",
        "Content-Transfer-Encoding: 8bit"
    ];

    $data = implode("\r\n", $headers) . "\r\n\r\n" . $body . "\r\n.";
    $send($data, 250);
    $send("QUIT", 221);
    fclose($socket);

    return true;
}
