
// first way to create promise
// const promiseOne = new Promise(function (resolve, reject) {

//     setTimeout(function () {
//         console.log("async task is completed");
//         resolve();
//     }, 2000);

// });

// promiseOne.then(function () {
//     console.log("promise consumed");
// });


// second way to create promise


//  new Promise(function (resolve, reject){
//      setTimeout(function (){ 
//          console.log("async task");

//           resolve ()

//      },
//      2000);


      
//  }).then (function (){
//      console.log ("promise 2 consumed");
//  })

// third way to create promise where send data from resolve to .then 

//  const promiseThree = new Promise(function (resolve, reject) {

//     setTimeout(function () {
//         resolve({ username: "om", email: "omsingh@gmail.com" });
//     }, 2000);

// });

// promiseThree.then(function (data) {
//     console.log(data);
// });

 //4th way to write promise in js

  const promiseFour = new Promise(function (resolve, reject) {

    setTimeout(function () {
        let error = false;

        if (!error) {
            resolve({ username: "om singh", password: "q22222" });
        } else {
            reject("Error: something went wrong");
        }

    }, 2000);

});

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
    });