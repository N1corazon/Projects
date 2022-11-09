import Asad from "./game.js";
import gameView from "./gameView.js"

let asd = new Asad();
let GV = new gameView(document.getElementById("hehe"));


GV.onSpaceClick = function (a){
    asd.makeMove(a);
    GV.update(asd);
}

GV.onRestartClick = function(){
    asd = new Asad();
    GV.update(asd);
}


console.log(asd.board);




console.log(asd.board);

