<?php
// CORS Headers
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Accept");
header("Content-Type: application/json; charset=UTF-8");

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit();
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(["error" => "Method not allowed"]);
    exit();
}

$rawInput = file_get_contents('php://input');
$data = json_decode($rawInput, true);

if (!$data) {
    http_response_code(400);
    echo json_encode(["error" => "Invalid JSON payload"]);
    exit();
}

// Honeypot anti-spam check
if (!empty($data['website'])) {
    // Silently return success to mislead spambots
    echo json_encode(["success" => true]);
    exit();
}

$name = trim($data['name'] ?? '');
$institution = trim($data['institution'] ?? '');
$email = trim($data['email'] ?? '');
$phone = trim($data['phone'] ?? '');

if (empty($name) || empty($email) || empty($phone)) {
    http_response_code(400);
    echo json_encode(["error" => "Missing required fields"]);
    exit();
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(["error" => "Invalid email format"]);
    exit();
}

// Configurable destination email (change to your preferred notification email)
$to = "info@russyna.com";
$subject = "Nova solicitação de demonstração - Gestrif (" . ($institution ? $institution : $name) . ")";

$message = "Nova solicitação de demonstração recebida pelo site Gestrif:\n\n";
$message .= "Nome: " . $name . "\n";
$message .= "Instituição: " . $institution . "\n";
$message .= "Email: " . $email . "\n";
$message .= "Telefone: " . $phone . "\n";
$message .= "Data/Hora: " . date('Y-m-d H:i:s') . "\n";

$headers = [];
$fromHost = !empty($_SERVER['HTTP_HOST']) ? $_SERVER['HTTP_HOST'] : 'juanpablosilva.com.br';
$headers[] = "From: Gestrif <no-reply@" . $fromHost . ">";
$headers[] = "Reply-To: " . $name . " <" . $email . ">";
$headers[] = "X-Mailer: PHP/" . phpversion();

$sent = @mail($to, $subject, $message, implode("\r\n", $headers));

if ($sent) {
    echo json_encode(["success" => true, "message" => "Solicitação enviada com sucesso"]);
} else {
    http_response_code(500);
    echo json_encode(["error" => "Failed to dispatch email via mail server"]);
}
