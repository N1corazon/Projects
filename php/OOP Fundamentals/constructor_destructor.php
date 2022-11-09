<?php
class Cars{

    public $wheel_count = 4;

    static $door_count = 4;


    function __construct(){

//        echo $this->wheel_count."<br>";
        echo self::$door_count++."<br>";

    }
    function __destruct(){

//        echo $this->wheel_count."<br>";
        echo self::$door_count--."<br>";

    }
}

$bmw = new Cars();

$bmw2 = new Cars();

$bmw3 = new Cars();



