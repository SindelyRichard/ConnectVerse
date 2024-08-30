<?php

require_once '../entities/User.php';
require_once '../entities/Forum.php';
require '../vendor/autoload.php';
use MongoDB\Client as MongoClient;
use Ramsey\Uuid\Uuid;

class TestService{
    private static $client = null;

    private static function getClient() {
        if (self::$client === null) {
            
            self::$client = new MongoClient('mongodb://localhost:27017'); 
        }
        return self::$client;
    }

    public static function getPosts($page = 1,$limit = 30){
        $client = self::getClient();
        $collection = $client->forumTest->test;

        $skip = ($page - 1) * $limit;

        $totalPosts = $collection->countDocuments();

        $result = $collection->find([],['sort' => ['date' => 1],'skip' => $skip,'limit' => $limit]);
        
        $posts = [];
        foreach ($result as $item) {
            $posts[]=[
            'id' => $item->_id,
            'username' => $item->username,
            'message' => $item->message,
            'date' => $item->date
            ];
        }
        return ['posts' => $posts,'totalPosts' => $totalPosts];
    }

    public static function saveMessage($message,$date,$username) {
        $client = self::getClient();
        $collection = $client->forumTest->test;
        $uuid=Uuid::uuid4();
        
        $result = $collection->insertOne(['_id' => $uuid->toString(),'username' => $username,'message' => $message, 'date' => $date]);
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
        $hashedPassword = password_hash($user->getPassword(),PASSWORD_BCRYPT);

        $result = $collection->insertOne(['username' => $user->getUsername(),'password' => $hashedPassword]);
        return $result->getInsertedCount() === 1;
    }

    public static function checkUser(User $user){
        $client = self::getClient();
        $collection = $client->forumTest->users;

        $result = $collection->findOne(['username' => $user->getUsername()]);
        if($result !== null){
            if(password_verify($user->getPassword(),$result->password)){
            return true;
            }
        }
        return false;
    }
}
?>