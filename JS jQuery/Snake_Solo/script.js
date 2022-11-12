$(function () {
    let gameArea = $("#game-area");
    let maxGameSize = 20;
    let currentPlayerDir = 1;
    let playerLength = 4;
    let frameCount = 0;


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
            currentPlayerDir = playerDir["up"];
        }
        else if (event.keyCode == '40') {
            currentPlayerDir = playerDir["down"];
        }
        else if (event.keyCode == '37') {
            currentPlayerDir = playerDir["left"];
        }
        else if (event.keyCode == '39') {
            if
            currentPlayerDir = playerDir["right"];
        }
    })

    function drawGame() {
        for (let index = 0; index < maxGameSize; index++) {
            gameArea.append("<tr class='tr" + index + "'></tr>");

            let thisTr = $(".tr" + index);
            for (let indexTd = 0; indexTd < maxGameSize; indexTd++) {
                thisTr.append("<td class='tr" + index + "td" + indexTd + "'></td>");
            }
        }
    }

    drawGame();

    function drawPlayer() {
        frameCount++;

        let drawPlayer = $(".tr" + playerPos["tr"] + "td" + playerPos["td"]);
        drawPlayer.addClass("draw-player frameCount" + frameCount);

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

        let removeTail = frameCount - playerLength;
        let removeTailClass = $(".frameCount" + removeTail);
        removeTailClass.removeClass("draw-player frameCount" + removeTail);
    }

    setInterval(function () {
        drawPlayer();

    }, 200);

});