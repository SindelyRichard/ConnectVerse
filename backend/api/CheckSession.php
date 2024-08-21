<?php session_start();
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header('Content-Type: application/json');
header("Access-Control-Allow-Credentials: true");


$loggedIn = isset($_SESSION['username']);
echo json_encode(['loggedIn' => $loggedIn]);
?>