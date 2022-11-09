import Game from "./ticGame.js";
import GameView from "./ticGameView.js";

let game = new Game();
let gameView = new GameView(document.getElementById("app"));

gameView.onTileClick = function (i) {
    game.makeMove(i);
    gameView.update(game);
}

gameView.onRestartClick = function () {
    game = Game();
    gameView.update(game);
}

// console.log(game.board);
//
// game.makeMove(1);
// game.makeMove(3);
// game.makeMove(4);
// game.makeMove(5);
// game.makeMove(7);
// game.makeMove(8);
//
// console.log(game.board);
// game.findWinningCombination();