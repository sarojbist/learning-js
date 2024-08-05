const arr = [1,2,3,9,4,5,6];

// function add() {
//     let sum = 0;
   
//     for(let i =0; i<arr.length; i++) {
//        sum = sum + arr[i];
//     //    arr[i] is the current

//     }
//     console.log(sum)
// }

// add();

// const output = arr.reduce(function(acc, curr) {
//     // here  accumulator acts as a sum=0 
//     acc = acc + curr;
//     return acc;
// });
// console.log(output);

// finding highest number in arr
// function maxx() {
//     let num = 0;
//     for(let i =0; i<arr.length; i++) {
//        if(arr[i] > num) {
//         num = arr[i] 
//        }

//     }
//     console.log(num)
// }
// maxx();


const max = arr.reduce(function(acc, curr) {
 if(curr > acc) {
    acc = curr;
 }
 return acc;
},0);
console.log(max);