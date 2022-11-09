
    document.querySelector(".button").addEventListener("click", () => {
        document.querySelector(".button").classList.add("waiting_screen");
        document.querySelector(".screen").classList.add("waiting_screen");

    });




function waitingTime() {
    let time = math.random();

    if (time > 0.5) {
        return 1;
    }
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

console.log(getRandomIntInclusive(5, 7));





