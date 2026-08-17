<?php
header('Content-Type: application/json; charset=utf-8');

// Allow only POST method
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode([
        'success' => false,
        'message' => 'Metoda niedozwolona. Użyj POST.'
    ], JSON_UNESCAPED_UNICODE);
    exit;
}

// Support both JSON payload and standard form data
$contentType = isset($_SERVER['CONTENT_TYPE']) ? trim($_SERVER['CONTENT_TYPE']) : '';
if (strpos($contentType, 'application/json') !== false) {
    $input = file_get_contents('php://input');
    $data = json_decode($input, true) ?? [];
} else {
    $data = $_POST;
}

// Honeypot check for spam bots
if (!empty($data['website'])) {
    // Silently return success to bot without sending email
    echo json_encode([
        'success' => true,
        'message' => 'Dziękujemy za wiadomość.'
    ], JSON_UNESCAPED_UNICODE);
    exit;
}

// Extract and sanitize fields
$name = isset($data['name']) ? trim(strip_tags($data['name'])) : '';
$email = isset($data['email']) ? trim($data['email']) : '';
$phone = isset($data['phone']) ? trim(strip_tags($data['phone'])) : '';
$message = isset($data['message']) ? trim(strip_tags($data['message'])) : '';
$rodoConsent = isset($data['rodoConsent']) ? (bool)$data['rodoConsent'] : false;

// Validation
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

// Prevent header injection in email address and name
if (preg_match("/[\r\n]/", $name) || preg_match("/[\r\n]/", $email)) {
    $errors[] = 'Wykryto nieprawidłowe znaki w formularzu.';
}

if (!empty($errors)) {
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'message' => implode(' ', $errors),
        'errors' => $errors
    ], JSON_UNESCAPED_UNICODE);
    exit;
}

// Configuration
$toEmail = 'olaf.koziara@gmail.com';
$subjectRaw = "Nowa wiadomość z formularza: " . $name;
$subject = '=?UTF-8?B?' . base64_encode($subjectRaw) . '?=';

// Message body
$body = "Nowa wiadomość przesłana z formularza kontaktowego na stronie helta.pl\n\n";
$body .= "--------------------------------------------------\n";
$body .= "Nadawca: " . $name . "\n";
$body .= "E-mail:  " . $email . "\n";
if (!empty($phone)) {
    $body .= "Telefon: " . $phone . "\n";
}
$body .= "Data:    " . date('Y-m-d H:i:s') . "\n";
$body .= "--------------------------------------------------\n\n";
$body .= "Treść wiadomości:\n";
$body .= $message . "\n\n";
$body .= "--------------------------------------------------\n";
$body .= "Zgoda RODO została zaakceptowana w formularzu.\n";

// Email headers
// To avoid SPF/DMARC rejection on modern mail servers, From should match the domain server
$serverHost = !empty($_SERVER['SERVER_NAME']) ? $_SERVER['SERVER_NAME'] : 'helta.pl';
$fromEmail = 'formularz@' . ltrim($serverHost, 'www.');

$headers = [
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8; format=flowed',
    'Content-Transfer-Encoding: 8bit',
    'From: Formularz kontaktowy <' . $fromEmail . '>',
    'Reply-To: ' . $email,
    'X-Mailer: PHP/' . phpversion()
];

$mailSent = @mail($toEmail, $subject, $body, implode("\r\n", $headers));

if ($mailSent) {
    http_response_code(200);
    echo json_encode([
        'success' => true,
        'message' => 'Dziękuję za wiadomość. Skontaktuję się z Tobą najszybciej, jak to możliwe.'
    ], JSON_UNESCAPED_UNICODE);
} else {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Wystąpił błąd podczas wysyłania wiadomości. Prosimy o kontakt bezpośredni: ' . $toEmail
    ], JSON_UNESCAPED_UNICODE);
}
