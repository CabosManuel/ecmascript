// Objects params --------------------------
let firstName = 'Manuel';
let age = 22;

obj = { firstName: firstName, age: age};

//es6
obj2 = {firstName, age};

console.log(obj);
console.log(obj2);

// ARROW FUNCTION ---------------------------
const names = [
  {name: 'Manuel', age: 22},
  {name: 'Oscar', age: 32}
];

let listOfNames = names.map(function (item) {
  console.log(item.name);
});

let listOfNames2 = names.map(item => console.log(item.name));

const listOfNames3 = (firstName, age, country) => {
  // ...
}

const listOfNames4 = firstName => {
  // ...
}

// examples
function square(num) {
  return num * num;
}

const square = (num) => {
  return num * num;
}

const square = num => num * num;
console.log(square(12)); // 144