// Suppose a situation where we have to check if the user exists or not then if user exists then only, we have to show his email address.

//function to check if user exits or not.
function checkUser(user) {
    const pr = new Promise(function (resolve, reject) {
        if (user === "Saroj") {
            console.log("Yes, user exists.")
            resolve(123); //suppose this is user's id that will be required to get the email
        }
        else {
            reject("User does not exist");
        }
    })
    return pr;
}

// function to give user's email
function userEmail(id) {

    const pr = new Promise(function (resolve, reject) {
        if (id === 123) {
            resolve("example@gmail.com"); //passing the email
        }
        else {
            reject("Error fetching the email address");
        }
    })
    return pr;

}

const promise = checkUser("Saroj");

promise
    .then((id) => {
        //once user exits, we can send his userid to another function that gives us user email
        console.log(id)
        return userEmail(id);
    })
    .then((email) => {
        console.log("Here is your Email:", email); //yeah, we got the email of user
    })
    .catch((err) => {
        console.log(err);
    })

