function GCD(a, b) {
    var array = [1];
    var x = 0;
    var y = 1;
    while (x === 0) {
        y++;
        if ((a % y === 0) && (b % y === 0)) {
            array.push(y);
            console.log(y + " yes")
        } else if (y === a || y === b) {
            x = 1;
            console.log("only "+ array.length);
        }
    }
    return array;
}

var a = Math.floor(Math.random() * 100) + 1;
var b = Math.floor(Math.random() * 100) + 1;
console.log(a);
console.log(b);

console.log(GCD(2154,458));
