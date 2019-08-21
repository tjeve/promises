$(document).ready(function() {
    //Part 1 - .then() chaining
    var urls = [
        'https://dog.ceo/api/breed/beagle/images/random',
        'https://dog.ceo/api/breed/chow/images/random',
        'https://dog.ceo/api/breed/akita/images/random',
        'https://dog.ceo/api/breed/dingo/images/random',
        'https://dog.ceo/api/breed/eskimo/images/random'
      ];
    
    function BuildPromiseFromUrls (url) { //fetches a single url then logs it
        const response = $.get(url)
        .then(function () {console.log(url)}) //when returned console log it
        console.log(response)
        return response
        //the .then's are chained through the map function
    }
    
    const listOfPromises = urls.map(BuildPromiseFromUrls)

    // Part 2 - Promise.all()
    Promise.all(listOfPromises)
    .then(function() {
        console.log('all the data was fetched!')
        return listOfPromises
    })


    // return listOfPromises

    // Part 3 - Resolve Reject

    // console.log(Math.random() * 10)

    // // Pablo's Example -- delete when finished.
    
    // function onReject(error) {  //defines what to do if rejected
    //     console.log("error: ", error);
    // }

    // function onResolve(data) { //defines what to do if successfully resolved
    //     console.log("Promise: ", data);
    // }

    // function practicePromise (status) {  
    //     var myPromise = new Promise(function(resolve, reject) { //new Promise is used to create the promise. It takes a function with two parameters: resolve, and reject
    //         setInterval(function() {                            //explain what to do when resolved or rejected, or both.
    //             if (status) {
    //                 resolve("the status is " + status);
    //             } else {
    //                 reject("error 404");
    //             }
    //         }, 3000);                                           //define a timelimit (promises take time)
    //     });

    //     myPromise
    //         .then(onResolve)                                    //call .then() for when promise is resolved
    //         .catch(onReject);                                   //call .catch() for when promise is rejected


    //     // .then(function(answer) {
    //     //    const answer = x + y
    //     //     console.log(answer)
    //     // .catch(function (error){

    //     // })

    //     // return //sum of x and y

    //     // })
    // }

    // practicePromise(false);

    function onResolve (result) {
        console.log("Your result is ", result)
    }

    function onReject (error) {
        console.log("No NO NO NO!!!!", error)
    }     

    function addNumbers (x, y) {        //Step 1 Creates function that takes 2 numbers
        
        var myPromise = new Promise(function(resolve, reject) { //creates a promise that resolves to add numbers together if numbers, 
            if (typeof x === "number" && typeof y === "number") {
                resolve(x + y)
            } else {reject("Either x, y or both are not numbers!")}
        })
        return myPromise    //REMEMBER: functions without returns, return as undefined.
    }
    addNumbers(3, 7)    //This runs the function (which returns a promise)
        .then(onResolve)    //this explains what to do with the function if successful.
        .catch(onReject)    //this explains what to do with the function if rejected.

})