<?php
class Forum {
    private $name;
    private $text;
    private $date;

    public function __construct($name,$text,$date){
        $this->name = $name;
        $this->text = $text;
        $this->date = $date;
    }
    public function getName(){
        return $this->name;
    }

    public function getText(){
        return $this->text;
    }

    public function getDate(){
        return $this->date;
    }

    public function setName($name){
        $this->name = $name;
    }

    public function setText($text){
        $this->text = $text;

    }

    public function setDate($date){
        $this->date = $date;
    }
}
?>