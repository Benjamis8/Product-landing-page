document.getElementById("hello").style.backgroundColor = "red";

let things = document.getElementsByClassName("things");

for(let i = 0; i < things.length; i++){
    things[i].style.backgroundColor = "yellow";
}

let sample = document.querySelector("#sample");
sample.style.fontSize = "50px";

let orange = document.getElementById("target");
orange.classList.add("orange");

let target2 = document.getElementById("target2");
target2.classList.remove("orange");