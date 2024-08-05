// Callback Hell (Pyramid of Doom)

// get cheese in 2 seconds

function getCheese(callback) {
    setTimeout(() => {
        const cheese = "🧀";   //win + .
        console.log("Here is cheese", cheese);
        //  when the cheese will be ready, it will pass to callback fun
        callback(cheese);
    }, 2000)
}

// lets create a function to make dough, the fun needs cheese as well

function makeDough(cheese, callback) {
    setTimeout(() => {
        const dough = cheese + "🍩";
        console.log("Here is the dough", dough);
        // informing through callback that dough is ready
        callback(dough);
    }, 2000)
}


// finally lets bake the pizza
function bakePizza(dough, callback) {
    setTimeout(() => {
        const pizza = dough + "🍕";
        console.log("Pizza is ready", pizza);
        callback(pizza);
    },2000)
}

// console.log(getCheese());   //gives undefined
// lets pass the callback function to getCheese function that will inform us when the cheese will be ready
getCheese((cheese) => {
    console.log("Got the cheese", cheese);
    makeDough(cheese, (dough) => {
        console.log("Got the dough", dough);
        bakePizza(dough, (pizza) => {
            console.log("Pizza is ready", pizza);
        })
    })
});
// here we see multiple nesting of our callback function that makes it uneasy to read. this is called callback hell.
// To tackle this problem, we'll use promises.