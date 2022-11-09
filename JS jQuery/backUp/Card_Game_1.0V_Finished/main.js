import MixCards from "./mixCards.js";
import GameView from "./gameView.js";


let cards = new MixCards();
const view = new GameView(document.body);

let  stopTime, stopShowAll, functions, mixedCards;
const  lives = [3,4,5], easy = [4, 4], normal = [4, 6], hard = [6, 6], diffText = jQuery("#difficulty");
let array = [], alreadyPressed = [], winningArray = cards.dimension(easy[0],easy[1])[0], difficulty = 1,  a = easy[0], b = easy[1], hearts = lives[0];
reloadGame();

$("#difficulty").click(function (){
    difficulty++;
    if (difficulty === 3){
        difficulty = 0;
    }
    reloadGame();
});

function reloadGame(){
    switch (difficulty){
        case 0:
            clearInterval(stopTime);
            clearInterval(stopShowAll);
            mixedCards = cards.mixCards(cards.dimension(easy[0], easy[1]));
            stopTime = view.update(cards.dimension(easy[0], easy[1]),lives[0]);
            diffText.text("Easy");
            console.log("easy: ");
            console.log(mixedCards);
            hearts = lives[0], array = [],  alreadyPressed = [], winningArray = cards.dimension(easy[0], easy[1])[0];
            a = easy[0];
            b = easy[1];
            break;
        case 1:
            clearInterval(stopTime);
            clearInterval(stopShowAll);
            mixedCards = cards.mixCards(cards.dimension(normal[0], normal[1]));
            stopTime = view.update(cards.dimension(normal[0], normal[1]), lives[1]);
            diffText.text("Normal");
            console.log("normal: ");
            console.log(mixedCards);
            hearts = lives[1], array = [],  alreadyPressed = [], winningArray = cards.dimension(normal[0], normal[1])[0];
            a = normal[0];
            b = normal[1];
            break;
        case 2:
            clearInterval(stopTime);
            clearInterval(stopShowAll);
            mixedCards = cards.mixCards(cards.dimension(hard[0], hard[1]));
            stopTime = view.update(cards.dimension(hard[0], hard[1]), lives[2]);
            diffText.text("Hard");
            console.log("hard: ");
            console.log(mixedCards);
            hearts = lives[2], array = [],  alreadyPressed = [], winningArray = cards.dimension(hard[0], hard[1])[0];
            a = hard[0];
            b = hard[1];
            break;
        default:
    }
}

functions = function restartClick() {
    clearInterval(stopShowAll);
    $("#restartBtn").remove();
    reloadGame();
}

// functions = function restartClick() {
//     clearInterval(stopShowAll);
//     $("#restartBtn").remove();
//     array = [], hearts = 3, alreadyPressed = [];
//     mixedCards = cards.mixCards(cards.dimension(a, b));
//     clearInterval(stopTime);
//     stopTime = view.restart(a * b, hearts);
// }

$("#restart").click(functions);

jQuery("#game").on("click", "#restartBtn", functions);

$("#game").on("click", '.gameBoxes', function (event) {
    let index = event.target.dataset.index;
    if (a < b){
        let x = a ;
        a = b;
        b = x;
    }

    let newClick = [parseInt(`${index / a}`), index % a];
    if (alreadyPressed[0] !== index) {
        view.viewNumber(mixedCards[newClick[0]][newClick[1]], index);
        array.push(newClick);
        alreadyPressed.push(index);

        if (array.length === 2) {
            if (mixedCards[array[0][0]][array[0][1]] === mixedCards[array[1][0]][array[1][1]] && winningArray[array[0][0]][array[0][1]] === null && winningArray[array[1][0]][array[1][1]] === null) {
                console.log("success");
                winningArray[array[0][0]][array[0][1]] = mixedCards[array[0][0]][array[0][1]];
                winningArray[array[1][0]][array[1][1]] = mixedCards[array[1][0]][array[1][1]];
                if (!cards.searchArray(winningArray)){
                    console.log("youve won");
                    view.createWinner();
                }
            } else {
                view.hideNumber(alreadyPressed);
                jQuery(`div[data-lives = ${hearts--}]`).removeClass("cRed");

                if (hearts <= 0) {
                    stopShowAll = view.showAll(a, b, mixedCards);
                    view.createRestartBtn();
                }
            }
            array = [];
            alreadyPressed = [];
        }
    } else {
        console.log(array[0] !== index);
    }
});



