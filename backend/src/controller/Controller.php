<?php
require_once '../src/service/Service.php';
class TestController{
    public static function getMessage(){
        return TestService::message();
    }
}
?>