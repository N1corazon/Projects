console.time("yeet")
function armStrong(num){

    var x = num+"";
    x = x.split("");
    var z = 0;
    for (let i = 0; i < x.length; i++){
        z += Math.pow(x[i],3);
    }
    return z;
}
var count =0;
var num = 1;
while(count !== 5 ){
    if (num === armStrong(num) ){
        console.log(num + "    "+ armStrong(num));
        count++;
    }
    num++;

}
console.timeEnd("yeet");

