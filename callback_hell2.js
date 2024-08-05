let h1 = document.querySelector("#h1");
let h2 = document.querySelector(".h2");
let h3 = document.querySelector(".h3");

let btn = document.querySelector(".btn");

// Adding an event listener to the button
btn.addEventListener("click", () => {
  console.log("btn clicked");
  // First asynchronous operation with a setTimeout
  setTimeout(() => {
    h1.style.color = "red"; // Changing the color of h1 after 2 seconds
    // Second asynchronous operation nested inside the first
    setTimeout(() => {
      h2.style.color = "blue"; // Changing the color of h2 after 1 second
      // Third asynchronous operation nested inside the second
      setTimeout(() => {
        h3.style.color = "yellow"; // Changing the color of h3 after 1 second
      }, 1000);
    }, 1000);
  }, 2000);
});

/*
 * This code demonstrates "callback hell" due to deeply nested callback functions.
 * Each asynchronous operation depends on the completion of the previous one,
 * leading to a pyramid-like structure that makes the code harder to read and maintain.
 * Solutions to avoid callback hell include using Promises or async/await.
 */
