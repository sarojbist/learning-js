function hlo() {
  console.log(b); //5
  var c = 15;
  hi();
  function hi() {
    console.log(b); //5
  }
}
let b = 5;
hlo();
// console.log(c); //referr

{
    let abc = 5;
}
  

console.log(abc);