$(function () {
    let gameArea = $("#game-area");
    let maxGameSize = 20;
    let currentPlayerDir = 1;
    let playerLength = 4;
    let frameCount = 0;
    let score = 0;
    let pointPos;

    let playerPos = {
        "tr": 9,
        "td": 9
    }

    let playerDir = {
        "up": 1,
        "right": 2,
        "down": 3,
        "left": 4
    }

    document.addEventListener("keydown", function (event) {
        if (event.keyCode == '38') {
            if (currentPlayerDir !== 3) {
                currentPlayerDir = playerDir["up"];
            }
        } else if (event.keyCode == '40') {
            if (currentPlayerDir !== 1) {
                currentPlayerDir = playerDir["down"];
            }
        } else if (event.keyCode == '37') {
            if (currentPlayerDir !== 2) {
                currentPlayerDir = playerDir["left"];
            }
        } else if (event.keyCode == '39') {
            if (currentPlayerDir !== 4) {
                currentPlayerDir = playerDir["right"];
            }
        }
    });

    function drawPoint() {
        let pointPosX = Math.floor(Math.random() * maxGameSize) + 0;
        console.log(pointPosX)
        let pointPosY = Math.floor(Math.random() * maxGameSize) + 0;
        console.log(pointPosY)

        pointPos = {
            "tr": pointPosY,
            "td": pointPosX
        }

        $(".tr" + pointPos["tr"] + "td" + pointPos["td"]).addClass("draw-point");
    }

    function eatPoint() {
        $(".tr" + pointPos["tr"] + "td" + pointPos["td"]).removeClass("draw-point");

        let pointPosX = Math.floor(Math.random() * maxGameSize) + 0;
        console.log(pointPosX)
        let pointPosY = Math.floor(Math.random() * maxGameSize) + 0;
        console.log(pointPosY)

        pointPos = {
            "tr": pointPosY,
            "td": pointPosX
        }

        $(".tr" + pointPos["tr"] + "td" + pointPos["td"]).addClass("draw-point");

    }

    function drawGame() {
        for (let index = 0; index < maxGameSize; index++) {
            gameArea.append("<tr class='tr" + index + "'></tr>");

            let thisTr = $(".tr" + index);
            for (let indexTd = 0; indexTd < maxGameSize; indexTd++) {
                thisTr.append("<td class='tr" + index + "td" + indexTd + "'></td>");
            }
        }
    }

    function drawPlayer() {
        frameCount++;

        switch (currentPlayerDir) {
            case 1:
                playerPos["tr"]--;
                break;
            case 2:
                playerPos["td"]++;

                break;
            case 3:
                playerPos["tr"]++;

                break;
            case 4:
                playerPos["td"]--;

                break;
            default :

        }

        let drawPlayer = $(".tr" + playerPos["tr"] + "td" + playerPos["td"]);
        drawPlayer.addClass("draw-player frameCount" + frameCount);

        let removeTail = frameCount - playerLength;
        let removeTailClass = $(".frameCount" + removeTail);
        removeTailClass.removeClass("draw-player frameCount" + removeTail);
    }

    function deathEvent() {
        $("#game-status").text("You lose!!!");
    }

    function pointEatingEvent(){
        $("#game-score").text(score);
    }

    drawGame();

    drawPoint();

    pointEatingEvent();

    let intervalId = setInterval(function () {
        let stopGame = intervalId;
        let potPlayerPos = {
            "tr": playerPos["tr"],
            "td": playerPos["td"]
        }

        switch (currentPlayerDir) {
            case 1:
                potPlayerPos["tr"]--;
                break;
            case 2:
                potPlayerPos["td"]++;
                break;
            case 3:
                potPlayerPos["tr"]++;
                break;
            case 4:
                potPlayerPos["td"]--;
                break;
            default :
        }

        // Death by wall
        if (playerPos["tr"] > 19 || playerPos["td"] > 19 || playerPos["tr"] < 0 || playerPos["td"] < 0) {
            deathEvent();
            clearInterval(stopGame);
        }
        // Death by eating tail
        else if ($(".tr" + potPlayerPos["tr"] + "td" + potPlayerPos["td"]).hasClass("draw-player")) {
            deathEvent();
            clearInterval(stopGame);
        }
        // Eating point
        else if (pointPos["tr"] === playerPos["tr"] && pointPos["td"] === playerPos["td"]) {
            score++;
            pointEatingEvent();
            eatPoint();
            playerLength++;
            drawPlayer();
        }else{
            drawPlayer();
        }
    }, 300);

    //if you bite the tail you lose the end
    //points not spawning inside the player
});