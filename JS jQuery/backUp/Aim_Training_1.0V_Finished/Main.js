import Spawner from "./spawner.js";

var shapes = new Spawner();

var stop;

console.log(shapes.createTop());
console.log(shapes.createLeft());


document.querySelector("#stopStart").addEventListener("click", function (evt){
    clearInterval(stop);
    $("#game").empty();
    shapes.createStart();
});
document.querySelector("#game").addEventListener("click", function (evt){
    if (evt.target.classList.contains('start')) {
        $("#game").empty();
        stop = setInterval(function (){
            switch (Math.floor(Math.random() * 3) + 1) {
                case 1:
                    shapes.createCircle();
                    break;
                case 2:
                    shapes.createSquare();
                    break;
                case 3:
                    shapes.createRectangle();
                    break;
                default:
                    shapes.createSquare();
            }
        }, 750);
    }

    if (evt.target.classList.contains('remove')) {
        console.log("yeet");
        evt.target.remove();
    }

});
