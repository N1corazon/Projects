import Spawner from "./spawner.js";

var shapes = new Spawner();

var stop;

let count, speed, score = 0;


document.querySelector("#stopStart").addEventListener("click", function (evt) {
    clearInterval(stop);
    $("#game").empty();
    shapes.createStart();
});

document.querySelector("#game").addEventListener("click", function (evt) {
    if (evt.target.classList.contains('start')) {//for the start btn after first stop
        speed = $("#speed").val() ? $("#speed").val() : $("#speed").attr("placeholder");

        $("#game").empty();
        stop = setInterval(function () {
            switch (Math.floor(Math.random() * 4) + 1) {
                case 1:
                    shapes.createCircle();
                    break;
                case 2:
                    shapes.createSquare();
                    break;
                case 3:
                    shapes.createRectangle();
                    break;
                case 4:
                    shapes.createTriangle();
                    break;
                default:
                    shapes.createSquare();
            }
        }, speed);
        count = -1;
        score = 0;
    }


    if (evt.target.classList.contains('remove')) {
        if (!evt.target.remove()) {
            console.log("yes")
            score++;
            count++;
        }
    } else {
        count++;
    }

    if (count > 0) {
        document.getElementById("score").textContent = "Score: " + score
            + " Accuracy: " + (score / count * 100).toFixed(2) + "% ";
    }
});
