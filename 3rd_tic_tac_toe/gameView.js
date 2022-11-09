export default class gameView {

    constructor(root) {
        this.root = root;
        this.root.innerHTML = `
                     <div class="header">
                        <div class="row">
                            <div class="col-3">
                                <div class="turn">
                                   X's turn
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="inProgress">
                                   in progress
                                </div>
                            </div>
                            <div class="col-3">
                                <div class="restart">
                                    RE
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="game">
                        <div class="board__space" data-index="0"></div>
                        <div class="board__space" data-index="1"></div>
                        <div class="board__space" data-index="2"></div>
                        <div class="board__space" data-index="3"></div>
                        <div class="board__space" data-index="4"></div>
                        <div class="board__space" data-index="5"></div>
                        <div class="board__space" data-index="6"></div>
                        <div class="board__space" data-index="7"></div>
                        <div class="board__space" data-index="8"></div>
                    </div>
        `;
        this.onSpaceClick = undefined;
        this.onRestartClick = undefined;


        this.root.querySelectorAll(".board__space").forEach(space => {
            space.addEventListener("click", () => {
                if (this.onSpaceClick) {
                    this.onSpaceClick(space.dataset.index);
                    // console.log("2");
                }
            });
        });

        document.querySelector(".restart").addEventListener("click", () => {
            if (this.onRestartClick) {
                this.onRestartClick();
                console.log("2");
            }
        });
    }

    update(game) {
        this.updateStatus(game);
        this.updateTurn(game);
        this.updateBoard(game);
    }

    updateTurn(game) {
        this.root.querySelector(".turn").textContent = `${game.turn}'s turn`;
    }

    updateStatus(game) {
        var editClass = this.root.querySelector(".inProgress");
        if (game.isInProgress()) {
            editClass.textContent = "in progress";
        }else{
            if (game.theWinningCompination()){
                editClass.textContent = `The Winner is ${game.turn}`;
            }else{
                editClass.textContent = "It's a draw...";
            }
        }
    }

    updateBoard(game){
        var winningCompompination = game.theWinningCompination();

        for (let i=0;i<game.board.length;i++){
            const space = this.root.querySelector(`.board__space[data-index="${i}"]`);
            space.classList.remove("winner");
            space.textContent = game.board[i];
            console.log(game.board[i]);

            if (winningCompompination && winningCompompination.includes(i)){
                space.classList.add("winner");
            }
        }
    }




}