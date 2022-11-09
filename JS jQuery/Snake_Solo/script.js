$(function (){
    let gameArea = $("#game-area");
    let maxGameSize = 20;

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



    function drawGame(){
        for (let index = 0; index < maxGameSize; index++){
            gameArea.append("<tr class='tr" + index + "'></tr>" );

            let thisTr = $(".tr" + index);
            for (let indexTd = 0; indexTd < maxGameSize; indexTd++){
                thisTr.append("<td class='tr" + index + "td" + indexTd + "'></td>");
            }
        }
    }
    drawGame();

    function drawPlayer(){

    }
});