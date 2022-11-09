var year = Math.floor(Math.random() * 1000);
console.log(year * 2);
console.log(year);
console.log(year % 4);

let status = "";
let not = "not a leap year: ";
let its = "its a leap year: ";
//first attempt
if (year % 4 === 0){
    if (year % 100 === 0){
        if (year % 400 === 0){
            status = its;
        }else{
            status = not;
        }
    }else{
        status = its;
    }
}else{
    status = not;
}
//second attempt
console.log((year % 100 === 0)? (year % 400 === 0): (year % 4 === 0));

console.log(status + year);
