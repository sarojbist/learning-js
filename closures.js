
// function abc() {
//     var a = 5;
//    return function b() {
//         console.log(a)
//     }

// }
// let newFun = abc();

// // newFun()
// console.log(newFun);

function outerFunction() {
    const message = "hi";
    function innerFunction(name) {
        console.log(message, name);
    }
    return innerFunction;
}
const greet = outerFunction();
greet("Saroj")