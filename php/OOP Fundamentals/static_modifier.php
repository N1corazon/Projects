<?php
class Cars{

    static $wheel_count = 4;
    static $door_count = 4;

    static function car_detail(){

        echo Cars::$wheel_count."<br>";

        echo Cars::$door_count."<br>";

    }

}

echo Cars::$door_count;

echo Cars::car_detail();