import ColorSwitch from "./colorSwitch.js";

var random = new ColorSwitch();

$(".newColor").click(function () {
    $(".colorDisplay").css("background-color", "#" + random.colorToSting());
});

$(".restart").click(function () {
    $(".colorDisplay").css("background-color", "white");
});

random.colorToSting();