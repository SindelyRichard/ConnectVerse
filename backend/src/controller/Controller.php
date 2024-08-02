<?php
require_once '../src/service/Service.php';
class TestController{
    public static function handleRequest($data){
        switch ($data['type']){
            case 'create_post':
                if(isset($data['text'])){
                    $savedData = TestService::saveMessage($data['text']);
                }
        }
    }
}
?>