var pageCounter = 1;
var animalContainer = $("body");
var btn = $("#btn");

btn.click( function (){
    var our = new XMLHttpRequest();
    our.open("get", "https://learnwebcode.github.io/json-example/animals-" +pageCounter+ ".json");
    our.onload = function () {
        var ourData = JSON.parse(our.responseText);
        console.log(ourData[0]);
        renderHTML(ourData)
    }
    our.send();
    pageCounter++;
    if (pageCounter > 3 ){
        pageCounter = 1;
    }
});

function renderHTML(data) {
    var htmlString = "";
    for (let i = 0; i < data.length; i++){
        htmlString += "<p>" + data[i].name + " is a " + data[i].species + "</p>";
    }
    animalContainer.append(htmlString);
}









// var myDog = {
//     "name": "Lancelot",
//     "species": "dog",
//     "favFood": "bones"
// }
//
// var myFavColors = ["blue", "green", "purple"];
//
// var thePets = [
//     {
//         "name": "Lancelot",
//         "species": "dog",
//         "favFood": "bones"
//     },
//     {
//         "name": "Bubbies",
//         "species": "dog",
//         "favFood": "bubbles"
//     },
//     {
//         "name": "Yeet",
//         "species": "dog",
//         "favFood": "asdadsa"
//     }
// ];
// thePets[1].favFood;