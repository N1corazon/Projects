var x = 123145165789;
x= x.toString();// To string
var a  = x.split("");//To array
let y = [];
console.log(a);
console.log(a.reverse());

var i = 0;
var p = a.length;
while (p > i){
    i++;
    y.push(a.pop());
}

console.log(y);