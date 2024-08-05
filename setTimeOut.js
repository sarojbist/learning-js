function x() {
    var i = 1;
    setTimeout(function x() {
        console.log(i);
    },1000);
    console.log("Yeah! I'm faster")
}
x();