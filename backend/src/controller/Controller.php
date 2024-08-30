<?php session_start();
require_once '../src/service/Service.php';
require_once '../entities/User.php';

class TestController{
    public static function handleRequest($data){
        switch ($data['type']){

            case 'create_post':
                if(isset($data['text']) && isset($data['date']) && isset($data['username'])){
                    $text = $data['text'];
                    $date = $data['date'];
                    $username = $data['username'];
                    $savedData = TestService::saveMessage($text,$date,$username);
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

            case 'login':
                if(isset($data['username']) && isset($data['password'])){
                    $username = $data['username'];
                    $password = $data['password'];
                    $user = new User($username,$password);
                    $getUser = TestService::checkUser($user);
                    
                    if($getUser === false){
                        return ['success' => false];
                    }else{
                        $_SESSION['username']=$user->getUsername();
                        return ['success' => true];
                    }
                }
                break;
        }
    }

    public static function handlePosts($page = 1,$limit = 30){
        return TestService::getPosts($page,$limit);
    }
}
?>