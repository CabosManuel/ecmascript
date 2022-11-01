const promise1 = new Promise((resolve, reject) => reject("Reject")); // fail
const promise2 = new Promise((resolve, reject) => resolve("Resolve")); // success
const promise3 = new Promise((resolve, reject) => resolve("Resolve 2")); // success

Promise.any([promise1, promise2, promise3])
  .then(res => console.log(res));