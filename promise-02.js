// creating a function that returns a promise
function fetchData() {
    const success = true;
    // creating a promise
    const pr = new Promise(function (response, reject) {
        if (!success) {
            const err = "It could be any error";
            reject("Error due to: " + err);
        } else {
            setTimeout(function () {
                response("Successfully fetched the data")
            }, 2000) //suppose there is delay of 2 seconds
        }
    })
    return pr;
}

const promise = fetchData(); //calling a promise

// lets see how can we consume a promise
promise
    .then((success) => {
        console.log("Promise is Resolved and", success);
    })
    .catch((failure) => {
        console.log("Promise is Rejected.", failure);
    })