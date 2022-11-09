<?php
class Cars{

    private $door_count = 4;

    function get_values(){

        echo $this->door_count."<br>";


    }

    function set_values(){

       echo $this->door_count = 10;
    }
}

$bmw = new Cars();

$bmw->get_values();

$bmw->set_values();

$bmw->get_values();