<?php

class Cars{

    var $wheels=4;

    function gretting(){


    }

}



$bmw = new Cars();



class Trucks extends Cars{

    var $wheels = 10;


}


$toyota = new Trucks();

echo $toyota->wheels;



















