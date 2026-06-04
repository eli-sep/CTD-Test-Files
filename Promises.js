// Below is an example of a promise that resolves after 2 seconds
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise resolved!");
  }, 2000);
});

// To consume the promise, we can use .then() and .catch()
myPromise
  .then((message) => {
    console.log(message); // This will log "Promise resolved!" after 2 seconds
  })
  .catch((error) => {
    console.error("Promise rejected:", error);
  });

// Example of a promise that rejects after 2 seconds
const myRejectedPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Promise rejected!");
  }, 2000);
});

myRejectedPromise
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.error(error); // This will log "Promise rejected!" after 2 seconds
  });

// Example of using async/await to consume a promise
async function consumePromise() {
  try {
    const message = await myPromise;
    console.log("Async/Await:", message); // This will log "Promise resolved!" after 2 seconds
  } catch (error) {
    console.error("Async/Await Error:", error);
  }
}

consumePromise();           


// Below is an example of using setTimeout without promises, which can lead to callback hell
setTimeout(() => {
  console.log("First timeout");
  setTimeout(() => {
    console.log("Second timeout");
    setTimeout(() => {
      console.log("Third timeout");
    }, 2000);
  }, 2000);
}, 2000);

// The above code can be refactored using promises to avoid callback hell
function timeoutPromise(message, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(message);
    }, delay);
  });
}

timeoutPromise("First timeout", 2000)
  .then((message) => {
    console.log(message);
    return timeoutPromise("Second timeout", 2000);
  })
  .then((message) => {
    console.log(message);
    return timeoutPromise("Third timeout", 2000);
  })
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.error("Error:", error);
  });       

  // This is an example of the setTimeout syntax
setTimeout(() => {
  console.log("This will be logged after 2 seconds");
}, 2000);   

//Is setTimeout a promise? No, setTimeout is not a promise. It is a built-in JavaScript function that allows you to execute a function after a specified delay. However, you can wrap setTimeout in a promise to create a promise-based version of it, as shown in the timeoutPromise function above.

//Is setTimeout asynchronous? Yes, setTimeout is asynchronous. When you call setTimeout, it schedules the provided function to be executed after the specified delay, allowing the rest of the code to continue executing without waiting for the timeout to complete.

//Is setTimeout a callback? Yes, setTimeout uses a callback function. The function you pass to setTimeout is called a callback function because it is executed after the specified delay, allowing you to perform actions asynchronously.

//Does setTimeout use an API? Yes, setTimeout is part of the Web APIs provided by the browser. It is not a native JavaScript function but rather an API that allows you to schedule code execution after a certain amount of time.

//IS setTimeout an API or a built-in function? setTimeout is an API provided by the browser, not a built-in JavaScript function. It is part of the Web APIs that allow you to perform asynchronous operations in JavaScript.

//Why did you say setTimeout is a built-in function? I apologize for the confusion. I misspoke earlier. setTimeout is not a built-in JavaScript function; it is an API provided by the browser. It is part of the Web APIs that allow you to perform asynchronous operations in JavaScript. Thank you for pointing that out!

//Ok then, correct the answer to this question: "Is setTimeout a promise?" No, setTimeout is not a promise. It is an API provided by the browser that allows you to schedule a function to be executed after a specified delay. However, you can wrap setTimeout in a promise to create a promise-based version of it, as shown in the timeoutPromise function above.

//Ok FreeCodeCamp says that setTimeout is a built-in method. You said it was neither built-in nor a meh

