<?php

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

    public static function saveMessage($message) {
        $client = self::getClient();
        $collection = $client->forumTest->test;
        
        $result = $collection->insertOne(['message' => $message]);
        return $result->getInsertedCount() === 1;
    }
}
?>