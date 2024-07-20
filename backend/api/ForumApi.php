<?php
require_once '../src/controller/Controller.php';

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

echo json_encode(['message' => TestController::getMessage()]);
?>