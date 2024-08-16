<?php
require_once '../src/service/Service.php';
require_once '../entities/User.php';
class TestController{
    public static function handleRequest($data){
        switch ($data['type']){

            case 'create_post':
                if(isset($data['text']) && isset($data['date'])){
                    $text = $data['text'];
                    $date = $data['date'];
                    $savedData = TestService::saveMessage($text,$date);
                }
            break;

            case 'check_username':
                if (isset($data['username'])) {
                    $username = $data['username'];
                    $exists = TestService::checkUsername($username);
                    return ['exists' => $exists];
                }
            break;

            case 'register_user':
                if(isset($data['username']) &&isset($data['password'])){
                    $username = $data['username'];
                    $password = $data['password'];
                    $user = new User($username,$password);
                    $saveUser = TestService::saveUser($user);
                    return ['success' => $saveUser];
                }
            break;
        }
    }
}
?>