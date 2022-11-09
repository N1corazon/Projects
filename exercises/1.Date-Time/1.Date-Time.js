var today = new Date();
var day = today.getDay();
var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
console.log("Today is : " + daylist[day] + ".");

var hours = today.getHours();
var minutes = today.getMinutes();
var seconds = today.getSeconds();
let prepand = (hours>=12)? " PM " : " AM ";
let late = 0;

hours = (hours > 12) ? hours - 12 : hours;
if (hours === 0 && prepand ===" PM "){
    if (minutes === 0 && seconds === 0){
        hours = 12;
        prepand = " Noon ";
    }else{
        hours = 12;
    }
}
if (hours === 0 && prepand === " AM "){
    if (minutes === 0 && seconds === 0) {
        hours = 12;
        prepand = " Midnight ";
    }else{
        hours = 12;
    }
}

console.log("Current time is : " + hours + prepand + ": " + minutes + " : " + seconds);
