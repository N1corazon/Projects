<?php
class Cars{

    static $wheel_count = 4;

    static function car_detail(){

        return self::$wheel_count."<br>";
    }

}

class Trucks extends Cars{

    static function display(){

        return parent::car_detail();

    }

}
echo Trucks::display();

//echo Cars::car_detail();