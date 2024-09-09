setTimeout(function() {
    console.log("I'm a settimeout");
},2000);

function x(y) {
    console.log("I'm x");
    y();
}

x(function y() {
console.log("I'm y");
})

var btn = document.getElementById("btn").addEventListener("click", function xyz() {
    console.log("Btn clicked man");
    document.getElementById("new").innerText = "Hloooo";
})