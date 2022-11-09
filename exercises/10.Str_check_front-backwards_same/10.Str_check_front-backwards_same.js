function check(str){
    var b = str;
    var a = str.split("").reverse().join("");
    if (a === b){
        console.log(a);
        console.log(b);
    }else{
        console.log("nope");
    }
}

check("asddsddsa");