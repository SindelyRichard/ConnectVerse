<?php
session_start();
require_once '../src/controller/Controller.php';

class Login{
    public static function login(User $user){
      $_SESSION['username'] = $user->getUsername();
            return true;
        }
}

?>