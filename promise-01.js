const cart = ["shoes", "pants"];

const promise = createOrder(cart);

// .then takes a callback function that will be executed later on when promise is resolved
promise.then(function (orderId) {
    console.log(orderId);
})
    .catch(function (error) {
        console.log(error);
    })

// this function returns a promise
function createOrder(cart) {
    const check = true;
    const pr = new Promise(function (res, rej) {
        if (!check) {
            const err = new Error("Cart is not defined");
            rej(err);
        }
        const orderId = 123;
        if (orderId) {
            // when we add a timer here, the promise will only be resolved once the timer is completed.
            setTimeout(function () {
                res(orderId);
            }, 2000)
        }
    })
    return pr;
}