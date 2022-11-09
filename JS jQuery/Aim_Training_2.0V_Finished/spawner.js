export default class Spawner {
    randomShape() {// gia ton slav
        switch (Math.floor(Math.random() * 3) + 1) {
            case 1:
                console.log("yes");
                this.createCircle();
                break;
            case 2:
                console.log("yes");
                this.createSquare();
                break;
            case 3:
                console.log("yes");
                this.createRectangle();
                break;
            default:
                this.createSquare();
        }
    }

    //Random color selector
    color() {//creates an array with six values
        const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

        let colorCom = [];
        for (let i = 0; i < 6; i++) {
            let number = Math.floor(Math.random() * 16);
            colorCom[i] = hex[number];
        }
        return colorCom.join("");
    }

    //Common variables
    createShape() {
        var div = document.createElement("div");
        div.style.background = "#" + this.color();
        div.classList.add('remove');
        div.style.top = this.createTop() + "px";
        div.style.left = this.createLeft() + "px";
        return div;
    }

    createCircle() {
        const minW = 50;
        const maxW = 101;
        const circle = Math.floor(Math.random() * (maxW - minW)) + minW;
        let div = this.createShape();
        div.style.width = circle + "px";
        div.style.height = circle + "px";
        div.style.borderRadius = "50%";
        $("#game").append(div);
    }

    createTriangle() {
        const minW = 50;
        const maxW = 101;
        const triangle = Math.floor(Math.random() * (maxW - minW)) + minW;
        let div = this.createShape();
        div.style.borderRight = triangle / 2 + "px solid white";
        div.style.borderLeft = triangle / 2 + "px solid white";
        div.style.borderBottom = triangle + "px solid " + div.style.background;
        $("#game").append(div);
    }

    createSquare() {
        const minW = 30;
        const maxW = 71;
        const square = Math.floor(Math.random() * (maxW - minW)) + minW;
        let div = this.createShape();
        div.style.width = square + "px";
        div.style.height = square + "px";
        $("#game").append(div);
    }

    createRectangle() {
        const minW = 50;
        const maxW = 101;
        const rectangle = Math.floor(Math.random() * (maxW - minW)) + minW;
        let div = this.createShape();
        div.style.width = rectangle + "px";
        div.style.height = (rectangle - 30) + "px";
        $("#game").append(div);
    }

    //Create start btn
    createStart() {
        var div = document.createElement("div");
        div.id = "start";
        div.classList.add('start');
        div.textContent = "START";
        $("#game").append(div);
    }

    //Margin-top
    createTop() {
        const minMH = 0;
        const maxMH = window.innerHeight - 145;
        return Math.floor(Math.random() * maxMH);
    }

    //Margin-left
    createLeft() {
        const minMW = 0;
        const maxMW = window.innerWidth - 100;
        return Math.floor(Math.random() * maxMW);
    }


}