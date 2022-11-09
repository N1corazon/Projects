var date = new Date();
var year = date.getFullYear();
var month = date.getMonth()+1;
var day = date.getDate();
if (day<10){
    day = '0' + day;
}
if (month<10){
    month= '0' + month;
}
var caliber = [day,month,year];
console.log(caliber.join("-"));
console.log(caliber.join("/"));


