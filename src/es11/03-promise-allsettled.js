const promise1 = new Promise((resolve, reject) => reject("Reject")); // fail
const promise2 = new Promise((resolve, reject) => resolve("Resolve")); // success
const promise3 = new Promise((resolve, reject) => resolve("Resolve 2")); // success

Promise.allSettled([promise1, promise2, promise3])
  .then(response =>  console.log(response));

/*
(3) [{...}, {...}, {...}]
  0: (2) {status: "rejected", reason: "Reject'}
    status: "rejected"
    reason: "Reject"
  1: (2) {status: "fulfilled", value: "Resolve'}
    status: "fulfilled"
    value: "Resolve"
  2: (2) {status: "fulfilled", value: "Resolve 2'}
    status: "fulfilled"
    value: "Resolve 2"
*/