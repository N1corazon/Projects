export default class Spawner {
    square() {
        const minW = 30;
        const maxW = 71;
        let squareWidth = Math.floor(Math.random() * (maxW - minW)) + minW;
        console.log(squareWidth);
        return squareWidth;
    }

    circle() {
        const minW = 50;
        const maxW = 101;
        let circleWidth = Math.floor(Math.random() * (maxW - minW)) + minW;
        return circleWidth;
    }

    rectangle() {
        const minW = 50;
        const maxW = 101;
        let rectangle = Math.floor(Math.random() * (maxW - minW)) + minW;
        return rectangle;
    }

    randomShape() {
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

    color() {//creates an array with six values
        const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

        let colorCom = [];
        for (let i = 0; i < 6; i++) {
            let number = Math.floor(Math.random() * 16);
            colorCom[i] = hex[number];
        }
        return colorCom;
    }

    colorToSting() {//turns array to a string
        let str = this.color().join("");
        console.log(str);
        return str;
    }

    createCircle() {
        var div = document.createElement("div");
        const circle = this.circle();
        div.style.width = circle + "px";
        div.style.height = circle + "px";
        div.style.background = "#" + this.colorToSting();
        div.style.borderRadius = "50%";
        div.classList.add('remove');
        div.style.top = this.createTop() + "px";
        div.style.left = this.createLeft() + "px";
        $("#game").append(div);
    }

    createSquare() {
        var div = document.createElement("div");
        const square = this.square();
        div.style.width = square + "px";
        div.style.height = square + "px";
        div.style.background = "#" + this.colorToSting();
        div.classList.add('remove');
        div.style.top = this.createTop() + "px";
        div.style.left = this.createLeft() + "px";
        $("#game").append(div);
    }

    createRectangle() {
        var div = document.createElement("div");
        const rectangle = this.rectangle();
        div.style.width = rectangle + "px";
        div.style.height = (rectangle - 30) + "px";
        div.style.background = "#" + this.colorToSting();
        div.classList.add('remove');
        div.style.top = this.createTop() + "px";
        div.style.left = this.createLeft() + "px";
            $("#game").append(div);
    }

    createStart() {
        var div = document.createElement("div");
        div.id = "start";
        div.classList.add('start');
        div.textContent = "START";
        $("#game").append(div);
    }

    createTop() {
        const minMH = 0;
        const maxMH = window.innerHeight - 145;
        return Math.floor(Math.random() * maxMH);
    }

    createLeft() {
        const minMW = 0;
        const maxMW = window.innerWidth - 100;
        return Math.floor(Math.random() * maxMW);
    }
}