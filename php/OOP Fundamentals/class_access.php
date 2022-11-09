<?php
class Cars{

    public $wheel_count = 4;
    private $door_count = 4;
    protected $seat_count = 2;

    function car_detail(){

        echo $this->wheel_count."<br>";

        echo $this->door_count."<br>";

        echo $this->seat_count."<br>";

    }
}

$bmw = new Cars();
$mercedes = new Cars();

//echo $bmw->wheel_count;
//echo $bmw->door_count;
//echo $bmw->seat_count;
echo $bmw->car_detail();