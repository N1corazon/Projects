var x = -1;
var y = 2;
var z = -3;
var status;
if (x>0 && y>0 && z>0){
    status = "positive";
}else if ((x>0 && y>0 && z<0)||(x>0 && y<0 && z>0)||(x<0 && y>0 && z>0)){
    status = "negative";
}else if ((x>0 && y<0 && z<0)||(x<0 && y>0 && z<0)||(x<0 && y<0 && z>0)){
    status = "positive";
}else{
    status = "negative";
}
console.log(status);

var total = x*y*z;
if (total>-1){
    status = "positive";
}else{
    status = "negative";
}
console.log(status);