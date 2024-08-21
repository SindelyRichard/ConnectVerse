<?php

require_once '../entities/User.php';
require '../vendor/autoload.php';
use MongoDB\Client as MongoClient;
class TestService{
    private static $client = null;

    private static function getClient() {
        if (self::$client === null) {
            
            self::$client = new MongoClient('mongodb://localhost:27017'); 
        }
        return self::$client;
    }

    public static function saveMessage($message,$date) {
        $client = self::getClient();
        $collection = $client->forumTest->test;
        
        $result = $collection->insertOne(['message' => $message, 'date' => $date]);
        return $result->getInsertedCount() === 1;
    }

    public static function checkUsername($username){
        $client = self::getClient();
        $collection = $client->forumTest->users;
        
        $user = $collection->findOne(['username' => $username]);
        return $user !== null;
    }

    public static function saveUser(User $user){
        $client = self::getClient();
        $collection = $client->forumTest->users;

        $result = $collection->insertOne(['username' => $user->getUsername(),'password' => $user->getPassword()]);
        return $result->getInsertedCount() === 1;
    }

    public static function checkUser(User $user){
        $client = self::getClient();
        $collection = $client->forumTest->users;

        $result = $collection->findOne(['username' => $user->getUsername(),'password' => $user->getPassword()]);
        
        return $result !== null;
    }
}
?>