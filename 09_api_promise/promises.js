const promiseOne = new Promise(function (resolve, reject) {
  //Do an async task
  // DB calls, cryptography, network
  setTimeout(function () {
    console.log("Async task is compelete");
    resolve();
  }, 1000);
});
// .then is connected with resolve()
promiseOne.then(function () {
  console.log("Promise consumed");
});
//  Async task is compelete
//  Promise consumed

/////////////////////////////////////////////////////////////////////////////////

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task 2");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Async 2 resolved");
});

/////////////////////////////////////////////////////////////////////////////////

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "Chai", email: "chai@example.com" });
    // passing object
  }, 1000);
});

promiseThree.then(function (user) {
  console.log(user); // we get the object
});

/////////////////////////////////////////////////////////////////////////////////

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true; // assume there is an error
    if (!error) {
      resolve({ username: "hitesh", password: "123" });
    } else {
      reject("ERROR: Something went wrong");
    }
  }, 1000);
});

// .then chaining
// value returned by a .then will be recieved by the next .then
promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(() => console.log("The promise is either resolved or rejected"));
// .finally always executed

/////////////////////////////////////////////////////////////////////////////////

const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "javascript", password: "123" });
    } else {
      reject("ERROR: JS went wrong");
    }
  }, 1000);
});

// handling promises using 'async' instead of '.then'
async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response); //   { username: "javascript", password: "123" }
  } catch (error) {
    console.log(error); // "ERROR: JS went wrong"
  }
}

consumePromiseFive();

/////////////////////////////////////////////////////////////////////////////////

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()     // this also takes time
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

//getAllUsers()

// same as above but using .then instead of async
fetch("https://api.github.com/users/hiteshchoudhary")   // execute in high priority queue
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => console.log(error));

// promise.all
// yes this is also available, kuch reading aap b kro.
