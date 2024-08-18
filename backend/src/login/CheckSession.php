<?php
session_start();
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");



$loggedIn = isset($_SESSION['username']);
echo json_encode(['loggedIn' => $loggedIn]);

?>