// Example of Callback Hell (Pyramid of Doom)

// Function to get cheese in 2 seconds
function getCheese(callback) {
    setTimeout(() => {
        const cheese = "🧀";   // win + .
        console.log("Here is cheese", cheese);
        // Pass the cheese to the callback function
        callback(cheese);
    }, 2000);
}

// Function to make dough, requires cheese, and takes 2 seconds
function makeDough(cheese, callback) {
    setTimeout(() => {
        const dough = cheese + "🍩";
        console.log("Here is the dough", dough);
        // Pass the dough to the callback function
        callback(dough);
    }, 2000);
}

// Function to bake pizza, requires dough, and takes 2 seconds
function bakePizza(dough, callback) {
    setTimeout(() => {
        const pizza = dough + "🍕";
        console.log("Pizza is ready", pizza);
        // Pass the pizza to the callback function
        callback(pizza);
    }, 2000);
}

// Start the process by getting cheese
// we are passing arrow function to getCheese function. The function will be called there and we'll get cheese as an argument.
getCheese((cheese) => {
    console.log("Got the cheese", cheese);
    // As we already have cheese, we can pass it to make dough
    makeDough(cheese, (dough) => {
        console.log("Got the dough", dough);
        // Bake pizza after getting dough
        bakePizza(dough, (pizza) => {
            console.log("Pizza is ready", pizza);
        });
    });
});

// The above code demonstrates callback hell due to multiple levels of nested callbacks.
// This nesting makes the code difficult to read and maintain.
// To solve this problem, we can use promises or async/await.
