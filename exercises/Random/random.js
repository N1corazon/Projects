var yeet = (num) => {
    return num*2;
}
console.log(yeet(23));

function cool(very){
    very();
}
cool(() => console.log("swwet"));

for (let i=0;i<5;i++){
    console.log(i);
}