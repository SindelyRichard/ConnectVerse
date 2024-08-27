<?php
class Forum {
    private $id;
    private $username;
    private $message;
    private $date;

    public function __construct($id,$username,$message,$date){
        $this->id = $id;
        $this->username = $username;
        $this->message = $message;
        $this->date = $date;
    }
    public function getId(){
        return $this->id;
    }
    public function getUsername(){
        return $this->username;
    }

    public function getMessage(){
        return $this->message;
    }

    public function getDate(){
        return $this->date;
    }

    public function setUsername($username){
        $this->username = $username;
    }

    public function setMessage($message){
        $this->message = $message;

    }

    public function setDate($date){
        $this->date = $date;
    }
}
?>