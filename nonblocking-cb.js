function callme() {
    setTimeout(function() {
        console.log("I'm called");
    },1000)
    
}

function caller(cb){
cb()
}

caller(callme);
console.log("hlo")