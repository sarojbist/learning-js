// we have array of radius
// const radius = [1,2,3,4]

// // to find area

// const AreaofCircle = function (radius) {
//     const output = [];
//     for (let i =0; i<radius.length; i++) {
//         output.push(Math.PI * radius[i] * radius[i])
//     }
//     return output;
// }
// console.log(AreaofCircle(radius));

// const diameterofCircle = function (radius) {
//     const output = [];
//     for (let i =0; i<radius.length; i++) {
//         output.push(2* radius[i] )
//     }
//     return output;
// }
// console.log(diameterofCircle(radius));

// here is problem, we are repeating ourselves
// 222222222222222222222222222222222222222222222222222


// const area = function(r) {
//     return (Math.PI * r * r);
// // Declaration Style: This is a function expression. The function is assigned to a constant variable area.
// Hoisting: Function expressions are not hoisted. This means the function cannot be called before it is defined.
// Scope: The function is scoped to the block where it is defined.

// }



const radius = [1,2,3,4];

function area(r) {
    return (Math.PI * r * r);
}
function diameter(r) {
    return (2 * r);
}
// here logic is callback function bcz it takes fun as argument and later call it
function calculate(radius, logic) {
    const output = [];
    for(let i =0; i < radius.length; i++) {
        output.push(logic(radius[i]));
    }
    return output;
}
console.log(calculate(radius, diameter));

// using map
const output = radius.map(diameter);
console.log(output);
