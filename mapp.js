const arr = [1,2,3];

// const output = arr.map((value, index) => {
//     console.log(value, index);
// })

// const output = arr.map(function(x) {
//     console.log(x * 2);
// })

function double(x) {
    return x*2;
}
const output = arr.map(double);
console.log(output);