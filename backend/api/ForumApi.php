<?php session_start();
require_once '../src/controller/Controller.php';

header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header('Content-Type: application/json');
header("Access-Control-Allow-Credentials: true");

$input = json_decode(file_get_contents('php://input'), true);
$response = TestController::handleRequest($input);

if (isset($response['success']) && $response['success'] === true && isset($input['type']) && $input['type'] === 'login') {
    $_SESSION['username'] = $input['username'];
}

echo json_encode($response);
?>