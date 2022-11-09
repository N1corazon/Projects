export default class GameView {
    constructor(root) {
        this.root = root;
        this.root.innerHTML = `
        <div class="wrapper">
    <div class="container">
        <div class="row">
        <div class="col-3 p-0">
        <div id="restart">
        Restart
</div>
</div>
        <div class="col-3 p-0">
        <div id="time">
        Time: 0
</div>
</div>
        <div class="col-3 p-0">
        <div id="difficulty">
        Difficulty
</div>
</div>

<div class="col-3 p-0">
<div id="lives">

</div>
</div>
            <div class="col-12 p-0">
                <div id="game" class="game">
                    
                </div>
            </div>
        </div>
    </div>
</div>
        `;

        // this.onCardClick = undefined;

        // this.root.querySelectorAll(".gameBoxes").forEach(card => {
        //     card.addEventListener("click", () => {
        //
        //             console.log("asdsa");
        //         this.onCardC lick(jQuery(this).attr("data-index"));
        //
        //     })
        // })

        // $("#game").on("click", '.gameBoxes', function (event) {
        //     if (array.length === 2){
        //         if (array[0] === array[1]){
        //
        //         }
        //     }else{
        //         array.push(event.target.dataset.index);
        //
        //     }
        //
        //
        //     // this.onCardClick(jQuery(this).attr("data-index"));//works
        //     //  this.onCardClick(event.target.dataset.index);//works
        //     // console.log(jQuery(this).attr("data-index"));
        //     console.log(event.target.dataset.index);
        //
        //
        // });//old Code(did not work)

    }

    update(game, hearts) {
        this.boxes(game);
        this.lives(hearts);
        return this.time();
    }

    // restart(total, hearts) {
    //     this.clearNumbers(total);
    //     this.lives(hearts);
    //     return this.time();
    // }

    boxes(obj) {
        jQuery("#game").empty();
        const col = this.createCol();
        const row = this.createRow(obj[1]);
        let n = 0;
        for (let i = 0; i < obj[1]; i++) {
            row.attr("data-row", i);
            $("#game").append(row.clone());
            for (let k = 0; k < obj[2]; k++) {
                col.attr("data-index", n);
                $(`.row[data-row=${i}]`).append(col.clone());
                n++;
            }
        }
    }

    createCol() {
        return jQuery("<div>", {
            class: "col gameBoxes"
        });
    }

    createRow(rows) {
        return jQuery("<div>", {
            class: "row",
            height: (window.innerHeight - 45) / rows + "px"
        });
    }

    viewNumber(num, index) {
        $(`[data-index="${index}"]`).text(num);
    }

    hideNumber(index) {
        setTimeout(function () {
            for (let i = 0; i < index.length; i++) {
                $(`[data-index="${index[i]}"]`).text("");
            }
        }, 1000);
    }

    // clearNumbers(total) {
    //     for (let i = 0; i < total; i++) {
    //         $(`[data-index="${i}"]`).text("");
    //     }
    // }

    time() {
        let i = 0;
        return setInterval(function () {
            if (!jQuery("#restartBtn").length) {
                $("#time").text(`Time: ${i}`);
                i++;
            }
        }, 1000);
    }

    lives(livesAmount) {
        jQuery("#lives").empty();
        const width = 50 < $("#lives").innerWidth() / livesAmount ? 50 + "px" : $("#lives").innerWidth() / livesAmount + "%";
        for (let i = 1; i <= livesAmount; i++) {
            jQuery("<div>", {
                class: "cRed cGray",
                width: width
            }).attr("data-lives", i).clone().appendTo("#lives");
        }
    }

    createRestartBtn() {
        jQuery("<div>", {
            id: "restartBtn",
            class: "restartBtn",
            text: "Restart"
        }).appendTo("#game");
    }

    showAll(a, b, array) {
        const total = a * b;
        return setInterval(function () {
            for (let i = 0; i < total; i++) {
                $(`[data-index="${i}"]`).text(array[parseInt(`${i / a}`)][i % b]);
            }
        },1);
    }

    createWinner(){
        jQuery("<div>", {
            id: "restartBtn",
            class: "restartBtn",
            text: "You've WON Restart"
        }).appendTo("#game");
    }
}
