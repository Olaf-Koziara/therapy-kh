<?php
header('Content-Type: application/json; charset=utf-8');

// =========================================================================
// KONFIGURACJA POCZTY
// =========================================================================
// 1. Docelowy adres, na który mają przychodzić wiadomości:
$toEmail = 'olaf.koziara@gmail.com';

// 2. Adres nadawcy (From):
// Na większości hostingów (np. Cyberfolks, LH.pl, OVH, Home.pl) From MUSI być
// prawdziwą, istniejącą skrzynką w domenie (np. kamila@helta.pl lub kontakt@helta.pl).
$fromEmail = 'formularz@kamilahelta.pl';

// 3. Jeśli Twój hosting blokuje funkcję PHP mail(), włącz SMTP poniżej (zmień USE_SMTP na true):
$config = [
    'USE_SMTP'   => true,                 // true = wysyłaj przez SMTP, false = funkcja mail()
    'SMTP_HOST'  => 'smtp.jdm.pl', // np. mail.kamilahelta.pl lub smtp.twojhosting.pl
    'SMTP_PORT'  => 587,                   // 465 dla SSL, 587 dla TLS/STARTTLS
    'SMTP_SECURE'=> 'tls',                 // 'ssl' lub 'tls'
    'SMTP_USER'  => 'formularz@kamilahelta.pl',     // login do skrzynki e-mail
    'SMTP_PASS'  => '2iID8LzYt7DJcJlc',                    // hasło do skrzynki e-mail
];

// =========================================================================
// OBSŁUGA ŻĄDANIA
// =========================================================================

// Tylko żądania POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode([
        'success' => false,
        'message' => 'Metoda niedozwolona. Użyj POST.'
    ], JSON_UNESCAPED_UNICODE);
    exit;
}

// Odczyt danych (JSON lub klasyczny formularz POST)
$contentType = isset($_SERVER['CONTENT_TYPE']) ? trim($_SERVER['CONTENT_TYPE']) : '';
if (strpos($contentType, 'application/json') !== false) {
    $input = file_get_contents('php://input');
    $data = json_decode($input, true) ?? [];
} else {
    $data = $_POST;
}

// Honeypot dla botów spamujących
if (!empty($data['website'])) {
    echo json_encode([
        'success' => true,
        'message' => 'Dziękujemy za wiadomość.'
    ], JSON_UNESCAPED_UNICODE);
    exit;
}

// Pobieranie i sanityzacja pól
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

// Zabezpieczenie przed wstrzykiwaniem nagłówków
if (preg_match("/[\r\n]/", $name) || preg_match("/[\r\n]/", $email)) {
    $errors[] = 'Wykryto nieprawidłowe znaki w formularzu.';
}

if (!empty($errors)) {
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'message' => implode(' ', $errors),
        'errors'  => $errors
    ], JSON_UNESCAPED_UNICODE);
    exit;
}

// Treść i temat
$subjectRaw = "Nowa wiadomość z formularza: " . $name;
$subject = '=?UTF-8?B?' . base64_encode($subjectRaw) . '?=';

$body = "Nowa wiadomość z formularza kontaktowego na stronie kamilahelta.pl\n\n";
$body .= "--------------------------------------------------\n";
$body .= "Nadawca: " . $name . "\n";
$body .= "E-mail:  " . $email . "\n";
if (!empty($phone)) {
    $body .= "Telefon: " . $phone . "\n";
}
$body .= "Data:    " . date('Y-m-d H:i:s') . "\n";
$body .= "--------------------------------------------------\n\n";
$body .= "Wiadomość:\n";
$body .= $message . "\n\n";
$body .= "--------------------------------------------------\n";
$body .= "Zgoda RODO została zaakceptowana.\n";

$mailSent = false;
$errorDetails = '';

// 1. WYSYŁKA PRZEZ SMTP (jeśli włączona)
if ($config['USE_SMTP'] && !empty($config['SMTP_PASS'])) {
    try {
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
    } catch (Exception $e) {
        $mailSent = false;
        $errorDetails = $e->getMessage();
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

    // Próba 1: z parametrem envelope sender (-f) - wymagane przez większość serwerów
    $mailSent = @mail($toEmail, $subject, $body, $headerString, "-f" . $fromEmail);

    // Próba 2: bez parametru -f jeśli pierwsza nie zadziałała
    if (!$mailSent) {
        $mailSent = @mail($toEmail, $subject, $body, $headerString);
    }

    if (!$mailSent) {
        $lastErr = error_get_last();
        if (!empty($lastErr['message'])) {
            $errorDetails = $lastErr['message'];
        }
    }
}

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
    if (!empty($errorDetails)) {
        $response['debug'] = $errorDetails;
    }
    echo json_encode($response, JSON_UNESCAPED_UNICODE);
}

// =========================================================================
// WBUDOWANY LEKKI KLIENT SMTP (bez zewnętrznych bibliotek)
// =========================================================================
function sendViaSmtp($host, $port, $user, $pass, $secure, $from, $to, $replyTo, $senderName, $subject, $body) {
    $protocol = ($secure === 'ssl') ? 'ssl://' : '';
    $socket = @fsockopen($protocol . $host, $port, $errno, $errstr, 15);
    if (!$socket) {
        throw new Exception("Błąd połączenia z serwerem SMTP ($host:$port): $errstr ($errno)");
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
            throw new Exception("Błąd SMTP przy '$cmd': $resp");
        }
        return $resp;
    };

    $read(); // Witaj banner

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
