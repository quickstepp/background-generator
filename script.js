var css = document.querySelector("h3");
var color2 = document.getElementById("color2");
var color1 = document.getElementById("color1");
var body = document.getElementById("gradient");
var random1 = document.getElementById("random1");
var random2 = document.getElementById("random2");
var randomGradient = document.getElementById("randomGradient");


function setGradient() {
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
    css.textContent = "background: linear-gradient(to right, "
    + color1.value.toUpperCase() + ", " + color2.value.toUpperCase() + ");";
}

function getRandomColor() {
    return "#" + Math.floor(Math.random()*16777215).toString(16);
}

setGradient();

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
random1.addEventListener("click", function() {
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    color1.value = getRandomColor();
    setGradient();
})
randomGradient.addEventListener("click", function() {
    
    color2.value = getRandomColor();
    color1.value = getRandomColor();
    setGradient();
})