function happyNumber(num) {
    var n;
    var m;
    var array = [];

    while (num !== 1 && array[num] !== true) {
        m = 0;
        array[num] = true;
        while (num > 0) {
            n = num % 10;
            m += n * n;
            num = parseInt(num / 10);
        }
        num = m;
    }

    return num;
}

var count = 0;
let numb = 0;
while(count !== 20) {
    numb++;
    if (happyNumber(numb) === 1) {
        console.log(numb);
        count++;
    } else {
        // console.log(numb+"not");
    }
}