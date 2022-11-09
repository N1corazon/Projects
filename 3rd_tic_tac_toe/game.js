export default class Asad {

    constructor() {
        this.turn = "X";
        this.board = new Array(9).fill(null);
    }

    makeMove(m) {
        if (!this.isInProgress()) {
            return this.turn;
        }
        if (this.board[m] === null) {
            this.board[m] = this.turn;

            if (!this.theWinningCompination()) {
                this.nextTurn();
            }
        }
        console.log(m);
    }

    nextTurn() {
        return this.turn = this.turn === "X" ? "O" : "X";
    }

    theWinningCompination() {
        const winningCompination = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        for (const compination of winningCompination) {
            const [a, b, c] = compination;

            if (this.board[a] && (this.board[b] === this.board[a] && this.board[c] === this.board[a])) {
                return compination;
            }
        }
    }

    isInProgress() {
        return !this.theWinningCompination() && this.board.includes(null);
    }

}