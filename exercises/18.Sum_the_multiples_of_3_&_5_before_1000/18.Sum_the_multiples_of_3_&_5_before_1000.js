function multiples(a, b, c){
    var total = 0;
    for (let i = 0; i<c;i++){
        if (i % a === 0 || i % b === 0){
            total += i;
        }
    }
return total;
}

console.log(multiples(3,5,1000));