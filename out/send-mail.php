<?php
// Włącz raportowanie błędów do bufora
ini_set('display_errors', 0);
error_reporting(E_ALL);

header('Content-Type: application/json; charset=utf-8');

// =========================================================================
// KONFIGURACJA POCZTY I LOGÓW
// =========================================================================
$toEmail = 'kamila@helta.pl';
$fromEmail = 'kamila@helta.pl';

// Ścieżka do pliku logów (zapisuje się w tym samym folderze co skrypt)
$logFile = __DIR__ . '/mail_errors.log';

$config = [
    'DEBUG_MODE' => true,                  // Zwracaj szczegółowe błędy w odpowiedzi JSON
    'USE_SMTP'   => false,                 // true = wysyłka przez SMTP, false = funkcja mail()
    'SMTP_HOST'  => 'mail.kamilahelta.pl', // np. mail.kamilahelta.pl lub sX.twojhosting.pl
    'SMTP_PORT'  => 465,                   // 465 dla SSL, 587 dla TLS
    'SMTP_SECURE'=> 'ssl',                 // 'ssl' lub 'tls'
    'SMTP_USER'  => 'kamila@helta.pl',
    'SMTP_PASS'  => '',                    // hasło do skrzynki (wymagane przy USE_SMTP => true)
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
    $mailDisabled = in_array('mail', $disabledFunctions);
    $fsockopenDisabled = in_array('fsockopen', $disabledFunctions);

    echo json_encode([
        'php_version' => phpversion(),
        'sendmail_path' => ini_get('sendmail_path'),
        'mail_function_enabled' => !$mailDisabled,
        'fsockopen_enabled' => !$fsockopenDisabled,
        'log_file_writable' => is_writable(__DIR__) || (file_exists($logFile) && is_writable($logFile)),
        'log_file_path' => $logFile,
        'disabled_functions' => $disabledFunctions,
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

// Odczyt danych
$contentType = isset($_SERVER['CONTENT_TYPE']) ? trim($_SERVER['CONTENT_TYPE']) : '';
if (strpos($contentType, 'application/json') !== false) {
    $input = file_get_contents('php://input');
    $data = json_decode($input, true) ?? [];
} else {
    $data = $_POST;
}

// Honeypot dla botów
if (!empty($data['website'])) {
    logMessage("SPAM BOT zablokowany (honeypot): " . json_encode($data, JSON_UNESCAPED_UNICODE), $logFile);
    echo json_encode(['success' => true, 'message' => 'Dziękujemy za wiadomość.'], JSON_UNESCAPED_UNICODE);
    exit;
}

// Pobranie i czyszczenie pól
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
$subject = '=?UTF-8?B?' . base64_encode($subjectRaw) . '?=';

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
$body .= "Zgoda RODO została zaznaczona.\n";

$mailSent = false;
$errorDetails = '';

// 1. WYSYŁKA PRZEZ SMTP
if ($config['USE_SMTP'] && !empty($config['SMTP_PASS'])) {
    try {
        logMessage("Rozpoczynanie wysyłki przez SMTP ($config[SMTP_HOST]:$config[SMTP_PORT])...", $logFile);
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
        logMessage("Wysyłka SMTP zakończona sukcesem dla: $email", $logFile);
    } catch (Exception $e) {
        $mailSent = false;
        $errorDetails = "SMTP Error: " . $e->getMessage();
        logMessage("BŁĄD SMTP: " . $e->getMessage(), $logFile);
    }
} else {
    // 2. WYSYŁKA PRZEZ FUNKCJĘ PHP mail()
    $headers = [
        'MIME-Version: 1.0',
        'Content-Type: text/plain; charset=UTF-8; format=flowed',
        'Content-Transfer-Encoding: 8bit',
        'From: Formularz kontaktowy <' . $fromEmail . '>',
        'Reply-To: ' . $name . ' <' . $email . '>',
        'X-Mailer: PHP/' . phpversion()
    ];
    $headerString = implode("\r\n", $headers);

    logMessage("Próba wysłania funkcji mail() na adres: $toEmail od: $fromEmail (Reply-To: $email)", $logFile);

    // Próba z parametrem -f
    $mailSent = @mail($toEmail, $subject, $body, $headerString, "-f" . $fromEmail);

    if (!$mailSent) {
        // Próba bez parametru -f
        $mailSent = @mail($toEmail, $subject, $body, $headerString);
    }

    if ($mailSent) {
        logMessage("Funkcja mail() zwróciła TRUE dla: $email", $logFile);
    } else {
        $lastErr = error_get_last();
        $errorDetails = "mail() returned false. " . ($lastErr['message'] ?? 'Brak komunikatu systemowego (często zablokowane sendmail/brak serwera MTA na hostingu)');
        logMessage("BŁĄD mail(): " . $errorDetails, $logFile);
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
        $response['log_hint'] = 'Szczegóły zostały zapisane w pliku mail_errors.log na serwerze';
    }
    echo json_encode($response, JSON_UNESCAPED_UNICODE);
}

// =========================================================================
// KLIENT SMTP
// =========================================================================
function sendViaSmtp($host, $port, $user, $pass, $secure, $from, $to, $replyTo, $senderName, $subject, $body) {
    $protocol = ($secure === 'ssl') ? 'ssl://' : '';
    $context = stream_context_create([
        'ssl' => [
            'verify_peer' => false,
            'verify_peer_name' => false,
            'allow_self_signed' => true
        ]
    ]);

    $socket = @stream_socket_client($protocol . $host . ':' . $port, $errno, $errstr, 15, STREAM_CLIENT_CONNECT, $context);
    if (!$socket) {
        throw new Exception("Nie można połączyć z $host:$port -> $errstr ($errno)");
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
            throw new Exception("Błąd komendy '$cmd': $resp");
        }
        return $resp;
    };

    $read();
    $helloHost = !empty($_SERVER['SERVER_NAME']) ? $_SERVER['SERVER_NAME'] : 'localhost';
    $send("EHLO " . $helloHost);

    if ($secure === 'tls') {
        $send("STARTTLS", 220);
        stream_socket_enable_crypto($socket, true, STREAM_CRYPTO_METHOD_TLS_CLIENT);
        $send("EHLO " . $helloHost);
    }

    $send("AUTH LOGIN", 334);
    $send(base64_encode($user), 334);
    $send(base64_encode($pass), 235);

    $send("MAIL FROM: <" . $from . ">");
    $send("RCPT TO: <" . $to . ">");
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
